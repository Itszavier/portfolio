/** @format */

import style from "./style.module.css";

export default function Banner() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <h1>Imani Zavier Brown</h1>
        <h3>Student Athlete | Full-Stack Developer | Visionary</h3>
        <p>
          Join me on a journey from the courts to coding. I'm Imani Brown, a
          passionate student-athlete and expert in full-stack web development.
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
