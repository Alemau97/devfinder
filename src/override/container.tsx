import { cn } from "@/utils/cn";
import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Container = ({ children, className, ...rest }: Props) => {
  return (
    <section
      className={cn(
        "w-full p-4 sm:p-8 md:p-10 lg:p-16 max-w-[1600px] mx-auto",
        className
      )}
      {...rest}
    >
      {children}
    </section>
  );
};
