const Page = require('./page');


class AdminPage extends Page {
    
    get myName () {
        return "Balak";
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

    get checkBox () {
        return $(`//div[text()="${this.myName}"]/ancestor::div[@class="oxd-table-card"]//span`);
    }
    get btnDelete () {
        return $(`//div[text()="${this.myName}"]/ancestor::div[@class="oxd-table-card"]//button[1]`);
    }
    get btnDeleteConfirm () {
        return $('//div[@class="orangehrm-modal-footer"]//button[2]');
    }

}

module.exports = new AdminPage();
