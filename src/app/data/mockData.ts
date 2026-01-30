import imgUserThumb1 from "@/assets/d6cf503f4b7d765040bde8bd6c70be7edbd7a847.png";

// Job types and data
export type JobStatus = "active" | "paused" | "closed";

export interface Job {
  id: string;
  title: string;
  department: string;
  departmentColor: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Remote";
  salary: string;
  postedDate: string;
  closingDate: string;
  status: JobStatus;
  applicants: number;
  description: string;
}

export const jobs: Job[] = [
  {
    id: "job-1",
    title: "Senior UX Designer",
    department: "Design",
    departmentColor: "#ac76ff",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120k - $150k",
    postedDate: "2024-01-05",
    closingDate: "2024-02-15",
    status: "active",
    applicants: 14,
    description:
      "We're looking for a Senior UX Designer to lead design initiatives and mentor junior designers.",
  },
  {
    id: "job-2",
    title: "Frontend Developer",
    department: "Development",
    departmentColor: "#19e8e7",
    location: "Remote",
    type: "Full-time",
    salary: "$100k - $130k",
    postedDate: "2024-01-08",
    closingDate: "2024-02-20",
    status: "active",
    applicants: 89,
    description:
      "Join our engineering team to build beautiful, performant web applications using React and TypeScript.",
  },
  {
    id: "job-3",
    title: "Marketing Manager",
    department: "Marketing",
    departmentColor: "#f87171",
    location: "New York, NY",
    type: "Full-time",
    salary: "$90k - $120k",
    postedDate: "2024-01-10",
    closingDate: "2024-02-18",
    status: "active",
    applicants: 32,
    description:
      "Lead our marketing efforts and develop strategies to increase brand awareness and drive growth.",
  },
  {
    id: "job-4",
    title: "HR Specialist",
    department: "Human Resources",
    departmentColor: "#4ade80",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$70k - $90k",
    postedDate: "2023-12-15",
    closingDate: "2024-01-30",
    status: "paused",
    applicants: 21,
    description:
      "Support our HR team with recruitment, onboarding, and employee relations initiatives.",
  },
  {
    id: "job-5",
    title: "Product Manager",
    department: "Product",
    departmentColor: "#f59e0b",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$130k - $160k",
    postedDate: "2024-01-12",
    closingDate: "2024-02-25",
    status: "active",
    applicants: 45,
    description:
      "Drive product strategy and work cross-functionally to deliver features that delight our users.",
  },
  {
    id: "job-6",
    title: "DevOps Engineer",
    department: "Development",
    departmentColor: "#19e8e7",
    location: "Remote",
    type: "Full-time",
    salary: "$110k - $140k",
    postedDate: "2024-01-03",
    closingDate: "2024-02-10",
    status: "active",
    applicants: 28,
    description:
      "Build and maintain our cloud infrastructure, CI/CD pipelines, and ensure system reliability.",
  },
  {
    id: "job-7",
    title: "Junior Designer",
    department: "Design",
    departmentColor: "#ac76ff",
    location: "Los Angeles, CA",
    type: "Full-time",
    salary: "$60k - $80k",
    postedDate: "2023-11-20",
    closingDate: "2024-01-15",
    status: "closed",
    applicants: 156,
    description:
      "Start your design career with our team. Work on real projects and learn from experienced designers.",
  },
  {
    id: "job-8",
    title: "Data Analyst",
    department: "Product",
    departmentColor: "#f59e0b",
    location: "Chicago, IL",
    type: "Full-time",
    salary: "$85k - $110k",
    postedDate: "2024-01-14",
    closingDate: "2024-02-28",
    status: "active",
    applicants: 37,
    description:
      "Analyze data to uncover insights, build dashboards, and help drive data-informed decisions.",
  },
];

export type ApplicantStatus =
  | "shortlisted"
  | "interviewed"
  | "onboarding"
  | "hired";

export interface Applicant {
  // Card fields
  id: string;
  name: string;
  email: string;
  match: number;
  location: string;
  status: ApplicantStatus;
  avatar: string;

  // Detail fields (optional for backward compatibility)
  phone?: string;
  appliedDate?: string;
  appliedFor?: string;

  matchBreakdown?: {
    skills: number;
    experience: number;
    culture: number;
  };

  currentRole?: string;
  currentCompany?: string;
  experience?: { company: string; role: string; duration: string }[];
  education?: { school: string; degree: string; year: string }[];
  skills?: string[];

  linkedin?: string;
  portfolio?: string;

