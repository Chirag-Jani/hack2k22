import React from "react";
import { Link } from "react-router-dom";

function NFTCard(props) {
  const { imgsrc, name, basePrice, location, nftPage } = props;
  return (
    <div className="">
      <div className="nft_top d-flex justify-content-evenly flex-wrap">
        <div
          className="w-100 p-4 m-4 rounded"
          style={{ border: "1px solid #00ffa3" }}
        >
          <img
            src={imgsrc}
            alt="nftImage"
            style={{ width: "200px", height: "fit-content" }}
            className="my-3"
          />
          <div className="nft_info d-flex flex-column">
            <span>
              Name: <h4>{name}</h4>
            </span>
            <span>
              Base Price: <h4>{basePrice}</h4>
            </span>
            <span>
              Location: <h4>{location}</h4>
            </span>
            <span>
              <a href="/" className="btn btn-primary p-2 mt-3">
                Buy Now
              </a>
              <Link to={nftPage} className="btn btn-primary p-2 mt-3 mx-2">
                Read More
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NFTCard;
