import type { FC } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import type { TNavItemProps } from './Nav.types';

export const NavItem: FC<TNavItemProps> = ({ currentPath, itemData: { path, text } }) => (
    <li 
        className={classNames(
            'text-xl font-semibold border rounded-full p-4',
            { 'text-white bg-black': currentPath === path }
        )}>
            <Link to={path}>{text}</Link>
    </li>
)