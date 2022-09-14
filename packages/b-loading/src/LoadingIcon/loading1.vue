<template>
    <div>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            t="1663140328389"
            class="loading-icon-1"
            viewBox="0 0 1024 1024"
            version="1.1"
            p-id="2541"
            :width="config.iconSize + 'px'"
            :height="config.iconSize + 'px'"
        >
            <path
                d="M270.4 214.4C336 160 420 128 512 128c212 0 384 172 384 384h64c0-247.2-200.8-448-448-448-107.2 0-205.6 37.6-282.4 100l40.8 50.4z"
                p-id="2542"
                :fill="config.iconColor"
            />
        </svg>
    </div>
</template>

<script>
export default {
    name: 'loading-icon1',
    props: ['config']
}
</script>

<style scoped>
.loading-icon-1 {
    animation: rotate 2s linear infinite;
}
@keyframes rotate {
    100% {
        transform: rotate(360deg);
    }
}
</style>