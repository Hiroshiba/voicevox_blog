import { gotoAndWait } from "../../helper";
import { takeScreenshots } from "../../screenshot/helper";
import { test } from "@playwright/test";

test.describe("dev/ui/call-box", () => {
  test("default", async ({ page }) => {
    await gotoAndWait(page, "/dev/ui/call-box/");
    await takeScreenshots(page);
  });
});
