import { time } from 'node:console';
import {test, expect } from '../src/fixtures/pagefixtures'
import { CsvHelper } from '../src/utils/csvutils';
import { JsonHelper } from '../src/utils/jsonutils';


test.beforeEach('Launch and navigate',async({loginPage})=>{
    await loginPage.goToLoginPage();

})

test('login page title', async({loginPage}) =>{
    
    const title = await loginPage.getLoginPageTitle();
    expect(title).toBe('Account Login');
});

test('forget pwd link exist test', async({loginPage}) =>{

    expect(await loginPage.isForgotPasswordLinkExist()).toBeTruthy()
});

test('valid login test', async({loginPage, homePage}) =>{
    console.log(process.env.USERNAME);
    console.log(process.env.PASSWORD);
    await loginPage.doLogin(process.env.USERNAME!,process.env.PASSWORD!);
    expect(await homePage.isLogoutLinkExist()).toBeTruthy()
});

test ('login to app using wrong creadentials', async({loginPage,testData})=>{
    for(let row of testData) {
        await loginPage.doLogin(row.username, row.password)
        expect(await loginPage.isInvalidLoginErrorDisplayed()).toBeTruthy()
    }
})


//Without DATA Fixtures
let loginInvalidData = CsvHelper.readCsv('src/data/loginData.csv')
for(let row of loginInvalidData){
test (`login with wrong creadentials username: ${row.username} password: ${row.password}`, async({loginPage})=>{
        await loginPage.doLogin(row.username, row.password)
        expect(await loginPage.isInvalidLoginErrorDisplayed()).toBeTruthy()

    })
}

//Login Invalid Data From json
let jsonData = JsonHelper.readJson('src/data/loginData.json')
for(let row of jsonData){
test (`login with wrong creadentials json username: ${row.username} password: ${row.password}`, async({loginPage})=>{
        await loginPage.doLogin(row.username, row.password)
        expect(await loginPage.isInvalidLoginErrorDisplayed()).toBeTruthy()
    })
}
