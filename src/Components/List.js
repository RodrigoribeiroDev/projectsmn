import { useState } from 'react'
import './Style/List.css'


const Form = () => {

  const [inputValue, setInputValue] = useState([]);
  const [showValue, setShowValue] = useState('');
  const [iptMenu, setIptMenu] = useState('');

  const submit = () => {
    if (iptMenu === "") {
        alert("Preencha o campo!");
    } else {
        alert("Enviado com sucesso!");
        setIptMenu('');
    }
  };
  const handleClick = () => {
    setInputValue((prevInputValue) => [...prevInputValue, showValue])
    setShowValue('');
  }

  return (
    <div className='containerMain'>
        <div className='formFrontContainer'>
               
                  <h2 className='titleForm'>Tarefas a enviar:</h2>
                  <input className='iptList' 
                  type='text'
                  value={showValue}
                  onChange={(e) => ( setShowValue(e.target.value))}
                  placeholder='Digite uma tarefa com data' />

                  <button className='Btn'
                  onClick={handleClick}
                  >Adicionar</button>
                  
                  <p className='valueForm'>{handleClick}</p>
        
         <ul>
            {inputValue.map((item, index) => (
            <li key={index}>{item} <input type='date' /></li>
          ))}
         </ul>
        </div>
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
    </div>
    
  )
}

export default Form;