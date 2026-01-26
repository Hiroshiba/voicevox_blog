import { gotoAndWait, preparePage } from "../../helper";
import { expect, test } from "@playwright/test";

test.describe("dev/ui/song-character-card", () => {
  test("default", async ({ page }) => {
    await gotoAndWait(page, "/dev/ui/song-character-card/");
    await preparePage(page);
    await expect(page).toHaveScreenshot();
  });
});
