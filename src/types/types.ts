export interface DashboardData {
  count: {
    departments: number;
    schemes: number;
    sectors: number;
    courses: number;
    tps: number;
    tcs: number;
    batchs: number;
    candidates: number;
    trainers: number;
    assessors: number;
    assessements: number;
    placements: number;
  };
  duplicateChart: {
    candidate: { duplicate: number; unique: number; unique_2: number };
    tc: { duplicate: number; unique: number; unique_2: number };
    tp: { duplicate: number; unique: number; unique_2: number };
    trainer: { duplicate: number; unique: number; unique_2: number };
  };
  department: {
    departmentId: number;
    departmentName: string;
    departmentFullName: string;
  }[];
  deptBySchemes: { schemeName: string }[];
  genderChart: { vsGender: string; count: number }[];
  candidateBatchWiseCount: { totalWithoutBatch: number; totalWithBatch: number }[];
}


interface Candidate {
  vsCandidateName: string;
  vsDOB: string;
  caste: string | null;
  vsMobile: string | null;
  vsGender: string;
  candidateId: string | null;
  vsQualification: string | null;
  batchNo: string;
  courseName: string | null;
  vsSchemeName: string;
  departmentName: string;
}

export interface ListData {
  list: Candidate[];
  total: number;
  pages: number;
}
