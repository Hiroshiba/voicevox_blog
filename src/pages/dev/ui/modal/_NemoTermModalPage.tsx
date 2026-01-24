import ModalMarkdown from "@/components/modal/MarkdownModal";

export function NemoTermModalPage({ html }: { html: string }) {
  return (
    <ModalMarkdown
      title="VOICEVOX Nemo 利用規約"
      html={html}
      isActive={true}
      hide={() => {}}
    />
  );
}
