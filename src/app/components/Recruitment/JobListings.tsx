import { Job } from "@/app/data/mockData";
import { Icons } from "@/app/components/Icons";
import clsx from "clsx";

interface JobListingsProps {
  jobs: Job[];
  onJobClick: (job: Job) => void;
}

export function JobListings({ jobs, onJobClick }: JobListingsProps) {
  const activeJobs = jobs.filter((job) => job.status === "active");
  const pausedJobs = jobs.filter((job) => job.status === "paused");
  const closedJobs = jobs.filter((job) => job.status === "closed");

  return (
    <div className="flex-1 overflow-y-auto p-6 scrollbar-thin">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <StatCard
          label="Active Jobs"
          value={activeJobs.length}
          color="bg-[#dcfce7]"
          textColor="text-[#16a34a]"
        />
        <StatCard
          label="Paused Jobs"
          value={pausedJobs.length}
          color="bg-[#fef3c7]"
          textColor="text-[#d97706]"
        />
        <StatCard
          label="Closed Jobs"
          value={closedJobs.length}
          color="bg-[#f4f4f5]"
          textColor="text-[#71717a]"
        />
      </div>

      {/* Active Jobs */}
      {activeJobs.length > 0 && (
        <section className="mb-8">
          <h2 className="font-bold text-[#18181b] text-lg mb-4">
            Active Jobs ({activeJobs.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {activeJobs.map((job) => (
              <JobCard key={job.id} job={job} onClick={() => onJobClick(job)} />
            ))}
          </div>
        </section>
      )}

      {/* Paused Jobs */}
      {pausedJobs.length > 0 && (
        <section className="mb-8">
          <h2 className="font-bold text-[#18181b] text-lg mb-4">
            Paused Jobs ({pausedJobs.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {pausedJobs.map((job) => (
              <JobCard key={job.id} job={job} onClick={() => onJobClick(job)} />
            ))}
          </div>
        </section>
      )}

      {/* Closed Jobs */}
      {closedJobs.length > 0 && (
        <section>
          <h2 className="font-bold text-[#71717a] text-lg mb-4">
            Closed Jobs ({closedJobs.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {closedJobs.map((job) => (
              <JobCard key={job.id} job={job} onClick={() => onJobClick(job)} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function StatCard({
  label,
  value,
  color,
  textColor,
}: {
  label: string;
  value: number;
  color: string;
  textColor: string;
}) {
  return (
    <div className={clsx("rounded-xl p-4", color)}>
      <p className={clsx("font-bold text-3xl", textColor)}>{value}</p>
      <p className={clsx("font-medium text-sm mt-1", textColor)}>{label}</p>
    </div>
  );
}

function JobCard({ job, onClick }: { job: Job; onClick: () => void }) {
  const statusStyles = {
    active: { bg: "bg-[#dcfce7]", text: "text-[#16a34a]", label: "Active" },
    paused: { bg: "bg-[#fef3c7]", text: "text-[#d97706]", label: "Paused" },
    closed: { bg: "bg-[#f4f4f5]", text: "text-[#71717a]", label: "Closed" },
  };

  const daysLeft = Math.ceil(
    (new Date(job.closingDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24)
  );

  return (
    <div
      onClick={onClick}
      className={clsx(
        "bg-white rounded-xl p-5 border border-[#e4e4e7] hover:border-[#9440ff] hover:shadow-md transition-all cursor-pointer",
        job.status === "closed" && "opacity-60"
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-[#18181b] text-base truncate mb-1">
            {job.title}
          </h3>
          <div className="flex items-center gap-2">
            <div
              className="size-3 rounded-sm shrink-0"
              style={{ backgroundColor: job.departmentColor }}
            />
            <span className="text-[#71717a] text-sm">{job.department}</span>
          </div>
        </div>
        <div
          className={clsx(
            statusStyles[job.status].bg,
            statusStyles[job.status].text,
            "px-2.5 py-1 rounded-md text-xs font-semibold shrink-0"
          )}
        >
          {statusStyles[job.status].label}
        </div>
      </div>

      {/* Details */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-[#52525b]">
          <svg
            className="size-4 text-[#a1a1aa]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span>{job.location}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-[#52525b]">
          <svg
            className="size-4 text-[#a1a1aa]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{job.type}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-[#52525b]">
          <svg
            className="size-4 text-[#a1a1aa]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{job.salary}</span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-[#f4f4f5]">
        <div className="flex items-center gap-1.5">
          <Icons.Users className="size-4 text-[#9440ff]" />
          <span className="font-semibold text-[#27272a] text-sm">
            {job.applicants}
          </span>
          <span className="text-[#71717a] text-sm">applicants</span>
        </div>
        {job.status !== "closed" && (
          <span
            className={clsx(
              "text-xs font-medium",
              daysLeft <= 7 ? "text-[#ef4444]" : "text-[#71717a]"
            )}
          >
            {daysLeft > 0 ? `${daysLeft} days left` : "Closing today"}
          </span>
        )}
      </div>
    </div>
  );
}
