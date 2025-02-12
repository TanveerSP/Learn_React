import React, { useEffect, useState } from "react";

const RandomGIF = () => {
  const [gifUrl, setGifUrl] = useState(null);
  const [change, setChange] = useState(0)
  const API_KEY = "CvvrZ2tYO1QWemWm2Jba3B9d9T9wtZR3";

 const fetchGIF = async () => {
   try{

    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`)
    const data = await response.json();

    // check data is exist or not
    if(data.data && data.data.images && data.data.images.original){
      setGifUrl(data.data.images.original.url);
    } else {
      console.log("Error: invalid API response", data);
      setGifUrl(null);
    }

   } catch (error) {
    console.log("Error in fatching API", error);
    setGifUrl(null)
   }
 }

  useEffect(() => {
    fetchGIF();
  },[change])
  
  

  return (
  <div className="flex pb-42 flex-col items-center gap-y-5 max-w-md mx-auto mt-20">
     <h1 className="text-3xl font-bold">GIF Generator</h1>
     {gifUrl ?
     (<div className="flex flex-col items-center gap-y-4">
       <img 
       loading="lazy"
       className="rounded-3xl"
       src={gifUrl} alt="" />
       <button
       className="bg-gray-800 border-2 p-4 rounded-3xl"
       onClick={() => setChange((prev) => prev + 1)}
       >
        click for GIF's
       </button>
     </div>) 
     :(<p>Lodding.....</p>)}
  </div>);
};

export default RandomGIF;
