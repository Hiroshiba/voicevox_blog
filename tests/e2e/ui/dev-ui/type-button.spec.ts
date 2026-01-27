import { gotoAndWait } from "../../helper";
import { takeScreenshots } from "../../screenshot/helper";
import { test } from "@playwright/test";

test.describe("dev/ui/type-button", () => {
  test("default", async ({ page }) => {
    await gotoAndWait(page, "/dev/ui/type-button/");
    await takeScreenshots(page);
  });
});
