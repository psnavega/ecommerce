import mysql from "../config/mysql.js"

function getPedidos(req, res) {
    mysql.getConnection((error, conn) => {
        if(error) {return res.status(500).send({ error: error })}
        conn.query( 
            `        SELECT pedidos.id_pedido,
                            pedidos.quantidade,
                            produtos.id_produto,
                            produtos.nome,
                            produtos.preco  
                       FROM pedidos
                 INNER JOIN produtos
                         ON produtos.id_produto = pedidos.id_produto; `,
            (error, results) => {
                if(error) { return res.status(500).send({ error: error })}
                return res.status(200).send(results)
            }
        )
    })
}

function postPedidos(req, res) {
    mysql.getConnection((error, conn) => {
        if(error) { return res.status(500).send({ error: error })}
        conn.query(
            "INSERT INTO pedidos (id_produto, quantidade) VALUES (?,?);",
            [req.body.id_produto, req.body.quantidade],
            (error, resulnalts, fields) => {
                if( error ) { return res.status(500).send({ error: error })}
                return res.status(200).send({ response: results })
            }            
        )
    })
}

function deletePedido(req, res) {
    mysql.getConnection((error, conn) => {
        if(error) { return res.status(500).send({ error: error })}
        conn.query(
            "DELETE FROM pedidos WHERE id_pedido=?;",
            id_produto,
            (error, results,fields) => {
                if(error) { return res.status(500).send({error: error}) }
                if(results['affectedRows'] == 0) { return res.status(404).send({ error : "Produto não encontrado"})}
                return res.status(200).send({ response: "Produto deletado com sucesso"})
            }
        )
    })
}

export {
    getPedidos,
    postPedidos,
    deletePedido
}