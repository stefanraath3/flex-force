import { useState } from "react";
import { Sidebar } from "@/app/components/Sidebar";
import { Header } from "@/app/components/Header";
import { BoardControls } from "@/app/components/BoardControls";
import { KanbanBoard } from "@/app/components/Board/KanbanBoard";
import { Dashboard } from "@/app/components/Dashboard/Dashboard";
import { DashboardHeader } from "@/app/components/Dashboard/DashboardHeader";
import { JobListings } from "@/app/components/Recruitment/JobListings";
import { RecruitmentHeader } from "@/app/components/Recruitment/RecruitmentHeader";
import { Icons } from "@/app/components/Icons";
import { Job, jobs } from "@/app/data/mockData";

export type Page = "dashboard" | "recruitment" | "employees" | "payroll";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("dashboard");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [currentView, setCurrentView] = useState<"board" | "list" | "table">(
    "board"
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleAddApplicant = () => {
    console.log("Add applicant clicked");
    // Implementation for adding applicant would go here
  };

  const handleJobClick = (job: Job) => {
    setSelectedJob(job);
  };

  const handleBackToJobs = () => {
    setSelectedJob(null);
    setSearchTerm("");
  };

  const handlePageChange = (page: Page) => {
    setCurrentPage(page);
    // Reset job selection when changing pages
    if (page !== "recruitment") {
      setSelectedJob(null);
    }
  };

  const renderPageContent = () => {
    switch (currentPage) {
      case "dashboard":
        return <Dashboard />;
      case "recruitment":
        // If a job is selected, show the Kanban board for that job
        if (selectedJob) {
          return (
            <>
              <BoardControls
                currentView={currentView}
                onViewChange={setCurrentView}
                onSearch={handleSearch}
                onAddApplicant={handleAddApplicant}
              />
              {currentView === "board" ? (
                <KanbanBoard searchTerm={searchTerm} />
              ) : (
                <div className="flex-1 flex items-center justify-center text-[#71717a] p-4">
                  {currentView.charAt(0).toUpperCase() + currentView.slice(1)} view
                  is not implemented yet.
                </div>
              )}
            </>
          );
        }
        // Otherwise, show the job listings
        return <JobListings jobs={jobs} onJobClick={handleJobClick} />;
      default:
        return (
          <div className="flex-1 flex items-center justify-center text-[#71717a] p-4">
            {currentPage.charAt(0).toUpperCase() + currentPage.slice(1)} page is
            not implemented yet.
          </div>
        );
    }
  };

  const renderHeader = () => {
    switch (currentPage) {
      case "dashboard":
        return <DashboardHeader />;
      case "recruitment":
        if (selectedJob) {
          return (
            <Header jobTitle={selectedJob.title} onBackClick={handleBackToJobs} />
          );
        }
        return <RecruitmentHeader jobCount={jobs.length} />;
      default:
        return <Header />;
    }
  };

  return (
    <div className="flex h-[100dvh] w-full bg-[#fafafa] font-['Manrope',sans-serif] overflow-hidden text-[#18181b] p-4 gap-4">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed lg:relative inset-y-0 left-0 z-50 lg:inset-auto
        transform transition-all duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        ${sidebarCollapsed ? "lg:w-0 lg:overflow-hidden" : "lg:w-[280px]"}
      `}
      >
        <Sidebar
          onClose={() => setSidebarOpen(false)}
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
          collapsed={sidebarCollapsed}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>

      {/* Main content wrapper */}
      <div className="flex flex-col flex-1 h-full min-w-0 overflow-hidden">
        {/* Top bar - on background when sidebar collapsed (desktop) or always on mobile */}
        <div
          className={`flex items-center justify-between px-4 py-3 ${
            sidebarCollapsed ? "lg:flex" : "lg:hidden"
          }`}
        >
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                // On mobile, open sidebar overlay; on desktop, expand collapsed sidebar
                if (window.innerWidth < 1024) {
                  setSidebarOpen(true);
                } else {
                  setSidebarCollapsed(false);
                }
              }}
              className="p-2 hover:bg-[#f4f4f5] rounded-lg transition-colors"
              title={sidebarCollapsed ? "Expand sidebar" : "Open menu"}
            >
              <Icons.Menu className="w-6 h-6 text-[#52525B]" />
            </button>
            <Icons.Logo className="h-6" />
          </div>
          {/* Profile image placeholder - visible when sidebar collapsed */}
          <div className="hidden lg:block w-10 h-10 rounded-full bg-[#e4e4e7] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* White content area */}
        <div className="flex flex-col flex-1 min-h-0 overflow-hidden bg-white rounded-xl border border-[#e4e4e7]">
          {renderHeader()}
          <main className="flex flex-col flex-1 min-h-0 overflow-hidden">
            {renderPageContent()}
          </main>
        </div>
      </div>
    </div>
  );
}
