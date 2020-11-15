<template>
    <div id="results-list">
        <div id="results-card">
            <h1>Results</h1>
            <h2>Final score: {{ this.$store.state.score }} out of 100</h2>
            <div id="answers-box" v-bind:key="index" v-for="(chosenAnswer, index) in this.$store.state.chosenAnswers">
                <p v-html="chosenAnswer"></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
#results-list {
    min-height: 100vh;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    color: #ffffff;
}
#results-card {
    display: grid;
    min-height: 70vh;
    width: 70vw;
    margin: 5%;
    padding-bottom: 5%;
    justify-items: center;
    align-items: center;
    background-color: #ffffff;
    color: #000000;
}
h1 {
    display: flex;
    align-self: start;
    font-size: 3em;
}
</style>