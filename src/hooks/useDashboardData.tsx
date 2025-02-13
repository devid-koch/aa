import axios from "axios";
import React from "react";
import { toast } from "sonner";

interface Count {
  assessmentCount: number;
  assessorCount: number;
  batchCount: number;
  candidateCount: number;
  courseCount: number;
  departmentCount: number;
  placementCount: number;
  schemeCount: number;
  sectorCount: number;
  tcCount: number;
  tpCount: number;
  trainerCount: number;
}

interface Data {
  departmentWiseEnrollment: Enrollment[];
  department: any;
  count: Count;
}

export interface Enrollment {
  department: number;
  firstUpdated: Date;
  lastUpdated: Date;
  quality: string;
  total: number;
}

export default function useDashboardData() {
  const [data, setData] = React.useState<Data>();
  const [isLoading, setIsLoading] = React.useState(true);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const refetch = async () => {
    setIsLoading(true);
    setIsSuccess(false);
    try {
      const response = await axios.post(
        import.meta.env.VITE_BASE_API_URL + "dashboard/home"
      );
      setData(response?.data?.data);
      setIsSuccess(true);
      if (response?.data?.message) toast(response.data.message);
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    refetch();
  }, []);

  return { isLoading, data, refetch, isSuccess };
}
