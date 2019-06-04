import React from 'react';
import styled from 'styled-components';
import colors from '../../assets/colors';
import useProductList from '../../hooks/userProductList';
import Button from '../Button';

const Input = styled.input`
  border: 1px solid ${colors.atlantis};
  border-radius: 25px;
  padding: 10px
  margin-left: 10px;
`;

const SearchBar = styled.nav`
  display: flex;
  margin: 20px 0;
`;


const ProductsPage = () => {

  let searchProduct = '';
  let { products } = useProductList([],searchProduct);

  const handleSearchChange = (event) => {
    searchProduct = event.target.value;
  };

  return (
    <div>
      <SearchBar>
        <Input type="text" id="searchText" onChange={handleSearchChange} placeholder="Search for products..."></Input>
        <Button primary text="Search" />
      </SearchBar>
      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <th>SKU</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
          {products.map((product, index) => {
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
