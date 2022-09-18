const LoginPage = require('../pageobjects/login.page');
const AdminPage = require('../pageobjects/admin.page');


describe('Login to dashboard and multiple operations with user', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('Admin', 'admin123');
    });   

    it('should add user', async () => {
        await AdminPage.add();
    }); 

    it('should verify that user added and appear', async () => {
        await AdminPage.verify();
    }); 

    it('should delete user', async () => {
        await AdminPage.delete();
    });    
});


