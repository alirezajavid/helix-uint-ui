<template>
  <form>
    <md-card>
      <md-card-header data-background-color="naghmeh2">
        <h4>
          <md-icon style="color: white">settings</md-icon>&nbsp;<B
            >Configuration</B
          >
        </h4>
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

          <div class="md-layout-item md-small-size-100 md-size-100">
            <label>Solar Control Mode:</label> &nbsp;&nbsp;
            <md-radio v-model="SOLAR_CTRL_LOAD_MODE" value="0">Manual</md-radio>
            &nbsp;
            <md-radio v-model="SOLAR_CTRL_LOAD_MODE" value="1">Timing</md-radio>
          </div>

          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Minimum Keeping Record Duration (hours)</label>
              <md-input
                v-model="MIN_CHUNKS_LIFETIME_IN_HOUR"
                type="text"
              ></md-input>
            </md-field>
          </div>

          <div class="md-layout-item md-small-size-50 md-size-50">
            <ProgressButton
              @click="save_clicked"
              ref="save_button"
              name="bottom"
              class="btn btn-warning mr-1 mb-1"
              :height="10"
              :disabled="!active_save"
              :duration="1000"
              position="top"
            >
              <md-icon>save</md-icon>
              Save
            </ProgressButton>
          </div>
          <div class="md-layout-item md-small-size-50 md-size-50">
            <ProgressButton
              @click="reboot_clicked"
              ref="reboot_button"
              name="bottom"
              class="btn btn-warning mr-1 mb-1"
              :height="10"
              :duration="20000"
              position="top"
            >
              <md-icon>restart_alt</md-icon>
              Reboot
            </ProgressButton>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>
<script>
import axios from "axios";
import "vue-select/dist/vue-select.css";
import ProgressButton from "../../components/ProgressButton";

export default {
  name: "edit-profile-form",
  components: {
    ProgressButton,
  },
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
          SOLAR_CTRL_LOAD_MODE: this.SOLAR_CTRL_LOAD_MODE,
          MIN_CHUNKS_LIFETIME_IN_HOUR: this.MIN_CHUNKS_LIFETIME_IN_HOUR,
        })
        .then((r) => {
          this.active_save = false;
          this.check_configurable_interval = setInterval(
            () => this.check_configurable(),
            6000
          );
        })
        .catch((e) => {
          this.$notification.error(e.message, { timer: 10 });
        });
    },

    reboot() {
      axios
        .get("/maintenance?action=restart&var=pi")
        .then((r) => {
          this.$notification.info("Send reboot signal.", { timer: 10 });
        })
        .catch((e) => {
          this.$notification.error("Error in connection.", { timer: 10 });
        });
    },

    reboot_clicked() {
      this.$confirm({
        message: "Are you sure?",
        button: {
          no: "No",
          yes: "Yes",
        },
        callback: (confirm) => {
          if (confirm) {
            this.$refs.reboot_button.start();
            this.reboot();
          }
        },
      });
    },
    save_clicked() {
      this.$confirm({
        message: "Are you sure?",
        button: {
          no: "No",
          yes: "Yes",
        },
        callback: (confirm) => {
          if (confirm) {
            this.$refs.save_button.start();
            this.save();
          }
        },
      });
    },

    check_configurable() {
      axios.get("/api/allowed_to_configure").then((r) => {
        this.active_save = r.data.state === true;
        if (this.check_configurable_interval && r.data.state === true)
          clearInterval(this.check_configurable_interval);
      });
    },
  },
  created() {
    this.check_configurable();

    axios
      .get("/api/camera_types")
      .then((r) => {
        this.CAMERA_TYPES = r.data.camera_types;
      })
      .catch((e) => {
        this.$notification.error("Error in connection.", { timer: 10 });
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
        this.SOLAR_CTRL_LOAD_MODE = r.data.SOLAR_CTRL_LOAD_MODE;
        this.MIN_CHUNKS_LIFETIME_IN_HOUR = r.data.MIN_CHUNKS_LIFETIME_IN_HOUR;
      })
      .catch((e) => {
        this.$notification.error("Error in connection.", { timer: 10 });
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
      progressv: 50,
      SOLAR_CTRL_LOAD_MODE: "0",
      MIN_CHUNKS_LIFETIME_IN_HOUR: 10,
      active_save: true,
      check_configurable_interval: null,
    };
  },
  mounted() {},
};
</script>
<style>
.__progress-button {
  border-radius: 3px;
  position: relative;
  margin: 10px 1px;
  height: 40px;
  width: 120px;
  line-height: 1.42857;
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0;
  will-change: box-shadow, transform;
  -webkit-transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
    -webkit-box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1);
  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
    -webkit-box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1);
  transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1),
    background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1),
    background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
    -webkit-box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1);
  color: #ffffff !important;
  background-color: #00bcd4 !important;
  box-shadow: 0 2px 2px 0 rgba(0, 188, 212, 0.14),
    0 3px 1px -2px rgba(0, 188, 212, 0.2), 0 1px 5px 0 rgba(0, 188, 212, 0.12);
  border: none;
}
</style>
