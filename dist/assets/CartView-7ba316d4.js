import{u as x,o as a,a as d,d as e,t as m,j as _,g as b,c as p,k,r as y,F as g,h as w,b as C,w as $,i as A,e as j}from"./index-30df8713.js";const I={class:"cartItem w-full flex justify-between items-center gap-2 border-b py-6 mb-4 relative"},F=["checked"],N={class:"w-[80px] md:w-[140px]"},B=["src"],R={class:"flex-1 flex flex-col justify-between pr-4 md:pr-0 md:flex-row md:items-center md:gap-4"},V={class:"flex-1 text-sm md:text-lg text-left font-medium mb-2"},S={class:"flex-1 flex justify-between gap-6"},T={class:"flex-1"},E={class:"flex items-center h-full border font-medium w-[90px] md:w-[120px] md:h-9"},L={class:"h-full flex justify-center items-center px-3"},P={class:"flex-1 flex items-center justify-end font-medium"},D={__name:"CartItem",props:{item:{type:Object,default:()=>{}}},setup(o){const t=x(),i=s=>{t.dispatch("removeFromCart",s)},r=s=>{t.dispatch("addToCart",s)},h=s=>{t.dispatch("decreaseAmount",s)},f=s=>{t.dispatch("checkItem",s)};return(s,l)=>(a(),d("div",I,[e("input",{type:"checkbox",checked:o.item.checked,onClick:l[0]||(l[0]=c=>f(o.item.id))},null,8,F),e("div",N,[e("img",{class:"block w-full h-[70px] md:h-[100px] object-cover rounded",src:o.item.image,alt:""},null,8,B)]),e("div",R,[e("div",V,m(o.item.title),1),e("div",S,[e("div",T,[e("div",E,[e("button",{class:"flex-1 h-full flex justify-center items-center cursor-pointer border-r",onClick:l[1]||(l[1]=c=>h(o.item))}," - "),e("div",L,m(o.item.amount),1),e("button",{class:"flex-1 h-full flex justify-center items-center cursor-pointer border-l",onClick:l[2]||(l[2]=c=>r(o.item))}," + ")])]),e("div",P,m(s.$filters.thousandsFilter(o.item.price)),1)])]),e("button",{class:"cursor-pointer absolute -top-1 right-1 text-gray-400 text-md md:text-lg",onClick:l[3]||(l[3]=c=>i(o.item))}," ⨉ ")]))}},M={class:"cart overflow-hidden"},O=e("h2",{class:"text-2xl mb-4"},"Cart List",-1),q={key:0},z={class:"flex items-center py-2"},G=["checked"],H=e("label",{for:"checkAll"},"check all",-1),J=e("hr",{class:"mb-5"},null,-1),K={class:"flex flex-col mb-5"},Q={class:"w-2/3 md:w-1/3 flex flex-col ml-auto mb-10 pr-4 md:pr-0"},U={class:"mb-3"},W={class:"flex justify-between pt-3 pb-5 text-red-500 font-medium border-t border-gray-500"},X=e("span",null,"Total Price",-1),Y={class:"flex justify-between"},Z=e("button",{class:"bg-gray-700 lg:hover:bg-gray-600 text-white w-32 md:w-48 py-1 md:py-2 rounded",to:"/"}," Check out ",-1),ee={key:1},se={__name:"CartView",setup(o){const t=x(),i=_(!1);b(()=>{t.dispatch("getCartItems"),t.dispatch("resetChecked")});const r=p(()=>t.state.cart.cartItems),h=p(()=>t.getters.totalAmount),f=p(()=>{let c=0;return r.value.forEach(n=>{c+=n.amount*n.price}),c}),s=()=>{i.value=!i.value,t.dispatch("handleCheckAll",i.value)},l=()=>{t.dispatch("multipleRemove")};return k(()=>r.value,()=>{r.value.some(n=>n.checked===!1)?i.value=!1:i.value=!0}),(c,n)=>{const v=y("router-link");return a(),d("main",M,[O,r.value.length?(a(),d("div",q,[e("div",z,[e("input",{id:"checkAll",class:"mr-2",name:"checkAll",type:"checkbox",checked:i.value,onClick:n[0]||(n[0]=u=>s())},null,8,G),H,e("button",{class:"bg-[#f15c1b] lg:hover:bg-[#ef733e] text-white px-3 py-1 rounded ml-auto",onClick:n[1]||(n[1]=u=>l())}," Remove checked Items ")]),J,e("div",K,[(a(!0),d(g,null,w(r.value,u=>(a(),A(D,{key:u.id,item:u},null,8,["item"]))),128))]),e("div",Q,[e("p",U,m(h.value)+" items",1),e("div",W,[X,e("span",null,m(c.$filters.thousandsFilter(f.value)),1)])]),e("div",Y,[C(v,{class:"bg-gray-500 lg:hover:bg-gray-400 text-white w-32 md:w-48 py-1 md:py-2 rounded text-center",to:"/"},{default:$(()=>[j(" Return to product list ")]),_:1}),Z])])):(a(),d("div",ee,"Shopping cart is empty(ಥ_ಥ)，please add some products to the cart."))])}}};export{se as default};
