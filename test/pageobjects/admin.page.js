const elementUtil = require('../util/elementUtil')
const Page = require('./page');

class AdminPage extends Page {

    get selectAdmin () {
        return $('//a[@href="/web/index.php/admin/viewAdminModule"]');
    }

    get selectUserManagment () {
        return $('//li//span[@class="oxd-topbar-body-nav-tab-item"]');
    }

    get selectUser () {
        return $('//ul[@class="oxd-dropdown-menu"]//li');
    }

    async navigateToUserSection() {
        await elementUtil.doClick(this.selectAdmin)
        await elementUtil.doClick(this.selectUserManagment)
        await elementUtil.doClick(this.selectUser)
    }

    async getSectionButtonText() {
       return (await elementUtil.doGetText(this.selectAdmin)) 
    }
}
module.exports = new AdminPage();
