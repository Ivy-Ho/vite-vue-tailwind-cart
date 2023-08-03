import axios from 'axios';

export default {
  state: {
    products : [],
    cartItems:[],  
  },
  mutations: {
    getProducts(state, payload) {
        state.products = payload;
    },
    getCartItems(state) {
      const jsonData = JSON.parse(localStorage.getItem('cartItems'));
      state.cartItems = jsonData;
    },
    addToCart(state, payload) {
      // get cart data
      const jsonData = JSON.parse(localStorage.getItem('cartItems'));

      // get new item
      const newItem = {...payload, amount: 1 };

      // check if localStorage already have any data
      if(jsonData) {
        // check if the item is already in the cart
        const cartItem = jsonData.find((item) => {
          return item.id === payload.id;
        });

        // if cart item is already in the cart
        if(cartItem) {
          const newCart = [...jsonData].map((item) => {
            if(item.id === payload.id) {
              return {...item, amount: cartItem.amount + 1}
            }else {
              return item;
            }
          })
          state.cartItems = newCart;
        }else {
          state.cartItems = [...jsonData, newItem];
        }
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      }else {
        state.cartItems.push(newItem);
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      }
    },
    removeFromCart(state, payload) {
      // get cart data
      const jsonData = JSON.parse(localStorage.getItem('cartItems'));

      // remove item
      const newCart = jsonData.filter(item => item.id !== payload.id);

      // set data
      state.cartItems = (newCart);
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    setDecreaseAmount(state, payload) {
      state.cartItems = payload;
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    }
  },
  actions : {
    getProducts(context) {
      // const url = 'https://fakestoreapi.com/products';
      const url = 'https://run.mocky.io/v3/d7a29aba-9aac-4a97-b1b7-7b3d87ae8b7e';

      axios.get(url)
      .then((res) => {
        context.commit('getProducts', res.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
    },
    increaseAmount(context, payload) {
      // get cart data
      const jsonData = JSON.parse(localStorage.getItem('cartItems'));

      // get specific item
      const cartItem = jsonData.find((item) => item.id === payload);

      // add to cart
      context.commit('addToCart', cartItem);
    },
    decreaseAmount(context, payload) {
      // get cart data
      const jsonData = JSON.parse(localStorage.getItem('cartItems'));

      // get specific item
      const cartItem = jsonData.find((item) => item.id === payload);

      // check if item's amount < 2, remove it
      if(cartItem.amount < 2) {
        context.commit('removeFromCart', cartItem);
      } else {
          const newCart = [...jsonData].map((item) => {
            if(item.id === payload) {
              return {... item, amount: item.amount - 1};
            }else {
              return item;
            }
          });
        context.commit('setDecreaseAmount', newCart);
      }
    }
  }

}
