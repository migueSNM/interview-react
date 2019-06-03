import React from 'react';
import useForm from '../../hooks/useForm';

const LoginPage = () =>  {
  const { values, handleChange, handleSubmit } = useForm(
    {
      name: '',
      surname: '',
      email: ''
    }
    ,login);

  function login() {
    console.log(values);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={values.name} onChange={handleChange} />
      </label>
      <label>
        Surname:
        <input type="text" name="surname" value={values.surname} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="text" name="email" value={values.email} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button> 
    </form>
  );
}

export default LoginPage;
