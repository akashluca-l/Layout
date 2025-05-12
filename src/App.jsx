import './App.css';
import Header from './Component/Header';
import { Outlet } from 'react-router';


    
const App = () => {
    return (
        <div>
            <Header/>   
                                        
            <Outlet/>
        </div>
    )
}

export default App