import {test, expect } from "@playwright/test";
import { LoginPage } from "../src/pages/LoginPage";
import { HomePage } from "../src/pages/HomePage";

let loginPage: LoginPage;
let homePage: HomePage;

test.beforeEach('Launch and navigate',async({page})=>{
    loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
    await loginPage.doLogin("pwtestbatch@open.com","pw123");
    homePage = new HomePage(page);

})

test('home page title test', async() =>{
    
    const title = await homePage.getHomePageTitle();
    expect(title).toBe('My Account');
});

test('home page hedder exist test', async() =>{
    
    const allHeaders = await homePage.getHomePageHeaders()
    console.log(allHeaders);
    expect (allHeaders).toHaveLength(4)
    expect (allHeaders).toEqual(['My Account', 'My Orders', 'My Affiliate Account','Newsletter'])
});