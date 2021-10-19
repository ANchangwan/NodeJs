import express, { application } from "express";
import app from "./app";
import User from "./models/User";
import "./db";

const PORT = 4000;

const startServer = () =>{
    console.log(`start nodejs on port http://localhost:${PORT}/login`);
}

app.listen(PORT, startServer);
