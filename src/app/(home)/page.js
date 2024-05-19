'use client'
import { FaArrowRight } from "react-icons/fa6";
import LoginButton from '../../../components/LoginButton';
import Link from "next/link";
import { useState, useEffect } from 'react';

function Home() {
  const [authCode, setAuthCode] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    setAuthCode(code);
    
  }, [authCode]);

  return (
    <><header className="flex items-center justify-between font-['DM Sans']">
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
      {authCode ? (
      <li style={{color:"black", opacity:"60%"}}>
        <Link href="/user/feed">Feed</Link>
      </li>
      ) : (
      <li className="md:ml-2">
        <LoginButton>Log in</LoginButton>
      </li>
      )}
    </ul>
  </div>
</header>

<div>
  <div className="hero min-h-screen" id="hero"
    style={{backgroundImage: 'url(https://i.ibb.co/jk0X5z9/Group-6.png)', objectFit:"cover"}}>
    <div className="text-center sm:text-left text-neutral-content max-w-[100%] md:mr-[50%]  mr-0">
      <div>
        <h1
          className="mb-5  lg:text-[80px] md:text-[50px] sx:text-[45px] text-[47px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#000000] to-[#001354] ">
          Find trending <br /> clothes</h1>
        <p
          className="mb-5 lg:text-[22px]  md:text-[17px] sm:text-[18px] text-[18px] text-transparent bg-clip-text bg-gradient-to-r from-[#000000] to-[#001354]">
          Celebrate the joy of finding new clothes <br /> in much easier way than ever before, <br /> from designers for
          clients</p>
        <LoginButton>Log in with tiktok</LoginButton>
        <button>
          <Link href="/#about"
            className="btn btn-sm bg-transparent border-none shadow-none h-9 ml-2 text-[16px] hover:bg-[#eaeefe27] "
            style={{color:"black"}}>Learn more
          <FaArrowRight />
          </Link>
          </button>
      </div>
    </div>
  </div>

  <div id="about" className="hero min-h-screen bg-[#FFFFFF] py-20">
    <div className="text-center text-neutral-content   mr-0">
      <div className="text-center text-neutral-content items-center" >
        <button className="btn btn-sm bg-transparent h-9 ml-2 text-[14px] hover:bg-transparent"
          style={{color:"black"}}>Find clothes for you </button>
        <h1
          className="mb-5  lg:text-[80px] md:text-[50px] sx:text-[45px] text-[47px] mx-[20px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#000000] to-[#001354]">
          Effective way to find clothes</h1>
        <p
          className="mb-5 md:mx-[180px] mx-[20px] lg:text-[22px]  md:text-[17px] sm:text-[18px] text-[18px]  text-transparent bg-clip-text bg-gradient-to-r from-[#000000] to-[#001354]">
          Discover the hottest fashion trends effortlessly with ViralClothes, the ultimate web app powered by
          cutting-edge machine learning technology. Dive into the world of TikTok&apos;s most viral videos.</p>
        
          <div className="flex  items-center justify-center ">
          <div className="cards md:flex  md:p-2 md:mt-[2.5rem]">
            <div className="card md:w-[31rem] md:h-[33rem] w-[20rem] h-[23rem] m-5 bg-[#FFFFFF] shadow-xl">
              <figure className="p-3 ">
                <img src="https://i.ibb.co/qpKL1qN/cube-helix-1.png" className="md:w-[70%] w-[70%]" />
              </figure>
              <div className="card-body items-center text-center  ">
                <h2 className="card-title text-black md:text-[26px] text-[23px]">Stay Fashionably Ahead</h2>
                <p className="text-black md:text-[16px] text-[13px]">Stay ahead in fashion effortlessly with ViralClothes. Discover the
                  latest TikTok trends powered by machine learning.</p>

              </div>
            </div>


            <div className="card md:w-[31rem] md:h-[33rem] w-[20rem] h-[23rem] m-5 bg-[#FFFFFF] shadow-xl  ">
              <figure className="md:p-3 pt-5">
                <img src="https://i.ibb.co/HG9fRp9/cube-h2elix-1.png" className="md:w-[70%] w-[56%]" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-black md:text-[26px] text-[23px]">Personalized Fashion Picks</h2>
                <p className="text-black md:text-[16px] text-[13px]">Elevate your fashion game carefully selected picks, tailored to your
                  unique taste by our advanced algorithm.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="hero min-h-screen" id="signup"
    style={{backgroundImage: 'url(https://i.ibb.co/gmbsT6L/Sign-up.png)', objectFit:"cover"}}>
    <div className="text-center text-neutral-content items-center" >
        <button className="btn btn-sm bg-transparent h-9 mb-2 text-[14px] hover:bg-transparent"
          style={{color:"black"}}>Make your life easier </button>
        <h1
          className="mb-5  lg:text-[80px] md:text-[50px] sx:text-[45px] text-[47px] mx-[20px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#000000] to-[#001354]">
          Join our community</h1>
        <p
          className="mb-5 md:mx-[180px] mx-[20px] lg:text-[22px]  md:text-[17px] sm:text-[18px] text-[18px]  text-transparent bg-clip-text bg-gradient-to-r from-[#000000] to-[#001354]">
          Are you always on the lookout for the latest fashion trends? Join our community by signing up for our app and stay ahead of the curve! Our app is your ultimate destination for finding trending clothes effortlessly. Here&apos;s why you should sign up now:</p>
          <LoginButton>Join our community now!</LoginButton>
    </div>
    
  </div>

</div>

    </>
  );
}
export default Home;
