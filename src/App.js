import './App.css';
import { useState } from 'react';
import Form from './components/Formulario/Formulario';
import Historico from './components/Historico/Historico';
import Consulta from './components/Consulta/Consulta';

function App() {

  const [consultas, setConsulta] = useState([]);

  const submitar = () => {

    const obj = {
      id: consultas[consultas.length -1] ? consultas[consultas.length -1].id + 1  : 1,
      valor: document.querySelector(".input-campo").value
    }
    setConsulta([...consultas, obj]);
  }

  return (

    <div className="App">

      <Form enviar={submitar}/>

      <Historico> 

        {consultas.map(e => {
          return (<Consulta id={e.id} valor={e.valor}/>)
        }  ) }

      </Historico>

    </div>
  );
}

export default App;
