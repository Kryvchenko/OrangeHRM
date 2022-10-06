const LoginPage = require('../pageobjects/login.page');
const configData = require('../config');
const constants = require('../constants/constants');
const AdminPage = require('../pageobjects/admin.page');
const UserMngPage = require('../pageobjects/user.mng.page');
const SearchPage = require('../pageobjects/search.page')
const DeletePage = require('../pageobjects/delete.page')
const elementUtil = require('../util/elementUtil');
const { assert } = require('chai');
const expect = require('expect').expect


describe('User Management page', () => {

    before( async () => {
        await LoginPage.open() 
        await LoginPage.login(configData.username, configData.password)
    });

    it('should allow to add user via Add User form', async () => {
       await AdminPage.navigateToUserSection()
       await UserMngPage.addNewUser()
       await UserMngPage.selectUser()
       const selectedRole = await UserMngPage.getInputText()
       assert.equal(constants.USER_ROLE, await selectedRole, 'role is not selected')
       await UserMngPage.selectStatus()
       await UserMngPage.selectEmployee()
       await UserMngPage.addUserName(configData.newusername)
       await UserMngPage.addUserPassword()
       await UserMngPage.clickOnSaveUserButton()
    });

    it('should allow to search new user', async () => {
        await SearchPage.selectSearch()
        await SearchPage.btnSearch.click()
        await expect(SearchPage.userName).toBeExisting();
    });

    it('should allow to reset user', async () => {
        await SearchPage.btnReset.click()
        await expect(SearchPage.userName).toBeExisting(); 
    });

    it('should allow to delete user', async () => {
         await elementUtil.doClick(DeletePage.checkBox);
         await elementUtil.doClick(DeletePage.btnDelete);
         await elementUtil.doClick(DeletePage.btnDeleteConfirm); 
         const allTargetElemets = await DeletePage.usersList
         for (let i =0; i < allTargetElemets.length; i++) {
         if (await allTargetElemets[i].getText() === configData.newusername) {
            console.log(`================>  ${configData.newusername}  Element wasn't deleted`)
            break
          } else {
            console.log(`================>   ${configData.newusername}  Element was successfully deleted`)
            break
          }
        }
        assert.equal(true, await DeletePage.deleteResult.waitForDisplayed({ reverse: true }), 'user not displayed')
    });  
});






