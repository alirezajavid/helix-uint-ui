<template>
	<md-card-content>
		<div class="md-layout">
			<div class="md-layout-item md-small-size-100 md-size-100">
				<md-field>
					<label>interface: br0</label>
				</md-field>
			</div>
			<div class="md-layout-item md-small-size-200 md-size-200">
        <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>

          <md-radio v-model="method" value="auto">DHCP</md-radio>
          <md-radio v-model="method" value="manual">Static</md-radio>
			</div>
			<div class="md-layout-item md-small-size-100 md-size-100">
				<md-field>
					<label>ip</label>
					<md-input :disabled="method=='auto'" v-model="ip"></md-input>
				</md-field>
			</div>
			<div class="md-layout-item md-small-size-100 md-size-100">
				<md-field>
					<label>netmask</label>
					<md-input :disabled="method=='auto'" v-model="netmask" type="text"></md-input>
				</md-field>
			</div>
			<div class="md-layout-item md-small-size-100 md-size-100">
				<md-field>
					<label>gateway</label>
					<md-input :disabled="method=='auto'" v-model="gateway" type="text"></md-input>
				</md-field>
			</div>

			<div class="md-layout-item md-small-size-50 md-size-50">
				<ProgressButton
					@click="save_clicked"
					ref="save_button"
					name="bottom"
					class="btn btn-warning mr-1 mb-1"
					:height="10"
					:disabled="!active_save"
					:duration="1000"
					position="top"
				>
					<md-icon>save</md-icon>
					Save
				</ProgressButton>
			</div>
		</div>
	</md-card-content>
</template>
<script>
	import axios from "axios";
	import "vue-select/dist/vue-select.css";
	import ProgressButton from "../../components/ProgressButton";

	export default {
		name: "General",
		components: {
			ProgressButton,
		},
		props: {
			dataBackgroundColor: {
				type: String,
				default: "",
			},
		},
		methods: {
			save() {
				axios
					.post("/api/configs/network", {
              br0: {
                ip: this.ip,
                method: this.method,
                netmask: this.netmask,
                gateway: this.gateway
              }
					})
					.then((r) => {
						this.active_save = false;



            this.get_configuration()
						this.check_configurable_interval = setInterval(
							() => this.check_configurable(),
							6000
						);
					})
					.catch((e) => {
						this.$toasted.show(e.message, { duration: 10 });
					});
			},
			/*
	reboot() {
	  axios
	    .get("/maintenance?action=restart&var=pi")
	    .then((r) => {
	      this.$toasted.show("Send reboot signal.", { duration: 10 });
	    })
	    .catch((e) => {
	      this.$toasted.show("Error in connection.", { duration: 10 });
	    });
	},

	reboot_clicked() {
	  this.$confirm({
	    message: "Are you sure?",
	    button: {
	      no: "No",
	      yes: "Yes",
	    },
	    callback: (confirm) => {
	      if (confirm) {
	        this.$refs.reboot_button.start();
	        this.reboot();
	      }
	    },
	  });
	},
	*/
			save_clicked() {
				this.$confirm({
					message: "Are you sure?",
					button: {
						no: "No",
						yes: "Yes",
					},
					callback: (confirm) => {
						if (confirm) {
							//this.$refs.save_button.start();
							this.save();
						}
					},
				});
			},

			check_configurable() {
				axios.get("/api/configs/allowed_to_change").then((r) => {
					this.active_save = r.data.state === true;
					if (this.check_configurable_interval && r.data.state === true)
						clearInterval(this.check_configurable_interval);
				});
			},
      get_configuration() {
        axios
				.get("/api/configs/network")
				.then((r) => {
					this.method = r.data.br0.method;
					this.ip = r.data.br0.ip;
					this.netmask = r.data.br0.netmask;
					this.gateway = r.data.br0.gateway;
				})
				.catch((e) => {
					this.$toasted.show("Error in connection.", { duration: 10 });
				});
      }
		},
		created() {
			this.check_configurable();		
			this.get_configuration();
		},
		data() {
			return {
        iface: "br0",
				ip: "",
				netmask: "",
				gateway: "",
        method: "auto",
				active_save: true,
				check_configurable_interval: null,
			};
		},
		mounted() {},
	};
</script>
<style>
	.__progress-button {
		border-radius: 3px;
		position: relative;
		margin: 10px 1px;
		height: 40px;
		width: 120px;
		line-height: 1.42857;
		font-size: 12px;
		font-weight: 400;
		text-transform: uppercase;
		letter-spacing: 0;
		will-change: box-shadow, transform;
		-webkit-transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
			-webkit-box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1);
		transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
			-webkit-box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1);
		transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1),
			background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
		transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1),
			background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
			-webkit-box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1);
		color: #ffffff !important;
		background-color: #00bcd4 !important;
		box-shadow: 0 2px 2px 0 rgba(0, 188, 212, 0.14),
			0 3px 1px -2px rgba(0, 188, 212, 0.2),
			0 1px 5px 0 rgba(0, 188, 212, 0.12);
		border: none;
	}
</style>
