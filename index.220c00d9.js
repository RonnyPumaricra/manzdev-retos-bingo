var Re=Object.defineProperty;var Ae=(o,r,n)=>r in o?Re(o,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[r]=n;var Fe=(o,r)=>()=>(r||o((r={exports:{}}).exports,r),r.exports);var ee=(o,r,n)=>(Ae(o,typeof r!="symbol"?r+"":r,n),n),te=(o,r,n)=>{if(!r.has(o))throw TypeError("Cannot "+n)};var N=(o,r,n)=>(te(o,r,"read from private field"),n?n.call(o):r.get(o)),S=(o,r,n)=>{if(r.has(o))throw TypeError("Cannot add the same private member more than once");r instanceof WeakSet?r.add(o):r.set(o,n)},z=(o,r,n,i)=>(te(o,r,"write to private field"),i?i.call(o,n):r.set(o,n),n);var ze=Fe((De,L)=>{(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const d of a)if(d.type==="childList")for(const y of d.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&i(y)}).observe(document,{childList:!0,subtree:!0});function n(a){const d={};return a.integrity&&(d.integrity=a.integrity),a.referrerpolicy&&(d.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?d.credentials="include":a.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function i(a){if(a.ep)return;a.ep=!0;const d=n(a);fetch(a.href,d)}})();class W extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        color: hsl(0deg 0% 20% / 20%);
        cursor: pointer;
        background-image: radial-gradient(
          #eeeeee,
          currentColor
        );
        border-radius: 50%;
        border: 2px solid black;
        transition: color 200ms;
        user-select: none;
      }
      :host(:hover) {
        color: hsl(221deg 90% 80% / 30%);
      }
      a {
        display: block;
        border-radius: 8px;
        position: relative;
        
        font-size: 1.5rem;
        color: white;
        text-decoration: none;
      }

      a:before {
        content: "";
        position: absolute;
        inset: 0;

        border-radius: inherit;

        background: hsl(20deg 90% 35%);
      }

      div {
        isolation: isolate;
        padding: .5rem 1rem;
        background: hsl(10deg 100% 45%);
        
        border-radius: inherit;

        transition: transform 200ms;
      }

      :host(:hover) div {
        transform: translateY(-0.5rem);
      }
      :host(:active) div {
        transform: translateY(-0.1rem);
        transition-duration: 50ms;
      }
    `}connectedCallback(){this.shadowRoot.innerHTML=`
      <style>${W.styles}</style>
      ${this.render()}
    `}render(){return`
      <a href="#">
        <div>Sacar n\xFAmero</div>
      </a>
    `}}window.customElements.define("bingo-cage",W);class V extends HTMLElement{constructor(){var r;super(),this.userType=this.getAttribute("type"),this.chosenNumbers=(r=this.getAttribute("chosen-numbers"))!=null?r:"",this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        margin: 25px;
        background: var(--primary);
        box-shadow: 2px 2px 8px 0 hsl(0deg 0% 10% / 80%);
        display: flex;
        flex-direction: column;
      }

      h2 {
        margin-block: .5rem;
        color: white;

        font-weight: 600;
        text-transform: uppercase;
        text-align: center;
      }
    `}connectedCallback(){this.shadowRoot.innerHTML=this.render()}render(){return`
      <style>${V.styles}</style>
      <h2>${this.userType}</h2>
      <numbers-wrapper user-type="${this.userType}" amount="15"></numbers-wrapper>
    `}static get observedAttributes(){return["chosen-numbers"]}attributeChangedCallback(r,n,i){r==="chosen-numbers"&&this.shadowRoot.querySelector("numbers-wrapper").setAttribute("chosen-numbers",i)}}customElements.define("bingo-card",V);const Pe=o=>Math.ceil(Math.random()*o),He=(o,r,n=1)=>{const i=[];typeof r>"u"&&(r=o,o=0);for(let a=o;a<r;a+=n)i.push(a);return i};var R;class oe{constructor(r){S(this,R,[]);ee(this,"pullNumber",()=>{const{limit:r}=this,n=He(1,r+1).filter(a=>this.numbersList.indexOf(a)===-1);if(n.length===0)return null;const i=n[Pe(n.length)-1];return this.numbersList.push(i),i});this.limit=r}get numbersList(){return N(this,R)}pullMultiple(r){for(let n=0;n<r;n++)this.pullNumber()}}R=new WeakMap;const ae={player:"0",pc:"0"};function Oe(o){ae[o]="1"}var T;const Y=class extends HTMLElement{constructor(){super();S(this,T,[]);this.attachShadow({mode:"open"}),this.userType=this.getAttribute("user-type"),this.amount=parseInt(this.getAttribute("amount")),this.updateChosenNumbers(),this.innitBingoNumbers()}static get styles(){return`
      :host {
        flex: 1;

        --spacing: 6px;
        /* 
        display: grid;
        grid-template: repeat(3, 1fr) / repeat(5, 1fr);
        */
       display: flex;
       flex-wrap: wrap;
       justify-content: center;

        margin: var(--spacing);
        margin-top: 0;
        gap: var(--spacing);

        font-size: 1.2rem;
        font-weight: 600;
      }
    `}innitBingoNumbers(){const n=new oe(30);n.pullMultiple(this.amount),this.bingoNumbers=n.numbersList}updateChosenNumbers(){var i,a;z(this,T,(a=(i=this.getAttribute("chosen-numbers"))==null?void 0:i.split(" ").map(d=>parseInt(d)))!=null?a:[]);for(const d of N(this,T)){const y=this.shadowRoot.querySelector(`bingo-number[value="${d}"]`);!y||y.hasAttribute("chosen")||y.toggleAttribute("chosen")}this.shadowRoot.querySelectorAll("bingo-number[chosen]").length===this.amount&&Oe(this.userType)}connectedCallback(){this.render()}render(){let n=`
      <style>${Y.styles}</style>
    `;for(const i of this.bingoNumbers)n+=`
        <bingo-number value="${i}"></bingo-number>
      `;this.shadowRoot.innerHTML=n}static get observedAttributes(){return["chosen-numbers"]}attributeChangedCallback(n){n==="chosen-numbers"&&this.updateChosenNumbers()}};let B=Y;T=new WeakMap;window.customElements.define("numbers-wrapper",B);class U extends HTMLElement{constructor(){super(),this.value=this.getAttribute("value")}static get styles(){return`
      bingo-number {
        background: white;
        display: grid;
        place-items: center;

        width: 50px;
        height: 45px;
      }
      bingo-number[chosen] {
        background: transparent;
        text-decoration: line-through;
      }

      
    `}connectedCallback(){this.render()}render(){this.innerHTML=`
      <style>${U.styles}</style>
      ${this.value}
    `}}window.customElements.define("bingo-number",U);var k;const Z=class extends HTMLElement{constructor(){super();S(this,k,[]);this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        border: 2px solid white;
        grid-column: 1 / 4;

        display: flex;
        flex-wrap: wrap;
        align-items: start;
        align-content: start;
        padding: 20px;
        gap: 4px;
      }
      bingo-number {

        font-size: ${20/16}rem;
        font-weight: 600;

      }
    `}updateChosenNumbers(){var n,i;z(this,k,(i=(n=this.getAttribute("chosen-numbers"))==null?void 0:n.split(" ").map(a=>parseInt(a)))!=null?i:[])}connectedCallback(){this.render()}render(){let n=`
      <style>${Z.styles}</style>
    `;for(const i of N(this,k))n+=`
        <bingo-number value="${i}"></bingo-number>
      `;this.shadowRoot.innerHTML=n}static get observedAttributes(){return["chosen-numbers"]}attributeChangedCallback(n,i,a){n==="chosen-numbers"&&(this.updateChosenNumbers(),this.render())}};let D=Z;k=new WeakMap;window.customElements.define("chosen-numbers-wrapper",D);class j extends HTMLElement{constructor(){super(),console.log("Here"),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        background: hsl(0deg 0% 0% / 30%);
        position: fixed;
        inset: 0;

        display: grid;
        place-items: center;
      }
      .modal {
        width: 500px;
        padding: 2rem 1rem;
        border-radius: 10px;
        box-shadow: 
          5px 3px 30px hsl(0deg 0% 0% / 90%),
          5px 3px 10px 5px hsl(0deg 0% 0% / 30%);
        background: white;
      }
      slot[name="title"] {
        margin: 0;
      }
    `}connectedCallback(){this.render()}disconnectedCallback(){}render(){this.shadowRoot.innerHTML=`
      <style>${j.styles}</style>
      <div class="modal">
        <slot name="title"></slot>
      </div>
    `}}console.log("here");customElements.define("modal-wrapper",j);var L={};(function o(r,n,i,a){var d=!!(r.Worker&&r.Blob&&r.Promise&&r.OffscreenCanvas&&r.OffscreenCanvasRenderingContext2D&&r.HTMLCanvasElement&&r.HTMLCanvasElement.prototype.transferControlToOffscreen&&r.URL&&r.URL.createObjectURL);function y(){}function A(t){var e=n.exports.Promise,u=e!==void 0?e:r.Promise;return typeof u=="function"?new u(t):(t(y,y),null)}var F=function(){var t=Math.floor(16.666666666666668),e,u,s={},m=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(e=function(h){var l=Math.random();return s[l]=requestAnimationFrame(function c(b){m===b||m+t-1<b?(m=b,delete s[l],h()):s[l]=requestAnimationFrame(c)}),l},u=function(h){s[h]&&cancelAnimationFrame(s[h])}):(e=function(h){return setTimeout(h,t)},u=function(h){return clearTimeout(h)}),{frame:e,cancel:u}}(),le=function(){var t,e,u={};function s(m){function h(l,c){m.postMessage({options:l||{},callback:c})}m.init=function(c){var b=c.transferControlToOffscreen();m.postMessage({canvas:b},[b])},m.fire=function(c,b,M){if(e)return h(c,null),e;var f=Math.random().toString(36).slice(2);return e=A(function(w){function v(g){g.data.callback===f&&(delete u[f],m.removeEventListener("message",v),e=null,M(),w())}m.addEventListener("message",v),h(c,f),u[f]=v.bind(null,{data:{callback:f}})}),e},m.reset=function(){m.postMessage({reset:!0});for(var c in u)u[c](),delete u[c]}}return function(){if(t)return t;if(!i&&d){var m=["var CONFETTI, SIZE = {}, module = {};","("+o.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{t=new Worker(URL.createObjectURL(new Blob([m])))}catch(h){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("\u{1F38A} Could not load worker",h),null}s(t)}return t}}(),ce={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function ue(t,e){return e?e(t):t}function de(t){return t!=null}function p(t,e,u){return ue(t&&de(t[e])?t[e]:ce[e],u)}function he(t){return t<0?0:Math.floor(t)}function me(t,e){return Math.floor(Math.random()*(e-t))+t}function P(t){return parseInt(t,16)}function fe(t){return t.map(ge)}function ge(t){var e=String(t).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:P(e.substring(0,2)),g:P(e.substring(2,4)),b:P(e.substring(4,6))}}function be(t){var e=p(t,"origin",Object);return e.x=p(e,"x",Number),e.y=p(e,"y",Number),e}function pe(t){t.width=document.documentElement.clientWidth,t.height=document.documentElement.clientHeight}function ye(t){var e=t.getBoundingClientRect();t.width=e.width,t.height=e.height}function ve(t){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=t,e}function we(t,e,u,s,m,h,l,c,b){t.save(),t.translate(e,u),t.rotate(h),t.scale(s,m),t.arc(0,0,1,l,c,b),t.restore()}function Me(t){var e=t.angle*(Math.PI/180),u=t.spread*(Math.PI/180);return{x:t.x,y:t.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:t.startVelocity*.5+Math.random()*t.startVelocity,angle2D:-e+(.5*u-Math.random()*u),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:t.color,shape:t.shape,tick:0,totalTicks:t.ticks,decay:t.decay,drift:t.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:t.gravity*3,ovalScalar:.6,scalar:t.scalar}}function xe(t,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.wobble+=e.wobbleSpeed,e.velocity*=e.decay,e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble);var u=e.tick++/e.totalTicks,s=e.x+e.random*e.tiltCos,m=e.y+e.random*e.tiltSin,h=e.wobbleX+e.random*e.tiltCos,l=e.wobbleY+e.random*e.tiltSin;if(t.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-u)+")",t.beginPath(),e.shape==="circle")t.ellipse?t.ellipse(e.x,e.y,Math.abs(h-s)*e.ovalScalar,Math.abs(l-m)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):we(t,e.x,e.y,Math.abs(h-s)*e.ovalScalar,Math.abs(l-m)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI);else if(e.shape==="star")for(var c=Math.PI/2*3,b=4*e.scalar,M=8*e.scalar,f=e.x,w=e.y,v=5,g=Math.PI/v;v--;)f=e.x+Math.cos(c)*M,w=e.y+Math.sin(c)*M,t.lineTo(f,w),c+=g,f=e.x+Math.cos(c)*b,w=e.y+Math.sin(c)*b,t.lineTo(f,w),c+=g;else t.moveTo(Math.floor(e.x),Math.floor(e.y)),t.lineTo(Math.floor(e.wobbleX),Math.floor(m)),t.lineTo(Math.floor(h),Math.floor(l)),t.lineTo(Math.floor(s),Math.floor(e.wobbleY));return t.closePath(),t.fill(),e.tick<e.totalTicks}function Ce(t,e,u,s,m){var h=e.slice(),l=t.getContext("2d"),c,b,M=A(function(f){function w(){c=b=null,l.clearRect(0,0,s.width,s.height),m(),f()}function v(){i&&!(s.width===a.width&&s.height===a.height)&&(s.width=t.width=a.width,s.height=t.height=a.height),!s.width&&!s.height&&(u(t),s.width=t.width,s.height=t.height),l.clearRect(0,0,s.width,s.height),h=h.filter(function(g){return xe(l,g)}),h.length?c=F.frame(v):w()}c=F.frame(v),b=w});return{addFettis:function(f){return h=h.concat(f),M},canvas:t,promise:M,reset:function(){c&&F.cancel(c),b&&b()}}}function X(t,e){var u=!t,s=!!p(e||{},"resize"),m=p(e,"disableForReducedMotion",Boolean),h=d&&!!p(e||{},"useWorker"),l=h?le():null,c=u?pe:ye,b=t&&l?!!t.__confetti_initialized:!1,M=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,f;function w(g,O,$){for(var C=p(g,"particleCount",he),E=p(g,"angle",Number),I=p(g,"spread",Number),x=p(g,"startVelocity",Number),Te=p(g,"decay",Number),ke=p(g,"gravity",Number),Le=p(g,"drift",Number),K=p(g,"colors",fe),Ee=p(g,"ticks",Number),J=p(g,"shapes"),Ie=p(g,"scalar"),Q=be(g),_=C,q=[],Ne=t.width*Q.x,Se=t.height*Q.y;_--;)q.push(Me({x:Ne,y:Se,angle:E,spread:I,startVelocity:x,color:K[_%K.length],shape:J[me(0,J.length)],ticks:Ee,decay:Te,gravity:ke,drift:Le,scalar:Ie}));return f?f.addFettis(q):(f=Ce(t,q,c,O,$),f.promise)}function v(g){var O=m||p(g,"disableForReducedMotion",Boolean),$=p(g,"zIndex",Number);if(O&&M)return A(function(x){x()});u&&f?t=f.canvas:u&&!t&&(t=ve($),document.body.appendChild(t)),s&&!b&&c(t);var C={width:t.width,height:t.height};l&&!b&&l.init(t),b=!0,l&&(t.__confetti_initialized=!0);function E(){if(l){var x={getBoundingClientRect:function(){if(!u)return t.getBoundingClientRect()}};c(x),l.postMessage({resize:{width:x.width,height:x.height}});return}C.width=C.height=null}function I(){f=null,s&&r.removeEventListener("resize",E),u&&t&&(document.body.removeChild(t),t=null,b=!1)}return s&&r.addEventListener("resize",E,!1),l?l.fire(g,C,I):w(g,C,I)}return v.reset=function(){l&&l.reset(),f&&f.reset()},v}var H;function G(){return H||(H=X(null,{useWorker:!0,resize:!0})),H}n.exports=function(){return G().apply(this,arguments)},n.exports.reset=function(){G().reset()},n.exports.create=X})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),L,!1);const re=L.exports;L.exports.create;const ne=new oe(30);function ie(){if(ne.pullNumber()===null)throw new Error("Todos los n\xFAmeros fueron elegidos");const r=ne.numbersList.join(" "),n=document.querySelectorAll("bingo-card");document.querySelector("chosen-numbers-wrapper").setAttribute("chosen-numbers",r);for(const y of n)y.setAttribute("chosen-numbers",r);const{pc:a,player:d}=ae;d+a!=="00"&&$e(d+a)}function $e(o){se.removeEventListener("click",ie);const r=i=>`
    <h2 slot="title">${i}</h2>
  `,n=document.createElement("modal-wrapper");switch(o){case"10":qe(),n.innerHTML=r("Ganaste!");break;case"01":n.innerHTML=r("Uy, perdiste!");break;case"11":console.log("Empatados!"),n.innerHTML=r("Empatados!");break}document.body.appendChild(n)}function qe(){console.log("Ganaste!");const o=15*1e3,r=Date.now()+o,n={startVelocity:30,spread:360,ticks:60,zIndex:0};function i(d,y){return Math.random()*(y-d)+d}const a=setInterval(function(){const d=r-Date.now();if(d<=0)return clearInterval(a);const y=50*(d/o);re(Object.assign({},n,{particleCount:y,origin:{x:i(.1,.3),y:Math.random()-.2}})),re(Object.assign({},n,{particleCount:y,origin:{x:i(.7,.9),y:Math.random()-.2}}))},250)}const se=document.querySelector("bingo-cage");se.addEventListener("click",ie)});export default ze();
