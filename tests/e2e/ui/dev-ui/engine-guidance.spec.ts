import { gotoAndWait } from "../../helper";
import { expect, test } from "@playwright/test";

test.describe("dev/ui/engine-guidance", () => {
  test("default", async ({ page }) => {
    await gotoAndWait(page, "/dev/ui/engine-guidance/");
    await expect(page).toHaveScreenshot();
  });
});
