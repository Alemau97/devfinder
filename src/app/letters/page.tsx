"use client";
import { LettersCarousel } from "@/components/letters/LettersCarousel";
import { Button } from "@/components/ui/button";
import { Container } from "@/override/container";
import { useRouter } from "next/navigation";
import React from "react";

const Letters = () => {
  const router = useRouter();
  return (
    <div className="w-full min-h-screen flex items-center bg-gradient-to-tl from-sky-400 via-sky-300 to-sky-200">
      <Container className="mx-auto w-full flex flex-col justify-center gap-y-6">
        <p className="text-lg text-center lg:text-xl font-semibold text-black">
          But before...
          <br /> There&apos;s something I&apos;d like you to read
        </p>
        <LettersCarousel />
        <div className="w-full flex justify-between items-center">
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

export default Letters;

const buttons = [
  {
    path: "/",
    content: "Back",
  },
  {
    path: "/proposal",
    content: "💌",
  },
];
