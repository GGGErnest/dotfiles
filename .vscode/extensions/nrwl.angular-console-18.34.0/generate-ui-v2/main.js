var Vc=Object.defineProperty;var _c=Object.getOwnPropertyDescriptor;var m=(r,e,t,o)=>{for(var i=o>1?void 0:o?_c(e,t):e,n=r.length-1,s;n>=0;n--)(s=r[n])&&(i=(o?s(e,t,i):s(i))||i);return o&&i&&Vc(e,t,i),i};var Vs=class{get shadowRoot(){return this.__host.__shadowRoot}constructor(e){this.ariaAtomic="",this.ariaAutoComplete="",this.ariaBraileLabel="",this.ariaBraileRoleDescription="",this.ariaBusy="",this.ariaChecked="",this.ariaColCount="",this.ariaColIndex="",this.ariaColSpan="",this.ariaCurrent="",this.ariaDescription="",this.ariaDisabled="",this.ariaExpanded="",this.ariaHasPopup="",this.ariaHidden="",this.ariaInvalid="",this.ariaKeyShortcuts="",this.ariaLabel="",this.ariaLevel="",this.ariaLive="",this.ariaModal="",this.ariaMultiLine="",this.ariaMultiSelectable="",this.ariaOrientation="",this.ariaPlaceholder="",this.ariaPosInSet="",this.ariaPressed="",this.ariaReadOnly="",this.ariaRequired="",this.ariaRoleDescription="",this.ariaRowCount="",this.ariaRowIndex="",this.ariaRowSpan="",this.ariaSelected="",this.ariaSetSize="",this.ariaSort="",this.ariaValueMax="",this.ariaValueMin="",this.ariaValueNow="",this.ariaValueText="",this.role="",this.form=null,this.labels=[],this.states=new Set,this.validationMessage="",this.validity={},this.willValidate=!0,this.__host=e}checkValidity(){return console.warn("`ElementInternals.checkValidity()` was called on the server.This method always returns true."),!0}reportValidity(){return!0}setFormValue(){}setValidity(){}};var _s=new WeakMap,Rr=r=>{let e=_s.get(r);return e===void 0&&_s.set(r,e=new Map),e},Dc=class{constructor(){this.__shadowRootMode=null,this.__shadowRoot=null,this.__internals=null}get attributes(){return Array.from(Rr(this)).map(([e,t])=>({name:e,value:t}))}get shadowRoot(){return this.__shadowRootMode==="closed"?null:this.__shadowRoot}setAttribute(e,t){Rr(this).set(e,String(t))}removeAttribute(e){Rr(this).delete(e)}toggleAttribute(e,t){if(this.hasAttribute(e)){if(t===void 0||!t)return this.removeAttribute(e),!1}else return t===void 0||t?(this.setAttribute(e,""),!0):!1;return!0}hasAttribute(e){return Rr(this).has(e)}attachShadow(e){let t={host:this};return this.__shadowRootMode=e.mode,e&&e.mode==="open"&&(this.__shadowRoot=t),t}attachInternals(){if(this.__internals!==null)throw new Error("Failed to execute 'attachInternals' on 'HTMLElement': ElementInternals for the specified element was already attached.");let e=new Vs(this);return this.__internals=e,e}getAttribute(e){return Rr(this).get(e)??null}};var Pc=class extends Dc{},Ds=Pc;var Lc=class{constructor(){this.__definitions=new Map}define(e,t){if(this.__definitions.has(e))if(process.env.NODE_ENV==="development")console.warn(`'CustomElementRegistry' already has "${e}" defined. This may have been caused by live reload or hot module replacement in which case it can be safely ignored.
Make sure to test your application with a production build as repeat registrations will throw in production.`);else throw new Error(`Failed to execute 'define' on 'CustomElementRegistry': the name "${e}" has already been used with this registry`);this.__definitions.set(e,{ctor:t,observedAttributes:t.observedAttributes??[]})}get(e){return this.__definitions.get(e)?.ctor}},Mc=Lc;var Ps=new Mc;var Or=globalThis,mo=Or.ShadowRoot&&(Or.ShadyCSS===void 0||Or.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ms=Symbol(),Ls=new WeakMap,fo=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==Ms)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(mo&&e===void 0){let o=t!==void 0&&t.length===1;o&&(e=Ls.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&Ls.set(t,e))}return e}toString(){return this.cssText}},Bs=r=>new fo(typeof r=="string"?r:r+"",void 0,Ms);var Gi=(r,e)=>{mo?r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{let o=document.createElement("style"),i=Or.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=t.cssText,r.appendChild(o)})},go=mo||Or.CSSStyleSheet===void 0?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(let o of e.cssRules)t+=o.cssText;return Bs(t)})(r):r;var Hs,Ui,Nt=globalThis;(Hs=Nt.customElements)!==null&&Hs!==void 0||(Nt.customElements=Ps);var Ns=Nt.trustedTypes,Bc=Ns?Ns.emptyScript:"",js=Nt.reactiveElementPolyfillSupport,Wi={toAttribute(r,e){switch(e){case Boolean:r=r?Bc:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},zs=(r,e)=>e!==r&&(e==e||r==r),qi={attribute:!0,type:String,converter:Wi,reflect:!1,hasChanged:zs},Xi="finalized",He=class extends(globalThis.HTMLElement??Ds){constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach((t,o)=>{let i=this._$Ep(o,t);i!==void 0&&(this._$Ev.set(i,o),e.push(i))}),e}static createProperty(e,t=qi){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){let o=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,o,t);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,o){return{get(){return this[t]},set(i){let n=this[e];this[t]=i,this.requestUpdate(e,n,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||qi}static finalize(){if(this.hasOwnProperty(Xi))return!1;this[Xi]=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let t=this.properties,o=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(let i of o)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let o=new Set(e.flat(1/0).reverse());for(let i of o)t.unshift(go(i))}else e!==void 0&&t.push(go(e));return t}static _$Ep(e,t){let o=t.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,o;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((o=e.hostConnected)===null||o===void 0||o.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;let t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Gi(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var o;return(o=t.hostConnected)===null||o===void 0?void 0:o.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var o;return(o=t.hostDisconnected)===null||o===void 0?void 0:o.call(t)})}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t,o=qi){var i;let n=this.constructor._$Ep(e,o);if(n!==void 0&&o.reflect===!0){let s=(((i=o.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?o.converter:Wi).toAttribute(t,o.type);this._$El=e,s==null?this.removeAttribute(n):this.setAttribute(n,s),this._$El=null}}_$AK(e,t){var o;let i=this.constructor,n=i._$Ev.get(e);if(n!==void 0&&this._$El!==n){let s=i.getPropertyOptions(n),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((o=s.converter)===null||o===void 0?void 0:o.fromAttribute)!==void 0?s.converter:Wi;this._$El=n,this[n]=a.fromAttribute(t,s.type),this._$El=null}}requestUpdate(e,t,o){let i=!0;e!==void 0&&(((o=o||this.constructor.getPropertyOptions(e)).hasChanged||zs)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),o.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,o))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,n)=>this[n]=i),this._$Ei=void 0);let t=!1,o=this._$AL;try{t=this.shouldUpdate(o),t?(this.willUpdate(o),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdate)===null||n===void 0?void 0:n.call(i)}),this.update(o)):this._$Ek()}catch(i){throw t=!1,this._$Ek(),i}t&&this._$AE(o)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(o=>{var i;return(i=o.hostUpdated)===null||i===void 0?void 0:i.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,o)=>this._$EO(o,this[o],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};He[Xi]=!0,He.elementProperties=new Map,He.elementStyles=[],He.shadowRootOptions={mode:"open"},js?.({ReactiveElement:He}),((Ui=Nt.reactiveElementVersions)!==null&&Ui!==void 0?Ui:Nt.reactiveElementVersions=[]).push("1.6.3");var Yi,Tr=globalThis,jt=Tr.trustedTypes,Gs=jt?jt.createPolicy("lit-html",{createHTML:r=>r}):void 0,bo="$lit$",Ne=`lit$${(Math.random()+"").slice(9)}$`,Zi="?"+Ne,Hc=`<${Zi}>`,wt=Tr.document===void 0?{createTreeWalker:()=>({})}:document,Ir=()=>wt.createComment(""),Vr=r=>r===null||typeof r!="object"&&typeof r!="function",Zs=Array.isArray,Js=r=>Zs(r)||typeof r?.[Symbol.iterator]=="function",Qi=`[ 	
\f\r]`,Fr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Us=/-->/g,qs=/>/g,xt=RegExp(`>|${Qi}(?:([^\\s"'>=/]+)(${Qi}*=${Qi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ws=/'/g,Xs=/"/g,Ks=/^(?:script|style|textarea|title)$/i,ea=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),h=ea(1),nh=ea(2),$t=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),Ys=new WeakMap,yt=wt.createTreeWalker(wt,129,null,!1);function ta(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Gs!==void 0?Gs.createHTML(e):e}var ra=(r,e)=>{let t=r.length-1,o=[],i,n=e===2?"<svg>":"",s=Fr;for(let a=0;a<t;a++){let l=r[a],c,d,f=-1,v=0;for(;v<l.length&&(s.lastIndex=v,d=s.exec(l),d!==null);)v=s.lastIndex,s===Fr?d[1]==="!--"?s=Us:d[1]!==void 0?s=qs:d[2]!==void 0?(Ks.test(d[2])&&(i=RegExp("</"+d[2],"g")),s=xt):d[3]!==void 0&&(s=xt):s===xt?d[0]===">"?(s=i??Fr,f=-1):d[1]===void 0?f=-2:(f=s.lastIndex-d[2].length,c=d[1],s=d[3]===void 0?xt:d[3]==='"'?Xs:Ws):s===Xs||s===Ws?s=xt:s===Us||s===qs?s=Fr:(s=xt,i=void 0);let A=s===xt&&r[a+1].startsWith("/>")?" ":"";n+=s===Fr?l+Hc:f>=0?(o.push(c),l.slice(0,f)+bo+l.slice(f)+Ne+A):l+Ne+(f===-2?(o.push(void 0),a):A)}return[ta(r,n+(r[t]||"<?>")+(e===2?"</svg>":"")),o]},_r=class r{constructor({strings:e,_$litType$:t},o){let i;this.parts=[];let n=0,s=0,a=e.length-1,l=this.parts,[c,d]=ra(e,t);if(this.el=r.createElement(c,o),yt.currentNode=this.el.content,t===2){let f=this.el.content,v=f.firstChild;v.remove(),f.append(...v.childNodes)}for(;(i=yt.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes()){let f=[];for(let v of i.getAttributeNames())if(v.endsWith(bo)||v.startsWith(Ne)){let A=d[s++];if(f.push(v),A!==void 0){let F=i.getAttribute(A.toLowerCase()+bo).split(Ne),O=/([.?@])?(.*)/.exec(A);l.push({type:1,index:n,name:O[2],strings:F,ctor:O[1]==="."?xo:O[1]==="?"?yo:O[1]==="@"?wo:St})}else l.push({type:6,index:n})}for(let v of f)i.removeAttribute(v)}if(Ks.test(i.tagName)){let f=i.textContent.split(Ne),v=f.length-1;if(v>0){i.textContent=jt?jt.emptyScript:"";for(let A=0;A<v;A++)i.append(f[A],Ir()),yt.nextNode(),l.push({type:2,index:++n});i.append(f[v],Ir())}}}else if(i.nodeType===8)if(i.data===Zi)l.push({type:2,index:n});else{let f=-1;for(;(f=i.data.indexOf(Ne,f+1))!==-1;)l.push({type:7,index:n}),f+=Ne.length-1}n++}}static createElement(e,t){let o=wt.createElement("template");return o.innerHTML=e,o}};function Ct(r,e,t=r,o){var i,n,s,a;if(e===$t)return e;let l=o!==void 0?(i=t._$Co)===null||i===void 0?void 0:i[o]:t._$Cl,c=Vr(e)?void 0:e._$litDirective$;return l?.constructor!==c&&((n=l?._$AO)===null||n===void 0||n.call(l,!1),c===void 0?l=void 0:(l=new c(r),l._$AT(r,t,o)),o!==void 0?((s=(a=t)._$Co)!==null&&s!==void 0?s:a._$Co=[])[o]=l:t._$Cl=l),l!==void 0&&(e=Ct(r,l._$AS(r,e.values),l,o)),e}var vo=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;let{el:{content:o},parts:i}=this._$AD,n=((t=e?.creationScope)!==null&&t!==void 0?t:wt).importNode(o,!0);yt.currentNode=n;let s=yt.nextNode(),a=0,l=0,c=i[0];for(;c!==void 0;){if(a===c.index){let d;c.type===2?d=new zt(s,s.nextSibling,this,e):c.type===1?d=new c.ctor(s,c.name,c.strings,this,e):c.type===6&&(d=new $o(s,this,e)),this._$AV.push(d),c=i[++l]}a!==c?.index&&(s=yt.nextNode(),a++)}return yt.currentNode=wt,n}v(e){let t=0;for(let o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}},zt=class r{constructor(e,t,o,i){var n;this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=i,this._$Cp=(n=i?.isConnected)===null||n===void 0||n}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ct(this,e,t),Vr(e)?e===j||e==null||e===""?(this._$AH!==j&&this._$AR(),this._$AH=j):e!==this._$AH&&e!==$t&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Js(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==j&&Vr(this._$AH)?this._$AA.nextSibling.data=e:this.$(wt.createTextNode(e)),this._$AH=e}g(e){var t;let{values:o,_$litType$:i}=e,n=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=_r.createElement(ta(i.h,i.h[0]),this.options)),i);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===n)this._$AH.v(o);else{let s=new vo(n,this),a=s.u(this.options);s.v(o),this.$(a),this._$AH=s}}_$AC(e){let t=Ys.get(e.strings);return t===void 0&&Ys.set(e.strings,t=new _r(e)),t}T(e){Zs(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,o,i=0;for(let n of e)i===t.length?t.push(o=new r(this.k(Ir()),this.k(Ir()),this,this.options)):o=t[i],o._$AI(n),i++;i<t.length&&(this._$AR(o&&o._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,t);e&&e!==this._$AB;){let i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},St=class{constructor(e,t,o,i,n){this.type=1,this._$AH=j,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=j}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,o,i){let n=this.strings,s=!1;if(n===void 0)e=Ct(this,e,t,0),s=!Vr(e)||e!==this._$AH&&e!==$t,s&&(this._$AH=e);else{let a=e,l,c;for(e=n[0],l=0;l<n.length-1;l++)c=Ct(this,a[o+l],t,l),c===$t&&(c=this._$AH[l]),s||(s=!Vr(c)||c!==this._$AH[l]),c===j?e=j:e!==j&&(e+=(c??"")+n[l+1]),this._$AH[l]=c}s&&!i&&this.j(e)}j(e){e===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},xo=class extends St{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===j?void 0:e}},Nc=jt?jt.emptyScript:"",yo=class extends St{constructor(){super(...arguments),this.type=4}j(e){e&&e!==j?this.element.setAttribute(this.name,Nc):this.element.removeAttribute(this.name)}},wo=class extends St{constructor(e,t,o,i,n){super(e,t,o,i,n),this.type=5}_$AI(e,t=this){var o;if((e=(o=Ct(this,e,t,0))!==null&&o!==void 0?o:j)===$t)return;let i=this._$AH,n=e===j&&i!==j||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==j&&(i===j||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,o;typeof this._$AH=="function"?this._$AH.call((o=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&o!==void 0?o:this.element,e):this._$AH.handleEvent(e)}},$o=class{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){Ct(this,e)}},oa={O:bo,P:Ne,A:Zi,C:1,M:ra,L:vo,R:Js,D:Ct,I:zt,V:St,H:yo,N:wo,U:xo,F:$o},Qs=Tr.litHtmlPolyfillSupport;Qs?.(_r,zt),((Yi=Tr.litHtmlVersions)!==null&&Yi!==void 0?Yi:Tr.litHtmlVersions=[]).push("2.8.0");var ia=(r,e,t)=>{var o,i;let n=(o=t?.renderBefore)!==null&&o!==void 0?o:e,s=n._$litPart$;if(s===void 0){let a=(i=t?.renderBefore)!==null&&i!==void 0?i:null;n._$litPart$=s=new zt(e.insertBefore(Ir(),a),a,void 0,t??{})}return s._$AI(r),s};var Ji,Ki;var C=class extends He{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;let o=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=o.firstChild),o}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ia(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return $t}};C.finalized=!0,C._$litElement$=!0,(Ji=globalThis.litElementHydrateSupport)===null||Ji===void 0||Ji.call(globalThis,{LitElement:C});var na=globalThis.litElementPolyfillSupport;na?.({LitElement:C});((Ki=globalThis.litElementVersions)!==null&&Ki!==void 0?Ki:globalThis.litElementVersions=[]).push("3.3.3");var R=r=>e=>typeof e=="function"?((t,o)=>(customElements.define(t,o),o))(r,e):((t,o)=>{let{kind:i,elements:n}=o;return{kind:i,elements:n,finisher(s){customElements.define(t,s)}}})(r,e);var jc=(r,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,r)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,r)}},zc=(r,e,t)=>{e.constructor.createProperty(t,r)};function T(r){return(e,t)=>t!==void 0?zc(r,e,t):jc(r,e)}function P(r){return T({...r,state:!0})}var en,Ih=((en=globalThis.HTMLSlotElement)===null||en===void 0?void 0:en.prototype.assignedElements)!=null?(r,e)=>r.assignedElements(e):(r,e)=>r.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE);function ee(r,e,t){return r?e():t?.()}var Gt=class extends Event{constructor(e,t,o){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=o}};var me=class{constructor(e,t,o,i){var n;if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(s,a)=>{this.unsubscribe&&(this.unsubscribe!==a&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=s,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(s,a)),this.unsubscribe=a},this.host=e,t.context!==void 0){let s=t;this.context=s.context,this.callback=s.callback,this.subscribe=(n=s.subscribe)!==null&&n!==void 0&&n}else this.context=t,this.callback=o,this.subscribe=i!=null&&i;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Gt(this.context,this.t,this.subscribe))}};var Co=class{constructor(e){this.disposers=new Map,this.updateObservers=()=>{for(let[t,o]of this.disposers)t(this.o,o)},e!==void 0&&(this.value=e)}get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){let o=t||!Object.is(e,this.o);this.o=e,o&&this.updateObservers()}addCallback(e,t){if(t){this.disposers.has(e)||this.disposers.set(e,()=>{this.disposers.delete(e)});let o=this.disposers.get(e);e(this.value,o)}else e(this.value)}clearCallbacks(){this.disposers.clear()}};var tn=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}},Re=class extends Co{constructor(e,t,o){super(t.context!==void 0?t.initialValue:o),this.onContextRequest=i=>{i.context===this.context&&i.composedPath()[0]!==this.host&&(i.stopPropagation(),this.addCallback(i.callback,i.subscribe))},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),this.host.addController(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest)}hostConnected(){this.host.dispatchEvent(new tn(this.context))}};function rn(r){return r?`${r.collectionName}:${r.generatorName}`:""}function sa(r){return r?r.generatorName.split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" "):""}function Ke(r){if(r&&!(r.default===void 0||r.default===null))return Array.isArray(r.default)?r.default.map(e=>String(e)):r.type==="boolean"?!!r.default:String(r.default)??""}function ko(r,e){return!r&&!e?!0:Array.isArray(r)&&Array.isArray(e)?r.join(",")===e.join(","):r===e}function aa(r,e){let t;return function(...o){clearTimeout(t),t=setTimeout(()=>{r.apply(this,o)},e)}.bind(r)}function et(r){return r.items?Array.isArray(r.items)?r.items:r.items.enum:[]}var Ao=class{constructor(e){this.payload=e;this.payloadType="request-validation"}},Eo=class{constructor(e){this.payload=e;this.payloadType="copy-to-clipboard"}};var Ro=Symbol("submitted");var on=Symbol("form-values"),Oo=class{constructor(e){this.cwdValue=void 0;this.formValues={};this.validationResults={};this.debouncedRunGenerator=aa(e=>this.runGenerator(e),500);this.validationListeners={};this.defaultValueListeners={};this.touchedListeners={};this.icc=e.icc,this.submittedContextProvider=new Re(e,{context:Ro,initialValue:!1}),new Re(e,{context:on,initialValue:this}),window.addEventListener("option-changed",t=>{t.detail&&this.handleOptionChange(t.detail)}),window.addEventListener("cwd-changed",async t=>{if(t.detail===void 0)return;let o=this.cwdValue===void 0;this.cwdValue=t.detail,!o&&this.icc.configuration?.enableTaskExecutionDryRunOnChange&&(this.validationResults=await this.validate(this.formValues,this.icc.generatorSchema),Object.keys(this.validationResults).length===0&&this.debouncedRunGenerator(!0))})}async handleOptionChange(e){this.formValues={...this.formValues,[e.name]:e.value},this.validationResults=await this.validate(this.formValues,this.icc.generatorSchema),Object.entries(this.validationListeners).forEach(([t,o])=>{o?.forEach(i=>i(this.validationResults[t]))}),e.isDefaultValue||(Object.keys(this.validationResults).length===0&&this.icc.configuration?.enableTaskExecutionDryRunOnChange&&this.debouncedRunGenerator(!0),this.touchedListeners[e.name]?.forEach(t=>t(!0))),this.defaultValueListeners[e.name]&&this.defaultValueListeners[e.name]?.forEach(t=>t(e.isDefaultValue))}async validate(e,t){if(!t)return{};let o=t.options,i={};Object.entries(e).forEach(([s,a])=>{let l=o.find(c=>c.name===s);l&&(l.pattern&&(new RegExp(l.pattern).test(String(a))||(i[s]=`Value should match the pattern '${l.pattern}'`)),l.isRequired&&(!a||Array.isArray(a)&&a.length===0)&&(i[s]="This field is required"))});let n=await this.icc.getValidationResults(e,t);return{...i,...n}}runGenerator(e=!1){let t=this.getSerializedFormValues();t.push("--no-interactive"),e&&t.push("--dry-run"),this.submittedContextProvider.setValue(!0),this.icc.postMessageToIde({payloadType:"run-generator",payload:{positional:rn(this.icc.generatorSchema),flags:t,cwd:this.cwdValue?.toString()}})}copyCommandToClipboard(){let e=this.getSerializedFormValues(),o=`nx g ${rn(this.icc.generatorSchema)} ${e.join(" ")}`;this.icc.editor==="vscode"?navigator.clipboard.writeText(o):this.icc.postMessageToIde(new Eo(o))}getSerializedFormValues(){let e=[],t={...this.formValues,...this.icc.generatorSchema?.context?.fixedFormValues??{}};return Object.entries(t).forEach(([o,i])=>{let n=this.icc.generatorSchema?.options.find(l=>l.name===o),s=Ke(n);if(ko(i,s))return;let a=i?.toString()??"";a.includes(" ")?a.includes('"')?e.push(`--${o}='${i}'`):e.push(`--${o}="${i}"`):e.push(`--${o}=${i}`)}),e}registerValidationListener(e,t){this.validationListeners[e]||(this.validationListeners[e]=[]),this.validationListeners[e].push(t)}registerDefaultValueListener(e,t){this.defaultValueListeners[e]||(this.defaultValueListeners[e]=[]),this.defaultValueListeners[e].push(t)}registerTouchedListener(e,t){this.touchedListeners[e]||(this.touchedListeners[e]=[]),this.touchedListeners[e].push(t)}};var nn=Symbol("editor"),U=r=>{class e extends r{constructor(...i){super();new me(this,{context:nn,callback:n=>{this.editor=n},subscribe:!0})}}return m([P()],e.prototype,"editor",2),e};var Dr=Symbol("generatorContext"),Fo=r=>{class e extends r{constructor(...i){super();new me(this,{context:Dr,callback:n=>this.generatorContext=n,subscribe:!0})}}return m([P()],e.prototype,"generatorContext",2),e};var To=class{constructor(e){this.host=e;this.pendingPluginValidationQueue=[];let t;try{t=acquireVsCodeApi()}catch{}this.editor=t?"vscode":"intellij",console.log("initializing ide communication for",this.editor),new Re(e,{context:nn,initialValue:this.editor}),this.generatorContextContextProvider=new Re(e,{context:Dr,initialValue:void 0}),t?this.setupVscodeCommunication(t):this.setupIntellijCommunication(),this.postMessageToIde({payloadType:"output-init"})}hostConnected(){}postMessageToIde(e){console.log("sending message to ide",e),this.postToIde(e)}async getValidationResults(e,t){let o=new Promise(i=>{this.pendingPluginValidationQueue.push(i)});return this.postMessageToIde(new Ao({formValues:e,schema:t})),await o}setupVscodeCommunication(e){window.addEventListener("message",t=>{let o=t.data;o&&(console.log("received message from vscode",o),this.handleInputMessage(o))}),this.postToIde=t=>e.postMessage(t)}setupIntellijCommunication(){window.intellijApi?.registerPostToWebviewCallback(e=>{if(e.payloadType==="styles"){this.setIntellijStyles(e.payload);return}this.handleInputMessage(e)}),this.postToIde=e=>{let t=JSON.stringify(e);window.intellijApi?.postToIde(t)}}handleInputMessage(e){switch(e.payloadType){case"generator":{this.generatorSchema=e.payload,this.generatorContextContextProvider.setValue(this.generatorSchema.context),this.host.requestUpdate();break}case"config":{this.configuration=e.payload,this.host.requestUpdate();break}case"banner":{this.banner=e.payload,this.host.requestUpdate();break}case"validation-results":{if(this.pendingPluginValidationQueue.length>0){let t=this.pendingPluginValidationQueue.shift();if(!t)break;t(e.payload)}break}}}setIntellijStyles(e){let t=new CSSStyleSheet;t.replaceSync(`
    :root {
      --foreground-color: ${e.foregroundColor};
      --muted-foreground-color: ${e.mutedForegroundColor};
      --background-color: ${e.backgroundColor};
      --primary-color: ${e.primaryColor};
      --error-color: ${e.errorColor};
      --field-background-color: ${e.fieldBackgroundColor};
      --field-border-color: ${e.fieldBorderColor};
      --select-field-background-color: ${e.selectFieldBackgroundColor};
      --active-selection-background-color: ${e.activeSelectionBackgroundColor};
      --focus-border-color: ${e.focusBorderColor};
      --banner-warning-color: ${e.bannerWarningBackgroundColor};
      --banner-text-color: ${e.bannerTextColor};
      --badge-background-color: ${e.badgeBackgroundColor};
      --separator-color: ${e.separatorColor};
      --field-nav-hover-color: ${e.fieldNavHoverColor};
      --scrollbar-thumb-color: ${e.scrollbarThumbColor};
      font-family: ${e.fontFamily};
      font-size: ${e.fontSize};
    }
    `),document.adoptedStyleSheets=[t]}};var je=function(){if(typeof globalThis<"u")return globalThis;if(typeof global<"u")return global;if(typeof self<"u")return self;if(typeof window<"u")return window;try{return new Function("return this")()}catch{return{}}}();je.trustedTypes===void 0&&(je.trustedTypes={createPolicy:(r,e)=>e});var la={configurable:!1,enumerable:!1,writable:!1};je.FAST===void 0&&Reflect.defineProperty(je,"FAST",Object.assign({value:Object.create(null)},la));var At=je.FAST;if(At.getById===void 0){let r=Object.create(null);Reflect.defineProperty(At,"getById",Object.assign({value(e,t){let o=r[e];return o===void 0&&(o=t?r[e]=t():null),o}},la))}var tt=Object.freeze([]);function Io(){let r=new WeakMap;return function(e){let t=r.get(e);if(t===void 0){let o=Reflect.getPrototypeOf(e);for(;t===void 0&&o!==null;)t=r.get(o),o=Reflect.getPrototypeOf(o);t=t===void 0?[]:t.slice(0),r.set(e,t)}return t}}var sn=je.FAST.getById(1,()=>{let r=[],e=[];function t(){if(e.length)throw e.shift()}function o(s){try{s.call()}catch(a){e.push(a),setTimeout(t,0)}}function i(){let a=0;for(;a<r.length;)if(o(r[a]),a++,a>1024){for(let l=0,c=r.length-a;l<c;l++)r[l]=r[l+a];r.length-=a,a=0}r.length=0}function n(s){r.length<1&&je.requestAnimationFrame(i),r.push(s)}return Object.freeze({enqueue:n,process:i})}),ca=je.trustedTypes.createPolicy("fast-html",{createHTML:r=>r}),an=ca,Pr=`fast-${Math.random().toString(36).substring(2,8)}`,ln=`${Pr}{`,Vo=`}${Pr}`,y=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(r){if(an!==ca)throw new Error("The HTML policy can only be set once.");an=r},createHTML(r){return an.createHTML(r)},isMarker(r){return r&&r.nodeType===8&&r.data.startsWith(Pr)},extractDirectiveIndexFromMarker(r){return parseInt(r.data.replace(`${Pr}:`,""))},createInterpolationPlaceholder(r){return`${ln}${r}${Vo}`},createCustomAttributePlaceholder(r,e){return`${r}="${this.createInterpolationPlaceholder(e)}"`},createBlockPlaceholder(r){return`<!--${Pr}:${r}-->`},queueUpdate:sn.enqueue,processUpdates:sn.process,nextUpdate(){return new Promise(sn.enqueue)},setAttribute(r,e,t){t==null?r.removeAttribute(e):r.setAttribute(e,t)},setBooleanAttribute(r,e,t){t?r.setAttribute(e,""):r.removeAttribute(e)},removeChildNodes(r){for(let e=r.firstChild;e!==null;e=r.firstChild)r.removeChild(e)},createTemplateWalker(r){return document.createTreeWalker(r,133,null,!1)}});var Ut=class{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=t}has(e){return this.spillover===void 0?this.sub1===e||this.sub2===e:this.spillover.indexOf(e)!==-1}subscribe(e){let t=this.spillover;if(t===void 0){if(this.has(e))return;if(this.sub1===void 0){this.sub1=e;return}if(this.sub2===void 0){this.sub2=e;return}this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else t.indexOf(e)===-1&&t.push(e)}unsubscribe(e){let t=this.spillover;if(t===void 0)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{let o=t.indexOf(e);o!==-1&&t.splice(o,1)}}notify(e){let t=this.spillover,o=this.source;if(t===void 0){let i=this.sub1,n=this.sub2;i!==void 0&&i.handleChange(o,e),n!==void 0&&n.handleChange(o,e)}else for(let i=0,n=t.length;i<n;++i)t[i].handleChange(o,e)}},qt=class{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var t;let o=this.subscribers[e];o!==void 0&&o.notify(e),(t=this.sourceSubscribers)===null||t===void 0||t.notify(e)}subscribe(e,t){var o;if(t){let i=this.subscribers[t];i===void 0&&(this.subscribers[t]=i=new Ut(this.source)),i.subscribe(e)}else this.sourceSubscribers=(o=this.sourceSubscribers)!==null&&o!==void 0?o:new Ut(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,t){var o;if(t){let i=this.subscribers[t];i!==void 0&&i.unsubscribe(e)}else(o=this.sourceSubscribers)===null||o===void 0||o.unsubscribe(e)}};var $=At.getById(2,()=>{let r=/(:|&&|\|\||if)/,e=new WeakMap,t=y.queueUpdate,o,i=c=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function n(c){let d=c.$fastController||e.get(c);return d===void 0&&(Array.isArray(c)?d=i(c):e.set(c,d=new qt(c))),d}let s=Io();class a{constructor(d){this.name=d,this.field=`_${d}`,this.callback=`${d}Changed`}getValue(d){return o!==void 0&&o.watch(d,this.name),d[this.field]}setValue(d,f){let v=this.field,A=d[v];if(A!==f){d[v]=f;let F=d[this.callback];typeof F=="function"&&F.call(d,A,f),n(d).notify(this.name)}}}class l extends Ut{constructor(d,f,v=!1){super(d,f),this.binding=d,this.isVolatileBinding=v,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(d,f){this.needsRefresh&&this.last!==null&&this.disconnect();let v=o;o=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;let A=this.binding(d,f);return o=v,A}disconnect(){if(this.last!==null){let d=this.first;for(;d!==void 0;)d.notifier.unsubscribe(this,d.propertyName),d=d.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(d,f){let v=this.last,A=n(d),F=v===null?this.first:{};if(F.propertySource=d,F.propertyName=f,F.notifier=A,A.subscribe(this,f),v!==null){if(!this.needsRefresh){let O;o=void 0,O=v.propertySource[v.propertyName],o=this,d===O&&(this.needsRefresh=!0)}v.next=F}this.last=F}handleChange(){this.needsQueue&&(this.needsQueue=!1,t(this))}call(){this.last!==null&&(this.needsQueue=!0,this.notify(this))}records(){let d=this.first;return{next:()=>{let f=d;return f===void 0?{value:void 0,done:!0}:(d=d.next,{value:f,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(c){i=c},getNotifier:n,track(c,d){o!==void 0&&o.watch(c,d)},trackVolatile(){o!==void 0&&(o.needsRefresh=!0)},notify(c,d){n(c).notify(d)},defineProperty(c,d){typeof d=="string"&&(d=new a(d)),s(c).push(d),Reflect.defineProperty(c,d.name,{enumerable:!0,get:function(){return d.getValue(this)},set:function(f){d.setValue(this,f)}})},getAccessors:s,binding(c,d,f=this.isVolatileBinding(c)){return new l(c,d,f)},isVolatileBinding(c){return r.test(c.toString())}})});function x(r,e){$.defineProperty(r,e)}function ua(r,e,t){return Object.assign({},t,{get:function(){return $.trackVolatile(),t.get.apply(this)}})}var da=At.getById(3,()=>{let r=null;return{get(){return r},set(e){r=e}}}),rt=class{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return da.get()}get isEven(){return this.index%2===0}get isOdd(){return this.index%2!==0}get isFirst(){return this.index===0}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(e){da.set(e)}};$.defineProperty(rt.prototype,"index");$.defineProperty(rt.prototype,"length");var ot=Object.seal(new rt);var Wt=class{constructor(){this.targetIndex=0}},Xt=class extends Wt{constructor(){super(...arguments),this.createPlaceholder=y.createInterpolationPlaceholder}},Yt=class extends Wt{constructor(e,t,o){super(),this.name=e,this.behavior=t,this.options=o}createPlaceholder(e){return y.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}};function qc(r,e){this.source=r,this.context=e,this.bindingObserver===null&&(this.bindingObserver=$.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(r,e))}function Wc(r,e){this.source=r,this.context=e,this.target.addEventListener(this.targetName,this)}function Xc(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function Yc(){this.bindingObserver.disconnect(),this.source=null,this.context=null;let r=this.target.$fastView;r!==void 0&&r.isComposed&&(r.unbind(),r.needsBindOnly=!0)}function Qc(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function Zc(r){y.setAttribute(this.target,this.targetName,r)}function Jc(r){y.setBooleanAttribute(this.target,this.targetName,r)}function Kc(r){if(r==null&&(r=""),r.create){this.target.textContent="";let e=this.target.$fastView;e===void 0?e=r.create():this.target.$fastTemplate!==r&&(e.isComposed&&(e.remove(),e.unbind()),e=r.create()),e.isComposed?e.needsBindOnly&&(e.needsBindOnly=!1,e.bind(this.source,this.context)):(e.isComposed=!0,e.bind(this.source,this.context),e.insertBefore(this.target),this.target.$fastView=e,this.target.$fastTemplate=r)}else{let e=this.target.$fastView;e!==void 0&&e.isComposed&&(e.isComposed=!1,e.remove(),e.needsBindOnly?e.needsBindOnly=!1:e.unbind()),this.target.textContent=r}}function ed(r){this.target[this.targetName]=r}function td(r){let e=this.classVersions||Object.create(null),t=this.target,o=this.version||0;if(r!=null&&r.length){let i=r.split(/\s+/);for(let n=0,s=i.length;n<s;++n){let a=i[n];a!==""&&(e[a]=o,t.classList.add(a))}}if(this.classVersions=e,this.version=o+1,o!==0){o-=1;for(let i in e)e[i]===o&&t.classList.remove(i)}}var Et=class extends Xt{constructor(e){super(),this.binding=e,this.bind=qc,this.unbind=Xc,this.updateTarget=Zc,this.isBindingVolatile=$.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,e!==void 0)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=ed,this.cleanedTargetName==="innerHTML"){let t=this.binding;this.binding=(o,i)=>y.createHTML(t(o,i))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=Jc;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=Wc,this.unbind=Qc;break;default:this.cleanedTargetName=e,e==="class"&&(this.updateTarget=td);break}}targetAtContent(){this.updateTarget=Kc,this.unbind=Yc}createBehavior(e){return new cn(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}},cn=class{constructor(e,t,o,i,n,s,a){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=t,this.isBindingVolatile=o,this.bind=i,this.unbind=n,this.updateTarget=s,this.targetName=a}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){rt.setEvent(e);let t=this.binding(this.source,this.context);rt.setEvent(null),t!==!0&&e.preventDefault()}};var dn=null,un=class r{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){dn=this}static borrow(e){let t=dn||new r;return t.directives=e,t.reset(),dn=null,t}};function rd(r){if(r.length===1)return r[0];let e,t=r.length,o=r.map(s=>typeof s=="string"?()=>s:(e=s.targetName||e,s.binding)),i=(s,a)=>{let l="";for(let c=0;c<t;++c)l+=o[c](s,a);return l},n=new Et(i);return n.targetName=e,n}var od=Vo.length;function pa(r,e){let t=e.split(ln);if(t.length===1)return null;let o=[];for(let i=0,n=t.length;i<n;++i){let s=t[i],a=s.indexOf(Vo),l;if(a===-1)l=s;else{let c=parseInt(s.substring(0,a));o.push(r.directives[c]),l=s.substring(a+od)}l!==""&&o.push(l)}return o}function ha(r,e,t=!1){let o=e.attributes;for(let i=0,n=o.length;i<n;++i){let s=o[i],a=s.value,l=pa(r,a),c=null;l===null?t&&(c=new Et(()=>a),c.targetName=s.name):c=rd(l),c!==null&&(e.removeAttributeNode(s),i--,n--,r.addFactory(c))}}function id(r,e,t){let o=pa(r,e.textContent);if(o!==null){let i=e;for(let n=0,s=o.length;n<s;++n){let a=o[n],l=n===0?e:i.parentNode.insertBefore(document.createTextNode(""),i.nextSibling);typeof a=="string"?l.textContent=a:(l.textContent=" ",r.captureContentBinding(a)),i=l,r.targetIndex++,l!==e&&t.nextNode()}r.targetIndex--}}function fa(r,e){let t=r.content;document.adoptNode(t);let o=un.borrow(e);ha(o,r,!0);let i=o.behaviorFactories;o.reset();let n=y.createTemplateWalker(t),s;for(;s=n.nextNode();)switch(o.targetIndex++,s.nodeType){case 1:ha(o,s);break;case 3:id(o,s,n);break;case 8:y.isMarker(s)&&o.addFactory(e[y.extractDirectiveIndexFromMarker(s)])}let a=0;(y.isMarker(t.firstChild)||t.childNodes.length===1&&e.length)&&(t.insertBefore(document.createComment(""),t.firstChild),a=-1);let l=o.behaviorFactories;return o.release(),{fragment:t,viewBehaviorFactories:l,hostBehaviorFactories:i,targetOffset:a}}var hn=document.createRange(),_o=class{constructor(e,t){this.fragment=e,this.behaviors=t,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{let t=this.lastChild;if(e.previousSibling===t)return;let o=e.parentNode,i=this.firstChild,n;for(;i!==t;)n=i.nextSibling,o.insertBefore(i,e),i=n;o.insertBefore(t,e)}}remove(){let e=this.fragment,t=this.lastChild,o=this.firstChild,i;for(;o!==t;)i=o.nextSibling,e.appendChild(o),o=i;e.appendChild(t)}dispose(){let e=this.firstChild.parentNode,t=this.lastChild,o=this.firstChild,i;for(;o!==t;)i=o.nextSibling,e.removeChild(o),o=i;e.removeChild(t);let n=this.behaviors,s=this.source;for(let a=0,l=n.length;a<l;++a)n[a].unbind(s)}bind(e,t){let o=this.behaviors;if(this.source!==e)if(this.source!==null){let i=this.source;this.source=e,this.context=t;for(let n=0,s=o.length;n<s;++n){let a=o[n];a.unbind(i),a.bind(e,t)}}else{this.source=e,this.context=t;for(let i=0,n=o.length;i<n;++i)o[i].bind(e,t)}}unbind(){if(this.source===null)return;let e=this.behaviors,t=this.source;for(let o=0,i=e.length;o<i;++o)e[o].unbind(t);this.source=null}static disposeContiguousBatch(e){if(e.length!==0){hn.setStartBefore(e[0].firstChild),hn.setEndAfter(e[e.length-1].lastChild),hn.deleteContents();for(let t=0,o=e.length;t<o;++t){let i=e[t],n=i.behaviors,s=i.source;for(let a=0,l=n.length;a<l;++a)n[a].unbind(s)}}}};var Do=class{constructor(e,t){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=t}create(e){if(this.fragment===null){let c,d=this.html;if(typeof d=="string"){c=document.createElement("template"),c.innerHTML=y.createHTML(d);let v=c.content.firstElementChild;v!==null&&v.tagName==="TEMPLATE"&&(c=v)}else c=d;let f=fa(c,this.directives);this.fragment=f.fragment,this.viewBehaviorFactories=f.viewBehaviorFactories,this.hostBehaviorFactories=f.hostBehaviorFactories,this.targetOffset=f.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}let t=this.fragment.cloneNode(!0),o=this.viewBehaviorFactories,i=new Array(this.behaviorCount),n=y.createTemplateWalker(t),s=0,a=this.targetOffset,l=n.nextNode();for(let c=o.length;s<c;++s){let d=o[s],f=d.targetIndex;for(;l!==null;)if(a===f){i[s]=d.createBehavior(l);break}else l=n.nextNode(),a++}if(this.hasHostBehaviors){let c=this.hostBehaviorFactories;for(let d=0,f=c.length;d<f;++d,++s)i[s]=c[d].createBehavior(e)}return new _o(t,i)}render(e,t,o){typeof t=="string"&&(t=document.getElementById(t)),o===void 0&&(o=t);let i=this.create(o);return i.bind(e,ot),i.appendTo(t),i}},nd=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function q(r,...e){let t=[],o="";for(let i=0,n=r.length-1;i<n;++i){let s=r[i],a=e[i];if(o+=s,a instanceof Do){let l=a;a=()=>l}if(typeof a=="function"&&(a=new Et(a)),a instanceof Xt){let l=nd.exec(s);l!==null&&(a.targetName=l[2])}a instanceof Wt?(o+=a.createPlaceholder(t.length),t.push(a)):o+=a}return o+=r[r.length-1],new Do(o,t)}var M=class{constructor(){this.targets=new WeakSet}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=this.behaviors===null?e:this.behaviors.concat(e),this}};M.create=(()=>{if(y.supportsAdoptedStyleSheets){let r=new Map;return e=>new pn(e,r)}return r=>new fn(r)})();function mn(r){return r.map(e=>e instanceof M?mn(e.styles):[e]).reduce((e,t)=>e.concat(t),[])}function ma(r){return r.map(e=>e instanceof M?e.behaviors:null).reduce((e,t)=>t===null?e:(e===null&&(e=[]),e.concat(t)),null)}var Po=Symbol("prependToAdoptedStyleSheets");function ga(r){let e=[],t=[];return r.forEach(o=>(o[Po]?e:t).push(o)),{prepend:e,append:t}}var ba=(r,e)=>{let{prepend:t,append:o}=ga(e);r.adoptedStyleSheets=[...t,...r.adoptedStyleSheets,...o]},va=(r,e)=>{r.adoptedStyleSheets=r.adoptedStyleSheets.filter(t=>e.indexOf(t)===-1)};if(y.supportsAdoptedStyleSheets)try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),ba=(r,e)=>{let{prepend:t,append:o}=ga(e);r.adoptedStyleSheets.splice(0,0,...t),r.adoptedStyleSheets.push(...o)},va=(r,e)=>{for(let t of e){let o=r.adoptedStyleSheets.indexOf(t);o!==-1&&r.adoptedStyleSheets.splice(o,1)}}}catch{}var pn=class extends M{constructor(e,t){super(),this.styles=e,this.styleSheetCache=t,this._styleSheets=void 0,this.behaviors=ma(e)}get styleSheets(){if(this._styleSheets===void 0){let e=this.styles,t=this.styleSheetCache;this._styleSheets=mn(e).map(o=>{if(o instanceof CSSStyleSheet)return o;let i=t.get(o);return i===void 0&&(i=new CSSStyleSheet,i.replaceSync(o),t.set(o,i)),i})}return this._styleSheets}addStylesTo(e){ba(e,this.styleSheets),super.addStylesTo(e)}removeStylesFrom(e){va(e,this.styleSheets),super.removeStylesFrom(e)}},sd=0;function ad(){return`fast-style-class-${++sd}`}var fn=class extends M{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=ma(e),this.styleSheets=mn(e),this.styleClass=ad()}addStylesTo(e){let t=this.styleSheets,o=this.styleClass;e=this.normalizeTarget(e);for(let i=0;i<t.length;i++){let n=document.createElement("style");n.innerHTML=t[i],n.className=o,e.append(n)}super.addStylesTo(e)}removeStylesFrom(e){e=this.normalizeTarget(e);let t=e.querySelectorAll(`.${this.styleClass}`);for(let o=0,i=t.length;o<i;++o)e.removeChild(t[o]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}};var Lr=Object.freeze({locate:Io()}),gn={toView(r){return r?"true":"false"},fromView(r){return!(r==null||r==="false"||r===!1||r===0)}},Qt={toView(r){if(r==null)return null;let e=r*1;return isNaN(e)?null:e.toString()},fromView(r){if(r==null)return null;let e=r*1;return isNaN(e)?null:e}},Lo=class r{constructor(e,t,o=t.toLowerCase(),i="reflect",n){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=o,this.mode=i,this.converter=n,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,i==="boolean"&&n===void 0&&(this.converter=gn)}setValue(e,t){let o=e[this.fieldName],i=this.converter;i!==void 0&&(t=i.fromView(t)),o!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](o,t),e.$fastController.notify(this.name))}getValue(e){return $.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){let t=this.mode,o=this.guards;o.has(e)||t==="fromView"||y.queueUpdate(()=>{o.add(e);let i=e[this.fieldName];switch(t){case"reflect":let n=this.converter;y.setAttribute(e,this.attribute,n!==void 0?n.toView(i):i);break;case"boolean":y.setBooleanAttribute(e,this.attribute,i);break}o.delete(e)})}static collect(e,...t){let o=[];t.push(Lr.locate(e));for(let i=0,n=t.length;i<n;++i){let s=t[i];if(s!==void 0)for(let a=0,l=s.length;a<l;++a){let c=s[a];typeof c=="string"?o.push(new r(e,c)):o.push(new r(e,c.property,c.attribute,c.mode,c.converter))}}return o}};function g(r,e){let t;function o(i,n){arguments.length>1&&(t.property=n),Lr.locate(i.constructor).push(t)}if(arguments.length>1){t={},o(r,e);return}return t=r===void 0?{}:r,o}var xa={mode:"open"},ya={},bn=At.getById(4,()=>{let r=new Map;return Object.freeze({register(e){return r.has(e.type)?!1:(r.set(e.type,e),!0)},getByType(e){return r.get(e)}})}),Oe=class{constructor(e,t=e.definition){typeof t=="string"&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template;let o=Lo.collect(e,t.attributes),i=new Array(o.length),n={},s={};for(let a=0,l=o.length;a<l;++a){let c=o[a];i[a]=c.attribute,n[c.name]=c,s[c.attribute]=c}this.attributes=o,this.observedAttributes=i,this.propertyLookup=n,this.attributeLookup=s,this.shadowOptions=t.shadowOptions===void 0?xa:t.shadowOptions===null?void 0:Object.assign(Object.assign({},xa),t.shadowOptions),this.elementOptions=t.elementOptions===void 0?ya:Object.assign(Object.assign({},ya),t.elementOptions),this.styles=t.styles===void 0?void 0:Array.isArray(t.styles)?M.create(t.styles):t.styles instanceof M?t.styles:M.create([t.styles])}get isDefined(){return!!bn.getByType(this.type)}define(e=customElements){let t=this.type;if(bn.register(this)){let o=this.attributes,i=t.prototype;for(let n=0,s=o.length;n<s;++n)$.defineProperty(i,o[n]);Reflect.defineProperty(t,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return e.get(this.name)||e.define(this.name,t,this.elementOptions),this}};Oe.forType=bn.getByType;var wa=new WeakMap,ld={bubbles:!0,composed:!0,cancelable:!0};function vn(r){return r.shadowRoot||wa.get(r)||null}var Mo=class r extends qt{constructor(e,t){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=t;let o=t.shadowOptions;if(o!==void 0){let n=e.attachShadow(o);o.mode==="closed"&&wa.set(e,n)}let i=$.getAccessors(e);if(i.length>0){let n=this.boundObservables=Object.create(null);for(let s=0,a=i.length;s<a;++s){let l=i[s].name,c=e[l];c!==void 0&&(delete e[l],n[l]=c)}}}get isConnected(){return $.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,$.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(this._styles!==null&&this.removeStyles(this._styles),this._styles=e,!this.needsInitialization&&e!==null&&this.addStyles(e))}addStyles(e){let t=vn(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.append(e);else if(!e.isAttachedTo(t)){let o=e.behaviors;e.addStylesTo(t),o!==null&&this.addBehaviors(o)}}removeStyles(e){let t=vn(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.removeChild(e);else if(e.isAttachedTo(t)){let o=e.behaviors;e.removeStylesFrom(t),o!==null&&this.removeBehaviors(o)}}addBehaviors(e){let t=this.behaviors||(this.behaviors=new Map),o=e.length,i=[];for(let n=0;n<o;++n){let s=e[n];t.has(s)?t.set(s,t.get(s)+1):(t.set(s,1),i.push(s))}if(this._isConnected){let n=this.element;for(let s=0;s<i.length;++s)i[s].bind(n,ot)}}removeBehaviors(e,t=!1){let o=this.behaviors;if(o===null)return;let i=e.length,n=[];for(let s=0;s<i;++s){let a=e[s];if(o.has(a)){let l=o.get(a)-1;l===0||t?o.delete(a)&&n.push(a):o.set(a,l)}}if(this._isConnected){let s=this.element;for(let a=0;a<n.length;++a)n[a].unbind(s)}}onConnectedCallback(){if(this._isConnected)return;let e=this.element;this.needsInitialization?this.finishInitialization():this.view!==null&&this.view.bind(e,ot);let t=this.behaviors;if(t!==null)for(let[o]of t)o.bind(e,ot);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);let e=this.view;e!==null&&e.unbind();let t=this.behaviors;if(t!==null){let o=this.element;for(let[i]of t)i.unbind(o)}}onAttributeChangedCallback(e,t,o){let i=this.definition.attributeLookup[e];i!==void 0&&i.onAttributeChangedCallback(this.element,o)}emit(e,t,o){return this._isConnected?this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},ld),o))):!1}finishInitialization(){let e=this.element,t=this.boundObservables;if(t!==null){let i=Object.keys(t);for(let n=0,s=i.length;n<s;++n){let a=i[n];e[a]=t[a]}this.boundObservables=null}let o=this.definition;this._template===null&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():o.template&&(this._template=o.template||null)),this._template!==null&&this.renderTemplate(this._template),this._styles===null&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():o.styles&&(this._styles=o.styles||null)),this._styles!==null&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){let t=this.element,o=vn(t)||t;this.view!==null?(this.view.dispose(),this.view=null):this.needsInitialization||y.removeChildNodes(o),e&&(this.view=e.render(t,o,t))}static forCustomElement(e){let t=e.$fastController;if(t!==void 0)return t;let o=Oe.forType(e.constructor);if(o===void 0)throw new Error("Missing FASTElement definition.");return e.$fastController=new r(e,o)}};function $a(r){return class extends r{constructor(){super(),Mo.forCustomElement(this)}$emit(e,t,o){return this.$fastController.emit(e,t,o)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,t,o){this.$fastController.onAttributeChangedCallback(e,t,o)}}}var it=Object.assign($a(HTMLElement),{from(r){return $a(r)},define(r,e){return new Oe(r,e).define().type}});var nt=class{createCSS(){return""}createBehavior(){}};function Ca(r,e){let t=[],o="",i=[];for(let n=0,s=r.length-1;n<s;++n){o+=r[n];let a=e[n];if(a instanceof nt){let l=a.createBehavior();a=a.createCSS(),l&&i.push(l)}a instanceof M||a instanceof CSSStyleSheet?(o.trim()!==""&&(t.push(o),o=""),t.push(a)):o+=a}return o+=r[r.length-1],o.trim()!==""&&t.push(o),{styles:t,behaviors:i}}function E(r,...e){let{styles:t,behaviors:o}=Ca(r,e),i=M.create(t);return o.length&&i.withBehaviors(...o),i}var xn=class extends nt{constructor(e,t){super(),this.behaviors=t,this.css="";let o=e.reduce((i,n)=>(typeof n=="string"?this.css+=n:i.push(n),i),[]);o.length&&(this.styles=M.create(o))}createBehavior(){return this}createCSS(){return this.css}bind(e){this.styles&&e.$fastController.addStyles(this.styles),this.behaviors.length&&e.$fastController.addBehaviors(this.behaviors)}unbind(e){this.styles&&e.$fastController.removeStyles(this.styles),this.behaviors.length&&e.$fastController.removeBehaviors(this.behaviors)}};function yn(r,...e){let{styles:t,behaviors:o}=Ca(r,e);return new xn(t,o)}var wn=class{constructor(e,t){this.target=e,this.propertyName=t}bind(e){e[this.propertyName]=this.target}unbind(){}};function G(r){return new Yt("fast-ref",wn,r)}var $n=r=>typeof r=="function";var cd=()=>null;function Sa(r){return r===void 0?cd:$n(r)?r:()=>r}function ka(r,e,t){let o=$n(r)?r:()=>r,i=Sa(e),n=Sa(t);return(s,a)=>o(s,a)?i(s,a):n(s,a)}var Bo=class{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){let t=this.options.property;this.shouldUpdate=$.getAccessors(e).some(o=>o.name===t),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(tt),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return this.options.filter!==void 0&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}};var Cn=class extends Bo{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}};function ge(r){return typeof r=="string"&&(r={property:r}),new Yt("fast-slotted",Cn,r)}var be=class{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}},Fe=(r,e)=>q`
    <span
        part="end"
        ${G("endContainer")}
        class=${t=>e.end?"end":void 0}
    >
        <slot name="end" ${G("end")} @slotchange="${t=>t.handleEndContentChange()}">
            ${e.end||""}
        </slot>
    </span>
`,Te=(r,e)=>q`
    <span
        part="start"
        ${G("startContainer")}
        class="${t=>e.start?"start":void 0}"
    >
        <slot
            name="start"
            ${G("start")}
            @slotchange="${t=>t.handleStartContentChange()}"
        >
            ${e.start||""}
        </slot>
    </span>
`,Vm=q`
    <span part="end" ${G("endContainer")}>
        <slot
            name="end"
            ${G("end")}
            @slotchange="${r=>r.handleEndContentChange()}"
        ></slot>
    </span>
`,_m=q`
    <span part="start" ${G("startContainer")}>
        <slot
            name="start"
            ${G("start")}
            @slotchange="${r=>r.handleStartContentChange()}"
        ></slot>
    </span>
`;function u(r,e,t,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(r,e,t,o);else for(var a=r.length-1;a>=0;a--)(s=r[a])&&(n=(i<3?s(n):i>3?s(e,t,n):s(e,t))||n);return i>3&&n&&Object.defineProperty(e,t,n),n}var Sn=new Map;"metadata"in Reflect||(Reflect.metadata=function(r,e){return function(t){Reflect.defineMetadata(r,e,t)}},Reflect.defineMetadata=function(r,e,t){let o=Sn.get(t);o===void 0&&Sn.set(t,o=new Map),o.set(r,e)},Reflect.getOwnMetadata=function(r,e){let t=Sn.get(e);if(t!==void 0)return t.get(r)});var Rn=class{constructor(e,t){this.container=e,this.key=t}instance(e){return this.registerResolver(0,e)}singleton(e){return this.registerResolver(1,e)}transient(e){return this.registerResolver(2,e)}callback(e){return this.registerResolver(3,e)}cachedCallback(e){return this.registerResolver(3,Pa(e))}aliasTo(e){return this.registerResolver(5,e)}registerResolver(e,t){let{container:o,key:i}=this;return this.container=this.key=void 0,o.registerResolver(i,new ae(i,e,t))}};function Mr(r){let e=r.slice(),t=Object.keys(r),o=t.length,i;for(let n=0;n<o;++n)i=t[n],La(i)||(e[i]=r[i]);return e}var dd=Object.freeze({none(r){throw Error(`${r.toString()} not registered, did you forget to add @singleton()?`)},singleton(r){return new ae(r,1,r)},transient(r){return new ae(r,2,r)}}),kn=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:dd.singleton})}),Aa=new Map;function Ea(r){return e=>Reflect.getOwnMetadata(r,e)}var Ra=null,V=Object.freeze({createContainer(r){return new Br(null,Object.assign({},kn.default,r))},findResponsibleContainer(r){let e=r.$$container$$;return e&&e.responsibleForOwnerRequests?e:V.findParentContainer(r)},findParentContainer(r){let e=new CustomEvent(Da,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return r.dispatchEvent(e),e.detail.container||V.getOrCreateDOMContainer()},getOrCreateDOMContainer(r,e){return r?r.$$container$$||new Br(r,Object.assign({},kn.default,e,{parentLocator:V.findParentContainer})):Ra||(Ra=new Br(null,Object.assign({},kn.default,e,{parentLocator:()=>null})))},getDesignParamtypes:Ea("design:paramtypes"),getAnnotationParamtypes:Ea("di:paramtypes"),getOrCreateAnnotationParamTypes(r){let e=this.getAnnotationParamtypes(r);return e===void 0&&Reflect.defineMetadata("di:paramtypes",e=[],r),e},getDependencies(r){let e=Aa.get(r);if(e===void 0){let t=r.inject;if(t===void 0){let o=V.getDesignParamtypes(r),i=V.getAnnotationParamtypes(r);if(o===void 0)if(i===void 0){let n=Object.getPrototypeOf(r);typeof n=="function"&&n!==Function.prototype?e=Mr(V.getDependencies(n)):e=[]}else e=Mr(i);else if(i===void 0)e=Mr(o);else{e=Mr(o);let n=i.length,s;for(let c=0;c<n;++c)s=i[c],s!==void 0&&(e[c]=s);let a=Object.keys(i);n=a.length;let l;for(let c=0;c<n;++c)l=a[c],La(l)||(e[l]=i[l])}}else e=Mr(t);Aa.set(r,e)}return e},defineProperty(r,e,t,o=!1){let i=`$di_${e}`;Reflect.defineProperty(r,e,{get:function(){let n=this[i];if(n===void 0&&(n=(this instanceof HTMLElement?V.findResponsibleContainer(this):V.getOrCreateDOMContainer()).get(t),this[i]=n,o&&this instanceof it)){let a=this.$fastController,l=()=>{let d=V.findResponsibleContainer(this).get(t),f=this[i];d!==f&&(this[i]=n,a.notify(e))};a.subscribe({handleChange:l},"isConnected")}return n}})},createInterface(r,e){let t=typeof r=="function"?r:e,o=typeof r=="string"?r:r&&"friendlyName"in r&&r.friendlyName||Ia,i=typeof r=="string"?!1:r&&"respectConnection"in r&&r.respectConnection||!1,n=function(s,a,l){if(s==null||new.target!==void 0)throw new Error(`No registration for interface: '${n.friendlyName}'`);if(a)V.defineProperty(s,a,n,i);else{let c=V.getOrCreateAnnotationParamTypes(s);c[l]=n}};return n.$isInterface=!0,n.friendlyName=o??"(anonymous)",t!=null&&(n.register=function(s,a){return t(new Rn(s,a??n))}),n.toString=function(){return`InterfaceSymbol<${n.friendlyName}>`},n},inject(...r){return function(e,t,o){if(typeof o=="number"){let i=V.getOrCreateAnnotationParamTypes(e),n=r[0];n!==void 0&&(i[o]=n)}else if(t)V.defineProperty(e,t,r[0]);else{let i=o?V.getOrCreateAnnotationParamTypes(o.value):V.getOrCreateAnnotationParamTypes(e),n;for(let s=0;s<r.length;++s)n=r[s],n!==void 0&&(i[s]=n)}}},transient(r){return r.register=function(t){return Rt.transient(r,r).register(t)},r.registerInRequestor=!1,r},singleton(r,e=hd){return r.register=function(o){return Rt.singleton(r,r).register(o)},r.registerInRequestor=e.scoped,r}}),ud=V.createInterface("Container");function zo(r){return function(e){let t=function(o,i,n){V.inject(t)(o,i,n)};return t.$isResolver=!0,t.resolve=function(o,i){return r(e,o,i)},t}}var Mm=V.inject;var hd={scoped:!1};function pd(r){return function(e,t){t=!!t;let o=function(i,n,s){V.inject(o)(i,n,s)};return o.$isResolver=!0,o.resolve=function(i,n){return r(e,i,n,t)},o}}var Bm=pd((r,e,t,o)=>t.getAll(r,o)),Hm=zo((r,e,t)=>()=>t.get(r)),Nm=zo((r,e,t)=>{if(t.has(r,!0))return t.get(r)});function Fn(r,e,t){V.inject(Fn)(r,e,t)}Fn.$isResolver=!0;Fn.resolve=()=>{};var jm=zo((r,e,t)=>{let o=_a(r,e),i=new ae(r,0,o);return t.registerResolver(r,i),o}),zm=zo((r,e,t)=>_a(r,e));function _a(r,e){return e.getFactory(r).construct(e)}var ae=class{constructor(e,t,o){this.key=e,this.strategy=t,this.state=o,this.resolving=!1}get $isResolver(){return!0}register(e){return e.registerResolver(this.key,this)}resolve(e,t){switch(this.strategy){case 0:return this.state;case 1:{if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=e.getFactory(this.state).construct(t),this.strategy=0,this.resolving=!1,this.state}case 2:{let o=e.getFactory(this.state);if(o===null)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return o.construct(t)}case 3:return this.state(e,t,this);case 4:return this.state[0].resolve(e,t);case 5:return t.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(e){var t,o,i;switch(this.strategy){case 1:case 2:return e.getFactory(this.state);case 5:return(i=(o=(t=e.getResolver(this.state))===null||t===void 0?void 0:t.getFactory)===null||o===void 0?void 0:o.call(t,e))!==null&&i!==void 0?i:null;default:return null}}};function Oa(r){return this.get(r)}function fd(r,e){return e(r)}var On=class{constructor(e,t){this.Type=e,this.dependencies=t,this.transformers=null}construct(e,t){let o;return t===void 0?o=new this.Type(...this.dependencies.map(Oa,e)):o=new this.Type(...this.dependencies.map(Oa,e),...t),this.transformers==null?o:this.transformers.reduce(fd,o)}registerTransformer(e){(this.transformers||(this.transformers=[])).push(e)}},md={$isResolver:!0,resolve(r,e){return e}};function jo(r){return typeof r.register=="function"}function gd(r){return jo(r)&&typeof r.registerInRequestor=="boolean"}function Fa(r){return gd(r)&&r.registerInRequestor}function bd(r){return r.prototype!==void 0}var vd=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),Da="__DI_LOCATE_PARENT__",An=new Map,Br=class r{constructor(e,t){this.owner=e,this.config=t,this._parent=void 0,this.registerDepth=0,this.context=null,e!==null&&(e.$$container$$=this),this.resolvers=new Map,this.resolvers.set(ud,md),e instanceof Node&&e.addEventListener(Da,o=>{o.composedPath()[0]!==this.owner&&(o.detail.container=this,o.stopImmediatePropagation())})}get parent(){return this._parent===void 0&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return this.parent===null?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(e,...t){return this.context=e,this.register(...t),this.context=null,this}register(...e){if(++this.registerDepth===100)throw new Error("Unable to autoregister dependency");let t,o,i,n,s,a=this.context;for(let l=0,c=e.length;l<c;++l)if(t=e[l],!!Va(t))if(jo(t))t.register(this,a);else if(bd(t))Rt.singleton(t,t).register(this);else for(o=Object.keys(t),n=0,s=o.length;n<s;++n)i=t[o[n]],Va(i)&&(jo(i)?i.register(this,a):this.register(i));return--this.registerDepth,this}registerResolver(e,t){Ho(e);let o=this.resolvers,i=o.get(e);return i==null?o.set(e,t):i instanceof ae&&i.strategy===4?i.state.push(t):o.set(e,new ae(e,4,[i,t])),t}registerTransformer(e,t){let o=this.getResolver(e);if(o==null)return!1;if(o.getFactory){let i=o.getFactory(this);return i==null?!1:(i.registerTransformer(t),!0)}return!1}getResolver(e,t=!0){if(Ho(e),e.resolve!==void 0)return e;let o=this,i;for(;o!=null;)if(i=o.resolvers.get(e),i==null){if(o.parent==null){let n=Fa(e)?this:o;return t?this.jitRegister(e,n):null}o=o.parent}else return i;return null}has(e,t=!1){return this.resolvers.has(e)?!0:t&&this.parent!=null?this.parent.has(e,!0):!1}get(e){if(Ho(e),e.$isResolver)return e.resolve(this,this);let t=this,o;for(;t!=null;)if(o=t.resolvers.get(e),o==null){if(t.parent==null){let i=Fa(e)?this:t;return o=this.jitRegister(e,i),o.resolve(t,this)}t=t.parent}else return o.resolve(t,this);throw new Error(`Unable to resolve key: ${String(e)}`)}getAll(e,t=!1){Ho(e);let o=this,i=o,n;if(t){let s=tt;for(;i!=null;)n=i.resolvers.get(e),n!=null&&(s=s.concat(Ta(n,i,o))),i=i.parent;return s}else for(;i!=null;)if(n=i.resolvers.get(e),n==null){if(i=i.parent,i==null)return tt}else return Ta(n,i,o);return tt}getFactory(e){let t=An.get(e);if(t===void 0){if(xd(e))throw new Error(`${e.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);An.set(e,t=new On(e,V.getDependencies(e)))}return t}registerFactory(e,t){An.set(e,t)}createChild(e){return new r(null,Object.assign({},this.config,e,{parentLocator:()=>this}))}jitRegister(e,t){if(typeof e!="function")throw new Error(`Attempted to jitRegister something that is not a constructor: '${e}'. Did you forget to register this dependency?`);if(vd.has(e.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${e.name}. Did you forget to add @inject(Key)`);if(jo(e)){let o=e.register(t);if(!(o instanceof Object)||o.resolve==null){let i=t.resolvers.get(e);if(i!=null)return i;throw new Error("A valid resolver was not returned from the static register method")}return o}else{if(e.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${e.friendlyName}`);{let o=this.config.defaultResolver(e,t);return t.resolvers.set(e,o),o}}}},En=new WeakMap;function Pa(r){return function(e,t,o){if(En.has(o))return En.get(o);let i=r(e,t,o);return En.set(o,i),i}}var Rt=Object.freeze({instance(r,e){return new ae(r,0,e)},singleton(r,e){return new ae(r,1,e)},transient(r,e){return new ae(r,2,e)},callback(r,e){return new ae(r,3,e)},cachedCallback(r,e){return new ae(r,3,Pa(e))},aliasTo(r,e){return new ae(e,5,r)}});function Ho(r){if(r==null)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function Ta(r,e,t){if(r instanceof ae&&r.strategy===4){let o=r.state,i=o.length,n=new Array(i);for(;i--;)n[i]=o[i].resolve(e,t);return n}return[r.resolve(e,t)]}var Ia="(anonymous)";function Va(r){return typeof r=="object"&&r!==null||typeof r=="function"}var xd=function(){let r=new WeakMap,e=!1,t="",o=0;return function(i){return e=r.get(i),e===void 0&&(t=i.toString(),o=t.length,e=o>=29&&o<=100&&t.charCodeAt(o-1)===125&&t.charCodeAt(o-2)<=32&&t.charCodeAt(o-3)===93&&t.charCodeAt(o-4)===101&&t.charCodeAt(o-5)===100&&t.charCodeAt(o-6)===111&&t.charCodeAt(o-7)===99&&t.charCodeAt(o-8)===32&&t.charCodeAt(o-9)===101&&t.charCodeAt(o-10)===118&&t.charCodeAt(o-11)===105&&t.charCodeAt(o-12)===116&&t.charCodeAt(o-13)===97&&t.charCodeAt(o-14)===110&&t.charCodeAt(o-15)===88,r.set(i,e)),e}}(),No={};function La(r){switch(typeof r){case"number":return r>=0&&(r|0)===r;case"string":{let e=No[r];if(e!==void 0)return e;let t=r.length;if(t===0)return No[r]=!1;let o=0;for(let i=0;i<t;++i)if(o=r.charCodeAt(i),i===0&&o===48&&t>1||o<48||o>57)return No[r]=!1;return No[r]=!0}default:return!1}}function Ma(r){return`${r.toLowerCase()}:presentation`}var Go=new Map,qo=Object.freeze({define(r,e,t){let o=Ma(r);Go.get(o)===void 0?Go.set(o,e):Go.set(o,!1),t.register(Rt.instance(o,e))},forTag(r,e){let t=Ma(r),o=Go.get(t);return o===!1?V.findResponsibleContainer(e).get(t):o||null}}),Uo=class{constructor(e,t){this.template=e||null,this.styles=t===void 0?null:Array.isArray(t)?M.create(t):t instanceof M?t:M.create([t])}applyTo(e){let t=e.$fastController;t.template===null&&(t.template=this.template),t.styles===null&&(t.styles=this.styles)}};var te=class r extends it{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return this._presentation===void 0&&(this._presentation=qo.forTag(this.tagName,this)),this._presentation}templateChanged(){this.template!==void 0&&(this.$fastController.template=this.template)}stylesChanged(){this.styles!==void 0&&(this.$fastController.styles=this.styles)}connectedCallback(){this.$presentation!==null&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(e){return(t={})=>new Tn(this===r?class extends r{}:this,e,t)}};u([x],te.prototype,"template",void 0);u([x],te.prototype,"styles",void 0);function Hr(r,e,t){return typeof r=="function"?r(e,t):r}var Tn=class{constructor(e,t,o){this.type=e,this.elementDefinition=t,this.overrideDefinition=o,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(e,t){let o=this.definition,i=this.overrideDefinition,s=`${o.prefix||t.elementPrefix}-${o.baseName}`;t.tryDefineElement({name:s,type:this.type,baseClass:this.elementDefinition.baseClass,callback:a=>{let l=new Uo(Hr(o.template,a,o),Hr(o.styles,a,o));a.definePresentation(l);let c=Hr(o.shadowOptions,a,o);a.shadowRootMode&&(c?i.shadowOptions||(c.mode=a.shadowRootMode):c!==null&&(c={mode:a.shadowRootMode})),a.defineElement({elementOptions:Hr(o.elementOptions,a,o),shadowOptions:c,attributes:Hr(o.attributes,a,o)})}})}};function W(r,...e){let t=Lr.locate(r);e.forEach(o=>{Object.getOwnPropertyNames(o.prototype).forEach(n=>{n!=="constructor"&&Object.defineProperty(r.prototype,n,Object.getOwnPropertyDescriptor(o.prototype,n))}),Lr.locate(o).forEach(n=>t.push(n))})}function Ba(r,e){let t=r.length;for(;t--;)if(e(r[t],t,r))return t;return-1}function Ha(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Na(...r){return r.every(e=>e instanceof HTMLElement)}function yd(){let r=document.querySelector('meta[property="csp-nonce"]');return r?r.getAttribute("content"):null}var Ot;function ja(){if(typeof Ot=="boolean")return Ot;if(!Ha())return Ot=!1,Ot;let r=document.createElement("style"),e=yd();e!==null&&r.setAttribute("nonce",e),document.head.appendChild(r);try{r.sheet.insertRule("foo:focus-visible {color:inherit}",0),Ot=!0}catch{Ot=!1}finally{document.head.removeChild(r)}return Ot}var za;(function(r){r[r.alt=18]="alt",r[r.arrowDown=40]="arrowDown",r[r.arrowLeft=37]="arrowLeft",r[r.arrowRight=39]="arrowRight",r[r.arrowUp=38]="arrowUp",r[r.back=8]="back",r[r.backSlash=220]="backSlash",r[r.break=19]="break",r[r.capsLock=20]="capsLock",r[r.closeBracket=221]="closeBracket",r[r.colon=186]="colon",r[r.colon2=59]="colon2",r[r.comma=188]="comma",r[r.ctrl=17]="ctrl",r[r.delete=46]="delete",r[r.end=35]="end",r[r.enter=13]="enter",r[r.equals=187]="equals",r[r.equals2=61]="equals2",r[r.equals3=107]="equals3",r[r.escape=27]="escape",r[r.forwardSlash=191]="forwardSlash",r[r.function1=112]="function1",r[r.function10=121]="function10",r[r.function11=122]="function11",r[r.function12=123]="function12",r[r.function2=113]="function2",r[r.function3=114]="function3",r[r.function4=115]="function4",r[r.function5=116]="function5",r[r.function6=117]="function6",r[r.function7=118]="function7",r[r.function8=119]="function8",r[r.function9=120]="function9",r[r.home=36]="home",r[r.insert=45]="insert",r[r.menu=93]="menu",r[r.minus=189]="minus",r[r.minus2=109]="minus2",r[r.numLock=144]="numLock",r[r.numPad0=96]="numPad0",r[r.numPad1=97]="numPad1",r[r.numPad2=98]="numPad2",r[r.numPad3=99]="numPad3",r[r.numPad4=100]="numPad4",r[r.numPad5=101]="numPad5",r[r.numPad6=102]="numPad6",r[r.numPad7=103]="numPad7",r[r.numPad8=104]="numPad8",r[r.numPad9=105]="numPad9",r[r.numPadDivide=111]="numPadDivide",r[r.numPadDot=110]="numPadDot",r[r.numPadMinus=109]="numPadMinus",r[r.numPadMultiply=106]="numPadMultiply",r[r.numPadPlus=107]="numPadPlus",r[r.openBracket=219]="openBracket",r[r.pageDown=34]="pageDown",r[r.pageUp=33]="pageUp",r[r.period=190]="period",r[r.print=44]="print",r[r.quote=222]="quote",r[r.scrollLock=145]="scrollLock",r[r.shift=16]="shift",r[r.space=32]="space",r[r.tab=9]="tab",r[r.tilde=192]="tilde",r[r.windowsLeft=91]="windowsLeft",r[r.windowsOpera=219]="windowsOpera",r[r.windowsRight=92]="windowsRight"})(za||(za={}));var Zt="ArrowDown";var Jt="ArrowUp",Kt="Enter",er="Escape",tr="Home",rr="End";var st=" ",or="Tab";var Wo;(function(r){r.ltr="ltr",r.rtl="rtl"})(Wo||(Wo={}));function Ga(r,e,t){return Math.min(Math.max(t,r),e)}function Nr(r,e,t=0){return[e,t]=[e,t].sort((o,i)=>o-i),e<=r&&r<t}var wd=0;function ir(r=""){return`${r}${wd++}`}var S;(function(r){r.Canvas="Canvas",r.CanvasText="CanvasText",r.LinkText="LinkText",r.VisitedText="VisitedText",r.ActiveText="ActiveText",r.ButtonFace="ButtonFace",r.ButtonText="ButtonText",r.Field="Field",r.FieldText="FieldText",r.Highlight="Highlight",r.HighlightText="HighlightText",r.GrayText="GrayText"})(S||(S={}));var I=class{};u([g({attribute:"aria-atomic"})],I.prototype,"ariaAtomic",void 0);u([g({attribute:"aria-busy"})],I.prototype,"ariaBusy",void 0);u([g({attribute:"aria-controls"})],I.prototype,"ariaControls",void 0);u([g({attribute:"aria-current"})],I.prototype,"ariaCurrent",void 0);u([g({attribute:"aria-describedby"})],I.prototype,"ariaDescribedby",void 0);u([g({attribute:"aria-details"})],I.prototype,"ariaDetails",void 0);u([g({attribute:"aria-disabled"})],I.prototype,"ariaDisabled",void 0);u([g({attribute:"aria-errormessage"})],I.prototype,"ariaErrormessage",void 0);u([g({attribute:"aria-flowto"})],I.prototype,"ariaFlowto",void 0);u([g({attribute:"aria-haspopup"})],I.prototype,"ariaHaspopup",void 0);u([g({attribute:"aria-hidden"})],I.prototype,"ariaHidden",void 0);u([g({attribute:"aria-invalid"})],I.prototype,"ariaInvalid",void 0);u([g({attribute:"aria-keyshortcuts"})],I.prototype,"ariaKeyshortcuts",void 0);u([g({attribute:"aria-label"})],I.prototype,"ariaLabel",void 0);u([g({attribute:"aria-labelledby"})],I.prototype,"ariaLabelledby",void 0);u([g({attribute:"aria-live"})],I.prototype,"ariaLive",void 0);u([g({attribute:"aria-owns"})],I.prototype,"ariaOwns",void 0);u([g({attribute:"aria-relevant"})],I.prototype,"ariaRelevant",void 0);u([g({attribute:"aria-roledescription"})],I.prototype,"ariaRoledescription",void 0);var Ua=(r,e)=>q`
    <button
        class="control"
        part="control"
        ?autofocus="${t=>t.autofocus}"
        ?disabled="${t=>t.disabled}"
        form="${t=>t.formId}"
        formaction="${t=>t.formaction}"
        formenctype="${t=>t.formenctype}"
        formmethod="${t=>t.formmethod}"
        formnovalidate="${t=>t.formnovalidate}"
        formtarget="${t=>t.formtarget}"
        name="${t=>t.name}"
        type="${t=>t.type}"
        value="${t=>t.value}"
        aria-atomic="${t=>t.ariaAtomic}"
        aria-busy="${t=>t.ariaBusy}"
        aria-controls="${t=>t.ariaControls}"
        aria-current="${t=>t.ariaCurrent}"
        aria-describedby="${t=>t.ariaDescribedby}"
        aria-details="${t=>t.ariaDetails}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-errormessage="${t=>t.ariaErrormessage}"
        aria-expanded="${t=>t.ariaExpanded}"
        aria-flowto="${t=>t.ariaFlowto}"
        aria-haspopup="${t=>t.ariaHaspopup}"
        aria-hidden="${t=>t.ariaHidden}"
        aria-invalid="${t=>t.ariaInvalid}"
        aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
        aria-label="${t=>t.ariaLabel}"
        aria-labelledby="${t=>t.ariaLabelledby}"
        aria-live="${t=>t.ariaLive}"
        aria-owns="${t=>t.ariaOwns}"
        aria-pressed="${t=>t.ariaPressed}"
        aria-relevant="${t=>t.ariaRelevant}"
        aria-roledescription="${t=>t.ariaRoledescription}"
        ${G("control")}
    >
        ${Te(r,e)}
        <span class="content" part="content">
            <slot ${ge("defaultSlottedContent")}></slot>
        </span>
        ${Fe(r,e)}
    </button>
`;var qa="form-associated-proxy",Wa="ElementInternals",Xa=Wa in window&&"setFormValue"in window[Wa].prototype,Ya=new WeakMap;function ze(r){let e=class extends r{constructor(...t){super(...t),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return Xa}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){let t=this.proxy.labels,o=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),i=t?o.concat(Array.from(t)):o;return Object.freeze(i)}else return tt}valueChanged(t,o){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(t,o){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(t,o){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),y.queueUpdate(()=>this.classList.toggle("disabled",this.disabled))}nameChanged(t,o){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(t,o){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),y.queueUpdate(()=>this.classList.toggle("required",this.required)),this.validate()}get elementInternals(){if(!Xa)return null;let t=Ya.get(this);return t||(t=this.attachInternals(),Ya.set(this,t)),t}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){super.disconnectedCallback(),this.proxyEventsToBlock.forEach(t=>this.proxy.removeEventListener(t,this.stopPropagation)),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(t,o,i){this.elementInternals?this.elementInternals.setValidity(t,o,i):typeof o=="string"&&this.proxy.setCustomValidity(o)}formDisabledCallback(t){this.disabled=t}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var t;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach(o=>this.proxy.addEventListener(o,this.stopPropagation)),this.proxy.disabled=this.disabled,this.proxy.required=this.required,typeof this.name=="string"&&(this.proxy.name=this.name),typeof this.value=="string"&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",qa),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",qa)),(t=this.shadowRoot)===null||t===void 0||t.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var t;this.removeChild(this.proxy),(t=this.shadowRoot)===null||t===void 0||t.removeChild(this.proxySlot)}validate(t){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,t)}setFormValue(t,o){this.elementInternals&&this.elementInternals.setFormValue(t,o||t)}_keypressHandler(t){switch(t.key){case Kt:if(this.form instanceof HTMLFormElement){let o=this.form.querySelector("[type=submit]");o?.click()}break}}stopPropagation(t){t.stopPropagation()}};return g({mode:"boolean"})(e.prototype,"disabled"),g({mode:"fromView",attribute:"value"})(e.prototype,"initialValue"),g({attribute:"current-value"})(e.prototype,"currentValue"),g(e.prototype,"name"),g({mode:"boolean"})(e.prototype,"required"),x(e.prototype,"value"),e}function Qa(r){class e extends ze(r){}class t extends e{constructor(...i){super(i),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(i,n){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),i!==void 0&&this.$emit("change"),this.validate()}currentCheckedChanged(i,n){this.checked=this.currentChecked}updateForm(){let i=this.checked?this.value:null;this.setFormValue(i,i)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return g({attribute:"checked",mode:"boolean"})(t.prototype,"checkedAttribute"),g({attribute:"current-checked",converter:gn})(t.prototype,"currentChecked"),x(t.prototype,"defaultChecked"),x(t.prototype,"checked"),t}var In=class extends te{},Xo=class extends ze(In){constructor(){super(...arguments),this.proxy=document.createElement("input")}};var he=class extends Xo{constructor(){super(...arguments),this.handleClick=e=>{var t;this.disabled&&((t=this.defaultSlottedContent)===null||t===void 0?void 0:t.length)<=1&&e.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;let e=this.proxy.isConnected;e||this.attachProxy(),typeof this.form.requestSubmit=="function"?this.form.requestSubmit(this.proxy):this.proxy.click(),e||this.detachProxy()},this.handleFormReset=()=>{var e;(e=this.form)===null||e===void 0||e.reset()},this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(!((e=this.$fastController.definition.shadowOptions)===null||e===void 0)&&e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(e,t){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),t==="submit"&&this.addEventListener("click",this.handleSubmission),e==="submit"&&this.removeEventListener("click",this.handleSubmission),t==="reset"&&this.addEventListener("click",this.handleFormReset),e==="reset"&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){var e;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();let t=Array.from((e=this.control)===null||e===void 0?void 0:e.children);t&&t.forEach(o=>{o.addEventListener("click",this.handleClick)})}disconnectedCallback(){var e;super.disconnectedCallback();let t=Array.from((e=this.control)===null||e===void 0?void 0:e.children);t&&t.forEach(o=>{o.removeEventListener("click",this.handleClick)})}};u([g({mode:"boolean"})],he.prototype,"autofocus",void 0);u([g({attribute:"form"})],he.prototype,"formId",void 0);u([g],he.prototype,"formaction",void 0);u([g],he.prototype,"formenctype",void 0);u([g],he.prototype,"formmethod",void 0);u([g({mode:"boolean"})],he.prototype,"formnovalidate",void 0);u([g],he.prototype,"formtarget",void 0);u([g],he.prototype,"type",void 0);u([x],he.prototype,"defaultSlottedContent",void 0);var nr=class{};u([g({attribute:"aria-expanded"})],nr.prototype,"ariaExpanded",void 0);u([g({attribute:"aria-pressed"})],nr.prototype,"ariaPressed",void 0);W(nr,I);W(he,be,nr);var Za=(r,e)=>q`
    <template
        role="checkbox"
        aria-checked="${t=>t.checked}"
        aria-required="${t=>t.required}"
        aria-disabled="${t=>t.disabled}"
        aria-readonly="${t=>t.readOnly}"
        tabindex="${t=>t.disabled?null:0}"
        @keypress="${(t,o)=>t.keypressHandler(o.event)}"
        @click="${(t,o)=>t.clickHandler(o.event)}"
        class="${t=>t.readOnly?"readonly":""} ${t=>t.checked?"checked":""} ${t=>t.indeterminate?"indeterminate":""}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${e.checkedIndicator||""}
            </slot>
            <slot name="indeterminate-indicator">
                ${e.indeterminateIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${ge("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;var Vn=class extends te{},Yo=class extends Qa(Vn){constructor(){super(...arguments),this.proxy=document.createElement("input")}};var Ft=class extends Yo{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=e=>{if(!this.readOnly)switch(e.key){case st:this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked;break}},this.clickHandler=e=>{!this.disabled&&!this.readOnly&&(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}};u([g({attribute:"readonly",mode:"boolean"})],Ft.prototype,"readOnly",void 0);u([x],Ft.prototype,"defaultSlottedNodes",void 0);u([x],Ft.prototype,"indeterminate",void 0);function _n(r){return Na(r)&&(r.getAttribute("role")==="option"||r instanceof HTMLOptionElement)}var X=class extends te{constructor(e,t,o,i){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,e&&(this.textContent=e),t&&(this.initialValue=t),o&&(this.defaultSelected=o),i&&(this.selected=i),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(e,t){if(typeof t=="boolean"){this.ariaChecked=t?"true":"false";return}this.ariaChecked=null}contentChanged(e,t){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(e,t){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var e;return(e=this.value)!==null&&e!==void 0?e:this.text}get text(){var e,t;return(t=(e=this.textContent)===null||e===void 0?void 0:e.replace(/\s+/g," ").trim())!==null&&t!==void 0?t:""}set value(e){let t=`${e??""}`;this._value=t,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=t),$.notify(this,"value")}get value(){var e;return $.track(this,"value"),(e=this._value)!==null&&e!==void 0?e:this.text}get form(){return this.proxy?this.proxy.form:null}};u([x],X.prototype,"checked",void 0);u([x],X.prototype,"content",void 0);u([x],X.prototype,"defaultSelected",void 0);u([g({mode:"boolean"})],X.prototype,"disabled",void 0);u([g({attribute:"selected",mode:"boolean"})],X.prototype,"selectedAttribute",void 0);u([x],X.prototype,"selected",void 0);u([g({attribute:"value",mode:"fromView"})],X.prototype,"initialValue",void 0);var at=class{};u([x],at.prototype,"ariaChecked",void 0);u([x],at.prototype,"ariaPosInSet",void 0);u([x],at.prototype,"ariaSelected",void 0);u([x],at.prototype,"ariaSetSize",void 0);W(at,I);W(X,be,at);var z=class r extends te{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var e;return(e=this.selectedOptions[0])!==null&&e!==void 0?e:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every(e=>e.disabled)}get length(){var e,t;return(t=(e=this.options)===null||e===void 0?void 0:e.length)!==null&&t!==void 0?t:0}get options(){return $.track(this,"options"),this._options}set options(e){this._options=e,$.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(e){this.typeaheadExpired=e}clickHandler(e){let t=e.target.closest("option,[role=option]");if(t&&!t.disabled)return this.selectedIndex=this.options.indexOf(t),!0}focusAndScrollOptionIntoView(e=this.firstSelectedOption){this.contains(document.activeElement)&&e!==null&&(e.focus(),requestAnimationFrame(()=>{e.scrollIntoView({block:"nearest"})}))}focusinHandler(e){!this.shouldSkipFocus&&e.target===e.currentTarget&&(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){let e=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),t=new RegExp(`^${e}`,"gi");return this.options.filter(o=>o.text.trim().match(t))}getSelectableIndex(e=this.selectedIndex,t){let o=e>t?-1:e<t?1:0,i=e+o,n=null;switch(o){case-1:{n=this.options.reduceRight((s,a,l)=>!s&&!a.disabled&&l<i?a:s,n);break}case 1:{n=this.options.reduce((s,a,l)=>!s&&!a.disabled&&l>i?a:s,n);break}}return this.options.indexOf(n)}handleChange(e,t){switch(t){case"selected":{r.slottedOptionFilter(e)&&(this.selectedIndex=this.options.indexOf(e)),this.setSelectedOptions();break}}}handleTypeAhead(e){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout(()=>this.typeaheadExpired=!0,r.TYPE_AHEAD_TIMEOUT_MS),!(e.length>1)&&(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${e}`)}keydownHandler(e){if(this.disabled)return!0;this.shouldSkipFocus=!1;let t=e.key;switch(t){case tr:{e.shiftKey||(e.preventDefault(),this.selectFirstOption());break}case Zt:{e.shiftKey||(e.preventDefault(),this.selectNextOption());break}case Jt:{e.shiftKey||(e.preventDefault(),this.selectPreviousOption());break}case rr:{e.preventDefault(),this.selectLastOption();break}case or:return this.focusAndScrollOptionIntoView(),!0;case Kt:case er:return!0;case st:if(this.typeaheadExpired)return!0;default:return t.length===1&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(e,t){this.ariaMultiSelectable=t?"true":null}selectedIndexChanged(e,t){var o;if(!this.hasSelectableOptions){this.selectedIndex=-1;return}if(!((o=this.options[this.selectedIndex])===null||o===void 0)&&o.disabled&&typeof e=="number"){let i=this.getSelectableIndex(e,t),n=i>-1?i:e;this.selectedIndex=n,t===n&&this.selectedIndexChanged(t,n);return}this.setSelectedOptions()}selectedOptionsChanged(e,t){var o;let i=t.filter(r.slottedOptionFilter);(o=this.options)===null||o===void 0||o.forEach(n=>{let s=$.getNotifier(n);s.unsubscribe(this,"selected"),n.selected=i.includes(n),s.subscribe(this,"selected")})}selectFirstOption(){var e,t;this.disabled||(this.selectedIndex=(t=(e=this.options)===null||e===void 0?void 0:e.findIndex(o=>!o.disabled))!==null&&t!==void 0?t:-1)}selectLastOption(){this.disabled||(this.selectedIndex=Ba(this.options,e=>!e.disabled))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var e,t;this.selectedIndex=(t=(e=this.options)===null||e===void 0?void 0:e.findIndex(o=>o.defaultSelected))!==null&&t!==void 0?t:-1}setSelectedOptions(){var e,t,o;!((e=this.options)===null||e===void 0)&&e.length&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=(o=(t=this.firstSelectedOption)===null||t===void 0?void 0:t.id)!==null&&o!==void 0?o:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(e,t){this.options=t.reduce((i,n)=>(_n(n)&&i.push(n),i),[]);let o=`${this.options.length}`;this.options.forEach((i,n)=>{i.id||(i.id=ir("option-")),i.ariaPosInSet=`${n+1}`,i.ariaSetSize=o}),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(e,t){if(this.$fastController.isConnected){let o=this.getTypeaheadMatches();if(o.length){let i=this.options.indexOf(o[0]);i>-1&&(this.selectedIndex=i)}this.typeaheadExpired=!1}}};z.slottedOptionFilter=r=>_n(r)&&!r.hidden;z.TYPE_AHEAD_TIMEOUT_MS=1e3;u([g({mode:"boolean"})],z.prototype,"disabled",void 0);u([x],z.prototype,"selectedIndex",void 0);u([x],z.prototype,"selectedOptions",void 0);u([x],z.prototype,"slottedOptions",void 0);u([x],z.prototype,"typeaheadBuffer",void 0);var ve=class{};u([x],ve.prototype,"ariaActiveDescendant",void 0);u([x],ve.prototype,"ariaDisabled",void 0);u([x],ve.prototype,"ariaExpanded",void 0);u([x],ve.prototype,"ariaMultiSelectable",void 0);W(ve,I);W(z,ve);var Ge={above:"above",below:"below"};var Dn=class extends z{},Qo=class extends ze(Dn){constructor(){super(...arguments),this.proxy=document.createElement("input")}};var Tt={inline:"inline",list:"list",both:"both",none:"none"};var xe=class extends Qo{constructor(){super(...arguments),this._value="",this.filteredOptions=[],this.filter="",this.forcedPosition=!1,this.listboxId=ir("listbox-"),this.maxHeight=0,this.open=!1}formResetCallback(){super.formResetCallback(),this.setDefaultSelectedOption(),this.updateValue()}validate(){super.validate(this.control)}get isAutocompleteInline(){return this.autocomplete===Tt.inline||this.isAutocompleteBoth}get isAutocompleteList(){return this.autocomplete===Tt.list||this.isAutocompleteBoth}get isAutocompleteBoth(){return this.autocomplete===Tt.both}openChanged(){if(this.open){this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),y.queueUpdate(()=>this.focus());return}this.ariaControls="",this.ariaExpanded="false"}get options(){return $.track(this,"options"),this.filteredOptions.length?this.filteredOptions:this._options}set options(e){this._options=e,$.notify(this,"options")}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}positionChanged(e,t){this.positionAttribute=t,this.setPositioning()}get value(){return $.track(this,"value"),this._value}set value(e){var t,o,i;let n=`${this._value}`;if(this.$fastController.isConnected&&this.options){let s=this.options.findIndex(c=>c.text.toLowerCase()===e.toLowerCase()),a=(t=this.options[this.selectedIndex])===null||t===void 0?void 0:t.text,l=(o=this.options[s])===null||o===void 0?void 0:o.text;this.selectedIndex=a!==l?s:this.selectedIndex,e=((i=this.firstSelectedOption)===null||i===void 0?void 0:i.text)||e}n!==e&&(this._value=e,super.valueChanged(n,e),$.notify(this,"value"))}clickHandler(e){if(!this.disabled){if(this.open){let t=e.target.closest("option,[role=option]");if(!t||t.disabled)return;this.selectedOptions=[t],this.control.value=t.text,this.clearSelectionRange(),this.updateValue(!0)}return this.open=!this.open,this.open&&this.control.focus(),!0}}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.value&&(this.initialValue=this.value)}disabledChanged(e,t){super.disabledChanged&&super.disabledChanged(e,t),this.ariaDisabled=this.disabled?"true":"false"}filterOptions(){(!this.autocomplete||this.autocomplete===Tt.none)&&(this.filter="");let e=this.filter.toLowerCase();this.filteredOptions=this._options.filter(t=>t.text.toLowerCase().startsWith(this.filter.toLowerCase())),this.isAutocompleteList&&(!this.filteredOptions.length&&!e&&(this.filteredOptions=this._options),this._options.forEach(t=>{t.hidden=!this.filteredOptions.includes(t)}))}focusAndScrollOptionIntoView(){this.contains(document.activeElement)&&(this.control.focus(),this.firstSelectedOption&&requestAnimationFrame(()=>{var e;(e=this.firstSelectedOption)===null||e===void 0||e.scrollIntoView({block:"nearest"})}))}focusoutHandler(e){if(this.syncValue(),!this.open)return!0;let t=e.relatedTarget;if(this.isSameNode(t)){this.focus();return}(!this.options||!this.options.includes(t))&&(this.open=!1)}inputHandler(e){if(this.filter=this.control.value,this.filterOptions(),this.isAutocompleteInline||(this.selectedIndex=this.options.map(t=>t.text).indexOf(this.control.value)),e.inputType.includes("deleteContent")||!this.filter.length)return!0;this.isAutocompleteList&&!this.open&&(this.open=!0),this.isAutocompleteInline&&(this.filteredOptions.length?(this.selectedOptions=[this.filteredOptions[0]],this.selectedIndex=this.options.indexOf(this.firstSelectedOption),this.setInlineSelection()):this.selectedIndex=-1)}keydownHandler(e){let t=e.key;if(e.ctrlKey||e.shiftKey)return!0;switch(t){case"Enter":{this.syncValue(),this.isAutocompleteInline&&(this.filter=this.value),this.open=!1,this.clearSelectionRange();break}case"Escape":{if(this.isAutocompleteInline||(this.selectedIndex=-1),this.open){this.open=!1;break}this.value="",this.control.value="",this.filter="",this.filterOptions();break}case"Tab":{if(this.setInputToSelection(),!this.open)return!0;e.preventDefault(),this.open=!1;break}case"ArrowUp":case"ArrowDown":{if(this.filterOptions(),!this.open){this.open=!0;break}this.filteredOptions.length>0&&super.keydownHandler(e),this.isAutocompleteInline&&this.setInlineSelection();break}default:return!0}}keyupHandler(e){switch(e.key){case"ArrowLeft":case"ArrowRight":case"Backspace":case"Delete":case"Home":case"End":{this.filter=this.control.value,this.selectedIndex=-1,this.filterOptions();break}}}selectedIndexChanged(e,t){if(this.$fastController.isConnected){if(t=Ga(-1,this.options.length-1,t),t!==this.selectedIndex){this.selectedIndex=t;return}super.selectedIndexChanged(e,t)}}selectPreviousOption(){!this.disabled&&this.selectedIndex>=0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){if(this.$fastController.isConnected&&this.options){let e=this.options.findIndex(t=>t.getAttribute("selected")!==null||t.selected);this.selectedIndex=e,!this.dirtyValue&&this.firstSelectedOption&&(this.value=this.firstSelectedOption.text),this.setSelectedOptions()}}setInputToSelection(){this.firstSelectedOption&&(this.control.value=this.firstSelectedOption.text,this.control.focus())}setInlineSelection(){this.firstSelectedOption&&(this.setInputToSelection(),this.control.setSelectionRange(this.filter.length,this.control.value.length,"backward"))}syncValue(){var e;let t=this.selectedIndex>-1?(e=this.firstSelectedOption)===null||e===void 0?void 0:e.text:this.control.value;this.updateValue(this.value!==t)}setPositioning(){let e=this.getBoundingClientRect(),o=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>o?Ge.above:Ge.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===Ge.above?~~e.top:~~o}selectedOptionsChanged(e,t){this.$fastController.isConnected&&this._options.forEach(o=>{o.selected=t.includes(o)})}slottedOptionsChanged(e,t){super.slottedOptionsChanged(e,t),this.updateValue()}updateValue(e){var t;this.$fastController.isConnected&&(this.value=((t=this.firstSelectedOption)===null||t===void 0?void 0:t.text)||this.control.value,this.control.value=this.value),e&&this.$emit("change")}clearSelectionRange(){let e=this.control.value.length;this.control.setSelectionRange(e,e)}};u([g({attribute:"autocomplete",mode:"fromView"})],xe.prototype,"autocomplete",void 0);u([x],xe.prototype,"maxHeight",void 0);u([g({attribute:"open",mode:"boolean"})],xe.prototype,"open",void 0);u([g],xe.prototype,"placeholder",void 0);u([g({attribute:"position"})],xe.prototype,"positionAttribute",void 0);u([x],xe.prototype,"position",void 0);var sr=class{};u([x],sr.prototype,"ariaAutoComplete",void 0);u([x],sr.prototype,"ariaControls",void 0);W(sr,ve);W(xe,be,sr);var Ja=(r,e)=>q`
    <template
        aria-disabled="${t=>t.ariaDisabled}"
        autocomplete="${t=>t.autocomplete}"
        class="${t=>t.open?"open":""} ${t=>t.disabled?"disabled":""} ${t=>t.position}"
        ?open="${t=>t.open}"
        tabindex="${t=>t.disabled?null:"0"}"
        @click="${(t,o)=>t.clickHandler(o.event)}"
        @focusout="${(t,o)=>t.focusoutHandler(o.event)}"
        @keydown="${(t,o)=>t.keydownHandler(o.event)}"
    >
        <div class="control" part="control">
            ${Te(r,e)}
            <slot name="control">
                <input
                    aria-activedescendant="${t=>t.open?t.ariaActiveDescendant:null}"
                    aria-autocomplete="${t=>t.ariaAutoComplete}"
                    aria-controls="${t=>t.ariaControls}"
                    aria-disabled="${t=>t.ariaDisabled}"
                    aria-expanded="${t=>t.ariaExpanded}"
                    aria-haspopup="listbox"
                    class="selected-value"
                    part="selected-value"
                    placeholder="${t=>t.placeholder}"
                    role="combobox"
                    type="text"
                    ?disabled="${t=>t.disabled}"
                    :value="${t=>t.value}"
                    @input="${(t,o)=>t.inputHandler(o.event)}"
                    @keyup="${(t,o)=>t.keyupHandler(o.event)}"
                    ${G("control")}
                />
                <div class="indicator" part="indicator" aria-hidden="true">
                    <slot name="indicator">
                        ${e.indicator||""}
                    </slot>
                </div>
            </slot>
            ${Fe(r,e)}
        </div>
        <div
            class="listbox"
            id="${t=>t.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${t=>t.disabled}"
            ?hidden="${t=>!t.open}"
            ${G("listbox")}
        >
            <slot
                ${ge({filter:z.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`;function jr(r){let e=r.parentElement;if(e)return e;{let t=r.getRootNode();if(t.host instanceof HTMLElement)return t.host}return null}function Ka(r,e){let t=e;for(;t!==null;){if(t===r)return!0;t=jr(t)}return!1}var Ie=document.createElement("div");function $d(r){return r instanceof it}var zr=class{setProperty(e,t){y.queueUpdate(()=>this.target.setProperty(e,t))}removeProperty(e){y.queueUpdate(()=>this.target.removeProperty(e))}},Ln=class extends zr{constructor(e){super();let t=new CSSStyleSheet;t[Po]=!0,this.target=t.cssRules[t.insertRule(":host{}")].style,e.$fastController.addStyles(M.create([t]))}},Mn=class extends zr{constructor(){super();let e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}},Bn=class extends zr{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);let{sheet:e}=this.style;if(e){let t=e.insertRule(":root{}",e.cssRules.length);this.target=e.cssRules[t].style}}},Zo=class{constructor(e){this.store=new Map,this.target=null;let t=e.$fastController;this.style=document.createElement("style"),t.addStyles(this.style),$.getNotifier(t).subscribe(this,"isConnected"),this.handleChange(t,"isConnected")}targetChanged(){if(this.target!==null)for(let[e,t]of this.store.entries())this.target.setProperty(e,t)}setProperty(e,t){this.store.set(e,t),y.queueUpdate(()=>{this.target!==null&&this.target.setProperty(e,t)})}removeProperty(e){this.store.delete(e),y.queueUpdate(()=>{this.target!==null&&this.target.removeProperty(e)})}handleChange(e,t){let{sheet:o}=this.style;if(o){let i=o.insertRule(":host{}",o.cssRules.length);this.target=o.cssRules[i].style}else this.target=null}};u([x],Zo.prototype,"target",void 0);var Hn=class{constructor(e){this.target=e.style}setProperty(e,t){y.queueUpdate(()=>this.target.setProperty(e,t))}removeProperty(e){y.queueUpdate(()=>this.target.removeProperty(e))}},lt=class r{setProperty(e,t){r.properties[e]=t;for(let o of r.roots.values())It.getOrCreate(r.normalizeRoot(o)).setProperty(e,t)}removeProperty(e){delete r.properties[e];for(let t of r.roots.values())It.getOrCreate(r.normalizeRoot(t)).removeProperty(e)}static registerRoot(e){let{roots:t}=r;if(!t.has(e)){t.add(e);let o=It.getOrCreate(this.normalizeRoot(e));for(let i in r.properties)o.setProperty(i,r.properties[i])}}static unregisterRoot(e){let{roots:t}=r;if(t.has(e)){t.delete(e);let o=It.getOrCreate(r.normalizeRoot(e));for(let i in r.properties)o.removeProperty(i)}}static normalizeRoot(e){return e===Ie?document:e}};lt.roots=new Set;lt.properties={};var Pn=new WeakMap,Cd=y.supportsAdoptedStyleSheets?Ln:Zo,It=Object.freeze({getOrCreate(r){if(Pn.has(r))return Pn.get(r);let e;return r===Ie?e=new lt:r instanceof Document?e=y.supportsAdoptedStyleSheets?new Mn:new Bn:$d(r)?e=new Cd(r):e=new Hn(r),Pn.set(r,e),e}});var Ce=class r extends nt{constructor(e){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=e.name,e.cssCustomPropertyName!==null&&(this.cssCustomProperty=`--${e.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=r.uniqueId(),r.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(e){return new r({name:typeof e=="string"?e:e.name,cssCustomPropertyName:typeof e=="string"?e:e.cssCustomPropertyName===void 0?e.name:e.cssCustomPropertyName})}static isCSSDesignToken(e){return typeof e.cssCustomProperty=="string"}static isDerivedDesignTokenValue(e){return typeof e=="function"}static getTokenById(e){return r.tokensById.get(e)}getOrCreateSubscriberSet(e=this){return this.subscribers.get(e)||this.subscribers.set(e,new Set)&&this.subscribers.get(e)}createCSS(){return this.cssVar||""}getValueFor(e){let t=le.getOrCreate(e).get(this);if(t!==void 0)return t;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${e} or an ancestor of ${e}.`)}setValueFor(e,t){return this._appliedTo.add(e),t instanceof r&&(t=this.alias(t)),le.getOrCreate(e).set(this,t),this}deleteValueFor(e){return this._appliedTo.delete(e),le.existsFor(e)&&le.getOrCreate(e).delete(this),this}withDefault(e){return this.setValueFor(Ie,e),this}subscribe(e,t){let o=this.getOrCreateSubscriberSet(t);t&&!le.existsFor(t)&&le.getOrCreate(t),o.has(e)||o.add(e)}unsubscribe(e,t){let o=this.subscribers.get(t||this);o&&o.has(e)&&o.delete(e)}notify(e){let t=Object.freeze({token:this,target:e});this.subscribers.has(this)&&this.subscribers.get(this).forEach(o=>o.handleChange(t)),this.subscribers.has(e)&&this.subscribers.get(e).forEach(o=>o.handleChange(t))}alias(e){return t=>e.getValueFor(t)}};Ce.uniqueId=(()=>{let r=0;return()=>(r++,r.toString(16))})();Ce.tokensById=new Map;var Nn=class{startReflection(e,t){e.subscribe(this,t),this.handleChange({token:e,target:t})}stopReflection(e,t){e.unsubscribe(this,t),this.remove(e,t)}handleChange(e){let{token:t,target:o}=e;this.add(t,o)}add(e,t){It.getOrCreate(t).setProperty(e.cssCustomProperty,this.resolveCSSValue(le.getOrCreate(t).get(e)))}remove(e,t){It.getOrCreate(t).removeProperty(e.cssCustomProperty)}resolveCSSValue(e){return e&&typeof e.createCSS=="function"?e.createCSS():e}},jn=class{constructor(e,t,o){this.source=e,this.token=t,this.node=o,this.dependencies=new Set,this.observer=$.binding(e,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,ot))}},zn=class{constructor(){this.values=new Map}set(e,t){this.values.get(e)!==t&&(this.values.set(e,t),$.getNotifier(this).notify(e.id))}get(e){return $.track(this,e.id),this.values.get(e)}delete(e){this.values.delete(e)}all(){return this.values.entries()}},Gr=new WeakMap,Ur=new WeakMap,le=class r{constructor(e){this.target=e,this.store=new zn,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(t,o)=>{let i=Ce.getTokenById(o);i&&(i.notify(this.target),this.updateCSSTokenReflection(t,i))}},Gr.set(e,this),$.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),e instanceof it?e.$fastController.addBehaviors([this]):e.isConnected&&this.bind()}static getOrCreate(e){return Gr.get(e)||new r(e)}static existsFor(e){return Gr.has(e)}static findParent(e){if(Ie!==e.target){let t=jr(e.target);for(;t!==null;){if(Gr.has(t))return Gr.get(t);t=jr(t)}return r.getOrCreate(Ie)}return null}static findClosestAssignedNode(e,t){let o=t;do{if(o.has(e))return o;o=o.parent?o.parent:o.target!==Ie?r.getOrCreate(Ie):null}while(o!==null);return null}get parent(){return Ur.get(this)||null}updateCSSTokenReflection(e,t){if(Ce.isCSSDesignToken(t)){let o=this.parent,i=this.isReflecting(t);if(o){let n=o.get(t),s=e.get(t);n!==s&&!i?this.reflectToCSS(t):n===s&&i&&this.stopReflectToCSS(t)}else i||this.reflectToCSS(t)}}has(e){return this.assignedValues.has(e)}get(e){let t=this.store.get(e);if(t!==void 0)return t;let o=this.getRaw(e);if(o!==void 0)return this.hydrate(e,o),this.get(e)}getRaw(e){var t;return this.assignedValues.has(e)?this.assignedValues.get(e):(t=r.findClosestAssignedNode(e,this))===null||t===void 0?void 0:t.getRaw(e)}set(e,t){Ce.isDerivedDesignTokenValue(this.assignedValues.get(e))&&this.tearDownBindingObserver(e),this.assignedValues.set(e,t),Ce.isDerivedDesignTokenValue(t)?this.setupBindingObserver(e,t):this.store.set(e,t)}delete(e){this.assignedValues.delete(e),this.tearDownBindingObserver(e);let t=this.getRaw(e);t?this.hydrate(e,t):this.store.delete(e)}bind(){let e=r.findParent(this);e&&e.appendChild(this);for(let t of this.assignedValues.keys())t.notify(this.target)}unbind(){this.parent&&Ur.get(this).removeChild(this)}appendChild(e){e.parent&&Ur.get(e).removeChild(e);let t=this.children.filter(o=>e.contains(o));Ur.set(e,this),this.children.push(e),t.forEach(o=>e.appendChild(o)),$.getNotifier(this.store).subscribe(e);for(let[o,i]of this.store.all())e.hydrate(o,this.bindingObservers.has(o)?this.getRaw(o):i)}removeChild(e){let t=this.children.indexOf(e);return t!==-1&&this.children.splice(t,1),$.getNotifier(this.store).unsubscribe(e),e.parent===this?Ur.delete(e):!1}contains(e){return Ka(this.target,e.target)}reflectToCSS(e){this.isReflecting(e)||(this.reflecting.add(e),r.cssCustomPropertyReflector.startReflection(e,this.target))}stopReflectToCSS(e){this.isReflecting(e)&&(this.reflecting.delete(e),r.cssCustomPropertyReflector.stopReflection(e,this.target))}isReflecting(e){return this.reflecting.has(e)}handleChange(e,t){let o=Ce.getTokenById(t);o&&(this.hydrate(o,this.getRaw(o)),this.updateCSSTokenReflection(this.store,o))}hydrate(e,t){if(!this.has(e)){let o=this.bindingObservers.get(e);Ce.isDerivedDesignTokenValue(t)?o?o.source!==t&&(this.tearDownBindingObserver(e),this.setupBindingObserver(e,t)):this.setupBindingObserver(e,t):(o&&this.tearDownBindingObserver(e),this.store.set(e,t))}}setupBindingObserver(e,t){let o=new jn(t,e,this);return this.bindingObservers.set(e,o),o}tearDownBindingObserver(e){return this.bindingObservers.has(e)?(this.bindingObservers.get(e).disconnect(),this.bindingObservers.delete(e),!0):!1}};le.cssCustomPropertyReflector=new Nn;u([x],le.prototype,"children",void 0);function Sd(r){return Ce.from(r)}var Ue=Object.freeze({create:Sd,notifyConnection(r){return!r.isConnected||!le.existsFor(r)?!1:(le.getOrCreate(r).bind(),!0)},notifyDisconnection(r){return r.isConnected||!le.existsFor(r)?!1:(le.getOrCreate(r).unbind(),!0)},registerRoot(r=Ie){lt.registerRoot(r)},unregisterRoot(r=Ie){lt.unregisterRoot(r)}});var Gn=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),Un=new Map,Jo=new Map,ar=null,qr=V.createInterface(r=>r.cachedCallback(e=>(ar===null&&(ar=new Ko(null,e)),ar))),Wr=Object.freeze({tagFor(r){return Jo.get(r)},responsibleFor(r){let e=r.$$designSystem$$;return e||V.findResponsibleContainer(r).get(qr)},getOrCreate(r){if(!r)return ar===null&&(ar=V.getOrCreateDOMContainer().get(qr)),ar;let e=r.$$designSystem$$;if(e)return e;let t=V.getOrCreateDOMContainer(r);if(t.has(qr,!1))return t.get(qr);{let o=new Ko(r,t);return t.register(Rt.instance(qr,o)),o}}});function kd(r,e,t){return typeof r=="string"?{name:r,type:e,callback:t}:r}var Ko=class{constructor(e,t){this.owner=e,this.container=t,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>Gn.definitionCallbackOnly,e!==null&&(e.$$designSystem$$=this)}withPrefix(e){return this.prefix=e,this}withShadowRootMode(e){return this.shadowRootMode=e,this}withElementDisambiguation(e){return this.disambiguate=e,this}withDesignTokenRoot(e){return this.designTokenRoot=e,this}register(...e){let t=this.container,o=[],i=this.disambiguate,n=this.shadowRootMode,s={elementPrefix:this.prefix,tryDefineElement(a,l,c){let d=kd(a,l,c),{name:f,callback:v,baseClass:A}=d,{type:F}=d,O=f,se=Un.get(O),vt=!0;for(;se;){let Be=i(O,F,se);switch(Be){case Gn.ignoreDuplicate:return;case Gn.definitionCallbackOnly:vt=!1,se=void 0;break;default:O=Be,se=Un.get(O);break}}vt&&((Jo.has(F)||F===te)&&(F=class extends F{}),Un.set(O,F),Jo.set(F,O),A&&Jo.set(A,O)),o.push(new qn(t,O,F,n,v,vt))}};this.designTokensInitialized||(this.designTokensInitialized=!0,this.designTokenRoot!==null&&Ue.registerRoot(this.designTokenRoot)),t.registerWithContext(s,...e);for(let a of o)a.callback(a),a.willDefine&&a.definition!==null&&a.definition.define();return this}},qn=class{constructor(e,t,o,i,n,s){this.container=e,this.name=t,this.type=o,this.shadowRootMode=i,this.callback=n,this.willDefine=s,this.definition=null}definePresentation(e){qo.define(this.name,e,this.container)}defineElement(e){this.definition=new Oe(this.type,Object.assign(Object.assign({},e),{name:this.name}))}tagFor(e){return Wr.tagFor(e)}};var ei=(r,e)=>q`
    <template
        aria-checked="${t=>t.ariaChecked}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-posinset="${t=>t.ariaPosInSet}"
        aria-selected="${t=>t.ariaSelected}"
        aria-setsize="${t=>t.ariaSetSize}"
        class="${t=>[t.checked&&"checked",t.selected&&"selected",t.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${Te(r,e)}
        <span class="content" part="content">
            <slot ${ge("content")}></slot>
        </span>
        ${Fe(r,e)}
    </template>
`;var qe=class extends z{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var e;return(e=this.options)===null||e===void 0?void 0:e.filter(t=>t.checked)}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(e,t){var o,i;this.ariaActiveDescendant=(i=(o=this.options[t])===null||o===void 0?void 0:o.id)!==null&&i!==void 0?i:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;let e=this.activeOption;e&&(e.checked=!0)}checkFirstOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach((t,o)=>{t.checked=Nr(o,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((t,o)=>{t.checked=Nr(o,this.rangeStartIndex,this.options.length)})):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((t,o)=>{t.checked=Nr(o,this.rangeStartIndex,this.activeIndex+1)})):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.checkedOptions.length===1&&(this.rangeStartIndex+=1),this.options.forEach((t,o)=>{t.checked=Nr(o,this.activeIndex,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(e){var t;if(!this.multiple)return super.clickHandler(e);let o=(t=e.target)===null||t===void 0?void 0:t.closest("[role=option]");if(!(!o||o.disabled))return this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(o),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(e){if(!this.multiple)return super.focusinHandler(e);!this.shouldSkipFocus&&e.target===e.currentTarget&&(this.uncheckAllOptions(),this.activeIndex===-1&&(this.activeIndex=this.firstSelectedOptionIndex!==-1?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(e){this.multiple&&this.uncheckAllOptions()}keydownHandler(e){if(!this.multiple)return super.keydownHandler(e);if(this.disabled)return!0;let{key:t,shiftKey:o}=e;switch(this.shouldSkipFocus=!1,t){case tr:{this.checkFirstOption(o);return}case Zt:{this.checkNextOption(o);return}case Jt:{this.checkPreviousOption(o);return}case rr:{this.checkLastOption(o);return}case or:return this.focusAndScrollOptionIntoView(),!0;case er:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case st:if(e.preventDefault(),this.typeAheadExpired){this.toggleSelectedForAllCheckedOptions();return}default:return t.length===1&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){if(e.offsetX>=0&&e.offsetX<=this.scrollWidth)return super.mousedownHandler(e)}multipleChanged(e,t){var o;this.ariaMultiSelectable=t?"true":null,(o=this.options)===null||o===void 0||o.forEach(i=>{i.checked=t?!1:void 0}),this.setSelectedOptions()}setSelectedOptions(){if(!this.multiple){super.setSelectedOptions();return}this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter(e=>e.selected),this.focusAndScrollOptionIntoView())}sizeChanged(e,t){var o;let i=Math.max(0,parseInt((o=t?.toFixed())!==null&&o!==void 0?o:"",10));i!==t&&y.queueUpdate(()=>{this.size=i})}toggleSelectedForAllCheckedOptions(){let e=this.checkedOptions.filter(o=>!o.disabled),t=!e.every(o=>o.selected);e.forEach(o=>o.selected=t),this.selectedIndex=this.options.indexOf(e[e.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(e,t){if(!this.multiple){super.typeaheadBufferChanged(e,t);return}if(this.$fastController.isConnected){let o=this.getTypeaheadMatches(),i=this.options.indexOf(o[0]);i>-1&&(this.activeIndex=i,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}uncheckAllOptions(e=!1){this.options.forEach(t=>t.checked=this.multiple?!1:void 0),e||(this.rangeStartIndex=-1)}};u([x],qe.prototype,"activeIndex",void 0);u([g({mode:"boolean"})],qe.prototype,"multiple",void 0);u([g({converter:Qt})],qe.prototype,"size",void 0);var Wn=class extends te{},ti=class extends ze(Wn){constructor(){super(...arguments),this.proxy=document.createElement("input")}};var Xn={email:"email",password:"password",tel:"tel",text:"text",url:"url"};var re=class extends ti{constructor(){super(...arguments),this.type=Xn.text}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&y.queueUpdate(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}};u([g({attribute:"readonly",mode:"boolean"})],re.prototype,"readOnly",void 0);u([g({mode:"boolean"})],re.prototype,"autofocus",void 0);u([g],re.prototype,"placeholder",void 0);u([g],re.prototype,"type",void 0);u([g],re.prototype,"list",void 0);u([g({converter:Qt})],re.prototype,"maxlength",void 0);u([g({converter:Qt})],re.prototype,"minlength",void 0);u([g],re.prototype,"pattern",void 0);u([g({converter:Qt})],re.prototype,"size",void 0);u([g({mode:"boolean"})],re.prototype,"spellcheck",void 0);u([x],re.prototype,"defaultSlottedNodes",void 0);var ri=class{};W(ri,I);W(re,be,ri);function el(r,e,t){return r.nodeType!==Node.TEXT_NODE?!0:typeof r.nodeValue=="string"&&!!r.nodeValue.trim().length}var Yn=class extends qe{},oi=class extends ze(Yn){constructor(){super(...arguments),this.proxy=document.createElement("select")}};var fe=class extends oi{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=ir("listbox-"),this.maxHeight=0}openChanged(e,t){if(this.collapsible){if(this.open){this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,y.queueUpdate(()=>this.focus());return}this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||typeof this.size=="number")}get value(){return $.track(this,"value"),this._value}set value(e){var t,o,i,n,s,a,l;let c=`${this._value}`;if(!((t=this._options)===null||t===void 0)&&t.length){let d=this._options.findIndex(A=>A.value===e),f=(i=(o=this._options[this.selectedIndex])===null||o===void 0?void 0:o.value)!==null&&i!==void 0?i:null,v=(s=(n=this._options[d])===null||n===void 0?void 0:n.value)!==null&&s!==void 0?s:null;(d===-1||f!==v)&&(e="",this.selectedIndex=d),e=(l=(a=this.firstSelectedOption)===null||a===void 0?void 0:a.value)!==null&&l!==void 0?l:e}c!==e&&(this._value=e,super.valueChanged(c,e),$.notify(this,"value"),this.updateDisplayValue())}updateValue(e){var t,o;this.$fastController.isConnected&&(this.value=(o=(t=this.firstSelectedOption)===null||t===void 0?void 0:t.value)!==null&&o!==void 0?o:""),e&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(e,t){super.selectedIndexChanged(e,t),this.updateValue()}positionChanged(e,t){this.positionAttribute=t,this.setPositioning()}setPositioning(){let e=this.getBoundingClientRect(),o=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>o?Ge.above:Ge.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===Ge.above?~~e.top:~~o}get displayValue(){var e,t;return $.track(this,"displayValue"),(t=(e=this.firstSelectedOption)===null||e===void 0?void 0:e.text)!==null&&t!==void 0?t:""}disabledChanged(e,t){super.disabledChanged&&super.disabledChanged(e,t),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),this.selectedIndex===-1&&(this.selectedIndex=0)}clickHandler(e){if(!this.disabled){if(this.open){let t=e.target.closest("option,[role=option]");if(t&&t.disabled)return}return super.clickHandler(e),this.open=this.collapsible&&!this.open,!this.open&&this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0),!0}}focusoutHandler(e){var t;if(super.focusoutHandler(e),!this.open)return!0;let o=e.relatedTarget;if(this.isSameNode(o)){this.focus();return}!((t=this.options)===null||t===void 0)&&t.includes(o)||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(e,t){super.handleChange(e,t),t==="value"&&this.updateValue()}slottedOptionsChanged(e,t){this.options.forEach(o=>{$.getNotifier(o).unsubscribe(this,"value")}),super.slottedOptionsChanged(e,t),this.options.forEach(o=>{$.getNotifier(o).subscribe(this,"value")}),this.setProxyOptions(),this.updateValue()}mousedownHandler(e){var t;return e.offsetX>=0&&e.offsetX<=((t=this.listbox)===null||t===void 0?void 0:t.scrollWidth)?super.mousedownHandler(e):this.collapsible}multipleChanged(e,t){super.multipleChanged(e,t),this.proxy&&(this.proxy.multiple=t)}selectedOptionsChanged(e,t){var o;super.selectedOptionsChanged(e,t),(o=this.options)===null||o===void 0||o.forEach((i,n)=>{var s;let a=(s=this.proxy)===null||s===void 0?void 0:s.options.item(n);a&&(a.selected=i.selected)})}setDefaultSelectedOption(){var e;let t=(e=this.options)!==null&&e!==void 0?e:Array.from(this.children).filter(z.slottedOptionFilter),o=t?.findIndex(i=>i.hasAttribute("selected")||i.selected||i.value===this.value);if(o!==-1){this.selectedIndex=o;return}this.selectedIndex=0}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach(e=>{let t=e.proxy||(e instanceof HTMLOptionElement?e.cloneNode():null);t&&this.proxy.options.add(t)}))}keydownHandler(e){super.keydownHandler(e);let t=e.key||e.key.charCodeAt(0);switch(t){case st:{e.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break}case tr:case rr:{e.preventDefault();break}case Kt:{e.preventDefault(),this.open=!this.open;break}case er:{this.collapsible&&this.open&&(e.preventDefault(),this.open=!1);break}case or:return this.collapsible&&this.open&&(e.preventDefault(),this.open=!1),!0}return!this.open&&this.indexWhenOpened!==this.selectedIndex&&(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(t===Zt||t===Jt)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(e,t){super.sizeChanged(e,t),this.proxy&&(this.proxy.size=t)}updateDisplayValue(){this.collapsible&&$.notify(this,"displayValue")}};u([g({attribute:"open",mode:"boolean"})],fe.prototype,"open",void 0);u([ua],fe.prototype,"collapsible",null);u([x],fe.prototype,"control",void 0);u([g({attribute:"position"})],fe.prototype,"positionAttribute",void 0);u([x],fe.prototype,"position",void 0);u([x],fe.prototype,"maxHeight",void 0);var Xr=class{};u([x],Xr.prototype,"ariaControls",void 0);W(Xr,ve);W(fe,be,Xr);var tl=(r,e)=>q`
    <template
        class="${t=>[t.collapsible&&"collapsible",t.collapsible&&t.open&&"open",t.disabled&&"disabled",t.collapsible&&t.position].filter(Boolean).join(" ")}"
        aria-activedescendant="${t=>t.ariaActiveDescendant}"
        aria-controls="${t=>t.ariaControls}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-expanded="${t=>t.ariaExpanded}"
        aria-haspopup="${t=>t.collapsible?"listbox":null}"
        aria-multiselectable="${t=>t.ariaMultiSelectable}"
        ?open="${t=>t.open}"
        role="combobox"
        tabindex="${t=>t.disabled?null:"0"}"
        @click="${(t,o)=>t.clickHandler(o.event)}"
        @focusin="${(t,o)=>t.focusinHandler(o.event)}"
        @focusout="${(t,o)=>t.focusoutHandler(o.event)}"
        @keydown="${(t,o)=>t.keydownHandler(o.event)}"
        @mousedown="${(t,o)=>t.mousedownHandler(o.event)}"
    >
        ${ka(t=>t.collapsible,q`
                <div
                    class="control"
                    part="control"
                    ?disabled="${t=>t.disabled}"
                    ${G("control")}
                >
                    ${Te(r,e)}
                    <slot name="button-container">
                        <div class="selected-value" part="selected-value">
                            <slot name="selected-value">${t=>t.displayValue}</slot>
                        </div>
                        <div aria-hidden="true" class="indicator" part="indicator">
                            <slot name="indicator">
                                ${e.indicator||""}
                            </slot>
                        </div>
                    </slot>
                    ${Fe(r,e)}
                </div>
            `)}
        <div
            class="listbox"
            id="${t=>t.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${t=>t.disabled}"
            ?hidden="${t=>t.collapsible?!t.open:!1}"
            ${G("listbox")}
        >
            <slot
                ${ge({filter:z.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`;var rl=(r,e)=>q`
    <template
        class="
            ${t=>t.readOnly?"readonly":""}
        "
    >
        <label
            part="label"
            for="control"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${ge({property:"defaultSlottedNodes",filter:el})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${Te(r,e)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${t=>t.handleTextInput()}"
                @change="${t=>t.handleChange()}"
                ?autofocus="${t=>t.autofocus}"
                ?disabled="${t=>t.disabled}"
                list="${t=>t.list}"
                maxlength="${t=>t.maxlength}"
                minlength="${t=>t.minlength}"
                pattern="${t=>t.pattern}"
                placeholder="${t=>t.placeholder}"
                ?readonly="${t=>t.readOnly}"
                ?required="${t=>t.required}"
                size="${t=>t.size}"
                ?spellcheck="${t=>t.spellcheck}"
                :value="${t=>t.value}"
                type="${t=>t.type}"
                aria-atomic="${t=>t.ariaAtomic}"
                aria-busy="${t=>t.ariaBusy}"
                aria-controls="${t=>t.ariaControls}"
                aria-current="${t=>t.ariaCurrent}"
                aria-describedby="${t=>t.ariaDescribedby}"
                aria-details="${t=>t.ariaDetails}"
                aria-disabled="${t=>t.ariaDisabled}"
                aria-errormessage="${t=>t.ariaErrormessage}"
                aria-flowto="${t=>t.ariaFlowto}"
                aria-haspopup="${t=>t.ariaHaspopup}"
                aria-hidden="${t=>t.ariaHidden}"
                aria-invalid="${t=>t.ariaInvalid}"
                aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
                aria-label="${t=>t.ariaLabel}"
                aria-labelledby="${t=>t.ariaLabelledby}"
                aria-live="${t=>t.ariaLive}"
                aria-owns="${t=>t.ariaOwns}"
                aria-relevant="${t=>t.ariaRelevant}"
                aria-roledescription="${t=>t.ariaRoledescription}"
                ${G("control")}
            />
            ${Fe(r,e)}
        </div>
    </template>
`;var Qn=class{constructor(e){this.listenerCache=new WeakMap,this.query=e}bind(e){let{query:t}=this,o=this.constructListener(e);o.bind(t)(),t.addListener(o),this.listenerCache.set(e,o)}unbind(e){let t=this.listenerCache.get(e);t&&(this.query.removeListener(t),this.listenerCache.delete(e))}},Yr=class r extends Qn{constructor(e,t){super(e),this.styles=t}static with(e){return t=>new r(e,t)}constructListener(e){let t=!1,o=this.styles;return function(){let{matches:n}=this;n&&!t?(e.$fastController.addStyles(o),t=n):!n&&t&&(e.$fastController.removeStyles(o),t=n)}}unbind(e){super.unbind(e),e.$fastController.removeStyles(this.styles)}},lr=Yr.with(window.matchMedia("(forced-colors)")),Av=Yr.with(window.matchMedia("(prefers-color-scheme: dark)")),Ev=Yr.with(window.matchMedia("(prefers-color-scheme: light)"));var _="not-allowed";var Ad=":host([hidden]){display:none}";function N(r){return`${Ad}:host{display:${r}}`}var k=ja()?"focus-visible":"focus";function ol(r){return Wr.getOrCreate(r).withPrefix("vscode")}function nl(r){window.addEventListener("load",()=>{new MutationObserver(()=>{il(r)}).observe(document.body,{attributes:!0,attributeFilter:["class"]}),il(r)})}function il(r){let e=getComputedStyle(document.body),t=document.querySelector("body");if(t){let o=t.getAttribute("data-vscode-theme-kind");for(let[i,n]of r){let s=e.getPropertyValue(i).toString();if(o==="vscode-high-contrast")s.length===0&&n.name.includes("background")&&(s="transparent"),n.name==="button-icon-hover-background"&&(s="transparent");else if(o==="vscode-high-contrast-light"){if(s.length===0&&n.name.includes("background"))switch(n.name){case"button-primary-hover-background":s="#0F4A85";break;case"button-secondary-hover-background":s="transparent";break;case"button-icon-hover-background":s="transparent";break}}else n.name==="contrast-active-border"&&(s="transparent");n.setValueFor(t,s)}}}var sl=new Map,al=!1;function b(r,e){let t=Ue.create(r);if(e){if(e.includes("--fake-vscode-token")){let o="id"+Math.random().toString(16).slice(2);e=`${e}-${o}`}sl.set(e,t)}return al||(nl(sl),al=!0),t}var Mx=b("background","--vscode-editor-background").withDefault("#1e1e1e"),B=b("border-width").withDefault(1),ll=b("contrast-active-border","--vscode-contrastActiveBorder").withDefault("#f38518"),Bx=b("contrast-border","--vscode-contrastBorder").withDefault("#6fc3df"),cl=b("corner-radius").withDefault(0),ct=b("corner-radius-round").withDefault(2),H=b("design-unit").withDefault(4),Ve=b("disabled-opacity").withDefault(.4),Y=b("focus-border","--vscode-focusBorder").withDefault("#007fd4"),dt=b("font-family","--vscode-font-family").withDefault("-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol"),Hx=b("font-weight","--vscode-font-weight").withDefault("400"),ce=b("foreground","--vscode-foreground").withDefault("#cccccc"),cr=b("input-height").withDefault("26"),ii=b("input-min-width").withDefault("100px"),Se=b("type-ramp-base-font-size","--vscode-font-size").withDefault("13px"),ke=b("type-ramp-base-line-height").withDefault("normal"),Nx=b("type-ramp-minus1-font-size").withDefault("11px"),jx=b("type-ramp-minus1-line-height").withDefault("16px"),zx=b("type-ramp-minus2-font-size").withDefault("9px"),Gx=b("type-ramp-minus2-line-height").withDefault("16px"),Ux=b("type-ramp-plus1-font-size").withDefault("16px"),qx=b("type-ramp-plus1-line-height").withDefault("24px"),Wx=b("scrollbarWidth").withDefault("10px"),Xx=b("scrollbarHeight").withDefault("10px"),Yx=b("scrollbar-slider-background","--vscode-scrollbarSlider-background").withDefault("#79797966"),Qx=b("scrollbar-slider-hover-background","--vscode-scrollbarSlider-hoverBackground").withDefault("#646464b3"),Zx=b("scrollbar-slider-active-background","--vscode-scrollbarSlider-activeBackground").withDefault("#bfbfbf66"),Jx=b("badge-background","--vscode-badge-background").withDefault("#4d4d4d"),Kx=b("badge-foreground","--vscode-badge-foreground").withDefault("#ffffff"),dl=b("button-border","--vscode-button-border").withDefault("transparent"),Zn=b("button-icon-background").withDefault("transparent"),ul=b("button-icon-corner-radius").withDefault("5px"),hl=b("button-icon-outline-offset").withDefault(0),Jn=b("button-icon-hover-background","--fake-vscode-token").withDefault("rgba(90, 93, 94, 0.31)"),pl=b("button-icon-padding").withDefault("3px"),Vt=b("button-primary-background","--vscode-button-background").withDefault("#0e639c"),Kn=b("button-primary-foreground","--vscode-button-foreground").withDefault("#ffffff"),es=b("button-primary-hover-background","--vscode-button-hoverBackground").withDefault("#1177bb"),ni=b("button-secondary-background","--vscode-button-secondaryBackground").withDefault("#3a3d41"),fl=b("button-secondary-foreground","--vscode-button-secondaryForeground").withDefault("#ffffff"),ml=b("button-secondary-hover-background","--vscode-button-secondaryHoverBackground").withDefault("#45494e"),gl=b("button-padding-horizontal").withDefault("11px"),bl=b("button-padding-vertical").withDefault("4px"),si=b("checkbox-background","--vscode-checkbox-background").withDefault("#3c3c3c"),ts=b("checkbox-border","--vscode-checkbox-border").withDefault("#3c3c3c"),vl=b("checkbox-corner-radius").withDefault(3),ey=b("checkbox-foreground","--vscode-checkbox-foreground").withDefault("#f0f0f0"),ut=b("list-active-selection-background","--vscode-list-activeSelectionBackground").withDefault("#094771"),dr=b("list-active-selection-foreground","--vscode-list-activeSelectionForeground").withDefault("#ffffff"),ty=b("list-hover-background","--vscode-list-hoverBackground").withDefault("#2a2d2e"),ry=b("divider-background","--vscode-settings-dropdownListBorder").withDefault("#454545"),Qr=b("dropdown-background","--vscode-dropdown-background").withDefault("#3c3c3c"),_t=b("dropdown-border","--vscode-dropdown-border").withDefault("#3c3c3c"),oy=b("dropdown-foreground","--vscode-dropdown-foreground").withDefault("#f0f0f0"),xl=b("dropdown-list-max-height").withDefault("200px"),ai=b("input-background","--vscode-input-background").withDefault("#3c3c3c"),yl=b("input-foreground","--vscode-input-foreground").withDefault("#cccccc"),iy=b("input-placeholder-foreground","--vscode-input-placeholderForeground").withDefault("#cccccc"),ny=b("link-active-foreground","--vscode-textLink-activeForeground").withDefault("#3794ff"),sy=b("link-foreground","--vscode-textLink-foreground").withDefault("#3794ff"),ay=b("progress-background","--vscode-progressBar-background").withDefault("#0e70c0"),ly=b("panel-tab-active-border","--vscode-panelTitle-activeBorder").withDefault("#e7e7e7"),cy=b("panel-tab-active-foreground","--vscode-panelTitle-activeForeground").withDefault("#e7e7e7"),dy=b("panel-tab-foreground","--vscode-panelTitle-inactiveForeground").withDefault("#e7e7e799"),uy=b("panel-view-background","--vscode-panel-background").withDefault("#1e1e1e"),hy=b("panel-view-border","--vscode-panel-border").withDefault("#80808059"),py=b("tag-corner-radius").withDefault("2px");function wl(r,e,t,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(r,e,t,o);else for(var a=r.length-1;a>=0;a--)(s=r[a])&&(n=(i<3?s(n):i>3?s(e,t,n):s(e,t))||n);return i>3&&n&&Object.defineProperty(e,t,n),n}var Ed=E`
	${N("inline-flex")} :host {
		outline: none;
		font-family: ${dt};
		font-size: ${Se};
		line-height: ${ke};
		color: ${Kn};
		background: ${Vt};
		border-radius: calc(${ct} * 1px);
		fill: currentColor;
		cursor: pointer;
	}
	.control {
		background: transparent;
		height: inherit;
		flex-grow: 1;
		box-sizing: border-box;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		padding: ${bl} ${gl};
		white-space: wrap;
		outline: none;
		text-decoration: none;
		border: calc(${B} * 1px) solid ${dl};
		color: inherit;
		border-radius: inherit;
		fill: inherit;
		cursor: inherit;
		font-family: inherit;
	}
	:host(:hover) {
		background: ${es};
	}
	:host(:active) {
		background: ${Vt};
	}
	.control:${k} {
		outline: calc(${B} * 1px) solid ${Y};
		outline-offset: calc(${B} * 2px);
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host([disabled]) {
		opacity: ${Ve};
		background: ${Vt};
		cursor: ${_};
	}
	.content {
		display: flex;
	}
	.start {
		display: flex;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${H} * 4px);
		height: calc(${H} * 4px);
	}
	.start {
		margin-inline-end: 8px;
	}
`,Rd=E`
	:host([appearance='primary']) {
		background: ${Vt};
		color: ${Kn};
	}
	:host([appearance='primary']:hover) {
		background: ${es};
	}
	:host([appearance='primary']:active) .control:active {
		background: ${Vt};
	}
	:host([appearance='primary']) .control:${k} {
		outline: calc(${B} * 1px) solid ${Y};
		outline-offset: calc(${B} * 2px);
	}
	:host([appearance='primary'][disabled]) {
		background: ${Vt};
	}
`,Od=E`
	:host([appearance='secondary']) {
		background: ${ni};
		color: ${fl};
	}
	:host([appearance='secondary']:hover) {
		background: ${ml};
	}
	:host([appearance='secondary']:active) .control:active {
		background: ${ni};
	}
	:host([appearance='secondary']) .control:${k} {
		outline: calc(${B} * 1px) solid ${Y};
		outline-offset: calc(${B} * 2px);
	}
	:host([appearance='secondary'][disabled]) {
		background: ${ni};
	}
`,Fd=E`
	:host([appearance='icon']) {
		background: ${Zn};
		border-radius: ${ul};
		color: ${ce};
	}
	:host([appearance='icon']:hover) {
		background: ${Jn};
		outline: 1px dotted ${ll};
		outline-offset: -1px;
	}
	:host([appearance='icon']) .control {
		padding: ${pl};
		border: none;
	}
	:host([appearance='icon']:active) .control:active {
		background: ${Jn};
	}
	:host([appearance='icon']) .control:${k} {
		outline: calc(${B} * 1px) solid ${Y};
		outline-offset: ${hl};
	}
	:host([appearance='icon'][disabled]) {
		background: ${Zn};
	}
`,$l=(r,e)=>E`
	${Ed}
	${Rd}
	${Od}
	${Fd}
`;var li=class extends he{connectedCallback(){if(super.connectedCallback(),!this.appearance){let e=this.getAttribute("appearance");this.appearance=e}}attributeChangedCallback(e,t,o){e==="appearance"&&o==="icon"&&(this.getAttribute("aria-label")||(this.ariaLabel="Icon Button")),e==="aria-label"&&(this.ariaLabel=o),e==="disabled"&&(this.disabled=o!==null)}};wl([g],li.prototype,"appearance",void 0);var rs=li.compose({baseName:"button",template:Ua,styles:$l,shadowOptions:{delegatesFocus:!0}});var Cl=(r,e)=>E`
	${N("inline-flex")} :host {
		align-items: center;
		outline: none;
		margin: calc(${H} * 1px) 0;
		user-select: none;
		font-size: ${Se};
		line-height: ${ke};
	}
	.control {
		position: relative;
		width: calc(${H} * 4px + 2px);
		height: calc(${H} * 4px + 2px);
		box-sizing: border-box;
		border-radius: calc(${vl} * 1px);
		border: calc(${B} * 1px) solid ${ts};
		background: ${si};
		outline: none;
		cursor: pointer;
	}
	.label {
		font-family: ${dt};
		color: ${ce};
		padding-inline-start: calc(${H} * 2px + 2px);
		margin-inline-end: calc(${H} * 2px + 2px);
		cursor: pointer;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.checked-indicator {
		width: 100%;
		height: 100%;
		display: block;
		fill: ${ce};
		opacity: 0;
		pointer-events: none;
	}
	.indeterminate-indicator {
		border-radius: 2px;
		background: ${ce};
		position: absolute;
		top: 50%;
		left: 50%;
		width: 50%;
		height: 50%;
		transform: translate(-50%, -50%);
		opacity: 0;
	}
	:host(:enabled) .control:hover {
		background: ${si};
		border-color: ${ts};
	}
	:host(:enabled) .control:active {
		background: ${si};
		border-color: ${Y};
	}
	:host(:${k}) .control {
		border: calc(${B} * 1px) solid ${Y};
	}
	:host(.disabled) .label,
	:host(.readonly) .label,
	:host(.readonly) .control,
	:host(.disabled) .control {
		cursor: ${_};
	}
	:host(.checked:not(.indeterminate)) .checked-indicator,
	:host(.indeterminate) .indeterminate-indicator {
		opacity: 1;
	}
	:host(.disabled) {
		opacity: ${Ve};
	}
`;var os=class extends Ft{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Checkbox")}},is=os.compose({baseName:"checkbox",template:Za,styles:Cl,checkedIndicator:`
		<svg 
			part="checked-indicator"
			class="checked-indicator"
			width="16" 
			height="16" 
			viewBox="0 0 16 16" 
			xmlns="http://www.w3.org/2000/svg" 
			fill="currentColor"
		>
			<path 
				fill-rule="evenodd" 
				clip-rule="evenodd" 
				d="M14.431 3.323l-8.47 10-.79-.036-3.35-4.77.818-.574 2.978 4.24 8.051-9.506.764.646z"
			/>
		</svg>
	`,indeterminateIndicator:`
		<div part="indeterminate-indicator" class="indeterminate-indicator"></div>
	`});var Sl=(r,e)=>E`
	${N("inline-flex")} :host {
		background: ${Qr};
		border-radius: calc(${ct} * 1px);
		box-sizing: border-box;
		color: ${ce};
		contain: contents;
		font-family: ${dt};
		height: calc(${cr} * 1px);
		position: relative;
		user-select: none;
		min-width: ${ii};
		outline: none;
		vertical-align: top;
	}
	.control {
		align-items: center;
		box-sizing: border-box;
		border: calc(${B} * 1px) solid ${_t};
		border-radius: calc(${ct} * 1px);
		cursor: pointer;
		display: flex;
		font-family: inherit;
		font-size: ${Se};
		line-height: ${ke};
		min-height: 100%;
		padding: 2px 6px 2px 8px;
		width: 100%;
	}
	.listbox {
		background: ${Qr};
		border: calc(${B} * 1px) solid ${Y};
		border-radius: calc(${ct} * 1px);
		box-sizing: border-box;
		display: inline-flex;
		flex-direction: column;
		left: 0;
		max-height: ${xl};
		padding: 0;
		overflow-y: auto;
		position: absolute;
		width: 100%;
		z-index: 1;
	}
	.listbox[hidden] {
		display: none;
	}
	:host(:${k}) .control {
		border-color: ${Y};
	}
	:host(:not([disabled]):hover) {
		background: ${Qr};
		border-color: ${_t};
	}
	:host(:${k}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
		background: ${ut};
		border: calc(${B} * 1px) solid transparent;
		color: ${dr};
	}
	:host([disabled]) {
		cursor: ${_};
		opacity: ${Ve};
	}
	:host([disabled]) .control {
		cursor: ${_};
		user-select: none;
	}
	:host([disabled]:hover) {
		background: ${Qr};
		color: ${ce};
		fill: currentcolor;
	}
	:host(:not([disabled])) .control:active {
		border-color: ${Y};
	}
	:host(:empty) .listbox {
		display: none;
	}
	:host([open]) .control {
		border-color: ${Y};
	}
	:host([open][position='above']) .listbox {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}
	:host([open][position='below']) .listbox {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
	:host([open][position='above']) .listbox {
		bottom: calc(${cr} * 1px);
	}
	:host([open][position='below']) .listbox {
		top: calc(${cr} * 1px);
	}
	.selected-value {
		flex: 1 1 auto;
		font-family: inherit;
		overflow: hidden;
		text-align: start;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.indicator {
		flex: 0 0 auto;
		margin-inline-start: 1em;
	}
	slot[name='listbox'] {
		display: none;
		width: 100%;
	}
	:host([open]) slot[name='listbox'] {
		display: flex;
		position: absolute;
	}
	.end {
		margin-inline-start: auto;
	}
	.start,
	.end,
	.indicator,
	.select-indicator,
	::slotted(svg),
	::slotted(span) {
		fill: currentcolor;
		height: 1em;
		min-height: calc(${H} * 4px);
		min-width: calc(${H} * 4px);
		width: 1em;
	}
	::slotted([role='option']),
	::slotted(option) {
		flex: 0 0 auto;
	}
`;var ns=class extends fe{},ss=ns.compose({baseName:"dropdown",template:tl,styles:Sl,indicator:`
		<svg 
			class="select-indicator"
			part="select-indicator"
			width="16" 
			height="16" 
			viewBox="0 0 16 16" 
			xmlns="http://www.w3.org/2000/svg" 
			fill="currentColor"
		>
			<path 
				fill-rule="evenodd" 
				clip-rule="evenodd" 
				d="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"
			/>
		</svg>
	`});var kl=(r,e)=>E`
	${N("inline-flex")} :host {
		font-family: var(--body-font);
		border-radius: ${cl};
		border: calc(${B} * 1px) solid transparent;
		box-sizing: border-box;
		color: ${ce};
		cursor: pointer;
		fill: currentcolor;
		font-size: ${Se};
		line-height: ${ke};
		margin: 0;
		outline: none;
		overflow: hidden;
		padding: 0 calc((${H} / 2) * 1px)
			calc((${H} / 4) * 1px);
		user-select: none;
		white-space: nowrap;
	}
	:host(:${k}) {
		border-color: ${Y};
		background: ${ut};
		color: ${ce};
	}
	:host([aria-selected='true']) {
		background: ${ut};
		border: calc(${B} * 1px) solid transparent;
		color: ${dr};
	}
	:host(:active) {
		background: ${ut};
		color: ${dr};
	}
	:host(:not([aria-selected='true']):hover) {
		background: ${ut};
		border: calc(${B} * 1px) solid transparent;
		color: ${dr};
	}
	:host(:not([aria-selected='true']):active) {
		background: ${ut};
		color: ${ce};
	}
	:host([disabled]) {
		cursor: ${_};
		opacity: ${Ve};
	}
	:host([disabled]:hover) {
		background-color: inherit;
	}
	.content {
		grid-column-start: 2;
		justify-self: start;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`;var as=class extends X{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Option")}},ls=as.compose({baseName:"option",template:ei,styles:kl});var Al=(r,e)=>E`
	${N("inline-block")} :host {
		font-family: ${dt};
		outline: none;
		user-select: none;
	}
	.root {
		box-sizing: border-box;
		position: relative;
		display: flex;
		flex-direction: row;
		color: ${yl};
		background: ${ai};
		border-radius: calc(${ct} * 1px);
		border: calc(${B} * 1px) solid ${_t};
		height: calc(${cr} * 1px);
		min-width: ${ii};
	}
	.control {
		-webkit-appearance: none;
		font: inherit;
		background: transparent;
		border: 0;
		color: inherit;
		height: calc(100% - (${H} * 1px));
		width: 100%;
		margin-top: auto;
		margin-bottom: auto;
		border: none;
		padding: 0 calc(${H} * 2px + 1px);
		font-size: ${Se};
		line-height: ${ke};
	}
	.control:hover,
	.control:${k},
	.control:disabled,
	.control:active {
		outline: none;
	}
	.label {
		display: block;
		color: ${ce};
		cursor: pointer;
		font-size: ${Se};
		line-height: ${ke};
		margin-bottom: 2px;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.start,
	.end {
		display: flex;
		margin: auto;
		fill: currentcolor;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${H} * 4px);
		height: calc(${H} * 4px);
	}
	.start {
		margin-inline-start: calc(${H} * 2px);
	}
	.end {
		margin-inline-end: calc(${H} * 2px);
	}
	:host(:hover:not([disabled])) .root {
		background: ${ai};
		border-color: ${_t};
	}
	:host(:active:not([disabled])) .root {
		background: ${ai};
		border-color: ${Y};
	}
	:host(:focus-within:not([disabled])) .root {
		border-color: ${Y};
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${_};
	}
	:host([disabled]) {
		opacity: ${Ve};
	}
	:host([disabled]) .control {
		border-color: ${_t};
	}
`;var cs=class extends re{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Text field")}},ds=cs.compose({baseName:"text-field",template:rl,styles:Al,shadowOptions:{delegatesFocus:!0}});var us="26",Td="100px",hs="1",El="0",ps="4",Rl=()=>E`
  ${N("inline-flex")} :host {
    background: var(--vscode-dropdown-background);
    box-sizing: border-box;
    color: var(--vscode-foreground);
    contain: contents;
    font-family: var(--vscode-font-family);
    height: calc(${us} * 1px);
    position: relative;
    user-select: none;
    min-width: ${Td};
    outline: none;
    vertical-align: top;
  }
  .control {
    align-items: center;
    box-sizing: border-box;
    border: calc(${hs} * 1px) solid var(--vscode-dropdown-border);
    border-radius: calc(${El} * 1px);
    cursor: pointer;
    display: flex;
    font-family: inherit;
    font-size: var(--vscode-font-size);
    line-height: normal;
    min-height: 100%;
    padding: 2px 6px 2px 8px;
    width: 100%;
  }
  input {
    -webkit-appearance: none;
    font: inherit;
    background: transparent;
    border: 0;
    color: inherit;
    outline: none;
  }
  .listbox {
    background: var(--vscode-dropdown-background);
    border: calc(${hs} * 1px) solid var(--vscode-focusBorder);
    border-radius: calc(${El} * 1px);
    box-sizing: border-box;
    display: inline-flex;
    flex-direction: column;
    left: 0;
    max-height: 200px;
    padding: 0 0 calc(${ps} * 1px) 0;
    overflow-y: auto;
    position: absolute;
    width: 100%;
    z-index: 1;
  }
  .listbox[hidden] {
    display: none;
  }
  :host(:${k}) .control {
    border-color: var(--vscode-focusBorder);
  }
  :host(:not([disabled]):hover) {
    background: var(--vscode-dropdown-background);
    border-color: var(--vscode-dropdown-border);
  }
  :host(:${k}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
    background: var(--vscode-list-activeSelectionBackground);
    border: calc(${hs} * 1px) solid var(--vscode-focusBorder);
    color: var(--vscode-list-activeSelectionForeground);
  }
  :host([disabled]) {
    cursor: ${_};
    opacity: 0.4;
  }
  :host([disabled]) .control {
    cursor: ${_};
    user-select: none;
  }
  :host([disabled]:hover) {
    background: var(--vscode-dropdown-background);
    color: var(--vscode-foreground);
    fill: currentcolor;
  }
  :host(:not([disabled])) .control:active {
    border-color: var(--vscode-focusBorder);
  }
  :host(:focus-within) .control {
    border-color: var(--vscode-focusBorder);
  }
  :host(:empty) .listbox {
    display: none;
  }
  :host([open]) .control {
    border-color: var(--vscode-focusBorder);
  }
  :host([open][position='above']) .listbox,
  :host([open][position='below']) .control {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  :host([open][position='above']) .control,
  :host([open][position='below']) .listbox {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  :host([open][position='above']) .listbox {
    bottom: calc(${us} * 1px);
  }
  :host([open][position='below']) .listbox {
    top: calc(${us} * 1px);
  }
  .selected-value {
    flex: 1 1 auto;
    font-family: inherit;
    overflow: hidden;
    text-align: start;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .indicator {
    flex: 0 0 auto;
    margin-inline-start: 1em;
  }
  slot[name='listbox'] {
    display: none;
    width: 100%;
  }
  :host([open]) slot[name='listbox'] {
    display: flex;
    position: absolute;
  }
  .end {
    margin-inline-start: auto;
  }
  .start,
  .end,
  .indicator,
  .select-indicator,
  ::slotted(svg),
  ::slotted(span) {
    fill: currentcolor;
    height: 1em;
    min-height: calc(${ps} * 4px);
    min-width: calc(${ps} * 4px);
    width: 1em;
  }
  ::slotted([role='option']),
  ::slotted(option) {
    flex: 0 0 auto;
  }
`;function ye(r,e,t){return isNaN(r)||r<=e?e:r>=t?t:r}function ci(r,e,t){return isNaN(r)||r<=e?0:r>=t?1:r/(t-e)}function ht(r,e,t){return isNaN(r)?e:e+r*(t-e)}function fs(r){return r*(Math.PI/180)}function Ol(r){return r*(180/Math.PI)}function Fl(r){let e=Math.round(ye(r,0,255)).toString(16);return e.length===1?"0"+e:e}function J(r,e,t){return isNaN(r)||r<=0?e:r>=1?t:e+r*(t-e)}function di(r,e,t){if(r<=0)return e%360;if(r>=1)return t%360;let o=(e-t+360)%360,i=(t-e+360)%360;return o<=i?(e-o*r+360)%360:(e+o*r+360)%360}var l0=Math.PI*2;function L(r,e){let t=Math.pow(10,e);return Math.round(r*t)/t}var We=class r{constructor(e,t,o){this.h=e,this.s=t,this.l=o}static fromObject(e){return e&&!isNaN(e.h)&&!isNaN(e.s)&&!isNaN(e.l)?new r(e.h,e.s,e.l):null}equalValue(e){return this.h===e.h&&this.s===e.s&&this.l===e.l}roundToPrecision(e){return new r(L(this.h,e),L(this.s,e),L(this.l,e))}toObject(){return{h:this.h,s:this.s,l:this.l}}};var ur=class r{constructor(e,t,o){this.h=e,this.s=t,this.v=o}static fromObject(e){return e&&!isNaN(e.h)&&!isNaN(e.s)&&!isNaN(e.v)?new r(e.h,e.s,e.v):null}equalValue(e){return this.h===e.h&&this.s===e.s&&this.v===e.v}roundToPrecision(e){return new r(L(this.h,e),L(this.s,e),L(this.v,e))}toObject(){return{h:this.h,s:this.s,v:this.v}}};var Q=class r{constructor(e,t,o){this.l=e,this.a=t,this.b=o}static fromObject(e){return e&&!isNaN(e.l)&&!isNaN(e.a)&&!isNaN(e.b)?new r(e.l,e.a,e.b):null}equalValue(e){return this.l===e.l&&this.a===e.a&&this.b===e.b}roundToPrecision(e){return new r(L(this.l,e),L(this.a,e),L(this.b,e))}toObject(){return{l:this.l,a:this.a,b:this.b}}};Q.epsilon=216/24389;Q.kappa=24389/27;var pt=class r{constructor(e,t,o){this.l=e,this.c=t,this.h=o}static fromObject(e){return e&&!isNaN(e.l)&&!isNaN(e.c)&&!isNaN(e.h)?new r(e.l,e.c,e.h):null}equalValue(e){return this.l===e.l&&this.c===e.c&&this.h===e.h}roundToPrecision(e){return new r(L(this.l,e),L(this.c,e),L(this.h,e))}toObject(){return{l:this.l,c:this.c,h:this.h}}};var D=class r{constructor(e,t,o,i){this.r=e,this.g=t,this.b=o,this.a=typeof i=="number"&&!isNaN(i)?i:1}static fromObject(e){return e&&!isNaN(e.r)&&!isNaN(e.g)&&!isNaN(e.b)?new r(e.r,e.g,e.b,e.a):null}equalValue(e){return this.r===e.r&&this.g===e.g&&this.b===e.b&&this.a===e.a}toStringHexRGB(){return"#"+[this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringHexRGBA(){return this.toStringHexRGB()+this.formatHexValue(this.a)}toStringHexARGB(){return"#"+[this.a,this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringWebRGB(){return`rgb(${Math.round(ht(this.r,0,255))},${Math.round(ht(this.g,0,255))},${Math.round(ht(this.b,0,255))})`}toStringWebRGBA(){return`rgba(${Math.round(ht(this.r,0,255))},${Math.round(ht(this.g,0,255))},${Math.round(ht(this.b,0,255))},${ye(this.a,0,1)})`}roundToPrecision(e){return new r(L(this.r,e),L(this.g,e),L(this.b,e),L(this.a,e))}clamp(){return new r(ye(this.r,0,1),ye(this.g,0,1),ye(this.b,0,1),ye(this.a,0,1))}toObject(){return{r:this.r,g:this.g,b:this.b,a:this.a}}formatHexValue(e){return Fl(ht(e,0,255))}};var de=class r{constructor(e,t,o){this.x=e,this.y=t,this.z=o}static fromObject(e){return e&&!isNaN(e.x)&&!isNaN(e.y)&&!isNaN(e.z)?new r(e.x,e.y,e.z):null}equalValue(e){return this.x===e.x&&this.y===e.y&&this.z===e.z}roundToPrecision(e){return new r(L(this.x,e),L(this.y,e),L(this.z,e))}toObject(){return{x:this.x,y:this.y,z:this.z}}};de.whitePoint=new de(.95047,1,1.08883);function hi(r){return r.r*.2126+r.g*.7152+r.b*.0722}function ui(r){function e(t){return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}return hi(new D(e(r.r),e(r.g),e(r.b),1))}var Tl=(r,e)=>(r+.05)/(e+.05);function ms(r,e){let t=ui(r),o=ui(e);return t>o?Tl(t,o):Tl(o,t)}function Xe(r){let e=Math.max(r.r,r.g,r.b),t=Math.min(r.r,r.g,r.b),o=e-t,i=0;o!==0&&(e===r.r?i=60*((r.g-r.b)/o%6):e===r.g?i=60*((r.b-r.r)/o+2):i=60*((r.r-r.g)/o+4)),i<0&&(i+=360);let n=(e+t)/2,s=0;return o!==0&&(s=o/(1-Math.abs(2*n-1))),new We(i,s,n)}function hr(r,e=1){let t=(1-Math.abs(2*r.l-1))*r.s,o=t*(1-Math.abs(r.h/60%2-1)),i=r.l-t/2,n=0,s=0,a=0;return r.h<60?(n=t,s=o,a=0):r.h<120?(n=o,s=t,a=0):r.h<180?(n=0,s=t,a=o):r.h<240?(n=0,s=o,a=t):r.h<300?(n=o,s=0,a=t):r.h<360&&(n=t,s=0,a=o),new D(n+i,s+i,a+i,e)}function gs(r){let e=Math.max(r.r,r.g,r.b),t=Math.min(r.r,r.g,r.b),o=e-t,i=0;o!==0&&(e===r.r?i=60*((r.g-r.b)/o%6):e===r.g?i=60*((r.b-r.r)/o+2):i=60*((r.r-r.g)/o+4)),i<0&&(i+=360);let n=0;return e!==0&&(n=o/e),new ur(i,n,e)}function Il(r,e=1){let t=r.s*r.v,o=t*(1-Math.abs(r.h/60%2-1)),i=r.v-t,n=0,s=0,a=0;return r.h<60?(n=t,s=o,a=0):r.h<120?(n=o,s=t,a=0):r.h<180?(n=0,s=t,a=o):r.h<240?(n=0,s=o,a=t):r.h<300?(n=o,s=0,a=t):r.h<360&&(n=t,s=0,a=o),new D(n+i,s+i,a+i,e)}function Id(r){let e=0,t=0;return r.h!==0&&(e=Math.cos(fs(r.h))*r.c,t=Math.sin(fs(r.h))*r.c),new Q(r.l,e,t)}function Vd(r){let e=0;(Math.abs(r.b)>.001||Math.abs(r.a)>.001)&&(e=Ol(Math.atan2(r.b,r.a))),e<0&&(e+=360);let t=Math.sqrt(r.a*r.a+r.b*r.b);return new pt(r.l,t,e)}function _d(r){let e=(r.l+16)/116,t=e+r.a/500,o=e-r.b/200,i=Math.pow(t,3),n=Math.pow(e,3),s=Math.pow(o,3),a=0;i>Q.epsilon?a=i:a=(116*t-16)/Q.kappa;let l=0;r.l>Q.epsilon*Q.kappa?l=n:l=r.l/Q.kappa;let c=0;return s>Q.epsilon?c=s:c=(116*o-16)/Q.kappa,a=de.whitePoint.x*a,l=de.whitePoint.y*l,c=de.whitePoint.z*c,new de(a,l,c)}function Dd(r){function e(l){return l>Q.epsilon?Math.pow(l,1/3):(Q.kappa*l+16)/116}let t=e(r.x/de.whitePoint.x),o=e(r.y/de.whitePoint.y),i=e(r.z/de.whitePoint.z),n=116*o-16,s=500*(t-o),a=200*(o-i);return new Q(n,s,a)}function pi(r){function e(l){return l<=.04045?l/12.92:Math.pow((l+.055)/1.055,2.4)}let t=e(r.r),o=e(r.g),i=e(r.b),n=t*.4124564+o*.3575761+i*.1804375,s=t*.2126729+o*.7151522+i*.072175,a=t*.0193339+o*.119192+i*.9503041;return new de(n,s,a)}function bs(r,e=1){function t(s){return s<=.0031308?s*12.92:1.055*Math.pow(s,1/2.4)-.055}let o=t(r.x*3.2404542-r.y*1.5371385-r.z*.4985314),i=t(r.x*-.969266+r.y*1.8760108+r.z*.041556),n=t(r.x*.0556434-r.y*.2040259+r.z*1.0572252);return new D(o,i,n,e)}function Zr(r){return Dd(pi(r))}function fi(r,e=1){return bs(_d(r),e)}function Jr(r){return Vd(Zr(r))}function mi(r,e=1){return fi(Id(r),e)}function ys(r,e,t=18){let o=Jr(r),i=o.c+e*t;return i<0&&(i=0),mi(new pt(o.l,i,o.h))}function vs(r,e){return r*e}function ws(r,e){return new D(vs(r.r,e.r),vs(r.g,e.g),vs(r.b,e.b),1)}function xs(r,e){return r<.5?ye(2*e*r,0,1):ye(1-2*(1-e)*(1-r),0,1)}function $s(r,e){return new D(xs(r.r,e.r),xs(r.g,e.g),xs(r.b,e.b),1)}var Vl;(function(r){r[r.Burn=0]="Burn",r[r.Color=1]="Color",r[r.Darken=2]="Darken",r[r.Dodge=3]="Dodge",r[r.Lighten=4]="Lighten",r[r.Multiply=5]="Multiply",r[r.Overlay=6]="Overlay",r[r.Screen=7]="Screen"})(Vl||(Vl={}));function Pd(r,e,t){return isNaN(r)||r<=0?e:r>=1?t:new D(J(r,e.r,t.r),J(r,e.g,t.g),J(r,e.b,t.b),J(r,e.a,t.a))}function Ld(r,e,t){return isNaN(r)||r<=0?e:r>=1?t:new We(di(r,e.h,t.h),J(r,e.s,t.s),J(r,e.l,t.l))}function Md(r,e,t){return isNaN(r)||r<=0?e:r>=1?t:new ur(di(r,e.h,t.h),J(r,e.s,t.s),J(r,e.v,t.v))}function Bd(r,e,t){return isNaN(r)||r<=0?e:r>=1?t:new de(J(r,e.x,t.x),J(r,e.y,t.y),J(r,e.z,t.z))}function Hd(r,e,t){return isNaN(r)||r<=0?e:r>=1?t:new Q(J(r,e.l,t.l),J(r,e.a,t.a),J(r,e.b,t.b))}function Nd(r,e,t){return isNaN(r)||r<=0?e:r>=1?t:new pt(J(r,e.l,t.l),J(r,e.c,t.c),di(r,e.h,t.h))}var oe;(function(r){r[r.RGB=0]="RGB",r[r.HSL=1]="HSL",r[r.HSV=2]="HSV",r[r.XYZ=3]="XYZ",r[r.LAB=4]="LAB",r[r.LCH=5]="LCH"})(oe||(oe={}));function Dt(r,e,t,o){if(isNaN(r)||r<=0)return t;if(r>=1)return o;switch(e){case oe.HSL:return hr(Ld(r,Xe(t),Xe(o)));case oe.HSV:return Il(Md(r,gs(t),gs(o)));case oe.XYZ:return bs(Bd(r,pi(t),pi(o)));case oe.LAB:return fi(Hd(r,Zr(t),Zr(o)));case oe.LCH:return mi(Nd(r,Jr(t),Jr(o)));default:return Pd(r,t,o)}}var _e=class r{constructor(e){if(e==null||e.length===0)throw new Error("The stops argument must be non-empty");this.stops=this.sortColorScaleStops(e)}static createBalancedColorScale(e){if(e==null||e.length===0)throw new Error("The colors argument must be non-empty");let t=new Array(e.length);for(let o=0;o<e.length;o++)o===0?t[o]={color:e[o],position:0}:o===e.length-1?t[o]={color:e[o],position:1}:t[o]={color:e[o],position:o*(1/(e.length-1))};return new r(t)}getColor(e,t=oe.RGB){if(this.stops.length===1)return this.stops[0].color;if(e<=0)return this.stops[0].color;if(e>=1)return this.stops[this.stops.length-1].color;let o=0;for(let s=0;s<this.stops.length;s++)this.stops[s].position<=e&&(o=s);let i=o+1;i>=this.stops.length&&(i=this.stops.length-1);let n=(e-this.stops[o].position)*(1/(this.stops[i].position-this.stops[o].position));return Dt(n,t,this.stops[o].color,this.stops[i].color)}trim(e,t,o=oe.RGB){if(e<0||t>1||t<e)throw new Error("Invalid bounds");if(e===t)return new r([{color:this.getColor(e,o),position:0}]);let i=[];for(let a=0;a<this.stops.length;a++)this.stops[a].position>=e&&this.stops[a].position<=t&&i.push(this.stops[a]);if(i.length===0)return new r([{color:this.getColor(e),position:e},{color:this.getColor(t),position:t}]);i[0].position!==e&&i.unshift({color:this.getColor(e),position:e}),i[i.length-1].position!==t&&i.push({color:this.getColor(t),position:t});let n=t-e,s=new Array(i.length);for(let a=0;a<i.length;a++)s[a]={color:i[a].color,position:(i[a].position-e)/n};return new r(s)}findNextColor(e,t,o=!1,i=oe.RGB,n=.005,s=32){isNaN(e)||e<=0?e=0:e>=1&&(e=1);let a=this.getColor(e,i),l=o?0:1,c=this.getColor(l,i);if(ms(a,c)<=t)return l;let f=o?0:e,v=o?e:0,A=l,F=0;for(;F<=s;){A=Math.abs(v-f)/2+f;let O=this.getColor(A,i),se=ms(a,O);if(Math.abs(se-t)<=n)return A;se>t?o?f=A:v=A:o?v=A:f=A,F++}return A}clone(){let e=new Array(this.stops.length);for(let t=0;t<e.length;t++)e[t]={color:this.stops[t].color,position:this.stops[t].position};return new r(e)}sortColorScaleStops(e){return e.sort((t,o)=>{let i=t.position,n=o.position;return i<n?-1:i>n?1:0})}};var jd=/^#((?:[0-9a-f]{6}|[0-9a-f]{3}))$/i;function De(r){let e=jd.exec(r);if(e===null)return null;let t=e[1];if(t.length===3){let i=t.charAt(0),n=t.charAt(1),s=t.charAt(2);t=i.concat(i,n,n,s,s)}let o=parseInt(t,16);return isNaN(o)?null:new D(ci((o&16711680)>>>16,0,255),ci((o&65280)>>>8,0,255),ci(o&255,0,255),1)}var Ye=class r{constructor(e){this.config=Object.assign({},r.defaultPaletteConfig,e),this.palette=[],this.updatePaletteColors()}updatePaletteGenerationValues(e){let t=!1;for(let o in e)this.config[o]&&(this.config[o].equalValue?this.config[o].equalValue(e[o])||(this.config[o]=e[o],t=!0):e[o]!==this.config[o]&&(this.config[o]=e[o],t=!0));return t&&this.updatePaletteColors(),t}updatePaletteColors(){let e=this.generatePaletteColorScale();for(let t=0;t<this.config.steps;t++)this.palette[t]=e.getColor(t/(this.config.steps-1),this.config.interpolationMode)}generatePaletteColorScale(){let e=Xe(this.config.baseColor),o=new _e([{position:0,color:this.config.scaleColorLight},{position:.5,color:this.config.baseColor},{position:1,color:this.config.scaleColorDark}]).trim(this.config.clipLight,1-this.config.clipDark),i=o.getColor(0),n=o.getColor(1),s=i,a=n;if(e.s>=this.config.saturationAdjustmentCutoff&&(s=ys(s,this.config.saturationLight),a=ys(a,this.config.saturationDark)),this.config.multiplyLight!==0){let l=ws(this.config.baseColor,s);s=Dt(this.config.multiplyLight,this.config.interpolationMode,s,l)}if(this.config.multiplyDark!==0){let l=ws(this.config.baseColor,a);a=Dt(this.config.multiplyDark,this.config.interpolationMode,a,l)}if(this.config.overlayLight!==0){let l=$s(this.config.baseColor,s);s=Dt(this.config.overlayLight,this.config.interpolationMode,s,l)}if(this.config.overlayDark!==0){let l=$s(this.config.baseColor,a);a=Dt(this.config.overlayDark,this.config.interpolationMode,a,l)}return this.config.baseScalePosition?this.config.baseScalePosition<=0?new _e([{position:0,color:this.config.baseColor},{position:1,color:a.clamp()}]):this.config.baseScalePosition>=1?new _e([{position:0,color:s.clamp()},{position:1,color:this.config.baseColor}]):new _e([{position:0,color:s.clamp()},{position:this.config.baseScalePosition,color:this.config.baseColor},{position:1,color:a.clamp()}]):new _e([{position:0,color:s.clamp()},{position:.5,color:this.config.baseColor},{position:1,color:a.clamp()}])}};Ye.defaultPaletteConfig={baseColor:De("#808080"),steps:11,interpolationMode:oe.RGB,scaleColorLight:new D(1,1,1,1),scaleColorDark:new D(0,0,0,1),clipLight:.185,clipDark:.16,saturationAdjustmentCutoff:.05,saturationLight:.35,saturationDark:1.25,overlayLight:0,overlayDark:.25,multiplyLight:0,multiplyDark:0,baseScalePosition:.5};Ye.greyscalePaletteConfig={baseColor:De("#808080"),steps:11,interpolationMode:oe.RGB,scaleColorLight:new D(1,1,1,1),scaleColorDark:new D(0,0,0,1),clipLight:0,clipDark:0,saturationAdjustmentCutoff:0,saturationLight:0,saturationDark:0,overlayLight:0,overlayDark:0,multiplyLight:0,multiplyDark:0,baseScalePosition:.5};var rw={targetSize:63,spacing:4,scaleColorLight:Ye.defaultPaletteConfig.scaleColorLight,scaleColorDark:Ye.defaultPaletteConfig.scaleColorDark};var Kr=class r{constructor(e){this.palette=[],this.config=Object.assign({},r.defaultPaletteConfig,e),this.regenPalettes()}regenPalettes(){let e=this.config.steps;(isNaN(e)||e<3)&&(e=3);let t=.14,o=.06,i=new D(t,t,t,1),n=94,a=new Ye(Object.assign(Object.assign({},Ye.greyscalePaletteConfig),{baseColor:i,baseScalePosition:(1-t)*100/n,steps:e})).palette,l=hi(this.config.baseColor),c=Xe(this.config.baseColor).l,d=(l+c)/2,v=this.matchRelativeLuminanceIndex(d,a)/(e-1),F=this.matchRelativeLuminanceIndex(t,a)/(e-1),O=Xe(this.config.baseColor),se=hr(We.fromObject({h:O.h,s:O.s,l:t})),vt=hr(We.fromObject({h:O.h,s:O.s,l:o})),Be=new Array(5);Be[0]={position:0,color:new D(1,1,1,1)},Be[1]={position:v,color:this.config.baseColor},Be[2]={position:F,color:se},Be[3]={position:.99,color:vt},Be[4]={position:1,color:new D(0,0,0,1)};let Tc=new _e(Be);this.palette=new Array(e);for(let po=0;po<e;po++){let Ic=Tc.getColor(po/(e-1),oe.RGB);this.palette[po]=Ic}}matchRelativeLuminanceIndex(e,t){let o=Number.MAX_VALUE,i=0,n=0,s=t.length;for(;n<s;n++){let a=Math.abs(hi(t[n])-e);a<o&&(o=a,i=n)}return i}};Kr.defaultPaletteConfig={baseColor:De("#808080"),steps:94};function gi(r,e){let t=r.relativeLuminance>e.relativeLuminance?r:e,o=r.relativeLuminance>e.relativeLuminance?e:r;return(t.relativeLuminance+.05)/(o.relativeLuminance+.05)}var Ae=Object.freeze({create(r,e,t){return new bi(r,e,t)},from(r){return new bi(r.r,r.g,r.b)}});function _l(r){let e={r:0,g:0,b:0,toColorString:()=>"",contrast:()=>0,relativeLuminance:0};for(let t in e)if(typeof e[t]!=typeof r[t])return!1;return!0}var bi=class r extends D{constructor(e,t,o){super(e,t,o,1),this.toColorString=this.toStringHexRGB,this.contrast=gi.bind(null,this),this.createCSS=this.toColorString,this.relativeLuminance=ui(this)}static fromObject(e){return new r(e.r,e.g,e.b)}};function vi(r,e,t=0,o=r.length-1){if(o===t)return r[t];let i=Math.floor((o-t)/2)+t;return e(r[i])?vi(r,e,t,i):vi(r,e,i+1,o)}var zd=(-.1+Math.sqrt(.21))/2;function Dl(r){return r.relativeLuminance<=zd}function pe(r){return Dl(r)?-1:1}function Gd(r,e,t){return typeof r=="number"?eo.from(Ae.create(r,e,t)):eo.from(r)}function Ud(r){return _l(r)?xi.from(r):xi.from(Ae.create(r.r,r.g,r.b))}var eo=Object.freeze({create:Gd,from:Ud}),xi=class r{constructor(e,t){this.closestIndexCache=new Map,this.source=e,this.swatches=t,this.reversedSwatches=Object.freeze([...this.swatches].reverse()),this.lastIndex=this.swatches.length-1}colorContrast(e,t,o,i){o===void 0&&(o=this.closestIndexOf(e));let n=this.swatches,s=this.lastIndex,a=o;i===void 0&&(i=pe(e));let l=c=>gi(e,c)>=t;return i===-1&&(n=this.reversedSwatches,a=s-a),vi(n,l,a,s)}get(e){return this.swatches[e]||this.swatches[ye(e,0,this.lastIndex)]}closestIndexOf(e){if(this.closestIndexCache.has(e.relativeLuminance))return this.closestIndexCache.get(e.relativeLuminance);let t=this.swatches.indexOf(e);if(t!==-1)return this.closestIndexCache.set(e.relativeLuminance,t),t;let o=this.swatches.reduce((i,n)=>Math.abs(n.relativeLuminance-e.relativeLuminance)<Math.abs(i.relativeLuminance-e.relativeLuminance)?n:i);return t=this.swatches.indexOf(o),this.closestIndexCache.set(e.relativeLuminance,t),t}static from(e){return new r(e,Object.freeze(new Kr({baseColor:D.fromObject(e)}).palette.map(t=>{let o=De(t.toStringHexRGB());return Ae.create(o.r,o.g,o.b)})))}};function Pl(r,e,t,o,i,n,s,a,l){let c=r.source,d=e.closestIndexOf(t),f=Math.max(s,a,l),v=d>=f?-1:1,F=r.closestIndexOf(c),O=F+v*-1*o,se=O+v*i,vt=O+v*n;return{rest:r.get(O),hover:r.get(F),active:r.get(se),focus:r.get(vt)}}function Ll(r,e,t,o,i,n,s){let a=r.source,l=r.closestIndexOf(a),c=pe(e),d=l+(c===1?Math.min(o,i):Math.max(c*o,c*i)),f=r.colorContrast(e,t,d,c),v=r.closestIndexOf(f),A=v+c*Math.abs(o-i),F=c===1?o<i:c*o>c*i,O,se;return F?(O=v,se=A):(O=A,se=v),{rest:r.get(O),hover:r.get(se),active:r.get(O+c*n),focus:r.get(O+c*s)}}var Cs=Ae.create(1,1,1),Ml=Ae.create(0,0,0),Bl=Ae.from(De("#808080")),Hl=Ae.from(De("#DA1A5F"));function Nl(r,e){return r.contrast(Cs)>=e?Cs:Ml}function jl(r,e,t,o,i,n){let s=r.closestIndexOf(e),a=Math.max(t,o,i,n),l=s>=a?-1:1;return{rest:r.get(s+l*t),hover:r.get(s+l*o),active:r.get(s+l*i),focus:r.get(s+l*n)}}function zl(r,e,t,o,i,n){let s=pe(e),a=r.closestIndexOf(e);return{rest:r.get(a-s*t),hover:r.get(a-s*o),active:r.get(a-s*i),focus:r.get(a-s*n)}}function Gl(r,e,t){let o=r.closestIndexOf(e);return r.get(o-(o<t?t*-1:t))}function Ul(r,e,t,o,i,n,s,a,l,c){let d=Math.max(t,o,i,n,s,a,l,c),f=r.closestIndexOf(e),v=f>=d?-1:1;return{rest:r.get(f+v*t),hover:r.get(f+v*o),active:r.get(f+v*i),focus:r.get(f+v*n)}}function ql(r,e,t,o,i,n){let s=pe(e),a=r.closestIndexOf(r.colorContrast(e,4.5)),l=a+s*Math.abs(t-o),c=s===1?t<o:s*t>s*o,d,f;return c?(d=a,f=l):(d=l,f=a),{rest:r.get(d),hover:r.get(f),active:r.get(d+s*i),focus:r.get(d+s*n)}}function Wl(r,e){return r.colorContrast(e,3.5)}function Xl(r,e,t){return r.colorContrast(t,3.5,r.closestIndexOf(r.source),pe(e)*-1)}function Yl(r,e){return r.colorContrast(e,14)}function Ql(r,e){return r.colorContrast(e,4.5)}function ft(r){return Ae.create(r,r,r)}var Zl={LightMode:1,DarkMode:.23};function Jl(r,e,t){return r.get(r.closestIndexOf(ft(e))+t)}function Kl(r,e,t){let o=r.closestIndexOf(ft(e))-t;return r.get(o-t)}function ec(r,e){return r.get(r.closestIndexOf(ft(e)))}function to(r,e,t,o,i,n){return Math.max(r.closestIndexOf(ft(e))+t,o,i,n)}function tc(r,e,t,o,i,n){return r.get(to(r,e,t,o,i,n))}function rc(r,e,t,o,i,n){return r.get(to(r,e,t,o,i,n)+t)}function oc(r,e,t,o,i,n){return r.get(to(r,e,t,o,i,n)+t*2)}function ic(r,e,t,o,i,n){let s=r.closestIndexOf(e),a=pe(e),l=s+a*t,c=l+a*(o-t),d=l+a*(i-t),f=l+a*(n-t);return{rest:r.get(l),hover:r.get(c),active:r.get(d),focus:r.get(f)}}function nc(r,e,t){return r.get(r.closestIndexOf(e)+pe(e)*t)}var{create:p}=Ue;function w(r){return Ue.create({name:r,cssCustomPropertyName:null})}var yi=p("body-font").withDefault('aktiv-grotesk, "Segoe UI", Arial, Helvetica, sans-serif'),Ss=p("base-height-multiplier").withDefault(10),V$=p("base-horizontal-spacing-multiplier").withDefault(3),pr=p("base-layer-luminance").withDefault(Zl.DarkMode),Pt=p("control-corner-radius").withDefault(4),ks=p("density").withDefault(0),ie=p("design-unit").withDefault(4),_$=p("direction").withDefault(Wo.ltr),fr=p("disabled-opacity").withDefault(.3),Qe=p("stroke-width").withDefault(1),we=p("focus-stroke-width").withDefault(2),mr=p("type-ramp-base-font-size").withDefault("14px"),gr=p("type-ramp-base-line-height").withDefault("20px"),D$=p("type-ramp-minus-1-font-size").withDefault("12px"),P$=p("type-ramp-minus-1-line-height").withDefault("16px"),L$=p("type-ramp-minus-2-font-size").withDefault("10px"),M$=p("type-ramp-minus-2-line-height").withDefault("16px"),B$=p("type-ramp-plus-1-font-size").withDefault("16px"),H$=p("type-ramp-plus-1-line-height").withDefault("24px"),N$=p("type-ramp-plus-2-font-size").withDefault("20px"),j$=p("type-ramp-plus-2-line-height").withDefault("28px"),z$=p("type-ramp-plus-3-font-size").withDefault("28px"),G$=p("type-ramp-plus-3-line-height").withDefault("36px"),U$=p("type-ramp-plus-4-font-size").withDefault("34px"),q$=p("type-ramp-plus-4-line-height").withDefault("44px"),W$=p("type-ramp-plus-5-font-size").withDefault("46px"),X$=p("type-ramp-plus-5-line-height").withDefault("56px"),Y$=p("type-ramp-plus-6-font-size").withDefault("60px"),Q$=p("type-ramp-plus-6-line-height").withDefault("72px"),Z$=w("accent-fill-rest-delta").withDefault(0),qd=w("accent-fill-hover-delta").withDefault(4),Wd=w("accent-fill-active-delta").withDefault(-5),Xd=w("accent-fill-focus-delta").withDefault(0),Yd=w("accent-foreground-rest-delta").withDefault(0),Qd=w("accent-foreground-hover-delta").withDefault(6),Zd=w("accent-foreground-active-delta").withDefault(-4),Jd=w("accent-foreground-focus-delta").withDefault(0),br=w("neutral-fill-rest-delta").withDefault(7),vr=w("neutral-fill-hover-delta").withDefault(10),xr=w("neutral-fill-active-delta").withDefault(5),sc=w("neutral-fill-focus-delta").withDefault(0),Kd=w("neutral-fill-input-rest-delta").withDefault(0),eu=w("neutral-fill-input-hover-delta").withDefault(0),tu=w("neutral-fill-input-active-delta").withDefault(0),ru=w("neutral-fill-input-focus-delta").withDefault(0),ou=w("neutral-fill-stealth-rest-delta").withDefault(0),iu=w("neutral-fill-stealth-hover-delta").withDefault(5),nu=w("neutral-fill-stealth-active-delta").withDefault(3),su=w("neutral-fill-stealth-focus-delta").withDefault(0),au=w("neutral-fill-strong-rest-delta").withDefault(0),lu=w("neutral-fill-strong-hover-delta").withDefault(8),cu=w("neutral-fill-strong-active-delta").withDefault(-5),du=w("neutral-fill-strong-focus-delta").withDefault(0),yr=w("neutral-fill-layer-rest-delta").withDefault(3),uu=w("neutral-stroke-rest-delta").withDefault(25),hu=w("neutral-stroke-hover-delta").withDefault(40),pu=w("neutral-stroke-active-delta").withDefault(16),fu=w("neutral-stroke-focus-delta").withDefault(25),mu=w("neutral-stroke-divider-rest-delta").withDefault(8),gu=p("neutral-color").withDefault(Bl),K=w("neutral-palette").withDefault(r=>eo.from(gu.getValueFor(r))),bu=p("accent-color").withDefault(Hl),As=w("accent-palette").withDefault(r=>eo.from(bu.getValueFor(r))),vu=w("neutral-layer-card-container-recipe").withDefault({evaluate:r=>Jl(K.getValueFor(r),pr.getValueFor(r),yr.getValueFor(r))}),J$=p("neutral-layer-card-container").withDefault(r=>vu.getValueFor(r).evaluate(r)),xu=w("neutral-layer-floating-recipe").withDefault({evaluate:r=>Kl(K.getValueFor(r),pr.getValueFor(r),yr.getValueFor(r))}),K$=p("neutral-layer-floating").withDefault(r=>xu.getValueFor(r).evaluate(r)),yu=w("neutral-layer-1-recipe").withDefault({evaluate:r=>ec(K.getValueFor(r),pr.getValueFor(r))}),wu=p("neutral-layer-1").withDefault(r=>yu.getValueFor(r).evaluate(r)),$u=w("neutral-layer-2-recipe").withDefault({evaluate:r=>tc(K.getValueFor(r),pr.getValueFor(r),yr.getValueFor(r),br.getValueFor(r),vr.getValueFor(r),xr.getValueFor(r))}),eC=p("neutral-layer-2").withDefault(r=>$u.getValueFor(r).evaluate(r)),Cu=w("neutral-layer-3-recipe").withDefault({evaluate:r=>rc(K.getValueFor(r),pr.getValueFor(r),yr.getValueFor(r),br.getValueFor(r),vr.getValueFor(r),xr.getValueFor(r))}),tC=p("neutral-layer-3").withDefault(r=>Cu.getValueFor(r).evaluate(r)),Su=w("neutral-layer-4-recipe").withDefault({evaluate:r=>oc(K.getValueFor(r),pr.getValueFor(r),yr.getValueFor(r),br.getValueFor(r),vr.getValueFor(r),xr.getValueFor(r))}),rC=p("neutral-layer-4").withDefault(r=>Su.getValueFor(r).evaluate(r)),ue=p("fill-color").withDefault(r=>wu.getValueFor(r)),ro;(function(r){r[r.normal=4.5]="normal",r[r.large=7]="large"})(ro||(ro={}));var wi=p({name:"accent-fill-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(r,e)=>Pl(As.getValueFor(r),K.getValueFor(r),e||ue.getValueFor(r),qd.getValueFor(r),Wd.getValueFor(r),Xd.getValueFor(r),br.getValueFor(r),vr.getValueFor(r),xr.getValueFor(r))}),Lt=p("accent-fill-rest").withDefault(r=>wi.getValueFor(r).evaluate(r).rest),wr=p("accent-fill-hover").withDefault(r=>wi.getValueFor(r).evaluate(r).hover),$r=p("accent-fill-active").withDefault(r=>wi.getValueFor(r).evaluate(r).active),$i=p("accent-fill-focus").withDefault(r=>wi.getValueFor(r).evaluate(r).focus),ac=r=>(e,t)=>Nl(t||Lt.getValueFor(e),r),Ci=w("foreground-on-accent-recipe").withDefault({evaluate:(r,e)=>ac(ro.normal)(r,e)}),lc=p("foreground-on-accent-rest").withDefault(r=>Ci.getValueFor(r).evaluate(r,Lt.getValueFor(r))),cc=p("foreground-on-accent-hover").withDefault(r=>Ci.getValueFor(r).evaluate(r,wr.getValueFor(r))),dc=p("foreground-on-accent-active").withDefault(r=>Ci.getValueFor(r).evaluate(r,$r.getValueFor(r))),uc=p("foreground-on-accent-focus").withDefault(r=>Ci.getValueFor(r).evaluate(r,$i.getValueFor(r))),Si=w("foreground-on-accent-large-recipe").withDefault({evaluate:(r,e)=>ac(ro.large)(r,e)}),oC=p("foreground-on-accent-rest-large").withDefault(r=>Si.getValueFor(r).evaluate(r,Lt.getValueFor(r))),iC=p("foreground-on-accent-hover-large").withDefault(r=>Si.getValueFor(r).evaluate(r,wr.getValueFor(r))),nC=p("foreground-on-accent-active-large").withDefault(r=>Si.getValueFor(r).evaluate(r,$r.getValueFor(r))),sC=p("foreground-on-accent-focus-large").withDefault(r=>Si.getValueFor(r).evaluate(r,$i.getValueFor(r))),ku=r=>(e,t)=>Ll(As.getValueFor(e),t||ue.getValueFor(e),r,Yd.getValueFor(e),Qd.getValueFor(e),Zd.getValueFor(e),Jd.getValueFor(e)),ki=p({name:"accent-foreground-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(r,e)=>ku(ro.normal)(r,e)}),aC=p("accent-foreground-rest").withDefault(r=>ki.getValueFor(r).evaluate(r).rest),lC=p("accent-foreground-hover").withDefault(r=>ki.getValueFor(r).evaluate(r).hover),cC=p("accent-foreground-active").withDefault(r=>ki.getValueFor(r).evaluate(r).active),dC=p("accent-foreground-focus").withDefault(r=>ki.getValueFor(r).evaluate(r).focus),Ai=p({name:"neutral-fill-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(r,e)=>jl(K.getValueFor(r),e||ue.getValueFor(r),br.getValueFor(r),vr.getValueFor(r),xr.getValueFor(r),sc.getValueFor(r))}),uC=p("neutral-fill-rest").withDefault(r=>Ai.getValueFor(r).evaluate(r).rest),hC=p("neutral-fill-hover").withDefault(r=>Ai.getValueFor(r).evaluate(r).hover),pC=p("neutral-fill-active").withDefault(r=>Ai.getValueFor(r).evaluate(r).active),fC=p("neutral-fill-focus").withDefault(r=>Ai.getValueFor(r).evaluate(r).focus),Ei=p({name:"neutral-fill-input-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(r,e)=>zl(K.getValueFor(r),e||ue.getValueFor(r),Kd.getValueFor(r),eu.getValueFor(r),tu.getValueFor(r),ru.getValueFor(r))}),hc=p("neutral-fill-input-rest").withDefault(r=>Ei.getValueFor(r).evaluate(r).rest),pc=p("neutral-fill-input-hover").withDefault(r=>Ei.getValueFor(r).evaluate(r).hover),fc=p("neutral-fill-input-active").withDefault(r=>Ei.getValueFor(r).evaluate(r).active),mC=p("neutral-fill-input-focus").withDefault(r=>Ei.getValueFor(r).evaluate(r).focus),Ri=p({name:"neutral-fill-stealth-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(r,e)=>Ul(K.getValueFor(r),e||ue.getValueFor(r),ou.getValueFor(r),iu.getValueFor(r),nu.getValueFor(r),su.getValueFor(r),br.getValueFor(r),vr.getValueFor(r),xr.getValueFor(r),sc.getValueFor(r))}),Oi=p("neutral-fill-stealth-rest").withDefault(r=>Ri.getValueFor(r).evaluate(r).rest),mc=p("neutral-fill-stealth-hover").withDefault(r=>Ri.getValueFor(r).evaluate(r).hover),gc=p("neutral-fill-stealth-active").withDefault(r=>Ri.getValueFor(r).evaluate(r).active),gC=p("neutral-fill-stealth-focus").withDefault(r=>Ri.getValueFor(r).evaluate(r).focus),Fi=p({name:"neutral-fill-strong-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(r,e)=>ql(K.getValueFor(r),e||ue.getValueFor(r),au.getValueFor(r),lu.getValueFor(r),cu.getValueFor(r),du.getValueFor(r))}),bC=p("neutral-fill-strong-rest").withDefault(r=>Fi.getValueFor(r).evaluate(r).rest),vC=p("neutral-fill-strong-hover").withDefault(r=>Fi.getValueFor(r).evaluate(r).hover),xC=p("neutral-fill-strong-active").withDefault(r=>Fi.getValueFor(r).evaluate(r).active),yC=p("neutral-fill-strong-focus").withDefault(r=>Fi.getValueFor(r).evaluate(r).focus),Au=w("neutral-fill-layer-recipe").withDefault({evaluate:(r,e)=>Gl(K.getValueFor(r),e||ue.getValueFor(r),yr.getValueFor(r))}),wC=p("neutral-fill-layer-rest").withDefault(r=>Au.getValueFor(r).evaluate(r)),Eu=w("focus-stroke-outer-recipe").withDefault({evaluate:r=>Wl(K.getValueFor(r),ue.getValueFor(r))}),Ee=p("focus-stroke-outer").withDefault(r=>Eu.getValueFor(r).evaluate(r)),Ru=w("focus-stroke-inner-recipe").withDefault({evaluate:r=>Xl(As.getValueFor(r),ue.getValueFor(r),Ee.getValueFor(r))}),Ti=p("focus-stroke-inner").withDefault(r=>Ru.getValueFor(r).evaluate(r)),Ou=w("neutral-foreground-hint-recipe").withDefault({evaluate:r=>Ql(K.getValueFor(r),ue.getValueFor(r))}),$C=p("neutral-foreground-hint").withDefault(r=>Ou.getValueFor(r).evaluate(r)),Fu=w("neutral-foreground-recipe").withDefault({evaluate:r=>Yl(K.getValueFor(r),ue.getValueFor(r))}),oo=p("neutral-foreground-rest").withDefault(r=>Fu.getValueFor(r).evaluate(r)),Ii=p({name:"neutral-stroke-recipe",cssCustomPropertyName:null}).withDefault({evaluate:r=>ic(K.getValueFor(r),ue.getValueFor(r),uu.getValueFor(r),hu.getValueFor(r),pu.getValueFor(r),fu.getValueFor(r))}),bc=p("neutral-stroke-rest").withDefault(r=>Ii.getValueFor(r).evaluate(r).rest),CC=p("neutral-stroke-hover").withDefault(r=>Ii.getValueFor(r).evaluate(r).hover),SC=p("neutral-stroke-active").withDefault(r=>Ii.getValueFor(r).evaluate(r).active),kC=p("neutral-stroke-focus").withDefault(r=>Ii.getValueFor(r).evaluate(r).focus),Tu=w("neutral-stroke-divider-recipe").withDefault({evaluate:(r,e)=>nc(K.getValueFor(r),e||ue.getValueFor(r),mu.getValueFor(r))}),AC=p("neutral-stroke-divider-rest").withDefault(r=>Tu.getValueFor(r).evaluate(r)),vc=Ue.create({name:"height-number",cssCustomPropertyName:null}).withDefault(r=>(Ss.getValueFor(r)+ks.getValueFor(r))*ie.getValueFor(r));var Ze=yn`(${Ss} + ${ks}) * ${ie}`;var Iu="0 0 calc((var(--elevation) * 0.225px) + 2px) rgba(0, 0, 0, calc(.11 * (2 - var(--background-luminance, 1))))",Vu="0 calc(var(--elevation) * 0.4px) calc((var(--elevation) * 0.9px)) rgba(0, 0, 0, calc(.13 * (2 - var(--background-luminance, 1))))",Es=`box-shadow: ${Iu}, ${Vu};`;var xc=(r,e)=>{let t=r.tagFor(X),o=r.name===r.tagFor(qe)?"":".listbox";return E`
        ${o?"":N("inline-flex")}

        :host ${o} {
            background: ${ue};
            border: calc(${Qe} * 1px) solid ${bc};
            border-radius: calc(${Pt} * 1px);
            box-sizing: border-box;
            flex-direction: column;
            padding: calc(${ie} * 1px) 0;
        }

        ${o?"":E`
            :host(:focus-within:not([disabled])) {
                border-color: ${Ee};
                box-shadow: 0 0 0
                    calc((${we} - ${Qe}) * 1px)
                    ${Ee} inset;
            }

            :host([disabled]) ::slotted(*) {
                cursor: ${_};
                opacity: ${fr};
                pointer-events: none;
            }
        `}

        ${o||":host([size])"} {
            max-height: calc(
                (var(--size) * ${Ze} + (${ie} * ${Qe} * 2)) * 1px
            );
            overflow-y: auto;
        }

        :host([size="0"]) ${o} {
            max-height: none;
        }
    `.withBehaviors(lr(E`
                :host(:not([multiple]):${k}) ::slotted(${t}[aria-selected="true"]),
                :host([multiple]:${k}) ::slotted(${t}[aria-checked="true"]) {
                    border-color: ${S.ButtonText};
                    box-shadow: 0 0 0 calc(${we} * 1px) inset ${S.HighlightText};
                }

                :host(:not([multiple]):${k}) ::slotted(${t}[aria-selected="true"]) {
                    background: ${S.Highlight};
                    color: ${S.HighlightText};
                    fill: currentcolor;
                }

                ::slotted(${t}[aria-selected="true"]:not([aria-checked="true"])) {
                    background: ${S.Highlight};
                    border-color: ${S.HighlightText};
                    color: ${S.HighlightText};
                }
            `))};var yc=(r,e)=>{let t=r.name===r.tagFor(fe);return E`
        ${N("inline-flex")}

        :host {
            --elevation: 14;
            background: ${hc};
            border-radius: calc(${Pt} * 1px);
            border: calc(${Qe} * 1px) solid ${Lt};
            box-sizing: border-box;
            color: ${oo};
            font-family: ${yi};
            height: calc(${Ze} * 1px);
            position: relative;
            user-select: none;
            min-width: 250px;
            outline: none;
            vertical-align: top;
        }

        ${t?E`
            :host(:not([aria-haspopup])) {
                --elevation: 0;
                border: 0;
                height: auto;
                min-width: 0;
            }
        `:""}

        ${xc(r,e)}

        :host .listbox {
            ${Es}
            border: none;
            display: flex;
            left: 0;
            position: absolute;
            width: 100%;
            z-index: 1;
        }

        .control + .listbox {
            --stroke-size: calc(${ie} * ${Qe} * 2);
            max-height: calc(
                (var(--listbox-max-height) * ${Ze} + var(--stroke-size)) * 1px
            );
        }

        ${t?E`
            :host(:not([aria-haspopup])) .listbox {
                left: auto;
                position: static;
                z-index: auto;
            }
        `:""}

        .listbox[hidden] {
            display: none;
        }

        .control {
            align-items: center;
            box-sizing: border-box;
            cursor: pointer;
            display: flex;
            font-size: ${mr};
            font-family: inherit;
            line-height: ${gr};
            min-height: 100%;
            padding: 0 calc(${ie} * 2.25px);
            width: 100%;
        }

        :host(:not([disabled]):hover) {
            background: ${pc};
            border-color: ${wr};
        }

        :host(:${k}) {
            border-color: ${Ee};
        }

        :host(:not([size]):not([multiple]):not([open]):${k}),
        :host([multiple]:${k}),
        :host([size]:${k}) {
            box-shadow: 0 0 0 calc(${we} * 1px) ${Ee};
        }

        :host(:not([multiple]):not([size]):${k}) ::slotted(${r.tagFor(X)}[aria-selected="true"]:not([disabled])) {
            box-shadow: 0 0 0 calc(${we} * 1px) inset ${Ti};
            border-color: ${Ee};
            background: ${$i};
            color: ${uc};
        }

        :host([disabled]) {
            cursor: ${_};
            opacity: ${fr};
        }

        :host([disabled]) .control {
            cursor: ${_};
            user-select: none;
        }

        :host([disabled]:hover) {
            background: ${Oi};
            color: ${oo};
            fill: currentcolor;
        }

        :host(:not([disabled])) .control:active {
            background: ${fc};
            border-color: ${$r};
            border-radius: calc(${Pt} * 1px);
        }

        :host([open][position="above"]) .listbox {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            border-bottom: 0;
            bottom: calc(${Ze} * 1px);
        }

        :host([open][position="below"]) .listbox {
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            border-top: 0;
            top: calc(${Ze} * 1px);
        }

        .selected-value {
            flex: 1 1 auto;
            font-family: inherit;
            min-width: calc(var(--listbox-scroll-width, 0) - (${ie} * 4) * 1px);
            overflow: hidden;
            text-align: start;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .indicator {
            flex: 0 0 auto;
            margin-inline-start: 1em;
        }

        slot[name="listbox"] {
            display: none;
            width: 100%;
        }

        :host([open]) slot[name="listbox"] {
            display: flex;
            position: absolute;
            ${Es}
        }

        .end {
            margin-inline-start: auto;
        }

        .start,
        .end,
        .indicator,
        .select-indicator,
        ::slotted(svg) {
            /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
            fill: currentcolor;
            height: 1em;
            min-height: calc(${ie} * 4px);
            min-width: calc(${ie} * 4px);
            width: 1em;
        }

        ::slotted([role="option"]),
        ::slotted(option) {
            flex: 0 0 auto;
        }
    `.withBehaviors(lr(E`
                :host(:not([disabled]):hover),
                :host(:not([disabled]):active) {
                    border-color: ${S.Highlight};
                }

                :host(:not([disabled]):${k}) {
                    background-color: ${S.ButtonFace};
                    box-shadow: 0 0 0 calc(${we} * 1px) ${S.Highlight};
                    color: ${S.ButtonText};
                    fill: currentcolor;
                    forced-color-adjust: none;
                }

                :host(:not([disabled]):${k}) .listbox {
                    background: ${S.ButtonFace};
                }

                :host([disabled]) {
                    border-color: ${S.GrayText};
                    background-color: ${S.ButtonFace};
                    color: ${S.GrayText};
                    fill: currentcolor;
                    opacity: 1;
                    forced-color-adjust: none;
                }

                :host([disabled]:hover) {
                    background: ${S.ButtonFace};
                }

                :host([disabled]) .control {
                    color: ${S.GrayText};
                    border-color: ${S.GrayText};
                }

                :host([disabled]) .control .select-indicator {
                    fill: ${S.GrayText};
                }

                :host(:${k}) ::slotted([aria-selected="true"][role="option"]),
                :host(:${k}) ::slotted(option[aria-selected="true"]),
                :host(:${k}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
                    background: ${S.Highlight};
                    border-color: ${S.ButtonText};
                    box-shadow: 0 0 0 calc(${we} * 1px) inset ${S.HighlightText};
                    color: ${S.HighlightText};
                    fill: currentcolor;
                }

                .start,
                .end,
                .indicator,
                .select-indicator,
                ::slotted(svg) {
                    color: ${S.ButtonText};
                    fill: currentcolor;
                }
            `))};var wc=(r,e)=>E`
    ${yc(r,e)}

    :host(:empty) .listbox {
        display: none;
    }

    :host([disabled]) *,
    :host([disabled]) {
        cursor: ${_};
        user-select: none;
    }

    .selected-value {
        -webkit-appearance: none;
        background: transparent;
        border: none;
        color: inherit;
        font-size: ${mr};
        line-height: ${gr};
        height: calc(100% - (${Qe} * 1px));
        margin: auto 0;
        width: 100%;
    }

    .selected-value:hover,
    .selected-value:${k},
    .selected-value:disabled,
    .selected-value:active {
        outline: none;
    }
`;var Rs=class extends xe{maxHeightChanged(e,t){this.updateComputedStylesheet()}updateComputedStylesheet(){this.computedStylesheet&&this.$fastController.removeStyles(this.computedStylesheet);let e=Math.floor(this.maxHeight/vc.getValueFor(this)).toString();this.computedStylesheet=E`
            :host {
                --listbox-max-height: ${e};
            }
        `,this.$fastController.addStyles(this.computedStylesheet)}},Vi=Rs.compose({baseName:"combobox",baseClass:xe,template:Ja,styles:wc,shadowOptions:{delegatesFocus:!0},indicator:`
        <svg
            class="select-indicator"
            part="select-indicator"
            viewBox="0 0 12 7"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11.85.65c.2.2.2.5 0 .7L6.4 6.84a.55.55 0 01-.78 0L.14 1.35a.5.5 0 11.71-.7L6 5.8 11.15.65c.2-.2.5-.2.7 0z"
            />
        </svg>
    `});var $c=(r,e)=>E`
        ${N("inline-flex")} :host {
            align-items: center;
            font-family: ${yi};
            border-radius: calc(${Pt} * 1px);
            border: calc(${we} * 1px) solid transparent;
            box-sizing: border-box;
            background: ${Oi};
            color: ${oo};
            cursor: pointer;
            flex: 0 0 auto;
            fill: currentcolor;
            font-size: ${mr};
            height: calc(${Ze} * 1px);
            line-height: ${gr};
            margin: 0 calc((${ie} - ${we}) * 1px);
            outline: none;
            overflow: hidden;
            padding: 0 1ch;
            user-select: none;
            white-space: nowrap;
        }

        :host(:not([disabled]):not([aria-selected="true"]):hover) {
            background: ${mc};
        }

        :host(:not([disabled]):not([aria-selected="true"]):active) {
            background: ${gc};
        }

        :host([aria-selected="true"]) {
            background: ${Lt};
            color: ${lc};
        }

        :host(:not([disabled])[aria-selected="true"]:hover) {
            background: ${wr};
            color: ${cc};
        }

        :host(:not([disabled])[aria-selected="true"]:active) {
            background: ${$r};
            color: ${dc};
        }

        :host([disabled]) {
            cursor: ${_};
            opacity: ${fr};
        }

        .content {
            grid-column-start: 2;
            justify-self: start;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .start,
        .end,
        ::slotted(svg) {
            display: flex;
        }

        ::slotted(svg) {
            /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
            height: calc(${ie} * 4px);
            width: calc(${ie} * 4px);
        }

        ::slotted([slot="end"]) {
            margin-inline-start: 1ch;
        }

        ::slotted([slot="start"]) {
            margin-inline-end: 1ch;
        }

        :host([aria-checked="true"][aria-selected="false"]) {
            border-color: ${Ee};
        }

        :host([aria-checked="true"][aria-selected="true"]) {
            border-color: ${Ee};
            box-shadow: 0 0 0 calc(${we} * 2 * 1px) inset
                ${Ti};
        }
    `.withBehaviors(lr(E`
                :host {
                    border-color: transparent;
                    forced-color-adjust: none;
                    color: ${S.ButtonText};
                    fill: currentcolor;
                }

                :host(:not([aria-selected="true"]):hover),
                :host([aria-selected="true"]) {
                    background: ${S.Highlight};
                    color: ${S.HighlightText};
                }

                :host([disabled]),
                :host([disabled][aria-selected="false"]:hover) {
                    background: ${S.Canvas};
                    color: ${S.GrayText};
                    fill: currentcolor;
                    opacity: 1;
                }

                :host([aria-checked="true"][aria-selected="false"]) {
                    background: ${S.ButtonFace};
                    color: ${S.ButtonText};
                    border-color: ${S.ButtonText};
                }

                :host([aria-checked="true"][aria-selected="true"]),
                :host([aria-checked="true"][aria-selected="true"]:hover) {
                    background: ${S.Highlight};
                    color: ${S.HighlightText};
                    border-color: ${S.ButtonText};
                }
            `));var Os=X.compose({baseName:"option",template:ei,styles:$c});function Cc(r){return Wr.getOrCreate(r).withPrefix("fast")}var Sc="2.3rem",_u="100px",io="1",kc="0.25rem",Du="1rem",Fs="4",Ac=()=>E`
  ${N("inline-flex")} :host {
    background: var(--select-field-background-color);
    box-sizing: border-box;
    color: var(--foreground-color);
    contain: contents;
    font-family: inherit;
    position: relative;
    user-select: none;
    min-width: ${_u};
    outline: none;
    vertical-align: top;
  }
  .control {
    align-items: center;
    box-sizing: border-box;
    border: calc(${io} * 1px) solid var(--field-border-color);
    border-radius: ${kc};
    cursor: pointer;
    display: flex;
    font-family: inherit;
    font-size: inherit;
    line-height: normal;
    min-height: 100%;
    padding: 2px 6px 2px 8px;
    width: 100%;
  }
  input {
    -webkit-appearance: none;
    font: inherit;
    background: transparent;
    border: 0;
    color: inherit;
    outline: none;
    padding-top: 0.375rem;
    padding-bottom: 0.375rem;
  }
  .listbox {
    background: var(--background-color);
    --tw-ring-color: var(--focus-border-color);
    --tw-ring-offset-width: 0px;
    box-shadow: var(--tw-ring-inset) 0 0 0
      calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    border-radius: ${Du};
    box-sizing: border-box;
    display: inline-flex;
    flex-direction: column;
    left: 0;
    max-height: 200px;
    padding: 0 0 calc(${Fs} * 1px) 0;
    overflow-y: auto;
    position: absolute;
    width: 100%;
    z-index: 1;
  }
  .listbox[hidden] {
    display: none;
  }
  :host(:${k}) .control {
    border-color: var(--focus-border-color);
  }
  :host(:not([disabled]):hover) {
    background: var(--select-field-background-color);
    border-color: var(--field-border-color);
  }
  :host(:${k}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
    background: var(--active-selection-background-color);
    border: calc(${io} * 1px) solid var(--focus-border-color);
    color: var(--foreground-color);
  }
  :host([disabled]) {
    cursor: ${_};
    opacity: 0.4;
  }
  :host([disabled]) .control {
    cursor: ${_};
    user-select: none;
  }
  :host([disabled]:hover) {
    background: var(--select-field-background-color);
    color: var(--foreground-color);
    fill: currentcolor;
  }
  :host(:not([disabled])) .control:active {
    --tw-ring-color: var(--focus-border-color);
    --tw-ring-offset-width: 0px;
    box-shadow: var(--tw-ring-inset) 0 0 0
      calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  }
  :host(:focus-within) .control {
    --tw-ring-color: var(--focus-border-color);
    --tw-ring-offset-width: 0px;
    box-shadow: var(--tw-ring-inset) 0 0 0
      calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  }
  :host(:empty) .listbox {
    display: none;
  }
  :host([open]) .control {
    --tw-ring-color: var(--focus-border-color);
    --tw-ring-offset-width: 0px;
    box-shadow: var(--tw-ring-inset) 0 0 0
      calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  }
  :host([open][position='above']) .listbox,
  :host([open][position='below']) .control {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  :host([open][position='above']) .control,
  :host([open][position='below']) .listbox {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  :host([open][position='above']) .listbox {
    bottom: ${Sc};
  }
  :host([open][position='below']) .listbox {
    top: ${Sc};
  }
  .selected-value {
    flex: 1 1 auto;
    font-family: inherit;
    overflow: hidden;
    text-align: start;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .indicator {
    flex: 0 0 auto;
    margin-inline-start: 1em;
  }
  slot[name='listbox'] {
    display: none;
    width: 100%;
  }
  :host([open]) slot[name='listbox'] {
    display: flex;
    position: absolute;
  }
  .end {
    margin-inline-start: auto;
  }
  .start,
  .end,
  .indicator,
  .select-indicator,
  ::slotted(svg),
  ::slotted(span) {
    fill: currentcolor;
    height: 1em;
    min-height: calc(${Fs} * 4px);
    min-width: calc(${Fs} * 4px);
    width: 1em;
  }
  ::slotted([role='option']),
  ::slotted(option) {
    flex: 0 0 auto;
  }
`,Ec=()=>E`
  ${N("inline-flex")} :host {
    font-family: inherit;
    border-radius: ${kc};
    border: calc(${io} * 1px) solid transparent;
    box-sizing: border-box;
    color: var(--foreground-color);
    cursor: pointer;
    fill: currentcolor;
    font-size: inherit;
    line-height: normal;
    margin: 0;
    outline: none;
    overflow: hidden;
    padding: 0.125rem 0.5rem 0.5rem;
    user-select: none;
    white-space: nowrap;
  }
  :host(:${k}) {
    border-color: var(--focus-border-color);
    background: var(--active-selection-background-color);
    color: var(--foreground-color);
  }
  :host([aria-selected='true']) {
    background: var(--active-selection-background-color);
    border: calc(${io} * 1px) solid var(--focus-border-color);
    color: var(--foreground-color);
  }
  :host(:active) {
    background: var(--active-selection-background-color);
    color: var(--foreground-color);
  }
  :host(:not([aria-selected='true']):hover) {
    background: var(--active-selection-background-color);
    border: calc(${io} * 1px) solid var(--focus-border-color);
    color: var(--foreground-color);
  }
  :host(:not([aria-selected='true']):active) {
    background: var(--active-selection-background-color);
    color: var(--foreground-color);
  }
  :host([disabled]) {
    cursor: ${_};
    opacity: 0.4;
  }
  :host([disabled]:hover) {
    background-color: inherit;
  }
  .content {
    grid-column-start: 2;
    justify-self: start;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;var _i=r=>{class e extends r{constructor(...i){super();this.touched=!1;this.isDefaultValue=!0;this.submitted=!1;new me(this,{context:on,callback:n=>{n.registerValidationListener(this.option.name,s=>this.validation=s),n.registerTouchedListener(this.option.name,s=>this.touched=s),n.registerDefaultValueListener(this.option.name,s=>this.isDefaultValue=s)},subscribe:!1}),new me(this,{context:Ro,callback:n=>this.submitted=n,subscribe:!0}),new me(this,{context:Dr,callback:n=>this.generatorContext=n,subscribe:!0})}shouldRenderError(){return this.validation!==void 0&&this.validation!==!0&&(this.touched||this.submitted)}shouldRenderChanged(){return this.touched&&!this.isDefaultValue}createRenderRoot(){return this}}return m([P()],e.prototype,"validation",2),m([P()],e.prototype,"touched",2),m([P()],e.prototype,"isDefaultValue",2),m([P()],e.prototype,"submitted",2),m([P()],e.prototype,"generatorContext",2),e};var $e=r=>{class e extends _i(U(r)){dispatchValue(i){let n=Ke(this.option),s=ko(i,n);this.dispatchEvent(new CustomEvent("option-changed",{bubbles:!0,composed:!0,detail:{name:this.option.name,value:i,isDefaultValue:s}}))}firstUpdated(i){if(super.updated(i),this.generatorContext){let s=this.generatorContext.prefillValues?.[this.option.name];if(s){this.setFieldValue(s),this.dispatchValue(s);return}}let n=Ke(this.option);if(n){this.setFieldValue(n),this.dispatchValue(n);return}this.dispatchValue(void 0)}get fieldId(){return`${this.option.name}-field`}get ariaAttributes(){return{id:this.fieldId,"aria-invalid":`${this.shouldRenderError()}`,"aria-describedby":`${this.fieldId}-error`}}createRenderRoot(){return this}setFieldValue(i){throw new Error("Not implemented")}renderField(){throw new Error("Not implemented")}}return m([T()],e.prototype,"option",2),e};var Ts={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},so=r=>(...e)=>({_$litDirective$:r,values:e}),no=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var{I:HS}=oa;var Rc=r=>r.strings===void 0;var ao=(r,e)=>{var t,o;let i=r._$AN;if(i===void 0)return!1;for(let n of i)(o=(t=n)._$AO)===null||o===void 0||o.call(t,e,!1),ao(n,e);return!0},Di=r=>{let e,t;do{if((e=r._$AM)===void 0)break;t=e._$AN,t.delete(r),r=e}while(t?.size===0)},Oc=r=>{for(let e;e=r._$AM;r=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(r))break;t.add(r),Mu(e)}};function Pu(r){this._$AN!==void 0?(Di(this),this._$AM=r,Oc(this)):this._$AM=r}function Lu(r,e=!1,t=0){let o=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(e)if(Array.isArray(o))for(let n=t;n<o.length;n++)ao(o[n],!1),Di(o[n]);else o!=null&&(ao(o,!1),Di(o));else ao(this,r)}var Mu=r=>{var e,t,o,i;r.type==Ts.CHILD&&((e=(o=r)._$AP)!==null&&e!==void 0||(o._$AP=Lu),(t=(i=r)._$AQ)!==null&&t!==void 0||(i._$AQ=Pu))},Pi=class extends no{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,o){super._$AT(e,t,o),Oc(this),this.isConnected=e._$AU}_$AO(e,t=!0){var o,i;e!==this.isConnected&&(this.isConnected=e,e?(o=this.reconnected)===null||o===void 0||o.call(this):(i=this.disconnected)===null||i===void 0||i.call(this)),t&&(ao(this,e),Di(this))}setValue(e){if(Rc(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};var Li=class extends Pi{constructor(){super(...arguments),this.prevData={}}render(e){return j}update(e,[t]){var o;this.element!==e.element&&(this.element=e.element),this.host=((o=e.options)===null||o===void 0?void 0:o.host)||this.element,this.apply(t),this.groom(t),this.prevData={...t}}apply(e){if(!e)return;let{prevData:t,element:o}=this;for(let i in e){let n=e[i];n!==t[i]&&(o[i]=n)}}groom(e){let{prevData:t,element:o}=this;if(t)for(let i in t)(!e||!(i in e)&&o[i]===t[i])&&(o[i]=void 0)}},ZS=so(Li),Mi=class extends Li{constructor(){super(...arguments),this.eventData={}}apply(e){if(e)for(let t in e){let o=e[t];o!==this.eventData[t]&&this.applyEvent(t,o)}}applyEvent(e,t){let{prevData:o,element:i}=this;this.eventData[e]=t,o[e]&&i.removeEventListener(e,this,t),i.addEventListener(e,this,t)}groom(e){let{prevData:t,element:o}=this;if(t)for(let i in t)(!e||!(i in e)&&o[i]===t[i])&&this.groomEvent(i,t[i])}groomEvent(e,t){let{element:o}=this;delete this.eventData[e],o.removeEventListener(e,this,t)}handleEvent(e){let t=this.eventData[e.type];typeof t=="function"?t.call(this.host,e):t.handleEvent(e)}disconnected(){let{eventData:e,element:t}=this;for(let o in e){let i=o.slice(1),n=e[o];t.removeEventListener(i,this,n)}}reconnected(){let{eventData:e,element:t}=this;for(let o in e){let i=o.slice(1),n=e[o];t.addEventListener(i,this,n)}}},JS=so(Mi),Is=class extends Mi{apply(e){if(!e)return;let{prevData:t,element:o}=this;for(let i in e){let n=e[i];if(n===t[i])continue;let s=i.slice(1);switch(i[0]){case"@":this.eventData[s]=n,this.applyEvent(s,n);break;case".":o[s]=n;break;case"?":n?o.setAttribute(s,""):o.removeAttribute(s);break;default:n!=null?o.setAttribute(i,String(n)):o.removeAttribute(i);break}}}groom(e){let{prevData:t,element:o}=this;if(t)for(let i in t){let n=i.slice(1);if(!e||!(i in e)&&o[n]===t[i])switch(i[0]){case"@":this.groomEvent(n,t[i]);break;case".":o[n]=void 0;break;case"?":o.removeAttribute(n);break;default:o.removeAttribute(i);break}}}},Z=so(Is);var ne="focus:ring-2 focus:ring-focusBorder focus:outline-none",Pe="bg-fieldBackground border border-fieldBorder",Le="px-2 py-1.5",mt=r=>r?"!ring-2 !ring-error focus:!ring-error":"",gt=r=>r?"--border-width: 1; --dropdown-border: var(--vscode-inputValidation-errorBorder); --focus-border: var(--vscode-inputValidation-errorBorder);":"";var Fc=r=>class extends r{render(){return h`
        <div
          class="${this.shouldRenderError()?"border-error":this.shouldRenderChanged()?"border-primary":"border-transparent"} flex flex-col border-l-4 py-2 pl-3"
        >
          <label for="${this.fieldId}"
            >${this.option.name}${this.option.isRequired?"*":""}</label
          >
          <div class="mt-2 flex flex-row items-start gap-2">
            ${this.renderField()}
            <p class="text-mutedForeground self-center">
              ${this.option.description}
            </p>
            ${ee(this.shouldRenderError()&&typeof this.validation=="string",()=>h`<p
                class="text-sm text-error ${ee(this.editor==="intellij",()=>"mt-1")}"
                id="${this.fieldId}-error"
                aria-live="polite"
              >
                ${this.validation}
              </p>
              </div>`)}
          </div>
        </div>
      `}};var Bi=class extends Fc($e(C)){renderField(){return this.editor==="intellij"?h`<input
        type="checkbox"
        class="form-checkbox ${Pe} checked:bg-primary ${ne} h-5 w-5 rounded checked:border-transparent focus:ring-offset-0"
        @input="${this.handleChange}"
        ${Z(this.ariaAttributes)}
      />`:h`<vscode-checkbox
        @change="${this.handleChange}"
        style="${this.shouldRenderError()?"--border-width: 1; --checkbox-border: var(--vscode-inputValidation-errorBorder); --focus-border: var(--vscode-inputValidation-errorBorder);":""}"
        ${Z(this.ariaAttributes)}
      ></vscode-checkbox>`}setFieldValue(e){let t=this.renderRoot.querySelector(this.editor==="intellij"?"input":"vscode-checkbox");t&&(t.checked=!!e)}handleChange(e){let t=e.target.checked;this.dispatchValue(t)}};Bi=m([R("checkbox-field")],Bi);var Me=r=>class extends r{render(){return h`
        <div
          class="${this.shouldRenderError()?"border-error":this.shouldRenderChanged()?"border-primary":"border-transparent"} flex flex-col border-l-4 py-2 pl-3"
        >
          <div class="flex items-center gap-3">
            <label for="${this.fieldId}"
              >${this.option.name}${this.option.isRequired?"*":""}</label
            >
            ${ee(this.option["x-hint"],()=>h`
                  <popover-element
                    class="flex items-start"
                    .content="${this.option["x-hint"]}"
                  >
                    <icon-element class="flex items-start" icon="question">
                    </icon-element>
                  </popover-element>
                `)}
          </div>
          <p class="text-mutedForeground mb-2">${this.option.description}</p>
          ${this.renderField()}
          ${ee(this.shouldRenderError()&&typeof this.validation=="string",()=>h`<p
                class="text-error ${ee(this.editor==="intellij",()=>"mt-1")} text-sm"
                id="${this.fieldId}-error"
                aria-live="polite"
              >
                ${this.validation}
              </p>`)}
        </div>
      `}};var lo=class extends Me($e(C)){constructor(){super(...arguments);this.elements=[]}renderField(){return h`<div>
      <div class="flex flex-row gap-2">
        ${this.renderInputField()}
        <button-element
          text="Add"
          appearance="secondary"
          @click="${this.addValue}"
          data-cy="${this.fieldId}-add-button"
          class="self-center"
          style="${this.shouldRenderError()?"--field-border-color: var(--error-color); --focus-border-color: var(--error-color);":""}"
        ></button-element>
      </div>
      <div class="mt-2">
        <p>${this.elements.length} items</p>
        <div class="mt-2 flex flex-row gap-4">
          ${this.elements.map((t,o)=>h`<badge-element
                text="${t}"
                fieldId="${this.fieldId}"
                @remove="${()=>this.removeValue(o)}"
              ></badge-element>`)}
        </div>
      </div>
    </div>`}renderInputField(){return this.editor==="intellij"?h` <input
        class="${Pe} ${ne} ${Le} ${mt(this.shouldRenderError())})} grow rounded"
        type="text"
        @keydown="${this.handleEnterKeyAdd}"
        ${Z(this.ariaAttributes)}
      />`:h`<vscode-text-field
        type="text"
        class="grow"
        @keydown="${this.handleEnterKeyAdd}"
        style="${gt(this.shouldRenderError())}"
        ${Z(this.ariaAttributes)}
      ></vscode-text-field>`}get inputFieldSelector(){return this.editor==="intellij"?"input":"vscode-text-field"}handleEnterKeyAdd(t){t.key==="Enter"&&this.addValue()}addValue(){let t=this.querySelector(this.inputFieldSelector),o=t?.value;o&&(this.elements=[...this.elements,o],t.value="",this.dispatchValue(this.elements))}removeValue(t){let o=[...this.elements];o.splice(t,1),this.elements=o,this.dispatchValue(this.elements)}setFieldValue(t){typeof t=="string"?this.elements=t.split(","):Array.isArray(t)&&(this.elements=t)}};m([P()],lo.prototype,"elements",2),lo=m([R("array-field")],lo);var Hi=class extends Me($e(C)){renderField(){let e=this.shouldRenderError();return this.editor==="intellij"?h`
        <input
          class="${Pe} ${ne} ${Le} ${mt(e)} rounded"
          type="text"
          @input="${this.handleChange}"
          ${Z(this.ariaAttributes)}
        />
      `:h`
        <vscode-text-field
          type="text"
          @input="${this.handleChange}"
          style="${gt(this.shouldRenderError())}"
          ${Z(this.ariaAttributes)}
        >
        </vscode-text-field>
      `}handleChange(e){let t=e.target.value;this.dispatchValue(t)}setFieldValue(e){let t=this.renderRoot.querySelector(this.editor==="intellij"?"input":"vscode-text-field");t&&(t.value=`${e}`)}};Hi=m([R("input-field")],Hi);function*Je(r,e){if(r!==void 0){let t=0;for(let o of r)yield e(o,t++)}}var co=class extends Me($e(C)){constructor(){super(...arguments);this.selectedElements=[]}renderField(){return h`
      <div class="flex flex-col">
        ${this.renderSelectField()}
        <div class="mt-2">
          ${ee(this.selectedElements.length>0,()=>h`<p>Selected:</p>`)}
          <div class="mt-2 flex flex-row gap-4">
            ${this.selectedElements.map((t,o)=>h`<badge-element
                  text="${t}"
                  fieldId="${this.fieldId}"
                  @remove="${()=>this.removeValue(o)}"
                ></badge-element>`)}
          </div>
        </div>
      </div>
    `}renderSelectField(){return this.editor==="intellij"?h`<select
        @change="${this.addValue}"
        class="bg-selectFieldBackground border-fieldBorder ${ne} ${Le} ${mt(this.shouldRenderError())})} grow rounded border"
        ${Z(this.ariaAttributes)}
      >
        <option value="">
          ${this.selectedElements.length?"Add another value":"Select a value"}
        </option>
        ${Je(this.extractItemOptions(this.option),t=>h`<option value="${t}" title="${t}">${t}</option>`)}
      </select>`:h` <vscode-dropdown
        @change="${this.addValue}"
        style="${gt(this.shouldRenderError())}"
        ${Z(this.ariaAttributes)}
      >
        <vscode-option value="">
          ${this.selectedElements.length?"Add another value":"Select a value"}
        </vscode-option>
        ${Je(this.extractItemOptions(this.option),t=>h`<vscode-option value="${t}" title="${t}"
              >${t}</vscode-option
            >`)}
      </vscode-dropdown>`}removeValue(t){let o=[...this.selectedElements];o.splice(t,1),this.selectedElements=o,this.dispatchValue(this.selectedElements)}addValue(t){let o=t.target,i=o.value;i&&(this.selectedElements=[...this.selectedElements,i],o.value="",this.dispatchValue(this.selectedElements))}setFieldValue(t){let o=[];typeof t=="string"?o=t.split(","):Array.isArray(t)&&(o=t);let i=this.extractItemOptions(this.option);this.selectedElements=o.filter(n=>i.includes(n)),this.dispatchValue(this.selectedElements)}extractItemOptions(t){if(!t.items)return[];let o;return Array.isArray(t.items)?o=t.items:o=t.items.enum,o.filter(i=>!this.selectedElements.includes(i))}};m([P()],co.prototype,"selectedElements",2),co=m([R("multiselect-field")],co);var Ni=class extends Me($e(C)){renderField(){return this.editor==="intellij"?this.renderIntellij():this.renderVscode()}renderIntellij(){return h`
      <select
        @change="${this.handleChange}"
        class="form-select bg-selectFieldBackground border-fieldBorder ${ne} ${Le} ${mt(this.shouldRenderError())} rounded border"
        ${Z(this.ariaAttributes)}
      >
        ${ee(Ke(this.option)===void 0,()=>h`<option value="">--</option>`)}
        ${Je(et(this.option),e=>h`<option value="${e}" title="${e}">${e}</option>`)}
      </select>
    `}renderVscode(){return h`
      <vscode-dropdown
        @change="${this.handleChange}"
        style="${gt(this.shouldRenderError())}"
        ${Z(this.ariaAttributes)}
      >
        ${ee(Ke(this.option)===void 0,()=>h`<vscode-option value="">--</vscode-option>`)}
        ${Je(et(this.option),e=>h`<vscode-option value="${e}" title="${e}"
              >${e}</vscode-option
            >`)}
      </vscode-dropdown>
    `}setFieldValue(e){let t=this.renderRoot.querySelector(this.editor==="intellij"?"select":"vscode-dropdown");t&&(t.value=e?`${e}`:"")}handleChange(e){let t=e.target.value;this.dispatchValue(t)}};Ni=m([R("select-field")],Ni);var ji=class extends Me($e(C)){renderField(){return this.editor==="vscode"?this.renderVSCode():this.renderIntellij()}renderVSCode(){return h`
      <vscode-combobox
        autocomplete="list"
        position="below"
        @change="${this.handleChange}"
        @input="${this.handleInput}"
        ${Z(this.ariaAttributes)}
      >
        ${Je(et(this.option),e=>h`<vscode-option value="${e}">${e}</vscode-option>`)}
      </vscode-combobox>
    `}renderIntellij(){return h`
      <intellij-combobox
        autocomplete="list"
        position="below"
        @change="${this.handleChange}"
        ${Z(this.ariaAttributes)}
      >
        ${Je(et(this.option),e=>h`<intellij-option value="${e}">${e}</intellij-option>`)}
      </intellij-combobox>
    `}updated(){let e=this.editor==="vscode"?"vscode-combobox":"intellij-combobox",t=this.renderRoot.querySelector(e);t&&(t.filterOptions=function(){(!this.autocomplete||this.autocomplete===Tt.none)&&(this.filter="");let o=this.filter.toLowerCase();this.filteredOptions=this._options.filter(i=>i.text.toLowerCase().includes(this.filter.toLowerCase())),this.isAutocompleteList&&(!this.filteredOptions.length&&!o&&(this.filteredOptions=this._options),this._options.forEach(i=>{i.hidden=!this.filteredOptions.includes(i)}))})}handleInput(e){let t=e.target}handleChange(e){let t=e.target.value;this.dispatchValue(t)}setFieldValue(e){let t=this.editor==="vscode"?"vscode-combobox":"intellij-combobox",o=this.renderRoot.querySelector(t);o&&customElements.whenDefined(t).then(()=>{o.value=e?`${e}`:""})}};ji=m([R("autocomplete-field")],ji);var Cr=window?.navigator?.userAgent?.includes("Win")?"\\":"/",Sr=class extends Fo(U(C)){constructor(){super(...arguments);this._path="";this.isEditable=!1}set path(t){this._path=t.startsWith(Cr)?t.substring(1):t}get path(){return this._path}toggleEdit(){this.isEditable=!this.isEditable,this.isEditable&&setTimeout(()=>{this.renderRoot.querySelector(this.editor==="vscode"?"vscode-text-field":"input")?.focus()},0)}confirmEdit(){this.path=this.renderRoot.querySelector(this.editor==="vscode"?"vscode-text-field":"input")?.value||"",this.isEditable=!1,this.dispatchValue()}editToSegment(t){let o=this.path.split(Cr);this.path=o.slice(0,t+1).join(Cr),this.dispatchValue()}resetPath(){this.path="",this.isEditable=!1,this.dispatchValue()}render(){let t=this.path.split(Cr),o=t.filter(i=>!!i).length>0;return h`
      <div
        data-cy="cwd-breadcrumb"
        class="text-mutedForeground flex flex-wrap items-center rounded py-2 text-sm leading-none"
      >
        <span class="pr-2"> Working Directory: </span>
        <span
          @click="${o?this.resetPath:()=>{}}"
          class="${o?"hover:text-primary cursor-pointer underline":""}"
        >
          {workspaceRoot}
        </span>
        <span class="mx-2">${Cr}</span>
        ${this.isEditable?h`
              ${this.renderInlineEdit()}
              <icon-element
                @click="${this.toggleEdit}"
                icon="close"
                data-cy="inline-edit-cancel"
              ></icon-element>
              <icon-element
                @click="${this.confirmEdit}"
                icon="check"
                data-cy="inline-edit-confirm"
              ></icon-element>
            `:h`
              ${t.map((i,n)=>h`
                  <span
                    data-cy="cwd-breadcrumb-segment-${n}"
                    class="${n!==t.length-1?"underline cursor-pointer hover:text-primary":""}"
                    @click="${()=>this.editToSegment(n)}"
                    >${i}</span
                  >
                  ${n<t.length-1?h`<span class="mx-2">${Cr}</span>`:""}
                `)}
              <button-element
                @click="${this.toggleEdit}"
                color="var(--muted-foreground-color)"
                ?applyFillColor="false"
                appearance="icon"
                text="edit"
                class="self-center"
                data-cy="inline-edit-button"
              ></button-element>
            `}
      </div>
    `}renderInlineEdit(){return this.editor==="vscode"?h` <vscode-text-field
        type="text"
        .value="${this.path}"
        @keydown="${this.handleInlineEditKeydown}"
        data-cy="inline-edit-field"
      >
      </vscode-text-field>`:h`
        <input
          class="${Pe} ${ne} ${Le} cursor-pointer rounded"
          type="text"
          .value="${this.path}"
          @keydown="${this.handleInlineEditKeydown}"
          data-cy="inline-edit-field"
        />
      `}handleInlineEditKeydown(t){t.key==="Enter"&&this.confirmEdit(),t.key==="Escape"&&this.toggleEdit()}updated(t){if(super.updated(t),t.has("generatorContext")){let o=this.generatorContext?.prefillValues?.cwd;o&&(this.path=o,this.dispatchValue())}}dispatchValue(){this.dispatchEvent(new CustomEvent("cwd-changed",{bubbles:!0,composed:!0,detail:this.path}))}createRenderRoot(){return this}};m([P()],Sr.prototype,"_path",2),m([P()],Sr.prototype,"isEditable",2),Sr=m([R("cwd-breadcrumb")],Sr);var bt=class extends U(C){constructor(){super(...arguments);this.appearance="primary";this.applyFillColor=!1}render(){return this.editor==="vscode"?this.renderVSCode():this.renderIntellij()}renderVSCode(){return this.appearance==="icon"?h`
        <vscode-button appearance="icon">
          <icon-element
            class="flex items-start"
            icon="${this.text}"
            color="${this.color}"
            ?applyFillColor=${this.applyFillColor}
          ></icon-element>
        </vscode-button>
      `:h`<vscode-button appearance="${this.appearance}"
      >${this.text}</vscode-button
    >`}renderIntellij(){return this.appearance==="icon"?h`<div
        class="hover:bg-fieldNavHoverBackground cursor-pointer rounded p-1"
      >
        <icon-element
          icon="${this.text}"
          color="${this.color}"
          ?applyFillColor="${this.applyFillColor}"
        ></icon-element>
      </div>`:h`<button
      class="${ne} ${this.appearance==="primary"?"bg-primary focus:!ring-offset-1 focus:!ring-offset-background":'border !border-fieldBorder focus:!border-focusBorder"}'} whitespace-nowrap rounded px-4 py-1"
    >
      ${this.text}
    </button>`}createRenderRoot(){return this}};m([T()],bt.prototype,"text",2),m([T()],bt.prototype,"appearance",2),m([T()],bt.prototype,"color",2),m([T({type:Boolean})],bt.prototype,"applyFillColor",2),bt=m([R("button-element")],bt);var Mt=class extends Fo(U(C)){constructor(){super(...arguments);this.showMore=!1}toggleShowMore(){this.showMore=!this.showMore}render(){let{optionsWithMetadata:t,numOfImportantOptions:o,numOfOtherOptions:i}=Hu(this.options,this.searchValue),n=this.showMore||!!this.searchValue||o===0,s=!!this.searchValue||i===0||o===0;return h`
      <div class="flex h-full w-full">
        <div
          class="border-separator ${this.editor==="intellij"?"hidden md:block":"max-sm:hidden md:w-64"} fixed h-full w-52 overflow-y-auto border-r-2  p-6"
        >
          ${this.renderOptionNav(t,n)}
        </div>
        <div
          class="${this.editor==="intellij"?"md:ml-52 md:p-6":"sm:ml-52 sm:p-6 md:ml-64"} w-full pt-6"
        >
          ${this.renderOptionsWithDivider(t,n,s)}
        </div>
      </div>
    `}renderOptionNav(t,o){return h`
      <ul>
        ${t.map(i=>{let n=this.searchValue&&!i.isInSearchResults,s=!o&&!i.isImportant;return h`<field-nav-item
            class="${n?"hidden":""}"
            .option="${i.option}"
            .greyedOut="${s}"
            @click=${a=>this.handleTreeClickEvent(a,s)}
          ></field-nav-item>`})}
      </ul>
    `}renderOptionsWithDivider(t,o,i){let n=(l,c=!1)=>{let d=Bu(l.option);return h` <div
        class="${c?"hidden":""} mb-4"
        id="option-${l.option.name}"
      >
        ${d}
      </div>`};if(this.searchValue&&t.every(l=>!l.isInSearchResults))return h` <div class="flex flex-col">
        <div class="m-auto">
          Couldn't find any options matching "${this.searchValue}"
        </div>
        <button-element
          appearance="secondary"
          text="Clear Search"
          class="m-auto pt-2"
          @click=${()=>this.clearSearch()}
        ></button-element>

        <div></div>
      </div>`;if(this.searchValue)return h`<div>
        ${t.map(l=>n(l,!l.isInSearchResults))}
      </div>`;let s=t.filter(l=>l.isImportant),a=t.filter(l=>!l.isImportant);return h`
      ${s.map(l=>n(l,!1))}
      <show-more-divider
        .showMore=${this.showMore}
        @show-more=${this.toggleShowMore}
        class="${i?"hidden":""}"
      ></show-more-divider>
      ${a.map(l=>n(l,!o))}
    `}firstUpdated(){this.updateComplete.then(()=>{let t=Array.from(this.renderRoot.querySelectorAll("*")).find(o=>o.id.toLowerCase().endsWith("-field")&&o instanceof HTMLElement);t&&t.focus()})}handleTreeClickEvent(t,o){let i=t.target.innerText;o&&(this.showMore=!0),setTimeout(()=>{let n=this.querySelector(`#option-${i}`);if(!n)return;n.scrollIntoView({behavior:"smooth",block:"start"});let s=this.querySelector(`#${i}-field`);if(!s)return;let a=new IntersectionObserver(l=>{l[0].isIntersecting&&(s.focus(),a.disconnect())},{rootMargin:"0px",threshold:1});a.observe(n)},100)}clearSearch(){let t=new CustomEvent("clear-search",{});this.dispatchEvent(t)}createRenderRoot(){return this}};m([T()],Mt.prototype,"options",2),m([T()],Mt.prototype,"searchValue",2),m([P()],Mt.prototype,"showMore",2),Mt=m([R("field-list")],Mt);var Bu=r=>r.type==="boolean"?h` <checkbox-field .option=${r}></checkbox-field>`:r.type==="array"?r.items?h` <multiselect-field .option=${r}></multiselect-field> `:h` <array-field .option=${r}></array-field>`:r.items?et(r).length>10?h`<autocomplete-field .option=${r}></autocomplete-field>`:h` <select-field .option=${r}></select-field>`:h` <input-field .option=${r}></input-field>`,Hu=(r,e)=>{let t=r.map(o=>({option:o,isInSearchResults:!e||o.name.includes(e),isImportant:o.isRequired||o["x-priority"]==="important"}));return{optionsWithMetadata:t,numOfImportantOptions:t.filter(o=>o.isImportant).length,numOfOtherOptions:t.filter(o=>!o.isImportant).length}};var zi=class extends U(C){render(){return this.editor==="intellij"?h`
        <div class="relative inline-block w-full">
          <input
            class="${Pe} ${ne} text-foreground w-full rounded px-2 py-2 pl-8 text-black"
            type="text"
            placeholder="Search..."
            @input="${this.handleInput}"
            id="search-bar"
          />
          <icon-element
            icon="search"
            class="absolute left-2 top-[0.7rem]"
          ></icon-element>
          <div class="absolute right-2 top-2.5">
            <kbd
              class="border-fieldBorder bg-selectFieldBackground whitespace-nowrap rounded-md border p-1 shadow"
              >${this.getKeyboardShortcutSymbol()}S</kbd
            >
          </div>
        </div>
      `:h`
        <vscode-text-field
          class="w-full"
          placeholder="Search..."
          type="text"
          @input="${this.handleInput}"
          id="search-bar"
        >
          <span slot="start">
            <icon-element icon="search"></icon-element>
          </span>
          <div slot="end">
            <kbd class="bg-background whitespace-nowrap"
              >${this.getKeyboardShortcutSymbol()}S</kbd
            >
          </div>
        </vscode-text-field>
      `}clearSearch(){let e=this.renderRoot.querySelector(this.editor==="vscode"?"vscode-text-field":"input");e&&(e.value="",e.dispatchEvent(new Event("input")))}getKeyboardShortcutSymbol(){return window.navigator.platform.toLowerCase().includes("mac")?"\u2318":"Ctrl "}createRenderRoot(){return this}handleInput(e){let t=new CustomEvent("search-input",{detail:e.target.value});this.dispatchEvent(t)}};zi=m([R("search-bar")],zi);var Bt=class extends U(C){constructor(){super(...arguments);this.message="";this.type="warning";this.dismissed=!1}dismiss(){this.dismissed=!0}render(){let t=this.type==="error"?"bg-bannerError":"bg-bannerWarning";return this.dismissed?h``:h`
      <div
        class="${t} text-bannerText mt-2 flex w-full flex-row rounded p-2 text-left opacity-80"
      >
        <p class="grow">${this.message}</p>
        <div @click="${this.dismiss}" class="px-2 py-1">
          ${this.editor==="intellij"?h`<icon-element
                icon="close"
                color="${getComputedStyle(this).getPropertyValue("--banner-text-color")}"
              ></icon-element>`:h`<icon-element icon="close"></icon-element>`}
        </div>
      </div>
    `}createRenderRoot(){return this}};m([T()],Bt.prototype,"message",2),m([T()],Bt.prototype,"type",2),m([P()],Bt.prototype,"dismissed",2),Bt=m([R("banner-element")],Bt);var Ht=class extends U(C){constructor(){super(...arguments);this.color="";this.applyFillColor=!1}render(){return this.editor==="intellij"?h`<img
        src="./icons/${this.icon}.svg"
        class="h-[1.25rem]"
        @load="${this.applyColorToSVG}"
      ></img>`:h`<span
        class="codicon codicon-${this.icon}"
        style="text-align: center; font-size: 0.9rem; color: ${this.color}"
      ></span>`}async applyColorToSVG(){if(!this.color)return;let o=await(await fetch(`./icons/${this.icon}.svg`)).text(),n=new DOMParser().parseFromString(o,"image/svg+xml");n.querySelectorAll("path").forEach(l=>{this.applyFillColor&&l.setAttribute("fill",this.color),l.setAttribute("stroke",this.color)});let a=this.querySelector("img");a&&a.remove(),n.documentElement.classList.add("h-[1.25rem]"),this.appendChild(n.documentElement)}createRenderRoot(){return this}};m([T()],Ht.prototype,"icon",2),m([T()],Ht.prototype,"color",2),m([T({type:Boolean})],Ht.prototype,"applyFillColor",2),Ht=m([R("icon-element")],Ht);var kr=class extends _i(C){constructor(){super(...arguments);this.greyedOut=!1}render(){return h`
      <li
        data-cy="field-nav-item-${this.option.name}"
        @click="${this.handleTreeClickEvent}"
        class="${this.shouldRenderError()?"text-error":this.shouldRenderChanged()?"text-primary":this.greyedOut?"text-mutedForeground":"text-foreground"} hover:bg-fieldNavHoverBackground  cursor-pointer overflow-hidden 
          text-ellipsis"
      >
        ${this.option.name}
      </li>
    `}handleTreeClickEvent(){let t=new CustomEvent("click",{detail:this.option.name});this.dispatchEvent(t)}createRenderRoot(){return this}};m([T()],kr.prototype,"option",2),m([T()],kr.prototype,"greyedOut",2),kr=m([R("field-nav-item")],kr);var uo=class extends U(C){constructor(){super(...arguments);this.showMore=!1}render(){return h`
      <div
        class="flex flex-row items-center space-x-4 pl-4"
        @click=${this.toggleShowMore}
        data-cy="show-more"
      >
        <hr
          class="grow h-0 ${this.editor==="intellij"?"border-separator":""}"
          style="${this.editor==="vscode"?"border-top: calc(var(--border-width) * 1px) solid var(--divider-background);":""}"
        />

        <div tabindex="0" aria-role="button" class="flex flex-row gap-2 leading-none focus:ring-1 focus:ring-focusBorder focus:outline-none" @keydown="${this.handleKeyEvent}">${this.showMore?"Show fewer options":"Show all options"} <icon-element icon="${this.showMore?"chevron-up":"chevron-down"}" class="self-center"></div>
      </div>
    `}handleKeyEvent(t){(t.key==="Enter"||t.key===" ")&&this.toggleShowMore(),t.key==="Tab"&&!t.shiftKey&&!this.showMore&&this.toggleShowMore()}toggleShowMore(){this.showMore=!this.showMore,this.dispatchEvent(new CustomEvent("show-more",{detail:this.showMore}))}createRenderRoot(){return this}};m([T()],uo.prototype,"showMore",2),uo=m([R("show-more-divider")],uo);var Ar=class extends U(C){render(){return h`
      <div
        tabindex="0"
        class="bg-badgeBackground text-badgeForeground focus:ring-focusBorder ${this.editorSpecificStyles()} flex flex-row gap-1 rounded p-2 pb-0 focus:outline-none"
        @keydown="${this.handleEnterKeyRemove}"
        data-cy="${this.fieldId}-item"
      >
        <p class="leading-none">${this.text}</p>
        <icon-element
          @click="${this.handleClickRemove}"
          icon="close"
          data-cy="${this.fieldId}-remove-button"
        ></icon-element>
      </div>
    `}editorSpecificStyles(){return this.editor==="intellij"?"border border-fieldBorder focus:ring-2":"focus:ring-1 focus:!ring-offset-1 focus:!ring-offset-background"}handleEnterKeyRemove(t){(t.key==="Enter"||t.key===" ")&&this.dispatchEvent(new CustomEvent("remove"))}handleClickRemove(){this.dispatchEvent(new CustomEvent("remove"))}createRenderRoot(){return this}};m([T()],Ar.prototype,"text",2),m([T()],Ar.prototype,"fieldId",2),Ar=m([R("badge-element")],Ar);var Er=class extends C{constructor(){super();this.content="";this.isPopoverVisible=!1;this.addEventListener("mouseover",this.showTooltip),this.addEventListener("mouseout",this.hideTooltip)}showTooltip(){this.isPopoverVisible=!0}hideTooltip(){this.isPopoverVisible=!1}render(){return h`
      <div class="relative inline-block">
        <slot></slot>
        <div
          class="${this.isPopoverVisible?"block":"hidden"}  tooltip-content border-fieldBorder bg-badgeBackground text-foreground absolute left-0 z-10 w-max max-w-md whitespace-normal border p-1 shadow-md"
          data-cy="popover-content"
        >
          ${this.content}
        </div>
      </div>
    `}createRenderRoot(){return this}};m([T({type:String})],Er.prototype,"content",2),m([P()],Er.prototype,"isPopoverVisible",2),Er=m([R("popover-element")],Er);Cc().register(Vi({prefix:"vscode",styles:Rl,indicator:`
		<svg 
			class="select-indicator"
			part="select-indicator"
			width="16" 
			height="16" 
			viewBox="0 0 16 16" 
			xmlns="http://www.w3.org/2000/svg" 
			fill="currentColor"
		>
			<path 
				fill-rule="evenodd" 
				clip-rule="evenodd" 
				d="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"
			/>
		</svg>
	`}),Vi({prefix:"intellij",styles:Ac,indicator:`<img
        src="./icons/chevron-down.svg"
        class="h-[1.25rem]"
      ></img>`}),Os({prefix:"intellij",styles:Ec}));ol().register(rs(),ds(),is(),ss(),ls());var ho=class extends C{constructor(){super();this.searchValue="";this.icc=new To(this),this.formValuesService=new Oo(this),window.addEventListener("keydown",t=>this.handleGlobalKeyboardShortcuts(t))}render(){let t=this.icc.generatorSchema?.options;return h` <div
      class="text-foreground m-auto flex h-screen max-w-screen-xl flex-col p-6"
    >
      <div
        class="bg-background border-separator sticky top-0 z-50 w-full border-b-2 pb-3"
      >
        ${this.renderHeader()}
      </div>
      <div class="grow overflow-auto">
        ${!t||t.length===0?h`<p>No options</p>`:h` <field-list
              class="h-full"
              .options="${t}"
              .searchValue="${this.searchValue}"
              @clear-search="${()=>this.clearSearch()}"
            ></field-list>`}
      </div>
    </div>`}renderHeader(){let t=this.icc.generatorSchema?.collectionName?.includes("@nx")||this.icc.generatorSchema?.collectionName?.includes("@nrwl"),o=`https://nx.dev/packages/${this.icc.generatorSchema?.collectionName?.replace("@nrwl/","")?.replace("@nx/","")}/generators/${this.icc.generatorSchema?.generatorName}`;return h`
      <div>
        <header class="flex items-center justify-between">
          <div class="flex flex-col flex-wrap items-start gap-2">
            <h1 class="text-xl font-bold leading-none" data-cy="title">
              ${sa(this.icc.generatorSchema)}
            </h1>
            <h2
              class="inline-flex text-lg font-medium leading-none"
              data-cy="subtitle"
            >
              ${this.icc.generatorSchema?.collectionName}
              <popover-element
                class="flex items-center pl-2 text-base"
                .content="${this.icc.generatorSchema?.description}"
              >
                <icon-element class="flex items-start" icon="info">
                </icon-element>
              </popover-element>
            </h2>
          </div>

          <div class="flex shrink-0">
            ${ee(t&&this.icc.editor==="vscode",()=>h`
                  <button-element
                    @click="${()=>this.openNxDev(o)}"
                    title="Open generator documentation on nx.dev"
                    appearance="icon"
                    text="link-external"
                    class="focus:ring-focusBorder flex items-center py-2 pl-3 focus:outline-none focus:ring-1"
                  >
                  </button-element>
                `)}
            <button-element
              class="flex items-center py-2 pl-3"
              appearance="icon"
              text="copy"
              title="Copy generate command to clipboard"
              @click="${()=>this.formValuesService.copyCommandToClipboard()}"
              data-cy="copy-button"
            >
            </button-element>
            ${ee(!this.icc.configuration?.enableTaskExecutionDryRunOnChange,()=>h`<button-element
                    class="py-2 pl-3 sm:hidden"
                    @click="${()=>this.formValuesService.runGenerator(!0)}"
                    text="debug"
                    appearance="icon"
                    title="Dry Run"
                  >
                  </button-element>
                  <button-element
                    class="hidden py-2 pl-3 sm:block"
                    @click="${()=>this.formValuesService.runGenerator(!0)}"
                    text="Dry Run"
                    appearance="secondary"
                  >
                  </button-element> `)}

            <button-element
              class="py-2 pl-3"
              @click="${()=>this.formValuesService.runGenerator()}"
              text="Generate"
              data-cy="generate-button"
            >
            </button-element>
          </div>
        </header>
        ${ee(this.icc.banner,()=>h` <banner-element
              message="${this.icc.banner?.message}"
              type="${this.icc.banner?.type}"
            ></banner-element>`)}
        <div class="mt-5">
          <search-bar
            @search-input="${this.handleSearchValueChange}"
          ></search-bar>
          <cwd-breadcrumb></cwd-breadcrumb>
        </div>
      </div>
    `}handleSearchValueChange(t){this.searchValue=t.detail}clearSearch(){let t=this.renderRoot.querySelector("search-bar");t&&t.clearSearch()}handleGlobalKeyboardShortcuts(t){if(t.key==="Enter"&&(t.metaKey||t.ctrlKey)&&(t.preventDefault(),t.shiftKey?this.formValuesService.runGenerator(!0):this.formValuesService.runGenerator()),t.key==="s"&&(t.metaKey||t.ctrlKey)){t.preventDefault();let o=this.renderRoot.querySelector('[id="search-bar"]');o&&o.focus()}}openNxDev(t){let o=document.createElement("a");o.href=t,o.target="_blank",o.style.display="none",document.body.appendChild(o),o.click(),document.body.removeChild(o)}createRenderRoot(){return this}};m([P()],ho.prototype,"searchValue",2),ho=m([R("root-element")],ho);export{ho as Root};
/*! Bundled license information:

@lit-labs/ssr-dom-shim/lib/element-internals.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/ssr-dom-shim/index.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/node/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/node/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/node/directives/when.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/context/lib/context-request-event.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/context/lib/create-context.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/context/lib/controllers/context-consumer.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/context/lib/value-notifier.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/context/lib/controllers/context-provider.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/context/lib/context-root.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/context/lib/decorators/provide.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/context/lib/decorators/consume.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/context/index.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

tslib/tslib.es6.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

lit-html/node/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/node/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/node/async-directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/node/directives/map.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
