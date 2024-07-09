import './style.css';

function Suggestion({ titulo, subtitulo, descricao, img }) {
    return (
        <div className='suggestion'>
            <div className='suggestion-text'>
                <h3 className='suggestion-title'>{titulo}</h3>
                <h4 className='suggestion-subtitle'>{subtitulo}</h4>
                <p className='suggestion-description'>{descricao}</p>
            </div>
            <img className='suggestion-img' src={img} alt="Book" />
            <button className='suggestion-btn'>Saiba mais</button>
        </div>
    );
}

export default Suggestion;
