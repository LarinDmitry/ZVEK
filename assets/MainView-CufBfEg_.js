import{C as w1,r as n,e as k1,g as c1,a as r1,_ as a1,b as E,j as s,s as q,c as l1,k as V,d as i1,B as y1,i as d1,u as M1,o as $1,D as Q,w as C1,p as m1,x as O,y as N,E as j1,F as X,v as h,S as Z,G as L1,H as E1,I as I1,A as S1}from"./index-DLuJz_lx.js";import{u as z1}from"./isHostComponent-ClTZ6L7C.js";import{X as B1,q as u1,h as K,l as U,a as R1,b as P1}from"./MainUtils-D1HKSetz.js";import{F as p1}from"./arrow-BOVO1wOE.js";import{u as F1}from"./useFormControl-CE8K6Xr2.js";import{d as H1}from"./Portal-P83VXYkK.js";import{c as Y}from"./createSvgIcon-BtDRWMOl.js";import{t as A1,l as T}from"./DATA-CKXsjLNs.js";import{b as V1,c as _1,f as h1}from"./fonts-BC2pwPS7.js";import{P as D1,C as T1,A as O1,p as N1,a as Z1,b as U1}from"./index-CThagY2w.js";import{T as Q1}from"./Tooltip-CdX2xUJL.js";function G1(e){const{theme:t,name:o,props:c}=e;return!t||!t.components||!t.components[o]||!t.components[o].defaultProps?c:w1(t.components[o].defaultProps,c)}function W1(e,t,o,c,r){const[l,m]=n.useState(()=>r&&o?o(e).matches:c?c(e).matches:t);return k1(()=>{let u=!0;if(!o)return;const d=o(e),i=()=>{u&&m(d.matches)};return i(),d.addListener(i),()=>{u=!1,d.removeListener(i)}},[e,o]),l}const g1=n.useSyncExternalStore;function K1(e,t,o,c,r){const l=n.useCallback(()=>t,[t]),m=n.useMemo(()=>{if(r&&o)return()=>o(e).matches;if(c!==null){const{matches:C}=c(e);return()=>C}return l},[l,e,c,r,o]),[u,d]=n.useMemo(()=>{if(o===null)return[l,()=>()=>{}];const C=o(e);return[()=>C.matches,b=>(C.addListener(b),()=>{C.removeListener(b)})]},[l,o,e]);return g1(d,u,m)}function G(e,t={}){const o=z1(),c=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:r=!1,matchMedia:l=c?window.matchMedia:null,ssrMatchMedia:m=null,noSsr:u=!1}=G1({name:"MuiUseMediaQuery",props:t,theme:o});let d=typeof e=="function"?e(o):e;return d=d.replace(/^@media( ?)/m,""),(g1!==void 0?K1:W1)(d,r,l,m,u)}function q1(e){return c1("PrivateSwitchBase",e)}r1("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const X1=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Y1=e=>{const{classes:t,checked:o,disabled:c,edge:r}=e,l={root:["root",o&&"checked",c&&"disabled",r&&`edge${V(r)}`],input:["input"]};return i1(l,q1,t)},J1=q(y1)(({ownerState:e})=>E({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),e3=q("input",{shouldForwardProp:d1})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),t3=n.forwardRef(function(t,o){const{autoFocus:c,checked:r,checkedIcon:l,className:m,defaultChecked:u,disabled:d,disableFocusRipple:i=!1,edge:C=!1,icon:b,id:w,inputProps:M,inputRef:j,name:v,onBlur:$,onChange:k,onFocus:y,readOnly:B,required:P=!1,tabIndex:H,type:g,value:a}=t,p=a1(t,X1),[f,I]=H1({controlled:r,default:!!u,name:"SwitchBase",state:"checked"}),x=F1(),R=L=>{y&&y(L),x&&x.onFocus&&x.onFocus(L)},_=L=>{$&&$(L),x&&x.onBlur&&x.onBlur(L)},D=L=>{if(L.nativeEvent.defaultPrevented)return;const t1=L.target.checked;I(t1),k&&k(L,t1)};let S=d;x&&typeof S>"u"&&(S=x.disabled);const A=g==="checkbox"||g==="radio",z=E({},t,{checked:f,disabled:S,disableFocusRipple:i,edge:C}),e1=Y1(z);return s.jsxs(J1,E({component:"span",className:l1(e1.root,m),centerRipple:!0,focusRipple:!i,disabled:S,tabIndex:null,role:void 0,onFocus:R,onBlur:_,ownerState:z,ref:o},p,{children:[s.jsx(e3,E({autoFocus:c,checked:r,defaultChecked:u,className:e1.input,disabled:S,id:A?w:void 0,name:v,onChange:D,readOnly:B,ref:j,required:P,ownerState:z,tabIndex:H,type:g},g==="checkbox"&&a===void 0?{}:{value:a},M)),f?l:b]}))}),o3=Y(s.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),n3=Y(s.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),s3=Y(s.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function c3(e){return c1("MuiCheckbox",e)}const W=r1("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),r3=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],a3=e=>{const{classes:t,indeterminate:o,color:c,size:r}=e,l={root:["root",o&&"indeterminate",`color${V(c)}`,`size${V(r)}`]},m=i1(l,c3,t);return E({},t,m)},l3=q(t3,{shouldForwardProp:e=>d1(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.indeterminate&&t.indeterminate,t[`size${V(o.size)}`],o.color!=="default"&&t[`color${V(o.color)}`]]}})(({theme:e,ownerState:t})=>E({color:(e.vars||e).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${t.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:$1(t.color==="default"?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},t.color!=="default"&&{[`&.${W.checked}, &.${W.indeterminate}`]:{color:(e.vars||e).palette[t.color].main},[`&.${W.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),i3=s.jsx(n3,{}),d3=s.jsx(o3,{}),C3=s.jsx(s3,{}),f1=n.forwardRef(function(t,o){var c,r;const l=M1({props:t,name:"MuiCheckbox"}),{checkedIcon:m=i3,color:u="primary",icon:d=d3,indeterminate:i=!1,indeterminateIcon:C=C3,inputProps:b,size:w="medium",className:M}=l,j=a1(l,r3),v=i?C:d,$=i?C:m,k=E({},l,{color:u,indeterminate:i,size:w}),y=a3(k);return s.jsx(l3,E({type:"checkbox",inputProps:E({"data-indeterminate":i},b),icon:n.cloneElement(v,{fontSize:(c=v.props.fontSize)!=null?c:w}),checkedIcon:n.cloneElement($,{fontSize:(r=$.props.fontSize)!=null?r:w}),ownerState:k,ref:o,className:l1(y.root,M)},j,{classes:y}))}),J=()=>[G(Q.breakpoints.maxTb),G(Q.breakpoints.maxLtg),G(Q.breakpoints.minLtg)],x1="/ZVEK/assets/gey-CjmNpU5I.png",m3=({title:e,titleId:t,...o},c)=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",ref:c,"aria-labelledby":t,...o},e?n.createElement("title",{id:t},e):null,n.createElement("path",{d:"M10.6155 20.2749C10.6155 20.1796 10.5968 20.0853 10.5603 19.9973C10.5239 19.9093 10.4704 19.8293 10.4031 19.762C10.3357 19.6946 10.2557 19.6412 10.1677 19.6048C10.0797 19.5683 9.9854 19.5496 9.89015 19.5496H5.47879L10.403 14.6252C10.5382 14.489 10.614 14.3048 10.6136 14.1129C10.6133 13.9209 10.5369 13.737 10.4012 13.6013C10.2655 13.4656 10.0815 13.3892 9.88961 13.3889C9.6977 13.3886 9.51348 13.4643 9.37732 13.5996L4.4507 18.5264L4.4507 14.11C4.45035 13.9179 4.37377 13.7337 4.23778 13.598C4.10179 13.4622 3.9175 13.386 3.72535 13.386C3.53321 13.386 3.34891 13.4622 3.21292 13.598C3.07693 13.7337 3.00035 13.9179 3 14.11L3 20.2749C3.00057 20.4675 3.07753 20.6521 3.21401 20.788C3.35048 20.924 3.53531 21.0003 3.72796 21.0001H9.89016C9.98541 21.0001 10.0797 20.9814 10.1677 20.945C10.2557 20.9085 10.3357 20.8551 10.4031 20.7877C10.4704 20.7204 10.5239 20.6404 10.5603 20.5524C10.5968 20.4644 10.6155 20.3701 10.6155 20.2749Z"}),n.createElement("path",{d:"M13.3871 3.72527C13.3871 3.82052 13.4059 3.91484 13.4423 4.00284C13.4788 4.09085 13.5322 4.17081 13.5996 4.23816C13.6669 4.30551 13.7469 4.35893 13.8349 4.39537C13.9229 4.43181 14.0172 4.45055 14.1125 4.45053L18.5262 4.45054L13.5996 9.37732C13.5319 9.44459 13.4782 9.52456 13.4414 9.61264C13.4047 9.70073 13.3857 9.7952 13.3856 9.89063C13.3854 9.98607 13.4041 10.0806 13.4406 10.1688C13.477 10.257 13.5305 10.3371 13.598 10.4046C13.6655 10.4721 13.7456 10.5256 13.8339 10.562C13.9221 10.5985 14.0166 10.6172 14.112 10.617C14.2075 10.6168 14.3019 10.5979 14.39 10.5611C14.4781 10.5244 14.5581 10.4706 14.6253 10.4029L19.5493 5.47867L19.5493 9.89012C19.5497 10.0823 19.6262 10.2664 19.7622 10.4022C19.8982 10.5379 20.0825 10.6141 20.2747 10.6141C20.4668 10.6141 20.6511 10.5379 20.7871 10.4022C20.9231 10.2664 20.9997 10.0823 21 9.89012V3.72527C21 3.63001 20.9813 3.53569 20.9448 3.44769C20.9084 3.35969 20.8549 3.27973 20.7876 3.21238C20.7202 3.14503 20.6403 3.09161 20.5523 3.05517C20.4642 3.01873 20.3699 2.99998 20.2747 3L14.1125 3C14.0172 2.99998 13.9229 3.01873 13.8349 3.05517C13.7469 3.09161 13.6669 3.14503 13.5996 3.21238C13.5322 3.27973 13.4788 3.35969 13.4423 3.44769C13.4059 3.53569 13.3871 3.63001 13.3871 3.72527Z"})),u3=n.forwardRef(m3),p3=({title:e,titleId:t,...o},c)=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",ref:c,"aria-labelledby":t,...o},e?n.createElement("title",{id:t},e):null,n.createElement("path",{d:"M3 14.1113C2.99999 14.2065 3.01875 14.3008 3.0552 14.3888C3.09165 14.4768 3.14508 14.5568 3.21244 14.6241C3.2798 14.6915 3.35976 14.7449 3.44777 14.7814C3.53578 14.8178 3.6301 14.8365 3.72535 14.8365H8.13671L3.21249 19.7609C3.07727 19.8971 3.00154 20.0813 3.00188 20.2733C3.00222 20.4652 3.07861 20.6491 3.21432 20.7848C3.35003 20.9205 3.53399 20.9969 3.7259 20.9972C3.91781 20.9975 4.10202 20.9218 4.23819 20.7865L9.1648 15.8597V20.2761C9.16515 20.4683 9.24173 20.6524 9.37772 20.7881C9.51371 20.9239 9.69801 21.0001 9.89015 21.0001C10.0823 21.0001 10.2666 20.9239 10.4026 20.7881C10.5386 20.6524 10.6152 20.4683 10.6155 20.2761V14.1113C10.6149 13.9186 10.538 13.7341 10.4015 13.5981C10.265 13.4621 10.0802 13.3858 9.88755 13.386H3.72534C3.63009 13.386 3.53577 13.4047 3.44776 13.4412C3.35975 13.4776 3.27979 13.531 3.21243 13.5984C3.14508 13.6657 3.09165 13.7457 3.0552 13.8337C3.01875 13.9217 2.99999 14.016 3 14.1113Z"}),n.createElement("path",{d:"M20.9985 9.89174C20.9985 9.79648 20.9797 9.70216 20.9433 9.61416C20.9068 9.52616 20.8534 9.4462 20.786 9.37885C20.7187 9.3115 20.6387 9.25808 20.5507 9.22164C20.4627 9.1852 20.3684 9.16645 20.2731 9.16647L15.8594 9.16647L20.786 4.23969C20.8537 4.17242 20.9074 4.09245 20.9442 4.00436C20.9809 3.91628 20.9999 3.82181 21 3.72637C21.0002 3.63094 20.9815 3.53641 20.945 3.44821C20.9086 3.36001 20.8551 3.27987 20.7876 3.21239C20.7201 3.14491 20.6399 3.09141 20.5517 3.05497C20.4635 3.01852 20.369 2.99984 20.2736 3C20.1781 3.00016 20.0837 3.01915 19.9956 3.05589C19.9075 3.09264 19.8275 3.1464 19.7603 3.2141L14.8363 8.13834V3.72688C14.8359 3.53474 14.7593 3.35059 14.6234 3.21484C14.4874 3.0791 14.3031 3.00286 14.1109 3.00286C13.9188 3.00286 13.7345 3.0791 13.5985 3.21484C13.4625 3.35059 13.3859 3.53474 13.3856 3.72688V9.89174C13.3856 9.98699 13.4043 10.0813 13.4408 10.1693C13.4772 10.2573 13.5307 10.3373 13.598 10.4046C13.6654 10.472 13.7453 10.5254 13.8333 10.5618C13.9214 10.5983 14.0157 10.617 14.1109 10.617L20.2731 10.617C20.3684 10.617 20.4627 10.5983 20.5507 10.5618C20.6387 10.5254 20.7187 10.472 20.786 10.4046C20.8534 10.3373 20.9068 10.2573 20.9433 10.1693C20.9797 10.0813 20.9985 9.98699 20.9985 9.89174Z"})),h3=n.forwardRef(p3),g3=({idx:e,name:t,damage:o,total:c,details:{quality:r,stars:l=0,temple:m=0,damageDealer:u},isChecked:d,isExpanded:i,toggleRowExpansion:C})=>{const b=C1(),w=m1(),[,,M]=J(),{language:j}=O(N),v=n.useCallback((g,a,p=B1)=>s.jsx(v3,{src:a[g]||p,alt:g}),[]),$=n.useMemo(()=>{const g=[{key:"checkbox",content:s.jsx(f1,{checked:d,onChange:()=>w(j1(t))})},{key:"index",content:e+1},{key:"name",content:t},{key:"quality",content:v(r||"",u1)}],a=M?[{key:"stars",content:l},{key:"temple",content:m},{key:"hero",content:v(u||"",K,"")},{key:"damage",content:(Math.floor(o/1e9*1e3)/1e3).toFixed(3)},{key:"influence",content:`${(Math.floor(o/c*100*1e3)/1e3).toFixed(3)}`}]:[{key:"expand",content:s.jsx(f3,{isexpanded:+i,onClick:()=>C(t),children:i?s.jsx(h3,{}):s.jsx(u3,{})})}];return[...g,...a]},[d,e,t,v,r,M,l,m,u,o,c,i,w,C]),{TEMPLE:k,IMPACT:y}=U(j),{DAMAGE:B,BILLION:P}=X(j),H=n.useMemo(()=>[{title:s.jsx("img",{src:x1,alt:"gey"}),value:l},{title:k,value:m},{title:B,value:`${(Math.floor(o/1e9*1e3)/1e3).toFixed(3)} ${P}`},{title:y,value:`${(Math.floor(o/c*100*1e3)/1e3).toFixed(3)} %`}],[l,k,m,B,o,P,y,c]);return s.jsxs(b3,{children:[$.map(({key:g,content:a})=>s.jsx(o1,{children:a},g)),s.jsx(o1,{children:s.jsx(b1,{onClick:()=>b(`/details/${t}`),children:s.jsx(p1,{})})}),i&&!M&&s.jsxs(x3,{children:[s.jsx(n1,{children:H.map(({title:g,value:a})=>s.jsxs("div",{children:[g,":",s.jsx("span",{children:a})]}))}),s.jsx(n1,{children:s.jsx(v1,{children:v(u||"",K,"")})})]})]})},o1=h.div`
  padding: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
`,b1=h(Z)`
  &.MuiSvgIcon-root {
    cursor: pointer;
    fill: ${({theme:e})=>e.colors.gray090};
    transform: rotate(${({direction:e})=>e?e==="asc"?"0":"-180":"-90"}deg);
  }
`,f3=h(Z)`
  &.MuiSvgIcon-root {
    cursor: pointer;
    fill: ${({isexpanded:e,theme:{colors:{gray090:t,blue090:o}}})=>e?t:o};
  }
`,n1=h.div`
  & > div {
    display: flex;
    align-items: center;
    white-space: nowrap;
    margin-top: 0.25rem;
  }
`,v1=h.div`
  height: 100%;

  img {
    width: 6rem !important;
    height: 6rem !important;
  }
`,x3=h.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  gap: 0.5rem;
  padding: 0.5rem 0;
  border-top: 1px solid ${({theme:e})=>e.colors.gray200};

  ${v1} {
    justify-content: flex-end;
    margin: 0 1rem 0 0;
  }

  img {
    width: fit-content;
    height: 1.6rem;
  }

  @media ${({theme:e})=>e.breakpoints.maxLtg} {
    width: calc(100vw - 4rem);
    grid-template-columns: calc(50vw - 3rem) calc(50vw - 3rem);
    padding: 1rem;
  }
`,b3=h.div`
  display: grid;
  grid-template-columns: 4rem 2.25rem auto 6rem 6rem 6rem 6rem 7rem 7rem 3rem;
  border-bottom: 1px solid rgb(224, 224, 224);
  align-items: center;

  &:hover {
    background-color: ${({theme:e})=>e.colors.blue050};

    ${b1} {
      fill: ${({theme:e})=>e.colors.gray100};
    }
  }

  @media ${({theme:e})=>e.breakpoints.maxLtg} {
    grid-template-columns: 4rem 2.3rem auto 4rem 3rem 3rem;
  }
`,v3=h.img`
  height: 3rem;
  width: 3rem;
`,w3=({data:e,total:t})=>{const o=m1(),[,,c]=J(),{sortConfig:r,selectedItems:l,language:m}=O(N),[u,d]=n.useState([]),i=n.useCallback(a=>{d(p=>p.includes(a)?p.filter(f=>f!==a):[...p,a])},[]),C=n.useMemo(()=>A1.reduce((a,{name:p,quality:f,stars:I,temple:x,damageDealer:R})=>(a[p]={quality:f,stars:I,temple:x,damageDealer:R},a),{}),[]),b=n.useMemo(()=>{if(!r)return e;const{key:a,direction:p}=r;return[...e].sort((f,I)=>{const x=C[f.name]||{},R=C[I.name]||{},_=(A,z)=>{switch(a){case"name":return A.name;case"quality":return Object.keys(u1).indexOf(z.quality||"");case"gey":return z.stars||0;case"temple":return z.temple||0;case"hero":return Object.keys(K).indexOf(z.damageDealer||"");case"damage":return A.damage;case"influence":return A.damage/t*100;default:return 0}},D=_(f,x),S=_(I,R);return D<S?p==="asc"?-1:1:D>S?p==="asc"?1:-1:0})},[e,r,t,C]),w=n.useCallback(a=>o(a?L1(b.map(({name:p})=>p)):E1()),[o,b]),{QUALITY:M,TEMPLE:j,HERO:v,DAMAGE_TITLE:$,IMPACT:k,MORE:y}=U(m),{NICKNAME:B}=X(m),P=n.useMemo(()=>[s.jsx(f1,{indeterminate:l.length>0&&l.length<e.length,checked:l.length===e.length,onChange:({target:{checked:a}})=>w(a)}),"№",B,M,...c?[s.jsx("img",{src:x1,alt:"gey"}),j,v,$,`${k}, %`]:[y],""],[e.length,c,l.length,w,B,M,j,v,$,k,y]),H=n.useCallback(a=>{a&&a!=="№"&&a!=="more"&&o(I1((r==null?void 0:r.key)===a&&r.direction==="desc"?{key:a,direction:"asc"}:{key:a,direction:"desc"}))},[o,r==null?void 0:r.direction,r==null?void 0:r.key]),g=({columnKey:a})=>(r==null?void 0:r.key)===a?s.jsx($3,{direction:r.direction,children:s.jsx(p1,{})}):null;return s.jsxs(k3,{children:[s.jsx(y3,{children:P.map((a,p)=>{const f=["","№","name","quality",...c?["gey","temple","hero","damage","influence"]:["more",""],""][p];return s.jsxs(M3,{onClick:()=>H(f),children:[a,f&&s.jsx(g,{columnKey:f})]},p)})}),b.map(({name:a,damage:p},f)=>{const I=l.includes(a),x=C[a]||{},R=u.includes(a);return s.jsx(g3,{idx:f,name:a,damage:p,total:t,details:x,isChecked:I,isExpanded:R,toggleRowExpansion:i},a)})]})},k3=h.div`
  overflow: auto;
  height: calc(100vh - 6rem);
  border: 1px solid rgb(224, 224, 224);
  border-radius: 8px;
  background: ${({theme:e})=>e.colors.gray000};
`,y3=h.div`
  ${V1};
  display: grid;
  grid-template-columns: 4rem 2.25rem auto 6rem 6rem 6rem 6rem 7rem 7rem 3rem;
  color: ${({theme:e})=>e.colors.gray090};
  height: 3rem;
  align-items: center;
  border-bottom: 1px solid rgb(224, 224, 224);
  position: sticky;
  top: 0;
  background: ${({theme:e})=>e.colors.gray000};
  z-index: 1;

  img {
    width: fit-content;
    height: 1.6rem;
  }

  @media ${({theme:e})=>e.breakpoints.maxLtg} {
    grid-template-columns: 4rem 2.3rem auto 4rem 3rem 3rem;
  }
`,M3=h.div`
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
`,$3=h(Z)`
  &.MuiSvgIcon-root {
    cursor: pointer;
    fill: ${({theme:e})=>e.colors.gray090};
    transform: rotate(${({direction:e})=>e?e==="asc"?"0":"-180":"-90"}deg);
  }
`;T1.register(O1,N1,Z1,U1);const j3=({data:e,total:t})=>{const o=n.useMemo(()=>[...e].sort((d,i)=>i.damage-d.damage),[e]),{language:c}=O(N),{DIAGRAM:r}=U(c),{DAMAGE:l}=X(c),m=n.useMemo(()=>({labels:o.map(({name:d})=>d),datasets:[{label:l,data:o.map(({damage:d})=>d),backgroundColor:P1,hoverBackgroundColor:R1}]}),[o,l]),u=n.useMemo(()=>({plugins:{datalabels:!1,title:{display:!0,text:r},tooltip:{callbacks:{label:({label:d,raw:i})=>`${d}: ${i.toLocaleString()} (${(i/t*100).toFixed(3)}%)`}},legend:{display:!0,position:"bottom"}}}),[t,r]);return s.jsx(L3,{children:s.jsx(D1,{data:m,options:u})})},L3=h.div`
  justify-content: center;
  display: flex;
`,E3=({title:e,titleId:t,...o},c)=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:24,height:24,ref:c,"aria-labelledby":t,...o},e?n.createElement("title",{id:t},e):null,n.createElement("path",{d:"M126.7,15.4c-0.4,0.4-0.6,6.5-0.6,24.1c0,12.9,0.1,23.5,0.2,23.5s1.9-0.8,3.9-1.7c6.9-3.1,14.9-5.6,22.6-6.9l1.8-0.3v-19c0-14.2-0.1-19.2-0.6-19.7C153.2,14.6,127.5,14.6,126.7,15.4z"}),n.createElement("path",{d:"M88.2,47.8c-1,1-1,1.6-1,29.1v28.2l3.1-5.8c5.6-10.6,12.9-19.6,21.6-26.5l4.4-3.5V59.1c0-9.6,0-10.3-1-11.3c-0.9-0.9-1.6-1-13.5-1C89.9,46.8,89.2,46.9,88.2,47.8z"}),n.createElement("path",{d:"M161.1,58.5c-21.1,1.5-37.3,8.9-52,23.5c-11.7,11.7-19,25-22.1,40.5c-1,5-0.8,6,1.3,6.6c2,0.6,75.3,6.8,76.1,6.4c0.6-0.4,43.6-61.5,44.1-62.7c0.6-1.6-0.7-2.8-6-5.5c-6.9-3.5-11.8-5.3-18.8-6.9c-4.8-1.1-17.3-2.5-19.6-2.2C163.6,58.3,162.3,58.4,161.1,58.5z"}),n.createElement("path",{d:"M213.1,75.9c-1.2,1-42.4,60.1-42.6,61.2c-0.1,0.5,0.1,1.3,0.4,1.8c1,1.3,60.1,42.4,61.2,42.7c3.3,0.6,11-17.7,12.9-30.7c2.5-17.3-0.6-35.6-8.5-50.1c-4.5-8.3-12.8-18.5-19.1-23.6C214.9,75.2,214.3,75,213.1,75.9z"}),n.createElement("path",{d:"M10.8,80.1c-0.7,0.7-0.8,5.7-0.8,47.2c0,45.8,0,46.4,1,47.4c0.9,0.9,1.6,1,13.5,1s12.6-0.1,13.5-1c1-1,1-1.6,1-47.1c0-40.9-0.1-46.3-0.8-47.2c-0.7-1.1-0.9-1.1-13.7-1.1C13.4,79.3,11.4,79.4,10.8,80.1z"}),n.createElement("path",{d:"M50,95.8l-1.1,0.7v38.8v38.8l1.1,0.7c1.6,1.2,24.7,1.2,26.4,0l1.1-0.7v-38.8V96.6l-1.1-0.7c-0.9-0.6-3.1-0.8-13.2-0.8C53,95,50.9,95.2,50,95.8z"}),n.createElement("path",{d:"M86.3,135.2c-1.1,0.8-1.1,1-0.8,7.2c1.2,27.8,17.5,53.7,42.2,67.1c8.1,4.4,19,7.8,28.7,9c7.5,1,6.7,5.6,6.7-38.5c0-36.7,0-37.3-1-38.3c-0.5-0.5-1.6-1-2.3-1c-1.5,0-68.4-5.8-70.8-6.1C88,134.5,86.9,134.8,86.3,135.2z"}),n.createElement("path",{d:"M179.9,169.1l-1.1,0.7v34.9c0,38.9-0.2,36.4,3.4,36.4c3.2,0,12.9-1.9,18-3.4c7.4-2.4,17.8-7.7,23.8-12.2c6.4-4.9,15.3-13.9,15.3-15.6c0-1.5,1.2-0.6-29.9-22.3c-23.6-16.5-27.6-19.3-28.2-19.3C181.1,168.4,180.4,168.7,179.9,169.1z"})),I3=n.forwardRef(E3),S3=({title:e,titleId:t,...o},c)=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",ref:c,"aria-labelledby":t,...o},e?n.createElement("title",{id:t},e):null,n.createElement("path",{d:"M6 20.5H18C18.2761 20.5 18.5 20.2761 18.5 20V8.89023C18.5 8.75762 18.4473 8.63044 18.3536 8.53667L13.4633 3.64645C13.3696 3.55268 13.2424 3.5 13.1098 3.5H6C5.72386 3.5 5.5 3.72386 5.5 4V20C5.5 20.2761 5.72386 20.5 6 20.5ZM18 22H6C4.89543 22 4 21.1046 4 20V4C4 2.89543 4.89543 2 6 2H13.1098C13.6402 2 14.1489 2.21071 14.524 2.58579L19.4142 7.47601C19.7893 7.85109 20 8.35979 20 8.89023V20C20 21.1046 19.1046 22 18 22Z"}),n.createElement("path",{d:"M7.18811 15.6866H13.6881C14.1023 15.6866 14.4381 16.0224 14.4381 16.4366C14.4381 16.8508 14.1023 17.1866 13.6881 17.1866H7.18811C6.7739 17.1866 6.43811 16.8508 6.43811 16.4366C6.43811 16.0224 6.7739 15.6866 7.18811 15.6866Z"}),n.createElement("path",{d:"M7.18811 18.0172H11.6881C12.1023 18.0172 12.4381 18.353 12.4381 18.7672C12.4381 19.1814 12.1023 19.5172 11.6881 19.5172H7.18811C6.7739 19.5172 6.43811 19.1814 6.43811 18.7672C6.43811 18.353 6.7739 18.0172 7.18811 18.0172Z"}),n.createElement("path",{d:"M10.931 5.6183C12.5879 5.6183 13.931 6.96145 13.931 8.6183C13.931 9.40695 13.6267 10.1245 13.1291 10.66C14.1618 11.2001 14.9713 12.1088 15.3827 13.2115C15.5509 13.6621 15.1812 14.0973 14.7002 14.0973C14.3409 14.0973 14.037 13.8467 13.8874 13.52C13.3744 12.4 12.2436 11.6219 10.931 11.6219C9.61851 11.6219 8.48769 12.4 7.97468 13.52C7.82507 13.8467 7.52117 14.0973 7.16188 14.0973C6.68089 14.0973 6.31119 13.6621 6.47934 13.2115C6.89081 12.1088 7.70026 11.2001 8.73297 10.66C8.23536 10.1245 7.93104 9.40695 7.93104 8.6183C7.93104 6.96145 9.27419 5.6183 10.931 5.6183ZM10.931 10.1183C11.7595 10.1183 12.431 9.44673 12.431 8.6183C12.431 7.78987 11.7595 7.1183 10.931 7.1183C10.1026 7.1183 9.43104 7.78987 9.43104 8.6183C9.43104 9.44673 10.1026 10.1183 10.931 10.1183Z"})),z3=n.forwardRef(S3),B3=({title:e,titleId:t,...o},c)=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 512 208.49",ref:c,"aria-labelledby":t,...o},e?n.createElement("title",{id:t},e):null,n.createElement("path",{d:"M296.4 208.49c4.15-53.83 20.56-43.09 66.49-71.82 14.19 29.59 71.85 31.75 83.67 0 39.64 25.34 65.71 15.61 65.44 71.82H296.4zm30.85-147.27h-33.33v16.16c-.13 2.91-1.09 4.97-2.9 6.17-4.85 3.24-9.88-.95-13.01-4.25l-27.9-30.52c-3.59-3.25-3.59-7.88 0-11.13L278.92 6.3c2.92-3.17 7.62-6.41 12.1-3.42 1.81 1.19 2.77 3.25 2.9 6.16v16.17h33.33v36.01zm-142.5 62.16h33.33v16.16c.13 2.91 1.09 4.97 2.9 6.17 4.85 3.24 9.87-.95 13.01-4.25l27.9-30.52c3.59-3.25 3.59-7.88 0-11.13l-28.81-31.35c-2.92-3.17-7.62-6.41-12.1-3.43-1.81 1.2-2.77 3.26-2.9 6.17v16.17h-33.33v36.01zM77.33 134.33c-.62-.79 1.6-6.25 2.12-7.13-6-5.34-10.74-10.73-11.75-21.81l-.65.01c-1.48-.02-2.92-.36-4.26-1.13-2.15-1.22-3.66-3.32-4.68-5.68-2.16-4.97-9.28-21.45 1.57-20.14-6.07-11.33 7.66-30.67-16.01-37.83 19.42-24.59 60.39-62.52 90.42-24.48 32.87 3.19 43.12 42.25 20.99 63.64 1.29.05 2.52.35 3.6.93 4.11 2.2 4.25 6.98 3.17 11-1.07 3.35-2.43 5.62-3.71 8.88-1.56 4.41-3.84 5.24-8.24 4.76-.22 10.91-5.27 16.26-12.05 22.67l1.86 6.29c-9.1 19.3-46.89 20.07-62.38.02zM0 208.49c4.16-53.83 20.56-43.09 66.5-71.82 14.19 29.59 71.84 31.75 83.67 0 39.64 25.34 65.7 15.61 65.43 71.82H0zm373.72-74.16c-.61-.79 1.6-6.25 2.13-7.13-6-5.34-10.75-10.73-11.76-21.81l-.64.01c-1.49-.02-2.92-.36-4.26-1.13-2.15-1.22-3.66-3.32-4.68-5.68-2.16-4.97-9.28-21.45 1.56-20.14-6.06-11.33 7.66-30.67-16.01-37.83 19.42-24.59 60.4-62.52 90.43-24.48 32.86 3.19 43.12 42.25 20.99 63.64 1.29.05 2.51.35 3.6.93 4.11 2.2 4.24 6.98 3.16 11-1.07 3.35-2.43 5.62-3.71 8.88-1.56 4.41-3.83 5.24-8.23 4.76-.23 10.91-5.27 16.26-12.05 22.67l1.85 6.29c-9.09 19.3-46.89 20.07-62.38.02z"})),R3=n.forwardRef(B3),P3=({title:e,titleId:t,...o},c)=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",ref:c,"aria-labelledby":t,...o},e?n.createElement("title",{id:t},e):null,n.createElement("path",{d:"M15.9665 3.04172C15.9369 3.04911 15.8935 3.0648 15.8695 3.07588C15.8455 3.08788 14.5781 3.82634 13.0532 4.71711C10.4391 6.2448 10.2766 6.3408 10.2074 6.40542C10.02 6.5808 9.91384 6.83095 9.91384 7.09311C9.91384 7.20942 9.9323 7.29711 9.97292 7.38018C10.0117 7.45957 10.056 7.51218 10.1141 7.54911C10.1391 7.5648 10.4446 7.69772 10.7945 7.84542C11.1434 7.99218 11.4323 8.11495 11.4351 8.11865C11.4378 8.12142 11.4268 8.13895 11.4111 8.15926C11.2348 8.37895 10.9634 8.77403 10.7612 9.10634C9.93784 10.4614 9.26676 12.1479 8.84768 13.9202C8.7683 14.2553 8.64738 14.8331 8.64738 14.8783C8.64738 14.8903 8.66584 14.9245 8.68984 14.955L8.73322 15.0103L8.65292 15.123C8.42584 15.4414 8.18953 15.7165 7.93753 15.9574C7.82676 16.0636 7.81938 16.0673 7.66799 16.0802C7.45107 16.0986 7.15568 16.0396 6.94615 15.9353C6.38584 15.6556 6.28153 15.111 6.64615 14.3688C6.71353 14.2303 6.81599 14.0577 6.9083 13.9266C6.98307 13.8205 6.99876 13.7799 7.03384 13.6146C7.05784 13.4983 7.05784 13.3996 7.03384 13.359C7.02368 13.3433 7.00984 13.3294 7.00338 13.3294C6.99599 13.3294 6.97753 13.323 6.96184 13.3156C6.92492 13.2971 6.88153 13.311 6.80122 13.3682C6.72276 13.4245 6.5003 13.6543 6.4163 13.767C6.26215 13.9719 6.08676 14.2913 5.98153 14.558C5.65476 15.3879 5.63722 16.1402 5.9363 16.5805C5.95661 16.61 5.9723 16.6359 5.9723 16.6386C5.9723 16.6608 5.56338 16.4688 5.42584 16.382C5.00953 16.119 4.75661 15.7626 4.67261 15.3223C4.62645 15.0851 4.62276 14.7556 4.66153 14.4648C4.79168 13.4891 5.31599 12.1617 6.34153 10.2094C6.45507 9.99342 6.5843 9.74234 6.62768 9.65095C7.17968 8.50819 7.36061 7.56572 7.15199 6.91495C7.01168 6.47557 6.69045 6.18665 6.29168 6.13865C6.10245 6.11649 5.91045 6.17095 5.81445 6.27526C5.75722 6.33711 5.73045 6.40357 5.73045 6.48295C5.73045 6.57526 5.75445 6.64265 5.83753 6.78388C5.99261 7.04695 6.07015 7.27311 6.1163 7.59249C6.13661 7.73003 6.13938 8.11311 6.12184 8.27095C6.00276 9.32603 5.50615 10.5694 4.43538 12.494C4.19168 12.9316 4.11322 13.0811 4.02184 13.2786C3.78922 13.7826 3.64799 14.2396 3.59445 14.6633C3.57599 14.8082 3.57415 15.1063 3.58984 15.2328C3.68676 16.0026 4.12522 16.5426 5.03999 17.0199C5.18953 17.0983 5.50245 17.2442 5.61968 17.2903C6.19938 17.5211 6.86768 17.4722 7.54153 17.15C7.68368 17.0826 7.68645 17.0854 7.55815 17.1648C7.39568 17.2663 7.19076 17.3605 7.03476 17.4057C6.88522 17.4491 6.81784 17.4546 6.45692 17.4491C6.18276 17.4445 6.10153 17.4463 5.99261 17.4593C5.70738 17.4925 5.51076 17.57 5.43968 17.678C5.40553 17.7306 5.39907 17.8137 5.42584 17.8746C5.44892 17.9263 5.52553 18.0094 5.59384 18.0556C5.9243 18.2799 6.48553 18.35 7.03753 18.2346C7.17968 18.2042 7.39568 18.134 7.57568 18.0593C7.77784 17.9753 8.11753 17.8036 8.31045 17.6882C8.33999 17.6706 8.36584 17.6586 8.36861 17.6605C8.37322 17.666 8.04092 17.9845 7.89599 18.1119C7.73722 18.2522 7.6163 18.3491 7.4123 18.4986C6.83538 18.9214 6.54276 19.1845 6.46615 19.3488C6.4283 19.431 6.43938 19.4734 6.50676 19.5066C6.54645 19.526 6.56122 19.5279 6.71076 19.5279C6.84276 19.527 6.89907 19.5223 7.01999 19.502C7.18245 19.4743 7.47692 19.4097 7.67076 19.3608C7.97722 19.2823 8.26892 19.13 8.71384 18.8171L8.76461 18.7811L8.73599 18.8134C8.72122 18.831 8.63538 18.9233 8.54676 19.0202C8.13322 19.4688 7.91907 19.7346 7.83507 19.9017C7.80184 19.9682 7.79261 20.0273 7.81107 20.0522C7.85722 20.114 8.06399 20.0513 8.4443 19.8593C8.79045 19.6839 8.92338 19.5842 9.26584 19.238L9.48184 19.0211L9.47445 19.0765C9.47076 19.106 9.46799 19.2639 9.46799 19.4263C9.46707 19.8196 9.48276 19.9534 9.55938 20.2128C9.68676 20.6476 9.80584 20.9125 9.88245 20.9319C9.98492 20.9577 10.0588 20.6808 10.1031 20.1002C10.1169 19.9165 10.1345 19.6202 10.1363 19.5473C10.1363 19.526 10.1465 19.5648 10.1585 19.6386C10.2138 19.982 10.2858 20.2451 10.3791 20.4417C10.4677 20.63 10.7206 21.0574 10.8277 21.2005C11.0557 21.507 11.1766 21.5125 11.2255 21.2171C11.2421 21.1146 11.2403 20.7454 11.2209 20.5211C11.2126 20.4223 11.1932 20.2285 11.1785 20.09C11.1637 19.9516 11.1461 19.7374 11.1406 19.6137C11.1295 19.371 11.1369 18.8143 11.1517 18.7986C11.1572 18.794 11.16 18.7968 11.16 18.807C11.16 18.8356 11.3308 19.3377 11.3908 19.4863C11.4692 19.6793 11.5468 19.8473 11.6141 19.97C11.9123 20.5119 12.4015 20.9688 12.8723 21.1433C13.2129 21.2697 13.4492 21.2153 13.4492 21.0094C13.4492 20.858 13.3181 20.6319 13.0883 20.3873L13.0117 20.3051L13.0985 20.3716C13.2803 20.511 13.4326 20.5913 13.7308 20.7048C14.22 20.8913 14.6021 20.9937 14.9345 21.0279C15.0581 21.0399 15.2991 21.0399 15.4135 21.027C16.2923 20.93 16.9652 20.2783 17.4498 19.0543C17.5449 18.8153 17.6151 18.6048 17.7286 18.2217C18.1569 16.7799 18.4911 15.8799 18.8954 15.0786C19.3772 14.1242 19.8812 13.5408 20.46 13.2639C20.5985 13.1983 20.6991 13.1623 20.8763 13.1171C21.0314 13.0783 21.0932 13.0506 21.1541 12.9943C21.216 12.938 21.2418 12.879 21.2474 12.7885C21.2538 12.6703 21.2234 12.5845 21.132 12.4636C20.9603 12.2383 20.6178 12.1026 20.3058 12.1368C19.6837 12.2051 19.1095 12.7433 18.6268 13.7088C18.4163 14.1306 18.324 14.3697 18.0415 15.2263C17.9363 15.5457 17.8052 15.9343 17.7508 16.0894C16.8711 18.5799 16.0975 19.7974 15.2049 20.0956C15.0268 20.1556 14.9012 20.1722 14.6861 20.1666C14.5791 20.1639 14.4729 20.1556 14.4249 20.1473C14.0935 20.0854 13.7345 19.9396 13.5406 19.79C13.4778 19.7411 13.4095 19.6793 13.4141 19.6765C13.4151 19.6746 13.4474 19.6774 13.4852 19.683C13.6781 19.7097 13.9449 19.635 14.1618 19.4928C14.6455 19.178 15.12 18.4396 15.3369 17.6633C15.4061 17.415 15.432 17.2506 15.4403 17.0079C15.4495 16.7199 15.4181 16.6146 15.3305 16.6451C15.276 16.6645 15.1495 16.826 15.0757 16.971C15.06 17.0033 15.0415 17.0614 15.0323 17.1094C14.9271 17.6753 14.6815 18.1811 14.4046 18.4026C14.2615 18.518 14.1268 18.5716 13.9597 18.579C13.7825 18.5882 13.6283 18.5513 13.4381 18.4543C13.1677 18.3168 12.9895 18.1506 12.8843 17.9383L12.8446 17.858L12.8455 17.7325C12.8474 17.5977 12.8677 17.366 12.8963 17.175C12.9138 17.055 12.96 16.7882 12.9646 16.7836C12.9655 16.7826 12.9886 16.7753 13.0154 16.7688C13.0717 16.754 13.0578 16.7706 13.2175 16.538C14.3289 14.919 15.168 13.179 15.6489 11.4971C15.7837 11.0254 15.8981 10.5085 15.9471 10.1466C15.9572 10.071 15.9674 10.0257 15.9729 10.0276C15.9785 10.0303 16.2591 10.1485 16.5969 10.2906C16.9348 10.4328 17.2274 10.5537 17.2477 10.5611C17.268 10.5676 17.3178 10.5731 17.3585 10.5722C17.4923 10.5703 17.6132 10.5113 17.7425 10.3848C17.8634 10.2666 17.9428 10.1319 17.9963 9.95465C18.0194 9.87988 18.0221 9.85865 18.0221 9.7248V9.57711L17.2449 6.47372C16.8175 4.76695 16.4575 3.34357 16.4455 3.31034C16.4012 3.19403 16.3071 3.09157 16.2111 3.05557C16.1437 3.02972 16.0375 3.02419 15.9665 3.04172ZM12.0775 18.4534C12.1052 18.5005 12.1145 18.53 12.1301 18.6177C12.2215 19.1605 12.4301 19.6423 12.7366 20.0208L12.816 20.1186L12.7191 20.0337C12.5917 19.923 12.5105 19.8343 12.4412 19.7319C12.2788 19.4882 12.1606 19.1577 12.0877 18.7368C12.0665 18.6159 12.0369 18.3971 12.0425 18.3971C12.0434 18.3971 12.0591 18.423 12.0775 18.4534Z"})),F3=n.forwardRef(P3),{guildTotal:s1,date:H3}=T[0].info[T[0].info.length-1],J3=()=>{const e=C1(),[t,,]=J(),{language:o,selectedItems:c}=O(N),r=n.useMemo(()=>T.map(({name:i,info:C})=>({name:i,damage:C[C.length-1].damage})),[]),l=n.useMemo(()=>T.map(({name:i,info:C})=>({name:i,damage:C[C.length-1].damage})),[]),{LAST:m,MIN:u,COMPARE:d}=U(o);return s.jsxs(A3,{children:[s.jsxs(D3,{children:[s.jsxs(T3,{children:[m," - ",H3,s.jsx(F,{onClick:()=>e("/statistic"),children:s.jsx(I3,{})}),s.jsx(F,{onClick:()=>e("/bossHP"),children:s.jsx(F3,{})}),s.jsx(F,{onClick:()=>e("/contacts"),children:s.jsx(z3,{})})]}),s.jsx(Q1,{title:u,disableHoverListener:c.length>=2,children:s.jsx("span",{children:s.jsx(_3,{variant:"contained",onClick:()=>e(`/compare/${c.join("^")}`),disabled:c.length<=1,children:t?s.jsx(F,{children:s.jsx(R3,{})}):d})})})]}),s.jsxs(V3,{children:[s.jsx(w3,{data:l,total:s1}),s.jsx(j3,{data:r,total:s1})]})]})},A3=h.div`
  padding: 1rem 1.5rem;
`,V3=h.div`
  display: grid;
  grid-template-columns: calc(68% - 0.5rem) calc(32% - 0.5rem);
  grid-template-rows: calc(100vh - 5.6rem);
  grid-column-gap: 1rem;

  @media ${({theme:e})=>e.breakpoints.maxLtg} {
    grid-template-columns: 100%;
    grid-template-rows: 1fr 24rem;
    grid-row-gap: 2rem;
  }
`,F=h(Z)`
  &.MuiSvgIcon-root {
    font-size: 2rem;
    cursor: pointer;
    fill: ${({theme:e})=>e.colors.blue100};
  }
`,_3=h(S1)`
  &.MuiButtonBase-root {
    ${h1};
    color: ${({theme:e})=>e.colors.gray000};
    background: ${({theme:e})=>e.colors.blue100};
    border-radius: 16px;
    text-transform: inherit;

    ${F} {
      fill: ${({theme:e})=>e.colors.gray000};
    }

    &:hover {
      background: ${({theme:e})=>e.colors.blue100};
    }

    &:disabled {
      ${F} {
        fill: ${({theme:e})=>e.colors.gray090};
      }
    }
  }
`,D3=h.div`
  ${_1};
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 67%;
  height: 2.5rem;

  @media ${({theme:e})=>e.breakpoints.maxLtg} {
    ${h1};
    font-weight: bold;
    width: 100%;
  }
`,T3=h.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
`;export{J3 as default};
