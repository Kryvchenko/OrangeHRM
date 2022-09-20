const LoginPage = require('../pageobjects/login.page');
const AdminPage = require('../pageobjects/admin.page');


describe('Login to dashboard and multiple operations with user', () => {
    before( async () => {
        await LoginPage.open();
        await LoginPage.login('Admin', 'admin123');
    });

    it('should login with valid credentials', async () => {
        await expect(AdminPage.selectUserManagment).toBeExisting();
    });  

    it('should add user', async () => {
        await AdminPage.selectAdmin.click();
        await AdminPage.selectUserManagment.click();
        await AdminPage.selectUser.click();
        await AdminPage.btnAdd.click();
        await AdminPage.clickUserRole.click();
        await browser.keys(['Down arrow']);
        await browser.keys(['Down arrow', 'Enter']);
        await AdminPage.clickUserStatus.click();
        await browser.keys(['Down arrow']);
        await browser.keys(['Down arrow','Enter']);
        await AdminPage.selectEmployee.addValue('Joe');
        await browser.pause(2000);
        const textAppear = await $('.oxd-autocomplete-dropdown');
        await textAppear.click();
        await AdminPage.typeUsername.addValue(`${AdminPage.myName}`);
        await AdminPage.addPassword.addValue('K$mata12345');
        await AdminPage.repeatPassword.addValue('K$mata12345');
        await browser.pause(2000);
        await AdminPage.btnSave.click();
        await expect(AdminPage.typeUsername).toHaveValue(`${AdminPage.myName}`);
        await expect(AdminPage.typeUsername).toBeExisting();
    }); 

    it('should verify that user added and appear', async () => {
        await AdminPage.searchField.addValue(`${AdminPage.myName}`);
        await AdminPage.btnSearch.click();
        await AdminPage.btnReset.click();
        await expect(AdminPage.userName).toBeExisting();
    }); 

    it('should delete user', async () => {
        await AdminPage.checkBox.click();
        await AdminPage.btnDelete.click();
        await AdminPage.btnDeleteConfirm.click(); 
        const result = await $(`//div[text()="${AdminPage.myName}"]`);
        await result.waitForDisplayed({ reverse: true });  
    });    
});



