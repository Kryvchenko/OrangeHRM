const LoginPage = require('../pageobjects/login.page');
const configData = require('../config');
const constans = require('../constants/constans');
const AdminPage = require('../pageobjects/admin.page');
const UserMngPage = require('../pageobjects/user.mng.page');
const SearchPage = require('../pageobjects/search.page')
const elementUtil = require('../util/elementUtil');



describe('Login to dashboard and multiple operations with user', () => {
    
    it('should open login page', async () => {
        await LoginPage.open()
    });  

    it('verify page title', async () => {
        const title = await LoginPage.getPageTitle()
        console.log('Page title is', title);
        assert.equal(constans.LOGIN_PAGE_TITLE, await title, 'title is not found')
    });

    it('verify forgot password link and login with valid credentials', async () => {
        assert.equal(true, await LoginPage.forgotPasswordExist(), 'forgot password link is not present')
        await LoginPage.login(configData.username, configData.password)
    });

    it('should navigate to user page', async () => {
       await AdminPage.navigateToUserSection()
       const sectionBtnTitle = await AdminPage.getSectionButtonText()
       console.log("===========> Section btn title: ", sectionBtnTitle)
       assert.equal(constans.ADMIN_PAGE_BUTTON_TEXT, await sectionBtnTitle, 'button text is not found')
    });

    it('should select user role and status', async () => {
        await UserMngPage.addNewUser()
        await UserMngPage.selectUser()
        const selectedRole = await UserMngPage.getInputText()
        console.log("===========> Input text: ", selectedRole)
        assert.equal(constans.USER_ROLE, await selectedRole, 'role is not selected')
        await UserMngPage.selectStatus()
        const selectedStatus = await UserMngPage.getStatusText()
        console.log("===========> Status text: ", selectedStatus)
        assert.equal(constans.USER_STATUS, await selectedStatus, 'status is not selected')
    });

    it('should select employee and add user name', async () => {
        await UserMngPage.selectEmployee()
        await UserMngPage.addUserName()
        console.log("===========> User name is: ", await elementUtil.doGetValue(UserMngPage.typeUsername))
        assert.equal(configData.newusername, await elementUtil.doGetValue(UserMngPage.typeUsername), 'invalid user name')
    });

    it('should add and repeat password, save new user', async () => {
        await UserMngPage.addUserPassword()
        console.log("===========> Password is: ", await elementUtil.doGetValue(UserMngPage.repeatPassword))
        assert.equal(configData.user_pwd, await elementUtil.doGetValue(UserMngPage.repeatPassword), 'invalid password')
    });

    it('should save and search a new user', async () => {
        await UserMngPage.saveUserbtn()
        await SearchPage.selectSearch()
    });

    // it('should add user', async () => {

    //     await AdminPage.btnSave.click();
    //     await expect(AdminPage.typeUsername).toHaveValue(`${AdminPage.myName}`);
    //     await expect(AdminPage.typeUsername).toBeExisting();
    // }); 

    // it('should verify that user added and appear', async () => {
    //     await AdminPage.searchField.addValue(`${AdminPage.myName}`);
    //     await AdminPage.btnSearch.click();
    //     await AdminPage.btnReset.click();
    //     await expect(AdminPage.userName).toBeExisting();
    // }); 

    // it('should delete user', async () => {
    //     await AdminPage.checkBox.click();
    //     await AdminPage.btnDelete.click();
    //     await AdminPage.btnDeleteConfirm.click(); 
    //     const result = await $(`//div[text()="${AdminPage.myName}"]`);
    //     await result.waitForDisplayed({ reverse: true });  
    // });    
});






