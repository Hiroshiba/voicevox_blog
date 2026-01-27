import { gotoAndWait } from "../../helper";
import { takeScreenshots } from "../../screenshot/helper";
import { test } from "@playwright/test";

test.describe("dev/ui/footer", () => {
  test("default", async ({ page }) => {
    await gotoAndWait(page, "/dev/ui/footer/");
    await takeScreenshots(page);
  });
});
