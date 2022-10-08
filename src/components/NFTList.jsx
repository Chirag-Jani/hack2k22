import React from "react";
import NFTCard from "./NFTCard";
import n1 from "./img/Clayart.png";
import n2 from "./img/handblock painting.png";
import n3 from "./img/Patola.png";
import n4 from "./img/Rabari Embroidery.png";
import n5 from "./img/tiediebandhani.png";
import n6 from "./img/Warli Painting.png";
import n7 from "./img/ZariWork.png";
import n8 from "./img/BeadWork.png";

function NFTList() {
  return (
    <div className="container mt-5 px-5 text-white rounded ">
      <h1 className="text-center mb-2">Cultural Artifacts of Gujarat</h1>
      <div className="d-flex flex-wrap">
        <NFTCard
          imgsrc={n1}
          name="Clay Art"
          basePrice="111"
          location="Kutch district,
          Teracotta: Chotta Udaipur"
          nftPage="/n1"
        />
        <NFTCard
          imgsrc={n2}
          name="Hand
          Block
          Printing"
          basePrice="111"
          location="Kutch, Ahmedabad, and Jamnagar"
          nftPage="/n2"
        />
        <NFTCard
          imgsrc={n3}
          name="Patola"
          basePrice="111"
          location="Patan, Gujarat"
          nftPage="/n3"
        />
        <NFTCard
          imgsrc={n4}
          name="Rabari Embriodery"
          basePrice="111"
          location="Arid areas of Gujarat"
          nftPage="/n4"
        />
        <NFTCard
          imgsrc={n5}
          name="Tie - dye – Bandhani"
          basePrice="111"
          location="Jamnagar, Mandvi and Bhuj"
          nftPage="/n5"
        />
        <NFTCard
          imgsrc={n6}
          name="Warli Painting"
          basePrice="111"
          location="Borders of Gujarat"
          nftPage="/n6"
        />
        <NFTCard
          imgsrc={n7}
          name="Zari"
          basePrice="111"
          location="Surat"
          nftPage="/n7"
        />
        <NFTCard
          imgsrc={n8}
          name="Beadwork"
          basePrice="111"
          location="Khambhat, Saurashtra, Rajkot.."
          nftPage="/n8"
        />
      </div>
    </div>
  );
}

export default NFTList;
