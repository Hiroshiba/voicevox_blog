import { gotoAndWait } from "../../helper";
import { takeScreenshots } from "../../screenshot/helper";
import { test } from "@playwright/test";

test.describe("dev/ui/song-character-card", () => {
  test("default", async ({ page }) => {
    await gotoAndWait(page, "/dev/ui/song-character-card/");
    await takeScreenshots(page);
  });
});
