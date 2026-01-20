import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/health", (req, res) => {
    res.status(200).send("Healthy...");
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
});