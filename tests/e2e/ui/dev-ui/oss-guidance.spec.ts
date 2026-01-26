import { gotoAndWait } from "../../helper";
import { expect, test } from "@playwright/test";

test.describe("dev/ui/oss-guidance", () => {
  test("default", async ({ page }) => {
    await gotoAndWait(page, "/dev/ui/oss-guidance/");
    await expect(page).toHaveScreenshot();
  });
});
