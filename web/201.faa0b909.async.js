(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[201],{45081:function(X,I,t){"use strict";var c=t(59301),i=(0,c.createContext)({});I.Z=i},32182:function(){},78151:function(X,I,t){"use strict";t.d(I,{Z:function(){return c}});var c=function(Z){if(!Z)return null;var E=typeof Z=="function";return E?Z():Z}},87982:function(X,I,t){"use strict";t.d(I,{Z:function(){return Z}});var c=t(96400),i=t(59301);function Z(){var E=i.useReducer(function(x){return x+1},0),f=(0,c.Z)(E,2),r=f[1];return r}},61409:function(X,I,t){"use strict";t.d(I,{C:function(){return q}});var c=t(38288),i=t(43079),Z=t(84502),E=t(96400),f=t(92691),r=t.n(f),x=t(88857),D=t(17007),a=t(59301),L=t(61104),$=t(13720),p=t(48248),M=a.createContext("default"),F=function(v){var K=v.children,g=v.size;return a.createElement(M.Consumer,null,function(d){return a.createElement(M.Provider,{value:g||d},K)})},H=M,Y=function(W,v){var K={};for(var g in W)Object.prototype.hasOwnProperty.call(W,g)&&v.indexOf(g)<0&&(K[g]=W[g]);if(W!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,g=Object.getOwnPropertySymbols(W);d<g.length;d++)v.indexOf(g[d])<0&&Object.prototype.propertyIsEnumerable.call(W,g[d])&&(K[g[d]]=W[g[d]]);return K},T=function(v,K){var g,d,m=a.useContext(H),u=a.useState(1),n=(0,E.Z)(u,2),o=n[0],h=n[1],R=a.useState(!1),C=(0,E.Z)(R,2),_=C[0],s=C[1],e=a.useState(!0),l=(0,E.Z)(e,2),N=l[0],O=l[1],z=a.useRef(),b=a.useRef(),P=(0,D.sQ)(K,z),S=a.useContext(L.E_),y=S.getPrefixCls,k=function(){if(!(!b.current||!z.current)){var A=b.current.offsetWidth,oe=z.current.offsetWidth;if(A!==0&&oe!==0){var _e=v.gap,Pe=_e===void 0?4:_e;Pe*2<oe&&h(oe-Pe*2<A?(oe-Pe*2)/A:1)}}};a.useEffect(function(){s(!0)},[]),a.useEffect(function(){O(!0),h(1)},[v.src]),a.useEffect(function(){k()},[v.gap]);var j=function(){var A=v.onError,oe=A?A():void 0;oe!==!1&&O(!1)},ne=v.prefixCls,de=v.shape,me=v.size,B=v.src,re=v.srcSet,Q=v.icon,se=v.className,ue=v.alt,he=v.draggable,ge=v.children,Ce=v.crossOrigin,ce=Y(v,["prefixCls","shape","size","src","srcSet","icon","className","alt","draggable","children","crossOrigin"]),w=me==="default"?m:me,Ee=Object.keys((0,Z.Z)(w)==="object"?w||{}:{}).some(function(le){return["xs","sm","md","lg","xl","xxl"].includes(le)}),xe=(0,$.Z)(Ee),pe=a.useMemo(function(){if((0,Z.Z)(w)!=="object")return{};var le=p.c4.find(function(oe){return xe[oe]}),A=w[le];return A?{width:A,height:A,lineHeight:"".concat(A,"px"),fontSize:Q?A/2:18}:{}},[xe,w]),ae=y("avatar",ne),Ne=r()((g={},(0,i.Z)(g,"".concat(ae,"-lg"),w==="large"),(0,i.Z)(g,"".concat(ae,"-sm"),w==="small"),g)),Ze=a.isValidElement(B),Oe=r()(ae,Ne,(d={},(0,i.Z)(d,"".concat(ae,"-").concat(de),!!de),(0,i.Z)(d,"".concat(ae,"-image"),Ze||B&&N),(0,i.Z)(d,"".concat(ae,"-icon"),!!Q),d),se),Re=typeof w=="number"?{width:w,height:w,lineHeight:"".concat(w,"px"),fontSize:Q?w/2:18}:{},ve;if(typeof B=="string"&&N)ve=a.createElement("img",{src:B,draggable:he,srcSet:re,onError:j,alt:ue,crossOrigin:Ce});else if(Ze)ve=B;else if(Q)ve=Q;else if(_||o!==1){var ye="scale(".concat(o,") translateX(-50%)"),Se={msTransform:ye,WebkitTransform:ye,transform:ye},ze=typeof w=="number"?{lineHeight:"".concat(w,"px")}:{};ve=a.createElement(x.Z,{onResize:k},a.createElement("span",{className:"".concat(ae,"-string"),ref:function(A){b.current=A},style:(0,c.Z)((0,c.Z)({},ze),Se)},ge))}else ve=a.createElement("span",{className:"".concat(ae,"-string"),style:{opacity:0},ref:function(A){b.current=A}},ge);return delete ce.onError,delete ce.gap,a.createElement("span",(0,c.Z)({},ce,{style:(0,c.Z)((0,c.Z)((0,c.Z)({},Re),pe),ce.style),className:Oe,ref:P}),ve)},U=a.forwardRef(T);U.defaultProps={shape:"circle",size:"default"};var G=U,ie=t(57336),ee=t(73397),te=t(95538),V=function(v){var K=a.useContext(L.E_),g=K.getPrefixCls,d=K.direction,m=v.prefixCls,u=v.className,n=u===void 0?"":u,o=v.maxCount,h=v.maxStyle,R=v.size,C=g("avatar-group",m),_=r()(C,(0,i.Z)({},"".concat(C,"-rtl"),d==="rtl"),n),s=v.children,e=v.maxPopoverPlacement,l=e===void 0?"top":e,N=v.maxPopoverTrigger,O=N===void 0?"hover":N,z=(0,ie.Z)(s).map(function(y,k){return(0,te.Tm)(y,{key:"avatar-key-".concat(k)})}),b=z.length;if(o&&o<b){var P=z.slice(0,o),S=z.slice(o,b);return P.push(a.createElement(ee.Z,{key:"avatar-popover-key",content:S,trigger:O,placement:l,overlayClassName:"".concat(C,"-popover")},a.createElement(G,{style:h},"+".concat(b-o)))),a.createElement(F,{size:R},a.createElement("div",{className:_,style:v.style},P))}return a.createElement(F,{size:R},a.createElement("div",{className:_,style:v.style},z))},J=V,fe=G;fe.Group=J;var q=fe},59608:function(X,I,t){"use strict";t.d(I,{q3:function(){return f},qI:function(){return r},RV:function(){return x},Rk:function(){return D},aM:function(){return a},Ux:function(){return L}});var c=t(38288),i=t(6023),Z=t(30201),E=t(59301),f=E.createContext({labelAlign:"right",vertical:!1,itemRef:function(){}}),r=E.createContext(null),x=function(p){var M=(0,Z.Z)(p,["prefixCls"]);return E.createElement(i.RV,(0,c.Z)({},M))},D=E.createContext({prefixCls:""}),a=E.createContext({}),L=function(p){var M=p.children,F=p.status,H=p.override,Y=(0,E.useContext)(a),T=(0,E.useMemo)(function(){var U=(0,c.Z)({},Y);return H&&delete U.isFormItemInput,F&&(delete U.status,delete U.hasFeedback,delete U.feedbackIcon),U},[F,H,Y]);return E.createElement(a.Provider,{value:T},M)}},13720:function(X,I,t){"use strict";var c=t(59301),i=t(87982),Z=t(48248);function E(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,r=(0,c.useRef)({}),x=(0,i.Z)();return(0,c.useEffect)(function(){var D=Z.ZP.subscribe(function(a){r.current=a,f&&x()});return function(){return Z.ZP.unsubscribe(D)}},[]),r.current}I.Z=E},73397:function(X,I,t){"use strict";var c=t(38288),i=t(59301),Z=t(61104),E=t(661),f=t(78151),r=t(90832),x=function(a,L){var $={};for(var p in a)Object.prototype.hasOwnProperty.call(a,p)&&L.indexOf(p)<0&&($[p]=a[p]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var M=0,p=Object.getOwnPropertySymbols(a);M<p.length;M++)L.indexOf(p[M])<0&&Object.prototype.propertyIsEnumerable.call(a,p[M])&&($[p[M]]=a[p[M]]);return $},D=i.forwardRef(function(a,L){var $=a.prefixCls,p=a.title,M=a.content,F=a._overlay,H=x(a,["prefixCls","title","content","_overlay"]),Y=i.useContext(Z.E_),T=Y.getPrefixCls,U=function(te){if(!(!p&&!M))return i.createElement(i.Fragment,null,p&&i.createElement("div",{className:"".concat(te,"-title")},(0,f.Z)(p)),i.createElement("div",{className:"".concat(te,"-inner-content")},(0,f.Z)(M)))},G=T("popover",$),ie=T();return i.createElement(E.Z,(0,c.Z)({},H,{prefixCls:G,ref:L,overlay:F||U(G),transitionName:(0,r.mL)(ie,"zoom-big",H.transitionName)}))});D.defaultProps={placement:"top",trigger:"hover",mouseEnterDelay:.1,mouseLeaveDelay:.1,overlayStyle:{}},I.Z=D},91044:function(X,I,t){"use strict";t.d(I,{Z:function(){return _}});var c=t(43079),i=t(38288),Z=t(84502),E=t(92691),f=t.n(E),r=t(59301),x=t(61104),D=t(30201),a=function(e){var l,N,O=e.prefixCls,z=e.className,b=e.style,P=e.size,S=e.shape,y=f()((l={},(0,c.Z)(l,"".concat(O,"-lg"),P==="large"),(0,c.Z)(l,"".concat(O,"-sm"),P==="small"),l)),k=f()((N={},(0,c.Z)(N,"".concat(O,"-circle"),S==="circle"),(0,c.Z)(N,"".concat(O,"-square"),S==="square"),(0,c.Z)(N,"".concat(O,"-round"),S==="round"),N)),j=typeof P=="number"?{width:P,height:P,lineHeight:"".concat(P,"px")}:{};return r.createElement("span",{className:f()(O,y,k,z),style:(0,i.Z)((0,i.Z)({},j),b)})},L=a,$=function(e){var l=e.prefixCls,N=e.className,O=e.active,z=r.useContext(x.E_),b=z.getPrefixCls,P=b("skeleton",l),S=(0,D.Z)(e,["prefixCls","className"]),y=f()(P,"".concat(P,"-element"),(0,c.Z)({},"".concat(P,"-active"),O),N);return r.createElement("div",{className:y},r.createElement(L,(0,i.Z)({prefixCls:"".concat(P,"-avatar")},S)))};$.defaultProps={size:"default",shape:"circle"};var p=$,M=function(e){var l,N=e.prefixCls,O=e.className,z=e.active,b=e.block,P=b===void 0?!1:b,S=r.useContext(x.E_),y=S.getPrefixCls,k=y("skeleton",N),j=(0,D.Z)(e,["prefixCls"]),ne=f()(k,"".concat(k,"-element"),(l={},(0,c.Z)(l,"".concat(k,"-active"),z),(0,c.Z)(l,"".concat(k,"-block"),P),l),O);return r.createElement("div",{className:ne},r.createElement(L,(0,i.Z)({prefixCls:"".concat(k,"-button")},j)))};M.defaultProps={size:"default"};var F=M,H=t(10973),Y={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"dot-chart",theme:"outlined"},T=Y,U=t(23986),G=function(e,l){return r.createElement(U.Z,(0,H.Z)((0,H.Z)({},e),{},{ref:l,icon:T}))};G.displayName="DotChartOutlined";var ie=r.forwardRef(G),ee=function(e){var l,N=e.prefixCls,O=e.className,z=e.style,b=e.active,P=r.useContext(x.E_),S=P.getPrefixCls,y=S("skeleton",N),k=f()(y,"".concat(y,"-element"),(0,c.Z)({},"".concat(y,"-active"),b),O),j=(l=e.children)!==null&&l!==void 0?l:r.createElement(ie,null);return r.createElement("div",{className:k},r.createElement("div",{className:f()("".concat(y,"-image"),O),style:z},j))},te=ee,V="M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",J=function(e){var l=e.prefixCls,N=e.className,O=e.style,z=e.active,b=r.useContext(x.E_),P=b.getPrefixCls,S=P("skeleton",l),y=f()(S,"".concat(S,"-element"),(0,c.Z)({},"".concat(S,"-active"),z),N);return r.createElement("div",{className:y},r.createElement("div",{className:f()("".concat(S,"-image"),N),style:O},r.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:"".concat(S,"-image-svg")},r.createElement("path",{d:V,className:"".concat(S,"-image-path")}))))},fe=J,q=function(e){var l,N=e.prefixCls,O=e.className,z=e.active,b=e.block,P=r.useContext(x.E_),S=P.getPrefixCls,y=S("skeleton",N),k=(0,D.Z)(e,["prefixCls"]),j=f()(y,"".concat(y,"-element"),(l={},(0,c.Z)(l,"".concat(y,"-active"),z),(0,c.Z)(l,"".concat(y,"-block"),b),l),O);return r.createElement("div",{className:j},r.createElement(L,(0,i.Z)({prefixCls:"".concat(y,"-input")},k)))};q.defaultProps={size:"default"};var W=q,v=t(22549),K=function(e){var l=function(y){var k=e.width,j=e.rows,ne=j===void 0?2:j;if(Array.isArray(k))return k[y];if(ne-1===y)return k},N=e.prefixCls,O=e.className,z=e.style,b=e.rows,P=(0,v.Z)(Array(b)).map(function(S,y){return r.createElement("li",{key:y,style:{width:l(y)}})});return r.createElement("ul",{className:f()(N,O),style:z},P)},g=K,d=function(e){var l=e.prefixCls,N=e.className,O=e.width,z=e.style;return r.createElement("h3",{className:f()(l,N),style:(0,i.Z)({width:O},z)})},m=d;function u(s){return s&&(0,Z.Z)(s)==="object"?s:{}}function n(s,e){return s&&!e?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}function o(s,e){return!s&&e?{width:"38%"}:s&&e?{width:"50%"}:{}}function h(s,e){var l={};return(!s||!e)&&(l.width="61%"),!s&&e?l.rows=3:l.rows=2,l}var R=function(e){var l=e.prefixCls,N=e.loading,O=e.className,z=e.style,b=e.children,P=e.avatar,S=e.title,y=e.paragraph,k=e.active,j=e.round,ne=r.useContext(x.E_),de=ne.getPrefixCls,me=ne.direction,B=de("skeleton",l);if(N||!("loading"in e)){var re,Q=!!P,se=!!S,ue=!!y,he;if(Q){var ge=(0,i.Z)((0,i.Z)({prefixCls:"".concat(B,"-avatar")},n(se,ue)),u(P));he=r.createElement("div",{className:"".concat(B,"-header")},r.createElement(L,(0,i.Z)({},ge)))}var Ce;if(se||ue){var ce;if(se){var w=(0,i.Z)((0,i.Z)({prefixCls:"".concat(B,"-title")},o(Q,ue)),u(S));ce=r.createElement(m,(0,i.Z)({},w))}var Ee;if(ue){var xe=(0,i.Z)((0,i.Z)({prefixCls:"".concat(B,"-paragraph")},h(Q,se)),u(y));Ee=r.createElement(g,(0,i.Z)({},xe))}Ce=r.createElement("div",{className:"".concat(B,"-content")},ce,Ee)}var pe=f()(B,(re={},(0,c.Z)(re,"".concat(B,"-with-avatar"),Q),(0,c.Z)(re,"".concat(B,"-active"),k),(0,c.Z)(re,"".concat(B,"-rtl"),me==="rtl"),(0,c.Z)(re,"".concat(B,"-round"),j),re),O);return r.createElement("div",{className:pe,style:z},he,Ce)}return typeof b!="undefined"?b:null};R.defaultProps={avatar:!1,title:!0,paragraph:!0},R.Button=F,R.Avatar=p,R.Input=W,R.Image=fe,R.Node=te;var C=R,_=C},42265:function(X,I,t){"use strict";var c=t(7586),i=t.n(c),Z=t(32182),E=t.n(Z)},52535:function(X,I){"use strict";function t(c,i){for(var Z=Object.assign({},c),E=0;E<i.length;E+=1){var f=i[E];delete Z[f]}return Z}I.Z=t},30457:function(X,I,t){"use strict";t.d(I,{Z:function(){return K}});var c=t(4949),i=t(67140),Z=t(49466),E=t(54012),f=t(84502),r=t(59301),x=t(81315),D=t(74983),a=t(70037),L=t(15481);function $(g){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!g)return{};var m=d.element,u=m===void 0?document.body:m,n={},o=Object.keys(g);return o.forEach(function(h){n[h]=u.style[h]}),o.forEach(function(h){u.style[h]=g[h]}),n}var p=$;function M(){return document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth}var F={},H=function(g){if(!(!M()&&!g)){var d="ant-scrolling-effect",m=new RegExp("".concat(d),"g"),u=document.body.className;if(g){if(!m.test(u))return;p(F),F={},document.body.className=u.replace(m,"").trim();return}var n=(0,L.Z)();if(n&&(F=p({position:"relative",width:"calc(100% - ".concat(n,"px)")}),!m.test(u))){var o="".concat(u," ").concat(d);document.body.className=o.trim()}}},Y=t(22549),T=[],U="ant-scrolling-effect",G=new RegExp("".concat(U),"g"),ie=0,ee=new Map,te=(0,i.Z)(function g(d){var m=this;(0,c.Z)(this,g),this.lockTarget=void 0,this.options=void 0,this.getContainer=function(){var u;return(u=m.options)===null||u===void 0?void 0:u.container},this.reLock=function(u){var n=T.find(function(o){var h=o.target;return h===m.lockTarget});n&&m.unLock(),m.options=u,n&&(n.options=u,m.lock())},this.lock=function(){var u;if(!T.some(function(C){var _=C.target;return _===m.lockTarget})){if(T.some(function(C){var _,s=C.options;return(s==null?void 0:s.container)===((_=m.options)===null||_===void 0?void 0:_.container)})){T=[].concat((0,Y.Z)(T),[{target:m.lockTarget,options:m.options}]);return}var n=0,o=((u=m.options)===null||u===void 0?void 0:u.container)||document.body;(o===document.body&&window.innerWidth-document.documentElement.clientWidth>0||o.scrollHeight>o.clientHeight)&&(n=(0,L.Z)());var h=o.className;if(T.filter(function(C){var _,s=C.options;return(s==null?void 0:s.container)===((_=m.options)===null||_===void 0?void 0:_.container)}).length===0&&ee.set(o,p({width:n!==0?"calc(100% - ".concat(n,"px)"):void 0,overflow:"hidden",overflowX:"hidden",overflowY:"hidden"},{element:o})),!G.test(h)){var R="".concat(h," ").concat(U);o.className=R.trim()}T=[].concat((0,Y.Z)(T),[{target:m.lockTarget,options:m.options}])}},this.unLock=function(){var u,n=T.find(function(R){var C=R.target;return C===m.lockTarget});if(T=T.filter(function(R){var C=R.target;return C!==m.lockTarget}),!(!n||T.some(function(R){var C,_=R.options;return(_==null?void 0:_.container)===((C=n.options)===null||C===void 0?void 0:C.container)}))){var o=((u=m.options)===null||u===void 0?void 0:u.container)||document.body,h=o.className;!G.test(h)||(p(ee.get(o),{element:o}),ee.delete(o),o.className=o.className.replace(G,"").trim())}},this.lockTarget=ie++,this.options=d}),V=0,J=(0,a.Z)();function fe(){return 0}var q={},W=function(d){if(!J)return null;if(d){if(typeof d=="string")return document.querySelectorAll(d)[0];if(typeof d=="function")return d();if((0,f.Z)(d)==="object"&&d instanceof window.HTMLElement)return d}return document.body},v=function(g){(0,Z.Z)(m,g);var d=(0,E.Z)(m);function m(u){var n;return(0,c.Z)(this,m),n=d.call(this,u),n.container=void 0,n.componentRef=r.createRef(),n.rafId=void 0,n.scrollLocker=void 0,n.renderComponent=void 0,n.updateScrollLocker=function(o){var h=o||{},R=h.visible,C=n.props,_=C.getContainer,s=C.visible;s&&s!==R&&J&&W(_)!==n.scrollLocker.getContainer()&&n.scrollLocker.reLock({container:W(_)})},n.updateOpenCount=function(o){var h=o||{},R=h.visible,C=h.getContainer,_=n.props,s=_.visible,e=_.getContainer;s!==R&&J&&W(e)===document.body&&(s&&!R?V+=1:o&&(V-=1));var l=typeof e=="function"&&typeof C=="function";(l?e.toString()!==C.toString():e!==C)&&n.removeCurrentContainer()},n.attachToParent=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(o||n.container&&!n.container.parentNode){var h=W(n.props.getContainer);return h?(h.appendChild(n.container),!0):!1}return!0},n.getContainer=function(){return J?(n.container||(n.container=document.createElement("div"),n.attachToParent(!0)),n.setWrapperClassName(),n.container):null},n.setWrapperClassName=function(){var o=n.props.wrapperClassName;n.container&&o&&o!==n.container.className&&(n.container.className=o)},n.removeCurrentContainer=function(){var o,h;(o=n.container)===null||o===void 0||(h=o.parentNode)===null||h===void 0||h.removeChild(n.container)},n.switchScrollingEffect=function(){V===1&&!Object.keys(q).length?(H(),q=p({overflow:"hidden",overflowX:"hidden",overflowY:"hidden"})):V||(p(q),q={},H(!0))},n.scrollLocker=new te({container:W(u.getContainer)}),n}return(0,i.Z)(m,[{key:"componentDidMount",value:function(){var n=this;this.updateOpenCount(),this.attachToParent()||(this.rafId=(0,x.Z)(function(){n.forceUpdate()}))}},{key:"componentDidUpdate",value:function(n){this.updateOpenCount(n),this.updateScrollLocker(n),this.setWrapperClassName(),this.attachToParent()}},{key:"componentWillUnmount",value:function(){var n=this.props,o=n.visible,h=n.getContainer;J&&W(h)===document.body&&(V=o&&V?V-1:V),this.removeCurrentContainer(),x.Z.cancel(this.rafId)}},{key:"render",value:function(){var n=this.props,o=n.children,h=n.forceRender,R=n.visible,C=null,_={getOpenCount:function(){return V},getContainer:this.getContainer,switchScrollingEffect:this.switchScrollingEffect,scrollLocker:this.scrollLocker};return(h||R||this.componentRef.current)&&(C=r.createElement(D.Z,{getContainer:this.getContainer,ref:this.componentRef},o(_))),C}}]),m}(r.Component),K=v},15481:function(X,I,t){"use strict";t.d(I,{Z:function(){return i},o:function(){return E}});var c;function i(f){if(typeof document=="undefined")return 0;if(f||c===void 0){var r=document.createElement("div");r.style.width="100%",r.style.height="200px";var x=document.createElement("div"),D=x.style;D.position="absolute",D.top="0",D.left="0",D.pointerEvents="none",D.visibility="hidden",D.width="200px",D.height="150px",D.overflow="hidden",x.appendChild(r),document.body.appendChild(x);var a=r.offsetWidth;x.style.overflow="scroll";var L=r.offsetWidth;a===L&&(L=x.clientWidth),document.body.removeChild(x),c=a-L}return c}function Z(f){var r=f.match(/^(.*)px$/),x=Number(r==null?void 0:r[1]);return Number.isNaN(x)?i():x}function E(f){if(typeof document=="undefined"||!f||!(f instanceof Element))return{width:0,height:0};var r=getComputedStyle(f,"::-webkit-scrollbar"),x=r.width,D=r.height;return{width:Z(x),height:Z(D)}}}}]);
