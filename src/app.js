import express from "express"
import router from "./routes/rotaProdutos.js"

const app = express();

app.use(router);

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Escutando a porta ${port} normalmente`)
})