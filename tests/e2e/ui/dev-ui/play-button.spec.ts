import { gotoAndWait } from "../../helper";
import { waitForAudios } from "@/helper/playwrightHelper";
import { expect, test } from "@playwright/test";

test.describe("dev/ui/play-button", () => {
  test("default", async ({ page }) => {
    await gotoAndWait(page, "/dev/ui/play-button/");
    await waitForAudios(page);
    await expect(page).toHaveScreenshot();
  });
});
