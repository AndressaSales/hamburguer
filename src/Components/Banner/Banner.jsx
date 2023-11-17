import logo from './img/logo.jpg';
import './banner.css';
import {Link} from 'react-router-dom';

export default function Banner(){
    return(
        <div className="cont-banner">
            <div className="cont">
                <img src={logo} alt="logo" width={350} />
                <h1>Lanches online simplificadas</h1>
                <p>Encomende seus lanches na Hambúrguer Day com nosso aplicativo fácil de usar e recebva seus produtos diretamente na sua porta.</p>
                <Link to={'/cardapio'}>Comece a comprar</Link>
            </div>
        </div>
    );
}