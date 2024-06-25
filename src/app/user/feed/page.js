"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import getVideos from "../../../../pages/api/fetch";
import { useUser } from '@auth0/nextjs-auth0/client';
import LoginButton from "../../../../components/LoginButton";
import LoadingPage from "@/app/loading";
import LogoutButton from "../../../../components/LogoutButton";
function Feed() {
    const categories = [
        { id: 1, name: "Streetwear" },
        { id: 2, name: "Old money" },
        { id: 3, name: "Casual" },
        { id: 4, name: "Dark" },
    ];

    const clothesType = [
        { id: 1, name: "T-shirt" },
        { id: 2, name: "Hoodies" },
        { id: 3, name: "Pants" },
        { id: 4, name: "Jewelery" },
    ];
    const [keywords, setKeywords] = useState([])
    const { user, isLoading, error } = useUser() || {};
    if(isLoading) return <LoadingPage/>;
    if(error) return <h1>Error!</h1>;

    function redirectRequest() {
        window.location.href = `/user/feed/result?keywords=${keywords}`;

    }
    function handleSelect(category,number) {

        if ((keywords.length) < 2) {

        setKeywords(prevKeywords => [...prevKeywords, category]);
        document.getElementById(`btn${number}`).style.display="none";
        document.getElementById("message").innerText = 
        "You have selected " + category;
        }
        else {
            document.getElementById("message")
            document.getElementById("message").innerText = 
            "You selected max options!";
            document.getElementById("display").innerHTML="<h1 class='label-text font-black mt-5'>Thank you for providing information, redirecting to result page</h1><br/><span class='loading loading-ring loading-lg text-black'></span>"
            setTimeout(redirectRequest, 3000);

        }
    }

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
                        <div className="flex flex-col">
                    <li style={{color:"black", fontWeight:"500"}}>
                        <a>@{user.nickname}</a>
                    </li>
                    <li style={{color:"black", opacity:"60%"}}>
                    <LogoutButton>Log out</LogoutButton>
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
        <main className="flex min-h-screen">
            
        <label className="form-control w-full bg-white flex justify-center items-center" id="display">
                    <div className="label">
                        <span className="label-text font-black text-[20px]">Select clothes keywords related to you (choose 3)</span>
                    </div>
                
                    <div className="bg-white" >

                    {categories.map((e, index) => (

                        <button key={index} className="btn glass m-3" id={"btn" + (index+1)} onClick={() => handleSelect(e.name,e.id)}>{e.name}</button>


                    ))}
                    
                    

                    <div className="">
                    {clothesType.map((e, index) => (
                        <button key={index} className="btn glass m-3" id={"btn" + (index+5)} onClick={() => handleSelect(e.name,e.id+4)}>{e.name}</button>


                    ))}
                    <div className="toast toast-end ">
                        <div className="alert alert-info ">
                          <span id="message"></span>
                        </div>

                      </div>

                    </div>
                    </div>
                </label>

            

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
export default Feed;