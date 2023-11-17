import Errorr from './img/code-error.png';
import {Link} from 'react-router-dom';
import './error.css';

export default function Error(){
    return(
        <div className='cont-erro'>
            <img src={Errorr} alt="error" width={250}/>
            <h1>Página não encontrada</h1>
            <Link to={'/'}>
                Voltar para Home!
            </Link>
        </div>
    );
}