<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <md-card>
          <md-card-header data-background-color="naghmeh1">
            <h4>Tools</h4>
          </md-card-header>
          <md-card data-background-color="naghmeh1" >
            <md-tabs class="md-transparent" @md-changed="tabChange">
              <md-tab id="tab_footage" md-label="Footage"></md-tab>
              <md-tab id="tab_snapshot" md-label="Snapshot"></md-tab>
              <md-tab id="tab_service" md-label="Services"></md-tab>
            </md-tabs>
          </md-card>
          <md-card-content>
            <Footage v-if="current_tab=='tab_footage'" />
            <Services v-if="current_tab=='tab_service'" />
            <Snapshot v-if="current_tab=='tab_snapshot'" />
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import Footage from '../components/Tools/Footage'
import Snapshot from '../components/Tools/Snapshot'
import Services from '../components/Tools/Services'
export default {
  components: {
    Footage, Snapshot, Services
  },
  methods: {
    tabChange (v) {
      this.current_tab = v 
    },
  },
  created() {
  },

  data() {
    return {
      current_tab: ''
    };
  }
};
</script>

<style lang="scss" scoped>
.md-tabs-navigation1 {
  margin: 0px 0 0 !important;
}
</style>