import { time } from 'node:console';
import {test, expect } from '../src/fixtures/pagefixtures'
import { CsvHelper } from '../src/utils/csvutils';

test.beforeEach('Launch and navigate',async({loginPage})=>{
    await loginPage.goToLoginPage();
    await loginPage.doLogin(process.env.USERNAME!,process.env.PASSWORD!)
})

test('search product test', async({homePage}) =>{
    await homePage.doSearch('macbook');
});

let productData = CsvHelper.readCsv('src/data/products.csv')
for(let row of productData){
test(`verify search products ${row.searchkey} - ${row.productname}`, async({homePage,searchResultPage}) =>{
    await homePage.doSearch(row.searchkey);
    expect(await searchResultPage.getProductName()).toHaveLength(Number(row.resultcount))
    });
}

for(let row of productData){
test(`verify user is able to land in product page- ${row.productname}`,async({homePage,searchResultPage, page})=>{
    await homePage.doSearch(row.searchkey)
    let products = await searchResultPage.getProductName()
    if (row.searchkey == 'airtel'){
        expect(products).toHaveLength(0)
        console.log("Airtel Verified");
    }
    for(let product of products){
        if (product === row.productname){
            await searchResultPage.selectProduct(product);
            expect(await page.title()).toBe(product);
        }
        console.log(product);
    }
})
}
