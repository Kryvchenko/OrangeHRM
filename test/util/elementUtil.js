class ElementUtil {
  
   async doClick(element) {
       await element.waitForDisplayed()
       return element.click()
    }

    async doSetValue(element, value) {
       await element.waitForDisplayed()
       return element.setValue(value)
    }

    async doGetText(element) {
        await element.waitForDisplayed()
        return element.getText()
    }
    async doGetValue(element) {
        await element.waitForDisplayed()
        return element.getValue()
    }

    async doIsDisplayed (element) {
        await element.waitForDisplayed()
        return element.isDisplayed()
    }

    doGetPageTitle(pageTitle) {
        browser.waitUntil(() => {
         return (browser.getTitle() === pageTitle)
        }, 10000, 'title is not displayed at given time')
        return browser.getTitle() 
    } 

    async selectWithKeyboard () {
       await browser.keys(['Down arrow'])
       await browser.keys(['Down arrow'])
       return await browser.keys(['Down arrow','Enter']); 
    }
}
module.exports = new ElementUtil ();