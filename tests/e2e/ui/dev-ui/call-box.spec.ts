import { expect, test } from "@playwright/test";

test("call-box", async ({ page }) => {
  await page.goto("/dev/ui/call-box/");
  await expect(page).toHaveScreenshot({ fullPage: true });
});
