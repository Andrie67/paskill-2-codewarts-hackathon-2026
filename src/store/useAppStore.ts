import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type Role = 'worker' | 'employer' | null;

export interface WorkerProfile {
  id: string;
  name: string;
  email: string;
  category: string;
  confidenceScore: number;
  skills: string[];
  location: string;
  experienceYears: number;
  isVerified: boolean;
  avatarUrl?: string;
  uploadedEvidence: string[];
}

export interface EmployerProfile {
  id: string;
  companyName: string;
  industry: string;
  location: string;
  companySize: string;
  description: string;
  isVerified: boolean;
}

export interface JobPost {
  id: string;
  title: string;
  category: string;
  salary: string;
  location: string;
  description: string;
  interestedWorkers: string[]; // array of worker IDs
  datePosted: string;
}

export interface AppState {
  role: Role;
  currentUser: any | null; // Can be WorkerProfile or EmployerProfile
  mockWorkers: WorkerProfile[];
  mockJobs: JobPost[];
  
  // Actions
  setRole: (role: Role) => void;
  registerUser: (userData: any, role: Role) => void;
  updateWorkerProfile: (updates: Partial<WorkerProfile>) => void;
  addJob: (job: Omit<JobPost, 'id' | 'datePosted'>) => void;
  logout: () => void;
}

// Initial mock data
const initialMockWorkers: WorkerProfile[] = [
  {
    id: 'w1',
    name: 'Juan Dela Cruz',
    email: 'juan@example.com',
    category: 'Construction Worker',
    confidenceScore: 82,
    skills: ['Bricklaying', 'Concrete Mixing', 'Scaffolding'],
    location: 'Manila, Philippines',
    experienceYears: 5,
    isVerified: true,
    uploadedEvidence: ['gov_id.jpg', 'cert_safety.pdf', 'work_photo1.jpg'],
    avatarUrl: 'https://i.pravatar.cc/150?u=juan'
  },
  {
    id: 'w2',
    name: 'Maria Santos',
    email: 'maria@example.com',
    category: 'Gardener',
    confidenceScore: 78,
    skills: ['Landscaping', 'Pruning', 'Pest Control'],
    location: 'Quezon City',
    experienceYears: 3,
    isVerified: true,
    uploadedEvidence: ['gov_id.jpg', 'work_photo1.jpg'],
    avatarUrl: 'https://i.pravatar.cc/150?u=maria'
  },
  {
    id: 'w3',
    name: 'Carlo Reyes',
    email: 'carlo@example.com',
    category: 'Welder',
    confidenceScore: 85,
    skills: ['MIG Welding', 'TIG Welding', 'Blueprint Reading'],
    location: 'Cebu City',
    experienceYears: 8,
    isVerified: true,
    uploadedEvidence: ['gov_id.jpg', 'cert_welding.pdf', 'work_photo1.jpg'],
    avatarUrl: 'https://i.pravatar.cc/150?u=carlo'
  }
];

const initialMockJobs: JobPost[] = [
  {
    id: 'j1',
    title: 'Senior Construction Helper',
    category: 'Construction',
    salary: '₱800 - ₱1000 / day',
    location: 'Cebu City, Philippines',
    description: 'Looking for an experienced helper to assist with masonry and concrete works for a residential project.',
    interestedWorkers: ['w1', 'w3'],
    datePosted: '2 days ago'
  }
];

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      role: null,
      currentUser: null,
      mockWorkers: initialMockWorkers,
      mockJobs: initialMockJobs,

      setRole: (role) => set({ role }),
      
      registerUser: (userData, role) => {
        const newUser = { id: Date.now().toString(), ...userData };
        set({ currentUser: newUser, role });
      },

      updateWorkerProfile: (updates) => set((state) => ({
        currentUser: state.currentUser ? { ...state.currentUser, ...updates } : null
      })),

      addJob: (jobData) => set((state) => ({
        mockJobs: [
          { 
            ...jobData, 
            id: `j${Date.now()}`, 
            datePosted: 'Just now',
            interestedWorkers: state.mockWorkers.slice(0, 2).map(w => w.id) // Mock auto-interest from first two workers
          },
          ...state.mockJobs
        ]
      })),

      logout: () => set({ role: null, currentUser: null }),
    }),
    {
      name: 'paskill-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // Use sessionStorage for temporary persistence
    }
  )
);
