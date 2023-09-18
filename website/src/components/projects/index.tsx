/** @format */
import style from "./style.module.css";

interface IProjectData {
  name: string;
  image: string;
  description: string;
  link: string;
  bot: boolean;
}

const projects: IProjectData[] = [
  {
    name: "SoundScript(Text To Speech)",
    description:
      "SoundScript is a Text To Speech website that allows you to convert text to speech and download it",
    link: "#",
    image: "https://i.ibb.co/mShmmsc/design11-01-generated.jpg",
    bot: false,
  },

  {
    name: "Senior7(s7)",
    description: `Meet S7, the reliable Utilities bot on Discord that runs 24/7. Our team of professional developers ensures that it is always well-maintained for optimal performance. `,
    link: "https://s7bot.onrender.com/",
    image: "https://i.ibb.co/Y0VbpSv/management-service.png",
    bot: false,
  },
];

export default function Projects() {
  return (
    <div className={style.container}>
      <h2 className={style.header}>Projects</h2>
      <div className={style.card_container}>
        {projects.map((data, index) => {
          return (
            <div className={style.card} key={index}>
              <img src={data.image} alt="image" className={style.image} />
              <div className={style.wrapper}>
                <h4 className={style.name}>{data.name}</h4>
                <p className={style.description}>{data.description}</p>
              </div>
              <div className={style.button_wrapper}>
                <a href="#" className={style.link}>
                  visit
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
