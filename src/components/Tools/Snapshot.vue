<template>
  <div class="md-layout md-gutter">
    <div class="md-layout-item md-small-size-100 md-xsmall-size-100">
      <b>Last snapshot: </b> &nbsp;{{ this.last_snapshot.creation_date }}<br />
      <b>Camera count: </b> &nbsp;{{ getCameraCount }}<br />
      <md-button
        class="btn btn-warning mr-1 mb-1 jj"
        @click="capture"
        :disabled="in_progress"
      >
        <md-icon v-show="!in_progress">camera</md-icon>
        <md-progress-spinner
          class="md-accent"
          v-show="in_progress"
          :md-diameter="15"
          :md-stroke="3"
          md-mode="indeterminate"
        ></md-progress-spinner>
        Create Snapshot
      </md-button>
    </div>

    <div v-for="(j,i) in getCameraCount" :key="i" style='padding:2px; border: solid 1px rgb(205, 205, 205)' class="md-layout-item md-small-size-100 md-xsmall-size-100">
      <img :src="'/jpeg/snapshot_latest' + (i == 0 ? '' : '_' + i) + '.jpg?rnd=' + Math.random()"  />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      token: "",
      src: "",
      in_progress: false,
      last_snapshot: {
        creation_date: "",
        href: "",
      },
    };
  },
  computed: {
		...mapGetters(["getCameraCount"]),
  },
  methods: {
    capture() {
      axios.get("/api/capture_snapshot").then((r) => {
        if (r.data.success == true) {
          this.token = r.data.token;
          this.in_progress = true;
          setTimeout(this.pooler, 3000);
        }
      });
    },
    pooler() {
      axios.get("/api/snapshot_inquiry?token=" + this.token).then((r) => {
        if (r.data.state == "pending") setTimeout(this.pooler, 3000);
        if (r.data.state == "failed")
          this.$toasted.show(r.data.message, { duration: 10 });
        if (r.data.state == "end") this.src = r.data.result;
        this.in_progress = r.data.state == "pending";
      });
    },
    get_last_snapshot() {
      axios.get("/api/latest_snapshots").then((r) => {
        if (r.data.success == true) {
          this.last_snapshot = r.data;
          this.src = r.data.href;
        }
        if (r.data.success == false) {
          this.$toasted.error(r.data.message, { duration: 10 });
        }
      });
    },
  },
  created() {
    this.get_last_snapshot();
  },
};
</script>

<style scoped>
.jj {
  color: #ffffff !important;
  background-color: #00bcd4 !important;
  box-shadow: 0 2px 2px 0 rgba(0, 188, 212, 0.14),
    0 3px 1px -2px rgba(0, 188, 212, 0.2), 0 1px 5px 0 rgba(0, 188, 212, 0.12);
  border: none;
}
</style>
