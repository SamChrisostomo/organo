import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';

function App() {
    const times = [
        {
            nome: 'Programação',
            primary: '#57C278',
            secondary: '#D9F7E9'
        },
        {
            nome: 'Front-end',
            primary: '#82CFFA',
            secondary: '#E8F8FF'
        },
        {
            nome: 'Data Science',
            primary: '#A6D157',
            secondary: '#F0F8E2'
        },
        {
            nome: 'DevOps',
            primary: '#E06B69',
            secondary: '#FDE7E8'
        },
        {
            nome: 'UX e Design',
            primary: '#DB6EBF',
            secondary: '#FAE9F5'
        },
        {
            nome: 'Mobile',
            primary: '#FFBA05',
            secondary: '#FFF5D9'
        },
        {
            nome: 'Gestão e Inovação',
            primary: '#FF8A29',
            secondary: '#FFEEDF'
        }
    ]

    let colabs = JSON.parse(localStorage.getItem("itens")) || []

    const [colaboradores, setColaborador] = useState(colabs)

    const novoColaborador = (data) => {
        const existe = colabs.find(elemento => elemento.nome === data.nome)

        if (existe) {
            data.id = existe.id
            colabs[colabs.findIndex(e => e.id === existe.id)] = data
            console.log("Elemento Atualizado")
        } else {
            data.id = colabs[colabs.length - 1] ? (colabs[colabs.length - 1]).id + 1 : 0
            colabs = [...colaboradores, data]
            console.log("Eu fui executado?")
        }
        setColaborador(colabs)
        localStorage.setItem("itens", JSON.stringify(colabs))
    }

    const atualizaElemento = (data) => {

    }

    return (
        <div className="App">
            <Banner />
            <Formulario times={times.map(time => time.nome)} aoColaboradorAdicionado={event => novoColaborador(event)} />
            {times.map(time => <Time
                key={time.nome}
                nome={time.nome}
                primary={time.primary}
                secondary={time.secondary}
                colaborador={colaboradores.filter(data => data.time === time.nome)}
            />)}
            <Rodape />
        </div>
    );
}

export default App;
