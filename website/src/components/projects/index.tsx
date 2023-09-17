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
    name: "SoundScript(Text To Speech)",
    description:
      "SoundScript is a Text To Speech website that allows you to convert text to speech and download it",
    link: "#",
    image: "https://i.ibb.co/mShmmsc/design11-01-generated.jpg",
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
