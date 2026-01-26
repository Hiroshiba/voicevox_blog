import { gotoAndWait, preparePage } from "../../helper";
import { expect, test } from "@playwright/test";

test.describe("dev/ui/character-card-dormitory", () => {
  test("default", async ({ page }) => {
    await gotoAndWait(page, "/dev/ui/character-card-dormitory/");
    await preparePage(page);
    await expect(page).toHaveScreenshot();
  });
});
