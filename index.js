import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://v2.jokeapi.dev/joke/any"

app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const result = await axios.get(API_URL);
        res.render("index.ejs", {
            joke: result.data.joke,
            setup: result.data.setup,
            delivery: result.data.delivery
        });
    } catch (error) {
        console.log(error.response.data);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});