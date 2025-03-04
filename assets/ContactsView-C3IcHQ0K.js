import{x as E,y as x,r as u,j as e,v as o}from"./index-DAky5bUF.js";import{B as R}from"./BackBtn-MHEazPbf.js";import{h}from"./fonts-CclF1nRn.js";import{P as A}from"./Paper-Bi6CEDZH.js";import{a as g,b,c as l,d as j,e as D}from"./TableRow-DV1r3rQM.js";import"./arrow-DREPDlfe.js";const f={LEADER:"Leader",CO_LEADER:"Co-leader",ADMIN:"Administrator",WEB:"Suggestions for website",SUPPORT:"You can contact them:"},C={LEADER:"Лідер",CO_LEADER:"Зам. лідера",ADMIN:"Адміністратор",WEB:"Пропозиції по сайту",SUPPORT:"Ті, до кого можна звернутися:"},P={LEADER:"Глава",CO_LEADER:"Зам. главы",ADMIN:"Администратор",WEB:"Предложения по сайту",SUPPORT:"Те, к кому можно обратиться:"},T={en:f,uk:C,ru:P},_=n=>T[n],W=()=>{const{language:n}=E(x),{LEADER:a,CO_LEADER:r,ADMIN:t,WEB:i,SUPPORT:c}=_(n),m=u.useMemo(()=>[{position:a,name:"Артем",link:"Artem_Chuvanov"},{position:r,name:"Марина",link:"MarVik3108"},{position:t,name:"Роман",link:"Matpockyx"},{position:t,name:"Санта",link:"Erbol_Santa"},{position:i,name:"Дмитрий",link:"Larin_Dmytro"}],[a,r,t,i]);return e.jsxs(L,{children:[e.jsx(R,{}),e.jsx(M,{children:c}),e.jsx(k,{component:A,children:e.jsx(g,{children:e.jsx(b,{children:m.map(({name:p,link:s,position:d})=>e.jsxs(O,{children:[e.jsx(l,{align:"center",children:d}),e.jsx(l,{align:"center",children:e.jsx("a",{href:`https://t.me/${s}`,target:"_blank",children:p})})]},s))})})})]})},L=o.div`
  padding: 1rem 1.5rem;
`,k=o(j)`
  &.MuiPaper-root {
    margin: 0 1rem;
    width: calc(100% - 2rem);
  }
`,M=o.div`
  ${h};
  margin: 1rem;
  display: flex;
  align-items: center;
`,O=o(D)`
  &.MuiTableRow-root {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;export{W as default};
