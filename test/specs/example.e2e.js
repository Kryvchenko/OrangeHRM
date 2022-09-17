const LoginPage = require('../pageobjects/login.page');
const AdminPage = require('../pageobjects/admin.page');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('Admin', 'admin123');

        await AdminPage.add();
        await AdminPage.verify();
        
        // const assertName = await $('//div[text()="Oleg.BBBBV"]');
        // await expect(assertName).toBeExisting();
        // await expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!');
    });
});


