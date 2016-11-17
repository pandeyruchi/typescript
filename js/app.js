/**
 * Created by synerzip on 7/11/16.
 */
var Quarter = (function () {
    function Quarter() {
        this.value = .25;
    }
    Quarter.prototype.getImageUrl = function () {
        return "img/quarter.jpg";
    };
    return Quarter;
}());
/**
 * Created by synerzip on 7/11/16.
 */
var SodaCategory = (function () {
    function SodaCategory() {
        this.name = "Soda";
    }
    SodaCategory.prototype.getImageUrl = function () {
        return "img/soda.png";
    };
    return SodaCategory;
}());
/**
 * Created by synerzip on 7/11/16.
 */
///<reference path="productCategory.ts"/>
var CocaCola = (function () {
    function CocaCola() {
        this.name = "coca-cola";
        this.price = 2.30;
        this.category = new SodaCategory();
    }
    return CocaCola;
}());
/**
 * Created by synerzip on 7/11/16.
 */
///<reference path="product.ts"/>
var ProductFactory = (function () {
    function ProductFactory() {
    }
    ProductFactory.GetProduct = function () {
        return new CocaCola();
    };
    return ProductFactory;
}());
/**
 * Created by synerzip on 7/11/16.
 */
///<reference path="coin.ts"/>
///<reference path="productFactory.ts"/>
///<reference path="product.ts"/>
var VendingMachineSize;
(function (VendingMachineSize) {
    VendingMachineSize[VendingMachineSize["small"] = 6] = "small";
    VendingMachineSize[VendingMachineSize["medium"] = 9] = "medium";
    VendingMachineSize[VendingMachineSize["large"] = 12] = "large";
})(VendingMachineSize || (VendingMachineSize = {}));
var Cell = (function () {
    function Cell(product) {
        this.product = product;
        this.stock = ko.observable(3);
        this.sold = ko.observable(false);
    }
    return Cell;
}());
var VendingMachine = (function () {
    function VendingMachine() {
        var _this = this;
        this.paid = ko.observable(0);
        this.cells = ko.observableArray([]);
        this.acceptedCoins = [new Quarter()];
        this.acceptCoin = function (coin) {
            var oldTotal = _this.paid();
            _this.paid(oldTotal + coin.value);
        };
    }
    Object.defineProperty(VendingMachine.prototype, "size", {
        set: function (givenSize) {
            this.cells([]);
            for (var index = 0; index < givenSize; index++) {
                var product = ProductFactory.GetProduct();
                this.cells.push(new Cell(product));
            }
        },
        enumerable: true,
        configurable: true
    });
    return VendingMachine;
}());
/**
 * Created by synerzip on 7/11/16.
 */
///<reference path="vendingMachine.ts"/>
var machine = new VendingMachine();
machine.size = VendingMachineSize.medium;
ko.applyBindings(machine);
/**
 * Created by synerzip on 7/11/16.
 */
var Main = (function () {
    function Main() {
    }
    return Main;
}());
//# sourceMappingURL=app.js.map