const { getAllBooks, getBookbyID, bookInsert, bookModify, bookDelete} = require("../service/books")

function getBooks(req, res) {
    try{
        const books = getAllBooks() // Guarda o retorno da função na variável
        res.send(books)
    } catch (error){
        res.status(500)
    }
}

function getBook(req, res) {
    try{
        const id = req.params.id // Esse id é o mesmo da rota "/:id"

        if(id && Number(id)){
            const book = getBookbyID(id) // Guarda o retorno da função na variável
            res.send(book) 
        } else{
            res.status(422) // Dado enviado é inconsistente com o que a operação espera
            res.send("Invalid id")
        }

    } catch (error){
        res.status(500)
    }
}

function postBook(req, res){
    try{
        const newBook = req.body

        if(req.body.nome){
            bookInsert(newBook)
            res.status(201)
            res.send("Book inserted with success")
        } else{
            res.status(422)
            res.send("Name value is required")
        }

    } catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function patchBook(req, res){
    try{
        const id = req.params.id

        if(id && Number(id)){
            const body = req.body
            bookModify(body, id)
            res.send("Book modyfied with success")
        } else{
            res.status(422) 
            res.send("Invalid id")
        }

    } catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function deleteBook(req, res){
    try{
        const id = req.params.id

        if(id && Number(id)){
            bookDelete(id) 
            res.send("Book deleted with success")
        } else{
            res.status(422) 
            res.send("Invalid id")
        }

    } catch(error){
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getBooks,
    getBook,
    postBook,
    patchBook,
    deleteBook
}