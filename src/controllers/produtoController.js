import mysql from "../config/mysql.js"

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
    mysql.getConnection((error, conn) => {
        if(error) { return res.status(500).send({ error: error })}
        conn.query(
            "SELECT * FROM produtos WHERE id_produto=?;",
            (req.params.id),
            (error, results, fields) => {
                conn.release()
                if(error) { return res.status(500).send({ error: error })}
                //if(!results.length) return res.status(404).send({ error: "Id do produto não encontrado"})
                return res.status(200).send({response: results})
            }
        )
    })

}
 
 
function postProduto(req, res) {
    mysql.getConnection((error, conn) => {
        if(error) {return res.status(500).send({ error: error })}
        conn.query(
            "INSERT INTO produtos (nome, preco) VALUES (?,?);",
            [req.body.nome, req.body.preco],
            (error, results, fields) => {
                conn.release()
                if(error) {return res.status(500).send({ error: error })}
                return res.status(200).send({ response: "Produto inserido com sucesso"}) 
            }
        )
    })
}

function patchProduto(req, res) {
    mysql.getConnection((error, conn) => {
        if(error) { return res.status(500).send({ error: error })}
        conn.query(
            "UPDATE produtos SET nome=?, preco=? WHERE id_produto=?",
            [req.body.nome, req.body.preco, req.params.id],
            (error, results, fields) => {
                conn.release()
                if(error) {return res.status(500).send({ error: error })}
                return res.status(200).send({ response: results})
            }
        )
    })
}

function deleteProduto(req, res) {
    mysql.getConnection((error, conn) => {
        if(error) { return res.status(500).send({ error: error })}
        conn.query(
            "DELETE FROM produtos WHERE id_produto=?",
            [req.params.id],
            (error, results, fields) => {
                conn.release()
                if(error) {return res.status(500).send({ error: error })}
                if(results['affectedRows'] == 0) { return res.status(404).send({ error : "Produto não encontrado"})}
                return res.status(200).send({ response: "Deletado com sucesso"})
            }
        )
    })
}

export {
    getProdutos,
    getProduto,
    postProduto,
    patchProduto,
    deleteProduto
}