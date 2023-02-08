import React from "react";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";

function Layout({ karzina, mode, theme, children }) {
  return (
    <div className={mode == "light" ? "light" : "dark"}>
      <Navbar karzina={karzina} theme={theme} mode={mode} />
      {children}
      <Footer/>
    </div>
  );
}

export default Layout;
