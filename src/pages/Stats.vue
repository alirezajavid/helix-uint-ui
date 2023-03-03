<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card :data-background-color="['red', 'gray', 'green'][getStat.camera.status]">
          <template slot="header">
            <md-icon>video_camera_front</md-icon>
          </template>

          <template slot="content">
            <p class="category">Camera Status</p>
            <h4 class="title">
              {{
                ((status) => {
                  if (status == 0) return "Disconnected";
                  if (status == 1) return "Problem";
                  if (status == 2) return "Connected";
                  return status
                })(getStat.camera.status)
              }} 
            </h4>
          </template>
          <template slot="footer">
            <div class="stats">
              <span style="color:#111">Carrier:</span><md-icon :style="{color: getStat.camera.carrier?'green':'red'}">circle</md-icon> &nbsp;&nbsp;
              <span style="color:#111">Ethernet:</span><md-icon :style="{color: getStat.camera.ethernet?'green':'red'}">circle</md-icon>&nbsp;&nbsp;
              <span style="color:#111">Ping: {{ getStat.camera.ping }} ms</span>  <br />
              <select v-model="camera_type" style="width: 100%; border: solid 1px #111">
                  <option v-for="i in getCameraTypes" :key="i" :selected="i == getCameraType ">{{  i  }}</option>
              </select>
              <br />
              <ProgressButton
                @click="restart_camera"
                ref="reboot_camera_button"
                name="bottom"
                class="md-danger md-round md-sm"
                style="width:100px"
                :height=" 10 "
                :duration=" 4000 "
                position="top"
              >
                <md-icon>restart_alt</md-icon>
                Reboot
              </ProgressButton>
              &nbsp;
              <ProgressButton
                @click="set_camera_type"
                ref="update_camera_button"
                name="bottom"
                class="md-danger md-round md-sm"
                style="width:100px"
                :height=" 10 "
                :duration=" 4000 "
                position="top"
              >
                <md-icon>update</md-icon>
                Update
              </ProgressButton>
            </div>
          </template>
        </stats-card>
      </div>

      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card :data-background-color="getStat.armed ? 'red' : 'blue'">
          <template slot="header">
            <md-icon>album</md-icon>
          </template>

          <template slot="content">
            <p class="category">Arm Status</p>
            <h4 class="title">{{ getStat.armed ? "Active" : "Deactive" }}</h4>
          </template>

          <template slot="footer">
            <div class="stats">
              <ProgressButton
                v-if="!getStat.armed"
                @click="action('armed', 'on')"
                ref="arm_on_button"
                name="bottom"
                class="md-danger md-round md-sm"
                :height="10"
                :duration="4000"
                position="top"
              >
                <md-icon>gps_fixed</md-icon>
                Arm
              </ProgressButton>

              <ProgressButton
                v-if="getStat.armed"
                @click="action('armed', 'off')"
                ref="arm_off_button"
                name="bottom"
                class="md-success md-round md-sm"
                :height="10"
                :duration="4000"
                position="top"
              >
                <md-icon>gps_off</md-icon>
                Disarm
              </ProgressButton>
            </div>
          </template>
        </stats-card>
      </div>

      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="green">
          <template slot="header">
            <md-icon>developer_board</md-icon>
          </template>

          <template slot="content">
            <p class="category">CPU</p>
            <h4 class="title">{{ getStat.cpu }} %</h4>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon></md-icon>
              &nbsp;
            </div>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="orange">
          <template slot="header">
            <md-icon>earbuds_battery</md-icon>
          </template>

          <template slot="content">
            <p class="category">Load</p>
            <h4 class="title">
              {{ getStat.load_current }}
              <small></small>
            </h4>
          </template>

          <template slot="footer">
            <div class="stats">&nbsp;</div>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="red">
          <template slot="header">
            <md-icon>memory</md-icon>
          </template>

          <template slot="content">
            <p class="category">Memory</p>
            <h4 class="title">{{ Math.round(getStat.memory) }} %</h4>
          </template>

          <template slot="footer">
            <div class="stats">&nbsp;</div>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="blue">
          <template slot="header">
            <md-icon>data_usage</md-icon>
          </template>

          <template slot="content">
            <p class="category">Disk Usage</p>
            <h4 class="title">{{ getStat.primary_disk }} %</h4>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon></md-icon>
              &nbsp;
            </div>
          </template>
        </stats-card>
      </div>

      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card
          :data-background-color="getStat.temperature > 70 ? 'red' : 'green'"
        >
          <template slot="header">
            <md-icon>device_thermostat</md-icon>
          </template>

          <template slot="content">
            <p class="category">Temperature</p>
            <h4 class="title">{{ getStat.temperature }} <small>&#8451;</small></h4>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon></md-icon>
              &nbsp;
            </div>
          </template>
        </stats-card>
      </div>

      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="green">
          <template slot="header">
            <md-icon>timer</md-icon>
          </template>

          <template slot="content">
            <p class="category">Uptime</p>
            <h4 class="title">{{ huptime }}</h4>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>&nbsp;</md-icon>
            </div>
          </template>
        </stats-card>
      </div>
    </div>
  </div>
</template>

<script>
import { StatsCard } from "@/components";
import ProgressButton from "@/components/ProgressButton";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  watch: {
    getCameraType (newValue) { 
      this.camera_type = newValue
    }
  },
  components: {
    StatsCard,
    ProgressButton,
  },
  created() {
    this.getstats();
    this.intervaller = setInterval(this.getstats, 4000);
    this.getCameraTypesFromServer();
  },
  beforeDestroy() {
    clearInterval(this.intervaller);
  },
  computed: {
    ...mapGetters(['getStat', 'getCameraTypes', 'getCameraType']),
    huptime() {
      if (this.getStat.uptime > 3600 * 24)
        return Math.floor(this.getStat.uptime / (3600 * 24)) + " days";
      if (this.getStat.uptime > 3600)
        return Math.floor(this.getStat.uptime / 3600) + " hours";
      if (this.getStat.uptime > 60)
        return Math.floor(this.getStat.uptime / 60) + " min";
      return this.getStat.uptime + "seconds";
    },
  },
  methods: {
    ...mapActions(['getStatsFromServer', 'getCameraTypesFromServer', 'sendCameraTypeToServer', 'sendCameraActionToServer']),
    ...mapMutations(['setTest']),
    restart_camera() {
      this.$refs.reboot_camera_button.start();
      this.action("restart", "camera");
      this.show_progress();
    },
    set_camera_type ()
    {
      this.sendCameraTypeToServer(this.camera_type, 'ff')
    },
    show_progress() {
      if (this.progress < 100) {
        this.progress++;
        setTimeout(this.show_progress, 250);
      } else {
        this.progress = 0;
      }
    },
    getstats() {
      this.getStatsFromServer();
    },
    action(action, _var) {
      if (action == "arm") {
        if ((_var = "off")) this.$refs.arm_on_button.start();
        else this.$refs.arm_off_button.start();
      }
      this.sendCameraActionToServer({action: action, var: _var});
    },
  },
  data() {
    return {
      intervaller: null,
      progress: 0,
      camera_type: ''
    };
  },
};
</script>
