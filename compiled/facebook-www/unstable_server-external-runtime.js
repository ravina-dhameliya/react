(function(){function q(c,a,e){a=document.getElementById(a);a.parentNode.removeChild(a);var b=document.getElementById(c);if(b){c=b.previousSibling;if(e)c.data="$!",b.setAttribute("data-dgst",e);else{e=c.parentNode;b=c.nextSibling;var g=0;do{if(b&&8===b.nodeType){var d=b.data;if("/$"===d)if(0===g)break;else g--;else"$"!==d&&"$?"!==d&&"$!"!==d||g++}d=b.nextSibling;e.removeChild(b);b=d}while(b);for(;a.firstChild;)e.insertBefore(a.firstChild,b);c.data="$"}c._reactRetry&&c._reactRetry()}}function D(c,a,
e){function b(w){this.s=w}for(var g=new Map,d=document,l,h,r=d.querySelectorAll("link[data-precedence],style[data-precedence]"),y=[],t=0;h=r[t++];)"not all"===h.getAttribute("media")?y.push(h):("LINK"===h.tagName&&x.set(h.getAttribute("href"),h),g.set(h.dataset.precedence,l=h));h=0;r=[];var u,f;for(t=!0;;){if(t){var p=e[h++];if(!p){t=!1;h=0;continue}var k=!1,v=0;var n=p[v++];if(f=x.get(n)){var m=f._p;k=!0}else{f=d.createElement("link");f.href=n;f.rel="stylesheet";for(f.dataset.precedence=u=p[v++];m=
p[v++];)f.setAttribute(m,p[v++]);m=f._p=new Promise(function(w,E){f.onload=w;f.onerror=E});m.then(b.bind(m,"l"),b.bind(m,"e"));x.set(n,f)}n=f.getAttribute("media");!m||"l"===m.s||n&&!window.matchMedia(n).matches||r.push(m);if(k)continue}else{f=y[h++];if(!f)break;u=f.getAttribute("data-precedence");f.removeAttribute("media")}k=g.get(u)||l;k===l&&(l=f);g.set(u,f);k?k.parentNode.insertBefore(f,k.nextSibling):(k=d.head,k.insertBefore(f,k.firstChild))}Promise.all(r).then(q.bind(null,c,a,""),q.bind(null,
c,a,"Resource failed to load"))}function z(){for(var c=document.getElementsByTagName("template"),a=0;a<c.length;a++)A(c[a])}function B(c){function a(b){for(var g=0;g<b.length;g++)for(var d=b[g].addedNodes,l=0;l<d.length;l++)d.item(l).parentNode&&A(d.item(l))}var e=new MutationObserver(a);e.observe(c,{childList:!0});window.addEventListener("DOMContentLoaded",function(){a(e.takeRecords());e.disconnect()})}function A(c){if(1===c.nodeType&&c.dataset){var a=c.dataset;if(null!=a.rxi){var e=a.dgst,b=a.msg,
g=a.stck,d=document.getElementById(a.bid);d&&(a=d.previousSibling,a.data="$!",d=d.dataset,e&&(d.dgst=e),b&&(d.msg=b),g&&(d.stck=g),a._reactRetry&&a._reactRetry());c.remove()}else if(null!=a.rri)D(a.bid,a.sid,JSON.parse(a.sty)),c.remove();else if(null!=a.rci)q(a.bid,a.sid),c.remove();else if(null!=a.rsi){e=a.pid;b=document.getElementById(a.sid);e=document.getElementById(e);for(b.parentNode.removeChild(b);b.firstChild;)e.parentNode.insertBefore(b.firstChild,e);e.parentNode.removeChild(e);c.remove()}}}
var x=new Map;window.$RC||(window.$RC=q,window.$RM=new Map);if("loading"===document.readyState)if(null!=document.body)B(document.body);else{var C=new MutationObserver(function(){document.body&&("loading"===document.readyState&&B(document.body),z(),C.disconnect())});C.observe(document.documentElement,{childList:!0})}z()})();