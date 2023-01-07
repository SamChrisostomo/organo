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

    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto placeholder="Digite seu nome" label="Nome" />
                <CampoTexto placeholder="Digite seu Cargo" label="Cargo" />
                <CampoTexto placeholder="Informe o endereço da imagem" label="Imagem" />
                <ListaSuspensa itens={time} label="Times" />
            </form>
        </section>
    )
}

export default Formulario