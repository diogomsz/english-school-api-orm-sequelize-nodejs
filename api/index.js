import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.get('/teste', (req, res) => {
    res.status(200).send({mensagem: "welcome to my api"})
});

app.listen(port, () => {
    console.log(`o servidor está rodando na porta ${port}`);
});

export default app;
