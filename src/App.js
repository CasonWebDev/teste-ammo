import React, { Component } from 'react';
import Pagination from "react-js-pagination";
import { Markup } from 'interweave';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      perpage: 5,
      page: 1,
      totalProducts: 0,
      totalProductsCond: 0,
      searchTerm: 'Lista de Produtos',
      products: [],
      initialProducts: [],
      hidePagination: 0
    }
  }

  componentDidMount(){
    this.getProducts();
  }

  getProducts(){
    let page = this.state.page;
    let perpage = this.state.perpage;
    const indexOfLast = page * perpage;
    const indexOfFirst = indexOfLast - perpage;

    fetch('http://localhost:3001/api/products')
    .then(res => res.json())
    .then(
      (result) => {
        const products = result.slice(indexOfFirst, indexOfLast);
       
        this.setState({
          initialProducts: result,
          products: products,
          totalProducts: result.length,
          totalProductsCond: result.length,
          searchTerm: 'Lista de Produtos',
          hidePagination: 0
        });
        
      }
    )
  }

  filterProducts(){
    var productList = this.state.initialProducts;
    var searchTerm = this.refs.keywords_product.value;
    productList = productList.filter(function(item){
      return item.keywords_product.toLowerCase().search(
        searchTerm.toLowerCase()) !== -1;
    });
    if(productList.length === this.state.totalProducts){
      this.getProducts();
    }else{
      this.setState({
        products: productList,
        searchTerm: `Resultados da busca por: ${searchTerm}`,
        totalProductsCond: productList.length,
        hidePagination: 1
      });
    }
  }

  paginate(pageNumber){
    this.setState({
      page: pageNumber
    }, ()=>{
      this.getProducts();
    });
  }

  itensPage(){
    this.setState({
      perpage: this.refs.perpage.value
    }, ()=>{
      this.getProducts();
    });
  }

  products(product){
    let price;
    let imgs = product.images.split(":");
    if(product.olderPrice_product > 0){
      price = `<div class="oldprice"><span>R$ ${product.olderPrice_product.toFixed(2)}</span> por</div> R$ ${product.newPrice_product.toFixed(2)}`
    }else{
      price = `R$ ${product.newPrice_product.toFixed(2)}`
    }
    return(
      <div key={product.id_product} className="produto">
        <div className="images">
          {imgs.map(image => <img key={image} src={require(`./images/produtos/${image}`)} />)}
        </div>
        <div className="infos">
          <strong>{product.name_product}</strong>
          <span>{product.style_product} | {product.desc_product}</span>
        </div>
        <div className="prices">
          <Markup className="prices" content={price} />
        </div>
      </div>
    );
  }

  pagperpage(){
    return (
      <select ref="perpage" onChange={this.itensPage.bind(this)}>
        <option value="5">5 produtos por página</option>
        <option value="10">10 produtos por página</option>
        <option value="15">15 produtos por página</option>
        <option value="20">20 produtos por página</option>
        <option value="25">25 produtos por página</option>
      </select>
    );
  }

  pagination(){
    if(this.state.hidePagination === 0){
      return (
        <div className="paginations">
          {this.pagperpage()}
          <Pagination
            activePage={this.state.page}
            itemsCountPerPage={this.state.perpage}
            totalItemsCount={this.state.totalProducts}
            pageRangeDisplayed={5}
            onChange={this.paginate.bind(this)}
          />
        </div>
      );
    }
  }


  render() {
    let {products,totalProductsCond,searchTerm} = this.state;
    return (
      <div className="App">
        <div className="container">
          <div className="header">
            <img src={require("./images/logo.png")} width="180px" alt="Logo mmartan" />
            <input type="text" ref="keywords_product" name="search" placeholder="Procurar Por:" onChange={this.filterProducts.bind(this)}/>
          </div>
        </div>

        <div className="term">
          <div className="container">
            {searchTerm}
          </div>
        </div>

        <div className="container">
          <div className="col-md-10 col-md-offset-1">
            <div className="counter">
              {totalProductsCond} produtos encontrados
            </div>
            {products.map(item => (this.products(item)))}
            {this.pagination()}
          </div>
        </div>
    
      </div>
    );
  }
}

export default App;
