import axios from "axios";
import { baseurl } from "../../const/env";

export async function loginapi(data: any) {
  const response = await axios.post(`${baseurl}/users/signin`, data);
  return response;
}
