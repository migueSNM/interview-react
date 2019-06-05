import React, { useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import colors from '../../assets/colors';
import backgroundHeader from '../../assets/images/Bg_Header.png'
import useForm from '../../hooks/useForm';
import Button from '../Button';
import { AppContext } from '../../appContext';

const Header = styled.h1`
  color: ${colors.atlantis}
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${backgroundHeader});
  background-style: cover;
  font-size: 80%;
`;

const Input = styled.input`
  border: 1px solid ${colors.atlantis};
  border-radius: 25px;
  padding-left: 20px;
  width: ${props => props.type === 'text' ? '270px' : 'auto'};
  height: ${props => props.type === 'text' ? '44px' : 'auto'};
  margin-bottom: 20px;
`;

const Select = styled.select`
  border: 1px solid ${colors.atlantis};
  background-color: transparent;
  height: 44px;
  width: 62px;
  margin-bottom: 20px;
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
    if(user.age === 'Age' || user.age === 0){
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
      <Header>Hi!</Header>
        <Input type="text" name="name" placeholder="Name" value={user.name} onChange={handleChange} />
        <Input type="text" name="surname" placeholder="Surname" value={user.surname} onChange={handleChange} />
        <Input type="text" name="email" placeholder="Email"value={user.email} onChange={handleChange} />
        <Select name="age" value="Age" onChange={handleChange}>
          <option value="">{user.age || 'Age'}</option>
          {ages.map(age => <option key={age} value={age + 18}>{age + 18}</option>)}
        </Select>
      <label>
        <Input
          name="terms"
          type="checkbox"
          checked={user.terms}
          onChange={handleChange} />
        Accept terms and conditions
      </label>

      <Button type="submit" primary text="Submit"/>
    </Form>
  );
}

export default LoginPage;
