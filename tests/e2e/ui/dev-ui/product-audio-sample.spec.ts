import { gotoAndWait, preparePage } from "../../helper";
import { expect, test } from "@playwright/test";

test.describe("dev/ui/product-audio-sample", () => {
  test("default", async ({ page }) => {
    await gotoAndWait(page, "/dev/ui/product-audio-sample/");
    await preparePage(page);
    await expect(page).toHaveScreenshot();
  });
});
