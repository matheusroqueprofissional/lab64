const express = require('express');
const profile = require("./routes/profile");

const app = express();

app.use(express.json());

app.get("/", (req, res) => res.status(200).json({
    message: "página inicial"
}));

app.get("/about", (req, res) => res.status(200).json({
    message: "About"
}));

app.get("/hello", (req, res) => res.status(200).json({
    message: "olá mundo"
}));

app.use("/profile", profile);

app.use((req, res, next) => {
    res.status(404).json({
        error: "Rota não encontrada"
    });
});

const PORT = 3333;
app.listen(PORT, () => console.log("Executando servidor na porta", PORT));
