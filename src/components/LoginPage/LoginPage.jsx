import React, { useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import colors from '../../assets/colors';
import backgroundHeader from '../../assets/images/Bg_Header.png'
import useForm from '../../hooks/useForm';
import Button from '../Button';
import { AppContext } from '../../appContext';

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

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const LoginPage = (props) => {
  const { user, handleChange, handleSubmit } = useForm(
    {
      name: '',
      surname: '',
      email: '',
      age: 0,
      terms: false
    }
    , login);

    const {
      dispatch,
    } = useContext(AppContext);

  async function login() {
    let validInfo = true;
    if(user.name === ''){
      validInfo = false;
      alert('Completar nombre');
    }
    if(user.surname === ''){
      validInfo = false;
      alert('Completar apellido')
    }
    if(!validateEmail(user.email))
    {
      validInfo = false;
      alert('Completar email')      
    }
    if(user.email === '-' || user.email === 0){
      validInfo = false;
      alert('Completar apellido')
    }
    if(!user.terms){
      validInfo = false;
      alert('Aceptar términos y condiciones');
    }

    if(validInfo){
      try{
        const userResponse = await axios.post(`http://localhost:3000/sign_in`, { user });
        dispatch({ type: 'setUser', data: userResponse.data.user });
        dispatch({ type: 'singin'})
        props.history.push('/products');
      } catch (error){
        console.log(error)
      }
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name:
        <Input type="text" name="name" value={user.name} onChange={handleChange} />
      </Label>
      <Label>
        Surname:
        <Input type="text" name="surname" value={user.surname} onChange={handleChange} />
      </Label>
      <Label>
        Email:
        <Input type="text" name="email" value={user.email} onChange={handleChange} />
      </Label>
      <Label>
        Age:
        <Select name="age" value="-" onChange={handleChange}>
          <option value="-">{user.age || '-'}</option>
          {ages.map(age => <option key={age} value={age + 18}>{age + 18}</option>)}
        </Select>
      </Label>
      <Label>
        I have read and agree to the Terms and Conditions
        <Input
          name="terms"
          type="checkbox"
          checked={user.terms}
          onChange={handleChange} />
      </Label>

      <Button type="submit" primary text="Submit"/>
    </Form>
  );
}

export default LoginPage;
