import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import d from "./products.module.scss";

function Products({ set }) {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useSearchParams();
  let current = search.get("category");
  const [categs, setCategs] = useState([]);
  //product category

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategs(json));
  }, []);

  //product malumot

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${current}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, [current]);
  console.log(product);


  return (
    <div className={d.product}>
      <div className={d.wrap}>
        {categs?.map((c) => (
          <button onClick={() => setSearch({ category: c })}>{c}</button>
        ))}
      </div>

      <div className={d.cards}>
        {product?.map((p) => (
          <div className={d.card}>
            <p>{p.id}</p>
            <img src={p.image} alt="#" />
            <p>rate:{p.rating.rate}</p>
            <p>rate:{p.rating.count}</p>
            <p>{p.title}</p>
            <button><Link to={"/cald"}>comments</Link></button>
            <button onClick={() => set((e) => [...e, p])}>buy</button>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
