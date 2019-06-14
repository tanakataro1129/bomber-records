import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue'
import AddRecord from './views/AddRecord.vue'
import SearchRecords from './views/SearchRecords.vue'
import Analysis from './views/Analysis.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/add-record',
      name: 'add-record',
      component: AddRecord
    },
    {
      path: '/search-records',
      name: 'search-records',
      component: SearchRecords
    },
    {
      path: '/analysis',
      name: 'analysis',
      component: Analysis
    },
  ]
});