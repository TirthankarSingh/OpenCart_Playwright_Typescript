import {test, expect } from '../src/fixtures/pagefixtures'


test.beforeEach('Launch and navigate @smoke',async({loginPage})=>{
    await loginPage.goToLoginPage();
    await loginPage.doLogin("pwtestbatch@open.com","pw123");


})

test('home page title test', async({homePage}) =>{
    
    const title = await homePage.getHomePageTitle();
    expect(title).toBe('My Account');
});

test('home page hedder exist test @smoke', async({homePage}) =>{
    
    const allHeaders = await homePage.getHomePageHeaders()
    console.log(allHeaders);
    expect (allHeaders).toHaveLength(4)
    expect (allHeaders).toEqual(['My Account', 'My Orders', 'My Affiliate Account','Newsletter'])
});