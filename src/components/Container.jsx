import React, { useState } from "react";
import SideBar from "./SideBar";
import imagen01 from '../images/Figura-de-acci-n-de-Marvel-x-man-Deadpool-figura-de-Anime-Deadpool-Joints-estatua-cl.jpg_.webp'
import imagen02 from '../images/domino.jpg'
import imagen03 from '../images/deadpoolcabledomino.jpg'
import imagen04 from '../images/Marvel-Legends-x-men-CABLE-figura-de-acci-n-Deadpool-2-pel-cula-exclusiva-juguetes-modelo.jpg_.webp'
import imagen05 from '../images/figuradeadpool.webp'

const Container = () => {

  const imagenes = [imagen01, imagen02, imagen03, imagen04, imagen05]
  const [currentImage, setCurrentImage] = useState(imagenes[0]);

  return (
    <>
      <div className="col-sm-2">
        <SideBar setCurrentImage={setCurrentImage} imagenes={imagenes} />
      </div>
      <div className="col-sm-10">
        <img className="img-thumbnail " src={currentImage} />
      </div>
    </>
  );
};

export default Container;