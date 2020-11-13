<template>
    <div id="results-list">
        <div id="results-card">
            <h1>Results</h1>
            <h2>Final score: {{ this.$store.state.score }} out of 100</h2>
            <div id="answers-box" v-bind:key="answer" v-for="answer in listOfAnswers">
                <p v-html="answer"></p>
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
    height: 100vh;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    color: #ffffff;
}
#results-card {
    display: grid;
    height: 70vh;
    width: 70vw;
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