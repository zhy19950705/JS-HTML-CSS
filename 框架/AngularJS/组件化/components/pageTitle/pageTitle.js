import test from 'test/testAlias';
import testJson from 'test/testJson';
class pageTitle {
    constructor($rootScope) {
        Object.assign(this, {
            $rootScope
        })
        // test.test();
        // console.log(testJson);
        $rootScope.rootMsg = {
            chi: '吃鱼ლ(′◉❥◉｀ლ)'
        }
    }
    $onInit() {
        console.log('init');
        this.testParent = () => {
            console.log('testParent')
        }
    }
}
pageTitle.$inject = ['$rootScope', ];
const pageTitleCtrl = {
    template: require('./pageTitle.html'),
    controller: pageTitle
}

export default pageTitleCtrl