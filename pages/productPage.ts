import { Page } from '@playwright/test';

export class ProductPage {
 constructor(private page: Page) {}

 async addProductToCart(productName: string) {
  const products = this.page.locator('.card-body');

  const count = await products.count();

  for (let i = 0; i < count; i++) {
   const name = await products.nth(i).locator('b').textContent();

   if (name === productName) {
    await products.nth(i).getByRole('button', { name: 'Add To Cart' }).click();
    break;
   }
  }
 }

 async goToCart() {
  await this.page.getByRole('button', { name: 'Cart' }).click();
 }
}