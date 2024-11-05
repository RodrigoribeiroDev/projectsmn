import { useState } from 'react';
import './Style/Menu.css';

const IptMenu = () => {
    

    const [iptMenu, setIptMenu] = useState('');


    const submit = () => {
        if (iptMenu === "") {
            alert("Preencha o campo!");
        } else {
            alert("Enviado com sucesso!");
            setIptMenu(''); // Limpa o campo
        }
    };

    return (
        <div className='containerMenu'>
            <input
                type='text'
                value={iptMenu}
                onChange={(e) => setIptMenu(e.target.value)}
                placeholder='Digite o e-mail a enviar'
                className='iptMenu'
            />

            <button className='iptBtn' onClick={submit}>
                Enviar
            </button>
        </div>
    );
};

export default IptMenu;
