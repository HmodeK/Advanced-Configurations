import { BasePage } from "../infra/base-page";
import { Locator , Page } from "playwright";

export class Header extends BasePage{
    private loginButton: Locator
    constructor(page:Page){
        super(page)
        this.loginButton = page.getByText('Log in');
        this.initPage()
    }
    navigatToLoginPage =async () => {
        await this.loginButton.first().click()
    }
}