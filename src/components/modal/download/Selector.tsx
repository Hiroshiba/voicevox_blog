export default function Selector<T extends string>({
  label,
  selected,
  setSelected,
  candidates,
}: {
  label: string;
  selected: T;
  setSelected: (selected: T) => void;
  candidates: T[];
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
      <p className="text-sm font-semibold text-slate-700">{label}</p>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {candidates.map((candidate) => {
          const isSelected = candidate === selected;
          return (
            <button
              key={candidate}
              className={[
                "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500",
                isSelected
                  ? "bg-emerald-600 text-white"
                  : "bg-slate-100 text-slate-900 hover:bg-slate-200",
              ].join(" ")}
              onClick={() => setSelected(candidate)}
              type="button"
            >
              {candidate}
            </button>
          );
        })}
      </div>
    </div>
  );
}
