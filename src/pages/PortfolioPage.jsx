import React, { useState } from "react";
import Gallery from "../components/PortfolioGallery";
import PortfolioMenu from "../components/PortfolioMenu";

import under_construction from "/assets/under_construction.png";

const PortfolioPage = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  return (

    <div className="grid place-items-center min-h-[calc(100vh-4rem)] xl:min-h-screen p-5">
      <div className="flex items-center justify-center h-full w-full min-w-0">
        <div className="w-full h-full lg:w-px">
          <h1 className="mt-4 inline-block text-2xl font-bold font-press-start">
            Mi Portafolio
          </h1>
          <div className="w-full">
            <PortfolioMenu
              selectedAlbum={selectedAlbum}
              setSelectedAlbum={setSelectedAlbum}
            />
          </div>

          <div className="mb-10">
            <Gallery
              selectedAlbum={selectedAlbum}
              setSelectedAlbum={setSelectedAlbum}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
