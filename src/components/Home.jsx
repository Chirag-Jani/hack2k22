import React from "react";
import { Link } from "react-router-dom";
import nftImage from "./img/nft.webp";

function Home() {
  return (
    <div className="containner text-center p-5 m-auto w-50 ">
      <img
        src={nftImage}
        alt=""
        style={{ width: "500px", height: "fit-content" }}
      />
      <h1 className="">Cultural Artifacts</h1>
      <p>
        A cultural artifact, or cultural artefact (see American and British
        English spelling differences), is a term used in the social sciences,
        particularly anthropology for anything created by humans which gives
        information about the culture of its creator and users. <br /> Artifact
        is the spelling in North American English; artefact is usually preferred
        elsewhere. <br /> <br /> Cultural artifact is a more generic term and
        should be considered with two words of similar, but narrower, nuance: it
        can include objects recovered from archaeological sites, i.e.
        archaeological artifacts, but can also include objects of modern or
        early-modern society, or social artifacts.
      </p>
      <Link className="btn btn-primary" to="/nfts">
        Visit Collection
      </Link>
    </div>
  );
}

export default Home;
