"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[566],{5566:function(n,t,e){e.r(t),e.d(t,{default:function(){return Vn}});var r=e(2791),a=e(9434),i=e(3634),o="NOT_FOUND";var s=function(n,t){return n===t};function u(n,t){var e="object"===typeof t?t:{equalityCheck:t},r=e.equalityCheck,a=void 0===r?s:r,i=e.maxSize,u=void 0===i?1:i,c=e.resultEqualityCheck,l=function(n){return function(t,e){if(null===t||null===e||t.length!==e.length)return!1;for(var r=t.length,a=0;a<r;a++)if(!n(t[a],e[a]))return!1;return!0}}(a),d=1===u?function(n){var t;return{get:function(e){return t&&n(t.key,e)?t.value:o},put:function(n,e){t={key:n,value:e}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(l):function(n,t){var e=[];function r(n){var r=e.findIndex((function(e){return t(n,e.key)}));if(r>-1){var a=e[r];return r>0&&(e.splice(r,1),e.unshift(a)),a.value}return o}return{get:r,put:function(t,a){r(t)===o&&(e.unshift({key:t,value:a}),e.length>n&&e.pop())},getEntries:function(){return e},clear:function(){e=[]}}}(u,l);function f(){var t=d.get(arguments);if(t===o){if(t=n.apply(null,arguments),c){var e=d.getEntries(),r=e.find((function(n){return c(n.value,t)}));r&&(t=r.value)}d.put(arguments,t)}return t}return f.clearCache=function(){return d.clear()},f}function c(n){var t=Array.isArray(n[0])?n[0]:n;if(!t.every((function(n){return"function"===typeof n}))){var e=t.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+e+"]")}return t}function l(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];var a=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];var i,o=0,s={memoizeOptions:void 0},u=r.pop();if("object"===typeof u&&(s=u,u=r.pop()),"function"!==typeof u)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof u+"]");var l=s,d=l.memoizeOptions,f=void 0===d?e:d,p=Array.isArray(f)?f:[f],m=c(r),v=n.apply(void 0,[function(){return o++,u.apply(null,arguments)}].concat(p)),h=n((function(){for(var n=[],t=m.length,e=0;e<t;e++)n.push(m[e].apply(null,arguments));return i=v.apply(null,n)}));return Object.assign(h,{resultFunc:u,memoizedResultFunc:v,dependencies:m,lastResult:function(){return i},recomputations:function(){return o},resetRecomputations:function(){return o=0}}),h};return a}var d,f,p=l(u),m=function(n){return n.contacts.items},v=function(n){return n.contacts.isLoading},h=function(n){return n.filter},g=p([m,h],(function(n,t){return n.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())}))})),b=e(168),y=e(7691),x=y.ZP.ul(d||(d=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding-right: 250px;\n  padding-left: 250px;\n"]))),Z=y.ZP.li(f||(f=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  padding-bottom: 4px;\n  justify-content: space-between;\n"]))),w=e(4565),k=e(8385),j=e(184),C=function(){var n=(0,a.v9)(g),t=(0,a.I0)();return(0,j.jsx)(x,{children:n.map((function(n){var e=n.id,r=n.name,a=n.number;return(0,j.jsxs)(Z,{children:[(0,j.jsxs)(w.Z,{component:"p",variant:"h6",children:[r,": ",a]}),(0,j.jsx)(k.Z,{type:"button",variant:"contained",onClick:function(){return t((0,i.GK)(e))},children:"Delete"})]},e)}))})},E=e(885),S=e(2982),A=e(1413),N=e(4942),O={data:""},W=function(n){return"object"==typeof window?((n?n.querySelector("#_goober"):window._goober)||Object.assign((n||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:n||O},z=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,P=/\/\*[^]*?\*\/|  +/g,I=/\n+/g,T=function n(t,e){var r="",a="",i="",o=function(o){var u=t[o];"@"==o[0]?"i"==o[1]?r=o+" "+u+";":a+="f"==o[1]?n(u,o):o+"{"+n(u,"k"==o[1]?"":e)+"}":"object"==typeof u?a+=n(u,e?e.replace(/([^,])+/g,(function(n){return o.replace(/(^:.*)|([^,])+/g,(function(t){return/&/.test(t)?t.replace(/&/g,n):n?n+" "+t:t}))})):o):null!=u&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=n.p?n.p(o,u):o+":"+u+";"),s=o};for(var s in t)o(s);return r+(e&&i?e+"{"+i+"}":i)+a},D={},M=function n(t){if("object"==typeof t){var e="";for(var r in t)e+=r+n(t[r]);return e}return t},R=function(n,t,e,r,a){var i=M(n),o=D[i]||(D[i]=function(n){for(var t=0,e=11;t<n.length;)e=101*e+n.charCodeAt(t++)>>>0;return"go"+e}(i));if(!D[o]){var s=i!==n?n:function(n){for(var t,e,r=[{}];t=z.exec(n.replace(P,""));)t[4]?r.shift():t[3]?(e=t[3].replace(I," ").trim(),r.unshift(r[0][e]=r[0][e]||{})):r[0][t[1]]=t[2].replace(I," ").trim();return r[0]}(n);D[o]=T(a?(0,N.Z)({},"@keyframes "+o,s):s,e?"":"."+o)}var u=e&&D.g?D.g:null;return e&&(D.g=D[o]),function(n,t,e,r){r?t.data=t.data.replace(r,n):-1===t.data.indexOf(n)&&(t.data=e?n+t.data:t.data+n)}(D[o],t,r,u),o},L=function(n,t,e){return n.reduce((function(n,r,a){var i=t[a];if(i&&i.call){var o=i(e),s=o&&o.props&&o.props.className||/^go/.test(o)&&o;i=s?"."+s:o&&"object"==typeof o?o.props?"":T(o,""):!1===o?"":o}return n+r+(null==i?"":i)}),"")};function _(n){var t=this||{},e=n.call?n(t.p):n;return R(e.unshift?e.raw?L(e,[].slice.call(arguments,1),t.p):e.reduce((function(n,e){return Object.assign(n,e&&e.call?e(t.p):e)}),{}):e,W(t.target),t.g,t.o,t.k)}_.bind({g:1});var F,G,q,H,U,B,K,$,J,Y,Q,V,X,nn,tn,en,rn,an,on,sn=_.bind({k:1});function un(n,t){var e=this||{};return function(){var r=arguments;function a(i,o){var s=Object.assign({},i),u=s.className||a.className;e.p=Object.assign({theme:G&&G()},s),e.o=/ *go\d+/.test(u),s.className=_.apply(e,r)+(u?" "+u:""),t&&(s.ref=o);var c=n;return n[0]&&(c=s.as||n,delete s.as),q&&c[0]&&q(s),F(c,s)}return t?t(a):a}}var cn=function(n,t){return function(n){return"function"==typeof n}(n)?n(t):n},ln=function(){var n=0;return function(){return(++n).toString()}}(),dn=function(){var n;return function(){if(void 0===n&&typeof window<"u"){var t=matchMedia("(prefers-reduced-motion: reduce)");n=!t||t.matches}return n}}(),fn=new Map,pn=function(n){if(!fn.has(n)){var t=setTimeout((function(){fn.delete(n),gn({type:4,toastId:n})}),1e3);fn.set(n,t)}},mn=function n(t,e){switch(e.type){case 0:return(0,A.Z)((0,A.Z)({},t),{},{toasts:[e.toast].concat((0,S.Z)(t.toasts)).slice(0,20)});case 1:return e.toast.id&&function(n){var t=fn.get(n);t&&clearTimeout(t)}(e.toast.id),(0,A.Z)((0,A.Z)({},t),{},{toasts:t.toasts.map((function(n){return n.id===e.toast.id?(0,A.Z)((0,A.Z)({},n),e.toast):n}))});case 2:var r=e.toast;return t.toasts.find((function(n){return n.id===r.id}))?n(t,{type:1,toast:r}):n(t,{type:0,toast:r});case 3:var a=e.toastId;return a?pn(a):t.toasts.forEach((function(n){pn(n.id)})),(0,A.Z)((0,A.Z)({},t),{},{toasts:t.toasts.map((function(n){return n.id===a||void 0===a?(0,A.Z)((0,A.Z)({},n),{},{visible:!1}):n}))});case 4:return void 0===e.toastId?(0,A.Z)((0,A.Z)({},t),{},{toasts:[]}):(0,A.Z)((0,A.Z)({},t),{},{toasts:t.toasts.filter((function(n){return n.id!==e.toastId}))});case 5:return(0,A.Z)((0,A.Z)({},t),{},{pausedAt:e.time});case 6:var i=e.time-(t.pausedAt||0);return(0,A.Z)((0,A.Z)({},t),{},{pausedAt:void 0,toasts:t.toasts.map((function(n){return(0,A.Z)((0,A.Z)({},n),{},{pauseDuration:n.pauseDuration+i})}))})}},vn=[],hn={toasts:[],pausedAt:void 0},gn=function(n){hn=mn(hn,n),vn.forEach((function(n){n(hn)}))},bn={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},yn=function(n){return function(t,e){var r=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",e=arguments.length>2?arguments[2]:void 0;return(0,A.Z)((0,A.Z)({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:n,pauseDuration:0},e),{},{id:(null==e?void 0:e.id)||ln()})}(t,n,e);return gn({type:2,toast:r}),r.id}},xn=function(n,t){return yn("blank")(n,t)};xn.error=yn("error"),xn.success=yn("success"),xn.loading=yn("loading"),xn.custom=yn("custom"),xn.dismiss=function(n){gn({type:3,toastId:n})},xn.remove=function(n){return gn({type:4,toastId:n})},xn.promise=function(n,t,e){var r=xn.loading(t.loading,(0,A.Z)((0,A.Z)({},e),null==e?void 0:e.loading));return n.then((function(n){return xn.success(cn(t.success,n),(0,A.Z)((0,A.Z)({id:r},e),null==e?void 0:e.success)),n})).catch((function(n){xn.error(cn(t.error,n),(0,A.Z)((0,A.Z)({id:r},e),null==e?void 0:e.error))})),n};var Zn=function(n,t){gn({type:1,toast:{id:n,height:t}})},wn=function(){gn({type:5,time:Date.now()})},kn=function(n){var t=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,r.useState)(hn),e=(0,E.Z)(t,2),a=e[0],i=e[1];(0,r.useEffect)((function(){return vn.push(i),function(){var n=vn.indexOf(i);n>-1&&vn.splice(n,1)}}),[a]);var o=a.toasts.map((function(t){var e,r;return(0,A.Z)((0,A.Z)((0,A.Z)((0,A.Z)({},n),n[t.type]),t),{},{duration:t.duration||(null==(e=n[t.type])?void 0:e.duration)||(null==n?void 0:n.duration)||bn[t.type],style:(0,A.Z)((0,A.Z)((0,A.Z)({},n.style),null==(r=n[t.type])?void 0:r.style),t.style)})}));return(0,A.Z)((0,A.Z)({},a),{},{toasts:o})}(n),e=t.toasts,a=t.pausedAt;(0,r.useEffect)((function(){if(!a){var n=Date.now(),t=e.map((function(t){if(t.duration!==1/0){var e=(t.duration||0)+t.pauseDuration-(n-t.createdAt);if(!(e<0))return setTimeout((function(){return xn.dismiss(t.id)}),e);t.visible&&xn.dismiss(t.id)}}));return function(){t.forEach((function(n){return n&&clearTimeout(n)}))}}}),[e,a]);var i=(0,r.useCallback)((function(){a&&gn({type:6,time:Date.now()})}),[a]),o=(0,r.useCallback)((function(n,t){var r,a=t||{},i=a.reverseOrder,o=void 0!==i&&i,s=a.gutter,u=void 0===s?8:s,c=a.defaultPosition,l=e.filter((function(t){return(t.position||c)===(n.position||c)&&t.height})),d=l.findIndex((function(t){return t.id===n.id})),f=l.filter((function(n,t){return t<d&&n.visible})).length;return(r=l.filter((function(n){return n.visible}))).slice.apply(r,(0,S.Z)(o?[f+1]:[0,f])).reduce((function(n,t){return n+(t.height||0)+u}),0)}),[e]);return{toasts:e,handlers:{updateHeight:Zn,startPause:wn,endPause:i,calculateOffset:o}}},jn=sn(H||(H=(0,b.Z)(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]))),Cn=sn(U||(U=(0,b.Z)(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),En=sn(B||(B=(0,b.Z)(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]))),Sn=un("div")(K||(K=(0,b.Z)(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"])),(function(n){return n.primary||"#ff4b4b"}),jn,Cn,(function(n){return n.secondary||"#fff"}),En),An=sn($||($=(0,b.Z)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),Nn=un("div")(J||(J=(0,b.Z)(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"])),(function(n){return n.secondary||"#e0e0e0"}),(function(n){return n.primary||"#616161"}),An),On=sn(Y||(Y=(0,b.Z)(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]))),Wn=sn(Q||(Q=(0,b.Z)(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]))),zn=un("div")(V||(V=(0,b.Z)(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"])),(function(n){return n.primary||"#61d345"}),On,Wn,(function(n){return n.secondary||"#fff"})),Pn=un("div")(X||(X=(0,b.Z)(["\n  position: absolute;\n"]))),In=un("div")(nn||(nn=(0,b.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]))),Tn=sn(tn||(tn=(0,b.Z)(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),Dn=un("div")(en||(en=(0,b.Z)(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"])),Tn),Mn=function(n){var t=n.toast,e=t.icon,a=t.type,i=t.iconTheme;return void 0!==e?"string"==typeof e?r.createElement(Dn,null,e):e:"blank"===a?null:r.createElement(In,null,r.createElement(Nn,(0,A.Z)({},i)),"loading"!==a&&r.createElement(Pn,null,"error"===a?r.createElement(Sn,(0,A.Z)({},i)):r.createElement(zn,(0,A.Z)({},i))))},Rn=function(n){return"\n0% {transform: translate3d(0,".concat(-200*n,"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n")},Ln=function(n){return"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,".concat(-150*n,"%,-1px) scale(.6); opacity:0;}\n")},_n=un("div")(rn||(rn=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]))),Fn=un("div")(an||(an=(0,b.Z)(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"]))),Gn=r.memo((function(n){var t=n.toast,e=n.position,a=n.style,i=n.children,o=t.height?function(n,t){var e=n.includes("top")?1:-1,r=dn()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[Rn(e),Ln(e)],a=(0,E.Z)(r,2),i=a[0],o=a[1];return{animation:t?"".concat(sn(i)," 0.35s cubic-bezier(.21,1.02,.73,1) forwards"):"".concat(sn(o)," 0.4s forwards cubic-bezier(.06,.71,.55,1)")}}(t.position||e||"top-center",t.visible):{opacity:0},s=r.createElement(Mn,{toast:t}),u=r.createElement(Fn,(0,A.Z)({},t.ariaProps),cn(t.message,t));return r.createElement(_n,{className:t.className,style:(0,A.Z)((0,A.Z)((0,A.Z)({},o),a),t.style)},"function"==typeof i?i({icon:s,message:u}):r.createElement(r.Fragment,null,s,u))}));!function(n,t,e,r){T.p=t,F=n,G=e,q=r}(r.createElement);var qn=function(n){var t=n.id,e=n.className,a=n.style,i=n.onHeightUpdate,o=n.children,s=r.useCallback((function(n){if(n){var e=function(){var e=n.getBoundingClientRect().height;i(t,e)};e(),new MutationObserver(e).observe(n,{subtree:!0,childList:!0,characterData:!0})}}),[t,i]);return r.createElement("div",{ref:s,className:e,style:a},o)},Hn=_(on||(on=(0,b.Z)(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]))),Un=function(n){var t=n.reverseOrder,e=n.position,a=void 0===e?"top-center":e,i=n.toastOptions,o=n.gutter,s=n.children,u=n.containerStyle,c=n.containerClassName,l=kn(i),d=l.toasts,f=l.handlers;return r.createElement("div",{style:(0,A.Z)({position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none"},u),className:c,onMouseEnter:f.startPause,onMouseLeave:f.endPause},d.map((function(n){var e=n.position||a,i=function(n,t){var e=n.includes("top"),r=e?{top:0}:{bottom:0},a=n.includes("center")?{justifyContent:"center"}:n.includes("right")?{justifyContent:"flex-end"}:{};return(0,A.Z)((0,A.Z)({left:0,right:0,display:"flex",position:"absolute",transition:dn()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY(".concat(t*(e?1:-1),"px)")},r),a)}(e,f.calculateOffset(n,{reverseOrder:t,gutter:o,defaultPosition:a}));return r.createElement(qn,{id:n.id,key:n.id,onHeightUpdate:f.updateHeight,className:n.visible?Hn:"",style:i},"custom"===n.type?cn(n.message,n):s?s(n):r.createElement(Gn,{toast:n,position:e}))})))},Bn=e(6015),Kn=e(5686),$n=function(){var n=(0,r.useState)(""),t=(0,E.Z)(n,2),e=t[0],o=t[1],s=(0,r.useState)(""),u=(0,E.Z)(s,2),c=u[0],l=u[1],d=(0,a.v9)(m),f=(0,a.I0)(),p=function(n){var t=n.currentTarget,e=t.name,r=t.value;switch(e){case"name":o(r);break;case"number":l(r);break;default:return}},v=function(){o(""),l("")};return(0,j.jsx)("div",{children:(0,j.jsx)(Bn.Z,{sx:{marginTop:4,display:"flex",flexDirection:"column",alignItems:"center"},children:(0,j.jsxs)("form",{onSubmit:function(n){n.preventDefault();var t={name:e,number:c},r=d.some((function(n){return n.name.toLowerCase()===e.toLowerCase()}));r?xn.error("".concat(e," is already in contacts.")):f((0,i.uK)(t)),v()},children:[(0,j.jsx)(Kn.Z,{value:e,onChange:p,type:"text",name:"name",label:"Name",id:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,fullWidth:!0,margin:"normal"}),(0,j.jsx)(Kn.Z,{value:c,onChange:p,type:"tel",name:"number",label:"Number",id:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,fullWidth:!0,margin:"normal"}),(0,j.jsx)(Un,{position:"top-right",reverseOrder:!1}),(0,j.jsx)(k.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Add contact"})]})})})},Jn=e(4808),Yn=function(){var n=(0,a.I0)(),t=(0,a.v9)(h);return(0,j.jsx)("form",{children:(0,j.jsx)(Kn.Z,{margin:"normal",id:"name",label:"Find contact by name",name:"name",value:t,onChange:function(t){n((0,Jn.T)(t.currentTarget.value))}})})},Qn=e(803);function Vn(){var n=(0,a.I0)(),t=(0,a.v9)(v);return(0,r.useEffect)((function(){n((0,i.yF)())}),[n]),(0,j.jsxs)(Qn.Z,{component:"main",children:[(0,j.jsx)(w.Z,{component:"h2",variant:"h4",mt:4,children:"Phonebook"}),(0,j.jsx)($n,{}),(0,j.jsx)("div",{children:t&&"Request in progress..."}),(0,j.jsx)(w.Z,{component:"h3",variant:"h4",mt:4,children:"Contacts"}),(0,j.jsx)(Yn,{}),(0,j.jsx)(C,{})]})}},803:function(n,t,e){e.d(t,{Z:function(){return j}});var r=e(4942),a=e(3366),i=e(7462),o=e(2791),s=e(8182),u=e(7312),c=e(1217),l=e(4419),d=e(7078),f=(0,e(4046).ZP)(),p=e(5080),m=e(184),v=["className","component","disableGutters","fixed","maxWidth","classes"],h=(0,p.Z)(),g=f("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(n,t){var e=n.ownerState;return[t.root,t["maxWidth".concat((0,u.Z)(String(e.maxWidth)))],e.fixed&&t.fixed,e.disableGutters&&t.disableGutters]}}),b=function(n){return(0,d.Z)({props:n,name:"MuiContainer",defaultTheme:h})},y=function(n,t){var e=n.classes,r=n.fixed,a=n.disableGutters,i=n.maxWidth,o={root:["root",i&&"maxWidth".concat((0,u.Z)(String(i))),r&&"fixed",a&&"disableGutters"]};return(0,l.Z)(o,(function(n){return(0,c.Z)(t,n)}),e)};var x=e(9853),Z=e(277),w=e(5513),k=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.createStyledComponent,e=void 0===t?g:t,u=n.useThemeProps,c=void 0===u?b:u,l=n.componentName,d=void 0===l?"MuiContainer":l,f=e((function(n){var t=n.theme,e=n.ownerState;return(0,i.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!e.disableGutters&&(0,r.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))}),(function(n){var t=n.theme;return n.ownerState.fixed&&Object.keys(t.breakpoints.values).reduce((function(n,e){var r=e,a=t.breakpoints.values[r];return 0!==a&&(n[t.breakpoints.up(r)]={maxWidth:"".concat(a).concat(t.breakpoints.unit)}),n}),{})}),(function(n){var t=n.theme,e=n.ownerState;return(0,i.Z)({},"xs"===e.maxWidth&&(0,r.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),e.maxWidth&&"xs"!==e.maxWidth&&(0,r.Z)({},t.breakpoints.up(e.maxWidth),{maxWidth:"".concat(t.breakpoints.values[e.maxWidth]).concat(t.breakpoints.unit)}))})),p=o.forwardRef((function(n,t){var e=c(n),r=e.className,o=e.component,u=void 0===o?"div":o,l=e.disableGutters,p=void 0!==l&&l,h=e.fixed,g=void 0!==h&&h,b=e.maxWidth,x=void 0===b?"lg":b,Z=(0,a.Z)(e,v),w=(0,i.Z)({},e,{component:u,disableGutters:p,fixed:g,maxWidth:x}),k=y(w,d);return(0,m.jsx)(f,(0,i.Z)({as:u,ownerState:w,className:(0,s.Z)(k.root,r),ref:t},Z))}));return p}({createStyledComponent:(0,Z.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(n,t){var e=n.ownerState;return[t.root,t["maxWidth".concat((0,x.Z)(String(e.maxWidth)))],e.fixed&&t.fixed,e.disableGutters&&t.disableGutters]}}),useThemeProps:function(n){return(0,w.Z)({props:n,name:"MuiContainer"})}}),j=k}}]);
//# sourceMappingURL=566.d1296865.chunk.js.map