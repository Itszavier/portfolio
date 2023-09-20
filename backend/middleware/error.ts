/** @format */

import express from "express";

export default function errorHandler(
  err: any,
  req: express.Request,
  res: express.Response,
  next: any
) {
  if (err.statusCode) {
    res.status(err.code).json({
      success: false,
      message: err.message,
      code: err.statusCode,
      error: err,
    });
  } else {
    res.status(500).json({
      success: false,
      message: err.message,
      code: 500,
      error: err,
    });
  }
}
