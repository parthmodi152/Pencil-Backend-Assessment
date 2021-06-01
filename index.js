import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import searchRoutes from './routes/search.js'
import path from 'path'
import dotenv from 'dotenv'

// Configuring Express app
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json({ extended: true }))

dotenv.config()
const __dirname = path.resolve(path.dirname(''));

const CONNECTION_URL = process.env.CONNECTION_URL
const PORT = process.env.PORT || 5000;

// Routes

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.use('/search', searchRoutes)

// Connection to Mongo DB

mongoose
    .connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() =>
        app.listen(PORT, () =>
            console.log(`Server Running on Port: http:localhost:${PORT}`)
        )
    )
    .catch((err) => console.log(`${error}`))