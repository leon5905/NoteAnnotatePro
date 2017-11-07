/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.1",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+Math.random()}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)
},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=l.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,n.ajaxSettings),b):tc(n.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Dc)Dc[a]()}),k.cors=!!Fc&&"withCredentials"in Fc,k.ajax=Fc=!!Fc,n.ajaxTransport(function(a){var b;return k.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Ic=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Jc})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Lc=a.jQuery,Mc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Mc),b&&a.jQuery===n&&(a.jQuery=Lc),n},typeof b===U&&(a.jQuery=a.$=n),n});
/*-------------------------------------------------------------------- 
Scripts for creating and manipulating custom menus based on standard <ul> markup
Version: 3.0, 03.31.2009

By: Maggie Costello Wachs (maggie@filamentgroup.com) and Scott Jehl (scott@filamentgroup.com)
	http://www.filamentgroup.com
	* reference articles: http://www.filamentgroup.com/lab/jquery_ipod_style_drilldown_menu/
		
Copyright (c) 2009 Filament Group
Dual licensed under the MIT (filamentgroup.com/examples/mit-license.txt) and GPL (filamentgroup.com/examples/gpl-license.txt) licenses.
--------------------------------------------------------------------*/

/* 
1. Debug Mode
2. Version 
3. APP's Name | MANIFEST
4. APP's Version | MANIFEST
5. Comments in popup.js
6. Character Limit Increase
7. Change images

LIGHT:
1. Debug Mode
2. Version
3. APP's Version | MANIFEST

Make sure you have tested extensively. 
*/

window._SETTINGS = {};
window._TEXTAREA = "";
window._DEBUGMODE = 0;
window._STARTTIME = Date.now();
window._APP_VERSION = "1.9.4";

window._CHARLIMIT = 4000;

window._UNIVERSAL_SETTINGS = {};
window._UNIVERSAL_SETTINGS.sync = 1;

window._DOIUSESYNC = 0;
window._COUNT = 0;

window._CGNDONE = 0;

window._USERVERSION = "X";

window._DEFAULTTEXT = "Welcome,\n\ntype your notes here...\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n";

window._ISPANELTHERE = 0;

var allUIMenus = [];


function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}



