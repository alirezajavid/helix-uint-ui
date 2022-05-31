<template>
  <ul class="nav nav-mobile-menu">
    <li>
      <drop-down>
        <a slot="title" class="dropdown-toggle">
          <i class="material-icons">notifications</i>
          <span class="notification">5</span>
          <p>Notifications</p>
        </a>
      </drop-down>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      search: null,
      selectedEmployee: null,
      employees: [],
    };
  },
};
</script>
