"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2212],{58363:function(e,t){t.Z=function(e,t){if(e&&t){var n=Array.isArray(t)?t:t.split(","),r=e.name||"",o=(e.type||"").toLowerCase(),i=o.replace(/\/.*$/,"");return n.some(function(e){var t=e.trim().toLowerCase();return"."===t.charAt(0)?r.toLowerCase().endsWith(t):t.endsWith("/*")?i===t.replace(/\/.*$/,""):o===t})}return!0}},32512:function(e,t,n){n.d(t,{uI:function(){return H}});var r=n(67294),o=n(45697),i=n.n(o),a=n(70655),c=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function u(e,t){var n=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var n=t.split(".").pop().toLowerCase(),r=c.get(n);r&&Object.defineProperty(e,"type",{value:r,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!=typeof n.path){var r=e.webkitRelativePath;Object.defineProperty(n,"path",{value:"string"==typeof t?t:"string"==typeof r&&r.length>0?r:e.name,writable:!1,configurable:!1,enumerable:!0})}return n}var l=[".DS_Store","Thumbs.db"];function s(e){return"object"==typeof e&&null!==e}function f(e){return e.filter(function(e){return -1===l.indexOf(e.name)})}function p(e){if(null===e)return[];for(var t=[],n=0;n<e.length;n++){var r=e[n];t.push(r)}return t}function d(e){if("function"!=typeof e.webkitGetAsEntry)return m(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?v(t):m(e)}function m(e){var t=e.getAsFile();return t?Promise.resolve(u(t)):Promise.reject(e+" is not a File")}function g(e){return(0,a.mG)(this,void 0,void 0,function(){return(0,a.Jh)(this,function(t){return[2,e.isDirectory?v(e):function(e){return(0,a.mG)(this,void 0,void 0,function(){return(0,a.Jh)(this,function(t){return[2,new Promise(function(t,n){e.file(function(n){t(u(n,e.fullPath))},function(e){n(e)})})]})})}(e)]})})}function v(e){var t=e.createReader();return new Promise(function(e,n){var r=[];!function o(){var i=this;t.readEntries(function(t){return(0,a.mG)(i,void 0,void 0,function(){var i;return(0,a.Jh)(this,function(a){switch(a.label){case 0:if(t.length)return[3,5];a.label=1;case 1:return a.trys.push([1,3,,4]),[4,Promise.all(r)];case 2:return e(a.sent()),[3,4];case 3:return n(a.sent()),[3,4];case 4:return[3,6];case 5:i=Promise.all(t.map(g)),r.push(i),o(),a.label=6;case 6:return[2]}})})},function(e){n(e)})}()})}var y=n(58363);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach(function(t){w(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],a=!0,c=!1;try{for(o=o.call(e);!(a=(n=o.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){c=!0,r=u}finally{try{a||null==o.return||o.return()}finally{if(c)throw r}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return O(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return O(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var x=function(e){var t=Array.isArray(e=Array.isArray(e)&&1===e.length?e[0]:e)?"one of ".concat(e.join(", ")):e;return{code:"file-invalid-type",message:"File type must be ".concat(t)}},j=function(e){return{code:"file-too-large",message:"File is larger than ".concat(e," ").concat(1===e?"byte":"bytes")}},F=function(e){return{code:"file-too-small",message:"File is smaller than ".concat(e," ").concat(1===e?"byte":"bytes")}},A={code:"too-many-files",message:"Too many files"};function k(e,t){var n="application/x-moz-file"===e.type||(0,y.Z)(e,t);return[n,n?null:x(t)]}function P(e,t,n){if(E(e.size)){if(E(t)&&E(n)){if(e.size>n)return[!1,j(n)];if(e.size<t)return[!1,F(t)]}else if(E(t)&&e.size<t)return[!1,F(t)];else if(E(n)&&e.size>n)return[!1,j(n)]}return[!0,null]}function E(e){return null!=e}function C(e){return"function"==typeof e.isPropagationStopped?e.isPropagationStopped():void 0!==e.cancelBubble&&e.cancelBubble}function S(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(e){return"Files"===e||"application/x-moz-file"===e}):!!e.target&&!!e.target.files}function z(e){e.preventDefault()}function R(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return t.some(function(t){return!C(e)&&t&&t.apply(void 0,[e].concat(r)),C(e)})}}function T(){return"showOpenFilePicker"in window}var I=["children"],L=["open"],K=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],B=["refKey","onChange","onClick"];function M(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],a=!0,c=!1;try{for(o=o.call(e);!(a=(n=o.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){c=!0,r=u}finally{try{a||null==o.return||o.return()}finally{if(c)throw r}}return i}}(e,t)||G(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function G(e,t){if(e){if("string"==typeof e)return J(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return J(e,t)}}function J(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach(function(t){$(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function $(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function U(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var W=(0,r.forwardRef)(function(e,t){var n=e.children,o=H(U(e,I)),i=o.open,a=U(o,L);return(0,r.useImperativeHandle)(t,function(){return{open:i}},[i]),r.createElement(r.Fragment,null,n(_(_({},a),{},{open:i})))});W.displayName="Dropzone";var Z={disabled:!1,getFilesFromEvent:function(e){return(0,a.mG)(this,void 0,void 0,function(){return(0,a.Jh)(this,function(t){return s(e)&&s(e.dataTransfer)?[2,function(e,t){return(0,a.mG)(this,void 0,void 0,function(){var n;return(0,a.Jh)(this,function(r){switch(r.label){case 0:if(null===e)return[2,[]];if(!e.items)return[3,2];if(n=p(e.items).filter(function(e){return"file"===e.kind}),"drop"!==t)return[2,n];return[4,Promise.all(n.map(d))];case 1:return[2,f(function e(t){return t.reduce(function(t,n){return(0,a.fl)(t,Array.isArray(n)?e(n):[n])},[])}(r.sent()))];case 2:return[2,f(p(e.files).map(function(e){return u(e)}))]}})})}(e.dataTransfer,e.type)]:s(e)&&s(e.target)?[2,p(e.target.files).map(function(e){return u(e)})]:Array.isArray(e)&&e.every(function(e){return"getFile"in e&&"function"==typeof e.getFile})?[2,function(e){return(0,a.mG)(this,void 0,void 0,function(){return(0,a.Jh)(this,function(t){switch(t.label){case 0:return[4,Promise.all(e.map(function(e){return e.getFile()}))];case 1:return[2,t.sent().map(function(e){return u(e)})]}})})}(e)]:[2,[]]})})},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!1};W.defaultProps=Z,W.propTypes={children:i().func,accept:i().oneOfType([i().string,i().arrayOf(i().string)]),multiple:i().bool,preventDropOnDocument:i().bool,noClick:i().bool,noKeyboard:i().bool,noDrag:i().bool,noDragEventsBubbling:i().bool,minSize:i().number,maxSize:i().number,maxFiles:i().number,disabled:i().bool,getFilesFromEvent:i().func,onFileDialogCancel:i().func,onFileDialogOpen:i().func,useFsAccessApi:i().bool,onDragEnter:i().func,onDragLeave:i().func,onDragOver:i().func,onDrop:i().func,onDropAccepted:i().func,onDropRejected:i().func,validator:i().func};var q={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,draggedFiles:[],acceptedFiles:[],fileRejections:[]};function H(){var e,t,n,o,i,a,c,u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=_(_({},Z),u),s=l.accept,f=l.disabled,p=l.getFilesFromEvent,d=l.maxSize,m=l.minSize,g=l.multiple,v=l.maxFiles,y=l.onDragEnter,b=l.onDragLeave,O=l.onDragOver,x=l.onDrop,j=l.onDropAccepted,F=l.onDropRejected,E=l.onFileDialogCancel,I=l.onFileDialogOpen,L=l.useFsAccessApi,N=l.preventDropOnDocument,W=l.noClick,H=l.noKeyboard,X=l.noDrag,Y=l.noDragEventsBubbling,ee=l.validator,et=(0,r.useMemo)(function(){return"function"==typeof I?I:V},[I]),en=(0,r.useMemo)(function(){return"function"==typeof E?E:V},[E]),er=(0,r.useRef)(null),eo=(0,r.useRef)(null),ei=M((0,r.useReducer)(Q,q),2),ea=ei[0],ec=ei[1],eu=ea.isFocused,el=ea.isFileDialogActive,es=ea.draggedFiles,ef=function(){el&&setTimeout(function(){eo.current&&!eo.current.files.length&&(ec({type:"closeDialog"}),en())},300)};(0,r.useEffect)(function(){return L&&T()?function(){}:(window.addEventListener("focus",ef,!1),function(){window.removeEventListener("focus",ef,!1)})},[eo,el,en,L]);var ep=(0,r.useRef)([]),ed=function(e){er.current&&er.current.contains(e.target)||(e.preventDefault(),ep.current=[])};(0,r.useEffect)(function(){return N&&(document.addEventListener("dragover",z,!1),document.addEventListener("drop",ed,!1)),function(){N&&(document.removeEventListener("dragover",z),document.removeEventListener("drop",ed))}},[er,N]);var em=(0,r.useCallback)(function(e){var t;e.preventDefault(),e.persist(),ek(e),ep.current=[].concat(function(e){if(Array.isArray(e))return J(e)}(t=ep.current)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||G(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[e.target]),S(e)&&Promise.resolve(p(e)).then(function(t){(!C(e)||Y)&&(ec({draggedFiles:t,isDragActive:!0,type:"setDraggedFiles"}),y&&y(e))})},[p,y,Y]),eg=(0,r.useCallback)(function(e){e.preventDefault(),e.persist(),ek(e);var t=S(e);if(t&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(n){}return t&&O&&O(e),!1},[O,Y]),ev=(0,r.useCallback)(function(e){e.preventDefault(),e.persist(),ek(e);var t=ep.current.filter(function(e){return er.current&&er.current.contains(e)}),n=t.indexOf(e.target);-1!==n&&t.splice(n,1),ep.current=t,!(t.length>0)&&(ec({isDragActive:!1,type:"setDraggedFiles",draggedFiles:[]}),S(e)&&b&&b(e))},[er,b,Y]),ey=(0,r.useCallback)(function(e,t){var n=[],r=[];e.forEach(function(e){var t=M(k(e,s),2),o=t[0],i=t[1],a=M(P(e,m,d),2),c=a[0],u=a[1],l=ee?ee(e):null;if(o&&c&&!l)n.push(e);else{var f=[i,u];l&&(f=f.concat(l)),r.push({file:e,errors:f.filter(function(e){return e})})}}),(!g&&n.length>1||g&&v>=1&&n.length>v)&&(n.forEach(function(e){r.push({file:e,errors:[A]})}),n.splice(0)),ec({acceptedFiles:n,fileRejections:r,type:"setFiles"}),x&&x(n,r,t),r.length>0&&F&&F(r,t),n.length>0&&j&&j(n,t)},[ec,g,s,m,d,v,x,j,F,ee]),eb=(0,r.useCallback)(function(e){e.preventDefault(),e.persist(),ek(e),ep.current=[],S(e)&&Promise.resolve(p(e)).then(function(t){(!C(e)||Y)&&ey(t,e)}),ec({type:"reset"})},[p,ey,Y]),eh=(0,r.useCallback)(function(){if(L&&T()){ec({type:"openDialog"}),et();var e,t={multiple:g,types:[{description:"everything",accept:Array.isArray(e="string"==typeof(e=s)?e.split(","):e)?e.filter(function(e){return"audio/*"===e||"video/*"===e||"image/*"===e||"text/*"===e||/\w+\/[-+.\w]+/g.test(e)}).reduce(function(e,t){return h(h({},e),{},w({},t,[]))},{}):{}}]};window.showOpenFilePicker(t).then(function(e){return p(e)}).then(function(e){return ey(e,null)}).catch(function(e){return en(e)}).finally(function(){return ec({type:"closeDialog"})});return}eo.current&&(ec({type:"openDialog"}),et(),eo.current.value=null,eo.current.click())},[ec,et,en,L,ey,s,g]),ew=(0,r.useCallback)(function(e){er.current&&er.current.isEqualNode(e.target)&&(32===e.keyCode||13===e.keyCode)&&(e.preventDefault(),eh())},[er,eo,eh]),eD=(0,r.useCallback)(function(){ec({type:"focus"})},[]),eO=(0,r.useCallback)(function(){ec({type:"blur"})},[]),ex=(0,r.useCallback)(function(){W||(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return -1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")||-1!==e.indexOf("Edge/")}()?setTimeout(eh,0):eh())},[eo,W,eh]),ej=function(e){return f?null:e},eF=function(e){return H?null:ej(e)},eA=function(e){return X?null:ej(e)},ek=function(e){Y&&e.stopPropagation()},eP=(0,r.useMemo)(function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=e.role,r=e.onKeyDown,o=e.onFocus,i=e.onBlur,a=e.onClick,c=e.onDragEnter,u=e.onDragOver,l=e.onDragLeave,s=e.onDrop,p=U(e,K);return _(_($({onKeyDown:eF(R(r,ew)),onFocus:eF(R(o,eD)),onBlur:eF(R(i,eO)),onClick:ej(R(a,ex)),onDragEnter:eA(R(c,em)),onDragOver:eA(R(u,eg)),onDragLeave:eA(R(l,ev)),onDrop:eA(R(s,eb)),role:"string"==typeof n&&""!==n?n:"button"},void 0===t?"ref":t,er),f||H?{}:{tabIndex:0}),p)}},[er,ew,eD,eO,ex,em,eg,ev,eb,H,X,f]),eE=(0,r.useCallback)(function(e){e.stopPropagation()},[]),eC=(0,r.useMemo)(function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=e.onChange,r=e.onClick,o=U(e,B);return _(_({},$({accept:s,multiple:g,type:"file",style:{display:"none"},onChange:ej(R(n,eb)),onClick:ej(R(r,eE)),autoComplete:"off",tabIndex:-1},void 0===t?"ref":t,eo)),o)}},[eo,s,g,eb,f]),eS=es.length,ez=eS>0&&(t=(e={files:es,accept:s,minSize:m,maxSize:d,multiple:g,maxFiles:v}).files,n=e.accept,o=e.minSize,i=e.maxSize,a=e.multiple,c=e.maxFiles,(!!a||!(t.length>1))&&(!a||!(c>=1)||!(t.length>c))&&t.every(function(e){var t=D(k(e,n),1)[0],r=D(P(e,o,i),1)[0];return t&&r}));return _(_({},ea),{},{isDragAccept:ez,isDragReject:eS>0&&!ez,isFocused:eu&&!f,getRootProps:eP,getInputProps:eC,rootRef:er,inputRef:eo,open:ej(eh)})}function Q(e,t){switch(t.type){case"focus":return _(_({},e),{},{isFocused:!0});case"blur":return _(_({},e),{},{isFocused:!1});case"openDialog":return _(_({},q),{},{isFileDialogActive:!0});case"closeDialog":return _(_({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":var n=t.isDragActive,r=t.draggedFiles;return _(_({},e),{},{draggedFiles:r,isDragActive:n});case"setFiles":return _(_({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return _({},q);default:return e}}function V(){}},353:function(e,t,n){var r=n(67294),o=n(45697),i=n.n(o);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c=(0,r.forwardRef)(function(e,t){var n=e.color,o=e.size,i=void 0===o?24:o,c=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["color","size"]);return r.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),r.createElement("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),r.createElement("polyline",{points:"17 8 12 3 7 8"}),r.createElement("line",{x1:"12",y1:"3",x2:"12",y2:"15"}))});c.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},c.displayName="Upload",t.Z=c}}]);