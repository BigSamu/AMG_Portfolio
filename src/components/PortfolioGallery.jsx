import React, { useRef, useState, useEffect } from "react";

import LightGallery from "lightgallery/react";

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";



const PortfolioGallery = ({ selectedAlbum, setSelectedAlbum }) => {
  const [preloaded, setPreloaded] = useState(false);

  useEffect(() => {
    const preloadImages = async () => {
      if (!selectedAlbum?.images) return;

      const imageUrls = selectedAlbum.images;

      try {
        const preloadPromises = imageUrls.map((imageUrl) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = resolve;
            img.onerror = reject;
            img.src = imageUrl;
          });
        });

        await Promise.all(preloadPromises);
        setPreloaded(true);
      } catch (error) {
        console.error("Image preloading error:", error);
      }
    };

    preloadImages();
  }, [selectedAlbum]);

  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  return (
    <>
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        mode="lg-fade"
        className = "flex flex-wrap"
      >
        {preloaded &&
          selectedAlbum?.images &&
          selectedAlbum?.images.map((src, index) => (
            <a key={index} href={src} className="inline-block m-1">
              <img src={src} alt="" className="h-48 object-cover" />
            </a>
          ))}
      </LightGallery>

    </>
  );
};

export default PortfolioGallery;
