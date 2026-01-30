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
    <div className="bg-white rounded-[12px] p-[16px] border border-[#e4e4e7] flex flex-col gap-[12px]">
      <div className="flex items-center justify-between">
        <div
          className={clsx(
            "size-[40px] rounded-[8px] flex items-center justify-center",
            iconBg
          )}
        >
          {icon}
        </div>
        {change && (
          <div
            className={clsx(
              "px-[8px] py-[4px] rounded-[6px] text-[12px] font-semibold flex items-center gap-[4px]",
              change.positive
                ? "bg-[#dcfce7] text-[#16a34a]"
                : "bg-[#fee2e2] text-[#dc2626]"
            )}
          >
            <span>{change.positive ? "↑" : "↓"}</span>
            <span>{Math.abs(change.value)}%</span>
          </div>
        )}
      </div>
      <div>
        <p className="font-bold text-[#18181b] text-[28px] leading-none">
          {value}
        </p>
        <p className="font-medium text-[#71717a] text-[14px] mt-[4px]">
          {label}
        </p>
      </div>
    </div>
  );
}

interface JobCardProps {
  title: string;
  department: string;
  departmentColor: string;
  applicants: number;
  daysLeft: number;
  status: "active" | "paused" | "closed";
}

function JobCard({
  title,
  department,
  departmentColor,
  applicants,
  daysLeft,
  status,
}: JobCardProps) {
  const statusStyles = {
    active: { bg: "bg-[#dcfce7]", text: "text-[#16a34a]", label: "Active" },
    paused: { bg: "bg-[#fef3c7]", text: "text-[#d97706]", label: "Paused" },
    closed: { bg: "bg-[#f4f4f5]", text: "text-[#71717a]", label: "Closed" },
  };

  return (
    <div className="bg-white rounded-[12px] p-[14px] border border-[#e4e4e7] hover:border-[#9440ff] transition-colors cursor-pointer">
      <div className="flex items-start justify-between mb-[10px]">
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-[#27272a] text-[14px] truncate">
            {title}
          </p>
          <div className="flex items-center gap-[6px] mt-[4px]">
            <div
              className="size-[10px] rounded-[2px]"
              style={{ backgroundColor: departmentColor }}
            />
            <span className="font-medium text-[#71717a] text-[12px]">
              {department}
            </span>
          </div>
        </div>
        <div
          className={clsx(
            statusStyles[status].bg,
            statusStyles[status].text,
            "px-[8px] py-[2px] rounded-[4px] text-[11px] font-semibold shrink-0"
          )}
        >
          {statusStyles[status].label}
        </div>
      </div>
      <div className="flex items-center gap-[12px] text-[12px] text-[#71717a]">
        <span className="font-medium">{applicants} applicants</span>
        <span>•</span>
        <span className="font-medium">{daysLeft} days left</span>
      </div>
    </div>
  );
}

interface InterviewItemProps {
  name: string;
  role: string;
  time: string;
  avatar: string;
  type: "video" | "phone" | "onsite";
}

function InterviewItem({ name, role, time, avatar, type }: InterviewItemProps) {
  const typeStyles = {
    video: { bg: "bg-[#ede9fe]", icon: "📹", label: "Video" },
    phone: { bg: "bg-[#dbeafe]", icon: "📞", label: "Phone" },
    onsite: { bg: "bg-[#fef3c7]", icon: "🏢", label: "On-site" },
  };

  return (
    <div className="flex items-center gap-[12px] p-[12px] bg-white rounded-[10px] border border-[#e4e4e7] hover:border-[#9440ff] transition-colors cursor-pointer">
      <div className="size-[40px] rounded-full overflow-hidden shrink-0">
        <ImageWithFallback
          src={avatar}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-[#27272a] text-[14px] truncate">
          {name}
        </p>
        <p className="font-medium text-[#71717a] text-[12px] truncate">
          {role}
        </p>
      </div>
      <div className="flex flex-col items-end gap-[4px] shrink-0">
        <span className="font-semibold text-[#27272a] text-[12px]">{time}</span>
        <span
          className={clsx(
            typeStyles[type].bg,
            "px-[6px] py-[2px] rounded-[4px] text-[10px] font-medium text-[#52525b]"
          )}
        >
          {typeStyles[type].label}
        </span>
      </div>
    </div>
  );
}

interface ActivityItemProps {
  action: string;
  target: string;
  time: string;
  type: "application" | "interview" | "hire" | "rejection";
}

function ActivityItem({ action, target, time, type }: ActivityItemProps) {
  const typeColors = {
    application: "bg-[#9440ff]",
    interview: "bg-[#f59e0b]",
    hire: "bg-[#10b981]",
    rejection: "bg-[#ef4444]",
  };

  return (
    <div className="flex items-start gap-[12px] py-[10px]">
      <div
        className={clsx(
          "size-[8px] rounded-full mt-[6px] shrink-0",
          typeColors[type]
        )}
      />
      <div className="flex-1 min-w-0">
        <p className="text-[13px] text-[#27272a]">
          <span className="font-semibold">{action}</span>{" "}
          <span className="text-[#71717a]">{target}</span>
        </p>
        <p className="text-[11px] text-[#a1a1aa] mt-[2px]">{time}</p>
      </div>
    </div>
  );
}

export function Dashboard() {
  const stats = [
    {
      icon: <Icons.Recruitment className="size-[20px] text-[#9440ff]" />,
      iconBg: "bg-[#f3e8ff]",
      label: "Total Applicants",
      value: 248,
      change: { value: 12, positive: true },
    },
    {
      icon: <Icons.Briefcase className="size-[20px] text-[#3b82f6]" />,
      iconBg: "bg-[#dbeafe]",
      label: "Active Jobs",
      value: 12,
      change: { value: 3, positive: true },
    },
    {
      icon: <Icons.Calendar className="size-[20px] text-[#f59e0b]" />,
      iconBg: "bg-[#fef3c7]",
      label: "Interviews Today",
      value: 8,
    },
    {
      icon: <Icons.CheckCircle className="size-[20px] text-[#10b981]" />,
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

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 scrollbar-thin">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Active Jobs */}
        <div className="lg:col-span-2 space-y-6">
          {/* Active Jobs Section */}
          <div className="bg-white rounded-[12px] border border-[#e4e4e7] p-[16px]">
            <div className="flex items-center justify-between mb-[16px]">
              <h2 className="font-bold text-[#18181b] text-[16px]">
                Active Jobs
              </h2>
              <button className="text-[#9440ff] text-[13px] font-semibold hover:underline">
                View all
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px]">
              {activeJobs.map((job, index) => (
                <JobCard key={index} {...job} />
              ))}
            </div>
          </div>

          {/* Pipeline Overview */}
          <div className="bg-white rounded-[12px] border border-[#e4e4e7] p-[16px]">
            <div className="flex items-center justify-between mb-[16px]">
              <h2 className="font-bold text-[#18181b] text-[16px]">
                Hiring Pipeline
              </h2>
              <button className="text-[#9440ff] text-[13px] font-semibold hover:underline">
                Details
              </button>
            </div>
            <div className="space-y-[14px]">
              <PipelineBar
                label="Shortlisted"
                count={86}
                total={248}
                color="#71717a"
              />
              <PipelineBar
                label="Interviewed"
                count={42}
                total={248}
                color="#ef4444"
              />
              <PipelineBar
                label="Onboarding"
                count={12}
                total={248}
                color="#f59e0b"
              />
              <PipelineBar
                label="Hired"
                count={6}
                total={248}
                color="#10b981"
              />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Upcoming Interviews */}
          <div className="bg-white rounded-[12px] border border-[#e4e4e7] p-[16px]">
            <div className="flex items-center justify-between mb-[14px]">
              <h2 className="font-bold text-[#18181b] text-[16px]">
                Today's Interviews
              </h2>
              <span className="bg-[#f3e8ff] text-[#9440ff] px-[8px] py-[2px] rounded-full text-[12px] font-semibold">
                {upcomingInterviews.length}
              </span>
            </div>
            <div className="space-y-[10px]">
              {upcomingInterviews.map((interview, index) => (
                <InterviewItem key={index} {...interview} />
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-[12px] border border-[#e4e4e7] p-[16px]">
            <div className="flex items-center justify-between mb-[10px]">
              <h2 className="font-bold text-[#18181b] text-[16px]">
                Recent Activity
              </h2>
              <button className="text-[#9440ff] text-[13px] font-semibold hover:underline">
                View all
              </button>
            </div>
            <div className="divide-y divide-[#f4f4f5]">
              {recentActivity.map((activity, index) => (
                <ActivityItem key={index} {...activity} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PipelineBar({
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
    <div>
      <div className="flex items-center justify-between mb-[6px]">
        <span className="font-medium text-[#52525b] text-[13px]">{label}</span>
        <span className="font-semibold text-[#27272a] text-[13px]">
          {count}{" "}
          <span className="font-normal text-[#a1a1aa]">({percentage}%)</span>
        </span>
      </div>
      <div className="h-[8px] bg-[#f4f4f5] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${percentage}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}
