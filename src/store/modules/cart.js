export default {
  state: {
    products:[
    ],
  },
  mutations: {
    addToCart(state, payload) {
      state.products.push(payload);
    },
  }

}
