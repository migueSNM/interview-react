import React from 'react';
import useProductList from '../../hooks/userProductList';

const ProductsPage = () => {

  const { products } = useProductList([]);

  return (
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
  )
}

export default ProductsPage;
