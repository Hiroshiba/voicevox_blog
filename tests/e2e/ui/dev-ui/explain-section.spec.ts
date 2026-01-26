import { gotoAndWait, preparePage } from "../../helper";
import { expect, test } from "@playwright/test";

test.describe("dev/ui/explain-section", () => {
  test("default", async ({ page }) => {
    await gotoAndWait(page, "/dev/ui/explain-section/");
    await preparePage(page);
    await expect(page).toHaveScreenshot();
  });
});
