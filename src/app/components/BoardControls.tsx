import { Icons } from "./Icons";
import clsx from "clsx";

interface BoardControlsProps {
  currentView: "board" | "list" | "table";
  onViewChange: (view: "board" | "list" | "table") => void;
  onSearch: (term: string) => void;
  onAddApplicant: () => void;
}

export function BoardControls({
  currentView,
  onViewChange,
  onSearch,
  onAddApplicant,
}: BoardControlsProps) {
  return (
    <div className="w-full px-4 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shrink-0 bg-white">
      {/* Left side - Title and view toggle */}
      <div className="flex flex-wrap items-center gap-3">
        <h1 className="font-bold text-[#18181b] text-lg">Applicants</h1>
        <div className="bg-[#f4f4f5] p-0.5 rounded-lg flex items-center border border-[#e4e4e7]">
          <button
            onClick={() => onViewChange("board")}
            className={clsx(
              "flex items-center gap-2 px-2 py-1.5 rounded-md text-sm font-medium transition-all",
              currentView === "board"
                ? "bg-white text-[#9440ff] shadow-sm border border-[#e4e4e7]"
                : "text-[#71717a] hover:bg-gray-200"
            )}
          >
            <Icons.BoardView
              className={clsx(
                "w-5 h-5",
                currentView === "board" ? "text-[#9440ff]" : "text-[#71717a]"
              )}
            />
            <span className="hidden xs:inline">Board</span>
          </button>
          <button
            onClick={() => onViewChange("list")}
            className={clsx(
              "flex items-center gap-2 px-2 py-1.5 rounded-md text-sm font-medium transition-all",
              currentView === "list"
                ? "bg-white text-[#9440ff] shadow-sm border border-[#e4e4e7]"
                : "text-[#71717a] hover:bg-gray-200"
            )}
          >
            <span className="text-current">List</span>
          </button>
          <button
            onClick={() => onViewChange("table")}
            className={clsx(
              "flex items-center gap-2 px-2 py-1.5 rounded-md text-sm font-medium transition-all",
              currentView === "table"
                ? "bg-white text-[#9440ff] shadow-sm border border-[#e4e4e7]"
                : "text-[#71717a] hover:bg-gray-200"
            )}
          >
            <span className="text-current">Table</span>
          </button>
        </div>
      </div>

      {/* Right side - Search and Add button */}
      <div className="flex items-center gap-3 w-full sm:w-auto">
        <div className="bg-[#fafafa] border border-[#d4d4d8] rounded-lg flex items-center px-3 py-2.5 flex-1 sm:flex-none sm:w-[200px] focus-within:ring-2 focus-within:ring-[#9440ff] transition-shadow">
          <Icons.Search className="w-5 h-5 text-[#52525B] mr-2 shrink-0" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent border-none outline-none text-sm text-[#18181b] placeholder-[#71717a] w-full min-w-0"
            onChange={(e) => onSearch(e.target.value)}
          />
          <button className="ml-1 shrink-0">
            <Icons.Filter className="w-5 h-5 text-[#52525B]" />
          </button>
        </div>
        <button
          onClick={onAddApplicant}
          className="bg-[#9440ff] hover:bg-[#8005fb] text-white px-4 py-2.5 rounded-lg flex items-center gap-2 font-semibold text-sm transition-colors cursor-pointer shrink-0"
        >
          <Icons.Plus className="w-5 h-5" />
          <span className="hidden sm:inline">Add applicant</span>
        </button>
      </div>
    </div>
  );
}
