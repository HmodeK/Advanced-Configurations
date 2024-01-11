import { BrowserWrapper } from "../infra/browser-wrapper";
import { test, Page, expect } from '@playwright/test';
import configJson from "../config.json"
import { LoginPage } from "../logic/login-page";
import { SideMenuPage } from "../logic/side-menu-page";
import { PopupAddTask } from "../logic/popup-add-task";
import { MainPage } from "../logic/main-page";
import { Header } from "../logic/header";
import { PopupSearch } from "../logic/popup-search";
import { ResultSearch } from "../logic/result-search";

let browser: BrowserWrapper;
let page: Page;



test.describe('Tasks test', () => {
    test.beforeAll(async () => {
        browser = new BrowserWrapper;
    });

    test.beforeEach(async () => {
        page = await browser.getPage(configJson.url)
        //browser.maximizeWindow()
        const header = new Header(page)
        await header.navigatToLoginPage()
        const login = new LoginPage(page)
        await login.makeLogin(configJson.loginPageInToDo.userName, configJson.loginPageInToDo.password)
        const sideMenu = new SideMenuPage(page);
        await sideMenu.clickAddTask()
        const popup = new PopupAddTask(page);
        await popup.makeNewTask("Super team", "Awesome team")
    });

    test.afterEach(async () => {
        browser.closeBrowser()
    });


    // await sideMenu.clickAddTask()

    test('check logged in', async () => {
        const sideMenu = new SideMenuPage(page)
        expect(await sideMenu.getLoggedInUserName()).toBe("hmodeka")
    })


    test('check about added new task', async () => {
        const todayPage = new MainPage(page)
        expect(await todayPage.checkIfTaskExist("Super team")).toBeTruthy()

    })

    test('Search about task', async () => {
        const sideMenu = new SideMenuPage(page)
        await sideMenu.clickSearchButton()
        const searchPopup = new PopupSearch(page)
        await searchPopup.fillSearchCommand("Super team")
        const searchResult = new ResultSearch(page)
        expect(await searchResult.checkIfTaskExist("Super team")).toBeTruthy()
    })

})