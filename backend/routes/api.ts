/** @format */

import { Router } from "express";
import { z } from "zod";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
const rateLimit = require("express-rate-limit");

dotenv.config();

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      message: "welcome to the api routes",
    });
  } catch (error) {
    next(error);
  }
});

// Define the rate limit options
const rateLimitOptions = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 4, // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
};

// Apply rate limiting middleware
const limiter = rateLimit(rateLimitOptions);

router.post("/contact-me", rateLimit, async (req, res, next) => {
  try {
    const bodySchema = z.object({
      name: z
        .string({
          invalid_type_error: "name must be a string",
          required_error: "required field name was not provided",
        })
        .min(1, "Name must be a minmuim length of 1 are greater"),

      email: z
        .string({
          invalid_type_error: "email must be a string",
          required_error: "required field name was not provided",
        })
        .min(2, "Name must be a minmuim length of 2 are greater")
        .email("Please provide a valid email"),

      message: z
        .string({
          invalid_type_error: "message must be a string",
          required_error: "required field name was not provided",
        })
        .min(2, "Name must have a minmuim length of 2 are greater"),
    });

    bodySchema.parse(req.body);

    const body: z.infer<typeof bodySchema> = req.body;

    const tranporter = nodemailer.createTransport({
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      service: "hotmail",
    });

    const info = await tranporter.sendMail({
      // from: process.env.EMAIL_USER, // sender address
      to: "imanibrown421@gmail.com", // list of receivers
      subject: `(Personal Website contact you) - (${body.name})`, // Subject line
      text: `name:${body.name} - email: ${body.email},\n\n${body.message}`,
    });

    res.json({
      success: true,
      message: "Your message was successfully send, Thank you contacting me",
      data: info,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

export default router;
