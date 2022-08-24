import { getPedidos, postPedidos, deletePedido } from "../controllers/pedidoController.js"
import express from "express"

const router = express.Router()

router
    .get("/pedidos", getPedidos)
    .post("/pedidos", postPedidos)
    .delete("/pedidos", deletePedido)

export default router