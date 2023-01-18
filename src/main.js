import { createApp, defineAsyncComponent } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

//全局引用app1共享组件
const countDown = defineAsyncComponent(() =>
  import('AppOne/countDown')
)
app.component('count-down', countDown)


app.mount('#app')
