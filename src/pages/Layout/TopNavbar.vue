<template>
    <md-toolbar md-elevation="0" class="md-transparent" v-if="vis">
      <div class="md-toolbar-row">
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
      </div>
    </div>
  </md-toolbar>
</template>

<script>
import EventBus from "../../eventBus";

export default {
  data() {
    return {
    };
  },
  methods: {
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
  },
  computed: {
    vis() {
      return window.innerWidth < 960
    }
  },
  mounted() {
    
    EventBus.$on("toggleSidebar", () => {
      this.toggleSidebar();
    });
  },
};
</script>

<style lang="css"></style>
