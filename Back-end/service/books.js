const fs = require("fs")

function getAllBooks() { // Parse é necessário para conseguirmos ler o que está guardado
    return JSON.parse(fs.readFileSync("books.json")) // A lógica de ler JSON e "parsear" o mesmo é do service
}

function getBookbyID(id) {
    const books = JSON.parse(fs.readFileSync("books.json"))

    //                     Sempre vai pegar a 1ª posição do array do filter
    filteredBook = books.filter(book => book.id === id)[0] //Compara o id recebi na função com o id do livro, se for igual, ele é armazenado na outra variável
    return filteredBook
}

function bookInsert(newBook) {
    const books = JSON.parse(fs.readFileSync("books.json"))
    const newBookArray = [...books, newBook]
    fs.writeFileSync("books.json", JSON.stringify(newBookArray))
}

function bookModify(modify, id){
    let books = JSON.parse(fs.readFileSync("books.json"))

    // Encontra o índice do livro que corresponde ao id fornecido
    const modifyIndex = books.findIndex(book => book.id === id);
    
    // Cria um novo objeto livro combinando as propriedades do livro existente com as modificações fornecidas
    const modifiedContent = {...books[modifyIndex], ...modify};
    
    /* 
        Quando uma requisição é feita, os valores fornecidos em 'modify' são combinados com os do objeto original,
        atualizando apenas os campos que foram passados na requisição.
    */

    books[modifyIndex] = modifiedContent // Adiciona no array as alterações feitas somente no indice

    fs.writeFileSync("books.json", JSON.stringify(books))
}

function bookDelete(id){
    let books = JSON.parse(fs.readFileSync("books.json"))

    const newBookArray = books.filter(book => book.id !== id)

    fs.writeFileSync("books.json", JSON.stringify(newBookArray))
}

module.exports = {
    getAllBooks,
    getBookbyID,
    bookInsert,
    bookModify,
    bookDelete
}