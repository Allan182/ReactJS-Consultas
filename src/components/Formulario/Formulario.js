
import Botao from '../Botao/Botao';
import Campo from '../Campo/Campo';
import './Formulario.css';

const Form = (props) => {

    const submitForm = (event) => {
        event.preventDefault();
        props.enviar();
    }
    
    return (

        <form className='form' onSubmit={submitForm}>
            <Campo/>
            
            <Botao/>

        </form>

    );

}

export default Form;