/*!
* Velocity.js: Accelerated JavaScript animation.
* @version 0.0.0
* @requires jQuery.js
* @docs julian.com/research/velocity
* @license Copyright 2014 Julian Shapiro. MIT License: http://en.wikipedia.org/wiki/MIT_License
*/
!function(e,t,a,r){function o(e){for(var t=-1,a=e?e.length:0,r=[];++t<a;){var o=e[t];o&&r.push(o)}return r}function i(e){return"[object Function]"===Object.prototype.toString.call(e)}function l(t){if(t)for(var a=(new Date).getTime(),o=0,i=e.velocity.State.calls.length;i>o;o++)if(e.velocity.State.calls[o]){var s=e.velocity.State.calls[o],g=s[0],d=s[2],f=s[3];f||(f=e.velocity.State.calls[o][3]=a-16);for(var y=Math.min((a-f)/d.duration,1),m=0,h=g.length;h>m;m++){var v=g[m],x=v.element;if(e.data(x,u)){var P=!1;d.display&&"none"!==d.display&&(p.setPropertyValue(x,"display",d.display),e.velocity.State.calls[o][2].display=!1);for(var b in v)if("element"!==b){var V=v[b],S=V.currentValue,k;if(k=1===y?V.endValue:V.startValue+(V.endValue-V.startValue)*e.easing[V.easing](y),V.currentValue=k,p.Hooks.registered[b]){var w=p.Hooks.getRoot(b),C=e.data(x,u).rootPropertyValueCache[w];C&&(V.rootPropertyValue=C)}var T=p.setPropertyValue(x,b,V.currentValue+("auto"===k?"":V.unitType),V.rootPropertyValue);p.Hooks.registered[b]&&(e.data(x,u).rootPropertyValueCache[w]=p.Normalizations.registered[w]?p.Normalizations.registered[w]("extract",null,T[1]):T[1]),"transform"===T[0]&&(P=!0)}d.mobileHA&&(e.data(x,u).transformCache.translate3d===r?(e.data(x,u).transformCache.translate3d="(0, 0, 0)",P=!0):1===y&&(delete e.data(x,u).transformCache.translate3d,P=!0)),P&&p.flushTransformCache(x)}}1===y&&n(o)}e.velocity.State.isTicking&&c(l)}function n(t){for(var a=e.velocity.State.calls[t][0],o=e.velocity.State.calls[t][1],i=e.velocity.State.calls[t][2],l=!1,n=0,s=a.length;s>n;n++){var c=a[n].element;"none"===i.display&&i.loop===!1&&p.setPropertyValue(c,"display",i.display),e.queue(c)[1]!==r&&/\$\.velocity\.queueEntryFlag/i.test(e.queue(c)[1])||e.data(c,u)&&(e.data(c,u).isAnimating=!1,e.data(c,u).rootPropertyValueCache={}),e.dequeue(c)}e.velocity.State.calls[t]=!1;for(var g=0,d=e.velocity.State.calls.length;d>g;g++)if(e.velocity.State.calls[g]!==!1){l=!0;break}l===!1&&(e.velocity.State.isTicking=!1,delete e.velocity.State.calls,e.velocity.State.calls=[]),i.complete&&i.complete.call(o)}var s=function(){if(a.documentMode)return a.documentMode;for(var e=7;e>4;e--){var t=a.createElement("div");if(t.innerHTML="<!--[if IE "+e+"]><span></span><![endif]-->",t.getElementsByTagName("span").length)return t=null,e}return r}(),c=t.requestAnimationFrame||function(){var e=0;return t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(t){var a=(new Date).getTime(),r;return r=Math.max(0,16-(a-e)),e=a+r,setTimeout(function(){t(a+r)},r)}}();if(7>=s)return void(e.fn.velocity=e.fn.animate);if(e.velocity!==r||e.fn.velocity!==r)return void console.log("Velocity is already loaded or its namespace is occupied.");!function(){var t={};e.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,a){t[a]=function(t){return Math.pow(t,e+2)}}),e.extend(t,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return 0===e||1===e?e:-Math.pow(2,8*(e-1))*Math.sin((80*(e-1)-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){for(var t,a=4;e<((t=Math.pow(2,--a))-1)/11;);return 1/Math.pow(4,3-a)-7.5625*Math.pow((3*t-2)/22-e,2)}}),e.each(t,function(t,a){e.easing["easeIn"+t]=a,e.easing["easeOut"+t]=function(e){return 1-a(1-e)},e.easing["easeInOut"+t]=function(e){return.5>e?a(2*e)/2:1-a(-2*e+2)/2}}),e.easing.spring=function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)}}();var u="velocity";e.velocity={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),prefixElement:a.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollProperty:null,isTicking:!1,calls:[]},Classes:{extracted:{},extract:function(){}},CSS:{},Sequence:{},animate:function(){},debug:!1},t.pageYOffset!==r?(e.velocity.State.scrollAnchor=t,e.velocity.State.scrollProperty="pageYOffset"):(e.velocity.State.scrollAnchor=a.documentElement||a.body.parentNode||a.body,e.velocity.State.scrollProperty="scrollTop"),e.velocity.Classes.extract=function(){for(var t=a.styleSheets,r={},o=0,i=t.length;i>o;o++){var l=t[o],n;try{if(!l.cssText&&!l.cssRules)continue;n=l.cssText?l.cssText.replace(/[\r\n]/g,"").match(/[^}]+\{[^{]+\}/g):l.cssRules;for(var s=0,c=n.length;c>s;s++){var u;if(l.cssText)u=n[s];else{if(!n[s].cssText)continue;u=n[s].cssText}var p=u.match(/\.animate_([A-z0-9_-]+)(?:(\s+)?{)/);if(p){var g=p[1],d=u.toLowerCase().match(/\{([\S\s]*)\}/)[1].match(/[A-z-][^;]+/g);r[g]||(r[g]={});for(var f=0,y=d.length;y>f;f++){var m=d[f].match(/([^:]+):\s*(.+)/);r[g][m[1]]=m[2]}}}}catch(h){}}return e.velocity.Classes.extracted=r,e.velocity.debug&&console.log("Classes: "+JSON.stringify(e.velocity.Classes.extracted)),r};var p=e.velocity.CSS={RegEx:{valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Hooks:{templates:{color:["Red Green Blue Alpha","255 255 255 1"],backgroundColor:["Red Green Blue Alpha","255 255 255 1"],borderColor:["Red Green Blue Alpha","255 255 255 1"],outlineColor:["Red Green Blue Alpha","255 255 255 1"],textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0%"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){var e,t,a;if(s)for(e in p.Hooks.templates){t=p.Hooks.templates[e],a=t[0].split(" ");var r=t[1].match(p.RegEx.valueSplit);"Color"===a[0]&&(a.push(a.shift()),r.push(r.shift()),p.Hooks.templates[e]=[a.join(" "),r.join(" ")])}for(e in p.Hooks.templates){t=p.Hooks.templates[e],a=t[0].split(" ");for(var o in a){var i=e+a[o],l=o;p.Hooks.registered[i]=[e,l]}}},getRoot:function(e){var t=p.Hooks.registered[e];return t?t[0]:e},cleanRootPropertyValue:function(e,t){return p.RegEx.valueUnwrap.test(t)&&(t=t.match(p.Hooks.RegEx.valueUnwrap)[1]),p.Values.isCSSNullValue(t)&&(t=p.Hooks.templates[e][1]),t},extractValue:function(e,t){var a=p.Hooks.registered[e];if(a){var r=a[0],o=a[1];return t=p.Hooks.cleanRootPropertyValue(r,t),t.toString().match(p.RegEx.valueSplit)[o]}return t},injectValue:function(e,t,a){var r=p.Hooks.registered[e];if(r){var o=r[0],i=r[1],l,n;return a=p.Hooks.cleanRootPropertyValue(o,a),l=a.toString().match(p.RegEx.valueSplit),l[i]=t,n=l.join(" ")}return a}},Normalizations:{registered:{clip:function(e,t,a){switch(e){case"name":return"clip";case"extract":var r;return p.RegEx.wrappedValueAlreadyExtracted.test(a)?r=a:(r=a.toString().match(p.RegEx.valueUnwrap),r&&(r=r[1].replace(/,(\s+)?/g," "))),r;case"inject":return"rect("+a+")"}},opacity:function(e,t,a){if(8>=s)switch(e){case"name":return"filter";case"extract":var r=a.toString().match(/alpha\(opacity=(.*)\)/i);return a=r?r[1]/100:1;case"inject":return t.style.zoom=1,"alpha(opacity="+parseInt(100*a)+")"}else switch(e){case"name":return"opacity";case"extract":return a;case"inject":return a}}},register:function(){function t(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,r;return e=e.replace(t,function(e,t,a,r){return t+t+a+a+r+r}),r=a.exec(e),r?"rgb("+(parseInt(r[1],16)+" "+parseInt(r[2],16)+" "+parseInt(r[3],16))+")":"rgb(0 0 0)"}var a=["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"];9>=s||(a=a.concat(["translateZ","scaleZ","rotateX","rotateY"]));for(var o=0,i=a.length;i>o;o++)!function(){var t=a[o];p.Normalizations.registered[t]=function(a,o,i){switch(a){case"name":return"transform";case"extract":return e.data(o,u).transformCache[t]===r?/^scale/i.test(t)?1:0:e.data(o,u).transformCache[t].replace(/[()]/g,"");case"inject":var l=!1;switch(t.substr(0,t.length-1)){case"translate":l=!/(%|px|em|rem|\d)$/i.test(i);break;case"scale":l=!/(\d)$/i.test(i);break;case"skew":l=!/(deg|\d)$/i.test(i);break;case"rotate":l=!/(deg|\d)$/i.test(i)}return l||(e.data(o,u).transformCache[t]="("+i+")"),e.data(o,u).transformCache[t]}}}();for(var l=["color","backgroundColor","borderColor","outlineColor"],o=0,n=l.length;n>o;o++)!function(){var e=l[o];p.Normalizations.registered[e]=function(a,o,i){switch(a){case"name":return e;case"extract":var l;if(p.RegEx.wrappedValueAlreadyExtracted.test(i))l=i;else{var n,c={aqua:"rgb(0, 255, 255);",black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",fuchsia:"rgb(255, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",lime:"rgb(0, 255, 0)",maroon:"rgb(128, 0, 0)",navy:"rgb(0, 0, 128)",olive:"rgb(128, 128, 0)",purple:"rgb(128, 0, 128)",red:"rgb(255, 0, 0)",silver:"rgb(192, 192, 192)",teal:"rgb(0, 128, 128)",white:"rgb(255, 255, 255)",yellow:"rgb(255, 255, 0)"};/^[A-z]+$/i.test(i)?n=c[i]!==r?c[i]:c.black:/^#([A-f\d]{3}){1,2}$/i.test(i)?n=t(i):/^rgba?\(/i.test(i)||(n=c.black),l=(n||i).toString().match(p.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=s||3!==l.split(" ").length||(l+=" 1"),l;case"inject":return 8>=s?4===i.split(" ").length&&(i=i.split(/\s+/).slice(0,3).join(" ")):3===i.split(" ").length&&(i+=" 1"),(8>=s?"rgb":"rgba")+"("+i.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},prefixCheck:function(t){if(e.velocity.State.prefixMatches[t])return[e.velocity.State.prefixMatches[t],!0];for(var a=["","Webkit","Moz","ms","O"],r=0,o=a.length;o>r;r++){var i;if(i=0===r?t:a[r]+t.replace(/^\w/,function(e){return e.toUpperCase()}),"string"==typeof e.velocity.State.prefixElement.style[i])return e.velocity.State.prefixMatches[t]=i,[i,!0]}return[t,!1]}},Values:{isCSSNullValue:function(e){return 0==e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|opacity|alpha|fillOpacity|flexGrow|flexHeight|zIndex|fontWeight)$)|color/i.test(e)?"":"px"}},getPropertyValue:function(a,o,i,l){function n(a,o){if(!l){if("height"===o&&"border-box"!==p.getPropertyValue(a,"boxSizing").toLowerCase())return a.offsetHeight-(parseFloat(p.getPropertyValue(a,"borderTopWidth"))||0)-(parseFloat(p.getPropertyValue(a,"borderBottomWidth"))||0)-(parseFloat(p.getPropertyValue(a,"paddingTop"))||0)-(parseFloat(p.getPropertyValue(a,"paddingBottom"))||0);if("width"===o&&"border-box"!==p.getPropertyValue(a,"boxSizing").toLowerCase())return a.offsetWidth-(parseFloat(p.getPropertyValue(a,"borderLeftWidth"))||0)-(parseFloat(p.getPropertyValue(a,"borderRightWidth"))||0)-(parseFloat(p.getPropertyValue(a,"paddingLeft"))||0)-(parseFloat(p.getPropertyValue(a,"paddingRight"))||0)}var i=0;if(8>=s)i=e.css(a,o);else{var c;c=e.data(a,u)===r?t.getComputedStyle(a,null):e.data(a,u).computedStyle?e.data(a,u).computedStyle:e.data(a,u).computedStyle=t.getComputedStyle(a,null),s&&"borderColor"===o&&(o="borderTopColor"),i=9===s&&"filter"===o?c.getPropertyValue(o):c[o],""===i&&(i=a.style[o])}if("auto"===i&&/^(top|right|bottom|left)$/i.test(o)){var g=n(a,"position");("fixed"===g||"absolute"===g&&/top|left/i.test(o))&&(i=e(a).position()[o]+"px")}return i}var c;if(p.Hooks.registered[o]){var g=o,d=p.Hooks.getRoot(g);i===r&&(i=p.getPropertyValue(a,p.Names.prefixCheck(d)[0])),p.Normalizations.registered[d]&&(i=p.Normalizations.registered[d]("extract",a,i)),c=p.Hooks.extractValue(g,i)}else if(p.Normalizations.registered[o]){var f,y;f=p.Normalizations.registered[o]("name",a),"transform"!==f&&(y=n(a,p.Names.prefixCheck(f)[0]),p.Values.isCSSNullValue(y)&&p.Hooks.templates[o]&&(y=p.Hooks.templates[o][1])),c=p.Normalizations.registered[o]("extract",a,y)}return/^[\d-]/.test(c)||(c=n(a,p.Names.prefixCheck(o)[0])),p.Values.isCSSNullValue(c)&&(c=0),e.velocity.debug>=2&&console.log("Get "+o+": "+c),c},setPropertyValue:function(a,r,o,i){var l=r;if("scroll"===r)t.scrollTo(null,o);else if(p.Normalizations.registered[r]&&"transform"===p.Normalizations.registered[r]("name",a))p.Normalizations.registered[r]("inject",a,o),l="transform",o=e.data(a,u).transformCache[r];else{if(p.Hooks.registered[r]){var n=r,c=p.Hooks.getRoot(r);i=i||p.getPropertyValue(a,c),o=p.Hooks.injectValue(n,o,i),r=c}if(p.Normalizations.registered[r]&&(o=p.Normalizations.registered[r]("inject",a,o),r=p.Normalizations.registered[r]("name",a)),l=p.Names.prefixCheck(r)[0],8>=s)try{a.style[l]=o}catch(g){console.log("Error setting ["+l+"] to ["+o+"]")}else a.style[l]=o;e.velocity.debug>=2&&console.log("Set "+r+" ("+l+"): "+o)}return[l,o]},flushTransformCache:function(t){var a="",r,o;for(r in e.data(t,u).transformCache)o=e.data(t,u).transformCache[r],9===s&&"rotateZ"===r&&(r="rotate"),a+=r+o+" ";p.setPropertyValue(t,"transform",a)}};p.Hooks.register(),p.Normalizations.register(),e.fn.velocity=e.velocity.animate=function(){function t(){var t=this,n=e.extend({},e.fn.velocity.defaults,g),d={};if("stop"===y)return e.queue(t,"string"==typeof g?g:"",[]),!0;switch(e.data(t,u)===r&&e.data(t,u,{isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}}),n.duration.toString().toLowerCase()){case"fast":n.duration=200;break;case"normal":n.duration=400;break;case"slow":n.duration=600;break;default:n.duration=parseFloat(n.duration)||parseFloat(e.fn.velocity.defaults.duration)||400}e.easing[n.easing]||(n.easing=e.easing[e.fn.velocity.defaults.easing]?e.fn.velocity.defaults.easing:"swing"),/^\d/.test(n.delay)&&e.queue(t,n.queue,function(t){e.velocity.queueEntryFlag=!0,setTimeout(t,parseFloat(n.delay))}),n.display&&(n.display=n.display.toLowerCase()),n.mobileHA=n.mobileHA&&e.velocity.State.isMobile,e.queue(t,n.queue,function(f){function m(a){var o=r,l=r,s=r;return"[object Array]"===Object.prototype.toString.call(a)?(o=a[0],/^[\d-]/.test(a[1])||i(a[1])?s=a[1]:"string"==typeof a[1]&&(e.easing[a[1]]!==r&&(l=a[1]),a[2]&&(s=a[2]))):o=a,l=l||n.easing,i(o)&&(o=o.call(t,x,v)),i(s)&&(s=s.call(t,x,v)),[o||0,l,s]}function h(e,t){var a,r;return r=(t||0).toString().toLowerCase().replace(/[%A-z]+$/,function(e){return a=e,""}),a||(a=p.Values.getUnitType(e)),[r,a]}function V(){var r={parent:t.parentNode,position:p.getPropertyValue(t,"position"),fontSize:p.getPropertyValue(t,"fontSize")},o=r.position===P.lastPosition&&r.parent===P.lastParent,i=r.fontSize===P.lastFontSize;P.lastParent=r.parent,P.lastPosition=r.position,P.lastFontSize=r.fontSize,null===P.remToPxRatio&&(P.remToPxRatio=parseFloat(p.getPropertyValue(a.body,"fontSize"))||16);var l={overflowX:null,overflowY:null,boxSizing:null,width:null,minWidth:null,maxWidth:null,height:null,minHeight:null,maxHeight:null,paddingLeft:null},n={},s=10;n.remToPxRatio=P.remToPxRatio,l.overflowX=p.getPropertyValue(t,"overflowX"),l.overflowY=p.getPropertyValue(t,"overflowY"),l.boxSizing=p.getPropertyValue(t,"boxSizing"),l.width=p.getPropertyValue(t,"width",null,!0),l.minWidth=p.getPropertyValue(t,"minWidth"),l.maxWidth=p.getPropertyValue(t,"maxWidth")||"none",l.height=p.getPropertyValue(t,"height",null,!0),l.minHeight=p.getPropertyValue(t,"minHeight"),l.maxHeight=p.getPropertyValue(t,"maxHeight")||"none",l.paddingLeft=p.getPropertyValue(t,"paddingLeft"),o?(n.percentToPxRatioWidth=P.lastPercentToPxWidth,n.percentToPxRatioHeight=P.lastPercentToPxHeight):(p.setPropertyValue(t,"overflowX","hidden"),p.setPropertyValue(t,"overflowY","hidden"),p.setPropertyValue(t,"boxSizing","content-box"),p.setPropertyValue(t,"width",s+"%"),p.setPropertyValue(t,"minWidth",s+"%"),p.setPropertyValue(t,"maxWidth",s+"%"),p.setPropertyValue(t,"height",s+"%"),p.setPropertyValue(t,"minHeight",s+"%"),p.setPropertyValue(t,"maxHeight",s+"%")),i?n.emToPxRatio=P.lastEmToPx:p.setPropertyValue(t,"paddingLeft",s+"em"),o||(n.percentToPxRatioWidth=P.lastPercentToPxWidth=(parseFloat(p.getPropertyValue(t,"width",null,!0))||0)/s,n.percentToPxRatioHeight=P.lastPercentToPxHeight=(parseFloat(p.getPropertyValue(t,"height",null,!0))||0)/s),i||(n.emToPxRatio=P.lastEmToPx=(parseFloat(p.getPropertyValue(t,"paddingLeft"))||0)/s);for(var c in l)p.setPropertyValue(t,c,l[c]);return e.velocity.debug>=1&&console.log("Unit ratios: "+JSON.stringify(n),t),n}if(e.velocity.queueEntryFlag=!0,"scroll"===y){var S=e.velocity.State.scrollAnchor[e.velocity.State.scrollProperty],k=parseFloat(n.offset)||0;d={scroll:{rootPropertyValue:!1,startValue:S,currentValue:S,endValue:e(t).offset().top+k,unitType:"",easing:n.easing},element:t}}else if("reverse"===y){if(!e.data(t,u).tweensContainer)return void e.dequeue(t,n.queue);"none"===e.data(t,u).opts.display&&(e.data(t,u).opts.display="block"),e.data(t,u).opts.loop=!1,n=e.extend({},e.data(t,u).opts,g);var w=e.extend(!0,{},e.data(t,u).tweensContainer);for(var C in w)if("element"!==C){var T=w[C].startValue;w[C].startValue=w[C].currentValue=w[C].endValue,w[C].endValue=T,g&&(w[C].easing=n.easing)}d=w}else if("start"===y){var w;e.data(t,u).tweensContainer&&e.data(t,u).isAnimating===!0&&(w=e.data(t,u).tweensContainer);for(var H in c){H=p.Names.camelCase(H);var R=m(c[H]),z=R[0],N=R[1],A=R[2],E=p.Hooks.getRoot(H),q=!1;if(p.Names.prefixCheck(E)[1]!==!1||p.Normalizations.registered[E]!==r){n.display&&"none"!==n.display&&/opacity|filter/.test(H)&&!A&&0!==z&&(A=0),n._cacheValues&&w&&w[H]?(A=w[H].endValue+w[H].unitType,q=e.data(t,u).rootPropertyValueCache[E]):p.Hooks.registered[H]?A===r?(q=p.getPropertyValue(t,E),A=p.getPropertyValue(t,H,q)):q=p.Hooks.templates[E][1]:A===r&&(A=p.getPropertyValue(t,H));var F,M,j,W;F=h(H,A),A=F[0],j=F[1],F=h(H,z),z=F[0].replace(/^([+-\/*])=/,function(e,t){return W=t,""}),M=F[1],A=parseFloat(A)||0,z=parseFloat(z)||0;var $;if("%"===M&&(/^(fontSize|lineHeight)$/.test(H)?(z/=100,M="em"):/^scale/.test(H)?(z/=100,M=""):/(Red|Green|Blue)$/i.test(H)&&(z=z/100*255,M="")),/[\/*]/.test(W))M=j;else if(j!==M&&0!==A)if(0===z)M=j;else{$=$||V();var O=/margin|padding|left|right|width|text|word|letter/i.test(H)||/X$/.test(H)?"x":"y";switch(j){case"%":A*="x"===O?$.percentToPxRatioWidth:$.percentToPxRatioHeight;break;case"em":A*=$.emToPxRatio;break;case"rem":A*=$.remToPxRatio;break;case"px":}switch(M){case"%":A*=1/("x"===O?$.percentToPxRatioWidth:$.percentToPxRatioHeight);break;case"em":A*=1/$.emToPxRatio;break;case"rem":A*=1/$.remToPxRatio;break;case"px":}}switch(W){case"+":z=A+z;break;case"-":z=A-z;break;case"*":z=A*z;break;case"/":z=A/z}d[H]={rootPropertyValue:q,startValue:A,currentValue:A,endValue:z,unitType:M,easing:N},e.velocity.debug&&console.log("tweensContainer ("+H+"): "+JSON.stringify(d[H]),t)}else e.velocity.debug&&console.log("Skipping ["+E+"] due to a lack of browser support.")}d.element=t}d.element&&(b.push(d),e.data(t,u).tweensContainer=d,e.data(t,u).opts=n,e.data(t,u).isAnimating=!0,x===v-1?(e.velocity.State.calls.length>1e4&&(e.velocity.State.calls=o(e.velocity.State.calls)),e.velocity.State.calls.push([b,s,n]),e.velocity.State.isTicking===!1&&(e.velocity.State.isTicking=!0,l())):x++),""!==n.queue&&"fx"!==n.queue&&setTimeout(f,n.duration+n.delay)}),(n.queue===!1||(""===n.queue||"fx"===n.queue)&&"inprogress"!==e.queue(t)[0])&&e.dequeue(t)}var n,s,c,g,d,f;this.jquery?(n=!0,s=this,c=arguments[0],g=arguments[1]):(n=!1,s=arguments[0],c=arguments[1],g=arguments[2]);var y;switch(c){case"scroll":y="scroll";break;case"reverse":y="reverse";break;case"stop":y="stop";break;default:if(e.isPlainObject(c)&&!e.isEmptyObject(c))y="start";else{if("string"==typeof c&&e.velocity.Sequence[c])return e.velocity.Sequence[c].call(s,g);if("string"!=typeof c||!e.velocity.Classes.extracted[c])return e.velocity.debug&&console.log("First argument was not a property map, a CSS class reference, or a known action. Aborting."),s;c=e.velocity.Classes.extracted[c],y="start"}}if("stop"!==y&&"object"!=typeof g){var m=n?1:2;g={};for(var h=m;h<arguments.length;h++)/^\d/.test(arguments[h])?g.duration=parseFloat(arguments[h]):"string"==typeof arguments[h]?g.easing=arguments[h].replace(/^\s+|\s+$/g,""):i(arguments[h])&&(g.complete=arguments[h])}var v=s.length||1,x=0,P={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPxRatio:null},b=[];if(g&&!i(g.complete)&&(g.complete=null),n)s.each(t);else if(s.nodeType)t.call(s);else if(s[0]&&s[0].nodeType)for(var V in s)t.call(s[V]);var S=e.extend({},e.fn.velocity.defaults,g);if(S.loop=parseInt(S.loop),S.loop)for(var k=0;k<2*S.loop-1;k++)n?s.velocity("reverse",{delay:S.delay}):e.velocity.animate(s,"reverse",{delay:S.delay});return s}}(jQuery,window,document),jQuery.fn.velocity.defaults={queue:"",duration:400,easing:"swing",complete:null,display:null,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0};


/*-------------------------------------------------------------------- 
Scripts for creating and manipulating custom menus based on standard <ul> markup
Version: 3.0, 03.31.2009

By: Maggie Costello Wachs (maggie@filamentgroup.com) and Scott Jehl (scott@filamentgroup.com)
	http://www.filamentgroup.com
	* reference articles: http://www.filamentgroup.com/lab/jquery_ipod_style_drilldown_menu/
		
Copyright (c) 2009 Filament Group
Dual licensed under the MIT (filamentgroup.com/examples/mit-license.txt) and GPL (filamentgroup.com/examples/gpl-license.txt) licenses.
--------------------------------------------------------------------*/


(function($) {
  var NumberProgressBar = function(element, options) {
    var settings = $.extend ({
      duration: 10000,
      style: 'basic',
      min: 0,
      max: 100,
      current: 0,
      shownQuery: '.number-pb-shown',
      numQuery: '.number-pb-num'
    }, options || {});

    this.duration = settings.duration;
    if (settings.style == 'percentage') {
      this.style = 'percentage';
      this.min   = 0;
      this.max   = 100;
    } else if (settings.style == 'step') {
      this.style = 'step';
      this.min   = 0;
      this.max   = (settings.max > this.min) ? settings.max : 100;
    } else {
      this.style = 'basic';
      if (settings.min < settings.max) {
        this.min = settings.min;
        this.max = settings.max;
      } else {
        this.min = 0;
        this.max = 100;
      }
    }
    this.current = (settings.current >= this.min && settings.current <= this.max) ? settings.current : this.min;
    this.interval = this.max - this.min;
    this.last = this.min;
    this.$element = $(element);
    this.$shownBar = this.$element.find(settings.shownQuery);
    this.$num = this.$element.find(settings.numQuery);

    this.reach(this.current);
  }

  NumberProgressBar.prototype.calDestination = function(dest) {
    return (dest < this.min) ? this.min : ( (dest > this.max) ? this.max : dest )
  }

  NumberProgressBar.prototype.calDuration = function() {
    return this.duration * Math.abs(this.current - this.last) / this.interval;
  }

  NumberProgressBar.prototype.shuffle = function(callback) {
    var dest = Math.round(Math.random() * this.interval) + this.min;
    this.reach(dest, null, callback);
  }

  NumberProgressBar.prototype.calPercentage = function() {
    return (this.current - this.min) / this.interval * 100
  }

  NumberProgressBar.prototype.numStyle = function(num) {
    var n = Math.ceil(num);
    var s = "";
    switch (this.style) {
      case 'percentage': s = n + '%';            break;
      case 'step'      : s = n + '/' + this.max; break;
      default          : s = n;
    }
    return s;
  }

  NumberProgressBar.prototype.reach = function(dest, duration, callback) {
    this.current = this.calDestination(dest);
    this.moveShown(duration);
    this.moveNum(duration, callback);
    this.last = this.current;
  }

  NumberProgressBar.prototype.moveShown = function(duration) {
    this.$shownBar.velocity({
      width: this.calPercentage() + '%'
    }, {
      duration: duration || this.calDuration()
    })
  }

  NumberProgressBar.prototype.moveNum = function(duration, callback) {
    var self = this;
    var duration = duration || this.calDuration();

    this.$num.velocity({
      left: this.calPercentage() + '%'
    }, {
      duration: duration,
      complete: callback
    });

    // number
    $({num: this.last}).animate({
      num: this.current
    }, {
      queue: true,
      duration: duration,
      step: function() {
        self.$num.text(self.numStyle(this.num));
      },
      complete: function() {
        self.$num.text(self.numStyle(self.current));
      }
    })
  }

  $.fn.NumberProgressBar = function(options) {
    return this.each(function () {
      var element = $(this);
      if (element.data('number-pb')) return;
      element.data('number-pb', new NumberProgressBar(this, options));
    })
  }

  $.fn.reach = function(dest, options) {
    var settings = $.extend ({
      duration : null,
      complete : null
    }, options || {});
    return this.each(function() {
      var element = $(this);
      var progressbar = element.data('number-pb');
      if (!progressbar) return;
      if (typeof dest === "undefined") {
        progressbar.shuffle(settings.complete);
      } else {
        progressbar.reach(dest, settings.duration, settings.complete);
      }
    })
  }

})(jQuery);

;(function(){

/**
 * Require the given path.
 *
 * @param {String} path
 * @return {Object} exports
 * @api public
 */

function require(path, parent, orig) {
  var resolved = require.resolve(path);

  // lookup failed
  if (null == resolved) {
    orig = orig || path;
    parent = parent || 'root';
    var err = new Error('Failed to require "' + orig + '" from "' + parent + '"');
    err.path = orig;
    err.parent = parent;
    err.require = true;
    throw err;
  }

  var module = require.modules[resolved];

  // perform real require()
  // by invoking the module's
  // registered function
  if (!module._resolving && !module.exports) {
    var mod = {};
    mod.exports = {};
    mod.client = mod.component = true;
    module._resolving = true;
    module.call(this, mod.exports, require.relative(resolved), mod);
    delete module._resolving;
    module.exports = mod.exports;
  }

  return module.exports;
}

/**
 * Registered modules.
 */

require.modules = {};

/**
 * Registered aliases.
 */

require.aliases = {};

/**
 * Resolve `path`.
 *
 * Lookup:
 *
 *   - PATH/index.js
 *   - PATH.js
 *   - PATH
 *
 * @param {String} path
 * @return {String} path or null
 * @api private
 */

require.resolve = function(path) {
  if (path.charAt(0) === '/') path = path.slice(1);

  var paths = [
    path,
    path + '.js',
    path + '.json',
    path + '/index.js',
    path + '/index.json'
  ];

  for (var i = 0; i < paths.length; i++) {
    var path = paths[i];
    if (require.modules.hasOwnProperty(path)) return path;
    if (require.aliases.hasOwnProperty(path)) return require.aliases[path];
  }
};

/**
 * Normalize `path` relative to the current path.
 *
 * @param {String} curr
 * @param {String} path
 * @return {String}
 * @api private
 */

require.normalize = function(curr, path) {
  var segs = [];

  if ('.' != path.charAt(0)) return path;

  curr = curr.split('/');
  path = path.split('/');

  for (var i = 0; i < path.length; ++i) {
    if ('..' == path[i]) {
      curr.pop();
    } else if ('.' != path[i] && '' != path[i]) {
      segs.push(path[i]);
    }
  }

  return curr.concat(segs).join('/');
};

/**
 * Register module at `path` with callback `definition`.
 *
 * @param {String} path
 * @param {Function} definition
 * @api private
 */

require.register = function(path, definition) {
  require.modules[path] = definition;
};

/**
 * Alias a module definition.
 *
 * @param {String} from
 * @param {String} to
 * @api private
 */

require.alias = function(from, to) {
  if (!require.modules.hasOwnProperty(from)) {
    throw new Error('Failed to alias "' + from + '", it does not exist');
  }
  require.aliases[to] = from;
};

/**
 * Return a require function relative to the `parent` path.
 *
 * @param {String} parent
 * @return {Function}
 * @api private
 */

require.relative = function(parent) {
  var p = require.normalize(parent, '..');

  /**
   * lastIndexOf helper.
   */

  function lastIndexOf(arr, obj) {
    var i = arr.length;
    while (i--) {
      if (arr[i] === obj) return i;
    }
    return -1;
  }

  /**
   * The relative require() itself.
   */

  function localRequire(path) {
    var resolved = localRequire.resolve(path);
    return require(resolved, parent, path);
  }

  /**
   * Resolve relative to the parent.
   */

  localRequire.resolve = function(path) {
    var c = path.charAt(0);
    if ('/' == c) return path.slice(1);
    if ('.' == c) return require.normalize(p, path);

    // resolve deps by returning
    // the dep in the nearest "deps"
    // directory
    var segs = parent.split('/');
    var i = lastIndexOf(segs, 'deps') + 1;
    if (!i) i = 0;
    path = segs.slice(0, i + 1).join('/') + '/deps/' + path;
    return path;
  };

  /**
   * Check if module is defined at `path`.
   */

  localRequire.exists = function(path) {
    return require.modules.hasOwnProperty(localRequire.resolve(path));
  };

  return localRequire;
};
require.register("abpetkov-transitionize/transitionize.js", function(exports, require, module){

/**
 * Transitionize 0.0.3
 * https://github.com/abpetkov/transitionize
 *
 * Authored by Alexander Petkov
 * https://github.com/abpetkov
 *
 * Copyright 2013, Alexander Petkov
 * License: The MIT License (MIT)
 * http://opensource.org/licenses/MIT
 *
 */

/**
 * Expose `Transitionize`.
 */

module.exports = Transitionize;

/**
 * Initialize new Transitionize.
 *
 * @param {Object} element
 * @param {Object} props
 * @api public
 */

function Transitionize(element, props) {
  if (!(this instanceof Transitionize)) return new Transitionize(element, props);

  this.element = element;
  this.props = props || {};
  this.init();
}

/**
 * Detect if Safari.
 *
 * @returns {Boolean}
 * @api private
 */

Transitionize.prototype.isSafari = function() {
  return (/Safari/).test(navigator.userAgent) && (/Apple Computer/).test(navigator.vendor);
};

/**
 * Loop though the object and push the keys and values in an array.
 * Apply the CSS3 transition to the element and prefix with -webkit- for Safari.
 *
 * @api private
 */

Transitionize.prototype.init = function() {
  var transitions = [];

  for (var key in this.props) {
    transitions.push(key + ' ' + this.props[key]);
  }

  this.element.style.transition = transitions.join(', ');
  if (this.isSafari()) this.element.style.webkitTransition = transitions.join(', ');
};
});
require.register("ftlabs-fastclick/lib/fastclick.js", function(exports, require, module){
/**
 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
 *
 * @version 0.6.11
 * @codingstandard ftlabs-jsv2
 * @copyright The Financial Times Limited [All Rights Reserved]
 * @license MIT License (see LICENSE.txt)
 */

/*jslint browser:true, node:true*/
/*global define, Event, Node*/


/**
 * Instantiate fast-clicking listeners on the specificed layer.
 *
 * @constructor
 * @param {Element} layer The layer to listen on
 */
function FastClick(layer) {
	'use strict';
	var oldOnClick, self = this;


	/**
	 * Whether a click is currently being tracked.
	 *
	 * @type boolean
	 */
	this.trackingClick = false;


	/**
	 * Timestamp for when when click tracking started.
	 *
	 * @type number
	 */
	this.trackingClickStart = 0;


	/**
	 * The element being tracked for a click.
	 *
	 * @type EventTarget
	 */
	this.targetElement = null;


	/**
	 * X-coordinate of touch start event.
	 *
	 * @type number
	 */
	this.touchStartX = 0;


	/**
	 * Y-coordinate of touch start event.
	 *
	 * @type number
	 */
	this.touchStartY = 0;


	/**
	 * ID of the last touch, retrieved from Touch.identifier.
	 *
	 * @type number
	 */
	this.lastTouchIdentifier = 0;


	/**
	 * Touchmove boundary, beyond which a click will be cancelled.
	 *
	 * @type number
	 */
	this.touchBoundary = 10;


	/**
	 * The FastClick layer.
	 *
	 * @type Element
	 */
	this.layer = layer;

	if (!layer || !layer.nodeType) {
		throw new TypeError('Layer must be a document node');
	}

	/** @type function() */
	this.onClick = function() { return FastClick.prototype.onClick.apply(self, arguments); };

	/** @type function() */
	this.onMouse = function() { return FastClick.prototype.onMouse.apply(self, arguments); };

	/** @type function() */
	this.onTouchStart = function() { return FastClick.prototype.onTouchStart.apply(self, arguments); };

	/** @type function() */
	this.onTouchMove = function() { return FastClick.prototype.onTouchMove.apply(self, arguments); };

	/** @type function() */
	this.onTouchEnd = function() { return FastClick.prototype.onTouchEnd.apply(self, arguments); };

	/** @type function() */
	this.onTouchCancel = function() { return FastClick.prototype.onTouchCancel.apply(self, arguments); };

	if (FastClick.notNeeded(layer)) {
		return;
	}

	// Set up event handlers as required
	if (this.deviceIsAndroid) {
		layer.addEventListener('mouseover', this.onMouse, true);
		layer.addEventListener('mousedown', this.onMouse, true);
		layer.addEventListener('mouseup', this.onMouse, true);
	}

	layer.addEventListener('click', this.onClick, true);
	layer.addEventListener('touchstart', this.onTouchStart, false);
	layer.addEventListener('touchmove', this.onTouchMove, false);
	layer.addEventListener('touchend', this.onTouchEnd, false);
	layer.addEventListener('touchcancel', this.onTouchCancel, false);

	// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
	// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
	// layer when they are cancelled.
	if (!Event.prototype.stopImmediatePropagation) {
		layer.removeEventListener = function(type, callback, capture) {
			var rmv = Node.prototype.removeEventListener;
			if (type === 'click') {
				rmv.call(layer, type, callback.hijacked || callback, capture);
			} else {
				rmv.call(layer, type, callback, capture);
			}
		};

		layer.addEventListener = function(type, callback, capture) {
			var adv = Node.prototype.addEventListener;
			if (type === 'click') {
				adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
					if (!event.propagationStopped) {
						callback(event);
					}
				}), capture);
			} else {
				adv.call(layer, type, callback, capture);
			}
		};
	}

	// If a handler is already declared in the element's onclick attribute, it will be fired before
	// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
	// adding it as listener.
	if (typeof layer.onclick === 'function') {

		// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
		// - the old one won't work if passed to addEventListener directly.
		oldOnClick = layer.onclick;
		layer.addEventListener('click', function(event) {
			oldOnClick(event);
		}, false);
		layer.onclick = null;
	}
}


/**
 * Android requires exceptions.
 *
 * @type boolean
 */
FastClick.prototype.deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0;


/**
 * iOS requires exceptions.
 *
 * @type boolean
 */
FastClick.prototype.deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent);


/**
 * iOS 4 requires an exception for select elements.
 *
 * @type boolean
 */
FastClick.prototype.deviceIsIOS4 = FastClick.prototype.deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


/**
 * iOS 6.0(+?) requires the target element to be manually derived
 *
 * @type boolean
 */
FastClick.prototype.deviceIsIOSWithBadTarget = FastClick.prototype.deviceIsIOS && (/OS ([6-9]|\d{2})_\d/).test(navigator.userAgent);


/**
 * Determine whether a given element requires a native click.
 *
 * @param {EventTarget|Element} target Target DOM element
 * @returns {boolean} Returns true if the element needs a native click
 */
FastClick.prototype.needsClick = function(target) {
	'use strict';
	switch (target.nodeName.toLowerCase()) {

	// Don't send a synthetic click to disabled inputs (issue #62)
	case 'button':
	case 'select':
	case 'textarea':
		if (target.disabled) {
			return true;
		}

		break;
	case 'input':

		// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
		if ((this.deviceIsIOS && target.type === 'file') || target.disabled) {
			return true;
		}

		break;
	case 'label':
	case 'video':
		return true;
	}

	return (/\bneedsclick\b/).test(target.className);
};


/**
 * Determine whether a given element requires a call to focus to simulate click into element.
 *
 * @param {EventTarget|Element} target Target DOM element
 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
 */
FastClick.prototype.needsFocus = function(target) {
	'use strict';
	switch (target.nodeName.toLowerCase()) {
	case 'textarea':
		return true;
	case 'select':
		return !this.deviceIsAndroid;
	case 'input':
		switch (target.type) {
		case 'button':
		case 'checkbox':
		case 'file':
		case 'image':
		case 'radio':
		case 'submit':
			return false;
		}

		// No point in attempting to focus disabled inputs
		return !target.disabled && !target.readOnly;
	default:
		return (/\bneedsfocus\b/).test(target.className);
	}
};


/**
 * Send a click event to the specified element.
 *
 * @param {EventTarget|Element} targetElement
 * @param {Event} event
 */
FastClick.prototype.sendClick = function(targetElement, event) {
	'use strict';
	var clickEvent, touch;

	// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
	if (document.activeElement && document.activeElement !== targetElement) {
		document.activeElement.blur();
	}

	touch = event.changedTouches[0];

	// Synthesise a click event, with an extra attribute so it can be tracked
	clickEvent = document.createEvent('MouseEvents');
	clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
	clickEvent.forwardedTouchEvent = true;
	targetElement.dispatchEvent(clickEvent);
};

FastClick.prototype.determineEventType = function(targetElement) {
	'use strict';

	//Issue #159: Android Chrome Select Box does not open with a synthetic click event
	if (this.deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
		return 'mousedown';
	}

	return 'click';
};


/**
 * @param {EventTarget|Element} targetElement
 */
FastClick.prototype.focus = function(targetElement) {
	'use strict';
	var length;

	// Issue #160: on iOS 7, some input elements (e.g. date datetime) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
	if (this.deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time') {
		length = targetElement.value.length;
		targetElement.setSelectionRange(length, length);
	} else {
		targetElement.focus();
	}
};


/**
 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
 *
 * @param {EventTarget|Element} targetElement
 */
FastClick.prototype.updateScrollParent = function(targetElement) {
	'use strict';
	var scrollParent, parentElement;

	scrollParent = targetElement.fastClickScrollParent;

	// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
	// target element was moved to another parent.
	if (!scrollParent || !scrollParent.contains(targetElement)) {
		parentElement = targetElement;
		do {
			if (parentElement.scrollHeight > parentElement.offsetHeight) {
				scrollParent = parentElement;
				targetElement.fastClickScrollParent = parentElement;
				break;
			}

			parentElement = parentElement.parentElement;
		} while (parentElement);
	}

	// Always update the scroll top tracker if possible.
	if (scrollParent) {
		scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
	}
};


/**
 * @param {EventTarget} targetElement
 * @returns {Element|EventTarget}
 */
FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {
	'use strict';

	// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
	if (eventTarget.nodeType === Node.TEXT_NODE) {
		return eventTarget.parentNode;
	}

	return eventTarget;
};


/**
 * On touch start, record the position and scroll offset.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onTouchStart = function(event) {
	'use strict';
	var targetElement, touch, selection;

	// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
	if (event.targetTouches.length > 1) {
		return true;
	}

	targetElement = this.getTargetElementFromEventTarget(event.target);
	touch = event.targetTouches[0];

	if (this.deviceIsIOS) {

		// Only trusted events will deselect text on iOS (issue #49)
		selection = window.getSelection();
		if (selection.rangeCount && !selection.isCollapsed) {
			return true;
		}

		if (!this.deviceIsIOS4) {

			// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
			// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
			// with the same identifier as the touch event that previously triggered the click that triggered the alert.
			// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
			// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
			if (touch.identifier === this.lastTouchIdentifier) {
				event.preventDefault();
				return false;
			}

			this.lastTouchIdentifier = touch.identifier;

			// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
			// 1) the user does a fling scroll on the scrollable layer
			// 2) the user stops the fling scroll with another tap
			// then the event.target of the last 'touchend' event will be the element that was under the user's finger
			// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
			// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
			this.updateScrollParent(targetElement);
		}
	}

	this.trackingClick = true;
	this.trackingClickStart = event.timeStamp;
	this.targetElement = targetElement;

	this.touchStartX = touch.pageX;
	this.touchStartY = touch.pageY;

	// Prevent phantom clicks on fast double-tap (issue #36)
	if ((event.timeStamp - this.lastClickTime) < 200) {
		event.preventDefault();
	}

	return true;
};


/**
 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.touchHasMoved = function(event) {
	'use strict';
	var touch = event.changedTouches[0], boundary = this.touchBoundary;

	if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
		return true;
	}

	return false;
};


/**
 * Update the last position.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onTouchMove = function(event) {
	'use strict';
	if (!this.trackingClick) {
		return true;
	}

	// If the touch has moved, cancel the click tracking
	if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
		this.trackingClick = false;
		this.targetElement = null;
	}

	return true;
};


/**
 * Attempt to find the labelled control for the given label element.
 *
 * @param {EventTarget|HTMLLabelElement} labelElement
 * @returns {Element|null}
 */
FastClick.prototype.findControl = function(labelElement) {
	'use strict';

	// Fast path for newer browsers supporting the HTML5 control attribute
	if (labelElement.control !== undefined) {
		return labelElement.control;
	}

	// All browsers under test that support touch events also support the HTML5 htmlFor attribute
	if (labelElement.htmlFor) {
		return document.getElementById(labelElement.htmlFor);
	}

	// If no for attribute exists, attempt to retrieve the first labellable descendant element
	// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
	return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
};


/**
 * On touch end, determine whether to send a click event at once.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onTouchEnd = function(event) {
	'use strict';
	var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

	if (!this.trackingClick) {
		return true;
	}

	// Prevent phantom clicks on fast double-tap (issue #36)
	if ((event.timeStamp - this.lastClickTime) < 200) {
		this.cancelNextClick = true;
		return true;
	}

	// Reset to prevent wrong click cancel on input (issue #156).
	this.cancelNextClick = false;

	this.lastClickTime = event.timeStamp;

	trackingClickStart = this.trackingClickStart;
	this.trackingClick = false;
	this.trackingClickStart = 0;

	// On some iOS devices, the targetElement supplied with the event is invalid if the layer
	// is performing a transition or scroll, and has to be re-detected manually. Note that
	// for this to function correctly, it must be called *after* the event target is checked!
	// See issue #57; also filed as rdar://13048589 .
	if (this.deviceIsIOSWithBadTarget) {
		touch = event.changedTouches[0];

		// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
		targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
		targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
	}

	targetTagName = targetElement.tagName.toLowerCase();
	if (targetTagName === 'label') {
		forElement = this.findControl(targetElement);
		if (forElement) {
			this.focus(targetElement);
			if (this.deviceIsAndroid) {
				return false;
			}

			targetElement = forElement;
		}
	} else if (this.needsFocus(targetElement)) {

		// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
		// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
		if ((event.timeStamp - trackingClickStart) > 100 || (this.deviceIsIOS && window.top !== window && targetTagName === 'input')) {
			this.targetElement = null;
			return false;
		}

		this.focus(targetElement);

		// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
		if (!this.deviceIsIOS4 || targetTagName !== 'select') {
			this.targetElement = null;
			event.preventDefault();
		}

		return false;
	}

	if (this.deviceIsIOS && !this.deviceIsIOS4) {

		// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
		// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
		scrollParent = targetElement.fastClickScrollParent;
		if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
			return true;
		}
	}

	// Prevent the actual click from going though - unless the target node is marked as requiring
	// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
	if (!this.needsClick(targetElement)) {
		event.preventDefault();
		this.sendClick(targetElement, event);
	}

	return false;
};


/**
 * On touch cancel, stop tracking the click.
 *
 * @returns {void}
 */
FastClick.prototype.onTouchCancel = function() {
	'use strict';
	this.trackingClick = false;
	this.targetElement = null;
};


/**
 * Determine mouse events which should be permitted.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onMouse = function(event) {
	'use strict';

	// If a target element was never set (because a touch event was never fired) allow the event
	if (!this.targetElement) {
		return true;
	}

	if (event.forwardedTouchEvent) {
		return true;
	}

	// Programmatically generated events targeting a specific element should be permitted
	if (!event.cancelable) {
		return true;
	}

	// Derive and check the target element to see whether the mouse event needs to be permitted;
	// unless explicitly enabled, prevent non-touch click events from triggering actions,
	// to prevent ghost/doubleclicks.
	if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

		// Prevent any user-added listeners declared on FastClick element from being fired.
		if (event.stopImmediatePropagation) {
			event.stopImmediatePropagation();
		} else {

			// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
			event.propagationStopped = true;
		}

		// Cancel the event
		event.stopPropagation();
		event.preventDefault();

		return false;
	}

	// If the mouse event is permitted, return true for the action to go through.
	return true;
};


/**
 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
 * an actual click which should be permitted.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onClick = function(event) {
	'use strict';
	var permitted;

	// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
	if (this.trackingClick) {
		this.targetElement = null;
		this.trackingClick = false;
		return true;
	}

	// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
	if (event.target.type === 'submit' && event.detail === 0) {
		return true;
	}

	permitted = this.onMouse(event);

	// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
	if (!permitted) {
		this.targetElement = null;
	}

	// If clicks are permitted, return true for the action to go through.
	return permitted;
};


/**
 * Remove all FastClick's event listeners.
 *
 * @returns {void}
 */
FastClick.prototype.destroy = function() {
	'use strict';
	var layer = this.layer;

	if (this.deviceIsAndroid) {
		layer.removeEventListener('mouseover', this.onMouse, true);
		layer.removeEventListener('mousedown', this.onMouse, true);
		layer.removeEventListener('mouseup', this.onMouse, true);
	}

	layer.removeEventListener('click', this.onClick, true);
	layer.removeEventListener('touchstart', this.onTouchStart, false);
	layer.removeEventListener('touchmove', this.onTouchMove, false);
	layer.removeEventListener('touchend', this.onTouchEnd, false);
	layer.removeEventListener('touchcancel', this.onTouchCancel, false);
};


/**
 * Check whether FastClick is needed.
 *
 * @param {Element} layer The layer to listen on
 */
FastClick.notNeeded = function(layer) {
	'use strict';
	var metaViewport;
	var chromeVersion;

	// Devices that don't support touch don't need FastClick
	if (typeof window.ontouchstart === 'undefined') {
		return true;
	}

	// Chrome version - zero for other browsers
	chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

	if (chromeVersion) {

		if (FastClick.prototype.deviceIsAndroid) {
			metaViewport = document.querySelector('meta[name=viewport]');
			
			if (metaViewport) {
				// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
				if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
					return true;
				}
				// Chrome 32 and above with width=device-width or less don't need FastClick
				if (chromeVersion > 31 && window.innerWidth <= window.screen.width) {
					return true;
				}
			}

		// Chrome desktop doesn't need FastClick (issue #15)
		} else {
			return true;
		}
	}

	// IE10 with -ms-touch-action: none, which disables double-tap-to-zoom (issue #97)
	if (layer.style.msTouchAction === 'none') {
		return true;
	}

	return false;
};


/**
 * Factory method for creating a FastClick object
 *
 * @param {Element} layer The layer to listen on
 */
FastClick.attach = function(layer) {
	'use strict';
	return new FastClick(layer);
};


if (typeof define !== 'undefined' && define.amd) {

	// AMD. Register as an anonymous module.
	define(function() {
		'use strict';
		return FastClick;
	});
} else if (typeof module !== 'undefined' && module.exports) {
	module.exports = FastClick.attach;
	module.exports.FastClick = FastClick;
} else {
	window.FastClick = FastClick;
}

});
require.register("switchery/switchery.js", function(exports, require, module){
/**
 * Switchery 0.6.1
 * http://abpetkov.github.io/switchery/
 *
 * Authored by Alexander Petkov
 * https://github.com/abpetkov
 *
 * Copyright 2013-2014, Alexander Petkov
 * License: The MIT License (MIT)
 * http://opensource.org/licenses/MIT
 *
 */

/**
 * External dependencies.
 */

var transitionize = require('transitionize')
  , fastclick = require('fastclick');

/**
 * Expose `Switchery`.
 */

module.exports = Switchery;

/**
 * Set Switchery default values.
 *
 * @api public
 */

var defaults = {
    color          : '#64bd63'
  , secondaryColor : '#dfdfdf'
  , className      : 'switchery'
  , disabled       : false
  , disabledOpacity: 0.5
  , speed          : '0.4s'
};

/**
 * Create Switchery object.
 *
 * @param {Object} element
 * @param {Object} options
 * @api public
 */

function Switchery(element, options) {
  if (!(this instanceof Switchery)) return new Switchery(element, options);

  this.element = element;
  this.options = options || {};

  for (var i in defaults) {
    if (this.options[i] == null) {
      this.options[i] = defaults[i];
    }
  }

  if (this.element != null && this.element.type == 'checkbox') this.init();
}

/**
 * Hide the target element.
 *
 * @api private
 */

Switchery.prototype.hide = function() {
  this.element.style.display = 'none';
};

/**
 * Show custom switch after the target element.
 *
 * @api private
 */

Switchery.prototype.show = function() {
  var switcher = this.create();
  this.insertAfter(this.element, switcher);
};

/**
 * Create custom switch.
 *
 * @returns {Object} this.switcher
 * @api private
 */

Switchery.prototype.create = function() {
  this.switcher = document.createElement('span');
  this.jack = document.createElement('small');
  this.switcher.appendChild(this.jack);
  this.switcher.className = this.options.className;

  return this.switcher;
};

/**
 * Insert after element after another element.
 *
 * @param {Object} reference
 * @param {Object} target
 * @api private
 */

Switchery.prototype.insertAfter = function(reference, target) {
  reference.parentNode.insertBefore(target, reference.nextSibling);
};

/**
 * See if input is checked.
 *
 * @returns {Boolean}
 * @api private
 */

Switchery.prototype.isChecked = function() {
  return this.element.checked;
};

/**
 * See if switcher should be disabled.
 *
 * @returns {Boolean}
 * @api private
 */

Switchery.prototype.isDisabled = function() {
  return this.options.disabled || this.element.disabled;
};

/**
 * Set switch jack proper position.
 *
 * @param {Boolean} clicked - we need this in order to uncheck the input when the switch is clicked
 * @api private
 */

Switchery.prototype.setPosition = function (clicked) {
  var checked = this.isChecked()
    , switcher = this.switcher
    , jack = this.jack;

  if (clicked && checked) checked = false;
  else if (clicked && !checked) checked = true;

  if (checked === true) {
    this.element.checked = true;

    if (window.getComputedStyle) jack.style.left = parseInt(window.getComputedStyle(switcher).width) - parseInt(window.getComputedStyle(jack).width) + 'px';
    else jack.style.left = parseInt(switcher.currentStyle['width']) - parseInt(jack.currentStyle['width']) + 'px';

    if (this.options.color) this.colorize();
    this.setSpeed();
  } else {
    jack.style.left = 0;
    this.element.checked = false;
    this.switcher.style.boxShadow = 'inset 0 0 0 0 ' + this.options.secondaryColor;
    this.switcher.style.borderColor = this.options.secondaryColor;
    this.switcher.style.backgroundColor = (this.options.secondaryColor !== defaults.secondaryColor) ? this.options.secondaryColor : '#fff';
    this.setSpeed();
  }
};

/**
 * Set speed.
 *
 * @api private
 */

Switchery.prototype.setSpeed = function() {
  var switcherProp = {}
    , jackProp = { 'left': this.options.speed.replace(/[a-z]/, '') / 2 + 's' };

  if (this.isChecked()) {
    switcherProp = {
        'border': this.options.speed
      , 'box-shadow': this.options.speed
      , 'background-color': this.options.speed.replace(/[a-z]/, '') * 3 + 's'
    };
  } else {
    switcherProp = {
        'border': this.options.speed
      , 'box-shadow': this.options.speed
    };
  }

  transitionize(this.switcher, switcherProp);
  transitionize(this.jack, jackProp);
};

/**
 * Set switch color.
 *
 * @api private
 */

Switchery.prototype.colorize = function() {
  this.switcher.style.backgroundColor = this.options.color;
  this.switcher.style.borderColor = this.options.color;
  this.switcher.style.boxShadow = 'inset 0 0 0 16px ' + this.options.color;
};

/**
 * Handle the onchange event.
 *
 * @param {Boolean} state
 * @api private
 */

Switchery.prototype.handleOnchange = function(state) {
  if (typeof Event === 'function' || !document.fireEvent) {
    var event = document.createEvent('HTMLEvents');
    event.initEvent('change', true, true);
    this.element.dispatchEvent(event);
  } else {
    this.element.fireEvent('onchange');
  }
};

/**
 * Handle the native input element state change.
 * A `change` event must be fired in order to detect the change.
 *
 * @api private
 */

Switchery.prototype.handleChange = function() {
  var self = this
    , el = this.element;

  if (el.addEventListener) {
    el.addEventListener('change', function() {
      self.setPosition();
    });
  } else {
    el.attachEvent('onchange', function() {
      self.setPosition();
    });
  }
};

/**
 * Handle the switch click event.
 *
 * @api private
 */

Switchery.prototype.handleClick = function() {
  var self = this
    , switcher = this.switcher
    , parent = self.element.parentNode.tagName.toLowerCase()
    , labelParent = (parent === 'label') ? false : true;

  if (this.isDisabled() === false) {
    fastclick(switcher);

    if (switcher.addEventListener) {
      switcher.addEventListener('click', function() {
        self.setPosition(labelParent);
        self.handleOnchange(self.element.checked);
      });
    } else {
      switcher.attachEvent('onclick', function() {
        self.setPosition(labelParent);
        self.handleOnchange(self.element.checked);
      });
    }
  } else {
    this.element.disabled = true;
    this.switcher.style.opacity = this.options.disabledOpacity;
  }
};

/**
 * Mark an individual switch as already handled.
 *
 * @api private
 */

Switchery.prototype.markAsSwitched = function() {
  this.element.setAttribute('data-switchery', true);
};

/**
 * Check if an individual switch is already handled.
 *
 * @api private
 */

Switchery.prototype.markedAsSwitched = function() {
  return this.element.getAttribute('data-switchery');
};

/**
 * Initialize Switchery.
 *
 * @api private
 */

Switchery.prototype.init = function() {
  this.hide();
  this.show();
  this.setPosition();
  this.markAsSwitched();
  this.handleChange();
  this.handleClick();
};

});




require.alias("abpetkov-transitionize/transitionize.js", "switchery/deps/transitionize/transitionize.js");
require.alias("abpetkov-transitionize/transitionize.js", "switchery/deps/transitionize/index.js");
require.alias("abpetkov-transitionize/transitionize.js", "transitionize/index.js");
require.alias("abpetkov-transitionize/transitionize.js", "abpetkov-transitionize/index.js");
require.alias("ftlabs-fastclick/lib/fastclick.js", "switchery/deps/fastclick/lib/fastclick.js");
require.alias("ftlabs-fastclick/lib/fastclick.js", "switchery/deps/fastclick/index.js");
require.alias("ftlabs-fastclick/lib/fastclick.js", "fastclick/index.js");
require.alias("ftlabs-fastclick/lib/fastclick.js", "ftlabs-fastclick/index.js");
require.alias("switchery/switchery.js", "switchery/index.js");if (typeof exports == "object") {
  module.exports = require("switchery");
} else if (typeof define == "function" && define.amd) {
  define(function(){ return require("switchery"); });
} else {
  this["Switchery"] = require("switchery");
}})();


