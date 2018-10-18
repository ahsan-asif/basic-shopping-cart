import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addQuantity,
  removeQuantity,
  removeFromCardList
} from "../actions/prodAction.js";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from '@material-ui/core/Paper';
const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  },
  root: {
   flexGrow: 1,
 },
 paper: {
   padding: theme.spacing.unit * 2,
   textAlign: 'center',
   color: theme.palette.text.secondary,
 },
});

class Card extends Component {
  render() {
    console.log("card component", this.props);
    const { classes, Products } = this.props;
    const cardListItem = (Products || []).filter(
      item => item.addToCardList === true
    );
    console.log("card item", cardListItem);
    return (
      <div className={classes.root}>
        <div>This is the card component</div>

        {(cardListItem || []).map(item => (
          <Grid container spacing={24}
  >
            <Grid item xs={12}>
              ID:
              {item.id}
            </Grid>
            <Grid item xs={12}>
              Price:
              {item.price}
            </Grid>
            <Grid item xs={12}>
              NetPrice:{" "}
              {
                (item.netPrice = item.netPrice
                  ? item.quantity * item.price
                  : item.price)
              }
            </Grid>
            <Button style={{color:"blue"}} onClick={() => this.props.addQuantity(item.id)}>
              {"+"}
            </Button>
            <Grid item xs={12}>
              Quantity: {item.quantity}
            </Grid>
            <Button style={{color:"red"}}
              disabled={item.quantity == 1}
              onClick={() => this.props.removeQuantity(item.id)}
            >
              {"-"}
            </Button>
            <Grid item xs={12}>
              <img width="200" height="200" alt="img" src={item.url} />
            </Grid>
            <Grid item xs={12}>
              <Button style={{color:"red"}} onClick={() => this.props.removeFromCardList(item.id)}>
                Remove Cart
              </Button>
            </Grid>
          </Grid>
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    Products: state.products
  };
};

Card.propTypes = {
  classes: PropTypes.object.isRequired
};
const theme = withStyles(styles)(Card);
export default connect(
  mapStateToProps,
  { addQuantity, removeQuantity, removeFromCardList }
)(theme);
