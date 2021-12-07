"use strict";

import express, { Request, Response, Router } from "express";
import controller1Routes from "./routes/routes";

export const app = express();

const start = async () => {
  app.use("/v1", controller1Routes);

  return;
};

start();
