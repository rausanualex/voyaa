import {kiwi} from "../pages/KiwiPage";
import {visitPage} from "../pages/VisitPage";

describe('Testing different scenarios for search functionality on Kiwi departure-return date.', () => {

  beforeEach(() => {
    visitPage.navigateToKiwi();
    kiwi.clickOnAcceptCookies();
  })

  it('Calendar', () => {
    kiwi.selectDepartureDayTomorrowAndReturnFiveDaysAfter();
  })
})