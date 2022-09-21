const configData = require('../config');
const elementUtil = require('../util/elementUtil');


const Page = require('./page');

class SearchPage extends Page {

    get searchField () {
        return $('//form/div[1]/div/div[1]/div/div[2]/input');
    } 

    async selectSearch () {
        return (await elementUtil.doClick(this.searchField))
    }
 

   
    


  
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
module.exports = new SearchPage();
