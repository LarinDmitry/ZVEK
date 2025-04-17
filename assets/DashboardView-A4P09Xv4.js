import{r as l,u as S,s as k,a as Z,l as N,g as L,b as Y,j as e,f as I,d as i,m as z,S as W,c as U,e as Q,h as A,i as q}from"./index-D75Q-jW6.js";import{D as J,C as G,A as K,p as V,a as X,b as F,L as ee,c as ae,d as te,P as re,e as se,i as ne}from"./index-CKFEE_YG.js";import{T as oe,a as H,b as O,c as le}from"./TableRow-CWMJNA9W.js";const ie={TOP_PLAYERS:"Top-5 players",OTHERS:"Others",NAME:"Nickname",DAMAGE:"Damage, Т",IMPACT:"Impact",BEST:"Best transformation",TOTAL:"Guild total",RATE:"Rate",NEW:"Newbies"},ce={TOP_PLAYERS:"Топ-5 гравців",OTHERS:"Решта",NAME:"Нік",DAMAGE:"Дамаг, Т",IMPACT:"Вклад",BEST:"Найкращий ріст",TOTAL:"Урон гільдії",RATE:"Рейтинг",NEW:"Новачки"},de={TOP_PLAYERS:"Топ-5 игроков",OTHERS:"Остальные",NAME:"Ник",DAMAGE:"Урон, Т",IMPACT:"Вклад",BEST:"Лучший рост",TOTAL:"Урон гильдии",RATE:"Рейтинг",NEW:"Новички"},ge={en:ie,uk:ce,ru:de},M=a=>ge[a],pe=({title:a,titleId:t,...r},s)=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",ref:s,"aria-labelledby":t,...r},a?l.createElement("title",{id:t},a):null,l.createElement("path",{d:"M6.25 18.75C5.86 18.36 5.86 17.74 6.25 17.35L17.625 6H10.5C10.086 6 9.75 5.664 9.75 5.25C9.75 4.836 10.086 4.5 10.5 4.5H19.5C19.7656 4.5 20.0196 4.60516 20.2071 4.79264C20.3946 4.98012 20.5 5.23413 20.5 5.5V14.5C20.5 14.914 20.164 15.25 19.75 15.25C19.336 15.25 19 14.914 19 14.5V7.0607L7.375 18.75C6.985 19.14 6.365 19.14 6.25 18.75Z"})),ue=l.forwardRef(pe),me=({title:a,titleId:t,...r},s)=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",ref:s,"aria-labelledby":t,...r},a?l.createElement("title",{id:t},a):null,l.createElement("path",{d:"M6.25 6.25C5.86 6.64 5.86 7.26 6.25 7.65L17.625 19H10.5C10.086 19 9.75 19.336 9.75 19.75C9.75 20.164 10.086 20.5 10.5 20.5H19.5C19.7656 20.5 20.0196 20.3948 20.2071 20.2074C20.3946 20.0199 20.5 19.7659 20.5 19.5V12.5C20.5 12.086 20.164 11.75 19.75 11.75C19.336 11.75 19 12.086 19 12.5V17.0607L7.375 6.25C6.985 5.86 6.365 5.86 6.25 6.25Z"})),he=l.forwardRef(me),xe=()=>{var T,f;const{language:a}=S(k),t=Z(),r=l.useMemo(()=>N.reduce((u,{name:j,info:y})=>{const[b,v]=y.slice(-2);if(!b||!v||b.damage===0)return u;const R=(v.damage-b.damage)/b.damage*100;return u.push({name:j,damageLastZvek:v.damage,damagePreviousZvek:b.damage,percentageChange:R}),u},[]).sort((u,j)=>j.percentageChange-u.percentageChange),[]),s=t==null?void 0:t[2],d=(s==null?void 0:s.percentageChange)??null,{rate:C=0,newbies:m=0}=((T=L)==null?void 0:T[2])||{},{rate:E=0}=((f=L)==null?void 0:f[1])||{},h=u=>u==null?null:u?e.jsx(ue,{}):e.jsx(he,{}),{BEST:n}=M(a),{NO_DATA:o,GROW:c,GUILD_RATING:w,NEWBIES:g}=Y(a),x=d===null?o:`${d>0?"+":"-"}${Math.abs(d).toFixed(2)}%`,p=E-C,$=[{key:"total",value:e.jsx(D,{children:s!=null&&s.total?`${(s.total/1e12).toFixed(0)} T`:o}),isPositive:d!==null&&d>0,percent:d===0?"":x,icon:h(d!==null&&d>0),label:c},{key:"best",value:e.jsx(D,{children:r[0].name}),isPositive:r[0].percentageChange>0,percent:`+${r[0].percentageChange.toFixed(2)}%`,icon:h(r[0].percentageChange>0),label:n},{key:"rating",value:e.jsx(B,{value:p,children:C}),isPositive:p>0,percent:p===0?"":p>0?`(-${p})`:`(+${-p})`,icon:p===0?null:h(p<0),label:w},{key:"newbies",value:e.jsx(B,{value:m,children:m}),isPositive:m>0,percent:null,icon:m===0?null:h(m>0),label:g}];return e.jsx(be,{children:$.map(({key:u,value:j,isPositive:y,percent:b,icon:v,label:R})=>e.jsxs(Ce,{children:[j,b===null?e.jsx("div",{}):e.jsx(ve,{positive:y,children:b}),v===null?e.jsx("div",{}):e.jsx(Ee,{positive:y,children:v}),e.jsx(Te,{children:R})]},u))})},be=i.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 1rem;
`,Ce=i.div`
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
`,Te=i.div`
  ${z};
  white-space: nowrap;
