export const addToWishList = id => {
  return dispatch =>{
    dispatch({type: "Add_Wish_List",id});
  };
};

export const addToCardList = id =>{
  return dispatch =>{
    dispatch({type:"Add_Card_List", id});
  }
}

 export const addQuantity = id =>{
  return dispatch =>{
  dispatch({type:"Add_Quantity", id});
}
}
export const removeQuantity = id =>{
  return dispatch => {
    dispatch({type: "Remove_Quantity", id});
  }
}
export const removeFromCardList = id =>{
  return dispatch => {
  dispatch({type:"Remove_Card_List", id});
};
};
