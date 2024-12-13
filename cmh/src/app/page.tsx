import HomeInfoSegment from "@/components/Segments/HomeInfoSegment";
import HomePicture from "@/components/Segments/HomePicture";
import React from "react";

//!UVEK SPOLJNI DIV CONTAINER ZOBG PAGE LAYOUT

const Home = () => {
  return (
    <div className="flex justify-center items-center flex-col space-y-3 w-screen">
      {/*//?About us*/}
      {/* ............ */}

      {/*//?Home Picture*/}
      <div className="flex w-5/6 h-full bg-gray-400 rounded-md my-1">
        <HomePicture />
      </div>

      {/* //? Carousel with info and maybe links */}

      {/*//? cards */}
      <div className="flex">
        <HomeInfoSegment />
      </div>
      {/* //? carousel */}
    </div>
  );
};

export default Home;
