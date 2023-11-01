"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2129],{13234:function(e,t,n){n.d(t,{a:function(){return i}});var r=n(85893);n(67294);var a=n(33082),s=n.n(a),o=n(41007);function i(e){let{setIsVisible:t}=e;return(0,r.jsx)(s(),{partialVisibility:!0,onChange:e=>t(e),children:(0,r.jsx)("div",{className:"flex w-full items-center justify-center p-4",children:(0,r.jsx)(o.T,{})})})}},82055:function(e,t,n){n.d(t,{I:function(){return g}});var r=n(85893),a=n(25675),s=n.n(a),o=n(67294),i=n(32512),l=n(77376),u=n(353),c=n(41007),d=n(27621);function g(e){let{stack:t,onImageUploaded:n}=e,[a,g]=(0,o.useState)(!1),[f,p]=(0,o.useState)(null==t?void 0:t.image),[m,h]=(0,o.useState)(null);async function k(){let e=await fetch("/api/images/sign").then(e=>e.json());return null==e?void 0:e.uploadURL}async function b(e){var t;let{file:n,signedUrl:r}=e,a=new FormData;a.append("file",n);let s=await fetch(r,{method:"POST",body:a}).then(e=>e.json());return null==s?void 0:null===(t=s.result)||void 0===t?void 0:t.id}let y=(0,o.useCallback)(async e=>{g(!0);let t=e[0],r=await k();if(!r)return g(!1),console.error("No signed url");let a=await b({file:t,signedUrl:r});if(!a)return g(!1),console.error("Upload failed");let s="".concat(d.n,"/").concat(a,"/stack");return g(!1),h(s),n(s)},[]),{getRootProps:v,getInputProps:x}=(0,i.uI)({onDrop:y,maxSize:1e6,accept:".jpg,.png,.jpeg",multiple:!1});return f||m?(0,r.jsxs)("div",{className:"relative inline-block w-24 h-24 border border-gray-100 rounded-lg dark:border-gray-900",children:[(0,r.jsx)(s(),{alt:"stack image preview",src:f||m,width:96,height:96,layout:"fixed",quality:100,className:"inline-block rounded-lg"}),(0,r.jsx)("button",{onClick:()=>{p(!1),h(null),n(null)},className:"absolute p-2 text-white border-2 border-white rounded-full shadow-md cursor-pointer -top-3 -right-3 bg-gray-1000 hover:bg-red-500 focus:bg-red-500 dark:border-gray-800 dark:bg-gray-700",children:(0,r.jsx)(l.Z,{size:16})})]}):(0,r.jsxs)("div",{...v(),className:"text-tertiary flex h-24 w-24 cursor-pointer items-center justify-center rounded-md border border-dashed border-gray-200 bg-gray-100 p-6 hover:bg-gray-150 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600 dark:hover:bg-gray-800",children:[(0,r.jsx)("input",{...x()}),a?(0,r.jsx)(c.T,{}):(0,r.jsx)(u.Z,{size:16})]})}},97407:function(e,t,n){n.d(t,{f:function(){return N}});var r=n(85893),a=n(11163),s=n(67294),o=n(4227),i=n(2954),l=n(13234),u=n(41007),c=n(25675),d=n.n(c),g=n(23297);let f=s.memo(e=>{let{stack:t,active:n}=e;return(0,r.jsx)(g.H,{href:"/stack/[slug]",as:"/stack/".concat(t.slug),title:t.name,description:null,byline:null,leadingAccessory:(0,r.jsx)(d(),{src:t.image,width:48,height:48,layout:"fixed",alt:"".concat(t.name," icon"),className:"rounded-xl"}),active:n,onClick:e=>{e.metaKey&&(e.preventDefault(),e.stopPropagation(),window.open(t.url,"_blank").focus())}},t.name)});var p=n(61896),m=n(51639),h=n(22911),k=n(5700),b=n(35539),y=n(80705),v=n(41576),x=n(12927),j=n(82055);function S(e){let{closeModal:t}=e,[n,o]=s.useState(""),[l,c]=s.useState(""),[d,g]=s.useState(""),[f,p]=s.useState(null),[h,k]=s.useState(""),[S,w]=s.useState(!1),[C,N]=s.useState(""),I=(0,a.useRouter)(),[A]=(0,i.cO)({onCompleted:e=>{let{addStack:{slug:n}}=e;return t(),I.push("/stack/".concat(n))},refetchQueries:[x.s],onError(e){let{message:t}=e,n=t.replace("GraphQL error:","");N(n),o(""),w(!1)}});function P(e){return e.preventDefault(),w(!0),A({variables:{data:{url:n,name:l,description:d,image:h,tag:f}}})}function X(e){if(13===e.keyCode&&e.metaKey)return P(e)}let Z=e=>["indie","open source"].indexOf(e.name)>=0;return(0,r.jsxs)("div",{className:"space-y-3 p-4",children:[(0,r.jsx)(j.I,{stack:null,onImageUploaded:function(e){return k(e)}}),(0,r.jsxs)("form",{className:"space-y-3",onSubmit:P,children:[(0,r.jsx)(v.U,{filter:Z,defaultValue:f,onChange:p}),(0,r.jsx)(y.II,{type:"text",placeholder:"Add a url...",value:n,onChange:function(e){return C&&N(""),o(e.target.value)},onKeyDown:X}),(0,r.jsx)(y.II,{type:"text",placeholder:"Name",value:l,onChange:function(e){return C&&N(""),c(e.target.value)},onKeyDown:X}),(0,r.jsx)(y.gx,{rows:4,placeholder:"Description",value:d,onChange:function(e){return C&&N(""),g(e.target.value)},onKeyDown:X}),(0,r.jsx)("div",{className:"flex justify-end",children:(0,r.jsx)(m.ZP,{disabled:!n||!h,onClick:P,children:S?(0,r.jsx)(u.T,{}):"Save"})}),C&&(0,r.jsx)(b.hW,{children:C})]})]})}function w(e){let{trigger:t}=e;return(0,r.jsx)(k.a,{trigger:t,title:"New stack",modalContent:e=>{let{closeModal:t}=e;return(0,r.jsx)(S,{closeModal:t})}})}function C(e){var t;let{scrollContainerRef:n}=e,{data:a}=(0,i.YC)();return(0,r.jsx)(h.T,{scrollContainerRef:n,title:"Stack",trailingAccessory:(null==a?void 0:null===(t=a.viewer)||void 0===t?void 0:t.isAdmin)?(0,r.jsx)(w,{trigger:(0,r.jsx)(m.gh,{"aria-label":"Add Stack",size:"small-square",children:(0,r.jsx)(p.Z,{size:16})})}):null})}function N(){let e=(0,a.useRouter)(),[t,n]=s.useState(!1),[c,d]=s.useState(null),{data:g,loading:p,fetchMore:m}=(0,i.Xm)();return(s.useEffect(()=>{t&&m({variables:{after:g.stacks.pageInfo.endCursor}})},[t]),!p||(null==g?void 0:g.stacks))?(0,r.jsxs)(o.V,{"data-cy":"stack-list",onRef:d,children:[(0,r.jsx)(C,{scrollContainerRef:c}),(0,r.jsxs)("div",{className:"pb-24 lg:space-y-1 lg:p-3",children:[g.stacks.edges.map(t=>{let n=e.query.slug===t.node.slug;return(0,r.jsx)(f,{stack:t.node,active:n},t.node.id)}),g.stacks.pageInfo.hasNextPage&&(0,r.jsx)(l.a,{setIsVisible:n})]})]}):(0,r.jsxs)(o.V,{onRef:d,children:[(0,r.jsx)(C,{scrollContainerRef:c}),(0,r.jsx)("div",{className:"flex flex-1 items-center justify-center",children:(0,r.jsx)(u.T,{})})]})}},87507:function(e,t,n){var r=n(85944);let a={home:{label:"Home",path:"/",seo:r.x},about:{label:"About",path:"/about",seo:(0,r.vX)({title:"About",url:"about"})},newsletter:{label:"Newsletter",path:"/newsletter",seo:(0,r.vX)({title:"Newsletter",description:"Sharing my journey so you can learn from my mistakes",image:"og/writing.png",url:"newsletter"})},bookmarks:{label:"Bookmarks",path:"/bookmarks",seo:(0,r.vX)({title:"Bookmarks",description:"Internet things, saved for later.",image:"og/bookmarks.png",url:"bookmarks"})},audits:{label:"Audits",path:"/audits",seo:(0,r.vX)({title:"Audits",description:"My security portfolio",image:"og/audits.png",url:"audits"})},ama:{label:"AMA",path:"/ama",seo:(0,r.vX)({title:"AMA",description:"Ask me anything.",image:"og/ama.png",url:"ama"})},stack:{label:"Stack",path:"/stack",seo:(0,r.vX)({title:"Stack",description:"Tools & Software that I use",image:"og/stack.png",url:"stack"})},settings:{label:"Settings",path:"/settings",seo:(0,r.vX)({title:"Settings",description:"Profile Settings",image:"og/settings.png",url:"settings"})},process:{label:"Hire me",path:"/work",seo:(0,r.vX)({title:"101: Booking an audit",description:"My transparent process & fair pricing",image:"og/work.png"})},subscribe:{label:"Subscribe",path:"/subscribe",seo:(0,r.vX)({title:"Newsletter",description:"Subscribe to my newsletter",image:"og/newsletter.png"})},glossary:{label:"Glossary",path:"/glossary",seo:(0,r.vX)({title:"Web3 Glossary",description:"Glossary for Web3",image:"og/glossary.png"})},confirm:{label:"Confirm",path:"/confirm",seo:(0,r.vX)({title:"Thank you!",description:"You are now part of tl;dr bytes032",image:"og/confirm.png"})}};t.Z=a},12927:function(e,t,n){n.d(t,{P:function(){return k},s:function(){return h}});var r=n(7297),a=n(22865),s=n(47362);function o(){let e=(0,r.Z)(["\n  fragment StackCore on Stack {\n    __typename\n    id\n    name\n    image\n    url\n    slug\n  }\n"]);return o=function(){return e},e}function i(){let e=(0,r.Z)(["\n  fragment StackListItem on Stack {\n    ...StackCore\n  }\n  ","\n"]);return i=function(){return e},e}function l(){let e=(0,r.Z)(["\n  fragment StackDetail on Stack {\n    ...StackCore\n    createdAt\n    description\n    reactionCount\n    viewerHasReacted\n    usedByViewer\n    usedBy {\n      ...UserInfo\n    }\n    tags {\n      name\n    }\n  }\n  ","\n  ","\n"]);return l=function(){return e},e}function u(){let e=(0,r.Z)(["\n  fragment StacksConnection on StacksConnection {\n    pageInfo {\n      hasNextPage\n      totalCount\n      endCursor\n    }\n    edges {\n      cursor\n      node {\n        ...StackListItem\n      }\n    }\n  }\n  ","\n"]);return u=function(){return e},e}let c=(0,a.Ps)(o()),d=(0,a.Ps)(i(),c),g=(0,a.Ps)(l(),c,s.T),f=(0,a.Ps)(u(),d);function p(){let e=(0,r.Z)(["\n  query getStacks($first: Int, $after: String) {\n    stacks(first: $first, after: $after) {\n      ...StacksConnection\n    }\n  }\n  ","\n"]);return p=function(){return e},e}function m(){let e=(0,r.Z)(["\n  query getStack($slug: String!) {\n    stack(slug: $slug) {\n      ...StackDetail\n    }\n  }\n  ","\n  ","\n"]);return m=function(){return e},e}let h=(0,a.Ps)(p(),f),k=(0,a.Ps)(m(),g,s.T)},27621:function(e,t,n){n.d(t,{n:function(){return r}});let r="https://imagedelivery.net/y1nPsqmqLug53NahIyWnqQ"}}]);