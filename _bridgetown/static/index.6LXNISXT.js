(()=>{window.FontAwesomeKitConfig={asyncLoading:{enabled:!1},autoA11y:{enabled:!0},baseUrl:"https://ka-f.fontawesome.com",baseUrlKit:"https://kit.fontawesome.com",detectConflictsUntil:null,iconUploads:{},id:110863968,license:"free",method:"css",minify:{enabled:!0},token:"bb5655e625",v4FontFaceShim:{enabled:!0},v4shim:{enabled:!0},v5FontFaceShim:{enabled:!0},version:"6.4.2"};(function(p){typeof define=="function"&&define.amd?define("kit-loader",p):p()})(function(){"use strict";function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?p(Object(n),!0).forEach(function(r){q(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function O(t){return(O=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function q(t,e,n){return(e=function(r){var o=function(i,a){if(typeof i!="object"||i===null)return i;var c=i[Symbol.toPrimitive];if(c!==void 0){var u=c.call(i,a||"default");if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(i)}(r,"string");return typeof o=="symbol"?o:String(o)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function M(t,e){return function(n){if(Array.isArray(n))return n}(t)||function(n,r){var o=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(o!=null){var i,a,c,u,s=[],l=!0,S=!1;try{if(c=(o=o.call(n)).next,r===0){if(Object(o)!==o)return;l=!1}else for(;!(l=(i=c.call(o)).done)&&(s.push(i.value),s.length!==r);l=!0);}catch(P){S=!0,a=P}finally{try{if(!l&&o.return!=null&&(u=o.return(),Object(u)!==u))return}finally{if(S)throw a}}return s}}(t,e)||function(n,r){if(n){if(typeof n=="string")return C(n,r);var o=Object.prototype.toString.call(n).slice(8,-1);if(o==="Object"&&n.constructor&&(o=n.constructor.name),o==="Map"||o==="Set")return Array.from(n);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return C(n,r)}}(t,e)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function C(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function g(t,e){var n=e&&e.addOn||"",r=e&&e.baseFilename||t.license+n,o=e&&e.minify?".min":"",i=e&&e.fileSuffix||t.method,a=e&&e.subdir||t.method;return t.baseUrl+"/releases/"+(t.version==="latest"?"latest":"v".concat(t.version))+"/"+a+"/"+r+o+"."+i}function U(t,e){var n=e||["fa"],r="."+Array.prototype.join.call(n,",."),o=t.querySelectorAll(r);Array.prototype.forEach.call(o,function(i){var a=i.getAttribute("title");i.setAttribute("aria-hidden","true");var c=!i.nextElementSibling||!i.nextElementSibling.classList.contains("sr-only");if(a&&c){var u=t.createElement("span");u.innerHTML=a,u.classList.add("sr-only"),i.parentNode.insertBefore(u,i.nextSibling)}})}var j,X=function(){},I=typeof global!="undefined"&&global.process!==void 0&&typeof global.process.emit=="function",B=typeof setImmediate=="undefined"?setTimeout:setImmediate,b=[];function Y(){for(var t=0;t<b.length;t++)b[t][0](b[t][1]);b=[],j=!1}function w(t,e){b.push([t,e]),j||(j=!0,B(Y,0))}function L(t){var e=t.owner,n=e._state,r=e._data,o=t[n],i=t.then;if(typeof o=="function"){n="fulfilled";try{r=o(r)}catch(a){v(i,a)}}T(i,r)||(n==="fulfilled"&&E(i,r),n==="rejected"&&v(i,r))}function T(t,e){var n;try{if(t===e)throw new TypeError("A promises callback cannot return that same promise.");if(e&&(typeof e=="function"||O(e)==="object")){var r=e.then;if(typeof r=="function")return r.call(e,function(o){n||(n=!0,e===o?k(t,o):E(t,o))},function(o){n||(n=!0,v(t,o))}),!0}}catch(o){return n||v(t,o),!0}return!1}function E(t,e){t!==e&&T(t,e)||k(t,e)}function k(t,e){t._state==="pending"&&(t._state="settled",t._data=e,w(G,t))}function v(t,e){t._state==="pending"&&(t._state="settled",t._data=e,w($,t))}function x(t){t._then=t._then.forEach(L)}function G(t){t._state="fulfilled",x(t)}function $(t){t._state="rejected",x(t),!t._handled&&I&&global.process.emit("unhandledRejection",t._data,t)}function z(t){global.process.emit("rejectionHandled",t)}function f(t){if(typeof t!="function")throw new TypeError("Promise resolver "+t+" is not a function");if(!(this instanceof f))throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],function(e,n){function r(o){v(n,o)}try{e(function(o){E(n,o)},r)}catch(o){r(o)}}(t,this)}f.prototype={constructor:f,_state:"pending",_then:null,_data:void 0,_handled:!1,then:function(t,e){var n={owner:this,then:new this.constructor(X),fulfilled:t,rejected:e};return!e&&!t||this._handled||(this._handled=!0,this._state==="rejected"&&I&&w(z,this)),this._state==="fulfilled"||this._state==="rejected"?w(L,n):this._then.push(n),n.then},catch:function(t){return this.then(null,t)}},f.all=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.all().");return new f(function(e,n){var r=[],o=0;function i(u){return o++,function(s){r[u]=s,--o||e(r)}}for(var a,c=0;c<t.length;c++)(a=t[c])&&typeof a.then=="function"?a.then(i(c),n):r[c]=a;o||e(r)})},f.race=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.race().");return new f(function(e,n){for(var r,o=0;o<t.length;o++)(r=t[o])&&typeof r.then=="function"?r.then(e,n):e(r)})},f.resolve=function(t){return t&&O(t)==="object"&&t.constructor===f?t:new f(function(e){e(t)})},f.reject=function(t){return new f(function(e,n){n(t)})};var m=typeof Promise=="function"?Promise:f;function F(t,e){var n=e.fetch,r=e.XMLHttpRequest,o=e.token,i=t;return o&&!function(a){return a.indexOf("kit-upload.css")>-1}(t)&&("URLSearchParams"in window?(i=new URL(t)).searchParams.set("token",o):i=i+"?token="+encodeURIComponent(o)),i=i.toString(),new m(function(a,c){if(typeof n=="function")n(i,{mode:"cors",cache:"default"}).then(function(s){if(s.ok)return s.text();throw new Error("")}).then(function(s){a(s)}).catch(c);else if(typeof r=="function"){var u=new r;u.addEventListener("loadend",function(){this.responseText?a(this.responseText):c(new Error(""))}),["abort","error","timeout"].map(function(s){u.addEventListener(s,function(){c(new Error(""))})}),u.open("GET",i),u.send()}else c(new Error(""))})}function J(t,e,n){var r=t;return[[/(url\("?)\.\.\/\.\.\/\.\./g,function(o,i){return"".concat(i).concat(e)}],[/(url\("?)\.\.\/webfonts/g,function(o,i){return"".concat(i).concat(e,"/releases/v").concat(n,"/webfonts")}],[/(url\("?)https:\/\/kit-free([^.])*\.fontawesome\.com/g,function(o,i){return"".concat(i).concat(e)}]].forEach(function(o){var i=M(o,2),a=i[0],c=i[1];r=r.replace(a,c)}),r}function Q(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(){},r=e.document||r,o=U.bind(U,r,["fa","fab","fas","far","fal","fad","fak"]);t.autoA11y.enabled&&n(o);var i=t.subsetPath&&t.baseUrl+"/"+t.subsetPath,a=[{id:"fa-main",addOn:void 0,url:i}];if(t.v4shim&&t.v4shim.enabled&&a.push({id:"fa-v4-shims",addOn:"-v4-shims"}),t.v5FontFaceShim&&t.v5FontFaceShim.enabled&&a.push({id:"fa-v5-font-face",addOn:"-v5-font-face"}),t.v4FontFaceShim&&t.v4FontFaceShim.enabled&&a.push({id:"fa-v4-font-face",addOn:"-v4-font-face"}),!i&&t.customIconsCssPath){var c=t.customIconsCssPath.indexOf("kit-upload.css")>-1?t.baseUrlKit:t.baseUrl,u=c+"/"+t.customIconsCssPath;a.push({id:"fa-kit-upload",url:u})}var s=a.map(function(l){return new m(function(S,P){var tt=l.url||g(t,{addOn:l.addOn,minify:t.minify.enabled}),K={id:l.id},et=t.subset?K:d(d(d({},e),K),{},{baseUrl:t.baseUrl,version:t.version,id:l.id,contentFilter:function(_,H){return J(_,H.baseUrl,H.version)}});F(tt,e).then(function(_){S(V(_,et))}).catch(P)})});return m.all(s)}function V(t,e){var n=e.contentFilter||function(i,a){return i},r=document.createElement("style"),o=document.createTextNode(n(t,e));return r.appendChild(o),r.media="all",e.id&&r.setAttribute("id",e.id),e&&e.detectingConflicts&&e.detectionIgnoreAttr&&r.setAttributeNode(document.createAttribute(e.detectionIgnoreAttr)),r}function W(t,e){e.autoA11y=t.autoA11y.enabled,t.license==="pro"&&(e.autoFetchSvg=!0,e.fetchSvgFrom=t.baseUrl+"/releases/"+(t.version==="latest"?"latest":"v".concat(t.version))+"/svgs",e.fetchUploadedSvgFrom=t.uploadsUrl);var n=[];return t.v4shim.enabled&&n.push(new m(function(r,o){F(g(t,{addOn:"-v4-shims",minify:t.minify.enabled}),e).then(function(i){r(D(i,d(d({},e),{},{id:"fa-v4-shims"})))}).catch(o)})),n.push(new m(function(r,o){F(t.subsetPath&&t.baseUrl+"/"+t.subsetPath||g(t,{minify:t.minify.enabled}),e).then(function(i){var a=D(i,d(d({},e),{},{id:"fa-main"}));r(function(c,u){var s=u&&u.autoFetchSvg!==void 0?u.autoFetchSvg:void 0,l=u&&u.autoA11y!==void 0?u.autoA11y:void 0;return l!==void 0&&c.setAttribute("data-auto-a11y",l?"true":"false"),s&&(c.setAttributeNode(document.createAttribute("data-auto-fetch-svg")),c.setAttribute("data-fetch-svg-from",u.fetchSvgFrom),c.setAttribute("data-fetch-uploaded-svg-from",u.fetchUploadedSvgFrom)),c}(a,e))}).catch(o)})),m.all(n)}function D(t,e){var n=document.createElement("SCRIPT"),r=document.createTextNode(t);return n.appendChild(r),n.referrerPolicy="strict-origin",e.id&&n.setAttribute("id",e.id),e&&e.detectingConflicts&&e.detectionIgnoreAttr&&n.setAttributeNode(document.createAttribute(e.detectionIgnoreAttr)),n}function N(t){var e,n=[],r=document,o=r.documentElement.doScroll,i=(o?/^loaded|^c/:/^loaded|^i|^c/).test(r.readyState);i||r.addEventListener("DOMContentLoaded",e=function(){for(r.removeEventListener("DOMContentLoaded",e),i=1;e=n.shift();)e()}),i?setTimeout(t,0):n.push(t)}function Z(t){typeof MutationObserver!="undefined"&&new MutationObserver(t).observe(document,{childList:!0,subtree:!0})}try{if(window.FontAwesomeKitConfig){var y=window.FontAwesomeKitConfig,A={detectingConflicts:y.detectConflictsUntil&&new Date<=new Date(y.detectConflictsUntil),detectionIgnoreAttr:"data-fa-detection-ignore",fetch:window.fetch,token:y.token,XMLHttpRequest:window.XMLHttpRequest,document},h=document.currentScript,R=h?h.parentElement:document.head;(function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return t.method==="js"?W(t,e):t.method==="css"?Q(t,e,function(n){N(n),Z(n)}):void 0})(y,A).then(function(t){t.map(function(e){try{R.insertBefore(e,h?h.nextSibling:null)}catch(n){R.appendChild(e)}}),A.detectingConflicts&&h&&N(function(){h.setAttributeNode(document.createAttribute(A.detectionIgnoreAttr));var e=function(n,r){var o=document.createElement("script");return r&&r.detectionIgnoreAttr&&o.setAttributeNode(document.createAttribute(r.detectionIgnoreAttr)),o.src=g(n,{baseFilename:"conflict-detection",fileSuffix:"js",subdir:"js",minify:n.minify.enabled}),o}(y,A);document.body.appendChild(e)})}).catch(function(t){console.error("".concat("Font Awesome Kit:"," ").concat(t))})}}catch(t){console.error("".concat("Font Awesome Kit:"," ").concat(t))}});})();
//# sourceMappingURL=/_bridgetown/static/index.6LXNISXT.js.map
