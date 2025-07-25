import Like from '../assets/like.svg';
import NotLike from '../assets/notlike.svg';
import Expend from '../assets/expend.svg';
import { useState } from 'react';
import type {  wafu } from './utilities/localStorage.ts';
import {  StoreData,getData } from './utilities/localStorage.ts';

interface dataProps  {
    image : wafu
}


function ImageWafu( { image }  : dataProps){
    let favoris : wafu[] = getData();
    const [like, setLike] = useState(isFavorite(image.id, image.url));


    function handleLike(){
        setLike((prev)=> {
            StoreData({name : "wafu", data : image, state: !prev})
            return !prev;
        });
    }
    function isFavorite(id : number, url : string) : boolean{
        for(let i = 0; i < favoris.length; i++){
            if(favoris[i].id == id && favoris[i].url == url) return true;
        }
        return false;
    }
      
    
    function fullScreen(){
        const link = document.createElement("a");
        link.href = image.url;
        link.download = image.url + image.id;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return (
        <div className="h-96  mb-8 mx-4 ">
            <img src={image.url} alt="une image d'une wafu" className=' rounded-md object-cover w-full h-full'/>
            <div className='relative bottom-3/4 flex justify-around'>
                <button>
                    <img src={like ? Like : NotLike} alt="like btn" className='w-8 ' onClick={handleLike}/>
                </button>
                <button>
                    <img src={Expend} alt="expend btn" className='w-8' onClick={fullScreen}/>
                </button>
            </div>
        </div>
    )
    
}
export default ImageWafu;
