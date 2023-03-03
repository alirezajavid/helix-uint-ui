<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <md-card>
          <md-card-header data-background-color="naghmeh2">
            <h4>
              <md-icon style="color: white">notifications</md-icon> &nbsp;<b
                >Notifications</b
              >
            </h4>
          </md-card-header>
          <md-card-content>
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-100 player">
                <h5>Video</h5>
                <video-player
                  ref="videoPlayer"
                  style="border: none 1px red"
                  class="vjs-custom-skin"
                  :options="playerOptions"
                  @play="onPlayerPlay($event)"
                  @ready="onPlayerReady($event)"
                >
                </video-player>
                <div>
                  <md-button
                    class="md-just-icon-javid"
                    v-for="i in pageCounts"
                    :key="i"
                    @click="setRecords(i)"
                    :class="
                      'md-just-icon md-sm' +
                      (i == currentPage ? ' md-success' : ' md-primary')
                    "
                  >
                    <span style="font-size: 13px">{{ i }}</span>
                  </md-button>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-100">
                <h5>Notifications</h5>
                <md-table v-model="alarms">
                  <md-table-row slot="md-table-row" slot-scope="{ item }">
                    <md-table-cell md-label="#">{{ item.id }}</md-table-cell>
                    <md-table-cell md-label="Time">{{
                      item.name
                    }}</md-table-cell>
                    <md-table-cell md-label="Action">
                      <span @click="playVideo(item)" style="cursor: pointer">
                        <md-icon>video_camera_front</md-icon>
                      </span>

                      <span
                        @click="downloadVideo(item)"
                        style="cursor: pointer"
                      >
                        <md-icon>download</md-icon>
                      </span>

                      <span @click="delVideo(item)" style="cursor: pointer">
                        <md-icon>delete</md-icon>
                      </span>
                    </md-table-cell>
                  </md-table-row>
                </md-table>
              </div>
            </div>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import VideoPlayer from "vue-videojs7/src/components/VideoPlayer.vue";
import { mapActions, mapGetters } from "vuex"

export default {
  watch: {
    getAlarms() {
      this.pageCounts= Math.ceil(this.getAlarmsCounts / this.PAGE_SIZE)
    }
  },
  created() {
    this.getAlaramsFromServer();
    },
  components: {
    VideoPlayer,
  },
  data() {
    return {
      rawAlarms: { alarms: [] },
      PAGE_SIZE: 20,
      pageCounts: 0,
      currentPage: 1,
      playerOptions: {
        autoplay: true,
        controls: true,
        controlBar: {
          timeDivider: false,
          durationDisplay: false,
        },
        width: "300px",
        // poster: 'https://surmon-china.github.io/vue-quill-editor/static/images/surmon-5.jpg'
      },
    };
  },
  computed: {
    ...mapGetters(['getAlarms', 'getAlarmsCounts']),
    player() {
      return this.$refs.videoPlayer.player;
    },
    alarms() {
      let start = (this.currentPage - 1) * this.PAGE_SIZE;
      let end = this.currentPage * this.PAGE_SIZE;
      if (start < this.getAlarmsCounts)
        return this.getAlarms.slice(start, end);
      else {
        return this.getAlarms;
      }
    }
  },

  methods: {
    ...mapActions(['getAlaramsFromServer', 'getAlaramCountFromServer', 'sendDelAlarm']),
    setRecords(index) {
      this.currentPage = index;
    },
    onPlayerPlay(player) {},
    onPlayerReady(player) {
      this.player.play();
    },
    delVideo: function (source) {
      this.sendDelAlarm(source.name)
    },
    downloadVideo: function (source) {
      window.open(source.download);
    },
    playVideo: function (source) {
      const video = {
        withCredentials: false,
        type: "application/x-mpegurl",
        src: source.href,
      };
      this.player.reset(); // in IE11 (mode IE10) direct usage of src() when <src> is already set, generated errors,
      this.player.src(source.href);
      this.player.load();
      this.player.play();
    }
  },
};
</script>

<style>
.md-just-icon-javid1 {
  height: 30px !important;
  min-width: 30px !important;
  width: 30px !important;
  padding: 0px;
}
</style>
>
