import HomeInfoSegment from "@/components/Segments/HomeInfoSegment";
import HomePicture from "@/components/Segments/HomePicture";
import React from "react";

//!UVEK SPOLJNI DIV CONTAINER ZOBG PAGE LAYOUT

const Home = () => {
  //TODO: Carousel

  return (
    <div className="flex justify-center items-center flex-col space-y-3 w-screen">
      {/*//?About us*/}
      {/* ............ */}

      {/*//?Home Picture*/}
      <div className="flex w-5/6 h-2/3 bg-gray-400 rounded-md my-1">
        <HomePicture />
      </div>

      {/* //? Carousel with info and maybe links */}

      {/*//? cards */}
      <div className="flex">
        <HomeInfoSegment
          cards={[
            {
              title: "Flu Shot Clinics",
              description: "Nearest flu shot clinics",
              content: "This is sample content meant to be filled",
              footer: "LearnMoreButton",
            },
            {
              title: "Drug Testing Services",
              description: "All sorts of amazin services",
              content: "Sigma sigma on the wall",
              footer: "LearnMoreButton",
            },
          ]}
        />
      </div>
      {/* //? carousel */}
    </div>
  );
};

export default Home;