`,D=i.div`
  ${I};
`,B=i.span`
  ${I};
  color: ${({value:a,theme:{colors:{green100:t,red100:r,gray100:s}}})=>a===null?s:a>0?t:a<0?r:s};
`,ve=i.div`
  color: ${({positive:a,theme:{colors:{green100:t,red100:r}}})=>a?t:r};
`,Ee=i(W)`
  &.MuiSvgIcon-root {
    width: 1.4rem;
    height: 1.4rem;
    padding: 0.2rem;
    background-color: ${({positive:a})=>a?"rgba(68, 217, 38, 0.15)":"rgba(235, 72, 99, 0.15)"};
    border-radius: 3px;
    fill: ${({positive:a,theme:{colors:{green100:t,red100:r}}})=>a?t:r};
  }
`,P=U`
  background: ${({theme:a})=>a.colors.gray000};
  border-radius: 6px;
  box-shadow:
    0 2px 1px -1px rgba(0, 0, 0, 0.2),
    0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
`,we=({title:a,titleId:t,...r},s)=>l.createElement("svg",{width:16,height:16,viewBox:"1 1 11 11",xmlns:"http://www.w3.org/2000/svg",ref:s,"aria-labelledby":t,...r},a?l.createElement("title",{id:t},a):null,l.createElement("path",{d:"M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"})),_=l.forwardRef(we);G.register(K,V,X,F);const je=()=>{const{language:a}=S(k),t=Q(),{NAME:r,TOTAL:s,DAMAGE:d,IMPACT:C,TOP_PLAYERS:m,OTHERS:E}=M(a),h=l.useMemo(()=>N.map(({name:g,info:x})=>({name:g,damage:x[x.length-1].damage,guildTotal:x[x.length-1].guildTotal})),[]),n=A(5)[2].guildTotal,o=A(5)[2].topDamagePercentage,c={labels:[m,E],datasets:[{data:[o*n,(100-o)*n],backgroundColor:["rgba(72, 99, 235, 0.7)","rgba(68, 217, 38, 0.7)"],hoverOffset:4}]},w=[r,d,C,""];return e.jsxs(fe,{children:[e.jsxs(ye,{children:[e.jsx($e,{children:e.jsx(J,{data:c})}),e.jsxs(Re,{children:[s,": ",(A(5)[2].guildTotal/1e12).toFixed(2)," T"]}),e.jsx(Le,{onClick:()=>t("/main"),children:e.jsx(_,{})})]}),e.jsx(Ae,{children:e.jsxs(oe,{children:[e.jsx(H,{children:w.map(g=>e.jsx(O,{align:"center",children:e.jsx("b",{children:g})},g))}),e.jsx(le,{children:A(5)[2].topPlayers.map((g,x)=>{const p=h.find(T=>T.name===g)||{damage:0,guildTotal:1},$=[g,(p.damage/1e12).toFixed(2),`${(p.damage/p.guildTotal*100).toFixed(2)}%`,e.jsx(_,{})];return e.jsx(Se,{onClick:()=>t(`/details/${g}`),children:$.map((T,f)=>e.jsx(O,{align:"center",children:T},f))},x)})})]})})]})},fe=i.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: calc(35% - 0.5rem) calc(65% - 0.5rem);
`,ye=i.div`
  ${P};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,Ae=i.div`
  ${P};
  height: 100%;
  display: flex;
