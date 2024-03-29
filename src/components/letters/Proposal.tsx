import { Container } from "@/override/container";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export const Proposal = () => {
  const router = useRouter();
  return (
    <div className="w-full min-h-screen flex items-center bg-[url('/background.jpg')]/80">
      <Container className="mx-auto w-full flex flex-col justify-center  gap-y-6">
        <p className="text-lg text-center lg:text-xl font-semibold text-black rounded-md">
          Liliana Maribel Aquino Cabrera ❤️
        </p>
        <p className="text-lg text-center lg:text-xl font-semibold text-black">
          ¿Quieres ser mi novia?
        </p>
        <Image
          src="/kitty-hearts.gif"
          width={160}
          height={160}
          alt="kitten"
          unoptimized={true}
          className="mx-auto"
        />
        <div className="w-full flex justify-around items-center">
          {buttons.map((button, key) => (
            <Button
              className="p-4 bg-lily w-fit hover:bg-lily text-md font-semibold lg:text-lg lg:p-6 border border-white"
              onClick={() => router.push(`${button.path}`)}
              key={key}
            >
              {button.content}
            </Button>
          ))}
        </div>
      </Container>
    </div>
  );
};

const buttons = [
  {
    path: "/accept",
    content: "Of Course",
  },
  {
    path: "/accept",
    content: "Why not?",
  },
];
