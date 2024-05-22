"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { getVideos } from "../../../../../lib/apiGetVideos";
import { useUser } from '@auth0/nextjs-auth0/client';
import LoginButton from "../../../../../components/LoginButton";


function Feed() {
    const { user, error, isLoading } = useUser();
    const [videos, setVideos] = useState([]);
    const [clothingCategories, setClothingCategories] = useState([]);
    const [clothingTypes, setClothingTypes] = useState([]);

    

                                                                                /*
    useEffect(() => {

              getVideos("streetwear")
              .then(data => setVideos(data))
              .catch(error => console.error('Error:', error));


          
        }, []);
        console.log(videos);

*/
    const [clothes, setClothes] = useState([
        { id: 1, name: "shirt", url: "https://th.bing.com/th/id/OIP.KH4lvMz48ta9w0s2pqLelwHaHa?rs=1&pid=ImgDetMain", type: "T-shirts", genre: "Streetwear", desc: "Ale spoko koszulka przewiewna eszkere" },
        { id: 2, name: "shirt", url: "https://th.bing.com/th/id/OIP.KH4lvMz48ta9w0s2pqLelwHaHa?rs=1&pid=ImgDetMain", type: "T-shirts", genre: "Streetwear", desc: "Ale spoko koszulka przewiewna eszkere" },
        { id: 3, name: "shirt", url: "https://th.bing.com/th/id/OIP.KH4lvMz48ta9w0s2pqLelwHaHa?rs=1&pid=ImgDetMain", type: "T-shirts", genre: "Streetwear", desc: "Ale spoko koszulka przewiewna eszkere" },
        { id: 4, name: "shirt", url: "https://th.bing.com/th/id/OIP.KH4lvMz48ta9w0s2pqLelwHaHa?rs=1&pid=ImgDetMain", type: "T-shirts", genre: "Streetwear", desc: "Ale spoko koszulka przewiewna eszkere" },
        { id: 5, name: "shirt", url: "https://th.bing.com/th/id/OIP.KH4lvMz48ta9w0s2pqLelwHaHa?rs=1&pid=ImgDetMain", type: "T-shirts", genre: "Streetwear", desc: "Ale spoko koszulka przewiewna eszkere" }

    ]);

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
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-center m-[100px]">



                        {clothes.map((e, index) => (
                        <div key={e.id} className="card  h-[25rem] bg-gradient-to-r from-[#000000] to-[#1c1f29] shadow-xl">
                            <figure>
                                <img src={e.url} className="w-full max-h-[15rem] object-cover" alt="Video Cover" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title flex justify-between items-center">
                                    <span>{/*e.author.nickname.slice(0, 6)*/}</span>
                                    <div className="badge badge-secondary bg-white border-white">🔥TOP</div>
                                </h2>
                                <p className="text-[15px] text-left">{/*e.title.slice(0, 28)*/}...</p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">{e.genre}</div>
                                    <div className="badge badge-outline">{e.type}</div>
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
export default Feed;