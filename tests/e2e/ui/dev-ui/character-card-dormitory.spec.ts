import { gotoAndWait } from "../../helper";
import { takeScreenshots } from "../../screenshot/helper";
import { test } from "@playwright/test";

test.describe("dev/ui/character-card-dormitory", () => {
  test("default", async ({ page }) => {
    await gotoAndWait(page, "/dev/ui/character-card-dormitory/");
    await takeScreenshots(page);
  });
});
