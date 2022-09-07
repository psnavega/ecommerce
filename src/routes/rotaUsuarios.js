import express from "express"
import { cadastraUsuario, login } from "../controllers/usuarioController.js";

const router = express.Router();

router
    .post( "/usuarios/cadastro", cadastraUsuario )
    .post( "/usuarios/login",    login )

export default router