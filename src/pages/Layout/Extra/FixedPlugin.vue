<template>
  <div class="fixed-plugin" v-click-outside="closeDropDown" v-if="$dev_mode">
    <div class="dropdown show-dropdown" :class="{ show: isOpen }">
      <a data-toggle="dropdown">
        <i class="fa fa-cog fa-2x" @click="toggleDropDown"> </i>
      </a>
      <ul class="dropdown-menu" :class="{ show: isOpen }">
        <li class="header-title">Sidebar Filters</li>
        <li class="adjustments-line text-center">
          <span
            v-for="item in sidebarColors"
            :key="item.color"
            class="badge filter"
            :class="[`badge-${item.color}`, { active: item.active }]"
            :data-color="item.color"
            @click="changeSidebarBackground(item)"
          >
          </span>
        </li>
        <li class="header-title">Images</li>
        <li
          v-for="item in sidebarImages"
          :key="item.image"
          :class="{ active: item.active }"
          @click="changeSidebarImage(item)"
        >
          <a class="img-holder switch-trigger">
            <img :src="item.image" alt="" />
          </a>
        </li>

        <li class="button-container">
          <div class="">
            <md-button
              class="md-success md-block"
              :href="freeUrl"
              target="_blank"
              >Free Download</md-button
            >
          </div>
        </li>
        <li class="button-container">
          <div class="">
            <md-button
              class="md-block md-primary"
              :href="documentationLink"
              target="_blank"
              >Documentation</md-button
            >
          </div>
        </li>

        <li class="header-title d-flex justify-content-center">
          Thank you for sharing!
        </li>

        <li class="github-buttons">
          <gh-btns-star
            slug="creativetimofficial/vue-material-dashboard"
            show-count
          ></gh-btns-star>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
//import SocialSharing from "vue-social-sharing";
import VueGitHubButtons from "vue-github-buttons";
import "vue-github-buttons/dist/vue-github-buttons.css";

//Vue.use(SocialSharing);
Vue.use(VueGitHubButtons, { useCache: true });
export default {
  data() {
    return {
      documentationLink:
        "https://casdb.io/vue-material-dashboard/documentation",
      shareUrl: "https://www.creative-tweqe/vue-material-dashboard",
      buyUrl: "",
      freeUrl: "https://www.creativqweduct/vue-material-dashboard",
      isOpen: false,
      sidebarColors: [
        { color: "purple", active: false },
        { color: "blue", active: false },
        { color: "green", active: true },
        { color: "orange", active: false },
        { color: "red", active: false },
      ],
      sidebarImages: [
        //{ image: require("@/assets/img/sidebar-1.jpg"), active: false },
        { image: require("@/assets/img/sidebar-2.jpg"), active: true },
        // { image: require("@/assets/img/sidebar-3.jpg"), active: false },
        // { image: require("@/assets/img/sidebar-4.jpg"), active: false },
      ],
    };
  },
  methods: {
    toggleDropDown() {
      this.isOpen = !this.isOpen;
    },
    closeDropDown() {
      this.isOpen = false;
    },
    toggleList(list, itemToActivate) {
      list.forEach((listItem) => {
        listItem.active = false;
      });
      itemToActivate.active = true;
    },
    updateValue(name, val) {
      this.$emit(`update:${name}`, val);
    },
    changeSidebarBackground(item) {
      this.$emit("update:color", item.color);
      this.toggleList(this.sidebarColors, item);
    },
    changeSidebarImage(item) {
      this.$emit("update:image", item.image);
      this.toggleList(this.sidebarImages, item);
    },
  },
};
</script>
<style>
.centered-row {
  display: flex;
  height: 100%;
  align-items: center;
}

.button-container .btn {
  margin-right: 10px;
}

.centered-buttons {
  display: flex;
  justify-content: center;
}
</style>
