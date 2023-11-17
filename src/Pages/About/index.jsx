import {Link} from  'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';
import slogan from './img/slogan.jpg';
import './about.css';

export default function About(){
    return(
        <div className="cont-sobre">
          
          <div className="text">
                <Link to={'/'}>
                    <FiArrowLeft size={38} color='grey' />
                </Link>
                <h1 className='tt'>Sobre nós</h1>
                <img src={slogan} alt="slogan" width={200} />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ullam, sequi magnam molestiae a, quis, necessitatibus rem ipsam laboriosam alias accusamus voluptate iste beatae aperiam. Eum dignissimos iure obcaecati odit!</p>
          </div>
        </div>
    );
}