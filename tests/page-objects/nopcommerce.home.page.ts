import {expect, Page} from '@playwright/test';
import BasePage from './base.page';
import { log } from '../helpers/logger';

export default class HomePage extends BasePage {

    //Constructor
    constructor(page: Page) {
        super(page);
    }
    //Locartors
    get userNameInputBox() {return this.page.getByRole('textbox', {name: 'Email:'});}
    get passwordInputBox() {return this.page.getByRole('textbox', {name: 'Password:'});}
    get loginBtn() {return this.page.getByRole('button', {name: 'Log in'});}
    //Page Actions

    async loginToNopCommerceApp(url: string, username: string, password: string) {
        await log("info",`Navigating to the URL: ${url}`);

        //Login
        await this.navigateToUrl(url);
        await this.typeInputBox(this.userNameInputBox, username);
        await this.typeInputBox(this.passwordInputBox, password);
        await this.butttonClick(this.loginBtn);

    //Asset the Url after login
        await expect(this.page).toHaveURL('${url}/admin/');
        await log("info", 'Home page is successfully launched');
    }
}