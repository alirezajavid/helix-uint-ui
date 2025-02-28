<template>
  <svg width="200" height="50" viewBox="0 0 100 20" class="thermometer">
    <!-- Outer bulb of the thermometer -->
    <circle
      cx="10"
      cy="10"
      r="7"
      fill="#e0e0e0"
      stroke="#999"
      stroke-width="1"
    />

    <!-- Inner fill of the bulb, representing the temperature -->
    <circle cx="10" cy="10" r="6" :fill="fillColor" />

    <!-- Thermometer tube background -->
    <rect
      x="17"
      y="7"
      width="75"
      height="6"
      rx="3"
      fill="#e0e0e0"
      stroke="#999"
      stroke-width="1"
    />

    <!-- Temperature fill inside the tube -->
    <rect x="17" y="8" :width="fillWidth" height="4" :fill="fillColor" rx="2" />

    <!-- Display temperature percentage -->
    <text
      x="90"
      y="15"
      fill="#333"
      font-size="4"
      text-anchor="middle"
      alignment-baseline="middle"
    ></text>
  </svg>
</template>

<script>
export default {
  name: "HorizontalThermometer",
  props: {
    percentage: {
      type: Number,
      required: true,
      default: 50,
      validator(value) {
        return value >= 0 && value <= 100;
      },
    },
  },
  computed: {
    // Calculate the fill width of the thermometer
    fillWidth() {
      return (this.percentage / 100) * 75; // Max tube width is 75
    },
    // Dynamic fill color based on the temperature
    fillColor() {
      if (this.percentage < 50) {
        return "#4caf50"; // Green (cool)
      } else if (this.percentage >= 50 && this.percentage < 80) {
        return "#ff9800"; // Orange (warm)
      } else {
        return "#f44336"; // Red (hot)
      }
    },
  },
};
</script>

<style scoped>
.thermometer {
  border-radius: 4px;
}
</style>
