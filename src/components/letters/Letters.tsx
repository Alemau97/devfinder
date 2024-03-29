"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export interface letterContent {
  letter: string;
  img: string;
}

export const Letters = ({ letter, img }: letterContent) => {
  return (
    <Card className="w-full h-full flex flex-col justify-center items-center ">
      <CardContent className="gap-y-4 p-4">
        <p className="text-md text-center lg:text-lg font-medium text-black">
          {letter}
        </p>
        <Image
          src={img}
          width={160}
          height={160}
          alt="kitten"
          unoptimized={true}
          className="mx-auto"
        />
      </CardContent>
    </Card>
  );
};
