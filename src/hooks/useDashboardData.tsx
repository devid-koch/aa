import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";


export default function useDashboardData<T>(ENDPOINT, PAYLOAD: any) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);

  const refetch = async () => {
    setIsLoading(true);
    setIsSuccess(false);
    try {
      const response = await axios.post<{ data: T; message?: string }>(
        import.meta.env.VITE_BASE_API_URL + "dashboard/" + ENDPOINT, PAYLOAD
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

  useEffect(() => {
    refetch();
  }, []);

  return { isLoading, data, refetch, isSuccess };
}
