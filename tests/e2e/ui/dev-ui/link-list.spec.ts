import { gotoAndWait } from "../../helper";
import { expect, test } from "@playwright/test";

test.describe("dev/ui/link-list", () => {
  test("default", async ({ page }) => {
    await gotoAndWait(page, "/dev/ui/link-list/");
    await expect(page).toHaveScreenshot();
  });
});
