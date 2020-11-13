<template>
    <div id="questions-list">
        <QuestionCard v-bind:questions="questions" />
    </div>
</template>

<script>
import QuestionCard from '../components/QuestionCard';
import { mapState } from 'vuex'

export default {
    name: 'questions',
    components: {
        QuestionCard
    },
    computed: mapState([
        'questions'
    ]),
    mounted() {
        this.$store.dispatch('fetchQuestions')
    }
}
</script>

<style scoped>
#questions-list {
    height: 100vh;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    color: #ffffff;
}
</style>