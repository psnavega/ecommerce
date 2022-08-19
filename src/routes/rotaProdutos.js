import express from "express"
import { getProduto, getProdutos, postProduto, patchProduto, deleteProduto } from "../controllers/produtoController.js"; 

const router = express.Router();

router
    .get(`/produtos`, getProdutos)
    .get(`/produtos/:id`, getProduto)
    .post(`/produtos`, postProduto)
    .patch(`/produtos/:id`, patchProduto)
    .delete(`/produtos/:id`, deleteProduto)

export default router