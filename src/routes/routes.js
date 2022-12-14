import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Live from "@/pages/Live.vue";
import Configuration from "@/pages/Configuration.vue";
import Stats from "@/pages/Stats.vue";
import History from "@/pages/History.vue";
import Notifications from "@/pages/Notifications.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/stats",
    children: [
      {
        path: "live",
        name: "Live",
        component: Live,
      },
      {
        path: "stats",
        name: "Stats",
        component: Stats,
      },
      {
        path: "history",
        name: "History",
        component: History,
      },
      {
        path: "configuration",
        name: "Configuration",
        component: Configuration,
      },
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications,
      },
    ],
  },
];

export default routes;
