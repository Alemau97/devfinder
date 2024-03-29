"use client";
import { userData } from "@/api/github-api";
import { fetchData } from "@/hooks/fetchUser";
import React from "react";

interface props {
  userName: string;
}

export const UserInfo = ({ userName }: props) => {
  const data = fetchData(userName);

  console.log(userName);

  return (
    <div>
      {/**@ts-ignore */}
      <p>{data.bio}</p>
    </div>
  );
};
