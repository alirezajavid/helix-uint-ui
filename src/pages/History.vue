<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-100">
        History
        <video-player :options="videoOptions"></video-player>
      </div>
    </div>
  </div>
</template>

<script>
import VideoPlayer from "vue-video-player";

export default {
  components: {
    VideoPlayer,
  },
  data() {
    return {
      videoOptions: {
        source: {
          type: "application/x-mpegURL",
          src: "https://example.net/live/playlist.m3u8",
          withCredentials: false,
        },
        live: true,
      },
    };
  },
};
</script>
