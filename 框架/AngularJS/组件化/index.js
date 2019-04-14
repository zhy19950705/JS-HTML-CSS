import angular from 'angular'
import pageTitleCtrl from './components/pageTitle/pageTitle.js';
import testComponent from './components/test/testComponent';
import {tab, tabs} from './components/tabs/tabs.controller';

const app = angular.module('myApp', []);


app.component('pageTitle', pageTitleCtrl)
    .component('testComponent', testComponent)
    .component('tab', tab)
    .component('tabs', tabs)