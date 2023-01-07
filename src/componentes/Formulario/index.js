import { useState } from "react"
import Botao from "../Botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import "./Formulario.css"

const Formulario = (props) => {
    
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (event) => {
        event.preventDefault()
        props.aoColaboradorAdicionado({
            nome,
            cargo,
            imagem,
            time
        })
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto obrigatorio={true} placeholder="Digite seu nome" label="Nome" valor={nome} aoAlterado={valor => setNome(valor)} />
                <CampoTexto obrigatorio={true} placeholder="Digite seu Cargo" label="Cargo" valor={cargo} aoAlterado={valor => setCargo(valor)} />
                <CampoTexto placeholder="Informe o endereço da imagem" label="Imagem" valor={imagem} aoAlterado={valor => setImagem(valor)} />
                <ListaSuspensa itens={props.times} label="Times" obrigatorio={true} valor={time} aoAlterado={valor => setTime(valor)} />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario