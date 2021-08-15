import { NavLink } from 'react-router-dom';
import './styles.css';

export const Navbar = (props) => {
    return <div className='navbar'>
        <NavLink to='/vaccine/astrazeneca' className='menu-item' activeClassName='active'>AstraZeneca</NavLink>
        <NavLink to='/vaccine/sputnikv' className='menu-item' activeClassName='active'>SPUTNIK V</NavLink>
        <NavLink to='/vaccine/verocell' className='menu-item' activeClassName='active'>Vero Cell</NavLink>
        <NavLink to='/vaccine/comirnaty' className='menu-item' activeClassName='active'>Comirnaty</NavLink>
        <NavLink to='/vaccine/moderna' className='menu-item' activeClassName='active'>Moderna</NavLink>
        <NavLink to='/vaccine/janssen' className='menu-item' activeClassName='active'>Janssen</NavLink>
    </div>
}