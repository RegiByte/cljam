const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/VPLocalSearchBox.DiUTBZCg.js","assets/chunks/framework.CelxvRDJ.js","assets/chunks/editor.main.BRye-Z7e.js","assets/chunks/clojure-tokens.Co1bCbEI.js","assets/chunks/clojure.Dnu-v4kV.js","assets/chunks/find-form.djrglYpo.js"])))=>i.map(i=>d[i]);
var Ks=Object.defineProperty;var Ws=(t,e,n)=>e in t?Ks(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var fe=(t,e,n)=>Ws(t,typeof e!="symbol"?e+"":e,n);import{d as G,c as j,r as F,n as X,o as b,a as Ke,t as Q,b as D,w as A,T as Ln,e as E,_ as V,u as Js,i as Qs,f as Ys,g as Tn,h as B,j as _,k as M,l as dt,m as $n,p as U,q as De,s as an,v as Ve,x as ln,y as Gn,z as Xs,A as Zs,F as Z,B as ce,C as ft,D as cn,E as O,G as Fr,H as Ge,I as Rr,J as un,K as Ze,L as dn,M as eo,N as Ar,O as Mn,P as bt,Q as Ir,R as fn,S as to,U as no,V as Ut,W as Cr,X as Pr,Y as ro,Z as so,$ as oo,a0 as ao,a1 as io,a2 as Nr,a3 as lo,a4 as co,a5 as uo}from"./framework.CelxvRDJ.js";const fo=G({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(t){return(e,n)=>(b(),j("span",{class:X(["VPBadge",t.type])},[F(e.$slots,"default",{},()=>[Ke(Q(t.text),1)])],2))}}),mo={key:0,class:"VPBackdrop"},po=G({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(t){return(e,n)=>(b(),D(Ln,{name:"fade"},{default:A(()=>[t.show?(b(),j("div",mo)):E("",!0)]),_:1}))}}),ho=V(po,[["__scopeId","data-v-9673e600"]]),K=Js;function go(t,e){let n,r=!1;return()=>{n&&clearTimeout(n),r?n=setTimeout(t,e):(t(),(r=!0)&&setTimeout(()=>r=!1,e))}}function qn(t){return t.startsWith("/")?t:`/${t}`}function On(t){const{pathname:e,search:n,hash:r,protocol:s}=new URL(t,"http://a.com");if(Qs(t)||t.startsWith("#")||!s.startsWith("http")||!Ys(e))return t;const{site:a}=K(),i=e.endsWith("/")||e.endsWith(".html")?t:t.replace(/(?:(^\.+)\/)?.*$/,`$1${e.replace(/(\.md)?$/,a.value.cleanUrls?"":".html")}${n}${r}`);return Tn(i)}function Tt({correspondingLink:t=!1}={}){const{site:e,localeIndex:n,page:r,theme:s,hash:a}=K(),i=B(()=>{var l,d;return{label:(l=e.value.locales[n.value])==null?void 0:l.label,link:((d=e.value.locales[n.value])==null?void 0:d.link)||(n.value==="root"?"/":`/${n.value}/`)}});return{localeLinks:B(()=>Object.entries(e.value.locales).flatMap(([l,d])=>i.value.label===d.label?[]:{text:d.label,link:vo(d.link||(l==="root"?"/":`/${l}/`),s.value.i18nRouting!==!1&&t,r.value.relativePath.slice(i.value.link.length-1),!e.value.cleanUrls)+a.value})),currentLang:i}}function vo(t,e,n,r){return e?t.replace(/\/$/,"")+qn(n.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,r?".html":"")):t}const yo={class:"NotFound"},wo={class:"code"},bo={class:"title"},ko={class:"quote"},xo={class:"action"},$o=["href","aria-label"],Mo=G({__name:"NotFound",setup(t){const{theme:e}=K(),{currentLang:n}=Tt();return(r,s)=>{var a,i,c,l,d;return b(),j("div",yo,[_("p",wo,Q(((a=M(e).notFound)==null?void 0:a.code)??"404"),1),_("h1",bo,Q(((i=M(e).notFound)==null?void 0:i.title)??"PAGE NOT FOUND"),1),s[0]||(s[0]=_("div",{class:"divider"},null,-1)),_("blockquote",ko,Q(((c=M(e).notFound)==null?void 0:c.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),_("div",xo,[_("a",{class:"link",href:M(Tn)(M(n).link),"aria-label":((l=M(e).notFound)==null?void 0:l.linkLabel)??"go to home"},Q(((d=M(e).notFound)==null?void 0:d.linkText)??"Take me home"),9,$o)])])}}}),qo=V(Mo,[["__scopeId","data-v-d2ea4861"]]);function Er(t,e){if(Array.isArray(t))return Kt(t);if(t==null)return[];e=qn(e);const n=Object.keys(t).sort((s,a)=>a.split("/").length-s.split("/").length).find(s=>e.startsWith(qn(s))),r=n?t[n]:[];return Array.isArray(r)?Kt(r):Kt(r.items,r.base)}function So(t){const e=[];let n=0;for(const r in t){const s=t[r];if(s.items){n=e.push(s);continue}e[n]||e.push({items:[]}),e[n].items.push(s)}return e}function jo(t){const e=[];function n(r){for(const s of r)s.text&&s.link&&e.push({text:s.text,link:s.link,docFooterText:s.docFooterText}),s.items&&n(s.items)}return n(t),e}function Sn(t,e){return Array.isArray(e)?e.some(n=>Sn(t,n)):dt(t,e.link)?!0:e.items?Sn(t,e.items):!1}function Kt(t,e){return[...t].map(n=>{const r={...n},s=r.base||e;return s&&r.link&&(r.link=s+r.link),r.items&&(r.items=Kt(r.items,s)),r})}function Je(){const{frontmatter:t,page:e,theme:n}=K(),r=$n("(min-width: 960px)"),s=U(!1),a=B(()=>{const $=n.value.sidebar,S=e.value.relativePath;return $?Er($,S):[]}),i=U(a.value);De(a,($,S)=>{JSON.stringify($)!==JSON.stringify(S)&&(i.value=a.value)});const c=B(()=>t.value.sidebar!==!1&&i.value.length>0&&t.value.layout!=="home"),l=B(()=>d?t.value.aside==null?n.value.aside==="left":t.value.aside==="left":!1),d=B(()=>t.value.layout==="home"?!1:t.value.aside!=null?!!t.value.aside:n.value.aside!==!1),m=B(()=>c.value&&r.value),p=B(()=>c.value?So(i.value):[]);function h(){s.value=!0}function y(){s.value=!1}function w(){s.value?y():h()}return{isOpen:s,sidebar:i,sidebarGroups:p,hasSidebar:c,hasAside:d,leftAside:l,isSidebarEnabled:m,open:h,close:y,toggle:w}}function _o(t,e){let n;an(()=>{n=t.value?document.activeElement:void 0}),Ve(()=>{window.addEventListener("keyup",r)}),ln(()=>{window.removeEventListener("keyup",r)});function r(s){s.key==="Escape"&&t.value&&(e(),n==null||n.focus())}}function Fo(t){const{page:e,hash:n}=K(),r=U(!1),s=B(()=>t.value.collapsed!=null),a=B(()=>!!t.value.link),i=U(!1),c=()=>{i.value=dt(e.value.relativePath,t.value.link)};De([e,t,n],c),Ve(c);const l=B(()=>i.value?!0:t.value.items?Sn(e.value.relativePath,t.value.items):!1),d=B(()=>!!(t.value.items&&t.value.items.length));an(()=>{r.value=!!(s.value&&t.value.collapsed)}),Gn(()=>{(i.value||l.value)&&(r.value=!1)});function m(){s.value&&(r.value=!r.value)}return{collapsed:r,collapsible:s,isLink:a,isActiveLink:i,hasActiveLink:l,hasChildren:d,toggle:m}}function Ro(){const{hasSidebar:t}=Je(),e=$n("(min-width: 960px)"),n=$n("(min-width: 1280px)");return{isAsideEnabled:B(()=>!n.value&&!e.value?!1:t.value?n.value:e.value)}}const Ao=/\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/,jn=[];function Lr(t){return typeof t.outline=="object"&&!Array.isArray(t.outline)&&t.outline.label||t.outlineTitle||"On this page"}function Dn(t){const e=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(n=>n.id&&n.hasChildNodes()).map(n=>{const r=Number(n.tagName[1]);return{element:n,title:Io(n),link:"#"+n.id,level:r}});return Co(e,t)}function Io(t){let e="";for(const n of t.childNodes)if(n.nodeType===1){if(Ao.test(n.className))continue;e+=n.textContent}else n.nodeType===3&&(e+=n.textContent);return e.trim()}function Co(t,e){if(e===!1)return[];const n=(typeof e=="object"&&!Array.isArray(e)?e.level:e)||2,[r,s]=typeof n=="number"?[n,n]:n==="deep"?[2,6]:n;return Eo(t,r,s)}function Po(t,e){const{isAsideEnabled:n}=Ro(),r=go(a,100);let s=null;Ve(()=>{requestAnimationFrame(a),window.addEventListener("scroll",r)}),Xs(()=>{i(location.hash)}),ln(()=>{window.removeEventListener("scroll",r)});function a(){if(!n.value)return;const c=window.scrollY,l=window.innerHeight,d=document.body.offsetHeight,m=Math.abs(c+l-d)<1,p=jn.map(({element:y,link:w})=>({link:w,top:No(y)})).filter(({top:y})=>!Number.isNaN(y)).sort((y,w)=>y.top-w.top);if(!p.length){i(null);return}if(c<1){i(null);return}if(m){i(p[p.length-1].link);return}let h=null;for(const{link:y,top:w}of p){if(w>c+Zs()+4)break;h=y}i(h)}function i(c){s&&s.classList.remove("active"),c==null?s=null:s=t.value.querySelector(`a[href="${decodeURIComponent(c)}"]`);const l=s;l?(l.classList.add("active"),e.value.style.top=l.offsetTop+39+"px",e.value.style.opacity="1"):(e.value.style.top="33px",e.value.style.opacity="0")}}function No(t){let e=0;for(;t!==document.body;){if(t===null)return NaN;e+=t.offsetTop,t=t.offsetParent}return e}function Eo(t,e,n){jn.length=0;const r=[],s=[];return t.forEach(a=>{const i={...a,children:[]};let c=s[s.length-1];for(;c&&c.level>=i.level;)s.pop(),c=s[s.length-1];if(i.element.classList.contains("ignore-header")||c&&"shouldIgnore"in c){s.push({level:i.level,shouldIgnore:!0});return}i.level>n||i.level<e||(jn.push({element:i.element,link:i.link}),c?c.children.push(i):r.push(i),s.push(i))}),r}const Lo=["href","title"],To=G({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(t){function e({target:n}){const r=n.href.split("#")[1],s=document.getElementById(decodeURIComponent(r));s==null||s.focus({preventScroll:!0})}return(n,r)=>{const s=ft("VPDocOutlineItem",!0);return b(),j("ul",{class:X(["VPDocOutlineItem",t.root?"root":"nested"])},[(b(!0),j(Z,null,ce(t.headers,({children:a,link:i,title:c})=>(b(),j("li",null,[_("a",{class:"outline-link",href:i,onClick:e,title:c},Q(c),9,Lo),a!=null&&a.length?(b(),D(s,{key:0,headers:a},null,8,["headers"])):E("",!0)]))),256))],2)}}}),Tr=V(To,[["__scopeId","data-v-b64e4577"]]),Go={class:"content"},Oo={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},Do=G({__name:"VPDocAsideOutline",setup(t){const{frontmatter:e,theme:n}=K(),r=Fr([]);cn(()=>{r.value=Dn(e.value.outline??n.value.outline)});const s=U(),a=U();return Po(s,a),(i,c)=>(b(),j("nav",{"aria-labelledby":"doc-outline-aria-label",class:X(["VPDocAsideOutline",{"has-outline":r.value.length>0}]),ref_key:"container",ref:s},[_("div",Go,[_("div",{class:"outline-marker",ref_key:"marker",ref:a},null,512),_("div",Oo,Q(M(Lr)(M(n))),1),O(Tr,{headers:r.value,root:!0},null,8,["headers"])])],2))}}),zo=V(Do,[["__scopeId","data-v-979e7a05"]]),Vo={class:"VPDocAsideCarbonAds"},Bo=G({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(t){const e=()=>null;return(n,r)=>(b(),j("div",Vo,[O(M(e),{"carbon-ads":t.carbonAds},null,8,["carbon-ads"])]))}}),Ho={class:"VPDocAside"},Uo=G({__name:"VPDocAside",setup(t){const{theme:e}=K();return(n,r)=>(b(),j("div",Ho,[F(n.$slots,"aside-top",{},void 0,!0),F(n.$slots,"aside-outline-before",{},void 0,!0),O(zo),F(n.$slots,"aside-outline-after",{},void 0,!0),r[0]||(r[0]=_("div",{class:"spacer"},null,-1)),F(n.$slots,"aside-ads-before",{},void 0,!0),M(e).carbonAds?(b(),D(Bo,{key:0,"carbon-ads":M(e).carbonAds},null,8,["carbon-ads"])):E("",!0),F(n.$slots,"aside-ads-after",{},void 0,!0),F(n.$slots,"aside-bottom",{},void 0,!0)]))}}),Ko=V(Uo,[["__scopeId","data-v-6310e5ec"]]);function Wo(){const{theme:t,page:e}=K();return B(()=>{const{text:n="Edit this page",pattern:r=""}=t.value.editLink||{};let s;return typeof r=="function"?s=r(e.value):s=r.replace(/:path/g,e.value.filePath),{url:s,text:n}})}function Jo(){const{page:t,theme:e,frontmatter:n}=K();return B(()=>{var d,m,p,h,y,w,$,S;const r=Er(e.value.sidebar,t.value.relativePath),s=jo(r),a=Qo(s,P=>P.link.replace(/[?#].*$/,"")),i=a.findIndex(P=>dt(t.value.relativePath,P.link)),c=((d=e.value.docFooter)==null?void 0:d.prev)===!1&&!n.value.prev||n.value.prev===!1,l=((m=e.value.docFooter)==null?void 0:m.next)===!1&&!n.value.next||n.value.next===!1;return{prev:c?void 0:{text:(typeof n.value.prev=="string"?n.value.prev:typeof n.value.prev=="object"?n.value.prev.text:void 0)??((p=a[i-1])==null?void 0:p.docFooterText)??((h=a[i-1])==null?void 0:h.text),link:(typeof n.value.prev=="object"?n.value.prev.link:void 0)??((y=a[i-1])==null?void 0:y.link)},next:l?void 0:{text:(typeof n.value.next=="string"?n.value.next:typeof n.value.next=="object"?n.value.next.text:void 0)??((w=a[i+1])==null?void 0:w.docFooterText)??(($=a[i+1])==null?void 0:$.text),link:(typeof n.value.next=="object"?n.value.next.link:void 0)??((S=a[i+1])==null?void 0:S.link)}}})}function Qo(t,e){const n=new Set;return t.filter(r=>{const s=e(r);return n.has(s)?!1:n.add(s)})}const Oe=G({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(t){const e=t,n=B(()=>e.tag??(e.href?"a":"span")),r=B(()=>e.href&&Rr.test(e.href)||e.target==="_blank");return(s,a)=>(b(),D(Ge(n.value),{class:X(["VPLink",{link:t.href,"vp-external-link-icon":r.value,"no-icon":t.noIcon}]),href:t.href?M(On)(t.href):void 0,target:t.target??(r.value?"_blank":void 0),rel:t.rel??(r.value?"noreferrer":void 0)},{default:A(()=>[F(s.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),Yo={class:"VPLastUpdated"},Xo=["datetime"],Zo=G({__name:"VPDocFooterLastUpdated",setup(t){const{theme:e,page:n,lang:r}=K(),s=B(()=>new Date(n.value.lastUpdated)),a=B(()=>s.value.toISOString()),i=U("");return Ve(()=>{an(()=>{var c,l,d;i.value=new Intl.DateTimeFormat((l=(c=e.value.lastUpdated)==null?void 0:c.formatOptions)!=null&&l.forceLocale?r.value:void 0,((d=e.value.lastUpdated)==null?void 0:d.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(s.value)})}),(c,l)=>{var d;return b(),j("p",Yo,[Ke(Q(((d=M(e).lastUpdated)==null?void 0:d.text)||M(e).lastUpdatedText||"Last updated")+": ",1),_("time",{datetime:a.value},Q(i.value),9,Xo)])}}}),ea=V(Zo,[["__scopeId","data-v-1ed91b7d"]]),ta={key:0,class:"VPDocFooter"},na={key:0,class:"edit-info"},ra={key:0,class:"edit-link"},sa={key:1,class:"last-updated"},oa={key:1,class:"prev-next","aria-labelledby":"doc-footer-aria-label"},aa={class:"pager"},ia=["innerHTML"],la=["innerHTML"],ca={class:"pager"},ua=["innerHTML"],da=["innerHTML"],fa=G({__name:"VPDocFooter",setup(t){const{theme:e,page:n,frontmatter:r}=K(),s=Wo(),a=Jo(),i=B(()=>e.value.editLink&&r.value.editLink!==!1),c=B(()=>n.value.lastUpdated),l=B(()=>i.value||c.value||a.value.prev||a.value.next);return(d,m)=>{var p,h,y,w;return l.value?(b(),j("footer",ta,[F(d.$slots,"doc-footer-before",{},void 0,!0),i.value||c.value?(b(),j("div",na,[i.value?(b(),j("div",ra,[O(Oe,{class:"edit-link-button",href:M(s).url,"no-icon":!0},{default:A(()=>[m[0]||(m[0]=_("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),Ke(" "+Q(M(s).text),1)]),_:1},8,["href"])])):E("",!0),c.value?(b(),j("div",sa,[O(ea)])):E("",!0)])):E("",!0),(p=M(a).prev)!=null&&p.link||(h=M(a).next)!=null&&h.link?(b(),j("nav",oa,[m[1]||(m[1]=_("span",{class:"visually-hidden",id:"doc-footer-aria-label"},"Pager",-1)),_("div",aa,[(y=M(a).prev)!=null&&y.link?(b(),D(Oe,{key:0,class:"pager-link prev",href:M(a).prev.link},{default:A(()=>{var $;return[_("span",{class:"desc",innerHTML:(($=M(e).docFooter)==null?void 0:$.prev)||"Previous page"},null,8,ia),_("span",{class:"title",innerHTML:M(a).prev.text},null,8,la)]}),_:1},8,["href"])):E("",!0)]),_("div",ca,[(w=M(a).next)!=null&&w.link?(b(),D(Oe,{key:0,class:"pager-link next",href:M(a).next.link},{default:A(()=>{var $;return[_("span",{class:"desc",innerHTML:(($=M(e).docFooter)==null?void 0:$.next)||"Next page"},null,8,ua),_("span",{class:"title",innerHTML:M(a).next.text},null,8,da)]}),_:1},8,["href"])):E("",!0)])])):E("",!0)])):E("",!0)}}}),ma=V(fa,[["__scopeId","data-v-56cbdde3"]]),pa={class:"container"},ha={class:"aside-container"},ga={class:"aside-content"},va={class:"content"},ya={class:"content-container"},wa={class:"main"},ba=G({__name:"VPDoc",setup(t){const{theme:e}=K(),n=un(),{hasSidebar:r,hasAside:s,leftAside:a}=Je(),i=B(()=>n.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(c,l)=>{const d=ft("Content");return b(),j("div",{class:X(["VPDoc",{"has-sidebar":M(r),"has-aside":M(s)}])},[F(c.$slots,"doc-top",{},void 0,!0),_("div",pa,[M(s)?(b(),j("div",{key:0,class:X(["aside",{"left-aside":M(a)}])},[l[0]||(l[0]=_("div",{class:"aside-curtain"},null,-1)),_("div",ha,[_("div",ga,[O(Ko,null,{"aside-top":A(()=>[F(c.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":A(()=>[F(c.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":A(()=>[F(c.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":A(()=>[F(c.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":A(()=>[F(c.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":A(()=>[F(c.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):E("",!0),_("div",va,[_("div",ya,[F(c.$slots,"doc-before",{},void 0,!0),_("main",wa,[O(d,{class:X(["vp-doc",[i.value,M(e).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),O(ma,null,{"doc-footer-before":A(()=>[F(c.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),F(c.$slots,"doc-after",{},void 0,!0)])])]),F(c.$slots,"doc-bottom",{},void 0,!0)],2)}}}),ka=V(ba,[["__scopeId","data-v-3271ff7f"]]),xa=G({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(t){const e=t,n=B(()=>e.href&&Rr.test(e.href)),r=B(()=>e.tag||(e.href?"a":"button"));return(s,a)=>(b(),D(Ge(r.value),{class:X(["VPButton",[t.size,t.theme]]),href:t.href?M(On)(t.href):void 0,target:e.target??(n.value?"_blank":void 0),rel:e.rel??(n.value?"noreferrer":void 0)},{default:A(()=>[Ke(Q(t.text),1)]),_:1},8,["class","href","target","rel"]))}}),$a=V(xa,[["__scopeId","data-v-0e637d12"]]),Ma=["src","alt"],qa=G({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(t){return(e,n)=>{const r=ft("VPImage",!0);return t.image?(b(),j(Z,{key:0},[typeof t.image=="string"||"src"in t.image?(b(),j("img",Ze({key:0,class:"VPImage"},typeof t.image=="string"?e.$attrs:{...t.image,...e.$attrs},{src:M(Tn)(typeof t.image=="string"?t.image:t.image.src),alt:t.alt??(typeof t.image=="string"?"":t.image.alt||"")}),null,16,Ma)):(b(),j(Z,{key:1},[O(r,Ze({class:"dark",image:t.image.dark,alt:t.image.alt},e.$attrs),null,16,["image","alt"]),O(r,Ze({class:"light",image:t.image.light,alt:t.image.alt},e.$attrs),null,16,["image","alt"])],64))],64)):E("",!0)}}}),Zt=V(qa,[["__scopeId","data-v-cdc2dfc5"]]),Sa={class:"container"},ja={class:"main"},_a={class:"heading"},Fa=["innerHTML"],Ra=["innerHTML"],Aa=["innerHTML"],Ia={key:0,class:"actions"},Ca={key:0,class:"image"},Pa={class:"image-container"},Na=G({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(t){const e=dn("hero-image-slot-exists");return(n,r)=>(b(),j("div",{class:X(["VPHero",{"has-image":t.image||M(e)}])},[_("div",Sa,[_("div",ja,[F(n.$slots,"home-hero-info-before",{},void 0,!0),F(n.$slots,"home-hero-info",{},()=>[_("h1",_a,[t.name?(b(),j("span",{key:0,innerHTML:t.name,class:"name clip"},null,8,Fa)):E("",!0),t.text?(b(),j("span",{key:1,innerHTML:t.text,class:"text"},null,8,Ra)):E("",!0)]),t.tagline?(b(),j("p",{key:0,innerHTML:t.tagline,class:"tagline"},null,8,Aa)):E("",!0)],!0),F(n.$slots,"home-hero-info-after",{},void 0,!0),t.actions?(b(),j("div",Ia,[(b(!0),j(Z,null,ce(t.actions,s=>(b(),j("div",{key:s.link,class:"action"},[O($a,{tag:"a",size:"medium",theme:s.theme,text:s.text,href:s.link,target:s.target,rel:s.rel},null,8,["theme","text","href","target","rel"])]))),128))])):E("",!0),F(n.$slots,"home-hero-actions-after",{},void 0,!0)]),t.image||M(e)?(b(),j("div",Ca,[_("div",Pa,[r[0]||(r[0]=_("div",{class:"image-bg"},null,-1)),F(n.$slots,"home-hero-image",{},()=>[t.image?(b(),D(Zt,{key:0,class:"image-src",image:t.image},null,8,["image"])):E("",!0)],!0)])])):E("",!0)])],2))}}),Ea=V(Na,[["__scopeId","data-v-f7c2e3f1"]]),La=G({__name:"VPHomeHero",setup(t){const{frontmatter:e}=K();return(n,r)=>M(e).hero?(b(),D(Ea,{key:0,class:"VPHomeHero",name:M(e).hero.name,text:M(e).hero.text,tagline:M(e).hero.tagline,image:M(e).hero.image,actions:M(e).hero.actions},{"home-hero-info-before":A(()=>[F(n.$slots,"home-hero-info-before")]),"home-hero-info":A(()=>[F(n.$slots,"home-hero-info")]),"home-hero-info-after":A(()=>[F(n.$slots,"home-hero-info-after")]),"home-hero-actions-after":A(()=>[F(n.$slots,"home-hero-actions-after")]),"home-hero-image":A(()=>[F(n.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):E("",!0)}}),Ta={class:"box"},Ga={key:0,class:"icon"},Oa=["innerHTML"],Da=["innerHTML"],za=["innerHTML"],Va={key:4,class:"link-text"},Ba={class:"link-text-value"},Ha=G({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(t){return(e,n)=>(b(),D(Oe,{class:"VPFeature",href:t.link,rel:t.rel,target:t.target,"no-icon":!0,tag:t.link?"a":"div"},{default:A(()=>[_("article",Ta,[typeof t.icon=="object"&&t.icon.wrap?(b(),j("div",Ga,[O(Zt,{image:t.icon,alt:t.icon.alt,height:t.icon.height||48,width:t.icon.width||48},null,8,["image","alt","height","width"])])):typeof t.icon=="object"?(b(),D(Zt,{key:1,image:t.icon,alt:t.icon.alt,height:t.icon.height||48,width:t.icon.width||48},null,8,["image","alt","height","width"])):t.icon?(b(),j("div",{key:2,class:"icon",innerHTML:t.icon},null,8,Oa)):E("",!0),_("h2",{class:"title",innerHTML:t.title},null,8,Da),t.details?(b(),j("p",{key:3,class:"details",innerHTML:t.details},null,8,za)):E("",!0),t.linkText?(b(),j("div",Va,[_("p",Ba,[Ke(Q(t.linkText)+" ",1),n[0]||(n[0]=_("span",{class:"vpi-arrow-right link-text-icon"},null,-1))])])):E("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),Ua=V(Ha,[["__scopeId","data-v-d19dc93a"]]),Ka={key:0,class:"VPFeatures"},Wa={class:"container"},Ja={class:"items"},Qa=G({__name:"VPFeatures",props:{features:{}},setup(t){const e=t,n=B(()=>{const r=e.features.length;if(r){if(r===2)return"grid-2";if(r===3)return"grid-3";if(r%3===0)return"grid-6";if(r>3)return"grid-4"}else return});return(r,s)=>t.features?(b(),j("div",Ka,[_("div",Wa,[_("div",Ja,[(b(!0),j(Z,null,ce(t.features,a=>(b(),j("div",{key:a.title,class:X(["item",[n.value]])},[O(Ua,{icon:a.icon,title:a.title,details:a.details,link:a.link,"link-text":a.linkText,rel:a.rel,target:a.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):E("",!0)}}),Ya=V(Qa,[["__scopeId","data-v-a14437a2"]]),Xa=G({__name:"VPHomeFeatures",setup(t){const{frontmatter:e}=K();return(n,r)=>M(e).features?(b(),D(Ya,{key:0,class:"VPHomeFeatures",features:M(e).features},null,8,["features"])):E("",!0)}}),Za=G({__name:"VPHomeContent",setup(t){const{width:e}=eo({initialWidth:0,includeScrollbar:!1});return(n,r)=>(b(),j("div",{class:"vp-doc container",style:Ar(M(e)?{"--vp-offset":`calc(50% - ${M(e)/2}px)`}:{})},[F(n.$slots,"default",{},void 0,!0)],4))}}),ei=V(Za,[["__scopeId","data-v-0b6c37a3"]]),ti=G({__name:"VPHome",setup(t){const{frontmatter:e,theme:n}=K();return(r,s)=>{const a=ft("Content");return b(),j("div",{class:X(["VPHome",{"external-link-icon-enabled":M(n).externalLinkIcon}])},[F(r.$slots,"home-hero-before",{},void 0,!0),O(La,null,{"home-hero-info-before":A(()=>[F(r.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":A(()=>[F(r.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":A(()=>[F(r.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":A(()=>[F(r.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":A(()=>[F(r.$slots,"home-hero-image",{},void 0,!0)]),_:3}),F(r.$slots,"home-hero-after",{},void 0,!0),F(r.$slots,"home-features-before",{},void 0,!0),O(Xa),F(r.$slots,"home-features-after",{},void 0,!0),M(e).markdownStyles!==!1?(b(),D(ei,{key:0},{default:A(()=>[O(a)]),_:1})):(b(),D(a,{key:1}))],2)}}}),ni=V(ti,[["__scopeId","data-v-bb5c8f90"]]),ri={},si={class:"VPPage"};function oi(t,e){const n=ft("Content");return b(),j("div",si,[F(t.$slots,"page-top"),O(n),F(t.$slots,"page-bottom")])}const ai=V(ri,[["render",oi]]),ii=G({__name:"VPContent",setup(t){const{page:e,frontmatter:n}=K(),{hasSidebar:r}=Je();return(s,a)=>(b(),j("div",{class:X(["VPContent",{"has-sidebar":M(r),"is-home":M(n).layout==="home"}]),id:"VPContent"},[M(e).isNotFound?F(s.$slots,"not-found",{key:0},()=>[O(qo)],!0):M(n).layout==="page"?(b(),D(ai,{key:1},{"page-top":A(()=>[F(s.$slots,"page-top",{},void 0,!0)]),"page-bottom":A(()=>[F(s.$slots,"page-bottom",{},void 0,!0)]),_:3})):M(n).layout==="home"?(b(),D(ni,{key:2},{"home-hero-before":A(()=>[F(s.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":A(()=>[F(s.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":A(()=>[F(s.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":A(()=>[F(s.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":A(()=>[F(s.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":A(()=>[F(s.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":A(()=>[F(s.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":A(()=>[F(s.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":A(()=>[F(s.$slots,"home-features-after",{},void 0,!0)]),_:3})):M(n).layout&&M(n).layout!=="doc"?(b(),D(Ge(M(n).layout),{key:3})):(b(),D(ka,{key:4},{"doc-top":A(()=>[F(s.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":A(()=>[F(s.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":A(()=>[F(s.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":A(()=>[F(s.$slots,"doc-before",{},void 0,!0)]),"doc-after":A(()=>[F(s.$slots,"doc-after",{},void 0,!0)]),"aside-top":A(()=>[F(s.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":A(()=>[F(s.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":A(()=>[F(s.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":A(()=>[F(s.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":A(()=>[F(s.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":A(()=>[F(s.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),li=V(ii,[["__scopeId","data-v-09ddb0f1"]]),ci={class:"container"},ui=["innerHTML"],di=["innerHTML"],fi=G({__name:"VPFooter",setup(t){const{theme:e,frontmatter:n}=K(),{hasSidebar:r}=Je();return(s,a)=>M(e).footer&&M(n).footer!==!1?(b(),j("footer",{key:0,class:X(["VPFooter",{"has-sidebar":M(r)}])},[_("div",ci,[M(e).footer.message?(b(),j("p",{key:0,class:"message",innerHTML:M(e).footer.message},null,8,ui)):E("",!0),M(e).footer.copyright?(b(),j("p",{key:1,class:"copyright",innerHTML:M(e).footer.copyright},null,8,di)):E("",!0)])],2)):E("",!0)}}),mi=V(fi,[["__scopeId","data-v-3d2c5c2a"]]);function pi(){const{theme:t,frontmatter:e}=K(),n=Fr([]),r=B(()=>n.value.length>0);return cn(()=>{n.value=Dn(e.value.outline??t.value.outline)}),{headers:n,hasLocalNav:r}}const hi={class:"menu-text"},gi={class:"header"},vi={class:"outline"},yi=G({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(t){const e=t,{theme:n}=K(),r=U(!1),s=U(0),a=U(),i=U();function c(p){var h;(h=a.value)!=null&&h.contains(p.target)||(r.value=!1)}De(r,p=>{if(p){document.addEventListener("click",c);return}document.removeEventListener("click",c)}),Mn("Escape",()=>{r.value=!1}),cn(()=>{r.value=!1});function l(){r.value=!r.value,s.value=window.innerHeight+Math.min(window.scrollY-e.navHeight,0)}function d(p){p.target.classList.contains("outline-link")&&(i.value&&(i.value.style.transition="none"),bt(()=>{r.value=!1}))}function m(){r.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(p,h)=>(b(),j("div",{class:"VPLocalNavOutlineDropdown",style:Ar({"--vp-vh":s.value+"px"}),ref_key:"main",ref:a},[t.headers.length>0?(b(),j("button",{key:0,onClick:l,class:X({open:r.value})},[_("span",hi,Q(M(Lr)(M(n))),1),h[0]||(h[0]=_("span",{class:"vpi-chevron-right icon"},null,-1))],2)):(b(),j("button",{key:1,onClick:m},Q(M(n).returnToTopLabel||"Return to top"),1)),O(Ln,{name:"flyout"},{default:A(()=>[r.value?(b(),j("div",{key:0,ref_key:"items",ref:i,class:"items",onClick:d},[_("div",gi,[_("a",{class:"top-link",href:"#",onClick:m},Q(M(n).returnToTopLabel||"Return to top"),1)]),_("div",vi,[O(Tr,{headers:t.headers},null,8,["headers"])])],512)):E("",!0)]),_:1})],4))}}),wi=V(yi,[["__scopeId","data-v-45dc4294"]]),bi={class:"container"},ki=["aria-expanded"],xi={class:"menu-text"},$i=G({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(t){const{theme:e,frontmatter:n}=K(),{hasSidebar:r}=Je(),{headers:s}=pi(),{y:a}=Ir(),i=U(0);Ve(()=>{i.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),cn(()=>{s.value=Dn(n.value.outline??e.value.outline)});const c=B(()=>s.value.length===0),l=B(()=>c.value&&!r.value),d=B(()=>({VPLocalNav:!0,"has-sidebar":r.value,empty:c.value,fixed:l.value}));return(m,p)=>M(n).layout!=="home"&&(!l.value||M(a)>=i.value)?(b(),j("div",{key:0,class:X(d.value)},[_("div",bi,[M(r)?(b(),j("button",{key:0,class:"menu","aria-expanded":t.open,"aria-controls":"VPSidebarNav",onClick:p[0]||(p[0]=h=>m.$emit("open-menu"))},[p[1]||(p[1]=_("span",{class:"vpi-align-left menu-icon"},null,-1)),_("span",xi,Q(M(e).sidebarMenuLabel||"Menu"),1)],8,ki)):E("",!0),O(wi,{headers:M(s),navHeight:i.value},null,8,["headers","navHeight"])])],2)):E("",!0)}}),Mi=V($i,[["__scopeId","data-v-9bbcffda"]]);function qi(){const t=U(!1);function e(){t.value=!0,window.addEventListener("resize",s)}function n(){t.value=!1,window.removeEventListener("resize",s)}function r(){t.value?n():e()}function s(){window.outerWidth>=768&&n()}const a=un();return De(()=>a.path,n),{isScreenOpen:t,openScreen:e,closeScreen:n,toggleScreen:r}}const Si={},ji={class:"VPSwitch",type:"button",role:"switch"},_i={class:"check"},Fi={key:0,class:"icon"};function Ri(t,e){return b(),j("button",ji,[_("span",_i,[t.$slots.default?(b(),j("span",Fi,[F(t.$slots,"default",{},void 0,!0)])):E("",!0)])])}const Ai=V(Si,[["render",Ri],["__scopeId","data-v-1c532109"]]),Ii=G({__name:"VPSwitchAppearance",setup(t){const{isDark:e,theme:n}=K(),r=dn("toggle-appearance",()=>{e.value=!e.value}),s=U("");return Gn(()=>{s.value=e.value?n.value.lightModeSwitchTitle||"Switch to light theme":n.value.darkModeSwitchTitle||"Switch to dark theme"}),(a,i)=>(b(),D(Ai,{title:s.value,class:"VPSwitchAppearance","aria-checked":M(e),onClick:M(r)},{default:A(()=>[...i[0]||(i[0]=[_("span",{class:"vpi-sun sun"},null,-1),_("span",{class:"vpi-moon moon"},null,-1)])]),_:1},8,["title","aria-checked","onClick"]))}}),zn=V(Ii,[["__scopeId","data-v-f190b571"]]),Ci={key:0,class:"VPNavBarAppearance"},Pi=G({__name:"VPNavBarAppearance",setup(t){const{site:e}=K();return(n,r)=>M(e).appearance&&M(e).appearance!=="force-dark"&&M(e).appearance!=="force-auto"?(b(),j("div",Ci,[O(zn)])):E("",!0)}}),Ni=V(Pi,[["__scopeId","data-v-cc0198ce"]]),Vn=U();let Gr=!1,vn=0;function Ei(t){const e=U(!1);if(fn){!Gr&&Li(),vn++;const n=De(Vn,r=>{var s,a,i;r===t.el.value||(s=t.el.value)!=null&&s.contains(r)?(e.value=!0,(a=t.onFocus)==null||a.call(t)):(e.value=!1,(i=t.onBlur)==null||i.call(t))});ln(()=>{n(),vn--,vn||Ti()})}return to(e)}function Li(){document.addEventListener("focusin",Or),Gr=!0,Vn.value=document.activeElement}function Ti(){document.removeEventListener("focusin",Or)}function Or(){Vn.value=document.activeElement}const Gi={class:"VPMenuLink"},Oi=["innerHTML"],Di=G({__name:"VPMenuLink",props:{item:{}},setup(t){const{page:e}=K();return(n,r)=>(b(),j("div",Gi,[O(Oe,{class:X({active:M(dt)(M(e).relativePath,t.item.activeMatch||t.item.link,!!t.item.activeMatch)}),href:t.item.link,target:t.item.target,rel:t.item.rel,"no-icon":t.item.noIcon},{default:A(()=>[_("span",{innerHTML:t.item.text},null,8,Oi)]),_:1},8,["class","href","target","rel","no-icon"])]))}}),mn=V(Di,[["__scopeId","data-v-65a6e925"]]),zi={class:"VPMenuGroup"},Vi={key:0,class:"title"},Bi=G({__name:"VPMenuGroup",props:{text:{},items:{}},setup(t){return(e,n)=>(b(),j("div",zi,[t.text?(b(),j("p",Vi,Q(t.text),1)):E("",!0),(b(!0),j(Z,null,ce(t.items,r=>(b(),j(Z,null,["link"in r?(b(),D(mn,{key:0,item:r},null,8,["item"])):E("",!0)],64))),256))]))}}),Hi=V(Bi,[["__scopeId","data-v-3415a4cf"]]),Ui={class:"VPMenu"},Ki={key:0,class:"items"},Wi=G({__name:"VPMenu",props:{items:{}},setup(t){return(e,n)=>(b(),j("div",Ui,[t.items?(b(),j("div",Ki,[(b(!0),j(Z,null,ce(t.items,r=>(b(),j(Z,{key:JSON.stringify(r)},["link"in r?(b(),D(mn,{key:0,item:r},null,8,["item"])):"component"in r?(b(),D(Ge(r.component),Ze({key:1,ref_for:!0},r.props),null,16)):(b(),D(Hi,{key:2,text:r.text,items:r.items},null,8,["text","items"]))],64))),128))])):E("",!0),F(e.$slots,"default",{},void 0,!0)]))}}),Ji=V(Wi,[["__scopeId","data-v-4c92ef6b"]]),Qi=["aria-expanded","aria-label"],Yi={key:0,class:"text"},Xi=["innerHTML"],Zi={key:1,class:"vpi-more-horizontal icon"},el={class:"menu"},tl=G({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(t){const e=U(!1),n=U();Ei({el:n,onBlur:r});function r(){e.value=!1}return(s,a)=>(b(),j("div",{class:"VPFlyout",ref_key:"el",ref:n,onMouseenter:a[1]||(a[1]=i=>e.value=!0),onMouseleave:a[2]||(a[2]=i=>e.value=!1)},[_("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":e.value,"aria-label":t.label,onClick:a[0]||(a[0]=i=>e.value=!e.value)},[t.button||t.icon?(b(),j("span",Yi,[t.icon?(b(),j("span",{key:0,class:X([t.icon,"option-icon"])},null,2)):E("",!0),t.button?(b(),j("span",{key:1,innerHTML:t.button},null,8,Xi)):E("",!0),a[3]||(a[3]=_("span",{class:"vpi-chevron-down text-icon"},null,-1))])):(b(),j("span",Zi))],8,Qi),_("div",el,[O(Ji,{items:t.items},{default:A(()=>[F(s.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),Bn=V(tl,[["__scopeId","data-v-bf7f0be6"]]),nl=["href","aria-label","innerHTML"],rl=G({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(t){const e=t,n=U();Ve(async()=>{var a;await bt();const s=(a=n.value)==null?void 0:a.children[0];s instanceof HTMLElement&&s.className.startsWith("vpi-social-")&&(getComputedStyle(s).maskImage||getComputedStyle(s).webkitMaskImage)==="none"&&s.style.setProperty("--icon",`url('https://api.iconify.design/simple-icons/${e.icon}.svg')`)});const r=B(()=>typeof e.icon=="object"?e.icon.svg:`<span class="vpi-social-${e.icon}"></span>`);return(s,a)=>(b(),j("a",{ref_key:"el",ref:n,class:"VPSocialLink no-icon",href:t.link,"aria-label":t.ariaLabel??(typeof t.icon=="string"?t.icon:""),target:"_blank",rel:"noopener",innerHTML:r.value},null,8,nl))}}),sl=V(rl,[["__scopeId","data-v-92f5f051"]]),ol={class:"VPSocialLinks"},al=G({__name:"VPSocialLinks",props:{links:{}},setup(t){return(e,n)=>(b(),j("div",ol,[(b(!0),j(Z,null,ce(t.links,({link:r,icon:s,ariaLabel:a})=>(b(),D(sl,{key:r,icon:s,link:r,ariaLabel:a},null,8,["icon","link","ariaLabel"]))),128))]))}}),Hn=V(al,[["__scopeId","data-v-4ec257ed"]]),il={key:0,class:"group translations"},ll={class:"trans-title"},cl={key:1,class:"group"},ul={class:"item appearance"},dl={class:"label"},fl={class:"appearance-action"},ml={key:2,class:"group"},pl={class:"item social-links"},hl=G({__name:"VPNavBarExtra",setup(t){const{site:e,theme:n}=K(),{localeLinks:r,currentLang:s}=Tt({correspondingLink:!0}),a=B(()=>r.value.length&&s.value.label||e.value.appearance||n.value.socialLinks);return(i,c)=>a.value?(b(),D(Bn,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:A(()=>[M(r).length&&M(s).label?(b(),j("div",il,[_("p",ll,Q(M(s).label),1),(b(!0),j(Z,null,ce(M(r),l=>(b(),D(mn,{key:l.link,item:l},null,8,["item"]))),128))])):E("",!0),M(e).appearance&&M(e).appearance!=="force-dark"&&M(e).appearance!=="force-auto"?(b(),j("div",cl,[_("div",ul,[_("p",dl,Q(M(n).darkModeSwitchLabel||"Appearance"),1),_("div",fl,[O(zn)])])])):E("",!0),M(n).socialLinks?(b(),j("div",ml,[_("div",pl,[O(Hn,{class:"social-links-list",links:M(n).socialLinks},null,8,["links"])])])):E("",!0)]),_:1})):E("",!0)}}),gl=V(hl,[["__scopeId","data-v-4722c6c8"]]),vl=["aria-expanded"],yl=G({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(t){return(e,n)=>(b(),j("button",{type:"button",class:X(["VPNavBarHamburger",{active:t.active}]),"aria-label":"mobile navigation","aria-expanded":t.active,"aria-controls":"VPNavScreen",onClick:n[0]||(n[0]=r=>e.$emit("click"))},[...n[1]||(n[1]=[_("span",{class:"container"},[_("span",{class:"top"}),_("span",{class:"middle"}),_("span",{class:"bottom"})],-1)])],10,vl))}}),wl=V(yl,[["__scopeId","data-v-fb5ecd03"]]),bl=["innerHTML"],kl=G({__name:"VPNavBarMenuLink",props:{item:{}},setup(t){const{page:e}=K();return(n,r)=>(b(),D(Oe,{class:X({VPNavBarMenuLink:!0,active:M(dt)(M(e).relativePath,t.item.activeMatch||t.item.link,!!t.item.activeMatch)}),href:t.item.link,target:t.item.target,rel:t.item.rel,"no-icon":t.item.noIcon,tabindex:"0"},{default:A(()=>[_("span",{innerHTML:t.item.text},null,8,bl)]),_:1},8,["class","href","target","rel","no-icon"]))}}),xl=V(kl,[["__scopeId","data-v-9c27d3ec"]]),$l=G({__name:"VPNavBarMenuGroup",props:{item:{}},setup(t){const e=t,{page:n}=K(),r=a=>"component"in a?!1:"link"in a?dt(n.value.relativePath,a.link,!!e.item.activeMatch):a.items.some(r),s=B(()=>r(e.item));return(a,i)=>(b(),D(Bn,{class:X({VPNavBarMenuGroup:!0,active:M(dt)(M(n).relativePath,t.item.activeMatch,!!t.item.activeMatch)||s.value}),button:t.item.text,items:t.item.items},null,8,["class","button","items"]))}}),Ml={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},ql=G({__name:"VPNavBarMenu",setup(t){const{theme:e}=K();return(n,r)=>M(e).nav?(b(),j("nav",Ml,[r[0]||(r[0]=_("span",{id:"main-nav-aria-label",class:"visually-hidden"}," Main Navigation ",-1)),(b(!0),j(Z,null,ce(M(e).nav,s=>(b(),j(Z,{key:JSON.stringify(s)},["link"in s?(b(),D(xl,{key:0,item:s},null,8,["item"])):"component"in s?(b(),D(Ge(s.component),Ze({key:1,ref_for:!0},s.props),null,16)):(b(),D($l,{key:2,item:s},null,8,["item"]))],64))),128))])):E("",!0)}}),Sl=V(ql,[["__scopeId","data-v-914cd459"]]);function jl(t){const{localeIndex:e,theme:n}=K();function r(s){var w,$,S;const a=s.split("."),i=(w=n.value.search)==null?void 0:w.options,c=i&&typeof i=="object",l=c&&((S=($=i.locales)==null?void 0:$[e.value])==null?void 0:S.translations)||null,d=c&&i.translations||null;let m=l,p=d,h=t;const y=a.pop();for(const P of a){let L=null;const N=h==null?void 0:h[P];N&&(L=h=N);const H=p==null?void 0:p[P];H&&(L=p=H);const R=m==null?void 0:m[P];R&&(L=m=R),N||(h=L),H||(p=L),R||(m=L)}return(m==null?void 0:m[y])??(p==null?void 0:p[y])??(h==null?void 0:h[y])??""}return r}const _l=["aria-label"],Fl={class:"DocSearch-Button-Container"},Rl={class:"DocSearch-Button-Placeholder"},ur=G({__name:"VPNavBarSearchButton",setup(t){const n=jl({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(r,s)=>(b(),j("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":M(n)("button.buttonAriaLabel")},[_("span",Fl,[s[0]||(s[0]=_("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1)),_("span",Rl,Q(M(n)("button.buttonText")),1)]),s[1]||(s[1]=_("span",{class:"DocSearch-Button-Keys"},[_("kbd",{class:"DocSearch-Button-Key"}),_("kbd",{class:"DocSearch-Button-Key"},"K")],-1))],8,_l))}}),Al={class:"VPNavBarSearch"},Il={id:"local-search"},Cl={key:1,id:"docsearch"},Pl=G({__name:"VPNavBarSearch",setup(t){const e=no(()=>Ut(()=>import("./VPLocalSearchBox.DiUTBZCg.js"),__vite__mapDeps([0,1]))),n=()=>null,{theme:r}=K(),s=U(!1),a=U(!1);Ve(()=>{});function i(){s.value||(s.value=!0,setTimeout(c,16))}function c(){const p=new Event("keydown");p.key="k",p.metaKey=!0,window.dispatchEvent(p),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||c()},16)}function l(p){const h=p.target,y=h.tagName;return h.isContentEditable||y==="INPUT"||y==="SELECT"||y==="TEXTAREA"}const d=U(!1);Mn("k",p=>{(p.ctrlKey||p.metaKey)&&(p.preventDefault(),d.value=!0)}),Mn("/",p=>{l(p)||(p.preventDefault(),d.value=!0)});const m="local";return(p,h)=>{var y;return b(),j("div",Al,[M(m)==="local"?(b(),j(Z,{key:0},[d.value?(b(),D(M(e),{key:0,onClose:h[0]||(h[0]=w=>d.value=!1)})):E("",!0),_("div",Il,[O(ur,{onClick:h[1]||(h[1]=w=>d.value=!0)})])],64)):M(m)==="algolia"?(b(),j(Z,{key:1},[s.value?(b(),D(M(n),{key:0,algolia:((y=M(r).search)==null?void 0:y.options)??M(r).algolia,onVnodeBeforeMount:h[2]||(h[2]=w=>a.value=!0)},null,8,["algolia"])):E("",!0),a.value?E("",!0):(b(),j("div",Cl,[O(ur,{onClick:i})]))],64)):E("",!0)])}}}),Nl=G({__name:"VPNavBarSocialLinks",setup(t){const{theme:e}=K();return(n,r)=>M(e).socialLinks?(b(),D(Hn,{key:0,class:"VPNavBarSocialLinks",links:M(e).socialLinks},null,8,["links"])):E("",!0)}}),El=V(Nl,[["__scopeId","data-v-99079c89"]]),Ll=["href","rel","target"],Tl=["innerHTML"],Gl={key:2},Ol=G({__name:"VPNavBarTitle",setup(t){const{site:e,theme:n}=K(),{hasSidebar:r}=Je(),{currentLang:s}=Tt(),a=B(()=>{var l;return typeof n.value.logoLink=="string"?n.value.logoLink:(l=n.value.logoLink)==null?void 0:l.link}),i=B(()=>{var l;return typeof n.value.logoLink=="string"||(l=n.value.logoLink)==null?void 0:l.rel}),c=B(()=>{var l;return typeof n.value.logoLink=="string"||(l=n.value.logoLink)==null?void 0:l.target});return(l,d)=>(b(),j("div",{class:X(["VPNavBarTitle",{"has-sidebar":M(r)}])},[_("a",{class:"title",href:a.value??M(On)(M(s).link),rel:i.value,target:c.value},[F(l.$slots,"nav-bar-title-before",{},void 0,!0),M(n).logo?(b(),D(Zt,{key:0,class:"logo",image:M(n).logo},null,8,["image"])):E("",!0),M(n).siteTitle?(b(),j("span",{key:1,innerHTML:M(n).siteTitle},null,8,Tl)):M(n).siteTitle===void 0?(b(),j("span",Gl,Q(M(e).title),1)):E("",!0),F(l.$slots,"nav-bar-title-after",{},void 0,!0)],8,Ll)],2))}}),Dl=V(Ol,[["__scopeId","data-v-9578eee0"]]),zl={class:"items"},Vl={class:"title"},Bl=G({__name:"VPNavBarTranslations",setup(t){const{theme:e}=K(),{localeLinks:n,currentLang:r}=Tt({correspondingLink:!0});return(s,a)=>M(n).length&&M(r).label?(b(),D(Bn,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:M(e).langMenuLabel||"Change language"},{default:A(()=>[_("div",zl,[_("p",Vl,Q(M(r).label),1),(b(!0),j(Z,null,ce(M(n),i=>(b(),D(mn,{key:i.link,item:i},null,8,["item"]))),128))])]),_:1},8,["label"])):E("",!0)}}),Hl=V(Bl,[["__scopeId","data-v-feac01c5"]]),Ul={class:"wrapper"},Kl={class:"container"},Wl={class:"title"},Jl={class:"content"},Ql={class:"content-body"},Yl=G({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(t){const e=t,{y:n}=Ir(),{hasSidebar:r}=Je(),{frontmatter:s}=K(),a=U({});return Gn(()=>{a.value={"has-sidebar":r.value,home:s.value.layout==="home",top:n.value===0,"screen-open":e.isScreenOpen}}),(i,c)=>(b(),j("div",{class:X(["VPNavBar",a.value])},[_("div",Ul,[_("div",Kl,[_("div",Wl,[O(Dl,null,{"nav-bar-title-before":A(()=>[F(i.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":A(()=>[F(i.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),_("div",Jl,[_("div",Ql,[F(i.$slots,"nav-bar-content-before",{},void 0,!0),O(Pl,{class:"search"}),O(Sl,{class:"menu"}),O(Hl,{class:"translations"}),O(Ni,{class:"appearance"}),O(El,{class:"social-links"}),O(gl,{class:"extra"}),F(i.$slots,"nav-bar-content-after",{},void 0,!0),O(wl,{class:"hamburger",active:t.isScreenOpen,onClick:c[0]||(c[0]=l=>i.$emit("toggle-screen"))},null,8,["active"])])])])]),c[1]||(c[1]=_("div",{class:"divider"},[_("div",{class:"divider-line"})],-1))],2))}}),Xl=V(Yl,[["__scopeId","data-v-f2873ca6"]]),Zl={key:0,class:"VPNavScreenAppearance"},ec={class:"text"},tc=G({__name:"VPNavScreenAppearance",setup(t){const{site:e,theme:n}=K();return(r,s)=>M(e).appearance&&M(e).appearance!=="force-dark"&&M(e).appearance!=="force-auto"?(b(),j("div",Zl,[_("p",ec,Q(M(n).darkModeSwitchLabel||"Appearance"),1),O(zn)])):E("",!0)}}),nc=V(tc,[["__scopeId","data-v-1bafe686"]]),rc=["innerHTML"],sc=G({__name:"VPNavScreenMenuLink",props:{item:{}},setup(t){const e=dn("close-screen");return(n,r)=>(b(),D(Oe,{class:"VPNavScreenMenuLink",href:t.item.link,target:t.item.target,rel:t.item.rel,"no-icon":t.item.noIcon,onClick:M(e)},{default:A(()=>[_("span",{innerHTML:t.item.text},null,8,rc)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),oc=V(sc,[["__scopeId","data-v-1e6a0d08"]]),ac=["innerHTML"],ic=G({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(t){const e=dn("close-screen");return(n,r)=>(b(),D(Oe,{class:"VPNavScreenMenuGroupLink",href:t.item.link,target:t.item.target,rel:t.item.rel,"no-icon":t.item.noIcon,onClick:M(e)},{default:A(()=>[_("span",{innerHTML:t.item.text},null,8,ac)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),Dr=V(ic,[["__scopeId","data-v-640f0cfd"]]),lc={class:"VPNavScreenMenuGroupSection"},cc={key:0,class:"title"},uc=G({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(t){return(e,n)=>(b(),j("div",lc,[t.text?(b(),j("p",cc,Q(t.text),1)):E("",!0),(b(!0),j(Z,null,ce(t.items,r=>(b(),D(Dr,{key:r.text,item:r},null,8,["item"]))),128))]))}}),dc=V(uc,[["__scopeId","data-v-17689196"]]),fc=["aria-controls","aria-expanded"],mc=["innerHTML"],pc=["id"],hc={key:0,class:"item"},gc={key:1,class:"item"},vc={key:2,class:"group"},yc=G({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(t){const e=t,n=U(!1),r=B(()=>`NavScreenGroup-${e.text.replace(" ","-").toLowerCase()}`);function s(){n.value=!n.value}return(a,i)=>(b(),j("div",{class:X(["VPNavScreenMenuGroup",{open:n.value}])},[_("button",{class:"button","aria-controls":r.value,"aria-expanded":n.value,onClick:s},[_("span",{class:"button-text",innerHTML:t.text},null,8,mc),i[0]||(i[0]=_("span",{class:"vpi-plus button-icon"},null,-1))],8,fc),_("div",{id:r.value,class:"items"},[(b(!0),j(Z,null,ce(t.items,c=>(b(),j(Z,{key:JSON.stringify(c)},["link"in c?(b(),j("div",hc,[O(Dr,{item:c},null,8,["item"])])):"component"in c?(b(),j("div",gc,[(b(),D(Ge(c.component),Ze({ref_for:!0},c.props,{"screen-menu":""}),null,16))])):(b(),j("div",vc,[O(dc,{text:c.text,items:c.items},null,8,["text","items"])]))],64))),128))],8,pc)],2))}}),wc=V(yc,[["__scopeId","data-v-5d94fd6b"]]),bc={key:0,class:"VPNavScreenMenu"},kc=G({__name:"VPNavScreenMenu",setup(t){const{theme:e}=K();return(n,r)=>M(e).nav?(b(),j("nav",bc,[(b(!0),j(Z,null,ce(M(e).nav,s=>(b(),j(Z,{key:JSON.stringify(s)},["link"in s?(b(),D(oc,{key:0,item:s},null,8,["item"])):"component"in s?(b(),D(Ge(s.component),Ze({key:1,ref_for:!0},s.props,{"screen-menu":""}),null,16)):(b(),D(wc,{key:2,text:s.text||"",items:s.items},null,8,["text","items"]))],64))),128))])):E("",!0)}}),xc=G({__name:"VPNavScreenSocialLinks",setup(t){const{theme:e}=K();return(n,r)=>M(e).socialLinks?(b(),D(Hn,{key:0,class:"VPNavScreenSocialLinks",links:M(e).socialLinks},null,8,["links"])):E("",!0)}}),$c={class:"list"},Mc=G({__name:"VPNavScreenTranslations",setup(t){const{localeLinks:e,currentLang:n}=Tt({correspondingLink:!0}),r=U(!1);function s(){r.value=!r.value}return(a,i)=>M(e).length&&M(n).label?(b(),j("div",{key:0,class:X(["VPNavScreenTranslations",{open:r.value}])},[_("button",{class:"title",onClick:s},[i[0]||(i[0]=_("span",{class:"vpi-languages icon lang"},null,-1)),Ke(" "+Q(M(n).label)+" ",1),i[1]||(i[1]=_("span",{class:"vpi-chevron-down icon chevron"},null,-1))]),_("ul",$c,[(b(!0),j(Z,null,ce(M(e),c=>(b(),j("li",{key:c.link,class:"item"},[O(Oe,{class:"link",href:c.link},{default:A(()=>[Ke(Q(c.text),1)]),_:2},1032,["href"])]))),128))])],2)):E("",!0)}}),qc=V(Mc,[["__scopeId","data-v-c644f476"]]),Sc={class:"container"},jc=G({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(t){const e=U(null),n=Cr(fn?document.body:null);return(r,s)=>(b(),D(Ln,{name:"fade",onEnter:s[0]||(s[0]=a=>n.value=!0),onAfterLeave:s[1]||(s[1]=a=>n.value=!1)},{default:A(()=>[t.open?(b(),j("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:e,id:"VPNavScreen"},[_("div",Sc,[F(r.$slots,"nav-screen-content-before",{},void 0,!0),O(kc,{class:"menu"}),O(qc,{class:"translations"}),O(nc,{class:"appearance"}),O(xc,{class:"social-links"}),F(r.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):E("",!0)]),_:3}))}}),_c=V(jc,[["__scopeId","data-v-94155a41"]]),Fc={key:0,class:"VPNav"},Rc=G({__name:"VPNav",setup(t){const{isScreenOpen:e,closeScreen:n,toggleScreen:r}=qi(),{frontmatter:s}=K(),a=B(()=>s.value.navbar!==!1);return Pr("close-screen",n),an(()=>{fn&&document.documentElement.classList.toggle("hide-nav",!a.value)}),(i,c)=>a.value?(b(),j("header",Fc,[O(Xl,{"is-screen-open":M(e),onToggleScreen:M(r)},{"nav-bar-title-before":A(()=>[F(i.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":A(()=>[F(i.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":A(()=>[F(i.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":A(()=>[F(i.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),O(_c,{open:M(e)},{"nav-screen-content-before":A(()=>[F(i.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":A(()=>[F(i.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):E("",!0)}}),Ac=V(Rc,[["__scopeId","data-v-7acba721"]]),Ic=["role","tabindex"],Cc={key:1,class:"items"},Pc=G({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(t){const e=t,{collapsed:n,collapsible:r,isLink:s,isActiveLink:a,hasActiveLink:i,hasChildren:c,toggle:l}=Fo(B(()=>e.item)),d=B(()=>c.value?"section":"div"),m=B(()=>s.value?"a":"div"),p=B(()=>c.value?e.depth+2===7?"p":`h${e.depth+2}`:"p"),h=B(()=>s.value?void 0:"button"),y=B(()=>[[`level-${e.depth}`],{collapsible:r.value},{collapsed:n.value},{"is-link":s.value},{"is-active":a.value},{"has-active":i.value}]);function w(S){"key"in S&&S.key!=="Enter"||!e.item.link&&l()}function $(){e.item.link&&l()}return(S,P)=>{const L=ft("VPSidebarItem",!0);return b(),D(Ge(d.value),{class:X(["VPSidebarItem",y.value])},{default:A(()=>[t.item.text?(b(),j("div",Ze({key:0,class:"item",role:h.value},ro(t.item.items?{click:w,keydown:w}:{},!0),{tabindex:t.item.items&&0}),[P[1]||(P[1]=_("div",{class:"indicator"},null,-1)),t.item.link?(b(),D(Oe,{key:0,tag:m.value,class:"link",href:t.item.link,rel:t.item.rel,target:t.item.target},{default:A(()=>[(b(),D(Ge(p.value),{class:"text",innerHTML:t.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(b(),D(Ge(p.value),{key:1,class:"text",innerHTML:t.item.text},null,8,["innerHTML"])),t.item.collapsed!=null&&t.item.items&&t.item.items.length?(b(),j("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:$,onKeydown:so($,["enter"]),tabindex:"0"},[...P[0]||(P[0]=[_("span",{class:"vpi-chevron-right caret-icon"},null,-1)])],32)):E("",!0)],16,Ic)):E("",!0),t.item.items&&t.item.items.length?(b(),j("div",Cc,[t.depth<5?(b(!0),j(Z,{key:0},ce(t.item.items,N=>(b(),D(L,{key:N.text,item:N,depth:t.depth+1},null,8,["item","depth"]))),128)):E("",!0)])):E("",!0)]),_:1},8,["class"])}}}),Nc=V(Pc,[["__scopeId","data-v-810f1ad1"]]),Ec=G({__name:"VPSidebarGroup",props:{items:{}},setup(t){const e=U(!0);let n=null;return Ve(()=>{n=setTimeout(()=>{n=null,e.value=!1},300)}),oo(()=>{n!=null&&(clearTimeout(n),n=null)}),(r,s)=>(b(!0),j(Z,null,ce(t.items,a=>(b(),j("div",{key:a.text,class:X(["group",{"no-transition":e.value}])},[O(Nc,{item:a,depth:0},null,8,["item"])],2))),128))}}),Lc=V(Ec,[["__scopeId","data-v-bf070c34"]]),Tc={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},Gc=G({__name:"VPSidebar",props:{open:{type:Boolean}},setup(t){const{sidebarGroups:e,hasSidebar:n}=Je(),r=t,s=U(null),a=Cr(fn?document.body:null);De([r,s],()=>{var c;r.open?(a.value=!0,(c=s.value)==null||c.focus()):a.value=!1},{immediate:!0,flush:"post"});const i=U(0);return De(e,()=>{i.value+=1},{deep:!0}),(c,l)=>M(n)?(b(),j("aside",{key:0,class:X(["VPSidebar",{open:t.open}]),ref_key:"navEl",ref:s,onClick:l[0]||(l[0]=ao(()=>{},["stop"]))},[l[2]||(l[2]=_("div",{class:"curtain"},null,-1)),_("nav",Tc,[l[1]||(l[1]=_("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),F(c.$slots,"sidebar-nav-before",{},void 0,!0),(b(),D(Lc,{items:M(e),key:i.value},null,8,["items"])),F(c.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):E("",!0)}}),Oc=V(Gc,[["__scopeId","data-v-2022e014"]]),Dc=G({__name:"VPSkipLink",setup(t){const{theme:e}=K(),n=un(),r=U();De(()=>n.path,()=>r.value.focus());function s({target:a}){const i=document.getElementById(decodeURIComponent(a.hash).slice(1));if(i){const c=()=>{i.removeAttribute("tabindex"),i.removeEventListener("blur",c)};i.setAttribute("tabindex","-1"),i.addEventListener("blur",c),i.focus(),window.scrollTo(0,0)}}return(a,i)=>(b(),j(Z,null,[_("span",{ref_key:"backToTop",ref:r,tabindex:"-1"},null,512),_("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:s},Q(M(e).skipToContentLabel||"Skip to content"),1)],64))}}),zc=V(Dc,[["__scopeId","data-v-efce9b13"]]),Vc=G({__name:"Layout",setup(t){const{isOpen:e,open:n,close:r}=Je(),s=un();De(()=>s.path,r),_o(e,r);const{frontmatter:a}=K(),i=io(),c=B(()=>!!i["home-hero-image"]);return Pr("hero-image-slot-exists",c),(l,d)=>{const m=ft("Content");return M(a).layout!==!1?(b(),j("div",{key:0,class:X(["Layout",M(a).pageClass])},[F(l.$slots,"layout-top",{},void 0,!0),O(zc),O(ho,{class:"backdrop",show:M(e),onClick:M(r)},null,8,["show","onClick"]),O(Ac,null,{"nav-bar-title-before":A(()=>[F(l.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":A(()=>[F(l.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":A(()=>[F(l.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":A(()=>[F(l.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":A(()=>[F(l.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":A(()=>[F(l.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),O(Mi,{open:M(e),onOpenMenu:M(n)},null,8,["open","onOpenMenu"]),O(Oc,{open:M(e)},{"sidebar-nav-before":A(()=>[F(l.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":A(()=>[F(l.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),O(li,null,{"page-top":A(()=>[F(l.$slots,"page-top",{},void 0,!0)]),"page-bottom":A(()=>[F(l.$slots,"page-bottom",{},void 0,!0)]),"not-found":A(()=>[F(l.$slots,"not-found",{},void 0,!0)]),"home-hero-before":A(()=>[F(l.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":A(()=>[F(l.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":A(()=>[F(l.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":A(()=>[F(l.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":A(()=>[F(l.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":A(()=>[F(l.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":A(()=>[F(l.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":A(()=>[F(l.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":A(()=>[F(l.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":A(()=>[F(l.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":A(()=>[F(l.$slots,"doc-before",{},void 0,!0)]),"doc-after":A(()=>[F(l.$slots,"doc-after",{},void 0,!0)]),"doc-top":A(()=>[F(l.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":A(()=>[F(l.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":A(()=>[F(l.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":A(()=>[F(l.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":A(()=>[F(l.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":A(()=>[F(l.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":A(()=>[F(l.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":A(()=>[F(l.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),O(mi),F(l.$slots,"layout-bottom",{},void 0,!0)],2)):(b(),D(m,{key:1}))}}}),Bc=V(Vc,[["__scopeId","data-v-14070d8d"]]),Hc={Layout:Bc,enhanceApp:({app:t})=>{t.component("Badge",fo)}},Uc=`(ns cljam.handbook
  "Machine-readable quick-reference for the cljam runtime.
   Intended for LLM agents — dense, example-heavy, no prose.
   Humans: use describe, the REPL, or official docs instead.

   Usage:
     (require '[cljam.handbook :as h])
     (h/topics)            ;; list all topic keys
     (h/lookup :sort)      ;; get a specific entry
     (h/register! :my-tip \\"...\\")  ;; add/update a topic (session-local)")

;; ── Registry ──────────────────────────────────────────────────────────────

(def ^:dynamic *topics*
  (atom {

   :sort
   "Default comparator is \`compare\`, NOT \`<\`.
    \`<\` is numbers-only — breaks on strings, keywords, chars.
    (sort [\\"b\\" \\"a\\"])           ;; ok — compare is default
    (sort [\\\\c \\\\a \\\\b])          ;; ok — chars comparable via compare
    (sort [:b :a :c])          ;; ok
    (sort-by :score > records) ;; explicit comparator always works"

   :char-literals
   "Char literals: \\\\a \\\\b ... \\\\z \\\\A ... \\\\Z \\\\0 ... \\\\9
    Named: \\\\space \\\\newline \\\\tab \\\\return \\\\backspace \\\\formfeed
    Unicode: \\\\uXXXX (4 hex digits)
    Type: char? returns true. Distinct from strings.
    (char 65)   ;; => \\\\A   (codepoint → char)
    (int \\\\A)    ;; => 65   (char → codepoint)
    (str \\\\h \\\\i) ;; => \\"hi\\" (chars join to string)"

   :dynamic-vars
   "^:dynamic vars + binding = thread-local scope.
    Atoms = shared mutable state (swap!/reset! mutate in place).
    ;; Dynamic var — binding temporarily shadows the var
    (def ^:dynamic *level* :info)
    (binding [*level* :debug]   ;; lexical shadow — only visible inside this block
      *level*)                  ;; => :debug
    *level*                     ;; => :info (restored after binding exits)
    ;; Atom — mutation persists globally
    (def counter (atom 0))
    (swap! counter inc)         ;; => 1
    @counter                    ;; => 1 (visible everywhere)
    Difference: swap!/reset! on atoms mutates shared state; binding only affects
    the current dynamic scope and restores the original value on exit."

   :require
   "(require '[clojure.string :as str])
    (require '[cljam.schema.core :as s])
    (require '[clojure.test :refer [deftest is run-tests]])
    Works for: built-in clojure.* namespaces, cljam.* built-ins, library namespaces
    registered via CljamLibrary.sources.
    :refer [specific-names] works — :refer :all does NOT (error).
    :use is not available — use :require with :as or :refer instead.
    Lazy: namespace source is loaded on first require, cached after."

   :jvm-gaps
   "Not in cljam (no JVM):
    - No agents (send, send-off, await)
    - No refs / dosync / STM
    - No Java interop (.method obj, (new ClassName))
    - No gen-class / proxy / reify (use defrecord + defprotocol)
    - No classpath / pom.xml
    - No futures from clojure.core (use JS Promise via async)
    - transients: not implemented
    - clojure.java.* namespaces: not available"

   :types
   "CljValue kinds — what (type x) returns:
    :nil :boolean :number :string :keyword :symbol :char
    :list :vector :map :set
    :function          ;; NOT :fn — (type (fn [x] x)) => :function
    :protocol          ;; (type IFoo) => :protocol
    :ns/RecordName     ;; records return :ns/RecordName, e.g. :user/Point
    :atom :var :namespace :lazy-seq :cons
    Note: (type multimethod) throws — use (instance? ...) checks instead.
    (type x) returns the kind keyword.
    (char? x) (string? x) (map? x) etc. — standard predicates all work."

   :records
   "(defrecord Point [x y])
    (->Point 1 2)          ;; positional constructor
    (map->Point {:x 1 :y 2}) ;; map constructor
    (:x p)                 ;; field access
    (record? p)            ;; => true
    (type p)               ;; => :user/Point (or :ns/Point)
    Records implement map semantics: get, keys work.
    CAVEAT: (assoc record :field val) returns a plain map, NOT a record.
    Use map->RecordName to reconstruct a record after modifying fields.
    Use with defprotocol + extend-protocol for polymorphic dispatch."

   :protocols
   "(defprotocol IShape
      (area [this])
      (perimeter [this]))
    (extend-protocol IShape
      :user/Circle
        (area [c] (* clojure.math/PI (:r c) (:r c)))
        (perimeter [c] (* 2 clojure.math/PI (:r c))))
    (satisfies? IShape my-circle)  ;; => true
    (protocols my-circle)          ;; list all protocols it satisfies
    Dispatch key = (type value) = :ns/RecordName for records, :string/:number/... for primitives.
    Note: Math/PI is JVM Java interop — does NOT work in cljam.
    Use clojure.math/PI or js/Math.PI instead."

   :schema-primitives
   "Primitive schemas: :string :int :number :boolean :keyword :symbol :nil :any :uuid :char
    (s/validate :string \\"hi\\")   ;; {:ok true :value \\"hi\\"}
    (s/validate :int 3.5)       ;; {:ok false :issues [{:error-code :int/wrong-type ...}]}
    :int requires integer (no decimal). :number accepts any number.
    :any always passes. :nil only accepts nil."

   :schema-compound
   "Compound schemas:
    [:map [:k schema] [:k {:optional true} schema] ...]
    [:map-of key-schema val-schema]
    [:vector item-schema]
    [:tuple s1 s2 s3]           ;; fixed-length, positional
    [:maybe schema]             ;; nil or schema
    [:or s1 s2 ...]             ;; first match wins
    [:and s1 s2 ...]            ;; all must pass (short-circuits at first failure)
    [:enum v1 v2 ...]           ;; value must be one of these
    [:fn pred]                  ;; arbitrary predicate fn
    Constraints map (second el): {:min n :max n :pattern \\"regex\\"}"

   :schema-api
   "(require '[cljam.schema.core :as s])
    (s/validate schema value)        ;; {:ok bool :value v} or {:ok false :issues [...]}
    (s/valid? schema value)          ;; boolean shorthand
    (s/explain schema value)         ;; issues include :message (uses default-messages)
    (s/explain schema value {:messages {:kw \\"override\\" :kw2 (fn [iss] ...)}})
    (s/json-schema schema)           ;; compile to JSON Schema map (draft 2020-12)
    Issues shape: {:error-code :kw :path [...] :schema schema}
    Error codes: :string/wrong-type :int/too-small :map/missing-key :tuple/wrong-length etc."

   :describe
   "(describe value)            ;; returns a plain map describing any cljam value
    (describe (find-ns 'my.ns)) ;; {:kind :namespace :var-count N :vars {...}}
    (describe my-fn)            ;; {:kind :fn :arglists [...] :doc \\"...\\"}
    (describe #'my-fn)          ;; var-level, includes :doc from var meta
    (ns-map (find-ns 'my.ns))   ;; map of sym → var for full namespace inspection
    Key insight: describe + ns-map let you discover the live runtime without reading source."

   :sessions
   "Sessions are isolated runtimes — defn in session A is invisible in session B.
    To share a definition across sessions: eval the same code into each session explicitly.
    Atoms defined in session A ARE shared if session B holds a reference to the same atom.
    nREPL: multiple Calva sessions + cljam-mcp can all share one nREPL server.
    connect_nrepl { port } → returns other_sessions (find Calva session by namespace).
    nrepl_eval { session_id, code } → eval into any session by ID."

   :pair-programming
   "Start nREPL server: cljam nrepl-server --port 7888 --root-dir /path/to/project
    Calva connects normally. cljam-mcp calls connect_nrepl { port: 7888 }.
    connect_nrepl response includes other_sessions — identify Calva's session by :ns.
    Both sides eval into the same session_id → truly shared state.
    Atoms, defs, registered multimethods — all visible to both parties instantly.
    Workflow: human defines fns, AI calls them (or vice versa)."

   :and-short-circuit
   "[:and s1 s2 ...] short-circuits at the first failing branch.
    If s1 is a type schema (:int) and s2 is [:fn pred], and the value fails :int,
    the [:fn] branch is never evaluated — only :int/wrong-type is reported.
    This means [:and :int [:fn pos?]] is safe: the predicate never runs on a non-int.
    Contrast with old behavior (pre-fix): both :int/wrong-type AND :fn/predicate-threw."

   :async
   "cljam async: (async ...) returns a CljPending immediately — NOT the evaluated value.
    @ (deref) inside an async block awaits a CljPending. @ outside async THROWS.
    (async 42)                 ;; → CljPending (type :pending), not 42
    (pending? (async 42))      ;; → true
    (async @(promise-of 10))   ;; → CljPending that resolves to 10
    (promise-of v)             ;; wrap any value in a CljPending
    (then p f)                 ;; chain: apply f to resolved value, returns new CljPending
    (catch* p f)               ;; error handling: f called with thrown value if p rejects
    (all [p1 p2 p3])           ;; fan-out: resolves when all resolve → vector of results
    ;; WRONG: @(promise-of 42) at top level → throws 'requires an (async ...) context'
    ;; RIGHT: (async @(promise-of 42))  — deref inside async block
    evaluateAsync              ;; embedding API: auto-unwraps CljPending, surfaces errors
    JS Promises auto-become CljPending at every interop boundary — no wrapping needed:
      (js/fetch url)                      ;; → CljPending, NOT a js-value
      (then (js/fetch url) #((. % json))) ;; chains naturally
      (async (let [r @(js/fetch url)] r)) ;; @ works inside async
    Deref with timeout (JVM-style): (deref p ms) — defaults to 30 000ms.
      (async (deref slow-pending 5000))   ;; throws after 5s if not resolved
      (async (try (deref p 1000) (catch :default e :timed-out)))
    Catching rejections: use (catch :default e body) — NOT (catch Exception e body).
      (catch* p #(println \\"rejected:\\" %))  ;; monad style
      (async (try @p (catch :default e e))) ;; async/try style"

   :js-interop
   "cljam JS interop — NOT ClojureScript. Different dot syntax.
    Property access:  (. obj field)            ;; e.g. (. \\"hello\\" length) → 5
    Method with args: (. obj method arg...)    ;; e.g. (. \\"hello\\" indexOf \\"l\\") → 2
    Zero-arg method:  ((. obj method))         ;; e.g. ((. \\"hello\\" toUpperCase)) → \\"HELLO\\"
    !! GOTCHA: (. res json) returns the bound function — does NOT call it.
               ((. res json)) with double parens CALLS the method. Silent wrong-result otherwise.
    Dot-chain symbol: js/Math.floor, js/Math.PI  ;; walk property chain from hostBinding
    Dot-chain call:   (js/Math.floor 3.7) → 3    ;; call result of dot-chain walk
    Dynamic access:   (js/get obj \\"key\\") or (js/get obj :key)
    Dynamic set:      (js/set! obj \\"key\\" value)
    Construct:        (js/new Constructor args...)  ;; Constructor must be a js-value
                      If Constructor returns a Promise, js/new returns CljPending automatically.
    JS objects ≠ Clojure maps: use js/get, js/keys, js/merge — NOT get/select-keys/assoc.
    Inject globals:   createSession({ hostBindings: { Math, console, fetch } })
    String requires:  (ns my.ns (:require [\\"react\\" :as React])) — needs importModule option
    Sandbox preset has Math pre-injected as js/Math.
    Caveat: JS globals are NOT available by default — inject via hostBindings explicitly."

   :node-io
   "Node.js IO functions — available in clojure.core when running in CLI, nREPL, or cljam-mcp.
    (slurp path)               ;; read file as string; path relative to session currentDir
    (spit path content)        ;; write string to file
    (pwd)                      ;; current working directory as string
    (cd path)                  ;; change working directory; returns new absolute path
    (load path)                ;; load + eval a .clj file; sets ns to the file's ns
    String requires for Node built-ins (needs allowDynamicImport: true):
      (ns my.ns (:require [\\"node:path\\" :as path]
                          [\\"node:child_process\\" :as cp]
                          [\\"node:fs/promises\\" :as fs]))
    Shell execution (sync):
      (defn sh [cmd]
        (let [cp ((. js/process getBuiltinModule) \\"child_process\\")]
          ((. (. cp execSync cmd) toString))))
    Directory listing (sync):
      (defn ls [dir]
        (let [fs ((. js/process getBuiltinModule) \\"fs\\")]
          (vec (js/seq (. fs readdirSync dir)))))
    NOTE: (async @(. fs readFile path \\"utf-8\\")) does NOT work — @  only deref's CljPending,
    not raw JS Promises. Use slurp for sync reads or string-require node:fs/promises + then."

   :testing
   "clojure.test requires an explicit require — deftest is NOT auto-loaded.
    (require '[clojure.test :refer [deftest is testing run-tests thrown? thrown-with-msg?]])
    (deftest my-test
      (is (= 1 1))
      (testing \\"edge case\\"
        (is (nil? nil))))
    (run-tests)  ;; → {:test 1 :pass 2 :fail 0 :error 0}
    thrown? takes a KEYWORD error type (NOT a class like JVM Clojure):
      (is (thrown? :default (boom!)))           ;; catches anything
      (is (thrown? :error/runtime (/ 1 0)))     ;; catches runtime errors only
      (is (thrown-with-msg? :default #\\"oops\\" (boom!)))
    use-fixtures: (use-fixtures :each {:before setup-fn :after teardown-fn})
    Vitest integration: add cljTestPlugin to vite.config.ts.
    IMPORTANT: import { cljTestPlugin } from '@regibyte/cljam/vite-plugin' (NOT '@regibyte/cljam')
    Each (deftest ...) becomes a Vitest test — failures surface in vitest output."

   :handbook
   "This namespace. An atom registry of machine-readable tips for LLM agents.
    (require '[cljam.handbook :as h])
    (h/topics)                  ;; list all topic keys
    (h/lookup :sort)            ;; get entry as string
    (h/register! :my-tip \\"...\\") ;; add/update (session-local unless committed to file)
    Topics are mutable during a session — agents can refine entries and test them live."

   }))

;; ── Public API ────────────────────────────────────────────────────────────

(defn topics
  "List all available handbook topic keys."
  []
  (keys @*topics*))

(defn lookup
  "Look up a handbook topic. Returns the entry string, or a not-found message
   that lists available topics."
  [topic]
  (or (get @*topics* topic)
      (str "No handbook entry for " topic
           ". Available topics: " (sort (map name (keys @*topics*))))))

(defn register!
  "Add or update a handbook topic. Changes are session-local unless committed
   to the source file. Use this to iterate on entries during a live session."
  [topic content]
  (swap! *topics* assoc topic content)
  topic)
`,Kc=`(ns clojure.core
  "The core Clojure standard library. Provides the fundamental building blocks
  of the language: collection operations, sequence processing, arithmetic,
  destructuring, macros, protocols, multimethods, atoms, and more.

  This namespace is automatically loaded in every cljam session.")


;; Bootstrap primitives
;; Only special forms (if, let*, def, fn*, do, quote) + native fns.                                       
;; No Clojure-defined macros here.   

;; Bootstrap shims: lightweight macros so the Clojure layer owns let/fn/loop
;; from the very first line. The full destructuring-aware versions redefine
;; these below once their dependencies (destructure, maybe-destructured, etc.)
;; are available.
(defmacro let [bindings & body]
  \`(let* ~bindings ~@body))

(defmacro fn [& sigs]
  (cons 'fn* sigs))

(defmacro loop [bindings & body]
  \`(loop* ~bindings ~@body))

(defmacro declare
  "defs the supplied var names with no bindings, useful for making forward declarations."
  [sym]
  \`(def ~sym))


(defmacro
  ^{:doc-group "Control Flow"}
  and
  "Evaluates exprs one at a time, from left to right. If a form returns logical false, returns that value without evaluating the rest. Otherwise returns the value of the last expr. (and) returns true."
  [& forms]
  (if (nil? forms)
    true
    (if (nil? (seq (rest forms)))
      (first forms)
      \`(let [v# ~(first forms)]
         (if v# (and ~@(rest forms)) v#)))))

(defmacro
  ^{:doc-group "Control Flow"}
  or
  "Evaluates exprs one at a time, from left to right. If a form returns a logical true value, returns that value without evaluating the rest. Otherwise returns the value of the last expr. (or) returns nil."
  [& forms]
  (if (nil? forms)
    nil
    (if (nil? (seq (rest forms)))
      (first forms)
      \`(let [v# ~(first forms)]
         (if v# v# (or ~@(rest forms)))))))


;; Native shims, for autocomplete only.
(declare all)
(declare async)
(declare catch*)
(declare then)
(declare loop*)
(declare let*)
(declare repeat*)
(declare range*)
(declare seen-rest?)
(declare pprint)
(declare hierarchy-descendants-global)
(declare hierarchy-isa?-global)
(declare hierarchy-isa?*)
(declare hierarchy-derive-global!)
(declare hierarchy-derive*)
(declare hierarchy-underive-global!)
(declare hierarchy-underive*)
(declare hierarchy-parents-global)
(declare hierarchy-ancestors-global)
(declare describe*)

(defmacro
  ^{:doc-group "Functions"}
  defn
  "Same as (def name (fn [params*] exprs*)). Optionally accepts a docstring and attribute-map before params. Attaches :doc and :arglists metadata to the var."
  [name & fdecl]
  (let [doc       (if (string? (first fdecl)) (first fdecl) nil)
        rest-decl (if doc (rest fdecl) fdecl)
        arglists  (if (vector? (first rest-decl))
                    (vector (first rest-decl))
                    (reduce (fn [acc arity] (conj acc (first arity))) [] rest-decl))
        meta-map  (let [sym-meta (if (meta name) (meta name) {})]
                    (if doc
                      (assoc sym-meta :doc doc :arglists arglists)
                      (assoc sym-meta :arglists arglists)))]
    \`(def ~(with-meta name meta-map) (fn ~name ~@rest-decl))))

(defmacro defn-
  "Same as defn, but marks the var as private."
  [name & fdecl]
  (list* 'defn (with-meta name (assoc (meta name) :private true)) fdecl))

;; defmulti / defmethod: multimethod sugar over native make-multimethod! / add-method!
;; defmulti uses a re-eval guard in make-multimethod! — re-loading a namespace
;; preserves all registered methods.
(defmacro
  ^{:doc-group "Abstractions"}
  defmulti
  "Creates a new multimethod with the given name and dispatch function. Re-evaluating a defmulti preserves all previously registered methods."
  [name dispatch-fn & opts]
  \`(make-multimethod! ~(str name) ~dispatch-fn ~@opts))

(defmacro
  ^{:doc-group "Abstractions"}
  defmethod
  "Creates and installs a new method for multimethod mm-name with dispatch value dispatch-val."
  [mm-name dispatch-val & fn-tail]
  \`(add-method! (var ~mm-name) ~dispatch-val (fn ~@fn-tail)))

;; delay: wraps body in a zero-arg fn and defers evaluation until forced.
;; make-delay is a native primitive that creates the CljDelay value.
(defmacro
  ^{:doc-group "Abstractions"}
  delay
  "Takes a body of expressions and yields a Delay object that will invoke the body only the first time it is forced (via force or deref/@), and will cache the result and return it on all subsequent force calls."
  [& body]
  \`(make-delay (fn* [] ~@body)))


(defn
  ^{:doc-group "Metadata"}
  vary-meta
  "Returns an object of the same type and value as obj, with
  (apply f (meta obj) args) as its metadata."
  [obj f & args]
  (with-meta obj (apply f (meta obj) args)))

(defn
  ^{:doc-group "Comparison"}
  not
  "Returns true if x is logical false, false otherwise."
  [x] (if x false true))

(defn
  ^{:doc-group "Sequences"}
  next
  "Returns a seq of the items after the first. Calls seq on its
  argument.  If there are no more items, returns nil."
  [coll]
  (seq (rest coll)))


(defn
  ^{:doc-group "Sequences"}
  second
  "Same as (first (next x))"
  [coll]
  (first (next coll)))


(defmacro
  ^{:doc-group "Control Flow"}
  when
  "Executes body when condition is true, otherwise returns nil."
  [condition & body]
  \`(if ~condition (do ~@body) nil))

(defmacro
  ^{:doc-group "Control Flow"}
  when-not
  "Executes body when condition is false, otherwise returns nil."
  [condition & body]
  \`(if ~condition nil (do ~@body)))

(defmacro
  ^{:doc-group "Control Flow"}
  if-let
  "bindings => binding-form test
  If test is true, evaluates then with binding-form bound to the value of test, otherwise evaluates else."
  ([bindings then] \`(if-let ~bindings ~then nil))
  ([bindings then else]
   (let [form (first bindings)
         tst  (second bindings)]
     \`(let [~form ~tst]
        (if ~form ~then ~else)))))

(defmacro
  ^{:doc-group "Control Flow"}
  when-let
  "bindings => binding-form test
  When test is true, evaluates body with binding-form bound to the value of test."
  [bindings & body]
  (let [form (first bindings)
        tst  (second bindings)]
    \`(let [~form ~tst]
       (when ~form ~@body))))

(defmacro
  ^{:doc-group "Control Flow"}
  cond
  "Takes a set of test/expr pairs. Evaluates each test one at a time from left to right. If a test returns logical true, returns the value of the corresponding expr without evaluating the remaining tests."
  [& clauses]
  (if (nil? clauses)
    nil
    \`(if ~(first clauses)
       ~(first (next clauses))
       (cond ~@(rest (rest clauses))))))

(defmacro
  ^{:doc-group "Threading"}
  ->
  "Threads the expr through the forms. Inserts x as the second item in the first form, making a list of it if it is not a list already. If there are more forms, inserts the first form as the second item in second form, etc."
  [x & forms]
  (if (nil? forms)
    x
    (let [form (first forms)
          more (rest forms)
          threaded (if (list? form)
                     \`(~(first form) ~x ~@(rest form))
                     \`(~form ~x))]
      \`(-> ~threaded ~@more))))

(defmacro
  ^{:doc-group "Threading"}
  ->>
  "Threads the expr through the forms. Inserts x as the last item in the first form, making a list of it if it is not a list already. If there are more forms, inserts the first form as the last item in second form, etc."
  [x & forms]
  (if (nil? forms)
    x
    (let [form (first forms)
          more (rest forms)
          threaded (if (list? form)
                     \`(~(first form) ~@(rest form) ~x)
                     \`(~form ~x))]
      \`(->> ~threaded ~@more))))

#_{:clj-kondo/ignore [:unused-binding]}
(defmacro comment
  "Ignores body, yields nil"
  [& body] nil)

(defmacro
  ^{:doc-group "Threading"}
  as->
  "Binds name to expr, evaluates the first form in the lexical context of that binding, then binds name to that result, repeating for each successive form. Returns the result of the last form."
  [expr name & forms]
  \`(let [~name ~expr
         ~@(reduce (fn [acc form] (conj acc name form)) [] forms)]
     ~name))

(defmacro
  ^{:doc-group "Threading"}
  cond->
  "Takes an expression and a set of test/form pairs. Threads expr through each form (via ->) whose corresponding test returns logical true."
  [expr & clauses]
  (let [g (gensym "cv")
        steps (reduce
               (fn [acc pair]
                 (let [test (first pair)
                       form (second pair)
                       threaded (if (list? form)
                                  \`(~(first form) ~g ~@(rest form))
                                  \`(~form ~g))]
                   (conj acc \`(if ~test ~threaded ~g))))
               []
               (partition-all 2 clauses))]
    \`(let [~g ~expr
           ~@(reduce (fn [acc step] (conj acc g step)) [] steps)]
       ~g)))

(defmacro
  ^{:doc-group "Threading"}
  cond->>
  "Takes an expression and a set of test/form pairs. Threads expr through each form (via ->>) whose corresponding test returns logical true."
  [expr & clauses]
  (let [g (gensym "cv")
        steps (reduce
               (fn [acc pair]
                 (let [test (first pair)
                       form (second pair)
                       threaded (if (list? form)
                                  \`(~(first form) ~@(rest form) ~g)
                                  \`(~form ~g))]
                   (conj acc \`(if ~test ~threaded ~g))))
               []
               (partition-all 2 clauses))]
    \`(let [~g ~expr
           ~@(reduce (fn [acc step] (conj acc g step)) [] steps)]
       ~g)))

(defmacro
  ^{:doc-group "Threading"}
  some->
  "When expr is not nil, threads it into the first form (via ->), and when that result is not nil, through the next etc."
  [expr & forms]
  (if (nil? forms)
    expr
    \`(let [v# ~expr]
       (if (nil? v#)
         nil
         (some-> (-> v# ~(first forms)) ~@(rest forms))))))

(defmacro
  ^{:doc-group "Threading"}
  some->>
  "When expr is not nil, threads it into the first form (via ->>), and when that result is not nil, through the next etc."
  [expr & forms]
  (if (nil? forms)
    expr
    \`(let [v# ~expr]
       (if (nil? v#)
         nil
         (some->> (->> v# ~(first forms)) ~@(rest forms))))))

(defn
  ^{:doc-group "Higher-order"}
  constantly
  "Returns a function that takes any number of arguments and returns x."
  [x] (fn [& _] x))

(defn
  ^{:doc-group "Predicates"}
  some?
  "Returns true if x is not nil, false otherwise"
  [x] (not (nil? x)))

#_{:clj-kondo/ignore [:unused-binding]}
(defn
  ^{:doc-group "Predicates"}
  any?
  "Returns true for any given argument"
  [x] true)

(defn
  ^{:doc-group "Higher-order"}
  complement
  "Takes a fn f and returns a fn that takes the same arguments as f,
  has the same effects, if any, and returns the opposite truth value."
  [f]
  (fn
    ([] (not (f)))
    ([x] (not (f x)))
    ([x y] (not (f x y)))
    ([x y & zs] (not (apply f x y zs)))))

(defn
  ^{:doc-group "Higher-order"}
  juxt
  "Takes a set of functions and returns a fn that is the juxtaposition
  of those fns. The returned fn takes a variable number of args and
  returns a vector containing the result of applying each fn to the args."
  [& fns]
  (fn [& args]
    (reduce (fn [acc f] (conj acc (apply f args))) [] fns)))

(defn
  ^{:doc-group "Maps"}
  merge
  "Returns a map that consists of the rest of the maps conj-ed onto
  the first. If a key occurs in more than one map, the mapping from
  the latter (left-to-right) will be the mapping in the result."
  [& maps]
  (if (nil? maps)
    nil
    (reduce
     (fn [acc m]
       (if (nil? m)
         acc
         (if (nil? acc)
           m
           (reduce
            (fn [macc entry]
              (assoc macc (first entry) (second entry)))
            acc
            m))))
     nil
     maps)))

(defn
  ^{:doc-group "Maps"}
  select-keys
  "Returns a map containing only those entries in map whose key is in keys."
  [m keys]
  (if (or (nil? m) (nil? keys))
    {}
    (let [missing (gensym)]
      (reduce
       (fn [acc k]
         (let [v (get m k missing)]
           (if (= v missing)
             acc
             (assoc acc k v))))
       {}
       keys))))

(defn
  ^{:doc-group "Maps"}
  update
  "Updates a value in an associative structure where k is a key and f is a
  function that will take the old value and any supplied args and return the
  new value, and returns a new structure."
  [m k f & args]
  (let [target (if (nil? m) {} m)]
    (assoc target k (if (nil? args)
                      (f (get target k))
                      (apply f (get target k) args)))))

(defn
  ^{:doc-group "Maps"}
  get-in
  "Returns the value in a nested associative structure, where ks is a
  sequence of keys. Returns nil if the key is not present, or the not-found
  value if supplied."
  ([m ks]
   (reduce get m ks))
  ([m ks not-found]
   (loop [m m, ks (seq ks)]
     (if (nil? ks)
       m
       (if (contains? m (first ks))
         (recur (get m (first ks)) (next ks))
         not-found)))))

(defn
  ^{:doc-group "Maps"}
  assoc-in
  "Associates a value in a nested associative structure, where ks is a
  sequence of keys and v is the new value. Returns a new nested structure."
  [m ks v]
  (let [k    (first ks)
        more (next ks)]
    (if more
      (assoc m k (assoc-in (get m k) more v))
      (assoc m k v))))

(defn
  ^{:doc-group "Maps"}
  update-in
  "Updates a value in a nested associative structure, where ks is a
  sequence of keys and f is a function that will take the old value and any
  supplied args and return the new value. Returns a new nested structure."
  [m ks f & args]
  (assoc-in m ks (apply f (get-in m ks) args)))

(defn
  ^{:doc-group "Maps"}
  fnil
  "Takes a function f, and returns a function that calls f, replacing
  a nil first argument with x, optionally nil second with y, nil third with z."
  ([f x]
   (fn [a & more]
     (apply f (if (nil? a) x a) more)))
  ([f x y]
   (fn [a b & more]
     (apply f (if (nil? a) x a) (if (nil? b) y b) more)))
  ([f x y z]
   (fn [a b c & more]
     (apply f (if (nil? a) x a) (if (nil? b) y b) (if (nil? c) z c) more))))

(defn
  ^{:doc-group "Maps"}
  frequencies
  "Returns a map from distinct items in coll to the number of times they appear."
  [coll]
  (if (nil? coll)
    {}
    (reduce
     (fn [counts item]
       (assoc counts item (inc (get counts item 0))))
     {}
     coll)))

(defn
  ^{:doc-group "Maps"}
  group-by
  "Returns a map of the elements of coll keyed by the result of f on each
  element. The value at each key is a vector of matching elements."
  [f coll]
  (if (nil? coll)
    {}
    (reduce
     (fn [acc item]
       (let [k (f item)]
         (assoc acc k (conj (get acc k []) item))))
     {}
     coll)))

(defn
  ^{:doc-group "Sequences"}
  distinct
  "Returns a vector of the elements of coll with duplicates removed,
  preserving first-seen order."
  [coll]
  (if (nil? coll)
    []
    (get
     (reduce
      (fn [state item]
        (let [seen (get state 0)
              out  (get state 1)]
          (if (get seen item false)
            state
            [(assoc seen item true) (conj out item)])))
      [{} []]
      coll)
     1)))

(defn
  ^{:doc-group "Sequences"}
  flatten-step
  "Internal helper for flatten."
  [v]
  (if (or (list? v) (vector? v))
    (reduce
     (fn [acc item]
       (into acc (flatten-step item)))
     []
     v)
    [v]))

(defn
  ^{:doc-group "Sequences"}
  flatten
  "Takes any nested combination of sequential things (lists/vectors) and
  returns their contents as a single flat vector."
  [x]
  (if (nil? x)
    []
    (flatten-step x)))

(defn
  ^{:doc-group "Sequences"}
  reduce-kv
  "Reduces an associative structure. f should be a function of 3
  arguments: accumulator, key/index, value."
  [f init coll]
  (cond
    (map? coll)
    (reduce
     (fn [acc entry]
       (f acc (first entry) (second entry)))
     init
     coll)

    (vector? coll)
    (loop [idx 0
           acc init]
      (if (< idx (count coll))
        (recur (inc idx) (f acc idx (nth coll idx)))
        acc))

    :else
    (throw
     (ex-info
      "reduce-kv expects a map or vector"
      {:coll coll}))))

(defn
  ^{:doc-group "Sequences"}
  sort-compare
  "Internal helper: normalizes comparator results."
  [cmp a b]
  (let [r (cmp a b)]
    (if (number? r)
      (< r 0)
      r)))

(defn
  ^{:doc-group "Sequences"}
  insert-sorted
  "Internal helper for insertion-sort based sort implementation."
  [cmp x sorted]
  (loop [left  []
         right sorted]
    (if (nil? (seq right))
      (conj left x)
      (let [y (first right)]
        (if (sort-compare cmp x y)
          (into (conj left x) right)
          (recur (conj left y) (rest right)))))))

(defn
  ^{:doc-group "Sequences"}
  sort
  "Returns the items in coll in sorted order. With no comparator, uses
  compare (works on numbers, strings, keywords, chars). Comparator may
  return boolean or number."
  ([coll] (sort compare coll))
  ([cmp coll]
   (if (nil? coll)
     []
     (reduce
      (fn [acc item]
        (insert-sorted cmp item acc))
      []
      coll))))

(defn
  ^{:doc-group "Sequences"}
  sort-by
  "Returns a sorted sequence of items in coll, where the sort order is
  determined by comparing (keyfn item). Default comparator is compare."
  ([keyfn coll] (sort-by keyfn compare coll))
  ([keyfn cmp coll]
   (sort
    (fn [a b]
      (cmp (keyfn a) (keyfn b)))
    coll)))

(def
  ^{:doc-group "Predicates"}
  not-any? (comp not some))

(defn
  ^{:doc-group "Predicates"}
  not-every?
  "Returns false if (pred x) is logical true for every x in
  coll, else true."
  [pred coll] (not (every? pred coll)))

;; ── Transducer protocol ──────────────────────────────────────────────────────

;; into: 2-arity uses reduce+conj; 3-arity uses transduce
(defn
  ^{:doc-group "Sequences"}
  into
  "Returns a new coll consisting of to-coll with all of the items of
   from-coll conjoined. A transducer may be supplied."
  ([to from] (reduce conj to from))
  ([to xf from] (transduce xf conj to from)))

;; sequence: materialise a transducer over a collection into a seq (list)
(defn
  ^{:doc-group "Sequences"}
  sequence
  "Coerces coll to a (possibly empty) sequence, if it is not already
  one. Will not force a seq. (sequence nil) yields (), When a
  transducer is supplied, returns a lazy sequence of applications of
  the transform to the items in coll"
  ([coll] (apply list (into [] coll)))
  ([xf coll] (apply list (into [] xf coll))))

(defn
  ^{:doc-group "Sequences"}
  completing
  "Takes a reducing function f of 2 args and returns a fn suitable for
  transduce by adding an arity-1 signature that calls cf (default -
  identity) on the result argument."
  ([f] (completing f identity))
  ([f cf]
   (fn
     ([] (f))
     ([x] (cf x))
     ([x y] (f x y)))))

;; map: 1-arg returns transducer; 2-arg is eager; 3+-arg zips collections
(defn
  ^{:doc-group "Sequences"}
  map
  "Returns a sequence consisting of the result of applying f to the set
  of first items of each coll, followed by applying f to the set of
  second items in each coll, until any one of the colls is exhausted.
  Any remaining items in other colls are ignored. Returns a transducer
  when no collection is provided."
  ([f]
   (fn [rf]
     (fn
       ([] (rf))
       ([result] (rf result))
       ([result input] (rf result (f input))))))
  ([f coll]
   (lazy-seq
    (when-let [s (seq coll)]
      (cons (f (first s)) (map f (rest s))))))
  ([f c1 c2]
   (loop [s1 (seq c1)
          s2 (seq c2)
          acc []]
     (if (or (nil? s1) (nil? s2))
       acc
       (recur
        (next s1)
        (next s2)
        (conj acc (f (first s1) (first s2)))))))
  ([f c1 c2 & colls]
   (loop [seqs (map seq (cons c1 (cons c2 colls)))
          acc []]
     (if (some nil? seqs)
       acc
       (recur (map next seqs) (conj acc (apply f (map first seqs))))))))

;; filter: 1-arg returns transducer; 2-arg is eager
(defn
  ^{:doc-group "Sequences"}
  filter
  "Returns a sequence of the items in coll for which
  (pred item) returns logical true. pred must be free of side-effects.
  Returns a transducer when no collection is provided."
  ([pred]
   (fn [rf]
     (fn
       ([] (rf))
       ([result] (rf result))
       ([result input]
        (if (pred input)
          (rf result input)
          result)))))
  ([pred coll]
   (lazy-seq
    (when-let [s (seq coll)]
      (if (pred (first s))
        (cons (first s) (filter pred (rest s)))
        (filter pred (rest s)))))))

(defn
  ^{:doc-group "Sequences"}
  remove
  "Returns a lazy sequence of the items in coll for which
  (pred item) returns logical false. pred must be free of side-effects.
  Returns a transducer when no collection is provided."
  ([pred] (filter (complement pred)))
  ([pred coll]
   (filter (complement pred) coll)))



;; take: stateful transducer; signals early termination after n items
;; r > 0 → keep going; r = 0 → take last item and stop; r < 0 → already past limit, stop
(defn
  ^{:doc-group "Sequences"}
  take
  "Returns a sequence of the first n items in coll, or all items if
  there are fewer than n.  Returns a stateful transducer when
  no collection is provided."
  ([n]
   (fn [rf]
     (let [remaining (volatile! n)]
       (fn
         ([] (rf))
         ([result] (rf result))
         ([result input]
          (let [n @remaining
                nrem (vswap! remaining dec)
                result (if (pos? n)
                         (rf result input)
                         result)]
            (if (not (pos? nrem))
              (ensure-reduced result)
              result)))))))
  ([n coll]
   (lazy-seq
    (when (pos? n)
      (when-let [s (seq coll)]
        (cons (first s) (take (dec n) (rest s))))))))

;; take-while: stateless transducer; emits reduced when pred fails
(defn
  ^{:doc-group "Sequences"}
  take-while
  "Returns a sequence of successive items from coll while
  (pred item) returns logical true. pred must be free of side-effects.
  Returns a transducer when no collection is provided."
  ([pred]
   (fn [rf]
     (fn
       ([] (rf))
       ([result] (rf result))
       ([result input]
        (if (pred input)
          (rf result input)
          (reduced result))))))
  ([pred coll]
   (lazy-seq
    (when-let [s (seq coll)]
      (when (pred (first s))
        (cons (first s) (take-while pred (rest s))))))))

;; drop: stateful transducer; skips first n items
;; r >= 0 → still skipping; r < 0 → past the drop zone, start taking
(defn
  ^{:doc-group "Sequences"}
  drop
  "Returns a sequence of all but the first n items in coll.
   Returns a stateful transducer when no collection is provided."
  ([n]
   (fn [rf]
     (let [remaining (volatile! n)]
       (fn
         ([] (rf))
         ([result] (rf result))
         ([result input]
          (let [rem @remaining]
            (vswap! remaining dec)
            (if (pos? rem)
              result
              (rf result input))))))))
  ([n coll]
   (if (pos? n)
     (lazy-seq (drop (dec n) (rest coll)))
     (lazy-seq (seq coll)))))

(defn
  ^{:doc-group "Sequences"}
  drop-last
  "Return a sequence of all but the last n (default 1) items in coll"
  ([coll] (drop-last 1 coll))
  ([n coll] (map (fn [x _] x) coll (drop n coll))))

(defn
  ^{:doc-group "Sequences"}
  take-last
  "Returns a sequence of the last n items in coll.  Depending on the type
  of coll may be no better than linear time.  For vectors, see also subvec."
  [n coll]
  (loop [s (seq coll), lead (seq (drop n coll))]
    (if lead
      (recur (next s) (next lead))
      s)))

;; drop-while: stateful transducer; passes through once pred fails
(defn
  ^{:doc-group "Sequences"}
  drop-while
  "Returns a sequence of the items in coll starting from the
  first item for which (pred item) returns logical false.  Returns a
  stateful transducer when no collection is provided."
  ([pred]
   (fn [rf]
     (let [dropping (volatile! true)]
       (fn
         ([] (rf))
         ([result] (rf result))
         ([result input]
          (if (and @dropping (pred input))
            result
            (do
              (vreset! dropping false)
              (rf result input))))))))
  ([pred coll]
   (lazy-seq
    (let [s (seq coll)]
      (if (and s (pred (first s)))
        (drop-while pred (rest s))
        s)))))

;; letfn: expands to letfn* (the primitive), which takes a flat vector of
;; [name fn-form name fn-form ...] pairs and evaluates each fn-form in a
;; shared env frame so all fns can see each other (mutual recursion).
(defmacro
  ^{:doc-group "Control Flow"}
  letfn
  "fnspecs => (fname [params*] exprs)+
  Takes a vector of function specs and a body. Binds each fname to its fn in a shared environment so all functions can mutually reference each other."
  [fnspecs & body]
  (cons 'letfn*
        (cons (reduce (fn* [acc spec]
                           (conj (conj acc (first spec))
                                 (cons 'fn* (rest spec))))
                      []
                      fnspecs)
              body)))

;; map-indexed: stateful transducer; passes index and item to f
(defn
  ^{:doc-group "Sequences"}
  map-indexed
  "Returns a sequence consisting of the result of applying f to 0
   and the first item of coll, followed by applying f to 1 and the second
   item in coll, etc, until coll is exhausted. Thus function f should
   accept 2 arguments, index and item. Returns a stateful transducer when
   no collection is provided."
  ([f]
   (fn [rf]
     (let [i (volatile! -1)]
       (fn
         ([] (rf))
         ([result] (rf result))
         ([result input]
          (rf result (f (vswap! i inc) input)))))))
  ([f coll]
   (letfn [(step [i s]
             (lazy-seq
              (when-let [xs (seq s)]
                (cons (f i (first xs)) (step (inc i) (rest xs))))))]
     (step 0 coll))))

;; dedupe: stateful transducer; removes consecutive duplicates
(defn
  ^{:doc-group "Sequences"}
  dedupe
  "Returns a sequence removing consecutive duplicates in coll.
   Returns a transducer when no collection is provided."
  ([]
   (fn [rf]
     (let [pv (volatile! ::none)]
       (fn
         ([] (rf))
         ([result] (rf result))
         ([result input]
          (let [prior @pv]
            (vreset! pv input)
            (if (= prior input)
              result
              (rf result input))))))))
  ([coll]
   (sequence (dedupe) coll)))

;; partition-all: stateful transducer; groups items into vectors of size n
(defn
  ^{:doc-group "Sequences"}
  partition-all
  "Returns a sequence of lists like partition, but may include
   partitions with fewer than n items at the end.  Returns a stateful
   transducer when no collection is provided."
  ([n]
   (fn [rf]
     (let [buf (volatile! [])]
       (fn
         ([] (rf))
         ([result]
          (let [b @buf]
            (vreset! buf [])
            (if (empty? b)
              (rf result)
              (rf (unreduced (rf result b))))))
         ([result input]
          (let [nb (conj @buf input)]
            (if (= (count nb) n)
              (do
                (vreset! buf [])
                (rf result nb))
              (do
                (vreset! buf nb)
                result))))))))
  ([n coll]
   (sequence (partition-all n) coll)))

;; ── Documentation ────────────────────────────────────────────────────────────

(defmacro
  ^{:doc-group "Dev"}
  doc
  [sym]
  \`(let [v#        (var ~sym)
         m#        (meta v#)
         d#        (:doc m#)
         args#     (:arglists m#)
         args-str# (when args#
                     (str "("
                          (reduce
                           (fn [acc# a#]
                             (if (= acc# "")
                               (str a#)
                               (str acc# " \\n " a#)))
                           ""
                           args#)
                          ")"))]
     (println (str "-------------------------\\n"
                   ~(str sym) "\\n"
                   (if args-str# (str args-str# "\\n") "")
                   "  " (or d# "No documentation available.")))))

(defn
  ^{:doc-group "Errors"}
  make-err
  "Creates an error map with type, message, data and optionally cause"
  ([type message] (make-err type message nil nil))
  ([type message data] (make-err type message data nil))
  ([type message data cause] {:type type :message message :data data :cause cause}))

;; ── Sequence utilities ──────────────────────────────────────────────────────

(defn
  ^{:doc-group "Sequences"}
  butlast
  "Return a seq of all but the last item in coll, in linear time"
  [coll]
  (loop [ret [] s (seq coll)]
    (if (next s)
      (recur (conj ret (first s)) (next s))
      (seq ret))))

(defn
  ^{:doc-group "Sequences"}
  fnext
  "Same as (first (next x))"
  [x] (first (next x)))

(defn
  ^{:doc-group "Sequences"}
  nfirst
  "Same as (next (first x))"
  [x] (next (first x)))

(defn
  ^{:doc-group "Sequences"}
  nnext
  "Same as (next (next x))"
  [x] (next (next x)))

(defn
  ^{:doc-group "Sequences"}
  nthrest
  "Returns the nth rest of coll, coll when n is 0."
  [coll n]
  (loop [n n xs coll]
    (if (and (pos? n) (seq xs))
      (recur (dec n) (rest xs))
      xs)))

(defn
  ^{:doc-group "Sequences"}
  nthnext
  "Returns the nth next of coll, (seq coll) when n is 0."
  [coll n]
  (loop [n n xs (seq coll)]
    (if (and (pos? n) xs)
      (recur (dec n) (next xs))
      xs)))

(defn
  ^{:doc-group "Sequences"}
  list*
  "Creates a new seq containing the items prepended to the rest, the
  last of which will be treated as a sequence."
  ([args] (seq args))
  ([a args] (cons a args))
  ([a b args] (cons a (cons b args)))
  ([a b c args] (cons a (cons b (cons c args))))
  ([a b c d & more]
   (cons a (cons b (cons c (apply list* d more))))))

(defn
  ^{:doc-group "Sequences"}
  mapv
  "Returns a vector consisting of the result of applying f to the
  set of first items of each coll, followed by applying f to the set
  of second items in each coll, until any one of the colls is exhausted."
  ([f coll] (into [] (map f) coll))
  ([f c1 c2] (into [] (map f c1 c2)))
  ([f c1 c2 c3] (into [] (map f c1 c2 c3)))
  ([f c1 c2 c3 & colls] (into [] (apply map f c1 c2 c3 colls))))

(defn
  ^{:doc-group "Sequences"}
  filterv
  "Returns a vector of the items in coll for which
  (pred item) returns logical true."
  [pred coll]
  (into [] (filter pred) coll))

(defn
  ^{:doc-group "Sequences"}
  run!
  "Runs the supplied procedure (via reduce), for purposes of side
  effects, on successive items in the collection. Returns nil."
  [proc coll]
  (reduce (fn [_ x] (proc x) nil) nil coll))

(defn
  ^{:doc-group "Sequences"}
  keep
  "Returns a sequence of the non-nil results of (f item). Note,
  this means false return values will be included.  f must be free of
  side-effects.  Returns a transducer when no collection is provided."
  ([f]
   (fn [rf]
     (fn
       ([] (rf))
       ([result] (rf result))
       ([result input]
        (let [v (f input)]
          (if (nil? v)
            result
            (rf result v)))))))
  ([f coll]
   (lazy-seq
    (when-let [s (seq coll)]
      (let [v (f (first s))]
        (if (nil? v)
          (keep f (rest s))
          (cons v (keep f (rest s)))))))))

(defn
  ^{:doc-group "Sequences"}
  keep-indexed
  "Returns a sequence of the non-nil results of (f index item). Note,
  this means false return values will be included.  f must be free of
  side-effects.  Returns a stateful transducer when no collection is provided."
  ([f]
   (fn [rf]
     (let [i (volatile! -1)]
       (fn
         ([] (rf))
         ([result] (rf result))
         ([result input]
          (let [v (f (vswap! i inc) input)]
            (if (nil? v)
              result
              (rf result v))))))))
  ([f coll]
   (letfn [(step [i s]
             (lazy-seq
              (when-let [xs (seq s)]
                (let [v (f i (first xs))]
                  (if (nil? v)
                    (step (inc i) (rest xs))
                    (cons v (step (inc i) (rest xs))))))))]
     (step 0 coll))))

(defn
  ^{:doc-group "Sequences"}
  mapcat
  "Returns the result of applying concat to the result of applying map
  to f and colls.  Thus function f should return a collection. Returns
  a transducer when no collections are provided."
  ([f]
   (fn [rf]
     (let [inner ((map f) (fn
                            ([] (rf))
                            ([result] (rf result))
                            ([result input]
                             (reduce rf result input))))]
       inner)))
  ([f coll]
   (lazy-seq
    (when-let [s (seq coll)]
      (concat (f (first s)) (mapcat f (rest s))))))
  ([f coll & more]
   (apply concat (apply map f coll more))))

(defn
  ^{:doc-group "Sequences"}
  interleave
  "Returns a lazy sequence of the first item in each coll, then the second etc.
  Stops as soon as any coll is exhausted."
  ([c1 c2]
   (lazy-seq
    (let [s1 (seq c1) s2 (seq c2)]
      (when (and s1 s2)
        (cons (first s1) (cons (first s2) (interleave (rest s1) (rest s2))))))))
  ([c1 c2 & colls]
   (lazy-seq
    (let [seqs (map seq (cons c1 (cons c2 colls)))]
      (when (every? some? seqs)
        (concat (map first seqs) (apply interleave (map rest seqs))))))))

(defn
  ^{:doc-group "Sequences"}
  interpose
  "Returns a sequence of the elements of coll separated by sep.
  Returns a transducer when no collection is provided."
  ([sep]
   (fn [rf]
     (let [started (volatile! false)]
       (fn
         ([] (rf))
         ([result] (rf result))
         ([result input]
          (if @started
            (let [sepr (rf result sep)]
              (if (reduced? sepr)
                sepr
                (rf sepr input)))
            (do
              (vreset! started true)
              (rf result input))))))))
  ([sep coll]
   (drop 1 (interleave (repeat sep) coll))))

;; ── Lazy concat (shadows native eager concat) ──────────────────────────────
(defn
  ^{:doc-group "Sequences"}
  concat
  "Returns a lazy seq representing the concatenation of the elements in the
  supplied colls."
  ([] nil)
  ([x] (lazy-seq (seq x)))
  ([x y]
   (lazy-seq
    (let [s (seq x)]
      (if s
        (cons (first s) (concat (rest s) y))
        (seq y)))))
  ([x y & zs]
   (let [cat (fn cat [xy zs]
               (lazy-seq
                (let [xys (seq xy)]
                  (if xys
                    (cons (first xys) (cat (rest xys) zs))
                    (when (seq zs)
                      (cat (first zs) (next zs)))))))]
     (cat (concat x y) zs))))

(defn
  ^{:doc-group "Sequences"}
  iterate
  "Returns a lazy sequence of x, (f x), (f (f x)) etc.
  With 3 args, returns a finite sequence of n items (backwards compat)."
  ([f x]
   (lazy-seq (cons x (iterate f (f x)))))
  ([f x n]
   (loop [i 0 v x acc []]
     (if (< i n)
       (recur (inc i) (f v) (conj acc v))
       acc))))

(defn
  ^{:doc-group "Sequences"}
  repeatedly
  "Takes a function of no args, presumably with side effects, and
  returns a lazy infinite sequence of calls to it.
  With 2 args (n f), returns a finite sequence of n calls."
  ([f] (lazy-seq (cons (f) (repeatedly f))))
  ([n f]
   (loop [i 0 acc []]
     (if (< i n)
       (recur (inc i) (conj acc (f)))
       acc))))

(defn
  ^{:doc-group "Sequences"}
  cycle
  "Returns a lazy infinite sequence of repetitions of the items in coll.
  With 2 args (n coll), returns a finite sequence (backwards compat)."
  ([coll]
   (lazy-seq
    (when (seq coll)
      (concat coll (cycle coll)))))
  ([n coll]
   (let [s (into [] coll)]
     (loop [i 0 acc []]
       (if (< i n)
         (recur (inc i) (into acc s))
         acc)))))

(defn
  ^{:doc-group "Sequences"}
  repeat
  "Returns a lazy infinite sequence of xs.
  With 2 args (n x), returns a finite sequence of n copies."
  ([x] (lazy-seq (cons x (repeat x))))
  ([n x] (repeat* n x)))

(defn
  ^{:doc-group "Sequences"}
  range
  "Returns a lazy infinite sequence of integers from 0.
  With args, returns a finite sequence (delegates to native range*)."
  ([] (iterate inc 0))
  ([end] (range* end))
  ([start end] (range* start end))
  ([start end step] (range* start end step)))

(defn
  ^{:doc-group "IO"}
  newline
  "Writes a newline to *out*."
  [] (println ""))

(defn
  ^{:doc-group "Sequences"}
  dorun
  "Forces realization of a (possibly lazy) sequence. Walks the sequence
  without retaining the head. Returns nil."
  [coll]
  (when (seq coll)
    (recur (rest coll))))

(defn
  ^{:doc-group "Sequences"}
  doall
  "Forces realization of a (possibly lazy) sequence. Unlike dorun,
  retains the head and returns the seq."
  [coll]
  (dorun coll)
  coll)

(defn
  ^{:doc-group "Sequences"}
  take-nth
  "Returns a sequence of every nth item in coll.  Returns a stateful
  transducer when no collection is provided."
  ([n]
   (fn [rf]
     (let [i (volatile! -1)]
       (fn
         ([] (rf))
         ([result] (rf result))
         ([result input]
          (let [idx (vswap! i inc)]
            (if (zero? (mod idx n))
              (rf result input)
              result)))))))
  ([n coll]
   (sequence (take-nth n) coll)))

(defn
  ^{:doc-group "Sequences"}
  partition
  "Returns a sequence of lists of n items each, at offsets step
  apart. If step is not supplied, defaults to n, i.e. the partitions
  do not overlap. If a pad collection is supplied, use its elements as
  necessary to complete last partition up to n items. In case there are
  not enough padding elements, return a partition with less than n items."
  ([n coll] (partition n n coll))
  ([n step coll]
   (loop [s (seq coll) acc []]
     (if (nil? s)
       acc
       (let [p (into [] (take n) s)]
         (if (< (count p) n)
           acc
           (recur (seq (drop step s)) (conj acc p)))))))
  ([n step pad coll]
   (loop [s (seq coll) acc []]
     (if (nil? s)
       acc
       (let [p (into [] (take n) s)]
         (if (< (count p) n)
           (conj acc (into [] (take n) (concat p pad)))
           (recur (seq (drop step s)) (conj acc p))))))))

(defn
  ^{:doc-group "Sequences"}
  partition-by
  "Applies f to each value in coll, splitting it each time f returns a
  new value.  Returns a sequence of partitions.  Returns a stateful
  transducer when no collection is provided."
  ([f]
   (fn [rf]
     (let [pv (volatile! ::none)
           buf (volatile! [])]
       (fn
         ([] (rf))
         ([result]
          (let [b @buf]
            (vreset! buf [])
            (if (empty? b)
              (rf result)
              (rf (unreduced (rf result b))))))
         ([result input]
          (let [v (f input)
                p @pv]
            (vreset! pv v)
            (if (or (= p ::none) (= v p))
              (do (vswap! buf conj input) result)
              (let [b @buf]
                (vreset! buf [input])
                (rf result b)))))))))
  ([f coll]
   (lazy-seq
    (when-let [s (seq coll)]
      (let [fv        (f (first s))
            run       (into [] (cons (first s) (take-while #(= (f %) fv) (next s))))
            remaining (drop-while #(= (f %) fv) (next s))]
        (cons run (partition-by f remaining)))))))

(defn
  ^{:doc-group "Sequences"}
  reductions
  "Returns a sequence of the intermediate values of the reduction (as
  by reduce) of coll by f, starting with init."
  ([f coll]
   (if (empty? coll)
     (list (f))
     (reductions f (first coll) (rest coll))))
  ([f init coll]
   (loop [acc [init] val init s (seq coll)]
     (if (nil? s)
       acc
       (let [nval (f val (first s))]
         (if (reduced? nval)
           (conj acc (unreduced nval))
           (recur (conj acc nval) nval (next s))))))))

(defn
  ^{:doc-group "Sequences"}
  split-at
  "Returns a vector of [(take n coll) (drop n coll)]"
  [n coll]
  [(into [] (take n) coll) (into [] (drop n) coll)])

(defn
  ^{:doc-group "Sequences"}
  split-with
  "Returns a vector of [(take-while pred coll) (drop-while pred coll)]"
  [pred coll]
  [(into [] (take-while pred) coll) (into [] (drop-while pred) coll)])

(defn
  ^{:doc-group "Maps"}
  merge-with
  "Returns a map that consists of the rest of the maps conj-ed onto
  the first.  If a key occurs in more than one map, the mapping(s)
  from the latter (left-to-right) will be combined with the mapping in
  the result by calling (f val-in-result val-in-latter)."
  [f & maps]
  (reduce
   (fn [acc m]
     (if (nil? m)
       acc
       (reduce
        (fn [macc entry]
          (let [k (first entry)
                v (second entry)]
            (if (contains? macc k)
              (assoc macc k (f (get macc k) v))
              (assoc macc k v))))
        (or acc {})
        m)))
   nil
   maps))

(defn
  ^{:doc-group "Maps"}
  update-keys
  "m f => apply f to each key in m"
  [m f]
  (reduce
   (fn [acc entry]
     (assoc acc (f (first entry)) (second entry)))
   {}
   m))

(defn
  ^{:doc-group "Maps"}
  update-vals
  "m f => apply f to each val in m"
  [m f]
  (reduce
   (fn [acc entry]
     (assoc acc (first entry) (f (second entry))))
   {}
   m))

(defn
  ^{:doc-group "Sequences"}
  not-empty
  "If coll is empty, returns nil, else coll"
  [coll]
  (when (seq coll) coll))

(defn
  ^{:doc-group "Higher-order"}
  memoize
  "Returns a memoized version of a referentially transparent function. The
  memoized version of the function keeps a cache of the mapping from arguments
  to results and, when calls with the same arguments are repeated often, has
  higher performance at the expense of higher memory use."
  [f]
  (let [mem (atom {})]
    (fn [& args]
      (let [cached (get @mem args ::not-found)]
        (if (= cached ::not-found)
          (let [ret (apply f args)]
            (swap! mem assoc args ret)
            ret)
          cached)))))

(defn
  ^{:doc-group "Higher-order"}
  trampoline
  "trampoline can be used to convert algorithms requiring mutual
  recursion without stack consumption. Calls f with supplied args, if
  any. If f returns a fn, calls that fn with no arguments, and
  continues to repeat, until the return value is not a fn, then
  returns that non-fn value."
  ([f]
   (loop [ret (f)]
     (if (fn? ret)
       (recur (ret))
       ret)))
  ([f & args]
   (loop [ret (apply f args)]
     (if (fn? ret)
       (recur (ret))
       ret))))

(defmacro
  ^{:doc-group "Control Flow"}
  with-redefs
  "binding => var-symbol temp-value-expr
  Temporarily redefines Vars while executing the body. The
  temp-value-exprs will be evaluated and each resulting value will
  replace in parallel the root value of its Var. Always restores
  the original values, even if body throws."
  [bindings & body]
  (let [pairs     (partition 2 bindings)
        names     (mapv first pairs)
        new-vals  (mapv second pairs)
        orig-syms (mapv (fn [_] (gensym "orig")) names)]
    \`(let [~@(interleave orig-syms (map (fn [n] \`(var-get (var ~n))) names))]
       (try
         (do ~@(map (fn [n v] \`(alter-var-root (var ~n) (constantly ~v))) names new-vals)
             ~@body)
         (finally
           ~@(map (fn [n o] \`(alter-var-root (var ~n) (constantly ~o))) names orig-syms))))))

;; ── Macros: conditionals and control flow ───────────────────────────────────

(defmacro
  ^{:doc-group "Control Flow"}
  if-some
  "bindings => binding-form test
  If test is not nil, evaluates then with binding-form bound to the
  value of test, if not, yields else"
  ([bindings then] \`(if-some ~bindings ~then nil))
  ([bindings then else]
   (let [form (first bindings)
         tst  (second bindings)]
     \`(let [temp# ~tst]
        (if (nil? temp#)
          ~else
          (let [~form temp#]
            ~then))))))

(defmacro
  ^{:doc-group "Control Flow"}
  when-some
  "bindings => binding-form test
  When test is not nil, evaluates body with binding-form bound to the
  value of test"
  [bindings & body]
  (let [form (first bindings)
        tst  (second bindings)]
    \`(let [temp# ~tst]
       (when (some? temp#)
         (let [~form temp#]
           ~@body)))))

(defmacro
  ^{:doc-group "Control Flow"}
  when-first
  "bindings => x xs
  Roughly the same as (when (seq xs) (let [x (first xs)] body)) but xs is evaluated only once"
  [bindings & body]
  (let [x  (first bindings)
        xs (second bindings)]
    \`(let [temp# (seq ~xs)]
       (when temp#
         (let [~x (first temp#)]
           ~@body)))))

(defn
  ^{:no-doc true}
  condp-emit [gpred gexpr clauses]
  (if (nil? clauses)
    \`(throw (ex-info (str "No matching clause: " ~gexpr) {}))
    (if (nil? (next clauses))
      (first clauses)
      \`(if (~gpred ~(first clauses) ~gexpr)
         ~(second clauses)
         ~(condp-emit gpred gexpr (next (next clauses)))))))

(defmacro
  ^{:doc-group "Control Flow"}
  condp
  "Takes a binary predicate, an expression, and a set of clauses.
  Each clause can take the form of either:
    test-expr result-expr
  The predicate is applied to each test-expr and the expression in turn."
  [pred expr & clauses]
  (let [gpred (gensym "pred__")
        gexpr (gensym "expr__")]
    \`(let [~gpred ~pred
           ~gexpr ~expr]
       ~(condp-emit gpred gexpr clauses))))

(defn
  ^{:no-doc true}
  case-emit
  [ge clauses]
  (if (nil? clauses)
    \`(throw (ex-info (str "No matching clause: " ~ge) {}))
    (if (nil? (next clauses))
      (first clauses)
      \`(if (= ~ge ~(first clauses))
         ~(second clauses)
         ~(case-emit ge (next (next clauses)))))))

(defmacro
  ^{:doc-group "Control Flow"}
  case
  "Takes an expression, and a set of clauses. Each clause can take the form of
  either:
    test-constant result-expr
  If no clause matches, and there is an odd number of forms (a default), the
  last expression is returned."
  [e & clauses]
  (let [ge (gensym "case__")]
    \`(let [~ge ~e]
       ~(case-emit ge clauses))))

(defmacro
  ^{:doc-group "Control Flow"}
  dotimes
  "bindings => name n
  Repeatedly executes body (presumably for side-effects) with name
  bound to integers from 0 through n-1."
  [bindings & body]
  (let [i (first bindings)
        n (second bindings)]
    \`(let [n# ~n]
       (loop [~i 0]
         (when (< ~i n#)
           ~@body
           (recur (inc ~i)))))))

(defmacro
  ^{:doc-group "Control Flow"}
  while
  "Repeatedly executes body while test expression is true. Presumes
  some side-effect will cause test to become false/nil."
  [test & body]
  \`(loop []
     (when ~test
       ~@body
       (recur))))

(defmacro
  ^{:doc-group "Control Flow"}
  doseq
  "Repeatedly executes body (presumably for side-effects) with
  bindings. Supports :let, :when, and :while modifiers."
  [seq-exprs & body]
  (let [bindings (partition 2 seq-exprs)
        first-binding (first bindings)
        rest-bindings (next bindings)]
    (if (nil? first-binding)
      \`(do ~@body nil)
      (let [k (first first-binding)
            v (second first-binding)]
        (cond
          (= k :let)
          \`(let ~v (doseq ~(apply concat rest-bindings) ~@body))

          (= k :when)
          \`(when ~v (doseq ~(apply concat rest-bindings) ~@body))

          (= k :while)
          \`(if ~v (doseq ~(apply concat rest-bindings) ~@body) nil)

          :else
          (if rest-bindings
            \`(run! (fn [~k] (doseq ~(apply concat rest-bindings) ~@body)) ~v)
            \`(run! (fn [~k] ~@body) ~v)))))))

(defmacro
  ^{:doc-group "Control Flow"}
  for
  "List comprehension. Takes a vector of one or more
  binding-form/collection-expr pairs, each followed by zero or more
  modifiers, and yields a sequence of evaluations of expr.
  Supported modifiers: :let, :when, :while."
  [seq-exprs & body]
  (let [bindings (partition 2 seq-exprs)
        first-binding (first bindings)
        rest-bindings (next bindings)]
    (if (nil? first-binding)
      \`(list ~@body)
      (let [k (first first-binding)
            v (second first-binding)]
        (cond
          (= k :let)
          \`(let ~v (for ~(apply concat rest-bindings) ~@body))

          (= k :when)
          \`(if ~v (for ~(apply concat rest-bindings) ~@body) (list))

          (= k :while)
          \`(if ~v (for ~(apply concat rest-bindings) ~@body) (list))

          :else
          (if rest-bindings
            \`(mapcat (fn [~k] (for ~(apply concat rest-bindings) ~@body)) ~v)
            \`(map (fn [~k] ~@body) ~v)))))))

;; ── Destructure ──────────────────────────────────────────────────────────────
;; Mirrors Clojure's own destructure function. Takes a flat bindings vector
;; (as written in let/loop forms) and expands any destructuring patterns into
;; simple symbol bindings that let*/loop* can handle directly.
;;
;; Key adaptations from Clojure's source:
;;   - reduce1         → reduce
;;   - (new Exception) → ex-info
;;   - Java type hints → removed
;;   - PersistentArrayMap/createAsIfByAssoc → simplified (use map directly)
;;   - (instance? Named x) / (ident? x) → (or (keyword? x) (symbol? x))
;;   - (keyword nil name) → guarded to 1-arity (keyword name) when ns is nil
;;   - (key entry) / (val entry) → (first entry) / (second entry)
(defn
  ^{:no-doc true}
  destructure [bindings]
  (let*
   [bents (partition 2 bindings)
    pb    (fn pb [bvec b v]
            (let* [;; ── vector pattern ───────────────────────────────────
                   pvec
                   (fn [bvec b val]
                     (let* [gvec     (gensym "vec__")
                            gseq     (gensym "seq__")
                            gfirst   (gensym "first__")
                            has-rest (some #{'&} b)]
                       (loop [ret (let [ret (conj bvec gvec
                                                  (list 'if (list 'or (list 'nil? val) (list 'sequential? val))
                                                        val
                                                        (list 'throw (list 'ex-info
                                                                           (list 'str "Cannot destructure " (list 'pr-str val) " as a sequential collection")
                                                                           (hash-map)))))]
                                    (if has-rest
                                      (conj ret gseq (list 'seq gvec))
                                      ret))
                              n          0
                              bs         b
                              seen-rest? false]
                         (if (seq bs)
                           (let [firstb (first bs)]
                             (cond
                               (= firstb '&)
                               (recur (pb ret (second bs) gseq)
                                      n
                                      (next (next bs))
                                      true)

                               (= firstb :as)
                               (pb ret (second bs) gvec)

                               :else
                               (if seen-rest?
                                 (throw (ex-info "Unsupported binding form, only :as can follow & parameter" {}))
                                 (recur (pb (if has-rest
                                              (-> ret
                                                  (conj gfirst) (conj (list 'first gseq))
                                                  (conj gseq)   (conj (list 'next gseq)))
                                              ret)
                                            firstb
                                            (if has-rest
                                              gfirst
                                              (list 'nth gvec n nil)))
                                        (inc n)
                                        (next bs)
                                        seen-rest?))))
                           ret))))

                   ;; ── map pattern ──────────────────────────────────────
                   pmap
                   (fn [bvec b v]
                     (let* [gmap     (gensym "map__")
                            defaults (:or b)
                            ;; Expand :keys/:strs/:syms shorthands into direct
                            ;; {sym lookup-key} entries before the main loop.
                            bes      (reduce
                                      (fn [acc mk]
                                        (let* [mkn  (name mk)
                                               mkns (namespace mk)]
                                          (cond
                                            (= mkn "keys")
                                            (reduce
                                             (fn [a sym]
                                               (assoc (dissoc a mk)
                                                      sym
                                                      (let* [ns-part (or mkns (namespace sym))]
                                                        (if ns-part
                                                          (keyword ns-part (name sym))
                                                          (keyword (name sym))))))
                                             acc (mk acc))

                                            (= mkn "strs")
                                            (reduce
                                             (fn [a sym]
                                               (assoc (dissoc a mk) sym (name sym)))
                                             acc (mk acc))

                                            (= mkn "syms")
                                            (reduce
                                             (fn [a sym]
                                               (assoc (dissoc a mk) sym
                                                      (list 'quote (symbol (name sym)))))
                                             acc (mk acc))

                                            :else acc)))
                                      (dissoc b :as :or)
                                      (filter keyword? (keys (dissoc b :as :or))))]
                       ;; Coerce seq values (kwargs-style) to a map.
                       ;; When & is followed by a map pattern, the rest args
                       ;; arrive as a flat seq (:k1 v1 :k2 v2 ...) and must
                       ;; be turned into a map before we can do key lookups.
                       ;; Non-map, non-nil, non-sequential values throw a clear
                       ;; error rather than leaking (apply hash-map ...) internals.
                       (loop [ret     (-> bvec
                                          (conj gmap)
                                          (conj (list 'if (list 'map? v) v
                                                      (list 'if (list 'nil? v) (hash-map)
                                                            (list 'if (list 'sequential? v)
                                                                  (list 'apply 'hash-map v)
                                                                  (list 'throw (list 'ex-info
                                                                                     (list 'str "Cannot destructure " (list 'pr-str v) " as a map")
                                                                                     (hash-map)))))))
                                          ((fn [r]
                                             (if (:as b)
                                               (conj r (:as b) gmap)
                                               r))))
                              entries (seq bes)]
                         (if entries
                           (let* [entry (first entries)
                                  bb    (first entry)
                                  bk    (second entry)
                                  local (if (or (keyword? bb) (symbol? bb))
                                          (symbol (name bb))
                                          bb)
                                  ;; Use (if (contains? ...) (get ...) default) so that
                                  ;; :or defaults are only evaluated when the key is absent.
                                  ;; Intentional divergence from JVM Clojure, which generates
                                  ;; (get m k default-expr) and evaluates the default eagerly.
                                  ;; See docs/core-language.md § "Intentional Divergences".
                                  bv    (if (and defaults (contains? defaults local))
                                          (list 'if (list 'contains? gmap bk)
                                                (list 'get gmap bk)
                                                (get defaults local))
                                          (list 'get gmap bk))]
                             (recur (if (or (keyword? bb) (symbol? bb))
                                      (-> ret (conj local bv))
                                      (pb ret bb bv))
                                    (next entries)))
                           ret))))]
              (cond
                (symbol? b) (-> bvec (conj b) (conj v))
                (vector? b) (pvec bvec b v)
                (map? b)    (pmap bvec b v)
                :else (throw (ex-info (str "Unsupported binding form: " b) {})))))
    process-entry (fn [bvec b] (pb bvec (first b) (second b)))]
    (if (every? symbol? (map first bents))
      bindings
      (reduce process-entry [] bents))))

(defn
  ^{:no-doc true}
  maybe-destructured
  [params body]
  (if (every? symbol? params)
    (cons params body)
    (loop [params params
           new-params []
           lets []]
      (if params
        (if (symbol? (first params))
          (recur (next params) (conj new-params (first params)) lets)
          (let* [gparam (gensym "p__")]
            (recur (next params)
                   (conj new-params gparam)
                   (-> lets (conj (first params)) (conj gparam)))))
        (list (vec new-params)
              (cons 'let (cons (vec lets) body)))))))

#_{:clj-kondo/ignore [:redefined-var]}
(defmacro
  ^{:doc-group "Functions"}
  fn
  "params => positional-params*, or positional-params* & rest-param
  Defines an anonymous function. Supports destructuring, multiple arities, and an optional name for self-recursion."
  [& sigs]
  (let* [name    (if (symbol? (first sigs)) (first sigs) nil)
         sigs    (if name (next sigs) sigs)
         sigs    (if (vector? (first sigs)) (list sigs) sigs)
         psig    (fn* [sig]
                      (let* [params (first sig)
                             body   (rest sig)]
                        (maybe-destructured params body)))
         new-sigs (map psig sigs)]
    (if name
      (list* 'fn* name new-sigs)
      (cons 'fn* new-sigs))))

#_{:clj-kondo/ignore [:redefined-var]}
(defmacro
  ^{:doc-group "Control Flow"}
  let
  "binding => binding-form init-expr
  Evaluates the exprs in a lexical context in which the symbols in the binding-forms are bound to their respective init-exprs values. Supports destructuring."
  [bindings & body]
  (if (not (vector? bindings))
    (throw (ex-info "let requires a vector for its bindings" {}))
    (if (not (even? (count bindings)))
      (throw (ex-info "let requires an even number of forms in binding vector" {}))
      \`(let* ~(destructure bindings) ~@body))))

#_{:clj-kondo/ignore [:redefined-var]}
(defmacro
  ^{:doc-group "Control Flow"}
  loop
  "Evaluates the exprs in a lexical context in which the symbols in the binding-forms are bound to their respective init-exprs values, then evaluates body. recur rebinds the bindings to the supplied values and re-evaluates body."
  [bindings & body]
  (if (not (vector? bindings))
    (throw (ex-info "loop requires a vector for its binding" {}))
    (if (not (even? (count bindings)))
      (throw (ex-info "loop requires an even number of forms in binding vector" {}))
      (let* [db (destructure bindings)]
        (if (= db bindings)
          \`(loop* ~bindings ~@body)
          (let* [vs  (take-nth 2 (drop 1 bindings))
                 bs  (take-nth 2 bindings)
                 gs  (map (fn* [b] (if (symbol? b) b (gensym))) bs)
                 bfs (reduce (fn* [ret bvg]
                                  (let* [b (first bvg)
                                         v (second bvg)
                                         g (nth bvg 2)]
                                    (if (symbol? b)
                                      (conj ret g v)
                                      (conj ret g v b g))))
                             [] (map vector bs vs gs))]
            \`(let ~bfs
               (loop* ~(vec (interleave gs gs))
                      (let ~(vec (interleave bs gs))
                        ~@body)))))))))



(defmacro
  ^{:doc-group "IO"}
  with-out-str
  "Evaluates body in a context in which *out* is bound to a fresh string
  accumulator. Returns the string of all output produced by println, print,
  pr, prn, pprint and newline during the evaluation."
  [& body]
  \`(let [buf# (atom "")]
     (binding [*out* (fn [s#] (swap! buf# str s#))]
       ~@body)
     @buf#))

(defmacro
  ^{:doc-group "IO"}
  with-err-str
  "Like with-out-str but captures *err* output (warn, etc.)."
  [& body]
  \`(let [buf# (atom "")]
     (binding [*err* (fn [s#] (swap! buf# str s#))]
       ~@body)
     @buf#))

(defn
  ^{:doc-group "IO"}
  pprint-str
  "Returns the pretty-printed string representation of x, optionally
  limiting line width to max-width (default 80)."
  ([x] (with-out-str (pprint x)))
  ([x max-width] (with-out-str (pprint x max-width))))

;; ---------------------------------------------------------------------------
;; Protocols and Records
;; ---------------------------------------------------------------------------

(defn- resolve-type-tag
  "Returns the type-tag string for a keyword type specifier.
  Simple keywords map directly to kind strings: :string → \\"string\\".
  Namespaced keywords map to record type tags: :user/Circle → \\"user/Circle\\".
  nil literal is accepted for backward compatibility → \\"nil\\"."
  [type-kw]
  (cond
    (nil? type-kw)     "nil"
    (keyword? type-kw) (if (namespace type-kw)
                         (str (namespace type-kw) "/" (name type-kw))
                         (name type-kw))
    :else (throw (ex-info (str "extend-protocol/extend-type: expected a keyword type tag or nil, got: " type-kw) {}))))

(defn- parse-method-def
  "Parses a single protocol method form (name [& params] doc?) into a
  [name-str arglists doc-str?] triple for make-protocol!."
  [form]
  (let [method-name (first form)
        args        (second form)
        doc         (when (string? (nth form 2 nil)) (nth form 2 nil))]
    [(str method-name) [(mapv str args)] doc]))

(defmacro
  ^{:doc-group "Abstractions"}
  defprotocol
  "Defines a named protocol. Creates a protocol var and one dispatch
  function var per method in the current namespace.

  (defprotocol IShape
    \\"doc\\"
    (area [this] \\"Compute area.\\")
    (perimeter [this] \\"Compute perimeter.\\"))"
  [name & specs]
  (let [doc        (when (string? (first specs)) (first specs))
        methods    (if doc (rest specs) specs)
        method-defs (mapv parse-method-def methods)]
    \`(make-protocol! ~(str name) ~doc ~method-defs)))

(defn- parse-impl-block
  "Given a flat sequence of (method-name [args] body...) forms, returns a
  code form (hash-map ...) that evaluates to method-name-string → fn."
  [method-forms]
  (let [pairs (mapcat (fn [form]
                        (let [method-name (first form)
                              params      (second form)
                              body        (rest (rest form))]
                          [(str method-name) \`(fn ~params ~@body)]))
                      method-forms)]
    \`(hash-map ~@pairs)))

(defn- group-by-type
  "Partitions a flat impl body into [[delimiter [method ...]] ...].
  Used by extend-protocol (keyword type tags: :string, :user/Circle),
  extend-type (protocol symbols: IShape, IValidator), and
  defrecord (protocol symbols inline).
  Keywords, symbols, and the nil literal are all recognised as block delimiters."
  [specs]
  (let [no-type :__no-type__]
    (loop [remaining specs
           current-type no-type
           current-methods []
           result []]
      (if (empty? remaining)
        (if (not= current-type no-type)
          (conj result [current-type current-methods])
          result)
        (let [form (first remaining)]
          (if (or (keyword? form) (symbol? form) (nil? form))
            ;; New block (keyword type tag, protocol symbol, or nil)
            (recur (rest remaining)
                   form
                   []
                   (if (not= current-type no-type)
                     (conj result [current-type current-methods])
                     result))
            ;; Method form — add to current block
            (recur (rest remaining)
                   current-type
                   (conj current-methods form)
                   result)))))))

(defmacro
  ^{:doc-group "Abstractions"}
  extend-protocol
  "Extends a protocol to one or more types.

  (extend-protocol IShape
    nil
    (area [_] 0)
    String
    (area [s] (count s)))"
  [proto-sym & specs]
  (let [groups (group-by-type specs)]
    \`(do
       ~@(map (fn [[type-sym method-forms]]
                (let [type-tag  (resolve-type-tag type-sym)
                      impl-map  (parse-impl-block method-forms)]
                  \`(extend-protocol! ~proto-sym ~type-tag ~impl-map)))
              groups))))

(defmacro
  ^{:doc-group "Abstractions"}
  extend-type
  "Extends a type to implement one or more protocols.

  (extend-type Circle
    IShape
    (area [this] ...)
    ISerializable
    (to-json [this] ...))"
  [type-sym & specs]
  (let [type-tag (resolve-type-tag type-sym)
        groups   (group-by-type specs)]
    \`(do
       ~@(map (fn [[proto-sym method-forms]]
                (let [impl-map (parse-impl-block method-forms)]
                  \`(extend-protocol! ~proto-sym ~type-tag ~impl-map)))
              groups))))

(defn- bind-fields
  "Wraps a method body in a let that binds each field name to (:field this).
  (bind-fields '[radius] 'this '[(* radius radius)])
   => (let [radius (:radius this)] (* radius radius))"
  [fields this-sym body]
  (let [bindings (vec (mapcat (fn [f] [f \`(~(keyword (name f)) ~this-sym)]) fields))]
    \`(let ~bindings ~@body)))

(defmacro
  ^{:doc-group "Abstractions"}
  defrecord
  "Defines a record type: a named, typed persistent map.
  Creates ->Name (positional) and map->Name (map-based) constructors.
  Optionally implements protocols inline.

  (defrecord Circle [radius]
    IShape
    (area [this] (* js/Math.PI radius radius)))"
  [type-name fields & specs]
  (let [ns-str           (str (ns-name *ns*))
        type-str         (str type-name)
        constructor      (symbol (str "->" type-name))
        map-constructor  (symbol (str "map->" type-name))
        field-keys       (mapv (fn [f] (keyword (name f))) fields)
        field-map-pairs  (vec (mapcat (fn [f] [(keyword (name f)) f]) fields))
        groups           (when (seq specs) (group-by-type specs))
        type-tag         (str ns-str "/" type-str)
        extend-calls     (map (fn [[proto-sym method-forms]]
                                (let [impl-map
                                      (let [pairs (mapcat (fn [form]
                                                            (let [mname  (first form)
                                                                  params (second form)
                                                                  this   (first params)
                                                                  rest-p (vec (rest params))
                                                                  body   (rest (rest form))
                                                                  bound  (bind-fields fields this body)]
                                                              [(str mname)
                                                               \`(fn ~(vec (cons this rest-p)) ~bound)]))
                                                          method-forms)]
                                        \`(hash-map ~@pairs))]
                                  \`(extend-protocol! ~proto-sym ~type-tag ~impl-map)))
                              groups)]
    \`(do
       (defn ~constructor ~fields
         (make-record! ~type-str ~ns-str (hash-map ~@field-map-pairs)))
       (defn ~map-constructor [m#]
         (make-record! ~type-str ~ns-str (select-keys m# ~field-keys)))
       ~@extend-calls)))

; reify — deferred to Phase B

;; ---------------------------------------------------------------------------
;; describe — introspection for any value
;; ---------------------------------------------------------------------------

;; ─── Keyword Hierarchy ───────────────────────────────────────────────────────

(defn
  ^{:doc-group "Abstractions"}
  make-hierarchy
  "Returns a new, empty hierarchy."
  []
  {:parents {} :ancestors {} :descendants {}})

(def ^{:doc-group "Abstractions" :dynamic true}
  *hierarchy*
  (make-hierarchy))

(defn
  ^{:doc-group "Abstractions"}
  parents
  "Returns the immediate parents of tag in the hierarchy (default: *hierarchy*),
  or nil if tag has no parents."
  ([tag]   (hierarchy-parents-global tag))
  ([h tag] (get (:parents h) tag)))

(defn
  ^{:doc-group "Abstractions"}
  ancestors
  "Returns the set of all ancestors of tag in the hierarchy (default: *hierarchy*),
  or nil if tag has no ancestors."
  ([tag]   (hierarchy-ancestors-global tag))
  ([h tag] (get (:ancestors h) tag)))

(defn
  ^{:doc-group "Abstractions"}
  descendants
  "Returns the set of all descendants of tag in the hierarchy (default: *hierarchy*),
  or nil if tag has no descendants."
  ([tag]   (hierarchy-descendants-global tag))
  ([h tag] (get (:descendants h) tag)))

(defn
  ^{:doc-group "Abstractions"}
  isa?
  "Returns true if child is either identical to parent, or child derives from
  parent in the given hierarchy (default: *hierarchy*)."
  ([child parent]   (hierarchy-isa?-global child parent))
  ([h child parent] (hierarchy-isa?* h child parent)))

(defn
  ^{:doc-group "Abstractions"}
  derive
  "Establishes a parent/child relationship between child and parent.

  2-arity: mutates the global *hierarchy* via session-safe native.
  3-arity: pure — returns a new hierarchy map without side effects."
  ([child parent]
   (hierarchy-derive-global! child parent))
  ([h child parent]
   (hierarchy-derive* h child parent)))

(defn
  ^{:doc-group "Abstractions"}
  underive
  "Removes the parent/child relationship between child and parent.

  2-arity: mutates the global *hierarchy* via session-safe native.
  3-arity: pure — returns a new hierarchy map without side effects."
  ([child parent]
   (hierarchy-underive-global! child parent))
  ([h child parent]
   (hierarchy-underive* h child parent)))

;; Maximum number of vars shown in (describe namespace).
;; Bind to nil for unlimited output: (binding [*describe-limit* nil] (describe ...))
(def ^:dynamic *describe-limit* 50)

(defn
  ^{:doc-group "Dev"}
  describe
  "Returns a plain map describing any cljam value.

  Works on protocols, records, functions, namespaces, multimethods,
  vars, and all primitive types. Output is always a plain Clojure map —
  composable with get, get-in, filter, and any other map operation.

  For namespaces, the number of vars shown is capped by *describe-limit*
  (default 50). Bind *describe-limit* to nil for unlimited output.

  Examples:
    (describe (->Circle 5))        ;; record
    (describe IShape)              ;; protocol
    (describe area)                ;; protocol dispatch fn
    (describe println)             ;; native fn
    (describe (find-ns 'user))     ;; namespace
    (describe #'my-fn)             ;; var"
  ([x] (describe* x *describe-limit*))
  ([x limit] (describe* x limit)))

;; ── Doc-group annotations ────────────────────────────────────────────────────
;; Add ^{:doc-group "Name"} to vars to create named sub-sections within each
;; ## kind group in the API reference. Ungrouped vars fall to ### General.
;; Expand these annotations in your own time — a few starters are provided here.
`,Wc=`(ns clojure.edn)

;; Runtime-injected native helpers. Declared here so clojure-lsp can resolve
;; them; the interpreter treats bare (def name) as a no-op and leaves the
;; native binding from coreEnv intact.
(def edn-read-string*)
(def edn-pr-str*)

(defn read-string
  "Reads one EDN value from string s and returns it.

  Accepts an optional opts map as the first argument:
    :readers - map from tag symbol to handler function; merged with *data-readers*
    :default - fn of [tag-name value] called for tags with no registered handler

  Uses *data-readers* (from clojure.core) for globally registered tag handlers.
  Built-in tags: #inst (returns JS Date), #uuid (returns string passthrough).

  Rejects Clojure-specific syntax that is not part of the EDN spec:
  quote ('), syntax-quote (\`), unquote (~), #(...), @deref, ^metadata, #'var,
  #\\"regex\\", and #:ns{...} namespaced maps."
  ([s]
   (edn-read-string* s))
  ([opts s]
   (edn-read-string* opts s)))

(defn pr-str
  "Returns a string representation of val in EDN format.
  Equivalent to clojure.core/pr-str for all standard EDN-compatible types."
  [val]
  (edn-pr-str* val))
`,Jc=`(ns clojure.math)

;; Runtime-injected native helpers. Declared here so clojure-lsp can resolve
;; them; the interpreter treats bare (def name) as a no-op and leaves the
;; native binding from coreEnv intact.
(declare floor*)
(declare ceil*)
(declare round*)
(declare rint*)
(declare pow*)
(declare exp*)
(declare log*)
(declare log10*)
(declare cbrt*)
(declare hypot*)
(declare sin*)
(declare cos*)
(declare tan*)
(declare asin*)
(declare acos*)
(declare atan*)
(declare atan2*)
(declare sinh*)
(declare cosh*)
(declare tanh*)
(declare signum*)
(declare floor-div*)
(declare floor-mod*)
(declare to-radians*)
(declare to-degrees*)

;; ---------------------------------------------------------------------------
;; Constants
;; ---------------------------------------------------------------------------

(def PI
  "The ratio of the circumference of a circle to its diameter."
  3.141592653589793)

(def E
  "The base of the natural logarithms."
  2.718281828459045)

(def TAU
  "The ratio of the circumference of a circle to its radius (2 * PI)."
  6.283185307179586)

;; ---------------------------------------------------------------------------
;; Rounding
;; ---------------------------------------------------------------------------

(defn floor
  "Returns the largest integer value ≤ x."
  [x]
  (floor* x))

(defn ceil
  "Returns the smallest integer value ≥ x."
  [x]
  (ceil* x))

(defn round
  "Returns the closest integer to x, with ties rounding up (half-up)."
  [x]
  (round* x))

(defn rint
  "Returns the integer closest to x, with ties rounding to the nearest even
  integer (IEEE 754 round-half-to-even / banker's rounding)."
  [x]
  (rint* x))

;; ---------------------------------------------------------------------------
;; Exponents and logarithms
;; ---------------------------------------------------------------------------

(defn pow
  "Returns x raised to the power of y."
  [x y]
  (pow* x y))

(defn exp
  "Returns Euler's number e raised to the power of x."
  [x]
  (exp* x))

(defn log
  "Returns the natural logarithm (base e) of x."
  [x]
  (log* x))

(defn log10
  "Returns the base-10 logarithm of x."
  [x]
  (log10* x))

(defn sqrt
  "Returns the positive square root of x."
  [x]
  (clojure.core/sqrt x))

(defn cbrt
  "Returns the cube root of x."
  [x]
  (cbrt* x))

(defn hypot
  "Returns sqrt(x² + y²), avoiding intermediate overflow or underflow."
  [x y]
  (hypot* x y))

;; ---------------------------------------------------------------------------
;; Trigonometry
;; ---------------------------------------------------------------------------

(defn sin
  "Returns the trigonometric sine of angle x in radians."
  [x]
  (sin* x))

(defn cos
  "Returns the trigonometric cosine of angle x in radians."
  [x]
  (cos* x))

(defn tan
  "Returns the trigonometric tangent of angle x in radians."
  [x]
  (tan* x))

(defn asin
  "Returns the arc sine of x, in the range [-π/2, π/2]."
  [x]
  (asin* x))

(defn acos
  "Returns the arc cosine of x, in the range [0, π]."
  [x]
  (acos* x))

(defn atan
  "Returns the arc tangent of x, in the range (-π/2, π/2)."
  [x]
  (atan* x))

(defn atan2
  "Returns the angle θ from the conversion of rectangular coordinates (x, y)
  to polar (r, θ). Arguments are y first, then x."
  [y x]
  (atan2* y x))

;; ---------------------------------------------------------------------------
;; Hyperbolic
;; ---------------------------------------------------------------------------

(defn sinh
  "Returns the hyperbolic sine of x."
  [x]
  (sinh* x))

(defn cosh
  "Returns the hyperbolic cosine of x."
  [x]
  (cosh* x))

(defn tanh
  "Returns the hyperbolic tangent of x."
  [x]
  (tanh* x))

;; ---------------------------------------------------------------------------
;; Miscellaneous
;; ---------------------------------------------------------------------------

(defn abs
  "Returns the absolute value of x."
  [x]
  (clojure.core/abs x))

(defn signum
  "Returns -1.0, 0.0, or 1.0 indicating the sign of x."
  [x]
  (signum* x))

(defn floor-div
  "Returns the largest integer ≤ (/ x y). Unlike quot, floor-div rounds toward
  negative infinity rather than zero."
  [x y]
  (floor-div* x y))

(defn floor-mod
  "Returns x - (floor-div x y) * y. Unlike rem, the result has the same sign
  as y."
  [x y]
  (floor-mod* x y))

(defn to-radians
  "Converts an angle measured in degrees to an approximately equivalent angle
  measured in radians."
  [deg]
  (to-radians* deg))

(defn to-degrees
  "Converts an angle measured in radians to an approximately equivalent angle
  measured in degrees."
  [rad]
  (to-degrees* rad))
`,Qc=`(ns clojure.set
  "Set operations. Provides functions for creating, manipulating, and querying sets.")

(defn union
  "Return a set that is the union of the input sets."
  ([] #{})
  ([s] s)
  ([s1 s2]
   (reduce conj s1 s2))
  ([s1 s2 & sets]
   (reduce union (union s1 s2) sets)))

(defn intersection
  "Return a set that is the intersection of the input sets."
  ([s] s)
  ([s1 s2]
   (reduce (fn [acc x]
             (if (contains? s2 x)
               (conj acc x)
               acc))
           #{}
           s1))
  ([s1 s2 & sets]
   (reduce intersection (intersection s1 s2) sets)))

(defn difference
  "Return a set that is the first set without elements of the remaining sets."
  ([s] s)
  ([s1 s2]
   (reduce (fn [acc x]
             (if (contains? s2 x)
               acc
               (conj acc x)))
           #{}
           s1))
  ([s1 s2 & sets]
   (reduce difference (difference s1 s2) sets)))

(defn select
  "Returns a set of the elements for which pred is true."
  [pred s]
  (reduce (fn [acc x]
            (if (pred x)
              (conj acc x)
              acc))
          #{}
          s))

(defn project
  "Returns a rel of the elements of xrel with only the keys in ks."
  [xrel ks]
  (reduce (fn [acc m]
            (conj acc (select-keys m ks)))
          #{}
          xrel))

(defn rename-keys
  "Returns the map with the keys in kmap renamed to the vals in kmap."
  [m kmap]
  (reduce (fn [acc [old-k new-k]]
            (if (contains? acc old-k)
              (-> acc
                  (assoc new-k (get acc old-k))
                  (dissoc old-k))
              acc))
          m
          kmap))

(defn rename
  "Returns a rel of the maps in xrel with the keys in kmap renamed to the vals in kmap."
  [xrel kmap]
  (reduce (fn [acc m]
            (conj acc (rename-keys m kmap)))
          #{}
          xrel))

(defn index
  "Returns a map of the distinct values of ks in the xrel mapped to a
  set of the maps in xrel with the corresponding values of ks."
  [xrel ks]
  (reduce (fn [acc m]
            (let [k (select-keys m ks)]
              (assoc acc k (conj (get acc k #{}) m))))
          {}
          xrel))

(defn map-invert
  "Returns the map with the vals mapped to the keys."
  [m]
  (reduce (fn [acc [k v]]
            (assoc acc v k))
          {}
          m))

(defn join
  "When passed 2 rels, returns the relation corresponding to the natural
  join. When passed an additional keymap, joins on the corresponding keys."
  ([xrel yrel]
   (if (and (seq xrel) (seq yrel))
     (let [ks (intersection (set (keys (first xrel)))
                            (set (keys (first yrel))))]
       (if (empty? ks)
         (reduce (fn [acc mx]
                   (reduce (fn [acc2 my]
                             (conj acc2 (merge mx my)))
                           acc
                           yrel))
                 #{}
                 xrel)
         (join xrel yrel (zipmap ks ks))))
     #{}))
  ([xrel yrel km]
   (let [idx (index yrel (vals km))]
     (reduce (fn [acc mx]
               (let [found (get idx (rename-keys (select-keys mx (keys km)) km))]
                 (if found
                   (reduce (fn [acc2 my]
                             (conj acc2 (merge my mx)))
                           acc
                           found)
                   acc)))
             #{}
             xrel))))

(defn
  ^{:doc-group "Predicates"}
  subset?
  "Is set1 a subset of set2?"
  [s1 s2]
  (every? #(contains? s2 %) s1))

(defn
  ^{:doc-group "Predicates"}
  superset?
  "Is set1 a superset of set2?"
  [s1 s2]
  (every? #(contains? s1 %) s2))
`,Yc=`(ns clojure.string
  "String operations. Provides functions for joining, splitting, trimming, and manipulating strings.")

;; Runtime-injected native helpers. Declared here so clojure-lsp can resolve
;; them; the interpreter treats bare (def name) as a no-op and leaves the
;; native binding from coreEnv intact.
(declare str-split*)
(declare str-upper-case*)
(declare str-lower-case*)
(declare str-trim*)
(declare str-triml*)
(declare str-trimr*)
(declare str-reverse*)
(declare str-starts-with*)
(declare str-ends-with*)
(declare str-includes*)
(declare str-index-of*)
(declare str-last-index-of*)
(declare str-replace*)
(declare str-replace-first*)

;; ---------------------------------------------------------------------------
;; Joining / splitting
;; ---------------------------------------------------------------------------

(defn
  join
  "Returns a string of all elements in coll, as returned by (str), separated
  by an optional separator."
  ([coll] (join "" coll))
  ([separator coll]
   (if (nil? coll)
     ""
     (reduce
      (fn [acc x]
        (if (= acc "")
          (str x)
          (str acc separator x)))
      ""
      coll))))

(defn split
  "Splits string on a regular expression. Optional limit is the maximum number
  of parts returned. Trailing empty strings are not returned by default; pass
  a limit of -1 to return all."
  ([s sep] (str-split* s sep))
  ([s sep limit] (str-split* s sep limit)))

(defn split-lines
  "Splits s on \\\\n or \\\\r\\\\n. Trailing empty lines are not returned."
  [s]
  (split s #"\\r?\\n"))

;; ---------------------------------------------------------------------------
;; Case conversion
;; ---------------------------------------------------------------------------

(defn upper-case
  "Converts string to all upper-case."
  [s]
  (str-upper-case* s))

(defn lower-case
  "Converts string to all lower-case."
  [s]
  (str-lower-case* s))

(defn capitalize
  "Converts first character of the string to upper-case, all other
  characters to lower-case."
  [s]
  (if (< (count s) 2)
    (upper-case s)
    (str (upper-case (subs s 0 1)) (lower-case (subs s 1)))))

;; ---------------------------------------------------------------------------
;; Trimming
;; ---------------------------------------------------------------------------

(defn trim
  "Removes whitespace from both ends of string."
  [s]
  (str-trim* s))

(defn triml
  "Removes whitespace from the left side of string."
  [s]
  (str-triml* s))

(defn trimr
  "Removes whitespace from the right side of string."
  [s]
  (str-trimr* s))

(defn trim-newline
  "Removes all trailing newline \\\\n or return \\\\r characters from string.
  Similar to Perl's chomp."
  [s]
  (replace s #"[\\r\\n]+$" ""))

;; ---------------------------------------------------------------------------
;; Predicates
;; ---------------------------------------------------------------------------

(defn blank?
  "True if s is nil, empty, or contains only whitespace."
  [s]
  (or (nil? s) (not (nil? (re-matches #"\\s*" s)))))

(defn starts-with?
  "True if s starts with substr."
  [s substr]
  (str-starts-with* s substr))

(defn ends-with?
  "True if s ends with substr."
  [s substr]
  (str-ends-with* s substr))

(defn includes?
  "True if s includes substr."
  [s substr]
  (str-includes* s substr))

;; ---------------------------------------------------------------------------
;; Search
;; ---------------------------------------------------------------------------

(defn index-of
  "Return index of value (string) in s, optionally searching forward from
  from-index. Return nil if value not found."
  ([s value] (str-index-of* s value))
  ([s value from-index] (str-index-of* s value from-index)))

(defn last-index-of
  "Return last index of value (string) in s, optionally searching backward
  from from-index. Return nil if value not found."
  ([s value] (str-last-index-of* s value))
  ([s value from-index] (str-last-index-of* s value from-index)))

;; ---------------------------------------------------------------------------
;; Replacement
;; ---------------------------------------------------------------------------

(defn replace
  "Replaces all instances of match with replacement in s.

  match/replacement can be:
    string / string   — literal match, literal replacement
    pattern / string  — regex match; $1, $2, etc. substituted from groups
    pattern / fn      — regex match; fn called with match (string or vector
                        of [whole g1 g2 ...]), return value used as replacement.

  See also replace-first."
  [s match replacement]
  (str-replace* s match replacement))

(defn replace-first
  "Replaces the first instance of match with replacement in s.
  Same match/replacement semantics as replace."
  [s match replacement]
  (str-replace-first* s match replacement))

(defn re-quote-replacement
  "Given a replacement string that you wish to be a literal replacement for a
  pattern match in replace or replace-first, escape any special replacement
  characters ($ signs) so they are treated literally."
  [s]
  (replace s #"\\$" "$$$$"))

;; ---------------------------------------------------------------------------
;; Miscellaneous
;; ---------------------------------------------------------------------------

(defn reverse
  "Returns s with its characters reversed."
  [s]
  (str-reverse* s))

(defn escape
  "Return a new string, using cmap to escape each character ch from s as
  follows: if (cmap ch) is nil, append ch to the new string; otherwise append
  (str (cmap ch)).

  cmap may be a map or a function. Maps are callable directly (IFn semantics).

  Note: Clojure uses char literal keys (e.g. {\\\\< \\"&lt;\\"}). This interpreter
  has no char type, so map keys must be single-character strings instead
  (e.g. {\\"<\\" \\"&lt;\\"})."
  [s cmap]
  (apply str (map (fn [c]
                    (let [r (cmap c)]
                      (if (nil? r) c (str r))))
                  (split s #""))))
`,Xc=`(ns clojure.test
  "Testing facilities. Provides macros for defining and running tests, as well as assertions and reporting. 
   can be overridden for custom integration.")

;; ---------------------------------------------------------------------------
;; Dynamic vars
;; ---------------------------------------------------------------------------

;; A vector of strings describing the current testing context stack.
;; Pushed by the \`testing\` macro. Used in failure messages.
(def ^:dynamic *testing-contexts* [])

;; The output stream for test reporting. nil means use *out*.
(def ^:dynamic *test-out* nil)

;; An atom holding {:test 0 :pass 0 :fail 0 :error 0}, or nil when
;; not inside a run-tests call.
(def ^:dynamic *report-counters* nil)

;; A vector of test names currently being executed.
(def ^:dynamic *testing-vars* [])

;; ---------------------------------------------------------------------------
;; Test registry — maps ns-name-string → [{:name "..." :fn fn}]
;; Populated by deftest at load time.
;; ---------------------------------------------------------------------------

(def test-registry (atom {}))

;; ---------------------------------------------------------------------------
;; Fixture registry — maps [ns-name-string :each/:once] → [fixture-fn ...]
;; Populated by use-fixtures at namespace load time.
;; ---------------------------------------------------------------------------

(def fixture-registry (atom {}))

;; Identity fixture — baseline for reduce in join-fixtures.
(defn default-fixture [f] (f))

(defn compose-fixtures
  "Returns a single fixture that wraps f2 inside f1.
  Setup order: f1 setup first, then f2 setup.
  Teardown order: f2 teardown first, then f1 teardown.
  This is the standard middleware-onion composition."
  [f1 f2]
  (fn [g] (f1 (fn [] (f2 g)))))

(defn join-fixtures
  "Compose a sequence of fixture functions into a single fixture.
  Empty sequence returns default-fixture (calls f directly).
  Fixtures run left-to-right for setup, right-to-left for teardown."
  [fixtures]
  (reduce compose-fixtures default-fixture fixtures))

(defn use-fixtures
  "Register fixture functions for the current namespace.
  type must be :each (runs around each individual test) or
  :once (runs around the entire namespace test suite).
  Multiple fixture fns are composed in order."
  [type & fixture-fns]
  (swap! fixture-registry assoc [(str (ns-name *ns*)) type] (vec fixture-fns))
  nil)

;; ---------------------------------------------------------------------------
;; report multimethod — dispatch on :type key of the result map.
;; Override any method to customise test output (e.g. for vitest integration).
;; ---------------------------------------------------------------------------

;; Dispatches on the :type of a test result map.
;; Built-in types: :pass, :fail, :error, :begin-test-var, :end-test-var,
;; :begin-test-ns, :end-test-ns, :summary.
(defmulti report :type)

(defmethod report :default [_] nil)

(defmethod report :pass [_]
  (when *report-counters*
    (swap! *report-counters* update :pass (fnil inc 0))))

(defmethod report :fail [m]
  (when *report-counters*
    (swap! *report-counters* update :fail (fnil inc 0)))
  (println "\\nFAIL in" (first *testing-vars*))
  (when (seq *testing-contexts*)
    (println (apply str (interpose " " *testing-contexts*))))
  (when (:message m) (println (:message m)))
  (println "expected:" (pr-str (:expected m)))
  (println "  actual:" (pr-str (:actual m))))

(defmethod report :error [m]
  (when *report-counters*
    (swap! *report-counters* update :error (fnil inc 0)))
  (println "\\nERROR in" (first *testing-vars*))
  (when (seq *testing-contexts*)
    (println (apply str (interpose " " *testing-contexts*))))
  (when (:message m) (println (:message m)))
  (println "expected:" (pr-str (:expected m)))
  (println "  actual:" (pr-str (:actual m))))

(defmethod report :begin-test-var [_] nil)
(defmethod report :end-test-var   [_] nil)

(defmethod report :begin-test-ns [m]
  (println "\\nTesting" (str (ns-name (:ns m)))))

(defmethod report :end-test-ns [_] nil)

(defmethod report :summary [m]
  (println "\\nRan" (:test m) "tests containing"
           (+ (:pass m) (:fail m) (:error m)) "assertions.")
  (println (:fail m) "failures," (:error m) "errors."))

;; ---------------------------------------------------------------------------
;; thrown? / thrown-with-msg? — exception-testing macros
;;
;; These are standalone macros that evaluate to a truthy value (the caught
;; exception) on success, or a falsy value on failure. Designed to compose
;; directly with \`is\` — no special handling in \`is\` required.
;;
;; exc-type is a keyword matched against the caught value exactly as cljam's
;; own try/catch does: :default catches anything, :error/runtime catches
;; runtime errors, etc.
;;
;; (is (thrown? :error/runtime (/ 1 0)))           → pass
;; (is (thrown? :default (throw "boom")))           → pass
;; (is (thrown-with-msg? :default #"boom" ...))    → pass if message matches
;; ---------------------------------------------------------------------------

(defmacro thrown?
  "Returns the caught exception if body throws an exception matching exc-type,
  false if no exception is thrown. Wrong-type exceptions propagate unchanged.
  Use :default to match any thrown value."
  [exc-type & body]
  \`(try
     ~@body
     false
     (catch ~exc-type e#
       e#)))

(defmacro thrown-with-msg?
  "Returns the caught exception if body throws exc-type AND the exception
  message matches the regex re. Returns false if no throw, nil if message
  does not match. Wrong-type exceptions propagate unchanged.
  Message is extracted via (:message e) for runtime error maps, (str e) otherwise."
  [exc-type re & body]
  \`(try
     ~@body
     false
     (catch ~exc-type e#
       (let [err-msg# (or (:message e#) (str e#))]
         (when (re-find ~re (str err-msg#))
           e#)))))

;; ---------------------------------------------------------------------------
;; is — core assertion macro
;;
;; (is form)        — assert form is truthy
;; (is form msg)    — same, with a failure message
;;
;; Reports :pass when form is truthy, :fail when falsy, :error on exception.
;; thrown? and thrown-with-msg? compose naturally — they return truthy/falsy.
;; ---------------------------------------------------------------------------

(defmacro is
  ([form] \`(is ~form nil))
  ([form msg]
   \`(try
      (let [result# ~form]
        (if result#
          (report {:type :pass :message ~msg :expected '~form :actual result#})
          (report {:type :fail :message ~msg :expected '~form :actual result#})))
      (catch :default e#
        (report {:type :error :message ~msg :expected '~form :actual e#})))))

;; ---------------------------------------------------------------------------
;; are — parameterised assertion helper
;;
;; (are [x y] (= x y)
;;   1 1
;;   2 2)
;;
;; Expands to one \`is\` call per arg tuple, with x and y bound via let.
;; ---------------------------------------------------------------------------

(defmacro are [argv expr & args]
  (when (seq args)
    (let [tuples (partition (count argv) args)]
      \`(do
         ~@(map (fn [vals]
                  \`(is (let [~@(interleave argv vals)] ~expr)))
                tuples)))))

;; ---------------------------------------------------------------------------
;; deftest — define a test function and register it in the namespace registry
;;
;; (deftest my-test
;;   (is (= 1 1)))
;;
;; Creates a 0-arity function var and registers it so run-tests can find it.
;; ---------------------------------------------------------------------------

(defmacro deftest [name & body]
  \`(do
     (def ~(with-meta name {:test true})
       (fn ~name [] ~@body))
     (swap! test-registry
            update (str (ns-name *ns*)) (fnil conj [])
            {:name ~(str name) :fn ~name})
     ~name))

;; ---------------------------------------------------------------------------
;; testing — label a group of assertions with a context string
;;
;; (testing "addition"
;;   (is (= 2 (+ 1 1))))
;;
;; with-testing-context* is a helper function defined in this namespace so
;; the (binding [*testing-contexts* ...]) form resolves the var correctly.
;; The macro expands to a qualified call so it works from any namespace.
;; ---------------------------------------------------------------------------

(defn with-testing-context* [string thunk]
  (binding [*testing-contexts* (conj *testing-contexts* string)]
    (thunk)))

(defmacro testing [string & body]
  \`(with-testing-context* ~string (fn [] ~@body)))

;; ---------------------------------------------------------------------------
;; run-tests — discover and execute tests in one or more namespaces
;;
;; (run-tests)               — run tests in *ns*
;; (run-tests 'my.ns)        — run tests in my.ns
;; (run-tests 'a.ns 'b.ns)   — run tests in both
;;
;; Returns a map: {:test N :pass N :fail N :error N}
;; ---------------------------------------------------------------------------

(defn run-tests
  ([] (run-tests *ns*))
  ([& namespaces]
   (let [counters (atom {:test 0 :pass 0 :fail 0 :error 0})]
     (binding [*report-counters* counters]
       (doseq [ns-ref namespaces]
         (let [ns-str       (str (ns-name ns-ref))
               tests        (get @test-registry ns-str [])
               once-fixture (join-fixtures (get @fixture-registry [ns-str :once] []))
               each-fixture (join-fixtures (get @fixture-registry [ns-str :each] []))]
           (report {:type :begin-test-ns :ns ns-ref})
           (once-fixture
             (fn []
               (doseq [{test-name :name test-fn :fn} tests]
                 (binding [*testing-vars* [test-name]]
                   (report {:type :begin-test-var :var test-name})
                   (swap! *report-counters* update :test (fnil inc 0))
                   (try
                     (each-fixture test-fn)
                     (catch :default e
                       (report {:type :error
                                :message "Uncaught error in test"
                                :expected nil
                                :actual e})))
                   (report {:type :end-test-var :var test-name})))))
           (report {:type :end-test-ns :ns ns-ref})))
       (let [summary @counters]
         (report (assoc summary :type :summary))
         summary)))))

;; ---------------------------------------------------------------------------
;; successful? — summary predicate
;;
;; (successful? (run-tests 'my.ns)) → true / false
;; ---------------------------------------------------------------------------

(defn successful?
  "Returns true if the test summary has zero failures and zero errors."
  [summary]
  (and (zero? (get summary :fail 0))
       (zero? (get summary :error 0))))

;; ---------------------------------------------------------------------------
;; run-test — run a single deftest by name (REPL-friendly)
;;
;; (run-test my-test) — calls my-test with *report-counters* and *testing-vars*
;;                       properly bound; prints summary; returns summary map.
;; ---------------------------------------------------------------------------

(defmacro run-test
  "Runs a single deftest. Returns a summary map.
  Useful for targeted test runs at the REPL without running the whole suite."
  [test-symbol]
  \`(let [test-name# ~(str test-symbol)
         counters#  (atom {:test 0 :pass 0 :fail 0 :error 0})]
     (binding [*report-counters* counters#
               *testing-vars*    [test-name#]]
       (report {:type :begin-test-var :var test-name#})
       (swap! *report-counters* update :test (fnil inc 0))
       (try
         (~test-symbol)
         (catch :default e#
           (report {:type :error
                    :message "Uncaught error in test"
                    :expected nil
                    :actual   e#})))
       (report {:type :end-test-var :var test-name#}))
     (let [summary# @counters#]
       (report (assoc summary# :type :summary))
       summary#)))
`,Zc=`(ns clojure.walk
  "Tree-walking utilities. Provides functions for traversing and transforming data structures.")

(defn walk
  "Traverses form, an arbitrary data structure. inner and outer are
  functions. Applies inner to each element of form, building up a
  data structure of the same type, then applies outer to the result."
  [inner outer form]
  (cond
    (list? form) (outer (apply list (map inner form)))
    (vector? form) (outer (into [] (map inner) form))
    (map? form) (outer (into {} (map (fn [e] [(inner (first e)) (inner (second e))]) form)))
    (set? form) (outer (into #{} (map inner) form))
    :else (outer form)))

(defn postwalk
  "Performs a depth-first, post-order traversal of form. Calls f on
  each sub-form, uses f's return value in place of the original."
  [f form]
  (walk (fn [x] (postwalk f x)) f form))

(defn prewalk
  "Like postwalk, but does pre-order traversal."
  [f form]
  (walk (fn [x] (prewalk f x)) identity (f form)))

(defn postwalk-replace
  "Recursively transforms form by replacing keys in smap with their
  values. Like clojure/replace but works on any data structure."
  [smap form]
  (postwalk (fn [x] (if (contains? smap x) (get smap x) x)) form))

(defn prewalk-replace
  "Recursively transforms form by replacing keys in smap with their
  values. Like clojure/replace but works on any data structure."
  [smap form]
  (prewalk (fn [x] (if (contains? smap x) (get smap x) x)) form))

(defn keywordize-keys
  "Recursively transforms all map keys from strings to keywords."
  [m]
  (postwalk
   (fn [x]
     (if (map? x)
       (into {} (map (fn [e]
                       (let [k (first e)]
                         (if (string? k)
                           [(keyword k) (second e)]
                           e)))
                     x))
       x))
   m))

(defn stringify-keys
  "Recursively transforms all map keys from keywords to strings."
  [m]
  (postwalk
   (fn [x]
     (if (map? x)
       (into {}
             (map
              (fn [e]
                (let [k (first e)]
                  (if (keyword? k)
                    [(name k) (second e)]
                    e)))
              x))
       x))
   m))
`,zr={"cljam.handbook":()=>Uc,"clojure.core":()=>Kc,"clojure.edn":()=>Wc,"clojure.math":()=>Jc,"clojure.set":()=>Qc,"clojure.string":()=>Yc,"clojure.test":()=>Xc,"clojure.walk":()=>Zc},J={def:"def",do:"do","fn*":"fn*",if:"if","let*":"let*","loop*":"loop*",recur:"recur",quote:"quote",try:"try",var:"var",ns:"ns",defmacro:"defmacro",binding:"binding","set!":"set!","letfn*":"letfn*","lazy-seq":"lazy-seq",async:"async",".":".","js/new":"js/new"},k={boolean:"boolean",character:"character",function:"function",nativeFunction:"native-function",keyword:"keyword",list:"list",macro:"macro",map:"map",nil:"nil",number:"number",regex:"regex",set:"set",string:"string",symbol:"symbol",vector:"vector",atom:"atom",delay:"delay",multiMethod:"multi-method",volatile:"volatile",var:"var",cons:"cons",lazySeq:"lazy-seq",reduced:"reduced",pending:"pending",namespace:"namespace",jsValue:"js-value",protocol:"protocol",record:"record"},I={LParen:"LParen",RParen:"RParen",LBracket:"LBracket",RBracket:"RBracket",LBrace:"LBrace",RBrace:"RBrace",String:"String",Number:"Number",Keyword:"Keyword",Quote:"Quote",Quasiquote:"Quasiquote",Unquote:"Unquote",UnquoteSplicing:"UnquoteSplicing",Comment:"Comment",Whitespace:"Whitespace",Symbol:"Symbol",AnonFnStart:"AnonFnStart",Deref:"Deref",Regex:"Regex",VarQuote:"VarQuote",Meta:"Meta",SetStart:"SetStart",NsMapPrefix:"NsMapPrefix",Discard:"Discard",ReaderTag:"ReaderTag",Character:"Character"},xe={Quote:"quote",Quasiquote:"quasiquote",Unquote:"unquote",UnquoteSplicing:"unquote-splicing",LParen:"(",RParen:")",LBracket:"[",RBracket:"]",LBrace:"{",RBrace:"}"},eu=t=>t.kind==="nil",Vr=t=>t.kind==="boolean",tu=t=>t.kind==="character",Br=t=>t.kind==="nil"?!0:Vr(t)?!t.value:!1,nu=t=>!Br(t),ru=t=>t.kind==="symbol"&&t.name in J,ot=t=>t.kind==="symbol",Hr=t=>t.kind==="vector",Ur=t=>t.kind==="list",Kr=t=>t.kind==="function",Wr=t=>t.kind==="native-function",su=t=>t.kind==="macro",Un=t=>t.kind==="map",Jr=t=>t.kind==="keyword",Qr=t=>Kr(t)||Wr(t),Yr=t=>t.kind==="js-value",ou=t=>Qr(t)||Jr(t)||Un(t)||Wn(t)||Kn(t)||Xr(t)||Yr(t)&&typeof t.value=="function",au=t=>t.kind==="multi-method",iu=t=>t.kind==="atom",lu=t=>t.kind==="reduced",cu=t=>t.kind==="volatile",uu=t=>t.kind==="regex",Xr=t=>t.kind==="var",Kn=t=>t.kind===k.set,du=t=>t.kind==="delay",Zr=t=>t.kind==="lazy-seq",es=t=>t.kind==="cons",_n=t=>t.kind==="namespace",fu=t=>t.kind==="protocol",Wn=t=>t.kind==="record",ts=t=>Hr(t)||Un(t)||Wn(t)||Ur(t)||Kn(t)||es(t),mu=t=>ts(t)||t.kind==="string"||Zr(t),ns=t=>typeof t=="object"&&t!==null&&"kind"in t&&t.kind in k;function St(t){let e=t;for(;e.kind==="lazy-seq";){const n=e;if(n.realized)e=n.value;else if(n.thunk)n.value=n.thunk(),n.thunk=null,n.realized=!0,e=n.value;else return{kind:"nil",value:null}}return e}function Fn(t){if(t.kind==="nil")return[];if(t.kind==="list"||t.kind==="vector")return t.value;if(t.kind==="lazy-seq"){const e=St(t);return Fn(e)}if(t.kind==="cons"){const e=[];let n=t;for(;n.kind!=="nil";){if(n.kind==="cons"){e.push(n.head),n=n.tail;continue}if(n.kind==="lazy-seq"){n=St(n);continue}if(n.kind==="list"||n.kind==="vector"){e.push(...n.value);break}return null}return e}return null}const pu={[k.number]:(t,e)=>t.value===e.value,[k.string]:(t,e)=>t.value===e.value,[k.character]:(t,e)=>t.value===e.value,[k.boolean]:(t,e)=>t.value===e.value,[k.nil]:()=>!0,[k.symbol]:(t,e)=>t.name===e.name,[k.keyword]:(t,e)=>t.name===e.name,[k.vector]:(t,e)=>t.value.length!==e.value.length?!1:t.value.every((n,r)=>de(n,e.value[r])),[k.map]:(t,e)=>{if(t.entries.length!==e.entries.length)return!1;const n=new Set([...t.entries.map(([r])=>r),...e.entries.map(([r])=>r)]);for(const r of n){const s=t.entries.find(([i])=>de(i,r));if(!s)return!1;const a=e.entries.find(([i])=>de(i,r));if(!a||!de(s[1],a[1]))return!1}return!0},[k.list]:(t,e)=>t.value.length!==e.value.length?!1:t.value.every((n,r)=>de(n,e.value[r])),[k.atom]:(t,e)=>t===e,[k.reduced]:(t,e)=>de(t.value,e.value),[k.volatile]:(t,e)=>t===e,[k.regex]:(t,e)=>t===e,[k.var]:(t,e)=>t===e,[k.set]:(t,e)=>t.values.length!==e.values.length?!1:t.values.every(n=>e.values.some(r=>de(n,r))),[k.delay]:(t,e)=>t===e,[k.lazySeq]:(t,e)=>{const n=St(t),r=St(e);return de(n,r)},[k.cons]:(t,e)=>de(t.head,e.head)&&de(t.tail,e.tail),[k.namespace]:(t,e)=>t===e,[k.record]:(t,e)=>t.ns!==e.ns||t.recordType!==e.recordType||t.fields.length!==e.fields.length?!1:t.fields.every(([n,r],s)=>{const[a,i]=e.fields[s];return de(n,a)&&de(r,i)})},hu=t=>t.kind==="string",de=(t,e)=>{if(t.kind==="lazy-seq")return de(St(t),e);if(e.kind==="lazy-seq")return de(t,St(e));const n=t.kind==="list"||t.kind==="vector"||t.kind==="cons",r=e.kind==="list"||e.kind==="vector"||e.kind==="cons";if(n&&r){const a=Fn(t),i=Fn(e);return a===null||i===null||a.length!==i.length?!1:a.every((c,l)=>de(c,i[l]))}if(t.kind!==e.kind)return!1;const s=pu[t.kind];return s?s(t,e):!1},gu=t=>t.kind==="number",vu=t=>t.kind==="pending",u={nil:eu,number:gu,string:hu,boolean:Vr,char:tu,falsy:Br,truthy:nu,specialForm:ru,symbol:ot,vector:Hr,list:Ur,function:Kr,nativeFunction:Wr,macro:su,map:Un,keyword:Jr,aFunction:Qr,callable:ou,multiMethod:au,atom:iu,reduced:lu,volatile:cu,regex:uu,var:Xr,set:Kn,delay:du,lazySeq:Zr,cons:es,namespace:_n,protocol:fu,record:Wn,collection:ts,seqable:mu,cljValue:ns,equal:de,jsValue:Yr,pending:vu};class ze extends Error{constructor(n,r){super(n);fe(this,"context");this.name="TokenizerError",this.context=r}}class T extends Error{constructor(n,r,s){super(n);fe(this,"context");fe(this,"pos");this.name="ReaderError",this.context=r,this.pos=s}}const rs=Symbol.for("@regibyte/cljam/EvaluationError");var jr,_r;class f extends(_r=Error,jr=rs,_r){constructor(n,r,s){super(n);fe(this,jr,!0);fe(this,"context");fe(this,"pos");fe(this,"data");fe(this,"frames");fe(this,"code");this.name="EvaluationError",this.context=r,this.pos=s}static atArg(n,r,s){const a=new f(n,r);return a.data={argIndex:s},a}}function Jn(t){return t instanceof Error?t[rs]===!0||t.name==="EvaluationError":!1}class Te{constructor(e){fe(this,"value");this.value=e}}const yu=t=>({kind:"number",value:t}),Qn=t=>({kind:"string",value:t}),wu=t=>({kind:"character",value:t}),bu=t=>({kind:"boolean",value:t}),jt=t=>({kind:"keyword",name:t}),ss=t=>({kind:"keyword",name:t.startsWith(":")?t:`:${t}`}),lt=()=>({kind:"nil",value:null}),Yn=t=>({kind:"symbol",name:t}),os=t=>({kind:"list",value:t}),ku=t=>({kind:"set",values:t}),Lt=t=>({kind:"vector",value:t}),xt=t=>({kind:"map",entries:t}),xu=(t,e,n,r)=>({kind:"function",arities:[{params:t,restParam:e,body:n}],env:r}),$u=(t,e)=>({kind:"function",arities:t,env:e}),Mu=(t,e,n,r)=>({kind:"macro",arities:[{params:t,restParam:e,body:n}],env:r}),qu=(t,e)=>({kind:"macro",arities:t,env:e}),Su=(t,e="")=>({kind:"regex",pattern:t,flags:e}),ju=(t,e,n,r)=>({kind:"var",ns:t,name:e,value:n,meta:r}),_u=t=>({kind:"atom",value:t}),Fu=t=>({kind:"reduced",value:t}),Ru=t=>({kind:"volatile",value:t}),Au=t=>({kind:"delay",thunk:t,realized:!1}),Iu=t=>({kind:"lazy-seq",thunk:t,realized:!1}),Cu=(t,e)=>({kind:"cons",head:t,tail:e}),Pu=t=>({kind:"namespace",name:t,vars:new Map,aliases:new Map,readerAliases:new Map}),Nu=t=>({kind:"js-value",value:t}),Eu=(t,e,n,r)=>({kind:"protocol",name:t,ns:e,fns:n,doc:r,impls:new Map}),Lu=(t,e,n)=>({kind:"record",recordType:t,ns:e,fields:n}),Tu=t=>{const e={kind:"pending",promise:t};return t.then(n=>{e.resolved=!0,e.resolvedValue=n},()=>{}),e};function Gu(t,e){return xt([[jt(":doc"),Qn(t)],...e?[[jt(":arglists"),Lt(e.map(n=>Lt(n.map(Yn))))]]:[]])}function Ou(t,e){let n=e??xt([]);for(const[r,s]of t.entries){if(r.kind!=="keyword")continue;n.entries.find(([i])=>i.kind==="keyword"&&i.name===r.name)&&(n=xt([...n.entries].filter(([i])=>i.kind!=="keyword"||i.name!==r.name))),n=xt([...n.entries,[r,s]])}return n}function en(t){const e={kind:"native-function",name:t.name,fn:t.fn,...t.fnWithContext!==void 0?{fnWithContext:t.fnWithContext}:{},...t.meta!==void 0?{meta:t.meta}:{}};return{...e,doc(n,r){return en({...e,meta:Gu(n,r)})},withMeta(n){return en({...e,meta:Ou(xt(n),e.meta)})}}}const Du=(t,e,n,r,s)=>({kind:"multi-method",name:t,dispatchFn:e,methods:n,defaultMethod:r,defaultDispatchVal:s}),o={number:yu,string:Qn,char:wu,boolean:bu,nil:lt,symbol:Yn,keyword:jt,kw:jt,autoKeyword:ss,list:os,vector:Lt,map:xt,set:ku,cons:Cu,function:xu,multiArityFunction:$u,macro:Mu,multiArityMacro:qu,multiMethod:Du,nativeFn(t,e){return en({name:t,fn:e})},nativeFnCtx(t,e){return en({name:t,fn:()=>{throw new f("Native function called without context",{name:t})},fnWithContext:e})},var:ju,atom:_u,regex:Su,reduced:Fu,volatile:Ru,delay:Au,lazySeq:Iu,namespace:Pu,pending:Tu,jsValue:Nu,protocol:Eu,record:Lu},g=({doc:t,arglists:e,docGroup:n,extra:r={}})=>{const s=[[o.keyword(":doc"),o.string(t)],...e?[[jt(":arglists"),Lt(e.map(a=>Lt(a.map(Yn))))]]:[],...n?[[jt(":doc-group"),Qn(n)]]:[]];for(const[a,i]of Object.entries(r))s.push([ss(a),$t(i)]);return s},v={runtime:"Dev",interop:"Interop",regex:"Strings",introspection:"Dev",utilities:"Utilities",vars:"Dev",io:"IO",async:"Async",arithmetic:"Arithmetic",comparison:"Comparison",edn:"EDN",collections:"Sequences",sequences:"Sequences",transducers:"Transducers",maps:"Maps",predicates:"Predicates",strings:"Strings",higher_order:"Higher-order",lazy:"Sequences",atoms:"State",errors:"Errors",sets:"Sequences",metadata:"Metadata",hierarchy:"Abstractions",protocols:"Abstractions",multimethods:"Abstractions"};class tn extends Error{constructor(n,r){super(n);fe(this,"context");this.name="ConversionError",this.context=r}}const zu=new Set(["list","vector","map"]),Vu={applyFunction:()=>{throw new tn("Cannot convert a CLJ function to JS in this context — use session.cljToJs() instead.")}};function ct(t,e){switch(t.kind){case"number":return t.value;case"string":return t.value;case"boolean":return t.value;case"nil":return null;case"keyword":return t.name.startsWith(":")?t.name.slice(1):t.name;case"symbol":return t.name;case"list":case"vector":return t.value.map(n=>ct(n,e));case"map":{const n={};for(const[r,s]of t.entries){if(zu.has(r.kind))throw new tn(`Rich key types (${r.kind}) are not supported in JS object conversion. Restructure your map to use string, keyword, or number keys.`,{key:r,value:s});const a=String(ct(r,e));n[a]=ct(s,e)}return n}case"function":case"native-function":{const n=t;return(...r)=>{const s=r.map(i=>$t(i)),a=e.applyFunction(n,s);return ct(a,e)}}case"macro":throw new tn("Macros cannot be exported to JavaScript. Macros are compile-time constructs.",{macro:t})}}function $t(t,e={}){const{keywordizeKeys:n=!0}=e;if(t===null)return o.nil();if(t===void 0)return o.jsValue(void 0);if(ns(t))return t;switch(typeof t){case"number":return o.number(t);case"string":return o.string(t);case"boolean":return o.boolean(t);case"function":{const r=t;return o.nativeFn("js-fn",(...s)=>{const a=s.map(c=>ct(c,Vu)),i=r(...a);return $t(i,e)})}case"object":{if(Array.isArray(t))return o.vector(t.map(s=>$t(s,e)));const r=Object.entries(t).map(([s,a])=>[n?o.keyword(`:${s}`):o.string(s),$t(a,e)]);return o.map(r)}default:throw new tn(`Cannot convert JS value of type ${typeof t} to CljValue`,{value:t})}}class Bu extends Error{constructor(n,r){super(n);fe(this,"context");this.context=r,this.name="EnvError"}}function _e(t){return t.kind!=="var"?t:t.dynamic&&t.bindingStack&&t.bindingStack.length>0?t.bindingStack[t.bindingStack.length-1]:t.value}function nn(t){return{kind:"namespace",name:t,vars:new Map,aliases:new Map,readerAliases:new Map}}function nt(t){return{bindings:new Map,outer:t??null}}function as(t,e){var r;let n=e;for(;n;){const s=n.bindings.get(t);if(s!==void 0)return s;const a=(r=n.ns)==null?void 0:r.vars.get(t);if(a!==void 0)return _e(a);n=n.outer}throw new f(`Symbol ${t} not found`,{name:t})}function rn(t,e){var r;let n=e;for(;n;){const s=n.bindings.get(t);if(s!==void 0)return s;const a=(r=n.ns)==null?void 0:r.vars.get(t);if(a!==void 0)return _e(a);n=n.outer}}function Y(t,e,n,r){const s=n.ns,a=r??e.meta,i=s.vars.get(t);i?(i.value=e,a&&(i.meta=a)):s.vars.set(t,o.var(s.name,t,e,a))}function _t(t,e){var r;let n=e;for(;n;){const s=n.bindings.get(t);if(s!==void 0&&s.kind==="var")return s;const a=(r=n.ns)==null?void 0:r.vars.get(t);if(a!==void 0)return a;n=n.outer}}function Hu(t,e,n){n.bindings.set(t,e)}function We(t,e,n){if(t.length!==e.length)throw new Bu("Number of parameters and arguments must match",{params:t,args:e,outer:n});const r=nt(n);for(let s=0;s<t.length;s++)Hu(t[s],e[s],r);return r}function Uu(t){let e=t;for(;e!=null&&e.outer;)e=e.outer;return e}function pe(t){let e=t;for(;e;){if(e.ns)return e;e=e.outer}return Uu(t)}const Ku=100;function Wu(t){let e=t;for(;u.lazySeq(e);){const n=e;if(n.realized){e=n.value;continue}if(n.thunk)n.value=n.thunk(),n.thunk=null,n.realized=!0,e=n.value;else return o.nil()}return e}function Ju(t,e,n){const r=[];let s=t;for(;r.length<e&&!u.nil(s);){if(u.lazySeq(s)){s=Wu(s);continue}if(u.cons(s)){const a=s;r.push(x(a.head,n+1)),s=a.tail;continue}if(u.list(s)){for(const a of s.value){if(r.length>=e)break;r.push(x(a,n+1))}break}if(u.vector(s)){for(const a of s.value){if(r.length>=e)break;r.push(x(a,n+1))}break}r.push(x(s,n+1));break}return{items:r,truncated:r.length>=e}}let Le={printLength:null,printLevel:null};function Ct(){return Le}function Ne(t,e){const n=Le;Le=t;try{return e()}finally{Le=n}}function Ee(t){var a,i;const e=(a=t.resolveNs("clojure.core"))==null?void 0:a.vars.get("*print-length*"),n=(i=t.resolveNs("clojure.core"))==null?void 0:i.vars.get("*print-level*"),r=e?_e(e):void 0,s=n?_e(n):void 0;return{printLength:r&&u.number(r)?r.value:null,printLevel:s&&u.number(s)?s.value:null}}function x(t,e=0){const{printLevel:n}=Le;return n!==null&&e>=n&&(u.list(t)||u.vector(t)||u.map(t)||u.set(t)||u.cons(t)||u.lazySeq(t))?"#":Yu(t,e)}function is(t){if(t.length===0)return null;let e=null;for(const[n]of t){if(n.kind!=="keyword")return null;const r=n.name.slice(1),s=r.indexOf("/");if(s===-1)return null;const a=r.slice(0,s);if(e===null)e=a;else if(e!==a)return null}return e}function ls(t,e){const n=t.name.slice(1),r=n.indexOf("/"),s=r===-1?n:n.slice(r+1);return x(o.keyword(`:${s}`),e)}const Qu={" ":"space","\n":"newline","	":"tab","\r":"return","\b":"backspace","\f":"formfeed"};function Yu(t,e){var n;switch(t.kind){case k.character:{const s=Qu[t.value];return s?`\\${s}`:`\\${t.value}`}case k.number:return t.value.toString();case k.string:let r="";for(const s of t.value)switch(s){case'"':r+='\\"';break;case"\\":r+="\\\\";break;case`
`:r+="\\n";break;case"\r":r+="\\r";break;case"	":r+="\\t";break;default:r+=s}return`"${r}"`;case k.boolean:return t.value?"true":"false";case k.nil:return"nil";case k.keyword:return`${t.name}`;case k.symbol:return`${t.name}`;case k.list:{const{printLength:s}=Le,a=s!==null?t.value.slice(0,s):t.value,i=s!==null&&t.value.length>s?" ...":"";return`(${a.map(c=>x(c,e+1)).join(" ")}${i})`}case k.vector:{const{printLength:s}=Le,a=s!==null?t.value.slice(0,s):t.value,i=s!==null&&t.value.length>s?" ...":"";return`[${a.map(c=>x(c,e+1)).join(" ")}${i}]`}case k.map:{const{printLength:s}=Le,a=s!==null?t.entries.slice(0,s):t.entries,i=s!==null&&t.entries.length>s?" ...":"",c=is(a);if(c!==null){const l=a.map(([d,m])=>`${ls(d,e+1)} ${x(m,e+1)}`).join(" ");return`#:${c}{${l}${i}}`}return`{${a.map(([l,d])=>`${x(l,e+1)} ${x(d,e+1)}`).join(" ")}${i}}`}case k.function:{if(t.arities.length===1){const a=t.arities[0];return`(fn [${(a.restParam?[...a.params,o.symbol("&"),a.restParam]:a.params).map(x).join(" ")}] ${a.body.map(x).join(" ")})`}return`(fn ${t.arities.map(a=>`([${(a.restParam?[...a.params,o.symbol("&"),a.restParam]:a.params).map(x).join(" ")}] ${a.body.map(x).join(" ")})`).join(" ")})`}case k.nativeFunction:return`(native-fn ${t.name})`;case k.multiMethod:return`(multi-method ${t.name})`;case k.atom:return`#<Atom ${x(t.value,e+1)}>`;case k.reduced:return`#<Reduced ${x(t.value,e+1)}>`;case k.volatile:return`#<Volatile ${x(t.value,e+1)}>`;case k.regex:{const s=t.pattern.replace(/"/g,'\\"');return`#"${t.flags?`(?${t.flags})`:""}${s}"`}case k.var:return`#'${t.ns}/${t.name}`;case k.set:{const{printLength:s}=Le,a=s!==null?t.values.slice(0,s):t.values,i=s!==null&&t.values.length>s?" ...":"";return`#{${a.map(c=>x(c,e+1)).join(" ")}${i}}`}case k.delay:return t.realized?`#<Delay @${x(t.value,e+1)}>`:"#<Delay pending>";case k.lazySeq:case k.cons:{const{printLength:s}=Le,a=s!==null?s:Ku,{items:i,truncated:c}=Ju(t,a,e),l=c?" ...":"";return`(${i.join(" ")}${l})`}case k.namespace:return`#namespace[${t.name}]`;case k.protocol:return`#protocol[${t.ns}/${t.name}]`;case k.record:{const s=t.fields.map(([a,i])=>`${x(a,e+1)} ${x(i,e+1)}`).join(" ");return`#${t.ns}/${t.recordType}{${s}}`}case"pending":return t.resolved&&t.resolvedValue!==void 0?`#<Pending @${x(t.resolvedValue,e+1)}>`:"#<Pending>";case k.jsValue:{const s=t.value;return s===null?"#<js null>":s===void 0?"#<js undefined>":s instanceof Date?s.toISOString():typeof s=="function"?"#<js Function>":Array.isArray(s)?"#<js Array>":s instanceof Promise?"#<js Promise>":`#<js ${((n=s.constructor)==null?void 0:n.name)??"Object"}>`}default:throw new f(`unhandled value type: ${t.kind}`,{value:t})}}function wt(t){return t.join(`
`)}const dr={do:0,try:0,and:0,or:0,cond:0,"->":0,"->>":0,"some->":0,"some->>":0,when:1,"when-not":1,"when-let":1,"when-some":1,"when-first":1,if:1,"if-not":1,"if-let":1,"if-some":1,while:1,let:1,loop:1,binding:1,"with-open":1,"with-local-vars":1,locking:1,fn:1,"fn*":1,def:1,defonce:1,ns:1,doseq:1,dotimes:1,for:1,case:1,"cond->":1,"cond->>":1,defn:2,"defn-":2,defmacro:2,defmethod:2},Xu=new Set(["let","loop",J.binding,"with-open","for","doseq","dotimes"]),Zu=new Set(["cond","condp","case","cond->","cond->>"]);function ve(t){return t>0?" ".repeat(t):""}function ed(t){const e=t.lastIndexOf(`
`);return e===-1?t.length:t.length-e-1}function ye(t,e,n){const r=x(t);if(e+r.length<=n)return r;switch(t.kind){case k.list:return nd(t.value,e,n);case k.vector:return cs(t.value,e,n,!1);case k.map:return rd(t.entries,e,n);case k.set:return sd(t.values,e,n);case k.record:return td(t.fields,t.ns,t.recordType,e,n);case k.lazySeq:case k.cons:return r;default:return r}}function td(t,e,n,r,s){if(t.length===0)return`#${e}/${n}{}`;const a=`#${e}/${n}{`,i=r+a.length,c=t.map(([l,d],m)=>{const p=x(l),h=ye(d,i+p.length+1,s);return(m===0?"":ve(i))+p+" "+h});return a+c.join(`
`)+"}"}function nd(t,e,n){if(t.length===0)return"()";const[r,...s]=t,a=x(r),i=r.kind===k.symbol?r.name:null;if(i!==null&&i in dr){const m=dr[i],p=s.slice(0,m),h=s.slice(m),y=e+2;let w="("+a,$=e+1+a.length;for(let P=0;P<p.length;P++){const L=p[P],N=$+1,R=Xu.has(i)&&P===0&&L.kind===k.vector?cs(L.value,N,n,!0):ye(L,N,n);w+=" "+R,$=R.includes(`
`)?ed(R):N+R.length-1}if(h.length===0)return w+")";const S=Zu.has(i)?od(h,y,n):h.map(P=>ve(y)+ye(P,y,n)).join(`
`);return w+`
`+S+")"}if(s.length===0)return"("+a+")";const c=e+1+a.length+1;if(s.length===1)return"("+a+" "+ye(s[0],c,n)+")";const l=a.length<=10?c:e+2,d=s.map(m=>ye(m,l,n));return l===c?"("+a+" "+d[0]+`
`+d.slice(1).map(m=>ve(l)+m).join(`
`)+")":"("+a+`
`+d.map(m=>ve(l)+m).join(`
`)+")"}function cs(t,e,n,r){if(t.length===0)return"[]";const s=e+1;if(r){const i=[];for(let c=0;c<t.length;c+=2){const l=c===0?"":ve(s),d=x(t[c]);if(c+1>=t.length){i.push(l+d);continue}const m=t[c+1],p=d+" "+x(m);if(s+p.length<=n)i.push(l+p);else{const h=ye(m,s+d.length+1,n);i.push(l+d+" "+h)}}return"["+i.join(`
`)+"]"}return"["+t.map((i,c)=>{const l=ye(i,s,n);return(c===0?"":ve(s))+l}).join(`
`)+"]"}function rd(t,e,n){if(t.length===0)return"{}";const r=is(t);if(r!==null){const i=`#:${r}{`,c=e+i.length,l=t.map(([d,m],p)=>{const h=ls(d,0),y=ye(m,c+h.length+1,n);return(p===0?"":ve(c))+h+" "+y});return i+l.join(`
`)+"}"}const s=e+1;return"{"+t.map(([i,c],l)=>{const d=x(i),m=ye(c,s+d.length+1,n);return(l===0?"":ve(s))+d+" "+m}).join(`
`)+"}"}function sd(t,e,n){if(t.length===0)return"#{}";const r=e+2;return"#{"+t.map((a,i)=>{const c=ye(a,r,n);return(i===0?"":ve(r))+c}).join(`
`)+"}"}function od(t,e,n){const r=[];for(let s=0;s<t.length;s+=2){const a=ye(t[s],e,n);if(s+1>=t.length){r.push(ve(e)+a);continue}const i=x(t[s+1]),c=a+" "+i;e+c.length<=n?r.push(ve(e)+c):r.push(ve(e)+a+`
`+ve(e+2)+ye(t[s+1],e+2,n))}return r.join(`
`)}function us(t,e=80){return ye(t,0,e)}function qe(t,e){Object.defineProperty(t,"_pos",{value:e,enumerable:!1,writable:!0,configurable:!0})}function C(t){return t._pos}function pn(t,e){const n=t.split(`
`);let r=0;for(let a=0;a<n.length;a++){const i=r+n[a].length;if(e<=i)return{line:a+1,col:e-r,lineText:n[a]};r=i+1}const s=n[n.length-1];return{line:n.length,col:s.length,lineText:s}}function fr(t,e,n){const r=e.source??t,s=e.lineOffset??(n==null?void 0:n.lineOffset)??0,a=e.colOffset??(n==null?void 0:n.colOffset)??0,{line:i,col:c,lineText:l}=pn(r,e.start),d=i+s,m=i===1?c+a:c,p=Math.max(1,e.end-e.start),h=" ".repeat(c)+"^".repeat(p);return`
  at line ${d}, col ${m+1}:
  ${l}
  ${h}`}function ds(t,e){return o.vector(t.map(n=>{let r=n.line,s=n.col;if((r===null||s===null)&&n.pos){const a=n.pos.source??e;if(a){const i=pn(a,n.pos.start),c=n.pos.lineOffset??0,l=n.pos.colOffset??0;r=i.line+c,s=i.line===1?i.col+1+l:i.col+1}}return o.map([[o.keyword(":fn"),n.fnName!==null?o.string(n.fnName):o.nil()],[o.keyword(":line"),r!==null?o.number(r):o.nil()],[o.keyword(":col"),s!==null?o.number(s):o.nil()],[o.keyword(":source"),n.source!==null?o.string(n.source):o.nil()]])}))}function mr(t,e,n){var c;if(t.length===0)return"";const s=t.slice(0,20),a=t.length-s.length,i=[];for(const l of s){const d=l.fnName??"<anonymous>",m=((c=l.pos)==null?void 0:c.source)??e;if(l.pos&&m){const{line:p,col:h}=pn(m,l.pos.start),y=l.pos.lineOffset??(n==null?void 0:n.lineOffset)??0,w=l.pos.colOffset??(n==null?void 0:n.colOffset)??0,$=p+y,S=p===1?h+w:h;i.push(`  at ${d} (line ${$}, col ${S+1})`)}else i.push(`  at ${d}`)}return a>0&&i.push(`  ... ${a} more frames`),`
`+i.join(`
`)}function fs(t,e){var n;if(t instanceof f&&((n=t.data)==null?void 0:n.argIndex)!==void 0&&!t.pos){const r=e.value[t.data.argIndex+1];if(r){const s=C(r);s&&(t.pos=s)}}}function te(t){var e;switch(t.kind){case k.string:return t.value;case k.character:return t.value;case k.number:return t.value.toString();case k.boolean:return t.value?"true":"false";case k.keyword:return t.name;case k.symbol:return t.name;case k.list:{const{printLength:n}=Ct(),r=n!==null?t.value.slice(0,n):t.value,s=n!==null&&t.value.length>n?" ...":"";return`(${r.map(te).join(" ")}${s})`}case k.vector:{const{printLength:n}=Ct(),r=n!==null?t.value.slice(0,n):t.value,s=n!==null&&t.value.length>n?" ...":"";return`[${r.map(te).join(" ")}${s}]`}case k.map:{const{printLength:n}=Ct(),r=n!==null?t.entries.slice(0,n):t.entries,s=n!==null&&t.entries.length>n?" ...":"";return`{${r.map(([a,i])=>`${te(a)} ${te(i)}`).join(" ")}${s}}`}case k.set:{const{printLength:n}=Ct(),r=n!==null?t.values.slice(0,n):t.values,s=n!==null&&t.values.length>n?" ...":"";return`#{${r.map(te).join(" ")}${s}}`}case k.function:{if(t.arities.length===1){const r=t.arities[0];return`(fn [${(r.restParam?[...r.params,{kind:"symbol",name:"&"},r.restParam]:r.params).map(te).join(" ")}] ${r.body.map(te).join(" ")})`}return`(fn ${t.arities.map(r=>`([${(r.restParam?[...r.params,{kind:"symbol",name:"&"},r.restParam]:r.params).map(te).join(" ")}] ${r.body.map(te).join(" ")})`).join(" ")})`}case k.nativeFunction:return`(native-fn ${t.name})`;case k.nil:return"nil";case k.regex:return`${t.flags?`(?${t.flags})`:""}${t.pattern}`;case k.delay:return t.realized?`#<Delay @${te(t.value)}>`:"#<Delay pending>";case k.lazySeq:{const n=Se(t);return u.nil(n)?"()":te(n)}case k.cons:{const n=Xn(t),{printLength:r}=Ct(),s=r!==null?n.slice(0,r):n,a=r!==null&&n.length>r?" ...":"";return`(${s.map(te).join(" ")}${a})`}case k.namespace:return`#namespace[${t.name}]`;case k.protocol:return`#protocol[${t.ns}/${t.name}]`;case k.record:{const n=t.fields.map(([r,s])=>`${te(r)} ${te(s)}`).join(" ");return`#${t.ns}/${t.recordType}{${n}}`}case k.multiMethod:return`(multi-method ${t.name})`;case k.atom:return`#<Atom ${te(t.value)}>`;case k.reduced:return`#<Reduced ${te(t.value)}>`;case k.volatile:return`#<Volatile ${te(t.value)}>`;case k.var:return`#'${t.ns}/${t.name}`;case k.jsValue:{const n=t.value;return n===null?"null":n===void 0?"undefined":n instanceof Date?n.toISOString():typeof n=="function"?"#<js Function>":Array.isArray(n)?"#<js Array>":n instanceof Promise?"#<js Promise>":`#<js ${((e=n.constructor)==null?void 0:e.name)??"Object"}>`}case"pending":return t.resolved&&t.resolvedValue!==void 0?`#<Pending @${te(t.resolvedValue)}>`:"#<Pending>";default:throw new f(`unhandled value type: ${t.kind}`,{value:t})}}function ms(t){return t.realized||(t.value=t.thunk(),t.realized=!0),t.value}function Se(t){let e=t;for(;e.kind==="lazy-seq";){const n=e;if(n.realized){e=n.value;continue}if(n.thunk)n.value=n.thunk(),n.thunk=null,n.realized=!0,e=n.value;else return{kind:"nil",value:null}}return e}const se=t=>{if(u.list(t)||u.vector(t))return t.value;if(u.map(t))return t.entries.map(([e,n])=>o.vector([e,n]));if(u.record(t))return t.fields.map(([e,n])=>o.vector([e,n]));if(u.set(t))return t.values;if(t.kind==="string")return[...t.value].map(o.string);if(u.lazySeq(t)){const e=Se(t);return u.nil(e)?[]:se(e)}if(u.cons(t))return Xn(t);throw new f(`toSeq expects a collection or string, got ${x(t)}`,{collection:t})};function Xn(t){const e=[t.head];let n=t.tail;for(;!u.nil(n);){if(u.cons(n)){e.push(n.head),n=n.tail;continue}if(u.lazySeq(n)){n=Se(n);continue}if(u.list(n)){e.push(...n.value);break}if(u.vector(n)){e.push(...n.value);break}e.push(...se(n));break}return e}function Rn(t){if(u.nil(t))return[];if(u.list(t)||u.vector(t))return t.value;if(u.lazySeq(t)){const e=Se(t);return Rn(e)}if(u.cons(t))return Xn(t);throw new f(`Cannot destructure ${t.kind} as a sequential collection`,{value:t})}function ps(t){if(u.nil(t))return o.nil();if(u.lazySeq(t)){const e=Se(t);return u.nil(e)?o.nil():ps(e)}return u.cons(t)?t.head:(u.list(t)||u.vector(t))&&t.value.length>0?t.value[0]:o.nil()}function hs(t){if(u.nil(t))return o.list([]);if(u.lazySeq(t)){const e=Se(t);return u.nil(e)?o.list([]):hs(e)}return u.cons(t)?t.tail:u.list(t)||u.vector(t)?o.list(t.value.slice(1)):o.list([])}function An(t){if(u.nil(t))return!0;if(u.lazySeq(t)){const e=Se(t);return An(e)}return u.cons(t)?!1:u.list(t)||u.vector(t)?t.value.length===0:!0}function ad(t){return u.lazySeq(t)||u.cons(t)}function Pe(t,e){const n=t.entries.find(([r])=>u.equal(r,e));return n?n[1]:void 0}function Vt(t,e){return t.entries.some(([n])=>u.equal(n,e))}function id(t,e,n,r){const s=[],a=[...t],i=a.findIndex(m=>u.keyword(m)&&m.name===":as");if(i!==-1){const m=a[i+1];if(!m||!u.symbol(m))throw new f(":as must be followed by a symbol",{pattern:t});s.push([m.name,e]),a.splice(i,2)}const c=a.findIndex(m=>u.symbol(m)&&m.name==="&");let l=null,d;if(c!==-1){if(l=a[c+1],!l)throw new f("& must be followed by a binding pattern",{pattern:t});d=c,a.splice(c)}else d=a.length;if(ad(e)){let m=e;for(let p=0;p<d;p++)s.push(...Ie(a[p],ps(m),n,r)),m=hs(m);if(l!==null)if(u.map(l)&&!An(m)){const p=Rn(m),h=[];for(let y=0;y<p.length;y+=2)h.push([p[y],p[y+1]??o.nil()]);s.push(...Ie(l,{kind:"map",entries:h},n,r))}else{const p=An(m)?o.nil():m;s.push(...Ie(l,p,n,r))}}else{const m=Rn(e);for(let p=0;p<d;p++)s.push(...Ie(a[p],m[p]??o.nil(),n,r));if(l!==null){const p=m.slice(d);let h;if(u.map(l)&&p.length>0){const y=[];for(let w=0;w<p.length;w+=2)y.push([p[w],p[w+1]??o.nil()]);h={kind:"map",entries:y}}else h=p.length>0?o.list(p):o.nil();s.push(...Ie(l,h,n,r))}}return s}function ld(t,e,n,r){const s=[],a=Pe(t,o.keyword(":or")),i=a&&u.map(a)?a:null,c=Pe(t,o.keyword(":as")),l=u.nil(e);if(!u.map(e)&&!l)throw new f(`Cannot destructure ${e.kind} as a map`,{value:e,pattern:t},C(t));const d=l?o.map([]):e;for(const[m,p]of t.entries){if(u.keyword(m)&&m.name===":or"||u.keyword(m)&&m.name===":as")continue;if(u.keyword(m)&&m.name===":keys"){if(!u.vector(p))throw new f(":keys must be followed by a vector of symbols",{pattern:t},C(p)??C(t));for(const $ of p.value){if(!u.symbol($))throw new f(":keys vector must contain symbols",{pattern:t,sym:$},C($)??C(p));const S=$.name.indexOf("/"),P=S!==-1?$.name.slice(S+1):$.name,L=o.keyword(":"+$.name),N=Vt(d,L),H=N?Pe(d,L):void 0;let R;if(N)R=H;else if(i){const z=Pe(i,o.symbol(P));R=z!==void 0?n.evaluate(z,r):o.nil()}else R=o.nil();s.push([P,R])}continue}if(u.keyword(m)&&m.name===":strs"){if(!u.vector(p))throw new f(":strs must be followed by a vector of symbols",{pattern:t},C(p)??C(t));for(const $ of p.value){if(!u.symbol($))throw new f(":strs vector must contain symbols",{pattern:t,sym:$},C($)??C(p));const S=o.string($.name),P=Vt(d,S),L=P?Pe(d,S):void 0;let N;if(P)N=L;else if(i){const H=Pe(i,o.symbol($.name));N=H!==void 0?n.evaluate(H,r):o.nil()}else N=o.nil();s.push([$.name,N])}continue}if(u.keyword(m)&&m.name===":syms"){if(!u.vector(p))throw new f(":syms must be followed by a vector of symbols",{pattern:t},C(p)??C(t));for(const $ of p.value){if(!u.symbol($))throw new f(":syms vector must contain symbols",{pattern:t,sym:$},C($)??C(p));const S=o.symbol($.name),P=Vt(d,S),L=P?Pe(d,S):void 0;let N;if(P)N=L;else if(i){const H=Pe(i,o.symbol($.name));N=H!==void 0?n.evaluate(H,r):o.nil()}else N=o.nil();s.push([$.name,N])}continue}const h=Pe(d,p),y=Vt(d,p);let w;if(y)w=h;else if(i&&u.symbol(m)){const $=Pe(i,o.symbol(m.name));w=$!==void 0?n.evaluate($,r):o.nil()}else w=o.nil();s.push(...Ie(m,w,n,r))}return c&&u.symbol(c)&&s.push([c.name,e]),s}function Ie(t,e,n,r){if(u.symbol(t))return[[t.name,e]];if(u.vector(t))return id(t.value,e,n,r);if(u.map(t))return ld(t,e,n,r);throw new f(`Invalid destructuring pattern: expected symbol, vector, or map, got ${t.kind}`,{pattern:t},C(t))}const Bt="&";class je{constructor(e,n){fe(this,"args");fe(this,"pos");this.args=e,this.pos=n}}function pr(t,e){const n=t.value.findIndex(a=>u.symbol(a)&&a.name===Bt);let r=[],s=null;if(n===-1)r=t.value;else{if(t.value.filter(i=>u.symbol(i)&&i.name===Bt).length>1)throw new f(`${Bt} can only appear once`,{args:t,env:e},C(t));if(n!==t.value.length-2)throw new f(`${Bt} must be second-to-last argument`,{args:t,env:e},C(t));r=t.value.slice(0,n),s=t.value[n+1]}return{params:r,restParam:s}}function gs(t,e){if(t.length===0)throw new f("fn/defmacro requires at least a parameter vector",{forms:t,env:e});if(u.vector(t[0])){const n=t[0],{params:r,restParam:s}=pr(n,e);return[{params:r,restParam:s,body:t.slice(1)}]}if(u.list(t[0])){const n=[];for(const s of t){if(!u.list(s)||s.value.length===0)throw new f("Multi-arity clause must be a list starting with a parameter vector",{form:s,env:e},C(s));const a=s.value[0];if(!u.vector(a))throw new f("First element of arity clause must be a parameter vector",{paramVec:a,env:e},C(a)??C(s));const{params:i,restParam:c}=pr(a,e);n.push({params:i,restParam:c,body:s.value.slice(1)})}if(n.filter(s=>s.restParam!==null).length>1)throw new f("At most one variadic arity is allowed per function",{forms:t,env:e});return n}throw new f("fn/defmacro expects a parameter vector or arity clauses",{forms:t,env:e},C(t[0]))}function Zn(t,e,n,r,s,a){if(e===null){if(n.length!==t.length)throw new f(`Arguments length mismatch: fn accepts ${t.length} arguments, but ${n.length} were provided`,{params:t,args:n,outerEnv:r})}else if(n.length<t.length)throw new f(`Arguments length mismatch: fn expects at least ${t.length} arguments, but ${n.length} were provided`,{params:t,args:n,outerEnv:r});const i=[];for(let c=0;c<t.length;c++)i.push(...Ie(t[c],n[c],s,a));if(e!==null){const c=n.slice(t.length);let l;if(u.map(e)&&c.length>0){const d=[];for(let m=0;m<c.length;m+=2)d.push([c[m],c[m+1]??lt()]);l={kind:"map",entries:d}}else l=c.length>0?os(c):lt();i.push(...Ie(e,l,s,a))}return We(i.map(([c])=>c),i.map(([,c])=>c),r)}function hn(t,e){const n=t.find(a=>a.restParam===null&&a.params.length===e);if(n)return n;const r=t.find(a=>a.restParam!==null&&e>=a.params.length);if(r)return r;const s=t.map(a=>a.restParam?`${a.params.length}+`:`${a.params.length}`);throw new f(`No matching arity for ${e} arguments. Available arities: ${s.join(", ")}`,{arities:t,argCount:e})}function ie(t){return t===null?o.nil():t===void 0?o.jsValue(void 0):typeof t=="number"?o.number(t):typeof t=="string"?o.string(t):typeof t=="boolean"?o.boolean(t):t!==null&&typeof(t==null?void 0:t.then)=="function"?o.pending(Promise.resolve(t).then(ie)):o.jsValue(t)}function cd(t){if(u.string(t))return t.value;if(u.keyword(t))return t.name.slice(1);if(u.number(t)||u.boolean(t))return String(t.value);throw new f(`cljToJs: map key must be a string, keyword, number, or boolean — got ${t.kind} (rich keys are not allowed as JS object keys; reduce to a primitive first)`,{key:t})}function $e(t,e,n){switch(t.kind){case"js-value":return t.value;case"number":return t.value;case"string":return t.value;case"boolean":return t.value;case"nil":return null;case"keyword":return t.name.slice(1);case"function":case"native-function":{const r=t;return(...s)=>{const a=s.map(ie),i=e.applyCallable(r,a,n);return $e(i,e,n)}}case"list":case"vector":return t.value.map(r=>$e(r,e,n));case"map":{const r={};for(const[s,a]of t.entries)r[cd(s)]=$e(a,e,n);return r}default:throw new f(`cannot convert ${t.kind} to JS value — no coercion defined`,{val:t})}}function ud(t,e){switch(t.kind){case"js-value":return t.value;case"string":case"number":case"boolean":return t.value;default:throw new f(`cannot use . on ${t.kind}`,{target:t},C(e))}}function dd(t,e,n){if(t.value.length<3)throw new f(". requires at least 2 arguments: (. obj prop)",{list:t},C(t));const r=t.value[1],s=n.evaluate(r,e),a=ud(s,r);if(a==null){const y=a===null?"null":"undefined";throw new f(`cannot use . on ${y} js value — check for nil/undefined before accessing properties`,{target:s},C(r))}const i=t.value[2];if(!u.symbol(i))throw new f(`. expects a symbol for property name, got: ${i.kind}`,{propForm:i},C(i)??C(t));const c=i.name,l=a;if(t.value.length===3){const y=l[c];return typeof y=="function"?o.jsValue(y.bind(l)):ie(y)}const d=l[c];if(typeof d!="function")throw new f(`method '${c}' is not callable on ${String(l)}`,{propName:c,rawObj:l},C(i));const p=t.value.slice(3).map(y=>n.evaluate(y,e)).map(y=>$e(y,n,e)),h=d.apply(l,p);return ie(h)}function fd(t,e,n){if(t.value.length<2)throw new f("js/new requires a constructor argument",{list:t},C(t));const r=n.evaluate(t.value[1],e);if(!u.jsValue(r)||typeof r.value!="function")throw new f(`js/new: expected js-value constructor, got ${r.kind}`,{cls:r},C(t.value[1])??C(t));const a=t.value.slice(2).map(c=>n.evaluate(c,e)).map(c=>$e(c,n,e)),i=r.value;return ie(new i(...a))}function vs(t,e,n,r){if(t.kind===k.nativeFunction)return t.fnWithContext?t.fnWithContext(n,r,...e):t.fn(...e);if(t.kind===k.function){const s=hn(t.arities,e.length);if(s.compiledBody&&s.paramSlots){const i=s.paramSlots,c=new Array(i.length);for(let l=0;l<i.length;l++)c[l]=i[l].value,i[l].value=e[l];try{return s.compiledBody(t.env,n)}finally{for(let l=0;l<i.length;l++)i[l].value=c[l]}}let a=e;for(;;){const i=Zn(s.params,s.restParam,a,t.env,n,r);try{return s.compiledBody?s.compiledBody(i,n):n.evaluateForms(s.body,i)}catch(c){if(c instanceof je){a=c.args;continue}throw c}}}throw new f(`${t.kind} is not a callable function`,{fn:t,args:e})}function md(t,e,n){const r=hn(t.arities,e.length),s=Zn(r.params,r.restParam,e,t.env,n,t.env);return n.evaluateForms(r.body,s)}function ys(t,e,n,r){if(u.aFunction(t))return vs(t,e,n,r);if(u.jsValue(t)){if(typeof t.value!==k.function)throw new f(`js-value is not callable: ${typeof t.value}`,{fn:t,args:e});const s=e.map(i=>$e(i,n,r)),a=t.value(...s);return ie(a)}if(u.keyword(t)){const s=e[0],a=e.length>1?e[1]:lt();if(u.map(s)){const i=s.entries.find(([c])=>u.equal(c,t));return i?i[1]:a}if(u.record(s)){const i=s.fields.find(([c])=>u.equal(c,t));return i?i[1]:a}return a}if(u.record(t)){if(e.length===0)throw new f("Record used as function requires at least one argument",{fn:t,args:e});const s=e[0],a=e.length>1?e[1]:lt(),i=t.fields.find(([c])=>u.equal(c,s));return i?i[1]:a}if(u.map(t)){if(e.length===0)throw new f("Map used as function requires at least one argument",{fn:t,args:e});const s=e[0],a=e.length>1?e[1]:lt(),i=t.entries.find(([c])=>u.equal(c,s));return i?i[1]:a}if(u.set(t)){if(e.length===0)throw new f("Set used as function requires at least one argument",{fn:t,args:e});const s=e[0];return t.values.some(i=>u.equal(i,s))?s:lt()}if(u.var(t))return ys(t.value,e,n,r);throw new f(`${x(t)} is not a callable value`,{fn:t,args:e})}let pd=0;function ws(t="G"){return`${t}__${pd++}`}const hd=new Set([...Object.keys(J),"catch","finally","&"]);function Wt(t){return u.list(t)&&t.value.length===2&&u.symbol(t.value[0])&&t.value[0].name==="unquote-splicing"}function yn(t,e,n){const r=[];let s=[];for(const a of t)Wt(a)?(s.length>0&&(r.push(o.list([o.symbol("list"),...s])),s=[]),r.push(a.value[1])):s.push(it(a,e,n));return s.length>0&&r.push(o.list([o.symbol("list"),...s])),r}function it(t,e=new Map,n){var r;switch(t.kind){case k.number:case k.string:case k.boolean:case k.keyword:case k.nil:return t;case k.symbol:{if(t.name.endsWith("#"))return e.has(t.name)||e.set(t.name,ws(t.name.slice(0,-1))),o.list([o.symbol("quote"),o.symbol(e.get(t.name))]);if(n&&!t.name.includes("/")&&!hd.has(t.name)){const s=_t(t.name,n);if(s)return o.list([o.symbol("quote"),o.symbol(`${s.ns}/${t.name}`)]);const a=(r=pe(n).ns)==null?void 0:r.name;if(a)return o.list([o.symbol("quote"),o.symbol(`${a}/${t.name}`)])}return o.list([o.symbol("quote"),t])}case k.list:{if(t.value.length===2&&u.symbol(t.value[0])&&t.value[0].name==="unquote")return t.value[1];if(!t.value.some(Wt))return o.list([o.symbol("list"),...t.value.map(i=>it(i,e,n))]);const a=yn(t.value,e,n);return o.list([o.symbol("apply"),o.symbol("list"),o.list([o.symbol("concat*"),...a])])}case k.vector:{if(!t.value.some(Wt))return o.list([o.symbol("vector"),...t.value.map(i=>it(i,e,n))]);const a=yn(t.value,e,n);return o.list([o.symbol("apply"),o.symbol("vector"),o.list([o.symbol("concat*"),...a])])}case k.map:{const s=[];for(const[a,i]of t.entries)s.push(it(a,e,n)),s.push(it(i,e,n));return o.list([o.symbol("hash-map"),...s])}case k.set:{if(!t.values.some(Wt))return o.list([o.symbol("hash-set"),...t.values.map(i=>it(i,e,n))]);const a=yn(t.values,e,n);return o.list([o.symbol("apply"),o.symbol("hash-set"),o.list([o.symbol("concat*"),...a])])}default:throw new f(`Unexpected form in quasiquote: ${t.kind}`,{form:t})}}function He(t,e,n){var l;if(u.vector(t)){const d=t.value.map(m=>He(m,e,n));return d.every((m,p)=>m===t.value[p])?t:o.vector(d)}if(u.map(t)){const d=t.entries.map(([m,p])=>[He(m,e,n),He(p,e,n)]);return d.every(([m,p],h)=>m===t.entries[h][0]&&p===t.entries[h][1])?t:o.map(d)}if(u.cons(t)||u.lazySeq(t))return He(o.list(se(t)),e,n);if(!u.list(t)||t.value.length===0)return t;const r=t.value[0];if(!u.symbol(r)){const d=t.value.map(m=>He(m,e,n));return d.every((m,p)=>m===t.value[p])?t:o.list(d)}const s=r.name;if(s==="quote")return t;if(s==="quasiquote"){const d=it(t.value[1],new Map,e);return He(d,e,n)}let a;const i=s.indexOf("/");if(i>0&&i<s.length-1){const d=s.slice(0,i),m=s.slice(i+1),h=((l=pe(e).ns)==null?void 0:l.aliases.get(d))??n.resolveNs(d)??null;if(h){const y=h.vars.get(m);a=y!==void 0?_e(y):void 0}}else a=rn(s,e);if(a!==void 0&&u.macro(a)){const d=n.applyMacro(a,t.value.slice(1));return He(d,e,n)}const c=t.value.map(d=>He(d,e,n));return c.every((d,m)=>d===t.value[m])?t:o.list(c)}function er(t){In(t,!0)}function gd(t){return u.list(t)&&t.value.length>=1&&u.symbol(t.value[0])&&t.value[0].name===J.recur}function In(t,e){for(let n=0;n<t.length;n++)at(t[n],e&&n===t.length-1)}function at(t,e){if(!u.list(t))return;if(gd(t)){if(!e)throw new f("Can only recur from tail position",{form:t},C(t));return}if(t.value.length===0)return;const n=t.value[0];if(!u.symbol(n)){for(const s of t.value)at(s,!1);return}const r=n.name;if(!(r==="fn"||r===J["fn*"]||r==="loop"||r===J["loop*"]||r===J.quote)){if(r===J.if){t.value[1]&&at(t.value[1],!1),t.value[2]&&at(t.value[2],e),t.value[3]&&at(t.value[3],e);return}if(r===J.do){In(t.value.slice(1),e);return}if(r==="let"||r===J["let*"]){const s=t.value[1];if(u.vector(s))for(let a=1;a<s.value.length;a+=2)at(s.value[a],!1);In(t.value.slice(2),e);return}for(const s of t.value.slice(1))at(s,!1)}}function vd(t,e){let n=e;for(;n;){const r=n.bindings.get(t);if(r!==void 0)return r;n=n.outer}return null}function yd(t){if(t===null)return null;let e=t;for(;e;){if(e.loop)return e.loop;e=e.outer}return null}function gn(t,e,n){if(!u.vector(t))throw new f(`${e} bindings must be a vector`,{bindings:t,env:n},C(t));if(t.value.length%2!==0)throw new f(`${e} bindings must have an even number of forms`,{bindings:t,env:n},C(t))}function tr(t,e={}){const n=t.value.slice(1),r=[],s=[];let a=null;for(let i=0;i<n.length;i++){const c=n[i];if(u.list(c)&&c.value.length>0&&u.symbol(c.value[0])){const l=c.value[0].name;if(l==="catch"){if(c.value.length<3)throw new f("catch requires a discriminator and a binding symbol",{form:c,env:e},C(c));const d=c.value[1],m=c.value[2];if(!u.symbol(m))throw new f("catch binding must be a symbol",{form:c,env:e},C(m)??C(c));s.push({discriminator:d,binding:m.name,body:c.value.slice(3)});continue}if(l==="finally"){if(i!==n.length-1)throw new f("finally clause must be the last in try expression",{form:c,env:e},C(c));a=c.value.slice(1);continue}}r.push(c)}return{bodyForms:r,catchClauses:s,finallyForms:a}}function nr(t,e,n,r){let s;try{s=r.evaluate(t,n)}catch{return!0}if(s.kind==="symbol")return!0;if(u.keyword(s)){if(s.name===":default")return!0;if(!u.map(e))return!1;const a=e.entries.find(([i])=>u.keyword(i)&&i.name===":type");return a?u.equal(a[1],s):!1}if(u.aFunction(s)){const a=r.applyFunction(s,[e],n);return u.truthy(a)}throw new f("catch discriminator must be a keyword or a predicate function",{discriminator:s,env:n})}const wd=1,bd=2,hr=3;function kd(t,e,n){const r=n(t.value[wd],e),s=n(t.value[bd],e),a=t.value.length>hr,i=a?n(t.value[hr],e):null;return r===null||s===null||a&&i===null?null:(c,l)=>u.truthy(r(c,l))?s(c,l):i?i(c,l):o.nil()}function xd(t,e,n){const{bodyForms:r,catchClauses:s,finallyForms:a}=tr(t),i=et(r,e,n);if(i===null)return null;const c=[];for(const d of s){const m={value:null},p={bindings:new Map([[d.binding,m]]),outer:e},h=et(d.body,p,n);if(h===null)return null;c.push({discriminator:d.discriminator,catchSlot:m,compiledCatchBody:h})}let l=null;return a!==null&&a.length>0&&(l=et(a,e,n),l===null)?null:(d,m)=>{let p=o.nil(),h=null;try{p=i(d,m)}catch(y){if(y instanceof je)throw y;let w;if(y instanceof Te)w=y.value;else if(Jn(y)){const S=y,P=S.code?o.keyword(`:${S.code}`):o.keyword(":error/runtime"),L=[[o.keyword(":type"),P],[o.keyword(":message"),o.string(y.message)]];S.frames&&S.frames.length>0&&L.push([o.keyword(":frames"),ds(S.frames)]),w=o.map(L)}else throw y;let $=!1;for(const{discriminator:S,catchSlot:P,compiledCatchBody:L}of c)if(nr(S,w,d,m)){P.value=w,p=L(d,m),$=!0;break}$||(h=y)}finally{l!==null&&l(d,m)}if(h!==null)throw h;return p}}function et(t,e,n){const r=[];for(const s of t){const a=n(s,e);if(a===null)return null;r.push(a)}return r.length===1?r[0]:(s,a)=>{let i=o.nil();for(const c of r)i=c(s,a);return i}}const rr=1,bs=2;function $d(t,e,n){const r=t.value[rr];if(!u.vector(r)||r.value.length%2!==0)return null;let s=e;const a=[];for(let l=0;l<r.value.length;l+=2){const d=r.value[l];if(!u.symbol(d))return null;const m={value:null},p=n(r.value[l+1],s);if(p===null)return null;a.push([m,p]),s={bindings:new Map([[d.name,m]]),outer:s}}const i=t.value.slice(bs),c=et(i,s,n);return c===null?null:(l,d)=>{const m=a.map(([h])=>h.value);for(const[h,y]of a)h.value=y(l,d);const p=c(l,d);return a.forEach(([h],y)=>{h.value=m[y]}),p}}function Md(t,e,n){const r=t.value[rr];if(!u.vector(r)||r.value.length%2!==0)return null;const s=t.value.slice(bs);er(s);let a=e;const i=[],c=[];for(let h=0;h<r.value.length;h+=2){const y=r.value[h];if(!u.symbol(y))return null;const w=n(r.value[h+1],a);if(w===null)return null;const $={value:null};i.push([$,w]),c.push([y.name,$]),a={bindings:new Map([[y.name,$]]),outer:a}}const l=i.map(h=>h[0]),d={args:null},m={bindings:new Map(c),outer:e,loop:{slots:l,recurTarget:d}},p=et(s,m,n);return p===null?null:(h,y)=>{for(const[w,$]of i)w.value=$(h,y);for(;;){d.args=null;const w=p(h,y);if(d.args!==null)for(let $=0;$<l.length;$++)l[$].value=d.args[$];else return w}}}function qd(t,e,n){const r=yd(e);if(r===null)return null;const{recurTarget:s,slots:a}=r,i=t.value.slice(rr);if(i.length!==a.length)return null;const c=[];for(const l of i){const d=n(l,e);if(d===null)return null;c.push(d)}return(l,d)=>{const m=c.map(p=>p(l,d));return s.args=m,o.nil()}}function Sd(t,e,n){const r=t.value[1];if(!u.vector(r)||r.value.length%2!==0)return null;const s=[];for(let c=0;c<r.value.length;c+=2){const l=r.value[c];if(!u.symbol(l))return null;const d=n(r.value[c+1],e);if(d===null)return null;s.push([l.name,d])}const a=t.value.slice(2),i=et(a,e,n);return i===null?null:(c,l)=>{var m;const d=[];for(const[p,h]of s){const y=h(c,l),w=p.indexOf("/");let $;if(w>0&&w<p.length-1){const S=p.slice(0,w),P=p.slice(w+1),N=((m=pe(c).ns)==null?void 0:m.aliases.get(S))??l.resolveNs(S)??null;$=N==null?void 0:N.vars.get(P)}else $=_t(p,c);if(!$)throw new f(`No var found for symbol '${p}' in binding form`,{name:p});if(!$.dynamic)throw new f(`Cannot use binding with non-dynamic var ${$.ns}/${$.name}. Mark it dynamic with (def ^:dynamic ${$.name} ...)`,{name:p});$.bindingStack??($.bindingStack=[]),$.bindingStack.push(y),d.push($)}try{return i(c,l)}finally{for(const p of d)p.bindingStack.pop()}}}function jd(t,e,n){const r=t.map(()=>({value:null})),s={args:null},a={bindings:new Map(t.map((l,d)=>[l.name,r[d]])),outer:null,loop:{slots:r,recurTarget:s}},i=et(e,a,n);return i===null?null:{compiledBody:(l,d)=>{for(;;){s.args=null;const m=i(l,d);if(s.args!==null)for(let p=0;p<r.length;p++)r[p].value=s.args[p];else return m}},paramSlots:r}}function _d(t){const e=t.allNamespaces().find(s=>s.name==="clojure.core");if(!e)return null;const n=e.vars.get("*hierarchy*");if(!n)return null;const r=n.dynamic&&n.bindingStack&&n.bindingStack.length>0?n.bindingStack[n.bindingStack.length-1]:n.value;return u.map(r)?r:null}function Fd(t,e,n){if(u.equal(e,n))return!0;for(const[r,s]of t.entries)if(!(r.kind!=="keyword"||r.name!==":ancestors")){if(!u.map(s))return!1;for(const[a,i]of s.entries)if(u.equal(a,e))return u.set(i)?i.values.some(c=>u.equal(c,n)):!1;return!1}return!1}function sr(t,e,n,r,s){const a=n.applyFunction(t.dispatchFn,e,r),i=t.methods.find(({dispatchVal:l})=>u.equal(l,a));if(i)return n.applyFunction(i.fn,e,r);const c=_d(n);if(c){const l=t.methods.filter(({dispatchVal:d})=>Fd(c,a,d));if(l.length===1)return n.applyFunction(l[0].fn,e,r);if(l.length>1)throw new f(`Multiple methods in multimethod '${t.name}' match dispatch value ${x(a)}: `+l.map(d=>x(d.dispatchVal)).join(", "),{mm:t,dispatchVal:a},s?C(s):void 0)}if(t.defaultMethod)return n.applyFunction(t.defaultMethod,e,r);throw new f(`No method in multimethod '${t.name}' for dispatch value ${x(a)}`,{mm:t,dispatchVal:a},s?C(s):void 0)}function Rd(t,e,n){const r=t.value[0],s=n(r,e);if(s===null)return null;const a=[];for(const c of t.value.slice(1)){const l=n(c,e);if(l===null)return null;a.push(l)}const i=a.length;return(c,l)=>{const d=s(c,l);if(u.multiMethod(d)){const y=a.map(w=>w(c,l));return sr(d,y,l,c,t)}if(!u.callable(d)){const y=u.symbol(r)?r.name:x(r);throw new f(`${y} is not callable`,{list:t,env:c},C(t))}const m=a.map(y=>y(c,l)),p=C(t),h={fnName:u.symbol(r)?r.name:null,line:null,col:null,source:l.currentFile??null,pos:p??null};l.frameStack.push(h);try{if(d.kind==="function"){const y=hn(d.arities,i);if(y.compiledBody&&y.paramSlots){const w=y.paramSlots,$=new Array(w.length);for(let S=0;S<w.length;S++)$[S]=w[S].value,w[S].value=m[S];try{return y.compiledBody(d.env,l)}finally{for(let S=0;S<w.length;S++)w[S].value=$[S]}}}return l.applyCallable(d,m,c)}catch(y){throw fs(y,t),y instanceof f&&!y.frames&&(y.frames=[...l.frameStack].reverse()),y}finally{l.frameStack.pop()}}}function Ad(t,e,n){const r=[];for(const a of t.value){const i=n(a,e);if(i===null)return null;r.push(i)}const s=t.meta;return(a,i)=>{const c=r.map(l=>l(a,i));return s?{kind:k.vector,value:c,meta:s}:o.vector(c)}}function Id(t,e,n){const r=[];for(const[a,i]of t.entries){const c=n(a,e),l=n(i,e);if(c===null||l===null)return null;r.push([c,l])}const s=t.meta;return(a,i)=>{const c=[];for(const[l,d]of r)c.push([l(a,i),d(a,i)]);return s?{kind:k.map,entries:c,meta:s}:o.map(c)}}function Cd(t,e,n){const r=[];for(const s of t.values){const a=n(s,e);if(a===null)return null;r.push(a)}return(s,a)=>{const i=[];for(const c of r){const l=c(s,a);i.some(d=>u.equal(d,l))||i.push(l)}return o.set(i)}}function Pd(t,e,n){if(t.value.length===0)return()=>t;const r=t.value[0];if(u.symbol(r))switch(r.name){case J.if:return kd(t,e,n);case J.do:return et(t.value.slice(1),e,n);case J["let*"]:return $d(t,e,n);case J["loop*"]:return Md(t,e,n);case J.recur:return qd(t,e,n);case J.try:return xd(t,e,n);case J.binding:return Sd(t,e,n)}return u.specialForm(r)?null:Rd(t,e,n)}function Nd(t,e){const n=t.name,r=n.indexOf("/");if(r>0&&r<n.length-1){const i=n.slice(0,r),c=n.slice(r+1);if(c.includes(".")){const l=c.split(".");return(d,m)=>{var $;const h=(($=pe(d).ns)==null?void 0:$.aliases.get(i))??m.resolveNs(i)??null;if(!h)throw new f(`No such namespace or alias: ${i}`,{symbol:n,env:d},C(t));const y=h.vars.get(l[0]);if(y===void 0)throw new f(`Symbol ${i}/${l[0]} not found`,{symbol:n,env:d},C(t));let w=_e(y);for(let S=1;S<l.length;S++){let P;if(w.kind==="js-value")P=w.value;else if(w.kind==="string"||w.kind==="number"||w.kind==="boolean")P=w.value;else throw new f(`Cannot access property '${l[S]}' on ${w.kind} while resolving ${n}`,{symbol:n},C(t));if(P==null)throw new f(`Cannot access property '${l[S]}' on ${P===null?"null":"undefined"} while resolving ${n}`,{symbol:n},C(t));const L=P,N=L[l[S]];typeof N=="function"?w=ie(N.bind(L)):w=ie(N)}return w}}return(l,d)=>{var y;const p=((y=pe(l).ns)==null?void 0:y.aliases.get(i))??d.resolveNs(i)??null;if(!p)throw new f(`No such namespace or alias: ${i}`,{symbol:n,env:l},C(t));const h=p.vars.get(c);if(h===void 0)throw new f(`Symbol ${n} not found`,{symbol:n,env:l},C(t));return _e(h)}}const s=vd(n,e);if(s!==null)return(i,c)=>s.value;const a=C(t);return(i,c)=>{try{return as(n,i)}catch(l){throw l instanceof f&&!l.pos&&a&&(l.pos=a),l}}}function ut(t,e=null){switch(t.kind){case k.number:case k.string:case k.keyword:case k.nil:case k.boolean:case k.regex:case k.character:return()=>t;case k.symbol:return Nd(t,e);case k.vector:return Ad(t,e,ut);case k.map:return Id(t,e,ut);case k.set:return Cd(t,e,ut);case k.list:return Pd(t,e,ut)}return null}function Ed(t,e,n){const r=t.value.map(s=>n.evaluate(s,e));return t.meta?{kind:k.vector,value:r,meta:t.meta}:o.vector(r)}function Ld(t,e,n){const r=[];for(const s of t.values){const a=n.evaluate(s,e);r.some(i=>u.equal(i,a))||r.push(a)}return o.set(r)}function Td(t,e,n){let r=[];for(const[s,a]of t.entries){const i=n.evaluate(s,e),c=n.evaluate(a,e);r.push([i,c])}return t.meta?{kind:k.map,entries:r,meta:t.meta}:o.map(r)}function ks(t,e,n){var i;const r=t.value[1];if(!u.vector(r))throw new f("binding requires a vector of bindings",{list:t,env:e},C(t));if(r.value.length%2!==0)throw new f("binding vector must have an even number of forms",{list:t,env:e},C(r)??C(t));const s=t.value.slice(2),a=[];for(let c=0;c<r.value.length;c+=2){const l=r.value[c];if(!u.symbol(l))throw new f("binding left-hand side must be a symbol",{sym:l},C(l)??C(t));const d=n.evaluate(r.value[c+1],e),m=l.name.indexOf("/");let p;if(m>0&&m<l.name.length-1){const h=l.name.slice(0,m),y=l.name.slice(m+1),$=((i=pe(e).ns)==null?void 0:i.aliases.get(h))??n.resolveNs(h)??null;if(!$)throw new f(`No such namespace: ${h}`,{sym:l},C(l));p=$.vars.get(y)}else p=_t(l.name,e);if(!p)throw new f(`No var found for symbol '${l.name}' in binding form`,{sym:l},C(l));if(!p.dynamic)throw new f(`Cannot use binding with non-dynamic var ${p.ns}/${p.name}. Mark it dynamic with (def ^:dynamic ${l.name} ...)`,{sym:l},C(l));p.bindingStack??(p.bindingStack=[]),p.bindingStack.push(d),a.push(p)}return{body:s,boundVars:a}}function Gd(t){const e={syncCtx:t,evaluate:(n,r)=>re(n,r,e),evaluateForms:(n,r)=>Ue(n,r,e),applyCallable:(n,r,s)=>xs(n,r,s,e)};return e}async function re(t,e,n){switch(t.kind){case k.number:case k.string:case k.boolean:case k.keyword:case k.nil:case k.symbol:case k.function:case k.nativeFunction:case k.macro:case k.multiMethod:case k.atom:case k.reduced:case k.volatile:case k.regex:case k.var:case k.delay:case k.lazySeq:case k.cons:case k.namespace:case k.pending:return n.syncCtx.evaluate(t,e)}if(u.vector(t)){const r=[];for(const s of t.value)r.push(await re(s,e,n));return o.vector(r)}if(u.map(t)){const r=[];for(const[s,a]of t.entries){const i=await re(s,e,n),c=await re(a,e,n);r.push([i,c])}return o.map(r)}if(u.set(t)){const r=[];for(const s of t.values)r.push(await re(s,e,n));return o.set(r)}return u.list(t)?zd(t,e,n):n.syncCtx.evaluate(t,e)}async function Ue(t,e,n){let r=o.nil();for(const s of t){const a=n.syncCtx.expandAll(s,e);r=await re(a,e,n)}return r}const Od=new Set(["atom","volatile","reduced","delay"]),Dd=new Set(["quote","def","if","do","let","let*","fn","fn*","loop","loop*","recur","binding","set!","try","var","defmacro","letfn*","lazy-seq","ns","async",".","js/new"]);async function zd(t,e,n){if(t.value.length===0)return t;const r=t.value[0];if(u.symbol(r)&&Dd.has(r.name))return Vd(r.name,t,e,n);const s=await re(r,e,n);if(u.aFunction(s)&&s.name==="deref"&&(t.value.length===2||t.value.length===3)){const i=await re(t.value[1],e,n);if(u.pending(i)){let c=3e4;if(t.value.length===3){const m=await re(t.value[2],e,n);if(!u.number(m))throw new f("deref timeout must be a number (milliseconds)",{t:m});c=m.value}let l=null;const d=new Promise((m,p)=>{l=setTimeout(()=>p(new f(`deref timed out after ${c}ms`,{})),c)});return i.promise.then(()=>{l!==null&&clearTimeout(l)},()=>{l!==null&&clearTimeout(l)}),Promise.race([i.promise,d])}return Od.has(i.kind)?n.syncCtx.applyCallable(s,[i],e):i}const a=[];for(const i of t.value.slice(1))a.push(await re(i,e,n));return xs(s,a,e,n)}async function Vd(t,e,n,r){switch(t){case J.quote:case J.var:case J.ns:case"fn":case"fn*":return r.syncCtx.evaluate(e,n);case J.recur:{const s=[];for(const a of e.value.slice(1))s.push(await re(a,n,r));throw new je(s)}case J.do:return Ue(e.value.slice(1),n,r);case J.def:{if(e.value[2]===void 0)return r.syncCtx.evaluate(e,n);const a=e.value.length===4&&e.value[2].kind==="string"?3:2,i=await re(e.value[a],n,r),c=o.list([o.symbol(J.quote),i]),l=[...e.value.slice(0,a),c];return r.syncCtx.evaluate(o.list(l),n)}case J.if:{const s=await re(e.value[1],n,r);return!u.nil(s)&&!(u.boolean(s)&&!s.value)?re(e.value[2],n,r):e.value[3]!==void 0?re(e.value[3],n,r):o.nil()}case"let":{const s=r.syncCtx.expandAll(e,n);return re(s,n,r)}case J["let*"]:return Bd(e,n,r);case"loop":{const s=r.syncCtx.expandAll(e,n);return re(s,n,r)}case J["loop*"]:return Hd(e,n,r);case J.binding:return Ud(e,n,r);case J.try:return Kd(e,n,r);case J["set!"]:{const s=await re(e.value[2],n,r),a=o.list([o.symbol(J.quote),s]),i=o.list([e.value[0],e.value[1],a]);return r.syncCtx.evaluate(i,n)}default:return r.syncCtx.evaluate(e,n)}}async function Bd(t,e,n){const r=t.value[1];gn(r,"let*",e);let s=e;const a=r.value;for(let i=0;i<a.length;i+=2){const c=a[i],l=a[i+1],d=await re(l,s,n),m=Ie(c,d,n.syncCtx,s);s=We(m.map(([p])=>p),m.map(([,p])=>p),s)}return Ue(t.value.slice(2),s,n)}async function Hd(t,e,n){const r=t.value[1];gn(r,"loop*",e);const s=t.value.slice(2),a=[];let i=[],c=e;for(let l=0;l<r.value.length;l+=2){const d=r.value[l],m=await re(r.value[l+1],c,n);a.push(d),i.push(m);const p=Ie(d,m,n.syncCtx,c);c=We(p.map(([h])=>h),p.map(([,h])=>h),c)}for(;;){let l=e;for(let d=0;d<a.length;d++){const m=Ie(a[d],i[d],n.syncCtx,l);l=We(m.map(([p])=>p),m.map(([,p])=>p),l)}try{return await Ue(s,l,n)}catch(d){if(d instanceof je){if(d.args.length!==a.length)throw new f(`recur expects ${a.length} arguments but got ${d.args.length}`,{list:t,env:e});i=d.args;continue}throw d}}}async function Ud(t,e,n){const{body:r,boundVars:s}=ks(t,e,n.syncCtx);try{return await Ue(r,e,n)}finally{for(const a of s)a.bindingStack.pop()}}async function Kd(t,e,n){const{bodyForms:r,catchClauses:s,finallyForms:a}=tr(t,e);let i=o.nil(),c=null;try{i=await Ue(r,e,n)}catch(l){if(l instanceof je)throw l;let d;if(l instanceof Te)d=l.value;else if(Jn(l)){const p=l,h=p.code?o.keyword(`:${p.code}`):o.keyword(":error/runtime");d={kind:k.map,entries:[[o.keyword(":type"),h],[o.keyword(":message"),o.string(l.message)]]}}else throw l;let m=!1;for(const p of s)if(nr(p.discriminator,d,e,n.syncCtx)){const h=We([p.binding],[d],e);i=await Ue(p.body,h,n),m=!0;break}m||(c=l)}finally{a&&await Ue(a,e,n)}if(c!==null)throw c;return i}async function xs(t,e,n,r){if(u.nativeFunction(t))return t.fnWithContext?t.fnWithContext(r.syncCtx,n,...e):t.fn(...e);if(u.function(t)){const s=hn(t.arities,e.length);let a=e;for(;;){const i=Zn(s.params,s.restParam,a,t.env,r.syncCtx,n);try{return await Ue(s.body,i,r)}catch(c){if(c instanceof je){a=c.args;continue}throw c}}}return u.multiMethod(t)?sr(t,e,r.syncCtx,n):r.syncCtx.applyCallable(t,e,n)}function gr(t){if(!t)return!1;for(const[e,n]of t.entries)if(u.keyword(e)&&e.name===":dynamic"&&u.boolean(n)&&n.value===!0)return!0;return!1}function Wd(t,e,n){const{bodyForms:r,catchClauses:s,finallyForms:a}=tr(t,e);let i=o.nil(),c=null;try{i=n.evaluateForms(r,e)}catch(l){if(l instanceof je)throw l;let d;if(l instanceof Te)d=l.value;else if(Jn(l)){const p=l,h=p.code?o.keyword(`:${p.code}`):o.keyword(":error/runtime"),y=[[o.keyword(":type"),h],[o.keyword(":message"),o.string(l.message)]];p.frames&&p.frames.length>0&&y.push([o.keyword(":frames"),ds(p.frames,n.currentSource)]),d=o.map(y)}else throw l;let m=!1;for(const p of s)if(nr(p.discriminator,d,e,n)){const h=We([p.binding],[d],e);i=n.evaluateForms(p.body,h),m=!0;break}m||(c=l)}finally{a&&n.evaluateForms(a,e)}if(c!==null)throw c;return i}function Jd(t,e,n){return t.value[1]}function $s(t,e,n){const r=n?C(n):void 0,s=r&&e.currentSource;if(!t&&!s)return;const a=[];if(s){const{line:d,col:m}=pn(e.currentSource,r.start),p=e.currentLineOffset??0,h=e.currentColOffset??0;a.push([o.keyword(":line"),o.number(d+p)]),a.push([o.keyword(":column"),o.number(d===1?m+h:m)]),e.currentFile&&a.push([o.keyword(":file"),o.string(e.currentFile)])}const i=new Set([":line",":column",":file"]),l=[...((t==null?void 0:t.entries)??[]).filter(([d])=>!(d.kind==="keyword"&&i.has(d.name))),...a];return l.length>0?o.map(l):void 0}function Qd(t,e,n){var y;const r=t.value[1];if(r.kind!=="symbol")throw new f("First element of list must be a symbol",{name:r,list:t,env:e},C(t));if(t.value[2]===void 0)return o.nil();const s=t.value.length===4&&t.value[2].kind==="string",a=s?t.value[2].value:void 0,i=s?3:2,l=pe(e).ns,d=n.evaluate(t.value[i],e),m=$s(r.meta,n,r),p=a?Ms(m,a):m;if(p&&d.kind==="function"){const w=p.entries.find(([$])=>u.keyword($)&&$.name===":doc");if(w){const S=(((y=d.meta)==null?void 0:y.entries)??[]).filter(([P])=>!(u.keyword(P)&&P.name===":doc"));d.meta=o.map([...S,w])}}const h=l.vars.get(r.name);if(h)h.value=d,p&&(h.meta=p,gr(p)&&(h.dynamic=!0));else{const w=o.var(l.name,r.name,d,p);gr(p)&&(w.dynamic=!0),l.vars.set(r.name,w)}return o.nil()}const Yd=(t,e,n)=>{const r=t.value[2];if((r==null?void 0:r.kind)==="string"){const s=pe(e);s.ns&&(s.ns.doc=r.value)}return o.nil()};function Xd(t,e,n){const r=n.evaluate(t.value[1],e);return u.falsy(r)?t.value[3]?n.evaluate(t.value[3],e):o.nil():n.evaluate(t.value[2],e)}function Zd(t,e,n){return n.evaluateForms(t.value.slice(1),e)}function ef(t,e,n){const r=t.value[1];gn(r,"let*",e);const s=t.value.slice(2);let a=e;for(let i=0;i<r.value.length;i+=2){const c=r.value[i];if(!u.symbol(c))throw new f("let* only supports simple symbol bindings; use let for destructuring",{pattern:c,env:e},C(c)??C(t));const l=n.evaluate(r.value[i+1],a);a=We([c.name],[l],a)}return n.evaluateForms(s,a)}function tf(t,e,n){const r=t.value.slice(1);let s,a=r;r[0]&&u.symbol(r[0])&&(s=r[0].name,a=r.slice(1));const i=gs(a,e);for(const l of i){for(const d of l.params)if(!u.symbol(d))throw new f("fn* only supports simple symbol params; use fn for destructuring",{param:d,env:e},C(d)??C(t));if(l.restParam!==null&&!u.symbol(l.restParam))throw new f("fn* only supports simple symbol rest param; use fn for destructuring",{restParam:l.restParam,env:e},C(l.restParam)??C(t));if(er(l.body),l.restParam===null){const d=jd(l.params,l.body,ut);d!==null&&(l.compiledBody=d.compiledBody,l.paramSlots=d.paramSlots)}else{const d=ut(o.list([o.symbol(J.do),...l.body]));d!==null&&(l.compiledBody=d)}}const c=o.multiArityFunction(i,e);if(s){c.name=s;const l=nt(e);l.bindings.set(s,c),c.env=l}return c}function nf(t,e,n){const r=t.value[1];gn(r,"loop*",e);const s=t.value.slice(2);er(s);const a=[],i=[];let c=e;for(let d=0;d<r.value.length;d+=2){const m=r.value[d];if(!u.symbol(m))throw new f("loop* only supports simple symbol bindings; use loop for destructuring",{pattern:m,env:e},C(m)??C(t));const p=n.evaluate(r.value[d+1],c);a.push(m.name),i.push(p),c=We([m.name],[p],c)}let l=i;for(;;){const d=We(a,l,e);try{return n.evaluateForms(s,d)}catch(m){if(m instanceof je){if(m.args.length!==a.length)throw new f(`recur expects ${a.length} arguments but got ${m.args.length}`,{list:t,env:e},m.pos??C(t));l=m.args;continue}throw m}}}function rf(t,e,n){const r=t.value[1];if(!u.vector(r))throw new f("letfn* bindings must be a vector",{bindings:r,env:e},C(t));if(r.value.length%2!==0)throw new f("letfn* bindings must have an even number of forms",{bindings:r,env:e},C(r)??C(t));const s=t.value.slice(2),a=nt(e);for(let i=0;i<r.value.length;i+=2){const c=r.value[i],l=r.value[i+1];if(!u.symbol(c))throw new f("letfn* binding names must be symbols",{name:c,env:e},C(c)??C(t));const d=n.evaluate(l,a);if(!u.aFunction(d))throw new f("letfn* binding values must be functions",{fn:d,env:e},C(l)??C(t));u.function(d)&&(d.name=c.name),a.bindings.set(c.name,d)}return n.evaluateForms(s,a)}function Ms(t,e){const n=[o.keyword(":doc"),o.string(e)];return{kind:"map",entries:[...((t==null?void 0:t.entries)??[]).filter(([s])=>!(s.kind==="keyword"&&s.name===":doc")),n]}}function sf(t,e,n){var y;const r=t.value[1];if(!u.symbol(r))throw new f("First element of defmacro must be a symbol",{name:r,list:t,env:e},C(t));const s=t.value.slice(2),a=((y=s[0])==null?void 0:y.kind)==="string"?s[0].value:void 0,i=a?s.slice(1):s,c=gs(i,e),l=o.multiArityMacro(c,e);l.name=r.name;const d=u.vector(i[0])?[i[0]]:i.filter(u.list).map(w=>w.value[0]).filter(u.vector),m=$s(r.meta,n,r);let p=a?Ms(m,a):m;if(d.length>0){const w=[o.keyword(":arglists"),o.vector(d)];p={kind:"map",entries:[...((p==null?void 0:p.entries)??[]).filter(([S])=>!(S.kind==="keyword"&&S.name===":arglists")),w]}}const h=[];for(const w of[":doc",":arglists"]){const $=p==null?void 0:p.entries.find(([S])=>S.kind==="keyword"&&S.name===w);$&&h.push($)}return h.length>0&&(l.meta={kind:"map",entries:h}),Y(r.name,l,pe(e),p),o.nil()}function of(t,e,n){const r=t.value.slice(1).map(s=>n.evaluate(s,e));throw new je(r,C(t))}function af(t,e,n){var i;const r=t.value[1];if(!u.symbol(r))throw new f("var expects a symbol",{list:t},C(t));const s=r.name.indexOf("/");if(s>0&&s<r.name.length-1){const c=r.name.slice(0,s),l=r.name.slice(s+1),m=((i=pe(e).ns)==null?void 0:i.aliases.get(c))??n.resolveNs(c)??null;if(!m)throw new f(`No such namespace: ${c}`,{sym:r},C(r));const p=m.vars.get(l);if(!p)throw new f(`Var ${r.name} not found`,{sym:r},C(r));return p}const a=_t(r.name,e);if(!a)throw new f(`Unable to resolve var: ${r.name} in this context`,{sym:r},C(r));return a}function lf(t,e,n){const{body:r,boundVars:s}=ks(t,e,n);try{return n.evaluateForms(r,e)}finally{for(const a of s)a.bindingStack.pop()}}function cf(t,e,n){if(t.value.length!==3)throw new f(`set! requires exactly 2 arguments, got ${t.value.length-1}`,{list:t,env:e},C(t));const r=t.value[1];if(!u.symbol(r))throw new f(`set! first argument must be a symbol, got ${r.kind}`,{symForm:r,env:e},C(r)??C(t));const s=_t(r.name,e);if(!s)throw new f(`Unable to resolve var: ${r.name} in this context`,{symForm:r,env:e},C(r));if(!s.dynamic)throw new f(`Cannot set! non-dynamic var ${s.ns}/${s.name}. Mark it with ^:dynamic.`,{symForm:r,env:e},C(r));if(!s.bindingStack||s.bindingStack.length===0)throw new f(`Cannot set! ${s.ns}/${s.name} — no active binding. Use set! only inside a (binding [...] ...) form.`,{symForm:r,env:e},C(r));const a=n.evaluate(t.value[2],e);return s.bindingStack[s.bindingStack.length-1]=a,a}function uf(t,e,n){const r=t.value.slice(1);return o.lazySeq(()=>n.evaluateForms(r,e))}function df(t,e,n){const r=t.value.slice(1);if(r.length===0)return o.pending(Promise.resolve(o.nil()));const a=Gd(n).evaluateForms(r,e);return o.pending(a)}const ff={try:Wd,quote:Jd,def:Qd,ns:Yd,if:Xd,do:Zd,"let*":ef,"fn*":tf,defmacro:sf,"loop*":nf,recur:of,var:af,binding:lf,"set!":cf,"letfn*":rf,"lazy-seq":uf,async:df,".":dd,"js/new":fd};function mf(t,e,n,r){const s=ff[t];if(s)return s(e,n,r);throw new f(`Unknown special form: ${t}`,{symbol:t,list:e,env:n},C(e))}const pf=0,vr=1;function hf(t,e,n){if(t.value.length===0)return t;const r=t.value[pf];if(u.specialForm(r))return mf(r.name,t,e,n);let s=n.evaluate(r,e);if(u.var(s)&&(s=s.value),u.multiMethod(s)){const l=t.value.slice(vr).map(d=>n.evaluate(d,e));return sr(s,l,n,e,t)}if(!u.callable(s)){const l=u.symbol(r)?r.name:x(r);throw new f(`${l} is not callable`,{list:t,env:e},C(t))}const a=t.value.slice(vr).map(l=>n.evaluate(l,e)),i=C(t),c={fnName:u.symbol(r)?r.name:null,line:null,col:null,source:n.currentFile??null,pos:i??null};n.frameStack.push(c);try{return n.applyCallable(s,a,e)}catch(l){throw fs(l,t),l instanceof f&&!l.frames&&(l.frames=[...n.frameStack].reverse()),l}finally{n.frameStack.pop()}}function gf(t,e,n){var s;const r=ut(t);if(r!==null)return r(e,n);switch(t.kind){case k.number:case k.string:case k.character:case k.keyword:case k.nil:case k.function:case k.multiMethod:case k.boolean:case k.regex:case k.delay:case k.lazySeq:case k.cons:case k.namespace:return t;case k.symbol:{const a=t.name.indexOf("/");if(a>0&&a<t.name.length-1){const i=t.name.slice(0,a),c=t.name.slice(a+1),d=((s=pe(e).ns)==null?void 0:s.aliases.get(i))??n.resolveNs(i)??null;if(!d)throw new f(`No such namespace or alias: ${i}`,{symbol:t.name,env:e},C(t));const m=d.vars.get(c);if(m===void 0)throw new f(`Symbol ${t.name} not found`,{symbol:t.name,env:e},C(t));return _e(m)}try{return as(t.name,e)}catch(i){if(i instanceof f&&!i.pos){const c=C(t);c&&(i.pos=c)}throw i}}case k.vector:return Ed(t,e,n);case k.map:return Td(t,e,n);case k.set:return Ld(t,e,n);case k.list:return hf(t,e,n);default:throw new f("Unexpected value",{expr:t,env:e},C(t))}}function vf(t,e,n){let r=o.nil();for(const s of t)r=n.evaluate(s,e);return r}function yf(){const t={evaluate:(e,n)=>gf(e,n,t),evaluateForms:(e,n)=>vf(e,n,t),applyFunction:(e,n,r)=>vs(e,n,t,r),applyCallable:(e,n,r)=>ys(e,n,t,r),applyMacro:(e,n)=>md(e,n,t),expandAll:(e,n)=>He(e,n,t),resolveNs:e=>null,allNamespaces:()=>[],io:{stdout:e=>console.log(e),stderr:e=>console.error(e)},frameStack:[]};return t}function Jt(t){const e=t.filter(n=>n.kind!==I.Comment);return e.length<3||e[0].kind!=="LParen"||e[1].kind!=="Symbol"||e[1].value!=="ns"||e[2].kind!=="Symbol"?null:e[2].value}function Cn(t){const e=new Map,n=t.filter(a=>a.kind!==I.Comment&&a.kind!==I.Whitespace);if(n.length<3||n[0].kind!==I.LParen||n[1].kind!==I.Symbol||n[1].value!=="ns")return e;let r=3,s=1;for(;r<n.length&&s>0;){const a=n[r];if(a.kind===I.LParen){s++,r++;continue}if(a.kind===I.RParen){s--,r++;continue}if(a.kind===I.LBracket){let i=r+1,c=null;for(;i<n.length&&n[i].kind!==I.RBracket;){const l=n[i];l.kind===I.Symbol&&c===null&&(c=l.value),l.kind===I.Keyword&&(l.value===":as"||l.value===":as-alias")&&(i++,i<n.length&&n[i].kind===I.Symbol&&c&&e.set(n[i].value,c)),i++}}r++}return e}function wf(t){const e=t.find(n=>u.list(n)&&n.value.length>0&&u.symbol(n.value[0])&&n.value[0].name==="ns");return!e||!u.list(e)?null:e}function yr(t){const e=wf(t);if(!e)return[];const n=[];for(let r=2;r<e.value.length;r++){const s=e.value[r];u.list(s)&&u.keyword(s.value[0])&&s.value[0].name===":require"&&n.push(s.value.slice(1))}return n}const qs=(t,e,n)=>({line:t,col:e,offset:n}),Ss=(t,e)=>({peek:(n=0)=>{const r=e.offset+n;return r>=t.length?null:t[r]},isAtEnd:()=>e.offset>=t.length,position:()=>({offset:e.offset,line:e.line,col:e.col})});function bf(t){const e=qs(0,0,0),n={...Ss(t,e),advance:()=>{if(e.offset>=t.length)return null;const r=t[e.offset];return e.offset++,r===`
`?(e.line++,e.col=0):e.col++,r},consumeWhile(r){const s=[];for(;!n.isAtEnd()&&r(n.peek());)s.push(n.advance());return s.join("")}};return n}function js(t){const e=qs(0,0,0),n={...Ss(t,e),advance:()=>{if(e.offset>=t.length)return null;const r=t[e.offset];return e.offset++,e.col=r.end.col,e.line=r.end.line,r},consumeWhile(r){const s=[];for(;!n.isAtEnd()&&r(n.peek());)s.push(n.advance());return s},consumeN(r){for(let s=0;s<r;s++)n.advance()}};return n}const kf=t=>t===`
`,mt=t=>[" ",",",`
`,"\r","	"].includes(t),Gt=t=>t===";",_s=t=>t==="(",Fs=t=>t===")",Rs=t=>t==="[",As=t=>t==="]",Is=t=>t==="{",Cs=t=>t==="}",xf=t=>t==='"',Ps=t=>t==="'",Ns=t=>t==="`",$f=t=>t==="~",or=t=>t==="@",kt=t=>{const e=parseInt(t);return isNaN(e)?!1:e>=0&&e<=9},Mf=t=>t===".",Es=t=>t===":",qf=t=>t==="#",Ls=t=>t==="^",Sf=t=>t==="\\",Ot=t=>_s(t)||Fs(t)||Rs(t)||As(t)||Is(t)||Cs(t)||Ns(t)||Ps(t)||or(t)||Ls(t),jf=t=>{const e=t.scanner,n=e.position();return e.consumeWhile(mt),{kind:I.Whitespace,start:n,end:e.position()}},_f=t=>{const e=t.scanner,n=e.position();e.advance();const r=e.consumeWhile(s=>!kf(s));return!e.isAtEnd()&&e.peek()===`
`&&e.advance(),{kind:I.Comment,value:r,start:n,end:e.position()}},Ff=t=>{const e=t.scanner,n=e.position();e.advance();const r=[];let s=!1;for(;!e.isAtEnd();){const a=e.peek();if(a==="\\"){e.advance();const i=e.peek();switch(i){case'"':r.push('"');break;case"\\":r.push("\\");break;case"n":r.push(`
`);break;case"r":r.push("\r");break;case"t":r.push("	");break;default:r.push(i)}e.isAtEnd()||e.advance();continue}if(a==='"'){e.advance(),s=!0;break}r.push(e.advance())}if(!s)throw new ze(`Unterminated string detected at ${n.offset}`,e.position());return{kind:I.String,value:r.join(""),start:n,end:e.position()}},Rf=t=>{const e=t.scanner,n=e.position(),r=e.consumeWhile(s=>Es(s)||!mt(s)&&!Ot(s)&&!Gt(s));return{kind:I.Keyword,value:r,start:n,end:e.position()}};function Af(t,e){const r=e.scanner.peek(1);return kt(t)||t==="-"&&r!==null&&kt(r)}const If=t=>{const e=t.scanner,n=e.position();let r="";if(e.peek()==="-"&&(r+=e.advance()),r+=e.consumeWhile(kt),!e.isAtEnd()&&e.peek()==="."&&e.peek(1)!==null&&kt(e.peek(1))&&(r+=e.advance(),r+=e.consumeWhile(kt)),!e.isAtEnd()&&(e.peek()==="e"||e.peek()==="E")){r+=e.advance(),!e.isAtEnd()&&(e.peek()==="+"||e.peek()==="-")&&(r+=e.advance());const s=e.consumeWhile(kt);if(s.length===0)throw new ze(`Invalid number format at line ${n.line} column ${n.col}: "${r}"`,{start:n,end:e.position()});r+=s}if(!e.isAtEnd()&&Mf(e.peek()))throw new ze(`Invalid number format at line ${n.line} column ${n.col}: "${r}${e.consumeWhile(s=>!mt(s)&&!Ot(s))}"`,{start:n,end:e.position()});return{kind:I.Number,value:Number(r),start:n,end:e.position()}},Cf=t=>{const e=t.scanner,n=e.position(),r=e.consumeWhile(s=>!mt(s)&&!Ot(s)&&!Gt(s));return{kind:I.Symbol,value:r,start:n,end:e.position()}},Pf=t=>{const e=t.scanner,n=e.position();return e.advance(),{kind:"Deref",start:n,end:e.position()}},Nf=t=>{const e=t.scanner,n=e.position();return e.advance(),{kind:"Meta",start:n,end:e.position()}},Ef=(t,e)=>{const n=t.scanner;n.advance();const r=[];let s=!1;for(;!n.isAtEnd();){const a=n.peek();if(a==="\\"){n.advance();const i=n.peek();if(i===null)throw new ze(`Unterminated regex literal at ${e.offset}`,n.position());i==='"'?r.push('"'):(r.push("\\"),r.push(i)),n.advance();continue}if(a==='"'){n.advance(),s=!0;break}r.push(n.advance())}if(!s)throw new ze(`Unterminated regex literal at ${e.offset}`,n.position());return{kind:I.Regex,value:r.join(""),start:e,end:n.position()}},Lf={space:" ",newline:`
`,tab:"	",return:"\r",backspace:"\b",formfeed:"\f"},Tf=t=>{const e=t.scanner,n=e.position();if(e.advance(),e.isAtEnd())throw new ze("Unexpected end of input after \\",e.position());const r=e.advance();let s=r;if(/[a-zA-Z]/.test(r)&&(s+=e.consumeWhile(i=>!mt(i)&&!Ot(i)&&!Gt(i)&&i!=='"')),s.length===1)return{kind:I.Character,value:s,start:n,end:e.position()};const a=Lf[s];if(a!==void 0)return{kind:I.Character,value:a,start:n,end:e.position()};if(/^u[0-9a-fA-F]{4}$/.test(s)){const i=parseInt(s.slice(1),16);return{kind:I.Character,value:String.fromCodePoint(i),start:n,end:e.position()}}throw new ze(`Unknown character literal: \\${s} at line ${n.line} column ${n.col}`,n)};function Gf(t){const e=t.scanner,n=e.position();e.advance();const r=e.peek();if(r==="(")return e.advance(),{kind:I.AnonFnStart,start:n,end:e.position()};if(r==='"')return Ef(t,n);if(r==="'")return e.advance(),{kind:I.VarQuote,start:n,end:e.position()};if(r==="{")return e.advance(),{kind:I.SetStart,start:n,end:e.position()};if(r===":"){const s=e.consumeWhile(a=>a!=="{"&&a!==" "&&a!==`
`&&a!=="	"&&a!==",");return{kind:I.NsMapPrefix,value:s,start:n,end:e.position()}}if(r==="_")return e.advance(),{kind:I.Discard,start:n,end:e.position()};if(r!==null&&/[a-zA-Z]/.test(r)){const s=e.consumeWhile(a=>!mt(a)&&!Ot(a)&&!Gt(a)&&a!=='"');return{kind:I.ReaderTag,value:s,start:n,end:e.position()}}throw new ze(`Unknown dispatch character: #${r??"EOF"}`,n)}function Ye(t,e){return n=>{const r=n.scanner,s=r.position();return r.advance(),{kind:t,value:e,start:s,end:r.position()}}}function Of(t){const e=t.scanner,n=e.position();e.advance();const r=e.peek();if(!r)throw new ze(`Unexpected end of input while parsing unquote at ${n.offset}`,n);return or(r)?(e.advance(),{kind:I.UnquoteSplicing,value:xe.UnquoteSplicing,start:n,end:e.position()}):{kind:I.Unquote,value:xe.Unquote,start:n,end:e.position()}}const Df=[[mt,jf],[Gt,_f],[_s,Ye(I.LParen,xe.LParen)],[Fs,Ye(I.RParen,xe.RParen)],[Rs,Ye(I.LBracket,xe.LBracket)],[As,Ye(I.RBracket,xe.RBracket)],[Is,Ye(I.LBrace,xe.LBrace)],[Cs,Ye(I.RBrace,xe.RBrace)],[xf,Ff],[Es,Rf],[Af,If],[Ps,Ye(I.Quote,xe.Quote)],[Ns,Ye(I.Quasiquote,xe.Quasiquote)],[$f,Of],[or,Pf],[Ls,Nf],[qf,Gf],[Sf,Tf]];function zf(t){const n=t.scanner.peek(),r=Df.find(([s])=>s(n,t));if(r){const[,s]=r;return s(t)}return Cf(t)}function Vf(t){const e=[];let n;try{for(;!t.scanner.isAtEnd();){const s=zf(t);if(!s)break;s.kind!==I.Whitespace&&e.push(s)}}catch(s){n=s}return{tokens:e,scanner:t.scanner,error:n}}function Ce(t){return"value"in t?t.value:""}function Mt(t){const e=t.length,r={scanner:bf(t)},s=Vf(r);if(s.error)throw s.error;if(s.scanner.position().offset!==e)throw new ze(`Unexpected end of input, expected ${e} characters, got ${s.scanner.position().offset}`,s.scanner.position());return s.tokens}function le(t){var n;const e=t.scanner;for(;((n=e.peek())==null?void 0:n.kind)===I.Discard;){e.advance(),le(t);const r=e.peek();if(!r)throw new T("Expected a form after #_, got end of input",e.position());if(Dt(r))throw new T(`Expected a form after #_, got '${Ce(r)||r.kind}'`,r,{start:r.start.offset,end:r.end.offset});ae(t)}}function Bf(t){const e=t.scanner,n=e.peek();e.advance();const r=n.kind===I.ReaderTag?n.value:"";if(le(t),e.isAtEnd())throw new T(`Expected a form after reader tag #${r}, got end of input`,e.position());const s=ae(t);if(t.dataReaders){const a=t.dataReaders.get(r);if(a)try{return a(s)}catch(i){throw i instanceof T?i:new T(`Error in reader tag #${r}: ${i.message}`,n,{start:n.start.offset,end:n.end.offset})}if(t.defaultDataReader)return t.defaultDataReader(r,s);throw new T(`No reader function for tag #${r}`,n,{start:n.start.offset,end:n.end.offset})}throw new T(`Reader tags (#${r}) are only supported in EDN mode. Use clojure.edn/read-string for tagged literals.`,n,{start:n.start.offset,end:n.end.offset})}function Hf(t){const e=t.scanner,n=e.peek();if(!n)throw new T("Unexpected end of input",e.position());switch(n.kind){case I.Symbol:return nm(t);case I.String:{e.advance();const r=o.string(n.value);return qe(r,{start:n.start.offset,end:n.end.offset,source:t.source,lineOffset:t.lineOffset,colOffset:t.colOffset}),r}case I.Number:{e.advance();const r=o.number(n.value);return qe(r,{start:n.start.offset,end:n.end.offset,source:t.source,lineOffset:t.lineOffset,colOffset:t.colOffset}),r}case I.Character:{e.advance();const r=o.char(n.value);return qe(r,{start:n.start.offset,end:n.end.offset,source:t.source,lineOffset:t.lineOffset,colOffset:t.colOffset}),r}case I.Keyword:{e.advance();const r=n.value;let s;if(r.startsWith("::")){if(t.ednMode)throw new T("Auto-qualified keywords (::) are not valid in EDN",n,{start:n.start.offset,end:n.end.offset});const a=r.slice(2);if(a.includes("/")){const i=a.indexOf("/"),c=a.slice(0,i),l=a.slice(i+1),d=t.aliases.get(c);if(!d)throw new T(`No namespace alias '${c}' found for ::${c}/${l}`,n,{start:n.start.offset,end:n.end.offset});s=o.keyword(`:${d}/${l}`)}else s=o.keyword(`:${t.namespace}/${a}`)}else s=o.keyword(r);return qe(s,{start:n.start.offset,end:n.end.offset,source:t.source,lineOffset:t.lineOffset,colOffset:t.colOffset}),s}}throw new T(`Unexpected token: ${n.kind}`,n,{start:n.start.offset,end:n.end.offset})}const Uf=t=>{const e=t.scanner,n=e.peek();if(!n)throw new T("Unexpected end of input while parsing quote",e.position());e.advance(),le(t);const r=ae(t);if(!r)throw new T(`Unexpected token: ${Ce(n)}`,n);return o.list([o.symbol("quote"),r])},Kf=t=>{const e=t.scanner,n=e.peek();if(!n)throw new T("Unexpected end of input while parsing quasiquote",e.position());e.advance(),le(t);const r=ae(t);if(!r)throw new T(`Unexpected token: ${Ce(n)}`,n);return o.list([o.symbol("quasiquote"),r])},Wf=t=>{const e=t.scanner,n=e.peek();if(!n)throw new T("Unexpected end of input while parsing unquote",e.position());e.advance(),le(t);const r=ae(t);if(!r)throw new T(`Unexpected token: ${Ce(n)}`,n);return o.list([o.symbol("unquote"),r])},Jf=t=>{const e=t.scanner,n=e.peek();if(!n)throw new T("Unexpected end of input while parsing metadata",e.position());e.advance(),le(t);const r=ae(t);le(t);const s=ae(t);let a;if(u.keyword(r))a=[[r,o.boolean(!0)]];else if(u.map(r))a=r.entries;else if(u.symbol(r))a=[[o.keyword(":tag"),r]];else throw new T("Metadata must be a keyword, map, or symbol",n);if(u.symbol(s)||u.list(s)||u.vector(s)||u.map(s)){const i=s.meta?s.meta.entries:[],c={...s,meta:o.map([...i,...a])},l=C(s);return l&&qe(c,l),c}return s},Qf=t=>{const e=t.scanner;if(!e.peek())throw new T("Unexpected end of input while parsing var quote",e.position());e.advance(),le(t);const r=ae(t);return o.list([o.symbol("var"),r])},Yf=t=>{const e=t.scanner,n=e.peek();if(!n)throw new T("Unexpected end of input while parsing deref",e.position());e.advance(),le(t);const r=ae(t);if(!r)throw new T(`Unexpected token: ${Ce(n)}`,n);return{kind:k.list,value:[o.symbol("deref"),r]}},Xf=t=>{const e=t.scanner,n=e.peek();if(!n)throw new T("Unexpected end of input while parsing unquote splicing",e.position());e.advance(),le(t);const r=ae(t);if(!r)throw new T(`Unexpected token: ${Ce(n)}`,n);return o.list([o.symbol(xe.UnquoteSplicing),r])},Dt=t=>[I.RParen,I.RBracket,I.RBrace].includes(t.kind),me=(t,e)=>`line ${t+1} column ${e+1}`,Ts=(t,e)=>{const n=xe[e]??e;return function(r){const s=r.scanner,a=s.peek();if(!a)throw new T("Unexpected end of input while parsing collection",s.position());s.advance();const i=[];let c=!1,l;for(;!s.isAtEnd();){le(r);const m=s.peek();if(!m)break;if(Dt(m)&&m.kind!==e)throw new T(`Expected \`${n}\` to close ${t} started at ${me(a.start.line,a.start.col)}, but got \`${Ce(m)}\` at ${me(m.start.line,m.start.col)}`,m,{start:m.start.offset,end:m.end.offset});if(m.kind===e){l=m.end.offset,s.advance(),c=!0;break}const p=ae(r);i.push(p)}if(!c){const m=t==="list"?"(":"[";throw new T(`Unclosed \`${m}\` started at ${me(a.start.line,a.start.col)} — expected matching \`${n}\` before end of input`,s.peek())}const d={kind:t,value:i};return l!==void 0&&qe(d,{start:a.start.offset,end:l,source:r.source,lineOffset:r.lineOffset,colOffset:r.colOffset}),d}},Zf=Ts("list",I.RParen),em=Ts("vector",I.RBracket),tm=t=>{const e=t.scanner,n=e.peek();if(!n)throw new T("Unexpected end of input while parsing set",e.position());e.advance();const r=[];let s=!1,a;for(;!e.isAtEnd();){le(t);const l=e.peek();if(!l)break;if(Dt(l)&&l.kind!==I.RBrace)throw new T(`Expected '}' to close set started at ${me(n.start.line,n.start.col)}, but got '${Ce(l)}' at ${me(l.start.line,l.start.col)}`,l,{start:l.start.offset,end:l.end.offset});if(l.kind===I.RBrace){a=l.end.offset,e.advance(),s=!0;break}r.push(ae(t))}if(!s)throw new T(`Unclosed \`#{\` started at ${me(n.start.line,n.start.col)} — expected '}' before end of input`,e.peek());const i=[];for(const l of r)i.some(d=>u.equal(d,l))||i.push(l);const c=o.set(i);return a!==void 0&&qe(c,{start:n.start.offset,end:a,source:t.source,lineOffset:t.lineOffset,colOffset:t.colOffset}),c},nm=t=>{const e=t.scanner,n=e.peek();if(!n)throw new T("Unexpected end of input",e.position());if(n.kind!==I.Symbol)throw new T(`Unexpected token: ${Ce(n)}`,n,{start:n.start.offset,end:n.end.offset});e.advance();let r;switch(n.value){case"true":case"false":r=o.boolean(n.value==="true");break;case"nil":r=o.nil();break;default:r=o.symbol(n.value)}return qe(r,{start:n.start.offset,end:n.end.offset,source:t.source,lineOffset:t.lineOffset,colOffset:t.colOffset}),r},rm=t=>{const e=t.scanner,n=e.peek();if(!n)throw new T("Unexpected end of input while parsing map",e.position());let r=!1,s;e.advance();const a=[];for(;!e.isAtEnd();){le(t);const c=e.peek();if(!c)break;if(Dt(c)&&c.kind!==I.RBrace)throw new T(`Expected '}' to close map started at ${me(n.start.line,n.start.col)}, but got '${c.kind}' at ${me(c.start.line,c.start.col)}`,c,{start:c.start.offset,end:c.end.offset});if(c.kind===I.RBrace){s=c.end.offset,e.advance(),r=!0;break}const l=ae(t);le(t);const d=e.peek();if(!d)throw new T(`Expected value in map started at ${me(n.start.line,n.start.col)}, but got end of input`,e.position());if(d.kind===I.RBrace)throw new T(`Map started at ${me(n.start.line,n.start.col)} has key ${l.kind} but no value`,e.position());const m=ae(t);if(!m)break;a.push([l,m])}if(!r)throw new T(`Unclosed \`{\` started at ${me(n.start.line,n.start.col)} — expected '}' before end of input`,e.peek());const i={kind:k.map,entries:a};return s!==void 0&&qe(i,{start:n.start.offset,end:s,source:t.source,lineOffset:t.lineOffset,colOffset:t.colOffset}),i};function sm(t){let e=0,n=!1;function r(s){switch(s.kind){case"symbol":{const a=s.name;a==="%"||a==="%1"?e=Math.max(e,1):/^%[2-9]$/.test(a)?e=Math.max(e,parseInt(a[1])):a==="%&"&&(n=!0);break}case"list":case"vector":for(const a of s.value)r(a);break;case"map":for(const[a,i]of s.entries)r(a),r(i);break}}for(const s of t)r(s);return{maxIndex:e,hasRest:n}}function Et(t){switch(t.kind){case"symbol":{const e=t.name,n=C(t),r=s=>{const a=o.symbol(s);return n&&qe(a,n),a};return e==="%"||e==="%1"?r("p1"):/^%[2-9]$/.test(e)?r(`p${e[1]}`):e==="%&"?r("rest"):t}case"list":return{...t,value:t.value.map(Et)};case"vector":return{...t,value:t.value.map(Et)};case"map":return{...t,entries:t.entries.map(([e,n])=>[Et(e),Et(n)])};default:return t}}const om=t=>{const e=t.scanner,n=e.peek();if(!n)throw new T("Unexpected end of input while parsing anonymous function",e.position());e.advance();const r=[];let s=!1,a;for(;!e.isAtEnd();){le(t);const h=e.peek();if(!h)break;if(Dt(h)&&h.kind!==I.RParen)throw new T(`Expected ')' to close anonymous function started at ${me(n.start.line,n.start.col)}, but got '${Ce(h)}' at ${me(h.start.line,h.start.col)}`,h,{start:h.start.offset,end:h.end.offset});if(h.kind===I.RParen){a=h.end.offset,e.advance(),s=!0;break}if(h.kind===I.AnonFnStart)throw new T("Nested anonymous functions (#(...)) are not allowed",h,{start:h.start.offset,end:h.end.offset});r.push(ae(t))}if(!s)throw new T(`Unclosed \`#(\` started at ${me(n.start.line,n.start.col)} — expected ')' before end of input`,e.peek());const i=o.list(r),{maxIndex:c,hasRest:l}=sm([i]),d=[];for(let h=1;h<=c;h++)d.push(o.symbol(`p${h}`));l&&(d.push(o.symbol("&")),d.push(o.symbol("rest")));const m=Et(i),p=o.list([o.symbol("fn"),o.vector(d),m]);return a!==void 0&&qe(p,{start:n.start.offset,end:a,source:t.source,lineOffset:t.lineOffset,colOffset:t.colOffset}),p};function am(t){let e=t,n="";const r=/^\(\?([imsx]+)\)/;let s;for(;(s=r.exec(e))!==null;){for(const a of s[1]){if(a==="x")throw new T("Regex flag (?x) (verbose mode) has no JavaScript equivalent and is not supported",null);n.includes(a)||(n+=a)}e=e.slice(s[0].length)}return{pattern:e,flags:n}}const im=t=>{const e=t.scanner,n=e.peek();if(!n||n.kind!==I.Regex)throw new T("Expected regex token",e.position());e.advance();const{pattern:r,flags:s}=am(n.value),a=o.regex(r,s);return qe(a,{start:n.start.offset,end:n.end.offset,source:t.source,lineOffset:t.lineOffset,colOffset:t.colOffset}),a};function ae(t){const e=t.scanner,n=e.peek();if(!n)throw new T("Unexpected end of input",e.position());if(t.ednMode)switch(n.kind){case I.Quote:throw new T("Quote (') is not valid in EDN",n,{start:n.start.offset,end:n.end.offset});case I.Quasiquote:throw new T("Syntax-quote (`) is not valid in EDN",n,{start:n.start.offset,end:n.end.offset});case I.Unquote:throw new T("Unquote (~) is not valid in EDN",n,{start:n.start.offset,end:n.end.offset});case I.UnquoteSplicing:throw new T("Unquote-splicing (~@) is not valid in EDN",n,{start:n.start.offset,end:n.end.offset});case I.AnonFnStart:throw new T("Anonymous function (#(...)) is not valid in EDN",n,{start:n.start.offset,end:n.end.offset});case I.Regex:throw new T('Regex literal (#"...") is not valid in EDN',n,{start:n.start.offset,end:n.end.offset});case I.Deref:throw new T("Deref (@) is not valid in EDN",n,{start:n.start.offset,end:n.end.offset});case I.VarQuote:throw new T("Var-quote (#') is not valid in EDN",n,{start:n.start.offset,end:n.end.offset});case I.Meta:throw new T("Metadata (^) is not valid in EDN",n,{start:n.start.offset,end:n.end.offset});case I.NsMapPrefix:throw new T("Namespaced map (#:ns{...}) is not valid in EDN",n,{start:n.start.offset,end:n.end.offset})}switch(n.kind){case I.String:case I.Number:case I.Keyword:case I.Symbol:case I.Character:return Hf(t);case I.LParen:return Zf(t);case I.LBrace:return rm(t);case I.LBracket:return em(t);case I.Quote:return Uf(t);case I.Quasiquote:return Kf(t);case I.Unquote:return Wf(t);case I.UnquoteSplicing:return Xf(t);case I.AnonFnStart:return om(t);case I.SetStart:return tm(t);case I.Deref:return Yf(t);case I.VarQuote:return Qf(t);case I.Meta:return Jf(t);case I.Regex:return im(t);case I.NsMapPrefix:return cm(t);case I.ReaderTag:return Bf(t);case I.Discard:throw new T("Unexpected #_ discard in this context",n,{start:n.start.offset,end:n.end.offset});default:throw new T(`Unexpected token: ${Ce(n)} at ${me(n.start.line,n.start.col)}`,n,{start:n.start.offset,end:n.end.offset})}}function lm(t,e,n){if(t.startsWith("::")){const r=t.slice(2);if(!r)return e.namespace;const s=e.aliases.get(r);if(!s)throw new T(`No namespace alias '${r}' found for #${t}{...}`,n,{start:n.start.offset,end:n.end.offset});return s}return t.slice(1)}const cm=t=>{const e=t.scanner,n=e.peek();if(!n||n.kind!==I.NsMapPrefix)throw new T("Expected namespace map prefix",e.position());e.advance();const r=lm(n.value,t,n),s=ae(t);if(s.kind!=="map")throw new T(`#:${r}{...} requires a map literal, got ${s.kind}`,n,{start:n.start.offset,end:n.end.offset});const a=s.entries.map(([i,c])=>{if(i.kind==="keyword"){const l=i.name.slice(1);if(!l.includes("/"))return[o.keyword(`:${r}/${l}`),c]}return[i,c]});return o.map(a)};function sn(t,e="user",n=new Map,r,s,a){const i=t.filter(m=>m.kind!==I.Comment),c=js(i),l={scanner:c,namespace:e,aliases:n,source:r,lineOffset:s,colOffset:a},d=[];for(;!c.isAtEnd()&&(le(l),!c.isAtEnd());)d.push(ae(l));return d}function um(t,e,n,r,s){const a=t.filter(d=>d.kind!==I.Comment),i=js(a),c={scanner:i,namespace:"user",aliases:new Map,source:n,lineOffset:r,colOffset:s,ednMode:!0,dataReaders:e==null?void 0:e.dataReaders,defaultDataReader:e==null?void 0:e.defaultDataReader},l=[];for(;!i.isAtEnd()&&(le(c),!i.isAtEnd());)l.push(ae(c));return l}const dm=["clojure","user"];function fm(t,e){if(e==="all")return!0;const n=t.split(".")[0];return dm.includes(n)?!0:e.some(r=>t===r||t.startsWith(r+"."))}function mm(t){const e=new Map;for(const[n,r]of t)e.set(n,r.kind==="var"?{...r}:r);return e}function Gs(t,e){if(e.has(t))return e.get(t);const n={bindings:mm(t.bindings),outer:null};return t.ns&&(n.ns={kind:"namespace",name:t.ns.name,vars:new Map([...t.ns.vars].map(([r,s])=>[r,{...s}])),aliases:new Map,readerAliases:new Map(t.ns.readerAliases)}),e.set(t,n),t.outer&&(n.outer=Gs(t.outer,e)),n}function pm(t){const e=new Map,n=new Map;for(const[r,s]of t)n.set(r,Gs(s,e));for(const[r,s]of t){const a=n.get(r);if(s.ns&&a.ns)for(const[i,c]of s.ns.aliases){const l=n.get(c.name);l!=null&&l.ns&&a.ns.aliases.set(i,l.ns)}}return n}function on(t,e,n){if(!t.has(n)){const r=nt(e);r.ns=nn(n),t.set(n,r)}return t.get(n)}function Qt(t,e,n,r,s,a){if(!u.vector(t))throw new f("require spec must be a vector, e.g. [my.ns :as alias]",{spec:t});const i=t.value;if(i.length===0||!u.symbol(i[0]))throw new f("First element of require spec must be a namespace symbol",{spec:t});const c=i[0].name;if((a?a(c):!0)&&s!==void 0&&!fm(c,s)){const h=s==="all"?[]:s,y=new f(`Access denied: namespace '${c}' is not in the allowed packages for this session.
Allowed packages: ${JSON.stringify(h)}
To allow all packages, use: allowedPackages: 'all'`,{nsName:c,allowedPackages:s});throw y.code="namespace/access-denied",y}if(i.some(h=>u.keyword(h)&&h.name===":as-alias")){let h=1;for(;h<i.length;){const y=i[h];if(!u.keyword(y))throw new f(`Expected keyword in require spec, got ${y.kind}`,{spec:t,position:h});if(y.name===":as-alias"){h++;const w=i[h];if(!w||!u.symbol(w))throw new f(":as-alias expects a symbol alias",{spec:t,position:h});e.ns.readerAliases.set(w.name,c),h++}else throw new f(`:as-alias specs only support :as-alias, got ${y.name}`,{spec:t})}return}r&&r(c);const m=n.get(c);if(!m){const h=new f(`Namespace '${c}' not found. Only already-loaded namespaces can be required.`,{nsName:c});throw h.code="namespace/not-found",h}let p=1;for(;p<i.length;){const h=i[p];if(!u.keyword(h))throw new f(`Expected keyword in require spec, got ${h.kind}`,{spec:t,position:p});if(h.name===":as"){p++;const y=i[p];if(!y||!u.symbol(y))throw new f(":as expects a symbol alias",{spec:t,position:p});e.ns.aliases.set(y.name,m.ns),p++}else if(h.name===":refer"){p++;const y=i[p];if(!y||!u.vector(y))throw new f(":refer expects a vector of symbols",{spec:t,position:p});for(const w of y.value){if(!u.symbol(w))throw new f(":refer vector must contain only symbols",{spec:t,sym:w});const $=m.ns.vars.get(w.name);if($===void 0)throw new f(`Symbol ${w.name} not found in namespace ${c}`,{nsName:c,symbol:w.name});e.ns.vars.set(w.name,$)}p++}else throw new f(`Unknown require option ${h.name}. Supported: :as, :refer`,{spec:t,keyword:h.name})}}function hm(t,e,n,r){var c,l;const s=((c=t.get("user"))==null?void 0:c.ns)??nn("user");Y("*ns*",s,e);const a=(l=e.ns)==null?void 0:l.vars.get("*ns*");a&&(a.dynamic=!0);function i(d){var m;return d===void 0?null:_n(d)?d:ot(d)?((m=t.get(d.name))==null?void 0:m.ns)??null:null}Y("ns-name",o.nativeFn("ns-name",d=>d===void 0?o.nil():d.kind==="namespace"?o.symbol(d.name):d.kind==="symbol"?d:d.kind==="string"?o.symbol(d.value):o.nil()).withMeta([...g({doc:"Returns the namespace name as a symbol for the given value.",arglists:[["x"]],docGroup:v.introspection})]),e),Y("all-ns",o.nativeFn("all-ns",()=>o.list([...t.values()].map(d=>d.ns).filter(Boolean))).withMeta([...g({doc:"Returns a list of all namespaces loaded in the session.",arglists:[[]],docGroup:v.introspection})]),e),Y("find-ns",o.nativeFn("find-ns",d=>{var m;return d===void 0||!ot(d)?o.nil():((m=t.get(d.name))==null?void 0:m.ns)??o.nil()}).withMeta([...g({doc:"Returns the namespace as a value for the given symbol, or nil if the symbol is not a namespace or not loaded.",arglists:[["sym"]],docGroup:v.introspection})]),e),Y("in-ns",o.nativeFnCtx("in-ns",(d,m,p)=>{var h;if(!p||!ot(p))throw new f("in-ns expects a symbol",{sym:p});return d.setCurrentNs&&d.setCurrentNs(p.name),((h=t.get(p.name))==null?void 0:h.ns)??o.nil()}).withMeta([...g({doc:"Sets the current namespace to the given symbol and returns the namespace as a value.",arglists:[["sym"]],docGroup:v.introspection})]),e),Y("ns-aliases",o.nativeFn("ns-aliases",d=>{const m=i(d);if(!m)return o.map([]);const p=[];return m.aliases.forEach((h,y)=>{p.push([o.symbol(y),h])}),o.map(p)}).withMeta([...g({doc:"Returns a map of the aliases for the given namespace.",arglists:[["sym"]],docGroup:v.introspection})]),e),Y("ns-interns",o.nativeFn("ns-interns",d=>{const m=i(d);if(!m)return o.map([]);const p=[];return m.vars.forEach((h,y)=>{h.ns===m.name&&p.push([o.symbol(y),h])}),o.map(p)}).withMeta([...g({doc:"Returns a map of the interned vars for the given namespace.",arglists:[["sym"]],docGroup:v.introspection})]),e),Y("ns-publics",o.nativeFn("ns-publics",d=>{const m=i(d);if(!m)return o.map([]);const p=[];return m.vars.forEach((h,y)=>{var $;if(h.ns!==m.name)return;((($=h.meta)==null?void 0:$.entries)??[]).some(([S,P])=>S.kind==="keyword"&&S.name===":private"&&P.kind==="boolean"&&P.value===!0)||p.push([o.symbol(y),h])}),o.map(p)}).withMeta([...g({doc:"Returns a map of the public vars for the given namespace.",arglists:[["sym"]],docGroup:v.introspection})]),e),Y("ns-refers",o.nativeFn("ns-refers",d=>{const m=i(d);if(!m)return o.map([]);const p=[];return m.vars.forEach((h,y)=>{h.ns!==m.name&&p.push([o.symbol(y),h])}),o.map(p)}).withMeta([...g({doc:"Returns a map of the refers for the given namespace.",arglists:[["sym"]],docGroup:v.introspection})]),e),Y("ns-map",o.nativeFn("ns-map",d=>{const m=i(d);if(!m)return o.map([]);const p=[];return m.vars.forEach((h,y)=>{p.push([o.symbol(y),h])}),o.map(p)}).withMeta([...g({doc:"Returns a map of the vars for the given namespace.",arglists:[["sym"]],docGroup:v.introspection})]),e),Y("ns-imports",o.nativeFn("ns-imports",d=>o.map([])).withMeta([...g({doc:"",arglists:[["sym"]],docGroup:v.introspection,extra:{"no-doc":!0}})]),e),Y("the-ns",o.nativeFn("the-ns",d=>{var m;return d===void 0?o.nil():_n(d)?d:ot(d)?((m=t.get(d.name))==null?void 0:m.ns)??o.nil():o.nil()}).withMeta([...g({doc:"Returns the namespace as a value for the given symbol, or nil if the symbol is not a namespace or not loaded.",arglists:[["sym"]],docGroup:v.introspection})]),e),Y("instance?",o.nativeFn("instance?",(d,m)=>o.boolean(!1)).withMeta([...g({doc:"",arglists:[["cls","obj"]],docGroup:v.introspection,extra:{"no-doc":!0}})]),e),Y("class",o.nativeFn("class",d=>d===void 0?o.nil():o.string(`conjure.${d.kind}`)).withMeta([...g({doc:"",arglists:[["x"]],docGroup:v.introspection,extra:{"no-doc":!0}})]),e),Y("class?",o.nativeFn("class?",d=>o.boolean(!1)).withMeta([...g({doc:"",arglists:[["x"]],docGroup:v.introspection,extra:{"no-doc":!0}})]),e),Y("special-symbol?",o.nativeFn("special-symbol?",d=>{if(d===void 0||!ot(d))return o.boolean(!1);const m=new Set([...Object.values(J),"import"]);return o.boolean(m.has(d.name))}).withMeta([...g({doc:"Returns true if the given symbol is a special symbol reserved by the language.",arglists:[["sym"]],docGroup:v.introspection})]),e),Y("loaded-libs",o.nativeFn("loaded-libs",()=>o.set([...t.keys()].map(o.symbol))).withMeta([...g({doc:"Returns a set of the loaded libraries.",arglists:[[]],docGroup:v.introspection})]),e),Y("require",o.nativeFnCtx("require",(d,m,...p)=>{const h=t.get(n());for(const y of p)Qt(y,h,t,w=>r(w,d));return o.nil()}).withMeta([...g({doc:"Parses the require spec and load the namespace(s) specified into the current namespace.",arglists:[["args"]],docGroup:v.runtime})]),e),Y("resolve",o.nativeFn("resolve",d=>{if(!ot(d))return o.nil();const m=d.name.indexOf("/");if(m>0){const h=d.name.slice(0,m),y=d.name.slice(m+1),w=t.get(h)??null;return w?rn(y,w)??o.nil():o.nil()}const p=t.get(n());return rn(d.name,p)??o.nil()}).withMeta([...g({doc:"Resolves the given symbol to a value in the current namespace.",arglists:[["sym"]],docGroup:v.introspection})]),e)}function gm(t,e){const n=on(t,e,"clojure.reflect");Y("parse-flags",o.nativeFn("parse-flags",(s,a)=>o.set([])),n),Y("reflect",o.nativeFn("reflect",s=>o.map([])),n),Y("type-reflect",o.nativeFn("type-reflect",(s,...a)=>o.map([])),n);const r=on(t,e,"cursive.repl.runtime");Y("completions",o.nativeFn("completions",(...s)=>o.nil()),r);for(const s of["Class","Object","String","Number","Boolean","Integer","Long","Double","Float","Byte","Short","Character","Void","Math","System","Runtime","Thread","Throwable","Exception","Error","Iterable","Comparable","Runnable","Cloneable"])Y(s,o.keyword(`:java.lang/${s}`),e,o.map([[o.keyword(":no-doc"),o.boolean(!0)]]))}function vm(t,e){const n=new Map;for(const l of t){if(n.has(l.id))throw new Error(`Duplicate module ID: '${l.id}'`);n.set(l.id,l)}const r=new Map;for(const l of t)for(const d of l.declareNs){const m=r.get(d.name)??[];m.push(l.id),r.set(d.name,m)}const s=new Map,a=new Map;for(const l of t)s.set(l.id,[]),a.set(l.id,0);for(const l of t)for(const d of l.dependsOn??[]){if(e!=null&&e.has(d))continue;const m=r.get(d);if(!m||m.length===0)throw new Error(`No module provides namespace '${d}' (required by '${l.id}')`);for(const p of m)p!==l.id&&(s.get(p).push(l.id),a.set(l.id,a.get(l.id)+1))}const i=[];for(const[l,d]of a)d===0&&i.push(l);const c=[];for(;i.length>0;){const l=i.shift();c.push(n.get(l));for(const d of s.get(l)){const m=a.get(d)-1;a.set(d,m),m===0&&i.push(d)}}if(c.length!==t.length){const l=t.map(d=>d.id).filter(d=>!c.some(m=>m.id===d));throw new Error(`Circular dependency detected in module system. Modules in cycle: ${l.join(", ")}`)}return c}const ym={"+":o.nativeFn("+",function(...e){if(e.length===0)return o.number(0);if(e.length===2){if(!u.number(e[0]))throw f.atArg("+ expects all arguments to be numbers",{args:e},0);if(!u.number(e[1]))throw f.atArg("+ expects all arguments to be numbers",{args:e},1);return o.number(e[0].value+e[1].value)}let n=0;for(let r=0;r<e.length;r++){if(e[r].kind!=="number")throw f.atArg("+ expects all arguments to be numbers",{args:e},r);n+=e[r].value}return o.number(n)}).withMeta([...g({doc:"Returns the sum of the arguments. Throws on non-number arguments.",arglists:[["&","nums"]],docGroup:v.arithmetic,extra:{someNum:42,someBool:!0,someString:"hello",someSymbol:o.symbol("hello"),someKeyword:o.keyword(":hello"),someVector:o.vector([o.number(1),o.number(2),o.number(3)]),someMap:o.map([[o.keyword(":a"),o.number(1)],[o.keyword(":b"),o.number(2)],[o.keyword(":c"),o.number(3)]]),someSet:o.set([o.number(1),o.number(2),o.number(3)]),someList:o.list([o.number(1),o.number(2),o.number(3)]),someAtom:o.atom(o.number(1))}})]),"-":o.nativeFn("-",function(...e){if(e.length===0)throw new f("- expects at least one argument",{args:e});if(e[0].kind!=="number")throw f.atArg("- expects all arguments to be numbers",{args:e},0);if(e.length===1)return o.number(-e[0].value);if(e.length===2){if(e[1].kind!=="number")throw f.atArg("- expects all arguments to be numbers",{args:e},1);return o.number(e[0].value-e[1].value)}let n=e[0].value;for(let r=1;r<e.length;r++){if(e[r].kind!=="number")throw f.atArg("- expects all arguments to be numbers",{args:e},r);n-=e[r].value}return o.number(n)}).withMeta([...g({doc:"Returns the difference of the arguments. Throws on non-number arguments.",arglists:[["&","nums"]],docGroup:v.arithmetic})]),"*":o.nativeFn("*",function(...e){if(e.length===0)return o.number(1);if(e.length===2){if(e[0].kind!=="number")throw f.atArg("* expects all arguments to be numbers",{args:e},0);if(e[1].kind!=="number")throw f.atArg("* expects all arguments to be numbers",{args:e},1);return o.number(e[0].value*e[1].value)}let n=1;for(let r=0;r<e.length;r++){if(e[r].kind!=="number")throw f.atArg("* expects all arguments to be numbers",{args:e},r);n*=e[r].value}return o.number(n)}).withMeta([...g({doc:"Returns the product of the arguments. Throws on non-number arguments.",arglists:[["&","nums"]],docGroup:v.arithmetic})]),"/":o.nativeFn("/",function(...e){if(e.length===0)throw new f("/ expects at least one argument",{args:e});if(e[0].kind!=="number")throw f.atArg("/ expects all arguments to be numbers",{args:e},0);if(e.length===2){if(e[1].kind!=="number")throw f.atArg("/ expects all arguments to be numbers",{args:e},1);if(e[1].value===0)throw f.atArg("division by zero",{args:e},1);return o.number(e[0].value/e[1].value)}let n=e[0].value;for(let r=1;r<e.length;r++){if(e[r].kind!=="number")throw f.atArg("/ expects all arguments to be numbers",{args:e},r);if(e[r].value===0){const s=new f("division by zero",{args:e});throw s.data={argIndex:r},s}n/=e[r].value}return o.number(n)}).withMeta([...g({doc:"Returns the quotient of the arguments. Throws on non-number arguments or division by zero.",arglists:[["&","nums"]],docGroup:v.arithmetic})]),">":o.nativeFn(">",function(...e){if(e.length<2)throw new f("> expects at least two arguments",{args:e});if(e.length===2){if(e[0].kind!=="number")throw f.atArg("> expects all arguments to be numbers",{args:e},0);if(e[1].kind!=="number")throw f.atArg("> expects all arguments to be numbers",{args:e},1);return o.boolean(e[0].value>e[1].value)}if(e[0].kind!=="number")throw f.atArg("> expects all arguments to be numbers",{args:e},0);for(let n=1;n<e.length;n++){if(e[n].kind!=="number")throw f.atArg("> expects all arguments to be numbers",{args:e},n);if(e[n].value>=e[n-1].value)return o.boolean(!1)}return o.boolean(!0)}).withMeta([...g({doc:"Compares adjacent arguments left to right, returns true if all values are in descending order, false otherwise.",arglists:[["&","nums"]],docGroup:v.comparison})]),"<":o.nativeFn("<",function(...e){if(e.length<2)throw new f("< expects at least two arguments",{args:e});if(e.length===2){if(e[0].kind!=="number")throw f.atArg("< expects all arguments to be numbers",{args:e},0);if(e[1].kind!=="number")throw f.atArg("< expects all arguments to be numbers",{args:e},1);return o.boolean(e[0].value<e[1].value)}for(let n=0;n<e.length;n++)if(e[n].kind!=="number")throw f.atArg("< expects all arguments to be numbers",{args:e},n);for(let n=1;n<e.length;n++)if(e[n].value<=e[n-1].value)return o.boolean(!1);return o.boolean(!0)}).withMeta([...g({doc:"Compares adjacent arguments left to right, returns true if all values are in ascending order, false otherwise.",arglists:[["&","nums"]],docGroup:v.comparison})]),">=":o.nativeFn(">=",function(...e){if(e.length<2)throw new f(">= expects at least two arguments",{args:e});if(e.length===2){if(e[0].kind!=="number")throw f.atArg(">= expects all arguments to be numbers",{args:e},0);if(e[1].kind!=="number")throw f.atArg(">= expects all arguments to be numbers",{args:e},1);return o.boolean(e[0].value>=e[1].value)}for(let n=0;n<e.length;n++)if(e[n].kind!=="number")throw f.atArg(">= expects all arguments to be numbers",{args:e},n);for(let n=1;n<e.length;n++)if(e[n].value>e[n-1].value)return o.boolean(!1);return o.boolean(!0)}).withMeta([...g({doc:"Compares adjacent arguments left to right, returns true if all comparisons returns true for greater than or equal to checks, false otherwise.",arglists:[["&","nums"]],docGroup:v.comparison})]),"<=":o.nativeFn("<=",function(...e){if(e.length<2)throw new f("<= expects at least two arguments",{args:e});if(e.length===2){if(e[0].kind!=="number")throw f.atArg("<= expects all arguments to be numbers",{args:e},0);if(e[1].kind!=="number")throw f.atArg("<= expects all arguments to be numbers",{args:e},1);return o.boolean(e[0].value<=e[1].value)}for(let n=0;n<e.length;n++)if(e[n].kind!=="number")throw f.atArg("<= expects all arguments to be numbers",{args:e},n);for(let n=1;n<e.length;n++)if(e[n].value<e[n-1].value)return o.boolean(!1);return o.boolean(!0)}).withMeta([...g({doc:"Compares adjacent arguments left to right, returns true if all comparisons returns true for less than or equal to checks, false otherwise.",arglists:[["&","nums"]],docGroup:v.comparison})]),"=":o.nativeFn("=",function(...e){if(e.length<2)throw new f("= expects at least two arguments",{args:e});for(let n=1;n<e.length;n++)if(!u.equal(e[n],e[n-1]))return o.boolean(!1);return o.boolean(!0)}).withMeta([...g({doc:"Compares adjacent arguments left to right, returns true if all values are structurally equal, false otherwise.",arglists:[["&","vals"]],docGroup:v.comparison})]),inc:o.nativeFn("inc",function(e){if(e===void 0||e.kind!=="number")throw f.atArg(`inc expects a number${e!==void 0?`, got ${x(e)}`:""}`,{x:e},0);return o.number(e.value+1)}).withMeta([...g({doc:"Returns the argument incremented by 1. Throws on non-number arguments.",arglists:[["x"]],docGroup:v.arithmetic})]),dec:o.nativeFn("dec",function(e){if(e===void 0||e.kind!=="number")throw f.atArg(`dec expects a number${e!==void 0?`, got ${x(e)}`:""}`,{x:e},0);return o.number(e.value-1)}).withMeta([...g({doc:"Returns the argument decremented by 1. Throws on non-number arguments.",arglists:[["x"]],docGroup:v.arithmetic})]),max:o.nativeFn("max",function(...e){if(e.length===0)throw new f("max expects at least one argument",{args:e});if(e[0].kind!=="number")throw f.atArg("max expects all arguments to be numbers",{args:e},0);let n=e[0].value;for(let r=1;r<e.length;r++){if(e[r].kind!=="number")throw f.atArg("max expects all arguments to be numbers",{args:e},r);const s=e[r].value;s>n&&(n=s)}return o.number(n)}).withMeta([...g({doc:"Returns the largest of the arguments. Throws on non-number arguments.",arglists:[["&","nums"]],docGroup:v.arithmetic})]),min:o.nativeFn("min",function(...e){if(e.length===0)throw new f("min expects at least one argument",{args:e});if(e[0].kind!=="number")throw f.atArg("min expects all arguments to be numbers",{args:e},0);let n=e[0].value;for(let r=1;r<e.length;r++){if(e[r].kind!=="number")throw f.atArg("min expects all arguments to be numbers",{args:e},r);const s=e[r].value;s<n&&(n=s)}return o.number(n)}).withMeta([...g({doc:"Returns the smallest of the arguments. Throws on non-number arguments.",arglists:[["&","nums"]],docGroup:v.arithmetic})]),mod:o.nativeFn("mod",function(e,n){if(e===void 0||e.kind!=="number")throw f.atArg(`mod expects a number as first argument${e!==void 0?`, got ${x(e)}`:""}`,{n:e},0);if(n===void 0||n.kind!=="number")throw f.atArg(`mod expects a number as second argument${n!==void 0?`, got ${x(n)}`:""}`,{d:n},1);if(n.value===0){const s=new f("mod: division by zero",{n:e,d:n});throw s.data={argIndex:1},s}const r=e.value%n.value;return o.number(r<0?r+Math.abs(n.value):r)}).withMeta([...g({doc:"Returns the remainder of the first argument divided by the second argument. Throws on non-number arguments or division by zero.",arglists:[["n","d"]],docGroup:v.arithmetic})]),"even?":o.nativeFn("even?",function(e){if(e===void 0||e.kind!=="number")throw f.atArg(`even? expects a number${e!==void 0?`, got ${x(e)}`:""}`,{n:e},0);return o.boolean(e.value%2===0)}).withMeta([...g({doc:"Returns true if the argument is an even number, false otherwise.",arglists:[["n"]],docGroup:v.arithmetic})]),"odd?":o.nativeFn("odd?",function(e){if(e===void 0||e.kind!=="number")throw f.atArg(`odd? expects a number${e!==void 0?`, got ${x(e)}`:""}`,{n:e},0);return o.boolean(Math.abs(e.value)%2!==0)}).withMeta([...g({doc:"Returns true if the argument is an odd number, false otherwise.",arglists:[["n"]],docGroup:v.arithmetic})]),"pos?":o.nativeFn("pos?",function(e){if(e===void 0||e.kind!=="number")throw f.atArg(`pos? expects a number${e!==void 0?`, got ${x(e)}`:""}`,{n:e},0);return o.boolean(e.value>0)}).withMeta([...g({doc:"Returns true if the argument is a positive number, false otherwise.",arglists:[["n"]],docGroup:v.arithmetic})]),"neg?":o.nativeFn("neg?",function(e){if(e===void 0||e.kind!=="number")throw f.atArg(`neg? expects a number${e!==void 0?`, got ${x(e)}`:""}`,{n:e},0);return o.boolean(e.value<0)}).withMeta([...g({doc:"Returns true if the argument is a negative number, false otherwise.",arglists:[["n"]],docGroup:v.arithmetic})]),"zero?":o.nativeFn("zero?",function(e){if(e===void 0||e.kind!=="number")throw f.atArg(`zero? expects a number${e!==void 0?`, got ${x(e)}`:""}`,{n:e},0);return o.boolean(e.value===0)}).withMeta([...g({doc:"Returns true if the argument is zero, false otherwise.",arglists:[["n"]],docGroup:v.arithmetic})]),abs:o.nativeFn("abs",function(e){if(e===void 0||e.kind!=="number")throw f.atArg(`abs expects a number${e!==void 0?`, got ${x(e)}`:""}`,{n:e},0);return o.number(Math.abs(e.value))}).withMeta([...g({doc:"Returns the absolute value of a.",arglists:[["a"]],docGroup:v.arithmetic})]),sqrt:o.nativeFn("sqrt",function(e){if(e===void 0||e.kind!=="number")throw f.atArg(`sqrt expects a number${e!==void 0?`, got ${x(e)}`:""}`,{n:e},0);return o.number(Math.sqrt(e.value))}).withMeta([...g({doc:"Returns the square root of n.",arglists:[["n"]],docGroup:v.arithmetic})]),quot:o.nativeFn("quot",function(e,n){if(e===void 0||e.kind!=="number")throw f.atArg("quot expects a number as first argument",{num:e},0);if(n===void 0||n.kind!=="number")throw f.atArg("quot expects a number as second argument",{div:n},1);if(n.value===0)throw f.atArg("quot: division by zero",{num:e,div:n},1);return o.number(Math.trunc(e.value/n.value))}).withMeta([...g({doc:"quot[ient] of dividing numerator by denominator.",arglists:[["num","div"]],docGroup:v.arithmetic})]),rem:o.nativeFn("rem",function(e,n){if(e===void 0||e.kind!=="number")throw f.atArg("rem expects a number as first argument",{num:e},0);if(n===void 0||n.kind!=="number")throw f.atArg("rem expects a number as second argument",{div:n},1);if(n.value===0)throw f.atArg("rem: division by zero",{num:e,div:n},1);return o.number(e.value%n.value)}).withMeta([...g({doc:"remainder of dividing numerator by denominator.",arglists:[["num","div"]],docGroup:v.arithmetic})]),rand:o.nativeFn("rand",function(...e){if(e.length===0)return o.number(Math.random());if(e[0].kind!=="number")throw f.atArg("rand expects a number",{n:e[0]},0);return o.number(Math.random()*e[0].value)}).withMeta([...g({doc:"Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).",arglists:[[],["n"]],docGroup:v.arithmetic})]),"rand-int":o.nativeFn("rand-int",function(e){if(e===void 0||e.kind!=="number")throw f.atArg("rand-int expects a number",{n:e},0);return o.number(Math.floor(Math.random()*e.value))}).withMeta([...g({doc:"Returns a random integer between 0 (inclusive) and n (exclusive).",arglists:[["n"]],docGroup:v.arithmetic})]),"rand-nth":o.nativeFn("rand-nth",function(e){if(e===void 0||!u.list(e)&&!u.vector(e))throw f.atArg("rand-nth expects a list or vector",{coll:e},0);const n=e.value;if(n.length===0)throw f.atArg("rand-nth called on empty collection",{coll:e},0);return n[Math.floor(Math.random()*n.length)]}).withMeta([...g({doc:"Return a random element of the (sequential) collection.",arglists:[["coll"]],docGroup:v.arithmetic})]),shuffle:o.nativeFn("shuffle",function(e){if(e===void 0||e.kind==="nil")return o.vector([]);if(!u.seqable(e))throw f.atArg(`shuffle expects a collection, got ${x(e)}`,{coll:e},0);const n=[...se(e)];for(let r=n.length-1;r>0;r--){const s=Math.floor(Math.random()*(r+1));[n[r],n[s]]=[n[s],n[r]]}return o.vector(n)}).withMeta([...g({doc:"Return a random permutation of coll.",arglists:[["coll"]],docGroup:v.collections})]),"bit-and":o.nativeFn("bit-and",function(e,n){if((e==null?void 0:e.kind)!=="number")throw f.atArg("bit-and expects numbers",{x:e},0);if((n==null?void 0:n.kind)!=="number")throw f.atArg("bit-and expects numbers",{y:n},1);return o.number(e.value&n.value)}).withMeta([...g({doc:"Bitwise and",arglists:[["x","y"]],docGroup:v.arithmetic})]),"bit-or":o.nativeFn("bit-or",function(e,n){if((e==null?void 0:e.kind)!=="number")throw f.atArg("bit-or expects numbers",{x:e},0);if((n==null?void 0:n.kind)!=="number")throw f.atArg("bit-or expects numbers",{y:n},1);return o.number(e.value|n.value)}).withMeta([...g({doc:"Bitwise or",arglists:[["x","y"]],docGroup:v.arithmetic})]),"bit-xor":o.nativeFn("bit-xor",function(e,n){if((e==null?void 0:e.kind)!=="number")throw f.atArg("bit-xor expects numbers",{x:e},0);if((n==null?void 0:n.kind)!=="number")throw f.atArg("bit-xor expects numbers",{y:n},1);return o.number(e.value^n.value)}).withMeta([...g({doc:"Bitwise exclusive or",arglists:[["x","y"]],docGroup:v.arithmetic})]),"bit-not":o.nativeFn("bit-not",function(e){if((e==null?void 0:e.kind)!=="number")throw f.atArg("bit-not expects a number",{x:e},0);return o.number(~e.value)}).withMeta([...g({doc:"Bitwise complement",arglists:[["x"]],docGroup:v.arithmetic})]),"bit-shift-left":o.nativeFn("bit-shift-left",function(e,n){if((e==null?void 0:e.kind)!=="number")throw f.atArg("bit-shift-left expects numbers",{x:e},0);if((n==null?void 0:n.kind)!=="number")throw f.atArg("bit-shift-left expects numbers",{n},1);return o.number(e.value<<n.value)}).withMeta([...g({doc:"Bitwise shift left",arglists:[["x","n"]],docGroup:v.arithmetic})]),"bit-shift-right":o.nativeFn("bit-shift-right",function(e,n){if((e==null?void 0:e.kind)!=="number")throw f.atArg("bit-shift-right expects numbers",{x:e},0);if((n==null?void 0:n.kind)!=="number")throw f.atArg("bit-shift-right expects numbers",{n},1);return o.number(e.value>>n.value)}).withMeta([...g({doc:"Bitwise shift right",arglists:[["x","n"]],docGroup:v.arithmetic})]),"unsigned-bit-shift-right":o.nativeFn("unsigned-bit-shift-right",function(e,n){if((e==null?void 0:e.kind)!=="number")throw f.atArg("unsigned-bit-shift-right expects numbers",{x:e},0);if((n==null?void 0:n.kind)!=="number")throw f.atArg("unsigned-bit-shift-right expects numbers",{n},1);return o.number(e.value>>>n.value)}).withMeta([...g({doc:"Bitwise shift right, without sign-extension",arglists:[["x","n"]],docGroup:v.arithmetic})]),char:o.nativeFn("char",function(e){if(e===void 0||e.kind!=="number")throw new f(`char expects a number, got ${e!==void 0?x(e):"nothing"}`,{n:e});const n=Math.trunc(e.value);if(n<0||n>1114111)throw new f(`char: code point ${n} is out of Unicode range`,{n:e});return o.char(String.fromCodePoint(n))}).withMeta([...g({doc:"Returns the character at the given Unicode code point.",arglists:[["n"]],docGroup:v.arithmetic})]),int:o.nativeFn("int",function(e){if(e===void 0)throw new f("int expects one argument",{});if(e.kind==="character")return o.number(e.value.codePointAt(0));if(e.kind==="number")return o.number(Math.trunc(e.value));throw new f(`int expects a number or character, got ${x(e)}`,{x:e})}).withMeta([...g({doc:"Coerces x to int. For characters, returns the Unicode code point.",arglists:[["x"]],docGroup:v.arithmetic})]),compare:o.nativeFn("compare",function(e,n){if(u.nil(e)&&u.nil(n))return o.number(0);if(u.nil(e))return o.number(-1);if(u.nil(n))return o.number(1);if(u.number(e)&&u.number(n)||u.string(e)&&u.string(n)||u.char(e)&&u.char(n))return o.number(e.value<n.value?-1:e.value>n.value?1:0);if(u.keyword(e)&&u.keyword(n))return o.number(e.name<n.name?-1:e.name>n.name?1:0);throw new f(`compare: cannot compare ${x(e)} to ${x(n)}`,{x:e,y:n})}).withMeta([...g({doc:"Comparator. Returns a negative number, zero, or a positive number.",arglists:[["x","y"]],docGroup:v.comparison})]),hash:o.nativeFn("hash",function(e){const n=x(e);let r=0;for(let s=0;s<n.length;s++)r=Math.imul(31,r)+n.charCodeAt(s)|0;return o.number(r)}).withMeta([...g({doc:"Returns the hash code of its argument.",arglists:[["x"]],docGroup:v.utilities})])};function wr(t,e,n,r){if(t.validator&&u.aFunction(t.validator)){const s=n.applyFunction(t.validator,[e],r);if(u.falsy(s))throw new f("Invalid reference state",{newVal:e})}}function br(t,e,n){if(t.watches)for(const[,{key:r,fn:s,ctx:a,callEnv:i}]of t.watches)a.applyFunction(s,[r,{kind:"atom",value:n},e,n],i)}const wm={atom:o.nativeFn("atom",function(e){return o.atom(e)}).withMeta([...g({doc:"Returns a new atom holding the given value.",arglists:[["value"]],docGroup:v.atoms})]),deref:o.nativeFn("deref",function(e){if(u.atom(e)||u.volatile(e)||u.reduced(e))return e.value;if(u.delay(e))return ms(e);throw e.kind==="pending"?f.atArg("@ on a pending value requires an (async ...) context. Use (async @x) or compose with then/catch.",{value:e},0):f.atArg(`deref expects an atom, volatile, reduced, or delay value, got ${e.kind}`,{value:e},0)}).withMeta([...g({doc:"Returns the wrapped value from an atom, volatile, reduced, or delay value.",arglists:[["value"]],docGroup:v.atoms})]),"swap!":o.nativeFnCtx("swap!",function(e,n,r,s,...a){if(!u.atom(r))throw f.atArg(`swap! expects an atom as its first argument, got ${r.kind}`,{atomVal:r},0);if(!u.aFunction(s))throw f.atArg(`swap! expects a function as its second argument, got ${s.kind}`,{fn:s},1);const i=r,c=i.value,l=e.applyFunction(s,[c,...a],n);return wr(i,l,e,n),i.value=l,br(i,c,l),l}).withMeta([...g({doc:"Applies fn to the current value of the atom, replacing the current value with the result. Returns the new value.",arglists:[["atomVal","fn","&","extraArgs"]],docGroup:v.atoms})]),"reset!":o.nativeFnCtx("reset!",function(e,n,r,s){if(!u.atom(r))throw f.atArg(`reset! expects an atom as its first argument, got ${r.kind}`,{atomVal:r},0);const a=r,i=a.value;return wr(a,s,e,n),a.value=s,br(a,i,s),s}).withMeta([...g({doc:"Sets the value of the atom to newVal and returns the new value.",arglists:[["atomVal","newVal"]],docGroup:v.atoms})]),"atom?":o.nativeFn("atom?",function(e){return o.boolean(u.atom(e))}).withMeta([...g({doc:"Returns true if the value is an atom, false otherwise.",arglists:[["value"]],docGroup:v.atoms})]),"swap-vals!":o.nativeFnCtx("swap-vals!",function(e,n,r,s,...a){if(!u.atom(r))throw f.atArg(`swap-vals! expects an atom, got ${x(r)}`,{atomVal:r},0);if(!u.aFunction(s))throw f.atArg(`swap-vals! expects a function, got ${x(s)}`,{fn:s},1);const i=r.value,c=e.applyFunction(s,[i,...a],n);return r.value=c,o.vector([i,c])}).withMeta([...g({doc:"Atomically swaps the value of atom to be (apply f current-value-of-atom args). Returns [old new].",arglists:[["atom","f","&","args"]],docGroup:v.atoms})]),"reset-vals!":o.nativeFn("reset-vals!",function(e,n){if(!u.atom(e))throw f.atArg(`reset-vals! expects an atom, got ${x(e)}`,{atomVal:e},0);const r=e.value;return e.value=n,o.vector([r,n])}).withMeta([...g({doc:"Sets the value of atom to newVal. Returns [old new].",arglists:[["atom","newval"]],docGroup:v.atoms})]),"compare-and-set!":o.nativeFn("compare-and-set!",function(e,n,r){if(!u.atom(e))throw f.atArg(`compare-and-set! expects an atom, got ${x(e)}`,{atomVal:e},0);return u.equal(e.value,n)?(e.value=r,o.boolean(!0)):o.boolean(!1)}).withMeta([...g({doc:"Atomically sets the value of atom to newval if and only if the current value of the atom is identical to oldval. Returns true if set happened, else false.",arglists:[["atom","oldval","newval"]],docGroup:v.atoms})]),"add-watch":o.nativeFnCtx("add-watch",function(e,n,r,s,a){if(!u.atom(r))throw f.atArg(`add-watch expects an atom, got ${x(r)}`,{atomVal:r},0);if(!u.aFunction(a))throw f.atArg(`add-watch expects a function, got ${x(a)}`,{fn:a},2);const i=r;return i.watches||(i.watches=new Map),i.watches.set(x(s),{key:s,fn:a,ctx:e,callEnv:n}),r}).withMeta([...g({doc:"Adds a watch function to an atom. The watch fn must be a fn of 4 args: a key, the atom, its old-state, its new-state.",arglists:[["atom","key","fn"]],docGroup:v.atoms})]),"remove-watch":o.nativeFn("remove-watch",function(e,n){if(!u.atom(e))throw f.atArg(`remove-watch expects an atom, got ${x(e)}`,{atomVal:e},0);const r=e;return r.watches&&r.watches.delete(x(n)),e}).withMeta([...g({doc:"Removes a watch (set by add-watch) from an atom.",arglists:[["atom","key"]],docGroup:v.atoms})]),"set-validator!":o.nativeFnCtx("set-validator!",function(e,n,r,s){if(!u.atom(r))throw f.atArg(`set-validator! expects an atom, got ${x(r)}`,{atomVal:r},0);if(s.kind==="nil")return r.validator=void 0,o.nil();if(!u.aFunction(s))throw f.atArg(`set-validator! expects a function or nil, got ${x(s)}`,{fn:s},1);return r.validator=s,o.nil()}).withMeta([...g({doc:"Sets the validator-fn for an atom. fn must be nil or a side-effect-free fn of one argument.",arglists:[["atom","fn"]],docGroup:v.atoms})]),"volatile!":o.nativeFn("volatile!",function(e){if(e===void 0)throw new f("volatile! expects one argument",{});return o.volatile(e)}).withMeta([...g({doc:"Returns a volatile value with the given value as its value.",arglists:[["value"]],docGroup:v.atoms})]),"volatile?":o.nativeFn("volatile?",function(e){if(e===void 0)throw new f("volatile? expects one argument",{});return o.boolean(u.volatile(e))}).withMeta([...g({doc:"Returns true if the given value is a volatile value, false otherwise.",arglists:[["value"]],docGroup:v.predicates})]),"vreset!":o.nativeFn("vreset!",function(e,n){if(!u.volatile(e))throw new f(`vreset! expects a volatile as its first argument, got ${x(e)}`,{vol:e});if(n===void 0)throw new f("vreset! expects two arguments",{vol:e});return e.value=n,n}).withMeta([...g({doc:"Resets the value of the given volatile to the given new value and returns the new value.",arglists:[["vol","newVal"]],docGroup:v.atoms})]),"vswap!":o.nativeFnCtx("vswap!",function(e,n,r,s,...a){if(!u.volatile(r))throw new f(`vswap! expects a volatile as its first argument, got ${x(r)}`,{vol:r});if(!u.aFunction(s))throw new f(`vswap! expects a function as its second argument, got ${x(s)}`,{fn:s});const i=e.applyFunction(s,[r.value,...a],n);return r.value=i,i}).withMeta([...g({doc:"Applies fn to the current value of the volatile, replacing the current value with the result. Returns the new value.",arglists:[["vol","fn"],["vol","fn","&","extraArgs"]],docGroup:v.atoms})])},bm={"hash-map":o.nativeFn("hash-map",function(...e){if(e.length===0)return o.map([]);if(e.length%2!==0)throw new f(`hash-map expects an even number of arguments, got ${e.length}`,{args:e});const n=[];for(let r=0;r<e.length;r+=2){const s=e[r],a=e[r+1];n.push([s,a])}return o.map(n)}).withMeta([...g({doc:"Returns a new hash-map containing the given key-value pairs.",arglists:[["&","kvals"]],docGroup:v.maps})]),assoc:o.nativeFn("assoc",function(e,...n){if(!e)throw new f("assoc expects a collection as first argument",{collection:e});if(u.nil(e)&&(e=o.map([])),u.list(e))throw new f("assoc on lists is not supported, use vectors instead",{collection:e});if(!u.collection(e))throw f.atArg(`assoc expects a collection, got ${x(e)}`,{collection:e},0);if(n.length<2)throw new f("assoc expects at least two arguments",{args:n});if(n.length%2!==0)throw new f("assoc expects an even number of binding arguments",{args:n});if(u.vector(e)){const r=[...e.value];for(let s=0;s<n.length;s+=2){const a=n[s];if(a.kind!=="number")throw f.atArg(`assoc on vectors expects each key argument to be a index (number), got ${x(a)}`,{index:a},s+1);if(a.value>r.length)throw f.atArg(`assoc index ${a.value} is out of bounds for vector of length ${r.length}`,{index:a,collection:e},s+1);r[a.value]=n[s+1]}return o.vector(r)}if(u.record(e)){const r=[...e.fields];let s=!1;for(let a=0;a<n.length;a+=2){const i=n[a],c=n[a+1],l=r.findIndex(([d])=>u.equal(d,i));l===-1?(s=!0,r.push([i,c])):r[l]=[i,c]}return s?o.map(r):o.record(e.recordType,e.ns,r)}if(u.map(e)){const r=[...e.entries];for(let s=0;s<n.length;s+=2){const a=n[s],i=n[s+1],c=r.findIndex(function(d){return u.equal(d[0],a)});c===-1?r.push([a,i]):r[c]=[a,i]}return o.map(r)}throw new f(`unhandled collection type, got ${x(e)}`,{collection:e})}).withMeta([...g({doc:"Associates the value val with the key k in collection. If collection is a map, returns a new map with the same mappings, otherwise returns a vector with the new value at index k.",arglists:[["collection","&","kvals"]],docGroup:v.collections})]),dissoc:o.nativeFn("dissoc",function(e,...n){if(!e)throw new f("dissoc expects a collection as first argument",{collection:e});if(u.list(e))throw f.atArg("dissoc on lists is not supported, use vectors instead",{collection:e},0);if(!u.collection(e))throw f.atArg(`dissoc expects a collection, got ${x(e)}`,{collection:e},0);if(u.vector(e)){if(e.value.length===0)return e;const r=[...e.value];for(let s=0;s<n.length;s+=1){const a=n[s];if(a.kind!=="number")throw f.atArg(`dissoc on vectors expects each key argument to be a index (number), got ${x(a)}`,{index:a},s+1);if(a.value>=r.length)throw f.atArg(`dissoc index ${a.value} is out of bounds for vector of length ${r.length}`,{index:a,collection:e},s+1);r.splice(a.value,1)}return o.vector(r)}if(u.record(e)){const r=[...e.fields];for(let s=0;s<n.length;s+=1){const a=n[s],i=r.findIndex(([c])=>u.equal(c,a));i!==-1&&r.splice(i,1)}return o.map(r)}if(u.map(e)){if(e.entries.length===0)return e;const r=[...e.entries];for(let s=0;s<n.length;s+=1){const a=n[s],i=r.findIndex(function(l){return u.equal(l[0],a)});i!==-1&&r.splice(i,1)}return o.map(r)}throw new f(`unhandled collection type, got ${x(e)}`,{collection:e})}).withMeta([...g({doc:"Dissociates the key k from collection. If collection is a map, returns a new map with the same mappings, otherwise returns a vector with the value at index k removed.",arglists:[["collection","&","keys"]],docGroup:v.collections})]),zipmap:o.nativeFn("zipmap",function(e,n){if(e===void 0||!u.seqable(e))throw new f(`zipmap expects a collection or string as first argument${e!==void 0?`, got ${x(e)}`:""}`,{ks:e});if(n===void 0||!u.seqable(n))throw new f(`zipmap expects a collection or string as second argument${n!==void 0?`, got ${x(n)}`:""}`,{vs:n});const r=se(e),s=se(n),a=Math.min(r.length,s.length),i=[];for(let c=0;c<a;c++)i.push([r[c],s[c]]);return o.map(i)}).withMeta([...g({doc:"Returns a new map with the keys and values of the given collections.",arglists:[["ks","vs"]],docGroup:v.maps})]),keys:o.nativeFn("keys",function(e){if(e===void 0||!u.map(e)&&!u.record(e))throw f.atArg(`keys expects a map or record${e!==void 0?`, got ${x(e)}`:""}`,{m:e},0);const n=u.record(e)?e.fields:e.entries;return o.vector(n.map(function([s]){return s}))}).withMeta([...g({doc:"Returns a vector of the keys of the given map or record.",arglists:[["m"]],docGroup:v.maps})]),vals:o.nativeFn("vals",function(e){if(e===void 0||!u.map(e)&&!u.record(e))throw f.atArg(`vals expects a map or record${e!==void 0?`, got ${x(e)}`:""}`,{m:e},0);const n=u.record(e)?e.fields:e.entries;return o.vector(n.map(function([,s]){return s}))}).withMeta([...g({doc:"Returns a vector of the values of the given map or record.",arglists:[["m"]],docGroup:v.maps})]),"hash-set":o.nativeFn("hash-set",function(...e){const n=[];for(const r of e)n.some(s=>u.equal(s,r))||n.push(r);return o.set(n)}).withMeta([...g({doc:"Returns a set containing the given values.",arglists:[["&","xs"]],docGroup:v.sets})]),set:o.nativeFn("set",function(e){if(e===void 0||e.kind==="nil")return o.set([]);const n=se(e),r=[];for(const s of n)r.some(a=>u.equal(a,s))||r.push(s);return o.set(r)}).withMeta([...g({doc:"Returns a set of the distinct elements of the given collection.",arglists:[["coll"]],docGroup:v.collections})]),"set?":o.nativeFn("set?",function(e){return o.boolean(e!==void 0&&e.kind==="set")}).withMeta([...g({doc:"Returns true if x is a set.",arglists:[["x"]],docGroup:v.predicates})]),disj:o.nativeFn("disj",function(e,...n){if(e===void 0||e.kind==="nil")return o.set([]);if(e.kind!=="set")throw f.atArg(`disj expects a set, got ${x(e)}`,{s:e},0);const r=e.values.filter(s=>!n.some(a=>u.equal(a,s)));return o.set(r)}).withMeta([...g({doc:"Returns a set with the given items removed.",arglists:[["s","&","items"]],docGroup:v.sets})])},km={list:o.nativeFn("list",function(...e){return e.length===0?o.list([]):o.list(e)}).withMeta([...g({doc:"Returns a new list containing the given values.",arglists:[["&","args"]],docGroup:v.sequences})]),seq:o.nativeFn("seq",function t(e){if(e.kind==="nil")return o.nil();if(u.lazySeq(e)){const r=Se(e);return u.nil(r)?o.nil():t(r)}if(u.cons(e))return e;if(!u.seqable(e))throw f.atArg(`seq expects a collection, string, or nil, got ${x(e)}`,{collection:e},0);const n=se(e);return n.length===0?o.nil():o.list(n)}).withMeta([...g({doc:"Returns a sequence of the given collection or string. Strings yield a sequence of single-character strings.",arglists:[["coll"]],docGroup:v.sequences})]),first:o.nativeFn("first",function t(e){if(e.kind==="nil")return o.nil();if(u.lazySeq(e)){const r=Se(e);return u.nil(r)?o.nil():t(r)}if(u.cons(e))return e.head;if(!u.seqable(e))throw f.atArg("first expects a collection or string",{collection:e},0);const n=se(e);return n.length===0?o.nil():n[0]}).withMeta([...g({doc:"Returns the first element of the given collection or string.",arglists:[["coll"]],docGroup:v.sequences})]),rest:o.nativeFn("rest",function t(e){if(e.kind==="nil")return o.list([]);if(u.lazySeq(e)){const n=Se(e);return u.nil(n)?o.list([]):t(n)}if(u.cons(e))return e.tail;if(!u.seqable(e))throw f.atArg("rest expects a collection or string",{collection:e},0);if(u.list(e))return e.value.length===0?e:o.list(e.value.slice(1));if(u.vector(e))return o.vector(e.value.slice(1));if(u.map(e))return e.entries.length===0?e:o.map(e.entries.slice(1));if(e.kind==="string"){const n=se(e);return o.list(n.slice(1))}throw f.atArg(`rest expects a collection or string, got ${x(e)}`,{collection:e},0)}).withMeta([...g({doc:"Returns a sequence of the given collection or string excluding the first element.",arglists:[["coll"]],docGroup:v.sequences})]),conj:o.nativeFn("conj",function(e,...n){if(!e)throw new f("conj expects a collection as first argument",{collection:e});if(n.length===0)return e;if(!u.collection(e))throw f.atArg(`conj expects a collection, got ${x(e)}`,{collection:e},0);if(u.list(e)){const r=[];for(let s=n.length-1;s>=0;s--)r.push(n[s]);return o.list([...r,...e.value])}if(u.vector(e))return o.vector([...e.value,...n]);if(u.map(e)){const r=[...e.entries];for(let s=0;s<n.length;s+=1){const a=n[s],i=s+1;if(a.kind!=="vector")throw f.atArg(`conj on maps expects each argument to be a vector key-pair for maps, got ${x(a)}`,{pair:a},i);if(a.value.length!==2)throw f.atArg(`conj on maps expects each argument to be a vector key-pair for maps, got ${x(a)}`,{pair:a},i);const c=a.value[0],l=r.findIndex(function(m){return u.equal(m[0],c)});l===-1?r.push([c,a.value[1]]):r[l]=[c,a.value[1]]}return o.map([...r])}if(u.set(e)){const r=[...e.values];for(const s of n)r.some(a=>u.equal(a,s))||r.push(s);return o.set(r)}throw new f(`unhandled collection type, got ${x(e)}`,{collection:e})}).withMeta([...g({doc:"Appends args to the given collection. Lists append in reverse order to the head, vectors append to the tail, sets add unique elements.",arglists:[["collection","&","args"]],docGroup:v.sequences})]),cons:o.nativeFn("cons",function(e,n){if(u.lazySeq(n)||u.cons(n))return o.cons(e,n);if(u.nil(n))return o.list([e]);if(!u.collection(n))throw f.atArg(`cons expects a collection as second argument, got ${x(n)}`,{xs:n},1);if(u.map(n)||u.set(n)||u.record(n))throw f.atArg("cons on maps, sets, and records is not supported, use vectors instead",{xs:n},1);const r=u.list(n)?o.list:o.vector,s=[e,...n.value];return r(s)}).withMeta([...g({doc:"Returns a new collection with x prepended to the head of xs.",arglists:[["x","xs"]],docGroup:v.sequences})]),get:o.nativeFn("get",function(e,n,r){const s=r??o.nil();switch(e.kind){case k.map:{const a=e.entries;for(const[i,c]of a)if(u.equal(i,n))return c;return s}case k.record:{for(const[a,i]of e.fields)if(u.equal(a,n))return i;return s}case k.vector:{const a=e.value;if(n.kind!=="number")throw new f("get on vectors expects a 0-based index as parameter",{key:n});return n.value<0||n.value>=a.length?s:a[n.value]}default:return s}}).withMeta([...g({doc:"Returns the value associated with key in target. If target is a map, returns the value associated with key, otherwise returns the value at index key in target. If not-found is provided, it is returned if the key is not found, otherwise nil is returned.",arglists:[["target","key"],["target","key","not-found"]],docGroup:v.sequences})]),nth:o.nativeFn("nth",function(e,n,r){if(n===void 0||n.kind!=="number")throw new f(`nth expects a number index${n!==void 0?`, got ${x(n)}`:""}`,{n});const s=n.value;if(e===void 0||u.nil(e)){if(r!==void 0)return r;throw new f(`nth index ${s} is out of bounds for collection of length 0`,{coll:e,n})}if(u.lazySeq(e)||u.cons(e)){let i=e,c=0;for(;;){for(;u.lazySeq(i);)i=Se(i);if(u.nil(i)){if(r!==void 0)return r;const d=new f(`nth index ${s} is out of bounds`,{coll:e,n});throw d.data={argIndex:1},d}if(u.cons(i)){if(c===s)return i.head;i=i.tail,c++;continue}if(u.list(i)||u.vector(i)){const d=s-c,m=i.value;if(d<0||d>=m.length){if(r!==void 0)return r;const p=new f(`nth index ${s} is out of bounds for collection of length ${c+m.length}`,{coll:e,n});throw p.data={argIndex:1},p}return m[d]}if(r!==void 0)return r;const l=new f(`nth index ${s} is out of bounds`,{coll:e,n});throw l.data={argIndex:1},l}}if(!u.list(e)&&!u.vector(e))throw new f(`nth expects a list or vector, got ${x(e)}`,{coll:e});const a=e.value;if(s<0||s>=a.length){if(r!==void 0)return r;const i=new f(`nth index ${s} is out of bounds for collection of length ${a.length}`,{coll:e,n});throw i.data={argIndex:1},i}return a[s]}).withMeta([...g({doc:"Returns the nth element of the given collection. If not-found is provided, it is returned if the index is out of bounds, otherwise an error is thrown.",arglists:[["coll","n","not-found"]],docGroup:v.sequences})]),last:o.nativeFn("last",function(e){if(e===void 0||!u.list(e)&&!u.vector(e))throw new f(`last expects a list or vector${e!==void 0?`, got ${x(e)}`:""}`,{coll:e});const n=e.value;return n.length===0?o.nil():n[n.length-1]}).withMeta([...g({doc:"Returns the last element of the given collection.",arglists:[["coll"]],docGroup:v.sequences})]),reverse:o.nativeFn("reverse",function(e){if(e===void 0||!u.list(e)&&!u.vector(e))throw f.atArg(`reverse expects a list or vector${e!==void 0?`, got ${x(e)}`:""}`,{coll:e},0);return o.list([...e.value].reverse())}).withMeta([...g({doc:"Returns a new sequence with the elements of the given collection in reverse order.",arglists:[["coll"]],docGroup:v.sequences})]),"empty?":o.nativeFn("empty?",function(e){if(e===void 0)throw f.atArg("empty? expects one argument",{},0);if(e.kind==="nil")return o.boolean(!0);if(!u.seqable(e))throw f.atArg(`empty? expects a collection, string, or nil, got ${x(e)}`,{coll:e},0);return o.boolean(se(e).length===0)}).withMeta([...g({doc:"Returns true if coll has no items. Accepts collections, strings, and nil.",arglists:[["coll"]],docGroup:v.predicates})]),"contains?":o.nativeFn("contains?",function(e,n){if(e===void 0)throw f.atArg("contains? expects a collection as first argument",{},0);if(n===void 0)throw f.atArg("contains? expects a key as second argument",{},1);if(e.kind==="nil")return o.boolean(!1);if(u.map(e))return o.boolean(e.entries.some(function([s]){return u.equal(s,n)}));if(u.record(e))return o.boolean(e.fields.some(([r])=>u.equal(r,n)));if(u.vector(e))return n.kind!=="number"?o.boolean(!1):o.boolean(n.value>=0&&n.value<e.value.length);if(u.set(e))return o.boolean(e.values.some(r=>u.equal(r,n)));throw f.atArg(`contains? expects a map, record, set, vector, or nil, got ${x(e)}`,{coll:e},0)}).withMeta([...g({doc:"Returns true if key is present in coll. For maps checks key existence (including keys with nil values). For vectors checks index bounds.",arglists:[["coll","key"]],docGroup:v.predicates})]),"repeat*":o.nativeFn("repeat*",function(e,n){if(e===void 0||e.kind!=="number")throw f.atArg(`repeat expects a number as first argument${e!==void 0?`, got ${x(e)}`:""}`,{n:e},0);return o.list(Array(e.value).fill(n))}).withMeta([...g({doc:"Returns a finite sequence of n copies of x (native helper).",arglists:[["n","x"]],docGroup:v.sequences,extra:{"no-doc":!0}})]),"range*":o.nativeFn("range*",function(...e){if(e.length===0||e.length>3)throw new f("range expects 1, 2, or 3 arguments: (range n), (range start end), or (range start end step)",{args:e});const n=e.findIndex(function(l){return l.kind!=="number"});if(n!==-1)throw f.atArg("range expects number arguments",{args:e},n);let r,s,a;if(e.length===1?(r=0,s=e[0].value,a=1):e.length===2?(r=e[0].value,s=e[1].value,a=1):(r=e[0].value,s=e[1].value,a=e[2].value),a===0)throw f.atArg("range step cannot be zero",{args:e},e.length-1);const i=[];if(a>0)for(let c=r;c<s;c+=a)i.push(o.number(c));else for(let c=r;c>s;c+=a)i.push(o.number(c));return o.list(i)}).withMeta([...g({doc:"Returns a finite sequence of numbers (native helper).",arglists:[["n"],["start","end"],["start","end","step"]],docGroup:v.sequences,extra:{"no-doc":!0}})]),"concat*":o.nativeFn("concat*",function(...e){const n=[];for(const r of e)if(!u.nil(r))if(u.list(r)||u.vector(r))n.push(...r.value);else if(u.cons(r)||u.lazySeq(r))n.push(...se(r));else if(u.set(r))n.push(...r.values);else throw new f(`concat* expects seqable arguments, got ${x(r)}`,{arg:r});return o.list(n)}).withMeta([...g({doc:"Eagerly concatenates seqable collections into a list (quasiquote bootstrap helper).",arglists:[["&","colls"]],docGroup:v.sequences,extra:{"no-doc":!0}})]),count:o.nativeFn("count",function(e){if(e.kind==="nil")return o.number(0);if(u.lazySeq(e)||u.cons(e))return o.number(se(e).length);if(![k.list,k.vector,k.map,k.record,k.set,k.string].includes(e.kind))throw f.atArg(`count expects a countable value, got ${x(e)}`,{countable:e},0);switch(e.kind){case k.list:return o.number(e.value.length);case k.vector:return o.number(e.value.length);case k.map:return o.number(e.entries.length);case k.record:return o.number(e.fields.length);case k.set:return o.number(e.values.length);case k.string:return o.number(e.value.length);default:throw new f(`count expects a countable value, got ${x(e)}`,{countable:e})}}).withMeta([...g({doc:"Returns the number of elements in the given countable value.",arglists:[["countable"]],docGroup:v.sequences})]),empty:o.nativeFn("empty",function(e){if(e===void 0||e.kind==="nil")return o.nil();switch(e.kind){case"list":return o.list([]);case"vector":return o.vector([]);case"map":return o.map([]);case"set":return o.set([]);default:return o.nil()}}).withMeta([...g({doc:"Returns an empty collection of the same category as coll, or nil.",arglists:[["coll"]],docGroup:v.sequences})])},xm={vector:o.nativeFn("vector",function(...e){return e.length===0?o.vector([]):o.vector(e)}).withMeta([...g({doc:"Returns a new vector containing the given values.",arglists:[["&","args"]],docGroup:v.collections})]),vec:o.nativeFn("vec",function(e){if(e===void 0||e.kind==="nil")return o.vector([]);if(u.vector(e))return e;if(!u.seqable(e))throw f.atArg(`vec expects a collection or string, got ${x(e)}`,{coll:e},0);return o.vector(se(e))}).withMeta([...g({doc:"Creates a new vector containing the contents of coll.",arglists:[["coll"]],docGroup:v.collections})]),subvec:o.nativeFn("subvec",function(e,n,r){if(e===void 0||!u.vector(e))throw f.atArg(`subvec expects a vector, got ${x(e)}`,{v:e},0);if(n===void 0||n.kind!=="number")throw f.atArg("subvec expects a number start index",{start:n},1);const s=n.value,a=r!==void 0&&r.kind==="number"?r.value:e.value.length;if(s<0||a>e.value.length||s>a)throw new f(`subvec index out of bounds: start=${s}, end=${a}, length=${e.value.length}`,{v:e,start:n,end:r});return o.vector(e.value.slice(s,a))}).withMeta([...g({doc:"Returns a vector of the items in vector from start (inclusive) to end (exclusive).",arglists:[["v","start"],["v","start","end"]],docGroup:v.collections})]),peek:o.nativeFn("peek",function(e){if(e===void 0||e.kind==="nil")return o.nil();if(u.vector(e))return e.value.length===0?o.nil():e.value[e.value.length-1];if(u.list(e))return e.value.length===0?o.nil():e.value[0];throw f.atArg(`peek expects a list or vector, got ${x(e)}`,{coll:e},0)}).withMeta([...g({doc:"For a list, same as first. For a vector, same as last.",arglists:[["coll"]],docGroup:v.collections})]),pop:o.nativeFn("pop",function(e){if(e===void 0||e.kind==="nil")throw f.atArg("Can't pop empty list",{coll:e},0);if(u.vector(e)){if(e.value.length===0)throw f.atArg("Can't pop empty vector",{coll:e},0);return o.vector(e.value.slice(0,-1))}if(u.list(e)){if(e.value.length===0)throw f.atArg("Can't pop empty list",{coll:e},0);return o.list(e.value.slice(1))}throw f.atArg(`pop expects a list or vector, got ${x(e)}`,{coll:e},0)}).withMeta([...g({doc:"For a list, returns a new list without the first item. For a vector, returns a new vector without the last item.",arglists:[["coll"]],docGroup:v.collections})])},$m={throw:o.nativeFn("throw",function(...e){throw e.length!==1?new f(`throw requires exactly 1 argument, got ${e.length}`,{args:e}):new Te(e[0])}).withMeta([...g({doc:"Throws a value as an exception. The value may be any CljValue; maps are idiomatic.",arglists:[["value"]],docGroup:v.errors})]),"ex-info":o.nativeFn("ex-info",function(...e){if(e.length<2)throw new f(`ex-info requires at least 2 arguments, got ${e.length}`,{args:e});const[n,r,s]=e;if(!u.string(n))throw new f("ex-info: first argument must be a string",{msg:n});const a=[[o.keyword(":message"),n],[o.keyword(":data"),r]];return s!==void 0&&a.push([o.keyword(":cause"),s]),o.map(a)}).withMeta([...g({doc:"Creates an error map with :message and :data keys. Optionally accepts a :cause.",arglists:[["msg","data"],["msg","data","cause"]],docGroup:v.errors})]),"ex-message":o.nativeFn("ex-message",function(...e){const[n]=e;if(!u.map(n))return o.nil();const r=n.entries.find(function([a]){return u.keyword(a)&&a.name===":message"});return r?r[1]:o.nil()}).withMeta([...g({doc:"Returns the :message of an error map, or nil.",arglists:[["e"]],docGroup:v.errors})]),"ex-data":o.nativeFn("ex-data",function(...e){const[n]=e;if(!u.map(n))return o.nil();const r=n.entries.find(function([a]){return u.keyword(a)&&a.name===":data"});return r?r[1]:o.nil()}).withMeta([...g({doc:"Returns the :data map of an error map, or nil.",arglists:[["e"]],docGroup:v.errors})]),"ex-cause":o.nativeFn("ex-cause",function(...e){const[n]=e;if(!u.map(n))return o.nil();const r=n.entries.find(function([a]){return u.keyword(a)&&a.name===":cause"});return r?r[1]:o.nil()}).withMeta([...g({doc:"Returns the :cause of an error map, or nil.",arglists:[["e"]],docGroup:v.errors})])},Mm={reduce:o.nativeFnCtx("reduce",function(e,n,r,...s){if(r===void 0||!u.aFunction(r))throw f.atArg(`reduce expects a function as first argument${r!==void 0?`, got ${x(r)}`:""}`,{fn:r},0);if(s.length===0||s.length>2)throw new f("reduce expects 2 or 3 arguments: (reduce f coll) or (reduce f init coll)",{fn:r});const a=s.length===2,i=a?s[0]:void 0,c=a?s[1]:s[0];if(c.kind==="nil"){if(!a)throw new f("reduce called on empty collection with no initial value",{fn:r});return i}if(!u.seqable(c))throw f.atArg(`reduce expects a collection or string, got ${x(c)}`,{collection:c},s.length);const l=se(c);if(!a){if(l.length===0)throw new f("reduce called on empty collection with no initial value",{fn:r});if(l.length===1)return l[0];let m=l[0];for(let p=1;p<l.length;p++){const h=e.applyFunction(r,[m,l[p]],n);if(u.reduced(h))return h.value;m=h}return m}let d=i;for(const m of l){const p=e.applyFunction(r,[d,m],n);if(u.reduced(p))return p.value;d=p}return d}).withMeta([...g({doc:"Reduces a collection to a single value by iteratively applying f. (reduce f coll) or (reduce f init coll).",arglists:[["f","coll"],["f","val","coll"]],docGroup:v.collections})]),apply:o.nativeFnCtx("apply",(t,e,n,...r)=>{if(n===void 0||!u.callable(n))throw f.atArg(`apply expects a callable as first argument${n!==void 0?`, got ${x(n)}`:""}`,{fn:n},0);if(r.length===0)throw new f("apply expects at least 2 arguments",{fn:n});const s=r[r.length-1];if(!u.nil(s)&&!u.seqable(s))throw f.atArg(`apply expects a collection or string as last argument, got ${x(s)}`,{lastArg:s},r.length);const a=[...r.slice(0,-1),...u.nil(s)?[]:se(s)];return t.applyCallable(n,a,e)}).withMeta([...g({doc:"Calls f with the elements of the last argument (a collection) as its arguments, optionally prepended by fixed args.",arglists:[["f","args"],["f","&","args"]],docGroup:v.higher_order})]),partial:o.nativeFn("partial",(t,...e)=>{if(t===void 0||!u.callable(t))throw f.atArg(`partial expects a callable as first argument${t!==void 0?`, got ${x(t)}`:""}`,{fn:t},0);const n=t;return o.nativeFnCtx("partial",(r,s,...a)=>r.applyCallable(n,[...e,...a],s))}).withMeta([...g({doc:"Returns a function that calls f with pre-applied args prepended to any additional arguments.",arglists:[["f","&","args"]],docGroup:v.higher_order})]),comp:o.nativeFn("comp",(...t)=>{if(t.length===0)return o.nativeFn("identity",r=>r);const e=t.findIndex(r=>!u.callable(r));if(e!==-1)throw f.atArg("comp expects functions or other callable values (keywords, maps)",{fns:t},e);const n=t;return o.nativeFnCtx("composed",(r,s,...a)=>{let i=r.applyCallable(n[n.length-1],a,s);for(let c=n.length-2;c>=0;c--)i=r.applyCallable(n[c],[i],s);return i})}).withMeta([...g({doc:"Returns the composition of fns, applied right-to-left. (comp f g) is equivalent to (fn [x] (f (g x))). Accepts any callable: functions, keywords, and maps.",arglists:[[],["f"],["f","g"],["f","g","&","fns"]],docGroup:v.higher_order})]),identity:o.nativeFn("identity",t=>{if(t===void 0)throw f.atArg("identity expects one argument",{},0);return t}).withMeta([...g({doc:"Returns its single argument unchanged.",arglists:[["x"]],docGroup:v.higher_order})])},qm={meta:o.nativeFn("meta",function(e){if(e===void 0)throw f.atArg("meta expects one argument",{},0);return e.kind==="function"||e.kind==="native-function"||e.kind==="var"||e.kind==="list"||e.kind==="vector"||e.kind==="map"||e.kind==="symbol"||e.kind==="atom"?e.meta??o.nil():o.nil()}).withMeta([...g({doc:"Returns the metadata map of a value, or nil if the value has no metadata.",arglists:[["val"]],docGroup:v.metadata})]),"with-meta":o.nativeFn("with-meta",function(e,n){if(e===void 0)throw f.atArg("with-meta expects two arguments",{},0);if(n===void 0)throw f.atArg("with-meta expects two arguments",{},1);if(n.kind!=="map"&&n.kind!=="nil")throw f.atArg(`with-meta expects a map as second argument, got ${x(n)}`,{m:n},1);if(!(e.kind==="function"||e.kind==="native-function"||e.kind==="list"||e.kind==="vector"||e.kind==="map"||e.kind==="symbol"))throw f.atArg(`with-meta does not support ${e.kind}, got ${x(e)}`,{val:e},0);const s=n.kind==="nil"?void 0:n;return{...e,meta:s}}).withMeta([...g({doc:"Returns a new value with the metadata map m applied to val.",arglists:[["val","m"]],docGroup:v.metadata})]),"alter-meta!":o.nativeFnCtx("alter-meta!",function(e,n,r,s,...a){if(r===void 0)throw f.atArg("alter-meta! expects at least two arguments",{},0);if(s===void 0)throw f.atArg("alter-meta! expects at least two arguments",{},1);if(r.kind!=="var"&&r.kind!=="atom")throw f.atArg(`alter-meta! expects a Var or Atom as first argument, got ${r.kind}`,{},0);if(!u.aFunction(s))throw f.atArg(`alter-meta! expects a function as second argument, got ${s.kind}`,{},1);const i=r.meta??o.nil(),c=e.applyCallable(s,[i,...a],n);if(c.kind!=="map"&&c.kind!=="nil")throw new f(`alter-meta! function must return a map or nil, got ${c.kind}`,{});return r.meta=c.kind==="nil"?void 0:c,c}).withMeta([...g({doc:"Applies f to ref's current metadata (with optional args), sets the result as the new metadata, and returns it.",arglists:[["ref","f","&","args"]],docGroup:v.metadata})])},W="Predicates",Sm={"nil?":o.nativeFn("nil?",function(e){return o.boolean(e.kind==="nil")}).withMeta([...g({doc:"Returns true if the value is nil, false otherwise.",arglists:[["arg"]],docGroup:W})]),"true?":o.nativeFn("true?",function(e){return e.kind!=="boolean"?o.boolean(!1):o.boolean(e.value===!0)}).withMeta([...g({doc:"Returns true if the value is a boolean and true, false otherwise.",arglists:[["arg"]],docGroup:W})]),"false?":o.nativeFn("false?",function(e){return e.kind!=="boolean"?o.boolean(!1):o.boolean(e.value===!1)}).withMeta([...g({doc:"Returns true if the value is a boolean and false, false otherwise.",arglists:[["arg"]],docGroup:W})]),"truthy?":o.nativeFn("truthy?",function(e){return o.boolean(u.truthy(e))}).withMeta([...g({doc:"Returns true if the value is not nil or false, false otherwise.",arglists:[["arg"]],docGroup:W})]),"falsy?":o.nativeFn("falsy?",function(e){return o.boolean(u.falsy(e))}).withMeta([...g({doc:"Returns true if the value is nil or false, false otherwise.",arglists:[["arg"]],docGroup:W})]),"not=":o.nativeFn("not=",function(...e){if(e.length<2)throw new f("not= expects at least two arguments",{args:e});for(let n=1;n<e.length;n++)if(!u.equal(e[n],e[n-1]))return o.boolean(!0);return o.boolean(!1)}).withMeta([...g({doc:"Returns true if any two adjacent arguments are not equal, false otherwise.",arglists:[["&","vals"]],docGroup:v.comparison})]),"char?":o.nativeFn("char?",function(e){return o.boolean(e!==void 0&&u.char(e))}).withMeta([...g({doc:"Returns true if the value is a character, false otherwise.",arglists:[["x"]],docGroup:W})]),"number?":o.nativeFn("number?",function(e){return o.boolean(e!==void 0&&e.kind==="number")}).withMeta([...g({doc:"Returns true if the value is a number, false otherwise.",arglists:[["x"]],docGroup:W})]),"string?":o.nativeFn("string?",function(e){return o.boolean(e!==void 0&&u.string(e))}).withMeta([...g({doc:"Returns true if the value is a string, false otherwise.",arglists:[["x"]],docGroup:W})]),"boolean?":o.nativeFn("boolean?",function(e){return o.boolean(e!==void 0&&e.kind==="boolean")}).withMeta([...g({doc:"Returns true if the value is a boolean, false otherwise.",arglists:[["x"]],docGroup:W})]),"vector?":o.nativeFn("vector?",function(e){return o.boolean(e!==void 0&&u.vector(e))}).withMeta([...g({doc:"Returns true if the value is a vector, false otherwise.",arglists:[["x"]],docGroup:W})]),"list?":o.nativeFn("list?",function(e){return o.boolean(e!==void 0&&u.list(e))}).withMeta([...g({doc:"Returns true if the value is a list, false otherwise.",arglists:[["x"]],docGroup:W})]),"map?":o.nativeFn("map?",function(e){return o.boolean(e!==void 0&&u.map(e))}).withMeta([...g({doc:"Returns true if the value is a map, false otherwise.",arglists:[["x"]],docGroup:W})]),"keyword?":o.nativeFn("keyword?",function(e){return o.boolean(e!==void 0&&u.keyword(e))}).withMeta([...g({doc:"Returns true if the value is a keyword, false otherwise.",arglists:[["x"]],docGroup:W})]),"qualified-keyword?":o.nativeFn("qualified-keyword?",function(e){return o.boolean(e!==void 0&&u.keyword(e)&&e.name.includes("/"))}).withMeta([...g({doc:"Returns true if the value is a qualified keyword, false otherwise.",arglists:[["x"]],docGroup:W})]),"symbol?":o.nativeFn("symbol?",function(e){return o.boolean(e!==void 0&&u.symbol(e))}).withMeta([...g({doc:"Returns true if the value is a symbol, false otherwise.",arglists:[["x"]],docGroup:W})]),"namespace?":o.nativeFn("namespace?",function(e){return o.boolean(e!==void 0&&e.kind==="namespace")}).withMeta([...g({doc:"Returns true if x is a namespace.",arglists:[["x"]],docGroup:W})]),"qualified-symbol?":o.nativeFn("qualified-symbol?",function(e){return o.boolean(e!==void 0&&u.symbol(e)&&e.name.includes("/"))}).withMeta([...g({doc:"Returns true if the value is a qualified symbol, false otherwise.",arglists:[["x"]],docGroup:W})]),"ident?":o.nativeFn("ident?",function(e){return o.boolean(e!==void 0&&(u.keyword(e)||u.symbol(e)))}).withMeta([...g({doc:"Returns true if x is a symbol or keyword.",arglists:[["x"]],docGroup:W})]),"simple-ident?":o.nativeFn("simple-ident?",function(e){return o.boolean(e!==void 0&&(u.keyword(e)&&!e.name.includes("/")||u.symbol(e)&&!e.name.includes("/")))}).withMeta([...g({doc:"Returns true if x is a symbol or keyword with no namespace component.",arglists:[["x"]],docGroup:W})]),"qualified-ident?":o.nativeFn("qualified-ident?",function(e){return o.boolean(e!==void 0&&(u.keyword(e)&&e.name.includes("/")||u.symbol(e)&&e.name.includes("/")))}).withMeta([...g({doc:"Returns true if x is a symbol or keyword with a namespace component.",arglists:[["x"]],docGroup:W})]),"simple-keyword?":o.nativeFn("simple-keyword?",function(e){return o.boolean(e!==void 0&&u.keyword(e)&&!e.name.includes("/"))}).withMeta([...g({doc:"Returns true if x is a keyword with no namespace component.",arglists:[["x"]],docGroup:W})]),"simple-symbol?":o.nativeFn("simple-symbol?",function(e){return o.boolean(e!==void 0&&u.symbol(e)&&!e.name.includes("/"))}).withMeta([...g({doc:"Returns true if x is a symbol with no namespace component.",arglists:[["x"]],docGroup:W})]),"fn?":o.nativeFn("fn?",function(e){return o.boolean(e!==void 0&&u.aFunction(e))}).withMeta([...g({doc:"Returns true if the value is a function, false otherwise.",arglists:[["x"]],docGroup:W})]),"coll?":o.nativeFn("coll?",function(e){return o.boolean(e!==void 0&&u.collection(e))}).withMeta([...g({doc:"Returns true if the value is a collection, false otherwise.",arglists:[["x"]],docGroup:W})]),some:o.nativeFnCtx("some",function(e,n,r,s){if(r===void 0||!u.callable(r))throw f.atArg(`some expects a callable as first argument${r!==void 0?`, got ${x(r)}`:""}`,{pred:r},0);if(s===void 0)return o.nil();if(!u.seqable(s))throw f.atArg(`some expects a collection or string as second argument, got ${x(s)}`,{coll:s},1);for(const a of se(s)){const i=e.applyCallable(r,[a],n);if(u.truthy(i))return i}return o.nil()}).withMeta([...g({doc:"Returns the first truthy result of applying pred to each item in coll, or nil if no item satisfies pred.",arglists:[["pred","coll"]],docGroup:v.sequences})]),"every?":o.nativeFnCtx("every?",function(e,n,r,s){if(r===void 0||!u.callable(r))throw f.atArg(`every? expects a callable as first argument${r!==void 0?`, got ${x(r)}`:""}`,{pred:r},0);if(s===void 0||!u.seqable(s))throw f.atArg(`every? expects a collection or string as second argument${s!==void 0?`, got ${x(s)}`:""}`,{coll:s},1);for(const a of se(s))if(u.falsy(e.applyCallable(r,[a],n)))return o.boolean(!1);return o.boolean(!0)}).withMeta([...g({doc:"Returns true if all items in coll satisfy pred, false otherwise.",arglists:[["pred","coll"]],docGroup:W})]),"identical?":o.nativeFn("identical?",function(e,n){return o.boolean(e===n)}).withMeta([...g({doc:"Tests if 2 arguments are the same object (reference equality).",arglists:[["x","y"]],docGroup:v.comparison})]),"seqable?":o.nativeFn("seqable?",function(e){return o.boolean(e!==void 0&&u.seqable(e))}).withMeta([...g({doc:"Return true if the seq function is supported for x.",arglists:[["x"]],docGroup:W})]),"sequential?":o.nativeFn("sequential?",function(e){return o.boolean(e!==void 0&&(u.list(e)||u.vector(e)||u.lazySeq(e)||u.cons(e)))}).withMeta([...g({doc:"Returns true if coll is a sequential collection (list, vector, lazy-seq, or cons).",arglists:[["coll"]],docGroup:W})]),"associative?":o.nativeFn("associative?",function(e){return o.boolean(e!==void 0&&(u.map(e)||u.vector(e)))}).withMeta([...g({doc:"Returns true if coll implements Associative (map or vector).",arglists:[["coll"]],docGroup:W})]),"counted?":o.nativeFn("counted?",function(e){return o.boolean(e!==void 0&&(u.list(e)||u.vector(e)||u.map(e)||e.kind==="set"||u.string(e)))}).withMeta([...g({doc:"Returns true if coll implements count in constant time.",arglists:[["coll"]],docGroup:W})]),"int?":o.nativeFn("int?",function(e){return o.boolean(e!==void 0&&e.kind==="number"&&Number.isInteger(e.value))}).withMeta([...g({doc:"Return true if x is a fixed precision integer.",arglists:[["x"]],docGroup:W})]),"pos-int?":o.nativeFn("pos-int?",function(e){return o.boolean(e!==void 0&&e.kind==="number"&&Number.isInteger(e.value)&&e.value>0)}).withMeta([...g({doc:"Return true if x is a positive fixed precision integer.",arglists:[["x"]],docGroup:W})]),"neg-int?":o.nativeFn("neg-int?",function(e){return o.boolean(e!==void 0&&e.kind==="number"&&Number.isInteger(e.value)&&e.value<0)}).withMeta([...g({doc:"Return true if x is a negative fixed precision integer.",arglists:[["x"]],docGroup:W})]),"nat-int?":o.nativeFn("nat-int?",function(e){return o.boolean(e!==void 0&&e.kind==="number"&&Number.isInteger(e.value)&&e.value>=0)}).withMeta([...g({doc:"Return true if x is a non-negative fixed precision integer.",arglists:[["x"]],docGroup:W})]),"double?":o.nativeFn("double?",function(e){return o.boolean(e!==void 0&&e.kind==="number")}).withMeta([...g({doc:"Return true if x is a Double (all numbers in JS are doubles).",arglists:[["x"]],docGroup:W})]),"NaN?":o.nativeFn("NaN?",function(e){return o.boolean(e!==void 0&&e.kind==="number"&&isNaN(e.value))}).withMeta([...g({doc:"Returns true if num is NaN, else false.",arglists:[["num"]],docGroup:v.arithmetic})]),"infinite?":o.nativeFn("infinite?",function(e){return o.boolean(e!==void 0&&e.kind==="number"&&!isFinite(e.value)&&!isNaN(e.value))}).withMeta([...g({doc:"Returns true if num is positive or negative infinity, else false.",arglists:[["num"]],docGroup:v.arithmetic})])};function jm(t){let e=t,n="";const r=/^\(\?([imsx]+)\)/;let s;for(;(s=r.exec(e))!==null;){for(const a of s[1]){if(a==="x")throw new f("Regex flag (?x) (verbose mode) has no JavaScript equivalent and is not supported",{});n.includes(a)||(n+=a)}e=e.slice(s[0].length)}return{pattern:e,flags:n}}function wn(t,e){if(!u.regex(t))throw new f(`${e} expects a regex as first argument, got ${x(t)}`,{val:t});return t}function bn(t,e){if(t.kind!=="string")throw new f(`${e} expects a string as second argument, got ${x(t)}`,{val:t});return t.value}function kn(t){return t.length===1?o.string(t[0]):o.vector(t.map(function(n){return n==null?o.nil():o.string(n)}))}const _m={"regexp?":o.nativeFn("regexp?",function(e){return o.boolean(e!==void 0&&u.regex(e))}).withMeta([...g({doc:"Returns true if x is a regular expression pattern.",arglists:[["x"]],docGroup:v.predicates})]),"re-pattern":o.nativeFn("re-pattern",function(e){if(e===void 0||e.kind!=="string")throw new f(`re-pattern expects a string argument${e!==void 0?`, got ${x(e)}`:""}`,{s:e});const{pattern:n,flags:r}=jm(e.value);return o.regex(n,r)}).withMeta([...g({doc:`Returns an instance of java.util.regex.Pattern, for use, e.g. in re-matcher.
  (re-pattern "\\\\d+") produces the same pattern as #"\\d+".`,arglists:[["s"]],docGroup:v.regex})]),"re-find":o.nativeFn("re-find",function(e,n){const r=wn(e,"re-find"),s=bn(n,"re-find"),i=new RegExp(r.pattern,r.flags).exec(s);return i?kn(i):o.nil()}).withMeta([...g({doc:`Returns the next regex match, if any, of string to pattern, using
  java.util.regex.Matcher.find(). Returns the match or nil. When there
  are groups, returns a vector of the whole match and groups (nil for
  unmatched optional groups).`,arglists:[["re","s"]],docGroup:v.regex})]),"re-matches":o.nativeFn("re-matches",function(e,n){const r=wn(e,"re-matches"),s=bn(n,"re-matches"),i=new RegExp(r.pattern,r.flags).exec(s);return!i||i.index!==0||i[0].length!==s.length?o.nil():kn(i)}).withMeta([...g({doc:`Returns the match, if any, of string to pattern, using
  java.util.regex.Matcher.matches(). The entire string must match.
  Returns the match or nil. When there are groups, returns a vector
  of the whole match and groups (nil for unmatched optional groups).`,arglists:[["re","s"]],docGroup:v.regex})]),"re-seq":o.nativeFn("re-seq",function(e,n){const r=wn(e,"re-seq"),s=bn(n,"re-seq"),a=new RegExp(r.pattern,r.flags+"g"),i=[];let c;for(;(c=a.exec(s))!==null;){if(c[0].length===0){a.lastIndex++;continue}i.push(kn(c))}return i.length===0?o.nil():{kind:"list",value:i}}).withMeta([...g({doc:`Returns a lazy sequence of successive matches of pattern in string,
  using java.util.regex.Matcher.find(), each such match processed with
  re-groups.`,arglists:[["re","s"]],docGroup:v.regex})]),"str-split*":o.nativeFn("str-split*",function(e,n,r){if(e===void 0||e.kind!=="string")throw new f(`str-split* expects a string as first argument${e!==void 0?`, got ${x(e)}`:""}`,{sVal:e});const s=e.value,i=r!==void 0&&r.kind!=="nil"&&r.kind==="number"?r.value:void 0;let c,l;if(n.kind!=="regex")throw new f(`str-split* expects a regex pattern as second argument, got ${x(n)}`,{sepVal:n});if(n.pattern===""){const p=[...s];if(i===void 0||i>=p.length)return o.vector(p.map(o.string));const h=[...p.slice(0,i-1),p.slice(i-1).join("")];return o.vector(h.map(function(w){return o.string(w)}))}c=n.pattern,l=n.flags;const d=new RegExp(c,l+"g"),m=Fm(s,d,i);return o.vector(m.map(function(h){return o.string(h)}))}).withMeta([...g({doc:`Internal helper for clojure.string/split. Splits string s by a regex or
  string separator. Optional limit keeps all parts when provided.`,arglists:[["s","sep"],["s","sep","limit"]],docGroup:v.regex,extra:{"no-doc":!0}})])};function Fm(t,e,n){const r=[];let s=0,a,i=0;for(;(a=e.exec(t))!==null;){if(a[0].length===0){e.lastIndex++;continue}if(n!==void 0&&i>=n-1)break;r.push(t.slice(s,a.index)),s=a.index+a[0].length,i++}if(r.push(t.slice(s)),n===void 0)for(;r.length>0&&r[r.length-1]==="";)r.pop();return r}const ge="Strings";function ke(t,e){if(t===void 0||t.kind!=="string")throw new f(`${e} expects a string as first argument${t!==void 0?`, got ${x(t)}`:""}`,{val:t});return t.value}function Pt(t,e,n){if(t===void 0||t.kind!=="string")throw new f(`${n} expects a string as ${e} argument${t!==void 0?`, got ${x(t)}`:""}`,{val:t});return t.value}function Rm(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Am(t){return t.replace(/\$/g,"$$$$")}function Im(t,e){let n=-1;for(let s=e.length-1;s>=0;s--)if(typeof e[s]=="number"){n=s;break}const r=n>0?e.slice(0,n):[];return r.length===0?o.string(t):o.vector([o.string(t),...r.map(function(a){return a==null?o.nil():o.string(String(a))})])}function kr(t,e,n,r,s,a,i){const c=ke(r,n);if(s===void 0||a===void 0)throw new f(`${n} expects 3 arguments`,{});if(s.kind==="string"){if(a.kind!=="string")throw new f(`${n}: when match is a string, replacement must also be a string, got ${x(a)}`,{replVal:a});const l=new RegExp(Rm(s.value),i?"g":"");return o.string(c.replace(l,Am(a.value)))}if(s.kind==="regex"){const l=s,d=i?l.flags+"g":l.flags,m=new RegExp(l.pattern,d);if(a.kind==="string")return o.string(c.replace(m,a.value));if(u.aFunction(a)){const p=a,h=c.replace(m,function(w,...$){const S=Im(w,$),P=t.applyFunction(p,[S],e);return te(P)});return o.string(h)}throw new f(`${n}: replacement must be a string or function, got ${x(a)}`,{replVal:a})}throw new f(`${n}: match must be a string or regex, got ${x(s)}`,{matchVal:s})}const be={"no-doc":!0},Cm={"str-upper-case*":o.nativeFn("str-upper-case*",function(e){return o.string(ke(e,"str-upper-case*").toUpperCase())}).withMeta([...g({doc:"Internal helper. Converts s to upper-case.",arglists:[["s"]],docGroup:ge,extra:be})]),"str-lower-case*":o.nativeFn("str-lower-case*",function(e){return o.string(ke(e,"str-lower-case*").toLowerCase())}).withMeta([...g({doc:"Internal helper. Converts s to lower-case.",arglists:[["s"]],docGroup:ge,extra:be})]),"str-trim*":o.nativeFn("str-trim*",function(e){return o.string(ke(e,"str-trim*").trim())}).withMeta([...g({doc:"Internal helper. Removes whitespace from both ends of s.",arglists:[["s"]],docGroup:ge,extra:be})]),"str-triml*":o.nativeFn("str-triml*",function(e){return o.string(ke(e,"str-triml*").trimStart())}).withMeta([...g({doc:"Internal helper. Removes whitespace from the left of s.",arglists:[["s"]],docGroup:ge,extra:be})]),"str-trimr*":o.nativeFn("str-trimr*",function(e){return o.string(ke(e,"str-trimr*").trimEnd())}).withMeta([...g({doc:"Internal helper. Removes whitespace from the right of s.",arglists:[["s"]],docGroup:ge})]),"str-reverse*":o.nativeFn("str-reverse*",function(e){return o.string([...ke(e,"str-reverse*")].reverse().join(""))}).withMeta([...g({doc:"Internal helper. Returns s with its characters reversed (Unicode-safe).",arglists:[["s"]],docGroup:ge,extra:be})]),"str-starts-with*":o.nativeFn("str-starts-with*",function(e,n){const r=ke(e,"str-starts-with*"),s=Pt(n,"second","str-starts-with*");return o.boolean(r.startsWith(s))}).withMeta([...g({doc:"Internal helper. Returns true if s starts with substr.",arglists:[["s","substr"]],docGroup:ge,extra:be})]),"str-ends-with*":o.nativeFn("str-ends-with*",function(e,n){const r=ke(e,"str-ends-with*"),s=Pt(n,"second","str-ends-with*");return o.boolean(r.endsWith(s))}).withMeta([...g({doc:"Internal helper. Returns true if s ends with substr.",arglists:[["s","substr"]],docGroup:ge,extra:be})]),"str-includes*":o.nativeFn("str-includes*",function(e,n){const r=ke(e,"str-includes*"),s=Pt(n,"second","str-includes*");return o.boolean(r.includes(s))}).withMeta([...g({doc:"Internal helper. Returns true if s contains substr.",arglists:[["s","substr"]],docGroup:ge,extra:be})]),"str-index-of*":o.nativeFn("str-index-of*",function(e,n,r){const s=ke(e,"str-index-of*"),a=Pt(n,"second","str-index-of*");let i;if(r!==void 0&&r.kind!=="nil"){if(r.kind!=="number")throw new f(`str-index-of* expects a number as third argument, got ${x(r)}`,{fromVal:r});i=s.indexOf(a,r.value)}else i=s.indexOf(a);return i===-1?o.nil():o.number(i)}).withMeta([...g({doc:"Internal helper. Returns index of value in s, or nil if not found.",arglists:[["s","value"],["s","value","from-index"]],docGroup:ge,extra:be})]),"str-last-index-of*":o.nativeFn("str-last-index-of*",function(e,n,r){const s=ke(e,"str-last-index-of*"),a=Pt(n,"second","str-last-index-of*");let i;if(r!==void 0&&r.kind!=="nil"){if(r.kind!=="number")throw new f(`str-last-index-of* expects a number as third argument, got ${x(r)}`,{fromVal:r});i=s.lastIndexOf(a,r.value)}else i=s.lastIndexOf(a);return i===-1?o.nil():o.number(i)}).withMeta([...g({doc:"Internal helper. Returns last index of value in s, or nil if not found.",arglists:[["s","value"],["s","value","from-index"]],docGroup:ge,extra:be})]),"str-replace*":o.nativeFnCtx("str-replace*",function(e,n,r,s,a){return kr(e,n,"str-replace*",r,s,a,!0)}).withMeta([...g({doc:"Internal helper. Replaces all occurrences of match with replacement in s.",arglists:[["s","match","replacement"]],docGroup:ge,extra:be})]),"str-replace-first*":o.nativeFnCtx("str-replace-first*",function(e,n,r,s,a){return kr(e,n,"str-replace-first*",r,s,a,!1)}).withMeta([...g({doc:"Internal helper. Replaces the first occurrence of match with replacement in s.",arglists:[["s","match","replacement"]],docGroup:ge,extra:be})])},Pm={reduced:o.nativeFn("reduced",function(e){if(e===void 0)throw new f("reduced expects one argument",{});return o.reduced(e)}).withMeta([...g({doc:"Returns a reduced value, indicating termination of the reduction process.",arglists:[["value"]],docGroup:v.transducers})]),"reduced?":o.nativeFn("reduced?",function(e){if(e===void 0)throw new f("reduced? expects one argument",{});return o.boolean(u.reduced(e))}).withMeta([...g({doc:"Returns true if the given value is a reduced value, false otherwise.",arglists:[["value"]],docGroup:v.predicates})]),unreduced:o.nativeFn("unreduced",function(e){if(e===void 0)throw new f("unreduced expects one argument",{});return u.reduced(e)?e.value:e}).withMeta([...g({doc:"Returns the unreduced value of the given value. If the value is not a reduced value, it is returned unchanged.",arglists:[["value"]],docGroup:v.transducers})]),"ensure-reduced":o.nativeFn("ensure-reduced",function(e){if(e===void 0)throw new f("ensure-reduced expects one argument",{});return u.reduced(e)?e:o.reduced(e)}).withMeta([...g({doc:"Returns the given value if it is a reduced value, otherwise returns a reduced value with the given value as its value.",arglists:[["value"]],docGroup:v.transducers})]),transduce:o.nativeFnCtx("transduce",function(e,n,r,s,a,i){if(!u.aFunction(r))throw new f(`transduce expects a transducer (function) as first argument, got ${x(r)}`,{xf:r});if(!u.aFunction(s))throw new f(`transduce expects a reducing function as second argument, got ${x(s)}`,{f:s});if(a===void 0)throw new f("transduce expects 3 or 4 arguments: (transduce xf f coll) or (transduce xf f init coll)",{});let c,l;i===void 0?(l=a,c=e.applyFunction(s,[],n)):(c=a,l=i);const d=e.applyFunction(r,[s],n);if(u.nil(l))return e.applyFunction(d,[c],n);if(!u.seqable(l))throw new f(`transduce expects a collection or string as ${i===void 0?"third":"fourth"} argument, got ${x(l)}`,{coll:l});const m=se(l);let p=c;for(const h of m){const y=e.applyFunction(d,[p,h],n);if(u.reduced(y)){p=y.value;break}p=y}return e.applyFunction(d,[p],n)}).withMeta([...g({doc:wt(["reduce with a transformation of f (xf). If init is not","supplied, (f) will be called to produce it. f should be a reducing","step function that accepts both 1 and 2 arguments, if it accepts","only 2 you can add the arity-1 with 'completing'. Returns the result","of applying (the transformed) xf to init and the first item in coll,","then applying xf to that result and the 2nd item, etc. If coll","contains no items, returns init and f is not called. Note that","certain transforms may inject or skip items."]),arglists:[["xform","f","coll"],["xform","f","init","coll"]],docGroup:v.transducers})])};function xr(t,e,n){var s;const r=t.indexOf("/");if(r>0&&r<t.length-1){const a=t.slice(0,r),i=t.slice(r+1),l=((s=pe(e).ns)==null?void 0:s.aliases.get(a))??n.resolveNs(a)??null;if(!l)return;const d=l.vars.get(i);return d!==void 0?_e(d):void 0}return rn(t,e)}const Nm={str:o.nativeFn("str",function(...e){return o.string(e.map(n=>n.kind==="nil"?"":te(n)).join(""))}).withMeta([...g({doc:wt(["Returns a concatenated string representation of the given values."]),arglists:[["&","args"]],docGroup:v.strings})]),subs:o.nativeFn("subs",function(e,n,r){if(e===void 0||e.kind!=="string")throw f.atArg(`subs expects a string as first argument${e!==void 0?`, got ${x(e)}`:""}`,{s:e},0);if(n===void 0||n.kind!=="number")throw f.atArg(`subs expects a number as second argument${n!==void 0?`, got ${x(n)}`:""}`,{start:n},1);if(r!==void 0&&r.kind!=="number")throw f.atArg(`subs expects a number as optional third argument${r!==void 0?`, got ${x(r)}`:""}`,{end:r},2);const s=n.value,a=r==null?void 0:r.value;return o.string(a===void 0?e.value.slice(s):e.value.slice(s,a))}).withMeta([...g({doc:wt(["Returns the substring of s beginning at start, and optionally ending before end."]),arglists:[["s","start"],["s","start","end"]],docGroup:v.strings})]),type:o.nativeFn("type",function(e){if(e===void 0)throw new f("type expects an argument",{x:e});if(e.kind==="record")return o.keyword(`:${e.ns}/${e.recordType}`);const r={number:":number",string:":string",boolean:":boolean",nil:":nil",keyword:":keyword",symbol:":symbol",char:":char",list:":list",vector:":vector",map:":map",set:":set",function:":function","native-function":":function",macro:":macro","multi-method":":multimethod",regex:":regex",var:":var",delay:":delay","lazy-seq":":lazy-seq",cons:":cons",atom:":atom",namespace:":namespace",protocol:":protocol",pending:":pending","js-value":":js-value"}[e.kind];if(!r)throw new f(`type: unhandled kind ${e.kind}`,{x:e});return o.keyword(r)}).withMeta([...g({doc:"Returns a keyword representing the type of a value. Records return :ns/RecordType; built-ins return :string, :number, :nil, etc.",arglists:[["x"]],docGroup:v.introspection})]),gensym:o.nativeFn("gensym",function(...e){if(e.length>1)throw new f("gensym takes 0 or 1 arguments",{args:e});const n=e[0];if(n!==void 0&&n.kind!=="string")throw f.atArg(`gensym prefix must be a string${n!==void 0?`, got ${x(n)}`:""}`,{prefix:n},0);const r=(n==null?void 0:n.kind)==="string"?n.value:"G";return o.symbol(ws(r))}).doc('Returns a unique symbol with the given prefix. Defaults to "G" if no prefix is provided.',[[],["prefix"]]).withMeta([...g({doc:'Returns a unique symbol with the given prefix. Defaults to "G" if no prefix is provided.',arglists:[[],["prefix"]],docGroup:v.runtime})]),eval:o.nativeFnCtx("eval",function(e,n,r){if(r===void 0)throw new f("eval expects a form as argument",{form:r});const s=e.expandAll(r,n);return e.evaluate(s,n)}).withMeta([...g({doc:"Evaluates the given form in the global environment and returns the result.",arglists:[["form"]],docGroup:v.runtime})]),"macroexpand-1":o.nativeFnCtx("macroexpand-1",function(e,n,r){if(!u.list(r)||r.value.length===0)return r;const s=r.value[0];if(!u.symbol(s))return r;const a=xr(s.name,n,e);return a===void 0||!u.macro(a)?r:e.applyMacro(a,r.value.slice(1))}).withMeta([...g({doc:"If the head of the form is a macro, expands it and returns the resulting forms. Otherwise, returns the form unchanged.",arglists:[["form"]],docGroup:v.runtime})]),macroexpand:o.nativeFnCtx("macroexpand",function(e,n,r){let s=r;for(;;){if(!u.list(s)||s.value.length===0)return s;const a=s.value[0];if(!u.symbol(a))return s;const i=xr(a.name,n,e);if(i===void 0||!u.macro(i))return s;s=e.applyMacro(i,s.value.slice(1))}}).withMeta([...g({doc:wt(["Expands all macros until the expansion is stable (head is no longer a macro)","","Note neither macroexpand-1 nor macroexpand will expand macros in sub-forms"]),arglists:[["form"]],docGroup:v.runtime})]),"macroexpand-all":o.nativeFnCtx("macroexpand-all",function(e,n,r){return e.expandAll(r,n)}).withMeta([...g({doc:wt(["Fully expands all macros in a form recursively — including in sub-forms.","","Unlike macroexpand, this descends into every sub-expression.","Expansion stops at quote/quasiquote boundaries and fn/loop bodies."]),arglists:[["form"]],docGroup:v.runtime})]),namespace:o.nativeFn("namespace",function(e){if(e===void 0)throw f.atArg("namespace expects an argument",{x:e},0);let n;if(u.keyword(e))n=e.name.slice(1);else if(u.symbol(e))n=e.name;else throw f.atArg(`namespace expects a keyword or symbol, got ${x(e)}`,{x:e},0);const r=n.indexOf("/");return r<=0?o.nil():o.string(n.slice(0,r))}).withMeta([...g({doc:"Returns the namespace string of a qualified keyword or symbol, or nil if the argument is not qualified.",arglists:[["x"]],docGroup:v.introspection})]),name:o.nativeFn("name",function(e){if(e===void 0)throw f.atArg("name expects an argument",{x:e},0);let n;if(u.keyword(e))n=e.name.slice(1);else if(u.symbol(e))n=e.name;else{if(e.kind==="string")return e;throw f.atArg(`name expects a keyword, symbol, or string, got ${x(e)}`,{x:e},0)}const r=n.indexOf("/");return o.string(r>=0?n.slice(r+1):n)}).withMeta([...g({doc:"Returns the local name of a qualified keyword or symbol, or the string value if the argument is a string.",arglists:[["x"]],docGroup:v.introspection})]),keyword:o.nativeFn("keyword",function(...e){if(e.length===0||e.length>2)throw new f("keyword expects 1 or 2 string arguments",{args:e});if(e[0].kind!=="string")throw f.atArg(`keyword expects a string, got ${x(e[0])}`,{args:e},0);if(e.length===1)return o.keyword(`:${e[0].value}`);if(e[1].kind!=="string")throw f.atArg(`keyword second argument must be a string, got ${x(e[1])}`,{args:e},1);return o.keyword(`:${e[0].value}/${e[1].value}`)}).withMeta([...g({doc:wt(["Constructs a keyword with the given name and namespace strings. Returns a keyword value.","","Note: do not use : in the keyword strings, it will be added automatically.",'e.g. (keyword "foo") => :foo']),arglists:[["name"],["ns","name"]],docGroup:v.strings})]),boolean:o.nativeFn("boolean",function(e){return e===void 0?o.boolean(!1):o.boolean(u.truthy(e))}).withMeta([...g({doc:"Coerces to boolean. Everything is true except false and nil.",arglists:[["x"]],docGroup:v.utilities})]),"clojure-version":o.nativeFn("clojure-version",function(){return o.string("1.12.0")}).withMeta([...g({doc:"Returns a string describing the current Clojure version.",arglists:[[]],docGroup:v.utilities})]),"pr-str":o.nativeFnCtx("pr-str",function(e,n,...r){return Ne(Ee(e),()=>o.string(r.map(x).join(" ")))}).withMeta([...g({doc:"Returns a readable string representation of the given values (strings are quoted).",arglists:[["&","args"]],docGroup:v.strings})]),"pretty-print-str":o.nativeFnCtx("pretty-print-str",function(e,n,...r){if(r.length===0)return o.string("");const s=r[0],a=r[1],i=a!==void 0&&a.kind==="number"?a.value:80;return Ne(Ee(e),()=>o.string(us(s,i)))}).withMeta([...g({doc:"Returns a pretty-printed string representation of form.",arglists:[["form"],["form","max-width"]],docGroup:v.strings})]),"read-string":o.nativeFn("read-string",function(e){if(e===void 0||e.kind!=="string")throw f.atArg(`read-string expects a string${e!==void 0?`, got ${x(e)}`:""}`,{s:e},0);const n=Mt(e.value),r=sn(n,void 0,void 0,e.value);return r.length===0?o.nil():r[0]}).withMeta([...g({doc:"Reads one object from the string s. Returns nil if string is empty.",arglists:[["s"]],docGroup:v.strings})]),"prn-str":o.nativeFnCtx("prn-str",function(e,n,...r){return Ne(Ee(e),()=>o.string(r.map(x).join(" ")+`
`))}).withMeta([...g({doc:"pr-str to a string, followed by a newline.",arglists:[["&","args"]],docGroup:v.strings})]),"print-str":o.nativeFnCtx("print-str",function(e,n,...r){return Ne(Ee(e),()=>o.string(r.map(te).join(" ")))}).withMeta([...g({doc:"print to a string (human-readable, no quotes on strings).",arglists:[["&","args"]],docGroup:v.strings})]),"println-str":o.nativeFn("println-str",function(...e){return o.string(e.map(te).join(" ")+`
`)}).withMeta([...g({doc:"println to a string.",arglists:[["&","args"]],docGroup:v.strings})]),symbol:o.nativeFn("symbol",function(...e){if(e.length===0||e.length>2)throw new f("symbol expects 1 or 2 string arguments",{args:e});if(e.length===1){if(u.symbol(e[0]))return e[0];if(e[0].kind!=="string")throw f.atArg(`symbol expects a string, got ${x(e[0])}`,{args:e},0);return o.symbol(e[0].value)}if(e[0].kind!=="string"||e[1].kind!=="string")throw new f("symbol expects string arguments",{args:e});return o.symbol(`${e[0].value}/${e[1].value}`)}).withMeta([...g({doc:"Returns a Symbol with the given namespace and name.",arglists:[["name"],["ns","name"]],docGroup:v.runtime})]),"parse-long":o.nativeFn("parse-long",function(e){if(e===void 0||e.kind!=="string")throw f.atArg(`parse-long expects a string${e!==void 0?`, got ${x(e)}`:""}`,{s:e},0);if(!/^[+-]?\d+$/.test(e.value))return o.nil();const n=Number.parseInt(e.value,10);return Number.isFinite(n)?o.number(n):o.nil()}).withMeta([...g({doc:"Parses string s as a long integer. Returns nil if s is not a valid integer string.",arglists:[["s"]],docGroup:v.utilities})]),"parse-double":o.nativeFn("parse-double",function(e){if(e===void 0||e.kind!=="string")throw f.atArg(`parse-double expects a string${e!==void 0?`, got ${x(e)}`:""}`,{s:e},0);const n=e.value.trim();if(n==="")return o.nil();const r=Number(n);return Number.isNaN(r)&&n!=="NaN"?o.nil():o.number(r)}).withMeta([...g({doc:"Parses string s as a double. Returns nil if s is not a valid number string.",arglists:[["s"]],docGroup:v.utilities})]),"parse-boolean":o.nativeFn("parse-boolean",function(e){if(e===void 0||e.kind!=="string")throw f.atArg(`parse-boolean expects a string${e!==void 0?`, got ${x(e)}`:""}`,{s:e},0);return e.value==="true"?o.boolean(!0):e.value==="false"?o.boolean(!1):o.nil()}).withMeta([...g({doc:'Parses string s as a boolean. Returns true for "true", false for "false", nil for anything else.',arglists:[["s"]],docGroup:v.utilities})])},Em={force:o.nativeFn("force",function(e){return u.delay(e)?ms(e):u.lazySeq(e)?Se(e):e}).withMeta([...g({doc:"If x is a Delay or LazySeq, forces and returns the realized value. Otherwise returns x.",arglists:[["x"]],docGroup:v.lazy})]),"delay?":o.nativeFn("delay?",function(e){return o.boolean(u.delay(e))}).withMeta([...g({doc:"Returns true if x is a Delay.",arglists:[["x"]],docGroup:v.lazy})]),"lazy-seq?":o.nativeFn("lazy-seq?",function(e){return o.boolean(u.lazySeq(e))}).withMeta([...g({doc:"Returns true if x is a LazySeq.",arglists:[["x"]],docGroup:v.lazy})]),"realized?":o.nativeFn("realized?",function(e){return u.delay(e)||u.lazySeq(e)?o.boolean(e.realized):o.boolean(!1)}).withMeta([...g({doc:"Returns true if a Delay or LazySeq has been realized.",arglists:[["x"]],docGroup:v.lazy})]),"make-delay":o.nativeFnCtx("make-delay",function(e,n,r){if(!u.aFunction(r))throw new f(`make-delay: argument must be a function, got ${r.kind}`,{fn:r});return o.delay(()=>e.applyCallable(r,[],n))}).withMeta([...g({doc:"Creates a Delay that invokes thunk-fn (a zero-arg function) on first force.",arglists:[["thunk-fn"]],docGroup:v.lazy})])},Lm={"var?":o.nativeFn("var?",function(e){return o.boolean(u.var(e))}).withMeta([...g({doc:"Returns true if x is a Var.",arglists:[["x"]],docGroup:v.predicates})]),"var-get":o.nativeFn("var-get",function(e){if(!u.var(e))throw new f(`var-get expects a Var, got ${e.kind}`,{x:e});return e.value}).withMeta([...g({doc:"Returns the value in the Var object.",arglists:[["x"]],docGroup:v.vars})]),"alter-var-root":o.nativeFnCtx("alter-var-root",function(e,n,r,s,...a){if(!u.var(r))throw new f(`alter-var-root expects a Var as its first argument, got ${r.kind}`,{varVal:r});if(!u.aFunction(s))throw new f(`alter-var-root expects a function as its second argument, got ${s.kind}`,{f:s});const i=e.applyFunction(s,[r.value,...a],n);return r.value=i,i}).withMeta([...g({doc:"Atomically alters the root binding of var v by applying f to its current value plus any additional args.",arglists:[["v","f","&","args"]],docGroup:v.vars})])};function Tm(t){return o.nativeFn(`kw:${t.name}`,(...e)=>{const n=e[0];if(!u.map(n))return o.nil();const r=n.entries.find(([s])=>u.equal(s,t));return r?r[1]:o.nil()})}const Gm={"multimethod?":o.nativeFn("multimethod?",function(e){return o.boolean(u.multiMethod(e))}).withMeta([...g({doc:"Returns true if x is a multimethod.",arglists:[["x"]],docGroup:v.predicates})]),"make-multimethod!":o.nativeFnCtx("make-multimethod!",function(e,n,r,s,...a){if(!u.string(r))throw new f(`make-multimethod!: first argument must be a string, got ${r.kind}`,{nameVal:r});const i=r.value,c=pe(n),l=c.ns.vars.get(i);if(l&&u.multiMethod(l.value))return o.nil();let d;if(u.keyword(s))d=Tm(s);else if(u.aFunction(s))d=s;else throw new f(`make-multimethod!: dispatch-fn must be a function or keyword, got ${s.kind}`,{dispatchFnVal:s});let m;for(let h=0;h+1<a.length;h+=2)u.keyword(a[h])&&a[h].name===":default"&&(m=a[h+1]);const p=o.multiMethod(i,d,[],void 0,m);return Y(i,p,c),o.nil()}).withMeta([...g({doc:"Creates a multimethod with the given name and dispatch-fn in the current namespace. Accepts optional :default <sentinel-val> to customize the fallback sentinel. No-op if already a multimethod (re-eval safe).",arglists:[["name","dispatch-fn","& opts"]],docGroup:v.multimethods,extra:{"no-doc":!0}})]),"add-method!":o.nativeFnCtx("add-method!",function(e,n,r,s,a){if(!u.var(r))throw new f(`add-method!: first argument must be a Var, got ${r.kind}`,{varVal:r});if(!u.multiMethod(r.value))throw new f(`add-method!: ${r.name} is not a multimethod`,{varVal:r});if(!u.aFunction(a))throw new f(`add-method!: method must be a function, got ${a.kind}`,{methodFn:a});const i=r.value,c=i.defaultDispatchVal??o.keyword(":default"),l=u.equal(s,c);let d;if(l)d=o.multiMethod(i.name,i.dispatchFn,i.methods,a,i.defaultDispatchVal);else{const m=i.methods.filter(p=>!u.equal(p.dispatchVal,s));d=o.multiMethod(i.name,i.dispatchFn,[...m,{dispatchVal:s,fn:a}],i.defaultMethod,i.defaultDispatchVal)}return r.value=d,o.nil()}).withMeta([...g({doc:"Adds or replaces a method on a multimethod var. Uses :default as the fallback dispatch value.",arglists:[["mm-var","dispatch-val","fn"]],docGroup:v.multimethods,extra:{"no-doc":!0}})])};function Yt(t){return u.record(t)?`${t.ns}/${t.recordType}`:t.kind}function*Pn(t){for(const e of t.allNamespaces())for(const n of e.vars.values())u.protocol(n.value)&&(yield n.value)}const Om={"make-protocol!":o.nativeFnCtx("make-protocol!",function(e,n,r,s,a){if(!u.string(r))throw new f(`make-protocol!: name must be a string, got ${r.kind}`,{nameVal:r});if(!u.vector(a))throw new f(`make-protocol!: method-defs must be a vector, got ${a.kind}`,{methodDefsVal:a});const i=r.value,c=u.string(s)?s.value:void 0,l=[];for(const y of a.value){if(!u.vector(y))continue;const[w,$,S]=y.value;if(!u.string(w))continue;const P=[];if(u.vector($))for(const L of $.value)u.vector(L)&&P.push(L.value.map(N=>u.string(N)?N.value:x(N)));l.push({name:w.value,arglists:P,doc:u.string(S)?S.value:void 0})}const d=pe(n),m=d.ns.name,p=d.ns.vars.get(i);if(p&&u.protocol(p.value))return o.nil();const h=o.protocol(i,m,l,c);Y(i,h,d);for(const y of l){const w=y.name,$={kind:"native-function",name:w,fn:()=>{throw new f(`Protocol dispatch function '${w}' called without context`,{})},fnWithContext:(P,L,...N)=>{if(N.length===0)throw new f(`Protocol method '${w}' called with no arguments`,{});const H=N[0],R=Yt(H),z=h.impls.get(R);if(!z||!z[w])throw new f(`No implementation of protocol method '${m}/${i}/${w}' for type '${R}'`,{target:H,tag:R,protocolName:i,methodName:w});return P.applyFunction(z[w],N,L)},meta:o.map([[o.kw(":protocol"),o.string(`${m}/${i}`)],[o.kw(":name"),o.string(w)]])},S=d.ns.vars.get(w);S&&!u.protocol(S.value)&&e.io.stderr(`WARNING: defprotocol '${i}' method '${w}' shadows existing var in ${m}`),Y(w,$,d)}return o.nil()}).withMeta([...g({doc:"Creates a protocol with the given name, docstring, and method definitions. Interns the protocol and its dispatch functions in the current namespace.",arglists:[["name","doc","method-defs"]],docGroup:v.protocols,extra:{"no-doc":!0}})]),"extend-protocol!":o.nativeFnCtx("extend-protocol!",function(e,n,r,s,a){let i;if(u.var(r)&&u.protocol(r.value))i=r.value;else if(u.protocol(r))i=r;else throw new f(`extend-protocol!: first argument must be a protocol var or protocol, got ${r.kind}`,{protoVal:r});if(!u.string(s))throw new f(`extend-protocol!: type-tag must be a string, got ${s.kind}`,{typeTagVal:s});if(!u.map(a))throw new f(`extend-protocol!: impl-map must be a map, got ${a.kind}`,{implMapVal:a});const c=s.value,l={};for(const[d,m]of a.entries)if(u.string(d)){if(!u.aFunction(m))throw new f(`extend-protocol!: implementation for '${d.value}' must be a function, got ${m.kind}`,{fnVal:m});l[d.value]=m}return i.impls.set(c,l),o.nil()}).withMeta([...g({doc:"Registers method implementations for type-tag on a protocol. Mutates the protocol in place.",arglists:[["proto-var","type-tag","impl-map"]],docGroup:v.protocols,extra:{"no-doc":!0}})]),"satisfies?":o.nativeFn("satisfies?",function(e,n){let r;if(u.var(e)&&u.protocol(e.value))r=e.value;else if(u.protocol(e))r=e;else throw new f(`satisfies?: first argument must be a protocol, got ${e.kind}`,{protoVal:e});if(n===void 0)throw new f("satisfies?: second argument is required",{});const s=Yt(n);return o.boolean(r.impls.has(s))}).withMeta([...g({doc:"Returns true if value implements the protocol.",arglists:[["protocol","value"]],docGroup:v.protocols})]),protocols:o.nativeFnCtx("protocols",function(e,n,r){if(r===void 0)throw new f("protocols: argument is required",{});const s=u.keyword(r)?r.name.slice(1):Yt(r),a=[];for(const i of Pn(e))i.impls.has(s)&&a.push(i);return o.vector(a)}).withMeta([...g({doc:"Returns a vector of all protocols that a type implements. Accepts a keyword type tag (:string, :user/Circle) or any value.",arglists:[["type-kw-or-value"]],docGroup:v.protocols})]),extenders:o.nativeFn("extenders",function(e){let n;if(u.var(e)&&u.protocol(e.value))n=e.value;else if(u.protocol(e))n=e;else throw new f(`extenders: argument must be a protocol, got ${e.kind}`,{protoVal:e});return o.vector([...n.impls.keys()].map(r=>o.keyword(`:${r}`)))}).withMeta([...g({doc:"Returns a vector of type-tag strings that have extended the protocol.",arglists:[["protocol"]],docGroup:v.protocols})]),"make-record!":o.nativeFn("make-record!",function(e,n,r){if(!u.string(e))throw new f(`make-record!: record-type must be a string, got ${e.kind}`,{recordTypeVal:e});if(!u.string(n))throw new f(`make-record!: ns-name must be a string, got ${n.kind}`,{nsNameVal:n});if(!u.map(r))throw new f(`make-record!: field-map must be a map, got ${r.kind}`,{fieldMapVal:r});return o.record(e.value,n.value,r.entries)}).withMeta([...g({doc:"Creates a record value. Called by generated constructors (->Name, map->Name).",arglists:[["record-type","ns-name","field-map"]],docGroup:v.protocols,extra:{"no-doc":!0}})]),"protocol?":o.nativeFn("protocol?",function(e){return o.boolean(u.protocol(e))}).withMeta([...g({doc:"Returns true if x is a protocol.",arglists:[["x"]],docGroup:v.predicates})]),"record?":o.nativeFn("record?",function(e){return o.boolean(u.record(e))}).withMeta([...g({doc:"Returns true if x is a record.",arglists:[["x"]],docGroup:v.predicates})]),"record-type":o.nativeFn("record-type",function(e){if(!u.record(e))throw new f(`record-type: expected a record, got ${e.kind}`,{x:e});return o.string(`${e.ns}/${e.recordType}`)}).withMeta([...g({doc:"Returns the qualified type name (ns/Name) of a record.",arglists:[["record"]],docGroup:v.protocols,extra:{"no-doc":!0}})])},q={kind:o.autoKeyword("kind"),name:o.autoKeyword("name"),fn:o.autoKeyword("fn"),nativeFn:o.autoKeyword("native-fn"),arglists:o.autoKeyword("arglists"),doc:o.autoKeyword("doc"),protocol:o.autoKeyword("protocol"),protocols:o.autoKeyword("protocols"),fields:o.autoKeyword("fields"),protocolFn:o.autoKeyword("protocol-fn"),methods:o.autoKeyword("methods"),dispatchVals:o.autoKeyword("dispatch-vals"),default:o.autoKeyword("default?"),multiMethod:o.autoKeyword("multi-method"),macro:o.autoKeyword("macro"),ns:o.autoKeyword("ns"),extenders:o.autoKeyword("extenders"),record:o.autoKeyword("record"),type:o.autoKeyword("type"),namespace:o.autoKeyword("namespace"),varCount:o.autoKeyword("var-count"),var:o.autoKeyword("var"),vars:o.autoKeyword("vars"),showing:o.autoKeyword("showing"),dynamic:o.autoKeyword("dynamic"),value:o.autoKeyword("value"),string:o.autoKeyword("string"),count:o.autoKeyword("count"),number:o.autoKeyword("number"),boolean:o.autoKeyword("boolean"),nil:o.autoKeyword("nil"),keyword:o.autoKeyword("keyword"),symbol:o.autoKeyword("symbol"),list:o.autoKeyword("list"),vector:o.autoKeyword("vector"),map:o.autoKeyword("map"),set:o.autoKeyword("set"),atom:o.autoKeyword("atom"),lazySeq:o.autoKeyword("lazy-seq"),cons:o.autoKeyword("cons"),regex:o.autoKeyword("regex"),delay:o.autoKeyword("delay"),reduced:o.autoKeyword("reduced"),derefKind:o.autoKeyword("deref-kind"),realized:o.autoKeyword("realized"),pattern:o.autoKeyword("pattern"),flags:o.autoKeyword("flags")};function ar(t){return t.map(e=>{const n=e.params.map(r=>x(r));return e.restParam?[...n,"&",x(e.restParam)]:n})}function Os(t){return ar(t.arities)}function Ds(t){const e=t.meta;if(!e)return[];const n=e.entries.find(([s])=>u.keyword(s)&&s.name===":arglists");if(!n)return[];const r=n[1];return u.vector(r)?r.value.filter(u.vector).map(s=>s.value.map(a=>u.symbol(a)?a.name:x(a))):[]}function qt(t){if(!t)return o.nil();const e=t.entries.find(([n])=>u.keyword(n)&&n.name===":doc");return e?e[1]:o.nil()}function zs(t,e){if(!t)return o.nil();const n=t.entries.find(([r])=>u.keyword(r)&&r.name===e);return n?n[1]:o.nil()}function Vs(t){return t.meta!==void 0&&t.meta.entries.some(([e])=>u.keyword(e)&&e.name===":protocol")}function Dm(t){switch(t.kind){case"function":{const e=Os(t);return o.map([[q.kind,q.fn],...t.name?[[q.name,o.string(t.name)]]:[],[q.arglists,o.vector(e.map(n=>o.vector(n.map(o.string))))],[q.doc,qt(t.meta)]])}case"native-function":{if(Vs(t))return o.map([[q.kind,q.protocolFn],[q.name,o.string(t.name)],[q.protocol,zs(t.meta,":protocol")]]);const e=Ds(t);return o.map([[q.kind,q.nativeFn],[q.name,o.string(t.name)],[q.arglists,o.vector(e.map(n=>o.vector(n.map(o.string))))],[q.doc,qt(t.meta)]])}case"protocol":return o.map([[q.kind,q.protocol],[q.name,o.string(t.name)],[q.methods,o.vector(t.fns.map(e=>o.string(e.name)))]]);case"multi-method":return o.map([[q.kind,q.multiMethod],[q.name,o.string(t.name)],[q.dispatchVals,o.vector(t.methods.map(e=>e.dispatchVal))],[q.default,o.boolean(t.defaultMethod!==void 0)]]);case"macro":{const e=ar(t.arities);return o.map([[q.kind,q.macro],...t.name?[[q.name,o.string(t.name)]]:[],[q.arglists,o.vector(e.map(n=>o.vector(n.map(o.string))))],[q.doc,qt(t.meta)]])}default:return o.map([[q.kind,o.kw(`:${t.kind}`)]])}}function Nn(t,e,n){switch(e.kind){case"protocol":{const r=[...e.impls.keys()].map(a=>o.keyword(`:${a}`)),s=e.fns.map(a=>o.map([[q.name,o.string(a.name)],[q.arglists,o.vector(a.arglists.map(i=>o.vector(i.map(o.string))))],[q.doc,a.doc!==void 0?o.string(a.doc):o.nil()]]));return o.map([[q.kind,q.protocol],[q.name,o.string(e.name)],[q.ns,o.string(e.ns)],[q.doc,e.doc!==void 0?o.string(e.doc):o.nil()],[q.methods,o.vector(s)],[q.extenders,o.vector(r)]])}case"function":{const r=Os(e);return o.map([[q.kind,q.fn],[q.name,e.name!==void 0?o.string(e.name):o.nil()],[q.arglists,o.vector(r.map(s=>o.vector(s.map(o.string))))],[q.doc,qt(e.meta)]])}case"native-function":{if(Vs(e)){const s=zs(e.meta,":protocol"),a=[];if(u.string(s)){for(const i of Pn(t))if(`${i.ns}/${i.name}`===s.value){const c=i.fns.find(l=>l.name===e.name);c&&a.push(...c.arglists);break}}return o.map([[q.kind,q.protocolFn],[q.name,o.string(e.name)],[q.protocol,s],[q.arglists,o.vector(a.map(i=>o.vector(i.map(o.string))))]])}const r=Ds(e);return o.map([[q.kind,q.nativeFn],[q.name,o.string(e.name)],[q.arglists,o.vector(r.map(s=>o.vector(s.map(o.string))))],[q.doc,qt(e.meta)]])}case"multi-method":return o.map([[q.kind,q.multiMethod],[q.name,o.string(e.name)],[q.dispatchVals,o.vector(e.methods.map(r=>r.dispatchVal))],[q.default,o.boolean(e.defaultMethod!==void 0)]]);case"record":{const r=Yt(e),s=[];for(const a of Pn(t))a.impls.has(r)&&s.push(o.keyword(`:${a.ns}/${a.name}`));return o.map([[q.kind,q.record],[q.type,o.keyword(`:${e.ns}/${e.recordType}`)],[q.ns,o.string(e.ns)],[q.name,o.string(e.recordType)],[q.fields,o.map(e.fields)],[q.protocols,o.vector(s)]])}case"namespace":{const r=[...e.vars.entries()],s=r.length,a=n!==null&&s>n,c=(a?r.slice(0,n):r).map(([l,d])=>[o.string(l),Dm(d.value)]);return o.map([[q.kind,q.namespace],[q.name,o.string(e.name)],[q.doc,e.doc!==void 0?o.string(e.doc):o.nil()],[q.varCount,o.number(s)],...a?[[q.showing,o.number(n)]]:[],[q.vars,o.map(c)]])}case"var":return o.map([[q.kind,q.var],[q.ns,o.string(e.ns)],[q.name,o.string(e.name)],[q.dynamic,o.boolean(e.dynamic??!1)],[q.value,Nn(t,e.value,null)]]);case"string":return o.map([[q.kind,q.string],[q.value,e],[q.count,o.number(e.value.length)]]);case"number":return o.map([[q.kind,q.number],[q.value,e]]);case"boolean":return o.map([[q.kind,q.boolean],[q.value,e]]);case"nil":return o.map([[q.kind,q.nil]]);case"keyword":{const r=e.name.slice(1),s=r.indexOf("/");return o.map([[q.kind,q.keyword],[q.name,o.string(s>=0?r.slice(s+1):r)],[q.ns,s>=0?o.string(r.slice(0,s)):o.nil()]])}case"symbol":{const r=e.name,s=r.indexOf("/");return o.map([[q.kind,q.symbol],[q.name,o.string(s>=0?r.slice(s+1):r)],[q.ns,s>=0?o.string(r.slice(0,s)):o.nil()]])}case"list":return o.map([[q.kind,q.list],[q.count,o.number(e.value.length)]]);case"vector":return o.map([[q.kind,q.vector],[q.count,o.number(e.value.length)]]);case"map":return o.map([[q.kind,q.map],[q.count,o.number(e.entries.length)]]);case"set":return o.map([[q.kind,q.set],[q.count,o.number(e.values.length)]]);case"atom":return o.map([[q.kind,q.atom],[q.derefKind,o.kw(`:${e.value.kind}`)],[q.value,Nn(t,e.value,null)]]);case"lazy-seq":return o.map([[q.kind,q.lazySeq],[q.realized,o.boolean(e.realized)]]);case"cons":return o.map([[q.kind,q.cons]]);case"regex":return o.map([[q.kind,q.regex],[q.pattern,o.string(e.pattern)],[q.flags,o.string(e.flags)]]);case"delay":return o.map([[q.kind,q.delay],[q.realized,o.boolean(e.realized)]]);case"macro":{const r=ar(e.arities);return o.map([[q.kind,q.macro],...e.name?[[q.name,o.string(e.name)]]:[],[q.arglists,o.vector(r.map(s=>o.vector(s.map(o.string))))],[q.doc,qt(e.meta)]])}default:return o.map([[q.kind,o.kw(`:${e.kind}`)]])}}const zm={"describe*":o.nativeFnCtx("describe*",function(e,n,r,s){if(r===void 0)throw new f("describe*: argument is required",{});const a=s!==void 0&&u.number(s)?s.value:null;return Nn(e,r,a)}).withMeta([...g({doc:"Returns a plain map describing any cljam value. Called by describe — prefer using describe directly.",arglists:[["value"],["value","limit"]],docGroup:v.introspection,extra:{"no-doc":!0}})])};function tt(t,e){const n=o.kw(e),r=t.entries.find(([s])=>u.equal(s,n));return r&&u.map(r[1])?r[1]:o.map([])}function Me(t,e){const n=t.entries.find(([r])=>u.equal(r,e));return n&&u.set(n[1])?n[1]:o.set([])}function Xt(t,e,n){const r=t.entries.filter(([s])=>!u.equal(s,e));return n.values.length>0&&r.push([e,n]),o.map(r)}function Ht(t,e){const n=[...t.values];for(const r of e.values)n.some(s=>u.equal(s,r))||n.push(r);return o.set(n)}function Bs(t,e){return t.values.some(n=>u.equal(n,e))}function Vm(t,e){const n=[],r=[...Me(t,e).values];for(;r.length>0;){const s=r.shift();if(!n.some(a=>u.equal(a,s))){n.push(s);for(const a of Me(t,s).values)n.some(i=>u.equal(i,a))||r.push(a)}}return o.set(n)}function Bm(t){const e=[];for(const[i,c]of t.entries)if(e.some(l=>u.equal(l,i))||e.push(i),u.set(c))for(const l of c.values)e.some(d=>u.equal(d,l))||e.push(l);const n=[];for(const i of e){const c=Vm(t,i);c.values.length>0&&n.push([i,c])}const r=o.map(n),s=new Map;for(const[i,c]of n)if(u.set(c))for(const l of c.values){const d=x(l);s.has(d)||s.set(d,{key:l,values:[]}),s.get(d).values.push(i)}const a=o.map([...s.values()].map(({key:i,values:c})=>[i,o.set(c)]));return o.map([[o.kw(":parents"),t],[o.kw(":ancestors"),r],[o.kw(":descendants"),a]])}function $r(t,e,n){if(u.equal(e,n))throw new f(`derive: cannot derive ${x(e)} from itself`,{child:e});const r=tt(t,":ancestors"),s=Me(r,n);if(Bs(s,e))throw new f(`derive: cycle — ${x(e)} is already an ancestor of ${x(n)}`,{child:e,parent:n});const a=Ht(o.set([n]),s),i=tt(t,":descendants"),c=Me(i,e),l=[e,...c.values];let d=r;for(const S of l){const P=Me(d,S);d=Xt(d,S,Ht(P,a))}const m=o.set(l),p=[n,...s.values];let h=i;for(const S of p){const P=Me(h,S);h=Xt(h,S,Ht(P,m))}const y=tt(t,":parents"),w=Me(y,e),$=Xt(y,e,Ht(w,o.set([n])));return o.map([[o.kw(":parents"),$],[o.kw(":ancestors"),d],[o.kw(":descendants"),h]])}function Mr(t,e,n){if(u.equal(e,n))return!0;const r=tt(t,":ancestors");return Bs(Me(r,e),n)}function qr(t,e,n){const r=tt(t,":parents"),s=Me(r,e),a=o.set(s.values.filter(c=>!u.equal(c,n))),i=Xt(r,e,a);return Bm(i)}function ht(t){const e=t.allNamespaces().find(n=>n.name==="clojure.core");return e?e.vars.get("*hierarchy*")??null:null}function gt(t){const e=t.dynamic&&t.bindingStack&&t.bindingStack.length>0?t.bindingStack[t.bindingStack.length-1]:t.value;return u.map(e)?e:null}const Be={"no-doc":!0},Hm={"hierarchy-derive*":o.nativeFn("hierarchy-derive*",function(e,n,r){if(!u.map(e))throw new f(`hierarchy-derive*: expected a hierarchy map, got ${e.kind}`,{h:e});return $r(e,n,r)}).withMeta([...g({doc:"Pure derive: returns a new hierarchy with child deriving from parent.",arglists:[["h","child","parent"]],docGroup:v.hierarchy,extra:Be})]),"hierarchy-underive*":o.nativeFn("hierarchy-underive*",function(e,n,r){if(!u.map(e))throw new f(`hierarchy-underive*: expected a hierarchy map, got ${e.kind}`,{h:e});return qr(e,n,r)}).withMeta([...g({doc:"Pure underive: returns a new hierarchy with the child→parent edge removed.",arglists:[["h","child","parent"]],docGroup:v.hierarchy,extra:Be})]),"hierarchy-isa?*":o.nativeFn("hierarchy-isa?*",function(e,n,r){if(!u.map(e))throw new f(`hierarchy-isa?*: expected a hierarchy map, got ${e.kind}`,{h:e});return o.boolean(Mr(e,n,r))}).withMeta([...g({doc:"Pure isa? check: returns true if child isa? parent according to the given hierarchy.",arglists:[["h","child","parent"]],docGroup:v.hierarchy,extra:Be})]),"hierarchy-derive-global!":o.nativeFnCtx("hierarchy-derive-global!",function(e,n,r,s){const a=ht(e);if(!a)throw new f("hierarchy-derive-global!: *hierarchy* not found in clojure.core",{child:r,parent:s});const i=gt(a);if(!i)throw new f("hierarchy-derive-global!: *hierarchy* root value is not a map",{child:r,parent:s});const c=$r(i,r,s);return a.value=c,c}).withMeta([...g({doc:"Derives child from parent in the global *hierarchy* (session-safe).",arglists:[["child","parent"]],docGroup:v.hierarchy,extra:Be})]),"hierarchy-underive-global!":o.nativeFnCtx("hierarchy-underive-global!",function(e,n,r,s){const a=ht(e);if(!a)throw new f("hierarchy-underive-global!: *hierarchy* not found in clojure.core",{child:r,parent:s});const i=gt(a);if(!i)throw new f("hierarchy-underive-global!: *hierarchy* root value is not a map",{child:r,parent:s});const c=qr(i,r,s);return a.value=c,c}).withMeta([...g({doc:"Underives child from parent in the global *hierarchy* (session-safe).",arglists:[["child","parent"]],docGroup:v.hierarchy,extra:Be})]),"hierarchy-isa?-global":o.nativeFnCtx("hierarchy-isa?-global",function(e,n,r,s){const a=ht(e);if(!a)return o.boolean(u.equal(r,s));const i=gt(a);return i?o.boolean(Mr(i,r,s)):o.boolean(u.equal(r,s))}).withMeta([...g({doc:"Returns true if child isa? parent in the global *hierarchy* (session-safe).",arglists:[["child","parent"]],docGroup:v.hierarchy,extra:Be})]),"hierarchy-parents-global":o.nativeFnCtx("hierarchy-parents-global",function(e,n,r){const s=ht(e);if(!s)return o.nil();const a=gt(s);if(!a)return o.nil();const i=Me(tt(a,":parents"),r);return i.values.length>0?i:o.nil()}).withMeta([...g({doc:"Returns the immediate parents of tag in the global *hierarchy* (session-safe), or nil.",arglists:[["tag"]],docGroup:v.hierarchy,extra:Be})]),"hierarchy-ancestors-global":o.nativeFnCtx("hierarchy-ancestors-global",function(e,n,r){const s=ht(e);if(!s)return o.nil();const a=gt(s);if(!a)return o.nil();const i=Me(tt(a,":ancestors"),r);return i.values.length>0?i:o.nil()}).withMeta([...g({doc:"Returns all ancestors of tag in the global *hierarchy* (session-safe), or nil.",arglists:[["tag"]],docGroup:v.hierarchy,extra:Be})]),"hierarchy-descendants-global":o.nativeFnCtx("hierarchy-descendants-global",function(e,n,r){const s=ht(e);if(!s)return o.nil();const a=gt(s);if(!a)return o.nil();const i=Me(tt(a,":descendants"),r);return i.values.length>0?i:o.nil()}).withMeta([...g({doc:"Returns all descendants of tag in the global *hierarchy* (session-safe), or nil.",arglists:[["tag"]],docGroup:v.hierarchy,extra:Be})])};function Um(t){if(t.kind!=="string")throw new f(`#inst requires a string, got ${t.kind}`,{form:t});const e=new Date(t.value);if(isNaN(e.getTime()))throw new f(`#inst: invalid date string "${t.value}"`,{form:t});return o.jsValue(e)}function Km(t){if(t.kind!=="string")throw new f(`#uuid requires a string, got ${t.kind}`,{form:t});return t}const Wm=new Map([["inst",Um],["uuid",Km]]);function Jm(t,e,n){const r=new Map(Wm),s=_t("*data-readers*",e);if(s){const i=_e(s);i.kind==="map"&&Sr(i,r,n,e)}let a;if(t&&t.kind==="map"){const i=t.entries.find(([l])=>l.kind==="keyword"&&l.name===":readers");if(i){const l=i[1];l.kind==="map"&&Sr(l,r,n,e)}const c=t.entries.find(([l])=>l.kind==="keyword"&&l.name===":default");if(c){const l=c[1];if(l.kind==="function"||l.kind==="native-function"){const d=l;a=(m,p)=>n.applyCallable(d,[o.string(m),p],e)}}}return{readers:r,defaultFn:a}}function Sr(t,e,n,r){for(const[s,a]of t.entries)if((s.kind==="symbol"||s.kind==="keyword")&&(a.kind==="function"||a.kind==="native-function"||a.kind==="multi-method")){const i=s.kind==="symbol"?s.name:s.name.slice(1),c=a;e.set(i,l=>n.applyCallable(c,[l],r))}}const Qm={"edn-read-string*":o.nativeFnCtx("edn-read-string*",(t,e,...n)=>{if(n.length===0||n.length>2)throw new f(`edn-read-string* expects 1 or 2 arguments, got ${n.length}`,{});let r=null,s;if(n.length===1?s=n[0]:(r=n[0],s=n[1]),s.kind!=="string")throw new f(`edn-read-string*: expected string, got ${x(s)}`,{sourceArg:s});const{readers:a,defaultFn:i}=Jm(r,e,t),c=Mt(s.value),l=um(c,{dataReaders:a,defaultDataReader:i},s.value);if(l.length===0)throw new f("edn-read-string*: empty input",{});return l[0]}).withMeta([...g({doc:"Reads one EDN value from string s and returns it.",arglists:[["s"]],docGroup:v.edn,extra:{"no-doc":!0}})]),"edn-pr-str*":o.nativeFn("edn-pr-str*",(...t)=>{if(t.length!==1)throw new f(`edn-pr-str* expects 1 argument, got ${t.length}`,{});return o.string(x(t[0]))}).withMeta([...g({doc:"Returns a string representation of val in EDN format.",arglists:[["val"]],docGroup:v.edn,extra:{"no-doc":!0}})])},Ym={"*data-readers*":o.map([])};function ne(t,e){if(t===void 0||t.kind!=="number")throw new f(`${e} expects a number${t!==void 0?`, got ${x(t)}`:""}`,{val:t});return t.value}function Nt(t,e,n){return[ne(t,n),ne(e,n)]}function Xm(t){const e=Math.floor(t);return t-e===.5?e%2===0?e:e+1:Math.round(t)}const ee={"no-doc":!0},Zm={"floor*":o.nativeFn("math-floor*",function(e){return o.number(Math.floor(ne(e,"floor")))}).withMeta([...g({doc:"Returns the largest integer ≤ x.",arglists:[["x"]],docGroup:v.arithmetic,extra:ee})]),"ceil*":o.nativeFn("math-ceil*",function(e){return o.number(Math.ceil(ne(e,"ceil")))}).withMeta([...g({doc:"Returns the smallest integer ≥ x.",arglists:[["x"]],docGroup:v.arithmetic,extra:ee})]),"round*":o.nativeFn("math-round*",function(e){return o.number(Math.round(ne(e,"round")))}).withMeta([...g({doc:"Returns the closest integer to x, with ties rounding up.",arglists:[["x"]],docGroup:v.arithmetic,extra:ee})]),"rint*":o.nativeFn("math-rint*",function(e){return o.number(Xm(ne(e,"rint")))}).withMeta([...g({doc:"Returns the integer closest to x, with ties rounding to the nearest even (IEEE 754 round-half-to-even).",arglists:[["x"]],docGroup:v.arithmetic,extra:ee})]),"pow*":o.nativeFn("math-pow*",function(e,n){const[r,s]=Nt(e,n,"pow");return o.number(Math.pow(r,s))}).withMeta([...g({doc:"Returns x raised to the power of y.",arglists:[["x","y"]],docGroup:v.arithmetic,extra:ee})]),"exp*":o.nativeFn("math-exp*",function(e){return o.number(Math.exp(ne(e,"exp")))}).withMeta([...g({doc:"Returns Euler's number e raised to the power of x.",arglists:[["x"]],docGroup:v.arithmetic,extra:ee})]),"log*":o.nativeFn("math-log*",function(e){return o.number(Math.log(ne(e,"log")))}).withMeta([...g({doc:"Returns the natural logarithm (base e) of x.",arglists:[["x"]],docGroup:v.arithmetic,extra:ee})]),"log10*":o.nativeFn("math-log10*",function(e){return o.number(Math.log10(ne(e,"log10")))}).withMeta([...g({doc:"Returns the base-10 logarithm of x.",arglists:[["x"]],docGroup:v.arithmetic,extra:ee})]),"cbrt*":o.nativeFn("math-cbrt*",function(e){return o.number(Math.cbrt(ne(e,"cbrt")))}).withMeta([...g({doc:"Returns the cube root of x.",arglists:[["x"]],docGroup:v.arithmetic,extra:ee})]),"hypot*":o.nativeFn("math-hypot*",function(e,n){const[r,s]=Nt(e,n,"hypot");return o.number(Math.hypot(r,s))}).withMeta([...g({doc:"Returns sqrt(x² + y²), the length of the hypotenuse.",arglists:[["x","y"]],docGroup:v.arithmetic,extra:ee})]),"sin*":o.nativeFn("math-sin*",function(e){return o.number(Math.sin(ne(e,"sin")))}).withMeta([...g({doc:"Returns the sine of x (in radians).",arglists:[["x"]],docGroup:v.arithmetic,extra:ee})]),"cos*":o.nativeFn("math-cos*",function(e){return o.number(Math.cos(ne(e,"cos")))}).withMeta([...g({doc:"Returns the cosine of x (in radians).",arglists:[["x"]],docGroup:v.arithmetic,extra:ee})]),"tan*":o.nativeFn("math-tan*",function(e){return o.number(Math.tan(ne(e,"tan")))}).withMeta([...g({doc:"Returns the tangent of x (in radians).",arglists:[["x"]],docGroup:v.arithmetic,extra:ee})]),"asin*":o.nativeFn("math-asin*",function(e){return o.number(Math.asin(ne(e,"asin")))}).withMeta([...g({doc:"Returns the arc sine of x, in radians.",arglists:[["x"]],docGroup:v.arithmetic,extra:ee})]),"acos*":o.nativeFn("math-acos*",function(e){return o.number(Math.acos(ne(e,"acos")))}).withMeta([...g({doc:"Returns the arc cosine of x, in radians.",arglists:[["x"]],docGroup:v.arithmetic,extra:ee})]),"atan*":o.nativeFn("math-atan*",function(e){return o.number(Math.atan(ne(e,"atan")))}).withMeta([...g({doc:"Returns the arc tangent of x, in radians.",arglists:[["x"]],docGroup:v.arithmetic,extra:ee})]),"atan2*":o.nativeFn("math-atan2*",function(e,n){const[r,s]=Nt(e,n,"atan2");return o.number(Math.atan2(r,s))}).withMeta([...g({doc:"Returns the angle θ from the conversion of rectangular (x, y) to polar (r, θ). Args: y, x.",arglists:[["y","x"]],docGroup:v.arithmetic,extra:ee})]),"sinh*":o.nativeFn("math-sinh*",function(e){return o.number(Math.sinh(ne(e,"sinh")))}).withMeta([...g({doc:"Returns the hyperbolic sine of x.",arglists:[["x"]],docGroup:v.arithmetic,extra:ee})]),"cosh*":o.nativeFn("math-cosh*",function(e){return o.number(Math.cosh(ne(e,"cosh")))}).withMeta([...g({doc:"Returns the hyperbolic cosine of x.",arglists:[["x"]],docGroup:v.arithmetic,extra:ee})]),"tanh*":o.nativeFn("math-tanh*",function(e){return o.number(Math.tanh(ne(e,"tanh")))}).withMeta([...g({doc:"Returns the hyperbolic tangent of x.",arglists:[["x"]],docGroup:v.arithmetic,extra:ee})]),"signum*":o.nativeFn("math-signum*",function(e){const n=ne(e,"signum");return n===0||Number.isNaN(n)?o.number(n):o.number(n>0?1:-1)}).withMeta([...g({doc:"Returns -1.0, 0.0, or 1.0 indicating the sign of x.",arglists:[["x"]],docGroup:v.arithmetic,extra:ee})]),"floor-div*":o.nativeFn("math-floor-div*",function(e,n){const[r,s]=Nt(e,n,"floor-div");if(s===0)throw new f("floor-div: division by zero",{x:e,y:n});return o.number(Math.floor(r/s))}).withMeta([...g({doc:"Returns the largest integer ≤ x/y (floor division).",arglists:[["x","y"]],docGroup:v.arithmetic,extra:ee})]),"floor-mod*":o.nativeFn("math-floor-mod*",function(e,n){const[r,s]=Nt(e,n,"floor-mod");if(s===0)throw new f("floor-mod: division by zero",{x:e,y:n});return o.number((r%s+s)%s)}).withMeta([...g({doc:"Returns x - (floor-div x y) * y (floor modulo).",arglists:[["x","y"]],docGroup:v.arithmetic,extra:ee})]),"to-radians*":o.nativeFn("math-to-radians*",function(e){return o.number(ne(e,"to-radians")*Math.PI/180)}).withMeta([...g({doc:"Converts an angle in degrees to radians.",arglists:[["deg"]],docGroup:v.arithmetic,extra:ee})]),"to-degrees*":o.nativeFn("math-to-degrees*",function(e){return o.number(ne(e,"to-degrees")*180/Math.PI)}).withMeta([...g({doc:"Converts an angle in radians to degrees.",arglists:[["rad"]],docGroup:v.arithmetic,extra:ee})])},ep={then:o.nativeFnCtx("then",(t,e,n,r)=>{if(typeof r>"u")throw new f("invalid signature: expected (then value f)",{fn:r,args:[]});if(!u.callable(r))throw new f(`${x(r)} is not a callable value`,{fn:r,args:[]});if(n.kind!=="pending")return t.applyCallable(r,[n],e);const s=n.promise.then(a=>{try{const i=t.applyCallable(r,[a],e);return i.kind==="pending"?i.promise:i}catch(i){return Promise.reject(i)}});return o.pending(s)}).withMeta([...g({doc:"Applies f to the resolved value of a pending, or to val directly if not pending.",arglists:[["val","f"]],docGroup:v.async})]),"catch*":o.nativeFnCtx("catch*",(t,e,n,r)=>{if(!u.callable(r))throw new f(`${x(r)} is not a callable value`,{fn:r,args:[]});if(n.kind!=="pending")return n;const s=n.promise.catch(a=>{let i;a instanceof Te?i=a.value:i={kind:"map",entries:[[{kind:"keyword",name:":type"},{kind:"keyword",name:":error/js"}],[{kind:"keyword",name:":message"},{kind:"string",value:a instanceof Error?a.message:String(a)}]]};try{const c=t.applyCallable(r,[i],e);return c.kind==="pending"?c.promise:c}catch(c){return Promise.reject(c)}});return o.pending(s)}).withMeta([...g({doc:"Handles rejection of a pending value by calling f with the thrown value or an error map.",arglists:[["val","f"]],docGroup:v.async})]),"pending?":o.nativeFn("pending?",t=>o.boolean(t.kind==="pending")).withMeta([...g({doc:"Returns true if val is a pending (async) value.",arglists:[["val"]],docGroup:v.async})]),"promise-of":o.nativeFn("promise-of",t=>o.pending(Promise.resolve(t))).withMeta([...g({doc:"Wraps val in an immediately-resolving pending value. Useful for testing async composition.",arglists:[["val"]],docGroup:v.async})]),all:o.nativeFn("all",t=>{const n=(t.kind==="nil"?[]:se(t)).map(r=>r.kind==="pending"?r.promise:Promise.resolve(r));return o.pending(Promise.all(n).then(r=>o.vector(r)))}).withMeta([...g({doc:"Returns a pending that resolves with a vector of all results when every input resolves.",arglists:[["pendings"]],docGroup:v.async})]),"make-promise":o.nativeFnCtx("make-promise",(t,e,n)=>{if(!u.callable(n))throw new f(`make-promise expects a callable executor, got ${n.kind}`,{fn:n,args:[]});const r=new Promise((s,a)=>{const i=o.nativeFn("resolve",l=>(s(l??o.nil()),o.nil())),c=o.nativeFn("reject",l=>(a(new Te(l)),o.nil()));try{t.applyCallable(n,[i,c],e)}catch(l){a(l)}});return o.pending(r)}).withMeta([...g({doc:"Creates a pending value from an executor fn (fn [resolve reject] ...). Like JS new Promise(executor).",arglists:[["executor"]],docGroup:v.async})])};function vt(t,e,n){var a;const r=(a=t.resolveNs("clojure.core"))==null?void 0:a.vars.get("*out*"),s=r?_e(r):void 0;s&&(s.kind==="function"||s.kind==="native-function")?t.applyCallable(s,[o.string(n)],e):t.io.stdout(n)}function tp(t,e,n){var a;const r=(a=t.resolveNs("clojure.core"))==null?void 0:a.vars.get("*err*"),s=r?_e(r):void 0;s&&(s.kind==="function"||s.kind==="native-function")?t.applyCallable(s,[o.string(n)],e):t.io.stderr(n)}const np={println:o.nativeFnCtx("println",(t,e,...n)=>(Ne(Ee(t),()=>{vt(t,e,n.map(te).join(" ")+`
`)}),o.nil())).withMeta([...g({doc:"Prints the arguments to the current output channel, followed by a newline.",arglists:[["&","args"]],docGroup:v.io})]),print:o.nativeFnCtx("print",(t,e,...n)=>(Ne(Ee(t),()=>{vt(t,e,n.map(te).join(" "))}),o.nil())).withMeta([...g({doc:"Prints the arguments to the current output channel.",arglists:[["&","args"]],docGroup:v.io})]),newline:o.nativeFnCtx("newline",(t,e)=>(vt(t,e,`
`),o.nil())).withMeta([...g({doc:"Prints a newline to the current output channel. Returns nil.",arglists:[[]],docGroup:v.io})]),pr:o.nativeFnCtx("pr",(t,e,...n)=>(Ne(Ee(t),()=>{vt(t,e,n.map(r=>x(r)).join(" "))}),o.nil())).withMeta([...g({doc:"Prints the arguments to the output stream that *out* is bound to. Returns nil.",arglists:[["&","args"]],docGroup:v.io})]),prn:o.nativeFnCtx("prn",(t,e,...n)=>(Ne(Ee(t),()=>{vt(t,e,n.map(r=>x(r)).join(" ")+`
`)}),o.nil())).withMeta([...g({doc:"Same as pr, but prints a newline after the arguments.",arglists:[["&","args"]],docGroup:v.io})]),pprint:o.nativeFnCtx("pprint",(t,e,n,r)=>{if(n===void 0)return o.nil();const s=(r==null?void 0:r.kind)==="number"?r.value:80;return Ne(Ee(t),()=>{vt(t,e,us(n,s)+`
`)}),o.nil()}).withMeta([...g({doc:"Pretty-prints the arguments to the current output channel.",arglists:[["form","max-width"],["form"]],docGroup:v.io})]),warn:o.nativeFnCtx("warn",(t,e,...n)=>(Ne(Ee(t),()=>{tp(t,e,n.map(te).join(" ")+`
`)}),o.nil())).withMeta([...g({doc:"Prints the arguments to the current error channel, followed by a newline.",arglists:[["&","args"]],docGroup:v.io})])},rp={"*out*":o.nil(),"*err*":o.nil(),"*print-length*":o.nil(),"*print-level*":o.nil(),"*compiler-options*":o.map([])},sp={...ym,...wm,...km,...xm,...bm,...$m,...Sm,...Mm,...qm,...Pm,..._m,...Cm,...Nm,...Lm,...Gm,...Om,...zm,...Hm,...Em,...np,...ep},op={...Zm},ap={...Qm},ip={...rp,...Ym};function lp(){return{id:"clojure/core",declareNs:[{name:"clojure.core",vars(t){const e=new Map;for(const[n,r]of Object.entries(sp)){const s=r.meta;e.set(n,{value:r,...s?{meta:s}:{}})}for(const[n,r]of Object.entries(ip))e.set(n,{value:r,dynamic:!0});return e}},{name:"clojure.math",vars(t){const e=new Map;for(const[n,r]of Object.entries(op)){const s=r.meta;e.set(n,{value:r,...s?{meta:s}:{}})}return e}},{name:"clojure.edn",vars(t){const e=new Map;for(const[n,r]of Object.entries(ap)){const s=r.meta;e.set(n,{value:r,...s?{meta:s}:{}})}return e}}]}}function yt(t,e){if(u.string(t))return t.value;if(u.keyword(t))return t.name.slice(1);if(u.number(t))return String(t.value);throw new f(`${e}: key must be a string, keyword, or number, got ${t.kind}`,{key:t})}function Xe(t,e){switch(t.kind){case k.jsValue:return t.value;case k.string:case k.number:case k.boolean:return t.value;case k.nil:throw new f(`${e}: cannot access properties on nil`,{val:t});default:throw new f(`${e}: expected a js-value or primitive, got ${t.kind}`,{val:t})}}const cp={"clj->js":o.nativeFnCtx("clj->js",(t,e,n)=>{if(u.jsValue(n))return n;const r={applyFunction:(s,a)=>t.applyCallable(s,a,e)};return o.jsValue(ct(n,r))}).withMeta([...g({doc:"Converts a Clojure value to a JavaScript value. Should be used sparingly at the boundaries of the program.",arglists:[["val"]],docGroup:v.interop})]),"js->clj":o.nativeFn("js->clj",(t,e)=>{if(t.kind==="nil")return t;if(!u.jsValue(t))throw new f(`js->clj expects a js-value, got ${t.kind}`,{val:t});const n=(()=>{if(!e||e.kind!=="map")return!1;for(const[r,s]of e.entries)if(r.kind==="keyword"&&r.name===":keywordize-keys")return s.kind!=="boolean"||s.value!==!1;return!1})();return $t(t.value,{keywordizeKeys:n})}).withMeta([...g({doc:"Converts a JavaScript value to a Clojure value. Should be used sparingly at the boundaries of the program. Unsupported types are boxed as js-value.",arglists:[["val"]],docGroup:v.interop})])},up={get:o.nativeFn("js/get",(t,e,...n)=>{const r=Xe(t,"js/get"),s=yt(e,"js/get"),a=r[s];return a===void 0&&n.length>0?n[0]:ie(a)}),"set!":o.nativeFnCtx("js/set!",(t,e,n,r,s)=>{const a=Xe(n,"js/set!"),i=yt(r,"js/set!");return a[i]=$e(s,t,e),s}),call:o.nativeFnCtx("js/call",(t,e,n,...r)=>{const s=n.kind==="js-value"?n.value:void 0;if(typeof s!="function")throw new f(`js/call: expected a js-value wrapping a function, got ${n.kind}`,{fn:n});const a=r.map(i=>$e(i,t,e));return ie(s(...a))}),typeof:o.nativeFn("js/typeof",t=>{switch(t.kind){case"nil":return o.string("object");case"number":return o.string("number");case"string":return o.string("string");case"boolean":return o.string("boolean");case"js-value":return o.string(typeof t.value);default:throw new f(`js/typeof: cannot determine JS type of Clojure ${t.kind}`,{x:t})}}),"instanceof?":o.nativeFn("js/instanceof?",(t,e)=>{if(t.kind!=="js-value")throw new f(`js/instanceof?: expected js-value, got ${t.kind}`,{obj:t});if(e.kind!=="js-value")throw new f(`js/instanceof?: expected js-value constructor, got ${e.kind}`,{cls:e});return o.boolean(t.value instanceof e.value)}),"array?":o.nativeFn("js/array?",t=>t.kind!=="js-value"?o.boolean(!1):o.boolean(Array.isArray(t.value))),"null?":o.nativeFn("js/null?",t=>o.boolean(t.kind==="nil")),"undefined?":o.nativeFn("js/undefined?",t=>o.boolean(t.kind==="js-value"&&t.value===void 0)),"some?":o.nativeFn("js/some?",t=>t.kind==="nil"||t.kind==="js-value"&&t.value===void 0?o.boolean(!1):o.boolean(!0)),"get-in":o.nativeFn("js/get-in",(t,e,...n)=>{if(e.kind!=="vector")throw new f(`js/get-in: path must be a vector, got ${e.kind}`,{path:e});if(t.kind==="nil")throw new f("js/get-in: cannot access properties on nil",{obj:t});const r=n.length>0?n[0]:o.jsValue(void 0);let s=t;for(const a of e.value){if(s.kind==="nil"||s.kind==="js-value"&&s.value===void 0)return r;const i=Xe(s,"js/get-in"),c=yt(a,"js/get-in");s=ie(i[c])}return s.kind==="js-value"&&s.value===void 0&&n.length>0?r:s}),prop:o.nativeFn("js/prop",(t,...e)=>{const n=e.length>0?e[0]:o.nil();return o.nativeFn("js/prop-accessor",r=>{const s=Xe(r,"js/prop"),a=yt(t,"js/prop"),i=s[a];return i===void 0?n:ie(i)})}),method:o.nativeFn("js/method",(t,...e)=>o.nativeFnCtx("js/method-caller",(n,r,s,...a)=>{const i=Xe(s,"js/method"),c=yt(t,"js/method"),l=i[c];if(typeof l!="function")throw new f(`js/method: property '${c}' is not callable`,{jsKey:c});const d=[...e,...a].map(m=>$e(m,n,r));return ie(l.apply(i,d))})),merge:o.nativeFnCtx("js/merge",(t,e,...n)=>{const r=Object.assign({},...n.map(s=>$e(s,t,e)));return o.jsValue(r)}),seq:o.nativeFn("js/seq",t=>{if(t.kind!=="js-value"||!Array.isArray(t.value))throw new f(`js/seq: expected a js-value wrapping an array, got ${t.kind}`,{arr:t});return o.vector(t.value.map(ie))}),array:o.nativeFnCtx("js/array",(t,e,...n)=>o.jsValue(n.map(r=>$e(r,t,e)))),obj:o.nativeFnCtx("js/obj",(t,e,...n)=>{if(n.length%2!==0)throw new f("js/obj: requires even number of arguments",{count:n.length});const r={};for(let s=0;s<n.length;s+=2){const a=yt(n[s],"js/obj");r[a]=$e(n[s+1],t,e)}return o.jsValue(r)}),keys:o.nativeFn("js/keys",t=>{const e=Xe(t,"js/keys");return o.vector(Object.keys(e).map(o.string))}),values:o.nativeFn("js/values",t=>{const e=Xe(t,"js/values");return o.vector(Object.values(e).map(ie))}),entries:o.nativeFn("js/entries",t=>{const e=Xe(t,"js/entries");return o.vector(Object.entries(e).map(([n,r])=>o.vector([o.string(n),ie(r)])))})};function dp(){return{id:"cljam/js-namespace",declareNs:[{name:"clojure.core",vars(t){const e=new Map;for(const[n,r]of Object.entries(cp))e.set(n,{value:r});return e}},{name:"js",vars(t){const e=new Map;for(const[n,r]of Object.entries(up))e.set(n,{value:r});return e}}]}}function fp(t,e,n){const r=new Set((n==null?void 0:n.sourceRoots)??[]),s=new Map;let a="user";const i=new Set;function c(p,h){var $;if(i.has(p))return!0;const y=zr[p];if(y)return m.loadFile(y(),p,void 0,h),!0;const w=($=n==null?void 0:n.registeredSources)==null?void 0:$.get(p);if(w!==void 0)return m.loadFile(w,p,void 0,h),!0;if(!(n!=null&&n.readFile)||r.size===0)return!1;for(const S of r){const P=`${S.replace(/\/$/,"")}/${p.replace(/\./g,"/")}.clj`;try{const L=n.readFile(P);if(L)return m.loadFile(L,void 0,void 0,h),!0}catch{continue}}return!1}function l(p){var h;return((h=n==null?void 0:n.registeredSources)==null?void 0:h.has(p))??!1}function d(p,h){return h==="all"?!0:h.some(y=>p===y||p.startsWith(y))}hm(t,e,()=>a,c),gm(t,e);const m={get registry(){return t},ensureNamespace(p){return on(t,e,p)},getNamespaceEnv(p){return t.get(p)??null},getNs(p){var h;return((h=t.get(p))==null?void 0:h.ns)??null},syncNsVar(p){var y,w;a=p;const h=(y=e.ns)==null?void 0:y.vars.get("*ns*");if(h){const $=(w=t.get(p))==null?void 0:w.ns;$&&(h.value=$)}},addSourceRoot(p){r.add(p)},processRequireSpec(p,h,y){Qt(p,h,t,w=>c(w,y),y.allowedPackages,l)},processNsRequires(p,h,y){const w=yr(p);for(const $ of w)for(const S of $){if(u.vector(S)&&S.value.length>0&&u.string(S.value[0])){const P=S.value[0].value;throw new f(`String module require ["${P}" :as ...] is async — use evaluateAsync() instead of evaluate()`,{specifier:P})}Qt(S,h,t,P=>c(P,y),y.allowedPackages,l)}},async processNsRequiresAsync(p,h,y){const w=yr(p);for(const $ of w)for(const S of $)if(u.vector(S)&&S.value.length>0&&u.string(S.value[0])){const P=S.value[0].value;if(!y.importModule)throw new f(`importModule is not configured; cannot require "${P}". Pass importModule to createSession().`,{specifier:P});if(y.allowedHostModules!==void 0&&!d(P,y.allowedHostModules)){const R=y.allowedHostModules==="all"?[]:y.allowedHostModules,z=new f(`Access denied: host module '${P}' is not in the allowed host modules for this session.
Allowed host modules: ${JSON.stringify(R)}
To allow all host modules, use: allowedHostModules: 'all'`,{specifier:P,allowedHostModules:y.allowedHostModules});throw z.code="namespace/access-denied",z}const L=S.value;let N=null;for(let R=1;R<L.length;R++)if(u.keyword(L[R])&&L[R].name===":as"){R++;const z=L[R];if(!z||!u.symbol(z))throw new f(":as expects a symbol alias",{spec:S});N=z.name;break}if(N===null)throw new f(`String require spec must have an :as alias: ["${P}" :as Alias]`,{spec:S});const H=await y.importModule(P);Y(N,o.jsValue(H),h)}else Qt(S,h,t,P=>c(P,y),y.allowedPackages,l)},loadFile(p,h,y,w){const $=Mt(p),S=Jt($)??h??"user";i.add(S);const P=Cn($),L=sn($,S,P,p),N=this.ensureNamespace(S);w.currentSource=p,w.currentFile=y,w.currentLineOffset=0,w.currentColOffset=0,this.processNsRequires(L,N,w);try{for(const H of L){const R=w.expandAll(H,N);w.evaluate(R,N)}}finally{w.currentSource=void 0,w.currentFile=void 0}return S},installModules(p){const h=vm(p,new Set(t.keys()));for(const y of h)for(const w of y.declareNs){const $=on(t,e,w.name),S={getVar(L,N){var z;const H=t.get(L);return((z=H==null?void 0:H.ns)==null?void 0:z.vars.get(N))??null},getNamespace(L){var N;return((N=t.get(L))==null?void 0:N.ns)??null}},P=w.vars(S);for(const[L,N]of P){const H=`${$.ns.name}/${L}`,R=s.get(H);if(R!==void 0)throw new Error(`var '${L}' in '${$.ns.name}' already declared by module '${R}'`);if(Y(L,N.value,$,N.meta),N.dynamic){const z=$.ns.vars.get(L);z.dynamic=!0}s.set(H,y.id)}}},snapshot(){return{registry:pm(t)}}};return m}function mp(t){const e=new Map,n=nt();n.ns=nn("clojure.core"),e.set("clojure.core",n);const r=nt(n);r.ns=nn("user"),e.set("user",r);const s=fp(e,n,t);return s.installModules([lp(),dp()]),s}function xn(t){if(!u.map(t)||!t.entries.some(([r])=>u.keyword(r)&&r.name===":data"))return null;const n=t.entries.find(([r])=>u.keyword(r)&&r.name===":message");return n&&u.string(n[1])?n[1].value:null}function pp(t,e,n){let r=e,s=(n==null?void 0:n.workDir)??(typeof process<"u"?process.cwd():"/");const a=yf();a.resolveNs=l=>t.getNs(l),a.allNamespaces=()=>{const l=[];for(const d of t.registry.values())d.ns&&l.push(d.ns);return l},a.io={stdout:(n==null?void 0:n.output)??(l=>console.log(l)),stderr:(n==null?void 0:n.stderr)??(l=>console.error(l))},a.importModule=n==null?void 0:n.importModule,a.allowedPackages=(n==null?void 0:n.allowedPackages)??"all",a.allowedHostModules=(n==null?void 0:n.allowedHostModules)??"all",a.setCurrentNs=l=>{t.ensureNamespace(l),r=l,t.syncNsVar(l)},a.currentDir=s,a.setCurrentDir=l=>{s=l,a.currentDir=l};const i={allowedPackages:(n==null?void 0:n.allowedPackages)??"all",allowedHostModules:(n==null?void 0:n.allowedHostModules)??"all",hostBindings:Object.keys((n==null?void 0:n.hostBindings)??{}),allowDynamicImport:(n==null?void 0:n.importModule)!==void 0,libraries:((n==null?void 0:n.libraries)??[]).map(l=>l.id)},c={get runtime(){return t},get capabilities(){return i},get registry(){return t.registry},get currentNs(){return r},get currentDir(){return s},get libraries(){return(n==null?void 0:n.libraries)??[]},setNs(l){t.ensureNamespace(l),r=l,t.syncNsVar(l)},setCurrentDir(l){s=l,a.currentDir=l},getNs(l){return t.getNs(l)},loadFile(l,d,m){return t.loadFile(l,d,m,a)},async loadFileAsync(l,d,m){if(d){const p=Mt(l);Jt(p)||(t.ensureNamespace(d),r=d,t.syncNsVar(d))}return await c.evaluateAsync(l,{file:m}),r},addSourceRoot(l){t.addSourceRoot(l)},evaluate(l,d){var m,p,h,y;a.currentSource=l,a.currentFile=d==null?void 0:d.file,a.currentLineOffset=(d==null?void 0:d.lineOffset)??0,a.currentColOffset=(d==null?void 0:d.colOffset)??0;try{const w=Mt(l),$=Jt(w);$&&(t.ensureNamespace($),r=$,t.syncNsVar($));const S=t.getNamespaceEnv(r),P=Cn(w);(m=S.ns)==null||m.aliases.forEach((H,R)=>{P.set(R,H.name)}),(p=S.ns)==null||p.readerAliases.forEach((H,R)=>{P.set(R,H)});const L=sn(w,r,P,l,a.currentLineOffset,a.currentColOffset);t.processNsRequires(L,S,a);let N=o.nil();for(const H of L){const R=a.expandAll(H,S);N=a.evaluate(R,S)}return N}catch(w){if(w instanceof Te){const $=xn(w.value);throw new f($??`Unhandled throw: ${x(w.value)}`,{thrownValue:w.value})}if(w instanceof je)throw new f("recur called outside of loop or fn",{args:w.args});if(w instanceof f||w instanceof T){const $=w.pos!=null&&(w.pos.source!=null||w.pos.start<l.length)?w.pos:w instanceof f?(y=(h=w.frames)==null?void 0:h[0])==null?void 0:y.pos:void 0;$&&(w.message+=fr(l,$,{lineOffset:a.currentLineOffset,colOffset:a.currentColOffset})),w instanceof f&&w.frames&&w.frames.length>0&&(w.message+=mr(w.frames,l,{lineOffset:a.currentLineOffset,colOffset:a.currentColOffset}))}throw w}finally{a.currentSource=void 0,a.currentFile=void 0,a.frameStack=[]}},async evaluateAsync(l,d){var m,p,h,y;a.currentSource=l,a.currentFile=d==null?void 0:d.file,a.currentLineOffset=(d==null?void 0:d.lineOffset)??0,a.currentColOffset=(d==null?void 0:d.colOffset)??0;try{const w=Mt(l),$=Jt(w);$&&(t.ensureNamespace($),r=$,t.syncNsVar($));const S=t.getNamespaceEnv(r),P=Cn(w);(m=S.ns)==null||m.aliases.forEach((H,R)=>{P.set(R,H.name)}),(p=S.ns)==null||p.readerAliases.forEach((H,R)=>{P.set(R,H)});const L=sn(w,r,P,l,a.currentLineOffset,a.currentColOffset);await t.processNsRequiresAsync(L,S,a);let N=o.nil();for(const H of L){const R=a.expandAll(H,S);N=a.evaluate(R,S)}if(N.kind!=="pending")return N;try{return await N.promise}catch(H){throw H instanceof Te?new f(`Unhandled throw: ${x(H.value)}`,{thrownValue:H.value}):H}}catch(w){if(w instanceof Te){const $=xn(w.value);throw new f($??`Unhandled throw: ${x(w.value)}`,{thrownValue:w.value})}if(w instanceof je)throw new f("recur called outside of loop or fn",{args:w.args});if(w instanceof f||w instanceof T){const $=w.pos!=null&&(w.pos.source!=null||w.pos.start<l.length)?w.pos:w instanceof f?(y=(h=w.frames)==null?void 0:h[0])==null?void 0:y.pos:void 0;$&&(w.message+=fr(l,$,{lineOffset:a.currentLineOffset,colOffset:a.currentColOffset})),w instanceof f&&w.frames&&w.frames.length>0&&(w.message+=mr(w.frames,l,{lineOffset:a.currentLineOffset,colOffset:a.currentColOffset}))}throw w}finally{a.currentSource=void 0,a.currentFile=void 0,a.frameStack=[]}},applyFunction(l,d){return a.applyCallable(l,d,nt())},cljToJs(l){return ct(l,{applyFunction:(d,m)=>a.applyCallable(d,m,nt())})},evaluateForms(l){try{const d=t.getNamespaceEnv(r);let m=o.nil();for(const p of l){const h=a.expandAll(p,d);m=a.evaluate(h,d)}return m}catch(d){if(d instanceof Te){const m=xn(d.value);throw new f(m??`Unhandled throw: ${x(d.value)}`,{thrownValue:d.value})}throw d instanceof je?new f("recur called outside of loop or fn",{args:d.args}):d}},getCompletions(l,d){let m=t.registry.get(d??r)??null;const p=new Set;for(;m;){for(const y of m.bindings.keys())p.add(y);if(m.ns)for(const y of m.ns.vars.keys())p.add(y);m=m.outer}const h=[...p];return l?h.filter(y=>y.startsWith(l)).sort():h.sort()}};return c}function hp(t){var d;const e=(t==null?void 0:t.modules)??[],n=(t==null?void 0:t.libraries)??[],r=new Map,s=new Map;for(const m of n)for(const[p,h]of Object.entries(m.sources??{})){const y=s.get(p);if(y!==void 0)throw new Error(`Library '${m.id}' tried to register namespace '${p}', already registered by '${y}'.`);r.set(p,h),s.set(p,m.id)}const a=mp({sourceRoots:t==null?void 0:t.sourceRoots,readFile:t==null?void 0:t.readFile,registeredSources:r.size>0?r:void 0}),i=pp(a,"user",t),c=zr["clojure.core"];if(!c)throw new Error("Missing built-in clojure.core source in registry");i.loadFile(c(),"clojure.core"),e.length>0&&i.runtime.installModules(e);const l=n.flatMap(m=>m.module?[m.module]:[]);if(l.length>0&&i.runtime.installModules(l),t!=null&&t.hostBindings){const m=a.getNamespaceEnv("js");if(m)for(const[p,h]of Object.entries(t.hostBindings)){if((d=m.ns)!=null&&d.vars.has(p))throw new Error(`createSession: hostBindings key '${p}' conflicts with built-in js/${p} — choose a different key`);Y(p,ie(h),m)}}for(const m of(t==null?void 0:t.entries)??[])i.loadFile(m);return i}Buffer;function gp(t){return hp({output:t})}function Hs(){const t={session:void 0,history:[],entries:[],outputs:[]};return t.session=gp(e=>t.outputs.push(e)),t}async function En(t,e){const n=e.trim();if(!n)return[];t.history.push(n),t.outputs=[];const r=performance.now();try{const s=await t.session.evaluateAsync(n),a=performance.now(),i=[];i.push({kind:"source",text:n});for(const c of t.outputs)i.push({kind:"output",text:c});return i.push({kind:"result",output:x(s),durationMs:a-r}),t.entries.push(...i),i}catch(s){const a=performance.now(),i=vp(n,s,a-r);return t.entries.push(i),[i]}}function vp(t,e,n){const r=e instanceof f||e instanceof Error?e.message:String(e);return{kind:"error",source:t,message:r,durationMs:n}}const yp=`(ns user
  (:require [clojure.string :as str]))

;; Welcome to the Cljam Web REPL!
;;
;;   ⌘+Enter  (Ctrl+Enter)  — evaluate the form under/before the cursor
;;   Shift+⌘+Enter          — evaluate the entire file
;;   "Run all" button       — same as Shift+⌘+Enter
;;
;; Forms inside (comment ...) blocks are safe to eval one by one.
;; Place your cursor inside any form and press ⌘+Enter.
;;
;; Select a topic from the dropdown above to load a deep-dive sample.


;; Primitives & Literals

(comment
  ;; Numbers
  42          ;; => 42
  3.14        ;; => 3.14
  -7          ;; => -7

  ;; Arithmetic — \`+\` \`-\` \`*\` \`/\` are plain functions
  (+ 1 2)     ;; => 3
  (* 6 7)     ;; => 42
  (/ 10 4)    ;; => 2.5
  (mod 17 5)  ;; => 2

  ;; Strings — always double-quoted
  "hello"               ;; => "hello"
  (str "hello" " " "world")  ;; => "hello world"
  (count "hello")       ;; => 5

  ;; Booleans
  true        ;; => true
  false       ;; => false
  (not true)  ;; => false

  ;; nil — the absence of a value
  nil         ;; => nil

  ;; Keywords — lightweight identifiers, evaluate to themselves
  :name       ;; => :name
  :user/role  ;; => :user/role  (namespaced keyword)
  (name :user/role)      ;; => "role"
  (namespace :user/role) ;; => "user"
)


;; Collections
;;
;; All are immutable — operations return new values, never mutate.

(comment
  ;; Vectors — ordered, indexed, literal syntax []
  [1 2 3]
  [:a :b :c]
  (conj [1 2 3] 4)      ;; => [1 2 3 4]
  (count [1 2 3])       ;; => 3
  (nth [10 20 30] 1)    ;; => 20

  ;; Lists — ordered, linked, literal syntax '()
  '(1 2 3)
  (first '(10 20 30))   ;; => 10
  (rest  '(10 20 30))   ;; => (20 30)
  (cons 0 '(1 2 3))     ;; => (0 1 2 3)

  ;; Maps — key/value pairs, literal syntax {}
  {:name "Alice" :age 30}
  (get {:name "Alice" :age 30} :name)  ;; => "Alice"
  (:age {:name "Alice" :age 30})       ;; => 30  (keywords are lookup fns)
  (assoc {:name "Alice"} :role :admin) ;; => {:name "Alice" :role :admin}
  (dissoc {:a 1 :b 2 :c 3} :b)        ;; => {:a 1 :c 3}

  ;; Nesting is natural
  (def user {:name "Bob"
             :scores [98 87 95]
             :address {:city "Austin" :zip "78701"}})

  (get-in user [:address :city])       ;; => "Austin"
  (update-in user [:scores] conj 100)  ;; adds 100 to :scores
)


;; Binding Values

(comment
  ;; \`def\` — bind a name at namespace scope
  (def pi 3.14159)
  (* 2 pi)           ;; => 6.28318...

  ;; \`let\` — local bindings, visible only inside the form
  (let [x 10
        y 20]
    (+ x y))         ;; => 30

  ;; Bindings can reference earlier ones in the same let
  (let [base  100
        bonus (* base 0.15)
        total (+ base bonus)]
    total)           ;; => 115.0

  ;; \`do\` — sequence multiple expressions, return last
  (do
    (println "side effect")
    42)              ;; prints "side effect", evaluates to 42
)


;; Functions
;;
;; Functions are first-class values. \`defn\` is the common shorthand.

(defn greet
  "Returns a greeting string."
  [name]
  (str "Hello, " name "!"))

(defn add
  "Adds two numbers."
  [a b]
  (+ a b))

(comment
  (greet "World")    ;; => "Hello, World!"
  (add 3 4)          ;; => 7

  ;; Anonymous functions with \`fn\`
  ((fn [x] (* x x)) 5)   ;; => 25

  ;; Shorthand #() — % is the first arg
  (#(* % %) 5)            ;; => 25
  (#(+ %1 %2) 3 4)        ;; => 7

  ;; Multi-arity — one \`defn\` handles different arg counts
  (defn hello
    ([]        (hello "World"))
    ([name]    (str "Hello, " name "!")))

  (hello)           ;; => "Hello, World!"
  (hello "Clojure") ;; => "Hello, Clojure!"

  ;; Variadic — \`&\` collects remaining args as a sequence
  (defn sum [& nums]
    (reduce + nums))
  
  (sum 1 2 3 4 5)   ;; => 15

  ;; Closures — functions capture their lexical environment
  (defn make-adder [n]
    (fn [x] (+ x n)))

  (def add10 (make-adder 10))
  (add10 5)         ;; => 15
  (add10 100)       ;; => 110
)


;; Control Flow
;;
;; Only \`false\` and \`nil\` are falsy. Everything else (including 0 and "") is truthy.

(comment
  ;; if
  (if true  "yes" "no")    ;; => "yes"
  (if false "yes" "no")    ;; => "no"
  (if nil   "yes" "no")    ;; => "no"
  (if 0     "yes" "no")    ;; => "yes"  (0 is truthy here!)

  ;; when — one-branch if, body wrapped in do
  (when true
    (println "runs")
    42)                      ;; => 42

  ;; cond — multiple branches
  (defn classify [n]
    (cond
      (neg? n)  :negative
      (zero? n) :zero
      (< n 10)  :small
      :else     :large))

  (classify -3)  ;; => :negative
  (classify 0)   ;; => :zero
  (classify 5)   ;; => :small
  (classify 99)  ;; => :large

  ;; and / or — short-circuit, return the deciding value
  (and 1 2 3)       ;; => 3  (last truthy)
  (and 1 false 3)   ;; => false
  (or false nil 42) ;; => 42  (first truthy)
)


;; Higher-Order Functions

(comment
  ;; map — apply a function to every element, return a new sequence
  (map inc [1 2 3 4 5])            ;; => (2 3 4 5 6)
  (map #(* % %) [1 2 3 4])         ;; => (1 4 9 16)
  (map str [:a :b :c])             ;; => ("a" "b" "c")

  ;; filter — keep elements where predicate returns true
  (filter even? [1 2 3 4 5 6])     ;; => (2 4 6)
  (filter pos?  [-3 -1 0 2 4])     ;; => (2 4)

  ;; reduce — fold a collection into a single value
  (reduce + [1 2 3 4 5])           ;; => 15
  (reduce + 100 [1 2 3])           ;; => 106  (100 is the initial value)
  (reduce conj [] '(1 2 3))        ;; => [1 2 3]  (list → vector)

  ;; apply — call a function with a collection as its argument list
  (apply + [1 2 3 4])              ;; => 10
  (apply str ["a" "b" "c"])        ;; => "abc"

  ;; comp — compose functions right-to-left
  (def shout (comp str/upper-case str/trim))
  (shout "  hello ")               ;; => "HELLO"

  ;; partial — partially apply a function
  (def double (partial * 2))
  (map double [1 2 3 4])           ;; => (2 4 6 8)
)


;; Threading Macros
;;
;; \`->\` inserts the value as the FIRST argument at each step.
;; \`->>\` inserts it as the LAST argument.

(comment
  (-> "  hello world  "
      str/trim
      str/upper-case
      (str/split #" "))
  ;; => ["HELLO" "WORLD"]

  (->> [1 2 3 4 5 6 7 8 9 10]
       (filter odd?)
       (map #(* % %))
       (reduce +))
  ;; => 165  (sum of squares of odd numbers 1–10)

  ;; Without threading (hard to read):
  (reduce + (map #(* % %) (filter odd? [1 2 3 4 5 6 7 8 9 10])))
)


;; Data Transformation

(def game
  {:name       "Colt Express"
   :categories ["Family" "Strategy"]
   :play-time  40
   :ratings    {:alice 5 :bob 4 :carol 5}})

(comment
  ;; assoc — add or replace a key
  (assoc game :play-time 45)
  (assoc game :age-from 10)

  ;; dissoc — remove keys
  (dissoc game :ratings)

  ;; update — transform a value with a function
  (update game :play-time + 5)             ;; play-time => 45
  (update game :categories conj "Co-op")   ;; add category

  ;; merge — combine maps (rightmost wins on conflict)
  (merge {:a 1 :b 2} {:b 99 :c 3})        ;; => {:a 1 :b 99 :c 3}

  ;; select-keys
  (select-keys game [:name :play-time])

  ;; assoc-in / update-in / get-in for nested paths
  (assoc-in  game [:ratings :dave] 3)
  (update-in game [:ratings :bob] inc)
  (get-in    game [:ratings :alice])       ;; => 5

  (-> game
      (assoc  :play-time 50)
      (update :categories conj "Card")
      (dissoc :ratings))
)


;; Strings

(comment
  (str "Hello" ", " "World" "!")        ;; => "Hello, World!"
  (str/join ", " ["one" "two" "three"]) ;; => "one, two, three"
  (str/join ["H" "e" "l" "l" "o"])      ;; => "Hello"

  (count "hello")                        ;; => 5
  (str/upper-case "hello")               ;; => "HELLO"
  (str/lower-case "WORLD")               ;; => "world"
  (str/trim "  hello  ")                 ;; => "hello"

  (str/includes?    "hello world" "world") ;; => true
  (str/starts-with? "hello" "hel")         ;; => true
  (str/ends-with?   "hello" "llo")         ;; => true

  (subs "hello world" 6)                 ;; => "world"
  (subs "hello world" 0 5)               ;; => "hello"
  (str/split "a,b,c" #",")              ;; => ["a" "b" "c"]

  (str/replace "hello world" "world" "Clojure") ;; => "hello Clojure"
  (str/replace "hello" #"[aeiou]" "*")          ;; => "h*ll*"
)


;; Atoms (Mutable State)
;;
;; \`swap!\` applies a function to the current value atomically.

(def counter (atom 0))
(def cart    (atom []))

(comment
  @counter                     ;; => 0

  (swap! counter inc)          ;; => 1
  (swap! counter inc)          ;; => 2
  (swap! counter + 10)         ;; => 12
  @counter                     ;; => 12

  (reset! counter 0)
  @counter                     ;; => 0

  (swap! cart conj {:item "apple" :qty 2})
  (swap! cart conj {:item "bread" :qty 1})
  @cart
)


;; Error Handling

(comment
  (try
    (/ 1 0)
    (catch :default e
      (str "caught: " (ex-message e))))

  ;; throw any value — catch with a predicate or :default
  (try
    (throw 42)
    (catch number? e
      (str "got a number: " e)))

  ;; ex-info — structured errors with a data map
  (try
    (throw (ex-info "Something went wrong"
                    {:code :not-found :id 99}))
    (catch :default e
      {:message (ex-message e)
       :data    (ex-data e)}))

  ;; finally always runs
  (try
    (+ 1 2)
    (finally
      (println "cleanup")))     ;; prints "cleanup", returns 3
)


;; Macros & Metaprogramming

(comment
  ;; defmacro — define a macro that transforms code before evaluation
  (defmacro unless [test & body]
    \`(when (not ~test)
       ~@body))

  (unless false
    (println "false is falsy")
    42)       ;; => 42

  ;; macroexpand — see what a macro produces
  (macroexpand '(when true (println "hi")))
  ;; => (if true (do (println "hi")) nil)

  (macroexpand-all '(-> x str/trim str/upper-case))
  ;; shows the fully expanded threading chain
)
`,wp=`(ns user.collections)

;; Deep Dive: Collections
;;
;; Press ⌘+Enter on any form to evaluate it.


;; The Sequence Abstraction
;;
;; \`seq\` converts any collection (or string) into a sequence.
;; \`first\`, \`rest\`, \`next\`, \`last\`, \`cons\` all work on sequences.

(comment
  (seq [1 2 3])         ;; => (1 2 3)
  (seq {:a 1 :b 2})     ;; => ([:a 1] [:b 2])
  (seq "hello")         ;; => ("h" "e" "l" "l" "o")
  (seq [])              ;; => nil  (empty seq is nil!)
  (seq nil)             ;; => nil

  ;; first / rest / next
  (first [10 20 30])    ;; => 10
  (rest  [10 20 30])    ;; => (20 30)
  (next  [10 20 30])    ;; => (20 30)
  (next  [10])          ;; => nil   (next returns nil, rest returns ())
  (rest  [10])          ;; => ()
  (last  [10 20 30])    ;; => 30

  (second [10 20 30])   ;; => 20

  ;; cons — prepend an element to any sequence
  (cons 0 [1 2 3])      ;; => (0 1 2 3)
  (cons :x '(:y :z))    ;; => (:x :y :z)
)


;; Building Collections

(comment
  ;; conj — adds in the natural position for each type
  (conj [1 2 3] 4)          ;; => [1 2 3 4]     (vectors add to the END)
  (conj [1 2 3] 4 5 6)      ;; => [1 2 3 4 5 6]
  (conj '(1 2 3) 0)         ;; => (0 1 2 3)      (lists add to the FRONT)
  (conj {:a 1} [:b 2])      ;; => {:a 1 :b 2}

  ;; into — pour one collection into another
  (into [] '(1 2 3))        ;; => [1 2 3]
  (into '() [1 2 3])        ;; => (3 2 1)  (list adds to front)
  (into {} [[:a 1] [:b 2]]) ;; => {:a 1 :b 2}

  ;; constructors
  (vector 1 2 3)             ;; => [1 2 3]
  (list   1 2 3)             ;; => (1 2 3)
  (hash-map :a 1 :b 2)       ;; => {:a 1 :b 2}

  ;; range — lazy sequence of numbers
  (range 5)                  ;; => (0 1 2 3 4)
  (range 2 10)               ;; => (2 3 4 5 6 7 8 9)
  (range 0 20 3)             ;; => (0 3 6 9 12 15 18)

  (repeat 4 :x)              ;; => (:x :x :x :x)
  (concat [1 2] [3 4] [5])   ;; => (1 2 3 4 5)
  (zipmap [:a :b :c] [1 2 3]) ;; => {:a 1 :b 2 :c 3}
)


;; Inspecting Collections

(comment
  (count [1 2 3])       ;; => 3
  (count {:a 1 :b 2})   ;; => 2
  (count "hello")       ;; => 5

  ;; empty? — true when (seq coll) is nil
  (empty? [])           ;; => true
  (empty? [1])          ;; => false
  (empty? nil)          ;; => true

  ;; contains? — checks key existence (index for vectors)
  (contains? {:a 1 :b 2} :a)  ;; => true
  (contains? {:a 1 :b 2} :z)  ;; => false
  (contains? [10 20 30] 2)     ;; => true  (index 2 exists)

  (get {:a 1 :b 2} :a)          ;; => 1
  (get {:a 1 :b 2} :z)          ;; => nil
  (get {:a 1 :b 2} :z :missing) ;; => :missing  (default)
  (nth [10 20 30] 1)            ;; => 20
  (nth [10 20 30] 9 :oor)       ;; => :oor  (out-of-range default)

  (keys {:a 1 :b 2 :c 3})      ;; => (:a :b :c)
  (vals {:a 1 :b 2 :c 3})      ;; => (1 2 3)
)


;; Slicing & Windowing

(comment
  (take 3 [1 2 3 4 5 6])        ;; => (1 2 3)
  (drop 3 [1 2 3 4 5 6])        ;; => (4 5 6)

  (take-while even? [2 4 6 7 8 10]) ;; => (2 4 6)
  (drop-while even? [2 4 6 7 8 10]) ;; => (7 8 10)

  (take-last 2 [1 2 3 4 5])     ;; => (4 5)
  (drop-last 2 [1 2 3 4 5])     ;; => (1 2 3)

  (reverse [1 2 3 4 5])         ;; => (5 4 3 2 1)
)


;; Maps & Keywords as Functions (IFn)
;;
;; Maps and keywords are callable — they act as lookup functions.

(comment
  ;; Keyword as function — looks itself up in the map
  (:name {:name "Alice" :age 30})        ;; => "Alice"
  (:missing {:a 1} :default-value)       ;; => :default-value

  ;; Map as function — looks up the argument as a key
  ({:a 1 :b 2} :a)                       ;; => 1
  ({:a 1 :b 2} :z)                       ;; => nil
  ({:a 1 :b 2} :z 99)                    ;; => 99  (default)

  (def users
    [{:name "Alice" :role :admin}
     {:name "Bob"   :role :user}
     {:name "Carol" :role :admin}])

  (map :name users)                       ;; => ("Alice" "Bob" "Carol")
  (map :role users)                       ;; => (:admin :user :admin)

  (def admin? {:admin true :moderator true})
  (filter (comp admin? :role) users)      ;; => Alice and Carol

  (def catalog
    {:books  [{:title "SICP" :price 45}
              {:title "CTMCP" :price 38}]
     :videos [{:title "Structure" :price 0}]})

  (get-in catalog [:books 0 :title])      ;; => "SICP"
  (map :title (:books catalog))           ;; => ("SICP" "CTMCP")
)


;; Transforming Maps

(comment
  (assoc {:a 1} :b 2 :c 3)       ;; => {:a 1 :b 2 :c 3}
  (dissoc {:a 1 :b 2 :c 3} :b)   ;; => {:a 1 :c 3}

  (update {:count 0} :count inc)          ;; => {:count 1}
  (update {:scores [1 2]} :scores conj 3) ;; => {:scores [1 2 3]}

  ;; merge — rightmost wins on conflict
  (merge {:a 1 :b 2} {:b 99 :c 3})    ;; => {:a 1 :b 99 :c 3}
  (merge {:a 1} {:b 2} {:c 3})        ;; => {:a 1 :b 2 :c 3}

  (select-keys {:a 1 :b 2 :c 3 :d 4} [:a :c])  ;; => {:a 1 :c 3}

  ;; transform all values
  (into {}
        (map (fn [[k v]] [k (* v 2)])
             {:a 1 :b 2 :c 3}))   ;; => {:a 2 :b 4 :c 6}
)


;; Practical Patterns

(comment
  ;; Build a lookup map from a collection
  (def people
    [{:id 1 :name "Alice"}
     {:id 2 :name "Bob"}
     {:id 3 :name "Carol"}])

  (def by-id
    (into {} (map (fn [p] [(:id p) p]) people)))

  (get by-id 2)   ;; => {:id 2 :name "Bob"}

  ;; Or with zipmap
  (zipmap (map :id people) people)

  ;; Grouping
  (def items [:a :b :a :c :b :a])
  (frequencies items)             ;; => {:a 3 :b 2 :c 1}
  (group-by identity items)       ;; => {:a [:a :a :a] :b [:b :b] :c [:c]}

  (flatten [1 [2 [3 4]] [5]])     ;; => (1 2 3 4 5)
  (distinct [1 2 3 1 2 4 5 3])   ;; => (1 2 3 4 5)
)
`,bp=`(ns user.hof
  (:require [clojure.string :as str]))

;; Deep Dive: Higher-Order Functions & Transducers
;;
;; Press ⌘+Enter on any form to evaluate it.


;; map

(comment
  ;; Basic: apply f to every element
  (map inc [1 2 3 4 5])                  ;; => (2 3 4 5 6)
  (map str [:a :b :c])                   ;; => ("a" "b" "c")
  (map count ["hi" "hello" "hey"])        ;; => (2 5 3)

  (map (fn [x] (* x x)) (range 1 6))    ;; => (1 4 9 16 25)
  (map #(* % %) (range 1 6))            ;; same, shorter syntax

  ;; Multi-collection: zips and stops at the shortest
  (map + [1 2 3] [10 20 30])            ;; => (11 22 33)
  (map vector [:a :b :c] [1 2 3])       ;; => ([:a 1] [:b 2] [:c 3])
  (map + [1 2 3] [10 20 30] [100 200 300]) ;; => (111 222 333)

  ;; map-indexed: f receives [index value]
  (map-indexed vector [:a :b :c])        ;; => ([0 :a] [1 :b] [2 :c])
  (map-indexed (fn [i v] (str i ": " v))
               ["alice" "bob" "carol"])  ;; => ("0: alice" "1: bob" "2: carol")
)


;; filter / remove

(comment
  (filter even?  [1 2 3 4 5 6])         ;; => (2 4 6)
  (filter string? [1 "a" :b "c" 2])     ;; => ("a" "c")
  (filter :active [{:name "a" :active true}
                   {:name "b" :active false}
                   {:name "c" :active true}])
  ;; => ({:name "a" :active true} {:name "c" :active true})

  (remove even? [1 2 3 4 5 6])          ;; => (1 3 5)
  (remove nil?  [1 nil 2 nil 3])        ;; => (1 2 3)

  (filter #(> (count %) 3) ["hi" "hello" "hey" "howdy"])
  ;; => ("hello" "howdy")
)


;; reduce
;;
;; The Swiss army knife — it can implement almost everything else.

(comment
  ;; Two-arity: uses first two elements to start
  (reduce + [1 2 3 4 5])                 ;; => 15
  (reduce * [1 2 3 4 5])                 ;; => 120
  (reduce str ["a" "b" "c"])             ;; => "abc"

  ;; Three-arity: explicit initial accumulator
  (reduce + 100 [1 2 3])                 ;; => 106
  (reduce conj [] '(1 2 3))              ;; => [1 2 3]
  (reduce (fn [m [k v]] (assoc m k v))
          {}
          [[:a 1] [:b 2] [:c 3]])        ;; => {:a 1 :b 2 :c 3}

  ;; Building a frequency map from scratch
  (reduce (fn [acc x]
            (update acc x (fnil inc 0)))
          {}
          [:a :b :a :c :b :a])           ;; => {:a 3 :b 2 :c 1}

  ;; Early termination with \`reduced\` — wraps a value to signal "stop now"
  (reduce (fn [acc x]
            (if (nil? x)
              (reduced acc)
              (conj acc x)))
          []
          [1 2 3 nil 4 5])               ;; => [1 2 3]  (stopped at nil)

  (reduce (fn [_ x]
            (when (> x 100) (reduced x)))
          nil
          (range 1000))                  ;; => 101
)


;; apply, partial, comp

(comment
  ;; apply — call f with a collection as its argument list
  (apply + [1 2 3 4])             ;; => 10
  (apply str ["a" "b" "c"])       ;; => "abc"
  (apply max [3 1 4 1 5 9 2 6])   ;; => 9

  ;; Leading fixed args before the collection
  (apply str "prefix-" ["a" "b"]) ;; => "prefix-ab"

  ;; partial — fix some leading arguments
  (def add10 (partial + 10))
  (add10 5)                        ;; => 15
  (map add10 [1 2 3])              ;; => (11 12 13)

  (def greet (partial str "Hello, "))
  (greet "World!")                  ;; => "Hello, World!"

  ;; comp — compose right-to-left
  (def clean (comp str/trim str/lower-case))
  (clean "  HELLO  ")              ;; => "hello"

  ((comp inc inc inc) 0)           ;; => 3
  ((comp str/upper-case str/trim) "  hello  ") ;; => "HELLO"

  ;; identity — returns its argument unchanged
  (filter identity [1 nil 2 false 3]) ;; => (1 2 3)

  ;; constantly — returns a function that always returns the same value
  ((constantly 42) 1 2 3)          ;; => 42
  (map (constantly :x) [1 2 3])    ;; => (:x :x :x)
)


;; complement, juxt, some, every?

(comment
  ;; complement — logical NOT of a predicate
  (def not-even? (complement even?))
  (filter not-even? [1 2 3 4 5])   ;; => (1 3 5)

  ;; juxt — call multiple functions on the same value, collect results
  ((juxt :name :role) {:name "Alice" :role :admin}) ;; => ["Alice" :admin]
  (map (juxt identity #(* % %)) [1 2 3 4 5])
  ;; => ([1 1] [2 4] [3 9] [4 16] [5 25])

  ;; some — return first truthy result of (f x), or nil
  (some even? [1 3 5 6 7])         ;; => true
  (some even? [1 3 5 7])           ;; => nil
  (some #(when (> % 3) %) [1 2 3 4 5]) ;; => 4

  ;; every? — true if (f x) is truthy for all elements
  (every? even? [2 4 6])           ;; => true
  (every? even? [2 4 5])           ;; => false

  (not-any?   odd? [2 4 6])        ;; => true
  (not-every? odd? [1 2 3])        ;; => true
)


;; sort, sort-by, group-by, frequencies

(def people
  [{:name "Carol" :age 32 :dept :eng}
   {:name "Alice" :age 28 :dept :design}
   {:name "Bob"   :age 35 :dept :eng}
   {:name "Dave"  :age 28 :dept :design}])

(comment
  (sort [3 1 4 1 5 9 2 6])           ;; => (1 1 2 3 4 5 6 9)
  (sort > [3 1 4 1 5 9 2 6])         ;; => (9 6 5 4 3 2 1 1)
  (sort ["banana" "apple" "cherry"])  ;; => ("apple" "banana" "cherry")

  (sort-by :age  people)             ;; youngest first
  (sort-by :name people)             ;; alphabetical

  (group-by :dept  people)           ;; => {:eng [...] :design [...]}
  (group-by :age   people)           ;; groups by age

  (frequencies [:a :b :a :c :b :a]) ;; => {:a 3 :b 2 :c 1}
  (distinct [1 2 3 1 2 4])           ;; => (1 2 3 4)
)


;; Transducers
;;
;; Composable transformation pipelines decoupled from the source and sink.
;; A 1-arg call to map/filter/etc returns a transducer instead of a result.
;; Transducer \`comp\` applies LEFT-to-RIGHT (unlike function comp).

(comment
  ;; \`into\` with a transducer
  (into [] (map inc) [1 2 3 4 5])             ;; => [2 3 4 5 6]
  (into [] (filter even?) [1 2 3 4 5 6])      ;; => [2 4 6]

  ;; Chain with comp — one pass, no intermediate sequences
  (into []
        (comp (filter odd?)
              (map #(* % %)))
        [1 2 3 4 5 6 7])
  ;; => [1 9 25 49]  (squares of odd numbers)

  ;; \`transduce\` — apply a transducer with reduce semantics
  (transduce (comp (filter odd?)
                   (map #(* % %)))
             +
             [1 2 3 4 5 6 7])
  ;; => 84  (sum of squares of odds)

  ;; \`sequence\` — lazy sequence from a transducer
  (sequence (comp (filter even?)
                  (map #(/ % 2)))
            (range 1 11))
  ;; => (1 2 3 4 5)

  ;; partition-all — group into chunks
  (into [] (partition-all 3) (range 10))
  ;; => [[0 1 2] [3 4 5] [6 7 8] [9]]

  ;; dedupe — remove consecutive duplicates
  (into [] (dedupe) [1 1 2 3 3 3 4 1])
  ;; => [1 2 3 4 1]

  ;; take as a transducer — stops early, never touches the rest
  (into [] (take 3) (range 1000))
  ;; => [0 1 2]
)
`,kp=`(ns user.destructuring)

;; Deep Dive: Destructuring
;;
;; Bind names to parts of a data structure in one step.
;; Works in \`let\`, \`fn\` params, \`defn\` params, \`loop\`, and \`defmacro\`.
;;
;; Press ⌘+Enter on any form to evaluate it.


;; Vector (Sequential) Destructuring
;;
;; Bind names to positions, left to right.

(comment
  (let [[a b c] [10 20 30]]
    (+ a b c))           ;; => 60

  ;; Skip positions with _
  (let [[_ second _ fourth] [1 2 3 4]]
    [second fourth])     ;; => [2 4]

  ;; Fewer bindings than elements — extras are ignored
  (let [[a b] [1 2 3 4 5]]
    [a b])               ;; => [1 2]

  ;; & rest — bind remaining elements as a sequence
  (let [[first-item & the-rest] [1 2 3 4 5]]
    {:first first-item
     :rest  the-rest})   ;; => {:first 1 :rest (2 3 4 5)}

  ;; :as — bind the whole collection in addition to parts
  (let [[x y :as all] [1 2 3]]
    {:x x :y y :all all}) ;; => {:x 1 :y 2 :all [1 2 3]}

  ;; Nested vectors
  (let [[a [b c] d] [1 [2 3] 4]]
    [a b c d])           ;; => [1 2 3 4]
)


;; Map Destructuring
;;
;; Bind names to values by key.

(comment
  ;; Basic: bind local name to the value at a key
  (let [{n :name a :age} {:name "Alice" :age 30 :role :admin}]
    (str n " is " a))    ;; => "Alice is 30"

  ;; :keys — shorthand when local name == keyword name
  (let [{:keys [name age role]} {:name "Alice" :age 30 :role :admin}]
    [name age role])     ;; => ["Alice" 30 :admin]

  ;; :strs — like :keys but for string keys
  (let [{:strs [name age]} {"name" "Bob" "age" 25}]
    [name age])          ;; => ["Bob" 25]

  ;; :as — bind the whole map too
  (let [{:keys [name] :as person} {:name "Carol" :age 32}]
    {:greeting (str "Hello " name)
     :full     person})

  ;; :or — default values when key is absent (NOT when value is nil)
  (let [{:keys [name role] :or {role :guest}} {:name "Dave"}]
    [name role])         ;; => ["Dave" :guest]  (:role was absent)

  ;; :or does NOT apply when the key IS present but value is nil
  (let [{:keys [role] :or {role :guest}} {:role nil}]
    role)                ;; => nil  (key exists, :or doesn't fire)
)


;; Destructuring in Function Params

;; Vector destructuring in fn params
(defn sum-pair [[a b]]
  (+ a b))

;; Map destructuring in fn params
(defn greet-user [{:keys [name role] :or {role :guest}}]
  (str "Hello " name " (" (clojure.core/name role) ")"))

;; Multi-arg with map destructuring
(defn move [{:keys [x y]} {:keys [dx dy]}]
  {:x (+ x dx) :y (+ y dy)})

(comment
  (sum-pair [3 7])                         ;; => 10
  (greet-user {:name "Alice" :role :admin}) ;; => "Hello Alice (admin)"
  (greet-user {:name "Bob"})               ;; => "Hello Bob (guest)"
  (move {:x 0 :y 0} {:dx 3 :dy 5})        ;; => {:x 3 :y 5}
)


;; Nested Destructuring

(comment
  ;; Map inside vector
  (let [[{:keys [name]} {:keys [score]}]
        [{:name "Alice"} {:score 95}]]
    (str name ": " score))    ;; => "Alice: 95"

  ;; Vector inside map
  (let [{:keys [name]
         [first-score] :scores}
        {:name "Bob" :scores [87 90 95]}]
    (str name " first: " first-score)) ;; => "Bob first: 87"

  ;; Deeply nested — a realistic API response shape
  (def response
    {:status 200
     :body {:user {:id 42
                   :name "Alice"
                   :tags ["admin" "beta"]}}})

  (let [{:keys [status]
         {:keys [user]} :body} response
        {:keys [id name]
         [first-tag] :tags} user]
    {:status status :id id :name name :first-tag first-tag})
  ;; => {:status 200 :id 42 :name "Alice" :first-tag "admin"}
)


;; Destructuring in loop/recur

(comment
  (loop [[x & xs] [1 2 3 4 5]
         acc      0]
    (if x
      (recur xs (+ acc x))
      acc))                    ;; => 15

  (loop [{:keys [n acc]} {:n 5 :acc 1}]
    (if (zero? n)
      acc
      (recur {:n (dec n) :acc (* acc n)})))
  ;; => 120  (5!)
)


;; Kwargs Destructuring (& {:keys})
;;
;; \`& rest\` where rest is treated as a flat key/value sequence.

(defn configure [& {:keys [host port timeout]
                    :or   {host "localhost"
                           port 8080
                           timeout 5000}}]
  {:host host :port port :timeout timeout})

(comment
  (configure)                               ;; all defaults
  (configure :port 3000)
  (configure :host "prod.example.com" :port 443 :timeout 30000)
)


;; Qualified :keys
;;
;; When map keys are namespaced keywords, the local name is the unqualified part.

(comment
  (let [{:keys [user/name user/role]}
        {:user/name "Alice" :user/role :admin}]
    [name role])                            ;; => ["Alice" :admin]
)


;; Practical Patterns

(defn summarize [{:keys [name scores]}]
  {:name    name
   :average (/ (reduce + scores) (count scores))
   :best    (apply max scores)})

(def students
  [{:name "Alice" :scores [88 92 95]}
   {:name "Bob"   :scores [75 80 78]}
   {:name "Carol" :scores [95 98 100]}])

(comment
  (map summarize students)

  (->> students
       (map summarize)
       (sort-by :average >)
       (map :name))               ;; => ("Carol" "Alice" "Bob")

  (let [{:keys [scores]} (first students)
        [best & _] (sort > scores)]
    best)                         ;; => 95
)
`,xp=`(ns user.strings-regex
  (:require [clojure.string :as str]))

;; Deep Dive: Strings & Regex
;;
;; Press ⌘+Enter on any form to evaluate it.


;; Building & Inspecting Strings

(comment
  ;; str — concatenate anything into a string
  (str "hello" " " "world")         ;; => "hello world"
  (str :keyword)                     ;; => ":keyword"
  (str 42)                           ;; => "42"
  (str nil)                          ;; => ""  (nil becomes empty string)
  (str true false)                   ;; => "truefalse"

  (subs "hello world" 6)             ;; => "world"
  (subs "hello world" 0 5)           ;; => "hello"

  (count "hello")                    ;; => 5
  (count "")                         ;; => 0

  (string? "hello")                  ;; => true
  (string? :not-a-string)            ;; => false
)


;; clojure.string  (required as str)

(comment
  ;; Case
  (str/upper-case "hello")          ;; => "HELLO"
  (str/lower-case "WORLD")          ;; => "world"
  (str/capitalize "hello world")    ;; => "Hello world"

  ;; Trimming whitespace
  (str/trim  "  hello  ")           ;; => "hello"
  (str/triml "  hello  ")           ;; => "hello  "  (left only)
  (str/trimr "  hello  ")           ;; => "  hello"  (right only)
  (str/trim-newline "hello\\n")      ;; => "hello"

  ;; Joining
  (str/join ", " ["one" "two" "three"])  ;; => "one, two, three"
  (str/join ["a" "b" "c"])               ;; => "abc"

  ;; Splitting
  (str/split "a,b,c,d" #",")        ;; => ["a" "b" "c" "d"]
  (str/split "hello world" #"\\s+")  ;; => ["hello" "world"]
  (str/split-lines "one\\ntwo\\nthree") ;; => ["one" "two" "three"]

  ;; Search predicates
  (str/includes?    "hello world" "world")  ;; => true
  (str/starts-with? "hello world" "hello")  ;; => true
  (str/ends-with?   "hello world" "world")  ;; => true
  (str/blank?       "   ")                  ;; => true
  (str/blank?       "  x  ")               ;; => false

  (str/index-of      "hello world" "world")  ;; => 6
  (str/last-index-of "abcabc" "b")           ;; => 4

  (str/reverse "hello")             ;; => "olleh"
)


;; Replace

(comment
  ;; Literal match
  (str/replace "hello world" "world" "Clojure") ;; => "hello Clojure"

  ;; Regex — all matches
  (str/replace "hello world" #"[aeiou]" "*")    ;; => "h*ll* w*rld"

  ;; Regex + function — receives match string (or vector when groups present)
  (str/replace "hello world"
               #"\\b\\w"
               (fn [match] (str/upper-case match)))
  ;; => "Hello World"

  ;; replace-first — only the first occurrence
  (str/replace-first "aabbaabb" "b" "X")        ;; => "aaXbaabb"
  (str/replace-first "hello" #"[aeiou]" "*")    ;; => "h*llo"

  ;; escape — apply a substitution map to every character
  (str/escape "hello & <world>" {\\& "&amp;" \\< "&lt;" \\> "&gt;"})
  ;; => "hello &amp; &lt;world&gt;"
)


;; Strings as Sequences
;;
;; Strings are seqable — all sequence functions work on them.

(comment
  (seq "hello")                      ;; => ("h" "e" "l" "l" "o")

  (first "hello")                    ;; => "h"
  (rest  "hello")                    ;; => ("e" "l" "l" "o")
  (last (seq "hello"))               ;; => "o"  (last needs a seq, not a raw string)

  (count "hello")                    ;; => 5

  (map str/upper-case (seq "hello")) ;; => ("H" "E" "L" "L" "O")

  ;; Set literals not supported yet — use an explicit membership check:
  (filter (fn [c] (some #(= c %) ["a" "e" "i" "o" "u"])) (seq "hello world"))
  ;; => ("e" "o" "o")  (vowels only)

  ;; Rebuild a string after seq manipulation
  (apply str (filter (fn [c] (some #(= c %) ["a" "e" "i" "o" "u"])) (seq "hello world")))
  ;; => "eoo"

  (count "café")                     ;; => 4  (not byte count)
  (seq "café")                       ;; => ("c" "a" "f" "é")
)


;; Regex Literals
;;
;; Patterns follow JavaScript regex rules.

(comment
  #"[0-9]+"                          ;; => #"[0-9]+"

  ;; re-find — first match (string if no groups, vector if groups)
  (re-find #"\\d+" "abc123def456")    ;; => "123"
  (re-find #"(\\w+)@(\\w+)" "me@example.com")
  ;; => ["me@example.com" "me" "example"]  (full match + groups)

  ;; re-matches — match against the ENTIRE string
  (re-matches #"\\d+" "123")          ;; => "123"
  (re-matches #"\\d+" "123abc")       ;; => nil  (not entire string)
  (re-matches #"(\\d{4})-(\\d{2})-(\\d{2})" "2024-03-15")
  ;; => ["2024-03-15" "2024" "03" "15"]

  ;; re-seq — all matches as a lazy sequence
  (re-seq #"\\d+" "abc123def456ghi789")   ;; => ("123" "456" "789")
  (re-seq #"\\b\\w{4}\\b" "the quick brown fox")
  ;; => ("quick" "brown")  (4-letter words)

  ;; re-pattern — create a regex from a string (useful when dynamic)
  (re-find (re-pattern "hello") "say hello!")  ;; => "hello"
)


;; Inline Regex Flags
;;
;;   (?i)  case-insensitive
;;   (?m)  multiline  (^ and $ match line boundaries)
;;   (?s)  dotAll     (. matches newlines too)

(comment
  (re-find #"(?i)hello" "say HELLO!")     ;; => "HELLO"
  (re-matches #"(?i)[a-z]+" "HeLLo")     ;; => "HeLLo"

  (re-seq #"(?m)^\\w+" "one\\ntwo\\nthree") ;; => ("one" "two" "three")

  (re-seq #"(?im)^hello" "Hello\\nHELLO\\nhello")
  ;; => ("Hello" "HELLO" "hello")
)


;; Practical Patterns

(comment
  ;; Parse a CSV row
  (defn parse-csv [line]
    (str/split line #","))

  (parse-csv "alice,30,admin")           ;; => ["alice" "30" "admin"]

  ;; Extract structured data with groups
  (defn parse-date [s]
    (let [[_ y m d] (re-matches #"(\\d{4})-(\\d{2})-(\\d{2})" s)]
      {:year y :month m :day d}))

  (parse-date "2024-03-15")
  ;; => {:year "2024" :month "03" :day "15"}

  ;; Slugify — URL-safe string
  (defn slugify [s]
    (-> s
        str/trim
        str/lower-case
        (str/replace #"[^a-z0-9\\s-]" "")
        (str/replace #"\\s+" "-")))

  (slugify "  Hello, World! It's Clojure  ")
  ;; => "hello-world-its-clojure"

  ;; Template substitution — replace {{key}} placeholders
  (defn render [template data]
    (str/replace template
                 #"\\{\\{(\\w+)\\}\\}"
                 (fn [[_ key]] (get data key ""))))

  (render "Hello, {{name}}! You have {{count}} messages."
          {"name" "Alice" "count" "3"})
  ;; => "Hello, Alice! You have 3 messages."
)
`,$p=`(ns user.errors)

;; Deep Dive: Error Handling
;;
;; Press ⌘+Enter on any form to evaluate it.


;; try / catch / finally

(comment
  ;; No error — returns the value of the body
  (try
    (+ 1 2))           ;; => 3

  ;; catch with :default — catches anything
  (try
    (/ 1 0)
    (catch :default e
      (str "Caught: " (ex-message e))))

  ;; finally — always runs, does NOT change the return value
  (try
    (+ 1 2)
    (finally
      (println "always runs")))   ;; prints, returns 3

  (try
    (/ 1 0)
    (catch :default e
      (println "handling error")
      :recovered)
    (finally
      (println "cleanup")))       ;; => :recovered
)


;; throw
;;
;; You can throw any value — not just error objects.
;; Catch with a predicate function that matches the thrown value.

(comment
  (try
    (throw "something went wrong")
    (catch string? e
      (str "got a string: " e)))

  (try
    (throw :not-found)
    (catch keyword? e
      (str "got a keyword: " e)))

  (try
    (throw 42)
    (catch number? e
      (str "got a number: " (+ e 1))))

  (try
    (throw {:type :validation :field :email :msg "invalid"})
    (catch map? e
      (str "validation error on " (:field e))))
)


;; Catch Discriminators
;;
;; The catch clause tests the thrown value with a discriminator:
;;
;;   :default        — catches everything
;;   :error/runtime  — catches evaluator errors (type errors, etc.)
;;   predicate fn    — checks (pred thrown-value)  e.g. keyword? number? map?
;;   keyword         — matches if thrown is a map with :type = that keyword

(comment
  ;; Throw a plain map with :type to use keyword discriminators.
  ;; This is the idiomatic pattern for named error types in cljam.
  (defn find-user [id]
    (if (pos? id)
      {:id id :name "Alice"}
      (throw {:type :user/not-found :id id})))

  (try
    (find-user -1)
    (catch :user/not-found e
      (str "User not found, id=" (:id e))))

  ;; Multiple catch clauses — matched in order
  (defn risky [x]
    (cond
      (string? x) (throw {:type :bad-type  :given x})
      (neg?    x) (throw {:type :negative  :given x})
      :else       (/ 100 x)))

  (try
    (risky -5)
    (catch :bad-type _  "wrong type")
    (catch :negative _  "negative number")
    (catch :default  e  (str "unexpected: " e)))

  (try (risky "oops") (catch :bad-type _ "wrong type") (catch :negative _ "neg"))
  (try (risky 0)      (catch :default e (ex-message e)))

  ;; :error/runtime — catches interpreter-level errors (type mismatches, etc.)
  (try
    (+ 1 "not a number")
    (catch :error/runtime e
      (str "type error caught: " (ex-message e))))
)


;; ex-info: Structured Errors
;;
;; \`ex-info\` creates an error with a :message, a :data map, and an optional cause.
;; Catch with :default, then inspect with ex-message / ex-data / ex-cause.

(comment
  (try
    (throw (ex-info "User validation failed"
                    {:field  :email
                     :value  "not-an-email"
                     :code   :invalid-format}))
    (catch :default e
      {:message (ex-message e)
       :data    (ex-data    e)}))

  ;; ex-info with a cause (chained errors)
  (try
    (try
      (/ 1 0)
      (catch :default cause
        (throw (ex-info "Database query failed"
                        {:query "SELECT *"}
                        cause))))
    (catch :default e
      {:message (ex-message e)
       :data    (ex-data    e)
       :cause   (ex-message (ex-cause e))}))
)


;; Typed Errors: map-based approach
;;
;; Throw a map with :type (and any extra keys you need).
;; Keyword discriminators match on the :type field — no class hierarchy required.

(defn parse-age [x]
  (cond
    (not (number? x))
    (throw {:type :error/parse :msg "Not a number" :value x})

    (neg? x)
    (throw {:type :error/validation :msg "Age cannot be negative" :value x})

    :else x))

(comment
  (try
    (parse-age "hello")
    (catch :error/parse e
      (str "Parse error: " (:msg e) " (got: " (:value e) ")"))
    (catch :error/validation e
      (str "Validation error: " (:msg e))))

  (try
    (parse-age -5)
    (catch :error/parse e      (str "parse: " (:msg e)))
    (catch :error/validation e (str "validation: " (:msg e))))

  (parse-age 30)               ;; => 30  (no error)
)


;; Practical Patterns

(comment
  ;; Result map {ok? result/error}
  (defn safe-divide [a b]
    (try
      {:ok? true  :result (/ a b)}
      (catch :default e
        {:ok? false :error (ex-message e)})))

  (safe-divide 10 2)   ;; => {:ok? true  :result 5}
  (safe-divide 10 0)   ;; => {:ok? false :error "..."}

  ;; Validate before computing — throw a typed map
  (defn sqrt [n]
    (when (neg? n)
      (throw {:type :error/domain :msg "Cannot take sqrt of negative number" :value n}))
    (loop [x (* 0.5 (+ 1.0 n))]
      (let [next-x (* 0.5 (+ x (/ n x)))
            diff   (max (- next-x x) (- x next-x))]
        (if (< diff 1e-9)
          next-x
          (recur next-x)))))

  (try (sqrt 9)  (catch :default e (:msg e)))          ;; => 3.0
  (try (sqrt -1) (catch :error/domain e (:msg e)))     ;; => "Cannot take sqrt..."

  ;; Wrapping errors with context — using ex-info for the cause chain
  (defn load-user [id]
    (try
      (if (= id 42)
        {:id 42 :name "Alice"}
        (throw (ex-info "User not found" {:id id})))
      (catch :default e
        (throw (ex-info (str "Failed to load profile for id=" id)
                        {:id id}
                        e)))))

  (try
    (load-user 99)
    (catch :default e
      {:msg    (ex-message e)
       :cause  (ex-message (ex-cause e))}))
)
`,Mp={class:"pg"},qp={class:"pg-header"},Sp={class:"pg-header__actions"},jp=["value"],_p={class:"pg-body"},Fp={key:0,class:"pg-loading"},Rp={class:"pg-quickref"},Ap=G({__name:"Playground",setup(t){const e=[{label:"Welcome",content:yp},{label:"Collections",content:wp},{label:"Higher-Order Fns",content:bp},{label:"Destructuring",content:kp},{label:"Strings & Regex",content:xp},{label:"Error Handling",content:$p}],n=U(),r=U(),s=U(),a=U(),i=U(!0),c=U(!1);let l=null,d=null,m=null,p=0;function h(R,z){const ue=document.createElement(R);return z&&(ue.className=z),ue}function y(R){return R<1?`${Math.round(R*1e3)} µs`:R<10?`${+R.toFixed(2)} ms`:R<100?`${+R.toFixed(1)} ms`:R<1e3?`${Math.round(R)} ms`:`${+(R/1e3).toFixed(2)} s`}function w(R,z,ue){const we=h("div","pg-entry"),rt=h("div","pg-entry__source");rt.textContent=ue,we.appendChild(rt);for(const Fe of R)if(Fe.kind==="output"){const he=h("div","pg-entry__output");he.textContent=Fe.text,we.appendChild(he)}else if(Fe.kind==="result"){const he=h("div","pg-entry__result");he.textContent=`→ ${Fe.output} `;const Re=h("span","pg-entry__duration");Re.textContent=`(${y(Fe.durationMs)})`,he.appendChild(Re),we.appendChild(he)}else if(Fe.kind==="error"){const he=h("div","pg-entry__result pg-entry__result--error");he.textContent=`✗ ${Fe.message} `;const Re=h("span","pg-entry__duration");Re.textContent=`(${y(Fe.durationMs)})`,he.appendChild(Re),we.appendChild(he)}z.appendChild(we)}Ve(async()=>{if(!n.value||!s.value||!r.value)return;document.documentElement.classList.add("pg-full-page"),window.MonacoEnvironment={getWorker(oe,Ae){return new Worker(new URL("/cljam/assets/editor.worker-CKy7Pnvo.js",import.meta.url),{type:"module"})}};const[R,{registerClojureLanguage:z,defineMonacoTheme:ue,THEME_ID:we},{findFormBeforeCursor:rt}]=await Promise.all([Ut(()=>import("./editor.main.BRye-Z7e.js"),__vite__mapDeps([2,1])),Ut(()=>import("./clojure-tokens.Co1bCbEI.js"),__vite__mapDeps([3,4])),Ut(()=>import("./find-form.djrglYpo.js"),__vite__mapDeps([5,1]))]);z(R),ue(R),n.value.addEventListener("keydown",oe=>oe.stopPropagation()),l=R.editor.create(n.value,{value:e[0].content,language:"clojure",theme:we,fontSize:14,fontFamily:"'JetBrains Mono', 'SF Mono', ui-monospace, monospace",fontLigatures:!0,lineNumbers:"on",minimap:{enabled:!1},scrollBeyondLastLine:!1,automaticLayout:!0,padding:{top:16,bottom:16},renderLineHighlight:"gutter",bracketPairColorization:{enabled:!0},matchBrackets:"always",overviewRulerLanes:0,hideCursorInOverviewRuler:!0,scrollbar:{verticalScrollbarSize:6,horizontalScrollbarSize:6}}),c.value=!0;const Fe=Hs();function he(oe,Ae,Ft){Re();const Rt=l.getModel();if(!Rt)return;const At=Rt.getPositionAt(Math.max(0,oe-1)).lineNumber,It=Rt.getLineMaxColumn(At),st=document.createElement("span");st.className=Ft?"pg-inline-error":"pg-inline-result",st.textContent=`  ⇒ ${Ae}`;const zt={getId:()=>"pg.inline",getDomNode:()=>st,getPosition:()=>({position:{lineNumber:At,column:It},preference:[R.editor.ContentWidgetPositionPreference.EXACT]})};d=zt,l.addContentWidget(zt),m=l.onDidChangeModelContent(()=>Re())}function Re(){d&&(l.removeContentWidget(d),d=null),m==null||m.dispose(),m=null}async function Us(){const oe=l.getValue();if(!oe.trim())return;const Ae=l.getModel(),Ft=l.getPosition(),Rt=Ae&&Ft?Ae.getOffsetAt(Ft):oe.length,pt=rt(oe,Rt),At=pt?oe.slice(pt.start,pt.end):oe.trim(),It=pt?pt.end:oe.trimEnd().length,st=await En(Fe,At);i.value=!1,w(st,s.value,At),r.value.scrollTop=r.value.scrollHeight;const zt=oe.slice(It).trim().length>0,lr=cr=>zt?cr.split(`
`)[0]:cr,Qe=st[st.length-1];(Qe==null?void 0:Qe.kind)==="result"?he(It,lr(Qe.output),!1):(Qe==null?void 0:Qe.kind)==="error"&&he(It,lr(Qe.message),!0)}async function ir(){const oe=l.getValue();if(!oe.trim())return;Re();const Ae=await En(Fe,oe.trim());i.value=!1,w(Ae,s.value,oe.trim()),r.value.scrollTop=r.value.scrollHeight}l.addCommand(R.KeyMod.CtrlCmd|R.KeyCode.Enter,()=>{Us()}),l.addCommand(R.KeyMod.CtrlCmd|R.KeyMod.Shift|R.KeyCode.Enter,()=>{ir()}),$=ir,S=()=>{s.value.innerHTML="",i.value=!0,Re()},P=oe=>{const Ae=e[oe];if(!Ae)return;if(!window.confirm(`Load "${Ae.label}"?

Your current edits will be lost.`)){a.value&&(a.value.value=String(p));return}p=oe,l.setValue(Ae.content),Re()}}),ln(()=>{document.documentElement.classList.remove("pg-full-page"),m==null||m.dispose(),l&&(l.dispose(),l=null)});let $=null,S=null,P=null;function L(){$==null||$()}function N(){S==null||S()}function H(R){const z=Number(R.target.value);P==null||P(z)}return(R,z)=>(b(),j("div",Mp,[_("header",qp,[z[0]||(z[0]=_("div",{class:"pg-header__left"},[_("span",{class:"pg-header__title"},"cljam REPL"),_("span",{class:"pg-header__hint"},[_("kbd",null,"⌘Enter"),Ke(" eval form   "),_("kbd",null,"⇧⌘Enter"),Ke(" eval all")])],-1)),_("div",Sp,[_("select",{class:"pg-btn pg-sample-select",ref_key:"sampleSelectRef",ref:a,onChange:H},[(b(),j(Z,null,ce(e,(ue,we)=>_("option",{key:we,value:String(we)},Q(ue.label),9,jp)),64))],544),_("button",{class:"pg-btn pg-btn--primary",onClick:L,title:"Evaluate the entire editor buffer (Shift+⌘Enter)"},"Run all"),_("button",{class:"pg-btn pg-btn--danger",onClick:N,title:"Clear the output panel"},"Clear output")])]),_("div",_p,[_("div",{class:"pg-editor-wrap",ref_key:"editorWrapRef",ref:n},[c.value?E("",!0):(b(),j("div",Fp,"Loading editor…"))],512),_("div",{class:"pg-output",ref_key:"outputRef",ref:r},[_("div",{class:"pg-output-inner",ref_key:"outputInnerRef",ref:s},null,512),Nr(_("div",Rp,[...z[1]||(z[1]=[co('<div class="pg-quickref__section"><div class="pg-quickref__label">Shortcuts</div><div class="pg-quickref__shortcut"><kbd>⌘Enter</kbd><span>eval form at cursor</span></div><div class="pg-quickref__shortcut"><kbd>⇧⌘Enter</kbd><span>eval entire buffer</span></div></div><div class="pg-quickref__section"><div class="pg-quickref__label">Tips</div><ul class="pg-quickref__tips"><li>Place cursor inside any <code>(…)</code> <code>[…]</code> <code>{…}</code> and press <kbd>⌘Enter</kbd> to eval just that form</li><li>Place cursor right after a symbol, keyword, or number to eval an atom</li><li><code>def</code> bindings and <code>atom</code> state persist between evals — same session throughout</li><li>Use the sample dropdown to explore collections, HOFs, destructuring, strings, and error handling</li></ul></div><div class="pg-quickref__section"><div class="pg-quickref__label">Available via require</div><div class="pg-quickref__packages"><code>[clojure.string :as str]</code><code>[clojure.edn :as edn]</code><code>[clojure.math :as math]</code><code>[cljam.schema.core :as s]</code><code>[cljam.date :as date]</code><code>[cljam.integrant :as ig]</code></div></div>',3)])],512),[[lo,i.value]])],512)])]))}}),Ip={class:"mr"},Cp={class:"mr-header"},Pp={class:"mr-hint"},Np={class:"mr-actions"},Ep=["disabled"],Lp=["disabled","title"],Tp={key:0},Gp={key:1},Op={key:2},Dp=["rows"],zp={key:0,class:"mr-results"},Vp={class:"mr-arrow"},Bp={class:"mr-value"},Hp={key:0,class:"mr-duration"},Up=G({__name:"MiniRepl",props:{code:{}},setup(t){const e=t,n=U(e.code),r=B(()=>Math.max(3,e.code.split(`
`).length)),s=U(!1),a=U(!1),i=U(!1),c=U(null),l=U(!1),d=U(null),m=U([]),p=U(null),h=B(()=>n.value!==e.code),y=B(()=>!s.value||a.value?"":"editable · ⌘/Ctrl + Enter to run");let w=0,$=null;Ve(()=>{$=Hs(),s.value=!0,bt(S)}),De(()=>e.code,R=>{n.value=R,bt(S)});function S(){const R=p.value;R&&(R.style.height="auto",R.style.height=`${R.scrollHeight}px`)}function P(){n.value=e.code,bt(S)}function L(R){if(R.key==="Enter"&&(R.metaKey||R.ctrlKey)){R.preventDefault(),N();return}if(R.key==="Tab"&&!R.shiftKey){R.preventDefault();const z=p.value;if(!z)return;const ue=z.selectionStart,we=z.selectionEnd,rt=n.value;n.value=rt.slice(0,ue)+"  "+rt.slice(we),bt(()=>{z.selectionStart=z.selectionEnd=ue+2,S()})}}async function N(){if(!(!$||a.value)){a.value=!0,i.value=!0,m.value=[],c.value=null,l.value=!1,d.value=null;try{const R=await En($,n.value);for(const z of R)z.kind==="output"?m.value.push({id:w++,text:z.text}):z.kind==="result"?(c.value=z.output,d.value=z.durationMs):z.kind==="error"&&(c.value=z.message,l.value=!0,d.value=z.durationMs)}finally{a.value=!1}}}function H(R){return R<1?`${Math.round(R*1e3)} µs`:R<10?`${R.toFixed(2)} ms`:R<100?`${R.toFixed(1)} ms`:R<1e3?`${Math.round(R)} ms`:`${(R/1e3).toFixed(2)} s`}return(R,z)=>(b(),j("div",Ip,[_("div",Cp,[z[1]||(z[1]=_("span",{class:"mr-lang"},"cljam",-1)),_("span",Pp,Q(y.value),1),_("div",Np,[h.value?(b(),j("button",{key:0,type:"button",class:"mr-btn mr-btn--ghost",onClick:P,disabled:a.value,title:"Reset to the original snippet"},"Reset",8,Ep)):E("",!0),_("button",{type:"button",class:"mr-btn",onClick:N,disabled:a.value||!s.value,title:s.value?"Evaluate this snippet (Ctrl/Cmd + Enter)":"Loading runtime..."},[a.value?(b(),j("span",Tp,"running…")):s.value?(b(),j("span",Op,"▶ Run")):(b(),j("span",Gp,"loading…"))],8,Lp)])]),Nr(_("textarea",{ref_key:"taRef",ref:p,class:"mr-code","onUpdate:modelValue":z[0]||(z[0]=ue=>n.value=ue),spellcheck:"false",autocapitalize:"off",autocomplete:"off",autocorrect:"off",rows:r.value,onInput:S,onKeydown:L},null,40,Dp),[[uo,n.value]]),i.value?(b(),j("div",zp,[(b(!0),j(Z,null,ce(m.value,ue=>(b(),j("div",{key:`p-${ue.id}`,class:"mr-line mr-line--print"},Q(ue.text),1))),128)),c.value!==null?(b(),j("div",{key:0,class:X(["mr-line",{"mr-line--error":l.value}])},[_("span",Vp,Q(l.value?"✗":"⇒"),1),_("span",Bp,Q(c.value),1),d.value!==null?(b(),j("span",Hp,"("+Q(H(d.value))+")",1)):E("",!0)],2)):E("",!0)])):E("",!0)]))}}),Kp=V(Up,[["__scopeId","data-v-dd7091a5"]]),Qp={extends:Hc,enhanceApp({app:t}){t.component("Playground",Ap),t.component("MiniRepl",Kp)}};export{Qp as R,jl as c,Mt as t,K as u};
