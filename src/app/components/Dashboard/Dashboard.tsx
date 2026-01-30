import { Icons } from "@/app/components/Icons";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import imgUserThumb from "@/assets/d6cf503f4b7d765040bde8bd6c70be7edbd7a847.png";
import clsx from "clsx";

interface StatCardProps {
  icon: React.ReactNode;
  iconBg: string;
  label: string;
  value: string | number;
  change?: { value: number; positive: boolean };
}

function StatCard({ icon, iconBg, label, value, change }: StatCardProps) {
  return (
    <div className="flex items-center gap-4">
      <div
        className={clsx(
          "size-12 rounded-xl flex items-center justify-center shrink-0",
          iconBg
        )}
      >
        {icon}
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className="font-bold text-[#18181b] text-2xl tabular-nums">
            {value}
          </span>
          {change && (
            <span
              className={clsx(
                "text-xs font-medium",
                change.positive ? "text-[#10b981]" : "text-[#ef4444]"
              )}
            >
              {change.positive ? "↑" : "↓"} {Math.abs(change.value)}%
            </span>
          )}
        </div>
        <span className="text-[#71717a] text-sm font-medium">{label}</span>
      </div>
    </div>
  );
}

interface JobRowProps {
  title: string;
  department: string;
  departmentColor: string;
  applicants: number;
  daysLeft: number;
  status: "active" | "paused" | "closed";
}

function JobRow({
  title,
  department,
  departmentColor,
  applicants,
  daysLeft,
  status,
}: JobRowProps) {
  const statusStyles = {
    active: "text-[#10b981]",
    paused: "text-[#f59e0b]",
    closed: "text-[#71717a]",
  };

  return (
    <div className="flex items-center justify-between py-4 border-b border-[#f4f4f5] last:border-0 hover:bg-[#fafafa] -mx-1 px-1 rounded-lg transition-colors cursor-pointer group">
      <div className="flex items-center gap-4 min-w-0 flex-1">
        <div
          className="size-2.5 rounded-full shrink-0"
          style={{ backgroundColor: departmentColor }}
        />
        <div className="min-w-0">
          <p className="font-semibold text-[#18181b] text-sm group-hover:text-[#9440ff] transition-colors truncate">
            {title}
          </p>
          <p className="text-[#71717a] text-xs mt-0.5">{department}</p>
        </div>
      </div>
      <div className="flex items-center gap-8 shrink-0">
        <div className="text-right hidden sm:block">
          <p className="text-[#18181b] text-sm font-medium tabular-nums">
            {applicants}
          </p>
          <p className="text-[#a1a1aa] text-xs">applicants</p>
        </div>
        <div className="text-right hidden md:block">
          <p className="text-[#18181b] text-sm font-medium tabular-nums">
            {daysLeft}
          </p>
          <p className="text-[#a1a1aa] text-xs">days left</p>
        </div>
        <div
          className={clsx(
            "text-xs font-medium capitalize w-14",
            statusStyles[status]
          )}
        >
          {status}
        </div>
      </div>
    </div>
  );
}

interface InterviewRowProps {
  name: string;
  role: string;
  time: string;
  avatar: string;
  type: "video" | "phone" | "onsite";
}

function InterviewRow({ name, role, time, avatar, type }: InterviewRowProps) {
  const typeIcons = {
    video: <Icons.Calendar className="size-4 text-[#9440ff]" />,
    phone: <Icons.Calendar className="size-4 text-[#3b82f6]" />,
    onsite: <Icons.Calendar className="size-4 text-[#f59e0b]" />,
  };

  return (
    <div className="flex items-center justify-between py-3 hover:bg-[#fafafa] -mx-2 px-2 rounded-lg transition-colors cursor-pointer group">
      <div className="flex items-center gap-3 min-w-0">
        <div className="size-9 rounded-full overflow-hidden shrink-0 ring-2 ring-white">
          <ImageWithFallback
            src={avatar}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="min-w-0">
          <p className="font-medium text-[#18181b] text-sm truncate group-hover:text-[#9440ff] transition-colors">
            {name}
          </p>
          <p className="text-[#a1a1aa] text-xs truncate">{role}</p>
        </div>
      </div>
      <div className="flex items-center gap-3 shrink-0">
        <span className="text-[#18181b] text-sm font-semibold tabular-nums">
          {time}
        </span>
        {typeIcons[type]}
      </div>
    </div>
  );
}

