<template>
  <md-toolbar md-elevation="0" class="md-transparent">
    <div class="md-toolbar-row">
      <div class="md-toolbar-section-start">
        <h3 class="md-title">{{ $route.name }}</h3>
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
              <!--a
                href="#/notifications"
                class="
                  md-list-item-router md-list-item-container md-button-clean
                  dropdown
                "
              -->
              <div class="md-list-item-content">
                <md-button
                  slot="title"
                  class="md-button md-just-icon md-simple"
                  data-toggle="dropdown"
                >
                  <md-icon>notifications</md-icon>
                  <span class="notification">5</span>
                  <p class="hidden-lg hidden-md">Notifications</p>
                </md-button>
              </div>
              <!--/a-->
            </li>

            <md-list-item href="#">
              <i class="material-icons">person</i>
              <p class="hidden-lg hidden-md">Profile</p>
            </md-list-item>
          </md-list>
        </div>
      </div>
    </div>

    <sidebar-link to="/dashboard">
      <md-icon>auto_graph</md-icon>
      <p>Live</p>
    </sidebar-link>
    <sidebar-link to="/settings">
      <md-icon>settings</md-icon>
      <p>Configuration</p>
    </sidebar-link>
    <sidebar-link to="/status">
      <md-icon>analytics</md-icon>
      <p>Dashboard</p>
    </sidebar-link>
  </md-toolbar>
</template>

<script>
import SidebarLink from "../../components/SidebarPlugin/SidebarLink.vue";

export default {
  data() {
    return {
      selectedEmployee: null,
      employees: [
        "Jim Halpert",
        "Dwight Schrute",
        "Michael Scott",
        "Pam Beesly",
        "Angela Martin",
        "Kelly Kapoor",
        "Ryan Howard",
        "Kevin Malone",
      ],
    };
  },
  methods: {
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
  },
};
</script>

<style lang="css"></style>
