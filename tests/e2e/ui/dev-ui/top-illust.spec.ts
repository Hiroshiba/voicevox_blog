import { gotoAndWait } from "../../helper";
import { takeScreenshots } from "../../screenshot/helper";
import { test } from "@playwright/test";

test.describe("dev/ui/top-illust", () => {
  test("default", async ({ page }) => {
    await gotoAndWait(page, "/dev/ui/top-illust/");
    await takeScreenshots(page);
  });
});
