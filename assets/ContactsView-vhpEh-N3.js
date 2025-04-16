import{u as E,s as u,r as x,j as e,d as o,f as R}from"./index-mt-46Lye.js";import{B as A}from"./BackBtn-v2AnYqEc.js";import{P as g}from"./Paper-ClR32jFu.js";import{T as h,c as b,b as l,a as f}from"./TableRow-CRlopCck.js";import{T as j}from"./TableContainer-CA5D_JA1.js";import"./arrow-Ca_Wtlwr.js";const D={LEADER:"Leader",CO_LEADER:"Co-leader",ADMIN:"Administrator",WEB:"Suggestions for website",SUPPORT:"You can contact them:"},T={LEADER:"Лідер",CO_LEADER:"Зам. лідера",ADMIN:"Адміністратор",WEB:"Пропозиції по сайту",SUPPORT:"Ті, до кого можна звернутися:"},C={LEADER:"Глава",CO_LEADER:"Зам. главы",ADMIN:"Администратор",WEB:"Предложения по сайту",SUPPORT:"Те, к кому можно обратиться:"},P={en:D,uk:T,ru:C},_=n=>P[n],v=()=>{const{language:n}=E(u),{LEADER:a,CO_LEADER:r,ADMIN:t,WEB:s,SUPPORT:c}=_(n),m=x.useMemo(()=>[{position:a,name:"Артем",link:"Artem_Chuvanov"},{position:r,name:"Марина",link:"MarVik3108"},{position:t,name:"Роман",link:"Matpockyx"},{position:t,name:"Санта",link:"Erbol_Santa"},{position:s,name:"Дмитрий",link:"Larin_Dmytro"}],[a,r,t,s]);return e.jsxs(L,{children:[e.jsx(A,{}),e.jsx(M,{children:c}),e.jsx(k,{component:g,children:e.jsx(h,{children:e.jsx(b,{children:m.map(({name:p,link:i,position:d})=>e.jsxs(O,{children:[e.jsx(l,{align:"center",children:d}),e.jsx(l,{align:"center",children:e.jsx("a",{href:`https://t.me/${i}`,target:"_blank",children:p})})]},i))})})})]})},L=o.div`
  padding: 1rem 1.5rem;
`,k=o(j)`
  &.MuiPaper-root {
    margin: 0 1rem;
    width: calc(100% - 2rem);
  }
`,M=o.div`
  ${R};
  margin: 1rem;
  display: flex;
  align-items: center;
`,O=o(f)`
  &.MuiTableRow-root {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;export{v as default};
