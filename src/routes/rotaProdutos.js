import express from "express"
import { getProduto, getProdutos, postProduto, patchProduto, deleteProduto } from "../controllers/produtoController.js"; 
import { upload } from "../middlewares/upload.js";
import { obrigatorio }  from "../middlewares/login.js";


const router = express.Router();

router
    .get(`/produtos`,                                                           getProdutos)
    .get(`/produtos/:id`,                                                       getProduto)
    .post(`/produtos`, obrigatorio ,upload.single('imagem_produto'),            postProduto)
    .patch(`/produtos/:id`, upload.single('imagem_produto'), obrigatorio,       patchProduto)
    .delete(`/produtos/:id`,                                                    deleteProduto)

export default router