import{d,e as o,w as s,f as r,t as a,o as l,_ as m}from"./index-Dry7wqJt.js";const c=["innerHTML"],u=["textContent"],f=["textContent"],k=d({__name:"NoteDisplay",props:{class:{type:String,required:!1},noteHtml:{type:String,required:!1},note:{type:String,required:!1},placeholder:{type:String,required:!1}},emits:["click"],setup(p){const n=p;return(e,t)=>e.noteHtml?(l(),o("div",{key:0,class:s(["prose overflow-auto outline-none",n.class]),onClick:t[0]||(t[0]=i=>e.$emit("click")),innerHTML:e.noteHtml},null,10,c)):e.note?(l(),o("div",{key:1,class:s(["prose overflow-auto outline-none",n.class]),onClick:t[1]||(t[1]=i=>e.$emit("click"))},[r("p",{textContent:a(e.note)},null,8,u)],2)):(l(),o("div",{key:2,class:s(["prose overflow-auto outline-none opacity-50 italic",n.class]),onClick:t[2]||(t[2]=i=>e.$emit("click"))},[r("p",{textContent:a(n.placeholder||"No notes.")},null,8,f)],2))}}),v=m(k,[["__file","/home/runner/work/mermaid-slides/mermaid-slides/node_modules/.pnpm/@slidev+client@0.47.5_snahdbb47e7yhhguzajdnrqce4/node_modules/@slidev/client/internals/NoteDisplay.vue"]]);export{v as N};
