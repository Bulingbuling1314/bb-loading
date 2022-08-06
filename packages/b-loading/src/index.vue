<script>
export default /*#__PURE__*/{
    name: 'BLoading', // vue component name
    data() {
        return {
            config: {}
        };
    },
    methods: {}
};
</script>

<template>
    <div
        class="b-mask"
        :style="{backgroundColor: config.mask}"
    >
        <div class="b-loading">
            <div class="b-loading-rotate">
                <i :style="{backgroundColor: config.color}"></i>
                <i :style="{backgroundColor: config.color}"></i>
                <i :style="{backgroundColor: config.color}"></i>
                <i :style="{backgroundColor: config.color}"></i>
            </div>
            <div
                class="b-loading-text"
                :style="{color: config.textColor}"
            >{{ config.text }}</div>
        </div>
    </div>
</template>

<style scoped src="../../assets/css/b-loading.css">
</style>
