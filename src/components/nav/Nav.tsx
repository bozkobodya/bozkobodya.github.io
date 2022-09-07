import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { NavItem } from './NavItem';
import { navLinks } from './constants';
 
export const Nav = () => {

    const location = useLocation();

    const currentPath = useMemo(() => (
        location.pathname
    ), [location.pathname]);

    return (
        <nav className='border-b'>
            <ul className='w-full h-full py-8 flex items-center justify-around'>
                {navLinks.map(navLink => (
                    <NavItem 
                        currentPath={currentPath} 
                        itemData={navLink} 
                        key={navLink.path} 
                     />
                ))}
            </ul>
        </nav>
    )
}