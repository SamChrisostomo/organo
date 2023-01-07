import Botao from "../Botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import "./Formulario.css"

const Formulario = () => {
    const time = [
        'Programação',
        'Front-end',
        'DevOps',
        'UX e Design',
        'Mobile',
        'Gestão e Inovação'
    ]

    const aoSalvar = (event) => {
        event.preventDefault()
        console.log("Form foi submetido")
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto obrigatorio={true} placeholder="Digite seu nome" label="Nome" />
                <CampoTexto obrigatorio={true} placeholder="Digite seu Cargo" label="Cargo" />
                <CampoTexto placeholder="Informe o endereço da imagem" label="Imagem" />
                <ListaSuspensa itens={time} label="Times" obrigatorio={true} />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario