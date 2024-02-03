const HomePage = require('./HomePage')
class EnquiryPage {
    constructor(){
        //super()
        //////////////////////// Inside Enquiry
        this.generalEnquiryTitle = 'div.title > h1'
        this.arrangeATestDriveTitle = 'div:nth-child(2) > div > div.enquire-landing__heading > h1'
        this.requestATestDriveButton = '(//button[@class="cta_button cta_button--secondary-light"])[2]'
        this.enquireButton = '(//button[@class="cta_button cta_button--secondary-light"])[1]'
        this.selectADealerTab = '//button[@data-trigger-step=1]'
        this.specifyAModelTab = '//button[@data-trigger-step=2]'
        this.contactDetailsTab = '//button[@data-trigger-step=3]'
        this.closeModalButton = '//button[@class="close-button"]'
        //////////////////////// Inside Select A Dealer Tab
        this.labelLocationInput = '//label[@for="location-input"]'
        this.locationInput = '//input[@id="location-input"]'
        this.getDirectionsButton = '//a[@class="link no-outline"]'
        this.locationMap ='//canvas[@id="Microsoft.Maps.Imagery.RoadSceneWithoutLabels"]'
        this.selectADealerButtons = '//button[@data-action="select-dealer"]'
        this.viewDealerPageButton = ' div.row-result.active div.ctas a'
        this.enquiryAddress = '//div[@class="address"]'
        this.firstDisplayedSearchResult = '(//span[@class="left"])[1]'
        this.suggestedEnquiryAddress = '(//p[@data-tag="as_suggestion_line"])[1]'
        /////////////////////// Inside Specify A Model Tab
        this.continueButton = '//button[@data-name="Continue"]'
        this.validationMessage = '//div[@class="form__element error"]/span'
        this.selectModelDropdown = 'select#Model'
        this.selectBodyStyle = 'select#BodyStyle'
        ///////////////////// Inside Contact Details
        this.titleDropdown = 'select#Title'
        this.firstName = 'input#FirstName'
        this.lastName = 'input#LastName'
        this.phoneNumber = 'input#Phone'
        this.email = 'input#Email'
        this.additionalComments = 'textarea#AdditionalComments'
        this.submitButton = '//button[@data-name="Submit"]'
        this.toasterMessage = '//div[@class="toaster-headline"]'
        this.toasterDescription = '//div[@class="toaster-description"]'
        this.backToHomeButton = '//button[@class="cta_button cta_button--primary-light"]'
    }
}
module.exports = new EnquiryPage()