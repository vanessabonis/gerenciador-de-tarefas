/* eslint-disable */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// import store from './store';

import PrimeVue from 'primevue/config';
import AutoComplete from 'primevue/autocomplete';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Button from 'primevue/button';
import Calendar from 'primevue/calendar';
import Card from 'primevue/card';
import Carousel from 'primevue/carousel';
import CheckBox from 'primevue/checkbox';
import Column from 'primevue/column';
import ConfirmDialog from 'primevue/confirmdialog';
import Dialog from 'primevue/dialog';
import DataTable from 'primevue/datatable';
import Dropdown from 'primevue/dropdown';
import FileUpload from 'primevue/fileupload';
import Galleria from 'primevue/galleria';
import Image from 'primevue/image';
import InputMask from 'primevue/inputmask';
import InputNumber from 'primevue/inputnumber';
import InputSwitch from 'primevue/inputswitch';
import InputText from 'primevue/inputtext';
import Menubar from 'primevue/menubar';
import MultiSelect from 'primevue/multiselect';
import OverlayPanel from 'primevue/overlaypanel';
import PanelMenu from 'primevue/panelmenu';
import RadioButton from 'primevue/radiobutton';
import SelectButton from 'primevue/selectbutton';
import Sidebar from 'primevue/sidebar';
import TabMenu from 'primevue/tabmenu';
import TabPanel from 'primevue/tabpanel';
import TabView from 'primevue/tabview';
import Tag from 'primevue/tag';
import Textarea from 'primevue/textarea';
import TieredMenu from 'primevue/tieredmenu';
import Toast from 'primevue/toast';
import ToggleButton from 'primevue/togglebutton';
import ToolTip from 'primevue/tooltip';
import VirtualScroller from 'primevue/virtualscroller';
import BlockUI from 'primevue/blockui';

import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';

import axios from 'axios';
import VueAxios from 'vue-axios';

import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/saga-orange/theme.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import filtros from './shared/filters/Filtros';

export const app = createApp(App);

app.config.globalProperties.$filters = filtros;

app
.use(router)
// .use(store)
.use(PrimeVue).use(ToastService).use(ConfirmationService)
.use(VueAxios, axios);

app
.component('AutoComplete', AutoComplete).component('InputMask', InputMask)
.component('Dropdown', Dropdown).component('InputText', InputText)
.component('Calendar', Calendar).component('RadioButton', RadioButton)
.component('Toast', Toast).component('Button', Button).component('Tag', Tag)
.component('DataTable', DataTable).component('Column', Column)
.component('Card', Card).component('Dialog', Dialog).component('CheckBox', CheckBox)
.component('Sidebar', Sidebar).component('Menubar', Menubar)
.component('ToggleButton', ToggleButton).component('PanelMenu', PanelMenu)
.component('Galleria', Galleria).component('VirtualScroller', VirtualScroller)
.component('ConfirmDialog', ConfirmDialog).component('ConfirmationService', ConfirmationService)
.component('Textarea', Textarea).component('SelectButton', SelectButton).component('FileUpload', FileUpload)
.component('InputSwitch', InputSwitch).component('OverlayPanel', OverlayPanel).component('Image', Image)
.component('TieredMenu', TieredMenu).component('TabView', TabView).component('TabPanel', TabPanel)
.component('TabMenu', TabMenu).component('Carousel', Carousel).component('InputNumber', InputNumber)
.component('Accordion', Accordion).component('AccordionTab', AccordionTab).component('MultiSelect', MultiSelect)
.component('BlockUI', BlockUI);

app.directive('tooltip', ToolTip);

app.mount('#app');