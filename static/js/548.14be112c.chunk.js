"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[548],{8548:function(n,e,r){r.r(e),r.d(e,{default:function(){return q}});var t,o,a,i,s,d,c,u=r(2791),l=r(9434),p=r(3634),f=r(6916),x=function(n){return n.contacts.items},b=function(n){return n.contacts.isLoading},m=(0,f.P1)([x,function(n){return n.filter}],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),h=r(168),g=r(6444),v=g.ZP.ul(t||(t=(0,h.Z)(["\n  background-color: #eaf2f8;\n  display: flex;\n  flex-direction: column;\n"]))),Z=g.ZP.button(o||(o=(0,h.Z)(["\n  background-color: #e5e7e9;\n  :hover {\n    background-color: #33beff;\n  }\n  border-radius: 4px;\n  border: 1px solid #d6dbdf;\n  padding: 4px;\n"]))),j=g.ZP.li(a||(a=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  padding: 8px;\n  justify-content: space-between;\n"]))),k=r(184),y=function(){var n=(0,l.v9)(m),e=(0,l.I0)();return(0,k.jsx)(v,{children:n.map((function(n){var r=n.id,t=n.name,o=n.number;return(0,k.jsxs)(j,{children:[(0,k.jsxs)("p",{children:[t,": ",o]}),(0,k.jsx)(Z,{type:"button",onClick:function(){return e((0,p.GK)(r))},children:"Delete"})]},r)}))})},w=r(885),C=r(5218),P=g.ZP.form(i||(i=(0,h.Z)(["\n  background-color: #eaf2f8;\n  display: flex;\n  flex-direction: column;\n"]))),_=g.ZP.input(s||(s=(0,h.Z)(["\n  font-size: 14px;\n  padding: 8px;\n  border: 2px solid #d5d8dc;\n  outline: transparent;\n  border-radius: 4px;\n  margin-top: 4px;\n  :focus {\n    border: 2px solid #33beff;\n  }\n"]))),z=g.ZP.label(d||(d=(0,h.Z)(["\n  font-size: 16px;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 16px;\n"]))),A=g.ZP.button(c||(c=(0,h.Z)(["\n  font-size: 16px;\n  width: 130px;\n  padding: 8px;\n  margin-right: auto;\n  margin-left: auto;\n  margin-bottom: 28px;\n  background-color: #e5e7e9;\n  border: 1px solid #d6dbdf;\n  border-radius: 4px;\n  :hover {\n    background-color: #33beff;\n  }\n"]))),L=function(){var n=(0,u.useState)(""),e=(0,w.Z)(n,2),r=e[0],t=e[1],o=(0,u.useState)(""),a=(0,w.Z)(o,2),i=a[0],s=a[1],d=(0,l.v9)(x),c=(0,l.I0)(),f=function(n){var e=n.currentTarget,r=e.name,o=e.value;switch(r){case"name":t(o);break;case"number":s(o);break;default:return}},b=function(){t(""),s("")};return(0,k.jsxs)(P,{onSubmit:function(n){n.preventDefault();var e={name:r,number:i},t=d.some((function(n){return n.name.toLowerCase()===r.toLowerCase()}));t?C.Am.error("".concat(r," is already in contacts.")):c((0,p.uK)(e)),b()},children:[(0,k.jsxs)(z,{children:["Name",(0,k.jsx)(_,{value:r,onChange:f,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,k.jsxs)(z,{children:["Number",(0,k.jsx)(_,{value:i,onChange:f,type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,k.jsx)(C.x7,{position:"top-center",reverseOrder:!1}),(0,k.jsx)(A,{type:"submit",children:"Add contact"})]})};function q(){var n=(0,l.I0)(),e=(0,l.v9)(b);return(0,u.useEffect)((function(){n((0,p.yF)())}),[n]),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("div",{children:(0,k.jsx)("h2",{children:"Your contacts"})}),(0,k.jsx)(L,{}),(0,k.jsx)("div",{children:e&&"Request in progress..."}),(0,k.jsx)(y,{})]})}}}]);
//# sourceMappingURL=548.14be112c.chunk.js.map