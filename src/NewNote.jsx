import './styles.css'
import { frases } from './data/frases'
import PropTypes, { object } from 'prop-types'


let notesUsed = []
const generarNumeroAleatorio = () => Math.floor(Math.random() * frases.length);

export const NewNote = ({setnoteLove, notesLove}) => {

    const addNewNote = () => {
        if(notesLove.length == frases.length) return

        let indexNota = generarNumeroAleatorio();

        if(notesLove.length > 0){
            let seAgregoNota = false

            while (!seAgregoNota) {

                if(notesUsed.includes(indexNota)) indexNota = generarNumeroAleatorio()
                else{
                    changeState(frases[indexNota], indexNota)
                    seAgregoNota = true;
                }
            }
        }else{
            changeState(frases[indexNota], indexNota);
        }
    }
    const changeState = ({id, nota } , indexNota) => {

        if(screen.width > 576){
            setnoteLove((notes)=>[...notes, {id,nota}])
            notesUsed.push(indexNota)
        }else{
            setnoteLove([{id, nota}])
        }
    }

    return(
        <div className='container-button'>
            <button onClick={addNewNote} className='button-add'>Mostar otra nota</button>
        </div>
    )
}

NewNote.propTypes = {
    setnoteLove: PropTypes.func.isRequired,
    notesLove: PropTypes.arrayOf(object).isRequired
}