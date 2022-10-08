import React from "react";
import n6 from "./img/Warli Painting.png";

function N6() {
  return (
    <div className="container-fluid w-50 m-auto p-5 my-5 text-center">
      <h1>Borders of Gujarat</h1>
      <img src={n6} alt="NFT Image" className="my-2" />
      <h3 className="text-start my-4">Location: Borders of Gujarat</h3>
      <h3 className="text-start my-4">Price: $333.33</h3>

      <h4 className="text-start my-4">Information:</h4>
      <p className="my-2 text-start">
        Warli Painting is a tribal art done by the tribes nestled in the border
        area of Gujarat. Through these paintings, tribes express their beliefs,
        traditions and customs. The whims and moods of tribal life make for
        interesting themes, which is why Warli Paintings are much more than
        designs on walls they are authentic depictions of a way of life.
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

export default N6;
