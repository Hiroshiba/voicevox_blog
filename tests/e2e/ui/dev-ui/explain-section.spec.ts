import { gotoAndWait } from "../../helper";
import { takeScreenshots } from "../../screenshot/helper";
import { test } from "@playwright/test";

test.describe("dev/ui/explain-section", () => {
  test("default", async ({ page }) => {
    await gotoAndWait(page, "/dev/ui/explain-section/");
    await takeScreenshots(page);
  });
});
