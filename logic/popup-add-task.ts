import { basename } from "path";
import { BasePage } from "../infra/base-page";
import { Locator, Page } from "playwright";
export class PopupAddTask extends BasePage{
   

    private taskName : Locator
    private description : Locator
    private addTaskButton : Locator

    constructor (page : Page){
        super(page)
        this.taskName = page.locator('[aria-label="Task name"]')
        this.description = page.locator('[aria-label="Description"]')
        this.addTaskButton = page.locator('[aria-label="Add task"]')
        this.initPage()
    }

    

    fillTasksName =async (nameOfTask:string) => {
        await this.taskName.type(nameOfTask,{delay:100})
    }

    fillDescription =async (describeTeam:string) => {
        await this.description.type(describeTeam,{delay:100})
    }

    clickAddTaskButton =async () => {
        await this.addTaskButton.click()
    }

    makeNewTask =async (nameOfTask:string , describeTeam:string) => {
        await this.fillTasksName(nameOfTask)
        await this.fillDescription(describeTeam)
        await this.clickAddTaskButton()
    }

}


