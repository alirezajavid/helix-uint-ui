<template>
  <div
    class="sidebar"
    :data-color="sidebarItemColor"
    :data-image="sidebarBackgroundImage"
    :style="sidebarStyle"
  >
    <div class="logo">
      <a class="simple-text logo-mini">
        <div class="logo-img">
          <img :src="imgLogo" alt="" />
        </div>
      </a>

      <a
        target="_blank"
        class="simple-text logo-normal"
        style="text-transform: none"
      >
        {{ title }} <small>({{ $unitid }})</small>
      </a>
    </div>
    <div class="sidebar-wrapper">
      <slot name="content"></slot>
      <md-list class="nav">
        <img :src="img" width="100%" />
        <table border="0">
          <tr>
            <td class="dokme">&nbsp;</td>
            <td class="dokme">
              <md-button
                class="md-warning md-sm md-just-icon jdok"
                @click="btn_up"
              >
                <md-icon>keyboard_double_arrow_up</md-icon>
              </md-button>
            </td>
            <td class="dokme"></td>
          </tr>
          <tr>
            <td class="dokme">
              <md-button
                class="md-warning md-sm md-just-icon jdok"
                @click="btn_left"
                ><md-icon>keyboard_double_arrow_left</md-icon></md-button
              >
            </td>
            <td class="dokme">
              <md-button
                class="md-warning md-sm md-just-icon jdok"
                @click="btn_cap"
                ><md-icon>camera</md-icon></md-button
              >
            </td>
            <td class="dokme">
              <md-button
                class="md-warning md-sm md-just-icon jdok"
                @click="btn_right"
                ><md-icon>keyboard_double_arrow_right</md-icon></md-button
              >
            </td>
          </tr>
          <tr>
            <td class="dokme"></td>
            <td class="dokme">
              <md-button
                class="md-warning md-sm md-just-icon jdok"
                @click="btn_down"
                ><md-icon>keyboard_double_arrow_down</md-icon></md-button
              >
            </td>
            <td class="dokme"></td>
          </tr>
        </table>
        <div class="logo" />
        <!--By default vue-router adds an active class to each route link. This way the links are colored when clicked-->
      </md-list>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  components: {},
  props: {
    title: {
      type: String,
      default: "Helix Security",
    },
    sidebarBackgroundImage: {
      type: String,
      default: require("@/assets/img/sidebar-2.jpg"),
    },
    imgLogo: {
      type: String,
      default: require("@/assets/img/helix-logo.png"),
    },
    sidebarItemColor: {
      type: String,
      default: "blue",
      validator: (value) => {
        let acceptedValues = ["", "purple", "blue", "green", "orange", "red"];
        return acceptedValues.indexOf(value) !== -1;
      },
    },
    sidebarLinks: {
      type: Array,
      default: () => [],
    },
    autoClose: {
      type: Boolean,
      default: true,
    },
  },
  provide() {
    return {
      autoClose: this.autoClose,
    };
  },
  computed: {
    sidebarStyle() {
      return {
        backgroundImage: `url(${this.sidebarBackgroundImage})`,
      };
    },
  },
  data() {
    return {
      img: "/jpeg/mjpeg_latest.jpg",
    };
  },
  methods: {
    rotate(arrow) {
      axios.get("/maintenance?action=rotate&var=" + arrow).then((r) => {});
    },
    capture() {
      axios.get("/maintenance?action=capture&var=still").then((r) => {});
    },
    btn_up() {
      this.rotate("up");
    },
    btn_down() {
      this.rotate("down");
    },
    btn_left() {
      this.rotate("left");
    },
    btn_right() {
      this.rotate("right");
    },
    btn_cap() {
      this.capture();
      
    },
  },
  created() {
    setInterval(() => {
      this.img = "/jpeg/mjpeg_latest.jpg?rnd=" + Math.random();
    }, 4000);
  },
};
</script>
<style>
@media screen and (min-width: 991px) {
  .nav-mobile-menu {
    display: none;
  }
}
#video {
  background-color: black;
  height: 120px;
  margin: 0px 20px 0px 20px;
}
.dokme {
  text-align: center;
}
.jdok {
  padding-left: 8px !important;
}
</style>
