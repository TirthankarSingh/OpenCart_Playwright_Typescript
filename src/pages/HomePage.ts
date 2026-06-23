import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";


export class HomePage extends BasePage {
    //private Locators
    private readonly logoutlink: Locator;
    private readonly headers: Locator;
    private readonly search:Locator
    private readonly searchIcon:Locator



    constructor(page: Page){
        super(page)
        this.logoutlink = page.getByRole('link',{name:'Logout'});
        this.headers = page.getByRole('heading',{level:2});
        this.search = page.getByRole('textbox',{name:'Search'});
        this.searchIcon = page.locator('div#search button');
    };

    async getHomePageTitle(): Promise<string>{
        return await this.page.title()
    }

    async isLogoutLinkExist(): Promise<boolean>{
        return await this.logoutlink.isVisible()
    }

    async getHomePageHeaders():Promise<string[]> {
        return await this.headers.allInnerTexts();
    }

    async doSearch(searchkey: string):Promise<void>{
        await this.search.fill(searchkey);
        await this.searchIcon.click()
    }
}