interface ActivityRowProps {
  action: string;
  target: string;
  time: string;
  type: "application" | "interview" | "hire" | "rejection";
}

function ActivityRow({ action, target, time, type }: ActivityRowProps) {
  const typeColors = {
    application: "bg-[#9440ff]",
    interview: "bg-[#f59e0b]",
    hire: "bg-[#10b981]",
    rejection: "bg-[#ef4444]",
  };

  return (
    <div className="flex items-start gap-3 py-3">
      <div className="flex flex-col items-center pt-1.5">
        <div className={clsx("size-2 rounded-full", typeColors[type])} />
        <div className="w-px h-full bg-[#e4e4e7] mt-2" />
      </div>
      <div className="flex-1 min-w-0 pb-2">
        <p className="text-sm text-[#18181b]">
          <span className="font-medium">{action}</span>{" "}
          <span className="text-[#71717a]">{target}</span>
        </p>
        <p className="text-xs text-[#a1a1aa] mt-1">{time}</p>
      </div>
    </div>
  );
}

function PipelineItem({
  label,
  count,
  total,
  color,
}: {
  label: string;
  count: number;
  total: number;
  color: string;
}) {
  const percentage = Math.round((count / total) * 100);

  return (
    <div className="flex items-center gap-4">
      <div
        className="size-2.5 rounded-full shrink-0"
        style={{ backgroundColor: color }}
      />
      <span className="text-sm text-[#52525b] font-medium w-24">{label}</span>
      <div className="flex-1 h-2 bg-[#f4f4f5] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700 ease-out"
          style={{ width: `${percentage}%`, backgroundColor: color }}
        />
      </div>
      <span className="text-sm font-semibold text-[#18181b] tabular-nums w-12 text-right">
        {count}
      </span>
    </div>
  );
}

