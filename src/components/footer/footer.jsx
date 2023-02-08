import React from "react";
import { Link } from "react-router-dom";
import f from "./footer.module.scss"

function Footer() {
  return (
    <footer className={f.foo}>
        <div className={f.sec1}>
            <Link to={"/"}>Uomo</Link>
            <a href="tel:+998333009649">tel:+998333009649</a>
            <a href="tel:+998333009649">tel:+998333009649</a>
        </div>
        <div className={f.sec2}>
            <a target={"_blank"} href="https://t.me/aziz_3007">Telegram</a>
            <a target={"_blank"} href="https://www.instagram.com/_aziz3007/">instagram</a>
            <a target={"_blank"} href="https://www.youtube.com/channel/UC6FRXg84_1OGeQxRXt2lt2g">youtube</a>
        </div>
    </footer>
  );
}

export default Footer;
