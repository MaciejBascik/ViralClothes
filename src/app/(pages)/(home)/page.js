'use client'
 
import { useRouter } from 'next/navigation'
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

function Home() {
  const router = useRouter()
  return (

<div>

      <div className="hero min-h-screen" id="hero" style={{backgroundImage: 'url(https://i.ibb.co/jk0X5z9/Group-6.png)'}}>
        <div className="text-left text-neutral-content max-w-[100%] mr-[50%]">
          <div className=" ">
            <h1 className="mb-5 text-[90px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#000000] to-[#001354] ">Find trending <br/> clothes</h1>
            <p className="mb-5 text-[22px] text-transparent bg-clip-text bg-gradient-to-r from-[#000000] to-[#001354]">Celebrate the joy of accomplishment with an <br/> app designed to track your progress, motivate <br/> your efforts, and celebrate your successes.</p>
            <button><Link href="/#pricing" className="btn btn-sm bg-black h-9  text-[16px]" style={{color:"white"}}>Get access</Link></button>
            <button><Link href="/#about" className="btn btn-sm bg-transparent border-none shadow-none h-9 ml-2 text-[16px] hover:bg-[#eaeefe27] " style={{color:"black"}}>Learn more <FaArrowRight/> </Link></button>
          </div>

        </div>
      </div>

      <div id="about" className="hero min-h-screen bg-[#EAEEFE]">
        <div className="text-center text-neutral-content max-w-[50%]">

          <div>
            <button className="btn btn-sm bg-transparent h-9 ml-2 text-[14px] hover:bg-transparent" style={{color:"black"}}>Find clothes for you </button>
            <h1 className="mb-5 text-[90px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#000000] to-[#001354] ">A more effective way to find clothes</h1>
            <p className="mb-5 text-[22px] text-transparent bg-clip-text bg-gradient-to-r from-[#000000] to-[#001354]">Effortlessly find new clothes designs based on TikTok trending algorithm in just minutes. New designs, Viral brands, Adjusted specially for you</p>
            <button><Link href="/#pricing" className="btn btn-sm bg-black h-9  text-[16px]" style={{color:"white"}}>Get access</Link></button>
            <button><Link href="/#about" className="btn btn-sm bg-transparent border-none shadow-none h-9 ml-2 text-[16px] hover:bg-[#eaeefe27] " style={{color:"black"}}>Learn more <FaArrowRight/> </Link></button>
          </div>

        </div>
      </div>

</div>
  );
}
export default Home;