import { Server, Model } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
	let server = new Server({
		environment,
		models: {
			todo: Model,
		},
		seeds(server) {
			server.create("todo", { content: "Learn Mirage JS" });
			server.create("todo", { content: "Integrate With Vue.js" });
		},
		routes() {
			this.namespace = "api";
			this.get("unit_id", () => {
				return { unit_id : 323103 };
			});
			this.get("camera_types", () => {
				return { camera_types: ['1', '2']}
			});
			this.get("configs", () => {
				return {
					HUMANID: '303',
					IOT_DEVICE_ID: '123',
					CAMERA_TYPE: 'QWE',
					HARDWARE: 'FA',
					HARDWARE_VERSION: '12',
					MAIN_STORAGE: '',
					EXTRA_STORAGE: '',
				}
			});
			this.post("configs", () => {
				return {
					HUMANID: '303',
					IOT_DEVICE_ID: '123',
					CAMERA_TYPE: 'QWE',
					HARDWARE: 'FA',
					HARDWARE_VERSION: '12',
					MAIN_STORAGE: '',
					EXTRA_STORAGE: '',
				}
			});
			this.get('status_quo', () => {
				return {
					armed: true,
					camera: false,
					cpu: 20,
					load_current: 22,
					memory: 33,
					primary_disk: 44,
					temperature: 44,
					uptime: 432234 
				}
			})

		},
	});
   // console.log(server)
	return server;
}
