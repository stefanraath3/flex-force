import { Icons } from "../Icons";

export function DashboardHeader() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="w-full border-b border-[#e4e4e7] px-4 py-3 flex items-center justify-between shrink-0">
      {/* Left side - Title */}
      <div className="flex flex-col gap-0.5 min-w-0 flex-1">
        <h1 className="font-bold text-[#18181b] text-lg">Dashboard</h1>
        <p className="text-[#71717a] text-sm hidden sm:block">
          {formattedDate}
        </p>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 shrink-0">
        <button className="hidden md:flex items-center gap-1 px-3 py-2 bg-[#f4f4f5] border border-[#d4d4d8] rounded-lg hover:bg-gray-200 transition-colors cursor-pointer">
          <Icons.Calendar className="w-4 h-4 text-[#52525B]" />
          <span className="font-medium text-[#52525b] text-sm">This Week</span>
          <Icons.ChevronDown className="w-4 h-4 text-[#52525B]" />
        </button>
        <button className="flex items-center justify-center p-2 bg-[#f4f4f5] border border-[#d4d4d8] rounded-lg hover:bg-gray-200 transition-colors cursor-pointer">
          <Icons.Bell className="w-5 h-5 text-[#52525B]" />
        </button>
        <button className="hidden sm:flex items-center gap-2 px-4 py-2.5 bg-[#9440ff] hover:bg-[#8005fb] rounded-lg transition-colors cursor-pointer">
          <Icons.Plus className="w-4 h-4 text-white" />
          <span className="font-semibold text-white text-sm">Quick Action</span>
        </button>
      </div>
    </div>
  );
}
