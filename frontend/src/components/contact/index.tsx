/** @format */

import style from "./style.module.css";
import discord from "../../assets/discord.png";
import insta from "../../assets/instagram.png";
import z, { ZodIssue } from "zod";
import { useState } from "react";
import { request } from "../../utils/axios";
import axios from "axios";
import Meta from "../meta";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<ZodIssue[]>([]);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formSchema = z.object({
      name: z
        .string({
          invalid_type_error: "Name must be a string",
          required_error: "Name is required but missing.",
        })
        .min(1, "Message must be at least 1 characters long."),

      email: z
        .string({
          invalid_type_error: "Message must be a string",
          required_error: "Email field is required but missing.",
        })
        .min(2, "Message must be at least 2 characters long.")
        .email(
          "Invalid email format. Please ensure you have the correct email format."
        ),
      message: z
        .string({
          invalid_type_error: "message must be a string",
          required_error: "Message is required but missing.",
        })
        .min(12, "Message must be at least 12 characters long."),
    });

    const validate = formSchema.safeParse({ name, email, message });

    setLoading(true);

    if (validate.success) {
      request
        .post("/contact-me", {
          name,
          email,
          message,
        })
        .then((res) => {
          setSuccessMessage(
            "Your message was sent successfully, thank you for contacting us"
          );
          if (error) {
            setError(null);
          }
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          if (successMessage) {
            setSuccessMessage(null);
          }
          if (axios.isAxiosError(err)) {
            if (err.response?.status === 429) {
              return setError(err.response.data);
            }
            setError(err.response?.data.message);
          } else {
            setError(
              "Sorry, a unexpected error occured developer has been notified"
            );
          }
        });
    } else {
      setErrors(validate.error.errors);
      setLoading(false);
    }
  };

  const getErrors = (field: string) => {
    const errorData = errors.find((error) => error.path.includes(field));

    return errorData ? (
      <small className={style.error}>{errorData.message}</small>
    ) : null;
  };

  return (
    <div className={style.content}>
      <Meta
        title="Imani Brown | Contact"
        description="imani brown contact information"
      />
      <div className={style.form_container}>
        <form className={style.form} onSubmit={handleSubmit}>
          <h1 className={style.title}>Contact Me</h1>
          <div className={style.input_container}>
            <div className={style.input_wrapper}>
              <label htmlFor="name">name:</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
                type="text"
                placeholder="Enter your name"
              />
              {getErrors("name")}
            </div>

            <div className={style.input_wrapper}>
              <label htmlFor="email">email:</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                type="text"
                placeholder="Enter Your Email"
              />
              {getErrors("email")}
            </div>
          </div>

          <div className={style.input_wrapper}>
            <label htmlFor="message">message:</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name="message"
              placeholder="Write your message here."
            />
            {getErrors("message")}
          </div>

          <div className={style.button_container}>
            <div className={style.other_methods}>
              <a
                className={style.link}
                href="https://www.instagram.com/itszavier_1/"
                target="_blank"
              >
                <img src={insta} alt="image" width={45} height={45} />
              </a>
              <a
                href="https://discord.gg/sKmfq7DU58"
                className={style.link}
                target="_blank"
              >
                <img src={discord} alt="image" width={45} height={45} />
              </a>
            </div>

            <button type="submit" className={style.submit_btn}>
              Submit {loading ? "..." : ""}
            </button>
          </div>

          {successMessage && (
            <div className={style.success_message}>
              <p className={style.message}>{successMessage}</p>
            </div>
          )}

          {error && (
            <div className={style.success_message}>
              <p className={style.error_message}>{error}</p>
            </div>
          )}
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
