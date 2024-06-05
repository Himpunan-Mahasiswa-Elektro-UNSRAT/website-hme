"use client";

import { useState } from 'react';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = '' }) => {
  const router = useRouter();
  const [inputs, setInputs] = useState(['', '', '', '']);

  const handleChange = (index: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const handleRecoverPassword = () => {
    // Logic for recovering the password using the entered code
    console.log('Recovery code entered:', inputs.join(''));
    // Navigate to the recovery success page
    router.push('/recovery-success');
  };

  const handleBackToLogin = () => {
    // Navigate back to the login page
    router.push('/login');
  };

  return (
    <div
      className={`w-[732px] rounded-4xl bg-midnightblue flex flex-col items-start justify-start pt-[84px] px-8 pb-11 box-border gap-[54px] shrink-0 max-w-full text-left text-5xl text-white font-inter mq800:gap-[27px] mq800:pt-[55px] mq800:pb-[29px] mq800:box-border ${className}`}
    >
      <div className="w-[732px] h-[530px] relative rounded-4xl bg-midnightblue hidden max-w-full" />
      <div className="flex flex-row items-start justify-start py-0 px-[29px] box-border max-w-full">
        <div className="flex flex-col items-start justify-start gap-[20px] max-w-full">
          <div className="h-[95px] flex flex-col items-start justify-start gap-[12px]">
            <img
              className="w-[63px] flex-1 relative max-h-full z-[1]"
              loading="lazy"
              alt=""
              src="/group-32.svg"
            />
            <h2 className="m-0 relative text-inherit font-medium font-inherit z-[1] mq450:text-lgi">
              Password reset
            </h2>
            <div className={`absolute top-[512px] left-[685px] w-[60px] h-[72px] bg-white opacity-0`} />
          </div>
          <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[9px] box-border max-w-full text-mini">
            <p className="m-0 w-[416px] relative inline-block shrink-0 max-w-full max-h-[37px] [word-break:break-word] z-[1]">
              <span>{`We’ve sent instruction on how to reset your password to `}</span>
              <a
                className="text-[inherit]"
                href="https://mail.google.com/mail/u/0/#inbox"
                target="_blank"
              >
                <span className="[text-decoration:underline]">
                  <b>febiolalengkong026@student.unsrat.ac.id</b>
                  <span className="font-inter">{` `}</span>
                </span>
              </a>
            </p>
          </div>
          <div className="w-[330px] flex flex-col items-start justify-start gap-[23px] max-w-full text-center text-21xl text-black">
            <div className="relative w-[330px] h-[72px]">
              <div className="absolute h-full top-[0px] bottom-[0px] left-[calc(50%_+_105px)]">
                <input
                  type="text"
                  value={inputs[3]}
                  onChange={(e) => handleChange(3, e.target.value)}
                  maxLength={1}
                  className="w-[60px] h-full bg-white text-center text-6xl"
                />
              </div>
              <div className="absolute h-full top-[0px] bottom-[0px] left-[calc(50%_+_15px)]">
                <input
                  type="text"
                  value={inputs[2]}
                  onChange={(e) => handleChange(2, e.target.value)}
                  maxLength={1}
                  className="w-[60px] h-full bg-white text-center text-6xl"
                />
              </div>
              <div className="absolute h-full top-[0px] bottom-[0px] left-[calc(50%_-_76px)]">
                <input
                  type="text"
                  value={inputs[1]}
                  onChange={(e) => handleChange(1, e.target.value)}
                  maxLength={1}
                  className="w-[60px] h-full bg-white text-center text-6xl"
                />
              </div>
              <div className="absolute h-full top-[0px] bottom-[0px] left-[calc(50%_-_165px)]">
                <input
                  type="text"
                  value={inputs[0]}
                  onChange={(e) => handleChange(0, e.target.value)}
                  maxLength={1}
                  className="w-[60px] h-full bg-white text-center text-6xl"
                />
              </div>
            </div>
            <button
              className="cursor-pointer [border:none] pt-3.5 px-[17px] pb-[15px] bg-whitesmoke-100 w-[179px] shadow-[0px_4px_40.1px_rgba(0,_0,_0,_0.25)] rounded-3xl flex flex-row items-start justify-start box-border whitespace-nowrap z-[1] hover:bg-gainsboro"
              onClick={handleRecoverPassword}
            >
              <div className="h-12 w-[179px] relative shadow-[0px_4px_40.1px_rgba(0,_0,_0,_0.25)] rounded-3xl bg-whitesmoke-100 hidden" />
              <b className="flex-1 relative text-mini font-bold font-inter text-black text-center z-[2]">
                Recover Password
              </b>
            </button>
          </div>
        </div>
      </div>
      <div
        className="flex flex-row items-start justify-start gap-[5px] text-base cursor-pointer"
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
  );
};

export default FrameComponent;
