import React from "react";
import n3 from "./img/Patola.png";
import patoluPatan from "./img/patolu_patan.png";
import SubNFT from "./SubNFT";

function N3() {
  return (
    <div className="container-fluid w-50 m-auto p-5 my-5 text-center">
      <h1>Patola</h1>
      <img src={n3} alt="NFT Image" className="my-2" />
      <h3 className="text-start my-4">Location: Patan, Gujarat</h3>
      <h3 className="text-start my-4">Price: $333.33</h3>

      <h4 className="text-start my-4">Information:</h4>
      <p className="my-2 text-start">
        Patola, a double ikat (dyeing technique used to pattern textiles) woven
        saree made of silk, is one of the finest hand-woven saree produced in
        Gujarat. In this unique tie-dye technique, one can see identical
        patterns on both the sides of the fabric. There are primarily four
        patterns of Patola saree and all are created in Gujarat by the Salvi
        community. <br /> <br />
        Patola Shoes Pvt Ltd is an unlisted private company incorporated on 02
        September, 1998. It is classified as a private limited company and is
        located in North Delhi, Delhi. It's authorized share capital is INR
        20.00 lac and the total paid-up capital is INR 18.12 lac.
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
      {/* <a
        href="https://testnet.rarible.com/token/polygon/0x136499d84b9fc6cb28e9fa65031550ee68de03a5:16320856076916042070443614083576056097618560412501137809575957626053018468930?tab=overview"
        className="btn btn-primary my-2"
      >
        Purchase this NFT
      </a> */}

      <h3 className="text-start text-white my-5">
        Catagories to select NFT from:
      </h3>

      <div className="d-flex">
        <SubNFT
          typeImg={patoluPatan}
          typeName="Patan nu Patolu"
          typePrice="99.99"
          typeLink="https://testnet.rarible.com/token/polygon/0x136499d84b9fc6cb28e9fa65031550ee68de03a5:16320856076916042070443614083576056097618560412501137809575957626053018468940?tab=overview"
          typeLocation="Patan"
        />
      </div>
    </div>
  );
}

export default N3;
