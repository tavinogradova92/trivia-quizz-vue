import VueRouter from 'vue-router';
import Home from './views/Home';
import Questions from './views/Questions'
import Results from './views/Results'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/questions',
        component: Questions
    },
    {
        path: '/results',
        component: Results
    }
];

const router = new VueRouter({ mode: 'history', routes });

export default router;