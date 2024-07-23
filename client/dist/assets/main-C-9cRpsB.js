import{r as n,j as e,L as y,i as k,a as Z,u as ee,M as se,P as te,b as ae,T as re,c as O,A,d as q,e as S,p as ne,l as ie,f as le,g as ce,F as oe,h as de,R as he,k as me,m as N,n as ue,o as xe,q as F,s as pe,t as R,v as je,O as z,N as ge,w as V,x as ve,y as fe,z as ye,B as be}from"./vendor-DaFZNZFK.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();const Ne=["buy","rent"];function we(){const[s,t]=n.useState({type:"buy",city:"",minPrice:0,maxPrice:0}),r=a=>{t(i=>({...i,type:a}))},l=a=>{t(i=>({...i,[a.target.name]:a.target.value}))};return e.jsxs("div",{className:"searchBar",children:[e.jsx("div",{className:"type",children:Ne.map(a=>e.jsx("button",{onClick:()=>r(a),className:s.type===a?"active":"",children:a},a))}),e.jsxs("form",{children:[e.jsx("input",{type:"text",name:"city",placeholder:"City",onChange:l}),e.jsx("input",{type:"number",name:"minPrice",min:0,max:1e7,placeholder:"Min Price",onChange:l}),e.jsx("input",{type:"number",name:"maxPrice",min:0,max:1e7,placeholder:"Max Price",onChange:l}),e.jsx(y,{to:`/list?type=${s.type}&city=${s.city}&minPrice=${s.minPrice}&maxPrice=${s.maxPrice}`,children:e.jsx("button",{children:e.jsx("img",{src:"/search.png",alt:""})})})]})]})}const b=n.createContext(),Ce=({children:s})=>{const[t,r]=n.useState(JSON.parse(localStorage.getItem("user"))||null),l=a=>{r(a)};return n.useEffect(()=>{localStorage.setItem("user",JSON.stringify(t))},[t]),e.jsx(b.Provider,{value:{currentUser:t,updateUser:l},children:s})},Pe=()=>{n.useContext(b);const s=n.useRef(null);return n.useEffect(()=>{const t={duration:2},r=new k("yearsCount",16,t),l=new k("awardsCount",200,t),a=new k("propertiesCount",2e3,t);r.error||r.start(),l.error||l.start(),a.error||a.start();const i=new Z(s.current,{strings:["Discover Your Perfect Home"],typeSpeed:70,backSpeed:50,loop:!0});return()=>{i.destroy()}},[]),e.jsxs("div",{className:"homePage",children:[e.jsx("div",{className:"textContainer",children:e.jsxs("div",{className:"wrapper",children:[e.jsx("h1",{className:"title",children:e.jsx("span",{ref:s})}),e.jsx("p",{children:"Explore a wide range of rental properties that suit your lifestyle and budget. With our extensive experience and award-winning service, finding your dream place has never been easier. Let us help you make your next move stress-free and enjoyable."}),e.jsx(we,{}),e.jsxs("div",{className:"boxes",children:[e.jsxs("div",{className:"box",children:[e.jsx("h1",{id:"yearsCount",children:"5+"}),e.jsx("h2",{children:"Years of Excellence"})]}),e.jsxs("div",{className:"box",children:[e.jsx("h1",{id:"awardsCount",children:"50"}),e.jsx("h2",{children:"Prestigious Awards"})]}),e.jsxs("div",{className:"box",children:[e.jsx("h1",{id:"propertiesCount",children:"2000+"}),e.jsx("h2",{children:"Properties Available"})]})]})]})}),e.jsx("div",{className:"imgContainer",children:e.jsx("img",{src:"/bg.png",alt:"Background Image",className:"bg"})})]})};function Se(){const[s,t]=ee(),[r,l]=n.useState({type:s.get("type")||"",city:s.get("city")||"",property:s.get("property")||"",minPrice:s.get("minPrice")||"",maxPrice:s.get("maxPrice")||"",bedroom:s.get("bedroom")||""}),a=u=>{l({...r,[u.target.name]:u.target.value})},i=()=>{t(r)};return e.jsxs("div",{className:"filter",children:[e.jsxs("h1",{children:["Search results for ",e.jsx("b",{children:s.get("city")})]}),e.jsx("div",{className:"top",children:e.jsxs("div",{className:"item",children:[e.jsx("label",{htmlFor:"city",children:"Location"}),e.jsx("input",{type:"text",id:"city",name:"city",placeholder:"City Location",onChange:a,defaultValue:r.city})]})}),e.jsxs("div",{className:"bottom",children:[e.jsxs("div",{className:"item",children:[e.jsx("label",{htmlFor:"type",children:"Type"}),e.jsxs("select",{name:"type",id:"type",onChange:a,defaultValue:r.type,children:[e.jsx("option",{value:"",children:"any"}),e.jsx("option",{value:"buy",children:"Buy"}),e.jsx("option",{value:"rent",children:"Rent"})]})]}),e.jsxs("div",{className:"item",children:[e.jsx("label",{htmlFor:"property",children:"Property"}),e.jsxs("select",{name:"property",id:"property",onChange:a,defaultValue:r.property,children:[e.jsx("option",{value:"",children:"any"}),e.jsx("option",{value:"apartment",children:"Apartment"}),e.jsx("option",{value:"house",children:"House"}),e.jsx("option",{value:"condo",children:"Condo"}),e.jsx("option",{value:"land",children:"Land"})]})]}),e.jsxs("div",{className:"item",children:[e.jsx("label",{htmlFor:"minPrice",children:"Min Price"}),e.jsx("input",{type:"number",id:"minPrice",name:"minPrice",placeholder:"any",onChange:a,defaultValue:r.minPrice})]}),e.jsxs("div",{className:"item",children:[e.jsx("label",{htmlFor:"maxPrice",children:"Max Price"}),e.jsx("input",{type:"text",id:"maxPrice",name:"maxPrice",placeholder:"any",onChange:a,defaultValue:r.maxPrice})]}),e.jsxs("div",{className:"item",children:[e.jsx("label",{htmlFor:"bedroom",children:"Bedroom"}),e.jsx("input",{type:"text",id:"bedroom",name:"bedroom",placeholder:"any",onChange:a,defaultValue:r.bedroom})]}),e.jsx("button",{onClick:i,children:e.jsx("img",{src:"/search.png",alt:""})})]})]})}function $({item:s}){return e.jsxs("div",{className:"card",children:[e.jsx(y,{to:`/${s.id}`,className:"imageContainer",children:e.jsx("img",{src:s.images[0],alt:""})}),e.jsxs("div",{className:"textContainer",children:[e.jsx("h2",{className:"title",children:e.jsx(y,{to:`/${s.id}`,children:s.title})}),e.jsxs("p",{className:"address",children:[e.jsx("img",{src:"/pin.png",alt:""}),e.jsx("span",{children:s.address})]}),e.jsxs("p",{className:"price",children:["₹",s.price]}),e.jsx("div",{className:"bottom",children:e.jsxs("div",{className:"features",children:[e.jsxs("div",{className:"feature",children:[e.jsx("img",{src:"/bed.png",alt:""}),e.jsxs("span",{children:[s.bedroom," bedroom"]})]}),e.jsxs("div",{className:"feature",children:[e.jsx("img",{src:"/bath.png",alt:""}),e.jsxs("span",{children:[s.bathroom," bathroom"]})]})]})})]})]})}function ke({item:s}){return e.jsx(se,{position:[s.latitude,s.longitude],children:e.jsx(te,{children:e.jsxs("div",{className:"popupContainer",children:[e.jsx("img",{src:s.images[0],alt:""}),e.jsxs("div",{className:"textContainer",children:[e.jsx(y,{to:`/${s.id}`,children:s.title}),e.jsxs("span",{children:[s.bedroom," bedroom"]}),e.jsxs("b",{children:["$ ",s.price]})]})]})})})}function H({items:s}){return e.jsxs(ae,{center:[20.5937,78.9629],zoom:5,scrollWheelZoom:!1,className:"map",children:[e.jsx(re,{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),s.map(t=>e.jsx(ke,{item:t},t.id))]})}function Ee(){const s=O();return e.jsxs("div",{className:"listPage",children:[e.jsx("div",{className:"listContainer",children:e.jsxs("div",{className:"wrapper",children:[e.jsx(Se,{}),e.jsx(n.Suspense,{fallback:e.jsx("p",{children:"Loading..."}),children:e.jsx(A,{resolve:s.postResponse,errorElement:e.jsx("p",{children:"Error loading posts!"}),children:t=>t.data.map(r=>e.jsx($,{item:r},r.id))})})]})}),e.jsx("div",{className:"mapContainer",children:e.jsx(n.Suspense,{fallback:e.jsx("p",{children:"Loading..."}),children:e.jsx(A,{resolve:s.postResponse,errorElement:e.jsx("p",{children:"Error loading posts!"}),children:t=>e.jsx(H,{items:t.data})})})})]})}function Ae({images:s}){const[t,r]=n.useState(null),l=a=>{a==="left"?r(t===0?s.length-1:t-1):t===s.length-1?r(0):r(t+1)};return e.jsxs("div",{className:"slider",children:[t!==null&&e.jsxs("div",{className:"fullSlider",children:[e.jsx("div",{className:"arrow",onClick:()=>l("left"),children:e.jsx("img",{src:"/arrow.png",alt:""})}),e.jsx("div",{className:"imgContainer",children:e.jsx("img",{src:s[t],alt:""})}),e.jsx("div",{className:"arrow",onClick:()=>l("right"),children:e.jsx("img",{src:"/arrow.png",className:"right",alt:""})}),e.jsx("div",{className:"close",onClick:()=>r(null),children:"X"})]}),e.jsx("div",{className:"bigImage",children:e.jsx("img",{src:s[0],alt:"",onClick:()=>r(0)})}),e.jsx("div",{className:"smallImages",children:s.slice(1,4).map((a,i)=>e.jsxs("div",{className:`imageContainer ${i+1===3?"blur":""}`,children:[i+1===3&&e.jsx("div",{className:"blurOverlay",onClick:()=>r(3)}),e.jsx("img",{src:a,alt:"",onClick:()=>r(i+1)}),i+1===3&&e.jsxs("span",{children:["+",s.length-3]})]},i))})]})}const p=q.create({baseURL:"https://nestopia-draft-8.onrender.com/api",withCredentials:!0});function Ie(){const s=O(),[t,r]=n.useState(s.isSaved),{currentUser:l}=n.useContext(b),a=S(),[i,u]=n.useState(!1),h=async()=>{if(!l){a("/login");return}r(o=>!o);try{await p.post("/users/save",{postId:s.id})}catch(o){console.log(o),r(d=>!d)}},c=async()=>{if(!l){a("/login");return}try{const o=await p.post("/chats",{receiverId:s.user.id});a("/profile")}catch(o){console.log(o)}};return n.useEffect(()=>{(async()=>{try{const v=(await p.get("/chats")).data.find(f=>f.receiver.id===s.user.id);u(!!v)}catch(d){console.log(d)}})()},[s.user.id]),e.jsx("div",{className:"singlePage",children:e.jsxs("div",{className:"content",children:[e.jsx(Ae,{images:s.images}),e.jsxs("div",{className:"item",children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"cat",children:s.category}),e.jsx("h1",{children:s.title}),e.jsx("span",{className:"price",children:s.price}),e.jsx("div",{className:"desc",dangerouslySetInnerHTML:{__html:ne.sanitize(s.description)}}),e.jsxs("div",{className:"location",children:[e.jsx("h2",{children:"Location"}),e.jsx(H,{location:s.location})]})]}),e.jsxs("div",{className:"right",children:[e.jsxs("div",{className:"user",children:[e.jsx("img",{src:s.user.avatar||"/img/noavatar.jpg",alt:"",className:"avatar"}),e.jsxs("div",{className:"info",children:[e.jsx("span",{children:s.user.username}),e.jsxs("div",{className:"stars",children:[Array(s.user.rating).fill().map((o,d)=>e.jsx("img",{src:"/img/star.png",alt:""},d)),e.jsx("span",{children:s.user.rating})]}),i?e.jsx("button",{disabled:!0,children:"Chat Already Exists"}):e.jsx("button",{onClick:c,children:"Contact Seller"})]})]}),e.jsx("div",{className:"itemActions",children:e.jsx("img",{src:t?"/img/saved.png":"/img/save.png",alt:"",onClick:h})})]})]})]})})}const _=n.createContext(),Le=({children:s})=>{const{currentUser:t}=n.useContext(b),[r,l]=n.useState(null);return n.useEffect(()=>{l(ie("https://nestopia-draft-8.onrender.com"))},[]),n.useEffect(()=>{t&&(r==null||r.emit("newUser",t.id))},[t,r]),e.jsx(_.Provider,{value:{socket:r},children:s})},D=le(s=>({number:0,fetch:async()=>{const t=await p("/users/notification");s({number:t.data})},decrease:()=>{s(t=>({number:t.number-1}))},reset:()=>{s({number:0})}}));function Ue({chats:s}){var M,T;const[t,r]=n.useState(null),{currentUser:l}=n.useContext(b),{socket:a}=n.useContext(_),i=n.useRef(),[u,h]=n.useState(""),[c,o]=n.useState(null),[d,x]=n.useState(!1),v=D(m=>m.decrease);n.useEffect(()=>{a&&l&&a.emit("joinChat",l.id)},[a,l]),n.useEffect(()=>{var m;(m=i.current)==null||m.scrollIntoView({behavior:"smooth"})},[t]);const f=async(m,j)=>{try{const g=await p("/chats/"+m);g.data.seenBy.includes(l.id)||v(),r({...g.data,receiver:j}),x(!0)}catch(g){console.log(g)}},G=async m=>{if(m.preventDefault(),!(!u.trim()&&!c))try{const j=new FormData;if(j.append("text",u),c){const w=await Q(c);j.append("media",w)}const g=await p.post("/messages/"+t.id,j);r(w=>({...w,messages:[...w.messages,g.data]})),h(""),o(null),a.emit("sendMessage",{receiverId:t.receiver.id,data:g.data})}catch(j){console.log(j)}};n.useEffect(()=>{const m=async()=>{try{await p.put("/chats/read/"+t.id)}catch(j){console.log(j)}};return t&&a&&a.on("getMessage",j=>{t.id===j.chatId&&(r(g=>({...g,messages:[...g.messages,j]})),m())}),()=>{a.off("getMessage")}},[a,t]);const X=m=>{o(m.target.files[0])},Q=async m=>new Promise((j,g)=>{const w=new FileReader;w.onload=J=>{const E=new Image;E.onload=()=>{const I=document.createElement("canvas"),L=800,U=600;let C=E.width,P=E.height;C>P?C>L&&(P*=L/C,C=L):P>U&&(C*=U/P,P=U),I.width=C,I.height=P,I.getContext("2d").drawImage(E,0,0,C,P),I.toBlob(K=>{j(new File([K],m.name,{type:m.type}))},m.type)},E.src=J.target.result},w.readAsDataURL(m)});return e.jsxs("div",{className:"chat",children:[e.jsxs("div",{className:"messages",children:[e.jsx("h1",{children:"Messages"}),s==null?void 0:s.map(m=>{var j,g;return e.jsxs("div",{className:"message",style:{backgroundColor:m.seenBy.includes(l.id)||(t==null?void 0:t.id)===m.id?"white":"#fecd514e"},onClick:()=>f(m.id,m.receiver),children:[e.jsx("img",{src:((j=m.receiver)==null?void 0:j.avatar)||"/noavatar.jpg",alt:""}),e.jsx("span",{children:(g=m.receiver)==null?void 0:g.username}),e.jsx("p",{children:m.lastMessage})]},m.id)})]}),d&&e.jsxs("div",{className:"chatBox",children:[e.jsxs("div",{className:"top",children:[e.jsxs("div",{className:"user",children:[e.jsx("img",{src:((M=t.receiver)==null?void 0:M.avatar)||"noavatar.jpg",alt:""}),(T=t.receiver)==null?void 0:T.username]}),e.jsx("span",{className:"close",onClick:()=>x(!1),children:"X"})]}),e.jsxs("div",{className:"center",children:[t.messages.map(m=>e.jsxs("div",{className:`chatMessage ${m.userId===l.id?"own":""}`,children:[e.jsx("p",{children:m.text}),m.media&&e.jsx("img",{src:m.media,alt:"media",className:"media"}),e.jsx("span",{children:ce(m.createdAt)})]},m.id)),e.jsx("div",{ref:i})]}),e.jsxs("form",{onSubmit:G,className:"bottom",children:[e.jsx("textarea",{name:"text",value:u,onChange:m=>h(m.target.value),placeholder:"Type your message..."}),e.jsx("label",{htmlFor:"media-upload",className:"media-upload-label",children:e.jsx(oe,{})}),e.jsx("input",{type:"file",id:"media-upload",className:"media-upload-input",onChange:X,style:{display:"none"}}),e.jsx("button",{type:"submit",children:"Send"})]})]}),e.jsx("div",{className:"chatToggle",children:e.jsx("button",{onClick:()=>x(!d),children:"Open Chat"})})]})}function B({posts:s}){return e.jsx("div",{className:"list",children:s.map(t=>e.jsx($,{item:t},t.id))})}function Fe(){const s=O(),{updateUser:t,currentUser:r}=n.useContext(b),l=S(),a=n.useRef(null),i=async()=>{try{await p.post("/auth/logout"),t(null),l("/")}catch(h){console.log(h)}},u=()=>{a.current.scrollIntoView({behavior:"smooth"})};return e.jsxs("div",{className:"profilePage",children:[e.jsx("div",{className:"details",children:e.jsxs("div",{className:"wrapper",children:[e.jsxs("div",{className:"title",children:[e.jsx("h1",{children:"User Information"}),e.jsx(y,{to:"/profile/update",children:e.jsx("button",{children:"Update Profile"})})]}),e.jsxs("div",{className:"info",children:[e.jsxs("span",{children:["Avatar:",e.jsx("img",{src:r.avatar||"noavatar.jpg",alt:"User Avatar"})]}),e.jsxs("span",{children:["Username: ",e.jsx("b",{children:r.username})]}),e.jsxs("span",{children:["E-mail: ",e.jsx("b",{children:r.email})]}),e.jsx("button",{onClick:i,children:"Logout"})]}),e.jsxs("div",{className:"title",children:[e.jsx("h1",{children:"My List"}),e.jsx(y,{to:"/add",children:e.jsx("button",{children:"Create New Post"})})]}),e.jsx(n.Suspense,{fallback:e.jsx("p",{children:"Loading..."}),children:e.jsx(A,{resolve:s.postResponse,errorElement:e.jsx("p",{children:"Error loading posts!"}),children:h=>e.jsx(B,{posts:h.data.userPosts})})}),e.jsx("div",{className:"title",children:e.jsx("h1",{children:"Saved List"})}),e.jsx(n.Suspense,{fallback:e.jsx("p",{children:"Loading..."}),children:e.jsx(A,{resolve:s.postResponse,errorElement:e.jsx("p",{children:"Error loading posts!"}),children:h=>e.jsx(B,{posts:h.data.savedPosts})})}),e.jsx("div",{className:"title",children:e.jsx("button",{onClick:u,children:"Go to Chat"})})]})}),e.jsx("div",{className:"chatContainer",ref:a,children:e.jsx("div",{className:"wrapper",children:e.jsx(n.Suspense,{fallback:e.jsx("p",{children:"Loading..."}),children:e.jsx(A,{resolve:s.chatResponse,errorElement:e.jsx("p",{children:"Error loading chats!"}),children:h=>e.jsx(Ue,{chats:h.data})})})})})]})}function Re(){const[s,t]=n.useState(""),[r,l]=n.useState(!1),{updateUser:a}=n.useContext(b),i=S(),u=async h=>{h.preventDefault(),l(!0),t("");const c=new FormData(h.target),o=c.get("username"),d=c.get("password");try{const x=await p.post("/auth/login",{username:o,password:d});a(x.data),console.log("Login Response:",x.data),i("/")}catch(x){x.response&&x.response.data&&x.response.data.message?t(x.response.data.message):t("An unexpected error occurred. Please try again.")}finally{l(!1)}};return e.jsxs("div",{className:"login",children:[e.jsx("div",{className:"formContainer",children:e.jsxs("form",{onSubmit:u,children:[e.jsx("h1",{children:e.jsx(de,{options:{strings:["Welcome back"],autoStart:!0,loop:!0}})}),e.jsx("input",{name:"username",required:!0,minLength:3,maxLength:20,type:"text",placeholder:"Username"}),e.jsx("input",{name:"password",type:"password",required:!0,placeholder:"Password"}),e.jsx("button",{disabled:r,children:"Login"}),s&&e.jsx("span",{className:"error",children:s}),e.jsxs(y,{to:"/register",children:["Don't"," you have an account?"]}),e.jsx(y,{to:"/forgot-password",children:"Forgot Password?"})]})}),e.jsx("div",{className:"imgContainer",children:e.jsx("img",{src:"/bg5.png",alt:"Background"})})]})}function De(){const[s,t]=n.useState(""),[r,l]=n.useState(!1),[a,i]=n.useState(""),u=S(),h=async c=>{c.preventDefault(),t(""),l(!0);const o=new FormData(c.target),d=o.get("username"),x=o.get("email"),v=o.get("password");try{const f=await p.post("/auth/register",{username:d,email:x,password:v});u("/login")}catch(f){t(f.response.data.message)}finally{l(!1)}};return n.useEffect(()=>{const c="Create an Account";let o=0;const d=setInterval(()=>{o<=c.length?(i(c.substring(0,o)),o++):clearInterval(d)},100);return()=>clearInterval(d)},[]),e.jsxs("div",{className:"registerPage",children:[e.jsx("div",{className:"formContainer",children:e.jsxs("form",{onSubmit:h,children:[e.jsx("h1",{children:a}),e.jsx("input",{name:"username",type:"text",placeholder:"Username"}),e.jsx("input",{name:"email",type:"text",placeholder:"Email"}),e.jsx("input",{name:"password",type:"password",placeholder:"Password"}),e.jsx("button",{disabled:r,children:"Register"}),s&&e.jsx("span",{children:s}),e.jsx(y,{to:"/login",children:"Do you have an account?"})]})}),e.jsx("div",{className:"imgContainer",children:e.jsx("img",{src:"/bg7.png",alt:""})})]})}const Oe=n.createContext();function W({uwConfig:s,setPublicId:t,setState:r}){const[l,a]=n.useState(!1);n.useEffect(()=>{if(!l)if(document.getElementById("uw"))a(!0);else{const h=document.createElement("script");h.setAttribute("async",""),h.setAttribute("id","uw"),h.src="https://upload-widget.cloudinary.com/global/all.js",h.addEventListener("load",()=>a(!0)),document.body.appendChild(h)}},[l]);const i=()=>{if(l){var u=window.cloudinary.createUploadWidget(s,(h,c)=>{!h&&c&&c.event==="success"&&(console.log("Done! Here is the image info: ",c.info),r(o=>[...o,c.info.secure_url]))});document.getElementById("upload_widget").addEventListener("click",function(){u.open()},!1)}};return e.jsx(Oe.Provider,{value:{loaded:l},children:e.jsx("button",{id:"upload_widget",className:"cloudinary-button",onClick:i,children:"Upload"})})}function Me(){const{currentUser:s,updateUser:t}=n.useContext(b),[r,l]=n.useState(""),[a,i]=n.useState([]),u=S(),h=async c=>{c.preventDefault();const o=new FormData(c.target),{username:d,email:x,password:v}=Object.fromEntries(o);try{const f=await p.put(`/users/${s.id}`,{username:d,email:x,password:v,avatar:a[0]});t(f.data),u("/profile")}catch(f){console.log(f),l(f.response.data.message)}};return e.jsxs("div",{className:"profileUpdatePage",children:[e.jsx("div",{className:"formContainer",children:e.jsxs("form",{onSubmit:h,children:[e.jsx("h1",{children:"Update Profile"}),e.jsxs("div",{className:"item",children:[e.jsx("label",{htmlFor:"username",children:"Username"}),e.jsx("input",{id:"username",name:"username",type:"text",defaultValue:s.username})]}),e.jsxs("div",{className:"item",children:[e.jsx("label",{htmlFor:"email",children:"Email"}),e.jsx("input",{id:"email",name:"email",type:"email",defaultValue:s.email})]}),e.jsxs("div",{className:"item",children:[e.jsx("label",{htmlFor:"password",children:"Password"}),e.jsx("input",{id:"password",name:"password",type:"password"})]}),e.jsx("button",{children:"Update"}),r&&e.jsx("span",{children:"error"})]})}),e.jsxs("div",{className:"sideContainer",children:[e.jsx("img",{src:a[0]||s.avatar||"/noavatar.jpg",alt:"",className:"avatar"}),e.jsx(W,{uwConfig:{cloudName:"anushka2520",uploadPreset:"Nestopia",multiple:!1,maxImageFileSize:2e6,folder:"avatars"},setState:i})]})]})}function Te(){const[s,t]=n.useState(""),[r,l]=n.useState([]),[a,i]=n.useState(""),u=S(),h=async c=>{c.preventDefault();const o=new FormData(c.target),d=Object.fromEntries(o);try{const x=await p.post("/posts",{postData:{title:d.title,price:parseInt(d.price),address:d.address,city:d.city,bedroom:parseInt(d.bedroom),bathroom:parseInt(d.bathroom),type:d.type,property:d.property,latitude:d.latitude,longitude:d.longitude,images:r},postDetail:{desc:s,utilities:d.utilities,pet:d.pet,income:d.income,size:parseInt(d.size),school:parseInt(d.school),bus:parseInt(d.bus),restaurant:parseInt(d.restaurant)}});u("/"+x.data.id)}catch(x){console.log(x),i("Failed to create post")}};return e.jsxs("div",{className:"newPostPage",children:[e.jsxs("div",{className:"formContainer",children:[e.jsx("h1",{children:"Add New Post"}),e.jsx("div",{className:"wrapper",children:e.jsxs("form",{onSubmit:h,children:[e.jsxs("div",{className:"item",children:[e.jsx("label",{htmlFor:"title",children:"Title"}),e.jsx("input",{id:"title",name:"title",type:"text"})]}),e.jsxs("div",{className:"item",children:[e.jsx("label",{htmlFor:"price",children:"Price"}),e.jsx("input",{id:"price",name:"price",type:"number"})]}),e.jsxs("div",{className:"item",children:[e.jsx("label",{htmlFor:"address",children:"Address"}),e.jsx("input",{id:"address",name:"address",type:"text"})]}),e.jsxs("div",{className:"item description",children:[e.jsx("label",{htmlFor:"desc",children:"Description"}),e.jsx(he,{theme:"snow",onChange:t,value:s})]}),e.jsxs("div",{className:"item",children:[e.jsx("label",{htmlFor:"city",children:"City"}),e.jsx("input",{id:"city",name:"city",type:"text"})]}),e.jsxs("div",{className:"item",children:[e.jsx("label",{htmlFor:"bedroom",children:"Bedroom Number"}),e.jsx("input",{min:1,id:"bedroom",name:"bedroom",type:"number"})]}),e.jsxs("div",{className:"item",children:[e.jsx("label",{htmlFor:"bathroom",children:"Bathroom Number"}),e.jsx("input",{min:1,id:"bathroom",name:"bathroom",type:"number"})]}),e.jsxs("div",{className:"item",children:[e.jsx("label",{htmlFor:"latitude",children:"Latitude"}),e.jsx("input",{id:"latitude",name:"latitude",type:"text"})]}),e.jsxs("div",{className:"item",children:[e.jsx("label",{htmlFor:"longitude",children:"Longitude"}),e.jsx("input",{id:"longitude",name:"longitude",type:"text"})]}),e.jsxs("div",{className:"item",children:[e.jsx("label",{htmlFor:"type",children:"Type"}),e.jsxs("select",{name:"type",children:[e.jsx("option",{value:"rent",defaultChecked:!0,children:"Rent"}),e.jsx("option",{value:"buy",children:"Buy"})]})]}),e.jsxs("div",{className:"item",children:[e.jsx("label",{htmlFor:"type",children:"Property"}),e.jsxs("select",{name:"property",children:[e.jsx("option",{value:"apartment",children:"Apartment"}),e.jsx("option",{value:"house",children:"House"}),e.jsx("option",{value:"condo",children:"Condo"}),e.jsx("option",{value:"land",children:"Land"})]})]}),e.jsxs("div",{className:"item",children:[e.jsx("label",{htmlFor:"utilities",children:"Utilities Policy"}),e.jsxs("select",{name:"utilities",children:[e.jsx("option",{value:"owner",children:"Owner is responsible"}),e.jsx("option",{value:"tenant",children:"Tenant is responsible"}),e.jsx("option",{value:"shared",children:"Shared"})]})]}),e.jsxs("div",{className:"item",children:[e.jsx("label",{htmlFor:"pet",children:"Pet Policy"}),e.jsxs("select",{name:"pet",children:[e.jsx("option",{value:"allowed",children:"Allowed"}),e.jsx("option",{value:"not-allowed",children:"Not Allowed"})]})]}),e.jsxs("div",{className:"item",children:[e.jsx("label",{htmlFor:"income",children:"Income Policy"}),e.jsx("input",{id:"income",name:"income",type:"text",placeholder:"Income Policy"})]}),e.jsxs("div",{className:"item",children:[e.jsx("label",{htmlFor:"size",children:"Total Size (sqft)"}),e.jsx("input",{min:0,id:"size",name:"size",type:"number"})]}),e.jsxs("div",{className:"item",children:[e.jsx("label",{htmlFor:"school",children:"School"}),e.jsx("input",{min:0,id:"school",name:"school",type:"number"})]}),e.jsxs("div",{className:"item",children:[e.jsx("label",{htmlFor:"bus",children:"bus"}),e.jsx("input",{min:0,id:"bus",name:"bus",type:"number"})]}),e.jsxs("div",{className:"item",children:[e.jsx("label",{htmlFor:"restaurant",children:"Restaurant"}),e.jsx("input",{min:0,id:"restaurant",name:"restaurant",type:"number"})]}),e.jsx("button",{className:"sendButton",children:"Add"}),a&&e.jsx("span",{children:"error"})]})})]}),e.jsxs("div",{className:"sideContainer",children:[r.map((c,o)=>e.jsx("img",{src:c,alt:""},o)),e.jsx(W,{uwConfig:{multiple:!0,cloudName:"anushka2520",uploadPreset:"Nestopia",folder:"posts"},setState:l})]})]})}function Be(){const s=n.useRef(null),t=n.useRef(null),r=n.useRef(null);return n.useEffect(()=>{const l=new k(s.current,16,{duration:2}),a=new k(t.current,1e3,{duration:2}),i=new k(r.current,500,{duration:2});l&&a&&i?(l.start(),a.start(),i.start()):console.error("Error initializing CountUp")},[]),e.jsxs("div",{className:"about-page",children:[e.jsx("div",{className:"hero-section",children:e.jsxs(me.Carousel,{showThumbs:!1,autoPlay:!0,interval:5e3,infiniteLoop:!0,useKeyboardArrows:!0,transitionTime:1e3,children:[e.jsxs("div",{children:[e.jsx("img",{src:"/bg4.png",alt:"About Us",className:"hero-image"}),e.jsxs("div",{className:"overlay",children:[e.jsx("h1",{className:"title",children:"About Us"}),e.jsx("p",{className:"subtitle",children:"Your trusted partner in real estate"})]})]}),e.jsxs("div",{children:[e.jsx("img",{src:"/bg3.png",alt:"About Us",className:"hero-image"}),e.jsxs("div",{className:"overlay",children:[e.jsx("h1",{className:"title",children:"About Us"}),e.jsx("p",{className:"subtitle",children:"Your trusted partner in real estate"})]})]}),e.jsxs("div",{children:[e.jsx("img",{src:"/bg2.png",alt:"About Us",className:"hero-image"}),e.jsxs("div",{className:"overlay",children:[e.jsx("h1",{className:"title",children:"About Us"}),e.jsx("p",{className:"subtitle",children:"Your trusted partner in real estate"})]})]}),e.jsxs("div",{children:[e.jsx("img",{src:"/bg5.png",alt:"About Us",className:"hero-image"}),e.jsxs("div",{className:"overlay",children:[e.jsx("h1",{className:"title",children:"About Us"}),e.jsx("p",{className:"subtitle",children:"Your trusted partner in real estate"})]})]})]})}),e.jsxs("div",{className:"about-content",children:[e.jsxs("div",{className:"text-container",children:[e.jsx("h2",{children:"Our Story"}),e.jsx("p",{children:"With over 16 years of excellence, we have been committed to helping you find the perfect home. Our award-winning services and extensive property listings make us a trusted name in real estate."}),e.jsx("p",{children:"We believe in providing exceptional customer service, and our team of experts is dedicated to making your home buying or selling experience as smooth as possible."}),e.jsx("div",{className:"call-to-action",children:e.jsxs("div",{className:"contact-icons",children:[e.jsx("a",{href:"https://www.linkedin.com/",target:"_blank",rel:"noopener noreferrer",children:e.jsx(N,{icon:ue,className:"icon"})}),e.jsx("a",{href:"https://github.com/",target:"_blank",rel:"noopener noreferrer",children:e.jsx(N,{icon:xe,className:"icon"})}),e.jsx("a",{href:"mailto:info@example.com",children:e.jsx(N,{icon:F,className:"icon"})}),e.jsx("a",{href:"https://www.instagram.com/",target:"_blank",rel:"noopener noreferrer",children:e.jsx(N,{icon:pe,className:"icon"})}),e.jsx("a",{href:"tel:+1234567890",children:e.jsx(N,{icon:R,className:"icon"})})]})})]}),e.jsxs("div",{className:"stats-container",children:[e.jsxs("div",{className:"stat",children:[e.jsx("h3",{ref:s,children:"16+"}),e.jsx("p",{children:"Years of Experience"})]}),e.jsxs("div",{className:"stat",children:[e.jsx("h3",{ref:t,children:"1000+/"}),e.jsx("p",{children:"Properties Sold"})]}),e.jsxs("div",{className:"stat",children:[e.jsx("h3",{ref:r,children:"500+/"}),e.jsx("p",{children:"Happy Clients"})]})]})]})]})}const qe=()=>{const{currentUser:s}=n.useContext(b),[t,r]=n.useState(""),[l,a]=n.useState(""),[i,u]=n.useState(""),h=async c=>{c.preventDefault();try{const o=await q.post("http://localhost:8800/api/tickets",{userId:s.id,category:t,description:l,feedback:i});alert(`Ticket submitted successfully! Ticket ID: ${o.data.ticketNumber}`)}catch(o){console.error("Error submitting ticket",o),alert("Failed to submit the ticket. Please try again later.")}};return e.jsxs("div",{className:"contact",children:[e.jsx("h1",{children:"Contact Us"}),e.jsxs("form",{onSubmit:h,children:[e.jsxs("label",{children:["Issue Category",e.jsxs("select",{value:t,onChange:c=>r(c.target.value),required:!0,children:[e.jsx("option",{value:"",children:"Select a category"}),e.jsx("option",{value:"website",children:"Website"}),e.jsx("option",{value:"buyer-related",children:"Buyer Related"}),e.jsx("option",{value:"seller-related",children:"Seller Related"}),e.jsx("option",{value:"others",children:"Others"})]})]}),e.jsxs("label",{children:["Description",e.jsx("textarea",{value:l,onChange:c=>a(c.target.value),required:!0})]}),e.jsxs("div",{className:"feedback",children:[e.jsx("label",{children:"Feedback"}),e.jsxs("div",{className:"emojis",children:[e.jsx("span",{className:i==="satisfied"?"selected":"",onClick:()=>u("satisfied"),children:"😊"}),e.jsx("span",{className:i==="neutral"?"selected":"",onClick:()=>u("neutral"),children:"😐"}),e.jsx("span",{className:i==="angry"?"selected":"",onClick:()=>u("angry"),children:"😡"})]})]}),e.jsx("button",{type:"submit",children:"Submit"})]})]})};function ze(){return e.jsx("div",{className:"agents",children:e.jsxs("div",{className:"textContainer",children:[e.jsx("h1",{children:"Our Agents"}),e.jsx("p",{children:"Meet our team of professional and experienced real estate agents dedicated to helping you find the perfect home."}),e.jsxs("div",{className:"agentList",children:[e.jsxs("div",{className:"agent",children:[e.jsx("img",{src:"public/ANU PIC.jpeg",alt:"Agent 1"}),e.jsx("h2",{children:"Anushka Goswami"}),e.jsx("p",{children:"Senior Agent"}),e.jsxs("div",{className:"contact",children:[e.jsx("a",{href:"tel:+1234567890",className:"contact-link",children:e.jsx(N,{icon:R})}),e.jsx("a",{href:"mailto:anu@example.com",className:"contact-link",children:e.jsx(N,{icon:F})})]})]}),e.jsxs("div",{className:"agent",children:[e.jsx("img",{src:"/soumya.jpeg",alt:"Agent 2"}),e.jsx("h2",{children:"Soumya Chakraborty"}),e.jsx("p",{children:"Agent"}),e.jsxs("div",{className:"contact",children:[e.jsx("a",{href:"tel:+1234567890",className:"contact-link",children:e.jsx(N,{icon:R})}),e.jsx("a",{href:"mailto:chakra@example.com",className:"contact-link",children:e.jsx(N,{icon:F})})]})]})]})]})})}const Ve=()=>{const[s,t]=n.useState(""),[r,l]=n.useState(""),[a,i]=n.useState(""),u=S(),h=async c=>{c.preventDefault(),l(""),i("");try{const o=await p.post("/auth/forgot-password",{email:s});l(o.data.message),alert("OTP has been sent to your email"),u("/reset-password",{state:{email:s}})}catch(o){i(o.response.data.message||"Error sending OTP")}};return e.jsx("div",{className:"forgot-password",children:e.jsxs("form",{onSubmit:h,children:[e.jsx("h1",{children:"Forgot Password"}),e.jsx("input",{type:"email",placeholder:"Enter your email",value:s,onChange:c=>t(c.target.value),required:!0}),e.jsx("button",{type:"submit",children:"Send OTP"}),r&&e.jsx("span",{className:"message",children:r}),a&&e.jsx("span",{className:"error",children:a})]})})},$e=()=>{const[s,t]=n.useState(""),[r,l]=n.useState(""),[a,i]=n.useState(""),[u,h]=n.useState(""),c=je(),{email:o}=c.state||{},d=async x=>{x.preventDefault(),i(""),h("");try{const v=await p.post("/auth/reset-password",{email:o,otp:s,password:r});i(v.data.message),console.log("Reset Password Response:",v.data)}catch(v){h(v.response.data.message||"Error resetting password")}};return e.jsx("div",{className:"reset-password",children:e.jsxs("form",{onSubmit:d,children:[e.jsx("h1",{children:"Reset Password"}),e.jsx("input",{type:"text",placeholder:"Enter OTP",value:s,onChange:x=>t(x.target.value),required:!0}),e.jsx("input",{type:"password",placeholder:"Enter new password",value:r,onChange:x=>l(x.target.value),required:!0}),e.jsx("button",{type:"submit",children:"Reset Password"}),a&&e.jsx("span",{className:"message",children:a}),u&&e.jsx("span",{className:"error",children:u})]})})};function Y(){const[s,t]=n.useState(!1),{currentUser:r}=n.useContext(b),l=D(i=>i.fetch),a=D(i=>i.number);return r&&l(),e.jsxs("nav",{children:[e.jsxs("div",{className:"left",children:[e.jsxs("a",{href:"/",className:"logo",children:[e.jsx("img",{src:"/logo.png",alt:"Nestopia Logo"}),e.jsx("span",{children:"Nestopia"})]}),e.jsx("a",{href:"/",children:"Home"}),e.jsx("a",{href:"/about",children:"About"}),e.jsx("a",{href:"/contact",children:"Contact"}),e.jsx("a",{href:"/agents",children:"Agents"})]}),e.jsxs("div",{className:"right",children:[r?e.jsxs("div",{className:"user",children:[e.jsx("img",{src:r.avatar||"/noavatar.jpg",alt:"User Avatar"}),e.jsx("span",{children:r.username}),e.jsxs(y,{to:"/profile",className:"profile",children:[a>0&&e.jsx("div",{className:"notification",children:a}),e.jsx("span",{children:"Profile"})]})]}):e.jsxs(e.Fragment,{children:[e.jsx("a",{href:"/login",children:"Sign in"}),e.jsx("a",{href:"/register",className:"register",children:"Sign up"})]}),e.jsx("div",{className:"menuIcon",children:e.jsx("img",{src:"/menu.png",alt:"Menu Icon",onClick:()=>t(i=>!i)})}),e.jsxs("div",{className:s?"menu active":"menu",children:[e.jsx("a",{href:"/",children:"Home"}),e.jsx("a",{href:"/about",children:"About"}),e.jsx("a",{href:"/contact",children:"Contact"}),e.jsx("a",{href:"/agents",children:"Agents"}),r?e.jsx(y,{to:"/profile",children:"Profile"}):e.jsxs(e.Fragment,{children:[e.jsx("a",{href:"/login",children:"Sign in"}),e.jsx("a",{href:"/register",children:"Sign up"})]})]})]})]})}function He(){return e.jsxs("div",{className:"layout",children:[e.jsx("div",{className:"navbar",children:e.jsx(Y,{})}),e.jsx("div",{className:"content",children:e.jsx(z,{})})]})}function _e(){const{currentUser:s}=n.useContext(b);return s?e.jsxs("div",{className:"layout",children:[e.jsx("div",{className:"navbar",children:e.jsx(Y,{})}),e.jsx("div",{className:"content",children:e.jsx(z,{})})]}):e.jsx(ge,{to:"/login"})}const We=async({request:s,params:t})=>(await p("/posts/"+t.id)).data,Ye=async({request:s,params:t})=>{const r=s.url.split("?")[1],l=p("/posts?"+r);return V({postResponse:l})},Ge=async()=>{const s=p("/users/profilePosts"),t=p("/chats");return V({postResponse:s,chatResponse:t})};function Xe(){const s=ve([{path:"/",element:e.jsx(He,{}),children:[{path:"/",element:e.jsx(Pe,{})},{path:"/list",element:e.jsx(Ee,{}),loader:Ye},{path:"/:id",element:e.jsx(Ie,{}),loader:We},{path:"/login",element:e.jsx(Re,{})},{path:"/register",element:e.jsx(De,{})},{path:"/about",element:e.jsx(Be,{})},{path:"/contact",element:e.jsx(qe,{})},{path:"/agents",element:e.jsx(ze,{})},{path:"/forgot-password",element:e.jsx(Ve,{})},{path:"/reset-password",element:e.jsx($e,{})}]},{path:"/",element:e.jsx(_e,{}),children:[{path:"/profile",element:e.jsx(Fe,{}),loader:Ge},{path:"/profile/update",element:e.jsx(Me,{})},{path:"/add",element:e.jsx(Te,{})}]}]);return e.jsx(fe,{router:s})}ye.createRoot(document.getElementById("root")).render(e.jsx(be.StrictMode,{children:e.jsx(Ce,{children:e.jsx(Le,{children:e.jsx(Xe,{})})})}));
