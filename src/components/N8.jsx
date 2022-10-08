import React from "react";
import n8 from "./img/BeadWork.png";

function N8() {
  return (
    <div className="container-fluid w-50 m-auto p-5 my-5 text-center">
      <h1>Beadworks</h1>
      <img src={n8} alt="NFT Image" className="my-2" />
      <h3 className="text-start my-4">
        Location: Khambhat, Saurashtra, Rajkot, Bhavnagar, Amreli and Junagadh
      </h3>
      <h3 className="text-start my-4">Price: $333.33</h3>

      <h5 className="text-start">
        USD 5.4 billion in 2021 <br />
        annual growth rate (CAGR) of 8.9% from 2022 to 2025
      </h5>

      <h4 className="text-start my-4">Information:</h4>
      <p className="my-2 text-start">
        Beadwork, an art or craft form of Gujarat is created by joining 2-3
        beads together. Gujarat specialises in the art of beadwork on clothes as
        it enhances its appeal. Beads are used to create hanging chaklas,
        Indhonis, Mangal kalash, nariyal, artefacts, necklaces, bangles,
        earrings, ornaments, motifs, patterns and torans. Most native beadwork
        is created by the tribal community of Dahod, Vadodara and Panchmahals
        regions.
      </p>
      <h4 className="text-start my-4">Importance of it:</h4>
      <p className="my-2 text-start">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae corrupti
        repellat doloribus sunt fuga rem impedit, ab distinctio quam fugit
        accusantium sapiente alias sequi cupiditate voluptatum deleniti maxime
        ea reiciendis, odio commodi error asperiores, eum aut? Quod deserunt
        ipsam accusamus esse voluptatum aspernatur exercitationem, modi,
        eligendi atque corrupti voluptas maiores! Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Officiis corporis, alias quo sit earum,
        quos eaque nisi, a consequuntur quasi sapiente sint in! Voluptate
      </p>
      <p className="text-start mt-5 fw-bold">
        *Information verified by Govt. of Gujarat <br />
        <a href="">Click here</a> to know more
      </p>
      <a
        href="https://testnet.rarible.com/token/polygon/0x136499d84b9fc6cb28e9fa65031550ee68de03a5:16320856076916042070443614083576056097618560412501137809575957626053018468931?tab=overview"
        className="btn btn-primary my-2"
      >
        Purchase this NFT
      </a>
    </div>
  );
}

export default N8;
