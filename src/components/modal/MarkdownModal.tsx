import Dialog from "./Dialog";

export default function MarkdownModal({
  isActive,
  title,
  html,
  hide,
  className,
}: {
  isActive: boolean;
  title: string;
  html: string;
  hide: () => void;
  className?: string;
}) {
  return (
    <Dialog
      open={isActive}
      title={title}
      onClose={hide}
      panelClassName={className}
      bodyClassName="max-h-[75vh] overflow-auto"
    >
      <div
        className="markdown"
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    </Dialog>
  );
}
