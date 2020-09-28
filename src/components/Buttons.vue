<template>
    <div>
        <img src="../assets/rock.png" alt="rock image" @click="rockSelection" class="img-btn">
        <img src="../assets/paper.png" alt="paper image" @click="paperSelection" class="img-btn">
        <img src="../assets/scissor.png" alt="scissor image" @click="scissorSelection" class="img-btn">
    </div>
</template>

<script>
    export default {
        name: "select-button",
       
        methods: {
            rockSelection: function() {
                this.$store.commit("userGet", 0);
                this.$store.commit("compGet");
                this.$store.commit("checkWinner", 0);
            },
            paperSelection: function() {
                this.$store.commit("userGet", 1);
                this.$store.commit("compGet");
                this.$store.commit("checkWinner", 1);
            },
            scissorSelection: function() {
                this.$store.commit("userGet", 2);
                this.$store.commit("compGet");
                this.$store.commit("checkWinner", 2);
            }
        },

    }
</script>

<style scoped>
    .img-btn {
        width: 5vw;
        margin: 1em;
    }
</style>