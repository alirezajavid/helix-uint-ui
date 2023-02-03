<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <md-card>
          <md-card-header data-background-color="naghmeh2">
            <h4>
              <md-icon style="color: white">build_circle</md-icon>&nbsp;<b
                >Tools</b
              >
            </h4>
          </md-card-header>

          <md-card-content>
            <md-bottom-bar
              @md-changed="tabChange"
              data-background-color="naghmeh2"
            >
              <md-bottom-bar-item
                md-mini
                id="tab_footage"
                data-background-color="naghmeh2"
                md-label="Footage"
                md-icon="emergency_recording"
              ></md-bottom-bar-item>
              <md-bottom-bar-item
                md-mini
                id="tab_snapshot"
                data-background-color="naghmeh2"
                md-label="Snapshot"
                md-icon="camera"
              ></md-bottom-bar-item>
              <md-bottom-bar-item
                md-mini
                id="tab_service"
                data-background-color="naghmeh2"
                md-label="Services"
                md-icon="settings_suggest"
              ></md-bottom-bar-item>
              <md-bottom-bar-item
                md-mini
                id="tab_wall"
                data-background-color="naghmeh2"
                md-label="Wall"
                md-icon="wallpaper"
              ></md-bottom-bar-item>
            </md-bottom-bar>
          </md-card-content>

          <md-card-content>
            <Footage v-if="current_tab == 'tab_footage'" />
            <Services v-if="current_tab == 'tab_service'" />
            <Snapshot v-if="current_tab == 'tab_snapshot'" />
            <Wall v-if="current_tab == 'tab_wall'" />
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import Footage from "../components/Tools/Footage";
import Snapshot from "../components/Tools/Snapshot";
import Services from "../components/Tools/Services";
import Wall from "../components/Tools/Wall";
export default {
  props: {},
  components: {
    Footage,
    Snapshot,
    Services,
    Wall,
  },
  methods: {
    tabChange(v) {
      this.current_tab = v;
    },
  },
  created() {},

  data() {
    return {
      current_tab: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.md-tabs-navigation1 {
  margin: 0px 0 0 !important;
}
</style>
