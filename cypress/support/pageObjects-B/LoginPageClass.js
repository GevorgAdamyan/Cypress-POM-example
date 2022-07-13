import {BasePage} from './BasePageClass';

export class LoginPageClass extends BasePage {
    constructor() {
        super();
        this.username = '[id="user-name"]';
        this.password = '[id="password"]';
        this.loginBtn = '[id="login-button"]';
    };

    login() {
        cy.get(this.username).type(Cypress.env('USERNAME'))
        cy.get(this.password).type(Cypress.env('PASSWORD'))
        cy.get(this.loginBtn).click()
    };
}

export const loginPageClass = new LoginPageClass();
