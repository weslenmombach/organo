import Invocador from '../Invocador'
import './time.css'

const Time = (props) => {
    const css = { backgroundColor: props.corSecundaria }

    return(
        (props.invocadores.length > 0) && <section className='time' style={css}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='Invocadores'>
                {props.invocadores.map(invocador => <Invocador corDeFundo={props.corPrimaria} key={invocador.nome} nome={invocador.nome} lane={invocador.lane} main={invocador.main} />)}
            </div>
        </section>
    )
}

export default Time