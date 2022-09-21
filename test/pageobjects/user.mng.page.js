const configData = require('../config');
const elementUtil = require('../util/elementUtil');


const Page = require('./page');

class UserMngPage extends Page {

    get btnAdd () {
        return $('div.orangehrm-header-container > button');
    }
    get clickUserRole () {
        return $('div.oxd-select-text');
    }
    get clickUserStatus () {
        return $('//*/div/div[3]/div/div[2]/div/div');
    }
    get getEmployee () {
        return $('//input[@placeholder="Type for hints..."]');
    }
    get typeUsername () {
        return $('div:nth-child(2) > input');
    }
    get addPassword () {
        return $('div.user-password-cell > div > div:nth-child(2) > input');
    }
    get repeatPassword () {
        return $('div > div:nth-child(2) > div > div:nth-child(2) > input');
    }
    get btnSave () {
        return $('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[3]/button[2]');
    }

    async addNewUser () {
        await elementUtil.doClick(this.btnAdd)
    }
    async selectUser () {
        await elementUtil.doClick(this.clickUserRole)
        await elementUtil.selectWithKeyboard()
    }
    async selectStatus () {
        await elementUtil.doClick(this.clickUserStatus)
        await elementUtil.selectWithKeyboard()
    }
    async selectEmployee () {
        await this.getEmployee.click(); 
        await elementUtil.doSetValue(this.getEmployee, 'Joe')
        await browser.pause(2000);
        const textAppear = await $('.oxd-autocomplete-dropdown');
        await textAppear.click();
    }
    async addUserName () {
       return (await elementUtil.doSetValue(this.typeUsername, configData.newusername))
    }
    async addUserPassword () {
       await elementUtil.doSetValue(this.addPassword, configData.user_pwd)
       return (elementUtil.doSetValue(this.repeatPassword, configData.user_pwd))
    }
    async saveUserbtn () {
        await browser.pause(2000)
        return await this.btnSave.click()
    }

    async getInputText() {
        return (await elementUtil.doGetText(this.clickUserRole)) 
     }
    async getStatusText() {
        return (await elementUtil.doGetText(this.clickUserStatus)) 
     }


    // get searchField () {
    //     return $('//form/div[1]/div/div[1]/div/div[2]/input');
    // } 
    // get btnSearch () {
    //       return $('//div[2]/button[2]');
    // }
    // get btnReset () {
    //     return $('//div[2]/form/div[2]/button[1]');
    // }  
    // get userName () {
    //     return $(`//div[text()="${configData.newusername}"]`);
    // }
    // get checkBox () {
    //     return $(`//div[text()="${configData.newusername}"]/ancestor::div[@class="oxd-table-card"]//span`);
    // }
    // get btnDelete () {
    //     return $(`//div[text()="${configData.newusername}"]/ancestor::div[@class="oxd-table-card"]//button[1]`);
    // }
    // get btnDeleteConfirm () {
    //     return $('//div[@class="orangehrm-modal-footer"]//button[2]');
    // }

}
module.exports = new UserMngPage();
