import{w as c,x as i,y as l,j as r,v as t,A as d}from"./index-DAky5bUF.js";import{m as u,k as m,l as g}from"./fonts-CclF1nRn.js";const p={NO_DATA:"Page not found!",SUB_INFO:"Such a page was not found or does not exist.",MAIN:"To main"},x={NO_DATA:"Сторінку не знайдено!",SUB_INFO:"Таку сторінку не знайдено або вона не існує",MAIN:"На головну"},N={NO_DATA:"Страница не найдена!",SUB_INFO:"Такая страница не найдена или не существует",MAIN:"На главную"},A={en:p,uk:x,ru:N},_=o=>A[o],B=()=>{const o=c(),{language:e}=i(l),{NO_DATA:n,SUB_INFO:s,MAIN:a}=_(e);return r.jsxs(b,{children:[r.jsx(h,{children:"404"}),r.jsx(f,{children:n}),r.jsx(j,{children:s}),r.jsx(v,{onClick:()=>o("/main"),children:a})]})},b=t.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({theme:o})=>o.colors.gray000};
  border-radius: 24px;
`,h=t.div`
  ${u};
  font-size: 4.75rem;
  color: ${({theme:o})=>o.colors.blue090};
  margin-top: 1.25rem;
`,f=t.div`
  ${m};
  margin-top: 1rem;
`,j=t.div`
  ${g};
  color: ${({theme:o})=>o.colors.gray070};
  text-align: center;
  margin-top: 0.5rem;
`,v=t(d)`
  &.MuiButton-root {
    width: 8rem;
    border-radius: 20px;
    background-color: ${({theme:o})=>o.colors.blue060};
    color: ${({theme:o})=>o.colors.gray000};
    margin-top: 2.5rem;

    &:hover {
      background-color: ${({theme:o})=>o.colors.blue060};
    }
  }
`;export{B as default};
