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

    const [colaboradores, setColaborador] = useState([])

    const novoColaborador = (e) => {
        setColaborador([...colaboradores, e])
        console.log(colaboradores)
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
