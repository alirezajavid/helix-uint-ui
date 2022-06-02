import DropDown from "./components/Dropdown.vue";
import vSelect from "vue-select";

/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install(Vue) {
    Vue.component("drop-down", DropDown);
    Vue.component("v-select", vSelect);
  },
};

export default GlobalComponents;
