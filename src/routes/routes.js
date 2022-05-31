import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Live from "@/pages/Live.vue";
import Configuration from "@/pages/Configuration.vue";
import History from "@/pages/History.vue";
import Notifications from "@/pages/Notifications.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/live",
    children: [
      {
        path: "live",
        name: "Live",
        component: Live,
      },
      {
        path: "history",
        name: "History",
        component: History,
      },
      {
        path: "configuration",
        name: "Configuration",
        component: Configuration
      }
    ],
  },
];

export default routes;
