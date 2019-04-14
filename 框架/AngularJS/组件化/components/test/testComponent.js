class user {
    constructor($rootScope){
        Object.assign(this, {$rootScope})
        console.log(this.inner,this.input)
    }
    $onInit(){
        this.inner = 'inner';
        this._input = angular.copy(this.input);
        this._input.chi = '不吃了'
        // this.parent.testParent();
    }
}
user.$inject = ['$rootScope']
const userCtrl = {
    // require: {
    //     parent: '^^pageTitle'
    // },
    template: require('./testComponent.html'),
    controller: user,
    controllerAs: 'userCtrl',
    bindings: {
        input: '<'
    }
}
export default userCtrl