import {BasePage} from './BasePageClass';

export class InventoryPageClass extends BasePage {
    constructor() {
        super();
        this.inventoryItems = '[class="inventory_item"]';
        this.inventoryItemNames = '[class="inventory_item_name"]';
        this.inventoryItemAddToCardBtns = '[id*="add-to-cart"]';
        this.inventoryItemPrices = '[class="inventory_item_price"]';
        this.cardIcon = '[class="shopping_cart_link"]';
    };

    selectRandomItem() {
        cy.get(this.inventoryItems).then(elems => {
            const randomItem = super.randomItemFromArray(elems)
            cy.wrap(randomItem).find(this.inventoryItemNames).then(nameElem => {
                cy.wrap(nameElem.text()).as('addedItemName')
            })
            cy.wrap(randomItem).find(this.inventoryItemPrices).then(priceElem => {
                cy.wrap(priceElem.text()).as('addedItemPrice')
            })
            cy.wrap(randomItem).find(this.inventoryItemAddToCardBtns).click()
        })
    };

    openCartPage() {
        cy.get(this.cardIcon).click()
    };
}

export const inventoryPageClass = new InventoryPageClass();
