import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import Toasted from 'vue-toasted';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    stat: {
      cpu: null,
      memory: null,
      primary_disk: null,
      temperature: null,
      uptime: null,
      load_current: null,
      armed: null,
      allowed_to_configure: null,
      provisioning: {
        state: true,
        allowed_to_change: false,
      },
      camera: {
        status: null,
        carrier: null,
        ethernet: null,
        ping: null,
      },
    },
    storageInfo: {
      oldest_record: null,
      latest_record: null,
      size: 0,
    },
    camera_types: [],
    camera_type: null,
    alarm_count: 0,
    alarms: [],
  },
  getters: {
    getStat (state)
    {
      return state.stat;
    },
    getCameraTypes (state)
    {
      return state.camera_types;
    },
    getCameraType (state)
    {
      return state.camera_type;
    },
    getAlarms (state)
    {
      return state.alarms;
    },
    getAlarmsCounts (state)
    {
      return state.alarm_count;
    },
    getStorageInfo (state)
    {
      return state.storageInfo;
    },
  },
  mutations: {
    setStats (state, v)
    {
      state.stat = v;
    },
    setCameraTypes (state, v)
    {
      state.camera_types = v.camera_types;
    },
    setCameraType (state, v)
    {
      state.camera_type = v.current;
    },
    setAlarms (state, v)
    {
      let key = 1;
      state.alarms = v.alarms.map((i) =>
      {
        return { ...i, id: key++ };
      });
    },
    setAlarmCount (state, v)
    {
      state.alarm_count = v;
    },
    setStorageInfo (state, data)
    {
      state.storageInfo.oldest_record = data.oldest_record;
      state.storageInfo.latest_record = data.latest_record;
      state.storageInfo.size = data.size;
    },
  },
  actions: {
    getAlaramsFromServer ({ commit })
    {
      axios.get("/api/alarms").then((r) =>
      {
        commit("setAlarms", r.data);
      });
    },
    getAlaramCountFromServer ({ commit })
    {
      axios.get("/api/alarms?detail=false").then((r) =>
      {
        commit("setAlarmCount", r.data.total);
      });
    },
    getStatsFromServer ({ commit })
    {
      axios.get("/api/status_quo").then((r) =>
      {
        commit("setStats", r.data);
      });
    },
    getCameraTypesFromServer ({ commit })
    {
      axios
        .get("/api/camera_types")
        .then((r) =>
        {
          commit("setCameraTypes", r.data);
          commit("setCameraType", r.data);
        })
        .catch((e) =>
        {
          this.$notification.error("Error in connection.", { timer: 10 });
        });
    },
    getStorageInfoFromServer ()
    {
      axios.get("/api/storage/info").then((r) =>
      {
        this.commit("setStorageInfo", r.data);
      });
    },
    sendCameraTypeToServer ({ dispatch, commit }, camera_type)
    {
      axios.post("/api/camera_types?camera=" + camera_type).then((r) =>
      {
        dispatch("getCameraTypesFromServer");
      });
    },
    sendCameraActionToServer ({ dispatch, commit }, payload)
    {
      axios
        .get("/maintenance?action=" + payload.action + "&var=" + payload.var)
        .then(() =>
        {
          dispatch("getStatsFromServer");
        });
    },
    sendDelAlarm ({ dispatch, commit }, payload)
    {
      axios.delete("/api/alarms/" + payload).then((r) =>
      {

        dispatch("getAlaramsFromServer");
      });
    },
    sendChangeProvisioning ({ state })
    {
      axios.get(
        "/api/provisioning?action=" +
        (state.stat.provisioning.state ? "false" : "true")
      );
    },
    sendRotate ({ state }, arrow)
    {
      axios.get("/maintenance?action=rotate&var=" + arrow);
    },
    clearStorageToServer (context, payload)
    {
      let qry =
        "end=" +
        payload.date.FORMAT() +
        " " +
        payload.time +
        ":00&" +
        "main_stream=" +
        payload.main_stream +
        "&" +
        "sub_stream=" +
        payload.substream +
        "&" +
        "alarms=" +
        payload.alarms +
        "&" +
        "snapshots=" +
        payload.snapshots;
      axios
        .delete("/api/storage?" + qry)
        .then((r) =>
        {
          dispatch("getStorageInfoFromServer")
        });
    },
  },
});
