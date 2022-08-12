export class CommonMethods {

    setCrossOriginUncaughtErrorFalse() {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
    }

    clickOnVisibleElement(selector) {
        cy.get(selector).should('be.visible').click();
    }

}

export const commonMethods = new CommonMethods()
