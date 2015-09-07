angular
    .module('myApp',['myApp.services'])
    .controller('ServiceController', ServiceController);

function ServiceController(githubService){
    var vm = this;
    vm.events = githubService.events('hongbojing');
}