$.fn.menu = function(options){
	var caller = this;
	var options = options;
	var m = new Menu(caller, options);	
	allUIMenus.push(m);
	
	$(this)
	.mousedown(function(){
		if (!m.menuOpen) { m.showLoading(); };
	})	
	.click(function(){
		if (m.menuOpen == false) { m.showMenu(); }
		else { m.kill(); };
		return false;
	});	
};

function Menu(caller, options){
	var menu = this;
	var caller = $(caller);
	var container = $('<div class="fg-menu-container ui-widget ui-widget-content ui-corner-all">'+options.content+'</div>');
	
	this.menuOpen = false;
	this.menuExists = false;
	
	var options = jQuery.extend({
		content: null,
		width: 180, // width of menu container, must be set or passed in to calculate widths of child menus
		maxHeight: 180, // max height of menu (if a drilldown: height does not include breadcrumb)
		positionOpts: {
			posX: 'left', 
			posY: 'bottom',
			offsetX: 0,
			offsetY: 0,
			directionH: 'right',
			directionV: 'up', 
			detectH: true, // do horizontal collision detection  
			detectV: true, // do vertical collision detection
			linkToFront: false
		},
		showSpeed: 200, // show/hide speed in milliseconds
		callerOnState: 'ui-state-active', // class to change the appearance of the link/button when the menu is showing
		loadingState: 'ui-state-loading', // class added to the link/button while the menu is created
		linkHover: 'ui-state-hover', // class for menu option hover state
		linkHoverSecondary: 'li-hover', // alternate class, may be used for multi-level menus		
	// ----- multi-level menu defaults -----
		crossSpeed: 200, // cross-fade speed for multi-level menus
		crumbDefaultText: 'Choose an option:',
		backLink: true, // in the ipod-style menu: instead of breadcrumbs, show only a 'back' link
		backLinkText: 'Back',
		flyOut: false, // multi-level menus are ipod-style by default; this parameter overrides to make a flyout instead
		flyOutOnState: 'ui-state-default',
		nextMenuLink: 'ui-icon-triangle-1-e', // class to style the link (specifically, a span within the link) used in the multi-level menu to show the next level
		topLinkText: 'All',
		nextCrumbLink: 'ui-icon-carat-1-e'	
	}, options);
	
	var killAllMenus = function(){
		$.each(allUIMenus, function(i){
			if (allUIMenus[i].menuOpen) { allUIMenus[i].kill(); };	
		});
	};
	
	this.kill = function(){
		caller
			.removeClass(options.loadingState)
			.removeClass('fg-menu-open')
			.removeClass(options.callerOnState);	
		container.find('li').removeClass(options.linkHoverSecondary).find('a').removeClass(options.linkHover);		
		if (options.flyOutOnState) { container.find('li a').removeClass(options.flyOutOnState); };	
		if (options.callerOnState) { 	caller.removeClass(options.callerOnState); };			
		if (container.is('.fg-menu-ipod')) { menu.resetDrilldownMenu(); };
		if (container.is('.fg-menu-flyout')) { menu.resetFlyoutMenu(); };	
		container.parent().hide();	
		menu.menuOpen = false;
		$(document).unbind('click', killAllMenus);
		$(document).unbind('keydown');
	};
	
	this.showLoading = function(){
		caller.addClass(options.loadingState);
	};

	this.showMenu = function(){
		
		// $('.dynamic-smile').attr('src', 'smile'+(Math.floor(Math.random() * 6) + 1)+'.gif')

		killAllMenus();
		if (!menu.menuExists) { menu.create() };
		caller
			.addClass('fg-menu-open')
			.addClass(options.callerOnState);
		container.parent().show().click(function(){ menu.kill(); return false; });
		container.hide().slideDown(options.showSpeed).find('.fg-menu:eq(0)');
		menu.menuOpen = true;
		caller.removeClass(options.loadingState);
		$(document).click(killAllMenus);
		
		// assign key events
		$(document).keydown(function(event){
			var e;
			if (event.which !="") { e = event.which; }
			else if (event.charCode != "") { e = event.charCode; }
			else if (event.keyCode != "") { e = event.keyCode; }
			
			var menuType = ($(event.target).parents('div').is('.fg-menu-flyout')) ? 'flyout' : 'ipod' ;
			
			switch(e) {
				case 37: // left arrow 
					if (menuType == 'flyout') {
						$(event.target).trigger('mouseout');
						if ($('.'+options.flyOutOnState).size() > 0) { $('.'+options.flyOutOnState).trigger('mouseover'); };
					};
					
					if (menuType == 'ipod') {
						$(event.target).trigger('mouseout');
						if ($('.fg-menu-footer').find('a').size() > 0) { $('.fg-menu-footer').find('a').trigger('click'); };
						if ($('.fg-menu-header').find('a').size() > 0) { $('.fg-menu-current-crumb').prev().find('a').trigger('click'); };
						if ($('.fg-menu-current').prev().is('.fg-menu-indicator')) {
							$('.fg-menu-current').prev().trigger('mouseover');							
						};						
					};
					return false;
					break;
					
				case 38: // up arrow 
					if ($(event.target).is('.' + options.linkHover)) {	
						var prevLink = $(event.target).parent().prev().find('a:eq(0)');						
						if (prevLink.size() > 0) {
							$(event.target).trigger('mouseout');
							prevLink.trigger('mouseover');
						};						
					}
					else { container.find('a:eq(0)').trigger('mouseover'); }
					return false;
					break;
					
				case 39: // right arrow 
					if ($(event.target).is('.fg-menu-indicator')) {						
						if (menuType == 'flyout') {
							$(event.target).next().find('a:eq(0)').trigger('mouseover');
						}
						else if (menuType == 'ipod') {
							$(event.target).trigger('click');						
							setTimeout(function(){
								$(event.target).next().find('a:eq(0)').trigger('mouseover');
							}, options.crossSpeed);
						};				
					}; 
					return false;
					break;
					
				case 40: // down arrow 
					if ($(event.target).is('.' + options.linkHover)) {
						var nextLink = $(event.target).parent().next().find('a:eq(0)');						
						if (nextLink.size() > 0) {							
							$(event.target).trigger('mouseout');
							nextLink.trigger('mouseover');
						};				
					}
					else { container.find('a:eq(0)').trigger('mouseover'); }		
					return false;						
					break;
					
				case 27: // escape
					killAllMenus();
					break;
					
				case 13: // enter
					if ($(event.target).is('.fg-menu-indicator') && menuType == 'ipod') {							
						$(event.target).trigger('click');						
						setTimeout(function(){
							$(event.target).next().find('a:eq(0)').trigger('mouseover');
						}, options.crossSpeed);					
					}; 
					break;
			};			
		});
	};
	
	this.create = function(){	
		container.css({ width: options.width }).appendTo('body').find('ul:first').not('.fg-menu-breadcrumb').addClass('fg-menu');
		container.find('ul, li a').addClass('ui-corner-all');
		
		// aria roles & attributes
		container.find('ul').attr('role', 'menu').eq(0).attr('aria-activedescendant','active-menuitem').attr('aria-labelledby', caller.attr('id'));
		container.find('li').attr('role', 'menuitem');
		container.find('li:has(ul)').attr('aria-haspopup', 'true').find('ul').attr('aria-expanded', 'false');
		container.find('a').attr('tabindex', '-1');
		
		// when there are multiple levels of hierarchy, create flyout or drilldown menu
		if (container.find('ul').size() > 1) {
			if (options.flyOut) { menu.flyout(container, options); }
			else { menu.drilldown(container, options); }	
		}
		else {
			container.find('a').click(function(){
				menu.chooseItem(this);
				return false;
			});
		};	
		
		if (options.linkHover) {
			var allLinks = container.find('.fg-menu li a');
			allLinks.hover(
				function(){
					var menuitem = $(this);
					$('.'+options.linkHover).removeClass(options.linkHover).blur().parent().removeAttr('id');
					$(this).addClass(options.linkHover).focus().parent().attr('id','active-menuitem');
				},
				function(){
					$(this).removeClass(options.linkHover).blur().parent().removeAttr('id');
				}
			);
		};
		
		if (options.linkHoverSecondary) {
			container.find('.fg-menu li').hover(
				function(){
					$(this).siblings('li').removeClass(options.linkHoverSecondary);
					if (options.flyOutOnState) { $(this).siblings('li').find('a').removeClass(options.flyOutOnState); }
					$(this).addClass(options.linkHoverSecondary);
				},
				function(){ $(this).removeClass(options.linkHoverSecondary); }
			);
		};	
		
		menu.setPosition(container, caller, options);
		menu.menuExists = true;
	};
	
	this.chooseItem = function(item){
		menu.kill();
		// menu_clicked
		// edit this for your own custom function/callback:
		// $('#menuSelection').text($(item).text());	
		// location.href = $(item).attr('href');
		console.log($(item).data("id"));

		if($(item).data("id")=="modal_help") {
			//window.open("","SHARE ",'scrollbars=1,height=650,width=650');
			
			var clipboard = new Clipboard('.clipbtn');
			
		    // window.close();

		}


		if($(item).data("id")=="modal_share") {
			//window.open("","SHARE ",'scrollbars=1,height=650,width=650');
		
			var a = document.createElement("a");
		    a.target = "_blank";
		    a.href = "https://www.facebook.com/sharer/sharer.php?u=https://chrome.google.com/webstore/detail/sticky-notes-just-popped/plpdjbappofmfbgdmhoaabefbobddchk";
		    a.click();
		    window.close();

		}

		if(($(item).data("id")=="modal_panel")||(($(item).data("id")=="modal_panel_bottom"))) {
			//window.open("","SHARE ",'scrollbars=1,height=650,width=650');
			if (_ISPANELTHERE) {

				panelOPEN();
			} else {
				checkPanelIfElse();
			}
		}

		function checkPanelIfElse() {
			var _isPanelEnabled;
			var _isPanelEnabledQueue = [];
			function getPanelFlagState(callback) {
			    if (typeof callback != 'function') throw Error('callback function required');
			    if (typeof _isPanelEnabled == 'boolean') {
			        callback(_isPanelEnabled); // Use cached result
			        return;
			    }
			    _isPanelEnabledQueue.push(callback);

			    if (_isPanelEnabled == 'checking')
			        return;

			    _isPanelEnabled = 'checking';
			    chrome.windows.create({
			        url: 'about:blank',
			        type: 'panel'
			    }, function(windowInfo) {
			        _isPanelEnabled = windowInfo.alwaysOnTop;
			        chrome.windows.remove(windowInfo.id);

			        // Handle all queued callbacks
			        while (callback = _isPanelEnabledQueue.shift()) {
			            callback(windowInfo.alwaysOnTop);
			        }
			    });
			}
			// Usage:
			getPanelFlagState(function(isEnabled) {
			    console.log('Panels are ' + isEnabled);

			    if (!isEnabled) {
			    	DEBUG_TRACKING(["_trackEvent", "Panel", window._APP_VERSION, "disabled"]);
			    	var a = document.createElement("a");
				    a.target = "_blank";
				    a.href = "panel.html";
				    a.click();
				    window.close();
			    } else {
			    	// chrome.windows.create({ url: 'index.html',Â width:Â 300,Â height:Â 400, type: 'panel' });
			    	panelOPEN();
			    	_ISPANELTHERE = 1;
			    }
			});
		}



		if($(item).data("id")=="modal_popout") {
			
			chrome.extension.sendMessage({directive: "openAWindow"}, function(response) {
			});
			window.close();
		}
		

		//load_settings();

		myModal = $('#myModal').jBox('Modal', {
		    content: $("#"+$(item).data("id"))
		});

		if($(item).data("id")=="modal_sync") {
			window.correct_switch();
		}

		myModal.open();
		

		if($(item).data("id")=="modal_sync") {
			window.correct_switch();
		}

		DEBUG_TRACKING(["_trackEvent", "Usage", window._APP_VERSION, "6 Sec New"]);


		DEBUG_TRACKING(["_trackEvent", "Settings", "OpenModal", $(item).data("id"), getTimeForTracking("default")]);

	};
};

