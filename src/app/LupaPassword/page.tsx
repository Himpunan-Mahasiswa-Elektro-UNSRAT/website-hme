import { CiLock } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa6";
import Image from "next/image";

export default function LupaPassword() {
  return (
    <div>
       <div className="absolute top-[60px] left-[78px] w-[251px] h-12 text-[22px] text-[#043188]">
        <div className="absolute top-[0px] left-[0px] shadow-[0px_0px_8.9px_#021946] w-12 h-12">
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-white w-full h-full" />
          <img
            className="absolute top-[0px] left-[0px] w-full h-full object-cover"
            loading="lazy"
            alt=""
            src="/LogoHME.png"
          />
        </div>
        <a className="[text-decoration:none] absolute top-[1px] left-[56px] font-bold text-[inherit] text-[18px]">
          HME-FT UNSRAT
        </a>
        <div className="absolute top-[28px] left-[56px] text-[14px]">
          Himpunan Mahasiswa Elektro
        </div>
      </div>
      <div className="w-[732px] h-[540px] bg-[#043188] rounded-[23px] p-[40px] text-[#FFFF] text-[24px] mx-[478px] my-[200px]">
        <div className="flex flex-col">
            <CiLock className="w-[80px] h-[106px]"/>
          <h1 className="buttom-[2px] pt-[3px]">Forgot password</h1>
          <a className="text-[15px] pb-[27px] pt-[14px]">
            Lorem ipsum dolor sit amet consectetur. Sit a ut purus ac.
          </a>
          <input type="text" className="w-[610px] h-[72px] bg-[#FFFF] text-[17px] pl-[16px] text-[black] rounded-[9px]" placeholder="Phone number or email">
          </input>
          <button className="w-[189px] h-[52px] bg-[#F6F6F6] text-[#000] text-base font-bold mt-6 rounded-[23px]">
            RESET PASSWORD
          </button>
          <div className="w-[156px] h-[24px] mt-[80px] text-[20px]">
            <FaArrowLeft className="mr-2 my-[-27px]" />
            <a href="#" className="text-[16px] pl-[26px]">
              Back to log in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
