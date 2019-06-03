import React from 'react';
import styled from 'styled-components';
import colors from '../../assets/colors';
import backgroundHeader from '../../assets/images/Bg_Header.png'
import useForm from '../../hooks/useForm';
import Button from '../Button';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${backgroundHeader});
  background-style: cover;
`;

const Label = styled.label`
  margin-bottom: 20px;
`;

const Input = styled.input`
  border: 1px solid ${colors.atlantis};
  border-radius: 25px;
  padding: 10px
  margin-left: 10px;
`;

const Select = styled.select`
  border: 1px solid ${colors.atlantis};
  padding: 50px
  margin-left: 10px;
`;

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
    <Form onSubmit={handleSubmit}>
      <Label>
        Name:
        <Input type="text" name="name" value={values.name} onChange={handleChange} />
      </Label>
      <Label>
        Surname:
        <Input type="text" name="surname" value={values.surname} onChange={handleChange} />
      </Label>
      <Label>
        Email:
        <Input type="text" name="email" value={values.email} onChange={handleChange} />
      </Label>
      <Label>
        Age:
        <Select name="age" value="-" onChange={handleChange}>
          <option value="-">-</option>
          {ages.map(age => <option key={age} value={age + 18}>{age + 18}</option>)}
        </Select>
      </Label>
      <Label>
        I have read and agree to the Terms and Conditions
        <Input
          name="terms"
          type="checkbox"
          checked={values.terms}
          onChange={handleChange} />
      </Label>

      <Button type="submit" primary text="Submit"/>
    </Form>
  );
}

export default LoginPage;
