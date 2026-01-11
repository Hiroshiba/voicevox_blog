/**
 * Nemoのダウンロードモーダル
 */
import DownloadModalSelecter from "./Selector";
import { NEMO_VERSION } from "@/constants";
import { withBaseUrl } from "@/helper";
import { $nemoDownloadModal } from "@/store";
import { useStore } from "@nanostores/react";
import { useEffect, useState } from "react";
import Dialog from "../Dialog";

type OsType = "Windows" | "Mac" | "Linux";
type ModeType =
  | "GPU / CPU"
  | "CPU"
  | "CPU (Intel)"
  | "CPU (Apple)"
  | "CPU (x64)"
  | "CPU (arm64)";

const modeAvailables: Record<OsType, ModeType[]> = {
  Windows: ["GPU / CPU", "CPU"],
  Mac: ["CPU (Intel)", "CPU (Apple)"],
  Linux: ["GPU / CPU", "CPU (x64)", "CPU (arm64)"],
};

export default function DownloadNemoModal() {
  const isActive = useStore($nemoDownloadModal);
  const hide = () => $nemoDownloadModal.set(false);

  const downloadUrls: Record<
    OsType,
    Partial<Record<ModeType, { url: string; name: string }>>
  > = {
    Windows: {
      "GPU / CPU": {
        url: `https://github.com/VOICEVOX/voicevox_nemo_engine/releases/download/${NEMO_VERSION}/voicevox_engine-windows-directml-${NEMO_VERSION}.vvpp`,
        name: `VOICEVOX.Nemo.${NEMO_VERSION}.Windows.vvpp`,
      },
      CPU: {
        url: `https://github.com/VOICEVOX/voicevox_nemo_engine/releases/download/${NEMO_VERSION}/voicevox_engine-windows-cpu-${NEMO_VERSION}.vvpp`,
        name: `VOICEVOX-CPU.Nemo.${NEMO_VERSION}.Windows.vvpp`,
      },
    },
    Mac: {
      "CPU (Intel)": {
        url: `https://github.com/VOICEVOX/voicevox_nemo_engine/releases/download/${NEMO_VERSION}/voicevox_engine-macos-x64-${NEMO_VERSION}.vvpp`,
        name: `VOICEVOX-CPU-x64.Nemo.${NEMO_VERSION}.Mac.vvpp`,
      },
      "CPU (Apple)": {
        url: `https://github.com/VOICEVOX/voicevox_nemo_engine/releases/download/${NEMO_VERSION}/voicevox_engine-macos-arm64-${NEMO_VERSION}.vvpp`,
        name: `VOICEVOX-CPU-arm64.Nemo.${NEMO_VERSION}.Mac.vvpp`,
      },
    },
    Linux: {
      "GPU / CPU": {
        url: `https://github.com/VOICEVOX/voicevox_nemo_engine/releases/download/${NEMO_VERSION}/voicevox_engine-linux-nvidia-${NEMO_VERSION}.vvpp`,
        name: `VOICEVOX.Nemo.${NEMO_VERSION}.Linux.vvpp`,
      },
      "CPU (x64)": {
        url: `https://github.com/VOICEVOX/voicevox_nemo_engine/releases/download/${NEMO_VERSION}/voicevox_engine-linux-cpu-x64-${NEMO_VERSION}.vvpp`,
        name: `VOICEVOX-CPU.Nemo.${NEMO_VERSION}.Linux.vvpp`,
      },
      "CPU (arm64)": {
        url: `https://github.com/VOICEVOX/voicevox_nemo_engine/releases/download/${NEMO_VERSION}/voicevox_engine-linux-cpu-arm64-${NEMO_VERSION}.vvpp`,
        name: `VOICEVOX-CPU-arm64.Nemo.${NEMO_VERSION}.Linux.vvpp`,
      },
    },
  };

  const [selectedOs, setSelectedOs] = useState<OsType>("Windows");
  const [selectedMode, setSelectedMode] = useState<ModeType>("GPU / CPU");

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    if (userAgent.includes("Windows")) {
      selectOs("Windows");
    } else if (userAgent.includes("Mac")) {
      selectOs("Mac");
    } else if (userAgent.includes("Linux")) {
      selectOs("Linux");
    }
  }, []);

  const selectOs = (os: OsType) => {
    setSelectedOs(os);
    // 変更先のOSで選択できないモードの場合、最初のモードを選択する
    if (!modeAvailables[os].includes(selectedMode)) {
      setSelectedMode(modeAvailables[os][0]);
    }
  };

  const downloadUrl = downloadUrls[selectedOs][selectedMode]?.url;
  const downloadName = downloadUrls[selectedOs][selectedMode]?.name;
  const isDownloadDisabled = !downloadUrl;

  return (
    <Dialog
      open={isActive}
      title="Nemo エンジン ダウンロード"
      onClose={hide}
      bodyClassName="space-y-4"
      footer={
        <a
          href={downloadUrl}
          download={downloadName}
          target="_blank"
          rel="noreferrer"
          className={[
            "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500",
            isDownloadDisabled
              ? "pointer-events-none bg-slate-300 text-slate-600"
              : "bg-indigo-600 text-white hover:bg-indigo-500",
          ].join(" ")}
          aria-disabled={isDownloadDisabled}
        >
          ダウンロード
        </a>
      }
    >
      <DownloadModalSelecter
        label="OS"
        selected={selectedOs}
        setSelected={selectOs}
        candidates={["Windows", "Mac", "Linux"]}
      />

      <hr className="border-slate-200" />

      <DownloadModalSelecter
        label="対応モード"
        selected={selectedMode}
        setSelected={setSelectedMode}
        candidates={modeAvailables[selectedOs]}
      />
      <p className="text-center text-xs text-slate-600">
        ※ GPUモードの方が快適ですが、利用するためには
        <a className="underline" href={withBaseUrl("/qa/")}>
          対応するGPU
        </a>
        が必要です
      </p>

      <hr className="border-slate-200" />

      <p className="text-center text-sm text-slate-700">
        VOICEVOX 内の「マルチエンジン機能」を ON にしたあと、
        <br />
        ダウンロードした .vvpp ファイルをダブルクリックするか
        <br />
        「エンジン」→「エンジンの管理」で Nemo 音声を追加できます。
      </p>
    </Dialog>
  );
}
