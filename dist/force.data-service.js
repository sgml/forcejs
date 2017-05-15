!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.DataService=t():(e.force=e.force||{},e.force.DataService=t())}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t){"use strict";function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function e(t,r,n){null===t&&(t=Function.prototype);var a=Object.getOwnPropertyDescriptor(t,r);if(void 0===a){var o=Object.getPrototypeOf(t);return null===o?void 0:e(o,r,n)}if("value"in a)return a.value;var s=a.get;if(void 0!==s)return s.call(n)},s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=window.location.pathname.substring(0,window.location.pathname.lastIndexOf("/")),c=window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:""),u=c+i,h=function(e,t){return"/"!==e.charAt(e.length-1)&&(e+="/"),"/"===t.charAt(0)&&(t=t.substr(1)),e+t},p=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=[],n=void 0;for(n in e)e.hasOwnProperty(n)&&(t?r.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n])):r.push(n+"="+e[n]));return r.join("&")},d=function(e){var t=e.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([^?#]*)(\?[^#]*|)(#.*|)$/);return t&&{protocol:t[1],host:t[2],hostname:t[3],port:t[4],path:t[5],params:parseQueryString(t[6]),hash:t[7]}},l=void 0,v={},f=void 0;document.addEventListener("deviceready",function(){try{f=cordova.require("com.salesforce.plugin.network")}catch(e){}},!1),e.exports={createInstance:function(e,t,r){var n=void 0;return n=window.cordova?new b(e,t):new g(e,t),r?v[r]=n:l=n,n},getInstance:function(e){return e?v[e]:l}};var y=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a(this,e),this.appId=t.appId,this.accessToken=t.accessToken,this.instanceURL=t.instanceURL,this.refreshToken=t.refreshToken,this.userId=t.userId,this.apiVersion=r.apiVersion||"v36.0",this.loginURL=r.loginURL||"https://login.salesforce.com",this.useProxy=!(r.useProxy||window.cordova||window.SfdcApp||window.sforce),this.proxyURL=r.proxyURL||u}return s(e,[{key:"getRequestBaseURL",value:function(){var e=void 0;return e=this.useProxy?this.proxyURL:this.instanceURL?this.instanceURL:c,"/"===e.slice(-1)&&(e=e.slice(0,-1)),e}},{key:"refreshAccessToken",value:function(){}},{key:"getUserId",value:function(){return this.userId}},{key:"request",value:function(e){var t=this;return new Promise(function(r,n){if(!t.accessToken&&!t.refreshToken)return void("function"==typeof errorHandler&&n("No access token. Login and try again."));var a=e.method||"GET",o=new XMLHttpRequest,s=t.getRequestBaseURL();if("/"!==e.path.charAt(0)&&(e.path="/"+e.path),s+=e.path,e.params&&(s+="?"+p(e.params)),o.onreadystatechange=function(){4===o.readyState&&(o.status>199&&o.status<300?r(o.responseText?JSON.parse(o.responseText):void 0):401===o.status&&t.refreshToken?t.refreshAccessToken().then(function(){return t.request(e).then(function(e){return r(e)}).catch(function(e){return n(e)})}).catch(function(){n(o)}):n(o))},o.open(a,s,!0),o.setRequestHeader("Accept","application/json"),o.setRequestHeader("Authorization","Bearer "+t.accessToken),o.setRequestHeader("Cache-Control","no-store"),o.setRequestHeader("X-Connect-Bearer-Urls",!0),e.contentType&&o.setRequestHeader("Content-Type",e.contentType),e.headerParams)for(var i in e.headerParams.getOwnPropertyNames()){var c=e.headerParams[i];o.setRequestHeader(i,c)}t.useProxy&&o.setRequestHeader("Target-URL",t.instanceURL),o.send(e.data?JSON.stringify(e.data):void 0)})}},{key:"query",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r={path:"/services/data/"+this.apiVersion+"/query",params:{q:e}};return t?this.batchTransaction(r):this.request(r)}},{key:"retrieve",value:function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a={path:"/services/data/"+this.apiVersion+"/sobjects/"+e+"/"+t,params:r?{fields:"string"==typeof r?r:r.join(",")}:void 0};return n?this.batchTransaction(a):this.request(a)}},{key:"getPickListValues",value:function(e,t){var r={path:"/services/data/"+this.apiVersion+"/sobjects/"+e+"/describe"};return t?this.batchTransaction(r):this.request(r)}},{key:"create",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n={method:"POST",contentType:"application/json",path:"/services/data/"+this.apiVersion+"/sobjects/"+e+"/",data:t};return r?this.batchTransaction(n):this.request(n)}},{key:"update",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"POST",n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=t.Id||t.id,o=JSON.parse(JSON.stringify(t));delete o.attributes,delete o.Id,delete o.id;var s={method:r,contentType:"application/json",path:"/services/data/"+this.apiVersion+"/sobjects/"+e+"/"+a,params:{_HttpMethod:"PATCH"},data:o};return n?this.batchTransaction(s):this.request(s)}},{key:"del",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n={method:"DELETE",path:"/services/data/"+this.apiVersion+"/sobjects/"+e+"/"+t};return r?this.batchTransaction(n):this.request(n)}},{key:"upsert",value:function(e,t,r,n){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o={method:"PATCH",contentType:"application/json",path:"/services/data/"+this.apiVersion+"/sobjects/"+e+"/"+t+"/"+r,data:n};return a?this.batchTransaction(o):this.request(o)}},{key:"apexrest",value:function(e){var t=void 0;return"string"==typeof e?t={path:e,method:"GET"}:(t=e,"/"!==t.path.charAt(0)&&(t.path="/"+t.path),"/services/apexrest"!==t.path.substr(0,18)&&(t.path="/services/apexrest"+t.path)),t.contentType||(t.contentType="DELETE"==t.method||"GET"==t.method?null:"application/json"),this.request(t)}},{key:"chatter",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r="/services/data/"+this.apiVersion+"/chatter",n=void 0;if(e&&e.substring)n={path:h(r,e)};else{if(!e||!e.path)return new Promise(function(e,t){return t("You must specify a path for the request")});n=e,n.path=h(r,e.path)}var a=n;return t?this.batchTransaction(a):this.request(a)}},{key:"versions",value:function(){return this.request({path:"/services/data/"})}},{key:"resources",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t={path:"/services/data/"+this.apiVersion};return e?this.batchTransaction(t):this.request(t)}},{key:"describeGlobal",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t={path:"/services/data/"+this.apiVersion+"/sobjects"};return e?this.batchTransaction(t):this.request(t)}},{key:"metadata",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r={path:"/services/data/"+this.apiVersion+"/sobjects/"+e};return t?this.batchTransaction(r):this.request(r)}},{key:"describe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r={path:"/services/data/"+this.apiVersion+"/sobjects/"+e+"/describe"};return t?this.batchTransaction(r):this.request(r)}},{key:"describeLayout",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];t=t||"";var n={path:"/services/data/"+this.apiVersion+"/sobjects/"+e+"/describe/layouts/"+t};return r?this.batchTransaction(n):this.request(n)}},{key:"reports",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];""!==e&&(e="/"+e);var r={path:"/services/data/"+this.apiVersion+"/analytics/reports"+e};return t?this.batchTransaction(r):this.request(r)}},{key:"dashboard",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];""!==e&&(e="/"+e);var r={path:"/services/data/"+this.apiVersion+"/analytics/dashboards"+e};return t?this.batchTransaction(r):this.request(r)}},{key:"queryMore",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=d(e),n={path:r.path,params:r.params};return t?this.batchTransaction(n):this.request(n)}},{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r={path:"/services/data/"+this.apiVersion+"/search",params:{q:e}};return t?this.batchTransaction(r):this.request(r)}},{key:"batchTransaction",value:function(e){return e.method||(e.method="GET"),"/"!==e.path.charAt(0)&&(e.path="/"+e.path),e.params?e.url=e.path+"?"+p(e.params,!1):e.url=e.path,e.hasOwnProperty("data")&&(e.body=e.data,delete e.data),delete e.params,delete e.path,new Promise(function(t,r){return t(e)})}},{key:"batch",value:function(e){for(var t=0;t<e.length;t++)delete e[t].contentType,e[t].hasOwnProperty("body")&&(e[t].richInput=e[t].body,delete e[t].body);return this.request({method:"POST",contentType:"application/json",path:"/services/data/"+this.apiVersion+"/composite/batch",data:{batchRequests:e}})}},{key:"composite",value:function(e){for(var t=0;t<e.length;t++)delete e[t].contentType;return this.request({method:"POST",contentType:"application/json",path:"/services/data/"+this.apiVersion+"/composite",data:{compositeRequest:e}})}}]),e}(),g=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return n(t,e),s(t,[{key:"refreshAccessToken",value:function(){var e=this;return new Promise(function(t,r){if(!e.refreshToken)return console.log("Missing refreshToken"),void r("Missing refreshToken");if(!e.appId)return console.log("Missing appId"),void r("Missing appId");var n=new XMLHttpRequest,a={grant_type:"refresh_token",refresh_token:e.refreshToken,client_id:e.appId},o=e.useProxy?e.proxyURL:e.loginURL;o=o+"/services/oauth2/token?"+p(a),n.onreadystatechange=function(){if(4===n.readyState)if(200===n.status){console.log("Token refreshed");var a=JSON.parse(n.responseText);e.accessToken=a.access_token,t()}else console.log("Error while trying to refresh token: "+n.responseText),r()},n.open("POST",o,!0),e.useProxy||n.setRequestHeader("Target-URL",e.loginURL),n.send()})}}]),t}(y),b=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return n(t,e),s(t,[{key:"refreshAccessToken",value:function(){var e=this;return new Promise(function(t,r){document.addEventListener("deviceready",function(){var n=void 0;try{n=cordova.require("com.salesforce.plugin.oauth")}catch(e){}return n?void n.authenticate(function(r){e.accessToken=r.accessToken,t()},function(){console.error("Error refreshing oauth access token using the oauth plugin"),r()}):(console.error("Salesforce Mobile SDK OAuth plugin not available"),void r("Salesforce Mobile SDK OAuth plugin not available"))},!1)})}},{key:"computeEndPointIfMissing",value:function(e,t){if(void 0!==e)return{endPoint:e,path:t};var r=t.split("/").filter(function(e){return""!==e});return r.length>=2?{endPoint:"/"+r.slice(0,2).join("/"),path:"/"+r.slice(2).join("/")}:{endPoint:"",path:t}}},{key:"request",value:function(e){var r=this;return f?new Promise(function(t,n){var a=r.computeEndPointIfMissing(e.endPoint,e.path);void 0===e.params&&(e.params={}),"q"in e.params&&(e.params.q=e.params.q.replace(/[\n]/g," ")),f.sendRequest(a.endPoint,a.path,t,n,e.method,e.data||e.params,e.headerParams)}):o(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"request",this).call(this,e)}}]),t}(y)}])});