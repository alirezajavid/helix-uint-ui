<template>
  <div
    class="sidebar"
    :data-color="sidebarItemColor"
    :data-image="sidebarBackgroundImage"
    :style="sidebarStyle"
  >
    <div class="logo">
      <a href="#" class="simple-text logo-mini">
        <div class="logo-img">
          <img :src="imgLogo" alt="" />
        </div>
      </a>

      <a href="https://#" target="_blank" class="simple-text logo-normal">
        {{ title }}
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
              <md-button class="md-warning md-sm md-just-icon jdok"
                ><md-icon>keyboard_double_arrow_up</md-icon></md-button
              >
            </td>
            <td class="dokme"></td>
          </tr>
          <tr>
            <td class="dokme">
              <md-button class="md-warning md-sm md-just-icon jdok"
                ><md-icon>keyboard_double_arrow_left</md-icon></md-button
              >
            </td>
            <td class="dokme">
              <md-button class="md-warning md-sm md-just-icon jdok"
                ><md-icon>camera</md-icon></md-button
              >
            </td>
            <td class="dokme">
              <md-button class="md-warning md-sm md-just-icon jdok"
                ><md-icon>keyboard_double_arrow_right</md-icon></md-button
              >
            </td>
          </tr>
          <tr>
            <td class="dokme"></td>
            <td class="dokme">
              <md-button class="md-warning md-sm md-just-icon jdok"
                ><md-icon>keyboard_double_arrow_down</md-icon></md-button
              >
            </td>
            <td class="dokme"></td>
          </tr>
        </table>
        <div class="logo" />
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-50 " style="text-align:center">
            <md-button class="md-info md-sm">ARM</md-button>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50" style="text-align:center">
            <md-button class="md-danger md-sm">DISARM</md-button>
          </div>
        </div>
        <!--By default vue-router adds an active class to each route link. This way the links are colored when clicked-->
      </md-list>
    </div>
  </div>
</template>
<script>
export default {
  components: {
  },
  props: {
    title: {
      type: String,
      default: "Helix",
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
