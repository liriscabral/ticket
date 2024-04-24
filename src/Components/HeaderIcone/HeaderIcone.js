import medico from './medico.svg';
import paciente from './paciente.svg';

const HeaderIcones = () => {

    return (
        <div>
            <img src={medico} alt="medico"></img>
            <img src={paciente} alt="paciente"></img>
        </div>
      

    );

}

export default HeaderIcones;