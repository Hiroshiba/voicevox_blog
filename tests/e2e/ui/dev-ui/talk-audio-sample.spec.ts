import { gotoAndWait, preparePage } from "../../helper";
import { expect, test } from "@playwright/test";

test.describe("dev/ui/talk-audio-sample", () => {
  test("default", async ({ page }) => {
    await gotoAndWait(page, "/dev/ui/talk-audio-sample/");
    await preparePage(page);
    await expect(page).toHaveScreenshot();
  });
});
