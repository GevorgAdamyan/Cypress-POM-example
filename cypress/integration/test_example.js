import {loginPageClass} from '../support/pageObjects-B/LoginPageClass';
import {inventoryPageClass} from "../support/pageObjects-B/InventoryPageClass";
import {cartPageClass} from "../support/pageObjects-B/CartPageClass";

describe('Page Object Pattern - B', () => {
    beforeEach(() => {
        loginPageClass.visit()
        loginPageClass.login()
    });

    it('cy.get() - query DOM elements', () => {
        inventoryPageClass.selectRandomItem()
        inventoryPageClass.openCartPage()
        cartPageClass.checkCorrectItemIsAdded()
    });
});
