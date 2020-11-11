import VueRouter from 'vue-router';
import Home from './views/Home';
import Questions from './views/Questions'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/questions',
        component: Questions
    }
];

const router = new VueRouter({ mode: 'history', routes });

export default router;