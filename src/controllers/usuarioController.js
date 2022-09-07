import mysql from "../config/mysql.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

function cadastraUsuario(req, res) {
    mysql.getConnection((error, conn) => {
        if(error) { return res.status(500).send({ error: error })}
        conn.query(
            "SELECT * FROM usuarios WHERE email = ?",
            [
                req.body.email
            ],
            (error, results) => {
                if( error ) {return res.status(500).send({ error: error })}
                if( results.length > 0) { return res.status(409).send({ mensagem: "Usuário já cadastrado"})}
                else {
                    bcrypt.hash(req.body.senha, 10, (errBcrypt, hash) => {
                        if(errBcrypt) { return res.status(500).send({ error: errBcrypt })}
                        conn.query(
                            `INSERT INTO usuarios (email, senha) VALUES(?,?);`,
                            [
                                req.body.email,
                                hash
                            ],
                            (error, results) => {
                                conn.release();
                                if( error ) { return res.status(500).send({ error: error.message })}
                                const response = {
                                    mensagem: "Usuário criado com sucesso",
                                    usuarioCriado: {
                                        id_usuario: results.insertId,
                                        email: req.body.email
                                    }
                                }
                                return res.status(201).send(response)
                            }
                        )
                    }) 
                }
            } 
        )
    })
}

function login(req, res) {
    mysql.getConnection((error, conn) => {
        if(error) {return res.status(500).send({ error : error })}
        conn.query(
            "SELECT * FROM usuarios WHERE email=?",
            [
                req.body.email
            ],
            (error, results ) => {
                conn.release()
                if(error) {return res.status(500).send({ error: error })}
                if(results.length < 1 ) { return res.status(404).send({ mensagem: "Falha na autenticação"}) }
                bcrypt.compare(req.body.senha, results[0]['senha'], (error, results) => {
                    if(error) { 
                        return res.status(401).send({ mensagem: "Falha na autenticação"})
                    }
                    if(results) { 
                        let token = jwt.sign({
                            id_usuario: results.id_usuario,
                            email: results.email,

                        }, 
                        process.env.JWT_KEY,
                        {
                            expiresIn: "1h"
                        })
                        return res.status(200).send({ 
                            mensagem: "Autenticado com sucesso",
                            token: token
                        })
                    }
                    return res.status(401).send({ mensagem: "Falha na autenticação"})
                })
            }
        )
    })
}

export {
    cadastraUsuario,
    login
}