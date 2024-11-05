import './Style/Login.css'
import {useState} from 'react'
const Login = () => {
    const[ login, setLogin ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleChange = (e)=> {
        setLogin(e.target.value)
    }
    const handlePassword = (e)=> {
        setPassword(e.target.value)
    }
    const btn =() =>{
        if(login === '' || password === ''){
            alert('Preencha todos os campos!')
        } else{
            alert('Cadastrado com sucesso!')
            return;
        }
        
    }
  return (
    <div className='loginContainer'>
      
        <img src='/pngwing.com.png' 
        alt='image' 
        className='imageLogin'/>


      <form className='loginForm'>

        <p className='fontLogin'>Seu e-mail:</p>
        <input type='text'
        className='iptLogin'
        value={login}
        onChange={handleChange}
        placeholder='Digite seu e-mail' /> <br />

        <p className='fontLogin'>Sua senha:</p>
        <input type='password'
        value={password}
        onChange={handlePassword}
        className='iptLogin' 
        placeholder='Digite sua senha' /> <br /><br />

        <button className='btnLogin'
        onClick={btn}
        >Entrar</button>  
        <br />
        <button className='btnLogin'>Cadastrar</button>

      </form>

    
    </div>
  )
}

export default Login
