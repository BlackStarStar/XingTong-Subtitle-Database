(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[707],{35880:function(U,j,l){"use strict";l.r(j),l.d(j,{default:function(){return Et}});var B=l(49426),Ft=l(91273),nt=l(17067),R=l(84479),Rt=l(73667),W=l(1900),Tt=l(85489),at=l(41132),T=l(73025),O=l(11108),L=l(9882),J=l(62377),Ot=l(53168),f=l(27274),Lt=l(30606),d=l(25861),Jt=l(16613),K=l(5981),Mt=l(9916),G=l(90757),M=l(59301),st=l(22056),$=l(59503),it=l(54348),lt=l(18999),ot=l(89122),ut=l(61230),ct=l(60775),dt=l.n(ct),ht=null;function Vt(o,s){{var a=new Set,i=_createForOfIteratorHelper(s.staff),t;try{for(i.s();!(t=i.n()).done;){var r=t.value;if(r!=="F"){var n=_createForOfIteratorHelper(s.skin[r]),u;try{for(n.s();!(u=n.n()).done;){var v=u.value;a.add(v)}}catch(p){n.e(p)}finally{n.f()}}}}catch(p){i.e(p)}finally{i.f()}var h=Array.from(a);if(h.length!==0&&!Y(o.skin,h))return!1}var S=_createForOfIteratorHelper(ht),Z;try{for(S.s();!(Z=S.n()).done;){var g=Z.value;if(!Y(o[g],s[g]))return!1}}catch(p){S.e(p)}finally{S.f()}if(o.titlestr===""&&o.tagstr===""&&o.typestr===""||s.title.toLowerCase().indexOf(o.titlestr.toLowerCase())!==-1)return!0;{var y=_createForOfIteratorHelper(s.tags),D;try{for(y.s();!(D=y.n()).done;){var m=D.value;if(m.toLowerCase().indexOf(o.tagstr.toLowerCase())!==-1)return!0}}catch(p){y.e(p)}finally{y.f()}}{var c=_createForOfIteratorHelper(s.items),x;try{for(c.s();!(x=c.n()).done;){var C=x.value,b=_createForOfIteratorHelper(C.item),I;try{for(b.s();!(I=b.n()).done;){var A=I.value;if(A[0].toLowerCase().indexOf(o.typestr.toLowerCase())!==-1)return!0}}catch(p){b.e(p)}finally{b.f()}}}catch(p){c.e(p)}finally{c.f()}}return!1}function kt(o){var s=new XMLHttpRequest;s.open("GET",o,!1),s.send(null);var a;try{a=JSON.parse(s.responseText)}catch(i){a={title:"error"}}finally{return a}}function Ht(o,s){var a=new XMLHttpRequest;a.open("POST",o,!1),a.setRequestHeader("Content-Type","application/json");var i=JSON.stringify(s);a.send(i);var t;try{t=JSON.parse(a.responseText)}catch(r){t={title:"error"}}finally{return t}}function ft(o,s){var a=new XMLHttpRequest;a.open("GET",o,!1),a.send(null);var i;a.status!==200&&(a.open("GET",s,!1),a.send(null));try{i=a.responseText}catch(t){throw i="error http",i}finally{return i}}function z(o){for(var s=[],a=o.length-1;a>=0;a--)s.push(o[a]);return s}function Y(o,s){return o.length+s.length!==Array.from(new Set([].concat(_toConsumableArray(o),_toConsumableArray(s)))).length}var vt=["https://raw.githubusercontent.com/BlackStarStar/XingTong-Subtitle-Database/main","https://cdn.jsdelivr.net/gh/BlackStarStar/XingTong-Subtitle-Database@latest"],Nt="8001",pt="https://apihk.asdb.live/Api/Subtitle_Search/sub_search",xt=1,P="https://raw-gh.gcdn.mirr.one/BlackStarStar/XingTong-Subtitle-Database/main/db",V="https://raw.githubusercontents.com/BlackStarStar/XingTong-Subtitle-Database/main/db",E={RunOnLocal:xt!==0,sourceUrl:vt[1],queryAPI:pt,MainJsonAPI:P+"/Main_Data.json",MainJsonAPI2:V+"/Main_Data.json",IndexerAPI:P+"/Indexer_Data",SubtitlesAPI:P+"/",SubtitlesAPI2:V+"/",SearchWordsAPI:P+"/Search_Data.json",SearchWordsAPI2:V+"/Search_Data.json"},mt=l(85026),St=l(55790),gt=l.n(St),Xt=l(84832),e=l(37712),Q=G.Z.Title,q=G.Z.Text,yt=K.Z.Search;function _(o,s){return o.split(s).length-1;var a,i,t}var jt="yellow";function Zt(o){var s=E.SubtitlesAPI+o+".srt",a=E.SubtitlesAPI2+o+".srt",i="",t=[];i=ft(s,a);for(var r=i.split(`
`),n=0;n<r.length-2;n+=4){var u=r[n]+"|"+r[n+1]+"|"+r[n+2];t.push(u)}return t=[t],t}function tt(o,s){fetch(o,{method:"get",responseType:"blob"}).then(function(a){return a.blob()}).then(function(a){var i=document.createElement("a"),t=window.URL.createObjectURL(a);i.href=t,i.download=s,i.click(),i.remove()})}var Dt=[{title:"\u65E5\u671F",width:80,dataIndex:"date"},{title:"\u65F6\u95F4",width:80,dataIndex:"hour"},{title:"BV\u53F7",width:80,dataIndex:"bv",render:function(s){return(0,e.jsx)("a",{href:"https://www.bilibili.com/"+s,target:"_blank",onClick:function(i){i.stopPropagation()},children:s})}},{title:"\u6807\u9898",dataIndex:"title",render:function(s){return(0,e.jsx)(f.Z,{children:(0,e.jsx)(d.Z,{md:12,children:s})})}},{title:"\u5339\u914D\u5173\u952E\u8BCD\u6570",dataIndex:"srtSearch",render:function(s){return(0,e.jsx)(f.Z,{children:(0,e.jsx)(d.Z,{md:12,children:s})})}},{title:"\u4E0B\u8F7D",width:180,render:function(s,a){return(0,e.jsx)(f.Z,{children:(0,e.jsx)(d.Z,{md:12,children:(0,e.jsx)("a",{onClick:function(t,r,n){t.stopPropagation(),tt("https://raw-gh.gcdn.mirr.one/BlackStarStar/XingTong-Subtitle-Database/main/db/"+a.bv+".srt",a.title+"_"+a.bv+".srt")},children:(0,e.jsx)($.Z,{title:"\u4E0B\u8F7D\u5B57\u5E55"})})})})}}],Ct=function(o){(0,L.Z)(a,o);var s=(0,J.Z)(a);function a(i){var t;return(0,T.Z)(this,a),t=s.call(this,i),t.state={input:""},t.handleSearch=function(r){t.props.parent.handleSearch(t.state.input)},t.handleClear=function(r){t.setState({input:""});var n=t.props.parent.props.initDatasrc,u=[];n.map(function(v){v.srtSearch=0,u.push(v)}),t.setState({isModalVisible:!1,currentID:0,dataSource:u}),t.props.parent.setState({dataSource:u,searchWords:"",keyword:"",currentID:0,srtSearch:!0})},t.handleReverse=function(r){t.props.parent.handleReverse()},t}return(0,O.Z)(a,[{key:"render",value:function(){var t=this;return(0,e.jsxs)(at.Z,{onKeyDown:function(n){n.keyCode===13&&t.handleSearch(n)},actions:[(0,e.jsx)(it.Z,{title:"\u9006\u5E8F",onClick:this.handleReverse}),(0,e.jsx)(lt.Z,{title:"\u6E05\u9664\u9009\u62E9",onClick:this.handleClear}),(0,e.jsx)(ot.Z,{title:"\u641C\u7D22",onClick:this.handleSearch})],children:[(0,e.jsx)(f.Z,{children:(0,e.jsx)(d.Z,{xs:24,md:24,align:"middle",children:(0,e.jsx)(Q,{level:2,children:"\u5B57\u5E55\u5E93\u68C0\u7D22"})})}),(0,e.jsxs)(f.Z,{style:{height:"50px"},children:[(0,e.jsx)(d.Z,{xs:0,md:6}),(0,e.jsx)(d.Z,{xs:24,md:12,align:"middle",children:(0,e.jsx)(K.Z,{style:{borderRadius:"50px"},placeholder:"\u5355\u6761\u5B57\u5E55\u68C0\u7D22\u{1F50D}",onChange:function(n){t.setState({input:n.target.value})},value:this.state.input})}),(0,e.jsx)(d.Z,{md:6,align:"middle"})]})]})}}]),a}(M.Component),bt=function(o){(0,L.Z)(a,o);var s=(0,J.Z)(a);function a(i){var t;return(0,T.Z)(this,a),t=s.call(this,i),t.state={dataSource:t.props.initDatasrc,isModalVisible:!1,displayBV:"",searchWords:"",currentID:0,keyword:"",searchJson:t.props.searchJson,loading:!0,hasLine:0,hasStr:0,srt:{},srtSearch:!0,test:0},t.handleCancel=function(){t.setState({isModalVisible:!1,currentID:0})},t.onSearch=function(r){t.setState({keyword:r.trim()})},t.onSearch1=function(r){var n=r.target.value;n&&n.trim()!==""?t.setState({keyword:n},function(){t.setState({hasLine:t.state.hasLine})}):t.setState({keyword:n})},t.handleSearch=function(r){if(r!=""){r=r.trim(),t.setState({searchWords:r,srtSearch:!1});var n=[],u=0;t.props.initDatasrc.map(function(h){if(t.props.searchJson.hasOwnProperty(h.bv)){if(t.props.searchJson[h.bv].includes(r)){n.push(h);var S=_(t.props.searchJson[h.bv],r);h.srtSearch=S,u+=S}}else console.log(h.bv+"\u7F3A\u5931")}),t.setState({dataSource:n});var v=n.length;W.default.info(v.toString()+"\u6761\u5B57\u5E55\u4E2D\u542B\u6709"+u+"\u4E2A\u5339\u914D\u7ED3\u679C")}else W.default.error("\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9")},t.scrollTop=function(){var r=document.getElementById("Table-top");r.scrollIntoView({behavior:"auto"})},t.scrollNext=function(r){var n=document.getElementsByClassName(r);if(n.length!==0){var u=t.state.currentID;n[u].scrollIntoView({behavior:"smooth"}),u>=n.length-1?t.setState({currentID:0}):t.setState({currentID:u+1})}},t.scrollPre=function(r){var n=document.getElementsByClassName(r);if(n.length!=0){var u=t.state.currentID;n[u].scrollIntoView({behavior:"smooth"}),u<=0?t.setState({currentID:n.length-1}):t.setState({currentID:u-1})}},t}return(0,O.Z)(a,[{key:"componentDidUpdate",value:function(){var t=this.props,r=t.reRender,n=t.parent,u=t.initDatasrc;r&&(this.setState({dataSource:u}),n.setState({reRender:!1}))}},{key:"handleReverse",value:function(){var t=z(this.state.dataSource);this.setState({dataSource:t})}},{key:"render",value:function(){var t,r=this,n=this.state,u=n.isModalVisible,v=n.displayBV,h=n.searchWords,S=n.loading,Z=n.srt,g=n.keyword,y=n.srtSearch,D=[];return v&&u&&(D=Z[v]),(0,e.jsxs)(st.ZP,{children:[(0,e.jsx)(Ct,{parent:this}),(0,e.jsx)(f.Z,{style:{marginTop:"20px"},children:(0,e.jsx)(d.Z,{xs:24,md:24,children:(0,e.jsx)(mt.ZP,{columns:[{title:"\u65E5\u671F",width:80,dataIndex:"date"},{title:"\u65F6\u95F4",width:80,dataIndex:"hour"},{title:"BV\u53F7",width:80,dataIndex:"bv",render:function(c){return(0,e.jsx)("a",{href:"https://www.bilibili.com/"+c,target:"_blank",onClick:function(C){C.stopPropagation()},children:c})}},{title:"\u6807\u9898",dataIndex:"title",render:function(c){return(0,e.jsx)(f.Z,{children:(0,e.jsx)(d.Z,{md:12,children:c})})}},(t={title:"\u5339\u914D\u5173\u952E\u8BCD\u6570",dataIndex:"srtSearch",hideInTable:y,sorter:function(c,x){return c-x},defaultSortOrder:"ascend",sortDirections:["descend","ascend"]},(0,R.Z)(t,"sorter",function(c,x){return c.srtSearch-x.srtSearch}),(0,R.Z)(t,"render",function(c){return(0,e.jsx)(f.Z,{children:(0,e.jsx)(d.Z,{md:12,children:c})})}),t),{title:"\u4E0B\u8F7D",width:180,render:function(c,x){return(0,e.jsx)(f.Z,{children:(0,e.jsx)(d.Z,{md:12,children:(0,e.jsx)("a",{onClick:function(b,I,A){b.stopPropagation(),tt("https://raw-gh.gcdn.mirr.one/BlackStarStar/XingTong-Subtitle-Database/main/db/"+x.bv+".srt",x.title+"_"+x.bv+".srt")},children:(0,e.jsx)($.Z,{title:"\u4E0B\u8F7D\u5B57\u5E55"})})})})}}],rowKey:"key",dataSource:this.state.dataSource,search:!1,loading:S,onLoad:this.state.loading=!1,toolBarRender:function(){return[(0,e.jsxs)("a",{style:{color:"#fff"},title:"\u4E0B\u8F7D\u5168\u90E8\u5B57\u5E55",href:"https://raw-gh.gcdn.mirr.one/BlackStarStar/XingTong-Subtitle-Database/main/db/All.zip",download:!0,children:["\u4E0B\u8F7D\u5168\u90E8",(0,e.jsx)(ut.Z,{style:{fontSize:"16px"},title:"\u4E0B\u8F7D\u5168\u90E8\u5B57\u5E55"})]})]},onRow:function(c){return{onClick:function(C){r.setState({isModalVisible:!0,displayBV:c.bv,part_time:c.part_time,title:c.title}),h!=""&&r.setState({keyword:h}),Z.hasOwnProperty(c.bv)||r.setState({srt:(0,R.Z)({},c.bv,Zt(c.bv))},function(){r.setState({hasLine:r.state.hasLine})})},style:{cursor:"pointer"}}}})})}),(0,e.jsxs)(nt.Z,{id:"modal",visible:u,maskClosable:!0,onCancel:this.handleCancel,footer:null,destroyOnClose:!0,width:600,loading:!0,children:[(0,e.jsxs)(f.Z,{children:[(0,e.jsx)(d.Z,{xs:24,md:24,align:"middle",children:(0,e.jsx)(Q,{level:3,children:this.state.title})}),(0,e.jsx)(d.Z,{justify:"center"})]}),(0,e.jsx)(f.Z,{justify:"end",children:(0,e.jsx)(yt,{placeholder:"\u641C\u7D22",allowClear:!0,style:{width:150},onChange:this.onSearch1,value:g,onSearch:this.onSearch})}),(0,e.jsxs)(f.Z,{justify:"end",style:{display:g!==""?"":"none"},xs:2,md:3,children:[this.state.hasLine,"\u53E5\u4E2D\u51FA\u73B0",this.state.hasStr,"\u6B21"]}),(0,e.jsxs)(f.Z,{children:[(0,e.jsx)(d.Z,{xs:3,md:3,children:"\u5E8F\u53F7"}),(0,e.jsx)(d.Z,{xs:10,md:10,children:"\u65F6\u95F4"}),(0,e.jsx)(d.Z,{xs:11,md:11,children:"\u5B57\u5E55"})]}),(0,e.jsxs)(f.Z,{style:{borderBottom:"2px solid"},children:[(0,e.jsx)(q,{type:"secondary",children:"\u6309\u4E0B\u9F20\u6807\u6EDA\u8F6E\u952E\u5FEB\u901F\u6D4F\u89C8"}),(0,e.jsx)(q,{type:"secondary",style:{display:v=="BV1aq4y1974i"?"":"none"},children:"     !!!!!\u751F\u65E5\u4F1A\u5B57\u5E55\u8F83\u957F\u8FD8\u672A\u6574\u7406!!!!!"})]}),(0,e.jsx)(f.Z,{children:(0,e.jsx)(d.Z,{span:24,style:{height:"500px",overflowY:"scroll"},children:D.map(function(m,c){var x=[];return r.state.hasLine=0,r.state.hasStr=0,m.map(function(C,b){var I=C.split("|"),A=I[0],p=I[1],k=I[2],et=!1,H=g.trim();k.includes(H)&&(et=!0,H&&(r.state.hasLine+=1,r.state.hasStr+=_(k,H)));for(var wt=parseInt(p.split("-->")[0].split(":")[0]),Bt=parseInt(p.split("-->")[0].split(":")[1]),Pt=parseInt(p.split("-->")[0].split(":")[2].split(",")[0]),N=r.state.part_time,F=wt*3600+60*Bt+Pt,X=0,w=0;w<N.length;w++)if(F<N[w]){X=w+1;break}else F=F-N[w],X=w+2;var rt="https://www.bilibili.com/"+v+"?p="+X+"&start_progress="+F*1e3,At="";et&&x.push((0,e.jsxs)(f.Z,{style:{borderBottom:"1px dashed"},className:At,children:[(0,e.jsx)(d.Z,{xs:3,md:3,style:{color:"#B8A6D9"},children:A}),(0,e.jsx)(d.Z,{xs:10,md:10,children:(0,e.jsx)("a",{target:"_blank",href:rt,children:p})}),(0,e.jsx)(d.Z,{xs:11,md:11,style:{color:"#E799B0"},children:(0,e.jsx)(dt(),{highlightStyle:{backgroundColor:jt,padding:0},searchWords:[g.trim()],autoEscape:!0,textToHighlight:k})})]},rt))}),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(f.Z,{children:(0,e.jsx)(d.Z,{style:{color:"#9AC8E2",borderBottom:"1px solid"},id:"Table-top",children:(0,e.jsx)("a",{target:"_blank",href:"https://www.bilibili.com/"+v+"?p="+(c+1),children:"\u5207\u7247"})})}),(0,e.jsx)(gt(),{rows:x})]})})})})]})]})}}]),a}(M.Component),It=function(o){(0,L.Z)(a,o);var s=(0,J.Z)(a);function a(){var i;(0,T.Z)(this,a);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return i=s.call.apply(s,[this].concat(r)),i.state={mainJson:[],indexerList:[],reRender:!1},i}return(0,O.Z)(a,[{key:"cancelRerender",value:function(){this.setState({reRender:!1}),console.log("\u5DF2\u53D6\u6D88")}},{key:"componentDidMount",value:function(){var t=this;fetch(E.MainJsonAPI).then(function(r){return r.json().then(function(n){t.setState({mainJson:n.data,reRender:!0})})},function(r){fetch(E.MainJsonAPI2).then(function(n){return n.json().then(function(u){t.setState({mainJson:u.data,reRender:!0})})})}),fetch(E.SearchWordsAPI).then(function(r){return r.json().then(function(n){t.setState({searchJson:n})})},function(r){fetch(E.SearchWordsAPI2).then(function(n){return n.json().then(function(u){t.setState({searchJson:u})})})})}},{key:"render",value:function(){var t=this.state,r=t.mainJson,n=t.reRender,u=t.searchJson,v=[];for(var h in r){var S=void 0,Z=void 0,g=void 0,y=void 0,D=void 0;try{S=r[h].title,Z=r[h].bv,g=r[h].date,y=r[h].time,D=r[h].part_time}catch(c){console.error("mainJson parse fault for n: "+h)}v.push({key:h,date:g,hour:y,bv:Z,title:S,part_time:D,srtSearch:0})}v=z(v);var m={initColumns:Dt,initDatasrc:v,reRender:n,parent:this,searchJson:u};return(0,e.jsx)(bt,(0,B.Z)({},m))}}]),a}(M.Component),Et=It},96200:function(U){function j(l){var B=new Error("Cannot find module '"+l+"'");throw B.code="MODULE_NOT_FOUND",B}j.keys=function(){return[]},j.resolve=j,j.id=96200,U.exports=j},71346:function(){},52825:function(){},85783:function(){},77179:function(){},67845:function(){},37456:function(){},16718:function(){}}]);
