import appSettings from '../../../../fixtures/appSettings.json'
import HomePage from '../pageobjects/HomePage'
import EnquiryPage from '../pageobjects/EnquiryPage'
import helper from '../../../utilities/helper'
describe('This is an E2E Test for Enquiry of Vehicle for Aston Martin Vehicle Website',()=>{
    let randomString = helper.generateRandomText(7)
    let randomNumber = helper.generateNDigits(2)
    before("clear all Session Storage", ()=>{
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage()
    })
    beforeEach("Set ViewPort to bigger than default size", ()=>{
        cy.viewport(1300, 800);
    })
    it('Test Case: Should be able to Navigate to the Website of Aston Martin',()=>{
        cy.visit(`${appSettings.VML.url}`)
    })
    it('Test Assertions: Assertions on the elements of the Privacy Policy container', ()=>{
        cy.xpath(HomePage.policyContainer)
            .should('be.visible', { timeout: 10000 })
        cy.xpath(HomePage.policyText)
            .should('be.visible', { timeout: 10000 })
            .first().invoke('text').should('include', `${appSettings.VML.privacy_policy_container.policy_subtitle_text}`)
        cy.xpath(HomePage.acceptButton)
            .should('be.visible', { timeout: 10000 })
            .should('be.enabled')
        cy.xpath(HomePage.acceptButton)
            .should('be.visible', { timeout: 10000 })
            .should('be.enabled')
        cy.xpath(HomePage.morePreferencesButton)
            .should('be.visible', { timeout: 10000 })
            .should('be.enabled')

    })
    it('Test Case: Should be able to Accept Privacy Policy Modal', ()=>{
        cy.xpath(HomePage.acceptButton)
        .should('be.visible', {timeout: 10000})
        .should('be.enabled')
        .click()
    })
    it('Test Assertions: Validate that the Privacy Policy container no longer exists', ()=>{
        cy.xpath(HomePage.policyContainer)
        .should('not.be.visible')
    })
    it('Test Case: Should be able to Navigate to "Enquire" CTA', ()=>{
        cy.xpath(HomePage.enquireButton)
        .should('be.visible', {timeout: 10000})
        .click()
        cy.url().should('eq', `${appSettings.VML.url}enquiry`)
    })
    it('Test Case: Should be able to Interact with "Enquire" on Enquiry Page:', ()=>{
        cy.get(EnquiryPage.generalEnquiryTitle).first().invoke('text').should('include', `${appSettings.VML.enquiry_container.general_enquiry_title_text}`)
        cy.get(EnquiryPage.arrangeATestDriveTitle).first().invoke('text').should('include', `${appSettings.VML.enquiry_container.arrange_test_drive_title_text}`)

        cy.xpath(EnquiryPage.enquireButton)
            .should('be.visible', {timeout: 10000})
            .should('be.enabled')
            .scrollIntoView()
            .click({force: true})
    })
    it('Test Assertions: Assertions on the elements of the enquiry container',()=>{
        cy.xpath(EnquiryPage.selectADealerTab)
            .should('be.visible', {timeout: 10000})
            .should('be.enabled')
        cy.xpath(EnquiryPage.specifyAModelTab)
            .should('be.visible', {timeout: 10000})
            .should('be.disabled')
        cy.xpath(EnquiryPage.contactDetailsTab)
            .should('be.visible', {timeout: 10000})
            .should('be.disabled')
        cy.xpath(EnquiryPage.closeModalButton)
            .should('be.visible', {timeout: 10000})
            .should('be.enabled')
        cy.xpath(EnquiryPage.locationInput)
            .should('be.visible', {timeout: 10000})
            .should('be.enabled')
        cy.xpath(EnquiryPage.labelLocationInput).first().invoke('text').should('include', `${appSettings.VML.enquiry_container.enquiry_form.location_input_label}`)
        cy.xpath(EnquiryPage.selectADealerButtons).eq(1)
            .should('be.enabled')
        cy.xpath(EnquiryPage.selectADealerButtons).should('have.length', 10)
        cy.xpath(EnquiryPage.locationMap)
            .should('exist')
    })
    it('Test Case: Should be able to Select a Dealer',()=>{
        cy.xpath(EnquiryPage.locationInput)
            .should('be.enabled')
            .type(`${appSettings.VML.enquiry_container.enquiry_form.dubai}`)
        //Assert that after typing Dubai, we have the first enquiry displayed is in Dubai
        cy.xpath(EnquiryPage.suggestedEnquiryAddress)
            .should('be.visible', {timeout: 10000})
            .click({force: true})
        cy.xpath(EnquiryPage.suggestedEnquiryAddress).first().invoke('text').should('include', `${appSettings.VML.enquiry_container.enquiry_form.enquiry_dubai_address}`)
        cy.xpath(EnquiryPage.selectADealerButtons).eq(1)
            .should('be.enabled')
            .click()
    })
    it('Test Assertions: Assert that the Specify Model is enabled',()=>{
        cy.xpath(EnquiryPage.specifyAModelTab, {timeout: 10000})
            .should('be.enabled')
    })
    it('Test Case: Should not be able to proceed without specifying a modal',()=>{
        
        cy.xpath(EnquiryPage.continueButton)
            .should('be.enabled')
            .click()
        cy.xpath(EnquiryPage.validationMessage)
            .should('be.visible', {timeout: 10000})
            .first().invoke('text')
            .should('eq', `${appSettings.VML.enquiry_container.enquiry_form.specify_a_model_validation_msg}`)
    })
    it('Test Case: Should be able to select a model', ()=>{
        cy.get(EnquiryPage.selectModelDropdown)
            .should('be.visible', {timeout: 10000})
        cy.selectRandomlyFromDropdown(EnquiryPage.selectModelDropdown, true)
        cy.get(EnquiryPage.selectBodyStyle)
            .should('be.visible', {timeout: 10000}) 
    })
    it('Test Case: Should not be able to proceed without specifying body style', ()=>{
        cy.xpath(EnquiryPage.continueButton)
        .should('be.enabled')
        .click()
        cy.xpath(EnquiryPage.validationMessage)
            .should('be.visible', {timeout: 10000})
            .first().invoke('text')
            .should('eq', `${appSettings.VML.enquiry_container.enquiry_form.specify_a_body_type_validation_msg}`)
    })
    it('Test Case: Should be able to choose a body style', ()=>{
        cy.get(EnquiryPage.selectBodyStyle)
            .should('be.visible', {timeout: 10000})
        cy.selectRandomlyFromDropdown(EnquiryPage.selectBodyStyle, true)
        cy.xpath(EnquiryPage.continueButton)
        .should('be.enabled')
        .click()
    })
    it('Test Case: Should not be able to submit without specifying title, first name, last name, and email', ()=>{
        
        cy.xpath(EnquiryPage.submitButton)
            .scrollIntoView()
            .should('be.enabled')
            .click({force: true})
        cy.get(EnquiryPage.titleDropdown).scrollIntoView()
    })
    it('Test Assertions: Validate that the validation messages are displayed and matching the texts', ()=>{
        
        cy.xpath(EnquiryPage.validationMessage)
            .should('be.visible', {timeout: 10000})
            .eq(0).first().invoke('text').should('eq', `${appSettings.VML.enquiry_container.enquiry_form.title_validation_msg}`)
        cy.xpath(EnquiryPage.validationMessage)
            .should('be.visible', {timeout: 10000})
            .eq(1).first().invoke('text').should('eq', `${appSettings.VML.enquiry_container.enquiry_form.first_name_validation_msg}`)
        cy.xpath(EnquiryPage.validationMessage)
            .should('be.visible', {timeout: 10000})
            .eq(2).first().invoke('text').should('eq', `${appSettings.VML.enquiry_container.enquiry_form.last_name_validation_msg}`)
        cy.xpath(EnquiryPage.validationMessage)
            .should('be.visible', {timeout: 10000})
            .eq(3).first().invoke('text').should('eq', `${appSettings.VML.enquiry_container.enquiry_form.email_address_validation_msg}`)
    })
    it('Test Case: Should be able to select a Title', ()=>{
        cy.get(EnquiryPage.titleDropdown).should('be.visible', {timeout: 10000})
        cy.selectRandomlyFromDropdown(EnquiryPage.titleDropdown, true)
    })
    it('Test Case: Should not be able to submit since the user has to fill other required fields - first name, last name and Email', ()=>{
        cy.xpath(EnquiryPage.submitButton)
            .scrollIntoView().
            should('be.visible')
            .should('be.enabled')
            .click()
        cy.get(EnquiryPage.firstName).scrollIntoView()
        cy.xpath(EnquiryPage.validationMessage)
            .should('be.visible', {timeout: 10000})
            .eq(0).first().invoke('text').should('eq', `${appSettings.VML.enquiry_container.enquiry_form.first_name_validation_msg}`)
        cy.xpath(EnquiryPage.validationMessage).should('have.length', 3)
    })
    it('Test Case: Should not able to fill numbers in first name and last name', ()=>{ 
        //this test case will fail because there is no such validation on the first name and last name
        cy.get(EnquiryPage.firstName).type(randomNumber)
        cy.get(EnquiryPage.firstName).type(randomNumber)
        cy.xpath(EnquiryPage.validationMessage)
            .eq(0)
            .should('be.visible', {timeout: 10000}) //validate an error message should be displayed on the first name
        cy.xpath(EnquiryPage.validationMessage)
            .eq(1)
            .should('be.visible', {timeout: 10000}) //validate an error message should be displayed on the last name
        cy.xpath(EnquiryPage.validationMessage).should('have.length', 3)
    })
    it('Test Case: Should be able to input correct first name and last name', ()=>{
        cy.get(EnquiryPage.firstName).clear()
        cy.get(EnquiryPage.lastName).clear()
        cy.get(EnquiryPage.firstName).type(randomString)
        cy.get(EnquiryPage.lastName).type(randomString)
        cy.xpath(EnquiryPage.validationMessage).should('have.length', 1)//error message remaining only for email address
    })
    it('Test Case: Should not be able to submit unless the email is in the correct format', ()=>{
        cy.get(EnquiryPage.email).type(randomString)
        cy.xpath(EnquiryPage.validationMessage).should('have.length', 0)
        cy.xpath(EnquiryPage.submitButton).scrollIntoView().click({force: true})
        cy.get(EnquiryPage.email).scrollIntoView()
        cy.xpath(EnquiryPage.validationMessage).eq(0).first().invoke('text').should('eq', `${appSettings.VML.enquiry_container.enquiry_form.valid_email_address_msg}`)
        cy.xpath(EnquiryPage.validationMessage).should('have.length', 1)//assert that the validation message is displayed in the DOM
    })
    it('Test Case: Should be able to submit with the correct input of all the required fields', ()=>{
        cy.get(EnquiryPage.email).clear()
        const randomEmail = randomString + "@gmail.com"
        cy.get(EnquiryPage.email).type(randomEmail)
        cy.xpath(EnquiryPage.submitButton).scrollIntoView().click()
    })
    it('Test Assertions: After Successful Submission', ()=>{
        cy.xpath(EnquiryPage.backToHomeButton)
            .should('be.visible', {timeout: 10000})
            .should('be.enabled')
            .click()
        cy.url().should('eq', `${appSettings.VML.url}`)
    })
    
})