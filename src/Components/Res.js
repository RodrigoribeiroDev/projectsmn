import './Style/Res.css'
import List from '../Components/List';

const Res = () => {
  return (
    <div className='containerRes'>
      <form className='containerFormRes'>
        <h3>Bem vindo: José.</h3>
        <h4>Gerente de TI!</h4>
        <p>Gerir atividades:</p>
      </form>

    <div className='front'>
            <List />
    </div>
    </div>
  )
}

export default Res
