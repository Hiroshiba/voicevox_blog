import { gotoAndWait } from "../../helper";
import { takeScreenshots } from "../../screenshot/helper";
import { test } from "@playwright/test";

test.describe("dev/ui/engine-guidance", () => {
  test("default", async ({ page }) => {
    await gotoAndWait(page, "/dev/ui/engine-guidance/");
    await takeScreenshots(page);
  });
});
