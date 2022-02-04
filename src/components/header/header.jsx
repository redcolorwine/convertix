import { NavLink } from 'react-router-dom';
import cmedia from './header.module.css'

const Header = (props) => {
    return (
        <div className={cmedia.header}>
            <h1>КонвертИкс</h1>
            <nav className={cmedia.hMenu}>
                <li><NavLink to='/finance'>Финансы</NavLink></li>
                <li><NavLink to='/math'>Математика</NavLink></li>
                <li><NavLink to='/health'>Здоровье</NavLink></li>
            </nav>
        </div>)
}

export default Header;