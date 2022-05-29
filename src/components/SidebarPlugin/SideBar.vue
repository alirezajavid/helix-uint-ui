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
        <div id="video"><img :src="img" /></div>
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

        <!--By default vue-router adds an active class to each route link. This way the links are colored when clicked-->
        <slot>
          <sidebar-link
            v-for="(link, index) in sidebarLinks"
            :key="link.name + index"
            :to="link.path"
            :link="link"
          >
          </sidebar-link>
        </slot>
      </md-list>
    </div>
  </div>
</template>
<script>
import SidebarLink from "./SidebarLink.vue";

export default {
  components: {
    SidebarLink,
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
      default: require("@/assets/img/helix.png"),
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
        //backgroundImage: `url(${this.sidebarBackgroundImage})`,
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
