import React, {Component} from 'react'

class ProductsPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount(){
    let url = 'http://localhost:3000/products';
    fetch(url)
    .then(resp => resp.json())
    .then(data => {
      let products = data.map((product, index) => {
        return (
          <tr key={index}>
            <td>{product.id}</td>
            <td>{product.sku}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
          </tr>
        )
      })
      this.setState({products: products})
    })
  }

  render(){
    return (
      <table>
        <tr>
          <th>ID</th>
          <th>SKU</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
        {this.state.products}
      </table>
    )
  }
}

export default ProductsPage;
