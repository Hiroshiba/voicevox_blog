import { gotoAndWait } from "../../helper";
import { takeScreenshots } from "../../screenshot/helper";
import { test } from "@playwright/test";

test.describe("dev/ui/link-list", () => {
  test("default", async ({ page }) => {
    await gotoAndWait(page, "/dev/ui/link-list/");
    await takeScreenshots(page);
  });
});
