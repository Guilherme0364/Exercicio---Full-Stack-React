const express = require("express");
const bookRoute = require("./routes/books.js"); 

const app = express();
app.use(express.json()) // Consegue receber JSON

app.use('/books', bookRoute); 

const port = 8000;

app.listen(port, () => {
    console.log("Listening on port: " + port);
});
