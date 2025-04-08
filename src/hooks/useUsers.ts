import { useQuery } from "@tanstack/react-query";
import { fetchUsers, fetchUserById } from "../api/usersApi";

export const useUsers = () => {
  return useQuery({ queryKey: ["users"], queryFn: fetchUsers });
};

export const useUser = (id: string) => {
  return useQuery({ queryKey: ["user", id], queryFn: () => fetchUserById(id) });
};
