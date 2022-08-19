import express from "express"
import router from "./routes/rotaProdutos.js"
import cors from "cors"

const app = express();

app.use(express.json())

app.use(router);

app.use(cors())

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Escutando a porta ${port} normalmente`)
})
