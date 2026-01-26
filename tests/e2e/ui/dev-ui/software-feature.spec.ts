import { gotoAndWait } from "../../helper";
import { expect, test } from "@playwright/test";

test.describe("dev/ui/software-feature", () => {
  test("default", async ({ page }) => {
    await gotoAndWait(page, "/dev/ui/software-feature/");
    await expect(page).toHaveScreenshot();
  });
});
