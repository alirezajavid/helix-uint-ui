<template>
  <svg width="200" height="30" viewBox="0 0 100 10" class="progress-bar">
    <!-- Background rectangle (empty part) -->
    <rect x="0" y="0" width="100" height="10" fill="#e0e0e0" rx="2" />

    <!-- Filled rectangle (usage part) -->
    <rect
      x="0"
      y="0"
      :width="percentage"
      height="10"
      :fill="fillColor"
      rx="2"
    />

    <!-- Display percentage text -->
    <text
      x="50"
      y="7"
      fill="#333"
      font-size="4"
      text-anchor="middle"
      alignment-baseline="middle"
    >
      {{ percentage }}%
    </text>
  </svg>
</template>

<script>
export default {
  name: "RamProgressBar",
  props: {
    percentage: {
      type: Number,
      required: true,
      default: 50,
    },
  },
  computed: {
    // Dynamic color based on the percentage of RAM usage
    fillColor() {
      if (this.percentage < 50) {
        return "#4caf50"; // Green
      } else if (this.percentage >= 50 && this.percentage < 90) {
        return "#ff9800"; // Orange
      } else {
        return "#f44336"; // Red
      }
    },
  },
};
</script>

<style scoped>
.progress-bar {
  border-radius: 4px;
}
</style>
