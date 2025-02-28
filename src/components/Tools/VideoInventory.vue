<template>
  <div>

    <canvas ref="chartCanvas" width="600" height="400"></canvas>
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default {
  data() {
    return {
      booleanData: [
        { datetime: '2025-02-28 05:24:01', value: true },
        { datetime: '2025-02-28 05:24:02', value: false },
        { datetime: '2025-02-28 05:24:03', value: true },
        { datetime: '2025-02-28 05:24:04', value: false },
        { datetime: '2025-02-28 05:24:05', value: true },
        { datetime: '2025-02-28 05:24:06', value: true },
        { datetime: '2025-02-28 05:24:07', value: true },
        { datetime: '2025-02-28 05:24:08', value: true },
        { datetime: '2025-02-28 05:24:09', value: true },
        { datetime: '2025-02-28 05:24:10', value: true },
      ],
      chart: null, // To store the Chart instance
    };
  },
  computed: {
    chartData() {
      return {
        labels: this.booleanData.map((item) => item.datetime), // Use datetime as labels
        datasets: [
          {
            data: this.booleanData.map((item) => (item.value ? 1 : 0)), // Convert boolean to 1 or 0
            borderColor: '#000',
            backgroundColor: this.booleanData.map((item) =>
              item.value ? 'green' : 'red'
            ), // Green for true, red for false
            pointRadius: 4,
            pointHoverRadius: 2,
          },
        ],
      };
    },
    chartOptions() {
      return {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            type: 'category', // Use category scale for datetime labels
            title: {
              display: true,
              text: 'Datetime',
            },
          },
          y: {
            beginAtZero: true,
            max: 1,
            ticks: {
              stepSize: 1,
              callback: (value) => (value === 1 ? 'True' : 'False'), // Map 1 to True, 0 to False
            },
            title: {
              display: true,
              text: 'Value',
            },
          },
        },
      };
    },
  },
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      const ctx = this.$refs.chartCanvas.getContext('2d');
      if (this.chart) {
        this.chart.destroy(); // Destroy existing chart if it exists
      }
      this.chart = new Chart(ctx, {
        type: 'line',
        data: this.chartData,
        options: this.chartOptions,
      });
    },
  },
  watch: {
    booleanData: {
      handler() {
        this.renderChart(); // Re-render the chart when data changes
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
canvas {
  border: 1px solid #ccc;
}
</style>