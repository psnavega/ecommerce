import express from "express"
import mysql from "../config/mysql.js"

const app = express()

function getProdutos(req, res) {
    mysql.getConnection((error, conn) => {
        if(error) return res.status(500).send({ error : error })
        conn.query(
            `SELECT * FROM produtos`,
            (error, results, fields) => {
                if(error) {return res.status(500).send({ error: error })}
                return res.status(200).send({response: results})
            }
        )
    })
}

function getProduto(req, res) {
    const id = req.params.id

    return res.status(200).send(`GET consumido com sucesso, id: ${id}`)
}


function postProduto(req, res) {
    return res.status(200).send('post consumido com sucesso')
}


function patchProduto(req, res) {
    return res.status(200).send('PATCH consumido com sucesso')
}


function deleteProduto(req, res) {
    return res.status(200).send('DELETE consumido com sucesso')
}

export {
    getProdutos,
    getProduto,
    postProduto,
    patchProduto,
    deleteProduto
}