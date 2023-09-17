/** @format */
import style from "./style.module.css";
import discord from "../../assets/discord.png";
import insta from "../../assets/instagram.png";

const socials = [
  {
    name: "instagram",
    icon: insta,
    link: "#",
  },

  {
    name: "discord",
    icon: discord,
    link: "#",
  },
];

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.wrapper}>
        <h3 className={style.title}>Infomation</h3>
        <ul className={` ${style.list}`}>
          <li className={style.text}>Author: Imani Brown</li>
          <li className={style.text}>
            This content is protected by copyright &copy; 2023{" "}
          </li>
        </ul>
      </div>

      <div className={style.wrapper}>
        <h2 className={style.title}>Socials</h2>
        <ul className={` ${style.list} ${style.social_wrapper} `}>
          {socials.map((data, index) => (
            <li key={index}>
              <a className={style.social_link} href={data.link} target="_blank">
                <img
                  className={style.image}
                  src={data.icon}
                  alt={data.name}
                  width={40}
                  height={40}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
