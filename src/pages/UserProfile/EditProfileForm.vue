<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Configuration</h4>
        <p class="category">Device properties</p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Human ID</label>
              <md-input v-model="HUMANID"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>IoT Device ID</label>
              <md-input v-model="IOT_DEVICE_ID" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <label class="label" style="color: #aaa; font-size: 0.6875rem"
              >Camera Type</label
            >
            <v-select v-model="CAMERA_TYPE" :options="CAMERA_TYPES"></v-select>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Hardware</label>
              <md-input v-model="HARDWARE" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Hardware Version</label>
              <md-input v-model="HARDWARE_VERSION" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Extra Storage</label>
              <md-input v-model="EXTRA_STORAGE" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-50 md-size-50">
            <md-button @click="save_clicked" class="md-info">Save</md-button>
          </div>
          <div class="md-layout-item md-small-size-50 md-size-50">
            <md-button @click="reboot_clicked" class="md-info">Reboot</md-button>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>
<script>
import axios from "axios";
import "vue-select/dist/vue-select.css";

export default {
  name: "edit-profile-form",
  props: {
    dataBackgroundColor: {
      type: String,
      default: "",
    },
  },
  methods: {
    save() {
      axios
        .post("/api/configs", {
          HUMANID: this.HUMANID,
          IOT_DEVICE_ID: this.IOT_DEVICE_ID,
          CAMERA_TYPE: this.CAMERA_TYPE,
          HARDWARE: this.HARDWARE,
          HARDWARE_VERSION: this.HARDWARE_VERSION,
          MAIN_STORAGE: this.MAIN_STORAGE,
          EXTRA_STORAGE: this.EXTRA_STORAGE,
        })
        .then((r) => {
          this.$notify({
            message:
              "New Configuration saved. The installation process take about one minute...",
            icon: "add_alert",
            horizontalAlign: "center" ,
            verticalAlign: "top",
            type: "success",
            timeout: 7000
          });
          this.HUMANID = r.data.HUMANID;
          this.IOT_DEVICE_ID = r.data.IOT_DEVICE_ID;
          this.CAMERA_TYPE = r.data.CAMERA_TYPE;
          this.HARDWARE = r.data.HARDWARE;
          this.HARDWARE_VERSION = r.data.HARDWARE_VERSION;
          this.MAIN_STORAGE = r.data.MAIN_STORAGE;
          this.EXTRA_STORAGE = r.data.EXTRA_STORAGE;
        })
        .catch((e) => {
          this.$notify({
            message:
              "<big>Error in connection. </big><br>"  + e.message,
            icon: "signal_wifi_off",
            horizontalAlign: "right" ,
            verticalAlign: "top",
            type: "danger",
            timeout: 7000
          });
        });
    },

    reboot() {
      axios
        .get("/maintenance?action=restart&var=pi")
        .then((r) => {
          this.$notify({
            message:
              "Send reboot signal.",
            icon: "restart",
            horizontalAlign: "center" ,
            verticalAlign: "top",
            type: "success",
            timeout: 7000
          });
        })
        .catch((e) => {
          this.$notify({
            message:
              "<big>Error in connection. </big><br>"  + e.message,
            icon: "signal_wifi_off",
            horizontalAlign: "right" ,
            verticalAlign: "top",
            type: "danger",
            timeout: 7000
          });
        });
    },


    reboot_clicked() {
      this.$confirm(
          {
            message: 'Are you sure?',
            button: {
              no: 'No',
              yes: 'Yes'
            },
            callback: confirm => {
              if (confirm) {
                this.reboot();
              }
            }
          }
        )
      
    },
    save_clicked() {
      this.$confirm(
        {
          message: 'Are you sure?',
          button: {
            no: 'No',
            yes: 'Yes'
          },
          callback: confirm => {
            if (confirm) {
              this.save();
            }
          }
        }
      )
    },
  },
  created() {
    axios
      .get("/api/camera_types")
      .then((r) => {
        this.CAMERA_TYPES = r.data.camera_types;
      })
      .catch((e) => {
        this.$notify({
            message:
              "<big>Error in connection. </big><br>"  + e.message,
            icon: "signal_wifi_off",
            horizontalAlign: "right" ,
            verticalAlign: "top",
            type: "danger",
            timeout: 7000
          });
      });
    axios
      .get("/api/configs")
      .then((r) => {
        this.HUMANID = r.data.HUMANID;
        this.IOT_DEVICE_ID = r.data.IOT_DEVICE_ID;
        this.CAMERA_TYPE = r.data.CAMERA_TYPE;
        this.HARDWARE = r.data.HARDWARE;
        this.HARDWARE_VERSION = r.data.HARDWARE_VERSION;
        this.MAIN_STORAGE = r.data.MAIN_STORAGE;
        this.EXTRA_STORAGE = r.data.EXTRA_STORAGE;
      })
      .catch((e) => {
        this.$notify({
            message:
              "<big>Error in connection. </big><br>"  + e.message,
            icon: "signal_wifi_off",
            horizontalAlign: "right" ,
            verticalAlign: "top",
            type: "danger",
            timeout: 7000
          });
      });
  },
  data() {
    return {
      HUMANID: "",
      IOT_DEVICE_ID: "",
      CAMERA_TYPE: "",
      HARDWARE: "",
      HARDWARE_VERSION: "",
      MAIN_STORAGE: "",
      EXTRA_STORAGE: "",
      CAMERA_TYPES: [],
    };
  },
};
</script>
<style></style>
