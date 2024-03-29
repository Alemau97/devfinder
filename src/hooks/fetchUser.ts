import { userData } from "@/api/github-api";
import { useState, useEffect } from "react";

export const fetchData = (userName: string) => {
  const [user, setUser] = useState({});

  const informacion = async () => {
    const data = await userData(userName);
    setUser(data);
  };

  useEffect(() => {
    informacion();
  }, [userName]);

  return user;
};
