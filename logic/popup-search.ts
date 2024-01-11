import { BasePage } from "../infra/base-page";
import { Locator, Page } from "playwright";

export class PopupSearch extends BasePage {

private searchCommand : Locator

constructor(page:Page){
    super(page)
    this.searchCommand = page.locator('//input[@aria-label="Search or type a command…"]')
    this.initPage()
}

fillSearchCommand = async (search : string) => {
    await this.searchCommand.fill(search)
    await this.searchCommand.press('Enter');
}


}