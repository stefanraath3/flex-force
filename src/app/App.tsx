import { useState } from "react";
import { Sidebar } from "@/app/components/Sidebar";
import { Header } from "@/app/components/Header";
import { BoardControls } from "@/app/components/BoardControls";
import { KanbanBoard } from "@/app/components/Board/KanbanBoard";
import { Icons } from "@/app/components/Icons";

export default function App() {
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
        />
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1 h-full min-w-0 overflow-hidden bg-white rounded-xl border border-[#e4e4e7]">
        {/* Mobile header with menu button */}
        <div className="lg:hidden flex items-center gap-3 px-4 py-3 border-b border-[#e4e4e7]">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <Icons.Menu className="w-6 h-6 text-[#52525B]" />
          </button>
          <Icons.Logo className="h-6" />
        </div>
        
        {/* Desktop collapsed sidebar toggle */}
        {sidebarCollapsed && (
          <div className="hidden lg:flex items-center gap-3 px-4 py-3 border-b border-[#e4e4e7]">
            <button
              onClick={() => setSidebarCollapsed(false)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              title="Expand sidebar"
            >
              <Icons.Menu className="w-6 h-6 text-[#52525B]" />
            </button>
            <Icons.Logo className="h-6" />
          </div>
        )}

        <Header />
        <main className="flex flex-col flex-1 min-h-0 overflow-hidden">
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
        </main>
      </div>
    </div>
  );
}
