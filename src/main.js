import { createApp } from 'vue/dist/vue.esm-bundler'

import App from './vue/App.vue'

import { sum } from 'js/math'
const { priceFormate } = require('./js/format')

import './js/element'

console.log("priceFormate", priceFormate)

console.log("sum", sum(67, 90))



createApp(App).mount("#app")


if (module.hot) {
    module.hot.accept("./js/element.js",()=>{
        console.log("模块热替换更新了")
    })
    
}