import{e as c,u as i,s as l,j as e,d as t,m as d,ao as u,ap as g,M as m}from"./index-D75Q-jW6.js";const p={NO_DATA:"Page not found!",SUB_INFO:"Such a page was not found or does not exist.",MAIN:"To main"},N={NO_DATA:"Сторінку не знайдено!",SUB_INFO:"Таку сторінку не знайдено або вона не існує",MAIN:"На головну"},x={NO_DATA:"Страница не найдена!",SUB_INFO:"Такая страница не найдена или не существует",MAIN:"На главную"},_={en:p,uk:N,ru:x},b=o=>_[o],v=()=>{const o=c(),{language:r}=i(l),{NO_DATA:n,SUB_INFO:s,MAIN:a}=b(r);return e.jsxs(h,{children:[e.jsx(A,{children:"404"}),e.jsx(f,{children:n}),e.jsx(j,{children:s}),e.jsx(O,{onClick:()=>o("/main"),children:a})]})},h=t.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({theme:o})=>o.colors.gray000};
  border-radius: 24px;
`,A=t.div`
  ${d};
  font-size: 4.75rem;
  color: ${({theme:o})=>o.colors.blue090};
  margin-top: 1.25rem;
`,f=t.div`
  ${u};
  margin-top: 1rem;
`,j=t.div`
  ${g};
  color: ${({theme:o})=>o.colors.gray070};
  text-align: center;
  margin-top: 0.5rem;
`,O=t(m)`
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
`;export{v as default};
