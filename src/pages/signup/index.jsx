import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { initialValues, inputs } from './constants';
import InputGroup from '../../components/Input';
import validate from './validation';
import Button from '../../components/Button';
import { signupStore } from '../../utils/persistForm';
import { fetchUser } from '../../store/dispatchers/user';
import { signUp } from '../../utils/user';
import { setWarn } from '../../store/reducers/warn';

const Signup = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: signupStore.get() || initialValues,
    onSubmit: async ({ email, password }) => {
      try {
        await signUp({ email, password });
        signupStore.set(initialValues);
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
            signupStore.set(formik.values);
          }}
        />
      ))}
      <Button type='submit' content='Register' disabled={formik.isSubmitting} />
    </form>
  );
};

Signup.displayName = 'Sign up';

export default Signup;