Menu.prototype.flyout = function(container, options) {
	var menu = this;
	
	this.resetFlyoutMenu = function(){
		var allLists = container.find('ul ul');
		allLists.removeClass('ui-widget-content').hide();	
	};
	
	container.addClass('fg-menu-flyout').find('li:has(ul)').each(function(){
		var linkWidth = container.width();
		var showTimer, hideTimer;
		var allSubLists = $(this).find('ul');		
		
		allSubLists.css({ left: linkWidth, width: linkWidth }).hide();
			
		$(this).find('a:eq(0)').addClass('fg-menu-indicator').html('<span>' + $(this).find('a:eq(0)').text() + '</span><span class="ui-icon '+options.nextMenuLink+'"></span>').hover(
			function(){
				clearTimeout(hideTimer);
				var subList = $(this).next();
				if (!fitVertical(subList, $(this).offset().top)) { subList.css({ top: 'auto', bottom: 0 }); };
				if (!fitHorizontal(subList, $(this).offset().left + 100)) { subList.css({ left: 'auto', right: linkWidth, 'z-index': 999 }); };
				showTimer = setTimeout(function(){
					subList.addClass('ui-widget-content').show(options.showSpeed).attr('aria-expanded', 'true');	
				}, 300);	
			},
			function(){
				clearTimeout(showTimer);
				var subList = $(this).next();
				hideTimer = setTimeout(function(){
					subList.removeClass('ui-widget-content').hide(options.showSpeed).attr('aria-expanded', 'false');
				}, 400);	
			}
		);

		$(this).find('ul a').hover(
			function(){
				clearTimeout(hideTimer);
				if ($(this).parents('ul').prev().is('a.fg-menu-indicator')) {
					$(this).parents('ul').prev().addClass(options.flyOutOnState);
				}
			},
			function(){
				hideTimer = setTimeout(function(){
					allSubLists.hide(options.showSpeed);
					container.find(options.flyOutOnState).removeClass(options.flyOutOnState);
				}, 500);	
			}
		);	
	});
	
	container.find('a').click(function(){
		menu.chooseItem(this);
		return false;
	});
};


