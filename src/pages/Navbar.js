import Categories from "../components/Categories";
import { LogoIcon, Cart } from '../Icons/Icons';
import Currencies from "../components/Currencies";
import NavbarStyle from '../styles/PagesCss/Navbar.module.scss';

export default function Navbar()
{
    return (
        <header>
            <nav className={NavbarStyle.nav}>
                <Categories/>
            </nav>
            <aside className={NavbarStyle.LogoSection}>
                <LogoIcon/>
            </aside>
            <aside className={NavbarStyle.Cart}>
                <Currencies/>
                <Cart/> 
            </aside>            
        </header>
    )
}
