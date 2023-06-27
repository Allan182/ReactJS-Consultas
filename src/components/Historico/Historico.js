import './Historico.css';

const Historico = (props) => {

    return (

        <section className='section-historico'>

            <p> Historico </p>

            {props.children}

        </section>

    );

}

export default Historico;