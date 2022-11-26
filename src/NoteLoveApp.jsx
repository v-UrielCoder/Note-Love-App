import './styles.css'
import { useState } from 'react'
import { NewNote } from './NewNote'


export const NoteLoveApp = () => {

    const [notesLove, setnoteLove] = useState([])

    return(
        <div className="container-main">
            
            <header className='header-one'>
                <h1>Notas para mi novia hermosa</h1>
                <h3>Hola mi amor, hize esta app para ti para que puedas leer notitas lindas</h3>
            </header>

            <div className='container-notes'>
                {notesLove.map( ({id, nota}) => {
                    return <div className='container-note' key={id}>{nota}</div>
                })}
            </div>

            <NewNote 
                setnoteLove={setnoteLove}
                notesLove={notesLove}
            />

        </div>
    )
}

