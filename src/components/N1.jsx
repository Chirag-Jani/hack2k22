import React from "react";
import n1 from "./img/Clayart.png";

function N1() {
  return (
    <div className="container-fluid w-50 m-auto p-5 my-5 text-center">
      <h1>Clay Art</h1>
      <img src={n1} alt="NFT Image" className="my-2" />
      <h3 className="text-start my-4">
        Location: Kutch district, Teracotta: Chotta Udaipur
      </h3>
      <h3 className="text-start my-4">Price: $333.33</h3>

      <h4 className="text-start my-4">Information:</h4>
      <p className="my-2 text-start">
        Figures and toys made of clay and terracotta are an essential part of
        Indian pottery. Gujarati Dangi tribes pray and worship their own clay
        god. Clay figures and toys like horses, cows, bulls, and buffaloes are
        like the watermark of Gujarati art style. Contemporary Mud work is the
        other name given to the clay craft of Gujarat.
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

export default N1;
