<template>
  <ul class="nav nav-mobile-menu">
    <li>
      <drop-down>
        <router-link to="/notifications" slot="title" class="dropdown-toggle">
          <i class="material-icons">notifications</i>
          <span class="notification"></span>
          <span class="notification">{{ getStat.alarms }}</span>
          <p>Notifications</p>
        </router-link>
      </drop-down>
    </li>
  </ul>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  watch: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getStat"]),
  },
};
</script>
