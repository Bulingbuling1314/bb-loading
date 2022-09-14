<template>
    <div class="b-loading-rotate">
        <i :style="{backgroundColor: config.iconColor}"></i>
        <i :style="{backgroundColor: config.iconColor}"></i>
        <i :style="{backgroundColor: config.iconColor}"></i>
        <i :style="{backgroundColor: config.iconColor}"></i>
    </div>
</template>

<script>
export default {
    name: 'default-icon',
    props: ['config']
}
</script>

<style scoped>
.b-loading-rotate {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    z-index: 999999999999999;
    animation: rotate 2s linear infinite;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.b-loading-rotate i {
    width: 8px;
    height: 8px;
    background-color: #1890ff;
    border-radius: 4px;
    margin-bottom: 4px;
    animation: opacity 2s linear infinite;
}
.b-loading-rotate i:nth-of-type(3) {
    margin: 0;
}
.b-loading-rotate i:nth-of-type(4) {
    margin: 0;
}
@keyframes rotate {
    100% {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}
@keyframes opacity {
    0% {
        opacity: 0.3;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0.3;
    }
}
</style>