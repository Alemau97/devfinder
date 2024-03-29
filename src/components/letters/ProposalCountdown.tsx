"use client";
import React from "react";
import Countdown from "react-countdown";
import { Proposal } from "./Proposal";

export const ProposalCountdown = () => {
  const renderer = ({ seconds, completed }: any) => {
    if (completed) {
      return <Proposal />;
    } else {
      return (
        <div className="w-full flex justify-center flex-col items-center gap-y-6">
          <p className="text-xl text-center lg:text-2xl font-semibold text-black">
            A la cuenta de...
          </p>
          <span className="text-2xl text-center lg:text-3xl font-semibold text-black">
            {seconds}
          </span>
        </div>
      );
    }
  };

  return <Countdown date={Date.now() + 13000} renderer={renderer} />;
};
