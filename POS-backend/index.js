import express from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

const app = express();
dotenv.config();

const prisma = new PrismaClient();

const port = process.env.PORT || 4000;

app.post("/user/add", async (req, res) => {
    try{
        await prisma.admin.create({
            data: {
                username: "mazen",
                name: "elali",
                password: "11223344",
            },
        });
    }catch(err) {
        res.send(err)
    }
});

app.listen(port, () => {
    console.log(`app listen on ${port}`);
});
