<template>
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
              <label>ICCID</label>
              <md-input v-model="ICCID" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <label class="label" style="color: #aaa; font-size: 0.6875rem"
              >Camera Type</label
            >
            <v-select v-model="CAMERA_TYPE" :options="CAMERA_TYPES"></v-select>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <label class="label" style="color: #aaa; font-size: 0.6875rem"
              >Hardware</label
            >
            <v-select v-model="HARDWARE" :options="HARDWARE_TYPES"></v-select>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <label class="label" style="color: #aaa; font-size: 0.6875rem"
              >Board</label
            >
            <v-select v-model="BOARD" :options="BOARD_TYPES"></v-select>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Extra Storage</label>
              <md-input v-model="EXTRA_STORAGE" type="text"></md-input>
            </md-field>
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
</template>
<script>
import axios from "axios";
import "vue-select/dist/vue-select.css";
import ProgressButton from "../../components/ProgressButton";

export default {
  name: "General",
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
          ICCID: this.ICCID,
          BOARD: this.BOARD,
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
          this.$toasted.show(e.message, { duration: 10 });
        });
    },

    reboot() {
      axios
        .get("/maintenance?action=restart&var=pi")
        .then((r) => {
          this.$toasted.show("Send reboot signal.", { duration: 10 });
        })
        .catch((e) => {
          this.$toasted.show("Error in connection.", { duration: 10 });
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
      axios.get("/api/configs/allowed_to_change").then((r) => {
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
        this.$toasted.error("Error in connection.", { duration: 10 });
      });
      axios
      .get("/api/board_types")
      .then((r) => {
        this.BOARD_TYPES = r.data.board_types;
      })
      .catch((e) => {
        this.$toasted.error("Error in connection.", { duration: 10 });
      });
    axios
      .get("/api/hardware_types")
      .then((r) => {
        this.HARDWARE_TYPES = r.data.hardware_types;
      })
      .catch((e) => {
        this.$toasted.error("Error in connection.", { duration: 10 });
      });
    axios
      .get("/api/configs/general")
      .then((r) => {
        this.HUMANID = r.data.HUMANID;
        this.ICCID = r.data.ICCID;
        this.CAMERA_TYPE = r.data.CAMERA_TYPE;
        this.HARDWARE = r.data.HARDWARE;
        this.HARDWARE_VERSION = r.data.HARDWARE_VERSION;
        this.MAIN_STORAGE = r.data.MAIN_STORAGE;
        this.EXTRA_STORAGE = r.data.EXTRA_STORAGE;
        this.SOLAR_CTRL_LOAD_MODE = r.data.SOLAR_CTRL_LOAD_MODE;
        this.MIN_CHUNKS_LIFETIME_IN_HOUR = r.data.MIN_CHUNKS_LIFETIME_IN_HOUR;
      })
      .catch((e) => {
        this.$toasted.show("Error in connection.", { duration: 10 });
      });
  },
  data() {
    return {
      HUMANID: "",
      ICCID: "",
      CAMERA_TYPE: "",
      HARDWARE: "",
      HARDWARE_VERSION: "",
      MAIN_STORAGE: "",
      EXTRA_STORAGE: "",
      BOARD: "B!",
      CAMERA_TYPES: [],
      BOARD_TYPES: [],
      HARDWARE_TYPES: [],
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
