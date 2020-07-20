import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Home(){

    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('pioggia');

    useEffect(() => {
        fetchData();
    }, [query])

        const fetchData = async () => {
            const apiKey = 'AIzaSyDeTjhOpjfUrTFPxrJ1Pxf-2Tol0mboIA4';
            const rawData = await fetch("https://www.googleapis.com/books/v1/volumes?q="+query+"&key="+apiKey);  
            const dataJson = await rawData.json();
            const data = dataJson.items;
            console.log(data)
            setBooks(data);
        }

        const updateSearch = e=>{
            setSearch(e.target.value);
        }

        const getSearch = e=>{
            e.preventDefault();
            setQuery(search);
            setSearch('');
        }

        return(
        <div className='whatPage'>
            <div className='titlePage'>
              <h2>Benvenuto su MyLibrary</h2>  
            </div>
            <form  onSubmit={getSearch} className='search-form' style={{textAlign:'center', marginTop:'1%', background:'#DBD7BF'}}>
                <input className='search-bar' type="text" value={search} onChange={updateSearch}/>
                <button className='search-button' type='submit' style={{margin:'1%'}}>Cerca</button>
            </form>
                <div className='books'>
                    <p className='titleSearch'>La tua ricerca ha prodotto i seguenti risultati.
                        Ti suggeriamo di affinarla se ciò che cercavi non 
                        è nell'elenco</p><hr/>
                    {books.map(book => (
                            <div className='booksComplete' key={book.id}>
                                <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}/>
                                <div className='description'>
                                    <h3>{book.volumeInfo.title}</h3>
                                    <h5>{book.volumeInfo.subtitle}</h5>
                                    <p>Autore: {book.volumeInfo.authors}</p>
                                    <Link style={{textDecoration:'none', color:'blue'}} to={`/${book.id}`} key={book.id}>    
                                        <p>Info</p> 
                                    </Link>  
                               </div>  
                            </div>  
                    ))}
                </div>
        </div>
      );
}

export default Home;