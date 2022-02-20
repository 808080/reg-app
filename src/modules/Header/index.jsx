import React, { useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { HeaderStyled } from './styled';
import { logOut } from '../../utils/user';
import { setUserError } from '../../store/reducers/user';

const Header = ({ routes, isLoggedIn }) => {
	const dispatch = useDispatch();
	const signOut = useCallback(async () => {
		const res = await logOut();
		if (res === 'ok') dispatch(setUserError());
	});

	return (
		<HeaderStyled>
			<nav className='nav'>
				{routes.map((route) => (
					<NavLink
						key={route.path}
						to={route.path}
						className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}
					>
						{route.element.displayName || route.element.name}
					</NavLink>
				))}
				{isLoggedIn ? (
					<button type='button' className='nav__link' onClick={signOut}>
						Log out
					</button>
				) : null}
			</nav>
		</HeaderStyled>
	);
};

export default Header;