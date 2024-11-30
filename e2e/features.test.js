import { test, expect } from "@playwright/test";

test.describe("mouse scroll testing", () => {
  test("F5 stop function test", async ({ page }) => {
    page.on('console', msg => {
      if(msg.type() === 'error') {
        throw new Error(msg.text())
      }
    });

    await page.goto("http://localhost:3000/");
    await page
      .locator("figure")
      .filter({ hasText: "對盔甲施法的卷軸能增加防具的防禦力" })
      .locator('[id="🔥ItemsUI__X__Img"]:nth-of-type(1)')
      .click();
    await page.locator('[id="🔥ItemsUI__X__Img"]').first().click();
    await expect(page.locator('[id="🌀SinglePlayer__Bottom"]')).toContainText(
      "請選擇一種防具。",
    );
  });

  test("armor to +1", async ({ page }) => {
    page.on('console', msg => {
      if(msg.type() === 'error') {
        throw new Error(msg.text())
      }
    });

    await page.goto("http://localhost:3000/");
    await page
      .locator("figure")
      .filter({ hasText: "對盔甲施法的卷軸能增加防具的防禦力" })
      .locator('[id="🔥ItemsUI__X__Img"]')
      .click();
    await page.locator("li:nth-child(10)").click();
    await expect(page.locator('[id="🌀SinglePlayer__Bottom"]')).toContainText(
      "+0 力量手套 一瞬間發出 銀色的 光芒。",
    );
  });

  test("armor to -1", async ({ page }) => {
    page.on('console', msg => {
      if(msg.type() === 'error') {
        throw new Error(msg.text())
      }
    });

    await page.goto("http://localhost:3000/");
    await page
      .locator("figure")
      .filter({ hasText: "對盔甲施法的卷軸強化成功可將裝備強化數值(-1)" })
      .locator('[id="🔥ItemsUI__X__Img"]')
      .click();
    await page.locator("li:nth-child(10)").click();
    await expect(page.locator('[id="🌀SinglePlayer__Bottom"]')).toContainText(
      "+0 力量手套 一瞬間發出 黑色的 光芒。",
    );
  });

  test("weapon to +1", async ({ page }) => {
    page.on('console', msg => {
      if(msg.type() === 'error') {
        throw new Error(msg.text())
      }
    });

    await page.goto("http://localhost:3000/");
    await page
      .locator("figure")
      .filter({ hasText: "對武器施法的卷軸能增加武器的攻擊力" })
      .locator('[id="🔥ItemsUI__X__Img"]')
      .click();
    await page.locator('[id="🔥StatusEquips__Equip"]').first().click();
    await expect(page.locator('[id="🌀SinglePlayer__Bottom"]')).toContainText(
      "+0 瑟魯基之劍 一瞬間發出 藍色的 光芒。",
    );
  });

  test("weapon to -1", async ({ page }) => {
    page.on('console', msg => {
      if(msg.type() === 'error') {
        throw new Error(msg.text())
      }
    });

    await page.goto("http://localhost:3000/");
    await page
      .locator("figure")
      .filter({ hasText: "對武器施法的卷軸強化成功可將武器強化數值(-1)" })
      .locator('[id="🔥ItemsUI__X__Img"]')
      .click();
    await page.locator('[id="🔥StatusEquips__Equip"]').first().click();
    await expect(page.locator('[id="🌀SinglePlayer__Bottom"]')).toContainText(
      "+0 瑟魯基之劍 一瞬間發出 黑色的 光芒。",
    );
  });
});