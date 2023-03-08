import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import Toasted from "vue-toasted";

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
    alarm_demand: {
      state: "",
      message: "",
    },
    camera_types: [],
    camera_type: null,
    alarm_count: 0,
    alarms: [],
  },
  getters: {
    getAlarmDemand(state) {
      return state.alarm_demand;
    },
    getStat(state) {
      return state.stat;
    },
    getCameraTypes(state) {
      return state.camera_types;
    },
    getCameraType(state) {
      return state.camera_type;
    },
    getAlarms(state) {
      return state.alarms;
    },
    getAlarmsCounts(state) {
      return state.alarm_count;
    },
    getStorageInfo(state) {
      return state.storageInfo;
    },
  },
  mutations: {
    setAlarmDemand(state, v) {
      state.alarm_demand.state = v.state;
      state.alarm_demand.message = v.message;
    },
    setStats(state, v) {
      state.stat = v;
    },
    setCameraTypes(state, v) {
      state.camera_types = v.camera_types;
    },
    setCameraType(state, v) {
      state.camera_type = v.current;
    },
    setAlarms(state, v) {
      let key = 1;
      state.alarms = v.alarms.map((i) => {
        return { ...i, id: key++ };
      });
    },
    setAlarmCount(state, v) {
      state.alarm_count = v;
    },
    setStorageInfo(state, data) {
      state.storageInfo.oldest_record = data.oldest_record;
      state.storageInfo.latest_record = data.latest_record;
      state.storageInfo.size = data.size;
    },
  },
  actions: {
    getAlaramsFromServer({ commit }) {
      axios.get("/api/alarms").then((r) => {
        commit("setAlarms", r.data);
      });
    },
    getAlaramCountFromServer({ commit }) {
      axios.get("/api/alarms?detail=false").then((r) => {
        commit("setAlarmCount", r.data.total);
      });
    },
    getStatsFromServer({ commit }) {
      axios.get("/api/status_quo").then((r) => {
        commit("setStats", r.data);
      });
    },
    getCameraTypesFromServer({ commit }) {
      axios
        .get("/api/camera_types")
        .then((r) => {
          commit("setCameraTypes", r.data);
          commit("setCameraType", r.data);
        })
        .catch((e) => {
          this.$toasted.show("Error in connection.", { duration: 10 });
        });
    },
    getStorageInfoFromServer() {
      axios.get("/api/storage/info").then((r) => {
        this.commit("setStorageInfo", r.data);
      });
    },
    sendCameraTypeToServer({ dispatch, commit }, camera_type) {
      axios.post("/api/camera_types?camera=" + camera_type).then((r) => {
        dispatch("getCameraTypesFromServer");
      });
    },
    sendCameraActionToServer({ dispatch, commit }, payload) {
      this._vm.$toasted.show("Send change camera action command to unit!");
      axios
        .get("/maintenance?action=" + payload.action + "&var=" + payload.var)
        .then(() => {
          this._vm.$toasted.show("Camera action changes successfully");
          dispatch("getStatsFromServer");
        });
    },
    sendDelAlarm({ dispatch, commit }, payload) {
      this._vm.$toasted.show("Send delete alarm command to unit!");
      axios.delete("/api/alarms/" + payload).then((r) => {
        this._vm.$toasted.show("Alarms deleted successfully.");
        dispatch("getAlaramsFromServer");
      });
    },
    sendChangeProvisioning({ state }) {
      this._vm.$toasted.show("Send switch provisioning command to unit!");
      axios.get(
        "/api/provisioning?action=" +
          (state.stat.provisioning.state ? "false" : "true").then(() => {
            this._vm.$toasted.show("provisioning changed.");
          })
      );
    },
    sendRotate({ state }, arrow) {
      this._vm.$toasted.show("Send rotate command to unit.");
      axios.get("/maintenance?action=rotate&var=" + arrow);
    },
    clearStorageToServer(context, payload) {
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
      this._vm.$toasted.show("Send clear storage command to unit.");
      axios.delete("/api/storage?" + qry).then((r) => {
        this._vm.$toasted.show("Storage cleared successfully.");
        dispatch("getStorageInfoFromServer");
      });
    },
    sendDemandAlarmToServer({ dispatch, commit }) {
      const token = localStorage.getItem("alarm_demand_token");
      if (token == null) {
        axios
          .get("/api/alarm_demand")
          .then((r) => {
            if (r.data.success === true) {
              this._vm.$toasted.show(
                "Send alarm demand command successfully." + r.data.token
              );
              localStorage.setItem("alarm_demand_token", r.data.token);
              commit("setAlarmDemand", { state: "pending", message: "" });
              setTimeout(() => {
                dispatch("sendDemandAlarmToServer");
              }, 1000);
            }
          })
          .catch((r) => {
            this._vm.$toasted.show("Error in connection.");
          });
      } else {
        // Inquiery
        axios
          .get("/api/alarms_inquiry?token=" + token)
          .then((r) => {
            if (r.data.success === true) {
              if (r.data.state == "pending")
                setTimeout(() => {
                  dispatch("sendDemandAlarmToServer");
                }, 1000);
              else localStorage.removeItem("alarm_demand_token");
              commit("setAlarmDemand", r.data);
            }
          })
          .catch((r) => {
            this._vm.$toasted.show("Error in connection.");
            setTimeout(() => {
              dispatch("sendDemandAlarmToServer");
            }, 4000);
          });
      }
    },
  },
});
