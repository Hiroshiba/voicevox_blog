import { gotoAndWait } from "../../helper";
import { expect, test } from "@playwright/test";

test.describe("dev/ui/style-dropdown", () => {
  test("default", async ({ page }) => {
    await gotoAndWait(page, "/dev/ui/style-dropdown/");
    await expect(page).toHaveScreenshot();
  });
});
