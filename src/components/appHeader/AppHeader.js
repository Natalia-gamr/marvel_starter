import { Link, NavLink } from 'react-router-dom';
import './appHeader.scss';

const AppHeader = () => {
    return (
        <header className="app__header">
            <h1 className="app__title">
                <Link to="/">
                    <span>Marvel</span> information portal
                </Link>
            </h1>
            <nav className="app__menu">
                <ul>
                <ul>
                    <li><NavLink end activestyle={{'color': '#9f0013'}} to="/">Characters</NavLink></li>
                    /
                    <li><NavLink end activestyle={{'color': '#9f0013'}} to="/comics">Comics</NavLink></li>
                </ul>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;