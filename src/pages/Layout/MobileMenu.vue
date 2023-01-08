<template>
  <ul class="nav nav-mobile-menu">
    <li>
      <drop-down>
        <router-link to="/notifications" slot="title" class="dropdown-toggle">
          <i class="material-icons">notifications</i>
          <span class="notification"></span>
          <span class="notification">{{ notifCount }}</span>
          <p>Notifications</p>
        </router-link>
      </drop-down>
    </li>
  </ul>
</template>
<script>
import axios from "axios";
export default {
  watch: {
  },
  data() {
    return {
      notifCount: 10,
      search: null,
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
  },
  created() {
    this.get_alarms_count();
    setInterval(() => {
      this.get_alarms_count();
    }, 10000);
  },
};
</script>
