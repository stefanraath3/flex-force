import { Icons } from "../Icons";

interface RecruitmentHeaderProps {
  jobCount: number;
  onCreateJob?: () => void;
}

export function RecruitmentHeader({
  jobCount,
  onCreateJob,
}: RecruitmentHeaderProps) {
  return (
    <div className="w-full border-b border-[#e4e4e7] px-4 py-3 flex items-center justify-between shrink-0">
      {/* Title */}
      <div className="flex items-center gap-3 min-w-0 flex-1">
        <h1 className="font-bold text-[#18181b] text-xl">Job Board</h1>
        <div className="bg-[#f3e8ff] px-2.5 py-1 rounded-lg">
          <span className="font-semibold text-[#9440ff] text-sm">
            {jobCount} jobs
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 shrink-0">
        <button className="flex items-center justify-center p-2 bg-[#f4f4f5] border border-[#d4d4d8] rounded-lg hover:bg-gray-200 transition-colors cursor-pointer">
          <Icons.Filter className="w-5 h-5 text-[#52525B]" />
        </button>
        <button
          onClick={onCreateJob}
          className="flex items-center gap-2 px-3 py-3 bg-[#9440ff] rounded-lg hover:bg-[#8005fb] transition-colors cursor-pointer"
        >
          <Icons.Plus className="w-5 h-5 text-white" />
          <span className="font-semibold text-white text-sm hidden sm:inline">
            Create Job
          </span>
        </button>
      </div>
    </div>
  );
}
