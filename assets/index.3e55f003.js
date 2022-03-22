import{ah as x,aH as $,ai as r,aj as y,az as R,am as e,al as n,a7 as t,aT as z,ax as i,aF as b,b2 as U,b3 as S,ak as N,aw as A,ay as V}from"./vendor.5d21b69b.js";import{b as L}from"./index.5410f799.js";import{f as w,a as T}from"./rule.f3072239.js";import{u as j}from"./useSmsCode.c8101dc6.js";import"./useLoading.38b1a20d.js";import"./useBoolean.c16d084f.js";const H={class:"w-full text-14px"},M=i("\u6211\u5DF2\u7ECF\u4ED4\u7EC6\u9605\u8BFB\u5E76\u63A5\u53D7"),q=i("\u300A\u7528\u6237\u534F\u8BAE\u300B"),G=i("\u300A\u9690\u79C1\u6743\u653F\u7B56\u300B"),I=x({props:{value:{type:Boolean,default:!0}},emits:["update:value","click-protocol","click-policy"],setup(g,{emit:p}){const m=g,f=$({get(){return m.value},set(d){p("update:value",d)}});function _(){p("click-protocol")}function v(){p("click-policy")}return(d,u)=>{const C=r("n-checkbox"),c=r("n-button");return y(),R("div",H,[e(C,{checked:t(f),"onUpdate:checked":u[0]||(u[0]=h=>z(f)?f.value=h:null)},{default:n(()=>[M]),_:1},8,["checked"]),e(c,{text:!0,type:"primary",onClick:_},{default:n(()=>[q]),_:1}),e(c,{text:!0,type:"primary",onClick:v},{default:n(()=>[G]),_:1})])}}}),J={class:"flex-y-center w-full"},K=A("div",{class:"w-18px"},null,-1),O=i("\u786E\u5B9A"),Q=i("\u8FD4\u56DE"),te=x({setup(g){const{toLoginModule:p}=L(),{label:m,isCounting:f,loading:_,start:v}=j(),d=b(null),u=U({phone:"",code:"",pwd:"",confirmPwd:""}),C={phone:w.phone,code:w.code,pwd:w.pwd,confirmPwd:T(S(u).pwd)},c=b(!1);function h(){v()}function E(B){!d.value||(B.preventDefault(),d.value.validate(o=>{var a,s;if(o)(s=window.$message)==null||s.error("\u9A8C\u8BC1\u5931\u8D25");else{if(!c.value)return;(a=window.$message)==null||a.success("\u9A8C\u8BC1\u6210\u529F")}}))}return(B,o)=>{const a=r("n-input"),s=r("n-form-item"),k=r("n-button"),F=I,P=r("n-space"),D=r("n-form");return y(),N(D,{ref_key:"formRef",ref:d,model:t(u),rules:C,size:"large","show-label":!1},{default:n(()=>[e(s,{path:"phone"},{default:n(()=>[e(a,{value:t(u).phone,"onUpdate:value":o[0]||(o[0]=l=>t(u).phone=l),placeholder:"\u624B\u673A\u53F7\u7801"},null,8,["value"])]),_:1}),e(s,{path:"code"},{default:n(()=>[A("div",J,[e(a,{value:t(u).code,"onUpdate:value":o[1]||(o[1]=l=>t(u).code=l),placeholder:"\u9A8C\u8BC1\u7801"},null,8,["value"]),K,e(k,{size:"large",disabled:t(f),loading:t(_),onClick:h},{default:n(()=>[i(V(t(m)),1)]),_:1},8,["disabled","loading"])])]),_:1}),e(s,{path:"pwd"},{default:n(()=>[e(a,{value:t(u).pwd,"onUpdate:value":o[2]||(o[2]=l=>t(u).pwd=l),placeholder:"\u5BC6\u7801"},null,8,["value"])]),_:1}),e(s,{path:"confirmPwd"},{default:n(()=>[e(a,{value:t(u).confirmPwd,"onUpdate:value":o[3]||(o[3]=l=>t(u).confirmPwd=l),placeholder:"\u786E\u8BA4\u5BC6\u7801"},null,8,["value"])]),_:1}),e(P,{vertical:!0,size:18},{default:n(()=>[e(F,{value:c.value,"onUpdate:value":o[4]||(o[4]=l=>c.value=l)},null,8,["value"]),e(k,{type:"primary",size:"large",block:!0,round:!0,onClick:E},{default:n(()=>[O]),_:1}),e(k,{size:"large",block:!0,round:!0,onClick:o[5]||(o[5]=l=>t(p)("pwd-login"))},{default:n(()=>[Q]),_:1})]),_:1})]),_:1},8,["model"])}}});export{te as default};