Menu.prototype.drilldown = function(container, options) {
	var menu = this;	
	var topList = container.find('.fg-menu');	
	var breadcrumb = $('<ul class="fg-menu-breadcrumb ui-widget-header ui-corner-all ui-helper-clearfix"></ul>');
	var crumbDefaultHeader = $('<li class="fg-menu-breadcrumb-text">'+options.crumbDefaultText+'</li>');
	var firstCrumbText = (options.backLink) ? options.backLinkText : options.topLinkText;
	var firstCrumbClass = (options.backLink) ? 'fg-menu-prev-list' : 'fg-menu-all-lists';
	var firstCrumbLinkClass = (options.backLink) ? 'ui-state-default ui-corner-all' : '';
	var firstCrumbIcon = (options.backLink) ? '<span class="ui-icon ui-icon-triangle-1-w"></span>' : '';
	var firstCrumb = $('<li class="'+firstCrumbClass+'"><a href="#" class="'+firstCrumbLinkClass+'">'+firstCrumbIcon+firstCrumbText+'</a></li>');
	
	container.addClass('fg-menu-ipod');
	
	if (options.backLink) { breadcrumb.addClass('fg-menu-footer').appendTo(container).hide(); }
	else { breadcrumb.addClass('fg-menu-header').prependTo(container); };
	breadcrumb.append(crumbDefaultHeader);
	
	var checkMenuHeight = function(el){
		if (el.height() > options.maxHeight) { el.addClass('fg-menu-scroll') };	
		el.css({ height: options.maxHeight });
	};
	
	var resetChildMenu = function(el){ el.removeClass('fg-menu-scroll').removeClass('fg-menu-current').height('auto'); };
	
	this.resetDrilldownMenu = function(){
		$('.fg-menu-current').removeClass('fg-menu-current');
		topList.animate({ left: 0 }, options.crossSpeed, function(){
			$(this).find('ul').each(function(){
				$(this).hide();
				resetChildMenu($(this));				
			});
			topList.addClass('fg-menu-current');			
		});		
		$('.fg-menu-all-lists').find('span').remove();	
		breadcrumb.empty().append(crumbDefaultHeader);		
		$('.fg-menu-footer').empty().hide();	
		checkMenuHeight(topList);		
	};
	
	topList
		.addClass('fg-menu-content fg-menu-current ui-widget-content ui-helper-clearfix')
		.css({ width: container.width() })
		.find('ul')
			.css({ width: container.width(), left: container.width() })
			.addClass('ui-widget-content')
			.hide();		
	checkMenuHeight(topList);	
	
	topList.find('a').each(function(){
		// if the link opens a child menu:
		if ($(this).next().is('ul')) {
			$(this)
				.addClass('fg-menu-indicator')
				.each(function(){ $(this).html('<span>' + $(this).text() + '</span><span class="ui-icon '+options.nextMenuLink+'"></span>'); })
				.click(function(){ // ----- show the next menu			
					var nextList = $(this).next();
		    		var parentUl = $(this).parents('ul:eq(0)');   		
		    		var parentLeft = (parentUl.is('.fg-menu-content')) ? 0 : parseFloat(topList.css('left'));    		
		    		var nextLeftVal = Math.round(parentLeft - parseFloat(container.width()));
		    		var footer = $('.fg-menu-footer');
		    		
		    		// show next menu   		
		    		resetChildMenu(parentUl);
		    		checkMenuHeight(nextList);
					topList.animate({ left: nextLeftVal }, options.crossSpeed);						
		    		nextList.show().addClass('fg-menu-current').attr('aria-expanded', 'true');    
		    		
		    		var setPrevMenu = function(backlink){
		    			var b = backlink;
		    			var c = $('.fg-menu-current');
			    		var prevList = c.parents('ul:eq(0)');
			    		c.hide().attr('aria-expanded', 'false');
		    			resetChildMenu(c);
		    			checkMenuHeight(prevList);
			    		prevList.addClass('fg-menu-current').attr('aria-expanded', 'true');
			    		if (prevList.hasClass('fg-menu-content')) { b.remove(); footer.hide(); };
		    		};		
		
					// initialize "back" link
					if (options.backLink) {
						if (footer.find('a').size() == 0) {
							footer.show();
							$('<a href="#"><span class="ui-icon ui-icon-triangle-1-w"></span> <span>Back</span></a>')
								.appendTo(footer)
								.click(function(){ // ----- show the previous menu
									var b = $(this);
						    		var prevLeftVal = parseFloat(topList.css('left')) + container.width();		    						    		
						    		topList.animate({ left: prevLeftVal },  options.crossSpeed, function(){
						    			setPrevMenu(b);
						    		});			
									return false;
								});
						}
					}
					// or initialize top breadcrumb
		    		else { 
		    			if (breadcrumb.find('li').size() == 1){				
							breadcrumb.empty().append(firstCrumb);
							firstCrumb.find('a').click(function(){
								menu.resetDrilldownMenu();
								return false;
							});
						}
						$('.fg-menu-current-crumb').removeClass('fg-menu-current-crumb');
						var crumbText = $(this).find('span:eq(0)').text();
						var newCrumb = $('<li class="fg-menu-current-crumb"><a href="javascript://" class="fg-menu-crumb">'+crumbText+'</a></li>');	
						newCrumb
							.appendTo(breadcrumb)
							.find('a').click(function(){
								if ($(this).parent().is('.fg-menu-current-crumb')){
									menu.chooseItem(this);
								}
								else {
									var newLeftVal = - ($('.fg-menu-current').parents('ul').size() - 1) * 180;
									topList.animate({ left: newLeftVal }, options.crossSpeed, function(){
										setPrevMenu();
									});
								
									// make this the current crumb, delete all breadcrumbs after this one, and navigate to the relevant menu
									$(this).parent().addClass('fg-menu-current-crumb').find('span').remove();
									$(this).parent().nextAll().remove();									
								};
								return false;
							});
						newCrumb.prev().append(' <span class="ui-icon '+options.nextCrumbLink+'"></span>');
		    		};			
		    		return false;    		
    			});
		}
		// if the link is a leaf node (doesn't open a child menu)
		else {
			$(this).click(function(){
				menu.chooseItem(this);
				return false;
			});
		};
	});
};


