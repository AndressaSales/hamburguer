import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Pedidos from './Pages/Pedidos';
import Cardapio from './Pages/Cardapio';
import Error from './Pages/Error';

function Routess(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/sobre' element={<About />} />
                <Route path='/cardapio' element={<Cardapio />} />
                <Route path='/pedidos' element={<Pedidos />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Routess;