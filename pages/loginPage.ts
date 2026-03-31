import {Page} from "@playwright/test";

export class LoginPage {
    private page : Page;
    constructor(page : Page){
        this.page=page;
    }

    async navigate(){
        await this.page.goto("https://rahulshettyacademy.com/client");
    }
async login(username:string, password: string){
    await this.page.getByPlaceholder('email@example.com').fill(username);
    await this.page.getByRole('textbox', { name: 'enter your passsword' }).fill(password);
    await this.page.getByRole('button', {name: 'Login'}).click();

}

}