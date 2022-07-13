export class BasePage  {
  visit(url = '/') {
    cy.visit(url)
  };

  randomItemFromArray(items) {
    return items[Math.floor(Math.random() * items.length)];
  };
}
