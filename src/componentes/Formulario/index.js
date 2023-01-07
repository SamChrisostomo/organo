import CampoTexto from "../CampoTexto"
import "./Formulario.css"

const Formulario = () => {
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto placeholder="Digite seu nome" label="Nome" />
                <CampoTexto placeholder="Digite seu Cargo" label="Cargo" />
                <CampoTexto placeholder="Informe o endereço da imagem" label="Imagem" />
            </form>
        </section>
    )
}

export default Formulario