"use client";

import { useRouter } from 'next/router';
import type { NextPage } from "next";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  const router = useRouter();

  const handleBackToLogin = () => {
    // Navigate back to the login page
    router.push('/login');
  };

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-0 pr-px pl-0 box-border max-w-full text-center text-5xl text-white font-inter ${className}`}
    >
      <div className="w-[635px] rounded-4xl bg-midnightblue flex flex-col items-start justify-start pt-[72px] px-[19px] pb-6 box-border gap-[80px] max-w-full mq450:gap-[20px] mq650:gap-[40px]">
        <div className="w-[635px] h-[328px] relative rounded-4xl bg-midnightblue hidden max-w-full" />
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border max-w-full">
          <div className="w-[416px] flex flex-col items-start justify-start gap-[10.5px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
              <img
                className="h-[60px] w-[60px] relative overflow-hidden shrink-0 z-[1]"
                loading="lazy"
                alt=""
                src="/circle-1.svg"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
              <h2 className="m-0 w-[219px] relative text-inherit font-medium font-inherit inline-block shrink-0 z-[1] mq450:text-lgi">
                All done!
              </h2>
            </div>
            <div className="self-stretch relative text-mini z-[1]">
              Your password has been reset.
            </div>
          </div>
        </div>
        <div
          className="flex flex-row items-start justify-start gap-[5px] text-left text-base cursor-pointer"
          onClick={handleBackToLogin}
        >
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 z-[1]"
            loading="lazy"
            alt=""
            src="/arrowleft-3-1.svg"
          />
          <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
            <div className="relative leading-[17px] font-medium inline-block min-w-[110px] z-[1]">
              Back to log in
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
