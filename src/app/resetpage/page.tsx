import type { NextPage } from 'next';
import FrameComponent from './_components/frame-component';

const PasswordResetPage: NextPage = () => {
  return (
    <div className="w-full relative bg-whitesmoke-200 overflow-hidden flex flex-col items-start justify-start pt-[60px] px-0 pb-[247px] box-border gap-[139px] leading-[normal] tracking-[normal] text-left text-[22px] text-midnightblue font-inter mq450:gap-[35px] mq800:gap-[69px]">
      <div className="flex flex-row items-start justify-start py-0 px-[78px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="flex flex-row items-start justify-start gap-[8px]">
          <div className="h-12 w-12 relative shadow-[0px_0px_8.9px_#021946] rounded-full overflow-hidden">
            <div className="absolute top-[0px] left-[0px] rounded-full bg-transparent w-full h-full" />
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
              <div className="relative text-[14px] z-[1]">
                Himpunan Mahasiswa Elektro
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="self-stretch flex flex-row items-end justify-start py-0 px-[354px] box-border gap-[3008px] max-w-full mq450:gap-[376px] mq450:pl-5 mq450:pr-5 mq450:box-border mq800:gap-[752px] mq800:pl-[88px] mq800:pr-[88px] mq800:box-border mq1350:flex-wrap mq1350:gap-[1504px] mq1350:pl-[177px] mq1350:pr-[177px] mq1350:box-border">
        <div className="ml-[-3108px] h-[289px] flex flex-col items-start justify-start">
          <img
            className="w-[100px] h-[100px] relative shrink-0 [debug_commit:bf4bc93]"
            loading="lazy"
            alt=""
          />
        </div>
        <FrameComponent />
      </section>
    </div>
  );
};

export default PasswordResetPage;
