<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card :data-background-color="['red', 'gray', 'green'][obj.camera]">
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
                })(obj.camera)
              }} 
            </h4>
          </template>
          <template slot="footer">
            <div class="stats">
            
              <select v-model="CAMERA_TYPE" style="width: 100%; border: solid 1px #111">
                  <option v-for="i in CAMERA_TYPES" :key="i" :selected="i== CAMERA_TYPE ">{{  i  }}</option>
              </select>
              <br />
              <ProgressButton
                @click=" restart_camera "
                ref="reboot_camera_button"
                name="bottom"
                class="md-danger md-round md-sm"
                :height=" 10 "
                :duration=" 4000 "
                position="top"
              >
                <md-icon>restart_alt</md-icon>
                Reboot
              </ProgressButton>
              &nbsp;
              <ProgressButton
                @click=" restart_camera "
                ref="reboot_camera_button"
                name="bottom"
                class="md-danger md-round md-sm"
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
        <stats-card :data-background-color="obj.armed ? 'red' : 'blue'">
          <template slot="header">
            <md-icon>album</md-icon>
          </template>

          <template slot="content">
            <p class="category">Arm Status</p>
            <h4 class="title">{{ obj.armed ? "Active" : "Deactive" }}</h4>
          </template>

          <template slot="footer">
            <div class="stats">
              <ProgressButton
                v-if="!obj.armed"
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
                v-if="obj.armed"
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
            <h4 class="title">{{ obj.cpu }} %</h4>
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
              {{ obj.load_current }}
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
            <h4 class="title">{{ Math.round(obj.memory) }} %</h4>
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
            <h4 class="title">{{ obj.primary_disk }} %</h4>
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
          :data-background-color="obj.temperature > 70 ? 'red' : 'green'"
        >
          <template slot="header">
            <md-icon>device_thermostat</md-icon>
          </template>

          <template slot="content">
            <p class="category">Temperature</p>
            <h4 class="title">{{ obj.temperature }} <small>&#8451;</small></h4>
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
import axios from "axios";
import { StatsCard } from "@/components";
import ProgressButton from "@/components/ProgressButton";

export default {
  components: {
    StatsCard,
    ProgressButton,
  },
  created() {
    this.getstats();
    this.intervaller = setInterval(this.getstats, 4000);
    axios
      .get("/api/camera_types")
      .then((r) => {
        this.CAMERA_TYPES = r.data.camera_types;
        this.CAMERA_TYPE = r.data.current;
      })
      .catch((e) => {
        this.$notification.error("Error in connection.", { timer: 10 });
      });

  },
  beforeDestroy() {
    clearInterval(this.intervaller);
  },
  computed: {
    huptime() {
      if (this.obj.uptime > 3600 * 24)
        return Math.floor(this.obj.uptime / (3600 * 24)) + " days";
      if (this.obj.uptime > 3600)
        return Math.floor(this.obj.uptime / 3600) + " hours";
      if (this.obj.uptime > 60)
        return Math.floor(this.obj.uptime / 60) + " min";
      return this.obj.uptime + "seconds";
    },
  },
  methods: {
    restart_camera() {
      this.$refs.reboot_camera_button.start();
      this.action("restart", "camera");
      this.show_progress();
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
      axios.get("/api/status_quo").then((r) => {
        this.obj = r.data;
      });
    },
    action(action, _var) {
      if (action == "arm") {
        if ((_var = "off")) this.$refs.arm_on_button.start();
        else this.$refs.arm_off_button.start();
      }
      axios.get("/maintenance?action=" + action + "&var=" + _var).then((r) => {
        this.obj = r.data;
        this.getstats();
      });
    },
  },
  data() {
    return {
      intervaller: null,
      progress: 0,
      CAMERA_TYPES: [],
      CAMERA_TYPE: "",
      obj: {
        armed: null,
        camera: null,
        cpu: null,
        load_current: null,
        memory: null,
        primary_disk: null,
        temperature: null,
        uptime: null,
      },
    };
  },
};
</script>
