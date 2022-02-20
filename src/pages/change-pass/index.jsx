import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { initialValues, inputs } from './constants';
import Button from '../../components/Button';
import { changePassword } from '../../utils/user';
import validate from './validation';
import InputGroup from '../../components/Input';
import { setWarn } from '../../store/reducers/warn';

const ChangePass = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      try {
        const res = await changePassword(values);
        formik.resetForm();
        dispatch(setWarn(res));
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
          onBlur={formik.handleBlur}
        />
      ))}
      <Button type='submit' content='Submit' disabled={formik.isSubmitting} />
    </form>
  );
};

ChangePass.displayName = 'Change password';

export default ChangePass;