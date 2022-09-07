import rotaPedidos from "./rotaPedidos.js"
import rotaProdutos from "./rotaProdutos.js"
import rotaUsuarios from "./rotaUsuarios.js"
import { express } from "../app.js"

const routes = (app) => {
    app.use(
        rotaPedidos,
        rotaProdutos,
        rotaUsuarios
    )
    app.use('/uploads', express.static('uploads'))
}

export default routes