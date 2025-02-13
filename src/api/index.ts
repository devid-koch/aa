import axios from "axios";

export const departmentFetchCounts = async (departmentId: any) => {
  const response = await axios.post(
    import.meta.env.VITE_BASE_API_URL + "dashboard/home",
    { department_id: departmentId }
  );
  return response.data.data.count;
};

export const getDepartmentData = async (data: any) => {
  const response = await axios.post(
    import.meta.env.VITE_BASE_API_URL + "dashboard/dept-dash-list",
    data
  );
  return response.data;
};
