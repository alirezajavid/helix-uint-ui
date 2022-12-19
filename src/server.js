import { Server, Model } from "miragejs";

export function makeServer ({ environment = "development" } = {})
{
  let server = new Server({
    environment,
    models: {
      todo: Model,
    },
    seeds (server)
    {
      server.create("todo", { content: "Learn Mirage JS" });
      server.create("todo", { content: "Integrate With Vue.js" });
    },
    routes ()
    {
      this.namespace = "api";
      this.get("footages", () =>
      {
        return {
          success: true,
          footages: [
            {
              name: "2022-12-16 12:00",
              href: "http://120.157.72.86/frames/074_202212161200_20.mp4"
            },
            {
              name: "2022-12-16 10:00",
              href: "http://120.157.72.86/frames/074_202212161000_20.mp4"
            },
            {
              name: "2022-12-16 00:00",
              href: "http://120.157.72.86/frames/074_202212160000_20.mp4"
            },
            {
              name: "2022-12-15 08:00",
              href: "http://120.157.72.86/frames/074_202212150800_30.mp4"
            }
          ]
        }

      });
      this.get("capture_snapshot", () =>
      {
        return { success: true, token: 'TOKEN' };
      });
      this.get("footage_demand", () =>
      {
        return { success: true, token: 'TOKEN' };
      });
      this.get("snapshot_inquiry", () =>
      {
        return { state: 'end', result: 'http://120.157.72.86/frames/074_202212161200_20.mp4' };
      });
      this.get("footage_inquiry", () =>
      {
        return { state: 'end', result: 'http://120.157.72.86/frames/074_202212161200_20.mp4' };
      });
      this.get("unit_id", () =>
      {
        return { unit_id: 323103 };
      });
      this.delete("alarms", () =>
      {
        return { success: true };
      });
      this.get("camera_types", () =>
      {
        return { camera_types: ["1", "2"] };
      });
      this.get("configs", () =>
      {
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
      this.post("configs", () =>
      {
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
      this.get("status_quo", () =>
      {
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
      this.get("alarms", (i, d) =>
      {
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
                name: "2022-08-05 16:16:17",
                href: "http://120.157.118.37/alarms/103-1659680177.mp4",
                download:
                  "http://120.157.118.37/alarms/103-1659680177-main.mp4",
              },
            ],
          };
      });
      this.namespace = "";
      this.get("maintenance", () =>
      {
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
