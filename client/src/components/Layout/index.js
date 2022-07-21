import Navbar from '../Navbar';
import './index.scss';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="App">
            <Navbar />
            <div>
            <Outlet />
            </div>
        </div>
    )
}

export default Layout