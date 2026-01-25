import { gotoAndWait } from "../../helper";
import { getLocators } from "../helper";
import { expect, test } from "@playwright/test";

test.describe("dev/ui/header", () => {
  test("default", async ({ page }) => {
    await gotoAndWait(page, "/dev/ui/header/");
    const { header } = getLocators(page);
    await expect(header).toBeVisible();
    await expect(page).toHaveScreenshot();
  });
});
