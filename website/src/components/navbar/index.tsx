/** @format */
import { useState } from "react";
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
    <nav className={style.navbar}>
      <Link
        className={style.logo_wrapper}
        style={{ color: "white", textDecoration: "none" }}
        to="/"
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

      <ul className={`${style.link_container}  ${open ? style.open : ""}`}>
        <li>
          <Link to="/contact" className={style.link}>
            contact
          </Link>
        </li>
        <li>
          <a href="#" className={`${style.link} ${style.hire_me}`}>
            hire
          </a>
        </li>
      </ul>
    </nav>
  );
}
