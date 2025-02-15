import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {Outlet} from 'react-router-dom';
import './Layout.css';


export default function Layout() {
   
    return (
        <div className="wrapper">
         <Header/>
        <div className='container'>
         <Outlet/>
         </div>
         <Footer/>
        </div>
    )
}

