import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";


export class SearchResultsPage extends BasePage {
    //private Locators
    private readonly SearchResults: Locator;


    constructor(page: Page){
        super(page)
        this.SearchResults = page.locator('div h4')
    };

    async getProductName(): Promise<string[]>{
        return await this.SearchResults.allInnerTexts()
    }

    async selectProduct(productName:string): Promise<void>{
        await this.page.getByRole('link',{name: productName}).first().click()
    }


}
