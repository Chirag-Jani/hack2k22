import React from "react";
import n4 from "./img/Rabari Embroidery.png";

function N4() {
  return (
    <div className="container-fluid w-50 m-auto p-5 my-5 text-center">
      <h1>Rabari Embriodery</h1>
      <img src={n4} alt="NFT Image" className="my-2" />
      <h3 className="text-start my-4">Location: Arid areas of Gujarat</h3>
      <h3 className="text-start my-4">Price: $333.33</h3>

      <h4 className="text-start my-4">Information:</h4>
      <p className="my-2 text-start">
        Rabari embroidery is practiced by semi-nomadic Lohana community people
        in Banni. The objects that Lohana community embroiders highlight
        significant events, rites, and values of their lives. One can see the
        use of Rabari embroidery in garments, wall hangings, purses, pillows and
        Kothalo-the dowry sacks. Rabari embroideries reflect the primacy of
        children because it is said that the mirrors which are embellished on
        the embroidery guards kids against evil spirits that are believed to
        inhabit their world. <br />
        <br />
        Gujarat is a treasure trove of art and craft. The state is a paradise
        for those who are keen on shopping traditional products like clothes,
        kitchen utensils, silverware, purses, wooden frames, etc. With so many
        handicrafts options up for grab for tourists, Gujarat is soon going to
        be a shopper's paradise.
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
      <a href="" className="btn btn-primary my-2">
        Purchase this NFT
      </a>
    </div>
  );
}

export default N4;
