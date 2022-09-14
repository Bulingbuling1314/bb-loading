<template>
    <div
        id="app"
        v-bloading="loading"
    >
        <img
            alt="Vue logo"
            src="./assets/logo.png"
        >
        <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import BLoading from "../packages/b-loading";

export default {
    name: 'App',
    data() {
        return {
            loading: true
        }
    },
    components: {
        HelloWorld
    },
    mounted() {
        // console.log(BLoading)
        // this.$BLoading.show()
        // BLoading.show()
        // BLoading.hide()
        // BLoading.hide()
        // setTimeout(() => {
        //     this.loading = false
        // }, 3000)
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    position: relative;
}
</style>
