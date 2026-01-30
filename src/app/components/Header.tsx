import { Icons } from "./Icons";

export function Header() {
  return (
    <div className="w-full border-b border-[#e4e4e7] px-4 py-3 flex items-center justify-between shrink-0">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 min-w-0 flex-1">
        <span className="font-medium text-[#52525b] text-sm hidden sm:inline">
          Job Board
        </span>
        <Icons.Slash className="text-[#52525B] w-5 h-5 hidden sm:block shrink-0" />
        <span className="font-medium text-[#27272a] text-sm truncate">
          Senior UX Designer
        </span>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 shrink-0">
        <button className="hidden md:flex items-center gap-1 px-2 py-2 bg-[#f4f4f5] border border-[#d4d4d8] rounded-lg hover:bg-gray-200 transition-colors cursor-pointer">
          <Icons.UpdateJob className="w-5 h-5 text-[#27272a]" />
          <span className="font-semibold text-[#27272a] text-sm">
            Update job
          </span>
        </button>
        <button className="flex items-center justify-center p-2 bg-[#f4f4f5] border border-[#d4d4d8] rounded-lg hover:bg-gray-200 transition-colors cursor-pointer">
          <Icons.Bell className="w-5 h-5 text-[#52525B]" />
        </button>
        <button className="hidden sm:flex items-center justify-center p-2 bg-[#fafafa] border border-[#d4d4d8] rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
          <Icons.Share className="w-5 h-5 text-[#52525B]" />
        </button>
      </div>
    </div>
  );
}
