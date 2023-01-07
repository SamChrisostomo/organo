import "./CampoTexto.css"

const CampoTexto = (props) => {

    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input placeholder={props.placeholder} required={props.obrigatorio} onChange={evento => props.aoAlterado(evento.target.value)} value={props.valor} />
        </div>
    )
}

export default CampoTexto