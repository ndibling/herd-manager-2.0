// src/types/index.ts

export interface Cow {
  id: string;
  name: string;
  breedType: string;
  birthDate: Date | string;
  birthWeight: number;
  height: number;
  colorPattern: string;
  location?: string;
  profilePictureUrl?: string;
  certificateUrl?: string;
  registryNumber?: string;
  farmId: string;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface CowFormData {
  name: string;
  breedType: string;
  birthDate: string;
  birthWeight: number | string;
  height: number | string;
  colorPattern: string;
  location: string;
  registryNumber: string;
  sireId?: string;
  sireName?: string;
  damId?: string;
  damName?: string;
}

export interface ParentageLink {
  id: string;
  childId: string;
  sireId?: string;
  sireName?: string;
  sireBreed?: string;
  damId?: string;
  damName?: string;
  damBreed?: string;
}

export interface MedicalRecord {
  id: string;
  cowId: string;
  farmId: string;
  date: Date | string;
  description: string;
  category: string;
  notes?: string;
  documentUrl?: string;
}

export interface Farm {
  id: string;
  name: string;
  logoUrl?: string;
  theme: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  pagination?: {
    total: number;
    page: number;
    limit: number;
  };
}
