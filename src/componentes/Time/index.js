import Card from '../Card'
import './time.css'

const Time = (props) => {
    return(
       props.colaborador.length > 0 && <section className='time' style={{ backgroundColor: props.secondary }}>
            <h3 style={{borderColor: props.primary }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaborador.map(data => <Card key={data.nome} nome={data.nome} cargo={data.cargo} imagem={data.imagem} corFundo={props.primary} />)}
            </div>
        </section>
    )
}

export default Time