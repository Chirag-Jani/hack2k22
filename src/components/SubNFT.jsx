import React from "react";

function SubNFT(props) {
  const { typeImg, typeName, typePrice, typeLink, typeLocation } = props;
  return (
    <div>
      <div className="card mx-3" style={{ width: "18rem" }}>
        <img src={typeImg} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{typeName}</h5>
          <p className="card-title">$ {typePrice}</p>
          <p className="card-title">From {typeLocation}</p>

          <a href={typeLink} className="btn btn-primary">
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default SubNFT;
