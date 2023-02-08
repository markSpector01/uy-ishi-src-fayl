import React, { useEffect, useState } from "react";
import { Link, NavLink, useSearchParams } from "react-router-dom";
import c from "./navbar.module.scss";

function Navbar({ karzina, mode, theme }) {
  

  let change = () => {
    theme((e) => (e == "light" ? "dark" : "light"));
  };

  return (
    <div className={c.navbar}>
      <header>
        <nav>
          <div className={c.logo}>
            <Link to={"/"}>Uomo</Link>
          </div>
          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>About</NavLink>
            </li>
            <li>
              <NavLink to={"/cald"}>Posts</NavLink>
            </li>
            <li>
              <NavLink to={"/products"}>Products</NavLink>
            </li>
            <li>
              <NavLink to={"/car"}>
                <i class="fa-solid fa-cart-shopping"></i>
                {karzina.length}
              </NavLink>
            </li>
            
            <button onClick={() => change()}>{mode}</button>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
