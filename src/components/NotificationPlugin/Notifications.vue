<template>
  <div class="notifications">
    <transition-group name="list">
      <notification
        v-for="notification in notifications"
        :key="notification.name"
        :message="notification.message"
        @on-close="removeNotification"
      >
      </notification>
    </transition-group>
  </div>
</template>

<script>
import Notification from "./Notification.vue";
export default {
  components: {
    Notification,
  },
  data() {
    return {
      notifications: [],
    };
  },
  methods: {
    removeNotification(timestamp) {
      this.$notifications.removeNotification(timestamp);
    },
  },
};
</script>

<style lang="scss">
.list-move {
  transition: transform 0.3s, opacity 0.4s;
}
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: opacity 0.4s;
}
.list-enter, .list-leave-to  /* .list-leave-active for <2.1.8 */ {
  opacity: 0;
}
</style>
