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
              <md-button
                class="md-warning md-sm md-just-icon jdok"
                @click="btn_up"
              >
                <md-icon>keyboard_double_arrow_up</md-icon>
              </md-button>
            </td>
            <td align="center">
              <md-button
                class="md-warning md-sm md-just-icon jdok"
                @click="btn_left"
              >
                <md-icon>keyboard_double_arrow_left</md-icon>
              </md-button>
            </td>
            <td align="center">
              <md-button
                :disabled="!getStat.provisioning.allowed_to_change"
                :class="
                  (getStat.provisioning.state ? 'md-success' : 'md-warning') +
                  ' md-sm md-just-icon1 jdok'
                "
                @click="place_holder"
              >
                provisioning
              </md-button>
            </td>
            <td align="center">
              <md-button
                class="md-warning md-sm md-just-icon jdok"
                @click="btn_right"
              >
                <md-icon>keyboard_double_arrow_right</md-icon>
              </md-button>
            </td>
            <td align="center">
              <md-button
                class="md-warning md-sm md-just-icon jdok"
                @click="btn_down"
              >
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
          <div class="jmen">
            <table>
              <tr>
                <td>Notifications</td>
                <td><md-badge :md-content="getAlarmsCounts" /></td>
              </tr>
            </table>
          </div>
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
    </div>
  </div>
</template>
<script>
import EventBus from "../../eventBus";
import { mapActions, mapGetters, mapMutations } from "vuex";

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
    ...mapGetters(["getStat", "getAlarmsCounts"]),
    sidebarStyle() {
      return {
        backgroundImage: `url(${this.sidebarBackgroundImage})`,
      };
    },
  },
  data() {
    return {
      img: this.$cam_image,
      intervaller: null,
    };
  },
  methods: {
    ...mapActions([
      "getAlaramCountFromServer",
      "getStatsFromServer",
      "sendChangeProvisioning",
      "sendRotate",
    ]),
    place_holder() {
      this.sendChangeProvisioning();
      setTimeout(this.getStatsFromServer, 1000);
      setTimeout(this.setImage, 8000);
    },
    btn_up() {
      this.sendRotate("up");
    },
    btn_down() {
      this.sendRotate("down");
    },
    btn_left() {
      this.sendRotate("left");
    },
    btn_right() {
      this.sendRotate("right");
    },
    toggleSidebar() {
      EventBus.$emit("toggleSidebar");
    },
    setImage() {
      this.img = this.$cam_image + "?rnd=" + Math.random();
    },
  },
  created() {
    this.getAlaramCountFromServer();
    this.getStatsFromServer();
    this.setImage();
    if (!this.intervaller)
      this.intervaller = setInterval(() => {
        this.setImage();
        this.getAlaramCountFromServer();
      }, 8000);
  },
  beforeDestroy() {
    if (this.intervaller) clearInterval(this.intervaller);
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
