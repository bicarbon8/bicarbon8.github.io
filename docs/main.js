var __webpack_modules__={431:(o,v,u)=>{u.e(734).then(u.bind(u,734)).catch(f=>console.error(f))}},__webpack_module_cache__={};function __webpack_require__(o){var v=__webpack_module_cache__[o];if(void 0!==v)return v.exports;var u=__webpack_module_cache__[o]={exports:{}};return __webpack_modules__[o](u,u.exports,__webpack_require__),u.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.c=__webpack_module_cache__,__webpack_require__.d=(o,v)=>{for(var u in v)__webpack_require__.o(v,u)&&!__webpack_require__.o(o,u)&&Object.defineProperty(o,u,{enumerable:!0,get:v[u]})},__webpack_require__.f={},__webpack_require__.e=o=>Promise.all(Object.keys(__webpack_require__.f).reduce((v,u)=>(__webpack_require__.f[u](o,v),v),[])),__webpack_require__.u=o=>o+".js",__webpack_require__.miniCssF=o=>{},__webpack_require__.o=(o,v)=>Object.prototype.hasOwnProperty.call(o,v),(()=>{var o={},v="bicarbon8GithubIo:";__webpack_require__.l=(u,f,p,h)=>{if(o[u])o[u].push(f);else{var l,_;if(void 0!==p)for(var g=document.getElementsByTagName("script"),S=0;S<g.length;S++){var c=g[S];if(c.getAttribute("src")==u||c.getAttribute("data-webpack")==v+p){l=c;break}}l||(_=!0,(l=document.createElement("script")).type="module",l.charset="utf-8",l.timeout=120,__webpack_require__.nc&&l.setAttribute("nonce",__webpack_require__.nc),l.setAttribute("data-webpack",v+p),l.src=__webpack_require__.tu(u)),o[u]=[f];var b=(C,y)=>{l.onerror=l.onload=null,clearTimeout(w);var m=o[u];if(delete o[u],l.parentNode&&l.parentNode.removeChild(l),m&&m.forEach(d=>d(y)),C)return C(y)},w=setTimeout(b.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=b.bind(null,l.onerror),l.onload=b.bind(null,l.onload),_&&document.head.appendChild(l)}}})(),__webpack_require__.r=o=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},(()=>{__webpack_require__.S={};var o={},v={};__webpack_require__.I=(u,f)=>{f||(f=[]);var p=v[u];if(p||(p=v[u]={}),!(f.indexOf(p)>=0)){if(f.push(p),o[u])return o[u];__webpack_require__.o(__webpack_require__.S,u)||(__webpack_require__.S[u]={});var h=__webpack_require__.S[u],_="bicarbon8GithubIo",g=(b,w,C,y)=>{var m=h[b]=h[b]||{},d=m[w];(!d||!d.loaded&&(!y!=!d.eager?y:_>d.from))&&(m[w]={get:C,from:_,eager:!!y})},c=[];return"default"===u&&(g("@angular/common","13.2.0",()=>__webpack_require__.e(895).then(()=>()=>__webpack_require__(895))),g("@angular/core","13.2.0",()=>__webpack_require__.e(738).then(()=>()=>__webpack_require__(738))),g("@angular/router","13.2.0",()=>__webpack_require__.e(834).then(()=>()=>__webpack_require__(30)))),o[u]=c.length?Promise.all(c).then(()=>o[u]=1):1}}})(),(()=>{var o;__webpack_require__.tt=()=>(void 0===o&&(o={createScriptURL:v=>v},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(o=trustedTypes.createPolicy("angular#bundler",o))),o)})(),__webpack_require__.tu=o=>__webpack_require__.tt().createScriptURL(o),(()=>{var o;if("string"==typeof import.meta.url&&(o=import.meta.url),!o)throw new Error("Automatic publicPath is not supported in this browser");o=o.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=o})(),(()=>{var o=e=>{var t=a=>a.split(".").map(i=>+i==i?+i:i),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=r[1]?t(r[1]):[];return r[2]&&(n.length++,n.push.apply(n,t(r[2]))),r[3]&&(n.push([]),n.push.apply(n,t(r[3]))),n},u=e=>{var t=e[0],r="";if(1===e.length)return"*";if(t+.5){r+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var n=1,a=1;a<e.length;a++)n--,r+="u"==(typeof(s=e[a]))[0]?"-":(n>0?".":"")+(n=2,s);return r}var i=[];for(a=1;a<e.length;a++){var s=e[a];i.push(0===s?"not("+V()+")":1===s?"("+V()+" || "+V()+")":2===s?i.pop()+" "+i.pop():u(s))}return V();function V(){return i.pop().replace(/^\((.+)\)$/,"$1")}},f=(e,t)=>{if(0 in e){t=o(t);var r=e[0],n=r<0;n&&(r=-r-1);for(var a=0,i=1,s=!0;;i++,a++){var V,x,E=i<e.length?(typeof e[i])[0]:"";if(a>=t.length||"o"==(x=(typeof(V=t[a]))[0]))return!s||("u"==E?i>r&&!n:""==E!=n);if("u"==x){if(!s||"u"!=E)return!1}else if(s)if(E==x)if(i<=r){if(V!=e[i])return!1}else{if(n?V>e[i]:V<e[i])return!1;V!=e[i]&&(s=!1)}else if("s"!=E&&"n"!=E){if(n||i<=r)return!1;s=!1,i--}else{if(i<=r||x<E!=n)return!1;s=!1}else"s"!=E&&"n"!=E&&(s=!1,i--)}}var T=[],P=T.pop.bind(T);for(a=1;a<e.length;a++){var k=e[a];T.push(1==k?P()|P():2==k?P()&P():k?f(k,t):!P())}return!!P()},l=(e,t)=>{var r=e[t];return Object.keys(r).reduce((n,a)=>!n||!r[n].loaded&&((e,t)=>{e=o(e),t=o(t);for(var r=0;;){if(r>=e.length)return r<t.length&&"u"!=(typeof t[r])[0];var n=e[r],a=(typeof n)[0];if(r>=t.length)return"u"==a;var i=t[r],s=(typeof i)[0];if(a!=s)return"o"==a&&"n"==s||"s"==s||"u"==a;if("o"!=a&&"u"!=a&&n!=i)return n<i;r++}})(n,a)?a:n,0)},c=(e,t,r,n)=>{var a=l(e,r);if(!f(n,a))throw new Error(((e,t,r,n)=>"Unsatisfied version "+r+" from "+(r&&e[t][r].from)+" of shared singleton module "+t+" (required "+u(n)+")")(e,r,a,n));return m(e[r][a])},m=e=>(e.loaded=1,e.get()),O=(e=>function(t,r,n,a){var i=__webpack_require__.I(t);return i&&i.then?i.then(e.bind(e,t,__webpack_require__.S[t],r,n,a)):e(t,__webpack_require__.S[t],r,n,a)})((e,t,r,n,a)=>t&&__webpack_require__.o(t,r)?c(t,0,r,n):a()),j={},A={464:()=>O("default","@angular/router",[1,13,2,0],()=>__webpack_require__.e(30).then(()=>()=>__webpack_require__(30))),643:()=>O("default","@angular/common",[1,13,2,0],()=>__webpack_require__.e(181).then(()=>()=>__webpack_require__(895))),802:()=>O("default","@angular/core",[1,13,2,0],()=>__webpack_require__.e(738).then(()=>()=>__webpack_require__(738)))},M={734:[464,643,802],834:[643,802],895:[802]};__webpack_require__.f.consumes=(e,t)=>{__webpack_require__.o(M,e)&&M[e].forEach(r=>{if(__webpack_require__.o(j,r))return t.push(j[r]);var n=s=>{j[r]=0,__webpack_require__.m[r]=V=>{delete __webpack_require__.c[r],V.exports=s()}},a=s=>{delete j[r],__webpack_require__.m[r]=V=>{throw delete __webpack_require__.c[r],s}};try{var i=A[r]();i.then?t.push(j[r]=i.then(n).catch(a)):n(i)}catch(s){a(s)}})}})(),(()=>{var o={179:0};__webpack_require__.f.j=(f,p)=>{var h=__webpack_require__.o(o,f)?o[f]:void 0;if(0!==h)if(h)p.push(h[2]);else{var l=new Promise((c,b)=>h=o[f]=[c,b]);p.push(h[2]=l);var _=__webpack_require__.p+__webpack_require__.u(f),g=new Error;__webpack_require__.l(_,c=>{if(__webpack_require__.o(o,f)&&(0!==(h=o[f])&&(o[f]=void 0),h)){var b=c&&("load"===c.type?"missing":c.type),w=c&&c.target&&c.target.src;g.message="Loading chunk "+f+" failed.\n("+b+": "+w+")",g.name="ChunkLoadError",g.type=b,g.request=w,h[1](g)}},"chunk-"+f,f)}};var v=(f,p)=>{var g,S,[h,l,_]=p,c=0;if(h.some(w=>0!==o[w])){for(g in l)__webpack_require__.o(l,g)&&(__webpack_require__.m[g]=l[g]);_&&_(__webpack_require__)}for(f&&f(p);c<h.length;c++)__webpack_require__.o(o,S=h[c])&&o[S]&&o[S][0](),o[S]=0},u=self.webpackChunkbicarbon8GithubIo=self.webpackChunkbicarbon8GithubIo||[];u.forEach(v.bind(null,0)),u.push=v.bind(null,u.push.bind(u))})();var __webpack_exports__=__webpack_require__(431);