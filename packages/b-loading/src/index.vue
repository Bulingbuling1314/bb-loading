<script>
import DefaultIcon from './LoadingIcon/default.vue'
import LoadingIcon1 from './LoadingIcon/loading1.vue'
export default /*#__PURE__*/{
    name: 'BLoading', // vue component name
    data() {
        return {
            config: {}
        };
    },
    components: {
        DefaultIcon,
        LoadingIcon1
    },
    methods: {}
};
</script>

<template>
    <div
        class="bb-mask"
        id="bbLoadingMask"
        :style="{backgroundColor: config.mask}"
    >
        <div class="bb-loading">
            <component
                :config="config"
                :is="(!config.type || config.type === 0) ? 'DefaultIcon' : ('LoadingIcon' + config.type)"
            ></component>
            <div
                class="bb-loading-text"
                :style="{color: config.textColor}"
            >{{ config.text }}</div>
        </div>
    </div>
</template>

<style scoped src="../../assets/css/b-loading.css">
</style>
