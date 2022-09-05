import rotaPedidos from "./rotaPedidos.js"
import rotaProdutos from "./rotaProdutos.js"
import { express } from "../app.js"

const routes = (app) => {
    app.use(
        rotaPedidos,
        rotaProdutos
    )
    app.use('/uploads', express.static('uploads'))
}

export default routes