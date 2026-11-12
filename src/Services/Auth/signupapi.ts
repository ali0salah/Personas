import axios from "axios";

export async function Signupapi(data: any) {
  const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/signup`, data);
  return response;
}
