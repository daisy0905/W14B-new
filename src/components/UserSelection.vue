<template>
    <div id="user-container">
        <img :src="userImage" alt="an image of user selection">
    </div>
</template>

<script>
    export default {
        name: "user-selection",

        computed: {
            userImage: function() {
                return this.$store.state.userUrl;
            }
        }
    }
</script>

<style scoped>
    img {
        width: 10vw;
    }

</style>