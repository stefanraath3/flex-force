import { Applicant } from "@/app/data/mockData";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/app/components/ui/dialog";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Icons } from "@/app/components/Icons";
import clsx from "clsx";

interface ApplicantModalProps {
  applicant: Applicant | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ApplicantModal({
  applicant,
  open,
  onOpenChange,
}: ApplicantModalProps) {
  if (!applicant) return null;

  // Determine background and text color based on match percentage
  const getMatchStyles = (match: number) => {
    if (match < 65) {
      return { bg: "bg-[#F87171]", text: "text-[#3f3f46]" };
    } else if (match < 75) {
      return { bg: "bg-[#FDE68A]", text: "text-[#3f3f46]" };
    } else {
      return { bg: "bg-[#c6fffb]", text: "text-[#3f3f46]" };
    }
  };

  const matchStyles = getMatchStyles(applicant.match);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          {/* Header Section */}
          <div className="flex gap-4 items-start mb-6">
            <div className="size-[80px] rounded-full overflow-hidden shrink-0">
              <ImageWithFallback
                src={applicant.avatar}
                alt={applicant.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <DialogTitle className="text-2xl font-bold text-[#18181b] mb-2">
                {applicant.name}
              </DialogTitle>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[#71717a]">
                  <Icons.Briefcase className="size-4" />
                  <span className="text-sm">
                    {applicant.currentRole || "Not specified"}
                    {applicant.currentCompany && ` at ${applicant.currentCompany}`}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[#71717a]">
                  <svg
                    className="size-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-sm">{applicant.email}</span>
                </div>
                {applicant.phone && (
                  <div className="flex items-center gap-2 text-[#71717a]">
                    <svg
                      className="size-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span className="text-sm">{applicant.phone}</span>
                  </div>
                )}
                <div className="flex items-center gap-2 text-[#71717a]">
                  <div className="w-[16px] h-[12px] rounded-[2px] overflow-hidden">
                    <Icons.FlagUS className="w-full h-full" />
                  </div>
                  <span className="text-sm">{applicant.location}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2 shrink-0">
              <div
                className={clsx(
                  matchStyles.bg,
                  "px-3 py-1.5 rounded-lg flex items-center justify-center"
                )}
              >
                <span className={clsx("font-bold text-base", matchStyles.text)}>
                  {applicant.match}% match
                </span>
              </div>
              {applicant.appliedDate && (
                <div className="text-xs text-[#71717a]">
                  Applied {new Date(applicant.appliedDate).toLocaleDateString()}
                </div>
              )}
              {applicant.appliedFor && (
                <div className="text-xs text-[#71717a]">
                  For: {applicant.appliedFor}
                </div>
              )}
            </div>
          </div>

          {/* Social Links */}
          {(applicant.linkedin || applicant.portfolio) && (
            <div className="flex gap-3 mb-6">
              {applicant.linkedin && (
                <a
                  href={`https://${applicant.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 bg-[#f4f4f5] rounded-lg hover:bg-[#e4e4e7] transition-colors text-sm text-[#52525b]"
                >
                  <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              )}
              {applicant.portfolio && (
                <a
                  href={`https://${applicant.portfolio}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 bg-[#f4f4f5] rounded-lg hover:bg-[#e4e4e7] transition-colors text-sm text-[#52525b]"
                >
                  <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                  Portfolio
                </a>
              )}
            </div>
          )}
        </DialogHeader>

        <div className="space-y-6">
          {/* Match Breakdown */}
          {applicant.matchBreakdown && (
            <div className="bg-[#fafafa] rounded-lg p-4">
              <h3 className="font-semibold text-[#27272a] text-base mb-4">
                Match Breakdown
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-[#52525b]">Skills</span>
                    <span className="text-sm font-semibold text-[#27272a]">
                      {applicant.matchBreakdown.skills}%
                    </span>
                  </div>
                  <div className="h-2 bg-[#e4e4e7] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#9440ff] rounded-full transition-all"
                      style={{ width: `${applicant.matchBreakdown.skills}%` }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-[#52525b]">Experience</span>
                    <span className="text-sm font-semibold text-[#27272a]">
                      {applicant.matchBreakdown.experience}%
                    </span>
                  </div>
                  <div className="h-2 bg-[#e4e4e7] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#9440ff] rounded-full transition-all"
                      style={{
                        width: `${applicant.matchBreakdown.experience}%`,
                      }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-[#52525b]">Culture Fit</span>
                    <span className="text-sm font-semibold text-[#27272a]">
                      {applicant.matchBreakdown.culture}%
                    </span>
                  </div>
                  <div className="h-2 bg-[#e4e4e7] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#9440ff] rounded-full transition-all"
                      style={{ width: `${applicant.matchBreakdown.culture}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Experience */}
          {applicant.experience && applicant.experience.length > 0 && (
            <div>
              <h3 className="font-semibold text-[#27272a] text-base mb-3">
                Experience
              </h3>
              <div className="space-y-4">
                {applicant.experience.map((exp, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-[#e4e4e7] pl-4 pb-4 last:pb-0"
                  >
                    <div className="font-semibold text-[#27272a] text-sm">
                      {exp.role}
                    </div>
                    <div className="text-[#71717a] text-sm mb-1">
                      {exp.company}
                    </div>
                    <div className="text-[#a1a1aa] text-xs">{exp.duration}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {applicant.education && applicant.education.length > 0 && (
            <div>
              <h3 className="font-semibold text-[#27272a] text-base mb-3">
                Education
              </h3>
              <div className="space-y-3">
                {applicant.education.map((edu, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="size-10 rounded-lg bg-[#f3e8ff] flex items-center justify-center shrink-0">
                      <svg
                        className="size-5 text-[#9440ff]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 14l9-5-9-5-9 5 9 5z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 14v9M5 4h14"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-[#27272a] text-sm">
                        {edu.degree}
                      </div>
                      <div className="text-[#71717a] text-sm">{edu.school}</div>
                      <div className="text-[#a1a1aa] text-xs">{edu.year}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills */}
          {applicant.skills && applicant.skills.length > 0 && (
            <div>
              <h3 className="font-semibold text-[#27272a] text-base mb-3">
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {applicant.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#f4f4f5] rounded-lg text-sm text-[#52525b] font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Notes */}
          {applicant.notes && applicant.notes.length > 0 && (
            <div>
              <h3 className="font-semibold text-[#27272a] text-base mb-3">
                Notes
              </h3>
              <div className="space-y-4">
                {applicant.notes.map((note, index) => (
                  <div
                    key={index}
                    className="bg-[#fafafa] rounded-lg p-4 border border-[#e4e4e7]"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-[#27272a] text-sm">
                        {note.author}
                      </span>
                      <span className="text-xs text-[#a1a1aa]">{note.date}</span>
                    </div>
                    <p className="text-sm text-[#52525b]">{note.content}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
