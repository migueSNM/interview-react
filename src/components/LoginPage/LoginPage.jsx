import React from 'react';
import useForm from '../../hooks/useForm';

const ages = [...Array(50).keys()];

const LoginPage = () => {
  const { values, handleChange, handleSubmit } = useForm(
    {
      name: '',
      surname: '',
      email: '',
      age: 0,
      terms: false
    }
    , login);

  function login() {
    //  TODO validar datos
    //  TODO post de usuario si los datos son válidos y dirigir a /products
    //  TODO redirigir a logging si los datos no son válidos
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
      <label>
        Age:
        <select name="age" value="-" onChange={handleChange}>
          <option value="-">-</option>
          {ages.map(age => <option key={age} value={age + 18}>{age + 18}</option>)}
        </select>
      </label>
      <label>
        I have read and agree to the Terms and Conditions
        <input
          name="terms"
          type="checkbox"
          checked={values.terms}
          onChange={handleChange} />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}

export default LoginPage;
