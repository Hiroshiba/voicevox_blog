import ModalMarkdown from "@/components/modal/MarkdownModal";

export function PrivacyPolicyModalPage({ html }: { html: string }) {
  return (
    <ModalMarkdown
      title="プライバシーポリシー"
      html={html}
      isActive={true}
      hide={() => {}}
    />
  );
}
