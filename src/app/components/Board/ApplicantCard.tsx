import { useDrag } from "react-dnd";
import { Applicant } from "@/app/data/mockData";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Icons } from "@/app/components/Icons";
import clsx from "clsx";

interface ApplicantCardProps {
  applicant: Applicant;
}

export function ApplicantCard({ applicant }: ApplicantCardProps) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "APPLICANT",
    item: { id: applicant.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  // Determine background and text color based on match percentage
  const getMatchStyles = (match: number) => {
    if (match < 65) {
      return { bg: "bg-[#F87171]", text: "text-[#3f3f46]" }; // Destructive 400 for below 65%
    } else if (match < 75) {
      return { bg: "bg-[#FDE68A]", text: "text-[#3f3f46]" }; // Warning 200 for 65-74%
    } else {
      return { bg: "bg-[#c6fffb]", text: "text-[#3f3f46]" }; // Teal/Cyan for 75%+
    }
  };

  const matchStyles = getMatchStyles(applicant.match);

  return (
    <div
      ref={drag as unknown as React.LegacyRef<HTMLDivElement>}
      className={clsx(
        "bg-white rounded-[12px] p-[10px] w-full border border-[#e4e4e7] hover:border-[#9440FF] hover:shadow-sm transition-colors cursor-grab active:cursor-grabbing",
        isDragging ? "opacity-50" : "opacity-100"
      )}
    >
      <div className="flex gap-[10px] items-center mb-[10px]">
        <div className="size-[38px] rounded-full overflow-hidden shrink-0">
          <ImageWithFallback
            src={applicant.avatar}
            alt={applicant.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col overflow-hidden">
          <p className="font-semibold text-[#27272a] text-[14px] truncate">
            {applicant.name}
          </p>
          <p className="font-medium text-[#71717a] text-[12px] truncate">
            {applicant.email}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-[6px]">
        <div
          className={clsx(
            matchStyles.bg,
            "px-[4px] py-[2px] rounded-[4px] flex items-center justify-center"
          )}
        >
          <span className={clsx("font-medium text-[12px]", matchStyles.text)}>
            {applicant.match}% match
          </span>
        </div>
        <div className="bg-[#f4f4f5] px-[4px] py-[2px] rounded-[4px] flex items-center justify-center gap-[4px]">
          <div className="w-[16px] h-[12px] rounded-[2px] overflow-hidden">
            <Icons.FlagUS className="w-full h-full" />
          </div>
          <span className="font-medium text-[#52525b] text-[12px]">
            {applicant.location}
          </span>
        </div>
      </div>
    </div>
  );
}
