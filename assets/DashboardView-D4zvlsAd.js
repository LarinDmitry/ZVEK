import{r as l,u as S,s as k,a as V,l as _,g as L,b as F,j as e,f as I,d as i,m as H,S as W,c as Z,e as Y,h as A,i as z}from"./index-DZu6JjeW.js";import{D as U,L as Q,C as q,a as J,b as K,P as X,c as ee,p as ae,d as te,i as re}from"./index-C40q7YXo.js";import{T as se,a as G,b as O,c as ne}from"./TableRow-CgkJjXNj.js";const oe={TOP_PLAYERS:"Top-5 players",OTHERS:"Others",NAME:"Nickname",DAMAGE:"Damage, Т",IMPACT:"Impact",BEST:"Best transformation",TOTAL:"Guild total",RATE:"Rate",NEW:"Newbies"},le={TOP_PLAYERS:"Топ-5 гравців",OTHERS:"Решта",NAME:"Нік",DAMAGE:"Дамаг, Т",IMPACT:"Вклад",BEST:"Найкращий ріст",TOTAL:"Урон гільдії",RATE:"Рейтинг",NEW:"Новачки"},ie={TOP_PLAYERS:"Топ-5 игроков",OTHERS:"Остальные",NAME:"Ник",DAMAGE:"Урон, Т",IMPACT:"Вклад",BEST:"Лучший рост",TOTAL:"Урон гильдии",RATE:"Рейтинг",NEW:"Новички"},ce={en:oe,uk:le,ru:ie},M=a=>ce[a],de=({title:a,titleId:t,...r},s)=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",ref:s,"aria-labelledby":t,...r},a?l.createElement("title",{id:t},a):null,l.createElement("path",{d:"M6.25 18.75C5.86 18.36 5.86 17.74 6.25 17.35L17.625 6H10.5C10.086 6 9.75 5.664 9.75 5.25C9.75 4.836 10.086 4.5 10.5 4.5H19.5C19.7656 4.5 20.0196 4.60516 20.2071 4.79264C20.3946 4.98012 20.5 5.23413 20.5 5.5V14.5C20.5 14.914 20.164 15.25 19.75 15.25C19.336 15.25 19 14.914 19 14.5V7.0607L7.375 18.75C6.985 19.14 6.365 19.14 6.25 18.75Z"})),ge=l.forwardRef(de),pe=({title:a,titleId:t,...r},s)=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",ref:s,"aria-labelledby":t,...r},a?l.createElement("title",{id:t},a):null,l.createElement("path",{d:"M6.25 6.25C5.86 6.64 5.86 7.26 6.25 7.65L17.625 19H10.5C10.086 19 9.75 19.336 9.75 19.75C9.75 20.164 10.086 20.5 10.5 20.5H19.5C19.7656 20.5 20.0196 20.3948 20.2071 20.2074C20.3946 20.0199 20.5 19.7659 20.5 19.5V12.5C20.5 12.086 20.164 11.75 19.75 11.75C19.336 11.75 19 12.086 19 12.5V17.0607L7.375 6.25C6.985 5.86 6.365 5.86 6.25 6.25Z"})),ue=l.forwardRef(pe),me=()=>{var v,f;const{language:a}=S(k),t=V(),r=l.useMemo(()=>_.reduce((u,{name:j,info:y})=>{const[b,E]=y.slice(-2);if(!b||!E||b.damage===0)return u;const R=(E.damage-b.damage)/b.damage*100;return u.push({name:j,damageLastZvek:E.damage,damagePreviousZvek:b.damage,percentageChange:R}),u},[]).sort((u,j)=>j.percentageChange-u.percentageChange),[]),s=t==null?void 0:t[2],d=(s==null?void 0:s.percentageChange)??null,{rate:C=0,newbies:m=0}=((v=L)==null?void 0:v[2])||{},{rate:T=0}=((f=L)==null?void 0:f[1])||{},h=u=>u==null?null:u?e.jsx(ge,{}):e.jsx(ue,{}),{BEST:n}=M(a),{NO_DATA:o,GROW:c,GUILD_RATING:w,NEWBIES:g}=F(a),x=d===null?o:`${d>0?"+":"-"}${Math.abs(d).toFixed(2)}%`,p=T-C,$=[{key:"total",value:e.jsx(D,{children:s!=null&&s.total?`${(s.total/1e12).toFixed(0)} T`:o}),isPositive:d!==null&&d>0,percent:d===0?"":x,icon:h(d!==null&&d>0),label:c},{key:"best",value:e.jsx(D,{children:r[0].name}),isPositive:r[0].percentageChange>0,percent:`+${r[0].percentageChange.toFixed(2)}%`,icon:h(r[0].percentageChange>0),label:n},{key:"rating",value:e.jsx(B,{value:p,children:C}),isPositive:p>0,percent:p===0?"":p>0?`(-${p})`:`(+${-p})`,icon:p===0?null:h(p<0),label:w},{key:"newbies",value:e.jsx(B,{value:m,children:m}),isPositive:m>0,percent:null,icon:m===0?null:h(m>0),label:g}];return e.jsx(he,{children:$.map(({key:u,value:j,isPositive:y,percent:b,icon:E,label:R})=>e.jsxs(xe,{children:[j,b===null?e.jsx("div",{}):e.jsx(Ce,{positive:y,children:b}),E===null?e.jsx("div",{}):e.jsx(Te,{positive:y,children:E}),e.jsx(be,{children:R})]},u))})},he=i.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 1rem;
`,xe=i.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 0.3rem;
  padding: 1rem 0.5rem 0.5rem 1rem;
  border-radius: 6px;
  background-color: ${({theme:a})=>a.colors.gray000};
  box-shadow:
    0 2px 1px -1px rgba(0, 0, 0, 0.2),
    0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
`,be=i.div`
  ${H};
  white-space: nowrap;
`,D=i.div`
  ${I};
`,B=i.span`
  ${I};
  color: ${({value:a,theme:{colors:{green100:t,red100:r,gray100:s}}})=>a===null?s:a>0?t:a<0?r:s};
`,Ce=i.div`
  color: ${({positive:a,theme:{colors:{green100:t,red100:r}}})=>a?t:r};
`,Te=i(W)`
  &.MuiSvgIcon-root {
    width: 1.4rem;
    height: 1.4rem;
    padding: 0.2rem;
    background-color: ${({positive:a})=>a?"rgba(68, 217, 38, 0.15)":"rgba(235, 72, 99, 0.15)"};
    border-radius: 3px;
    fill: ${({positive:a,theme:{colors:{green100:t,red100:r}}})=>a?t:r};
  }
`,P=Z`
  background: ${({theme:a})=>a.colors.gray000};
  border-radius: 6px;
  box-shadow:
    0 2px 1px -1px rgba(0, 0, 0, 0.2),
    0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
`,ve=({title:a,titleId:t,...r},s)=>l.createElement("svg",{width:16,height:16,viewBox:"1 1 11 11",xmlns:"http://www.w3.org/2000/svg",ref:s,"aria-labelledby":t,...r},a?l.createElement("title",{id:t},a):null,l.createElement("path",{d:"M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"})),N=l.forwardRef(ve),Ee=()=>{const{language:a}=S(k),{NAME:t,TOTAL:r,DAMAGE:s,IMPACT:d,TOP_PLAYERS:C,OTHERS:m}=M(a),T=Y(),h=l.useMemo(()=>_.map(({name:g,info:x})=>({name:g,damage:x[x.length-1].damage,guildTotal:x[x.length-1].guildTotal})),[]),n=A(5)[2].guildTotal,o=A(5)[2].topDamagePercentage,c={labels:[C,m],datasets:[{data:[o*n,(100-o)*n],backgroundColor:["rgba(72, 99, 235, 0.7)","rgba(68, 217, 38, 0.7)"],hoverOffset:4}]},w=[t,s,d,""];return e.jsxs(we,{children:[e.jsxs(je,{children:[e.jsx(ye,{children:e.jsx(U,{data:c})}),e.jsxs(Ae,{children:[r,": ",(A(5)[2].guildTotal/1e12).toFixed(2)," T"]}),e.jsx($e,{onClick:()=>T("/main"),children:e.jsx(N,{})})]}),e.jsx(fe,{children:e.jsxs(se,{children:[e.jsx(G,{children:w.map(g=>e.jsx(O,{align:"center",children:e.jsx("b",{children:g})},g))}),e.jsx(ne,{children:A(5)[2].topPlayers.map((g,x)=>{const p=h.find(v=>v.name===g)||{damage:0,guildTotal:1},$=[g,(p.damage/1e12).toFixed(2),`${(p.damage/p.guildTotal*100).toFixed(2)}%`,e.jsx(N,{})];return e.jsx(Re,{onClick:()=>T(`/details/${g}`),children:$.map((v,f)=>e.jsx(O,{align:"center",children:v},f))},x)})})]})})]})},we=i.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: calc(35% - 0.5rem) calc(65% - 0.5rem);
`,je=i.div`
  ${P};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,fe=i.div`
  ${P};
  height: 100%;
  display: flex;
`,ye=i.div`
  width: 95%;
  display: flex;
  justify-content: center;
`,Ae=i.div`
  ${z};
  margin-top: 0.5rem;
  text-align: center;
`,$e=i(W)`
  &.MuiSvgIcon-root {
    cursor: pointer;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
`,Re=i(G)`
  &.MuiTableRow-root {
    position: relative;
    cursor: pointer;

    &:hover {
      background-color: rgba(83, 158, 236, 0.6);
    }
  }
`;q.register(J,K,X,ee,ae,te,re);const Le=()=>{const{language:a}=S(k),t=l.useMemo(()=>L.reduce((n,{date:o,total:c,rate:w,newbies:g})=>(n.labels.push(o),n.total.push(c),n.rate.push(w),n.newbies.push(g),n),{labels:[],total:[],rate:[],newbies:[]}),[]),r=l.useCallback((n,o)=>{if(!n)return o;const c=n.createLinearGradient(0,0,0,250);return c.addColorStop(0,o),c.addColorStop(1,"rgba(255, 255, 255, .4)"),c},[]),s=l.useCallback((n,o,c)=>({labels:t.labels,datasets:[{label:"value",data:o,borderColor:c,backgroundColor:r(n,c),tension:.3,fill:!0,pointBackgroundColor:c}]}),[t.labels,r]),d=n=>{const o="rgb(238 238 238)";return{scales:{x:{display:!0,grid:{color:o},border:{color:o}},y:{display:!0,grid:{color:o},border:{color:o}}},animation:{duration:2500,easing:"easeInOutQuart"},responsive:!0,plugins:{legend:{display:!1},title:{display:!0,text:n}}}},{TOTAL:C,RATE:m,NEW:T}=M(a),h=[{key:"total",color:"rgba(72, 99, 235, 0.7)",title:C},{key:"rate",color:"rgba(68, 217, 38, 0.7)",title:m},{key:"newbies",color:"rgba(235, 72, 99, 0.7)",title:T}];return e.jsx(Se,{children:h.map(({key:n,color:o,title:c})=>e.jsx(ke,{children:e.jsx(Q,{data:s(document.createElement("canvas").getContext("2d"),t[n],o),options:d(c)})},n))})},Se=i.div`
  display: grid;
  grid-template-columns: repeat(3, calc(33% - 0.5rem));
  grid-column-gap: 1rem;
`,ke=i.div`
  ${P};
  background: ${({theme:a})=>a.colors.gray000};
  border-radius: 12px;
  padding-left: 0.5rem;
`,Be=()=>e.jsxs(Me,{children:[e.jsx(me,{}),e.jsx(Ee,{}),e.jsx(Le,{})]}),Me=i.div`
  height: 100vh;
  padding: 1rem 1rem 1.5rem;
  display: grid;
  grid-template-rows: 16% 55% 24%;
  grid-row-gap: 1rem;
`;export{Be as default};
