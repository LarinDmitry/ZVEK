import{r as s,u as P,s as j,ak as H,j as e,d as r,Z as _,K as A,S as C}from"./index-oKKtB78a.js";import{B as S}from"./BackBtn-DSh2iwow.js";import{g as R}from"./Input-CAnGi28I.js";import"./arrow-BSQrDxej.js";import"./useFormControl-CuxwNdHE.js";import"./isHostComponent-BZ9V4mz7.js";const I={CALCULATOR:"Boss HP calculator",BOSS_LEVEL:"Boss level",HP_LEVEL:"% HP level",HP_REMAINING:"HP left:"},V={CALCULATOR:"Калькулятор HP боса",BOSS_LEVEL:"Рівень босса",HP_LEVEL:"% HP боса",HP_REMAINING:"HP лишилося:"},k={CALCULATOR:"Калькулятор HP босса",BOSS_LEVEL:"Уровень босса",HP_LEVEL:"% HP босса",HP_REMAINING:"HP осталось:"},B={en:I,uk:V,ru:k},N=t=>B[t],M={bossLevel:200,hpLevel:100},O=({title:t,titleId:o,...c},a)=>s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 15 15",ref:a,"aria-labelledby":o,...c},t?s.createElement("title",{id:o},t):null,s.createElement("path",{d:"M9 4L9 11L4.5 7.5L9 4Z"})),x=s.forwardRef(O),b=Array.from({length:200},(t,o)=>(o+1)*100).reverse(),Y=()=>{const{language:t}=P(j),[o,c]=s.useReducer(H,M),a=s.useCallback((n,p)=>{c({[n]:Math.min(n==="bossLevel"?200:100,Math.max(1,p))})},[]),{hpLevel:d,bossLevel:i}=o,{CALCULATOR:v,BOSS_LEVEL:m,HP_LEVEL:u,HP_REMAINING:E}=N(t),w=s.useMemo(()=>[{key:"bossLevel",title:m,value:i,max:200,endAdornment:"lvl"},{key:"hpLevel",title:u,value:d,max:100,endAdornment:"%"}],[m,u,i,d]);return e.jsxs(y,{children:[e.jsx(S,{}),e.jsxs(T,{children:[e.jsx($,{children:v}),w.map(({key:n,title:p,value:l,max:h,endAdornment:f})=>e.jsxs(U,{children:[e.jsxs(G,{children:[e.jsx("div",{children:p}),e.jsx(z,{value:l,size:"small",onChange:({target:{value:g}})=>a(n,Number(g)),inputProps:{min:1,max:h,type:"number"},endAdornment:f})]}),e.jsxs(F,{children:[e.jsx(L,{onClick:()=>a(n,l-1),children:e.jsx(x,{})}),e.jsx(D,{type:"range",min:"1",max:h,value:l,onChange:({target:{value:g}})=>a(n,Number(g))}),e.jsx(L,{rotate:180,onClick:()=>a(n,l+1),children:e.jsx(x,{})})]})]},n)),e.jsxs(Z,{children:[E," ",b[i-1]*d/100," / ",b[i-1]]})]})]})},y=r.div`
  height: 100%;
  padding: 1rem 1rem 1.5rem;
  align-items: center;
  gap: 1rem;
`,T=r.div`
  height: calc(100% - 4px);
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`,$=r.div`
  ${_};
`,U=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`,G=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,z=r(R)`
  width: 2.75rem;

  input {
    padding: 0;
    cursor: pointer;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`,F=r.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,Z=r.div`
  ${A};
`,D=r.input.attrs({type:"range"})`
  appearance: none;
  width: 250px;
  height: 24px;
  cursor: pointer;

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 24px;
    border-radius: 20px;
    background: linear-gradient(to right, rgb(176, 193, 255), rgb(76, 110, 245) 100%);
    box-shadow: 0 0 0 5px rgba(72, 99, 235, 0.1);
  }

  &::-webkit-slider-thumb {
    appearance: none;
    width: 28px;
    height: 28px;
    background: rgb(176, 193, 255);
    border-radius: 50%;
    border: 2px solid rgb(76, 110, 245);
    margin-top: -2px;
    cursor: pointer;
    transition: 0.2s ease;
  }
`,L=r(C)`
  &.MuiSvgIcon-root {
    width: 1.25em;
    height: 1.25em;
    cursor: pointer;
    ${({rotate:t})=>t&&`transform: rotate(${t}deg)`};
    fill: ${({theme:t})=>t.colors.gray100};
    border-radius: 50%;
    border: 2px solid rgba(72, 99, 235, 0.9);
    background-color: rgb(182, 193, 252);
  }
`;export{Y as default};
