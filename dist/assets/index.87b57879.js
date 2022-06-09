import{o as c,c as l,a as s,F as f,r as y,t as v,b as m,d,p as b,e as w,w as k,v as H,f as S,g as V,h as $,i as h,j as x,k as Z}from"./vendor.caf1aecb.js";const A=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}};A();var _=(n,r)=>{const i=n.__vccOpts||n;for(const[a,e]of r)i[a]=e;return i};const I={created(){this.fetchZoo()},data(){return{animals:null}},methods:{fetchZoo(){fetch("https://zoo-animal-api.herokuapp.com/animals/rand/10").then(n=>n.json()).then(n=>{this.animals=n})}}};function R(n,r,i,a,e,t){return c(),l("div",null,[s("ol",null,[(c(!0),l(f,null,y(e.animals,o=>(c(),l("li",null,v(o.name),1))),256))]),s("input",{onClick:r[0]||(r[0]=(...o)=>t.fetchZoo&&t.fetchZoo(...o)),type:"button",value:"Visa fler djur"})])}var g=_(I,[["render",R],["__scopeId","data-v-9059f216"]]),L="/ITHS-VUE1/assets/barn.2170e5ba.jpg";const j={components:{ApiZoo:g},props:{msg:String},data:function(){return{message:5+5,imageSource:L}}},C=n=>(b("data-v-46e40089"),n=n(),w(),n),E=C(()=>s("h1",null,"ZooAnimals",-1)),N={class:"snippet-item"},B={class:"snippet-title"},O=["src"];function T(n,r,i,a,e,t){const o=m("ApiZoo");return c(),l(f,null,[E,s("div",N,[s("label",B,"H\xE4r visas "+v(n.message)+" olika djurnamn",1),d(o),s("img",{alt:"bild",src:n.imageSource},null,8,O)])],64)}var U=_(j,[["render",T],["__scopeId","data-v-46e40089"]]);const P={data(){return{counter:0}},methods:{increase(){this.counter++}}},W=s("p",null,"R\xE4kna med mig",-1),z=["value"];function D(n,r,i,a,e,t){return c(),l(f,null,[W,s("input",{onClick:r[0]||(r[0]=(...o)=>t.increase&&t.increase(...o)),type:"button",value:e.counter},null,8,z)],64)}var F=_(P,[["render",D]]);const K={components:{ApiZoo:g,CounterButton:F},data(){return{name:""}}},M=s("h1",null,"Hem",-1),q=s("p",null,"Kontrollera att dina tangenter sitter p\xE5 r\xE4tt plats.",-1),G=s("p",null,"Du skrev:",-1),J=s("br",null,null,-1);function Q(n,r,i,a,e,t){const o=m("CounterButton");return c(),l(f,null,[M,q,k(s("input",{"onUpdate:modelValue":r[0]||(r[0]=p=>e.name=p)},null,512),[[H,e.name]]),G,J,s("p",null,v(e.name),1),d(o)],64)}var X=_(K,[["render",Q]]),Y=S({history:V(),routes:[{component:U,path:"/zooanimals"},{component:X,path:"/"}]});const ee={name:"Header",props:{title:String}},te={id:"nav"},oe=h("Hem"),ne=h(" | "),re=h("ZooAnimals");function se(n,r,i,a,e,t){const o=m("RouterLink");return c(),l("header",null,[s("h1",null,v(i.title),1),s("div",te,[d(o,{to:"/"},{default:$(()=>[oe]),_:1}),ne,d(o,{to:"/zooanimals"},{default:$(()=>[re]),_:1})])])}var ae=_(ee,[["render",se],["__scopeId","data-v-49f024b6"]]);const ie={components:{Header:ae}},ce={id:"app"};function le(n,r,i,a,e,t){const o=m("Header"),p=m("RouterView");return c(),l("div",ce,[d(o,{title:"Project Vue"}),d(p)])}var ue=_(ie,[["render",le]]);function de(n={}){const{immediate:r=!1,onNeedRefresh:i,onOfflineReady:a,onRegistered:e,onRegisterError:t}=n;let o;const p=async(u=!0)=>{};return"serviceWorker"in navigator&&(o=new x("/ITHS-VUE1/sw.js",{scope:"/ITHS-VUE1/",type:"classic"}),o.addEventListener("activated",u=>{u.isUpdate?window.location.reload():a==null||a()}),o.register({immediate:r}).then(u=>{e==null||e(u)}).catch(u=>{t==null||t(u)})),p}de();Z(ue).use(Y).mount("#app");