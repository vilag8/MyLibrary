import React from 'react';

function What(){
    return(
        <div className='whatPage'>
            <div className='titlePage'>
                <h2>Come funziona MyLibrary?</h2>
            </div>
            <p style={{padding:'5%'}}>MyLibrary è una libreria smart, sempre a tua disposizione.
                Che tu sia da smartphone o da pc non ti resta che utilizzare la Barra di ricerca 
                presente nella Home.
                i risultati della ricerca saranno tanto più precisi quante più parole avrai inserito 
                per individuare il prodotto. 
                MyLibrary recupera i dati direttamente da Google Books e grazie a questa combinazione
                potrai scegliere il tuo prossimo libro da leggere!
            </p>
        </div>
      )
}

export default What;