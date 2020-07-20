import React, {useState, useEffect} from 'react';

function Book(props){

    const [book, setBook] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

        const fetchData = async () => {
            const prova = props.match.params.id;
            const apiKey = 'AIzaSyDeTjhOpjfUrTFPxrJ1Pxf-2Tol0mboIA4';
            const rawData = await fetch("https://www.googleapis.com/books/v1/volumes?q="+prova+"&key="+apiKey);  
            const dataJson = await rawData.json();
            const data = dataJson.items;
            setBook(data);
        }

        return(
            <div className='whatPage'>
                    <div className='books'>
                        {book.map(book => (
                                <div className='bookselected' key={book.id}>
                                    <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}/>
                                    <div className='description' style={{marginLeft:'2%'}}>
                                        <h3>{book.volumeInfo.title}</h3>
                                        <h5>{book.volumeInfo.subtitle}</h5>
                                        <p>Autore: {book.volumeInfo.authors}</p>
                                        <p style={{marginTop:'2%'}}><b>Descrizione:</b> {book.volumeInfo.description}</p>
                                   </div>  
                                    <a href={book.volumeInfo.previewLink} target="blank"><button>Leggi un estratto</button></a>         
                                </div>
                        ))}
                    </div>
            </div>
          );
}
    
export default Book;