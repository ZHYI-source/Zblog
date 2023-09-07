/*! For license information please see 14.24e9bf4d.chunk.js.LICENSE.txt */
(self.webpackChunkmaple_react=self.webpackChunkmaple_react||[]).push([[14,897],{78014:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return D}});var r=t(29439),i=t(72791),a=t(16871),o=t(87462),c=t(4942),l=t(15207),s=t(31585),u=t(75179),f=t(81694),d=t.n(f),m=t(41818),v=t(1413),p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z"}}]},name:"vertical-align-top",theme:"outlined"},h=t(69726),g=function(e,n){return i.createElement(h.Z,(0,v.Z)((0,v.Z)({},e),{},{ref:n,icon:p}))};g.displayName="VerticalAlignTopOutlined";var w=i.forwardRef(g),b=t(93433),x=t(75314);function y(e){var n,t=function(t){return function(){n=null,e.apply(void 0,(0,b.Z)(t))}},r=function(){if(null==n){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];n=(0,x.Z)(t(r))}};return r.cancel=function(){x.Z.cancel(n),n=null},r}var F=t(23785);function k(e){return null!==e&&void 0!==e&&e===e.window}function E(e,n){var t;if("undefined"===typeof window)return 0;var r=n?"scrollTop":"scrollLeft",i=0;return k(e)?i=e[n?"pageYOffset":"pageXOffset"]:e instanceof Document?i=e.documentElement[r]:e&&(i=e[r]),e&&!k(e)&&"number"!==typeof i&&(i=null===(t=(e.ownerDocument||e).documentElement)||void 0===t?void 0:t[r]),i}function N(e,n,t,r){var i=t-n;return(e/=r/2)<1?i/2*e*e*e+n:i/2*((e-=2)*e*e+2)+n}var j=t(61113),C=function(e){var n=(0,u.Z)(!1,{value:e.visible}),t=(0,r.Z)(n,2),a=t[0],f=t[1],v=i.createRef(),p=i.useRef(),h=function(){return v.current&&v.current.ownerDocument?v.current.ownerDocument:window},g=y((function(n){var t=e.visibilityHeight,r=E(n.target,!0);f(r>t)}));i.useEffect((function(){return function(){var n=(e.target||h)();p.current=(0,s.Z)(n,"scroll",(function(e){g(e)})),g({target:n})}(),function(){p.current&&p.current.remove(),g.cancel()}}),[e.target]);var b=i.useContext(F.E_),C=b.getPrefixCls,Z=b.direction,H=e.prefixCls,q=e.className,T=void 0===q?"":q,z=C("back-top",H),D=C(),_=d()(z,(0,c.Z)({},"".concat(z,"-rtl"),"rtl"===Z),T),L=(0,m.Z)(e,["prefixCls","className","children","visibilityHeight","target","visible"]);return i.createElement("div",(0,o.Z)({},L,{className:_,onClick:function(n){var t=e.onClick,r=e.target,i=e.duration;!function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.getContainer,r=void 0===t?function(){return window}:t,i=n.callback,a=n.duration,o=void 0===a?450:a,c=r(),l=E(c,!0),s=Date.now(),u=function n(){var t=Date.now()-s,r=N(t>o?o:t,l,e,o);k(c)?c.scrollTo(window.pageXOffset,r):c instanceof HTMLDocument||"HTMLDocument"===c.constructor.name?c.documentElement.scrollTop=r:c.scrollTop=r,t<o?(0,x.Z)(n):"function"===typeof i&&i()};(0,x.Z)(u)}(0,{getContainer:r||h,duration:void 0===i?450:i}),"function"===typeof t&&t(n)},ref:v}),function(n){var t=n.prefixCls,r=n.rootPrefixCls,o=e.children,c=i.createElement("div",{className:"".concat(t,"-content")},i.createElement("div",{className:"".concat(t,"-icon")},i.createElement(w,null)));return i.createElement(l.Z,{visible:a,motionName:"".concat(r,"-fade")},(function(e){var n=e.className;return(0,j.Tm)(o||c,(function(e){var t=e.className;return{className:d()(n,t)}}))}))}({prefixCls:z,rootPrefixCls:D}))};C.defaultProps={visibilityHeight:400};var Z=i.memo(C),H=(t(55897),function(e){var n=new IntersectionObserver((function(e,n){e.forEach((function(e){if(e.isIntersecting){var t=e.target,r=t.dataset.src;r&&(t.src=r,t.onload=function(){n.unobserve(t)})}}))}));(e||document.querySelectorAll(".lazy-image")).forEach((function(e){n.observe(e)}))}),q=(t(84038),t(80184)),T={height:30,width:30,lineHeight:"30px",borderRadius:4,backgroundColor:"#f5f5f5",color:"#242424",textAlign:"center",fontSize:12};function z(){var e=(0,a.TH)().pathname;return(0,i.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var D=function(){var e=(0,i.useState)({}),n=(0,r.Z)(e,2),t=n[0],o=n[1],c=(0,i.useState)(0),l=(0,r.Z)(c,2),s=l[0],u=l[1],f=[{background:"#FFFFFF",text:"#333",fontFamily:"Courier New, monospace"},{background:"#E6F7FF",text:"#333",fontFamily:"Courier New, monospace"},{background:"#F5F5F5",text:"#333",fontFamily:"Georgia, serif"},{background:"#FFFFE0",text:"#663300",fontFamily:"Times New Roman, serif"},{background:"#E6FFE6",text:"#006600",fontFamily:"Verdana, sans-serif"},{background:"#000",text:"#d4d2d2",fontFamily:"\u5e7c\u5706"},{background:"#F0E6FF",text:"#6600CC",fontFamily:"Arial, sans-serif"},{background:"#FFE6E6",text:"#CC0000",fontFamily:"Helvetica, sans-serif"}],d=(0,i.useState)("50% 0"),m=(0,r.Z)(d,2),v=m[0],p=m[1],h=(0,i.useState)("url(https://images.unsplash.com/photo-1693057205719-e439be478b33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1916&q=80)"),g=(0,r.Z)(h,2),w=g[0],b=g[1],x=(0,a.s0)(),y=1;function F(){var e;b("url(http://www.zhouyi.run:3089/v1/common/files/preview/img/".concat((e=y)<10?"0".concat(e):"".concat(e),".jpg)")),y=y%9+1}var k=function(){var e=window.scrollY;p("50% ".concat(.02*e>95?95:.02*e,"%"))};(0,i.useEffect)((function(){return H(),window.addEventListener("scroll",k),setInterval(F,8e3),function(){window.removeEventListener("scroll",k)}}),[]);return(0,q.jsxs)("section",{className:"app",style:{backgroundColor:t.background,color:t.text,fontFamily:t.fontFamily},children:[(0,q.jsx)("aside",{className:"app-aside",children:(0,q.jsxs)("section",{className:"aside-wrap",style:{backgroundImage:w,backgroundPosition:v},children:[(0,q.jsx)("section",{className:"aside-mask"}),(0,q.jsxs)("section",{className:"aside-wrap-info",children:[(0,q.jsx)("img",{className:"info-avatar lazy-image","data-src":"http://www.zhouyi.run:3089/v1/common/files/preview/img/1691548931529.png"}),(0,q.jsx)("p",{className:"info-title",children:"Zblog"}),(0,q.jsx)("p",{className:"info-title-sub",children:"\u6709\u8da3\u7684\u4eba\u8bb0\u5f55\u6709\u8da3\u7684\u4e8b\u3002 "}),(0,q.jsxs)("div",{className:"info-icon-list",children:[(0,q.jsx)("i",{className:"iconfont icon-shouye",title:"\u4e3b\u9875",onClick:function(){return x("/")}}),(0,q.jsx)("a",{className:"iconfont icon-gitee",title:"\u7801\u4e91",href:"https://gitee.com/Z568_568/Zblog",target:"_blank"}),(0,q.jsx)("a",{className:"iconfont icon-github-fill",title:"GitHub",href:"https://github.com/ZHYI-source",target:"_blank",children:" "}),(0,q.jsx)("i",{className:"iconfont icon-zhuti_tiaosepan_o",onClick:function(){var e=(s+1)%f.length;o(f[e]),u(e)},title:"\u66f4\u6362\u4e3b\u9898"}),(0,q.jsx)("i",{className:"iconfont icon-24gl-expand2",title:"\u6253\u5f00\u5168\u5c4f\u9605\u8bfb\u66f4\u8212\u670d",onClick:function(){var e=document.documentElement;e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}})]})]}),(0,q.jsxs)("section",{className:"copyright",children:["Copyright \xa92023 by ",(0,q.jsx)("a",{href:"https://gitee.com/Z568_568",target:"_blank",children:" @ZHOUYI"}),". All rights reserved."]})]})}),(0,q.jsxs)("main",{className:"app-main",style:{color:t.text},children:[(0,q.jsx)(z,{}),(0,q.jsx)(a.j3,{})]}),(0,q.jsx)(Z,{children:(0,q.jsx)("div",{style:T,children:"TOP"})})]})}},61113:function(e,n,t){"use strict";t.d(n,{Tm:function(){return a},l$:function(){return i}});var r=t(72791),i=r.isValidElement;function a(e,n){return function(e,n,t){return i(e)?r.cloneElement(e,"function"===typeof t?t(e.props||{}):t):n}(e,e,n)}},31585:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(54164);function i(e,n,t,i){var a=r.unstable_batchedUpdates?function(e){r.unstable_batchedUpdates(t,e)}:t;return e.addEventListener&&e.addEventListener(n,a,i),{remove:function(){e.removeEventListener&&e.removeEventListener(n,a,i)}}}},84038:function(e,n,t){var r=t(72791);function i(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var a=i(r),o=function(){return o=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},o.apply(this,arguments)};!function(e){if(e&&"undefined"!==typeof window){var n=document.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=e,document.head.appendChild(n)}}('.marquee-container {\n  overflow-x: hidden !important;\n  display: flex !important;\n  flex-direction: row !important;\n  position: relative;\n  width: 100%;\n}\n.marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.overlay::before, .overlay::after {\n  background: linear-gradient(to right, var(--gradient-color));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n}\n.overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.marquee {\n  flex: 0 0 auto;\n  min-width: 100%;\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}')},55897:function(e,n,t){"use strict";t.r(n),n.default={}}}]);
//# sourceMappingURL=14.24e9bf4d.chunk.js.map