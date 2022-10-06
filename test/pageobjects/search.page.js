const configData = require('../config');
const elementUtil = require('../util/elementUtil');
const Page = require('./page');

class SearchPage extends Page {

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
        return $(`//div[text()="${configData.newusername}"]`);
    }
    async selectSearch () {
        await elementUtil.doClick(this.searchField)
        return (await elementUtil.doSetValue(this.searchField, configData.newusername))
    }
}
module.exports = new SearchPage();
