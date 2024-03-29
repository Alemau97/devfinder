"use client";
import { Button } from "@/components/ui/button";
//import { PageInfo } from "@/components/PageInfo";
//import { UserForm } from "@/components/UserForm";
//import { UserInfo } from "@/components/UserInfo";
import { Container } from "@/override/container";
import Image from "next/image";
import { useRouter } from "next/navigation";
//import { useState } from "react";

export default function Home() {
  /* const [name, setName] = useState("");

  const getUserName = (userName: string) => {
    setName(userName);
  }; */

  const router = useRouter();

  return (
    <div className="w-full min-h-screen flex items-center bg-gradient-to-tl from-sky-400 via-sky-300 to-sky-200">
      <Container className="mx-auto w-full flex flex-col justify-center gap-y-6">
        <div className="flex flex-col items-center justify-center gap-y-4">
          <Image
            src="/kitty-flying.gif"
            width={160}
            height={160}
            alt="kitten"
            unoptimized={true}
          />
          <p className="text-lg text-center lg:text-xl font-semibold text-black">
            Welcome aboard this journey,{" "}
            <span className="text-white">mi preciosa Lily</span> &#x1F90D;
          </p>
        </div>
        <div className=" py-0 flex flex-col justify-between items-center gap-y-6">
          <p className="text-lg font-semibold text-center lg:text-xl">
            Are you ready to continue?
          </p>
          <Button
            className="p-4 bg-lily w-fit hover:bg-lily text-md font-semibold lg:text-lg lg:p-6 border border-white"
            onClick={() => router.push("/letters")}
          >
            Continue
          </Button>
        </div>
        {/*  <img src="/intro-kitten.gif"></img> */}
        {/* <PageInfo />
        <UserForm
          userName={(userName: any) => getUserName(userName.username)}
        />
        <UserInfo userName={name} /> */}
      </Container>
    </div>
  );
}
