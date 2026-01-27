import { gotoAndWait } from "../../helper";
import { takeScreenshots } from "../../screenshot/helper";
import { test } from "@playwright/test";

test.describe("dev/ui/nemo-speaker", () => {
  test("default", async ({ page }) => {
    await gotoAndWait(page, "/dev/ui/nemo-speaker/");
    await takeScreenshots(page);
  });
});
