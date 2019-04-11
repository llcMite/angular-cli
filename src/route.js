// import HomeCtrl from './controller/home';

const route = ($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/layout');
}

route.$inject = ['$stateProvider', '$urlRouterProvider'];

export default route;