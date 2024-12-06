import {expect, Page} from '@playwright/test';

export class ApplicationPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Selectors
    private taskCardSelector = (task: string) => `div.bg-white:has(h3:has-text("${task}"))`;
    private columnHeaderSelector = (column: string) =>
        `xpath=ancestor::div[contains(@class, "w-80")]//h2[contains(text(), "${column}")]`;
    private tagLabelSelector = (tag: string) => `span:has-text("${tag}")`;
    private sectionButtonSelector = (section: string) => `button:has(h2:has-text("${section}"))`;

    // Methods
    async navigateToSection(section: string) {
        await this.page.click(this.sectionButtonSelector(section));
    }

    async verifyTask(task: string, column: string, tags: string[]) {
        // Locate the parent task card
        const taskCard = this.page.locator(this.taskCardSelector(task));

        // Verify the task card exists and is visible
        await expect(taskCard).toBeVisible();

        // Verify the column header within the task card's parent
        const columnHeader = taskCard.locator(this.columnHeaderSelector(column));
        await expect(columnHeader).toBeVisible();

        // Verify tags within the specific task card
        for (const tag of tags) {
            const tagLocator = taskCard.locator(this.tagLabelSelector(tag));
            await expect(tagLocator).toBeVisible();
        }
    }
}