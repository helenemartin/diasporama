(this.webpackJsonpdiasporama=this.webpackJsonpdiasporama||[]).push([[0],{13:function(e){e.exports=JSON.parse('[{"id":1,"slug":"my-project","title":"oh, what a thrill","paragraph":"this is it","direction":"row-reverse","color":"#71BC8F","diapo":[{"text":"Image1","image":"/images/animinage1.jpg","alt":"bla"},{"text":"Image2","image":"/images/animage2.jpg","alt":"bla"},{"text":"Image3","image":"/images/animimage3.jpg","alt":"bla"}]},{"id":2,"slug":"my-second-project","title":"Woooo ooHHH","paragraph":"that is at","direction":"row","color":"coral","diapo":[{"text":"GGood","image":"/images/animinage1.jpg","alt":"bla"},{"text":"Ohh00h000o!!","image":"/images/animage2.jpg","alt":"bla"},{"text":"Brill!","image":"/images/animimage3.jpg","alt":"bla"}]},{"id":3,"slug":"my-third-project","title":"tactile cactile","paragraph":"It is meant to be","direction":"row-reverse","color":"rgb(142, 13, 59)","diapo":[{"text":"Proper Rad","image":"/images/animinage1.jpg","alt":"bla"},{"text":"Ohh00h000o!!","image":"/images/animage2.jpg","alt":"bla"},{"text":"Brill!","image":"/images/animimage3.jpg","alt":"bla"}]}]')},39:function(e,n,t){"use strict";t.r(n);var i,c=t(0),a=t(23),r=t.n(a),o=t(3),b=t(4),d=Object(b.a)(i||(i=Object(o.a)(['\n\n@font-face {font-family: "YoungSerif"; \nsrc: url("//db.onlinewebfonts.com/t/d18acb2db67fb3aae1ccd198d37a10e9.eot"); \nsrc: url("//db.onlinewebfonts.com/t/d18acb2db67fb3aae1ccd198d37a10e9.eot?#iefix") \nformat("embedded-opentype"), \nurl("//db.onlinewebfonts.com/t/d18acb2db67fb3aae1ccd198d37a10e9.woff2") format("woff2"), \nurl("//db.onlinewebfonts.com/t/d18acb2db67fb3aae1ccd198d37a10e9.woff") format("woff"),\n url("//db.onlinewebfonts.com/t/d18acb2db67fb3aae1ccd198d37a10e9.ttf") format("truetype"), \n url("//db.onlinewebfonts.com/t/d18acb2db67fb3aae1ccd198d37a10e9.svg#YoungSerif") format("svg"); }\n \n    html, body {\n        font-family: "Josefin Sans", sans-serif;\n        text-rendering: optimizeLegibility;\n        -moz-osx-font-smoothing: grayscale;\n        background: rgba(237, 249, 161, 1);\n        text-rendering: optimizeLegibility;\n        -webkit-font-smoothing: antialiased;\n        color: #6ddfa8;\n        font-size: 16px;\n        margin: 0;\n\n        \n    }\n']))),l=t(11),j=t(13),s=t(1);var h,O,u,f,x,g,p,m,v,w,y,z,I,T,S,k,F,H,P,C,Y,B,J,A=function(){return Object(s.jsx)("header",{children:Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)(l.b,{to:"/",children:"Home"})}),j.map((function(e){return Object(s.jsx)("li",{children:Object(s.jsx)(l.b,{to:"/".concat(e.slug),children:e.title})},e.title)}))]})})},E=t(6),L=t(17),N=t(27),W=t.p+"static/media/click.1d70c9e7.mp3",G=t(2),M=t(5),R=b.b.div(h||(h=Object(o.a)(["\n  background: #fff;\n  margin: 0;\n  position: relative;\n  width: 50vw;\n"]))),D=b.b.figure(O||(O=Object(o.a)(["\n  margin: 0;\n  position: relative;\n  width: 50vw;\n"]))),q=b.b.div(u||(u=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100vh;\n  background-color: rgba(0, 0, 0);\n  color: white;\n  z-index: 1;\n  visibility: ",";\n"])),(function(e){return e.flip?"visible":"hidden"})),K=b.b.h2(f||(f=Object(o.a)(["\n  background-color: black;\n"]))),Q=b.b.img(x||(x=Object(o.a)(["\n  padding-top: 0;\n  height: 100vh;\n  position: fixed;\n  object-fit: cover;\n  width: 50%;\n"]))),U=b.b.section(g||(g=Object(o.a)(["\n  display: flex;\n  height: 100vh;\n  justify-content: space-between;\n"]))),V=b.b.header(p||(p=Object(o.a)(["\n  width: 50vw;\n  height: 50vh;\n"]))),X=b.b.figcaption(m||(m=Object(o.a)(["\n  color: red;\n  font-size: 20px;\n  z-index: 1;\n"]))),Z=b.b.h2(v||(v=Object(o.a)(['\n  font-weight: 900;\n  font-size: 10vh;\n  text-decoration: underline overline;\n  font-family: "YoungSerif", sans-serif;\n'])));function $(e){e.children,e.color,e.direction,Object(M.a)(e,["children","color","direction"]);return Object(s.jsx)(R,{})}function _(e){var n=Object(c.useState)(!0),t=Object(L.a)(n,2),i=t[0],a=t[1],r=Object(c.useState)(0),o=Object(L.a)(r,2),b=o[0],d=o[1],j=Object(c.useState)(!1),h=Object(L.a)(j,2),O=h[0],u=h[1],f=Object(N.a)(W,{volume:.03}),x=Object(L.a)(f,1)[0],g=Object(c.useRef)(null),p=e.diaporama;Object(c.useEffect)((function(){var e=p.length,n=setInterval((function(){O&&(a((function(e){return!e})),g.current=setTimeout((function(){return a(!1)}),5e3),console.log(O),d((function(n){return(n+1)%e})),x())}),4500);return function(){return clearInterval(n)}}),[p.length,O,x]);var m=p[b];i?$.Text:$.NoText;return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)($.Section,{children:[Object(s.jsxs)($.Header,{children:[Object(s.jsx)("h1",{children:e.title}),Object(s.jsx)("p",{children:e.paragraph}),Object(s.jsx)("ul",{children:Object(s.jsx)(l.b,{to:"/",children:"+"})})]}),Object(s.jsxs)($.Wrapper,{onMouseEnter:function(){u(!0)},onMouseLeave:function(){a(!0),u(!1),clearTimeout(g.current),d(0)},children:[Object(s.jsx)($.Image,{alt:m.alt,src:"/diasporama".concat(m.image)}),Object(s.jsxs)($.Text,{flip:i,children:[Object(s.jsx)($.H2,{children:m.text}),Object(s.jsxs)($.Figcaption,{children:[b+1," / ",p.length]})]}),Object(s.jsx)("p",{children:m.paragraph})]})]})})}function ee(){var e=Object(E.f)().slug,n=j.find((function(n){return n.slug===e}));return n?Object(s.jsx)(_,{diaporama:n.diapo,title:n.title,paragraph:n.paragraph}):Object(s.jsx)("h2",{children:"This page doesn't exist"})}$.Wrapper=function(e){var n=e.children,t=Object(M.a)(e,["children"]);return Object(s.jsx)(R,Object(G.a)(Object(G.a)({},t),{},{children:n}))},$.Figure=function(e){var n=e.children,t=Object(M.a)(e,["children"]);return Object(s.jsx)(D,Object(G.a)(Object(G.a)({},t),{},{children:n}))},$.Text=function(e){var n=e.children,t=Object(M.a)(e,["children"]);return Object(s.jsx)(q,Object(G.a)(Object(G.a)({},t),{},{children:n}))},$.TextDisplay=function(e){var n=e.children,t=Object(M.a)(e,["children"]);return Object(s.jsx)(K,Object(G.a)(Object(G.a)({},t),{},{children:n}))},$.Section=function(e){var n=e.children,t=Object(M.a)(e,["children"]);return Object(s.jsx)(U,Object(G.a)(Object(G.a)({},t),{},{children:n}))},$.Header=function(e){var n=e.children,t=Object(M.a)(e,["children"]);return Object(s.jsx)(V,Object(G.a)(Object(G.a)({},t),{},{children:n}))},$.Image=function(e){var n=Object.assign({},e);return Object(s.jsx)(Q,Object(G.a)({},n))},$.Figcaption=function(e){var n=e.children,t=Object(M.a)(e,["children"]);return Object(s.jsx)(X,Object(G.a)(Object(G.a)({},t),{},{children:n}))},$.H2=function(e){var n=e.children,t=Object(M.a)(e,["children"]);return Object(s.jsx)(Z,Object(G.a)(Object(G.a)({},t),{},{children:n}))};var ne=b.b.div(w||(w=Object(o.a)(["\n  background-color: ",";\n  padding: 2%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: ",";\n  max-width: 1100px;\n  border-radius: 10px;\n  width: 100%;\n\n  @media (max-width: 1000px) {\n    flex-direction: column-reverse;\n  }\n"])),(function(e){return e.color}),(function(e){return e.direction})),te=b.b.div(y||(y=Object(o.a)(["\n  display: flex;\n  padding: 50px 5%;\n  overflow: hidden;\n  justify-content: center;\n"]))),ie=b.b.div(z||(z=Object(o.a)(["\n  margin: 0 100px;\n  @media (max-width: 1000px) {\n    margin: 0;\n  }\n"]))),ce=b.b.div(I||(I=Object(o.a)(["\n  @media (max-width: 1000px) {\n    ",":last-of-type h2 {\n      margin-bottom: 50px;\n    }\n  }\n"])),te),ae=b.b.h1(T||(T=Object(o.a)(['\n  font-family: "YoungSerif", Trebuchet, Arial, sans-serif;\n  font-size: 50px;\n  line-height: 1.1;\n  margin-bottom: 8px;\n  @media (max-width: 600px) {\n    font-size: 35px;\n  }\n']))),re=b.b.p(S||(S=Object(o.a)(["\n  font-size: 26px;\n  font-weight: normal;\n  line-height: normal;\n  @media (max-width: 600px) {\n    font-size: 18px;\n  }\n"]))),oe=b.b.section(k||(k=Object(o.a)(["\n  display: flex;\n  height: 100vh;\n  justify-content: space-between;\n"]))),be=b.b.figure(F||(F=Object(o.a)(["\n  background: #fff;\n  margin: 0;\n  width: 100vw;\n"]))),de=b.b.figcaption(H||(H=Object(o.a)(["\n  color: red;\n  font-size: 30px;\n  z-index: 1;\n"]))),le=b.b.div(P||(P=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  position: absolute;\n  width: 100%;\n  height: 100vh;\n  background-color: rgba(0, 0, 0);\n  z-index: 1;\n"]))),je=b.b.div(C||(C=Object(o.a)(["\n  height: 100vh;\n  position: fixed;\n  width: 50%;\n"]))),se=b.b.img(Y||(Y=Object(o.a)(["\n  max-width: 500px;\n  max-height: 500px;\n  object-fit: cover;\n  @media (max-width: 500px) {\n    max-width: 80vw;\n    padding-top: 2px;\n  }\n"]))),he=b.b.div(B||(B=Object(o.a)(["\n  display: none;\n  visibility: hidden;\n"]))),Oe=b.b.h2(J||(J=Object(o.a)(['\n  font-weight: 900;\n  font-size: 10vh;\n  text-decoration: underline overline;\n  font-family: "YoungSerif", sans-serif;\n'])));function ue(e){var n=e.children,t=e.color,i=void 0===t?"color":t,c=e.direction,a=void 0===c?"row":c;Object(M.a)(e,["children","color","direction"]);return Object(s.jsx)(te,{children:Object(s.jsx)(ne,{direction:a,color:i,children:n})})}function fe(){return Object(s.jsx)(ue.Container,{children:j.map((function(e){return Object(s.jsxs)(ue,{direction:e.direction,color:e.color,border:e.border,children:[Object(s.jsxs)(ue.Pane,{children:[Object(s.jsx)(ue.Title,{children:e.title}),Object(s.jsx)(ue.Paragraph,{children:e.paragraph})]}),Object(s.jsx)(ue.Pane,{children:Object(s.jsx)(l.b,{to:"/".concat(e.slug),children:Object(s.jsx)(ue.Image,{src:"/diasporama"+e.diapo[0].image,alt:e.diapo[0].alt})},e.id)})]})}))})}function xe(){return Object(s.jsx)(fe,{})}function ge(){return Object(s.jsx)(l.a,{children:Object(s.jsxs)(E.c,{children:[Object(s.jsx)(E.a,{path:"/Contact",children:Object(s.jsx)("p",{children:"I will be the contact page"})}),Object(s.jsxs)(E.a,{path:"/Projects",children:[Object(s.jsx)(A,{}),Object(s.jsx)("p",{children:"I will be the projects page "})]}),Object(s.jsx)(E.a,{path:"/:slug",children:Object(s.jsx)(ee,{})}),Object(s.jsx)(E.a,{path:"/About",children:Object(s.jsx)("p",{children:"I will be the About page"})}),Object(s.jsx)(E.a,{path:"/",children:Object(s.jsx)(xe,{})})]})})}ue.Container=function(e){var n=e.children,t=Object(M.a)(e,["children"]);return Object(s.jsx)(ce,Object(G.a)(Object(G.a)({},t),{},{children:n}))},ue.Title=function(e){var n=e.children,t=Object(M.a)(e,["children"]);return Object(s.jsx)(ae,Object(G.a)(Object(G.a)({},t),{},{children:n}))},ue.Pane=function(e){var n=e.children,t=Object(M.a)(e,["children"]);return Object(s.jsx)(ie,Object(G.a)(Object(G.a)({},t),{},{children:n}))},ue.Section=function(e){var n=e.children,t=Object(M.a)(e,["children"]);return Object(s.jsx)(oe,Object(G.a)(Object(G.a)({},t),{},{children:n}))},ue.Paragraph=function(e){var n=e.children,t=Object(M.a)(e,["children"]);return Object(s.jsx)(re,Object(G.a)(Object(G.a)({},t),{},{children:n}))},ue.Figure=function(e){var n=e.children,t=Object(M.a)(e,["children"]);return Object(s.jsx)(be,Object(G.a)(Object(G.a)({},t),{},{children:n}))},ue.FigCaption=function(e){var n=e.children,t=Object(M.a)(e,["children"]);return Object(s.jsx)(de,Object(G.a)(Object(G.a)({},t),{},{children:n}))},ue.TextFit=function(e){var n=e.children,t=Object(M.a)(e,["children"]);return Object(s.jsx)(le,Object(G.a)(Object(G.a)({},t),{},{children:n}))},ue.Image=function(e){var n=Object.assign({},e);return Object(s.jsx)(se,Object(G.a)({},n))},ue.ImageFit=function(e){var n=e.children,t=Object(M.a)(e,["children"]);return Object(s.jsx)(je,Object(G.a)(Object(G.a)({},t),{},{children:n}))},ue.NoTextFit=function(e){var n=e.children,t=Object(M.a)(e,["children"]);return Object(s.jsx)(he,Object(G.a)(Object(G.a)({},t),{},{children:n}))},ue.InnerTitle=function(e){var n=e.children,t=Object(M.a)(e,["children"]);return Object(s.jsx)(Oe,Object(G.a)(Object(G.a)({},t),{},{children:n}))},r.a.render(Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(d,{}),Object(s.jsx)(ge,{})]}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.704ded34.chunk.js.map