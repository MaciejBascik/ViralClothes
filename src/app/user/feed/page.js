"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { getUser } from '../../../../lib/apiClient';
import { getVideos } from "../../../../lib/apiGetVideos";
function Feed() {
    const [auth, setAuth] = useState(null);
    const [videos, setVideos] = useState([]);
    const [user, setUser] = useState([]);
    const [clothingCategories, setClothingCategories] = useState([]);
    const [clothingTypes, setClothingTypes] = useState([]);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const codeA = params.get("code");
        console.log(codeA);
    /*
        if (codeA) {
            getUser(codeA)
              .then(data => {
                setAuth(data.access_token);
                console.log(auth);
            
            })
              .catch(error => console.error('Error:', error));



              getVideos(auth)
              .then(data => setVideos(data))
              .catch(error => console.error('Error:', error));

              act.9ya8HK18VxQlqVRUgQKGlO5N5o7WOWb4KW9puLtDIUFU3e49p8w5hEp5DuYq!5934.e1
          }*/
        }, []);



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
                    
                </ul>

            </div>
        </header>

        <main className="main">
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/SdXNbqQ/Rectangle-4.png)'}}>
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
</div>
    );
}
export default Feed;