/* Menu.prototype.setPosition parameters (defaults noted with *):
	referrer = the link (or other element) used to show the overlaid object 
	settings = can override the defaults:
		- posX/Y: where the top left corner of the object should be positioned in relation to its referrer.
				X: left*, center, right
				Y: top, center, bottom*
		- offsetX/Y: the number of pixels to be offset from the x or y position.  Can be a positive or negative number.
		- directionH/V: where the entire menu should appear in relation to its referrer.
				Horizontal: left*, right
				Vertical: up, down*
		- detectH/V: detect the viewport horizontally / vertically
		- linkToFront: copy the menu link and place it on top of the menu (visual effect to make it look like it overlaps the object) */

Menu.prototype.setPosition = function(widget, caller, options) { 
	var el = widget;
	var referrer = caller;
	var dims = {
		refX: referrer.offset().left,
		refY: referrer.offset().top,
		refW: referrer.getTotalWidth(),
		refH: referrer.getTotalHeight()
	};	
	var options = options;
	var xVal, yVal;
	
	var helper = $('<div class="positionHelper"></div>');
	helper.css({ position: 'absolute', left: dims.refX, top: dims.refY, width: dims.refW, height: dims.refH });
	el.wrap(helper);
	
	// get X pos
	switch(options.positionOpts.posX) {
		case 'left': 	xVal = 0; 
			break;				
		case 'center': xVal = dims.refW / 2;
			break;				
		case 'right': xVal = dims.refW;
			break;
	};
	
	// get Y pos
	switch(options.positionOpts.posY) {
		case 'top': 	yVal = 0;
			break;				
		case 'center': yVal = dims.refH / 2;
			break;				
		case 'bottom': yVal = dims.refH;
			break;
	};
	
	// add the offsets (zero by default)
	xVal += options.positionOpts.offsetX;
	yVal += options.positionOpts.offsetY;
	
	// position the object vertically
	if (options.positionOpts.directionV == 'up') {
		el.css({ top: 'auto', bottom: yVal });
		if (options.positionOpts.detectV && !fitVertical(el)) {
			el.css({ bottom: 'auto', top: yVal });
		}
	} 
	else {
		el.css({ bottom: 'auto', top: yVal });
		if (options.positionOpts.detectV && !fitVertical(el)) {
			el.css({ top: 'auto', bottom: yVal });
		}
	};
	
	// and horizontally
	if (options.positionOpts.directionH == 'left') {
		el.css({ left: 'auto', right: xVal });
		if (options.positionOpts.detectH && !fitHorizontal(el)) {
			el.css({ right: 'auto', left: xVal });
		}
	} 
	else {
		el.css({ right: 'auto', left: xVal });
		if (options.positionOpts.detectH && !fitHorizontal(el)) {
			el.css({ left: 'auto', right: xVal });
		}
	};
	
	// if specified, clone the referring element and position it so that it appears on top of the menu
	if (options.positionOpts.linkToFront) {
		referrer.clone().addClass('linkClone').css({
			position: 'absolute', 
			top: 0, 
			right: 'auto', 
			bottom: 'auto', 
			left: 0, 
			width: referrer.width(), 
			height: referrer.height()
		}).insertAfter(el);
	};
};


/* Utilities to sort and find viewport dimensions */

function sortBigToSmall(a, b) { return b - a; };

jQuery.fn.getTotalWidth = function(){
	return $(this).width() + parseInt($(this).css('paddingRight')) + parseInt($(this).css('paddingLeft')) + parseInt($(this).css('borderRightWidth')) + parseInt($(this).css('borderLeftWidth'));
};

jQuery.fn.getTotalHeight = function(){
	return $(this).height() + parseInt($(this).css('paddingTop')) + parseInt($(this).css('paddingBottom')) + parseInt($(this).css('borderTopWidth')) + parseInt($(this).css('borderBottomWidth'));
};

function getScrollTop(){
	return self.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
};

function getScrollLeft(){
	return self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft;
};

function getWindowHeight(){
	var de = document.documentElement;
	return self.innerHeight || (de && de.clientHeight) || document.body.clientHeight;
};

function getWindowWidth(){
	var de = document.documentElement;
	return self.innerWidth || (de && de.clientWidth) || document.body.clientWidth;
};

/* Utilities to test whether an element will fit in the viewport
	Parameters:
	el = element to position, required
	leftOffset / topOffset = optional parameter if the offset cannot be calculated (i.e., if the object is in the DOM but is set to display: 'none') */
	
function fitHorizontal(el, leftOffset){
	var leftVal = parseInt(leftOffset) || $(el).offset().left;
	return (leftVal + $(el).width() <= getWindowWidth() + getScrollLeft() && leftVal - getScrollLeft() >= 0);
};

function fitVertical(el, topOffset){
	var topVal = parseInt(topOffset) || $(el).offset().top;
	return (topVal + $(el).height() <= getWindowHeight() + getScrollTop() && topVal - getScrollTop() >= 0);
};

/*-------------------------------------------------------------------- 
 * javascript method: "pxToEm"
 * by:
   Scott Jehl (scott@filamentgroup.com) 
   Maggie Wachs (maggie@filamentgroup.com)
   http://www.filamentgroup.com
 *
 * Copyright (c) 2008 Filament Group
 * Dual licensed under the MIT (filamentgroup.com/examples/mit-license.txt) and GPL (filamentgroup.com/examples/gpl-license.txt) licenses.
 *
 * Description: Extends the native Number and String objects with pxToEm method. pxToEm converts a pixel value to ems depending on inherited font size.  
 * Article: http://www.filamentgroup.com/lab/retaining_scalable_interfaces_with_pixel_to_em_conversion/
 * Demo: http://www.filamentgroup.com/examples/pxToEm/	 	
 *							
 * Options:  	 								
 		scope: string or jQuery selector for font-size scoping
 		reverse: Boolean, true reverses the conversion to em-px
 * Dependencies: jQuery library						  
 * Usage Example: myPixelValue.pxToEm(); or myPixelValue.pxToEm({'scope':'#navigation', reverse: true});
 *
 * Version: 2.0, 08.01.2008 
 * Changelog:
 *		08.02.2007 initial Version 1.0
 *		08.01.2008 - fixed font-size calculation for IE
--------------------------------------------------------------------*/

Number.prototype.pxToEm = String.prototype.pxToEm = function(settings){
	//set defaults
	settings = jQuery.extend({
		scope: 'body',
		reverse: false
	}, settings);
	
	var pxVal = (this == '') ? 0 : parseFloat(this);
	var scopeVal;
	var getWindowWidth = function(){
		var de = document.documentElement;
		return self.innerWidth || (de && de.clientWidth) || document.body.clientWidth;
	};	
	
	/* When a percentage-based font-size is set on the body, IE returns that percent of the window width as the font-size. 
		For example, if the body font-size is 62.5% and the window width is 1000px, IE will return 625px as the font-size. 	
		When this happens, we calculate the correct body font-size (%) and multiply it by 16 (the standard browser font size) 
		to get an accurate em value. */
				
	if (settings.scope == 'body' && $.browser.msie && (parseFloat($('body').css('font-size')) / getWindowWidth()).toFixed(1) > 0.0) {
		var calcFontSize = function(){		
			return (parseFloat($('body').css('font-size'))/getWindowWidth()).toFixed(3) * 16;
		};
		scopeVal = calcFontSize();
	}
	else { scopeVal = parseFloat(jQuery(settings.scope).css("font-size")); };
			
	var result = (settings.reverse == true) ? (pxVal * scopeVal).toFixed(2) + 'px' : (pxVal / scopeVal).toFixed(2) + 'em';
	return result;
};


function generateMenu(){
	// MENUS    	
	window._MAINMENU = $('#flat').menu({ 
		content: $('#flat').next().html(), // grab content from this page
		showSpeed: 100 
	});
}

function progressBar(percent, $element) {
    var progressBarWidth = percent * $element.width() / 100;
    $element.find('div').animate({ width: progressBarWidth }, 500);
}

function progressBarVisibility(state) {
	if (state) $('#progressBar').show();
	else $('#progressBar').hide();
}

function syncComplete_show() {
	$('#sync-complete').fadeIn();
}
function syncComplete_hide() {
	$('#sync-complete').fadeOut();
}


$(function() {

	//window.location = "http://google.com";

	$('.fg-button').hover(
		function(){ $(this).removeClass('ui-state-default').addClass('ui-state-focus'); },
		function(){ $(this).removeClass('ui-state-focus').addClass('ui-state-default'); }
	);

	generateMenu();

	$('#flat').on("click", function(e) {
		DEBUG_TRACKING(["_trackEvent", "Settings", "RIGHTMENUOPEN", window._APP_VERSION, getTimeForTracking("default")]); 
	});

	$('#please-rate-link').on("click", function(e) {
		chrome.storage.local.set({ "ratingdone": 1 }, function(val) {
	 	});
		// console.log('sas,djnasljdnalsjdnlasjndlasdnalsdjnalsdnlasd');
		DEBUG_TRACKING(["_trackEvent", "Ratings", window._APP_VERSION, _COUNT]); 
	});

	$('#limit-crossed').on("click", function(e) {

	 	window.conformMyModal = $('#myModal').jBox('Modal', {
			    content: $("#modal_sync_confirm")
			});
	 	$('.enableSyncConfirmButton').text('Yes, DISABLE SYNC.');
		$('.enableSyncConfirmButtonText').text('Note: Your 4000 Character limit will be removed. ');

		window.conformMyModal.open();
	});
	
	$('#change_text_size_ul li').on("click", function(e){
	 $('#change_text_size_ul li').removeClass('active'); 
	 apply_settings({text_size: $(e.target).data("id")});
	 DEBUG_TRACKING(["_trackEvent", "Settings", "TextSize", $(e.target).data("id"), getTimeForTracking("default")]); 
	});

	$('#change_popup_size_ul li').on("click", function(e){
	 $('#change_popup_size_ul li').removeClass('active'); 
	 apply_settings({popup_size: $(e.target).data("id")});
	 DEBUG_TRACKING(["_trackEvent", "Settings", "PopupSize", $(e.target).data("id"), getTimeForTracking("default")]); 
	});

	$('#change_export_data_ul li').on("click", function(e){
	 // $('#change_export_data_ul li').removeClass('active'); 
	 // apply_settings({popup_size: $(e.target).data("id")});
	 download_notes($(e.target).data("id"));
	 DEBUG_TRACKING(["_trackEvent", "Settings", "ExportNote", $(e.target).data("id"), getTimeForTracking("default")]); 
	});

	$('#change_text_style li').on("click", function(e){
	 $('#change_text_style li').removeClass('active');
	 apply_settings({text_style: $(e.target).data("id")}); 
	 DEBUG_TRACKING(["_trackEvent", "Settings", "TextStyle", $(e.target).data("id"), getTimeForTracking("default")]); 
	});

	$('#change_background_color li').on("click", function(e){
	 $('#change_background_color li').removeClass('active');
	 apply_settings({background_color: $(e.target).data("id")}); 
	 DEBUG_TRACKING(["_trackEvent", "Settings", "BackgroundColor", $(e.target).data("id"), getTimeForTracking("default")]); 
	});

	$('#enableSyncConfirmButton').on("click", function(e) {
		window.conformMyModal.close();
		if(_UNIVERSAL_SETTINGS.sync) {
			_UNIVERSAL_SETTINGS.sync = 0;
			chrome.storage.local.set({ sync_settings: 0 }, function(val) {
		 	});
		 	$('.sync-status').html('DISABLED');
		 	$('#limit-crossed').hide();
		}
		else {
			_UNIVERSAL_SETTINGS.sync = 1;
			chrome.storage.local.set({ sync_settings: 1 }, function(val) {
		 	});
		 	$('.sync-status').html('ENABLED');
		}
		onSyncChange();
		DEBUG_TRACKING(["_trackEvent", "Settings", "SyncChange",_UNIVERSAL_SETTINGS.sync, getTimeForTracking("default")]); 

	});

	$(".settings-modals .modal-close").on("click", function(e) {
		e.stopPropagation();
		// myModal.close();
		

		if(typeof myModal != 'undefined') {
			window.myModal.close();
		}

		if(typeof conformMyModal != 'undefined') {
			window.conformMyModal.close();
		}
		DEBUG_TRACKING(["_trackEvent", "Settings", "CloseModal", "Button", getTimeForTracking("default")]);
		return false;

	});


	$('.versions-chooser-one').on("click", function(e) {
		// console.log('.versions-chooser-one');
		close_save_sync(window.version_one);
		DEBUG_TRACKING(["_trackEvent", "Select", "Version", "1", getTimeForTracking("default")]);

	});

	$('.versions-chooser-two').on("click", function(e) {
		// console.log('.versions-chooser-two');
		DEBUG_TRACKING(["_trackEvent", "Select", "Version", "2", getTimeForTracking("default")]);
		close_save_sync(window.version_two);
	});

	function close_save_sync(val) {
		// console.log('close_save_sync', val);
		$('#txt').val(val);
		// console.log('resolving conflict');
		save_color(val);
		window.conflictModal.close();
		//DEBUG_TRACKING(["_trackEvent", "Select", "Version", "1", getTimeForTracking("default")]);

	}
});



window.onload = function(e){   
  chrome.windows.getCurrent(function(w)  
  {  
      load_color();
	  
  });  
}  

function clickHandler(e) {
	var testVariableNew = e;
	// var val = document.getElementById('txt').value;		
	// console.log("clickHandler value", val);
	setTimeout(function(){ 
		clickHandlerNew(testVariableNew)
	 }, 120);


 //    chrome.extension.sendMessage({directive: "popup-click"}, function(response) {
	
	// // close the popup when the background finishes processing request
 //    });
}

function clickHandlerNew(e) {
	// console.log("TESTINGf");
	var val = document.getElementById('txt').value;		
	// console.log("clickHandlerNew value", val);
	save_color(val);
	decideProgressBar(val);
}

 


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('txt').addEventListener('keydown', clickHandler);
})


function save_color(val) {
	// console.log('save_color', val);
    var white = val;
                             //key    value   callback
    chrome.storage.local.set({"white": white}, function() {
       console.log("The value stored. LOCAL.");
    });
    chrome.storage.local.set({"time": Date.now()}, function() {
       // console.log("The value stored. LOCAL.");
    });

    // console.log("If more than 1", Date.now()-window.last_time);

    if ((Date.now()-window.last_time)>1000) {
    	window.last_time = Date.now();
    	console.log("enough time since last sync. lets attempt.");
    	sync_background();
    }

    chrome.storage.local.set({"last_synced_test": white}, function() {
        console.log("The value stored");
    });

}

function onSyncChange() {
	// console.log("onSyncChange");
	// console.log(_UNIVERSAL_SETTINGS);
	if(_UNIVERSAL_SETTINGS.sync) {
		$('#txt').attr("maxlength", window._CHARLIMIT);
		$('.sync_menu_item_text').text('on');
		generateMenu();
		$('.syncwarningmenu').text('imp!');
	}
	else{
		$('#txt').removeAttr("maxLength");
		$('#percentage').hide();
		uncreateLightNotification('limit-crossed');
		$('.sync_menu_item_text').text('off');
		generateMenu();
	}
}

chrome.storage.local.get("sync_settings", function(val) {
	if (typeof val.sync_settings != 'undefined'){
		_UNIVERSAL_SETTINGS.sync = val.sync_settings;

		// console.log($('.sync_menu_item_text').text());
		onSyncChange();
	}
	 else {
	 	console.log("FIRST TIME SYNC SETTINGS");
	 	console.log(_UNIVERSAL_SETTINGS.sync);
	 	chrome.storage.local.set({ sync_settings: _UNIVERSAL_SETTINGS.sync }, function(val) {
	 	});
	 }
});




chrome.storage.local.get(["doiusesync","count"], function(val) {
	if (typeof val.doiusesync != 'undefined'){
		_DOIUSESYNC = val.doiusesync;
	}
	 else {
	 	chrome.storage.local.set({"doiusesync": 0}, function() {
			// console.log("FIRST TIME LOCAL VALUE SUCCESSFULY SYNCED TO REMOTE.");
		});
	 }




	 chrome.storage.local.get("cgmdone", function(cgmdata){

		if (typeof cgmdata.cgmdone != 'undefined'){
			_CGNDONE = 1;
		}


		else {			


			// var doisync = "No";
			// if ( _DOIUSESYNC == 1 ) {
			// 	doisync = "Yes";
			// }

			var cgnlength = $('#txt').val().length;
			cgnlength = Math.round(cgnlength/500)*500;



			var cgncount = _COUNT;
			var cgncount = Math.round(cgncount/10)*10;



			sendCGNdone(cgnlength, cgncount);

			


			chrome.storage.local.set({"cgmdone": 1}, function() {
				// console.log("CGN Done");
			});
		}

	});




	 if (typeof val.count != 'undefined'){
		_COUNT = val.count;
	}
	 else {
	 	chrome.storage.local.set({"count": 0}, function() {
			// console.log("FIRST TIME LOCAL VALUE SUCCESSFULY SYNCED TO REMOTE.");
		});
	 }
});


