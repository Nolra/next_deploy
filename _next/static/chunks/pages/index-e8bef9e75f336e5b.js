(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(4582)}])},8872:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return x}});let i=r(8754),n=r(1757),a=n._(r(7294)),s=r(3935),o=i._(r(2636)),l=r(5471),c=r(3735),d=r(3341);r(4210);let u=r(9955),m=i._(r(7746)),f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",dangerouslyAllowSVG:!1,unoptimized:!1};function p(e,t,r,i,n,a){let s=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===s)return;e["data-loaded-src"]=s;let o="decode"in e?e.decode():Promise.resolve();o.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===t&&n(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,n=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}})}function g(e){let[t,r]=a.version.split("."),i=parseInt(t,10),n=parseInt(r,10);return i>18||18===i&&n>=3?{fetchPriority:e}:{fetchpriority:e}}let h=(0,a.forwardRef)((e,t)=>{let{src:r,srcSet:i,sizes:n,height:s,width:o,decoding:l,className:c,style:d,fetchPriority:u,placeholder:m,loading:f,unoptimized:h,fill:_,onLoadRef:x,onLoadingCompleteRef:b,setBlurComplete:v,setShowAltText:j,onLoad:w,onError:y,...N}=e;return a.default.createElement("img",{...N,...g(u),loading:f,width:o,height:s,decoding:l,"data-nimg":_?"fill":"1",className:c,style:d,sizes:n,srcSet:i,src:r,ref:(0,a.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(y&&(e.src=e.src),e.complete&&p(e,m,x,b,v,h))},[r,m,x,b,v,y,h,t]),onLoad:e=>{let t=e.currentTarget;p(t,m,x,b,v,h)},onError:e=>{j(!0),"blur"===m&&v(!0),y&&y(e)}})});function _(e){let{isAppRouter:t,imgAttributes:r}=e,i={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...g(r.fetchPriority)};return t?((0,s.preload)(r.src,i),null):a.default.createElement(o.default,null,a.default.createElement("link",{key:"__nimg-"+r.src+r.srcSet+r.sizes,rel:"preload",href:r.srcSet?void 0:r.src,...i}))}let x=(0,a.forwardRef)((e,t)=>{let r=(0,a.useContext)(u.RouterContext),i=(0,a.useContext)(d.ImageConfigContext),n=(0,a.useMemo)(()=>{let e=f||i||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[i]),{onLoad:s,onLoadingComplete:o}=e,p=(0,a.useRef)(s);(0,a.useEffect)(()=>{p.current=s},[s]);let g=(0,a.useRef)(o);(0,a.useEffect)(()=>{g.current=o},[o]);let[x,b]=(0,a.useState)(!1),[v,j]=(0,a.useState)(!1),{props:w,meta:y}=(0,l.getImgProps)(e,{defaultLoader:m.default,imgConf:n,blurComplete:x,showAltText:v});return a.default.createElement(a.default.Fragment,null,a.default.createElement(h,{...w,unoptimized:y.unoptimized,placeholder:y.placeholder,fill:y.fill,onLoadRef:p,onLoadingCompleteRef:g,setBlurComplete:b,setShowAltText:j,ref:t}),y.priority?a.default.createElement(_,{isAppRouter:!r,imgAttributes:w}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5471:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return o}}),r(4210);let i=r(7757),n=r(3735);function a(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function o(e,t){var r;let o,l,c,{src:d,sizes:u,unoptimized:m=!1,priority:f=!1,loading:p,className:g,quality:h,width:_,height:x,fill:b=!1,style:v,onLoad:j,onLoadingComplete:w,placeholder:y="empty",blurDataURL:N,fetchPriority:S,layout:E,objectFit:C,objectPosition:P,lazyBoundary:z,lazyRoot:k,...I}=e,{imgConf:O,showAltText:R,blurComplete:A,defaultLoader:L}=t,M=O||n.imageConfigDefault;if("allSizes"in M)o=M;else{let e=[...M.deviceSizes,...M.imageSizes].sort((e,t)=>e-t),t=M.deviceSizes.sort((e,t)=>e-t);o={...M,allSizes:e,deviceSizes:t}}let H=I.loader||L;delete I.loader,delete I.srcSet;let V="__next_img_default"in H;if(V){if("custom"===o.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=H;H=t=>{let{config:r,...i}=t;return e(i)}}if(E){"fill"===E&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[E];e&&(v={...v,...e});let t={responsive:"100vw",fill:"100vw"}[E];t&&!u&&(u=t)}let D="",F=s(_),T=s(x);if("object"==typeof(r=d)&&(a(r)||void 0!==r.src)){let e=a(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,c=e.blurHeight,N=N||e.blurDataURL,D=e.src,!b){if(F||T){if(F&&!T){let t=F/e.width;T=Math.round(e.height*t)}else if(!F&&T){let t=T/e.height;F=Math.round(e.width*t)}}else F=e.width,T=e.height}}let W=!f&&("lazy"===p||void 0===p);(!(d="string"==typeof d?d:D)||d.startsWith("data:")||d.startsWith("blob:"))&&(m=!0,W=!1),o.unoptimized&&(m=!0),V&&d.endsWith(".svg")&&!o.dangerouslyAllowSVG&&(m=!0),f&&(S="high");let B=s(h),G=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:C,objectPosition:P}:{},R?{}:{color:"transparent"},v),U="blur"===y&&N&&!A?{backgroundSize:G.objectFit||"cover",backgroundPosition:G.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:F,heightInt:T,blurWidth:l,blurHeight:c,blurDataURL:N,objectFit:G.objectFit})+'")'}:{},X=function(e){let{config:t,src:r,unoptimized:i,width:n,quality:a,sizes:s,loader:o}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,r){let{deviceSizes:i,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:i,kind:"w"};let a=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:a,kind:"x"}}(t,n,s),d=l.length-1;return{sizes:s||"w"!==c?s:"100vw",srcSet:l.map((e,i)=>o({config:t,src:r,quality:a,width:e})+" "+("w"===c?e:i+1)+c).join(", "),src:o({config:t,src:r,quality:a,width:l[d]})}}({config:o,src:d,unoptimized:m,width:F,quality:B,sizes:u,loader:H}),q={...I,loading:W?"lazy":p,fetchPriority:S,width:F,height:T,decoding:"async",className:g,style:{...G,...U},sizes:X.sizes,srcSet:X.srcSet,src:X.src},J={unoptimized:m,priority:f,placeholder:y,fill:b};return{props:q,meta:J}}},7757:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:n,blurDataURL:a,objectFit:s}=e,o=i||t,l=n||r,c=a.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return o&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "+o+" "+l+"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+(i&&n?"1":"20")+"'/%3E"+c+"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"+a+"'/%3E%3C/svg%3E":"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"+("contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' x='0' y='0' height='100%25' width='100%25' href='"+a+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},2555:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return c},unstable_getImgProps:function(){return l}});let i=r(8754),n=r(5471),a=r(4210),s=r(8872),o=i._(r(7746)),l=e=>{(0,a.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,n.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},c=s.Image},7746:function(e,t){"use strict";function r(e){let{config:t,src:r,width:i,quality:n}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+i+"&q="+(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},4582:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var i=r(5893),n=r(1189),a=r.n(n),s=r(9008),o=r.n(s),l=r(5675),c=r.n(l),d=r(9034),u=r.n(d),m={src:"https://nolra.github.io/next_deploy/_next/static/media/vercel.3c8eefce.svg",height:64,width:283,blurWidth:0,blurHeight:0},f={src:"https://nolra.github.io/next_deploy/_next/static/media/next.3baf90a6.svg",height:80,width:394,blurWidth:0,blurHeight:0};function p(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o(),{children:[(0,i.jsx)("title",{children:"Create Next App"}),(0,i.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsxs)("main",{className:u().main,children:[(0,i.jsxs)("div",{className:u().description,children:[(0,i.jsxs)("p",{children:["Get started by editing\xa0",(0,i.jsx)("code",{className:u().code,children:"pages/index.js"})]}),(0,i.jsx)("div",{children:(0,i.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["By"," ",(0,i.jsx)(c(),{src:m,alt:"Vercel Logo",className:u().vercelLogo,width:100,height:24,priority:!0})]})})]}),(0,i.jsx)("div",{className:u().center,children:(0,i.jsx)(c(),{className:u().logo,src:f,alt:"Next.js Logo",width:180,height:37,priority:!0})}),(0,i.jsxs)("div",{className:u().grid,children:[(0,i.jsxs)("a",{href:"https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:u().card,target:"_blank",rel:"noopener noreferrer",children:[(0,i.jsxs)("h2",{className:a().className,children:["Docs ",(0,i.jsx)("span",{children:"->"})]}),(0,i.jsx)("p",{className:a().className,children:"Find in-depth information about Next.js features and\xa0API."})]}),(0,i.jsxs)("a",{href:"https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:u().card,target:"_blank",rel:"noopener noreferrer",children:[(0,i.jsxs)("h2",{className:a().className,children:["Learn ",(0,i.jsx)("span",{children:"->"})]}),(0,i.jsx)("p",{className:a().className,children:"Learn about Next.js in an interactive course with\xa0quizzes!"})]}),(0,i.jsxs)("a",{href:"https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:u().card,target:"_blank",rel:"noopener noreferrer",children:[(0,i.jsxs)("h2",{className:a().className,children:["Templates ",(0,i.jsx)("span",{children:"->"})]}),(0,i.jsx)("p",{className:a().className,children:"Discover and deploy boilerplate example Next.js\xa0projects."})]}),(0,i.jsxs)("a",{href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:u().card,target:"_blank",rel:"noopener noreferrer",children:[(0,i.jsxs)("h2",{className:a().className,children:["Deploy ",(0,i.jsx)("span",{children:"->"})]}),(0,i.jsx)("p",{className:a().className,children:"Instantly deploy your Next.js site to a shareable URL with\xa0Vercel."})]})]})]})]})}},1189:function(e){e.exports={style:{fontFamily:"'__Inter_8e0edc', '__Inter_Fallback_8e0edc'",fontStyle:"normal"},className:"__className_8e0edc"}},9034:function(e){e.exports={main:"Home_main__VkIEL",description:"Home_description__uXNdx",code:"Home_code__VVrIr",grid:"Home_grid__AVljO",card:"Home_card__E5spL",center:"Home_center__O_TIN",logo:"Home_logo__IOQAX",content:"Home_content__tkQPU",vercelLogo:"Home_vercelLogo___BVuc",rotate:"Home_rotate__c5eru"}},9008:function(e,t,r){e.exports=r(2636)},5675:function(e,t,r){e.exports=r(2555)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);