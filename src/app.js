import express from "express"
import cors from "cors"
import routes from "./routes/index.js"

const app = express();

app.use(express.json())

app.use(cors())

routes(app)

const port = process.env.PORT || 8087;

app.listen(port, () => {
    console.log(`Escutando a porta ${port} normalmente`)
})

export {
    express
}