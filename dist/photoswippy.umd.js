!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.photoswippy=t()}(this,function(){var e,t,o,n,r=function(e){return Array.prototype.slice.call(e)},i=function(e,t){return e&&(t(e)?e:i(e.parentNode,t))},a=function(e,t,o){var n=new Image;n.onload=function(){return t(n)},o&&(n.onerror=function(){return o(n)}),n.src=e},p=function(e,t){return(Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector).call(e,t)},s=Object.assign||function(e){var t=arguments;if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var o=Object(e),n=1;n<arguments.length;n++){var r=t[n];if(null!=r)for(var i in r)r.hasOwnProperty(i)&&(o[i]=r[i])}return o},l=0,c={},u={indexSelector:null,itemSelector:"a",captionSelector:"figcaption",hoverPreload:!1,useMsrc:!0,eventListener:[]},f=function(o,r,i){i=i||o.items[r].el.querySelector("img")||{offsetWidth:0,offsetHeight:0};var p=s({},o.options,{index:r,getThumbBoundsFn:function(e){var t=o.items[e].el.offsetParent?o.items[e].el:i;if(t.offsetParent){var n=window.pageYOffset||document.documentElement.scrollTop,r=t.getBoundingClientRect();return{x:r.left,y:r.top+n,w:r.width}}}}),l=new e(n,t,o.items,p);l.listen("gettingData",function(e,t){t.w&&t.h||(t.w=i.offsetWidth,t.h=i.offsetHeight,p.hoverPreload&&t.preloadState||a(t.src,function(e){t.w=e.width,t.h=e.height,l.updateSize(!0)}))}),l.options.eventListener.forEach(function(e){l.listen(e.name,e.callback())}),l.init()},d=function(e,t){if(void 0===t&&(t={}),e.dataset.pswpOptions)t=JSON.parse(e.dataset.pswpOptions);else{var n=Object.keys(e.dataset).filter(function(e){return 0===e.indexOf("pswp")&&"pswp"!==e});n.length>0&&n.forEach(function(o){var n=o[4].toLowerCase()+o.substring(5);t[n]=e.dataset[o]||!0})}var c=s({galleryUID:e.dataset.pswpId||e.dataset.pswp||"gallery-"+l},o,t);e.dataset.pswp=c.galleryUID;var u=r(e.querySelectorAll(c.itemSelector)).map(function(e){var t=e.querySelector(c.captionSelector)||{},o=(e.dataset.pswpSize||"").toLowerCase().split("x").map(parseInt),n=e.dataset.pswpSrc||e.href,r={el:e,src:n,w:o[0]||e.dataset.pswpWidth||0,h:o[1]||e.dataset.pswpHeight||0,title:e.dataset.pswpCaption||t.innerHTML||""};if(c.useMsrc){var i=e.querySelector("img");i&&(r.msrc=i.src)}return c.hoverPreload&&e.addEventListener("mouseover",function t(o){r.preloadState||(r.preloadState=1,a(n,function(o){r.preloadState=2,r.w=o.width,r.h=o.height,e.removeEventListener("mouseover",t)},function(){r.preloadState=0,e.removeEventListener("mouseover",t)}))}),r}),d={el:e,options:c,items:u};return e.addEventListener("click",function(e){return function(t){t.preventDefault();var o=i(t.target,function(t){return 1===t.nodeType&&p(t,e.options.itemSelector)});if(o){var n=function(e){for(var t=0;e=e.previousElementSibling;)++t;return t}(i(o,"string"==typeof e.options.indexSelector?function(t){return p(t,e.options.indexSelector)}:function(t){return t.parentNode===e.el}));f(e,n,o)}}}(d)),d},w=function(o,n){if(e&&t||console.error('[PhotoSwippy] PhotoSwipe and PhotoSwipeUI libraries were not found. Was "PhotoSwippy.init()" called?'),o){("string"==typeof o?r(document.querySelectorAll(o)):[o]).forEach(function(e){if(!e.photoswippy){l++;var t=d(e,n);e.photoswippy=!0,c[t.options.galleryUID]=t}});var i=window.location.hash.substring(1).split("&").reduce(function(e,t){if(t.length){var o=t.split("=");e[o[0]]=o[1]}return e},{});i.pid&&i.gid&&c[i.gid]&&f(c[i.gid],i.pid-1,null),h()}},h=function(){r(document.querySelectorAll("[data-pswp-trigger]")).forEach(function(e){e.photoswippy||(e.photoswippy=!0,e.addEventListener("click",function(){var e=this.dataset.pswpTrigger.split("@"),t=e[0],o=e[1];void 0===o&&(o=0);var n=c[t];n?f(n,parseInt(o),this):console.error("[PhotoSwippy] Gallery with id '"+t+"' not found.")}))})};return{init:function(r,i,a){void 0===r&&(r=window.PhotoSwipe),void 0===i&&(i=window.PhotoSwipeUI_Default),e=r,t=i,o=s(u,a),(n=document.querySelector(".pswp"))||console.error("[PhotoSwippy] Photoswipe template (Element with .pswp class) not found."),w("[data-pswp]")},build:w}});
//# sourceMappingURL=photoswippy.umd.js.map
