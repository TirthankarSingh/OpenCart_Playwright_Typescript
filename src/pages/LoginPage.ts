import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";


export class LoginPage extends BasePage {
    //private Locators
    private readonly emailId: Locator;
    private readonly password: Locator;
    private readonly loginBtn: Locator;
    private readonly forgotPasswordLink: Locator;
    private readonly logo: Locator;
    private readonly loginErrorMessage: Locator;

    constructor(page: Page){
        super(page)
        this.emailId = page.getByRole('textbox', { name: 'E-Mail Address' })
        this.password = page.getByRole('textbox', { name: 'Password' })
        this.forgotPasswordLink = page.locator('#content').getByRole('link', { name: 'Forgotten Password' })
        this.loginBtn = page.getByRole('button', { name: 'Login' })
        this.logo = page.getByRole('link', { name: 'naveenopencart' })
        this.loginErrorMessage= page.getByText('Warning:')
    };

    async goToLoginPage(): Promise<void>{
        await this.page.goto('opencart/index.php?route=account/login')
    }

    async getLoginPageTitle(): Promise<string>{
        return await this.page.title()
    }

    async isForgotPasswordLinkExist(): Promise<boolean>{
        return await this.forgotPasswordLink.isVisible()
    }

    async doLogin(username: string, password: string): Promise<void>{
       console.log(`username:${username}
                    password:${password}`);
       await this.emailId.fill(username)
       await this.password.fill(password)
       await this.loginBtn.click()
    }

    async isInvalidLoginErrorDisplayed(){
        return await this.loginErrorMessage.isVisible();
    }
}
