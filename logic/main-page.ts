import { get } from "http";
import { BasePage } from "../infra/base-page";
import { Locator, Page } from "playwright";
export class MainPage extends BasePage {

    private taskList: Locator


    constructor(page: Page) {
        super(page)
        this.taskList = page.locator('//div[@class="task_content"]');

        this.initPage()
    }




    checkIfTaskExist = async (taskName: string): Promise<boolean> => {
        const count = await this.taskList.count()
        for (let i = 0 ; i < count; i++) {
            if (await this.taskList.nth(i).innerText() === taskName) {

                return true
            }

        }
        return false
    };








}