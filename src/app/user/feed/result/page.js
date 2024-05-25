"use client"
import { useState, useEffect } from "react";
import Link from "next/link";

import { getVideos } from "../../../../../lib/apiGetVideos";
import { useUser } from '@auth0/nextjs-auth0/client';
import LoginButton from "../../../../../components/LoginButton";
import { useSearchParams,useRouter  } from 'next/navigation'
import LoadingPage from "@/app/loading";

function Results() {
    const { user, error, isLoading } = useUser();
    const [videos, setVideos] = useState([]);
    const searchParams = useSearchParams();
    let search = searchParams.get("keywords");
    const router = useRouter();

    const handleDetails = (id) => {
      const resData = videos?.data?.videos.find(v => v.video_id === id);
      if (resData) {
        router.push(`/user/feed/result/${id}?video=${encodeURIComponent(JSON.stringify(resData))}`);
    } 
  };

  
                                                                             
    useEffect(() => {
              getVideos(search)
              .then(data => setVideos(data))
              .catch(error => console.error('Error:', error));


          
        }, []);
        

        if(isLoading) return <LoadingPage/>;
        if(error) return <h1>Error!</h1>;
    return (
    <div>
        <header className="flex items-center justify-between font-['DM Sans']">
            
            <div className="navbar bg-[#EAEEFE] flex flex-col md:flex-row">
                <div className="flex-1">
                    <Link href="/" className="btn btn-ghost text-[18px] md:ml-10 font-light" style={{color:"black"}}>made by
                    <span className="font-[600]">MaciejBaścik</span></Link>
                </div>

                <ul className="menu menu-horizontal px-2 text-[16px] mr-10">
                    <li style={{color:"black", opacity:"60%"}}>
                        <Link href="/#about">About</Link>
                    </li>
                    <li style={{color:"black", opacity:"60%"}}>
                        <Link href="/#features">Features</Link>
                    </li>
                    <li style={{color:"black", opacity:"60%"}}>
                        <Link href="/#help">Help</Link>
                    </li>
                    <li style={{color:"black", opacity:"60%"}}>
                        <Link href="/user/feed">Feed</Link>
                    </li>
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
        {user ? (
        <main className="main">
            <div className="hero min-h-screen bg-white">
                
                                      
                <div className="text-center text-neutral-content">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-center m-[80px]">



                        {videos?.data?.videos?.map((e, index) => (
                        <div key={index} className="card  h-[30rem] w-[16rem] bg-gradient-to-r from-[#000000] to-[#1c1f29] shadow-xl">
                            <figure>
                                <img src={e.ai_dynamic_cover} className="max-w-[100%] max-h-[500px]"   alt="Video Cover" />
                            </figure>
                            <div className="card-body p-[25px] ">
                                <h2 className="card-title flex justify-between items-center overflow-auto">
                                    <span>{e.author.nickname.slice(0, 6)}</span>
                                    {
                                        e.play_count > 100000 && (<div className="badge badge-secondary bg-white border-white">🔥TOP</div>)
                                    }
                                </h2>
                                <p className="text-[14px] text-left">{e.title.slice(0,40)}{e.title.length > 60 && ".."}</p>

                                <div className="flex flex-row mt-10">
                                <div className="card-actions flex-col   w-[70%] overflow-auto">
                                {(e.title.match(/#[a-zA-Z0-9_]+/g) || []).slice(0, 2).map((hashtag, index) => (<>
                                    <div key={index} className="badge badge-outline text-[11px] p-2">{hashtag}</div></>))}
                                                                       
                                </div>
                                <div className="card-actions flex-col 7 w-[30%]">
                                    <button className="btn glass justify-end min-h-[15px] min-w-[65px] text-[13px] text-center items-center" onClick={() => handleDetails(e.video_id)}>See <br/> more</button>
                                                                       
                                </div>


                                </div>
                            </div>
                        </div>
                        ))}

                        

                    </div>
                </div>
            </div>
        </main>
         ) : (
            <div className="hero min-h-screen" id="hero"
            style={{backgroundImage: 'url(https://i.ibb.co/jk0X5z9/Group-6.png)', objectFit:"cover"}}>
            <div className="text-center sm:text-left text-neutral-content max-w-[100%] md:mr-[50%]  mr-0">
              <div>
                <h1
                  className="mb-5  lg:text-[80px] md:text-[50px] sx:text-[45px] text-[47px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#000000] to-[#001354] ">
                  Please log in </h1>
                <p
                  className="mb-5 lg:text-[22px]  md:text-[17px] sm:text-[18px] text-[18px] text-transparent bg-clip-text bg-gradient-to-r from-[#000000] to-[#001354]">
                  Looks like you  wandered into the clothes wilderness <br /> without logging in, please log in by clicking button<br /> 
                  to continue your clothing adventure.</p>
                  {!user ? (<LoginButton>Log in with tiktok</LoginButton>) : (<button className="btn btn-sm bg-black h-9  text-[16px]" style={{color:"white"}}>You are logged in.</button>)}
                <button>
                  <Link href="/#about"
                    className="btn btn-sm bg-transparent border-none shadow-none h-9 ml-2 text-[16px] hover:bg-[#eaeefe27] "
                    style={{color:"black"}}>Learn more
                  </Link>
                  </button>
              </div>
            </div>
          </div>
            )}
</div>
    );
}
export default Results;