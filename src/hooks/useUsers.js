import { useEffect, useState } from "react";
import { userApi } from "../api/userApi";

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const res = await userApi.get("https://reqres.in/api/users");
    setUsers(res.data.data);
  };

  return {
    users,
  };
};
