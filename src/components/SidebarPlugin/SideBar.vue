<template>
  <div
    class="sidebar"
  >



  <!-- 
    
    :data-color="sidebarItemColor"
    :data-image="sidebarBackgroundImage"
    :style="sidebarStyle"

    


    <div class="logo">
      <a class="simple-text logo-mini">
        <div class="logo-img">
          <img :src="imgLogo" alt="" />
        </div>
      </a>

      <a
        @click="toggleSidebar"
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
        <table>
          <tr>
            <td align="center">
              <md-button class="md-warning md-sm md-just-icon jdok" @click="btn_up">
                <md-icon>keyboard_double_arrow_up</md-icon>
              </md-button>
            </td>
            <td align="center">
              <md-button class="md-warning md-sm md-just-icon jdok" @click="btn_left" >
                <md-icon>keyboard_double_arrow_left</md-icon>
              </md-button>  
            </td>
            <td align="center">
                <md-button class="md-warning md-sm md-just-icon1 jdok" @click=" place_holder" >
                  provisioning
                </md-button>  
            </td>
            <td align="center">
              <md-button class="md-warning md-sm md-just-icon jdok" @click="btn_right">
                <md-icon>keyboard_double_arrow_right</md-icon>
              </md-button>
            </td>
            <td align="center">
              <md-button class="md-warning md-sm md-just-icon jdok" @click="btn_down">
                <md-icon>keyboard_double_arrow_down</md-icon>
              </md-button>
            </td>
          </tr>
        </table>
        <div class="logo" />
      </md-list>

      <md-list>
        <sidebar-link to="/stats">
          <md-icon>assessment</md-icon>
          <p class="jmen">Stats</p>
        </sidebar-link>
        <sidebar-link to="/configuration">
          <md-icon>settings</md-icon>
          <p class="jmen">Configuration</p>
        </sidebar-link>

        <sidebar-link to="/notifications">
          <md-icon>notifications</md-icon>
          <p class="jmen">
            <table>
              <tr>
                <td>Notifications</td>
                <td><md-badge :md-content="notifCount" /></td>
              </tr>
            </table>
          </p>
        </sidebar-link>

        <sidebar-link to="/tools">
          <md-icon>build_circle</md-icon>
          <p class="jmen">Tools</p>
        </sidebar-link>
        <sidebar-link to="/live">
          <md-icon>tv</md-icon>
          <p class="jmen">Live</p>
        </sidebar-link>
      </md-list>
    </div> -->
  </div>
</template>
<script>
import axios from "axios";
import EventBus from "../../eventBus";

export default {
  components: {},
  props: {
    title: {
      type: String,
      default: "",
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
      default: () => [
        {
          name: "Live",
          path: "live",
        },
      ],
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
      img: this.$cam_image,
      notifCount: 10
    };
  },
  methods: {
    rotate(arrow) {
      axios.get("/maintenance?action=rotate&var=" + arrow).then((r) => {});
    },
    capture() {
      axios.get("/maintenance?action=capture&var=still").then((r) => {
        this.setImage();
      });
    },
    place_holder ()
    {
      axios.get("/api/provisioning?action=").then((r) =>
      {
        this.setImage();
      });
      
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
      //this.capture();
    },
    toggleSidebar() {
      EventBus.$emit("toggleSidebar");
    },
    setImage() {
      this.img = this.$cam_image + "?rnd=" + Math.random();
    },
    get_alarms_count() {
      axios.get("/api/alarms?detail=false").then((r) => {
        this.notifCount = r.data.total;
      });
    },

  },
  created() {
    this.get_alarms_count();
    this.setImage();
    setInterval(() => {
      this.setImage();
      this.get_alarms_count();
    }, 8000);
  },
};
</script>
<style>
@media screen and (min-width: 991px) {
  .nav-mobile-menu {
    display: none;
  }
}
.dokme {
  text-align: center;
}
.jdok {
  padding-left: 8px !important;
}
.jmen {
  color: white;
}

</style>
