import { createContext, useContext, type ReactNode } from "react";
import { type userDataShape } from "../components/interface/userdatainterface";
import axios from "axios";
import { authcontext } from "./authcontext";
import { useQuery } from "@tanstack/react-query";

type data = {
  userData: userDataShape | null;
};

export const userdatacontext = createContext<data>({
  userData: null,
});

export function Userdataprovide({ children }: { children: ReactNode }) {
  const { token } = useContext(authcontext);

  function getdata() {
    return axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile-data`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  const { data: userData } = useQuery({
    queryFn: getdata,
    queryKey: ["userData"],
    enabled: !!token,
    select: (data) => data?.data.data.user,
  });

  return (
    <userdatacontext.Provider value={{ userData }}>
      {children}
    </userdatacontext.Provider>
  );
}
