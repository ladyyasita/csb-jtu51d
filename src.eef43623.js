parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"H99C":[function(require,module,exports) {
var e=new Date,t=document.querySelector("#datetime"),n=e.getHours(),a=e.getMinutes(),r=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],c=r[e.getDay()];function o(e){console.log(e.data),document.querySelector("#city").innerHTML=e.data.name,document.querySelector("#current-temp").innerHTML=Math.round(e.data.main.temp),document.querySelector("#humidity").innerHTML=e.data.main.humidity,document.querySelector("#wind").innerHTML=Math.round(e.data.wind.speed),document.querySelector("#realfeel").innerHTML=Math.round(e.data.main.feels_like),document.querySelector("#forecast").innerHTML=e.data.weather[0].main}function u(e){var t="https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat("5f472b7acba333cd8a035ea85a0d4d4c","&units=metric");axios.get(t).then(o)}function i(e){e.preventDefault(),u(document.querySelector("#city-input").value)}function d(e){var t=e.coords.latitude,n=e.coords.longitude,a="https://api.openweathermap.org/data/2.5/weather?lat=".concat(t,"&lon=").concat(n,"&units=metric&appid=").concat("5f472b7acba333cd8a035ea85a0d4d4c");axios.get(a).then(o)}function l(e){e.preventDefault(),navigator.geolocation.getCurrentPosition(d)}function m(e){e.preventDefault(),document.querySelector("#current-temp").innerHTML=17}t.innerHTML="".concat(c,", ").concat(n,":").concat(a);var p=document.querySelector("#cel-link");function s(e){e.preventDefault(),document.querySelector("#current-temp").innerHTML=62.6}p.addEventListener("click",m);var y=document.querySelector("#fahr-link");y.addEventListener("click",s);var f=document.querySelector("#search-form");f.addEventListener("submit",i);var h=document.querySelector("#current-location-button");h.addEventListener("click",l),u("Paris");
},{}]},{},["H99C"], null)
//# sourceMappingURL=/csb-jtu51d/src.eef43623.js.map