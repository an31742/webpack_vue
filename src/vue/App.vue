<template id="my-app">
    <h2>你好呀8888</h2>
    <h3>{{title}}</h3>
    <hellowrold></hellowrold>
</template>

<script>
import hellowrold from './helloWorld.vue'
export default {
    components:{
    hellowrold
    },
    data() {
        return {
            title: "这个是vue组件渲染的"
        }
    }
}
</script>

<style>
</style>