<template>
      <md-card-content>
        <div class="md-layout">
          
          
          <md-card>
            <md-card-content>
              SC currennt datetime: <b>{{ datetime }}</b> &nbsp;<a href="#" @click="sync_time">Sync. with Pi time</a>
            </md-card-content>
    
            <hr />
            <md-card-content>
              <md-radio v-model="obj.load_mode" :value="0">Manual Mode</md-radio> 
            </md-card-content>
            <hr />

            <md-card-content>
              <md-radio  v-model="obj.load_mode" :value="1">Reset Once a day</md-radio> 
              <md-card-content>
                Turn-on time 1: <input :disabled="obj.load_mode!= 1" v-model="obj.reset_once_aday.turn_on_time1"/> &nbsp; &nbsp; 
                Turn-off time 1: <input :disabled="obj.load_mode!= 1" v-model="obj.reset_once_aday.turn_off_time1"/><br />
                <md-checkbox :disabled="obj.load_mode!= 1" v-model="obj.reset_once_aday.use_two_times" :value="1">Reset twice a day</md-checkbox><br />
                Turn-on time 2: <input :disabled="obj.load_mode!= 1 || obj.reset_once_aday.use_two_times!=1" v-model="obj.reset_once_aday.turn_on_time2"/> &nbsp; &nbsp; 
                Turn-off time 2: <input  :disabled="obj.load_mode!= 1 || obj.reset_once_aday.use_two_times!=1" v-model="obj.reset_once_aday.turn_off_time2"/><br /><br />
                <ProgressButton
                  @click="read_params"
                  name="bottom"
                  class="btn btn-warning mr-1 mb-1"
                  style="height:22px"
                  position="top"
                >
                  Read
                </ProgressButton>
              </md-card-content>
            </md-card-content>
            <hr />

            <md-card-content>
              <md-radio v-model="obj.load_mode" :value="2">Delayed restart mode</md-radio> 
              <md-card-content>
                <table>
                  <tr>
                    <td>How many hours into future?</td>
                    <td><input  :disabled="obj.load_mode!= 2" v-model="obj.delayed_restart.hours_into_future" /> hrs. <br></td>
                  </tr>
                  <tr>
                    <td>Delay frequency</td>
                    <td><input :disabled="obj.load_mode!= 2" v-model="obj.delayed_restart.delay_frequency" /> hrs.</td>
                  </tr>
                </table>
              </md-card-content>
            </md-card-content>

            <hr />
            <md-card-content>
              <md-checkbox v-model="obj.controlled_powerdown_enable" >Controlled power down</md-checkbox>
              <md-card-content>
                <table>
                  <tr>
                    <td>Battery voltage low threshold to turn off load:</td>
                    <td><input :disabled="!obj.controlled_powerdown_enable" v-model="obj.controlled_powerdown.battery_vol_low_threshold"/></td>
                  </tr>
                  <tr>
                    <td>Turn-on time1:</td>
                    <td><input :disabled="!obj.controlled_powerdown_enable" v-model="obj.controlled_powerdown.turn_on_time"/></td>
                  </tr>
                </table>
              </md-card-content>
            </md-card-content>
          </md-card>


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
  name: "Solar",
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
    read_params() {
      this.$toasted.show("Read data from solar.", { duration: 10 });
      axios
        .get("/api/solarctrl/timing_params")
        .then((r) => {
          if (r.data.success === true) {
            this.reset_once_aday.turn_on_time1 = r.data.turn_on_time1
            this.reset_once_aday.turn_on_time2 = r.data.turn_on_time2
            this.reset_once_aday.turn_off_time1 = r.data.turn_off_time1
            this.reset_once_aday.turn_off_time2 = r.data.turn_off_time2
            this.reset_once_aday.use_two_times = r.data.use_two_times
          }
        })
        .catch((e) => {
          this.$toasted.show("Error in connection.", { duration: 10 });
        });

    },
    sync_time() {
      this.datetime = "";
      axios
        .post("/api/solarctrl/datetime")
        .then((r) => {
          if (r.data.success === true )
            this.datetime = r.data.datetime 
        })
        .catch((e) => {
          this.$toasted.show("Error in connection.", { duration: 10 });
        });
    },
    save() {
      axios
        .post("/api/configs/solarctrl", this.obj)
        .then((r) => {
        })
        .catch((e) => {
          this.$toasted.show(e.message, { duration: 10 });
        });
    },

    reboot() {
      axios
        .get("/maintenance?action=restart&var=sc")
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

  },
  created() {
    axios
      .get("/api/configs/solarctrl")
      .then((r) => {
        this.obj = r.data;      
      })
      .catch((e) => {
        this.$toasted.show("Error in connection.", { duration: 10 });
      });

      axios
      .get("/api/solarctrl/datetime")
      .then((r) => {
        if (r.data.success === true )
          this.datetime = r.data.datetime  
      })
      .catch((e) => {
        this.$toasted.show("Error in connection.", { duration: 10 });
      });
  },
  data() {
    return {
      active_save: true,
      datetime: '----',
      obj: {
        load_mode: 2,
        controlled_powerdown_enable: 0,
        reset_once_aday: {
          turn_on_time1: '01:01:00',
          turn_off_time1: '01:00:00',
          use_two_times: 1,
          turn_on_time2: '12:01:00',
          turn_off_time2: '12:00:00'
        },
        delayed_restart: {
          hours_into_future: 6,
          delay_frequency: 1
        },
        controlled_powerdown: {
          battery_vol_low_threshold: 10.9,
          turn_on_time: '11:00:00'
        }
      }
    }
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
