class HomePage{
    constructor(){
        //////////////////////// Inside Policy
        this.acceptButton = '//button[@id="onetrust-accept-btn-handler"]'
        this.morePreferencesButton = '//button[@id="onetrust-pc-btn-handler"]'
        this.policyTitle = '//h2[@id="onetrust-policy-title"]'
        this.policyText = '//p[@id="onetrust-policy-text"]'
        this.policyContainer = '//div[@id="onetrust-policy"]'
        //////////////////////// Inside Landing Page
        this.enquireButton = '(//a[@class="cta_button cta_button--secondary-dark"])[2]'
        this.configureButton = '.right-panel > a:nth-child(1)'
        this.menuButton = 'div > div.left-panel > button'
        this.exploreButton = '//a[@class="cta_button cta_button--primary-dark models-vehicle-carousel-cta-button"]'
        this.secondConfigureButton = '//a[@class="cta_button cta_button--secondary-dark models-vehicle-carousel-cta-button"]'
    }
}
module.exports = new HomePage()