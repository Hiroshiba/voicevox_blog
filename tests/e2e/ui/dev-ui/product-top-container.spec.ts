import { gotoAndWait } from "../../helper";
import { takeScreenshots } from "../../screenshot/helper";
import { test } from "@playwright/test";

test.describe("dev/ui/product-top-container", () => {
  test("default", async ({ page }) => {
    await gotoAndWait(page, "/dev/ui/product-top-container/");
    await takeScreenshots(page);
  });
});
