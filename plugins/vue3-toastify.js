import Vue3Toastify, {toast} from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Vue3Toastify, {"position": "top-center", autoClose: 1000})

    return {
        provide: {toast},
    }
})