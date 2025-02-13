import axios from "axios";

export const departmentFetchCounts = async (departmentId: any, integrationType?: number) => {
  const requestBody: Record<string, any> = { department_id: departmentId };

  if (integrationType !== undefined) {
    requestBody.integrationType = integrationType;
  }
  const response = await axios.post(
    import.meta.env.VITE_BASE_API_URL + "dashboard/home",
    requestBody
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
