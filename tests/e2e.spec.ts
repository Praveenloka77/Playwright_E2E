import {test, expect} from "@playwright/test"
import { LoginPage } from "../pages/loginPage";
import {ProductPage} from "../pages/productPage";
import { CartPage } from "../pages/cartPage";
import { testData } from "../Utils/testData";

test("E2E Test - Add product to cart", async ({page})=>{
    const login=new LoginPage(page);
    const product=new ProductPage(page);
    const cart=new CartPage(page);

    await login.navigate();
    await login.login(testData.username, testData.password);
    await product.addProductToCart(testData.product);
    await product.goToCart();
    await cart.verifyProduct(testData.product);

});

test('E2e - verify Only Login', async ({page}) => {
    const login=new LoginPage(page);
    await login.navigate();
    await login.login(testData.username, testData.password);
});