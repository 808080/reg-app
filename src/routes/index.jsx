import React from 'react';
import Signin from '../pages/signin';
import Signup from '../pages/signup';
import ChangePass from '../pages/change-pass'

export const loggedInRoutes = [
	{
		path: '/',
		element: ChangePass,
	},
];

export const loggedOutRoutes = [
	{
		path: '/',
		element: Signin,
	},
	{
		path: '/signup',
		element: Signup,
	},
];