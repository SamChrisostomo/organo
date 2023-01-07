import './time.css'

const Time = (props) => {
    return(
        <section className='time' style={{ backgroundColor: props.secondary }}>
            <h3 style={{borderColor: props.primary }}>{props.nome}</h3>
        </section>
    )
}

export default Time