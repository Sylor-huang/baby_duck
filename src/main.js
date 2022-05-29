import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/styles/index.scss' // global css

const app = createApp(App)

//import vuex
import store from './store'
app.use(store)

// meta manager
import { createMetaManager } from "vue-meta";

const metaManager = createMetaManager();
app.use(metaManager)

import Spinning from '@/layout/components/Commons/Spinning.vue'
app.component('spinning', Spinning)

import axiosReq from '@/utils/axiosReq'
app.config.globalProperties.$axiosReq = axiosReq

// 引入 icons 

import * as ElSvg from '@element-plus/icons-vue'

for(const name in ElSvg) {
  app.component(name, ElSvg[name])
}
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'

const appLocal = localStorage.getItem('language');
const languageIsSet = appLocal && appLocal.indexOf('english') > -1

app.config.globalProperties.$language = languageIsSet ? en : zhCn

import i18n from './lang'
app.use(i18n)

//element svg icon
import ElSvgIcon from "@/layout/components/ElSvgIcon.vue"
app.component("e-icon",ElSvgIcon)

import './permission'

app.use(router).mount('#app')

const appTheme = localStorage.getItem('theme');

if (appTheme === "dark") {
  document.querySelector('html').classList.remove('default');
  document.querySelector('html').classList.add('dark');
}else{
 document.querySelector('html').classList.remove('dark');
  document.querySelector('html').classList.add('default');
}