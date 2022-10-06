const elementUtil = require('../util/elementUtil')
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



