<template>
  <svg width="50" height="50" viewBox="0 0 32 32" class="pie-chart">
    <!-- Background circle (the full circle) -->
    <circle
      cx="16"
      cy="16"
      r="11.9"
      fill="none"
      stroke="#e0e0e0"
      stroke-width="9"
    />
    <!-- Foreground circle (the filled part) -->
    <circle
      cx="16"
      cy="16"
      r="11.9"
      fill="none"
      :stroke="strokeColor"
      stroke-width="9"
      :stroke-dasharray="`${circumference} ${circumference}`"
      :stroke-dashoffset="offset"
    />
  </svg>
</template>

<script>
export default {
  name: "PieChart",
  props: {
    percentage: {
      type: Number,
      required: true,
      default: 50,
    },
  },
  computed: {
    circumference() {
      return 2 * Math.PI * 11.9; // Circumference of the circle
    },
    offset() {
      return this.circumference - (this.circumference * this.percentage) / 100; // The offset based on percentage
    },
    strokeColor() {
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
.pie-chart {
  transform: rotate(-90deg); /* Rotate to start from top */
}
</style>
