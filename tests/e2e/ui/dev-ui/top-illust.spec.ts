import { gotoAndWait, preparePage } from "../../helper";
import { expect, test } from "@playwright/test";

test.describe("dev/ui/top-illust", () => {
  test("default", async ({ page }) => {
    await gotoAndWait(page, "/dev/ui/top-illust/");
    await preparePage(page);
    await expect(page).toHaveScreenshot();
  });
});
