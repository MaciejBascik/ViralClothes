'use client'
 

import { FaArrowRight } from "react-icons/fa6";
import LoginButton from '../../../../components/LoginButton';
import Link from "next/link";
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function Params() {
  const searchParams  = useSearchParams();
  const authCode = searchParams.get("code");
  return authCode;
}

function Home() {

  return (
<>
<Suspense fallback={<div>Loading params...</div>}>
  {Params()}
</Suspense>
<header className="flex items-center justify-between font-['DM Sans']">
            <div className="navbar bg-[#EAEEFE] flex flex-col md:flex-row"> 
                <div className="flex-1">
                    <Link href="/" className="btn btn-ghost text-[18px] md:ml-10 font-light" style={{color:"black"}}>made by <span className="font-[600]">MaciejBaścik</span></Link>
                </div>
                
                <ul className="menu menu-horizontal px-2 text-[16px] mr-10">
                    <li style={{color:"black", opacity:"60%"}}><Link href="/#about">About</Link></li>
                    <li style={{color:"black", opacity:"60%"}}><Link href="/#features">Features</Link></li>
                    <li style={{color:"black", opacity:"60%"}}><Link href="/#help">Help</Link></li>
                    {Params ? (
                        <li style={{color:"black", opacity:"60%"}}><Link href="/user/feed">Feed</Link></li>
                    ) : (
                        <li><LoginButton>Log in</LoginButton></li>
                    )}
                </ul>
            </div>
        </header>


<div>
      <div className="hero min-h-screen " id="hero" style={{backgroundImage: 'url(https://i.ibb.co/jk0X5z9/Group-6.png)'}}>
        <div className="text-center sm:text-left text-neutral-content max-w-[100%] md:mr-[50%]  mr-0">
          <div className="">
            <h1 className="mb-5  lg:text-[80px] md:text-[50px] sx:text-[45px] text-[47px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#000000] to-[#001354] ">Find trending <br/> clothes</h1>
            <p className="mb-5 lg:text-[22px]  md:text-[17px] sm:text-[18px] text-[18px] text-transparent bg-clip-text bg-gradient-to-r from-[#000000] to-[#001354]">Celebrate the joy of finding new clothes <br/> in much easier way than ever before, <br/> from designers for clients</p>
            <LoginButton>Log in with tiktok</LoginButton>
            <button><Link href="/#about" className="btn btn-sm bg-transparent border-none shadow-none h-9 ml-2 text-[16px] hover:bg-[#eaeefe27] " style={{color:"black"}}>Learn more <FaArrowRight/> </Link></button>
          </div>
        </div>
      </div>


      <div id="about" className="hero min-h-screen bg-[#EAEEFE]">
        <div className="text-center text-neutral-content max-w-[50%]">
          <div>
            <button className="btn btn-sm bg-transparent h-9 ml-2 text-[14px] hover:bg-transparent" style={{color:"black"}}>Find clothes for you </button>
            <h1 className="mb-5  lg:text-[80px] md:text-[50px] sx:text-[45px] text-[47px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#000000] to-[#001354] ">A more effective way to find clothes</h1>
            <p className="mb-5 lg:text-[22px]  md:text-[17px] sm:text-[18px] text-[18px] text-transparent bg-clip-text bg-gradient-to-r from-[#000000] to-[#001354]">Effortlessly find new clothes designs based on TikTok trending algorithm in just minutes. New designs, Viral brands, Adjusted specially for you</p>
            <LoginButton>Get access</LoginButton>
            <button><Link href="/#about" className="btn btn-sm bg-transparent border-none shadow-none h-9 ml-2 text-[16px] hover:bg-[#eaeefe27] " style={{color:"black"}}>Learn more <FaArrowRight/> </Link></button>
          </div>
        </div>
        
      </div>


</div>

</>
  );
}
export default Home;