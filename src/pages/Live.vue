<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card :data-background-color="obj.camera == 0 ? 'red' : 'green'">
          <template slot="header">
            <md-icon>video_camera_front</md-icon>
          </template>

          <template slot="content">
            <p class="category">Camera Status</p>
            <h4 class="title">
              {{ obj.camera == 0 ? "Disconnected" : "Connected" }}
            </h4>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-button
                class="md-danger md-round md-sm"
                @click="action('restart', 'camera')"
              >
                <md-icon>restart_alt</md-icon> Restart
              </md-button>
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
              <md-button
                v-if="!obj.armed"
                class="md-danger md-round md-sm"
                @click="action('armed', 'on')"
              >
                <md-icon>gps_fixed</md-icon> Arm
              </md-button>
              <md-button
                v-if="obj.armed"
                class="md-success md-round md-sm"
                @click="action('armed', 'off')"
              >
                <md-icon>gps_off</md-icon> Disarm
              </md-button>
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
            <h4 class="title">{{ obj.primary_disk }}</h4>
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

export default {
  components: {
    StatsCard,
  },
  created() {
    this.getstats();
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
    getstats() {
      axios.get("/api/status_quo").then((r) => {
        this.obj = r.data;
      });
    },
    action(action, _var) {
      axios.get("/maintenance?action=" + action + "&var=" + _var).then((r) => {
        this.obj = r.data;
      });
    },
  },
  data() {
    return {
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
