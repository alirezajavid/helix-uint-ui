<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-100">



        <md-card>
          <md-card-header data-background-color="naghmeh2">
            <h4>
              <md-icon style="color: white">settings</md-icon>&nbsp;<B
                >Configuration</B
              >
            </h4>
            <p class="category">Device properties</p>
          </md-card-header>
          <br style="margin:10px"/>
          <div style="padding:10px; margin:10px">
            <md-card-header data-background-color="naghmeh2">
              <md-button :class="'btn btn-warning mr-1 mb-1 ' + (state=='general'? 'b3':'b2') " @click="state='general'">General Config</md-button>
              <md-button :disabled="!status" :class="'btn btn-warning mr-1 mb-1 ' + (state=='solar'? 'b3':'b2') " @click="state='solar'">Solar Controller</md-button>
            </md-card-header>
          </div>

          <General v-if="state=='general'" data-background-color="blue"> </General>
          <Solar v-if="state=='solar'" data-background-color="blue"> </Solar>
        </md-card>

      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import  General  from "@/pages/Configuration/General";
import  Solar  from "@/pages/Configuration/Solar";

export default {
  components: {
    General,
    Solar
  },
  created() {
    axios.get("/api/solarctrl/is_connected").then((r) => {
      this.status = r.data.status;
    });
  },
  data() {
    return {
      status: false,
      state:'general'
    }
  }
};
</script>

<style scoped>

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
.b2 {
  color: white;
  background-color: #0c6a89 !important;
}

.b3 {
  color: white;
  background-color: #6ab9d3 !important;
}

</style>
