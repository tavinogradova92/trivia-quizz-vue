<template>
    <div id="questions-list">
        <QuestionCard v-bind:questions="questions" />
    </div>
</template>

<script>
import QuestionCard from '../components/QuestionCard';

export default {
    name: 'questions',
    components: {
        QuestionCard
    },
    props: ["questions"],
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