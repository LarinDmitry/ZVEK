import{k as K,n as W,r as x,o as B,_ as J,p as w,j as e,q,t as Q,v as X,l as G,u as g,s as p,b as N,a as ee,g as T,d as o,a3 as S,h as se,f as ne,S as re}from"./index-CZ2E9THh.js";import{B as te}from"./BackBtn-B9KYcQdW.js";import{P as M}from"./Paper-CNA4ioBs.js";import{d as le,T as R,c as C,b as c,a as b}from"./TableRow-B8CdsnO-.js";import{T as _}from"./TableContainer-D4-yhv8B.js";import{P as F}from"./GlobalStyled-C7kW-oLJ.js";import{T as ae}from"./Tooltip-CvzcW4Cq.js";import"./arrow-B-kCcqJm.js";import"./Portal-SqpsmVec.js";import"./isHostComponent-DcL2Ipw3.js";function ie(s){return K("MuiTableHead",s)}W("MuiTableHead",["root"]);const oe=["className","component"],ce=s=>{const{classes:n}=s;return X({root:["root"]},ie,n)},de=q("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(s,n)=>n.root})({display:"table-header-group"}),he={variant:"head"},y="thead",f=x.forwardRef(function(n,r){const t=B({props:n,name:"MuiTableHead"}),{className:d,component:a=y}=t,i=J(t,oe),l=w({},t,{component:a}),h=ce(l);return e.jsx(le.Provider,{value:he,children:e.jsx(de,w({as:a,className:Q(h.root,d),ref:r,role:a===y?null:"rowgroup",ownerState:l},i))})}),Ee={TOP_PLAYERS:"Top players of last ZVEKs",DAMAGE_DECREASE:"Damage decrease",ZERO_DAMAGE:"Zero damage at last ZVEK",JINNI_COEF:"Disbalance factor",FORMULA:"Equation:",WHERE:"where",COUNT:"— number of players.",DAMAGE:"— player`s damage",AVERAGE_DAMAGE:"— average damage",AVERAGE_COUNT:"arithmetic average",SMALL:"0.2−0.3: Damage is distributed fairly evenly.",MEDIUM:"0.5: Moderate inequality. There are a few players with significantly larger contributions, but the others also make a noticeable impact.",HARD:'0.8−1.0: Severe inequality. Damage is mainly concentrated among one or a few "top" players, while the rest have almost no impact on the overall result.',DATE:"Date",TOP:"Top 1,2,3",PERCENT:"% of overall damage",JINNI:"The Gini coefficient.",DAMAGE_GUILD:"Guild damage, B",CHANGES:"Changes",INCREASE:"Increased by",DECREASE:"Decreased by",DAY:"Day",LAST_ZVEK:"Last ZVEK Damage, T",ALL_PLAYERS_HAVE_DAMAGED:"All players damaged in all days"},me={TOP_PLAYERS:"Топ гравці останніх Звек",DAMAGE_DECREASE:"Зниження урону",ZERO_DAMAGE:"Нульовий урон останнього ЗВЕК",JINNI_COEF:"Коефіцієнт дисбалансу",FORMULA:"Формула:",WHERE:"де",COUNT:"— кількість гравців.",DAMAGE:"— пошкодження гравця",AVERAGE_DAMAGE:"— середні пошкодження",AVERAGE_COUNT:"середнє арифметичне",SMALL:"0.2−0.3: Шкода розподілена досить рівномірно.",MEDIUM:"0.5: Помірна нерівність. Є кілька гравців із помітно більшим внеском, та решта теж вносять відчутний внесок.",HARD:'0.8−1.0: Сильна нерівність. Шкода в основному зосереджена в одного чи кількох "топових" гравців, решта майже не впливає на загальний результат.',DATE:"Дата",TOP:"Топ 1,2,3",PERCENT:"% від усієї шкоди",JINNI:"Коефіцієнт Джинні",DAMAGE_GUILD:"Шкода гільдії, T",CHANGES:"Зміна",INCREASE:"Збільшився на",DECREASE:"Зменшився на",DAY:"День",LAST_ZVEK:"Урон прошлого ЗВЭК (млрд)",ALL_PLAYERS_HAVE_DAMAGED:"Всі гравці нанесли урон у всі дні"},xe={TOP_PLAYERS:"Топ игроки последних Звэк",DAMAGE_DECREASE:"Снижение урона",ZERO_DAMAGE:"Нулевой дамаг последнего Звэк",JINNI_COEF:"Коэффициент дисбаланса",FORMULA:"Формула:",WHERE:"где",COUNT:"— количество игроков.",DAMAGE:"— урон игрока",AVERAGE_DAMAGE:"— средний урон",AVERAGE_COUNT:"среднее арифметическое",SMALL:"0.2−0.3: Урон распределён довольно равномерно.",MEDIUM:"0.5: Умеренное неравенство. Есть несколько игроков с заметно большим вкладом, но остальные тоже вносят ощутимый вклад.",HARD:'0.8−1.0: Сильное неравенство. Урон в основном сосредоточен у одного или нескольких "топовых" игроков, остальные почти не влияют на общий результат.',DATE:"Дата",TOP:"Топ 1,2,3",PERCENT:"% от всего урона",JINNI:"Коэффициент Джинни",DAMAGE_GUILD:"Урон гильдии, T",CHANGES:"Изменение",INCREASE:"Увеличился на",DECREASE:"Уменьшился на",DAY:"День",LAST_ZVEK:"Урон прошлого ЗВЭК (млрд)",ALL_PLAYERS_HAVE_DAMAGED:"Все игроки нанесли урон во все дни"},ue={en:Ee,uk:me,ru:xe},j=s=>ue[s],Ae=s=>s.reduce((n,r)=>n+s.reduce((t,d)=>t+Math.abs(r-d),0),0)/(2*s.length**2*s.reduce((n,r)=>n+r,0)/s.length),P=()=>G.reduce((s,{name:n,info:r})=>{var d;const t=(d=r[r.length-1])==null?void 0:d.damageByDay.reduce((a,i,l)=>(i===0&&a.push(l+1),a),[]);return t.length>0&&s.push({name:n,zeroDays:t}),s},[]),ge=()=>{const{language:s}=g(p),{DATE:n,DAMAGE_GUILD:r,CHANGES:t}=j(s),{NO_DATA:d,GUILD_RATING:a,NEWBIES:i}=N(s),l=[n,r,t,a,i];return e.jsx(pe,{component:M,children:e.jsxs(R,{children:[e.jsx(f,{children:e.jsx(v,{children:l.map(h=>e.jsx(je,{children:h},h))})}),e.jsx(C,{children:ee().map(({total:h,percentageChange:m,date:u},E)=>{var D;const A=E>0?m===null?d:`${m>0?">":"<"} ${Math.abs(m).toFixed(2)}%`:"—";return e.jsxs(v,{children:[e.jsx(c,{align:"center",children:u}),e.jsx(c,{align:"center",children:(h/1e12).toFixed(2)}),e.jsx(c,{align:"center",children:e.jsx(I,{value:m,children:A})}),e.jsx(c,{align:"center",children:e.jsx(I,{value:((D=T[E-1])==null?void 0:D.rate)-T[E].rate,children:T[E].rate})}),e.jsx(c,{align:"center",children:e.jsx(De,{value:T[E].newbies,children:T[E].newbies})})]},`guild-${E}`)})})]})})},pe=o(_)`
  &.MuiPaper-root {
    margin: 0 1rem;
    width: calc(100% - 2rem);
  }
`,v=o(b)`
  &.MuiTableRow-root {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
`,je=o(c)`
  &.MuiTableCell-root {
    ${S};
    text-align: center;
  }
`,I=o.span`
  color: ${({value:s,theme:{colors:{red100:n,green100:r,gray100:t}}})=>s===null||s===0?t:s>0?r:s<0?n:t};
`,De=o.span`
  color: ${({value:s,theme:{colors:{green100:n,gray100:r}}})=>s===0?r:n};
`,Te=()=>{const{language:s}=g(p),{LAST_ZVEK:n,DECREASE:r}=j(s),{NICKNAME:t,LATEST_ZVEK:d}=N(s),a=x.useMemo(()=>G.reduce((l,{name:h,info:m})=>{const[u,E]=m.slice(-2),A=(E.damage-u.damage)/u.damage*100;return A<0&&l.push({name:h,damageLastZvek:E.damage,damagePreviousZvek:u.damage,percentageChange:A}),l},[]),[]),i=x.useMemo(()=>[t,n,d,r],[t,n,d,r]);return e.jsx(Me,{component:M,children:a.length?e.jsxs(R,{children:[e.jsx(f,{children:e.jsx($,{children:i.map(l=>e.jsx(Re,{align:"center",children:l},l))})}),e.jsx(C,{children:a.map(({name:l,damagePreviousZvek:h,damageLastZvek:m,percentageChange:u})=>{const E=`< на ${Math.abs(u).toFixed(2)}%`;return e.jsxs($,{children:[e.jsx(c,{align:"center",children:l}),e.jsx(c,{align:"center",children:(h/1e9).toFixed(2)}),e.jsx(c,{align:"center",children:(m/1e9).toFixed(2)}),e.jsx(c,{align:"center",children:e.jsx(Ce,{percentage:u,children:E})})]},l)})})]}):e.jsx(be,{children:"У всех игроков урон вырос"})})},Me=o(_)`
  &.MuiPaper-root {
    margin: 0 1rem;
    width: calc(100% - 2rem);
  }
`,$=o(b)`
  &.MuiTableRow-root {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
`,Re=o(c)`
  &.MuiTableCell-root {
    ${S};
    text-align: center;
  }
`,Ce=o.span`
  color: ${({percentage:s,theme:{colors:{red100:n,green100:r,gray100:t}}})=>s===null||s===0?t:s>0?r:n};
`,be=o.div`
  ${F};
  color: ${({theme:s})=>s.colors.green100};
  text-align: center;
`,_e=()=>{const{language:s}=g(p),{DATE:n,TOP:r,PERCENT:t}=j(s),d=[n,r,t];return e.jsx(fe,{component:M,children:e.jsxs(R,{children:[e.jsx(f,{children:e.jsx(H,{children:d.map(a=>e.jsx(c,{align:"center",children:e.jsx("b",{children:a})},a))})}),e.jsx(C,{children:se(3).map(({date:a,topPlayers:i,topDamagePercentage:l},h)=>e.jsxs(H,{children:[e.jsx(c,{align:"center",children:a}),e.jsx(c,{align:"center",children:i.join(", ")}),e.jsxs(c,{align:"center",children:[l.toFixed(2),"%"]})]},h))})]})})},fe=o(_)`
  &.MuiPaper-root {
    margin: 0 1rem;
    width: calc(100% - 2rem);
  }
`,H=o(b)`
  &.MuiTableRow-root {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`,Ge=()=>{const{language:s}=g(p),{DAY:n,ALL_PLAYERS_HAVE_DAMAGED:r}=j(s),{NICKNAME:t}=N(s),d=x.useMemo(()=>[t,n],[n,t]);return e.jsx(Ne,{component:M,children:P().length?e.jsxs(R,{children:[e.jsx(f,{children:e.jsx(O,{children:d.map(a=>e.jsx(Se,{children:a},a))})}),e.jsx(C,{children:P().map(({name:a,zeroDays:i})=>e.jsxs(O,{children:[e.jsx(c,{align:"center",children:a}),e.jsx(c,{align:"center",children:e.jsx(we,{children:i.map(l=>`${l}й`).join(", ")})})]},a))})]}):e.jsx(Le,{children:r})})},Ne=o(_)`
  &.MuiPaper-root {
    margin: 0 1rem;
    width: calc(100% - 2rem);
  }
`,O=o(b)`
  &.MuiTableRow-root {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`,Se=o(c)`
  &.MuiTableCell-root {
    ${S};
    text-align: center;
  }
`,Le=o.div`
  ${F};
  color: ${({theme:s})=>s.colors.green100};
  text-align: center;
`,we=o.div`
  color: ${({theme:s})=>s.colors.red100};
`,ye=()=>{const{language:s}=g(p),n=x.useMemo(()=>Array.from(new Set(G.flatMap(({info:i})=>i.map(({date:l})=>l)))).filter(i=>i!=="xx.xx"),[]),r=x.useMemo(()=>n.map(i=>({date:i,gini:Ae(G.map(({info:l})=>{var h;return((h=l.find(m=>m.date===i))==null?void 0:h.damage)||0}))})),[n]),{DATE:t,JINNI:d}=j(s),a=[t,d];return e.jsx(Pe,{component:M,children:e.jsxs(R,{children:[e.jsx(f,{children:e.jsx(V,{children:a.map(i=>e.jsx(ve,{children:i},i))})}),e.jsx(C,{children:r.map(({date:i,gini:l})=>e.jsxs(V,{children:[e.jsx(c,{align:"center",children:i}),e.jsx(c,{align:"center",children:l.toFixed(4)})]},i))})]})})},Pe=o(_)`
  &.MuiPaper-root {
    margin: 0 1rem;
    width: calc(100% - 2rem);
  }
`,V=o(b)`
  &.MuiTableRow-root {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`,ve=o(c)`
  &.MuiTableCell-root {
    ${S};
    text-align: center;
  }
`,Ie=({title:s,titleId:n,...r},t)=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 512 512",ref:t,"aria-labelledby":n,...r},s?x.createElement("title",{id:n},s):null,x.createElement("path",{fillRule:"nonzero",d:"M256 0c70.691 0 134.695 28.656 181.021 74.979C483.344 121.305 512 185.309 512 256c0 70.691-28.656 134.695-74.979 181.018C390.695 483.344 326.691 512 256 512c-70.691 0-134.695-28.656-181.018-74.982C28.656 390.695 0 326.691 0 256S28.656 121.305 74.982 74.979C121.305 28.656 185.309 0 256 0zm-10.029 160.379c0-4.319.761-8.315 2.282-11.988 1.515-3.66 3.797-6.994 6.836-9.98 3.028-2.98 6.341-5.241 9.916-6.758 3.593-1.511 7.463-2.282 11.603-2.282 4.143 0 8.006.771 11.564 2.278 3.561 1.521 6.828 3.782 9.808 6.779 2.976 2.987 5.212 6.31 6.695 9.973 1.489 3.663 2.236 7.659 2.236 11.978 0 4.195-.739 8.128-2.229 11.767-1.483 3.631-3.709 6.993-6.692 10.046-2.965 3.043-6.232 5.342-9.79 6.878-3.569 1.528-7.432 2.306-11.592 2.306-4.259 0-8.206-.764-11.834-2.278-3.604-1.522-6.913-3.807-9.892-6.832-2.973-3.046-5.209-6.383-6.685-10.032-1.486-3.646-2.226-7.596-2.226-11.855zm13.492 179.381c-1.118 4.002-3.375 11.837 3.316 11.837 1.451 0 3.299-.81 5.5-2.412 2.387-1.721 5.125-4.336 8.192-7.799 3.116-3.53 6.362-7.701 9.731-12.507 3.358-4.795 6.888-10.292 10.561-16.419a1.39 1.39 0 011.907-.484l12.451 9.237c.593.434.729 1.262.34 1.878-5.724 9.952-11.512 18.642-17.362 26.056-5.899 7.466-11.879 13.66-17.936 18.553l-.095.07c-6.057 4.908-12.269 8.602-18.634 11.077-17.713 6.86-45.682 5.742-53.691-14.929-5.062-13.054-.897-27.885 3.085-40.651l20.089-60.852c1.286-4.617 2.912-9.682 3.505-14.439.974-7.915-2.52-13.032-11.147-13.032h-17.562a1.402 1.402 0 01-1.395-1.399l.077-.484 4.617-16.801a1.39 1.39 0 011.356-1.02l89.743-2.815a1.39 1.39 0 011.434 1.34l-.063.445-38.019 125.55zm151.324-238.547C371.178 61.606 316.446 37.101 256 37.101c-60.446 0-115.174 24.501-154.784 64.112C61.606 140.822 37.101 195.554 37.101 256c0 60.446 24.505 115.178 64.115 154.784 39.606 39.61 94.338 64.115 154.784 64.115s115.178-24.505 154.787-64.115c39.611-39.61 64.112-94.338 64.112-154.784s-24.505-115.178-64.112-154.787z"})),$e=x.forwardRef(Ie),Qe=()=>{const{language:s}=g(p),{TOP_PLAYERS:n,DAMAGE_DECREASE:r,ZERO_DAMAGE:t,JINNI_COEF:d,FORMULA:a,WHERE:i,COUNT:l,DAMAGE:h,AVERAGE_DAMAGE:m,AVERAGE_COUNT:u,SMALL:E,MEDIUM:A,HARD:D}=j(s),{GROW:L}=N(s),Z=x.useMemo(()=>[{title:L,value:e.jsx(ge,{})},{title:n,value:e.jsx(_e,{})},{title:r,value:e.jsx(Te,{})},{title:t,value:e.jsx(Ge,{})},{title:e.jsxs(x.Fragment,{children:[d,e.jsx(ae,{title:e.jsx(U,{children:e.jsxs("li",{children:[a,e.jsxs(Ue,{children:["G=",e.jsxs("span",{children:[e.jsxs("div",{children:["Σ",e.jsx("sub",{children:"i=1"}),e.jsx("sup",{className:"top-el",children:"n"})]}),e.jsxs("div",{children:["Σ",e.jsx("sub",{children:"j=1"}),e.jsx("sup",{className:"top-el",children:"n"}),"|x",e.jsx("sub",{children:"i"})," - x",e.jsx("sub",{children:"j"}),"|"]})]}),"/",e.jsxs("span",{children:["2n",e.jsx("sup",{children:"2"}),"μ, ",i,":"]})]}),e.jsxs(U,{children:[e.jsxs("li",{children:[e.jsx("b",{children:"n"})," ",l]}),e.jsxs("li",{children:[e.jsxs("b",{children:["x",e.jsx("sub",{children:"i"})]}),h," ",e.jsx("i",{children:"i"}),"."]}),e.jsxs("li",{children:[e.jsx("b",{children:"μ"})," ",m," (",e.jsx("i",{children:u}),")."]})]}),e.jsx("li",{children:E}),e.jsx("li",{children:A}),e.jsx("li",{children:D})]})}),children:e.jsx(Ve,{children:e.jsx($e,{})})})]}),value:e.jsx(ye,{})}],[L,n,r,t,d,a,i,l,h,m,u,E,A,D]);return e.jsxs(He,{children:[e.jsx(te,{}),Z.map(({title:Y,value:z},k)=>e.jsxs(x.Fragment,{children:[e.jsx(Oe,{children:Y}),z]},k))]})},He=o.div`
  height: 100%;
  overflow: auto;
  padding: 1rem 1rem 1.5rem;
`,Oe=o.div`
  ${ne};
  margin: 1rem;
  display: flex;
  align-items: center;
`,U=o.ul`
  padding: 0 0 0 1rem;

  & + li {
    margin: 0.5rem 0;
  }
`,Ve=o(re)`
  &.MuiSvgIcon-root {
    cursor: pointer;
    fill: ${({theme:s})=>s.colors.blue090};
    height: 1rem;
    width: 1rem;
    margin-left: 0.5rem;
    animation: pulse 5s infinite;
  }
`,Ue=o.div`
  font-family: 'Courier New', Courier, monospace;
  display: flex;
  flex-direction: row;
  align-items: center;

  span {
    margin: 0.2rem 0;
    display: flex;

    .top-el {
      position: relative;
      right: 14px;
    }
  }
`;export{Qe as default};
