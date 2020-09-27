<template>
    <div id="computer-container">
        <img :src="compImage" alt="an image of computer selection">
    </div>
</template>

<script>
    export default {
        name: "computer-selection",

        computed: {
            compImage: function() {
                return this.$store.state.compUrl
            }
        }
    }
</script>

<style scoped>
    img {
        width: 10vw;
        transform: scaleX(-1);
    }
</style>