import { BasePage } from "../infra/base-page";
import { Locator, Page } from "playwright";

export class ResultSearch extends BasePage {

    private searchView : Locator

    constructor(page:Page){
        super(page)
        this.searchView = page.locator('//div[@class="task_content"]')
        this.initPage()
    }

    checkIfTaskExist = async (taskName: string): Promise<boolean> => {
        const count = await this.searchView.count()
        for (let i = 0 ; i < count; i++) {
            if (await this.searchView.nth(i).innerText() === taskName) {

                return true
            }

        }
        return false
    };

}