function sendCGNdone(cgnlength, cgncount) {
	// _gaq.push(["_trackEvent", "CGN", "DoISync", doisync ]);
	// console.log("_gaq", _gaq);
	window.cgnlength = cgnlength;
	window.cgncount = cgncount;

	setTimeout(function() {
		// console.log("_gaq", _gaq);
		var cgnlength2 = $('#txt').val().length;
		cgnlength2 = Math.round(cgnlength2/500)*500;

		var stringCgnLength = cgnlength2.toString();
		var stringCgnCount = cgncount.toString();
		var stringCgnSync = _UNIVERSAL_SETTINGS.sync.toString();

		DEBUG_TRACKING(["_trackEvent", "CGM", "AppLength", stringCgnLength ]);
		DEBUG_TRACKING(["_trackEvent", "CGM", "AppCount", stringCgnCount ]);
		DEBUG_TRACKING(["_trackEvent", "CGM", "AppVersion", _APP_VERSION ]);
		DEBUG_TRACKING(["_trackEvent", "CGM", "AppSync", stringCgnSync ]);


	}, 1000);

	// setTimeout(function() {
		
	// }, 1300);

	// setTimeout(function() {
		
	// }, 1600);

	// setTimeout(function() {
		
	// }, 1900);
}



function sync_background() {
	// console.log("sync_background");
	// console.log("sync_background another");

	if(_UNIVERSAL_SETTINGS.sync) {
		// console.log("Step 0");

		// console.log('%c 1111111111 ', 'background: #222; color: #bada55');
		chrome.storage.sync.get("compressed", function(fetched_data) {
			// console.log('%c 22222222 ', 'background: #222; color: #bada55');

///
		if (typeof fetched_data.compressed!='undefined') {
			if (typeof fetched_data.compressed.value!='undefined') {
				// console.log("NOW I CAN CHECK FOR SYNC STATUS! :D");

				chrome.storage.local.get("last_synced_test", function(val_) {
				// console.log("last_synced_test");
					if (typeof val_.last_synced_test != 'undefined'){
						// console.log('local', val_.last_synced_test);
						// console.log('server', fetched_data.compressed.value);
						if(val_.last_synced_test==fetched_data.compressed.value) {
							// console.log('value.same.is.same');	
						} 
						else {
							var opened_length = val_.last_synced_test.length;
							var submitted_length = "0";
							if (opened_length<61) submitted_length="60";
							else if (opened_length<501) submitted_length="500";
							else if (opened_length<1501) submitted_length="1500";
							else if (opened_length<3501) submitted_length="3500";
							else if (opened_length<4201) submitted_length="4200";
							else if (opened_length<4901) submitted_length="4900";
							else if (opened_length<5401) submitted_length="5400";
							else if (opened_length<7401) submitted_length="7400";
							else submitted_length="7400 plus";

							chrome.storage.local.set({"doiusesync": 1}, function() {
								// console.log("FIRST TIME LOCAL VALUE SUCCESSFULY SYNCED TO REMOTE.");
							});

							_DOIUSESYNC = 1;

							DEBUG_TRACKING(["_trackEvent", "Sync", window._APP_VERSION+" diffValue", submitted_length]);
						}
					}
				});

			}
		}

			
	///

			// console.log("Step 1");
			var last_synced = "";
			chrome.storage.local.get("last_synced", function(val) {
				if (typeof val.last_synced != 'undefined'){
					last_synced = val.last_synced;
				}
			});
			chrome.storage.local.get(["white","time"], function(val) {

				if (typeof fetched_data.compressed=='undefined') {
					// console.log("FIRST TIME: ", val);
					var compressed = {};
					compressed.value = val.white;
					compressed.time = Date.now();
					chrome.storage.sync.set({"compressed": compressed}, function() {
						// console.log("FIRST TIME LOCAL VALUE SUCCESSFULY SYNCED TO REMOTE.");
					});
					chrome.storage.local.set({"last_synced": val.white}, function() {
						// console.log("FIRST TIME LOCAL SYNC VALUE UPDATED.");
					});
				}

				else {

					var flagg = 1;
					// console.log("Step 2");
					// console.log("fc", fetched_data.compressed.length);
					// console.log("fct", typeof fetched_data.compressed.time);
					// console.log("Step 3");
					if (typeof fetched_data.compressed.time != 'undefined'){

							// console.log("HEREHEREHERHERHEHREHR");
							// console.log(fetched_data.compressed.time-val.time);
							// console.log("Step 4", fetched_data.compressed.time);
						if(fetched_data.compressed.time>val.time) {
							// console.log("Step 5", fetched_data.compressed.time-val.time);
							// console.log("Step 5a", fetched_data.compressed.value.length);
							// console.log("Step 5b", val.white.length);
							if (fetched_data.compressed.value!=val.white) {
								// progressBarVisibility(1);
								// progressBarVisibility(0);
								// progressBar(100, $('#progressBar'));
								

								syncComplete_show();
								setTimeout(syncComplete_hide, 3000);

								// console.log("Step 6");
								
								// console.log('%c 3333333333 ', 'background: #222; color: #bada55');
								$('#txt').val(fetched_data.compressed.value);
								// console.log('resolving_conflict');
								save_color(fetched_data.compressed.value);

								// show_conflict_ab(fetched_data.compressed.value, $('#txt').val());
								// // show conflict
								var diffTIME = fetched_data.compressed.time-val.time;

								// DEBUG_TRACKING(["_trackEvent", "Functions", "show_conflict_ab", diffTIME.toString(), getTimeForTracking("default")]);
								DEBUG_TRACKING(["_trackEvent", "Functions", "skip_conflict_ab", diffTIME.toString(), getTimeForTracking("default")]);
								


								flagg = 0;
							}
							// console.log("Step 7");
						}
						else {
							flagg=1;
							// console.log("Step 8");
						}
						// console.log("Step 9");
					}

					else {
						console.log("Step 4. Sync is undefined buddy.");
					}
					// console.log("Step 10");
					// console.log("Step 10a", last_synced.length);
					// console.log("Step 10b", val.white.length);

					

					if(last_synced!=val.white) {
						// console.log("Step 11");
						// console.log("last_syncedlast_synced", last_synced);
						if (flagg) {
							// console.log("Step 12");
							// console.log("last_synced: DIFFERENT", val);
							var compressed = {};
							compressed.value = val.white;
							compressed.time = Date.now();
							chrome.storage.sync.set({"compressed": compressed}, function() {
								// console.log("Step 13");
								// console.log("LOCAL VALUE SUCCESSFULY SYNCED TO REMOTE.");
							});
							chrome.storage.local.set({"last_synced": val.white}, function() {
								// console.log("Step 14");
								// console.log("LOCAL SYNC VALUE UPDATED.");
							});
						}

						
					}
					else {

						// console.log("SYNC CANCELLED. NOTHING WAS CHANGED.");
					}

				}
			});
		});
	}
}

setInterval(sync_background, 5000);




var something;

function shownConflictTrack(){
	if (window.enableShowConflict) {
		shownConflictTime = shownConflictTime + 2;
		// console.log("a");
		if(shownConflictTime%10==0) DEBUG_TRACKING(["_trackEvent", "Usage", "AfterConflictModal", shownConflictTime.toString()]);
		if(shownConflictTime==2) DEBUG_TRACKING(["_trackEvent", "Usage", "AfterConflictModal", "2"]);

		if((showSecondConflict)&&(shownConflict==2)) {
			showSecondConflict = 0;
			DEBUG_TRACKING(["_trackEvent", "Usage", "SecondConflictModal", shownConflictTime.toString()]);
		}
	}
}

function runConflictTimer () {
	// console.log("shownConflict", shownConflict);
}

setInterval(shownConflictTrack ,2000);

window.enableShowConflict = 0;
window.shownConflict = 0;
window.shownConflictTime = 0;
window.showSecondConflict = 1;

function show_conflict_ab(remote, local){

	
	window.enableShowConflict=1;
	// console.log("show_conflict_ab called");

	window.version_one = remote;
	window.version_two = local;

	$('.text-version-one').text(remote);
	$('.text-version-two').text(local);

	if(window.conflictModal) {
		if (window.conflictModal.isOpen) {
			shownConflict = shownConflict - 1;
			window.conflictModal.close();
		}
	}
	
	shownConflict = shownConflict + 1;
	
	if (!window.conflictModal) {
		window.conflictModal = $('#myModal').jBox('Modal', {
		    content: $("#modal_choose_version"),
		    closeOnEsc: 0,
		    closeButton: 0,
		    closeOnClick: 0
		});
		window.conflictModal.open();
	}
	else {
		window.conflictModal.open();
	}
}

window.last_time = Date.now();



function load_color() {
    var color = "white";
                  //key   callback
    // console.log('is se pehlay sync ka kuch bhi run hua hai ?');
	chrome.storage.local.get(color, function(val) {
	// console.log(typeof val.white);
		if (typeof val.white != 'undefined'){
		//console.log('a');
			document.getElementById('txt').value=val.white;

		}
		else {
			chrome.storage.sync.get(color, function(val) {
				//console.log(typeof val.white);
					if (typeof val.white != 'undefined'){
						document.getElementById('txt').value=val.white;
						// Same copy to local
						var white = val.white;
                             //key    value   callback
					    chrome.storage.local.set({"white": white}, function() {
					        //console.log("The value stored was: " + white);
					    });
					    chrome.storage.local.set({"time": Date.now()}, function() {
					        //console.log("The value stored was: " + white);
					    });

					}
					else {

					var textt=window._DEFAULTTEXT;
						chrome.storage.local.set({"white": textt}, function() {
						});
						chrome.storage.local.set({"time": Date.now()}, function() {
						});

					document.getElementById('txt').value=textt;



					window._UNIVERSAL_SETTINGS.sync = 0;
					chrome.storage.local.set({ sync_settings: _UNIVERSAL_SETTINGS.sync }, function(val) {
						//console.log('a');
	 				});
	 				onSyncChange();
	 				DEBUG_TRACKING(["_trackEvent", "Sync", window._APP_VERSION, "FirstTimeOff"]);

	 				window._USERVERSION = 'Y';

	 				// console.log("SETTTTTTTTING YYYYyyyyyy");
	 				chrome.storage.local.set({ user_version: "Y" }, function(val) {
	 					//console.log('a');
	 				});

					// blahblah

					//console.log(document.getElementById('txt').val);
					}
					
			    });

		// var textt="Welcome,\n\ntype something...";
		// 	chrome.storage.sy.nc.set({"white": textt}, function() {
		// 	});
		// document.getElementById('txt').value=textt;
		//console.log(document.getElementById('txt').val);
		}

    });
	
}


function load_settings() {

	var variable_name = "settings";

	// var text_size = "14px";
	// var text_style = "Open Sans";
	// var background_color = "rgb(248, 248, 170)";

	chrome.storage.sync.get(variable_name, function(val) {
	//console.log(typeof val.white);
		if (typeof val.settings != 'undefined'){
			console.log("SETTINGS RETRIEVED", val.settings.length);

			apply_settings(val.settings);

			_SETTINGS.text_size = val.settings.text_size;
			_SETTINGS.text_style = val.settings.text_style;
			_SETTINGS.popup_size = val.settings.popup_size;
			_SETTINGS.background_color = val.settings.background_color;
			
			applyPopupSize(val.settings.popup_size);
				//console.log('a');
				// document.getElementById('txt').value=val.white;
		}
		else {

			// For first time

			var settings = {};

			settings.text_size = "ts_medium";
			settings.popup_size = "sz_standard";
			settings.text_style = "Open Sans";
			settings.background_color = "bc_yellow";

			// console.log("nothing here buddy");
			chrome.storage.sync.set({"settings": settings}, function(val) {
				console.log("NEW SETTINGS SAVED AS.", settings);
			});

			apply_settings(settings);
			_SETTINGS = settings;
				// document.getElementById('txt').val=text_size;
				//console.log(document.getElementById('txt').val);
		}
		
    });
}


function createLightNotification(string) {
	//DEBUG_TRACKING(["_trackEvent", "Functions", "createLightNotification", string, getTimeForTracking("default")]);
	$('#'+string).show();
	// console.log('#'+string);
}
function uncreateLightNotification(string) {
	$('#'+string).hide();
	// console.log('#'+string);
}

function download_notes(data) {

    




	if(data=="ex_txt") {
		var hiddenElement = document.createElement('a');
		hiddenElement.href = 'data:attachment/text,' + encodeURI($('#txt').val());
		hiddenElement.target = '_blank';
		hiddenElement.download = 'notes.txt';
		hiddenElement.click();
	}
	if(data=="ex_txtdate") {
		var hiddenElement = document.createElement('a');
		hiddenElement.href = 'data:attachment/text,' + encodeURI($('#txt').val());
		hiddenElement.target = '_blank';
		var d = new Date();
		hiddenElement.download = 'notes_'+d.getDate()+"_"+(d.getMonth()+1)+"_"+d.getFullYear()+'.txt';
		hiddenElement.click();
	}

	if(data=="ex_print") {
		w=window.open();
		w.document.write("<br /><br /><pre>"+$('#txt').val()+"</pre>");
		w.print();
		w.close();
	}

	

}


function apply_settings(settings) {

	var settings_save = {};

	settings_save.text_size = _SETTINGS.text_size;
	settings_save.text_style = _SETTINGS.text_style;
	settings_save.background_color = _SETTINGS.background_color;
	settings_save.popup_size = _SETTINGS.popup_size;
	
	// console.log("applying settings: ", settings.length);
	if (settings.background_color) {
		// console.log("changind bc color");
		$('body').removeClass('bc_white bc_yellow bc_blue bc_original bc_water bc_pink').addClass(settings.background_color);
		settings_save.background_color = settings.background_color;
		$('#change_background_color_ul li[data-id="'+settings.background_color+'"]').addClass('active');
		_SETTINGS.background_color = settings.background_color;
	}
	if (settings.text_size) {
		// console.log("changind ts size");
		$('#txt').removeClass('ts_small ts_medium ts_large ts_extra ts_giant').addClass(settings.text_size);
		settings_save.text_size = settings.text_size;
		$('#change_text_size_ul li[data-id="'+settings.text_size+'"]').addClass('active');
		_SETTINGS.text_size = settings.text_size;
	}
	if (settings.popup_size) {
		// console.log("changind sz size");
		$('body').removeClass('sz_tiny sz_standard sz_long sz_wide sz_swide sz_giant sz_ggiant').addClass(settings.popup_size);
		settings_save.popup_size = settings.popup_size;
		$('#change_popup_size_ul li[data-id="'+settings.popup_size+'"]').addClass('active');
		_SETTINGS.popup_size = settings.popup_size;
		applyPopupSize(settings.popup_size);
	}
	if (settings.text_style) {
		// console.log("changind ts style");
		$('#txt').css("fontFamily", settings.text_style);
		settings_save.text_style = settings.text_style;
		$('#change_text_style_ul li[data-id="'+settings.text_style+'"]').addClass('active');
		_SETTINGS.text_style = settings.text_style;
	}

	chrome.storage.sync.set({"settings": settings_save}, function(val) {
		// console.log("NEW SETTINGS SAVED AS. : 2", val);
	});
	
}


function createProgressBar(percentage) {
		// console.log('YAHAN ---------------------------');
		var percentageBar = $('#percentage .number-pb').NumberProgressBar({
	      style: 'percentage',
	      duration: 199
	    });

	    var percentageLoop = function() {
	      percentageBar.reach(percentage, {
	        complete: percentDone
	      });
	    }


	    var percentDone = function() {
	    	// console.log("loop done");
	    }

	    percentageLoop();
	}




	function decideProgressBar(string) {
		if(_UNIVERSAL_SETTINGS.sync) {
			// console.log("decide", string);

			var num_newlines = string.split("\n").length - 1;
			var augmented_length = string.length + num_newlines;
			var percentage_length = (augmented_length/window._CHARLIMIT)*100;

			// console.log("percentage", percentage_length);

			if(percentage_length>75) {
				$('#percentage').show();
				createProgressBar(percentage_length);
			}
			else {
				$('#percentage').hide();
			}
			if(percentage_length>96) {
				chrome.storage.local.get("limit_notification_4k", function(val) {
					if (typeof val.limit_notification_4k != 'undefined'){
						// console.log("CREATE LIGHT NOTIFICATION LATER");

					}
					else {
						chrome.storage.local.set({"limit_notification_4k": "done"}, function(val) {
							// console.log("FIRST TIME NOTIFYING : 2", val);
						});
						var prepareNotification = "You are very close to the character limit of chrome sync. Please <b>disable Sync</b> to use stickyNotes without any limit. ";
						DEBUG_TRACKING(["_trackEvent", "Functions", "createNotification", prepareNotification, getTimeForTracking("default")]);
						createNotification(prepareNotification);
					}
				});
			}

			if(percentage_length>99) {
				createLightNotification('limit-crossed');
			}
			else {
				uncreateLightNotification('limit-crossed');
			}


		}
	}



