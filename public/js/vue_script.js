var vm = new Vue({
    el: '#list',
    data: {
        checkedNames: [],
        burgers: [
            { burger: burgers[0] },
            { burger: burgers[1] },
            { burger: burgers[2] }
        ],
    }
});
var ord = new Vue({
    el: '#orders',
    data: {
        faln: "",
        Email: "",
        Planet: "",
        Street: "",
        Selected: "",
        Picked: "",
        burgerName: "",
        printBurger: []
    },
    methods: {
        markDone: function() {
                console.log(vm.checkedNames);
                for(var i=0; i < vm.checkedNames.length; i++){
                    this.printBurger.splice(i, 3, vm.checkedNames[i]);
                }
            if(vm.checkedNames.length === 0){
                console.log("Button clicked!");
                for(var i=0; i < this.printBurger.length; i++){
                    this.printBurger.pop();
                }
            }
        }
    }
});
