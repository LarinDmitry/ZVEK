import{N as ke,r as c,w as ye,k as re,n as ae,_ as ce,p as L,j as n,q as X,t as ie,A as H,v as le,E as we,z as de,o as $e,F as je,O as Z,e as ue,G as me,u as V,s as N,P as Me,b as U,d as g,S as Q,Q as Ie,R as Le,T as Se,U as Ee,V as Re,l as O,W as Be,X as ze,Y as Pe,Z as Fe,J as pe,M as Ae}from"./index-mt-46Lye.js";import{u as _e}from"./isHostComponent-C8-HPyFO.js";import{X as He,q as he,h as q,l as G,a as Te,b as De}from"./MainUtils-BdoUjF0y.js";import{F as ge}from"./arrow-Ca_Wtlwr.js";import{u as Oe}from"./useFormControl-DgLoIALI.js";import{d as Ve}from"./Portal-Drk4aqpN.js";import{c as Y}from"./createSvgIcon-CCIMR9tc.js";import{e as Ne,C as Ue,A as Qe,d as Ge,f as Ze,p as We}from"./index-BCLiDwim.js";import{T as Ke}from"./Tooltip-DntJNQFR.js";function qe(e){const{theme:t,name:o,props:r}=e;return!t||!t.components||!t.components[o]||!t.components[o].defaultProps?r:ke(t.components[o].defaultProps,r)}function Xe(e,t,o,r,s){const[i,m]=c.useState(()=>s&&o?o(e).matches:r?r(e).matches:t);return ye(()=>{let p=!0;if(!o)return;const d=o(e),l=()=>{p&&m(d.matches)};return l(),d.addListener(l),()=>{p=!1,d.removeListener(l)}},[e,o]),i}const Ce=c.useSyncExternalStore;function Ye(e,t,o,r,s){const i=c.useCallback(()=>t,[t]),m=c.useMemo(()=>{if(s&&o)return()=>o(e).matches;if(r!==null){const{matches:u}=r(e);return()=>u}return i},[i,e,r,s,o]),[p,d]=c.useMemo(()=>{if(o===null)return[i,()=>()=>{}];const u=o(e);return[()=>u.matches,b=>(u.addListener(b),()=>{u.removeListener(b)})]},[i,o,e]);return Ce(d,p,m)}function W(e,t={}){const o=_e(),r=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:s=!1,matchMedia:i=r?window.matchMedia:null,ssrMatchMedia:m=null,noSsr:p=!1}=qe({name:"MuiUseMediaQuery",props:t,theme:o});let d=typeof e=="function"?e(o):e;return d=d.replace(/^@media( ?)/m,""),(Ce!==void 0?Ye:Xe)(d,s,i,m,p)}function Je(e){return re("PrivateSwitchBase",e)}ae("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const e1=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],t1=e=>{const{classes:t,checked:o,disabled:r,edge:s}=e,i={root:["root",o&&"checked",r&&"disabled",s&&`edge${H(s)}`],input:["input"]};return le(i,Je,t)},o1=X(we)(({ownerState:e})=>L({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),n1=X("input",{shouldForwardProp:de})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),s1=c.forwardRef(function(t,o){const{autoFocus:r,checked:s,checkedIcon:i,className:m,defaultChecked:p,disabled:d,disableFocusRipple:l=!1,edge:u=!1,icon:b,id:k,inputProps:$,inputRef:M,name:v,onBlur:j,onChange:y,onFocus:w,readOnly:B,required:P=!1,tabIndex:A,type:C,value:a}=t,h=ce(t,e1),[f,S]=Ve({controlled:s,default:!!p,name:"SwitchBase",state:"checked"}),x=Oe(),z=I=>{w&&w(I),x&&x.onFocus&&x.onFocus(I)},T=I=>{j&&j(I),x&&x.onBlur&&x.onBlur(I)},D=I=>{if(I.nativeEvent.defaultPrevented)return;const te=I.target.checked;S(te),y&&y(I,te)};let E=d;x&&typeof E>"u"&&(E=x.disabled);const _=C==="checkbox"||C==="radio",R=L({},t,{checked:f,disabled:E,disableFocusRipple:l,edge:u}),ee=t1(R);return n.jsxs(o1,L({component:"span",className:ie(ee.root,m),centerRipple:!0,focusRipple:!l,disabled:E,tabIndex:null,role:void 0,onFocus:z,onBlur:T,ownerState:R,ref:o},h,{children:[n.jsx(n1,L({autoFocus:r,checked:s,defaultChecked:p,className:ee.input,disabled:E,id:_?k:void 0,name:v,onChange:D,readOnly:B,ref:M,required:P,ownerState:R,tabIndex:A,type:C},C==="checkbox"&&a===void 0?{}:{value:a},$)),f?i:b]}))}),r1=Y(n.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),a1=Y(n.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),c1=Y(n.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function i1(e){return re("MuiCheckbox",e)}const K=ae("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),l1=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],d1=e=>{const{classes:t,indeterminate:o,color:r,size:s}=e,i={root:["root",o&&"indeterminate",`color${H(r)}`,`size${H(s)}`]},m=le(i,i1,t);return L({},t,m)},u1=X(s1,{shouldForwardProp:e=>de(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.indeterminate&&t.indeterminate,t[`size${H(o.size)}`],o.color!=="default"&&t[`color${H(o.color)}`]]}})(({theme:e,ownerState:t})=>L({color:(e.vars||e).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${t.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:je(t.color==="default"?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},t.color!=="default"&&{[`&.${K.checked}, &.${K.indeterminate}`]:{color:(e.vars||e).palette[t.color].main},[`&.${K.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),m1=n.jsx(a1,{}),p1=n.jsx(r1,{}),h1=n.jsx(c1,{}),fe=c.forwardRef(function(t,o){var r,s;const i=$e({props:t,name:"MuiCheckbox"}),{checkedIcon:m=m1,color:p="primary",icon:d=p1,indeterminate:l=!1,indeterminateIcon:u=h1,inputProps:b,size:k="medium",className:$}=i,M=ce(i,l1),v=l?u:d,j=l?u:m,y=L({},i,{color:p,indeterminate:l,size:k}),w=d1(y);return n.jsx(u1,L({type:"checkbox",inputProps:L({"data-indeterminate":l},b),icon:c.cloneElement(v,{fontSize:(r=v.props.fontSize)!=null?r:k}),checkedIcon:c.cloneElement(j,{fontSize:(s=j.props.fontSize)!=null?s:k}),ownerState:y,ref:o,className:ie(w.root,$)},M,{classes:w}))}),J=()=>[W(Z.breakpoints.maxTb),W(Z.breakpoints.maxLtg),W(Z.breakpoints.minLtg)],xe="/ZVEK/assets/gey-CjmNpU5I.png",g1=({title:e,titleId:t,...o},r)=>c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",ref:r,"aria-labelledby":t,...o},e?c.createElement("title",{id:t},e):null,c.createElement("path",{d:"M10.6155 20.2749C10.6155 20.1796 10.5968 20.0853 10.5603 19.9973C10.5239 19.9093 10.4704 19.8293 10.4031 19.762C10.3357 19.6946 10.2557 19.6412 10.1677 19.6048C10.0797 19.5683 9.9854 19.5496 9.89015 19.5496H5.47879L10.403 14.6252C10.5382 14.489 10.614 14.3048 10.6136 14.1129C10.6133 13.9209 10.5369 13.737 10.4012 13.6013C10.2655 13.4656 10.0815 13.3892 9.88961 13.3889C9.6977 13.3886 9.51348 13.4643 9.37732 13.5996L4.4507 18.5264L4.4507 14.11C4.45035 13.9179 4.37377 13.7337 4.23778 13.598C4.10179 13.4622 3.9175 13.386 3.72535 13.386C3.53321 13.386 3.34891 13.4622 3.21292 13.598C3.07693 13.7337 3.00035 13.9179 3 14.11L3 20.2749C3.00057 20.4675 3.07753 20.6521 3.21401 20.788C3.35048 20.924 3.53531 21.0003 3.72796 21.0001H9.89016C9.98541 21.0001 10.0797 20.9814 10.1677 20.945C10.2557 20.9085 10.3357 20.8551 10.4031 20.7877C10.4704 20.7204 10.5239 20.6404 10.5603 20.5524C10.5968 20.4644 10.6155 20.3701 10.6155 20.2749Z"}),c.createElement("path",{d:"M13.3871 3.72527C13.3871 3.82052 13.4059 3.91484 13.4423 4.00284C13.4788 4.09085 13.5322 4.17081 13.5996 4.23816C13.6669 4.30551 13.7469 4.35893 13.8349 4.39537C13.9229 4.43181 14.0172 4.45055 14.1125 4.45053L18.5262 4.45054L13.5996 9.37732C13.5319 9.44459 13.4782 9.52456 13.4414 9.61264C13.4047 9.70073 13.3857 9.7952 13.3856 9.89063C13.3854 9.98607 13.4041 10.0806 13.4406 10.1688C13.477 10.257 13.5305 10.3371 13.598 10.4046C13.6655 10.4721 13.7456 10.5256 13.8339 10.562C13.9221 10.5985 14.0166 10.6172 14.112 10.617C14.2075 10.6168 14.3019 10.5979 14.39 10.5611C14.4781 10.5244 14.5581 10.4706 14.6253 10.4029L19.5493 5.47867L19.5493 9.89012C19.5497 10.0823 19.6262 10.2664 19.7622 10.4022C19.8982 10.5379 20.0825 10.6141 20.2747 10.6141C20.4668 10.6141 20.6511 10.5379 20.7871 10.4022C20.9231 10.2664 20.9997 10.0823 21 9.89012V3.72527C21 3.63001 20.9813 3.53569 20.9448 3.44769C20.9084 3.35969 20.8549 3.27973 20.7876 3.21238C20.7202 3.14503 20.6403 3.09161 20.5523 3.05517C20.4642 3.01873 20.3699 2.99998 20.2747 3L14.1125 3C14.0172 2.99998 13.9229 3.01873 13.8349 3.05517C13.7469 3.09161 13.6669 3.14503 13.5996 3.21238C13.5322 3.27973 13.4788 3.35969 13.4423 3.44769C13.4059 3.53569 13.3871 3.63001 13.3871 3.72527Z"})),C1=c.forwardRef(g1),f1=({title:e,titleId:t,...o},r)=>c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",ref:r,"aria-labelledby":t,...o},e?c.createElement("title",{id:t},e):null,c.createElement("path",{d:"M3 14.1113C2.99999 14.2065 3.01875 14.3008 3.0552 14.3888C3.09165 14.4768 3.14508 14.5568 3.21244 14.6241C3.2798 14.6915 3.35976 14.7449 3.44777 14.7814C3.53578 14.8178 3.6301 14.8365 3.72535 14.8365H8.13671L3.21249 19.7609C3.07727 19.8971 3.00154 20.0813 3.00188 20.2733C3.00222 20.4652 3.07861 20.6491 3.21432 20.7848C3.35003 20.9205 3.53399 20.9969 3.7259 20.9972C3.91781 20.9975 4.10202 20.9218 4.23819 20.7865L9.1648 15.8597V20.2761C9.16515 20.4683 9.24173 20.6524 9.37772 20.7881C9.51371 20.9239 9.69801 21.0001 9.89015 21.0001C10.0823 21.0001 10.2666 20.9239 10.4026 20.7881C10.5386 20.6524 10.6152 20.4683 10.6155 20.2761V14.1113C10.6149 13.9186 10.538 13.7341 10.4015 13.5981C10.265 13.4621 10.0802 13.3858 9.88755 13.386H3.72534C3.63009 13.386 3.53577 13.4047 3.44776 13.4412C3.35975 13.4776 3.27979 13.531 3.21243 13.5984C3.14508 13.6657 3.09165 13.7457 3.0552 13.8337C3.01875 13.9217 2.99999 14.016 3 14.1113Z"}),c.createElement("path",{d:"M20.9985 9.89174C20.9985 9.79648 20.9797 9.70216 20.9433 9.61416C20.9068 9.52616 20.8534 9.4462 20.786 9.37885C20.7187 9.3115 20.6387 9.25808 20.5507 9.22164C20.4627 9.1852 20.3684 9.16645 20.2731 9.16647L15.8594 9.16647L20.786 4.23969C20.8537 4.17242 20.9074 4.09245 20.9442 4.00436C20.9809 3.91628 20.9999 3.82181 21 3.72637C21.0002 3.63094 20.9815 3.53641 20.945 3.44821C20.9086 3.36001 20.8551 3.27987 20.7876 3.21239C20.7201 3.14491 20.6399 3.09141 20.5517 3.05497C20.4635 3.01852 20.369 2.99984 20.2736 3C20.1781 3.00016 20.0837 3.01915 19.9956 3.05589C19.9075 3.09264 19.8275 3.1464 19.7603 3.2141L14.8363 8.13834V3.72688C14.8359 3.53474 14.7593 3.35059 14.6234 3.21484C14.4874 3.0791 14.3031 3.00286 14.1109 3.00286C13.9188 3.00286 13.7345 3.0791 13.5985 3.21484C13.4625 3.35059 13.3859 3.53474 13.3856 3.72688V9.89174C13.3856 9.98699 13.4043 10.0813 13.4408 10.1693C13.4772 10.2573 13.5307 10.3373 13.598 10.4046C13.6654 10.472 13.7453 10.5254 13.8333 10.5618C13.9214 10.5983 14.0157 10.617 14.1109 10.617L20.2731 10.617C20.3684 10.617 20.4627 10.5983 20.5507 10.5618C20.6387 10.5254 20.7187 10.472 20.786 10.4046C20.8534 10.3373 20.9068 10.2573 20.9433 10.1693C20.9797 10.0813 20.9985 9.98699 20.9985 9.89174Z"})),x1=c.forwardRef(f1),b1=({idx:e,name:t,damage:o,total:r,details:{quality:s,stars:i=0,temple:m=0,damageDealer:p},isChecked:d,isExpanded:l,toggleRowExpansion:u})=>{const b=ue(),k=me(),[,,$]=J(),{language:M}=V(N),v=c.useCallback((C,a,h=He)=>n.jsx(w1,{src:a[C]||h,alt:C}),[]),j=c.useMemo(()=>{const C=[{key:"checkbox",content:n.jsx(fe,{checked:d,onChange:()=>k(Me(t))})},{key:"index",content:e+1},{key:"name",content:t},{key:"quality",content:v(s||"",he)}],a=$?[{key:"stars",content:i},{key:"temple",content:m},{key:"hero",content:v(p||"",q,"")},{key:"damage",content:(Math.floor(o/1e9*1e3)/1e3).toFixed(3)},{key:"influence",content:`${(Math.floor(o/r*100*1e3)/1e3).toFixed(3)}`}]:[{key:"expand",content:n.jsx(v1,{isexpanded:+l,onClick:()=>u(t),children:l?n.jsx(x1,{}):n.jsx(C1,{})})}];return[...C,...a]},[d,e,t,v,s,$,i,m,p,o,r,l,k,u]),{TEMPLE:y,IMPACT:w}=G(M),{DAMAGE:B,BILLION:P}=U(M),A=c.useMemo(()=>[{title:n.jsx("img",{src:xe,alt:"gey"}),value:i},{title:y,value:m},{title:B,value:`${(Math.floor(o/1e9*1e3)/1e3).toFixed(3)} ${P}`},{title:w,value:`${(Math.floor(o/r*100*1e3)/1e3).toFixed(3)} %`}],[i,y,m,B,o,P,w,r]);return n.jsxs(y1,{children:[j.map(({key:C,content:a})=>n.jsx(oe,{children:a},C)),n.jsx(oe,{children:n.jsx(be,{onClick:()=>b(`/details/${t}`),children:n.jsx(ge,{})})}),l&&!$&&n.jsxs(k1,{children:[n.jsx(ne,{children:A.map(({title:C,value:a})=>n.jsxs("div",{children:[C,":",n.jsx("span",{children:a})]}))}),n.jsx(ne,{children:n.jsx(ve,{children:v(p||"",q,"")})})]})]})},oe=g.div`
  padding: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
`,be=g(Q)`
  &.MuiSvgIcon-root {
    cursor: pointer;
    fill: ${({theme:e})=>e.colors.gray090};
    transform: rotate(${({direction:e})=>e?e==="asc"?"0":"-180":"-90"}deg);
  }
`,v1=g(Q)`
  &.MuiSvgIcon-root {
    cursor: pointer;
    fill: ${({isexpanded:e,theme:{colors:{gray090:t,blue090:o}}})=>e?t:o};
  }
`,ne=g.div`
  & > div {
    display: flex;
    align-items: center;
    white-space: nowrap;
    margin-top: 0.25rem;
  }
`,ve=g.div`
  height: 100%;

  img {
    width: 6rem !important;
    height: 6rem !important;
  }
`,k1=g.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  gap: 0.5rem;
  padding: 0.5rem 0;
  border-top: 1px solid ${({theme:e})=>e.colors.gray200};

  ${ve} {
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
`,y1=g.div`
  display: grid;
  grid-template-columns: 4rem 2.25rem auto 6rem 6rem 6rem 6rem 7rem 7rem 3rem;
  border-bottom: 1px solid rgb(224, 224, 224);
  align-items: center;

  &:hover {
    background-color: ${({theme:e})=>e.colors.blue050};

    ${be} {
      fill: ${({theme:e})=>e.colors.gray100};
    }
  }

  @media ${({theme:e})=>e.breakpoints.maxLtg} {
    grid-template-columns: 4rem 2.3rem auto 4rem 3rem 3rem;
  }
`,w1=g.img`
  height: 3rem;
  width: 3rem;
`,$1=({data:e,total:t})=>{const o=me(),[,,r]=J(),{sortConfig:s,selectedItems:i,language:m}=V(N),[p,d]=c.useState([]),l=c.useCallback(a=>{d(h=>h.includes(a)?h.filter(f=>f!==a):[...h,a])},[]),u=c.useMemo(()=>Ie.reduce((a,{name:h,quality:f,stars:S,temple:x,damageDealer:z})=>(a[h]={quality:f,stars:S,temple:x,damageDealer:z},a),{}),[]),b=c.useMemo(()=>{if(!s)return e;const{key:a,direction:h}=s;return[...e].sort((f,S)=>{const x=u[f.name]||{},z=u[S.name]||{},T=(_,R)=>{switch(a){case"name":return _.name;case"quality":return Object.keys(he).indexOf(R.quality||"");case"gey":return R.stars||0;case"temple":return R.temple||0;case"hero":return Object.keys(q).indexOf(R.damageDealer||"");case"damage":return _.damage;case"influence":return _.damage/t*100;default:return 0}},D=T(f,x),E=T(S,z);return D<E?h==="asc"?-1:1:D>E?h==="asc"?1:-1:0})},[e,s,t,u]),k=c.useCallback(a=>o(a?Le(b.map(({name:h})=>h)):Se()),[o,b]),{QUALITY:$,TEMPLE:M,HERO:v,DAMAGE_TITLE:j,IMPACT:y,MORE:w}=G(m),{NICKNAME:B}=U(m),P=c.useMemo(()=>[n.jsx(fe,{indeterminate:i.length>0&&i.length<e.length,checked:i.length===e.length,onChange:({target:{checked:a}})=>k(a)}),"№",B,$,...r?[n.jsx("img",{src:xe,alt:"gey"}),M,v,j,`${y}, %`]:[w],""],[e.length,r,i.length,k,B,$,M,v,j,y,w]),A=c.useCallback(a=>{a&&a!=="№"&&a!=="more"&&o(Ee((s==null?void 0:s.key)===a&&s.direction==="desc"?{key:a,direction:"asc"}:{key:a,direction:"desc"}))},[o,s==null?void 0:s.direction,s==null?void 0:s.key]),C=({columnKey:a})=>(s==null?void 0:s.key)===a?n.jsx(L1,{direction:s.direction,children:n.jsx(ge,{})}):null;return n.jsxs(j1,{children:[n.jsx(M1,{children:P.map((a,h)=>{const f=["","№","name","quality",...r?["gey","temple","hero","damage","influence"]:["more",""],""][h];return n.jsxs(I1,{onClick:()=>A(f),children:[a,f&&n.jsx(C,{columnKey:f})]},h)})}),b.map(({name:a,damage:h},f)=>{const S=i.includes(a),x=u[a]||{},z=p.includes(a);return n.jsx(b1,{idx:f,name:a,damage:h,total:t,details:x,isChecked:S,isExpanded:z,toggleRowExpansion:l},a)})]})},j1=g.div`
  overflow: auto;
  height: calc(100vh - 6rem);
  border: 1px solid rgb(224, 224, 224);
  border-radius: 8px;
  background: ${({theme:e})=>e.colors.gray000};
`,M1=g.div`
  ${Re};
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
`,I1=g.div`
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
`,L1=g(Q)`
  &.MuiSvgIcon-root {
    cursor: pointer;
    fill: ${({theme:e})=>e.colors.gray090};
    transform: rotate(${({direction:e})=>e?e==="asc"?"0":"-180":"-90"}deg);
  }
`;Ue.register(Qe,Ge,Ze,We);const S1=({data:e,total:t})=>{const o=c.useMemo(()=>[...e].sort((d,l)=>l.damage-d.damage),[e]),{language:r}=V(N),{DIAGRAM:s}=G(r),{DAMAGE:i}=U(r),m=c.useMemo(()=>({labels:o.map(({name:d})=>d),datasets:[{label:i,data:o.map(({damage:d})=>d),backgroundColor:De,hoverBackgroundColor:Te}]}),[o,i]),p=c.useMemo(()=>({plugins:{datalabels:!1,title:{display:!0,text:s},tooltip:{callbacks:{label:({label:d,raw:l})=>`${d}: ${l.toLocaleString()} (${(l/t*100).toFixed(3)}%)`}},legend:{display:!0,position:"bottom"}}}),[t,s]);return n.jsx(E1,{children:n.jsx(Ne,{data:m,options:p})})},E1=g.div`
  justify-content: center;
  display: flex;
`,R1=({title:e,titleId:t,...o},r)=>c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 512 208.49",ref:r,"aria-labelledby":t,...o},e?c.createElement("title",{id:t},e):null,c.createElement("path",{d:"M296.4 208.49c4.15-53.83 20.56-43.09 66.49-71.82 14.19 29.59 71.85 31.75 83.67 0 39.64 25.34 65.71 15.61 65.44 71.82H296.4zm30.85-147.27h-33.33v16.16c-.13 2.91-1.09 4.97-2.9 6.17-4.85 3.24-9.88-.95-13.01-4.25l-27.9-30.52c-3.59-3.25-3.59-7.88 0-11.13L278.92 6.3c2.92-3.17 7.62-6.41 12.1-3.42 1.81 1.19 2.77 3.25 2.9 6.16v16.17h33.33v36.01zm-142.5 62.16h33.33v16.16c.13 2.91 1.09 4.97 2.9 6.17 4.85 3.24 9.87-.95 13.01-4.25l27.9-30.52c3.59-3.25 3.59-7.88 0-11.13l-28.81-31.35c-2.92-3.17-7.62-6.41-12.1-3.43-1.81 1.2-2.77 3.26-2.9 6.17v16.17h-33.33v36.01zM77.33 134.33c-.62-.79 1.6-6.25 2.12-7.13-6-5.34-10.74-10.73-11.75-21.81l-.65.01c-1.48-.02-2.92-.36-4.26-1.13-2.15-1.22-3.66-3.32-4.68-5.68-2.16-4.97-9.28-21.45 1.57-20.14-6.07-11.33 7.66-30.67-16.01-37.83 19.42-24.59 60.39-62.52 90.42-24.48 32.87 3.19 43.12 42.25 20.99 63.64 1.29.05 2.52.35 3.6.93 4.11 2.2 4.25 6.98 3.17 11-1.07 3.35-2.43 5.62-3.71 8.88-1.56 4.41-3.84 5.24-8.24 4.76-.22 10.91-5.27 16.26-12.05 22.67l1.86 6.29c-9.1 19.3-46.89 20.07-62.38.02zM0 208.49c4.16-53.83 20.56-43.09 66.5-71.82 14.19 29.59 71.84 31.75 83.67 0 39.64 25.34 65.7 15.61 65.43 71.82H0zm373.72-74.16c-.61-.79 1.6-6.25 2.13-7.13-6-5.34-10.75-10.73-11.76-21.81l-.64.01c-1.49-.02-2.92-.36-4.26-1.13-2.15-1.22-3.66-3.32-4.68-5.68-2.16-4.97-9.28-21.45 1.56-20.14-6.06-11.33 7.66-30.67-16.01-37.83 19.42-24.59 60.4-62.52 90.43-24.48 32.86 3.19 43.12 42.25 20.99 63.64 1.29.05 2.51.35 3.6.93 4.11 2.2 4.24 6.98 3.16 11-1.07 3.35-2.43 5.62-3.71 8.88-1.56 4.41-3.83 5.24-8.23 4.76-.23 10.91-5.27 16.26-12.05 22.67l1.85 6.29c-9.09 19.3-46.89 20.07-62.38.02z"})),B1=c.forwardRef(R1),{guildTotal:se,date:z1}=O[0].info[O[0].info.length-1],W1=()=>{const e=ue(),[t,,]=J(),{language:o,selectedItems:r}=V(N),s=c.useMemo(()=>O.map(({name:l,info:u})=>({name:l,damage:u[u.length-1].damage})),[]),i=c.useMemo(()=>O.map(({name:l,info:u})=>({name:l,damage:u[u.length-1].damage})),[]),{MIN:m,COMPARE:p}=G(o),{LAST:d}=U(o);return n.jsxs(P1,{children:[n.jsxs(_1,{children:[n.jsxs(H1,{children:[d," - ",z1,n.jsx(F,{onClick:()=>e("/statistic"),children:n.jsx(Be,{})}),n.jsx(F,{onClick:()=>e("/bossHP"),children:n.jsx(ze,{})}),n.jsx(F,{onClick:()=>e("/contacts"),children:n.jsx(Pe,{})})]}),n.jsx(Ke,{title:m,disableHoverListener:r.length>=2,children:n.jsx("span",{children:n.jsx(A1,{variant:"contained",onClick:()=>e(`/compare/${r.join("^")}`),disabled:r.length<=1,children:t?n.jsx(F,{children:n.jsx(B1,{})}):p})})})]}),n.jsxs(F1,{children:[n.jsx($1,{data:i,total:se}),n.jsx(S1,{data:s,total:se})]})]})},P1=g.div`
  padding: 1rem 1.5rem;
`,F1=g.div`
  display: grid;
  grid-template-columns: calc(68% - 0.5rem) calc(32% - 0.5rem);
  grid-template-rows: calc(100vh - 5.6rem);
  grid-column-gap: 1rem;

  @media ${({theme:e})=>e.breakpoints.maxLtg} {
    grid-template-columns: 100%;
    grid-template-rows: 1fr 24rem;
    grid-row-gap: 2rem;
  }
`,F=g(Q)`
  &.MuiSvgIcon-root {
    font-size: 2rem;
    cursor: pointer;
    color: ${({theme:e})=>e.colors.blue100};
  }
`,A1=g(Ae)`
  &.MuiButtonBase-root {
    ${pe};
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
`,_1=g.div`
  ${Fe};
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 67%;
  height: 2.5rem;

  @media ${({theme:e})=>e.breakpoints.maxLtg} {
    ${pe};
    font-weight: bold;
    width: 100%;
  }
`,H1=g.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
`;export{W1 as default};