  notes?: { author: string; date: string; content: string }[];
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
    phone: "+1 (555) 234-5678",
    appliedDate: "2024-01-15",
    appliedFor: "Senior UX Designer",
    matchBreakdown: {
      skills: 98,
      experience: 95,
      culture: 98,
    },
    currentRole: "Senior UX Designer",
    currentCompany: "Design Co.",
    experience: [
      {
        company: "Design Co.",
        role: "Senior UX Designer",
        duration: "2021 - Present",
      },
      {
        company: "Creative Studio",
        role: "UX Designer",
        duration: "2019 - 2021",
      },
      {
        company: "Startup Inc.",
        role: "Junior Designer",
        duration: "2017 - 2019",
      },
    ],
    education: [
      {
        school: "Design University",
        degree: "BFA in Graphic Design",
        year: "2017",
      },
    ],
    skills: [
      "Figma",
      "Sketch",
      "Adobe XD",
      "User Research",
      "Prototyping",
      "Design Systems",
      "UI/UX",
      "Wireframing",
    ],
    linkedin: "linkedin.com/in/mariaantoinette",
    portfolio: "mariaantoinette.design",
    notes: [
      {
        author: "Sarah Johnson",
        date: "2024-01-16",
        content:
          "Excellent portfolio with strong case studies. Great communication skills during initial screening.",
      },
      {
        author: "Mike Chen",
        date: "2024-01-17",
        content:
          "Top candidate. Strong design system experience aligns perfectly with our needs.",
      },
    ],
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
    match: 72,
    location: "United States",
    status: "shortlisted",
    avatar: imgUserThumb1,
  },
  {
    id: "6",
    name: "David Brown",
    email: "david@gmail.com",
    match: 68,
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
    phone: "+1 (555) 345-6789",
    appliedDate: "2024-01-10",
    appliedFor: "Frontend Developer",
    matchBreakdown: {
      skills: 96,
      experience: 92,
      culture: 94,
    },
    currentRole: "Senior Frontend Developer",
    currentCompany: "Tech Corp",
    experience: [
      {
        company: "Tech Corp",
        role: "Senior Frontend Developer",
        duration: "2020 - Present",
      },
      {
        company: "Web Solutions",
        role: "Frontend Developer",
        duration: "2018 - 2020",
      },
    ],
    education: [
      {
        school: "State University",
        degree: "BS in Computer Science",
        year: "2018",
      },
    ],
    skills: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "GraphQL",
      "Jest",
      "Git",
      "CI/CD",
    ],
    linkedin: "linkedin.com/in/jamestaylor",
    portfolio: "jamestaylor.dev",
    notes: [
      {
        author: "Alex Rodriguez",
        date: "2024-01-18",
        content:
          "Technical interview went well. Strong React knowledge and clean code practices.",
      },
      {
        author: "Lisa Park",
        date: "2024-01-19",
        content:
          "Great cultural fit. Collaborative and eager to contribute to team discussions.",
      },
    ],
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
    match: 45,
    location: "United States",
    status: "interviewed",
    avatar: imgUserThumb1,
  },
  {
    id: "11",
    name: "Charles White",
    email: "charles@gmail.com",
    match: 38,
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
    phone: "+1 (555) 456-7890",
    appliedDate: "2023-12-20",
    appliedFor: "Senior UX Designer",
    matchBreakdown: {
      skills: 99,
      experience: 97,
      culture: 98,
    },
    currentRole: "Lead UX Designer",
    currentCompany: "Innovation Labs",
    experience: [
      {
        company: "Innovation Labs",
        role: "Lead UX Designer",
        duration: "2020 - Present",
      },
      {
        company: "Digital Agency",
        role: "Senior UX Designer",
        duration: "2017 - 2020",
      },
      {
        company: "Design Studio",
        role: "UX Designer",
        duration: "2015 - 2017",
      },
    ],
    education: [
      {
        school: "Art Institute",
        degree: "MFA in Interaction Design",
        year: "2015",
      },
    ],
    skills: [
      "Figma",
      "Principle",
      "User Research",
      "Design Leadership",
      "Design Systems",
      "Prototyping",
      "Workshop Facilitation",
      "Stakeholder Management",
    ],
    linkedin: "linkedin.com/in/danielharris",
    portfolio: "danielharris.design",
    notes: [
      {
        author: "Emma Wilson",
        date: "2024-01-05",
        content:
          "Outstanding candidate. Offer extended and accepted. Starting onboarding process.",
      },
      {
        author: "HR Team",
        date: "2024-01-10",
        content: "Background check completed. All documents submitted.",
      },
    ],
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
