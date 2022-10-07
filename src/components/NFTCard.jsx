import React from "react";
import { Link } from "react-router-dom";
import NFTInfo from "../JSON/NFTCardInfo.json";

function NFTCard() {
  return (
    <div className="container mt-5 p-5 bg-dark text-white">
      <h1 className="text-center mb-5">NFT Title</h1>
      <div className="nft_top d-flex justify-content-evenly flex-wrap">
        {NFTInfo.map((nft) => {
          return (
            <div className="w-25 border p-5 m-4">
              <img src="" alt="nftImage" />
              <div className="nft_info d-flex flex-column">
                <span>
                  Name: <h4>{nft.name};</h4>
                </span>
                <span>
                  Base Price: <h4>{nft.basePrice};</h4>
                </span>
                <span>
                  Location: <h4>{nft.location};</h4>
                </span>
                <span>
                  <a href="/" className="btn btn-primary p-2 mt-3">
                    Buy Now
                  </a>
                  <Link
                    to={nft.nftPage}
                    className="btn btn-primary p-2 mt-3 mx-2"
                  >
                    Read More
                  </Link>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NFTCard;
