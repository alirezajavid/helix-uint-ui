<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <md-card>
          <md-card-header data-background-color="naghmeh2">
            <h4><md-icon style="color:white">tv</md-icon> &nbsp;<b>Live</b></h4>
          </md-card-header>
          <md-card-content>
            <div class="player">
              <video-player
                ref="videoPlayer"
                style="border: none 1px red"
                class="vjs-custom-skin"
                :options="playerOptions"
                @play="onPlayerPlay($event)"
                @ready="onPlayerReady($event)"
              >
              </video-player>
            </div>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import VideoPlayer from "vue-videojs7/src/components/VideoPlayer.vue";

export default {
  name: "home",
  components: {
    VideoPlayer,
  },
  data() {
    return {
      playerOptions: {
        autoplay: true,
        controls: true,
        controlBar: {
          timeDivider: false,
          durationDisplay: false,
        },
        // poster: 'https://surmon-china.github.io/vue-quill-editor/static/images/surmon-5.jpg'
      },
    };
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    },
  },
  methods: {
    onPlayerPlay(player) {},
    onPlayerReady(player) {
      this.player.play();
    },
    playVideo: function (source) {
      const video = {
        withCredentials: false,
        type: "application/x-mpegurl",
        src: source,
      };
      this.player.reset(); // in IE11 (mode IE10) direct usage of src() when <src> is already set, generated errors,
      this.player.src(video);
      // this.player.load()
      this.player.play();
    },
  },
  mounted() {
    const src = "/" + this.$unitid + "/stream_o/index.m3u8";
    this.playVideo(src);
  },
};
</script>

<style scoped>
.player {
  width: 640px;
  height: 480px;
}
.vjs-custom-skin {
  height: 460px !important;
}

.vjs-custom-skin /deep/ .video-js {
  height: 100%;
  width: 100%;
}
</style>
