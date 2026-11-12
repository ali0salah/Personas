import axios from "axios";

export async function loginapi(data: any) {
  const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/signin`, data);
  return response;
}
