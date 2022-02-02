import cmedia from './header.module.css'

const Header = (props) => {
    return (
        <div className={cmedia.header}>
            <h1>КонвертИкс</h1>
            <nav className={cmedia.hMenu}>
                <li><a href="">Финансы</a></li>
                <li><a href="">Здоровье</a></li>
                <li><a href="">Математика и Физика</a></li>
            </nav>
        </div>)
}

export default Header;