import React from "react";
import Image from "next/image";

const Masthehad: React.FC = () => {
    return (
        <div id="home" className=" mx-24 mb-10 bg-black flex flex-col items-center justify-center">

          <div className="pb-10 text-center">
            <h1 className="pb-4 text-white text-6xl font-bold">ÆR Global</h1>
            <p className="text-xl">We have made a new start.</p>
          </div>
          
          <div>
            <img src="assets/atlas.png" width="300" height="300"/>
          </div>

        </div>
    )
}
export default Masthehad