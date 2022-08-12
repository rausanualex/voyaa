import {commonMethods} from "../common/CommonMethods";
import {selectors} from "../data/Selectors";

export class KiwiPage {

    clickOnAcceptCookies() {
        commonMethods.clickOnVisibleElement(selectors.acceptCookies);
    }

    selectDepartureDayTomorrowAndReturnFiveDaysAfter() {
        this.addDepartureDayTomorrow();
        this.addReturnDayAfterFiveDays()
        this.clickOnSateDates();
    }

    addDepartureDayTomorrow() {
        cy.get(selectors.dateInput)
            .first()
            .should('be.visible')
            .click();
        this.addFlyingDate(1, selectors.departureRange);
    }

    // This function will set up departure day and return day.
    addFlyingDate(daysDifference, departureOrReturnSelector) {
        let date = new Date();
        date.setDate(date.getDate() + daysDifference);
        let futureDay = date.getDate();
        let futureMonth = date.toLocaleString('default', {month: "short"});

        cy.get(selectors.calendar).first()
            .invoke('attr', 'data-value').then(dateAttribute => {
            if (!dateAttribute.includes(futureMonth)) {
                cy.get(selectors.nextMonth)
                    .click();
                cy.get(selectors.calendar)
                    .first()
                    .find(departureOrReturnSelector)
                    .contains(futureDay)
                    .click();
            } else {
                cy.get(selectors.calendar)
                    .first()
                    .find(departureOrReturnSelector)
                    .contains(futureDay)
                    .click();
            }
        })
    }

    addReturnDayAfterFiveDays() {
        this.addFlyingDate(5, selectors.returnDate);
    }

    clickOnSateDates() {
        commonMethods.clickOnVisibleElement(selectors.setDatesBtn);
    }

}

export const kiwi = new KiwiPage();