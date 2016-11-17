/**
 * Created by synerzip on 7/11/16.
 */
///<reference path="product.ts"/>

class ProductFactory{
    static  GetProduct():CocaCola{
        return new CocaCola();
    }
}