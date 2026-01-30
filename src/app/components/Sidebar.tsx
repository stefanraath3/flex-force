import { Icons } from "./Icons";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import imgIcon from "@/assets/acd63578be10fe1abdcaf4a704714bd487c3d347.png";
import imgUserThumb from "@/assets/76e64922e1fe212dc33bd59a0d1b1d30cef5aee8.png";
import clsx from "clsx";
import type { Page } from "@/app/App";

interface SidebarProps {
  onClose?: () => void;
  onToggle?: () => void;
  collapsed?: boolean;
  currentPage?: Page;
  onPageChange?: (page: Page) => void;
}

export function Sidebar({
  onClose,
  onToggle,
  collapsed,
  currentPage = "recruitment",
  onPageChange,
}: SidebarProps) {
  const handleNavClick = (page: Page) => {
    onPageChange?.(page);
    onClose?.();
  };

  return (
    <div className="bg-[#fafafa] flex flex-col gap-6 h-full items-start overflow-y-auto relative shrink-0 w-[280px] p-6 scrollbar-thin">
      {/* Header */}
      <div className="flex items-center justify-between w-full">
        <Icons.Logo />
        <div className="flex items-center gap-2">
          <button
            onClick={onToggle}
            className="hidden lg:flex items-center justify-center size-[36px] hover:bg-gray-100 rounded-lg transition-colors"
            title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <Icons.Briefcase className="size-[24px] text-[#52525B]" />
          </button>
          <div className="lg:hidden size-[24px]">
            <Icons.Briefcase className="w-full h-full text-[#52525B]" />
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="lg:hidden p-1 hover:bg-gray-100 rounded"
            >
              <Icons.Close className="w-5 h-5 text-[#52525B]" />
            </button>
          )}
        </div>
      </div>

      {/* Workspace */}
      <div className="bg-white relative rounded-[12px] shrink-0 w-full border border-[#e4e4e7] p-[12px]">
        <div className="flex gap-[10px] items-center w-full">
          <div className="relative rounded-[8px] shrink-0 size-[43px] overflow-hidden">
            <ImageWithFallback
              src={imgIcon}
              alt="Workspace Icon"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-[#18181b] text-[14px]">
              Designership Team
            </p>
            <p className="font-medium text-[#52525b] text-[14px]">50 members</p>
          </div>
        </div>
      </div>

      {/* Create Job Button */}
      <button className="bg-[#9440ff] rounded-[8px] w-full py-[12px] flex items-center justify-center gap-[10px] hover:bg-[#8005fb] transition-colors cursor-pointer">
        <Icons.Plus className="text-[#fafafa] w-[20px] h-[20px]" />
        <span className="font-semibold text-[#fafafa] text-[14px]">
          Create a job
        </span>
      </button>

      {/* Main Menu */}
      <div className="w-full flex flex-col gap-[6px]">
        <p className="font-semibold text-[#a1a1aa] text-[12px] mb-1">
          MAIN MENU
        </p>
        <NavItem
          icon={<Icons.Dashboard />}
          label="Dashboard"
          active={currentPage === "dashboard"}
          onClick={() => handleNavClick("dashboard")}
        />
        <NavItem
          icon={<Icons.Recruitment />}
          label="Recruitment"
          count={14}
          active={currentPage === "recruitment"}
          onClick={() => handleNavClick("recruitment")}
        />
        <NavItem
          icon={<Icons.Employees />}
          label="Employees"
          active={currentPage === "employees"}
          onClick={() => handleNavClick("employees")}
        />
        <NavItem
          icon={<Icons.Payroll />}
          label="Payroll"
          active={currentPage === "payroll"}
          onClick={() => handleNavClick("payroll")}
        />
      </div>

      {/* Departments */}
      <div className="w-full flex flex-col gap-[6px]">
        <p className="font-semibold text-[#a1a1aa] text-[12px] mb-1">
          DEPARTMENTS
        </p>
        <DepartmentItem color="#4ade80" label="Human Resources" />
        <DepartmentItem color="#f87171" label="Marketing" />
        <DepartmentItem color="#19e8e7" label="Development" />
        <DepartmentItem color="#ac76ff" label="Design" />
      </div>

      {/* Other */}
      <div className="w-full flex flex-col gap-[6px] flex-1">
        <p className="font-semibold text-[#a1a1aa] text-[12px] mb-1">OTHER</p>
        <NavItem icon={<Icons.Settings />} label="Settings" />
        <NavItem icon={<Icons.HelpCenter />} label="Help Center" />
      </div>

      {/* Profile */}
      <div className="bg-[#fafafa] w-full mt-auto">
        <div className="flex gap-[10px] items-center">
          <div className="size-[36px] rounded-full overflow-hidden shrink-0">
            <ImageWithFallback
              src={imgUserThumb}
              alt="Lana Elantra"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-[#18181b] text-[14px]">Lana Elantra</p>
            <p className="font-medium text-[#52525b] text-[14px]">
              lana@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavItem({
  icon,
  label,
  count,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  count?: number;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "flex items-center justify-between w-full p-[12px] rounded-[12px] cursor-pointer transition-colors text-left",
        active
          ? "bg-white shadow-sm border border-[#e4e4e7]"
          : "hover:bg-gray-100"
      )}
    >
      <div className="flex items-center gap-[10px]">
        <div
          className={clsx(
            "size-[20px]",
            active ? "text-[#9440ff]" : "text-[#71717a]"
          )}
        >
          {icon}
        </div>
        <span
          className={clsx(
            "font-semibold text-[14px]",
            active ? "text-[#9440ff]" : "text-[#71717a]"
          )}
        >
          {label}
        </span>
      </div>
      {count !== undefined && (
        <span
          className={clsx(
            "font-bold text-[12px]",
            active ? "text-[#9440ff]" : "text-[#71717a]"
          )}
        >
          {count}
        </span>
      )}
    </button>
  );
}

function DepartmentItem({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-[10px] w-full p-[12px] rounded-[12px] hover:bg-gray-100 cursor-pointer transition-colors">
      <div
        className="size-[18px] rounded-[4px]"
        style={{ backgroundColor: color }}
      />
      <span className="font-semibold text-[#71717a] text-[14px]">{label}</span>
    </div>
  );
}
