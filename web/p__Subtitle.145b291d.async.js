(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[707],{35880:function(gt,H,l){"use strict";l.r(H),l.d(H,{default:function(){return yt}});var G=l(49426),St=l(91273),Y=l(17067),Ct=l(73667),B=l(1900),jt=l(85489),z=l(41132),R=l(73025),F=l(11108),P=l(9882),T=l(62377),Zt=l(53168),p=l(27274),Dt=l(30606),d=l(25861),It=l(16613),N=l(5981),bt=l(9916),J=l(90757),O=l(59301),Q=l(22056),q=l(54348),_=l(18999),tt=l(89122),et=l(60775),rt=l.n(et),at=null;function wt(o,n){{var a=new Set,i=_createForOfIteratorHelper(n.staff),t;try{for(i.s();!(t=i.n()).done;){var r=t.value;if(r!=="F"){var s=_createForOfIteratorHelper(n.skin[r]),u;try{for(s.s();!(u=s.n()).done;){var c=u.value;a.add(c)}}catch(v){s.e(v)}finally{s.f()}}}}catch(v){i.e(v)}finally{i.f()}var m=Array.from(a);if(m.length!==0&&!K(o.skin,m))return!1}var h=_createForOfIteratorHelper(at),f;try{for(h.s();!(f=h.n()).done;){var y=f.value;if(!K(o[y],n[y]))return!1}}catch(v){h.e(v)}finally{h.f()}if(o.titlestr===""&&o.tagstr===""&&o.typestr===""||n.title.toLowerCase().indexOf(o.titlestr.toLowerCase())!==-1)return!0;{var x=_createForOfIteratorHelper(n.tags),D;try{for(x.s();!(D=x.n()).done;){var C=D.value;if(C.toLowerCase().indexOf(o.tagstr.toLowerCase())!==-1)return!0}}catch(v){x.e(v)}finally{x.f()}}{var j=_createForOfIteratorHelper(n.items),g;try{for(j.s();!(g=j.n()).done;){var I=g.value,S=_createForOfIteratorHelper(I.item),E;try{for(S.s();!(E=S.n()).done;){var L=E.value;if(L[0].toLowerCase().indexOf(o.typestr.toLowerCase())!==-1)return!0}}catch(v){S.e(v)}finally{S.f()}}}catch(v){j.e(v)}finally{j.f()}}return!1}function Et(o){var n=new XMLHttpRequest;n.open("GET",o,!1),n.send(null);var a;try{a=JSON.parse(n.responseText)}catch(i){a={title:"error"}}finally{return a}}function At(o,n){var a=new XMLHttpRequest;a.open("POST",o,!1),a.setRequestHeader("Content-Type","application/json");var i=JSON.stringify(n);a.send(i);var t;try{t=JSON.parse(a.responseText)}catch(r){t={title:"error"}}finally{return t}}function nt(o){var n=new XMLHttpRequest;n.open("GET",o,!1),n.send(null);var a;if(n.status!==200)throw n.status;try{a=n.responseText}catch(i){throw a="error http",a}finally{return a}}function X(o){for(var n=[],a=o.length-1;a>=0;a--)n.push(o[a]);return n}function K(o,n){return o.length+n.length!==Array.from(new Set([].concat(_toConsumableArray(o),_toConsumableArray(n)))).length}var st=["https://raw.githubusercontent.com/BlackStarStar/XingTong-Subtitle-Database/main","https://cdn.jsdelivr.net/gh/BlackStarStar/XingTong-Subtitle-Database@latest"],Bt="8001",lt="https://apihk.asdb.live/Api/Subtitle_Search/sub_search",ot=1,b="https://cdn.jsdelivr.net/gh/BlackStarStar/XingTong-Subtitle-Database@latest/db",w={RunOnLocal:ot!==0,sourceUrl:st[1],queryAPI:lt,MainJsonAPI:b+"/Main_Data.json",IndexerAPI:b+"/Indexer_Data",SubtitlesAPI:b+"/",SearchWordsAPI:b+"/Search_Data.json"},it=l(85026),ut=l(55790),ct=l.n(ut),Rt=l(38092),e=l(37712),U=J.Z.Title,W=J.Z.Text,dt=N.Z.Search,ht="yellow";function vt(o){var n=w.SubtitlesAPI+o+".srt",a="",i=[];try{a=nt(n)}catch(u){throw console.error("getSubtitles fail, status:"+u.toString()),source}for(var t=a.split(`
`),r=0;r<t.length-2;r+=4){var s=t[r]+"|"+t[r+1]+"|"+t[r+2];i.push(s)}return i=[i],i}var ft=[{title:"\u65E5\u671F",width:80,dataIndex:"date"},{title:"\u65F6\u95F4",width:80,dataIndex:"hour"},{title:"BV\u53F7",width:80,dataIndex:"bv",render:function(n){return(0,e.jsx)("a",{href:"https://www.bilibili.com/"+n,target:"_blank",onClick:function(i){i.stopPropagation()},children:n})}},{title:"\u6807\u9898",dataIndex:"title",render:function(n){return(0,e.jsx)(p.Z,{children:(0,e.jsx)(d.Z,{md:12,children:n})})}}],pt=function(o){(0,P.Z)(a,o);var n=(0,T.Z)(a);function a(i){var t;return(0,R.Z)(this,a),t=n.call(this,i),t.state={input:""},t.handleSearch=function(r){t.props.parent.handleSearch(t.state.input)},t.handleClear=function(r){t.setState({input:""});var s=t.props.parent.props.initDatasrc;t.props.parent.setState({dataSource:s,searchWords:"",keyword:"",currentID:0})},t.handleReverse=function(r){t.props.parent.handleReverse()},t}return(0,F.Z)(a,[{key:"render",value:function(){var t=this;return(0,e.jsxs)(z.Z,{onKeyDown:function(s){s.keyCode===13&&t.handleSearch(s)},actions:[(0,e.jsx)(q.Z,{title:"\u9006\u5E8F",onClick:this.handleReverse}),(0,e.jsx)(_.Z,{title:"\u6E05\u9664\u9009\u62E9",onClick:this.handleClear}),(0,e.jsx)(tt.Z,{title:"\u641C\u7D22",onClick:this.handleSearch})],children:[(0,e.jsx)(p.Z,{children:(0,e.jsx)(d.Z,{xs:24,md:24,align:"middle",children:(0,e.jsx)(U,{level:2,children:"\u5B57\u5E55\u5E93\u68C0\u7D22"})})}),(0,e.jsxs)(p.Z,{style:{height:"50px"},children:[(0,e.jsx)(d.Z,{xs:0,md:6}),(0,e.jsx)(d.Z,{xs:24,md:12,align:"middle",children:(0,e.jsx)(N.Z,{style:{borderRadius:"50px"},placeholder:"\u5355\u6761\u5B57\u5E55\u68C0\u7D22\u{1F50D}",onChange:function(s){t.setState({input:s.target.value})},value:this.state.input})}),(0,e.jsx)(d.Z,{md:6,align:"middle"})]})]})}}]),a}(O.Component),mt=function(o){(0,P.Z)(a,o);var n=(0,T.Z)(a);function a(i){var t;return(0,R.Z)(this,a),t=n.call(this,i),t.state={dataSource:t.props.initDatasrc,isModalVisible:!1,displayBV:"",searchWords:"",currentID:0,keyword:""},t.handleCancel=function(){console.log("clear"),t.setState({isModalVisible:!1,currentID:0})},t.onSearch=function(r){t.setState({keyword:r.trim()})},t.handleSearch=function(r){r!=""?(t.setState({dataSource:t.props.initDatasrc}),r=r.trim(),t.setState({searchWords:r}),fetch(w.SearchWordsAPI).then(function(s){s.json().then(function(u){var c=[];t.props.initDatasrc.map(function(h){u[h.bv].includes(r)&&c.push(h)}),t.setState({dataSource:c});var m=c.length;B.default.info("\u5171"+m.toString()+"\u6761\u641C\u7D22\u7ED3\u679C\u5DF2\u5C55\u793A")})},function(s){console.error(s),B.default.error("\u5B57\u5E55\u5E93\u641C\u7D22\u5931\u8D25")})):B.default.error("\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9")},t.scrollTop=function(){var r=document.getElementById("Table-top");r.scrollIntoView({behavior:"auto"})},t.scrollNext=function(r){var s=document.getElementsByClassName(r);if(s.length!==0){var u=t.state.currentID;s[u].scrollIntoView({behavior:"smooth"}),u>=s.length-1?t.setState({currentID:0}):t.setState({currentID:u+1})}},t.scrollPre=function(r){var s=document.getElementsByClassName(r);if(s.length!=0){var u=t.state.currentID;s[u].scrollIntoView({behavior:"smooth"}),u<=0?t.setState({currentID:s.length-1}):t.setState({currentID:u-1})}},t}return(0,F.Z)(a,[{key:"componentDidUpdate",value:function(){var t=this.props,r=t.reRender,s=t.parent,u=t.initDatasrc;r&&(this.setState({dataSource:u}),s.setState({reRender:!1}))}},{key:"handleReverse",value:function(){var t=X(this.state.dataSource);this.setState({dataSource:t})}},{key:"render",value:function(){var t=this,r=this.state,s=r.isModalVisible,u=r.displayBV,c=r.searchWords,m=[];return u!==""&&(m=vt(u)),(0,e.jsxs)(Q.ZP,{children:[(0,e.jsx)(pt,{parent:this}),(0,e.jsx)(p.Z,{style:{marginTop:"20px"},children:(0,e.jsx)(d.Z,{xs:24,md:24,children:(0,e.jsx)(it.ZP,{columns:this.props.initColumns,rowKey:"key",dataSource:this.state.dataSource,search:!1,onRow:function(f){return{onClick:function(x){c!=""&&t.setState({keyword:c}),t.setState({isModalVisible:!0,displayBV:f.bv,part_time:f.part_time})},style:{cursor:"pointer"}}}})})}),(0,e.jsxs)(Y.Z,{id:"modal",visible:s,maskClosable:!0,onCancel:this.handleCancel,footer:null,destroyOnClose:!0,width:600,children:[(0,e.jsxs)(p.Z,{children:[(0,e.jsx)(d.Z,{xs:24,md:24,align:"middle",children:(0,e.jsx)(U,{children:"\u5B57\u5E55\u8868"})}),(0,e.jsx)(d.Z,{justify:"center"})]}),(0,e.jsx)(p.Z,{justify:"end",children:(0,e.jsx)(dt,{placeholder:"\u641C\u7D22",allowClear:!0,style:{width:150},onChange:function(f){t.setState({keyword:f.target.value})},value:this.state.keyword,onSearch:this.onSearch})}),(0,e.jsxs)(p.Z,{children:[(0,e.jsx)(d.Z,{xs:3,md:3,children:"\u5E8F\u53F7"}),(0,e.jsx)(d.Z,{xs:10,md:10,children:"\u65F6\u95F4"}),(0,e.jsx)(d.Z,{xs:11,md:11,children:"\u5B57\u5E55"})]}),(0,e.jsxs)(p.Z,{style:{borderBottom:"2px solid"},children:[(0,e.jsx)(W,{type:"secondary",children:"\u6309\u4E0B\u9F20\u6807\u6EDA\u8F6E\u952E\u5FEB\u901F\u6D4F\u89C8"}),(0,e.jsx)(W,{type:"secondary",style:{display:u=="BV1aq4y1974i"?"":"none"},children:"     !!!!!\u751F\u65E5\u4F1A\u5B57\u5E55\u8F83\u957F\u8FD8\u672A\u6574\u7406!!!!!"})]}),(0,e.jsx)(p.Z,{children:(0,e.jsx)(d.Z,{span:24,style:{height:"500px",overflowY:"scroll"},children:m.map(function(h,f){var y=[];return h.map(function(x,D){var C=x.split("|"),j=C[0],g=C[1],I=C[2],S=!1;I.includes(t.state.keyword.trim())&&(S=!0);for(var E=parseInt(g.split("-->")[0].split(":")[0]),L=parseInt(g.split("-->")[0].split(":")[1]),v=parseInt(g.split("-->")[0].split(":")[2].split(",")[0]),M=t.state.part_time,A=E*3600+60*L+v,V=0,Z=0;Z<M.length;Z++)if(A<M[Z]){V=Z+1;break}else A=A-M[Z],V=Z+2;var k="https://www.bilibili.com/"+u+"?p="+V+"&start_progress="+A*1e3,$="";I.toLowerCase().indexOf(c.toLowerCase())!==-1&&($="active-highlight"),S&&y.push((0,e.jsxs)(p.Z,{style:{borderBottom:"1px dashed"},className:$,children:[(0,e.jsx)(d.Z,{xs:3,md:3,style:{color:"#B8A6D9"},children:j}),(0,e.jsx)(d.Z,{xs:10,md:10,children:(0,e.jsx)("a",{target:"_blank",href:k,children:g})}),(0,e.jsx)(d.Z,{xs:11,md:11,style:{color:"#E799B0"},children:(0,e.jsx)(rt(),{highlightStyle:{backgroundColor:ht,padding:0},searchWords:[t.state.keyword.trim()],autoEscape:!0,textToHighlight:I})})]},k))}),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(p.Z,{children:(0,e.jsx)(d.Z,{style:{color:"#9AC8E2",borderBottom:"1px solid"},id:"Table-top",children:(0,e.jsx)("a",{target:"_blank",href:"https://www.bilibili.com/"+u+"?p="+(f+1),children:"\u5207\u7247"})})}),(0,e.jsx)(ct(),{rows:y})]})})})})]})]})}}]),a}(O.Component),xt=function(o){(0,P.Z)(a,o);var n=(0,T.Z)(a);function a(){var i;(0,R.Z)(this,a);for(var t=arguments.length,r=new Array(t),s=0;s<t;s++)r[s]=arguments[s];return i=n.call.apply(n,[this].concat(r)),i.state={mainJson:[],indexerList:[],reRender:!1},i}return(0,F.Z)(a,[{key:"cancelRerender",value:function(){this.setState({reRender:!1}),console.log("\u5DF2\u53D6\u6D88")}},{key:"componentDidMount",value:function(){var t=this;fetch(w.MainJsonAPI).then(function(r){return r.json().then(function(s){t.setState({mainJson:s.data,reRender:!0}),console.log("mainJson\u83B7\u53D6\u6210\u529F")})},function(r){console.error(r)}),fetch(w.SearchWordsAPI)}},{key:"render",value:function(){var t=this.state,r=t.mainJson,s=t.reRender,u=[];for(var c in r){var m=void 0,h=void 0,f=void 0,y=void 0,x=void 0;try{m=r[c].title,h=r[c].bv,f=r[c].date,y=r[c].time,x=r[c].part_time}catch(C){console.error("mainJson parse fault for n: "+c)}u.push({key:c,date:f,hour:y,bv:h,title:m,part_time:x})}u=X(u);var D={initColumns:ft,initDatasrc:u,reRender:s,parent:this};return(0,e.jsx)(mt,(0,G.Z)({},D))}}]),a}(O.Component),yt=xt}}]);
