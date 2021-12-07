import { Request, Response } from "express";
import { Router } from "express";

const route = Router();
route.get("/get", (req: Request, res: Response) => {
  res.json({ message: "controller: get" });
});

export = route;
