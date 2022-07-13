import {BasePage} from './BasePageClass';

export class CartPageClass extends BasePage {
    constructor() {
        super();
        this.inventoryItemNames = '[class="inventory_item_name"]';
        this.inventoryItemPrices = '[class="inventory_item_price"]';
    };

    checkCorrectItemIsAdded() {
        cy.get(this.inventoryItemNames).eq(0).then(addedElemName => {
            cy.get('@addedItemName').then(elemName => {
                expect(elemName).eq(addedElemName.text())
            })
        });

        cy.get(this.inventoryItemPrices).eq(0).then(addedElemPrice => {
            cy.get('@addedItemPrice').then(elemPrice => {
                expect(elemPrice).eq(addedElemPrice.text())
            })
        });
    };

}

export const cartPageClass = new CartPageClass();
