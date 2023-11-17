import './navbar.css';
import {Link} from 'react-router-dom';
export default function Navbar(){
    return(
        <div className='cont-nav'>
            <h1 className="logo">🍔HAMBÚRGUER DAY🍔</h1>
            <Link to={'/'}>Home</Link>
            <Link to={'/sobre'}>Sobre nós</Link>
            <Link to={'/cardapio'}>Cardápio</Link>
            <Link to={'pedidos'} className='p'>Pedidos</Link>
        </div>
    );
}