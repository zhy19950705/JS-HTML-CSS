class tabCtrl {
    $onInit(){
        this.tab = {
            label: this.label,
            selected: false
        }
        this.tabs.addTab(this.tab)
    }
}

class tabsCtrl {
    $onInit(){
        this.tabs = [];
    }
    addTab(tab){
        this.tabs.push(tab);
    }
    selectTab(index){
        this.tabs.map((item,index)=>this.tabs[index].selected = false);
        this.tabs[index].selected = true;
    }0
    $postLink(){
        this.selectTab(this.selected || 0)
    }
}

const tab = {
    bindings: {
        label: '@'
    },
    require: {
        tabs: '^^'
    },
    transclude: true,
    template: `
        <div class="tabs_content ng-if="$ctrl.tab.selected>
            <div ng-transclude></div>
        </div>
    `,
    controller: tabCtrl
}

const tabs = {
    bindings: {
        selected: '@'
    },
    transclude: true,
    template: `
        <div class="tabs">
            <ul class="tabs_list">
                <li ng-repeat="tab in $ctrl.tabs">
                    <a href="" ng-bind="tab.label" ng-click="$ctrl.selectTab($index)"></a>
                </li>
            </ul>
            <div class="tabs__content" ng-transclude></div>
        </div>
    `,
    controller: tabsCtrl
}

export {tab, tabs}