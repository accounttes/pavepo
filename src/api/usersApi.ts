import axios from "axios";
import { User } from "../types/user";

const BASE_URL = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = async (): Promise<User[]> => {
  const { data } = await axios.get(BASE_URL);
  return data;
};

export const fetchUserById = async (id: string): Promise<User> => {
  const { data } = await axios.get(`${BASE_URL}/${id}`);
  return data;
};
