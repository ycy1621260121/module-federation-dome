import { createApp, defineAsyncComponent } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

//全局引用app1共享组件
const buttonCommon = defineAsyncComponent(() =>
  import('AppTwo/buttonCommon')
)
app.component('button-common', buttonCommon)


app.mount('#app')

