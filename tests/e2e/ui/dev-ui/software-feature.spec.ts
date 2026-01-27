import { gotoAndWait } from "../../helper";
import { takeScreenshots } from "../../screenshot/helper";
import { test } from "@playwright/test";

test.describe("dev/ui/software-feature", () => {
  test("default", async ({ page }) => {
    await gotoAndWait(page, "/dev/ui/software-feature/");
    await takeScreenshots(page);
  });
});
