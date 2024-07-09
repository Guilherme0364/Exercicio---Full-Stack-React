import './style.css';
import { books } from './releaseData';
import  Title  from '../Title/index.jsx'
import Suggestion from '../Suggestion/index.jsx';
import bookImg from '../../assets/livro2.png'

function LatestReleases() {
    return (
        <section className='releases'>
            <Title
                title="ULTIMOS LANÇAMENTOS"
            />
            <div className='newBooks'>
                {books.map(book => (
                    <img src={book.src} alt={book.name} key={book.id}/>
                ))}
            </div>
            {/* <Suggestion
                titulo="Talvez você se interesse por "
                subtitulo="Angular 11"
                descricao="Construindo uma aplicação com a plataforma Google"
                img={bookImg}
            /> */}
        </section>
    );
}

export default LatestReleases;
