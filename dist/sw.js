if(!self.define){let e,n={};const s=(s,i)=>(s=new URL(s+".js",i).href,n[s]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=n,document.head.appendChild(e)}else e=s,importScripts(s),n()})).then((()=>{let e=n[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(n[l])return;let o={};const t=e=>s(e,l),c={module:{uri:l},exports:o,require:t};n[l]=Promise.all(i.map((e=>c[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-07115729"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/apple-icon-180.1cd35518.png",revision:null},{url:"assets/barn.2170e5ba.jpg",revision:null},{url:"assets/favicon-196.ddf3bfe3.png",revision:null},{url:"assets/index.87b57879.js",revision:null},{url:"assets/index.c1bce85e.css",revision:null},{url:"assets/vendor.caf1aecb.js",revision:null},{url:"index.html",revision:"97ec89f0c575de0320db60976b3cd730"},{url:"manifest.webmanifest",revision:"b7cddbcd23550a07484ce648e7af6ef1"},{url:"manifest-icon-192.maskable.png",revision:"dedc858210dc95c77353dd4c3054e076"},{url:"manifest-icon-512.maskable.png",revision:"1edfee3b5459e5626936167092209f87"},{url:"manifest.webmanifest",revision:"b7cddbcd23550a07484ce648e7af6ef1"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute("https://zoo-animal-api.herokuapp.com/animals/rand/10",new e.NetworkFirst,"GET")}));
