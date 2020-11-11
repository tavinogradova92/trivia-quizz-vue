import VueRouter from 'vue-router';
import Home from './views/Home';
import QuestionOne from './views/QuestionOne'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/questions/1',
        component: QuestionOne
    }
];

const router = new VueRouter({ mode: 'history', routes });

export default router;