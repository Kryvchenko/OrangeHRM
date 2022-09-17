const Page = require('./page');


/**
 * sub page containing specific selectors and methods for a specific page
 */
class AdminPage extends Page {
    /**
     * define selectors using getter methods
     */
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
        await this.clickUserRole.waitForDisplayed({timeout: 2000});
        await browser.keys(['Down arrow']);
        await browser.keys(['Down arrow', 'Enter']);
        await this.clickUserStatus.click();
        await this.clickUserStatus.waitForDisplayed({timeout: 2000});
        await browser.keys(['Down arrow']);
        await browser.keys(['Down arrow','Enter']);
        await this.selectEmployee.addValue('Joe');
        await browser.pause(5000);
        const textAppear = await $('.oxd-autocomplete-dropdown');
        await textAppear.click();
        await this.typeUsername.addValue('Alcan');
        await this.addPassword.addValue('K$mata12345');
        await this.repeatPassword.addValue('K$mata12345');
        await browser.pause(5000);
        await this.btnSave.click();
        await browser.pause(5000);
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

    async verify () {
      await this.searchField.addValue('Alcan');
      await this.btnSearch.click();
      const assertNameAfterSearch = await $('//div[text()="Alcan"]');
      await expect(assertNameAfterSearch).toBeExisting();
      await this.btnReset.click();
      await browser.pause(10000);
      const assertNameAfterReset = await $('//div[text()="Alcan"]');
      await expect(assertNameAfterReset).toBeExisting();
      await browser.pause(20000);
    }
   
}

module.exports = new AdminPage();
