import React, { useState, useEffect } from "react";
import albumData from "../data/albumsData";
import imagesData from "../data/imagesData";

const PortfolioMenu = ({ selectedAlbum, setSelectedAlbum }) => {

  const [menuItems, setMenuItems] = useState(
    albumData.map((item, idx) => ({ label: item.name, active: idx === 0 }))
  );

  useEffect(() => {
    let activeAlbum = menuItems.find((item) => item.active === true)
    let albumToUpdate = imagesData.find((item) =>
      item.album === activeAlbum.label.toLowerCase().replace(/\s+/g, '-')
    );
    setSelectedAlbum(albumToUpdate);
  }, [menuItems]);

  const handleOnClickAlbum = (e) => {
    const albumName = e.target.name;
    const newMenuItems = menuItems.map((item) => {
      if (item.label === albumName) {
        return { ...item, active: true };
      } else {
        return { ...item, active: false };
      }
    });
    setMenuItems(newMenuItems);
    setSelectedAlbum(...newMenuItems.filter((item) => item.active === true));
  };

  return (
    <div className=" my-4 flex overflow-x-scroll gap-2 ">
      {menuItems.map((item, index) => (
        <button
          key={index}
          onClick={handleOnClickAlbum}
          name={item.label}
          className={`${
            item.active
              ? "focus:outline-none bg-gray-800 text-gray-100"
              : "hover:bg-gray-200 focus:outline-none bg-gray-100 text-gray-800"
          } inline-flex items-center px-6 py-2 rounded-full text-sm font-medium flex-shrink-0`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default PortfolioMenu;
