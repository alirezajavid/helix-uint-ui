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
                  to="/notifications"
                >
                  <md-icon>notifications</md-icon>
                  <span class="notification">{{ notifCount }}</span>
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
import EventBus from "../../eventBus";
import axios from "axios";

export default {
  data() {
    return {
      notifCount: 10,
      selectedEmployee: null,
      employees: [],
    };
  },
  methods: {
    get_alarms_count() {
      axios.get("/api/alarms?detail=false").then((r) => {
        this.notifCount = r.data.total;
      });
    },
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
  },

  mounted() {
    EventBus.$on("toggleSidebar", () => {
      this.toggleSidebar();
    });
    this.get_alarms_count();
    setInterval(() => {
      this.get_alarms_count();
    }, 5000);
  },
};
</script>

<style lang="css"></style>
