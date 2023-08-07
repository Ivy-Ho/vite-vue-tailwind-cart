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
        "https://run.mocky.io/v3/d7a29aba-9aac-4a97-b1b7-7b3d87ae8b7e";

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

      context.commit("setCartItems", newCart);
    },
    decreaseAmount(context, payload) {
      // get cart data
      const jsonData = JSON.parse(localStorage.getItem("cartItems"));

      // get specific item
      const cartItem = jsonData.find((item) => item.id === payload);

      // check if item's amount < 2, remove it
      if (cartItem.amount < 2) {
        context.dispatch("removeFromCart", cartItem);
      } else {
        const newCart = [...jsonData].map((item) => {
          if (item.id === payload) {
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
          title: "刪除選取項目",
          text: `您是否確定將所有已選取的項目從購物車中刪除?`,
          icon: "warning",
          showCancelButton: true,
          cancelButtonColor: "#d33",
          cancelButtonText: "取消",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "確定",
          reverseButtons: true
        }).then((result) => {
          if (result.isConfirmed) {
            // remove item
            const newCart = jsonData.filter((item) => {
              return item.checked === false;
            });

            context.commit("setCartItems", newCart);
            Swal.fire("刪除成功", "", "success");
          }
        });
      } else {
        Swal.fire({
          icon: 'error',
          text: '請選取要刪除的項目',
        })
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