`,$e=i.div`
  width: 300px;
  display: flex;
  justify-content: center;
`,Re=i.div`
  ${q};
  margin-top: 0.5rem;
  text-align: center;
`,Le=i(W)`
  &.MuiSvgIcon-root {
    cursor: pointer;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
`,Se=i(H)`
  &.MuiTableRow-root {
    position: relative;
    cursor: pointer;

    &:hover {
      background-color: rgba(83, 158, 236, 0.6);
    }
  }
`;G.register(ae,te,re,se,F,V,ne);const ke=()=>{const{language:a}=S(k),t=l.useMemo(()=>L.reduce((n,{date:o,total:c,rate:w,newbies:g})=>(n.labels.push(o),n.total.push(c),n.rate.push(w),n.newbies.push(g),n),{labels:[],total:[],rate:[],newbies:[]}),[]),r=l.useCallback((n,o)=>{if(!n)return o;const c=n.createLinearGradient(0,0,0,250);return c.addColorStop(0,o),c.addColorStop(1,"rgba(255, 255, 255, .4)"),c},[]),s=l.useCallback((n,o,c)=>({labels:t.labels,datasets:[{label:"value",data:o,borderColor:c,backgroundColor:r(n,c),tension:.3,fill:!0,pointBackgroundColor:c}]}),[t.labels,r]),d=n=>{const o="rgb(238 238 238)";return{scales:{x:{display:!0,grid:{color:o},border:{color:o}},y:{display:!0,grid:{color:o},border:{color:o}}},animation:{duration:2500,easing:"easeInOutQuart"},responsive:!0,plugins:{legend:{display:!1},title:{display:!0,text:n}}}},{TOTAL:C,RATE:m,NEW:E}=M(a),h=[{key:"total",color:"rgba(72, 99, 235, 0.7)",title:C},{key:"rate",color:"rgba(68, 217, 38, 0.7)",title:m},{key:"newbies",color:"rgba(235, 72, 99, 0.7)",title:E}];return e.jsx(Me,{children:h.map(({key:n,color:o,title:c})=>e.jsx(Pe,{children:e.jsx(ee,{data:s(document.createElement("canvas").getContext("2d"),t[n],o),options:d(c)})},n))})},Me=i.div`
  display: grid;
  grid-template-columns: repeat(3, calc(33% - 0.5rem));
  grid-column-gap: 1rem;
`,Pe=i.div`
  ${P};
  background: ${({theme:a})=>a.colors.gray000};
  border-radius: 12px;
  padding-left: 0.5rem;
`,Ne=()=>e.jsxs(Oe,{children:[e.jsx(xe,{}),e.jsx(je,{}),e.jsx(ke,{})]}),Oe=i.div`
  height: 100vh;
  padding: 1rem 1rem 1.5rem;
  display: grid;
  grid-template-rows: 16% 55% 24%;
  grid-row-gap: 1rem;
`;export{Ne as default};
