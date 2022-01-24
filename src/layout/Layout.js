import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "active-link" : undefined}>Home</NavLink></li>
                    <li><NavLink to="about" className={({ isActive }) => isActive ? "active-link" : undefined}>About</NavLink></li>
                </ul>
            </nav>
            <main><Outlet /></main>
            <footer>
                This is a footer!
            </footer>
        </>
    );
}

export default Layout;