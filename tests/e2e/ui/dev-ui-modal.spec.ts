import { gotoAndWait } from "../helper";
import { getLocators } from "./helper";
import { expect, test } from "@playwright/test";

test.describe("dev/ui/modal", () => {
  test("privacy-policy", async ({ page }) => {
    await gotoAndWait(page, "/dev/ui/modal/privacy-policy/");
    const { modal } = getLocators(page);
    await expect(modal).toBeVisible();
    await expect(modal.locator("header")).toContainText("プライバシーポリシー");
    await expect(page).toHaveScreenshot();
  });

  test("nemo-term", async ({ page }) => {
    await gotoAndWait(page, "/dev/ui/modal/nemo-term/");
    const { modal } = getLocators(page);
    await expect(modal).toBeVisible();
    await expect(modal.locator("header")).toContainText(
      "VOICEVOX Nemo 利用規約",
    );
    await expect(page).toHaveScreenshot();
  });

  test("library-term-intro", async ({ page }) => {
    await gotoAndWait(page, "/dev/ui/modal/library-term-intro/");
    const { modal } = getLocators(page);
    await expect(modal).toBeVisible();
    await expect(modal.locator("header")).toContainText("利用規約");
    await expect(page).toHaveScreenshot();
  });

  test("nemo-guidance", async ({ page }) => {
    await gotoAndWait(page, "/dev/ui/modal/nemo-guidance/");
    const { modal } = getLocators(page);
    await expect(modal).toBeVisible();
    await expect(modal.locator("header")).toContainText(
      "VOICEVOX Nemo ご利用案内",
    );
    await expect(page).toHaveScreenshot();
  });

  test("download-nemo", async ({ page }) => {
    await gotoAndWait(page, "/dev/ui/modal/download-nemo/");
    const { modal } = getLocators(page);
    await expect(modal).toBeVisible();
    await expect(modal.locator("header")).toContainText(
      "Nemo エンジン ダウンロード",
    );
    await expect(page).toHaveScreenshot();
  });

  test("download", async ({ page }) => {
    await gotoAndWait(page, "/dev/ui/modal/download/");
    const { modal } = getLocators(page);
    await expect(modal).toBeVisible();
    await expect(modal.locator("header")).toContainText(
      "VOICEVOX ダウンロード",
    );
    await expect(page).toHaveScreenshot();
  });
});
