import React, { useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import colors from '../../assets/colors';
import {AppContext} from '../../appContext';

const Input = styled.input`
  border: 1px solid ${colors.atlantis};
  border-radius: 25px;
  padding: 10px
  margin-left: 10px;
`;

const ProductsPage = () => {

  const {
    state: { products },
    dispatch,
  } = useContext(AppContext);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function fetchData() {
      try{
        const { data } = await axios.get('http://localhost:3000/products');
        dispatch({ type: 'setProducts', data });
      } catch (error){
        console.log(error)
      }
    }
    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  };

  const productsFiltered = products.filter(product => {
    if(search !== ''){
      return product.name.toLowerCase().includes(search.toLowerCase())
    }
    return products;
  });

  return (
    <div>
      <Input type="text" id="searchText" onChange={handleSearchChange} placeholder="Search for products..."></Input>
      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <th>SKU</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
          {productsFiltered.map((product, index) => {
            return (
              <tr key={index}>
                <td>{product.id}</td>
                <td>{product.sku}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ProductsPage;
