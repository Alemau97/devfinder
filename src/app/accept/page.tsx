"use client";
import { Container } from "@/override/container";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Accept = () => {
  const router = useRouter();
  return (
    <div className="w-full min-h-screen flex items-center bg-gradient-to-tl from-sky-400 via-sky-300 to-sky-200">
      <Container className="mx-auto w-full flex flex-col justify-center gap-y-6">
        <Card className="w-full h-full flex flex-col justify-center items-center ">
          <CardContent className="flex flex-col gap-y-2 p-4">
            <p className="text-lg text-center lg:text-xl font-semibold text-black">
              Sabía que dirías que sí! ❤️
            </p>
            <p className="text-md text-center lg:text-lg font-medium text-black">
              Eres la mejor mujer que Diosito y la vida pudo haberme dado, eso
              que tanto pedí y que por un momento pensé que en este nuevo mundo
              sería imposible encontrar. <br />
              Gracias por existir, por ser quien eres, por salir adelante, mi
              cielito lindo,{" "}
              <span className="font-semibold">te amo mi amor ❤️</span>
            </p>
            <Image
              src="/kisses-camera-off.gif"
              width={160}
              height={160}
              alt="kitten"
              unoptimized={true}
              className="mx-auto"
            />
          </CardContent>
        </Card>
        <div className="w-full flex justify-center items-center">
          <Button
            className="p-4 bg-lily w-fit hover:bg-lily text-md font-semibold lg:text-lg lg:p-6 border border-white"
            onClick={() => router.push("/")}
          >
            Start again
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Accept;
