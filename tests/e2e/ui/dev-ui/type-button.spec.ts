import { expect, test } from "@playwright/test";

test("type-button", async ({ page }) => {
  await page.goto("/dev/ui/type-button/");
  await expect(page).toHaveScreenshot({ fullPage: true });
});
