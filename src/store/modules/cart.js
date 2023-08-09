import axios from "axios";
import Swal from "sweetalert2";

export default {
  state: {
    products: [],
    cartItems: [],
  },
  getters: {
    totalAmount(state) {
      let total = 0;
      if (state.cartItems.length) {
        state.cartItems.forEach((item) => {
          total += item.amount;
        });
      }
      return total;
    },
  },
  mutations: {
    getProducts(state, payload) {
      state.products = payload;
    },
    getCartItems(state, payload) {
      state.cartItems = payload || [];
    },
    setCartItems(state, payload) {
      state.cartItems = payload;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
  actions: {
    getProducts(context) {
      const url =
        "https://fakestoreapi.com/products";

      axios
        .get(url)
        .then((res) => {
          context.commit("getProducts", res.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
    getCartItems(context) {
      const jsonData = JSON.parse(localStorage.getItem("cartItems")) || [];
      context.commit("getCartItems", jsonData);
    },
    addToCart(context, payload) {
      // get cart data
      const jsonData = JSON.parse(localStorage.getItem("cartItems")) || [];

      // get new item
      const newItem = { ...payload, amount: 1, checked: false };

      // check if localStorage already have any data
      if (jsonData.length) {
        // check if the item is already in the cart
        const cartItem = jsonData.find((item) => {
          return item.id === payload.id;
        });

        // if cart item is already in the cart
        if (cartItem) {
          const newCart = [...jsonData].map((item) => {
            if (item.id === payload.id) {
              return { ...item, amount: cartItem.amount + 1 };
            } else {
              return item;
            }
          });
          context.commit("setCartItems", newCart);
        } else {
          context.commit("setCartItems", [...jsonData, newItem]);
        }
      } else {
        context.commit("setCartItems", [newItem]);
      }
    },
    removeFromCart(context, payload) {
      // get cart data
      const jsonData = JSON.parse(localStorage.getItem("cartItems"));

      // remove item
      const newCart = jsonData.filter((item) => item.id !== payload.id);

      Swal.fire({
        title: "Remove this item?",
        text: `Are you sure that you want to remove "${payload.title}" from the cart list?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
        cancelButtonText: "Cancel",
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          context.commit("setCartItems", newCart);
          Swal.fire({
            icon: "success",
            title: "Remove Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    },
    decreaseAmount(context, payload) {
      // get cart data
      const jsonData = JSON.parse(localStorage.getItem("cartItems"));

      // get specific item
      const cartItem = jsonData.find((item) => item.id === payload.id);

      // check if item's amount < 2, remove it
      if (cartItem.amount < 2) {
        context.dispatch("removeFromCart", cartItem);
      } else {
        const newCart = [...jsonData].map((item) => {
          if (item.id === payload.id) {
            return { ...item, amount: item.amount - 1 };
          } else {
            return item;
          }
        });
        context.commit("setCartItems", newCart);
      }
    },
    checkItem(context, payload) {
      // get cart data
      const jsonData = JSON.parse(localStorage.getItem("cartItems"));

      let newCartItems = jsonData.map((item) => {
        if (item.id === payload) {
          return { ...item, checked: !item.checked };
        } else {
          return item;
        }
      });

      context.commit("setCartItems", newCartItems);
    },
    handleCheckAll(context, payload) {
      // get cart data
      const jsonData = JSON.parse(localStorage.getItem("cartItems"));

      const newCartItems = jsonData.map((item) => {
        return {
          ...item,
          checked: payload,
        };
      });

      context.commit("setCartItems", newCartItems);
    },
    multipleRemove(context) {
      // get cart data
      const jsonData = JSON.parse(localStorage.getItem("cartItems"));

      let hasAnyChecked = jsonData.some((item) => item.checked === true);
      if (hasAnyChecked) {
        Swal.fire({
          title: "Remove all checked items?",
          text: `Do you want to remove all checked items from the cart list?`,
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes",
          cancelButtonText: "Cancel",
          reverseButtons: true,
        }).then((result) => {
          if (result.isConfirmed) {
            // remove item
            const newCart = jsonData.filter((item) => {
              return item.checked === false;
            });
            context.commit("setCartItems", newCart);
            Swal.fire({
              icon: "success",
              title: "Remove Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      } else {
        Swal.fire({
          icon: "error",
          text: "Please check the items which you want to remove from the cart list.",
        });
      }
    },
    resetChecked(context) {
      // get cart data
      const jsonData = JSON.parse(localStorage.getItem("cartItems"));

      const newCartItems = jsonData.map((item) => {
        return {
          ...item,
          checked: false,
        };
      });

      context.commit("setCartItems", newCartItems);
    },
  },
};
