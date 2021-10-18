import express, { application } from "express";
import app from "./app";

const PORT = 4000;

const startServer = () =>{
    console.log(`start nodejs on port http://localhost:${PORT}/login`);
}

app.listen(PORT, startServer);
