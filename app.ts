import { Request, Response } from "express";

const express = require("express");
const app = express();
const port = 5555;
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (_req: Request, res: Response) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`App listening @ http://localhost:${port}`);
});