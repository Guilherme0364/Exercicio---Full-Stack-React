import { useState } from "react";
import Input from "../Input/index.jsx";
import './style.css';
import { books } from './searchData.js'

function Search() {

    const [query, setQuery] = useState([]) // A pesquisa é em cima de um Array  

  return (
    <section className="query">
      <h2 className="query-title">Já sabe por onde começar?</h2>
      <h3 className="query-subtitle">Encontre o livro na nossa estante</h3>
      <Input placeholder="Escreva sua próxima leitura"
        onBlur={ (e) => {
            const text = e.target.value // Texto digitado
            const result = books.filter( book => book.name.includes(text))
            setQuery(result)
        }}
      />
        {query.map( book => ( // Para cada livro pesquisado
        <div className="resultedBooks">
            <p>{book.name}</p>
            <img src={book.src}/>
        </div>
        ))}
    </section>
  );
}

export default Search;
