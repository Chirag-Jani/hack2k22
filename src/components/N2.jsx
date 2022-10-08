import React from "react";
import n2 from "./img/handblock painting.png";

function N1() {
  return (
    <div className="container-fluid w-50 m-auto p-5 my-5 text-center">
      <h1>Hand Block Painting</h1>
      <img src={n2} alt="NFT Image" className="my-2" />
      <h3 className="text-start my-4">
        Location: Kutch district, Teracotta: Chotta Udaipur
      </h3>
      <h3 className="text-start my-4">Price: $333.33</h3>

      <h4 className="text-start my-4">Information:</h4>
      <p className="my-2 text-start">
        Gujarat, the oldest block printing centre in the world, is still the
        major producer of block prints. Twinkling stars in the clear sky,
        Egyptian tombs, patterns of abstracts and dense forest with beautiful
        colour combination are amongst the known block printing patterns.
        <br /> Following types of hand block prints are famous in Gujarat:
        <br />
        Ajarakh printing of Dhamadka and Ajarakhpur in Kutch
        <br />
        Matani-Pachedi or Kalamkari of Gujarat
        <br />
        Vegetable 'prints from Dessa, Ahmedabad and Kutch
        <br />
        'Batik' prints from Bhujpur, Mundra and Mandvi villages of Kutch
        'Saudagiri' Prints from Ahmedabad
        <br />
        Where to Find: Kutch, Ahmedabad, and Jamnagar Family Takes Hand Block
        Printing Global, Earns Rs 1.5 Crore/Year
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
        href="https://testnet.rarible.com/token/polygon/0x136499d84b9fc6cb28e9fa65031550ee68de03a5:16320856076916042070443614083576056097618560412501137809575957626053018468937?tab=overview"
        className="btn btn-primary my-2"
      >
        Purchase this NFT
      </a>
    </div>
  );
}

export default N1;
