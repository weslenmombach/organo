import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome:'Noxus',
      corPrimaria:'#47070F',
      corSecundaria:'#D6BDA9',
    },

    {
      nome:'Demacia',
      corPrimaria:'#17104F',
      corSecundaria:'#F1D194',
    },

    {
      nome:'Águas de Sentina',
      corPrimaria:'#17170D',
      corSecundaria:'#368440',
    },

    {
      nome:'Ilha das Sombras',
      corPrimaria:'#160E15',
      corSecundaria:'#1F7BC1',
    },

    {
      nome:'Ionia',
      corPrimaria:'#350D2C',
      corSecundaria:'#6D9EE6',
    }
  ]

const [invocadores, setInvocadores] = useState([])

const aoNovoInvocadorAdicionado = (invocador) => {
  debugger
  setInvocadores([...invocadores, invocador])
}

  return (
    <div className="App">
      <Banner/>
      {/*Aqui acima temos o import basicamente do Banner que esá na pasta de*/}
      <Formulario times={times.map(time => time.nome)} aoInvocadorCadastrado ={invocador => aoNovoInvocadorAdicionado(invocador)}/>

      {times.map(time => <Time 
        key ={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        invocadores={invocadores.filter(invocador => invocador.time === time.nome)}/>)
      }

    </div>
  );
}

export default App;