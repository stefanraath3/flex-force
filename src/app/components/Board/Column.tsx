import { useDrop } from "react-dnd";
import { Applicant, ApplicantStatus } from "@/app/data/mockData";
import { ApplicantCard } from "./ApplicantCard";
import { Icons } from "@/app/components/Icons";
import clsx from "clsx";

interface ColumnProps {
  status: ApplicantStatus;
  label: string;
  dotColor: string; // The dot color
  applicants: Applicant[];
  onDrop: (item: { id: string }, status: ApplicantStatus) => void;
  onApplicantClick?: (applicant: Applicant) => void;
}

export function Column({
  status,
  label,
  dotColor,
  applicants,
  onDrop,
  onApplicantClick,
}: ColumnProps) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "APPLICANT",
    drop: (item: { id: string }) => onDrop(item, status),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop as unknown as React.LegacyRef<HTMLDivElement>}
      className={clsx(
        "flex flex-col w-[280px] min-w-[280px] p-3 rounded-2xl gap-3 transition-colors shrink-0",
        isOver ? "bg-gray-50 ring-2 ring-[#9440ff]/20" : "bg-[#F4F4F5]"
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-1 shrink-0">
        <div className="flex items-center gap-2">
          <div
            className="size-2 rounded-full shrink-0"
            style={{ backgroundColor: dotColor }}
          />
          <span className="font-medium text-[#27272a] text-sm">{label}</span>
          <div className="bg-[#e4e4e7] px-2 py-0.5 rounded flex items-center justify-center">
            <span className="font-semibold text-[#3f3f46] text-xs">
              {applicants.length}
            </span>
          </div>
        </div>
        <button className="text-[#52525B] hover:bg-gray-100 p-1 rounded shrink-0">
          <Icons.More className="size-5" />
        </button>
      </div>

      {/* Cards Area */}
      <div className="flex flex-col gap-2">
        {applicants.map((applicant) => (
          <ApplicantCard
            key={applicant.id}
            applicant={applicant}
            onClick={onApplicantClick}
          />
        ))}
      </div>

      <button className="flex items-center gap-1 p-1 text-[#71717a] hover:text-[#52525b] transition-colors shrink-0">
        <Icons.Plus className="size-5" />
        <span className="font-medium text-sm">Add Applicant</span>
      </button>
    </div>
  );
}
