(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bac31fd0"],{"1dde":function(e,t,l){var r=l("d039"),n=l("b622"),i=l("2d00"),s=n("species");e.exports=function(e){return i>=51||!r((function(){var t=[],l=t.constructor={};return l[s]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"3ac5":function(e,t,l){},8418:function(e,t,l){"use strict";var r=l("c04e"),n=l("9bf2"),i=l("5c6c");e.exports=function(e,t,l){var s=r(t);s in e?n.f(e,s,i(0,l)):e[s]=l}},b622d:function(e,t,l){"use strict";l.r(t);var r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},n=[function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{attrs:{id:"final_wrapper"}},[l("div",{attrs:{id:"iframe"}}),l("div",{staticClass:"list"},[l("button",[e._v("切换资源1")]),l("button",[e._v("切换资源2")]),l("button",[e._v("切换资源3")])]),l("ul",{attrs:{id:"list"}})])}],i=(l("c975"),l("fb6a"),l("d3b7"),l("25f0"),{mounted:function(){var e="http://jx.618g.com/?url=",t=document.getElementsByClassName("list")[0],l=this;t.addEventListener("click",(function(e){var t=e.target.innerText.toString().slice(4),r=["https://jx.idc126.net/jx/?url=","https://vip.mpos.ren/v/?url=","http://jx.598110.com/?url="];l.reflash(r[t-1])}),!1),this.reflash(e)},methods:{reflash:function(e){var t=this.$route.params.list;if(document.getElementById("iframe").innerHTML="","电视剧"==t.type||"动漫"==t.type){var l=t[t.type+t.title+"第1集"],r=document.createElement("iframe");r.setAttribute("src",e+l),r.setAttribute("allowfullscreen","true"),r.setAttribute("mozallowfullscreen","mozallowfullscreen"),r.setAttribute("msallowfullscreen","msallowfullscreen"),r.setAttribute("oallowfullscreen","oallowfullscreen"),r.setAttribute("webkitallowfullscreen","webkitallowfullscreen"),r.style.height="538px",r.style.width="100%",document.getElementById("iframe").appendChild(r);var n=document.getElementById("list");if(""==n.innerHTML)for(var i in t)if(-1!=i.toString().indexOf(t["title"])){var s=document.createElement("li"),o=(t["type"]+t["title"]).length;s.innerText=i.toString().slice(o+1),s.style.listStyle="none",s.style.float="left",s.style.margin="10px",s.style.border="1px solid black",s.style.cursor="pointer",s.setAttribute("listvalue",t[i]),document.getElementById("list").appendChild(s)}n.addEventListener("click",(function(t){for(var l=0;l<n.children.length;l++)n.children[l].style.backgroundColor="white",n.children[l].style.color="black";t.target.style.backgroundColor="black",t.target.style.color="white",document.getElementById("iframe").innerHTML="";var r=t.target.getAttribute("listvalue"),i=document.createElement("iframe");i.setAttribute("src",e+r),i.setAttribute("allowfullscreen","true"),i.setAttribute("mozallowfullscreen","mozallowfullscreen"),i.setAttribute("msallowfullscreen","msallowfullscreen"),i.setAttribute("oallowfullscreen","oallowfullscreen"),i.setAttribute("webkitallowfullscreen","webkitallowfullscreen"),i.style.height="538px",i.style.width="100%",document.getElementById("iframe").appendChild(i)}),!1)}else if("电影"==t.type){alert(t["地址"]);var a=t["地址"],c=document.createElement("iframe");c.setAttribute("src",e+a),c.setAttribute("allowfullscreen","true"),c.setAttribute("mozallowfullscreen","mozallowfullscreen"),c.setAttribute("msallowfullscreen","msallowfullscreen"),c.setAttribute("oallowfullscreen","oallowfullscreen"),c.setAttribute("webkitallowfullscreen","webkitallowfullscreen"),c.style.height="640px",c.style.width="1350px",document.getElementById("iframe").appendChild(c)}},reflash_change:function(){var e="https://vip.mpos.ren/v/?url=";this.reflash(e)}}}),s=i,o=(l("f7e7"),l("2877")),a=Object(o["a"])(s,r,n,!1,null,"42ff7dda",null);t["default"]=a.exports},e8b5:function(e,t,l){var r=l("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}},f7e7:function(e,t,l){"use strict";var r=l("3ac5"),n=l.n(r);n.a},fb6a:function(e,t,l){"use strict";var r=l("23e7"),n=l("861d"),i=l("e8b5"),s=l("23cb"),o=l("50c4"),a=l("fc6a"),c=l("8418"),u=l("b622"),f=l("1dde"),d=l("ae40"),m=f("slice"),b=d("slice",{ACCESSORS:!0,0:0,1:2}),p=u("species"),w=[].slice,h=Math.max;r({target:"Array",proto:!0,forced:!m||!b},{slice:function(e,t){var l,r,u,f=a(this),d=o(f.length),m=s(e,d),b=s(void 0===t?d:t,d);if(i(f)&&(l=f.constructor,"function"!=typeof l||l!==Array&&!i(l.prototype)?n(l)&&(l=l[p],null===l&&(l=void 0)):l=void 0,l===Array||void 0===l))return w.call(f,m,b);for(r=new(void 0===l?Array:l)(h(b-m,0)),u=0;m<b;m++,u++)m in f&&c(r,u,f[m]);return r.length=u,r}})}}]);
//# sourceMappingURL=chunk-bac31fd0.415488c7.js.map