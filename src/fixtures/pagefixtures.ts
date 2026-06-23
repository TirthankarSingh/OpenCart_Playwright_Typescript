import {test as baseTest} from '@playwright/test'
import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'
import { SearchResultsPage } from '../pages/SearchResultsPage'
import { CsvHelper } from '../utils/csvutils';

type pageFixtures ={
    loginPage:LoginPage,
    homePage:HomePage
    searchResultPage:SearchResultsPage
    testData: Record<string, string>[]
};

export let test = baseTest.extend<pageFixtures>({

    loginPage: async ({ page }, use) => {
        let loginPage = new LoginPage(page)
        await use(loginPage)
    },

    homePage: async ({ page }, use) => {
        let homePage = new HomePage(page)
        await use(homePage)
    },

    searchResultPage: async ({ page }, use) => {
        let searchResultPage = new SearchResultsPage(page)
        await use(searchResultPage)
    },

    testData: async ({ }, use) => {
        let testData = CsvHelper.readCsv('src/data/loginData.csv');
        await use(testData);
    }
});

export { expect } from '@playwright/test'