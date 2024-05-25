'use client'
import LoginButton from "../../../../../../components/LoginButton";
import { FaArrowRight } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import LoadingPage from "@/app/loading";
import { FaRegFlag } from "react-icons/fa6";
import Link from "next/link";
import { useUser } from '@auth0/nextjs-auth0/client';
import { useSearchParams  } from 'next/navigation'
const CardDetails = () => {
    const searchParams = useSearchParams()


    const video = JSON.parse(searchParams.get("video"));

    const { user, error, isLoading } = useUser();
    if(isLoading) return <LoadingPage/>;
    if(error) return <h1>Error!</h1>;
  console.log(video)
  return (
    <>
    <header className="flex items-center justify-between font-['DM Sans']">
  <div className="navbar bg-[#EAEEFE] flex flex-col md:flex-row">
    <div className="flex-1">
      <Link href="/" className="btn btn-ghost text-[18px] md:ml-10 font-light" style={{color:"black"}}>made by <span
        className="font-[600]">MaciejBaścik</span></Link>
    </div>

    <ul className="menu menu-horizontal px-2 text-[16px] md:mr-10">
      <li style={{color:"black", opacity:"60%"}}>
        <Link href="/#about">About</Link>
      </li>
      <li style={{color:"black", opacity:"60%"}}>
        <Link href="/#about">Features</Link>
      </li>
      <li style={{color:"black", opacity:"60%"}}>
        <Link href="mailto:maciej.b4scik@gmail.com">Help</Link>
      </li>
      {user && (
      <li style={{color:"black", opacity:"60%"}}>
        <Link href="/user/feed">Feed</Link>
      </li>

      )}

      {user ? (
        <div>
      <li style={{color:"black", fontWeight:"500"}}>
        <Link href="/user/info">@{user.nickname}</Link>
      </li>

      </div>
      ) : (
      <li className="md:ml-2">
        <LoginButton>Log in</LoginButton>
      </li>
      )}
    </ul>
  </div>
</header>
<div className="hero min-h-screen" id="hero"
    style={{backgroundImage: 'url(https://i.ibb.co/jk0X5z9/Group-6.png)', objectFit:"cover"}}>
    <div className="flex flex-row w-[100%]">
      <div className=" sm:text-left text-neutral-content max-w-[40%] ml-[15vh]">
          {!user ? (<>
          <h1 className="mb-5  lg:text-[80px] md:text-[50px] sx:text-[45px] text-[47px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#000000] to-[#001354] ">Please Log in!</h1>
          <p className="mb-5 lg:text-[22px]  md:text-[17px] sm:text-[18px] text-[18px] text-transparent bg-clip-text bg-gradient-to-r from-[#000000] to-[#001354]">
          We are so sad that you haven&apos;t log in yet..
          </p>
          <LoginButton>Log in</LoginButton></>) : (<> <h1
          className="mb-5  lg:text-[80px] md:text-[50px] sx:text-[45px] text-[47px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#000000] to-[#001354] ">{(video.author.nickname).slice(0,20)}</h1>
          <p className="mb-5 lg:text-[22px]  md:text-[17px] sm:text-[18px] text-[18px] text-transparent bg-clip-text bg-gradient-to-r from-[#000000] to-[#001354]">
          {(video.title).slice(0,300)}
          </p>
          <button className="btn btn-sm bg-transparent border-none shadow-none h-9 ml-0 mr-2 text-[16px] hover:bg-[#eaeefe27] " style={{color:"black"}}>Region: {video.region} <FaRegFlag /></button>         
          <button className="btn btn-sm bg-black h-9  text-[16px]" style={{color:"white"}}>{video.digg_count} <FaRegHeart /></button>         
          <button className="btn btn-sm bg-transparent border-none shadow-none h-9 ml-2 text-[16px] hover:bg-[#eaeefe27] " style={{color:"black"}}>
            {video.play_count}
          <FaEye /> 
          </button></>)}
      </div>


      <div className="w-[60%] p-10 flex justify-center items-center text-center">
       
       {user && (<>
        <div className="mockup-phone">
          <div className="camera"></div> 
          <div className="display">
            <div className="artboard artboard-demo phone-1">
              <video className="w-[100%] h-[100%]" src={video.play} controls></video>
            </div>
          </div>
        </div>

       </>)}

      </div>
    </div>
  </div>
  </>)
}

export default CardDetails