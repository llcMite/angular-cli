// import HomeCtrl from './controller/home';

const route = ($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/user');
}

route.$inject = ['$stateProvider', '$urlRouterProvider'];

export default route;