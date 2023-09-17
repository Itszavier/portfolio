/** @format */

import style from "./style.module.css";
import discord from "../../assets/discord.png";
import insta from "../../assets/instagram.png";

export default function Contact() {
  return (
    <div className={style.content}>
      <div className={style.form_container}>
        <form className={style.form}>
          <h1 className={style.title}>Contact Me</h1>
          <div className={style.input_container}>
            <div className={style.input_wrapper}>
              <label htmlFor="name">name:</label>
              <input name="name" type="text" placeholder="Enter your name" />
            </div>

            <div className={style.input_wrapper}>
              <label htmlFor="email">email:</label>
              <input name="email" type="text" placeholder="Enter Your Email" />
            </div>
          </div>

          <div className={style.input_wrapper}>
            <label htmlFor="message">message:</label>
            <textarea name="message" placeholder="Write your message here." />
          </div>

          <div className={style.button_container}>
            <div className={style.other_methods}>
              <a className={style.link} href="#" target="_blank">
                <img src={insta} alt="image" width={45} height={45} />
              </a>
              <a href="#" className={style.link} target="_blank">
                <img src={discord} alt="image" width={45} height={45} />
              </a>
            </div>

            <button className={style.submit_btn}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

/**
 *  <div className={style.header}>
          <h1 className={style.title}>Contact Me</h1>
          <p className={style.text}>
            If you have any questions, comments, or inquiries, feel free to
            reach out to us using the form below.
          </p>
        </div>
 */
