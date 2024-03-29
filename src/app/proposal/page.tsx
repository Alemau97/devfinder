import { ProposalCountdown } from "@/components/letters/ProposalCountdown";
import { Container } from "@/override/container";
import React from "react";

const page = () => {
  return (
    <div className="w-full min-h-screen flex items-center bg-gradient-to-tl from-sky-400 via-sky-300 to-sky-200">
      <Container className="mx-auto w-full flex flex-col justify-center ">
        <ProposalCountdown />
      </Container>
    </div>
  );
};

export default page;
