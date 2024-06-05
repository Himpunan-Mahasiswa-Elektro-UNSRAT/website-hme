import type { NextPage } from "next";
import FrameComponent from "./_components/success";

const SuccessResetPasswordPage = () => {
  return (
    <div className="w-full relative bg-whitesmoke overflow-hidden flex flex-col items-start justify-start pt-[60px] px-[78px] pb-[348px] box-border gap-[240px] leading-[normal] tracking-[normal] text-left text-[22px] text-midnightblue font-inter mq450:gap-[60px] mq725:gap-[120px] mq725:pl-[39px] mq725:pr-[39px] mq725:box-border">
      <div className="flex flex-row items-start justify-start gap-[8px]">
        <div className="h-12 w-12 relative">
          <div className="absolute top-[0px] left-[0px] w-full h-full flex items-center justify-center">
            <img
              className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.371)]"
              alt=""
              src="/group-59.svg"
            />
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/LogoHME.png"
          />
        </div>
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <div className="flex flex-col items-start justify-start">
            <a className="[text-decoration:none] relative font-bold text-[inherit] mq450:text-[18px]">
              HME-FT UNSRAT
            </a>
            <div className="relative text-[14px]">
              Himpunan Mahasiswa Elektro
            </div>
          </div>
        </div>
      </div>
      <FrameComponent />
    </div>
  );
};

export default SuccessResetPasswordPage;
