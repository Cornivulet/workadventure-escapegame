var se=Object.defineProperty,ie=Object.defineProperties;var ue=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var pe=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable;var O=(o,e,r)=>e in o?se(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r,q=(o,e)=>{for(var r in e||(e={}))pe.call(e,r)&&O(o,r,e[r]);if(j)for(var r of j(e))ce.call(e,r)&&O(o,r,e[r]);return o},J=(o,e)=>ie(o,ue(e));class C{constructor(e){this.properties=e!=null?e:[]}get(e){const r=this.properties.filter(n=>n.name===e).map(n=>n.value);if(r.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(r.length!==0)return r[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,r){const n=this.get(e);if(n!==void 0){if(typeof n!==r)throw new Error('Expected property "'+e+'" to have type "'+r+'"');return n}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,r){const n=this.get(e);if(n===void 0)throw new Error('Property "'+e+'" is missing');if(typeof n!==r)throw new Error('Expected property "'+e+'" to have type "'+r+'"');return n}getType(e){const r=this.properties.filter(n=>n.name===e).map(n=>n.type);if(r.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(r.length!==0)return r[0]}}const k="https://unpkg.com/@workadventure/scripting-api-extra@1.3.2/dist";class le{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new C(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return e?WA.player.tags.includes(e):!0}get isWritable(){const e=this.properties.getString("writableBy");return e?WA.player.tags.includes(e):!0}}function N(o){const e=o?"#"+o.join():"";WA.nav.openCoWebSite(k+"/configuration.html"+e)}async function fe(o,e){const r=await WA.room.getTiledMap(),n=new Map;return Y(r.layers,n,o,e),n}function Y(o,e,r,n){for(const t of o)if(t.type==="objectgroup"){for(const a of t.objects)if(a.type==="variable"){if(!!r&&t.name!==r||!!n&&!n.includes(a.name))continue;e.set(a.name,new le(a))}}else t.type==="group"&&Y(t.layers,e,r,n)}let Z;async function D(){return Z===void 0&&(Z=be()),Z}async function be(){return ye(await WA.room.getTiledMap())}function ye(o){const e=new Map;return ee(o.layers,"",e),e}function ee(o,e,r){for(const n of o)n.type==="group"?ee(n.layers,e+n.name+"/",r):(n.name=e+n.name,r.set(n.name,n))}function de(o){let e=1/0,r=1/0,n=0,t=0;const a=o.data;if(typeof a=="string")throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let s=0;s<o.height;s++)for(let u=0;u<o.width;u++)a[u+s*o.width]!==0&&(e=Math.min(e,u),t=Math.max(t,u),r=Math.min(r,s),n=Math.max(n,s));return{top:r,left:e,right:t+1,bottom:n+1}}function oe(o){let e=1/0,r=1/0,n=0,t=0;for(const a of o){const s=de(a);s.left<e&&(e=s.left),s.top<r&&(r=s.top),s.right>t&&(t=s.right),s.bottom>n&&(n=s.bottom)}return{top:r,left:e,right:t,bottom:n}}/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var he=Object.prototype.toString,F=Array.isArray||function(e){return he.call(e)==="[object Array]"};function G(o){return typeof o=="function"}function ge(o){return F(o)?"array":typeof o}function R(o){return o.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function $(o,e){return o!=null&&typeof o=="object"&&e in o}function me(o,e){return o!=null&&typeof o!="object"&&o.hasOwnProperty&&o.hasOwnProperty(e)}var Ae=RegExp.prototype.test;function We(o,e){return Ae.call(o,e)}var Le=/\S/;function ve(o){return!We(Le,o)}var Me={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function we(o){return String(o).replace(/[&<>"'`=\/]/g,function(r){return Me[r]})}var Ee=/\s*/,Pe=/\s+/,K=/\s*=/,_e=/\s*\}/,Fe=/#|\^|\/|>|\{|&|=|!/;function Se(o,e){if(!o)return[];var r=!1,n=[],t=[],a=[],s=!1,u=!1,i="",f=0;function d(){if(s&&!u)for(;a.length;)delete t[a.pop()];else a=[];s=!1,u=!1}var m,L,y;function E(w){if(typeof w=="string"&&(w=w.split(Pe,2)),!F(w)||w.length!==2)throw new Error("Invalid tags: "+w);m=new RegExp(R(w[0])+"\\s*"),L=new RegExp("\\s*"+R(w[1])),y=new RegExp("\\s*"+R("}"+w[1]))}E(e||v.tags);for(var l=new z(o),b,g,M,S,B,P;!l.eos();){if(b=l.pos,M=l.scanUntil(m),M)for(var T=0,ae=M.length;T<ae;++T)S=M.charAt(T),ve(S)?(a.push(t.length),i+=S):(u=!0,r=!0,i+=" "),t.push(["text",S,b,b+1]),b+=1,S===`
`&&(d(),i="",f=0,r=!1);if(!l.scan(m))break;if(s=!0,g=l.scan(Fe)||"name",l.scan(Ee),g==="="?(M=l.scanUntil(K),l.scan(K),l.scanUntil(L)):g==="{"?(M=l.scanUntil(y),l.scan(_e),l.scanUntil(L),g="&"):M=l.scanUntil(L),!l.scan(L))throw new Error("Unclosed tag at "+l.pos);if(g==">"?B=[g,M,b,l.pos,i,f,r]:B=[g,M,b,l.pos],f++,t.push(B),g==="#"||g==="^")n.push(B);else if(g==="/"){if(P=n.pop(),!P)throw new Error('Unopened section "'+M+'" at '+b);if(P[1]!==M)throw new Error('Unclosed section "'+P[1]+'" at '+b)}else g==="name"||g==="{"||g==="&"?u=!0:g==="="&&E(M)}if(d(),P=n.pop(),P)throw new Error('Unclosed section "'+P[1]+'" at '+l.pos);return xe(Ce(t))}function Ce(o){for(var e=[],r,n,t=0,a=o.length;t<a;++t)r=o[t],r&&(r[0]==="text"&&n&&n[0]==="text"?(n[1]+=r[1],n[3]=r[3]):(e.push(r),n=r));return e}function xe(o){for(var e=[],r=e,n=[],t,a,s=0,u=o.length;s<u;++s)switch(t=o[s],t[0]){case"#":case"^":r.push(t),n.push(t),r=t[4]=[];break;case"/":a=n.pop(),a[5]=t[2],r=n.length>0?n[n.length-1][4]:e;break;default:r.push(t)}return e}function z(o){this.string=o,this.tail=o,this.pos=0}z.prototype.eos=function(){return this.tail===""};z.prototype.scan=function(e){var r=this.tail.match(e);if(!r||r.index!==0)return"";var n=r[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n};z.prototype.scanUntil=function(e){var r=this.tail.search(e),n;switch(r){case-1:n=this.tail,this.tail="";break;case 0:n="";break;default:n=this.tail.substring(0,r),this.tail=this.tail.substring(r)}return this.pos+=n.length,n};function _(o,e){this.view=o,this.cache={".":this.view},this.parent=e}_.prototype.push=function(e){return new _(e,this)};_.prototype.lookup=function(e){var r=this.cache,n;if(r.hasOwnProperty(e))n=r[e];else{for(var t=this,a,s,u,i=!1;t;){if(e.indexOf(".")>0)for(a=t.view,s=e.split("."),u=0;a!=null&&u<s.length;)u===s.length-1&&(i=$(a,s[u])||me(a,s[u])),a=a[s[u++]];else a=t.view[e],i=$(t.view,e);if(i){n=a;break}t=t.parent}r[e]=n}return G(n)&&(n=n.call(this.view)),n};function W(){this.templateCache={_cache:{},set:function(e,r){this._cache[e]=r},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}W.prototype.clearCache=function(){typeof this.templateCache!="undefined"&&this.templateCache.clear()};W.prototype.parse=function(e,r){var n=this.templateCache,t=e+":"+(r||v.tags).join(":"),a=typeof n!="undefined",s=a?n.get(t):void 0;return s==null&&(s=Se(e,r),a&&n.set(t,s)),s};W.prototype.render=function(e,r,n,t){var a=this.getConfigTags(t),s=this.parse(e,a),u=r instanceof _?r:new _(r,void 0);return this.renderTokens(s,u,n,e,t)};W.prototype.renderTokens=function(e,r,n,t,a){for(var s="",u,i,f,d=0,m=e.length;d<m;++d)f=void 0,u=e[d],i=u[0],i==="#"?f=this.renderSection(u,r,n,t,a):i==="^"?f=this.renderInverted(u,r,n,t,a):i===">"?f=this.renderPartial(u,r,n,a):i==="&"?f=this.unescapedValue(u,r):i==="name"?f=this.escapedValue(u,r,a):i==="text"&&(f=this.rawValue(u)),f!==void 0&&(s+=f);return s};W.prototype.renderSection=function(e,r,n,t,a){var s=this,u="",i=r.lookup(e[1]);function f(L){return s.render(L,r,n,a)}if(!!i){if(F(i))for(var d=0,m=i.length;d<m;++d)u+=this.renderTokens(e[4],r.push(i[d]),n,t,a);else if(typeof i=="object"||typeof i=="string"||typeof i=="number")u+=this.renderTokens(e[4],r.push(i),n,t,a);else if(G(i)){if(typeof t!="string")throw new Error("Cannot use higher-order sections without the original template");i=i.call(r.view,t.slice(e[3],e[5]),f),i!=null&&(u+=i)}else u+=this.renderTokens(e[4],r,n,t,a);return u}};W.prototype.renderInverted=function(e,r,n,t,a){var s=r.lookup(e[1]);if(!s||F(s)&&s.length===0)return this.renderTokens(e[4],r,n,t,a)};W.prototype.indentPartial=function(e,r,n){for(var t=r.replace(/[^ \t]/g,""),a=e.split(`
`),s=0;s<a.length;s++)a[s].length&&(s>0||!n)&&(a[s]=t+a[s]);return a.join(`
`)};W.prototype.renderPartial=function(e,r,n,t){if(!!n){var a=this.getConfigTags(t),s=G(n)?n(e[1]):n[e[1]];if(s!=null){var u=e[6],i=e[5],f=e[4],d=s;i==0&&f&&(d=this.indentPartial(s,f,u));var m=this.parse(d,a);return this.renderTokens(m,r,n,d,t)}}};W.prototype.unescapedValue=function(e,r){var n=r.lookup(e[1]);if(n!=null)return n};W.prototype.escapedValue=function(e,r,n){var t=this.getConfigEscape(n)||v.escape,a=r.lookup(e[1]);if(a!=null)return typeof a=="number"&&t===v.escape?String(a):t(a)};W.prototype.rawValue=function(e){return e[1]};W.prototype.getConfigTags=function(e){return F(e)?e:e&&typeof e=="object"?e.tags:void 0};W.prototype.getConfigEscape=function(e){if(e&&typeof e=="object"&&!F(e))return e.escape};var v={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(o){x.templateCache=o},get templateCache(){return x.templateCache}},x=new W;v.clearCache=function(){return x.clearCache()};v.parse=function(e,r){return x.parse(e,r)};v.render=function(e,r,n,t){if(typeof e!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+ge(e)+'" was given as the first argument for mustache#render(template, view, partials)');return x.render(e,r,n,t)};v.escape=we;v.Scanner=z;v.Context=_;v.Writer=W;class ze{constructor(e,r){this.template=e,this.state=r,this.ast=v.parse(e)}getValue(){return this.value===void 0&&(this.value=v.render(this.template,this.state)),this.value}onChange(e){const r=[];for(const n of this.getUsedVariables().values())r.push(this.state.onVariableChange(n).subscribe(()=>{const t=v.render(this.template,this.state);t!==this.value&&(this.value=t,e(this.value))}));return{unsubscribe:()=>{for(const n of r)n.unsubscribe()}}}isPureString(){return this.ast.length===0||this.ast.length===1&&this.ast[0][0]==="text"}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,r){for(const n of e){const t=n[0],a=n[1],s=n[4];["name","&","#","^"].includes(t)&&r.add(a),s!==void 0&&typeof s!="string"&&this.recursiveGetUsedVariables(s,r)}}}async function Be(){var o;const e=await D();for(const[r,n]of e.entries()){const t=(o=n.properties)!==null&&o!==void 0?o:[];for(const a of t){if(a.type==="int"||a.type==="bool"||a.type==="object"||typeof a.value!="string")continue;const s=new ze(a.value,WA.state);if(s.isPureString())continue;const u=s.getValue();Q(r,a.name,u),s.onChange(i=>{Q(r,a.name,i)})}}}function Q(o,e,r){WA.room.setProperty(o,e,r),e==="visible"&&(r?WA.room.showLayer(o):WA.room.hideLayer(o))}let I,V=0,U=0;function H(o){if(WA.state[o.name]){let e=o.properties.mustGetString("openLayer");for(const r of e.split(`
`))WA.room.showLayer(r);e=o.properties.mustGetString("closeLayer");for(const r of e.split(`
`))WA.room.hideLayer(r)}else{let e=o.properties.mustGetString("openLayer");for(const r of e.split(`
`))WA.room.hideLayer(r);e=o.properties.mustGetString("closeLayer");for(const r of e.split(`
`))WA.room.showLayer(r)}}function ke(o){const e=o.properties.getString("openSound"),r=o.properties.getNumber("soundRadius");let n=1;if(r){const t=ne(o.properties.mustGetString("openLayer").split(`
`));if(t>r)return;n=1-t/r}e&&WA.sound.loadSound(e).play({volume:n})}function De(o){const e=o.properties.getString("closeSound"),r=o.properties.getNumber("soundRadius");let n=1;if(r){const t=ne(o.properties.mustGetString("closeLayer").split(`
`));if(t>r)return;n=1-t/r}e&&WA.sound.loadSound(e).play({volume:n})}function re(o){return o.map(e=>I.get(e)).filter(e=>(e==null?void 0:e.type)==="tilelayer")}function ne(o){const e=re(o),r=oe(e),n=((r.right-r.left)/2+r.left)*32,t=((r.bottom-r.top)/2+r.top)*32;return Math.sqrt(Math.pow(V-n,2)+Math.pow(U-t,2))}function Te(o){WA.state.onVariableChange(o.name).subscribe(()=>{WA.state[o.name]?ke(o):De(o),H(o)}),H(o)}function Ze(o,e,r,n){const t=o.name;let a,s,u=!1;const i=r.getString("tag");let f=!0;i&&!WA.player.tags.includes(i)&&(f=!1);const d=!!i;function m(){var l;a&&a.remove(),a=WA.ui.displayActionMessage({message:(l=r.getString("closeTriggerMessage"))!==null&&l!==void 0?l:"Press SPACE to close the door",callback:()=>{WA.state[e.name]=!1,L()}})}function L(){var l;a&&a.remove(),a=WA.ui.displayActionMessage({message:(l=r.getString("openTriggerMessage"))!==null&&l!==void 0?l:"Press SPACE to open the door",callback:()=>{WA.state[e.name]=!0,m()}})}function y(l){const b=oe(re(e.properties.mustGetString("closeLayer").split(`
`)));s=WA.room.website.create({name:"doorKeypad"+l,url:n+"/keypad.html#"+encodeURIComponent(l),position:{x:b.right*32,y:b.top*32,width:32*3,height:32*4},allowApi:!0})}function E(){s&&(WA.room.website.delete(s.name),s=void 0)}WA.room.onEnterLayer(t).subscribe(()=>{if(u=!0,r.getBoolean("autoOpen")&&f){WA.state[e.name]=!0;return}if(!WA.state[e.name]&&(d&&!f||!d)&&(r.getString("code")||r.getString("codeVariable"))){y(t);return}!f||(WA.state[e.name]?m():L())}),WA.room.onLeaveLayer(t).subscribe(()=>{u=!1,r.getBoolean("autoClose")&&(WA.state[e.name]=!1),a&&a.remove(),E()}),WA.state.onVariableChange(e.name).subscribe(()=>{u&&(!r.getBoolean("autoClose")&&WA.state[e.name]===!0&&m(),s&&WA.state[e.name]===!0&&E(),!r.getBoolean("autoOpen")&&WA.state[e.name]===!1&&L())})}function Re(o){const e=o.properties.mustGetString("bellSound"),r=o.properties.getNumber("soundRadius");let n=1;if(r){const t=Math.sqrt(Math.pow(o.x-V,2)+Math.pow(o.y-U,2));if(t>r)return;n=1-t/r}WA.sound.loadSound(e).play({volume:n})}function Ie(o){WA.state[o.name]===void 0&&(WA.state[o.name]=0),WA.state.onVariableChange(o.name).subscribe(()=>{WA.state[o.name]&&Re(o)})}function Ge(o,e,r){let n;const t=e.getString("bellPopup");WA.room.onEnterLayer(r).subscribe(()=>{var a;t?n=WA.ui.openPopup(t,"",[{label:(a=e.getString("bellButtonText"))!==null&&a!==void 0?a:"Ring",callback:()=>{WA.state[o]=WA.state[o]+1}}]):WA.state[o]=WA.state[o]+1}),WA.room.onLeaveLayer(r).subscribe(()=>{n&&(n.close(),n=void 0)})}async function Ve(o){o=o!=null?o:k;const e=await fe();I=await D();for(const r of e.values())r.properties.get("door")&&Te(r),r.properties.get("bell")&&Ie(r);for(const r of I.values()){const n=new C(r.properties),t=n.getString("doorVariable");if(t&&r.type==="tilelayer"){const s=e.get(t);if(s===void 0)throw new Error('Cannot find variable "'+t+'" referred in the "doorVariable" property of layer "'+r.name+'"');Ze(r,s,n,o)}const a=n.getString("bellVariable");a&&Ge(a,n,r.name)}WA.player.onPlayerMove(r=>{V=r.x,U=r.y})}function Ue(o,e){const r=o.getString("bindVariable");if(r){const n=o.get("enterValue"),t=o.get("leaveValue"),a=o.getString("triggerMessage"),s=o.getString("tag");je(r,e,n,t,a,s)}}function je(o,e,r,n,t,a){a&&!WA.player.tags.includes(a)||(r!==void 0&&WA.room.onEnterLayer(e).subscribe(()=>{t||(WA.state[o]=r)}),n!==void 0&&WA.room.onLeaveLayer(e).subscribe(()=>{WA.state[o]=n}))}async function Oe(){const o=await D();for(const e of o.values()){const r=new C(e.properties);Ue(r,e.name)}}let X;async function qe(o){const e=await WA.room.getTiledMap();o=o!=null?o:k,X=await D();const r=e.layers.find(n=>n.name==="configuration");if(r){const t=new C(r.properties).getString("tag");(!t||WA.player.tags.includes(t))&&WA.ui.registerMenuCommand("Configure the room",()=>{WA.nav.openCoWebSite(o+"/configuration.html",!0)});for(const a of X.values()){const s=new C(a.properties),u=s.getString("openConfig");u&&a.type==="tilelayer"&&Je(u.split(","),a.name,s)}}}function Je(o,e,r){let n;const t=r.getString("openConfigAdminTag");let a=!0;t&&!WA.player.tags.includes(t)&&(a=!1);function s(){var i;n&&n.remove(),n=WA.ui.displayActionMessage({message:(i=r.getString("openConfigTriggerMessage"))!==null&&i!==void 0?i:"Press SPACE or touch here to configure",callback:()=>N(o)})}function u(){WA.nav.closeCoWebSite()}WA.room.onEnterLayer(e).subscribe(()=>{const i=r.getString("openConfigTrigger");a&&(i&&i==="onaction"?s():N(o))}),WA.room.onLeaveLayer(e).subscribe(()=>{n&&n.remove(),u()})}const Ne=[{lowerBound:0,uppperBound:.5,config:{width:250,height:390,scale:1}},{lowerBound:.5,uppperBound:.8,config:{width:224,height:350,scale:.9}},{lowerBound:.8,uppperBound:1.25,config:{width:132,height:211,scale:.53}},{lowerBound:1.25,uppperBound:2.28,config:{width:64,height:99,scale:.25}},{lowerBound:1.25,config:{width:39,height:63,scale:.16}}],$e=[{lowerBound:0,uppperBound:1,config:{width:427,height:270,scale:1}},{lowerBound:1,uppperBound:1.9,config:{width:300,height:188,scale:.7}},{lowerBound:1.9,uppperBound:3.5,config:{width:150,height:94,scale:.35}},{lowerBound:3.5,uppperBound:5,config:{width:93,height:58,scale:.21}},{lowerBound:4,config:{width:75,height:46,scale:.17}}];async function Ke(){var o;const e=WA.player.state.tutorialDone,r=/Mobi|Android/i.test(navigator.userAgent),t=await((o=(await WA.room.getTiledMap()).properties)===null||o===void 0?void 0:o.find(s=>s.name==="tutorial")),a=t&&t.value;if(!e&&a){Qe(r);let s=await WA.player.getPosition(),u;const i=await WA.room.website.get("tutorial"),f=()=>{const E=s.x+i.x+i.width>u.x+u.width,l=s.x+i.x<u.x,b=s.y+i.y+i.height>u.y+u.height,g=s.y+i.y<u.y;E?i.x=-i.width-1.5*16:l&&(i.x=1.5*16),b?i.y=-i.height:g&&(i.y=16)},d=y=>{i.width=y.width,i.height=y.height,i.scale=y.scale},m=y=>{const l=(r?Ne:$e).filter(b=>{if(b.lowerBound&&b.uppperBound)return b.lowerBound<y&&y<=b.uppperBound;if(b.lowerBound&&!b.uppperBound)return b.lowerBound<y;if(!b.lowerBound&&b.uppperBound)return y<=b.uppperBound;throw new Error(`Zoom level of: ${y} could not fit in any of the desktopConfig's ranges.`)});d(l[0].config)},L=()=>{if(u===void 0)return;const y=u.zoom;m(y),f()};WA.player.onPlayerMove(y=>{s=y,L()}),WA.camera.onCameraUpdate().subscribe(y=>{u=y,L()}),WA.player.state.tutorialDone=!0}}function Qe(o){let e={allow:"",name:"tutorial",url:k+"/tutorial.html",position:{height:224,width:407,x:16,y:-112},visible:!0,allowApi:!0,origin:"player",scale:.9};o&&(e=J(q({},e),{position:{x:32,y:-225,height:390,width:250},scale:1})),WA.room.website.create(e)}function te(){return WA.onInit().then(()=>{Ve().catch(o=>console.error(o)),Oe().catch(o=>console.error(o)),qe().catch(o=>console.error(o)),Be().catch(o=>console.error(o)),Ke().catch(o=>console.error(o))}).catch(o=>console.error(o))}let p;function c(){p!==void 0&&(p.close(),p=void 0)}function He(){return WA.onInit().then(()=>{console.log("Scripting API ready"),console.log("Player tags: ",WA.player.tags),WA.room.onEnterLayer("MaisonForet/a1zone").subscribe(()=>{p=WA.ui.openPopup("a1","Ch\xEAne : 1___",[])}),WA.room.onEnterLayer("MaisonForet/a2zone").subscribe(()=>{p=WA.ui.openPopup("a2","Ch\xEAne : _9__",[])}),WA.room.onEnterLayer("MaisonForet/a3zone").subscribe(()=>{p=WA.ui.openPopup("a3","Ch\xEAne : __5_",[])}),WA.room.onEnterLayer("MaisonForet/a4zone").subscribe(()=>{p=WA.ui.openPopup("a4","Ch\xEAne : ___7",[])}),WA.room.onEnterLayer("MaisonForet/a5zone").subscribe(()=>{p=WA.ui.openPopup("a5","Pin : 2___",[])}),WA.room.onEnterLayer("MaisonForet/a6zone").subscribe(()=>{p=WA.ui.openPopup("a6","Pin : _8__",[])}),WA.room.onEnterLayer("MaisonForet/a7zone").subscribe(()=>{p=WA.ui.openPopup("a7","Pin : __6_",[])}),WA.room.onEnterLayer("MaisonForet/a8zone").subscribe(()=>{p=WA.ui.openPopup("a8","Pin : ___3",[])}),WA.room.onEnterLayer("MaisonForet/a9zone").subscribe(()=>{p=WA.ui.openPopup("a9","\xC9rable : 3___",[])}),WA.room.onEnterLayer("MaisonForet/a10zone").subscribe(()=>{p=WA.ui.openPopup("a10","\xC9rable : _7__",[])}),WA.room.onEnterLayer("MaisonForet/a11zone").subscribe(()=>{p=WA.ui.openPopup("a11","\xC9rable : __4_",[])}),WA.room.onEnterLayer("MaisonForet/a12zone").subscribe(()=>{p=WA.ui.openPopup("a12","\xC9rable : ___1",[])}),WA.room.onEnterLayer("MaisonForet/a13zone").subscribe(()=>{p=WA.ui.openPopup("a13","Ch\xE2taignier : 4___",[])}),WA.room.onEnterLayer("MaisonForet/a14zone").subscribe(()=>{p=WA.ui.openPopup("a14","Ch\xE2taignier : _6__",[])}),WA.room.onEnterLayer("MaisonForet/a15zone").subscribe(()=>{p=WA.ui.openPopup("a15","Ch\xE2taignier : __7_",[])}),WA.room.onEnterLayer("MaisonForet/a16zone").subscribe(()=>{p=WA.ui.openPopup("a16","Ch\xE2taignier : ___8",[])}),WA.room.onEnterLayer("MaisonForet/a17zone").subscribe(()=>{p=WA.ui.openPopup("a17","Fr\xEAne : 5__",[])}),WA.room.onEnterLayer("MaisonForet/a18zone").subscribe(()=>{p=WA.ui.openPopup("a18","Fr\xEAne : _5__",[])}),WA.room.onEnterLayer("MaisonForet/a19zone").subscribe(()=>{p=WA.ui.openPopup("a19","Fr\xEAne : __3_",[])}),WA.room.onEnterLayer("MaisonForet/a20zone").subscribe(()=>{p=WA.ui.openPopup("a20","Fr\xEAne : ___6",[])}),WA.room.onEnterLayer("MaisonForet/a21zone").subscribe(()=>{p=WA.ui.openPopup("a21","Prunier : 6___",[])}),WA.room.onEnterLayer("MaisonForet/a22zone").subscribe(()=>{p=WA.ui.openPopup("a22","Prunier : _4__",[])}),WA.room.onEnterLayer("MaisonForet/a23zone").subscribe(()=>{p=WA.ui.openPopup("a23","Prunier : __8_",[])}),WA.room.onEnterLayer("MaisonForet/a24zone").subscribe(()=>{p=WA.ui.openPopup("a24","Prunier : ___5",[])}),WA.room.onEnterLayer("MaisonForet/a25zone").subscribe(()=>{p=WA.ui.openPopup("a25","Cerisier : 7___",[])}),WA.room.onEnterLayer("MaisonForet/a26zone").subscribe(()=>{p=WA.ui.openPopup("a26","Cerisier : _3__",[])}),WA.room.onEnterLayer("MaisonForet/a27zone").subscribe(()=>{p=WA.ui.openPopup("a27","Cerisier : __2_",[])}),WA.room.onEnterLayer("MaisonForet/a28zone").subscribe(()=>{p=WA.ui.openPopup("a28","Cerisier : ___1",[])}),WA.room.onEnterLayer("MaisonForet/a29zone").subscribe(()=>{p=WA.ui.openPopup("a29","Sapin : 8___",[])}),WA.room.onEnterLayer("MaisonForet/a30zone").subscribe(()=>{p=WA.ui.openPopup("a30","Sapin : _1__",[])}),WA.room.onEnterLayer("MaisonForet/a31zone").subscribe(()=>{p=WA.ui.openPopup("a31","Sapin : __9_",[])}),WA.room.onEnterLayer("MaisonForet/a32zone").subscribe(()=>{p=WA.ui.openPopup("a32","Sapin : ___7",[])}),WA.room.onEnterLayer("MaisonForet/a33zone").subscribe(()=>{p=WA.ui.openPopup("a33","Sorbier : 0___",[])}),WA.room.onEnterLayer("MaisonForet/a34zone").subscribe(()=>{p=WA.ui.openPopup("a34","Sorbier : _7__",[])}),WA.room.onEnterLayer("MaisonForet/a35zone").subscribe(()=>{p=WA.ui.openPopup("a35","Sorbier : __1_",[])}),WA.room.onEnterLayer("MaisonForet/a36zone").subscribe(()=>{p=WA.ui.openPopup("a36","Sorbier : ___4",[])}),WA.room.onEnterLayer("MaisonForet/statusForetZone1").subscribe(()=>{p=WA.ui.openPopup("s1","Je suis seul mais en couple, J'enfile mon crochet devant certains, Il en faut deux pour \xEAtre en accord, Je suis cach\xE9 mais on me retrouve deux fois ",[])}),WA.room.onEnterLayer("MaisonForet/statusForetZone2").subscribe(()=>{p=WA.ui.openPopup("s2","Je suis la lettre la plus tranchante",[])}),WA.room.onEnterLayer("MaisonForet/statusForetZone3").subscribe(()=>{p=WA.ui.openPopup("s3","Je suis le commencement de l\u2019effroi, La fin de la dur\xE9e et de l\u2019espace, Le commencement de toutes extr\xE9mit\xE9s",[])}),WA.room.onEnterLayer("MaisonForet/statusForetZone4").subscribe(()=>{p=WA.ui.openPopup("s4","Je suis tout au bout de ta main, je commence la nuit et je finis demain",[])}),WA.room.onLeaveLayer("MaisonForet/a1zone").subscribe(c),WA.room.onLeaveLayer("MaisonForet/a2zone").subscribe(c),WA.room.onLeaveLayer("MaisonForet/a3zone").subscribe(c),WA.room.onLeaveLayer("MaisonForet/a4zone").subscribe(c),WA.room.onLeaveLayer("MaisonForet/a5zone").subscribe(c),WA.room.onLeaveLayer("MaisonForet/a6zone").subscribe(c),WA.room.onLeaveLayer("MaisonForet/a7zone").subscribe(c),WA.room.onLeaveLayer("MaisonForet/a8zone").subscribe(c),WA.room.onLeaveLayer("MaisonForet/a9zone").subscribe(c),WA.room.onLeaveLayer("MaisonForet/a10zone").subscribe(c),WA.room.onLeaveLayer("MaisonForet/a11zone").subscribe(c),WA.room.onLeaveLayer("MaisonForet/a12zone").subscribe(c),WA.room.onLeaveLayer("MaisonForet/a13zone").subscribe(c),WA.room.onLeaveLayer("MaisonForet/a14zone").subscribe(c),WA.room.onLeaveLayer("MaisonForet/a15zone").subscribe(c),WA.room.onLeaveLayer("MaisonForet/a16zone").subscribe(c),WA.room.onLeaveLayer("MaisonForet/a17zone").subscribe(c),WA.room.onLeaveLayer("MaisonForet/a18zone").subscribe(c),WA.room.onLeaveLayer("MaisonForet/a19zone").subscribe(c),WA.room.onLeaveLayer("MaisonForet/a20zone").subscribe(c),WA.room.onLeaveLayer("MaisonForet/a21zone").subscribe(c),WA.room.onLeaveLayer("MaisonForet/a22zone").subscribe(c),WA.room.onLeaveLayer("MaisonForet/a23zone").subscribe(c),WA.room.onLeaveLayer("MaisonForet/a24zone").subscribe(c),WA.room.onLeaveLayer("MaisonForet/a25zone").subscribe(c),WA.room.onLeaveLayer("MaisonForet/a26zone").subscribe(c),WA.room.onLeaveLayer("MaisonForet/a27zone").subscribe(c),WA.room.onLeaveLayer("MaisonForet/a28zone").subscribe(c),WA.room.onLeaveLayer("MaisonForet/a29zone").subscribe(c),WA.room.onLeaveLayer("MaisonForet/a30zone").subscribe(c),WA.room.onLeaveLayer("MaisonForet/a31zone").subscribe(c),WA.room.onLeaveLayer("MaisonForet/a32zone").subscribe(c),WA.room.onLeaveLayer("MaisonForet/a33zone").subscribe(c),WA.room.onLeaveLayer("MaisonForet/a34zone").subscribe(c),WA.room.onLeaveLayer("MaisonForet/a35zone").subscribe(c),WA.room.onLeaveLayer("MaisonForet/a36zone").subscribe(c),WA.room.onLeaveLayer("MaisonForet/statusForetZone1").subscribe(c),WA.room.onLeaveLayer("MaisonForet/statusForetZone2").subscribe(c),WA.room.onLeaveLayer("MaisonForet/statusForetZone3").subscribe(c),WA.room.onLeaveLayer("MaisonForet/statusForetZone4").subscribe(c),te().then(()=>{console.log("Scripting API Extra ready")}).catch(o=>console.error(o))}).catch(o=>console.error(o))}let h;function A(){h!==void 0&&(h.close(),h=void 0)}function Xe(){return WA.onInit().then(()=>{console.log("Scripting API ready for room1"),console.log("Player tags: ",WA.player.tags),WA.room.onEnterLayer("MaisonDebut/gameStartZone").subscribe(()=>{h=WA.ui.openPopup("gameStartPopup","Vous \xEAtes enferm\xE9 par l'ESGI, pour y echapper allez voir les statues.",[])}),WA.room.onLeaveLayer("MaisonDebut/gameStartZone").subscribe(A),WA.room.onEnterLayer("MaisonDebut/statue1Room1Zone").subscribe(()=>{h=WA.ui.openPopup("statue1Popup","\xC9nigme: Pas de pieds, pas de mains, pas d\u2019ailes, mais je monte au ciel. Qui suis-je ? ",[])}),WA.room.onLeaveLayer("MaisonDebut/statue1Room1Zone").subscribe(A),WA.room.onEnterLayer("MaisonDebut/statue2Room1Zone").subscribe(()=>{h=WA.ui.openPopup("statue2Room1Popup","\xC9nigme: Il nous voit vieillir sans rien dire car il est tr\xE8s poli. Qui est-il ? ",[])}),WA.room.onLeaveLayer("MaisonDebut/statue2Room1Zone").subscribe(A),WA.room.onEnterLayer("MaisonDebut/miroirZone").subscribe(()=>{h=WA.ui.openPopup("miroirPopup"," Le miroir est cass\xE9 en quatre, on peut y lire un 6 et un 4",[])}),WA.room.onLeaveLayer("MaisonDebut/miroirZone").subscribe(A),WA.room.onEnterLayer("MaisonDebut/chemineeZone").subscribe(()=>{h=WA.ui.openPopup("chemineePopup"," Des papiers ont \xE9t\xE9 br\xFBl\xE9s, il reste une feuille o\xF9 le centre est intact, on peut y lire le chiffre 28.",[])}),WA.room.onLeaveLayer("MaisonDebut/chemineeZone").subscribe(A),WA.room.onEnterLayer("endZone").subscribe(()=>{h=WA.ui.openPopup("endPopup"," F\xE9licitation, vous pouvez maintenant partir rejoindre l'\xEEle des Vacancs !",[])}),WA.room.onLeaveLayer("endZone").subscribe(A),WA.room.onEnterLayer("MaisonDebut/fakeCuisineZone").subscribe(()=>{h=WA.ui.openPopup("cuisinePopup","La cuisine vient d'\xEAtre utilis\xE9e, on peut trouver 3 casseroles dans le lavabo.",[])}),WA.room.onLeaveLayer("MaisonDebut/fakeCuisineZone").subscribe(A),WA.room.onEnterLayer("MaisonDebut/fakePianoZone").subscribe(()=>{h=WA.ui.openPopup("pianoPopup","Le piano est en mauvaise \xE9tat, il manque 1 p\xE9dale et 5 touches.",[])}),WA.room.onLeaveLayer("MaisonDebut/fakePianoZone").subscribe(A),WA.room.onEnterLayer("MaisonDebut/fakeArmoireZone").subscribe(()=>{h=WA.ui.openPopup("armoirePopup","Il y a 7 manteaux dans l'armoire, et 2 paires de chaussures.",[])}),WA.room.onLeaveLayer("MaisonDebut/fakeArmoireZone").subscribe(A),WA.room.onEnterLayer("MaisonDebut/fakeBiblioZone").subscribe(()=>{h=WA.ui.openPopup("biblioPopup","On peut trouver 3 livres sur Javascript et 4 sur C#.",[])}),WA.room.onLeaveLayer("MaisonDebut/fakeBiblioZone").subscribe(A),WA.room.onEnterLayer("MaisonDebut/fakeNourritureZone").subscribe(()=>{h=WA.ui.openPopup("nourriturePopup","Les aliments n'ont pas l'air d'\xEAtre frais, il y a tonneau sans aliments.",[])}),WA.room.onLeaveLayer("MaisonDebut/fakeNourritureZone").subscribe(A),WA.room.onEnterLayer("MaisonDebut/room1horlogeZone").subscribe(()=>{h=WA.ui.openPopup("room1horlogePopup","Les pendules ne bougent pas, elles sont arr\xEAt\xE9es \xE0 08:19.",[])}),WA.room.onLeaveLayer("MaisonDebut/room1horlogeZone").subscribe(A),WA.room.onEnterLayer("MaisonDebut/fakeLitZone").subscribe(()=>{h=WA.ui.openPopup("litPopup","Seul le lit du milieu n'a pas de drap.",[])}),WA.room.onLeaveLayer("MaisonDebut/fakeLitZone").subscribe(A),WA.room.onEnterLayer("MaisonDebut/fakeLitDoubleZone").subscribe(()=>{h=WA.ui.openPopup("litDoublePopup","Le lit double \xE0 l'air d'\xEAtre tremp\xE9.",[])}),WA.room.onLeaveLayer("MaisonDebut/fakeLitDoubleZone").subscribe(A),WA.room.onEnterLayer("MaisonDebut/fakeTableZone").subscribe(()=>{h=WA.ui.openPopup("tablePopup","Les plats sont encore chaud, il y a 4 couverts mais que 3 assiettes.",[])}),WA.room.onLeaveLayer("MaisonDebut/fakeTableZone").subscribe(A),te().then(()=>{console.log("Scripting API Extra ready")}).catch(o=>console.error(o))}).catch(o=>console.error(o))}console.log("Script started successfully");Xe();He();
