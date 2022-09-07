import express from "express"
import { cadastraUsuario } from "../controllers/usuarioController.js";

const router = express.Router();

router
    .post( "/usuarios/cadastro", cadastraUsuario )

export default router