import Image from 'next/image';

export default function Register() {
    return (
      <div className="flex flex-row min-h-screen">
        <div className="w-[583px] bg-[#043188] text-[#FFFFFF] place-content-center">  

            <div className="flex flex-row h-[48px] pl-[55px] pt-[40px] absolute top-0 m-4">
                <div className="">
                    <Image
                        src="/himpunan-logo-bgputih.png"
                        width={48}
                        height={48}
                        alt="logo himpunan mahasiswa elektro"
                    />
                </div>
                <div>
                    <p className="text-[22px] font-bold h-[27px] leading-[26.63px] px-[9px]">HME FT-UNSRAT</p>
                    <p className="h-[17px] text-[14px] leading-[16.94px] px-[9px]">Himpunan Mahasiswa Elektro</p>
                </div>
            </div>

            <div className="flex flex-col items-center">
                <h1 className="font-bold text-[36px] pt-[10px]">
                    Welcome Back
                </h1>
                <p className="w-[340px] text-[15px] mx-auto text-center py-[10px]">
                    Silahkan login agar bisa mengakses lebih banyak dalam website HME!
                </p>
                <div className="py-[10px] mx-auto">
                    <button className="border border-white px-[54px] h-[52px] rounded-[24px] font-bold text text-[15px]">
                        LOGIN
                    </button>
                </div> 
            </div>
        
        </div>

        <div className="flex-grow bg-[#F8F5F2] place-content-center justify-items-center py-[90px]">
            <div className="flex flex-col items-center">
                <h1 className="font-bold text-[36px] text-[#043188]">
                    Create Account
                </h1>
                <p className="w-[563px] text-center py-[30px]">
                    Selamat datang Elek-Elik, daftarkan diri dan jadi bagian dari Himpunan Mahasiswa Elektro FT-UNSRAT!
                </p>

                
                <form className="flex flex-col items-center">
                    <div className="flex flex-col my-[10px]">
                        <div className="w-[473px] h-[72px] bg-[#E7E7E7] rounded-[9px] px-[27px] pt-[16px]">
                            <div className="text-[13px] text-[#999999]">
                                <p>NAMA LENGKAP</p>
                            </div>
                            <div>
                                <input className="text-[16px] text-[#000000] bg-[#E7E7E7] font-semibold w-full outline-none"></input>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col my-[7px]">
                        <div className="w-[473px] h-[72px] bg-[#E7E7E7] rounded-[9px] px-[27px] pt-[16px]">
                            <div className="text-[13px] text-[#999999]">
                                <p>NIM</p>
                            </div>
                            <div>
                                <input className="text-[16px] text-[#000000] bg-[#E7E7E7] font-semibold w-full outline-none"></input>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col my-[7px]">
                        <div className="w-[473px] h-[72px] bg-[#E7E7E7] rounded-[9px] px-[27px] pt-[16px]">
                            <div className="text-[13px] text-[#999999]">
                                <p>EMAIL</p>
                            </div>
                            <div>
                                <input className="text-[16px] text-[#000000] bg-[#E7E7E7] font-semibold w-full outline-none"></input>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col my-[7px]">
                        <div className="w-[473px] h-[72px] bg-[#E7E7E7] rounded-[9px] px-[27px] pt-[16px]">
                            <div className="text-[13px] text-[#999999]">
                                <p>PASSWORD</p>
                            </div>
                            <div>
                                <input type="password" className="text-[16px] text-[#000000] bg-[#E7E7E7] font-semibold w-full outline-none"></input>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col my-[7px]">
                        <div className="w-[473px] h-[72px] bg-[#E7E7E7] rounded-[9px] px-[27px] pt-[16px] ">
                            <div className="text-[13px] text-[#999999]">
                                <p>KONFIRMASI PASSWORD</p>
                            </div>
                            <div>
                                <input type="password" className="text-[16px] text-[#000000] bg-[#E7E7E7] font-semibold w-full outline-none"></input>
                            </div>
                        </div>
                    </div>

                    <div className="py-[40px] mx-auto">
                        <button className="border border-white text-white px-[54px] h-[52px] rounded-[24px] bg-[#043188] font-bold text text-[15px]">
                            SUBMIT
                        </button>
                    </div>
                </form>
            </div>    
        </div>    
      </div>
    )
  }