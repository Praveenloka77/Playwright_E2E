import { Page, expect } from '@playwright/test';

export class CartPage {
 constructor(private page: Page) {}

 async verifyProduct(productName: string) {
  const product = this.page.locator(`.cartSection:has-text("${productName}")`);
  await expect(product).toBeVisible();
 }
}