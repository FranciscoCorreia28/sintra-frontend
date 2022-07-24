import{r as i,R as $}from"./react.9acfbd05.js";import{c as q}from"./react-dom.e7cc7072.js";import{L,B as A}from"./react-router-dom.8fb1f078.js";import{a,j as e,F as f,k as b,W as N,b as p,m as F,r as c}from"./@headlessui.d8706d4d.js";import{C as R,S as G,a as H,b as U,G as W,B as Q,H as J,c as _}from"./phosphor-react.0246dfb8.js";import{X as V,M as X,S as C,C as k}from"./@heroicons.da60adcc.js";import{Q as K}from"./react-data-table-component.24e01548.js";import{C as Y,a as Z,L as ee,b as ae,p as te,c as le,d as se}from"./chart.js.aa5f67c0.js";import{B as re}from"./react-chartjs-2.1ec9ee25.js";import{f as M}from"./faker.dba91025.js";import{d as ne,e as y}from"./react-router.09d3eee0.js";import"./scheduler.80f1effd.js";import"./history.d536333f.js";import"./@babel.ca400948.js";import"./styled-components.dd10576b.js";import"./react-is.588f3037.js";import"./@emotion.33d3dd4a.js";import"./hoist-non-react-statics.cfa84058.js";const ie=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))h(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&h(u)}).observe(document,{childList:!0,subtree:!0});function m(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function h(s){if(s.ep)return;s.ep=!0;const n=m(s);fetch(s.href,n)}};ie();const O=[{id:1,label:"Home",icon:H,link:"/"},{id:2,label:"Produtos",icon:U,link:"/produtos"},{id:3,label:"Defini\xE7\xF5es",icon:W,link:"/perfil"}],oe=()=>{const[l,t]=i.exports.useState(!0),[m,h]=i.exports.useState(!1),s=()=>{h(!m)},n=()=>{t(!l)},u=l?"mt-2 text-lg font-medium text-blue-200 ":"mt-2 text-lg font-medium text-blue-200 hidden ",v=l?"h-screen px-4  pt-8 pb-4 bg-white flex flex-col justify-between border  w-80":"h-screen px-4  pt-8 pb-4 bg-white flex flex-col justify-between border border-dashed w-20",x=window.location,g=i.exports.useMemo(()=>O.find(o=>o.link===x.pathname),[x.pathname]),d=o=>`text-black flex items-center cursor-pointer hover:bg-slate-100 rounded w-full overflow-hidden whitespace-nowrap ${(g==null?void 0:g.id)===(o==null?void 0:o.id)?"bg-slate-100":""}`;return a("div",{className:`${v} ease-in-out duration-300 border-r border-gray-100`,onMouseEnter:s,onMouseLeave:s,children:[a("div",{className:" flex flex-col",children:[a("div",{className:"flex items-center justify-between relative",children:[a("div",{className:`flex items-center pl-1 gap-4 text-[#6C8CF5] text-lg font-extrabold ${l?"":"hidden"}`,children:[e("div",{className:"flex-shrink-0",children:e("img",{className:"h-8 w-8",src:"https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg",alt:"Workflow"})}),e("span",{className:u})]}),m&&e("button",{className:"flex justify-end text-gray-600 p-2 rounded bg-slate-200 absolute right-0",onClick:n,children:e(R,{size:20})})]}),e("div",{className:"flex flex-col items-start mt-24",children:O.map(({icon:o,...r})=>{const z=d(r);return e("div",{className:z,children:a(L,{to:r.link,className:"flex py-3 px-3 items-center w-full h-full",children:[e("div",{className:"text-gray-600 w-10",children:e(o,{size:25})}),l&&e("span",{className:"text-lg font-medium text-gray-500",children:r.label})]})},r.id)})})]}),a("div",{className:`${d()} px-3 py-4`,children:[e("div",{className:"text-gray-600 w-10",children:e(G,{size:25})}),l&&e("span",{className:"text-lg font-medium text-gray-500",children:e(L,{to:"/login",children:"Logout"})})]})]})},w={name:" Francisco Correia",email:"francisco@email.com",imageUrl:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},B=[{name:"Dashboard",href:"#",current:!0},{name:"Menu1",href:"#",current:!1},{name:"Menu2",href:"#",current:!1},{name:"Menu3",href:"#",current:!1},{name:"Menu4",href:"#",current:!1}],j=[{name:"Teu perfil",href:"#"},{name:"Op\xE7\xF5es",href:"#"},{name:"Logout",href:"#"}];function S(...l){return l.filter(Boolean).join(" ")}function ce(){return e(f,{children:e(b,{as:"nav",className:"bg-[#6C8CF5] py-2 ",children:({open:l})=>a(f,{children:[e("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:a("div",{className:"flex items-center justify-between h-16",children:[a("div",{className:"flex items-center",children:[e("div",{className:"flex-shrink-0",children:e("img",{className:"h-8 w-8",src:"https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg",alt:"Workflow"})}),e("div",{className:"hidden md:block",children:e("div",{className:"ml-10 flex items-baseline space-x-4",children:B.map(t=>e("a",{href:t.href,className:S(t.current?"bg-white ":"text-gray-300 hover:bg-white hover:text-[#6C8CF5]","px-3 py-2 rounded-md text-base font-medium"),"aria-current":t.current?"page":void 0,children:t.name},t.name))})})]}),e("div",{className:"hidden md:block",children:e("div",{className:"ml-4 flex items-center md:ml-6",children:a(N,{as:"div",className:"ml-3 relative",children:[e("div",{children:a(N.Button,{className:"max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",children:[e("span",{className:"sr-only",children:"abrir menu do usu\xE1rio"}),e("img",{className:"h-8 w-8 rounded-full",src:w.imageUrl,alt:""})]})}),e(p,{as:i.exports.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:e(N.Items,{className:"origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none",children:j.map(t=>e(N.Item,{children:({active:m})=>e("a",{href:t.href,className:S(m?"bg-gray-100":"","block px-4 py-2 text-sm text-[#6C8CF5]"),children:t.name})},t.name))})})]})})}),e("div",{className:"-mr-2 flex md:hidden",children:a(b.Button,{className:"bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",children:[e("span",{className:"sr-only",children:"abrir menu principal"}),l?e(V,{className:"block h-6 w-6","aria-hidden":"true"}):e(X,{className:"block h-6 w-6","aria-hidden":"true"})]})})]})}),a(b.Panel,{className:"md:hidden",children:[e("div",{className:"px-2 pt-2 pb-3 space-y-1 sm:px-3",children:B.map(t=>e(b.Button,{as:"a",href:t.href,className:S(t.current?"bg-white text-gray-700":"text-gray-300 hover:bg-slate-200 hover:text-white","block px-3 py-2 rounded-md text-base font-medium"),"aria-current":t.current?"page":void 0,children:t.name},t.name))}),a("div",{className:"pt-4 pb-3 border-t border-slate-400",children:[a("div",{className:"flex items-center px-5 bg-[#f5f3f78c] py-2",children:[e("div",{className:"flex-shrink-0",children:e("img",{className:"h-10 w-10 rounded-full",src:w.imageUrl,alt:""})}),a("div",{className:"ml-3 ",children:[e("div",{className:"text-base font-medium leading-none text-white",children:w.name}),e("div",{className:"text-sm font-medium leading-none text-white",children:w.email})]})]}),e("div",{className:"mt-3 px-2 space-y-1",children:j.map(t=>e(b.Button,{as:"a",href:t.href,className:"block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-gray-700",children:t.name},t.name))})]})]})]})})})}const E=({children:l})=>a("div",{className:"h-screen flex justify-start",children:[e(oe,{}),a("div",{className:"min-h-screnn  flex-1  ",children:[e(ce,{}),e("main",{className:" md:overflow-y-auto sm:overflow-y-auto h-screen overflow-y-hidden",children:e("div",{className:"max-w-7xl mx-auto py-6 sm:px-6 lg:px-4",children:e("div",{className:"px-4 py-6 sm:px-0 bg-white rounded-xl",children:l})})})]})]}),P=[{name:"Moda e vestu\xE1rio"},{name:"Alimentos"}],D=[{name:"Cal\xE7a"},{name:"Arroz"}],I=[{name:"Para eles"},{name:"Para elas"}];function de(){const[l,t]=i.exports.useState(P[0]),[m,h]=i.exports.useState(I[0]),[s,n]=i.exports.useState(D[0]);let[u,v]=i.exports.useState(!1);function x(){v(!1)}function g(){v(!0)}return a(f,{children:[e("div",{className:"flex items-center justify-end pr-4",children:e("button",{className:"p-2 bg-purple-700 rounded text-white",type:"button",onClick:g,children:"adicionar produto"})}),e(p,{appear:!0,show:u,as:i.exports.Fragment,children:a(F,{as:"div",className:"relative z-10",onClose:x,children:[e(p.Child,{as:i.exports.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"fixed inset-0 bg-black bg-opacity-25"})}),e("div",{className:"fixed inset-0 overflow-y-auto",children:e("div",{className:"flex min-h-full items-center justify-center p-4 text-center",children:e(p.Child,{as:i.exports.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:a(F.Panel,{className:"w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",children:[e(F.Title,{as:"h3",className:"text-2xl font-medium leading-6 text-gray-500 text-center",children:"Detalhes para Upload"}),e("div",{className:"mt-2 w-3/4 m-auto py-12",children:a("form",{action:"",children:[a("div",{className:"flex flex-col gap-4",children:[e("input",{type:"text",name:"",id:"produto",className:"bg-[#F7F7F7] text-[#656565] p-4 rounded focus-visible:outline-[#6f51f7de]",placeholder:"Nome do produto"}),e("textarea",{name:"",id:"descricao",cols:30,rows:5,className:"bg-[#F7F7F7] text-[#656565] p-2 py-4 rounded focus-visible:outline-[#6f51f7de]",placeholder:"Descri\xE7\xE3o do produto"})]}),a("div",{className:"grid grid-cols-2  pt-4 mt-4 gap-8",children:[a("span",{className:"flex flex-col text-gray-500",children:[e("label",{htmlFor:"categoria",className:"font-semibold mb-2 ml-1",children:"Categoria "}),e(c,{value:l,onChange:t,children:a("div",{className:"relative mt-1",children:[a(c.Button,{id:"categoria",className:"bg-[#F7F7F7] text-[#656565] p-4 gap-0  w-full cursor-default rounded  pr-10 text-left   focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-[#6f51f7de] sm:text-sm ",children:[e("span",{className:"block truncate",children:l.name}),e("span",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",children:e(C,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})})]}),e(p,{as:i.exports.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e(c.Options,{className:"absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",children:P.map((d,o)=>e(c.Option,{className:({active:r})=>`relative cursor-default select-none py-2 pl-10 pr-4 ${r?"bg-[#6f51f78a] text-white":"text-gray-900"}`,value:d,children:({selected:r})=>a(f,{children:[e("span",{className:`block truncate ${r?"font-medium":"font-normal"}`,children:d.name}),r?e("span",{className:"absolute inset-y-0 left-0 flex items-center pl-3 text-[#5c27be]",children:e(k,{className:"h-5 w-5","aria-hidden":"true"})}):null]})},o))})})]})})]}),a("span",{className:"flex flex-col text-gray-500 ",children:[e("label",{htmlFor:"tamanho",className:"font-semibold mb-2 ml-1",children:"Tamanho "}),e("input",{type:"number",name:"",id:"tamanho",className:"bg-[#F7F7F7] focus-visible:outline-[#6f51f7de] text-[#656565] p-4 rounded",placeholder:"12"})]}),a("span",{className:"flex flex-col text-gray-500",children:[e("label",{htmlFor:"qtd",className:"font-semibold mb-2 ml-1",children:"Quantidade "}),e("input",{type:"number",name:"",id:"qtd",min:"1",max:"5",className:"bg-[#F7F7F7] in-range:border-green-500 focus-visible:outline-[#6f51f7de] text-[#656565] p-4 rounded",placeholder:"9999999"})]}),a("span",{className:"flex flex-col text-gray-500",children:[e("label",{htmlFor:"genero",className:"font-semibold mb-2 ml-1",children:"Genero "}),e(c,{value:m,onChange:h,children:a("div",{className:"relative mt-1",children:[a(c.Button,{id:"genero",className:"bg-[#F7F7F7] text-[#656565] p-4 gap-0  w-full cursor-default rounded  pr-10 text-left   focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-[#6f51f7de] sm:text-sm ",children:[e("span",{className:"block truncate",children:m.name}),e("span",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",children:e(C,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})})]}),e(p,{as:i.exports.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e(c.Options,{className:"absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",children:I.map((d,o)=>e(c.Option,{className:({active:r})=>`relative cursor-default select-none py-2 pl-10 pr-4 ${r?"bg-[#6f51f78a] text-white":"text-gray-900"}`,value:d,children:({selected:r})=>a(f,{children:[e("span",{className:`block truncate ${r?"font-medium":"font-normal"}`,children:d.name}),r?e("span",{className:"absolute inset-y-0 left-0 flex items-center pl-3 text-[#5c27be]",children:e(k,{className:"h-5 w-5","aria-hidden":"true"})}):null]})},o))})})]})})]}),a("span",{className:"flex flex-col text-gray-500",children:[e("label",{htmlFor:"preco",className:"font-semibold mb-2 ml-1",children:"Pre\xE7o "}),e("input",{type:"number",name:"",id:"preco",className:"bg-[#F7F7F7] focus-visible:outline-[#6f51f7de] text-[#656565] p-4 rounded",placeholder:"93748kz"})]}),a("span",{className:"flex flex-col text-gray-500",children:[e("label",{htmlFor:"subcategoria",className:"font-semibold mb-2 ml-1",children:"SubCategoria "}),e(c,{value:s,onChange:n,children:a("div",{className:"relative mt-1",children:[a(c.Button,{id:"subcategoria",className:"bg-[#F7F7F7] text-[#656565] p-4 gap-0  w-full cursor-default rounded  pr-10 text-left   focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-[#6f51f7de] sm:text-sm ",children:[e("span",{className:"block truncate",children:s.name}),e("span",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",children:e(C,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})})]}),e(p,{as:i.exports.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e(c.Options,{className:"absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",children:D.map((d,o)=>e(c.Option,{className:({active:r})=>`relative cursor-default select-none py-2 pl-10 pr-4 ${r?"bg-[#6f51f78a] text-white":"text-gray-900"}`,value:d,children:({selected:r})=>a(f,{children:[e("span",{className:`block truncate ${r?"font-medium":"font-normal"}`,children:d.name}),r?e("span",{className:"absolute inset-y-0 left-0 flex items-center pl-3 text-[#5c27be]",children:e(k,{className:"h-5 w-5","aria-hidden":"true"})}):null]})},o))})})]})})]})]}),a("div",{className:"flex flex-col mt-12",children:[e("p",{className:"text-center ",children:"carregar imagem"}),e("label",{htmlFor:"imagem",className:"bg-[#F7F7F7] text-[#656565] p-2 py-12 mt-4 rounded  text-center",children:" clique aqui! "}),e("input",{type:"file",id:"imagem",hidden:!0,placeholder:"inserir imagem"})]})]})}),a("div",{className:"mt-4 flex justify-end",children:[e("button",{type:"button",className:"font-medium text-white bg-[#6C8CF5] p-2 rounded self-end hover:bg-[#5275e7] w-28 mr-2",onClick:x,children:"cancelar"}),e("button",{type:"button",className:"inline-flex justify-center rounded-md border border-transparent bg-green-400 px-4 py-2 text-sm font-medium text-white hover:bg-green-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2",children:"Confirmar!"})]})]})})})})]})})]})}const me=[{price:820230,description:"Beetlejuice",name:"\xD3leo",qtd:12,category:"produtos alimentares"},{price:93903,description:"Ghostbusters",name:"Arroz",qtd:20,category:"produtos alimentares"}],ue=[{name:"Nome",selector:l=>l.name,sortable:!0},{name:"Descri\xE7\xE3o",selector:l=>l.description,sortable:!0},{name:"Pre\xE7o",selector:l=>l.price,sortable:!0},{name:"Quantidade",selector:l=>l.qtd,sortable:!0},{name:"Categoria",selector:l=>l.category,sortable:!0}],pe={rowsPerPageText:"produtos por pagina",rangeSeparatorText:"de",selectAllRowsItemText:"todos"},he={rows:{style:{minHeight:"72px"}},headCells:{style:{paddingLeft:"8px",paddingRight:"8px"}},cells:{style:{paddingLeft:"8px",paddingRight:"8px",font:"blue"}}},fe=()=>e(K,{pagination:!0,selectableRows:!0,columns:ue,data:me,title:"Produtos",paginationComponentOptions:pe,highlightOnHover:!0,customStyles:he,theme:"solarized"}),xe=()=>e(E,{children:a("div",{className:"text-black",children:[e(de,{}),e(fe,{})]})}),ge=()=>e(E,{children:a("div",{className:"w-4/5 m-auto",children:[e("div",{className:"m-auto",children:a("header",{className:"py-4 px-2",children:[e("h1",{className:"text-2xl font-normal text-[#6C8CF5]",children:"Defini\xE7\xF5es Gerais"}),e("span",{className:"text-slate-400 mt-2 ml-2 block",children:"Atualize aqui os seus dados"})]})}),e("div",{className:"w-4/5  mt-8",children:e("form",{action:"",children:a("div",{className:"flex flex-col gap-8",children:[a("span",{className:"flex flex-col text-gray-500",children:[e("label",{htmlFor:"nome",className:"font-semibold mb-2 ml-1",children:"Nome de usu\xE1rio "}),e("input",{type:"text",name:"",id:"nome",className:"bg-[#F7F7F7] focus-visible:outline-[#6f51f7de]  text-[#656565] p-4 gap-0 rounded",placeholder:"Seu nome completo"})]}),a("span",{className:"flex flex-col text-gray-500 ",children:[e("label",{htmlFor:"email",className:"font-semibold mb-2 ml-1",children:"Email "}),e("input",{type:"email",name:"",id:"email",className:"bg-[#F7F7F7] focus-visible:outline-[#6f51f7de] text-[#656565] p-4 rounded",placeholder:"exemplo@dominio.com"})]}),a("span",{className:"flex flex-col text-gray-500",children:[e("label",{htmlFor:"telefone",className:"font-semibold mb-2 ml-1",children:"Telefone "}),e("input",{type:"tel",name:"",id:"telefone",className:"bg-[#F7F7F7] focus-visible:outline-[#6f51f7de] text-[#656565] p-4 rounded",placeholder:"99999999999"})]}),a("span",{className:"flex flex-col text-gray-500",children:[e("label",{htmlFor:"senha",className:"font-semibold mb-2 ml-1",children:"Senha "}),e("input",{type:"password",name:"",id:"senha",className:"bg-[#F7F7F7] focus-visible:outline-[#6f51f7de] text-[#656565] p-4 rounded",placeholder:"****************"})]}),e("button",{type:"button",className:"font-medium text-white bg-[#6C8CF5] p-2 rounded self-end hover:bg-[#5275e7] w-28",children:"Atualizar"})]})})})]})});Y.register(Z,ee,ae,te,le,se);const be={responsive:!0,plugins:{legend:{position:"top"},title:{display:!0,text:"Grafico de vendas"}}},T=["Janeiro","Fevereiro","Mar\xE7o","Abril","Maio","Junho","Julho"],ve={labels:T,datasets:[{label:"Vendas 1",data:T.map(()=>M.datatype.number({min:0,max:1e3})),backgroundColor:"rgba(255, 99, 132, 0.5)"},{label:"Vendas 2",data:T.map(()=>M.datatype.number({min:0,max:1e3})),backgroundColor:"rgba(53, 162, 235, 0.5)"}]};function Ne(){return e("div",{className:"h-full",children:e(re,{options:be,data:ve})})}function ye(){return a("div",{className:"text-black p-4",children:[a("div",{className:"grid lg:grid-flow-col  md:grid-cols-3 sm:grid-flow-row  gap-4 text-white",children:[a("div",{className:" bg-[#6C8CF5] p-4 py-4 flex flex-col rounded-lg",children:[e("div",{className:"text-white p-4",children:e(Q,{size:40})}),a("div",{children:[e("p",{className:"pt-2 text-2xl ",children:"Total produtos"}),e("strong",{className:"text-4xl py-4 block",children:"10287 "})]}),e("div",{className:"border-t border-t-slate-100 pt-2",children:e("a",{href:"#",className:"text-lg",children:"adicionar produto"})})]}),a("div",{className:" bg-[#6C8CF5] p-4 py-4 flex flex-col rounded-lg",children:[e("div",{className:"text-white p-4",children:e(J,{size:40})}),a("div",{children:[e("p",{className:"pt-2 text-2xl pr-1",children:"Total encomendas"}),e("strong",{className:"text-4xl py-4 block",children:"3482 "})]}),e("div",{className:"border-t border-t-slate-100 pt-2",children:e("p",{className:" text-lg",children:"encomendas por dia"})})]}),a("div",{className:" bg-[#6C8CF5] p-4 py-4 flex flex-col rounded-lg",children:[e("div",{className:"text-white p-4",children:e(_,{size:40})}),a("div",{children:[e("p",{className:"pt-2 text-2xl ",children:"Total vendas"}),e("strong",{className:"text-4xl py-4 block",children:"8392 "})]}),e("div",{className:"border-t border-t-slate-100 pt-2",children:e("p",{className:" text-lg",children:"vendas por m\xEAs"})})]})]}),e("div",{className:"h-full p-4 bg-green-50 rounded-lg py-8 mt-8",children:e(Ne,{})})]})}function we(){return a("div",{className:"w-full flex items-center mx-auto  h-screen",children:[e("div",{className:"bg-[#6C8CF5] flex-auto h-screen"}),a("div",{className:"h-full w-5/12 flex flex-col gap-8 items-center",children:[e("div",{children:a("header",{className:"pb-20 pt-10",children:[e("h1",{className:"text-[#6C8CF5] font-bold text-4xl",children:"Linha de Sintra"}),e("span",{className:"text-[#4E4D4D] font-bold ",children:"bem vindo de volta"}),e("p",{className:"text-[#4E4D4D] ",children:"maior plataforma de compra e venda de angola"})]})}),e("div",{className:"w-3/4",children:e("form",{action:"",children:a("div",{className:"flex flex-col gap-4",children:[e("input",{type:"text",name:"",id:"telefone",className:"bg-[#F7F7F7] text-[#656565] p-4 rounded focus-visible:outline-[#6f51f7de]",placeholder:"Telefone"}),e("input",{type:"password",name:"",id:"password",className:"bg-[#F7F7F7] text-[#656565]  p-4 rounded focus-visible:outline-[#6f51f7de]",placeholder:"Password"}),e("span",{className:"text-indigo-400 hover:text-indigo-900 text-end cursor-pointer",children:"esqueceu a senha?"}),e("button",{type:"button",className:"font-medium text-white bg-[#6C8CF5] p-4 rounded",children:"entrar"})]})})})]})]})}function Fe(){return e(A,{children:e("div",{children:a(ne,{children:[e(y,{path:"/",element:e(E,{children:e(ye,{})})}),e(y,{path:"/produtos",element:e(xe,{})}),e(y,{path:"/perfil",element:e(ge,{})}),e(y,{path:"/login",element:e(we,{})})]})})})}q.createRoot(document.getElementById("root")).render(e($.StrictMode,{children:e(Fe,{})}));
