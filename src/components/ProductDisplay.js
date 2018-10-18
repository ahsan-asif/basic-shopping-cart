import React, { Component } from "react";
//import Card from "@material-ui/core/Card";
//import CardActionArea from "@material-ui/core/CardActionArea";
//import CardActions from "@material-ui/core/CardActions";
//import CardContent from "@material-ui/core/CardContent";
//import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
//import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { addToWishList, addToCardList } from "../actions/prodAction.js";
import { Table } from "react-bootstrap";
import "../App.css";

class ProductDisplay extends Component {
  render() {
    const { products } = this.props;
    console.log("prodcutDisplay component", products);

    return (
      <div className="container">
        <Table striped>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product image</th>
              <th>Price</th>
              <th>Add To Wish</th>
              <th>Add To Cart</th>
            </tr>
          </thead>
          <tbody>
            {(products || []).map(item => (
              <tr key={item.id}>
                <td>{item.id} </td>
                <td>
                  <img className="img_cartoons" src={item.url} alt="Pic" />
                </td>
                <td>{item.price}</td>
                <td>
                  <Button onClick={() => this.props.addToWishList(item.id)}>
                    {item.addToWishList ? "Remove From Wish" : "Add To Wish"}
                  </Button>
                </td>
                <td>
                  <Button onClick={() => this.props.addToCardList(item.id)}>
                    {item.addToCardList ? "Remove From Cart" : "Add To Cart"}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(
  mapStateToProps,
  { addToWishList, addToCardList }
)(ProductDisplay);
