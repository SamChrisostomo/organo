import './Rodape.css'

const Rodape = () => {
    return(
        <section className='rodape-global'>
            <ul>
                <li><img src='./imagens/fb.png' /></li>
                <li><img src='./imagens/tw.png' /></li>
                <li><img src='./imagens/ig.png' /></li>
            </ul>
            <img src='./imagens/logo.png' alt='Logomarca do organo' />
            <p>Desenvolvido por Samuel Crisóstomo</p>
        </section>
    )
}

export default Rodape