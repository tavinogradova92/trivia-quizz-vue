<template>
    <div id="questions-list">
        <QuestionCard v-bind:questions="questions" />
    </div>
</template>

<script>
import axios from 'axios';
import QuestionCard from '../components/QuestionCard';

export default {
    name: 'questions',
    components: {
        QuestionCard
    },
    data() {
        return {
            questions: []
        }
    },
    methods: {},
    created() {
        axios.get('https://opentdb.com/api.php?amount=10&category=27&difficulty=easy')
            .then(res => this.questions = res.data.results)
            .catch(err => console.log(err))
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