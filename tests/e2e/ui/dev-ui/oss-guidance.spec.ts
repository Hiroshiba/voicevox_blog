import { gotoAndWait } from "../../helper";
import { takeScreenshots } from "../../screenshot/helper";
import { test } from "@playwright/test";

test.describe("dev/ui/oss-guidance", () => {
  test("default", async ({ page }) => {
    await gotoAndWait(page, "/dev/ui/oss-guidance/");
    await takeScreenshots(page);
  });
});
