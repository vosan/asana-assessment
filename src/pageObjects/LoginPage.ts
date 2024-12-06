import {Page} from '@playwright/test';

export class LoginPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Selectors
    private usernameInput = '#username';
    private passwordInput = '#password';
    private loginButton = 'button[type="submit"]';

    // Methods
    async navigateTo() {
        await this.page.goto('/'); // Use the base URL from the config
    }

    async login(username: string, password: string) {
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);
    }
}