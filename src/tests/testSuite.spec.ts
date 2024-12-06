import {test} from '@playwright/test';
import {LoginPage} from '../pageObjects/LoginPage';
import {ApplicationPage} from '../pageObjects/ApplicationPage';
import * as fs from 'fs';

interface TestCase {
    name: string;
    navigate: string;
    task: string;
    column: string;
    tags: string[];
}

const data: { cases: TestCase[] } = JSON.parse(
    fs.readFileSync('./src/data/testCases.json', 'utf-8')
);

test.describe('Application Tests', () => {
    test.beforeEach(async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigateTo();
        await loginPage.login('admin', 'password123');
    });

    data.cases.forEach((testCase) => {
        test(testCase.name, async ({page}) => {
            const appPage = new ApplicationPage(page);
            await appPage.navigateToSection(testCase.navigate);
            await appPage.verifyTask(
                testCase.task,
                testCase.column,
                testCase.tags
            );
        });
    });
});