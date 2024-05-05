/** @format */

import style from "./style.module.css";

export default function Banner() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <h2 style={{ textAlign: "center" }}>Coder, Athlete, Writer</h2>
        <p>
          Hello there! I'm a programmer, athlete, and avid writer, passionate
          about sharing my ideas with the world. Whether I'm coding, hitting the
          track or playing basketball, or penning down my thoughts, I thrive on
          expressing myself creatively and making an impact. Join me on my
          journey as I blend my love for technology, sports, and storytelling
        </p>
      </div>

      <div className={style.icons}>
        <img
          className={style.icon}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
        />

        <img
          className={style.icon}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
        />
        <img
          className={style.icon}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
        />

        <img
          className={style.icon}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        />

        <img
          className={style.icon}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        />
      </div>
    </div>
  );
}
