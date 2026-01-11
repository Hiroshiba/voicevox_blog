/**
 * Nemoの案内モーダル
 */
import { sendEvent } from "@/helper";
import {
  $downloadModal,
  $nemoDownloadModal,
  $nemoGuidanceModal,
} from "@/store";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStore } from "@nanostores/react";
import Dialog from "./Dialog";

export default function NemoGuidanceModal() {
  const isActive = useStore($nemoGuidanceModal);
  const hide = () => $nemoGuidanceModal.set(false);

  return (
    <Dialog
      open={isActive}
      title="VOICEVOX Nemo ご利用案内"
      onClose={hide}
      bodyClassName="space-y-5"
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h3 className="text-sm font-semibold text-slate-600">- Step 1 -</h3>
        <p>VOICEVOX ソフトウェアをインストール</p>
        <button
          className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onClick={() => {
            $downloadModal.set(true);
            sendEvent("download", "software");
          }}
          type="button"
        >
          <FontAwesomeIcon icon={faDownload} />
          <span>VOICEVOX ダウンロード</span>
        </button>
      </div>

      <hr className="border-slate-200" />

      <div className="flex flex-col items-center gap-2 text-center">
        <h3 className="text-sm font-semibold text-slate-600">- Step 2 -</h3>
        <p>
          VOICEVOX ソフトウェアを起動して
          <br />
          設定→オプション→高度な設定→<b>マルチエンジン機能</b>をON
        </p>
      </div>

      <hr className="border-slate-200" />

      <div className="flex flex-col items-center gap-2 text-center">
        <h3 className="text-sm font-semibold text-slate-600">- Step 3 -</h3>
        <p>Nemo エンジンを追加</p>
        <button
          className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onClick={() => $nemoDownloadModal.set(true)}
          type="button"
        >
          <FontAwesomeIcon icon={faDownload} />
          <span>Nemo エンジン ダウンロード</span>
        </button>
      </div>

      <hr className="border-slate-200" />

      <p className="text-center text-sm text-slate-600">
        ※ VOICEVOX ソフトウェアにはキャラクターの音声も含まれます。
        <br />
        キャラクターの音声と Nemo の音声は利用規約が異なるので
        <br />
        ご利用の際は各音声の利用規約をご確認ください。
      </p>
    </Dialog>
  );
}