export function Dashboard() {
  const stats = [
    {
      icon: <Icons.Recruitment className="size-5 text-[#9440ff]" />,
      iconBg: "bg-[#f3e8ff]",
      label: "Total Applicants",
      value: 248,
      change: { value: 12, positive: true },
    },
    {
      icon: <Icons.Briefcase className="size-5 text-[#3b82f6]" />,
      iconBg: "bg-[#dbeafe]",
      label: "Active Jobs",
      value: 12,
      change: { value: 3, positive: true },
    },
    {
      icon: <Icons.Calendar className="size-5 text-[#f59e0b]" />,
      iconBg: "bg-[#fef3c7]",
      label: "Interviews Today",
      value: 8,
    },
    {
      icon: <Icons.CheckCircle className="size-5 text-[#10b981]" />,
      iconBg: "bg-[#dcfce7]",
      label: "Hired This Month",
      value: 6,
      change: { value: 50, positive: true },
    },
  ];

  const activeJobs = [
    {
      title: "Senior UX Designer",
      department: "Design",
      departmentColor: "#ac76ff",
      applicants: 47,
      daysLeft: 12,
      status: "active" as const,
    },
    {
      title: "Frontend Developer",
      department: "Development",
      departmentColor: "#19e8e7",
      applicants: 89,
      daysLeft: 8,
      status: "active" as const,
    },
    {
      title: "Marketing Manager",
      department: "Marketing",
      departmentColor: "#f87171",
      applicants: 32,
      daysLeft: 5,
      status: "active" as const,
    },
    {
      title: "HR Specialist",
      department: "Human Resources",
      departmentColor: "#4ade80",
      applicants: 21,
      daysLeft: 0,
      status: "paused" as const,
    },
  ];

  const upcomingInterviews = [
    {
      name: "Maria Antoinette",
      role: "Senior UX Designer",
      time: "9:00 AM",
      avatar: imgUserThumb,
      type: "video" as const,
    },
    {
      name: "James Taylor",
      role: "Frontend Developer",
      time: "11:30 AM",
      avatar: imgUserThumb,
      type: "phone" as const,
    },
    {
      name: "Sarah Johnson",
      role: "Marketing Manager",
      time: "2:00 PM",
      avatar: imgUserThumb,
      type: "onsite" as const,
    },
    {
      name: "Robert Anderson",
      role: "Senior UX Designer",
      time: "4:30 PM",
      avatar: imgUserThumb,
      type: "video" as const,
    },
  ];

  const recentActivity = [
    {
      action: "New application received",
      target: "for Senior UX Designer",
      time: "2 minutes ago",
      type: "application" as const,
    },
    {
      action: "Interview scheduled",
      target: "with Maria Antoinette",
      time: "15 minutes ago",
      type: "interview" as const,
    },
    {
      action: "Offer accepted",
      target: "by Daniel Harris",
      time: "1 hour ago",
      type: "hire" as const,
    },
    {
      action: "Application rejected",
      target: "for Marketing Manager",
      time: "2 hours ago",
      type: "rejection" as const,
    },
    {
      action: "New application received",
      target: "for Frontend Developer",
      time: "3 hours ago",
      type: "application" as const,
    },
  ];

  const pipelineData = [
    { label: "Shortlisted", count: 86, color: "#71717a" },
    { label: "Interviewed", count: 42, color: "#ef4444" },
    { label: "Onboarding", count: 12, color: "#f59e0b" },
    { label: "Hired", count: 6, color: "#10b981" },
  ];

  return (
    <div className="flex-1 overflow-y-auto scrollbar-thin">
      {/* Stats Section */}
      <div className="px-6 py-6 border-b border-[#f4f4f5]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-0 xl:divide-x divide-[#f4f4f5]">
        {/* Left Column */}
        <div className="xl:col-span-2 divide-y divide-[#f4f4f5]">
          {/* Active Jobs */}
          <section className="px-6 py-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-[#18181b] text-base">
                Active Jobs
              </h2>
              <button className="text-[#9440ff] text-sm font-medium hover:underline underline-offset-4">
                View all →
              </button>
            </div>
            <div>
              {activeJobs.map((job, index) => (
                <JobRow key={index} {...job} />
              ))}
            </div>
          </section>

          {/* Pipeline */}
          <section className="px-6 py-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-semibold text-[#18181b] text-base">
                Hiring Pipeline
              </h2>
              <button className="text-[#9440ff] text-sm font-medium hover:underline underline-offset-4">
                Details →
              </button>
            </div>
            <div className="space-y-4">
              {pipelineData.map((item) => (
                <PipelineItem key={item.label} {...item} total={248} />
              ))}
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="divide-y divide-[#f4f4f5]">
          {/* Today's Interviews */}
          <section className="px-6 py-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <h2 className="font-semibold text-[#18181b] text-base">
                  Today's Interviews
                </h2>
                <span className="bg-[#f3e8ff] text-[#9440ff] px-2 py-0.5 rounded-full text-xs font-semibold">
                  {upcomingInterviews.length}
                </span>
              </div>
            </div>
            <div>
              {upcomingInterviews.map((interview, index) => (
                <InterviewRow key={index} {...interview} />
              ))}
            </div>
          </section>

          {/* Recent Activity */}
          <section className="px-6 py-6">
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-semibold text-[#18181b] text-base">
                Recent Activity
              </h2>
              <button className="text-[#9440ff] text-sm font-medium hover:underline underline-offset-4">
                View all →
              </button>
            </div>
            <div>
              {recentActivity.map((activity, index) => (
                <ActivityRow key={index} {...activity} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
