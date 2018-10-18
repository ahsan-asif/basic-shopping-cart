const INITIAL_STATE = {
  products: [
    {
      id: "1",
      url: "/gallery/cartoon1.jpg",
      price: 2000
    },
    {
      id: "2",
      url: "/gallery/cartoon2.png",
      price: 2000
    },
    {
      id: "3",
      url: "/gallery/cartoon3.jpg",
      price: 2000
    },
    {
      id: "4",
      url: "/gallery/cartoon4.jpg",
      price: 2000
    }
  ]
};

const prodReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "Add_Wish_List":
      {
        console.log("wish list id", action.id);
        const products = state.products.slice().map(item => {
          if (item.id === action.id) {
            return {
              ...item,
              addToWishList: !item.addToWishList
            };
          }
          return item;
        });

        return {
          ...state,
          products
        };
      }
      break;

    case "Add_Card_List":
      {
        const products = state.products.slice().map(item => {
          if (item.id === action.id) {
            return {
              ...item,
              addToCardList: !item.addToCardList,
              counter: item.counter ? 0 : 1,
              quantity: item.quantity ? 0 : 1,
              netPrice: item.price
            };
          }
          return item;
        });
        return {
          ...state,
          products
        };
      }
      break;

    case "Add_Quantity":
      {
        const products = state.products.slice().map(item => {
          const quantity = item.quantity ? item.quantity + 1 : 1;
          if (item.id == action.id) {
            console.log("quantity in reducer", item.quantity);
            return {
              ...item,
              quantity,
              netPrice: quantity * item.price
            };
          }

          return item;
        });

        return {
          ...state,
          products
        };
      }
      break;
    case "Remove_Quantity":
      {
        const products = state.products.slice().map(item => {
          const quantity = item.quantity ? item.quantity - 1 : 1;

          if (item.id == action.id) {
            return {
              ...item,
              quantity,
              netPrice:quantity*item.price
            };
          }
          return item;
        });
        return {
          ...state,
          products
        };
      }
      break;
    case "Remove_Card_List":
      {
        const products = state.products.slice().map(item => {
          if (item.id == action.id) {
            return {
              addToCardList: !item.addToCardList
            };
          }
          return item;
        });
        return {
          ...state,
          products
        };
      }

      break;

    default:
      return state;
  }
};

export default prodReducer;
