<template>
	<div>
		<div>
			<div class="date-time-range-picker">
				<label>
					Start Date & Time:
					<input type="datetime-local" v-model="startDateTime" />
				</label>

				<label>
					End Date & Time:
					<input type="datetime-local" v-model="endDateTime" />
				</label>
				&nbsp;&nbsp;&nbsp;
				<button @click="getTimeRange('today')">Today</button>&nbsp;
				<button @click="getTimeRange('yesterday')">Yesterday</button
				>&nbsp;
				<button @click="getTimeRange('last24')">Last 24 Hours</button
				>&nbsp;
				<button @click="getTimeRange('last2days')">Last 2 Days</button
				>&nbsp;
				<button class="btn" @click="search">Search</button>&nbsp;
			</div>
			<br />{{ startDateTime }} - {{ endDateTime }}
		</div>
		<div>
			<canvas ref="chartCanvas" width="600" height="400"></canvas>
		</div>
	</div>
</template>

<script>
	import { Chart, registerables } from "chart.js";
	import axios from "axios";

	Chart.register(...registerables);

	export default {
		created() {
      this.getTimeRange('today');
			// axios
			// 	.get("/api/inventory/list")
			// 	.then((r) => {
			// 		this.booleanData = r.data.inventory;
			// 	})
			// 	.catch((r) => {
			// 		console.log(r);
			// 	});
		},
		data() {
			const today = new Date();
			const sevenDaysAgo = new Date();
			sevenDaysAgo.setDate(today.getDate() - 7);
			return {
				startDateTime: this.formatDateTime(sevenDaysAgo),
				endDateTime: this.formatDateTime(today),
				booleanData: [],
				chart: null, // To store the Chart instance
			};
		},
		computed: {
			chartData() {
				return {
					labels: this.booleanData.map((item) => item.datetime), // Use datetime as labels
					datasets: [
						{
							data: this.booleanData.map((item) => item.value), // Convert boolean to 1 or 0
							//borderColor: '#000',
							backgroundColor: this.booleanData.map((item) =>
								item.value ? "green" : "red"
							), // Green for true, red for false
							pointRadius: 4,
							pointHoverRadius: 1,
						},
					],
				};
			},
			chartOptions() {
				return {
					responsive: true,
					maintainAspectRatio: false,
					plugins: {
						legend: {
							display: false, // 👈 Hide the legend
						},
					},
					scales: {
						x: {
							type: "category", // Use category scale for datetime labels
							title: {
								display: true,
								text: "Datetime",
							},
						},
						y: {
							beginAtZero: true,
							max: 1,
							ticks: {
								stepSize: 1,
								callback: (value) =>
									value === 1 ? "Exists" : "No video", // Map 1 to True, 0 to False
							},
							title: {
								display: true,
								text: "Value",
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
			getTimeRange(range) {
				let now = new Date();
				let start,
					end = now;

				switch (range) {
					case "today":
						start = new Date();
						start.setHours(0, 0, 0, 0);
						end = new Date();
						break;
					case "yesterday":
						start = new Date();
						start.setDate(start.getDate() - 1);
						start.setHours(0, 0, 0, 0);
						end = new Date();
						end.setDate(end.getDate() - 1);
						end.setHours(23, 59, 59, 999);
						break;
					case "last24":
						start = new Date();
						start.setHours(start.getHours() - 24);
						break;
					case "last2days":
						start = new Date();
						start.setHours(start.getHours() - 48);
						break;
					default:
						return;
				}

				this.startDateTime = this.formatDateTime(start);
				this.endDateTime = this.formatDateTime(end);

				this.search();
			},
			formatDateTime(date) {
				const localDate = new Date(date);
        const year = localDate.getFullYear();
        const month = String(localDate.getMonth() + 1).padStart(2, '0'); // Month is zero-based
        const day = String(localDate.getDate()).padStart(2, '0');
        const hours = String(localDate.getHours()).padStart(2, '0');
        const minutes = String(localDate.getMinutes()).padStart(2, '0');
        return `${year}-${month}-${day}T${hours}:${minutes}`; // Format as YYYY-MM-DDTHH:MM
      },
			search() {
				this.booleanData = [];
				axios
					.get("/api/inventory/search", {
						params: {
							start: this.startDateTime,
							end: this.endDateTime,
						},
					})
					.then((r) => {
						this.booleanData = r.data.inventory;
					})
					.catch((r) => {
						console.log(r);
					});
			},

			renderChart() {
				const ctx = this.$refs.chartCanvas.getContext("2d");
				if (this.chart) {
					this.chart.destroy(); // Destroy existing chart if it exists
				}
				this.chart = new Chart(ctx, {
					type: "line",
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