import './invocador.css'

const Invocador= ({nome, lane, main, corDeFundo}) =>{
    return(<div className='invocador'>
            <div className='cabecalho' style={{backgroundColor:corDeFundo}}>
                <img src={main} alt={nome} />
            </div>

            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{lane}</h5>
            </div>
     </div>
    )
}

export default Invocador