<template>
  <md-toolbar md-elevation="0" class="md-transparent">
    <div class="md-toolbar-row">
      <div class="md-toolbar-section-start md-danger">
        <h3 class="md-title md-succcess">{{ $route.name }}</h3>
      </div>

      <div class="md-toolbar-section-end">
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: $sidebar.showSidebar }"
          @click="toggleSidebar"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
          <md-list>
            <li class="md-list-item">
              <div class="md-list-item-content">
                <md-button
                  slot="title"
                  class="md-button md-just-icon md-simple"
                  data-toggle="dropdown"
                >
                  <md-icon>notifications</md-icon>
                  <p class="hidden-lg hidden-md">Notifications</p>
                </md-button>
              </div>
            </li>
            <md-list-item href="#">
              <i class="material-icons">person</i>
              <p class="hidden-lg hidden-md">Profile</p>
            </md-list-item>
          </md-list>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
import SidebarLink from "../../components/SidebarPlugin/SidebarLink.vue";
import  EventBus  from "../../eventBus";

export default {
  data() {
    return {
      selectedEmployee: null,
      employees: [],
    };
  },
  methods: {
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
  },
  mounted() {
    EventBus.$on("toggleSidebar", () => {
      this.toggleSidebar();
    });
  }
};
</script>

<style lang="css"></style>
