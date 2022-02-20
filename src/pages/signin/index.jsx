import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { initialValues, inputs } from './constants';
import InputGroup from '../../components/Input';
import validate from './validation';
import Button from '../../components/Button';
import { signinStore } from '../../utils/persistForm';
import { signIn } from '../../utils/user';
import { fetchUser } from '../../store/dispatchers/user';
import { setCurrentUser } from '../../utils/mockDB';
import { setWarn } from '../../store/reducers/warn';

const Signin = () => {
	const dispatch = useDispatch();

	const formik = useFormik({
		initialValues: signinStore.get() || initialValues,
		onSubmit: async (values) => {
			try {
				const user = await signIn(values);
				setCurrentUser(user);
				signinStore.set(initialValues);
				formik.resetForm();
				dispatch(fetchUser());
			} catch (error) {
				dispatch(setWarn(error.message));
			}
			return '';
		},
		validateOnChange: false,
		validateOnBlur: true,
		validate,
	});

	return (
		<form onSubmit={formik.handleSubmit}>
			{inputs.map(({ label, name, type }) => (
				<InputGroup
					key={name}
					label={label}
					name={name}
					type={type}
					value={formik.values[name]}
					touched={formik.touched[name]}
					error={formik.errors[name]}
					onChange={formik.handleChange}
					onBlur={(e) => {
						formik.handleBlur(e);
						signinStore.set(formik.values);
					}}
				/>
			))}
			<Button type='submit' content='Login' disabled={formik.isSubmitting} />
		</form>
	);
};

Signin.displayName = 'Sign in';

export default Signin;