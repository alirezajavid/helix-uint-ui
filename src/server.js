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
        return { unit_id: 323103 };
      });
      this.delete("alarms", () => {
        return { success: true };
      });
      this.get("camera_types", () => {
        return { camera_types: ["1", "2"] };
      });
      this.get("configs", () => {
        return {
          HUMANID: "303",
          IOT_DEVICE_ID: "123",
          CAMERA_TYPE: "QWE",
          HARDWARE: "FA",
          HARDWARE_VERSION: "12",
          MAIN_STORAGE: "",
          EXTRA_STORAGE: "",
          SOLAR_CTRL_LOAD_MODE: "0",
        };
      });
      this.post("configs", () => {
        return {
          HUMANID: "303",
          IOT_DEVICE_ID: "123",
          CAMERA_TYPE: "QWE",
          HARDWARE: "FA",
          HARDWARE_VERSION: "12",
          MAIN_STORAGE: "",
          EXTRA_STORAGE: "",
          SOLAR_CTRL_LOAD_MODE: "0",
        };
      });
      this.get("status_quo", () => {
        return {
          armed: true,
          camera: false,
          cpu: 20,
          load_current: 22,
          memory: 33,
          primary_disk: 44,
          temperature: 44,
          uptime: 432234,
          allowed_to_configure: false,
        };
      });
      this.get("alarms", (i, d) => {
        if (d.queryParams != undefined && d.queryParams.detail == "false") {
          return { success: true, total: 625 };
        } else
          return {
            success: true,
            alarms: [
              {
                name: "2022-08-09 19:02:31",
                href: "http://120.157.118.37/alarms/103-1660035751.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660035751-main.mp4",
              },
              {
                name: "2022-08-09 18:51:03",
                href: "http://120.157.118.37/alarms/103-1660035063.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660035063-main.mp4",
              },
              {
                name: "2022-08-09 18:34:35",
                href: "http://120.157.118.37/alarms/103-1660034075.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660034075-main.mp4",
              },
              {
                name: "2022-08-09 18:33:53",
                href: "http://120.157.118.37/alarms/103-1660034033.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660034033-main.mp4",
              },
              {
                name: "2022-08-09 18:33:32",
                href: "http://120.157.118.37/alarms/103-1660034012.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660034012-main.mp4",
              },
              {
                name: "2022-08-09 18:32:46",
                href: "http://120.157.118.37/alarms/103-1660033966.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660033966-main.mp4",
              },
              {
                name: "2022-08-09 17:30:18",
                href: "http://120.157.118.37/alarms/103-1660030218.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660030218-main.mp4",
              },
              {
                name: "2022-08-09 17:28:01",
                href: "http://120.157.118.37/alarms/103-1660030081.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660030081-main.mp4",
              },
              {
                name: "2022-08-09 17:26:29",
                href: "http://120.157.118.37/alarms/103-1660029989.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660029989-main.mp4",
              },
              {
                name: "2022-08-09 17:23:33",
                href: "http://120.157.118.37/alarms/103-1660029813.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660029813-main.mp4",
              },
              {
                name: "2022-08-09 17:10:13",
                href: "http://120.157.118.37/alarms/103-1660029013.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660029013-main.mp4",
              },
              {
                name: "2022-08-09 17:06:19",
                href: "http://120.157.118.37/alarms/103-1660028779.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660028779-main.mp4",
              },
              {
                name: "2022-08-09 16:59:57",
                href: "http://120.157.118.37/alarms/103-1660028397.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660028397-main.mp4",
              },
              {
                name: "2022-08-09 16:58:05",
                href: "http://120.157.118.37/alarms/103-1660028285.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660028285-main.mp4",
              },
              {
                name: "2022-08-09 16:57:05",
                href: "http://120.157.118.37/alarms/103-1660028225.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660028225-main.mp4",
              },
              {
                name: "2022-08-09 16:55:27",
                href: "http://120.157.118.37/alarms/103-1660028127.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660028127-main.mp4",
              },
              {
                name: "2022-08-09 16:49:26",
                href: "http://120.157.118.37/alarms/103-1660027766.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660027766-main.mp4",
              },
              {
                name: "2022-08-09 16:47:08",
                href: "http://120.157.118.37/alarms/103-1660027628.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660027628-main.mp4",
              },
              {
                name: "2022-08-09 16:45:01",
                href: "http://120.157.118.37/alarms/103-1660027501.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660027501-main.mp4",
              },
              {
                name: "2022-08-09 16:36:35",
                href: "http://120.157.118.37/alarms/103-1660026995.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660026995-main.mp4",
              },
              {
                name: "2022-08-09 16:33:36",
                href: "http://120.157.118.37/alarms/103-1660026816.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660026816-main.mp4",
              },
              {
                name: "2022-08-09 16:26:23",
                href: "http://120.157.118.37/alarms/103-1660026383.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660026383-main.mp4",
              },
              {
                name: "2022-08-09 16:24:04",
                href: "http://120.157.118.37/alarms/103-1660026244.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660026244-main.mp4",
              },
              {
                name: "2022-08-09 16:23:21",
                href: "http://120.157.118.37/alarms/103-1660026201.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660026201-main.mp4",
              },
              {
                name: "2022-08-09 16:22:40",
                href: "http://120.157.118.37/alarms/103-1660026160.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660026160-main.mp4",
              },
              {
                name: "2022-08-09 16:15:57",
                href: "http://120.157.118.37/alarms/103-1660025757.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660025757-main.mp4",
              },
              {
                name: "2022-08-09 16:14:32",
                href: "http://120.157.118.37/alarms/103-1660025672.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660025672-main.mp4",
              },
              {
                name: "2022-08-09 16:12:54",
                href: "http://120.157.118.37/alarms/103-1660025574.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660025574-main.mp4",
              },
              {
                name: "2022-08-09 16:12:17",
                href: "http://120.157.118.37/alarms/103-1660025537.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660025537-main.mp4",
              },
              {
                name: "2022-08-09 16:11:35",
                href: "http://120.157.118.37/alarms/103-1660025495.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660025495-main.mp4",
              },
              {
                name: "2022-08-09 16:10:34",
                href: "http://120.157.118.37/alarms/103-1660025434.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660025434-main.mp4",
              },
              {
                name: "2022-08-09 16:09:29",
                href: "http://120.157.118.37/alarms/103-1660025369.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660025369-main.mp4",
              },
              {
                name: "2022-08-09 16:00:52",
                href: "http://120.157.118.37/alarms/103-1660024852.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660024852-main.mp4",
              },
              {
                name: "2022-08-09 15:52:14",
                href: "http://120.157.118.37/alarms/103-1660024334.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660024334-main.mp4",
              },
              {
                name: "2022-08-09 15:50:28",
                href: "http://120.157.118.37/alarms/103-1660024228.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660024228-main.mp4",
              },
              {
                name: "2022-08-09 15:45:33",
                href: "http://120.157.118.37/alarms/103-1660023933.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660023933-main.mp4",
              },
              {
                name: "2022-08-09 15:45:08",
                href: "http://120.157.118.37/alarms/103-1660023908.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660023908-main.mp4",
              },
              {
                name: "2022-08-09 15:42:46",
                href: "http://120.157.118.37/alarms/103-1660023766.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660023766-main.mp4",
              },
              {
                name: "2022-08-09 15:36:32",
                href: "http://120.157.118.37/alarms/103-1660023392.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660023392-main.mp4",
              },
              {
                name: "2022-08-09 15:23:11",
                href: "http://120.157.118.37/alarms/103-1660022591.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660022591-main.mp4",
              },
              {
                name: "2022-08-09 15:18:37",
                href: "http://120.157.118.37/alarms/103-1660022317.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660022317-main.mp4",
              },
              {
                name: "2022-08-09 15:05:43",
                href: "http://120.157.118.37/alarms/103-1660021543.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660021543-main.mp4",
              },
              {
                name: "2022-08-09 15:03:52",
                href: "http://120.157.118.37/alarms/103-1660021432.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660021432-main.mp4",
              },
              {
                name: "2022-08-09 15:00:43",
                href: "http://120.157.118.37/alarms/103-1660021243.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660021243-main.mp4",
              },
              {
                name: "2022-08-09 14:59:18",
                href: "http://120.157.118.37/alarms/103-1660021158.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660021158-main.mp4",
              },
              {
                name: "2022-08-09 14:56:04",
                href: "http://120.157.118.37/alarms/103-1660020964.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660020964-main.mp4",
              },
              {
                name: "2022-08-09 14:43:08",
                href: "http://120.157.118.37/alarms/103-1660020188.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660020188-main.mp4",
              },
              {
                name: "2022-08-09 14:40:44",
                href: "http://120.157.118.37/alarms/103-1660020044.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660020044-main.mp4",
              },
              {
                name: "2022-08-09 14:39:20",
                href: "http://120.157.118.37/alarms/103-1660019960.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660019960-main.mp4",
              },
              {
                name: "2022-08-09 14:35:29",
                href: "http://120.157.118.37/alarms/103-1660019729.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660019729-main.mp4",
              },
              {
                name: "2022-08-09 14:28:42",
                href: "http://120.157.118.37/alarms/103-1660019322.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660019322-main.mp4",
              },
              {
                name: "2022-08-09 14:26:40",
                href: "http://120.157.118.37/alarms/103-1660019200.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660019200-main.mp4",
              },
              {
                name: "2022-08-09 14:15:25",
                href: "http://120.157.118.37/alarms/103-1660018525.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660018525-main.mp4",
              },
              {
                name: "2022-08-09 13:59:03",
                href: "http://120.157.118.37/alarms/103-1660017543.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660017543-main.mp4",
              },
              {
                name: "2022-08-09 13:55:10",
                href: "http://120.157.118.37/alarms/103-1660017310.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660017310-main.mp4",
              },
              {
                name: "2022-08-09 13:30:58",
                href: "http://120.157.118.37/alarms/103-1660015858.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660015858-main.mp4",
              },
              {
                name: "2022-08-09 13:20:06",
                href: "http://120.157.118.37/alarms/103-1660015206.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660015206-main.mp4",
              },
              {
                name: "2022-08-09 13:14:50",
                href: "http://120.157.118.37/alarms/103-1660014890.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660014890-main.mp4",
              },
              {
                name: "2022-08-09 13:08:42",
                href: "http://120.157.118.37/alarms/103-1660014522.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660014522-main.mp4",
              },
              {
                name: "2022-08-09 13:07:37",
                href: "http://120.157.118.37/alarms/103-1660014457.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660014457-main.mp4",
              },
              {
                name: "2022-08-09 13:06:23",
                href: "http://120.157.118.37/alarms/103-1660014383.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660014383-main.mp4",
              },
              {
                name: "2022-08-09 12:58:46",
                href: "http://120.157.118.37/alarms/103-1660013926.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660013926-main.mp4",
              },
              {
                name: "2022-08-09 12:57:19",
                href: "http://120.157.118.37/alarms/103-1660013839.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660013839-main.mp4",
              },
              {
                name: "2022-08-09 12:56:32",
                href: "http://120.157.118.37/alarms/103-1660013792.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660013792-main.mp4",
              },
              {
                name: "2022-08-09 12:56:05",
                href: "http://120.157.118.37/alarms/103-1660013765.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660013765-main.mp4",
              },
              {
                name: "2022-08-09 12:35:02",
                href: "http://120.157.118.37/alarms/103-1660012502.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660012502-main.mp4",
              },
              {
                name: "2022-08-09 12:34:27",
                href: "http://120.157.118.37/alarms/103-1660012467.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660012467-main.mp4",
              },
              {
                name: "2022-08-09 12:33:09",
                href: "http://120.157.118.37/alarms/103-1660012389.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660012389-main.mp4",
              },
              {
                name: "2022-08-09 12:26:28",
                href: "http://120.157.118.37/alarms/103-1660011988.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660011988-main.mp4",
              },
              {
                name: "2022-08-09 12:19:03",
                href: "http://120.157.118.37/alarms/103-1660011543.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660011543-main.mp4",
              },
              {
                name: "2022-08-09 12:10:07",
                href: "http://120.157.118.37/alarms/103-1660011007.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660011007-main.mp4",
              },
              {
                name: "2022-08-09 12:08:34",
                href: "http://120.157.118.37/alarms/103-1660010914.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660010914-main.mp4",
              },
              {
                name: "2022-08-09 12:04:50",
                href: "http://120.157.118.37/alarms/103-1660010690.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660010690-main.mp4",
              },
              {
                name: "2022-08-09 11:54:20",
                href: "http://120.157.118.37/alarms/103-1660010060.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660010060-main.mp4",
              },
              {
                name: "2022-08-09 11:41:45",
                href: "http://120.157.118.37/alarms/103-1660009305.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660009305-main.mp4",
              },
              {
                name: "2022-08-09 11:40:58",
                href: "http://120.157.118.37/alarms/103-1660009258.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660009258-main.mp4",
              },
              {
                name: "2022-08-09 11:40:37",
                href: "http://120.157.118.37/alarms/103-1660009237.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660009237-main.mp4",
              },
              {
                name: "2022-08-09 11:40:02",
                href: "http://120.157.118.37/alarms/103-1660009202.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660009202-main.mp4",
              },
              {
                name: "2022-08-09 11:39:32",
                href: "http://120.157.118.37/alarms/103-1660009172.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660009172-main.mp4",
              },
              {
                name: "2022-08-09 11:36:07",
                href: "http://120.157.118.37/alarms/103-1660008967.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660008967-main.mp4",
              },
              {
                name: "2022-08-09 11:28:45",
                href: "http://120.157.118.37/alarms/103-1660008525.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660008525-main.mp4",
              },
              {
                name: "2022-08-09 11:13:47",
                href: "http://120.157.118.37/alarms/103-1660007627.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660007627-main.mp4",
              },
              {
                name: "2022-08-09 10:47:18",
                href: "http://120.157.118.37/alarms/103-1660006038.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660006038-main.mp4",
              },
              {
                name: "2022-08-09 10:38:15",
                href: "http://120.157.118.37/alarms/103-1660005495.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660005495-main.mp4",
              },
              {
                name: "2022-08-09 10:37:30",
                href: "http://120.157.118.37/alarms/103-1660005450.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660005450-main.mp4",
              },
              {
                name: "2022-08-09 10:32:25",
                href: "http://120.157.118.37/alarms/103-1660005145.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660005145-main.mp4",
              },
              {
                name: "2022-08-09 10:31:44",
                href: "http://120.157.118.37/alarms/103-1660005104.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660005104-main.mp4",
              },
              {
                name: "2022-08-09 10:31:21",
                href: "http://120.157.118.37/alarms/103-1660005081.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660005081-main.mp4",
              },
              {
                name: "2022-08-09 10:15:38",
                href: "http://120.157.118.37/alarms/103-1660004138.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660004138-main.mp4",
              },
              {
                name: "2022-08-09 09:56:08",
                href: "http://120.157.118.37/alarms/103-1660002968.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660002968-main.mp4",
              },
              {
                name: "2022-08-09 09:54:36",
                href: "http://120.157.118.37/alarms/103-1660002876.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660002876-main.mp4",
              },
              {
                name: "2022-08-09 09:46:50",
                href: "http://120.157.118.37/alarms/103-1660002410.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660002410-main.mp4",
              },
              {
                name: "2022-08-09 09:46:07",
                href: "http://120.157.118.37/alarms/103-1660002367.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660002367-main.mp4",
              },
              {
                name: "2022-08-09 09:42:47",
                href: "http://120.157.118.37/alarms/103-1660002167.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660002167-main.mp4",
              },
              {
                name: "2022-08-09 09:21:03",
                href: "http://120.157.118.37/alarms/103-1660000863.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660000863-main.mp4",
              },
              {
                name: "2022-08-09 09:19:30",
                href: "http://120.157.118.37/alarms/103-1660000770.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660000770-main.mp4",
              },
              {
                name: "2022-08-09 09:12:56",
                href: "http://120.157.118.37/alarms/103-1660000376.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660000376-main.mp4",
              },
              {
                name: "2022-08-09 09:09:12",
                href: "http://120.157.118.37/alarms/103-1660000152.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1660000152-main.mp4",
              },
              {
                name: "2022-08-09 09:05:44",
                href: "http://120.157.118.37/alarms/103-1659999944.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659999944-main.mp4",
              },
              {
                name: "2022-08-09 09:04:29",
                href: "http://120.157.118.37/alarms/103-1659999869.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659999869-main.mp4",
              },
              {
                name: "2022-08-09 09:02:57",
                href: "http://120.157.118.37/alarms/103-1659999777.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659999777-main.mp4",
              },
              {
                name: "2022-08-09 09:01:10",
                href: "http://120.157.118.37/alarms/103-1659999670.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659999670-main.mp4",
              },
              {
                name: "2022-08-09 09:00:20",
                href: "http://120.157.118.37/alarms/103-1659999620.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659999620-main.mp4",
              },
              {
                name: "2022-08-09 08:54:07",
                href: "http://120.157.118.37/alarms/103-1659999247.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659999247-main.mp4",
              },
              {
                name: "2022-08-09 08:48:55",
                href: "http://120.157.118.37/alarms/103-1659998935.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659998935-main.mp4",
              },
              {
                name: "2022-08-09 08:45:58",
                href: "http://120.157.118.37/alarms/103-1659998758.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659998758-main.mp4",
              },
              {
                name: "2022-08-09 08:42:36",
                href: "http://120.157.118.37/alarms/103-1659998556.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659998556-main.mp4",
              },
              {
                name: "2022-08-09 08:40:39",
                href: "http://120.157.118.37/alarms/103-1659998439.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659998439-main.mp4",
              },
              {
                name: "2022-08-09 08:33:55",
                href: "http://120.157.118.37/alarms/103-1659998035.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659998035-main.mp4",
              },
              {
                name: "2022-08-09 08:31:56",
                href: "http://120.157.118.37/alarms/103-1659997916.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659997916-main.mp4",
              },
              {
                name: "2022-08-09 08:30:16",
                href: "http://120.157.118.37/alarms/103-1659997816.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659997816-main.mp4",
              },
              {
                name: "2022-08-09 08:28:20",
                href: "http://120.157.118.37/alarms/103-1659997700.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659997700-main.mp4",
              },
              {
                name: "2022-08-09 08:27:22",
                href: "http://120.157.118.37/alarms/103-1659997642.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659997642-main.mp4",
              },
              {
                name: "2022-08-09 08:24:31",
                href: "http://120.157.118.37/alarms/103-1659997471.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659997471-main.mp4",
              },
              {
                name: "2022-08-09 08:24:10",
                href: "http://120.157.118.37/alarms/103-1659997450.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659997450-main.mp4",
              },
              {
                name: "2022-08-09 08:23:07",
                href: "http://120.157.118.37/alarms/103-1659997387.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659997387-main.mp4",
              },
              {
                name: "2022-08-09 08:18:12",
                href: "http://120.157.118.37/alarms/103-1659997092.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659997092-main.mp4",
              },
              {
                name: "2022-08-09 08:16:27",
                href: "http://120.157.118.37/alarms/103-1659996987.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659996987-main.mp4",
              },
              {
                name: "2022-08-09 08:15:30",
                href: "http://120.157.118.37/alarms/103-1659996930.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659996930-main.mp4",
              },
              {
                name: "2022-08-09 08:05:47",
                href: "http://120.157.118.37/alarms/103-1659996347.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659996347-main.mp4",
              },
              {
                name: "2022-08-09 08:03:55",
                href: "http://120.157.118.37/alarms/103-1659996235.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659996235-main.mp4",
              },
              {
                name: "2022-08-09 08:01:28",
                href: "http://120.157.118.37/alarms/103-1659996088.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659996088-main.mp4",
              },
              {
                name: "2022-08-09 07:59:29",
                href: "http://120.157.118.37/alarms/103-1659995969.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659995969-main.mp4",
              },
              {
                name: "2022-08-09 07:58:01",
                href: "http://120.157.118.37/alarms/103-1659995881.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659995881-main.mp4",
              },
              {
                name: "2022-08-09 07:54:30",
                href: "http://120.157.118.37/alarms/103-1659995670.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659995670-main.mp4",
              },
              {
                name: "2022-08-09 07:51:36",
                href: "http://120.157.118.37/alarms/103-1659995496.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659995496-main.mp4",
              },
              {
                name: "2022-08-09 07:37:16",
                href: "http://120.157.118.37/alarms/103-1659994636.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659994636-main.mp4",
              },
              {
                name: "2022-08-09 07:17:53",
                href: "http://120.157.118.37/alarms/103-1659993473.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659993473-main.mp4",
              },
              {
                name: "2022-08-09 07:13:13",
                href: "http://120.157.118.37/alarms/103-1659993193.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659993193-main.mp4",
              },
              {
                name: "2022-08-09 07:08:21",
                href: "http://120.157.118.37/alarms/103-1659992901.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659992901-main.mp4",
              },
              {
                name: "2022-08-09 07:06:28",
                href: "http://120.157.118.37/alarms/103-1659992788.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659992788-main.mp4",
              },
              {
                name: "2022-08-09 06:58:50",
                href: "http://120.157.118.37/alarms/103-1659992330.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659992330-main.mp4",
              },
              {
                name: "2022-08-09 06:54:49",
                href: "http://120.157.118.37/alarms/103-1659992089.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659992089-main.mp4",
              },
              {
                name: "2022-08-09 06:50:19",
                href: "http://120.157.118.37/alarms/103-1659991819.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659991819-main.mp4",
              },
              {
                name: "2022-08-09 06:38:05",
                href: "http://120.157.118.37/alarms/103-1659991085.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659991085-main.mp4",
              },
              {
                name: "2022-08-09 06:33:58",
                href: "http://120.157.118.37/alarms/103-1659990838.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659990838-main.mp4",
              },
              {
                name: "2022-08-09 06:22:12",
                href: "http://120.157.118.37/alarms/103-1659990132.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659990132-main.mp4",
              },
              {
                name: "2022-08-09 06:15:44",
                href: "http://120.157.118.37/alarms/103-1659989744.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659989744-main.mp4",
              },
              {
                name: "2022-08-09 06:11:39",
                href: "http://120.157.118.37/alarms/103-1659989499.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659989499-main.mp4",
              },
              {
                name: "2022-08-08 19:24:04",
                href: "http://120.157.118.37/alarms/103-1659950644.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659950644-main.mp4",
              },
              {
                name: "2022-08-08 18:31:24",
                href: "http://120.157.118.37/alarms/103-1659947484.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659947484-main.mp4",
              },
              {
                name: "2022-08-08 18:27:31",
                href: "http://120.157.118.37/alarms/103-1659947251.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659947251-main.mp4",
              },
              {
                name: "2022-08-08 18:27:05",
                href: "http://120.157.118.37/alarms/103-1659947225.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659947225-main.mp4",
              },
              {
                name: "2022-08-08 18:26:43",
                href: "http://120.157.118.37/alarms/103-1659947203.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659947203-main.mp4",
              },
              {
                name: "2022-08-08 18:08:48",
                href: "http://120.157.118.37/alarms/103-1659946128.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659946128-main.mp4",
              },
              {
                name: "2022-08-08 17:52:41",
                href: "http://120.157.118.37/alarms/103-1659945161.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659945161-main.mp4",
              },
              {
                name: "2022-08-08 17:37:35",
                href: "http://120.157.118.37/alarms/103-1659944255.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659944255-main.mp4",
              },
              {
                name: "2022-08-08 17:30:14",
                href: "http://120.157.118.37/alarms/103-1659943814.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659943814-main.mp4",
              },
              {
                name: "2022-08-08 17:22:28",
                href: "http://120.157.118.37/alarms/103-1659943348.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659943348-main.mp4",
              },
              {
                name: "2022-08-08 17:20:53",
                href: "http://120.157.118.37/alarms/103-1659943253.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659943253-main.mp4",
              },
              {
                name: "2022-08-08 17:20:10",
                href: "http://120.157.118.37/alarms/103-1659943210.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659943210-main.mp4",
              },
              {
                name: "2022-08-08 17:06:55",
                href: "http://120.157.118.37/alarms/103-1659942415.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659942415-main.mp4",
              },
              {
                name: "2022-08-08 17:05:31",
                href: "http://120.157.118.37/alarms/103-1659942331.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659942331-main.mp4",
              },
              {
                name: "2022-08-08 17:04:08",
                href: "http://120.157.118.37/alarms/103-1659942248.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659942248-main.mp4",
              },
              {
                name: "2022-08-08 17:00:26",
                href: "http://120.157.118.37/alarms/103-1659942026.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659942026-main.mp4",
              },
              {
                name: "2022-08-08 17:00:05",
                href: "http://120.157.118.37/alarms/103-1659942005.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659942005-main.mp4",
              },
              {
                name: "2022-08-08 16:57:21",
                href: "http://120.157.118.37/alarms/103-1659941841.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659941841-main.mp4",
              },
              {
                name: "2022-08-08 16:56:34",
                href: "http://120.157.118.37/alarms/103-1659941794.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659941794-main.mp4",
              },
              {
                name: "2022-08-08 16:50:24",
                href: "http://120.157.118.37/alarms/103-1659941424.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659941424-main.mp4",
              },
              {
                name: "2022-08-08 16:49:00",
                href: "http://120.157.118.37/alarms/103-1659941340.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659941340-main.mp4",
              },
              {
                name: "2022-08-08 16:48:25",
                href: "http://120.157.118.37/alarms/103-1659941305.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659941305-main.mp4",
              },
              {
                name: "2022-08-08 16:46:59",
                href: "http://120.157.118.37/alarms/103-1659941219.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659941219-main.mp4",
              },
              {
                name: "2022-08-08 16:45:03",
                href: "http://120.157.118.37/alarms/103-1659941103.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659941103-main.mp4",
              },
              {
                name: "2022-08-08 16:44:24",
                href: "http://120.157.118.37/alarms/103-1659941064.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659941064-main.mp4",
              },
              {
                name: "2022-08-08 16:37:29",
                href: "http://120.157.118.37/alarms/103-1659940649.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659940649-main.mp4",
              },
              {
                name: "2022-08-08 16:36:40",
                href: "http://120.157.118.37/alarms/103-1659940600.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659940600-main.mp4",
              },
              {
                name: "2022-08-08 16:30:55",
                href: "http://120.157.118.37/alarms/103-1659940255.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659940255-main.mp4",
              },
              {
                name: "2022-08-08 16:29:27",
                href: "http://120.157.118.37/alarms/103-1659940167.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659940167-main.mp4",
              },
              {
                name: "2022-08-08 16:21:47",
                href: "http://120.157.118.37/alarms/103-1659939707.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659939707-main.mp4",
              },
              {
                name: "2022-08-08 16:14:52",
                href: "http://120.157.118.37/alarms/103-1659939292.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659939292-main.mp4",
              },
              {
                name: "2022-08-08 16:06:07",
                href: "http://120.157.118.37/alarms/103-1659938767.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659938767-main.mp4",
              },
              {
                name: "2022-08-08 15:58:14",
                href: "http://120.157.118.37/alarms/103-1659938294.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659938294-main.mp4",
              },
              {
                name: "2022-08-08 15:53:24",
                href: "http://120.157.118.37/alarms/103-1659938004.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659938004-main.mp4",
              },
              {
                name: "2022-08-08 15:53:03",
                href: "http://120.157.118.37/alarms/103-1659937983.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659937983-main.mp4",
              },
              {
                name: "2022-08-08 15:51:39",
                href: "http://120.157.118.37/alarms/103-1659937899.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659937899-main.mp4",
              },
              {
                name: "2022-08-08 15:51:08",
                href: "http://120.157.118.37/alarms/103-1659937868.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659937868-main.mp4",
              },
              {
                name: "2022-08-08 15:47:42",
                href: "http://120.157.118.37/alarms/103-1659937662.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659937662-main.mp4",
              },
              {
                name: "2022-08-08 15:45:11",
                href: "http://120.157.118.37/alarms/103-1659937511.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659937511-main.mp4",
              },
              {
                name: "2022-08-08 15:15:42",
                href: "http://120.157.118.37/alarms/103-1659935742.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659935742-main.mp4",
              },
              {
                name: "2022-08-08 15:11:40",
                href: "http://120.157.118.37/alarms/103-1659935500.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659935500-main.mp4",
              },
              {
                name: "2022-08-08 15:10:07",
                href: "http://120.157.118.37/alarms/103-1659935407.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659935407-main.mp4",
              },
              {
                name: "2022-08-08 14:42:16",
                href: "http://120.157.118.37/alarms/103-1659933736.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659933736-main.mp4",
              },
              {
                name: "2022-08-08 14:41:35",
                href: "http://120.157.118.37/alarms/103-1659933695.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659933695-main.mp4",
              },
              {
                name: "2022-08-08 14:35:10",
                href: "http://120.157.118.37/alarms/103-1659933310.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659933310-main.mp4",
              },
              {
                name: "2022-08-08 13:43:25",
                href: "http://120.157.118.37/alarms/103-1659930205.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659930205-main.mp4",
              },
              {
                name: "2022-08-08 13:09:05",
                href: "http://120.157.118.37/alarms/103-1659928145.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659928145-main.mp4",
              },
              {
                name: "2022-08-08 13:02:56",
                href: "http://120.157.118.37/alarms/103-1659927776.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659927776-main.mp4",
              },
              {
                name: "2022-08-08 13:01:27",
                href: "http://120.157.118.37/alarms/103-1659927687.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659927687-main.mp4",
              },
              {
                name: "2022-08-08 12:52:26",
                href: "http://120.157.118.37/alarms/103-1659927146.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659927146-main.mp4",
              },
              {
                name: "2022-08-08 12:31:45",
                href: "http://120.157.118.37/alarms/103-1659925905.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659925905-main.mp4",
              },
              {
                name: "2022-08-08 12:24:20",
                href: "http://120.157.118.37/alarms/103-1659925460.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659925460-main.mp4",
              },
              {
                name: "2022-08-08 12:20:28",
                href: "http://120.157.118.37/alarms/103-1659925228.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659925228-main.mp4",
              },
              {
                name: "2022-08-08 12:03:22",
                href: "http://120.157.118.37/alarms/103-1659924202.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659924202-main.mp4",
              },
              {
                name: "2022-08-08 11:54:10",
                href: "http://120.157.118.37/alarms/103-1659923650.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659923650-main.mp4",
              },
              {
                name: "2022-08-08 11:49:33",
                href: "http://120.157.118.37/alarms/103-1659923373.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659923373-main.mp4",
              },
              {
                name: "2022-08-08 11:34:53",
                href: "http://120.157.118.37/alarms/103-1659922493.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659922493-main.mp4",
              },
              {
                name: "2022-08-08 11:33:40",
                href: "http://120.157.118.37/alarms/103-1659922420.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659922420-main.mp4",
              },
              {
                name: "2022-08-08 11:29:42",
                href: "http://120.157.118.37/alarms/103-1659922182.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659922182-main.mp4",
              },
              {
                name: "2022-08-08 11:19:17",
                href: "http://120.157.118.37/alarms/103-1659921557.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659921557-main.mp4",
              },
              {
                name: "2022-08-08 11:16:03",
                href: "http://120.157.118.37/alarms/103-1659921363.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659921363-main.mp4",
              },
              {
                name: "2022-08-08 11:07:26",
                href: "http://120.157.118.37/alarms/103-1659920846.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659920846-main.mp4",
              },
              {
                name: "2022-08-08 11:02:31",
                href: "http://120.157.118.37/alarms/103-1659920551.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659920551-main.mp4",
              },
              {
                name: "2022-08-08 10:52:37",
                href: "http://120.157.118.37/alarms/103-1659919957.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659919957-main.mp4",
              },
              {
                name: "2022-08-08 10:51:42",
                href: "http://120.157.118.37/alarms/103-1659919902.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659919902-main.mp4",
              },
              {
                name: "2022-08-08 10:43:13",
                href: "http://120.157.118.37/alarms/103-1659919393.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659919393-main.mp4",
              },
              {
                name: "2022-08-08 10:35:09",
                href: "http://120.157.118.37/alarms/103-1659918909.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659918909-main.mp4",
              },
              {
                name: "2022-08-08 10:34:39",
                href: "http://120.157.118.37/alarms/103-1659918879.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659918879-main.mp4",
              },
              {
                name: "2022-08-08 10:24:40",
                href: "http://120.157.118.37/alarms/103-1659918280.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659918280-main.mp4",
              },
              {
                name: "2022-08-08 10:20:57",
                href: "http://120.157.118.37/alarms/103-1659918057.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659918057-main.mp4",
              },
              {
                name: "2022-08-08 10:03:30",
                href: "http://120.157.118.37/alarms/103-1659917010.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659917010-main.mp4",
              },
              {
                name: "2022-08-08 10:02:03",
                href: "http://120.157.118.37/alarms/103-1659916923.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659916923-main.mp4",
              },
              {
                name: "2022-08-08 10:00:45",
                href: "http://120.157.118.37/alarms/103-1659916845.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659916845-main.mp4",
              },
              {
                name: "2022-08-08 09:56:25",
                href: "http://120.157.118.37/alarms/103-1659916585.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659916585-main.mp4",
              },
              {
                name: "2022-08-08 09:34:33",
                href: "http://120.157.118.37/alarms/103-1659915273.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659915273-main.mp4",
              },
              {
                name: "2022-08-08 09:24:20",
                href: "http://120.157.118.37/alarms/103-1659914660.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659914660-main.mp4",
              },
              {
                name: "2022-08-08 09:21:50",
                href: "http://120.157.118.37/alarms/103-1659914510.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659914510-main.mp4",
              },
              {
                name: "2022-08-08 09:19:03",
                href: "http://120.157.118.37/alarms/103-1659914343.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659914343-main.mp4",
              },
              {
                name: "2022-08-08 09:18:16",
                href: "http://120.157.118.37/alarms/103-1659914296.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659914296-main.mp4",
              },
              {
                name: "2022-08-08 09:16:52",
                href: "http://120.157.118.37/alarms/103-1659914212.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659914212-main.mp4",
              },
              {
                name: "2022-08-08 09:13:51",
                href: "http://120.157.118.37/alarms/103-1659914031.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659914031-main.mp4",
              },
              {
                name: "2022-08-08 09:11:04",
                href: "http://120.157.118.37/alarms/103-1659913864.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659913864-main.mp4",
              },
              {
                name: "2022-08-08 09:09:34",
                href: "http://120.157.118.37/alarms/103-1659913774.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659913774-main.mp4",
              },
              {
                name: "2022-08-08 09:07:31",
                href: "http://120.157.118.37/alarms/103-1659913651.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659913651-main.mp4",
              },
              {
                name: "2022-08-08 09:00:32",
                href: "http://120.157.118.37/alarms/103-1659913232.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659913232-main.mp4",
              },
              {
                name: "2022-08-08 08:59:17",
                href: "http://120.157.118.37/alarms/103-1659913157.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659913157-main.mp4",
              },
              {
                name: "2022-08-08 08:58:36",
                href: "http://120.157.118.37/alarms/103-1659913116.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659913116-main.mp4",
              },
              {
                name: "2022-08-08 08:57:11",
                href: "http://120.157.118.37/alarms/103-1659913031.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659913031-main.mp4",
              },
              {
                name: "2022-08-08 08:55:25",
                href: "http://120.157.118.37/alarms/103-1659912925.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659912925-main.mp4",
              },
              {
                name: "2022-08-08 08:50:09",
                href: "http://120.157.118.37/alarms/103-1659912609.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659912609-main.mp4",
              },
              {
                name: "2022-08-08 08:45:15",
                href: "http://120.157.118.37/alarms/103-1659912315.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659912315-main.mp4",
              },
              {
                name: "2022-08-08 08:32:44",
                href: "http://120.157.118.37/alarms/103-1659911564.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659911564-main.mp4",
              },
              {
                name: "2022-08-08 08:23:44",
                href: "http://120.157.118.37/alarms/103-1659911024.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659911024-main.mp4",
              },
              {
                name: "2022-08-08 08:22:01",
                href: "http://120.157.118.37/alarms/103-1659910921.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659910921-main.mp4",
              },
              {
                name: "2022-08-08 08:19:37",
                href: "http://120.157.118.37/alarms/103-1659910777.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659910777-main.mp4",
              },
              {
                name: "2022-08-08 08:07:19",
                href: "http://120.157.118.37/alarms/103-1659910039.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659910039-main.mp4",
              },
              {
                name: "2022-08-08 08:01:52",
                href: "http://120.157.118.37/alarms/103-1659909712.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659909712-main.mp4",
              },
              {
                name: "2022-08-08 07:56:57",
                href: "http://120.157.118.37/alarms/103-1659909417.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659909417-main.mp4",
              },
              {
                name: "2022-08-08 07:46:54",
                href: "http://120.157.118.37/alarms/103-1659908814.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659908814-main.mp4",
              },
              {
                name: "2022-08-08 07:45:13",
                href: "http://120.157.118.37/alarms/103-1659908713.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659908713-main.mp4",
              },
              {
                name: "2022-08-08 07:37:40",
                href: "http://120.157.118.37/alarms/103-1659908260.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659908260-main.mp4",
              },
              {
                name: "2022-08-08 07:27:19",
                href: "http://120.157.118.37/alarms/103-1659907639.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659907639-main.mp4",
              },
              {
                name: "2022-08-08 07:18:50",
                href: "http://120.157.118.37/alarms/103-1659907130.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659907130-main.mp4",
              },
              {
                name: "2022-08-08 07:18:18",
                href: "http://120.157.118.37/alarms/103-1659907098.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659907098-main.mp4",
              },
              {
                name: "2022-08-08 07:17:22",
                href: "http://120.157.118.37/alarms/103-1659907042.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659907042-main.mp4",
              },
              {
                name: "2022-08-08 07:13:49",
                href: "http://120.157.118.37/alarms/103-1659906829.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659906829-main.mp4",
              },
              {
                name: "2022-08-08 06:57:37",
                href: "http://120.157.118.37/alarms/103-1659905857.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659905857-main.mp4",
              },
              {
                name: "2022-08-08 06:56:28",
                href: "http://120.157.118.37/alarms/103-1659905788.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659905788-main.mp4",
              },
              {
                name: "2022-08-08 06:54:10",
                href: "http://120.157.118.37/alarms/103-1659905650.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659905650-main.mp4",
              },
              {
                name: "2022-08-08 06:53:19",
                href: "http://120.157.118.37/alarms/103-1659905599.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659905599-main.mp4",
              },
              {
                name: "2022-08-08 06:52:01",
                href: "http://120.157.118.37/alarms/103-1659905521.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659905521-main.mp4",
              },
              {
                name: "2022-08-08 06:48:46",
                href: "http://120.157.118.37/alarms/103-1659905326.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659905326-main.mp4",
              },
              {
                name: "2022-08-08 06:44:53",
                href: "http://120.157.118.37/alarms/103-1659905093.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659905093-main.mp4",
              },
              {
                name: "2022-08-08 06:41:41",
                href: "http://120.157.118.37/alarms/103-1659904901.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659904901-main.mp4",
              },
              {
                name: "2022-08-08 06:33:42",
                href: "http://120.157.118.37/alarms/103-1659904422.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659904422-main.mp4",
              },
              {
                name: "2022-08-08 06:24:57",
                href: "http://120.157.118.37/alarms/103-1659903897.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659903897-main.mp4",
              },
              {
                name: "2022-08-08 06:00:54",
                href: "http://120.157.118.37/alarms/103-1659902454.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659902454-main.mp4",
              },
              {
                name: "2022-08-07 17:32:10",
                href: "http://120.157.118.37/alarms/103-1659857530.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659857530-main.mp4",
              },
              {
                name: "2022-08-07 17:27:51",
                href: "http://120.157.118.37/alarms/103-1659857271.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659857271-main.mp4",
              },
              {
                name: "2022-08-07 16:43:55",
                href: "http://120.157.118.37/alarms/103-1659854635.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659854635-main.mp4",
              },
              {
                name: "2022-08-07 16:37:48",
                href: "http://120.157.118.37/alarms/103-1659854268.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659854268-main.mp4",
              },
              {
                name: "2022-08-07 16:19:50",
                href: "http://120.157.118.37/alarms/103-1659853190.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659853190-main.mp4",
              },
              {
                name: "2022-08-07 16:15:24",
                href: "http://120.157.118.37/alarms/103-1659852924.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659852924-main.mp4",
              },
              {
                name: "2022-08-07 15:05:32",
                href: "http://120.157.118.37/alarms/103-1659848732.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659848732-main.mp4",
              },
              {
                name: "2022-08-07 14:42:52",
                href: "http://120.157.118.37/alarms/103-1659847372.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659847372-main.mp4",
              },
              {
                name: "2022-08-07 14:29:07",
                href: "http://120.157.118.37/alarms/103-1659846547.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659846547-main.mp4",
              },
              {
                name: "2022-08-07 14:23:14",
                href: "http://120.157.118.37/alarms/103-1659846194.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659846194-main.mp4",
              },
              {
                name: "2022-08-07 14:21:41",
                href: "http://120.157.118.37/alarms/103-1659846101.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659846101-main.mp4",
              },
              {
                name: "2022-08-07 14:10:58",
                href: "http://120.157.118.37/alarms/103-1659845458.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659845458-main.mp4",
              },
              {
                name: "2022-08-07 14:09:47",
                href: "http://120.157.118.37/alarms/103-1659845387.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659845387-main.mp4",
              },
              {
                name: "2022-08-07 14:08:45",
                href: "http://120.157.118.37/alarms/103-1659845325.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659845325-main.mp4",
              },
              {
                name: "2022-08-07 14:06:24",
                href: "http://120.157.118.37/alarms/103-1659845184.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659845184-main.mp4",
              },
              {
                name: "2022-08-07 13:34:04",
                href: "http://120.157.118.37/alarms/103-1659843244.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659843244-main.mp4",
              },
              {
                name: "2022-08-07 13:09:32",
                href: "http://120.157.118.37/alarms/103-1659841772.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659841772-main.mp4",
              },
              {
                name: "2022-08-07 12:58:08",
                href: "http://120.157.118.37/alarms/103-1659841088.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659841088-main.mp4",
              },
              {
                name: "2022-08-07 12:55:25",
                href: "http://120.157.118.37/alarms/103-1659840925.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659840925-main.mp4",
              },
              {
                name: "2022-08-07 12:42:29",
                href: "http://120.157.118.37/alarms/103-1659840149.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659840149-main.mp4",
              },
              {
                name: "2022-08-07 11:42:31",
                href: "http://120.157.118.37/alarms/103-1659836551.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659836551-main.mp4",
              },
              {
                name: "2022-08-07 11:32:10",
                href: "http://120.157.118.37/alarms/103-1659835930.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659835930-main.mp4",
              },
              {
                name: "2022-08-07 11:30:30",
                href: "http://120.157.118.37/alarms/103-1659835830.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659835830-main.mp4",
              },
              {
                name: "2022-08-07 11:14:46",
                href: "http://120.157.118.37/alarms/103-1659834886.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659834886-main.mp4",
              },
              {
                name: "2022-08-07 10:59:18",
                href: "http://120.157.118.37/alarms/103-1659833958.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659833958-main.mp4",
              },
              {
                name: "2022-08-07 10:48:10",
                href: "http://120.157.118.37/alarms/103-1659833290.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659833290-main.mp4",
              },
              {
                name: "2022-08-07 10:42:08",
                href: "http://120.157.118.37/alarms/103-1659832928.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659832928-main.mp4",
              },
              {
                name: "2022-08-07 10:41:25",
                href: "http://120.157.118.37/alarms/103-1659832885.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659832885-main.mp4",
              },
              {
                name: "2022-08-07 10:33:39",
                href: "http://120.157.118.37/alarms/103-1659832419.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659832419-main.mp4",
              },
              {
                name: "2022-08-07 10:31:43",
                href: "http://120.157.118.37/alarms/103-1659832303.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659832303-main.mp4",
              },
              {
                name: "2022-08-07 10:25:56",
                href: "http://120.157.118.37/alarms/103-1659831956.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659831956-main.mp4",
              },
              {
                name: "2022-08-07 10:24:00",
                href: "http://120.157.118.37/alarms/103-1659831840.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659831840-main.mp4",
              },
              {
                name: "2022-08-07 10:22:30",
                href: "http://120.157.118.37/alarms/103-1659831750.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659831750-main.mp4",
              },
              {
                name: "2022-08-07 10:21:40",
                href: "http://120.157.118.37/alarms/103-1659831700.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659831700-main.mp4",
              },
              {
                name: "2022-08-07 10:06:59",
                href: "http://120.157.118.37/alarms/103-1659830819.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659830819-main.mp4",
              },
              {
                name: "2022-08-07 10:06:17",
                href: "http://120.157.118.37/alarms/103-1659830777.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659830777-main.mp4",
              },
              {
                name: "2022-08-07 09:46:17",
                href: "http://120.157.118.37/alarms/103-1659829577.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659829577-main.mp4",
              },
              {
                name: "2022-08-07 09:44:03",
                href: "http://120.157.118.37/alarms/103-1659829443.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659829443-main.mp4",
              },
              {
                name: "2022-08-07 09:40:49",
                href: "http://120.157.118.37/alarms/103-1659829249.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659829249-main.mp4",
              },
              {
                name: "2022-08-07 09:22:18",
                href: "http://120.157.118.37/alarms/103-1659828138.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659828138-main.mp4",
              },
              {
                name: "2022-08-07 08:32:34",
                href: "http://120.157.118.37/alarms/103-1659825154.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659825154-main.mp4",
              },
              {
                name: "2022-08-07 07:30:33",
                href: "http://120.157.118.37/alarms/103-1659821433.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659821433-main.mp4",
              },
              {
                name: "2022-08-06 23:47:14",
                href: "http://120.157.118.37/alarms/103-1659793634.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659793634-main.mp4",
              },
              {
                name: "2022-08-06 16:01:07",
                href: "http://120.157.118.37/alarms/103-1659765667.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659765667-main.mp4",
              },
              {
                name: "2022-08-06 16:00:45",
                href: "http://120.157.118.37/alarms/103-1659765645.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659765645-main.mp4",
              },
              {
                name: "2022-08-06 15:57:44",
                href: "http://120.157.118.37/alarms/103-1659765464.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659765464-main.mp4",
              },
              {
                name: "2022-08-06 15:57:22",
                href: "http://120.157.118.37/alarms/103-1659765442.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659765442-main.mp4",
              },
              {
                name: "2022-08-06 15:56:59",
                href: "http://120.157.118.37/alarms/103-1659765419.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659765419-main.mp4",
              },
              {
                name: "2022-08-06 15:55:10",
                href: "http://120.157.118.37/alarms/103-1659765310.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659765310-main.mp4",
              },
              {
                name: "2022-08-06 15:50:11",
                href: "http://120.157.118.37/alarms/103-1659765011.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659765011-main.mp4",
              },
              {
                name: "2022-08-06 15:49:31",
                href: "http://120.157.118.37/alarms/103-1659764971.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659764971-main.mp4",
              },
              {
                name: "2022-08-06 15:48:57",
                href: "http://120.157.118.37/alarms/103-1659764937.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659764937-main.mp4",
              },
              {
                name: "2022-08-06 15:48:27",
                href: "http://120.157.118.37/alarms/103-1659764907.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659764907-main.mp4",
              },
              {
                name: "2022-08-06 15:47:48",
                href: "http://120.157.118.37/alarms/103-1659764868.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659764868-main.mp4",
              },
              {
                name: "2022-08-06 15:26:41",
                href: "http://120.157.118.37/alarms/103-1659763601.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659763601-main.mp4",
              },
              {
                name: "2022-08-06 15:26:08",
                href: "http://120.157.118.37/alarms/103-1659763568.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659763568-main.mp4",
              },
              {
                name: "2022-08-06 15:20:37",
                href: "http://120.157.118.37/alarms/103-1659763237.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659763237-main.mp4",
              },
              {
                name: "2022-08-06 15:18:36",
                href: "http://120.157.118.37/alarms/103-1659763116.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659763116-main.mp4",
              },
              {
                name: "2022-08-06 15:12:02",
                href: "http://120.157.118.37/alarms/103-1659762722.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659762722-main.mp4",
              },
              {
                name: "2022-08-06 15:10:26",
                href: "http://120.157.118.37/alarms/103-1659762626.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659762626-main.mp4",
              },
              {
                name: "2022-08-06 15:09:51",
                href: "http://120.157.118.37/alarms/103-1659762591.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659762591-main.mp4",
              },
              {
                name: "2022-08-06 14:53:14",
                href: "http://120.157.118.37/alarms/103-1659761594.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659761594-main.mp4",
              },
              {
                name: "2022-08-06 12:18:48",
                href: "http://120.157.118.37/alarms/103-1659752328.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659752328-main.mp4",
              },
              {
                name: "2022-08-06 12:15:01",
                href: "http://120.157.118.37/alarms/103-1659752101.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659752101-main.mp4",
              },
              {
                name: "2022-08-06 12:11:57",
                href: "http://120.157.118.37/alarms/103-1659751917.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659751917-main.mp4",
              },
              {
                name: "2022-08-06 12:10:41",
                href: "http://120.157.118.37/alarms/103-1659751841.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659751841-main.mp4",
              },
              {
                name: "2022-08-06 12:10:09",
                href: "http://120.157.118.37/alarms/103-1659751809.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659751809-main.mp4",
              },
              {
                name: "2022-08-06 12:08:39",
                href: "http://120.157.118.37/alarms/103-1659751719.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659751719-main.mp4",
              },
              {
                name: "2022-08-06 12:01:47",
                href: "http://120.157.118.37/alarms/103-1659751307.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659751307-main.mp4",
              },
              {
                name: "2022-08-06 10:21:17",
                href: "http://120.157.118.37/alarms/103-1659745277.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659745277-main.mp4",
              },
              {
                name: "2022-08-06 08:58:18",
                href: "http://120.157.118.37/alarms/103-1659740298.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659740298-main.mp4",
              },
              {
                name: "2022-08-06 08:04:59",
                href: "http://120.157.118.37/alarms/103-1659737099.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659737099-main.mp4",
              },
              {
                name: "2022-08-06 06:49:01",
                href: "http://120.157.118.37/alarms/103-1659732541.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659732541-main.mp4",
              },
              {
                name: "2022-08-06 05:23:32",
                href: "http://120.157.118.37/alarms/103-1659727412.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659727412-main.mp4",
              },
              {
                name: "2022-08-06 05:22:04",
                href: "http://120.157.118.37/alarms/103-1659727324.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659727324-main.mp4",
              },
              {
                name: "2022-08-05 23:46:19",
                href: "http://120.157.118.37/alarms/103-1659707179.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659707179-main.mp4",
              },
              {
                name: "2022-08-05 21:36:33",
                href: "http://120.157.118.37/alarms/103-1659699393.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659699393-main.mp4",
              },
              {
                name: "2022-08-05 20:33:36",
                href: "http://120.157.118.37/alarms/103-1659695616.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659695616-main.mp4",
              },
              {
                name: "2022-08-05 19:50:47",
                href: "http://120.157.118.37/alarms/103-1659693047.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659693047-main.mp4",
              },
              {
                name: "2022-08-05 19:30:38",
                href: "http://120.157.118.37/alarms/103-1659691838.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659691838-main.mp4",
              },
              {
                name: "2022-08-05 18:28:52",
                href: "http://120.157.118.37/alarms/103-1659688132.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659688132-main.mp4",
              },
              {
                name: "2022-08-05 18:02:49",
                href: "http://120.157.118.37/alarms/103-1659686569.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659686569-main.mp4",
              },
              {
                name: "2022-08-05 17:47:18",
                href: "http://120.157.118.37/alarms/103-1659685638.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659685638-main.mp4",
              },
              {
                name: "2022-08-05 17:26:06",
                href: "http://120.157.118.37/alarms/103-1659684366.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659684366-main.mp4",
              },
              {
                name: "2022-08-05 16:53:50",
                href: "http://120.157.118.37/alarms/103-1659682430.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659682430-main.mp4",
              },
              {
                name: "2022-08-05 16:16:17",
                href: "http://120.157.118.37/alarms/103-1659680177.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659680177-main.mp4",
              },
            ],
          };
      });
      this.namespace = "";
      this.get("maintenance", () => {
        return {
          armed: true,
          camera: false,
          cpu: 20,
          load_current: 22,
          memory: 33,
          primary_disk: 44,
          temperature: 44,
          uptime: 432234,
        };
      });
    },
  });
  // console.log(server)
  return server;
}
