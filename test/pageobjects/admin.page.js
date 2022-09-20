const Page = require('./page');


class AdminPage extends Page {
    
    get myName () {
        return "Block";
    }
    get selectAdmin () {
        return $('//a[@href="/web/index.php/admin/viewAdminModule"]');
    }
    get selectUserManagment () {
        return $('//li//span[@class="oxd-topbar-body-nav-tab-item"]');
    }
    get selectUser () {
        return $('//ul[@class="oxd-dropdown-menu"]//li');
    }
    get btnAdd () {
        return $('//div[@class="orangehrm-header-container"]//button[@type="button"]');
    }
    get clickUserRole () {
        return $('div.oxd-select-text--after');
    }
    get clickUserStatus () {
        return $('(//div[contains(@class,"oxd-select-text--after")])[2]');
    }
    get selectEmployee () {
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


    async add () {
        await this.selectAdmin.click();
        await this.selectUserManagment.click();
        await this.selectUser.click();
        await this.btnAdd.click();
        await this.clickUserRole.click();
        // await this.clickUserRole.waitForDisplayed({timeout: 2000});
        await browser.keys(['Down arrow']);
        await browser.keys(['Down arrow', 'Enter']);
        await this.clickUserStatus.click();
        // await this.clickUserStatus.waitForDisplayed({timeout: 2000});
        await browser.keys(['Down arrow']);
        await browser.keys(['Down arrow','Enter']);
        await this.selectEmployee.addValue('Joe');
        await browser.pause(2000);
        const textAppear = await $('.oxd-autocomplete-dropdown');
        await textAppear.click();
        await this.typeUsername.addValue(`${this.myName}`);
        await this.addPassword.addValue('K$mata12345');
        await this.repeatPassword.addValue('K$mata12345');
        await browser.pause(2000);
        await this.btnSave.click();
    }

    get searchField () {
        return $('//form/div[1]/div/div[1]/div/div[2]/input');
    } 
    get btnSearch () {
          return $('//div[2]/button[2]');
    }
    get btnReset () {
        return $('//div[2]/form/div[2]/button[1]');
    }  
    get userName () {
        return $(`//div[text()="${this.myName}"]`);
    }

    async verify () {
      await this.searchField.addValue(`${this.myName}`);
      await this.btnSearch.click();
      await this.btnReset.click();
    }
    
    get checkBox () {
        return $(`//div[text()="${this.myName}"]/ancestor::div[@class="oxd-table-card"]//span`);
    }
    get btnDelete () {
        return $(`//div[text()="${this.myName}"]/ancestor::div[@class="oxd-table-card"]//button[1]`);
    }
    get btnDeleteConfirm () {
        return $('//div[@class="orangehrm-modal-footer"]//button[2]');
    }

    async delete () {
     await this.checkBox.click();
     await this.btnDelete.click();
     await this.btnDeleteConfirm.click();  
    //  await browser.pause(2000);
    }
}

module.exports = new AdminPage();