function createNotification(notify) {
		// console.log("NOTIFICATION:", notify);

		$('#notification-string').html(notify);

		window.myModal = $('#myModal').jBox('Modal', {
		    content: $("#modal_notification")
		});
		
		window.myModal.open();
	}


function decideProgressBarWithValue() {
	decideProgressBar($('#txt').val());
}

$(document).ready(function() {
	load_settings();

	console.log("for popup 1"); 


	setTimeout(function(){	

		console.log("for popup");

		var script   = document.createElement("script");
		script.type  = "text/javascript";
		script.src   = "popup.js";
		// script.text  = "alert('voila!');"
		document.body.appendChild(script);

		chrome.windows.getCurrent(function(c) {
			// console.log(c.type);
			if (c.type=='panel') {
				// Hide always top options
				var style = $('<style>[data-id="modal_panel"] { display: none; }</style>');
				$('html > head').append(style); 
				var style = $('<style>[data-id="modal_panel_bottom"] { display: none; }</style>');
				$('html > head').append(style); 

				console.log("HIDDEN ALL PANEL ITEMS")
			}
		});
	}, 800);





	console.log("calling close");
	// window.testtest = 1;

	if (getUrlVars()["from"]=="window") {
		// console.log("I AM WINDOW :)");
		$('.popupmenuli').hide();
		function debouncer( func , timeout ) {
		   var timeoutID , timeout = timeout || 200;
		   return function () {
		      var scope = this , args = arguments;
		      clearTimeout( timeoutID );
		      timeoutID = setTimeout( function () {
		          func.apply( scope , Array.prototype.slice.call( args ) );
		      } , timeout );
		   }
		}


		$( window ).resize( debouncer( function ( e ) {
		    generateMenu();
		} ) );
	}
	else {
		chrome.extension.sendMessage({directive: "closeAWindow"}, function(response) {
			console.log("called TO CLOSE");
		});
	}

	



	setTimeout(sync_background, 500);

	setTimeout(decideProgressBarWithValue, 500);


	$("#txt").bind({
		paste : function(e){
			clickHandler(e);
		},
		cut : function(e){
			clickHandler(e);
		}
	});



	//00000 Adding if PANEL is opened:
	// lets ask background page if the panel is over:

	chrome.extension.sendMessage({directive: "checkIfPanelIsOpen"}, function(response) {
		console.log("responseAAAA", response.open);

		if (response.open===true) {
			panelOPEN();
			console.log('I am in TRUE')
		}

		console.log(response.open);
		console.log(true);
		console.log('true');

	});

	window.panelOPEN = function() {

		// Dont want to show popup for less time even.
		// setTimeout(function(){
		// 	DEBUG_TRACKING(["_trackEvent", "Panel", window._APP_VERSION, "enabled"]);
		// }, 1000);
	

		chrome.extension.sendMessage({directive: "openMePanel"}, function(response) {
    		chrome.extension.sendMessage({directive: "consolelog", msg: response}, function(response) {
				console.log("called TO CLOSE");
			});
		});
		chrome.windows.getCurrent(function(c) {
			console.log("AABBNNLENWLFNOLFUNDOSDFUDONO");
			console.log(c.type);
			if (c.type=='normal') {
				window.close();
			}

		});
	}



	setTimeout(function(){
		var opened_length = $('#txt').val().length;
		var submitted_length = "100";
		if (opened_length<101) submitted_length="100";
		else if (opened_length<301) submitted_length="300";
		else if (opened_length<451) submitted_length="450";
		else if (opened_length<800) {
			submitted_length="800";
			if ($('#txt').val()==window._DEFAULTTEXT) submitted_length="0";
		}
		else if (opened_length<1501) submitted_length="1500";
		else if (opened_length<3501) submitted_length="3500";
		else if (opened_length<4201) submitted_length="4200";
		else if (opened_length<4901) submitted_length="4900";
		else if (opened_length<5401) submitted_length="5400";
		else submitted_length="5400 plus";


		DEBUG_TRACKING(["_trackEvent", "APP_OPEN", window._APP_VERSION, submitted_length]);
	}, 1200);


	setTimeout(function() {

		var save_count = window._COUNT+1;
		chrome.storage.local.set({"count": save_count}, function() {
			//console.log("new count saved");
		});


		if(((save_count>9)&&(save_count<14))||((save_count>25)&&(save_count<29))) {
			chrome.storage.local.get("ratingdone", function(val) {
				if (typeof val.ratingdone != 'undefined'){
					if(!val.ratingdone) {
						createLightNotification('please-rate');
					}
				}
				 else {
				 	chrome.storage.local.set({"ratingdone": 0}, function() {
						//console.log("new count saved");
					});
				 }
			});
		}

		window.save_version = "Version X";
		// console.log("VERSION Xxxxxxxx");

		chrome.storage.local.get("user_version", function(valu) {
			// console.log("Which Version", valu);
			if (typeof valu.user_version != 'undefined'){
				if(valu.user_version=="Y") {
					save_version = "Version Y";

					// console.log("VERSION Yyyyyy");
					
					
				}
			}
		});

		window.save_version_push(save_count, save_version);

		

	}, 1200);


    $('a.link').hover(

    function() {
        var a = $(this);
        a.css('backgroundPositionY', a.outerHeight() - 2).stop(true, true).animate({
            'backgroundPositionX': a.outerWidth()
        }, 600);
    }, function() {
        var a = $(this);
        a.css('backgroundPositionY', a.outerHeight() - 2).stop(true, true).animate({
            'backgroundPositionX': -81
        }, 600);
    });

window.save_version_push = function(save_count, save_version) {
	// console.log("save_count", save_count);
	// console.log("save_version", save_version);
					if (save_count==1) {
						DEBUG_TRACKING(["_trackEvent", "Usage", save_version, "1"]);
					}
					else if (save_count==2) {
						DEBUG_TRACKING(["_trackEvent", "Usage", save_version, "2"]);
					}
					else if (save_count==5) {
						DEBUG_TRACKING(["_trackEvent", "Usage", save_version, "5"]);
					}
					else if (save_count==10) {
						DEBUG_TRACKING(["_trackEvent", "Usage", save_version, "10"]);
					}
					else if (save_count==15) {
						DEBUG_TRACKING(["_trackEvent", "Usage", save_version, "15"]);
					}
					else if (save_count==20) {
						DEBUG_TRACKING(["_trackEvent", "Usage", save_version, "20"]);
					}
					else if (save_count==25) {
						DEBUG_TRACKING(["_trackEvent", "Usage", save_version, "25"]);
					}
					else if (save_count==30) {
						// console.log("sasdasdasdasdasd");
						DEBUG_TRACKING(["_trackEvent", "Usage", save_version, "30"]);
					}
					else if (save_count==40) {
						DEBUG_TRACKING(["_trackEvent", "Usage", save_version, "40"]);
					}
					else if (save_count==50) {
						DEBUG_TRACKING(["_trackEvent", "Usage", save_version, "50"]);
					}
					else if (save_count==75) {
						DEBUG_TRACKING(["_trackEvent", "Usage", save_version, "75"]);
					}
					else if (save_count==100) {
						DEBUG_TRACKING(["_trackEvent", "Usage", save_version, "100"]);
					}
					else if (save_count==150) {
						DEBUG_TRACKING(["_trackEvent", "Usage", save_version, "150"]);
					}
					else if (save_count==250) {
						DEBUG_TRACKING(["_trackEvent", "Usage", save_version, "250"]);
					}
					else if (save_count==400) {
						DEBUG_TRACKING(["_trackEvent", "Usage", save_version, "400"]);
					}
					else if (save_count==750) {
						DEBUG_TRACKING(["_trackEvent", "Usage", save_version, "750"]);
					}
					else if (save_count==1000) {
						DEBUG_TRACKING(["_trackEvent", "Usage", save_version, "1000"]);
					}
					else if (save_count==1500) {
						DEBUG_TRACKING(["_trackEvent", "Usage", save_version, "1500"]);
					}
					else if (save_count==3000) {
						DEBUG_TRACKING(["_trackEvent", "Usage", save_version, "3000"]);
					}
}

window.correct_switch = function() {
	// console.log('correct_switch');
	chrome.storage.local.get("sync_settings", function(val) {
		if (typeof val.sync_settings != 'undefined'){
			if(val.sync_settings) {
				$('.sync-status').html('ENABLED');
				$('.switch-is-here').html('<input type="checkbox" class="js-switch sync-status-switch"/>');
				$('.sync-status-switch').attr('checked', 'true');
			}
			else {
				$('.sync-status').html('DISABLED');
				$('.sync-status-switch').removeAttr('checked');
			}
			setTimeout(makeSwitch, 70);
		}
	});
}

window.correct_switch();


});

	function makeSwitch() {

		$('.switchery').remove();
		// console.log("SWITCHERY REMOVED");
		// if(_UNIVERSAL_SETTINGS.sync) {
		// 	// console.log("SWITCHERY TRUE");
		// 	$('.js-switch').prop('checked', true);
		// }
		// else $('.js-switch').prop('checked', false);

		window.elem_s = document.querySelector('.js-switch');
		window.init_s = new Switchery(elem_s);

		window.elem_s.onchange = function() {

	 	window.myModal.close();


	 	var string = $('#txt').val();
	 	var num_newlines = string.split("\n").length - 1;
		var augmented_length = string.length + num_newlines;

	 	// console.log('checkIfSyncPossible', augmented_length);
	 	if ((augmented_length>0.99*window._CHARLIMIT)&&(!_UNIVERSAL_SETTINGS.sync)) {
	 		window.conformMyModal = $('#myModal').jBox('Modal', {
			    content: $("#modal_sync_error")
			});
	 	}
	 	else {
	 		window.conformMyModal = $('#myModal').jBox('Modal', {
			    content: $("#modal_sync_confirm")
			});

			chrome.storage.local.get("sync_settings", function(val) {
				if (typeof val.sync_settings != 'undefined'){
					if(val.sync_settings) {
						$('.enableSyncConfirmButton').text('Yes, DISABLE SYNC.');
						$('.enableSyncConfirmButtonText').text('Note: Your 4000 Character limit will be removed. ');
					}
					else {
						$('.enableSyncConfirmButton').text('Yes, ENABLE SYNC.');
						$('.enableSyncConfirmButtonText').text('Note: Your note size will be limited to 4000 characters only. ');

					}
				}
			});
	 	}

		window.conformMyModal.open();
	}
};

function applyPopupSize(size) {

	if (size=="sz_tiny") {
		$('body').css('min-width', 190);
		$('body').css('min-height', 340);
		$('body').css('height', 340);
		$('html').css('height', 340);
		window.resizeTo(190,340);
	}

	if (size=="sz_standard") {
		$('body').css('min-width', 250);
		$('body').css('min-height', 390);
		$('body').css('height', 390);
		$('html').css('height', 390);
		window.resizeTo(250,390);
	}

	if (size=="sz_long") {
		$('body').css('min-width', 250);
		$('body').css('min-height', 550);
		$('body').css('height', 550);
		$('html').css('height', 550);
		window.resizeTo(250,550);
	}

	if (size=="sz_wide") {
		$('body').css('min-width', 500);
		$('body').css('min-height', 390);
		$('body').css('height', 390);
		$('html').css('height', 390);
		window.resizeTo(500,390);
	}

	if (size=="sz_swide") {
		$('body').css('min-width', 750);
		$('body').css('min-height', 390);
		$('body').css('height', 390);
		$('html').css('height', 390);
		window.resizeTo(750,390);
	}

	if (size=="sz_giant") {
		$('body').css('min-width', 500);
		$('body').css('min-height', 550);
		$('body').css('height', 550);
		$('html').css('height', 550);
		window.resizeTo(500,550);
	}

	if (size=="sz_ggiant") {
		$('body').css('min-width', 750);
		$('body').css('min-height', 550);
		$('body').css('height', 550);
		$('html').css('height', 550);
		window.resizeTo(750,550);
	}
	generateMenu();
}

function DEBUG_TRACKING(attr) {
	// return 1;
	
	if (window._DEBUGMODE) {
		console.log("TRACKING: attr", attr);
		return 1;
	}
	_gaq.push(attr);
	// console.log("debugging: ", attr);
}

function getTimeForTracking(type) {
	if(type=="default") {
		return Math.floor((Date.now()-window._STARTTIME)/1000);
	}

}




// chrome.extension.sendMessage({directive: "windowAsked"}, function(response) {
// 	console.log("reponseee", response);
// });

// if (mywindow) {
// 	mywindow.close();
// }


// setInterval(dynamicSmile, 4000);

function dynamicSmile() {
	$('.dynamic-smile').attr('src', 'smile'+(Math.floor(Math.random() * 6) + 1)+'.gif');
}

$('.dynamic-smile').attr('src', 'smile'+(Math.floor(Math.random() * 6) + 1)+'.gif');

window._USAGE_6 = 1;
window._USAGE_10 = 1;
window._USAGE_20 = 1;
window._USAGE_40 = 1;
window._USAGE_60 = 1;
window._USAGE_100 = 1;
window._USAGE_200 = 1;
window._USAGE_300 = 1;
window._USAGE_400 = 1;
window._USAGE_450 = 1;
window._USAGE_550 = 1;
window._USAGE_650 = 1;

function trackUsage() {
	var deltaTime = (Date.now()-window._STARTTIME)/1000; // in Seconds
	if((deltaTime>5.9)&&(window._USAGE_10)) {
		DEBUG_TRACKING(["_trackEvent", "Usage", window._APP_VERSION, "6 Sec New"]);
		window._USAGE_6=0;
	}
	if((deltaTime>10)&&(window._USAGE_10)) {
		DEBUG_TRACKING(["_trackEvent", "Usage", window._APP_VERSION, "10 Sec"]);
		window._USAGE_10=0;
	}
	if((deltaTime>20)&&(window._USAGE_20)) {
		DEBUG_TRACKING(["_trackEvent", "Usage", window._APP_VERSION, "20 Sec"]);
		window._USAGE_20=0;
	}
	if((deltaTime>40)&&(window._USAGE_40)) {
		DEBUG_TRACKING(["_trackEvent", "Usage", window._APP_VERSION, "40 Sec"]);
		window._USAGE_40=0;
	}
	if((deltaTime>60)&&(window._USAGE_60)) {
		DEBUG_TRACKING(["_trackEvent", "Usage", window._APP_VERSION, "60 Sec"]);
		window._USAGE_60=0;
	}
	if((deltaTime>100)&&(window._USAGE_100)) {
		DEBUG_TRACKING(["_trackEvent", "Usage", window._APP_VERSION, "100 Sec"]);
		window._USAGE_100=0;
	}
	if((deltaTime>200)&&(window._USAGE_200)) {
		DEBUG_TRACKING(["_trackEvent", "Usage", window._APP_VERSION, "200 Sec"]);
		window._USAGE_200=0;
	}
	if((deltaTime>300)&&(window._USAGE_300)) {
		DEBUG_TRACKING(["_trackEvent", "Usage", window._APP_VERSION, "300 Sec"]);
		window._USAGE_300=0;
	}
	if((deltaTime>400)&&(window._USAGE_400)) {
		DEBUG_TRACKING(["_trackEvent", "Usage", window._APP_VERSION, "400 Sec"]);
		window._USAGE_400=0;
	}
	if((deltaTime>450)&&(window._USAGE_450)) {
		DEBUG_TRACKING(["_trackEvent", "Usage", window._APP_VERSION, "450 Sec"]);
		window._USAGE_450=0;
	}
	if((deltaTime>550)&&(window._USAGE_550)) {
		DEBUG_TRACKING(["_trackEvent", "Usage", window._APP_VERSION, "550 Sec"]);
		window._USAGE_550=0;
	}
	if((deltaTime>650)&&(window._USAGE_650)) {
		DEBUG_TRACKING(["_trackEvent", "Usage", window._APP_VERSION, "650 Sec"]);
		window._USAGE_650=0;
	}

}

setInterval(trackUsage, 10000);


// ---------------------------------------------  //


window.keep_smiling = true;   //   :)