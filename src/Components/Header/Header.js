import { useEffect } from 'react';
import HeaderIcones from '../HeaderIcone/HeaderIcone';
import Logo from '../Logo/Logo';
import './Header.css'
import { useState } from 'react';

const Header = () => {
    
    function formataData (data) {
        const dia = data.getDate().toString().padStart(2,'0');
        const mes = (data.getMonth() + 1).toString().padStart(2,'0');
        const ano = data.getFullYear().toString();
        const hora = data.getHours().toString().padStart(2,'0');
        const minuto = data.getMinutes().toString().padStart(2,'0');

        return `${dia}/${mes}/${ano} ${hora}:${minuto}`;
    }

    const [varievelData, setData] = useState(formataData(new Date()));

    useEffect(() => {
        formataData(new Date())
    }, [varievelData]);

    return(
        <div className="head-container">
            <Logo></Logo>
            <button className="btn-hora" onClick={() => setData(formataData(new Date))}>Atualizar Horário</button>
            <div>{formataData(new Date())}</div>
            <HeaderIcones></HeaderIcones>
        </div>
    );

}

export default Header;