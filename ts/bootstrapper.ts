/**
 * Created by synerzip on 7/11/16.
 */
///<reference path="vendingMachine.ts"/>

    
var machine = new VendingMachine();
machine.size = VendingMachineSize.medium
ko.applyBindings(machine);