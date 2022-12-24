<template>
  <div>
    <md-table v-model="mdData" md-card>
      <md-table-toolbar>
        <h1 class="md-title">Services</h1>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Status">
          <md-icon v-show="item.status">done</md-icon>
          <md-icon v-show="!item.status">error</md-icon>
        </md-table-cell>
        <md-table-cell md-label="Action" width="140px">
          <md-button class="md-icon-button" @click="play(item.name)">
            <md-icon>play_arrow</md-icon>
          </md-button>
          
          <md-button class="md-icon-button" @click="pause(item.name)">
            <md-icon>pause</md-icon>
          </md-button>

          <md-button class="md-icon-button" @click="restart(item.name)">
            <md-icon>restart_alt</md-icon>
          </md-button>
        </md-table-cell>
      </md-table-row>

    </md-table>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Service',
  data: () => ({
      mdData: []
  }),
  methods: {
    service (service_name, action)
    {
      axios
        .get('/api/services?action=' + action + '&name=' + service_name)
        .then((r) =>
        { 
          if (r.data.success && r.data.message)
            this.$notification.success(r.data.message, { timer: 10 });
          else
            this.$notification.success(action + ' ' + service_name, { timer: 10 });
        })
        .catch(() =>
        {
          this.$notification.error(r.data.message, { timer: 10 });
        })
    },
    play (service_name)
    {
      this.service(service_name, 'start')
    },
    pause (service_name)
    {
      this.service(service_name, 'stop')
    },
    restart (service_name)
    {
      this.service(service_name, 'restart')
    },
    fetch ()
    {
      axios
        .get('/api/services?action=list')
        .then((r) =>
        {
          if (r.data.success && r.data.success === true)
            this.mdData = r.data.services
        })
    }

  },
  created ()
  {
    this.fetch()
  }
}
</script>

<style lang="scss" scoped>
.md-table+.md-table {
  margin-top: 16px
}

.avatar img {
  max-width: 30px;
}
</style>

