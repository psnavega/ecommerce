import rotaPedidos from "./rotaPedidos.js"
import rotaProdutos from "./rotaProdutos.js"

const routes = (app) => {
    app.use(
        rotaPedidos,
        rotaProdutos
    )
}

export default routes