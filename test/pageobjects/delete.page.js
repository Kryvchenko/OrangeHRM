const configData = require('../config');
const Page = require('./page');

class DeletePage extends Page {

    get checkBox () {
        return $(`//div[text()="${configData.newusername}"]/ancestor::div[@class="oxd-table-card"]//span`);
    }
    get btnDelete () {
        return $(`//div[text()="${configData.newusername}"]/ancestor::div[@class="oxd-table-card"]//button[1]`);
    }
    get btnDeleteConfirm () {
        return $('//div[@class="orangehrm-modal-footer"]//button[2]');
    }
    get usersList () {
        return $$('.oxd-table div');
    }
    get deleteResult () {
        return $(`//div[text()="${configData.newusername}"]`);
    }
}
module.exports = new DeletePage();
