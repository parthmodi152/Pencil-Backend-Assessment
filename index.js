import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import searchRoutes from './routes/search.js'
import path from 'path'
import dotenv from 'dotenv'

const app = express();
dotenv.config()
const __dirname = path.resolve(path.dirname(''));

app.use(express.urlencoded({ extended: true }))
app.use(express.json({ extended: true }))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.use('/search', searchRoutes)


const CONNECTION_URL = process.env.CONNECTION_URL
const PORT = process.env.PORT || 5000;

mongoose
    .connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() =>
        app.listen(PORT, () =>
            console.log(`Server Running on Port: http:localhost:${PORT}`)
        )
    )
    .catch((err) => console.log(`${error}`))