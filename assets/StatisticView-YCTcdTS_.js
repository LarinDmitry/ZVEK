import{g as z,a as K,r as u,u as W,_ as k,b as S,j as e,s as B,c as J,d as q,x as g,y as j,v as i,F as $,S as Q}from"./index-DAky5bUF.js";import{B as X}from"./BackBtn-MHEazPbf.js";import{l as p}from"./DATA-CKXsjLNs.js";import{g as N,h as ee}from"./fonts-CclF1nRn.js";import{P as T}from"./Paper-Bi6CEDZH.js";import{T as se,a as R,b as C,c as m,d as b,e as f}from"./TableRow-DV1r3rQM.js";import{P as V}from"./GlobalStyled-CgyB_JWO.js";import{T as re}from"./Tooltip-BqO5aLMe.js";import"./arrow-DREPDlfe.js";import"./Portal-BJFuS6oJ.js";import"./isHostComponent-DfMxXZO7.js";function ne(s){return z("MuiTableHead",s)}K("MuiTableHead",["root"]);const te=["className","component"],ae=s=>{const{classes:n}=s;return q({root:["root"]},ne,n)},le=B("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(s,n)=>n.root})({display:"table-header-group"}),oe={variant:"head"},y="thead",_=u.forwardRef(function(n,l){const a=W({props:n,name:"MuiTableHead"}),{className:c,component:o=y}=a,t=k(a,te),r=S({},a,{component:o}),d=ae(r);return e.jsx(se.Provider,{value:oe,children:e.jsx(le,S({as:o,className:J(d.root,c),ref:l,role:o===y?null:"rowgroup",ownerState:r},t))})}),ie={GROW:"ZVEK change",TOP_PLAYERS:"Top players of last ZVEKs",DAMAGE_DECREASE:"Damage decrease",ZERO_DAMAGE:"Zero damage at last ZVEK",JINNI_COEF:"Disbalance factor",FORMULA:"Equation:",WHERE:"where",COUNT:"— number of players.",DAMAGE:"— player`s damage",AVERAGE_DAMAGE:"— average damage",AVERAGE_COUNT:"arithmetic average",SMALL:"0.2−0.3: Damage is distributed fairly evenly.",MEDIUM:"0.5: Moderate inequality. There are a few players with significantly larger contributions, but the others also make a noticeable impact.",HARD:'0.8−1.0: Severe inequality. Damage is mainly concentrated among one or a few "top" players, while the rest have almost no impact on the overall result.',DATE:"Date",TOP:"Top 1,2,3",PERCENT:"% of overall damage",JINNI:"The Gini coefficient.",DAMAGE_GUILD:"Guild damage, B",CHANGES:"Changes",NO_DATA:"No data",INCREASE:"Increased by",DECREASE:"Decreased by",DAY:"Day",LAST_ZVEK:"Last ZVEK Damage, B",ALL_PLAYERS_HAVE_DAMAGED:"All players damaged in all days"},ce={GROW:"Звек рух",TOP_PLAYERS:"Топ гравці останніх Звек",DAMAGE_DECREASE:"Зниження урону",ZERO_DAMAGE:"Нульовий урон останнього ЗВЕК",JINNI_COEF:"Коефіцієнт дисбалансу",FORMULA:"Формула:",WHERE:"де",COUNT:"— кількість гравців.",DAMAGE:"— пошкодження гравця",AVERAGE_DAMAGE:"— середні пошкодження",AVERAGE_COUNT:"середнє арифметичне",SMALL:"0.2−0.3: Шкода розподілена досить рівномірно.",MEDIUM:"0.5: Помірна нерівність. Є кілька гравців із помітно більшим внеском, та решта теж вносять відчутний внесок.",HARD:'0.8−1.0: Сильна нерівність. Шкода в основному зосереджена в одного чи кількох "топових" гравців, решта майже не впливає на загальний результат.',DATE:"Дата",TOP:"Топ 1,2,3",PERCENT:"% від усієї шкоди",JINNI:"Коефіцієнт Джинні",DAMAGE_GUILD:"Шкода гільдії, млрд",CHANGES:"Зміна",NO_DATA:"Немає даних",INCREASE:"Збільшився на",DECREASE:"Зменшився на",DAY:"День",LAST_ZVEK:"Урон прошлого ЗВЭК (млрд)",ALL_PLAYERS_HAVE_DAMAGED:"Всі гравці нанесли урон у всі дні"},de={GROW:"Звэк движение",TOP_PLAYERS:"Топ игроки последних Звэк",DAMAGE_DECREASE:"Снижение урона",ZERO_DAMAGE:"Нулевой дамаг последнего Звэк",JINNI_COEF:"Коэффициент дисбаланса",FORMULA:"Формула:",WHERE:"где",COUNT:"— количество игроков.",DAMAGE:"— урон игрока",AVERAGE_DAMAGE:"— средний урон",AVERAGE_COUNT:"среднее арифметическое",SMALL:"0.2−0.3: Урон распределён довольно равномерно.",MEDIUM:"0.5: Умеренное неравенство. Есть несколько игроков с заметно большим вкладом, но остальные тоже вносят ощутимый вклад.",HARD:'0.8−1.0: Сильное неравенство. Урон в основном сосредоточен у одного или нескольких "топовых" игроков, остальные почти не влияют на общий результат.',DATE:"Дата",TOP:"Топ 1,2,3",PERCENT:"% от всего урона",JINNI:"Коэффициент Джинни",DAMAGE_GUILD:"Урон гильдии, млрд",CHANGES:"Изменение",NO_DATA:"Нет данных",INCREASE:"Увеличился на",DECREASE:"Уменьшился на",DAY:"День",LAST_ZVEK:"Урон прошлого ЗВЭК (млрд)",ALL_PLAYERS_HAVE_DAMAGED:"Все игроки нанесли урон во все дни"},me={en:ie,uk:ce,ru:de},D=s=>me[s],he=s=>s.reduce((n,l)=>n+s.reduce((a,c)=>a+Math.abs(l-c),0),0)/(2*s.length**2*s.reduce((n,l)=>n+l,0)/s.length),L=()=>p.reduce((s,{name:n,info:l})=>{var c;const a=(c=l[l.length-1])==null?void 0:c.damageByDay.reduce((o,t,r)=>(t===0&&o.push(r+1),o),[]);return a.length>0&&s.push({name:n,zeroDays:a}),s},[]),ue=()=>p[0].info.map(({date:s,guildTotal:n},l)=>{if(n===0)return null;const a=p.map(({info:t,name:r})=>({name:r,damage:t[l]?t[l].damage:0})).sort((t,r)=>r.damage-t.damage).slice(0,3),o=a.reduce((t,{damage:r})=>t+r,0)/n*100;return{date:s,topPlayers:a.map(({name:t})=>t),topDamagePercentage:o}}).filter(s=>s!==null),Ee=()=>{const{language:s}=g(j),n=u.useMemo(()=>p[0].info.map(({guildTotal:r,date:d},E,h)=>{var M;const A=((M=h[E-1])==null?void 0:M.guildTotal)||0,x=E>0&&A>0?(r-A)/A*100:null;return{guildTotal:r,percentageChange:x,date:d}}),[]),{DATE:l,DAMAGE_GUILD:a,CHANGES:c,NO_DATA:o}=D(s),t=[l,a,c];return e.jsx(Ae,{component:T,children:e.jsxs(R,{children:[e.jsx(_,{children:e.jsx(P,{children:t.map(r=>e.jsx(xe,{children:r},r))})}),e.jsx(C,{children:n.map(({guildTotal:r,percentageChange:d,date:E},h)=>{const A=h>0?d===null?o:`${d>0?">":"<"} ${Math.abs(d).toFixed(2)}%`:"—";return e.jsxs(P,{children:[e.jsx(m,{align:"center",children:E}),e.jsx(m,{align:"center",children:(r/1e9).toFixed(2)}),e.jsx(m,{align:"center",children:e.jsx(pe,{value:d,children:A})})]},`guild-${h}`)})})]})})},Ae=i(b)`
  &.MuiPaper-root {
    margin: 0 1rem;
    width: calc(100% - 2rem);
  }
`,P=i(f)`
  &.MuiTableRow-root {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`,xe=i(m)`
  &.MuiTableCell-root {
    ${N};
    text-align: center;
  }
`,pe=i.span`
  color: ${({value:s,theme:{colors:{red100:n,green100:l,gray100:a}}})=>s===null?a:s>0?l:s<0?n:a};
`,ge=()=>{const{language:s}=g(j),{LAST_ZVEK:n,DECREASE:l}=D(s),{NICKNAME:a,LATEST_ZVEK:c}=$(s),o=u.useMemo(()=>p.reduce((r,{name:d,info:E})=>{const[h,A]=E.slice(-2),x=(A.damage-h.damage)/h.damage*100;return x<0&&r.push({name:d,damageLastZvek:A.damage,damagePreviousZvek:h.damage,percentageChange:x}),r},[]),[]),t=u.useMemo(()=>[a,n,c,l],[a,n,c,l]);return e.jsx(je,{component:T,children:o.length?e.jsxs(R,{children:[e.jsx(_,{children:e.jsx(w,{children:t.map(r=>e.jsx(De,{align:"center",children:r},r))})}),e.jsx(C,{children:o.map(({name:r,damagePreviousZvek:d,damageLastZvek:E,percentageChange:h})=>{const A=`< на ${Math.abs(h).toFixed(2)}%`;return e.jsxs(w,{children:[e.jsx(m,{align:"center",children:r}),e.jsx(m,{align:"center",children:(d/1e9).toFixed(2)}),e.jsx(m,{align:"center",children:(E/1e9).toFixed(2)}),e.jsx(m,{align:"center",children:e.jsx(Me,{percentage:h,children:A})})]},r)})})]}):e.jsx(Te,{children:"У всех игроков урон вырос"})})},je=i(b)`
  &.MuiPaper-root {
    margin: 0 1rem;
    width: calc(100% - 2rem);
  }
`,w=i(f)`
  &.MuiTableRow-root {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
`,De=i(m)`
  &.MuiTableCell-root {
    ${N};
    text-align: center;
  }
`,Me=i.span`
  color: ${({percentage:s,theme:{colors:{red100:n,green100:l,gray100:a}}})=>s===null||s===0?a:s>0?l:n};
`,Te=i.div`
  ${V};
  color: ${({theme:s})=>s.colors.green100};
  text-align: center;
`,Re=()=>{const{language:s}=g(j),{DATE:n,TOP:l,PERCENT:a}=D(s),c=[n,l,a];return e.jsx(Ce,{component:T,children:e.jsxs(R,{children:[e.jsx(_,{children:e.jsx(v,{children:c.map(o=>e.jsx(m,{align:"center",children:e.jsx("b",{children:o})},o))})}),e.jsx(C,{children:ue().map(({date:o,topPlayers:t,topDamagePercentage:r},d)=>e.jsxs(v,{children:[e.jsx(m,{align:"center",children:o}),e.jsx(m,{align:"center",children:t.join(", ")}),e.jsxs(m,{align:"center",children:[r.toFixed(2),"%"]})]},d))})]})})},Ce=i(b)`
  &.MuiPaper-root {
    margin: 0 1rem;
    width: calc(100% - 2rem);
  }
`,v=i(f)`
  &.MuiTableRow-root {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`,be=()=>{const{language:s}=g(j),{DAY:n,ALL_PLAYERS_HAVE_DAMAGED:l}=D(s),{NICKNAME:a}=$(s),c=u.useMemo(()=>[a,n],[n,a]);return e.jsx(fe,{component:T,children:L().length?e.jsxs(R,{children:[e.jsx(_,{children:e.jsx(O,{children:c.map(o=>e.jsx(_e,{children:o},o))})}),e.jsx(C,{children:L().map(({name:o,zeroDays:t})=>e.jsxs(O,{children:[e.jsx(m,{align:"center",children:o}),e.jsx(m,{align:"center",children:e.jsx(Ge,{children:t.map(r=>`${r}й`).join(", ")})})]},o))})]}):e.jsx(Ne,{children:l})})},fe=i(b)`
  &.MuiPaper-root {
    margin: 0 1rem;
    width: calc(100% - 2rem);
  }
`,O=i(f)`
  &.MuiTableRow-root {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`,_e=i(m)`
  &.MuiTableCell-root {
    ${N};
    text-align: center;
  }
`,Ne=i.div`
  ${V};
  color: ${({theme:s})=>s.colors.green100};
  text-align: center;
`,Ge=i.div`
  color: ${({theme:s})=>s.colors.red100};
`,Se=()=>{const{language:s}=g(j),n=u.useMemo(()=>Array.from(new Set(p.flatMap(({info:t})=>t.map(({date:r})=>r)))).filter(t=>t!=="xx.xx"),[]),l=u.useMemo(()=>n.map(t=>({date:t,gini:he(p.map(({info:r})=>{var d;return((d=r.find(E=>E.date===t))==null?void 0:d.damage)||0}))})),[n]),{DATE:a,JINNI:c}=D(s),o=[a,c];return e.jsx(ye,{component:T,children:e.jsxs(R,{children:[e.jsx(_,{children:e.jsx(H,{children:o.map(t=>e.jsx(Le,{children:t},t))})}),e.jsx(C,{children:l.map(({date:t,gini:r})=>e.jsxs(H,{children:[e.jsx(m,{align:"center",children:t}),e.jsx(m,{align:"center",children:r.toFixed(4)})]},t))})]})})},ye=i(b)`
  &.MuiPaper-root {
    margin: 0 1rem;
    width: calc(100% - 2rem);
  }
`,H=i(f)`
  &.MuiTableRow-root {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`,Le=i(m)`
  &.MuiTableCell-root {
    ${N};
    text-align: center;
  }
`,Pe=({title:s,titleId:n,...l},a)=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 512 512",ref:a,"aria-labelledby":n,...l},s?u.createElement("title",{id:n},s):null,u.createElement("path",{fillRule:"nonzero",d:"M256 0c70.691 0 134.695 28.656 181.021 74.979C483.344 121.305 512 185.309 512 256c0 70.691-28.656 134.695-74.979 181.018C390.695 483.344 326.691 512 256 512c-70.691 0-134.695-28.656-181.018-74.982C28.656 390.695 0 326.691 0 256S28.656 121.305 74.982 74.979C121.305 28.656 185.309 0 256 0zm-10.029 160.379c0-4.319.761-8.315 2.282-11.988 1.515-3.66 3.797-6.994 6.836-9.98 3.028-2.98 6.341-5.241 9.916-6.758 3.593-1.511 7.463-2.282 11.603-2.282 4.143 0 8.006.771 11.564 2.278 3.561 1.521 6.828 3.782 9.808 6.779 2.976 2.987 5.212 6.31 6.695 9.973 1.489 3.663 2.236 7.659 2.236 11.978 0 4.195-.739 8.128-2.229 11.767-1.483 3.631-3.709 6.993-6.692 10.046-2.965 3.043-6.232 5.342-9.79 6.878-3.569 1.528-7.432 2.306-11.592 2.306-4.259 0-8.206-.764-11.834-2.278-3.604-1.522-6.913-3.807-9.892-6.832-2.973-3.046-5.209-6.383-6.685-10.032-1.486-3.646-2.226-7.596-2.226-11.855zm13.492 179.381c-1.118 4.002-3.375 11.837 3.316 11.837 1.451 0 3.299-.81 5.5-2.412 2.387-1.721 5.125-4.336 8.192-7.799 3.116-3.53 6.362-7.701 9.731-12.507 3.358-4.795 6.888-10.292 10.561-16.419a1.39 1.39 0 011.907-.484l12.451 9.237c.593.434.729 1.262.34 1.878-5.724 9.952-11.512 18.642-17.362 26.056-5.899 7.466-11.879 13.66-17.936 18.553l-.095.07c-6.057 4.908-12.269 8.602-18.634 11.077-17.713 6.86-45.682 5.742-53.691-14.929-5.062-13.054-.897-27.885 3.085-40.651l20.089-60.852c1.286-4.617 2.912-9.682 3.505-14.439.974-7.915-2.52-13.032-11.147-13.032h-17.562a1.402 1.402 0 01-1.395-1.399l.077-.484 4.617-16.801a1.39 1.39 0 011.356-1.02l89.743-2.815a1.39 1.39 0 011.434 1.34l-.063.445-38.019 125.55zm151.324-238.547C371.178 61.606 316.446 37.101 256 37.101c-60.446 0-115.174 24.501-154.784 64.112C61.606 140.822 37.101 195.554 37.101 256c0 60.446 24.505 115.178 64.115 154.784 39.606 39.61 94.338 64.115 154.784 64.115s115.178-24.505 154.787-64.115c39.611-39.61 64.112-94.338 64.112-154.784s-24.505-115.178-64.112-154.787z"})),we=u.forwardRef(Pe),Je=()=>{const{language:s}=g(j),{GROW:n,TOP_PLAYERS:l,DAMAGE_DECREASE:a,ZERO_DAMAGE:c,JINNI_COEF:o,FORMULA:t,WHERE:r,COUNT:d,DAMAGE:E,AVERAGE_DAMAGE:h,AVERAGE_COUNT:A,SMALL:x,MEDIUM:M,HARD:G}=D(s),U=u.useMemo(()=>[{title:n,value:e.jsx(Ee,{})},{title:l,value:e.jsx(Re,{})},{title:a,value:e.jsx(ge,{})},{title:c,value:e.jsx(be,{})},{title:e.jsxs(u.Fragment,{children:[o,e.jsx(re,{title:e.jsx(I,{children:e.jsxs("li",{children:[t,e.jsxs(Ie,{children:["G=",e.jsxs("span",{children:[e.jsxs("div",{children:["Σ",e.jsx("sub",{children:"i=1"}),e.jsx("sup",{className:"top-el",children:"n"})]}),e.jsxs("div",{children:["Σ",e.jsx("sub",{children:"j=1"}),e.jsx("sup",{className:"top-el",children:"n"}),"|x",e.jsx("sub",{children:"i"})," - x",e.jsx("sub",{children:"j"}),"|"]})]}),"/",e.jsxs("span",{children:["2n",e.jsx("sup",{children:"2"}),"μ, ",r,":"]})]}),e.jsxs(I,{children:[e.jsxs("li",{children:[e.jsx("b",{children:"n"})," ",d]}),e.jsxs("li",{children:[e.jsxs("b",{children:["x",e.jsx("sub",{children:"i"})]}),E," ",e.jsx("i",{children:"i"}),"."]}),e.jsxs("li",{children:[e.jsx("b",{children:"μ"})," ",h," (",e.jsx("i",{children:A}),")."]})]}),e.jsx("li",{children:x}),e.jsx("li",{children:M}),e.jsx("li",{children:G})]})}),children:e.jsx(He,{children:e.jsx(we,{})})})]}),value:e.jsx(Se,{})}],[n,l,a,c,o,t,r,d,E,h,A,x,M,G]);return e.jsxs(ve,{children:[e.jsx(X,{}),U.map(({title:F,value:Z},Y)=>e.jsxs(u.Fragment,{children:[e.jsx(Oe,{children:F}),Z]},Y))]})},ve=i.div`
  height: 100%;
  overflow: auto;
  padding: 1rem 1rem 1.5rem;
`,Oe=i.div`
  ${ee};
  margin: 1rem;
  display: flex;
  align-items: center;
`,I=i.ul`
  padding: 0 0 0 1rem;

  & + li {
    margin: 0.5rem 0;
  }
`,He=i(Q)`
  &.MuiSvgIcon-root {
    cursor: pointer;
    fill: ${({theme:s})=>s.colors.blue090};
    height: 1rem;
    width: 1rem;
    margin-left: 0.5rem;
    animation: pulse 5s infinite;
  }
`,Ie=i.div`
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
`;export{Je as default};
