import axios from "axios";
import { useEffect, useState } from "react";
import type { wafu } from "../components/utilities/localStorage.ts";

import ImageWafu from "../components/ImageWafu";

function Acceuil() {
  const [images, setImages] = useState<wafu[]>([]);
  const [start, setStart] = useState<number>(0);
  const size: number = 15;
  async function fetData() {
    console.log(start);
    const data: wafu[] = (
      await axios.get("https://backend-ten-wheat-53.vercel.app/api/wafu", {
        params: {
          size,
          debut: start,
        },
      })
    ).data;
    setStart((prevStart) => prevStart + size);

    return data;
  }
  async function loadMore() {
    let newWafu: wafu[] = [];
    try {
      newWafu = await fetData();
      console.log(newWafu);
    } catch (error) {
      console.log(error);
    }

    setImages([...images, ...newWafu]);
  }

  useEffect(() => {
    fetData()
      .then((data) => setImages(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    
        
    <div className=" flex flex-col">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-7">
            {images.length > 0 ? images.map((image) => {
                return <ImageWafu key={image.id + image.url } image={image} />;
            }) : 
            <div>
                <h1 className="h-screen w-screen flex align-middle justify-center">Aucun contenu appuiyer pour charger</h1>
            </div>
            }
        </div>
      <div className="w-screen text-center  bottom-0">
        <button type="button" onClick={loadMore} className="bg-green-500 py-4 px-5 mx-4 rounded-lg text-white">
            Load More
        </button>

      </div>
    </div>

  );
}

export default Acceuil;
