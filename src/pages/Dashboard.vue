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
            <h3 class="title">{{ obj.camera == 0 ? "Disconnected" : "Connected" }}</h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>update</md-icon>
              Just Updated
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
            <h3 class="title">{{ obj.armed }}</h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>update</md-icon>
              Just Updated
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
            <h3 class="title">{{ obj.cpu }} %</h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>date_range</md-icon>
              Last 24 Hours
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
            <h3 class="title">
              {{ obj.load_current }}
              <small></small>
            </h3>
          </template>

          <template slot="footer">
            <div class="stats">
              &nbsp;
            </div>
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
            <h3 class="title">{{ Math.round(obj.memory) }} %</h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>local_offer</md-icon>
              Tracked from Github
            </div>
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
            <h3 class="title">{{ obj.primary_disk }}</h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>update</md-icon>
              Just Updated
            </div>
          </template>
        </stats-card>
      </div>



      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card :data-background-color="obj.temperature > 70 ? 'red' : 'green'">
          <template slot="header">
            <md-icon>device_thermostat</md-icon>
          </template>

          <template slot="content">
            <p class="category">Temperature</p>
            <h3 class="title">{{ obj.temperature }}</h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>update</md-icon>
              Just Updated
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
            <h3 class="title">{{ obj.uptime }}</h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>update</md-icon>
              Just Updated
            </div>
          </template>
        </stats-card>
      </div>





    </div>
  </div>
</template>

<script>
import axios from "axios";
import {
  StatsCard,
} from "@/components";

export default {
  components: {
    StatsCard,
  },
  created () {
    axios
      .get('/api/status_quo')
      .then((r) => {
      	this.obj = r.data	
      })
  },
  data() {
    return {
      obj : {
	    "armed": null,
	    "camera": null,
	    "cpu": null,
	    "load_current": null,
	    "memory": null,
	    "primary_disk": null,
	    "temperature": null,
	    "uptime": null
      }
    };
  },
};
</script>
