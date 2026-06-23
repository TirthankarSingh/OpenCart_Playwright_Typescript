import {test, expect } from "@playwright/test";
import { LoginPage } from "../src/pages/LoginPage";
import { HomePage } from "../src/pages/HomePage";

let loginPage: LoginPage;
let homePage: HomePage;

test.beforeEach('Launch and navigate',async({page})=>{
    loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
    homePage = new HomePage(page);

})

test('login page title', async() =>{
    
    const title = await loginPage.getLoginPageTitle();
    expect(title).toBe('Account Login');
});

test('forget pwd link exist test', async() =>{

    expect(await loginPage.isForgotPasswordLinkExist()).toBeTruthy()
});

test('valid login test', async() =>{
    await loginPage.doLogin("pwtestbatch@open.com","pw123");
    expect(await homePage.isLogoutLinkExist()).toBeTruthy()
});