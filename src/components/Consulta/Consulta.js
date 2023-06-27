import './Consulta.css';


const Consulta = (props) => {


    let date = new Date();

    return (

        <>
            <div className='div-consulta' >
                <p>  { `Consulta ${props.id} - Realizada às ${date} do ${props.valor}`} </p>
            </div>

        </>
    );

}

export default Consulta;