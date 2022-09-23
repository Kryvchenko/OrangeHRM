const elementUtil = require('../util/elementUtil')
const constants = require('../constants/constants');
const Page = require('./page');

class LoginPage extends Page {

    get inputUsername () {
        return $('//input[@name="username"]');
    }
    get inputPassword () {
        return $('//input[@name="password"]');
    }
    get btnSubmit () {
        return $('button[type="submit"]');
    }
    get forgotPassword () {
        return $('.orangehrm-login-forgot-header');
    }

    async getPageTitle() {
     return elementUtil.doGetPageTitle(constants.LOGIN_PAGE_TITLE)
    }

    async forgotPasswordExist () {
        return elementUtil.doIsDisplayed(this.forgotPassword)
    }
    
    async login (username, password) {
        await elementUtil.doSetValue(this.inputUsername, username)
        await elementUtil.doSetValue(this.inputPassword, password)
        await elementUtil.doClick(this.btnSubmit)
    }

    open () {
        return super.open();
    }
}
module.exports = new LoginPage();



