import { gotoAndWait } from "../../helper";
import { expect, test } from "@playwright/test";

test.describe("dev/ui/footer", () => {
  test("default", async ({ page }) => {
    await gotoAndWait(page, "/dev/ui/footer/");
    await expect(page).toHaveScreenshot();
  });
});
