
import { useEffect, useState } from 'react';
import type { wafu} from '../components/utilities/localStorage.ts';
import {  getData } from '../components/utilities/localStorage.ts';


import ImageWafu from '../components/ImageWafu';

function Favoris(){
  const [images, setImages] = useState<wafu[]>([])
  useEffect(()=>{
    setImages(getData())
  },[])
  return (
        <>
          <h1 className="text-3xl">Favoris</h1>  

        <div className='w-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-7 absolute'>
            {
                images.map(image => {
                    return (
                        <ImageWafu key={image.id + image.url} image={image}/>
                    )
                })
            }
        </div>

        </>
    )
}


export default Favoris;
