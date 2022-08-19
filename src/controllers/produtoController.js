import express from "express"

const app = express()

function getProdutos(req, res) {
    return res.status(200).send('GET consumido com sucesso')
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