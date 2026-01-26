import { gotoAndWait, preparePage } from "../../helper";
import { expect, test } from "@playwright/test";

test.describe("dev/ui/nemo-speaker", () => {
  test("default", async ({ page }) => {
    await gotoAndWait(page, "/dev/ui/nemo-speaker/");
    await preparePage(page);
    await expect(page).toHaveScreenshot();
  });
});
