import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import PrimeVue from "primevue/config";
import DataTable from "primevue/datatable";
import ColumnGroup from "primevue/columngroup";
import Column from "primevue/column";
import Row from "primevue/row";
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import Calendar from 'primevue/calendar';
import Card from 'primevue/card';
import ConfirmDialog from 'primevue/confirmdialog';
import Dropdown from 'primevue/dropdown';
import InputMask from 'primevue/inputmask';
import InputNumber from 'primevue/inputnumber';
import InputText from 'primevue/inputtext';
import ToolTip from 'primevue/tooltip';
import Tag from 'primevue/tag';

import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';

import axios from 'axios';
import VueAxios from 'vue-axios';

import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/saga-orange/theme.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";

import filtros from "./shared/filters/Filtros";

export const app = createApp(App);

app.config.globalProperties.$filters = filtros;

app
.use(store).use(router)
.use(PrimeVue).use(ToastService).use(ConfirmationService)
.use(VueAxios, axios);

app
  .component("DataTable", DataTable)
  .component("Column", Column).component('InputText', InputText)
  .component("Row", Row).component('InputMask', InputMask)
  .component("ColumnGroup", ColumnGroup).component('Tag', Tag)
  .component("Dialog", Dialog).component('InputNumber', InputNumber)
  .component("Button", Button).component('ConfirmDialog', ConfirmDialog).component('ConfirmationService', ConfirmationService)
  .component('Dropdown', Dropdown)
  .component('Calendar', Calendar).component('Card', Card)


app.directive('tooltip', ToolTip);

app.mount("#app");
