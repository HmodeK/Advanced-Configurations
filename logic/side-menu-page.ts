import { promises } from "dns";
import { BasePage } from "../infra/base-page";
import { Locator, Page } from "playwright";

export class SideMenuPage extends BasePage {

    private addTaskInSideMenu: Locator
    private loggedInLabel: Locator
    private searchButton : Locator

    constructor(page: Page) {
        super(page)
        this.addTaskInSideMenu = page.locator(`//*[@id="todoist_app"]//button`)
        this.loggedInLabel = page.locator('//*[@id=":r0:"]')
        this.searchButton = page.locator('[aria-label="Search"]')
        this.initPage()
    }
   

    getLoggedInUserName = async (): Promise<string> => {
        
        const getString = await this.loggedInLabel.innerText();
        return getString
    };



    clickAddTask = async () => {
        await this.addTaskInSideMenu.nth(2).click()
    }


    clickSearchButton =async () => {
        await this.searchButton.click()
    }


}