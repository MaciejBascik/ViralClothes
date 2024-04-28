"use client"
import { useState, useEffect } from "react";
import getVideos from "@/app/api/fetch";

function Feed() {
    const [clothes, setClothes] = useState([
        { id: 1, name: "shirt", url: "https://th.bing.com/th/id/OIP.KH4lvMz48ta9w0s2pqLelwHaHa?rs=1&pid=ImgDetMain", type: "T-shirts", genre: "Streetwear", desc: "Ale spoko koszulka przewiewna eszkere" },
        { id: 2, name: "shirt", url: "https://th.bing.com/th/id/OIP.KH4lvMz48ta9w0s2pqLelwHaHa?rs=1&pid=ImgDetMain", type: "T-shirts", genre: "Streetwear", desc: "Ale spoko koszulka przewiewna eszkere" }
    ]);
    /*
    const [videos, setVideos] = useState([]);
    const [clothingCategories, setClothingCategories] = useState([]);
    const [clothingTypes, setClothingTypes] = useState([]);

    useEffect(() => {
        getVideos().then(response => {
            setVideos(response.data?.data?.videos);
        });
    }, []);

    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/SdXNbqQ/Rectangle-4.png)' }}>
                <div className="text-center text-neutral-content">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-center m-[100px] ">
                      
                        {clothes.map((e, index) => (
                            <div key={e.video_id} className="card  h-[25rem] bg-gradient-to-r from-[#000000] to-[#1c1f29] shadow-xl">
                                <figure>
                                    <img src={e.cover} className="w-full max-h-[15rem] object-cover" alt="Video Cover" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title flex justify-between items-center">
                                        <span>{e.author.nickname.slice(0, 6)}</span>
                                        <div className="badge badge-secondary bg-white border-white">🔥TOP</div>
                                    </h2>
                                    <p className="text-[15px] text-left">{e.title.slice(0, 28)}...</p>
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
        </div>
    );*/
}
export default Feed;