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


describe('Login to dashboard and multiple operations with user', () => {
    
    it('should open login page', async () => {
        await LoginPage.open()
    });  

    it('verify page title', async () => {
        const title = await LoginPage.getPageTitle()
        console.log('Page title is', title);
        assert.equal(constants.LOGIN_PAGE_TITLE, await title, 'title is not found')
    });

    it('verify forgot password link and login with valid credentials', async () => {
        assert.equal(true, await LoginPage.forgotPasswordExist(), 'forgot password link is not present')
        await LoginPage.login(configData.username, configData.password)
    });

    it('should navigate to user page', async () => {
       await AdminPage.navigateToUserSection()
       const sectionBtnTitle = await AdminPage.getSectionButtonText()
       console.log("===========> Section btn title: ", sectionBtnTitle)
       assert.equal(constants.ADMIN_PAGE_BUTTON_TEXT, await sectionBtnTitle, 'button text is not found')
    });

    it('should select user role and status', async () => {
        await UserMngPage.addNewUser()
        await UserMngPage.selectUser()
        const selectedRole = await UserMngPage.getInputText()
        console.log("===========> Input text: ", selectedRole)
        assert.equal(constants.USER_ROLE, await selectedRole, 'role is not selected')
        await UserMngPage.selectStatus()
        const selectedStatus = await UserMngPage.getStatusText()
        console.log("===========> Status text: ", selectedStatus)
        assert.equal(constants.USER_STATUS, await selectedStatus, 'status is not selected')
    });

    it('should select employee and add user name', async () => {
        await UserMngPage.selectEmployee()
        await UserMngPage.addUserName()
        console.log("===========> User name is: ", await elementUtil.doGetValue(UserMngPage.typeUsername))
        assert.equal(configData.newusername, await elementUtil.doGetValue(UserMngPage.typeUsername), 'invalid user name')
    });

    it('should add password and save new user', async () => {
        await UserMngPage.addUserPassword()
        console.log("===========> Password is: ", await elementUtil.doGetValue(UserMngPage.repeatPassword))
        assert.equal(configData.user_pwd, await elementUtil.doGetValue(UserMngPage.repeatPassword), 'invalid password')
        assert.equal(await UserMngPage.checkPwd(), constants.NEW_USER_PWD, 'password is week')
        await UserMngPage.checkPwd () === constants.NEW_USER_PWD ? console.log('============> Pwd is good') : console.log('============> Pwd is week')
    });

    it('should save and search a new user', async () => {
        await UserMngPage.saveUserbtn()
        await SearchPage.selectSearch()
        await SearchPage.btnSearch.click()
        await expect(SearchPage.userName).toBeExisting();
        await SearchPage.btnReset.click()
        await expect(SearchPage.userName).toBeExisting();
        
    });

    it('should delete user', async () => {
         await elementUtil.doClick(DeletePage.checkBox);
         await elementUtil.doClick(DeletePage.btnDelete);
         await elementUtil.doClick(DeletePage.btnDeleteConfirm);
         const result = await $(`//div[text()="${configData.newusername}"]`)
         await result.waitForDisplayed({ reverse: true });  
         const allTargetElemets = await DeletePage.usersList
         for (let i =0; i < allTargetElemets.length; i++) {
         if (await allTargetElemets[i].getText() === configData.newusername) {
            console.log("================> " + configData.newusername + " Element wasn't deleted")
            break
          } else {
            console.log("================> " + configData.newusername + " Element was successfully deleted")
            break
          }
        }
    });  
});






