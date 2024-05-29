import Image from 'next/image';

export default function Register() {
    return (
      <div className="flex flex-row min-h-screen">
        <div className="w-[500px] bg-[#043188] text-[#FFFFFF] place-content-center">  

            <div className="flex flex-row h-[48px] pl-[55px] pt-[40px] absolute top-0 m-4">
                <div className="">
                    <Image
                        src="/logo-hme-fix.png"
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

        <div className="flex-grow bg-[#F8F5F2] place-content-center justify-items-center py-[70px]">
            <div className="flex flex-col items-center">
                <h1 className="font-bold text-[36px] text-[#043188]">
                    Create Account
                </h1>
                <p className="w-[563px] text-center py-[30px] text-[#000000]">
                    Selamat datang Elek-Elik, daftarkan diri dan jadi bagian dari Himpunan Mahasiswa Elektro FT-UNSRAT!
                </p>

                <form className="flex flex-col items-center">
                    <div className="w-[400px]">
                        <label className="block text-black text-sm font-bold py-2 text-[#043188]">
                            Nama Lengkap
                        </label>
                        <input id="username"
                                type="text"
                                className="h-[40px] shadow appearance-none border rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        </input>
                    </div>

                    <div className="w-[400px]">
                        <label className="block text-black text-sm font-bold py-2 text-[#043188]">
                            NIM
                        </label>
                        <input id="username"
                                type="text"
                                className="h-[40px] shadow appearance-none border rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        </input>
                    </div>
                    
                    <div className="w-[400px]">
                        <label className="block text-black text-sm font-bold py-2 text-[#043188]">
                            Email
                        </label>
                        <input id="username"
                                type="text"
                                className="h-[40px] shadow appearance-none border rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        </input>
                    </div>

                    <div className="w-[400px]">
                        <label className="block text-black text-sm font-bold py-2 text-[#043188]">
                            Password
                        </label>
                        <input id="username"
                                type="text"
                                className="h-[40px] shadow appearance-none border rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        </input>
                    </div>

                    <div className="w-[400px]">
                        <label className="block text-black text-sm font-bold py-2 text-[#043188]">
                            Konfirmasi Password
                        </label>
                        <input id="username"
                                type="text"
                                className="h-[40px] shadow appearance-none border rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        </input>
                    </div>
                    
                </form>

            </div>    
        </div>    
      </div>
    )
  }