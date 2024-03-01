"use strict";(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[200],{1200:function(n,e,r){r.r(e),r.d(e,{default:function(){return Q}});var t,i,o,a,c,l,s,u,d,h,p,x,f,b=r(4925),g=r(9439),m=r(5705),v=r(6727),Z=r(168),k=r(5867),j=k.ZP.button(t||(t=(0,Z.Z)(["\n  border: none;\n  border-radius: 12px;\n  padding: 14px 44px;\n  width: 136px;\n  height: 48px;\n\n  background: #3470ff;\n  color: #fff;\n  font-weight: 600;\n  line-height: 1.42857;\n  margin-right: 10px;\n\n  &:hover {\n    cursor: pointer;\n    background: #0b44cd;\n  }\n"]))),P=(0,k.ZP)(m.l0)(i||(i=(0,Z.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 50px;\n"]))),w=k.ZP.label(o||(o=(0,Z.Z)(["\n  margin-right: 10px;\n"]))),y=(0,k.ZP)(m.gN)(a||(a=(0,Z.Z)(["\n  margin-right: 20px;\n  width: 224px;\n  height: 48px;\n  padding: 14px 8px 14px 18px;\n  /* padding: 14px 18px; */\n  border: none;\n  border-radius: 14px;\n\n  background: #f7f7fb;\n\n  &.scrollbar-container {\n    max-height: 272px;\n  }\n\n  &::-webkit-scrollbar {\n    width: 8px; /* \u0448\u0438\u0440\u0438\u043d\u0430 \u0441\u043a\u0440\u043e\u043b\u0431\u0430\u0440\u0443 */\n    /* height: 12px; */\n    /* scrollbar-color: rgba(18, 20, 23, 0.05); */\n    /* scrollbar-width: thin; */\n  }\n\n  &::-webkit-scrollbar-track {\n    background: #fff; //  \u043a\u043e\u043b\u0456\u0440 \u0444\u043e\u043d\u0443 \u0432\u0441\u0456\u0454\u0457 \u0434\u043e\u0440\u0456\u0436\u043a\u0438 \u0441\u043a\u0440\u043e\u043b\u0431\u0430\u0440\u0443\n    border-radius: 10px; // \u0437\u0430\u043e\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u043d\u044f \u0434\u043e\u0440\u0456\u0436\u043a\u0438 \u0441\u043a\u0440\u043e\u043b\u0443\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background: red; // \u043a\u043e\u043b\u0456\u0440 \u0441\u0430\u043c\u043e\u0433\u043e \u0441\u043a\u0440\u043e\u043b\u0443 */\n    /* height: 50%; */\n    border-radius: 10px; /* \u0437\u0430\u043e\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u043d\u044f \u0441\u0430\u043c\u043e\u0433\u043e \u0441\u043a\u0440\u043e\u043b\u0443 */\n    cursor: pointer;\n    /* &:hover {\n      background: #3477ff; // \u043a\u043e\u043b\u0456\u0440 \u0441\u0430\u043c\u043e\u0433\u043e \u0441\u043a\u0440\u043e\u043b\u0443 \u043f\u0440\u0438 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u043d\u0456\n    } */\n  }\n"]))),C=(0,k.ZP)(y)(c||(c=(0,Z.Z)(["\n  padding-left: 50px;\n  width: 125px;\n"]))),M=k.ZP.option(l||(l=(0,Z.Z)(["\n  width: 224px;\n  margin-bottom: 8px;\n\n  font-family: 'Manrope', sans-serif;\n  font-weight: 500;\n  font-size: 16px;\n\n  line-height: 1.25;\n  color: rgba(18, 20, 23, 0.2);\n\n  box-shadow: 0 4px 36px 0 rgba(0, 0, 0, 0.02);\n  background: #fff;\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    color: #121417;\n    background-color: #fff;\n  }\n"]))),S=k.ZP.div(s||(s=(0,Z.Z)(["\n  position: relative;\n"]))),L=k.ZP.span(u||(u=(0,Z.Z)(["\n  position: absolute;\n  top: 14px;\n  left: 14px;\n"]))),B=function(n){for(var e=[],r=0;r<=n;r++)e.push(10*(r+1));return e},E=JSON.parse('["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Mercedes-Benz","Chrysler","Kia","Land"]'),N=r(3329),R=v.Ry().shape({make:v.Z_(),rentalPrice:v.Z_()}),_=function(n){var e=n.onSubmit,r=n.searchParams,t=n.handleReset;return(0,N.jsx)(m.J9,{initialValues:r,validationSchema:R,onSubmit:e,children:function(n){var e=n.resetForm;return(0,N.jsxs)(P,{children:[(0,N.jsx)(w,{htmlFor:"make",children:"Car Brand "}),(0,N.jsxs)(y,{component:"select","aria-label":"select",name:"make",type:"text",placeholder:"Enter the text",children:[(0,N.jsx)(M,{value:"",children:"Enter the text"}),E.map((function(n){return(0,N.jsx)(M,{value:n,children:n},n)}))]}),(0,N.jsx)(w,{htmlFor:"rentalPrice",children:"Price/ 1 hour"}),(0,N.jsxs)(S,{children:[(0,N.jsx)(L,{children:"To $"}),(0,N.jsx)(C,{name:"rentalPrice",component:"select","aria-label":"select",type:"text",placeholder:"Enter price",children:B(19).map((function(n){return(0,N.jsx)(M,{value:n,children:n},n)}))})]}),(0,N.jsx)(j,{type:"submit",children:"Search"}),(0,N.jsx)(j,{type:"reset",onClick:function(){return t(e)},children:"Reset"})]})}})},z=r(4386),F=r(7673),H=r(6382),I=function(n){var e=n.visibleCars;return(0,N.jsx)(F.H,{children:null===e||void 0===e?void 0:e.map((function(n){return(0,N.jsx)(z.C,{item:n},(0,H.x0)())}))})},A=k.ZP.button(d||(d=(0,Z.Z)(["\n  margin-bottom: 150px;\n  font-weight: 500;\n  font-size: 16px;\n  border: none;\n  line-height: 1.5;\n  text-decoration: underline;\n  text-decoration-skip-ink: none;\n  color: #3470ff;\n  text-align: center;\n  background-color: inherit;\n  cursor: pointer;\n\n  &hover {\n    color: #0b44cd;\n  }\n"]))),J=function(n){var e=n.onClick;return(0,N.jsx)(A,{type:"button",onClick:e,children:"Load more"})},O=r(2791),V=r(9434),q=r(1087),G=r(4387),K=function(n){return n.cars.cars},T=function(n){return n.cars.isLoading},U=function(n){return n.cars.isMore},W=(k.ZP.div(h||(h=(0,Z.Z)(["\n  margin: 0 auto;\n  width: 800px;\n"]))),k.ZP.h1(p||(p=(0,Z.Z)(["\n  margin-bottom: 20px;\n"]))),k.ZP.h2(x||(x=(0,Z.Z)(["\n  margin-bottom: 20px;\n"]))),k.ZP.section(f||(f=(0,Z.Z)(["\n  margin: 0 auto;\n  text-align: center;\n"])))),$=r(7762);var D=["page"];function Q(){var n=(0,V.I0)(),e=(0,V.v9)(U),r=(0,V.v9)(K),t=(0,V.v9)(T),i=(0,q.lr)(),o=(0,g.Z)(i,2),a=o[0],c=o[1];(0,O.useEffect)((function(){var e=function(n){var e,r={},t=(0,$.Z)(n.entries());try{for(t.s();!(e=t.n()).done;){var i=(0,g.Z)(e.value,2),o=i[0],a=i[1];r[o]=a}}catch(c){t.e(c)}finally{t.f()}return r}(a),r=e.page,t=(0,b.Z)(e,D),i=Object.keys(t).length;if(!r&&!i)return console.log(r),void c({page:1});n(i?(0,G.q)(t):(0,G.c)(e))}),[n,a,c]);return(0,N.jsxs)(W,{children:[(0,N.jsx)(_,{onSubmit:function(n){c(n)},handleReset:function(n){n(),c({})},searchParams:a}),t?(0,N.jsx)("div",{children:"Loading..."}):(0,N.jsx)(I,{visibleCars:r}),e&&(0,N.jsx)(J,{onClick:function(){var n=a.get("page"),e=Number(n)+1;c({page:e})}})]})}}}]);
//# sourceMappingURL=200.6239e27e.chunk.js.map