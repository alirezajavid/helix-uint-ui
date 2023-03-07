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
      this.get("storage/info", (schema, request) =>
      {
        return {
          success: true,
          oldest_record: "2012-01-01 12:10:11",
          latest_record: "2022-01-01 12:10:11",
          size: 10000,
        };
      });
      this.get("snapshots", (schema, request) =>
      {
        return {
          success: true,
          snapshots: [
            {
              name: "2023-01-08 20:06:33",
              href: "http://103.solar.helixsec.live/jpeg/22-1673168457.jpg?rnd=1673210619",
            },
            {
              name: "2023-01-08 20:06:33",
              href: "http://103.solar.helixsec.live/jpeg/22-1673167780.jpg?rnd=1673210619",
            },
            {
              name: "2023-01-08 20:06:32",
              href: "http://103.solar.helixsec.live/jpeg/22-1673167126.jpg?rnd=1673210619",
            },
            {
              name: "2023-01-08 20:06:32",
              href: "http://103.solar.helixsec.live/jpeg/22-1673166451.jpg?rnd=1673210619",
            },
            {
              name: "2023-01-08 20:06:32",
              href: "http://103.solar.helixsec.live/jpeg/22-1673165776.jpg?rnd=1673210619",
            },
            {
              name: "2023-01-08 20:06:32",
              href: "http://103.solar.helixsec.live/jpeg/22-1673165310.jpg?rnd=1673210619",
            },
            {
              name: "2023-01-08 20:06:32",
              href: "http://103.solar.helixsec.live/jpeg/22-1673164653.jpg?rnd=1673210619",
            },
            {
              name: "2023-01-08 20:06:32",
              href: "http://103.solar.helixsec.live/jpeg/22-1673163990.jpg?rnd=1673210619",
            },
            {
              name: "2023-01-08 20:06:31",
              href: "http://103.solar.helixsec.live/jpeg/22-1673163331.jpg?rnd=1673210619",
            },
            {
              name: "2023-01-08 20:06:31",
              href: "http://103.solar.helixsec.live/jpeg/22-1673162668.jpg?rnd=1673210619",
            },
            {
              name: "2023-01-08 20:06:31",
              href: "http://103.solar.helixsec.live/jpeg/22-1673161999.jpg?rnd=1673210619",
            },
            {
              name: "2023-01-08 20:06:31",
              href: "http://103.solar.helixsec.live/jpeg/22-1673161324.jpg?rnd=1673210619",
            },
            {
              name: "2023-01-08 20:06:31",
              href: "http://103.solar.helixsec.live/jpeg/22-1673160650.jpg?rnd=1673210619",
            },
            {
              name: "2023-01-08 20:06:30",
              href: "http://103.solar.helixsec.live/jpeg/22-1673159960.jpg?rnd=1673210619",
            },
            {
              name: "2023-01-08 20:06:30",
              href: "http://103.solar.helixsec.live/jpeg/22-1673159300.jpg?rnd=1673210619",
            },
            {
              name: "2023-01-08 20:06:30",
              href: "http://103.solar.helixsec.live/jpeg/22-1673158631.jpg?rnd=1673210619",
            },
            {
              name: "2023-01-08 20:06:30",
              href: "http://103.solar.helixsec.live/jpeg/22-1673157970.jpg?rnd=1673210619",
            },
            {
              name: "2023-01-08 20:06:29",
              href: "http://103.solar.helixsec.live/jpeg/22-1673157304.jpg?rnd=1673210619",
            },
            {
              name: "2023-01-08 20:06:29",
              href: "http://103.solar.helixsec.live/jpeg/22-1673156646.jpg?rnd=1673210619",
            },
            {
              name: "2023-01-08 20:06:29",
              href: "http://103.solar.helixsec.live/jpeg/22-1673155981.jpg?rnd=1673210619",
            },
            {
              name: "2023-01-08 20:06:29",
              href: "http://103.solar.helixsec.live/jpeg/22-1673155324.jpg?rnd=1673210619",
            },
            {
              name: "2023-01-08 20:06:29",
              href: "http://103.solar.helixsec.live/jpeg/22-1673154664.jpg?rnd=1673210619",
            },
            {
              name: "2023-01-08 20:06:28",
              href: "http://103.solar.helixsec.live/jpeg/22-1673153975.jpg?rnd=1673210619",
            },
            {
              name: "2023-01-08 20:06:28",
              href: "http://103.solar.helixsec.live/jpeg/22-1673153319.jpg?rnd=1673210619",
            },
            {
              name: "2023-01-08 20:06:28",
              href: "http://103.solar.helixsec.live/jpeg/22-1673152660.jpg?rnd=1673210619",
            },
            {
              name: "2023-01-08 20:06:28",
              href: "http://103.solar.helixsec.live/jpeg/22-1673152000.jpg?rnd=1673210619",
            },
            {
              name: "2023-01-08 20:06:27",
              href: "http://103.solar.helixsec.live/jpeg/22-1673151326.jpg?rnd=1673210619",
            },
            {
              name: "2023-01-08 20:06:27",
              href: "http://103.solar.helixsec.live/jpeg/22-1673150624.jpg?rnd=1673210619",
            },
            {
              name: "2023-01-08 20:06:27",
              href: "http://103.solar.helixsec.live/jpeg/22-1673149938.jpg?rnd=1673210619",
            },
            {
              name: "2023-01-08 20:06:27",
              href: "http://103.solar.helixsec.live/jpeg/22-1673149236.jpg?rnd=1673210619",
            },
            {
              name: "2023-01-08 20:06:26",
              href: "http://103.solar.helixsec.live/jpeg/22-1673148536.jpg?rnd=1673210619",
            },
            {
              name: "2023-01-08 20:06:26",
              href: "http://103.solar.helixsec.live/jpeg/22-1673147784.jpg?rnd=1673210619",
            },
            {
              name: "2023-01-08 20:06:26",
              href: "http://103.solar.helixsec.live/jpeg/22-1673147052.jpg?rnd=1673210619",
            },
            {
              name: "2023-01-08 20:06:26",
              href: "http://103.solar.helixsec.live/jpeg/22-1673146295.jpg?rnd=1673210619",
            },
            {
              name: "2023-01-08 20:06:25",
              href: "http://103.solar.helixsec.live/jpeg/22-1673145526.jpg?rnd=1673210619",
            },
            {
              name: "2023-01-08 20:06:25",
              href: "http://103.solar.helixsec.live/jpeg/22-1673144777.jpg?rnd=1673210619",
            },
            {
              name: "2023-01-08 20:06:25",
              href: "http://103.solar.helixsec.live/jpeg/22-1673144045.jpg?rnd=1673210619",
            },
            {
              name: "2023-01-08 20:06:25",
              href: "http://103.solar.helixsec.live/jpeg/22-1673143321.jpg?rnd=1673210619",
            },
          ],
        };
      });
      this.delete("storage", (schema, request) =>
      {
        return {}
      });
      this.get("services", (schema, request) =>
      {
        if (request.queryParams.action == "list")
          return {
            success: true,
            services: [
              {
                name: "capture_main_stream",
                status: "stop",
              },
              {
                name: "capture_sub_stream",
                status: "running",
              },
              {
                name: "capture_still_image",
                status: "pending",
              },
              {
                name: "alarm_controller",
                status: "running",
              },
              {
                name: "heartbeat",
                status: "pending",
              },
              {
                name: "dynamic_dns",
                status: "stop",
              },
              {
                name: "disk_manager",
                status: "stop",
              },
              {
                name: "update",
                status: false,
              },
              {
                name: "system_monitoring",
                status: "pending",
              },
              {
                name: "watchdog",
                status: "running",
              },
              {
                name: "monitor_solarctrl",
                status: "running",
              },
              {
                name: "configure_battery",
                status: "running",
              },
            ],
          };
        return {
          success: false,
          message: "invalid parameters",
        };
      });

      this.get("footages", () =>
      {
        return {
          success: true,
          oldest_record: "2022-12-22 12:00:00",
          latest_record: "2022-12-24 23:10:00",
          footages: [
            {
              name: "2022-12-16 16:00",
              length: "20",
              href: "http://103.solar.helixsec.live/frames/103_202212161600_20.mp4",
            },
            {
              name: "2022-12-16 15:00",
              length: "30",
              href: "http://103.solar.helixsec.live/frames/103_202212161500_30.mp4",
            },
            {
              name: "2022-12-16 14:00",
              length: "20",
              href: "http://103.solar.helixsec.live/frames/103_202212161400_20.mp4",
            },
            {
              name: "2022-12-16 12:00",
              length: "20",
              href: "http://103.solar.helixsec.live/frames/103_202212161200_20.mp4",
            },
            {
              name: "2022-12-16 03:00",
              length: "20",
              href: "http://103.solar.helixsec.live/frames/103_202212160300_20.mp4",
            },
            {
              name: "2022-12-16 01:00",
              length: "20",
              href: "http://103.solar.helixsec.live/frames/103_202212160100_20.mp4",
            },
          ],
        };
      });
      this.get("capture_snapshot", () =>
      {
        return {
          success: true,
          creation_date: "2022-12-22 12:00:00",
          href: "http://103.solar.helixsec.live/frames/snapshot_latest.jpg",
        };
      });
      this.get("latest_snapshots", () =>
      {
        return {
          success: true,
          creation_date: "2022-12-22 12:00:00",
          href: "https://www.entekhab.ir/files/fa/news/1401/3/10/1268200_267.jpg",
        };
      });
      this.get("capture_snapshot", () =>
      {
        return { success: true, token: "TOKEN" };
      });
      this.get("footage_demand", () =>
      {
        return { success: true, token: "TOKEN" };
      });
      this.get("footage_upload", () =>
      {
        return { success: true, href: "href" };
      });
      this.get("snapshot_inquiry", () =>
      {
        return {
          success: true,
          state: "failed",
          message:
            "There is an error. The camera may have problem or misconfigured",
        };
        return {
          state: "end",
          result: "http://120.157.72.86/frames/074_202212161200_20.mp4",
        };
      });
      this.get("footage_inquiry", () =>
      {
        return {
          state: "end",
          result: "http://120.157.72.86/frames/074_202212161200_20.mp4",
        };
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
        return { camera_types: ["1", "2"], current: "1" };
      });
      this.post("camera_types", () =>
      {
        return {};
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
      this.get("allowed_to_configure", () => false);
      this.get("provisioning", () => { });
      this.get("status_quo", () =>
      {
        return {
          cpu: 6.8,
          memory: 23.6186,
          primary_disk: 64.0,
          temperature: 46.2,
          uptime: 38518.0,
          load_current: 0.0,
          armed: false,
          allowed_to_configure: true,
          alarms: 0,
          provisioning: {
            state: true,
            allowed_to_change: true,
          },
          camera: {
            status: 2,
            carrier: 1,
            ethernet: 1,
            ping: 0.32,
          },
        };
      });
      this.get("alarms", (i, d) =>
      {
        var samples = [
          {
            name: "2022-08-09 19:02:31",
            href: "http://120.157.118.37/alarms/103-1660035751.mp4",
            download: "http://120.157.118.37/alarms/103-1660035751-main.mp4",
          },
          {
            name: "2022-08-09 18:51:03",
            href: "http://120.157.118.37/alarms/103-1660035063.mp4",
            download: "http://120.157.118.37/alarms/103-1660035063-main.mp4",
          },
          {
            name: "2022-08-09 18:34:35",
            href: "http://120.157.118.37/alarms/103-1660034075.mp4",
            download: "http://120.157.118.37/alarms/103-1660034075-main.mp4",
          },
          {
            name: "2022-08-09 18:33:53",
            href: "http://120.157.118.37/alarms/103-1660034033.mp4",
            download: "http://120.157.118.37/alarms/103-1660034033-main.mp4",
          },
          {
            name: "2022-08-05 16:16:17",
            href: "http://120.157.118.37/alarms/103-1659680177.mp4",
            download: "http://120.157.118.37/alarms/103-1659680177-main.mp4",
          },
        ];
        for (let i = 0; i < 10; i++) samples = samples.concat(samples);
        if (d.queryParams != undefined && d.queryParams.detail == "false") {
          return { success: true, total: samples.length };
        } else {
          return {
            success: true,
            alarms: samples,
          };
        }
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
