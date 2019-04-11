import uiRoute from "angular-ui-router";
import layoutCtrl from "./controller/layoutCtrl";

export default angular.module("App.layout",[uiRoute])
    .config(function($stateProvider,$urlRouterProvider){
        //$urlRouterProvider.when("/layout", '/layout/user');
        $stateProvider
            .state('layout', {
                url: '/layout',
                template: require('./view/layout.html'),
                controller: 'layoutCtrl',
                controllerAs: 'vm'
            })
            
    })
    .controller('layoutCtrl',layoutCtrl)
    .name;