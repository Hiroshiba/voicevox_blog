import { gotoAndWait } from "../../helper";
import { takeScreenshots } from "../../screenshot/helper";
import { test } from "@playwright/test";

test.describe("dev/ui/style-dropdown", () => {
  test("default", async ({ page }) => {
    await gotoAndWait(page, "/dev/ui/style-dropdown/");
    await takeScreenshots(page);
  });
});
