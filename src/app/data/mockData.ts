import imgUserThumb1 from "@/assets/d6cf503f4b7d765040bde8bd6c70be7edbd7a847.png";

export type ApplicantStatus =
  | "shortlisted"
  | "interviewed"
  | "onboarding"
  | "hired";

export interface Applicant {
  id: string;
  name: string;
  email: string;
  match: number;
  location: string;
  status: ApplicantStatus;
  avatar: string;
}

export const initialApplicants: Applicant[] = [
  // Shortlisted (6)
  {
    id: "1",
    name: "Maria Antoinette",
    email: "maria@gmail.com",
    match: 97,
    location: "United States",
    status: "shortlisted",
    avatar: imgUserThumb1,
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "sarah@gmail.com",
    match: 95,
    location: "United States",
    status: "shortlisted",
    avatar: imgUserThumb1,
  },
  {
    id: "3",
    name: "John Doe",
    email: "john@gmail.com",
    match: 92,
    location: "United States",
    status: "shortlisted",
    avatar: imgUserThumb1,
  },
  {
    id: "4",
    name: "Emily Davis",
    email: "emily@gmail.com",
    match: 90,
    location: "United States",
    status: "shortlisted",
    avatar: imgUserThumb1,
  },
  {
    id: "5",
    name: "Michael Wilson",
    email: "michael@gmail.com",
    match: 88,
    location: "United States",
    status: "shortlisted",
    avatar: imgUserThumb1,
  },
  {
    id: "6",
    name: "David Brown",
    email: "david@gmail.com",
    match: 85,
    location: "United States",
    status: "shortlisted",
    avatar: imgUserThumb1,
  },

  // Interviewed (5)
  {
    id: "7",
    name: "James Taylor",
    email: "james@gmail.com",
    match: 94,
    location: "United States",
    status: "interviewed",
    avatar: imgUserThumb1,
  },
  {
    id: "8",
    name: "Robert Anderson",
    email: "robert@gmail.com",
    match: 93,
    location: "United States",
    status: "interviewed",
    avatar: imgUserThumb1,
  },
  {
    id: "9",
    name: "William Thomas",
    email: "william@gmail.com",
    match: 91,
    location: "United States",
    status: "interviewed",
    avatar: imgUserThumb1,
  },
  {
    id: "10",
    name: "Joseph Jackson",
    email: "joseph@gmail.com",
    match: 89,
    location: "United States",
    status: "interviewed",
    avatar: imgUserThumb1,
  },
  {
    id: "11",
    name: "Charles White",
    email: "charles@gmail.com",
    match: 87,
    location: "United States",
    status: "interviewed",
    avatar: imgUserThumb1,
  },

  // Onboarding (2)
  {
    id: "12",
    name: "Daniel Harris",
    email: "daniel@gmail.com",
    match: 98,
    location: "United States",
    status: "onboarding",
    avatar: imgUserThumb1,
  },
  {
    id: "13",
    name: "Matthew Martin",
    email: "matthew@gmail.com",
    match: 96,
    location: "United States",
    status: "onboarding",
    avatar: imgUserThumb1,
  },

  // Hired (1)
  {
    id: "14",
    name: "Anthony Thompson",
    email: "anthony@gmail.com",
    match: 99,
    location: "United States",
    status: "hired",
    avatar: imgUserThumb1,
  },
];

export const columns: { id: ApplicantStatus; label: string; color: string }[] =
  [
    { id: "shortlisted", label: "Shortlisted", color: "#71717A" },
    { id: "interviewed", label: "Interviewed", color: "#EF4444" },
    { id: "onboarding", label: "Onboarding", color: "#F59E0B" },
    { id: "hired", label: "Hired", color: "#10B981" },
  ];
