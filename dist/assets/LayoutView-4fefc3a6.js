import{_ as p,u as d,c as u,r,o as l,a as x,b as t,w as a,d as o,e as m,t as h,p as f,f as v,F as g}from"./index-2288a1ec.js";const w=e=>(f("data-v-da8166e9"),e=e(),v(),e),y={class:"w-full px-5 md:px-10 py-5 sticky top-0 z-30 bg-gray-800 flex justify-between items-center"},b=w(()=>o("h1",{class:"text-white font-semibold text-2xl md:text-3xl"}," AGMarKet ",-1)),B={class:"bg-red-500 absolute -right-2 -top-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center"},N={__name:"NavBar",setup(e){const c=d(),n=u(()=>c.getters.totalAmount);return(_,I)=>{const s=r("router-link"),i=r("font-awesome-icon");return l(),x("nav",y,[t(s,{class:"lg:hover:text-gray-400 text-white mr-6 text-xl",to:"/"},{default:a(()=>[b]),_:1}),o("div",null,[t(s,{class:"lg:hover:text-gray-400 text-white mr-6 text-lg md:text-xl",to:"/"},{default:a(()=>[m("Products")]),_:1}),t(s,{class:"lg:hover:text-gray-400 text-white text-lg md:text-xl relative",to:"/cart"},{default:a(()=>[t(i,{icon:["fas","cart-shopping"]}),o("div",B,h(n.value),1)]),_:1})])])}}},k=p(N,[["__scopeId","data-v-da8166e9"]]),S={class:"container m-10 px-7 md:px-10 max-w-6xl mx-auto"},A={__name:"LayoutView",setup(e){return(c,n)=>{const _=r("router-view");return l(),x(g,null,[t(k),o("div",S,[t(_)])],64)}}};export{A as default};
