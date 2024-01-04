import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import'./Formulario.css'
import Botao from '../Botao'
import { useState } from 'react'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [lane, setLane] = useState('')
    const [main, setMain] = useState('')
    const [time, setTime] = useState('')


    const aoSalvar = (evento)=> {
        evento.preventDefault()
        props.aoInvocadorCadastrado({
            nome,
            lane,
            main,
            time,
        })
        setNome('')
        setLane('')
        setMain('')
        setTime('')
    }

    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
            <h2>Preencha os dados para ir a Summoner's Rift</h2>
            <CampoTexto
                 obrigatorio={true} 
                 label="Nome de Invocador" 
                 placeholder="Digite seu nome de invocador"
                 valor={nome}
                 aoAlterado={valor => setNome(valor)}
            />

            <CampoTexto 
                obrigatorio={true} 
                label="Lane"
                placeholder="Digite sua lane"
                valor={lane}
                aoAlterado={valor => setLane(valor)}
            />

            <CampoTexto 
                obrigatorio={true} 
                label="Imagem do Invocador"
                placeholder="Informe o link de sua imagem"
                valor={main}
                aoAlterado={valor => setMain(valor)}
            />

            <ListaSuspensa 
                obrigatorio={true} 
                label="Origem" 
                itens={props.times}
                valor={time}
                aoAlterado={valor => setTime(valor)}
            />
            <Botao> Invocar </Botao>
            </form>
        </section>
    )
}

export default Formulario