/** @format */
import { useState, useEffect } from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo2.jpg";

const CloseMenu = () => {
  return (
    <div className={style.menu}>
      <span className="material-icons">menu</span>
    </div>
  );
};

const OpenMenu = () => {
  return (
    <div className={style.menu}>
      <span className="material-icons">menu_open</span>
    </div>
  );
};

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className={`${style.navbar}`}>
      <Link
        className={style.logo_wrapper}
        style={{ color: "black", textDecoration: "none" }}
        to="/"
        onClick={() => {
          if (open) {
            setOpen(false);
          }
        }}
      >
        <img className={style.logo} src={logo} alt="logo" />
        <h3>Imani Brown</h3>
      </Link>

      <button
        className={style.menu_btn}
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? <OpenMenu /> : <CloseMenu />}
      </button>

      <div className={`${style.link_container}  ${open ? style.open : ""}`}>
        <Link onClick={() => setOpen(false)} to="/" className={style.link}>
          home
        </Link>

        <Link
          onClick={() => setOpen(false)}
          to="/contact"
          className={style.link}
        >
          contact
        </Link>
        <a
          onClick={() => setOpen(false)}
          href=" https://discord.gg/sKmfq7DU58"
          target="_blank"
          className={`${style.link} ${style.hire_me}`}
        >
          discord Server
        </a>

        {/* <a
          href="#"
          onClick={() => setOpen(false)}
          className={`${style.link} ${style.hire_me}`}
        >
          hire
      </a>*/}
      </div>
    </nav>
  );
}
