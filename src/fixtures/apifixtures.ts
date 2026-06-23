import {test as baseTest} from '@playwright/test'
import { CsvHelper } from '../utils/csvutils';
import { Api_Helper } from '../api/Api_Helper';

type apiFixtures ={
    apiHelper:Api_Helper
};

export let test = baseTest.extend<apiFixtures>({

    apiHelper: async ({ request }, use) => {
        let apiHelper = new Api_Helper(request, process.env.API_BASEURL!)
        await use(apiHelper)
    }
});

export { expect } from '@playwright/test'