import React, { useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Redirect } from "react-router-dom";
import colors from '../../assets/colors';
import { AppContext } from '../../appContext';

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto 50px;
`;

const H1 = styled.h1`
`;

const Input = styled.input`
  border: 1px solid ${colors.atlantis};
  border-radius: 25px;
  margin-left: 10px;
  width: 270px;
  height: 44px;
  padding-left: 20px;
`;


const Container = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const ProductBox = styled.div`
  text-align: left;
`;

const Img = styled.img`
`;
const Code = styled.div`
  font-size: 60%;
`;
const Name = styled.div`
  font-size: 80%;
`;
const Price = styled.div`
  font-size: 130%;
  color: ${colors.atlantis}
  font-weight: bold;
`;

const ProductsPage = () => {

  const {
    state: { products, isAuth },
    dispatch,
  } = useContext(AppContext);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get('http://localhost:3000/products');
        dispatch({ type: 'setProducts', data });
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  };

  const productsFiltered = products.filter(product => {
    if (search !== '') {
      return product.name.toLowerCase().includes(search.toLowerCase())
    }
    return products;
  });

  const localAuth = localStorage.getItem('isAuth');

  if (isAuth || localAuth) {
    return (
      <div>
        <NavBar>
          <H1>Products</H1>
          <Input type="text" id="searchText" onChange={handleSearchChange} placeholder="Search for products..."></Input>
        </NavBar>
        <Container>
          {productsFiltered.map((product, index) => {
            return (
              <ProductBox key={product.id}>
                <Img src="https://dummyimage.com/150x200/000/d4d4d4.png" alt={product.name} />
                <Price>$ {product.price}</Price>
                <Name>{product.name}</Name>
                <Code># {product.sku}</Code>

              </ProductBox>
            )
          })}
        </Container>

      </div>
    )
  } else {
    return (<Redirect to="/login" />)
  }
}

export default ProductsPage;
