import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Column } from "./Column";
import { ApplicantModal } from "./ApplicantModal";
import {
  Applicant,
  initialApplicants,
  columns,
  ApplicantStatus,
} from "@/app/data/mockData";

interface KanbanBoardProps {
  searchTerm: string;
}

export function KanbanBoard({ searchTerm }: KanbanBoardProps) {
  const [applicants, setApplicants] = useState<Applicant[]>(initialApplicants);
  const [selectedApplicant, setSelectedApplicant] =
    useState<Applicant | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDrop = (item: { id: string }, status: ApplicantStatus) => {
    setApplicants((prev) =>
      prev.map((app) => (app.id === item.id ? { ...app, status } : app))
    );
  };

  const handleApplicantClick = (applicant: Applicant) => {
    setSelectedApplicant(applicant);
    setIsModalOpen(true);
  };

  const handleModalClose = (open: boolean) => {
    setIsModalOpen(open);
    if (!open) {
      setSelectedApplicant(null);
    }
  };

  const filteredApplicants = applicants.filter(
    (app) =>
      app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex-1 overflow-auto p-4 scrollbar-thin">
        <div className="flex gap-4 min-w-max pb-4">
          {columns.map((col) => (
            <Column
              key={col.id}
              status={col.id}
              label={col.label}
              dotColor={col.color}
              applicants={filteredApplicants.filter(
                (app) => app.status === col.id
              )}
              onDrop={handleDrop}
              onApplicantClick={handleApplicantClick}
            />
          ))}
        </div>
      </div>
      <ApplicantModal
        applicant={selectedApplicant}
        open={isModalOpen}
        onOpenChange={handleModalClose}
      />
    </DndProvider>
  );
}
