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
        await AdminPage.add(); 
    }); 

    it('should verify that user added and appear', async () => {
        await AdminPage.verify();
        await expect(AdminPage.userName).toBeExisting();
    }); 

    it('should delete user', async () => {
        await AdminPage.delete();
        const result = await $(`//div[text()="${AdminPage.myName}"]`);
        await result.waitForDisplayed({ reverse: true });  
    });    
});



