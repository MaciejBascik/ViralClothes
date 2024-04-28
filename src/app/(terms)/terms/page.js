
import { FaArrowRight } from "react-icons/fa6";
export default function Home() {
  return (

<div>

      <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/jk0X5z9/Group-6.png)'}}>
        <div className="text-left text-neutral-content max-w-[100%] mr-[50%]">
          <div className=" ">
            <h1 className="mb-5 text-[80px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#000000] to-[#001354] ">Terms of Service</h1>
            <p className="mb-5 text-[22px] text-transparent bg-clip-text bg-gradient-to-r from-[#000000] to-[#001354]">Celebrate the joy of accomplishment with an <br/> app designed to track your progress, motivate <br/> your efforts, and celebrate your successes.</p>
            <button className="btn btn-sm bg-black h-9  text-[16px]" style={{color:"white"}}>Get access</button>
            <button className="btn btn-sm bg-transparent border-none shadow-none h-9 ml-2 text-[16px] hover:bg-[#eaeefe27] " style={{color:"black"}}>Learn more <FaArrowRight/> </button>
          </div>

        </div>
      </div>

      

</div>
  );
}
