import React, { Component } from "react";
import { connect } from "react-redux";

import Product from "../components/Product";

class ProductList extends Component {
  render() {
    const { products } = this.props;
    const productsElements = products.map(element => {
      return <Product product={element} key={element.listing_Id} />;
    });
    return (
      <ul className="ProductList">
        {productsElements}
      </ul>
    );
  }
}

const mapStateToProps = function(state) {
  let products;

  if (state.currentFilter === "overTwenty") {
    products = state.products.filter(element => {
      return parseFloat(element.price) > 20;
    });
  } else if (state.currentFilter === "underTwenty") {
    products = state.products.filter(element => {
      return parseFloat(element.price) < 20;
    });
  } else {
    products = state.products;
  }

  return { products: products };
};

export default connect(mapStateToProps)(ProductList);
