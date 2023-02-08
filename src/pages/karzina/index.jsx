import React from "react";
import { Link } from "react-router-dom";
import d from "../products/products.module.scss";

function Karzina({ products }) {
  return (
    <div className={d.kar}>
      <div className={d.cards}>
        {products?.map((p) => (
          <div className={d.card}>
            <p>{p.id}</p>
            <img src={p.image} alt="#" />
            <p>rate:{p.rating.rate}</p>
            <p>rate:{p.rating.count}</p>
            <p>{p.title}</p>
            
            <button>
              <Link to={"/cald"}>comments</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Karzina;
