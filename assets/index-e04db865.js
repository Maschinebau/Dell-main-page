(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const m=document.querySelector(".header__nav-button"),p=document.querySelector(".header__dropdown-menu");m.addEventListener("click",function(){this.classList.toggle("active"),p.classList.toggle("active")});const s=document.getElementById("slider"),y=s.querySelector(".slider__slides"),g=s.querySelector(".slider__next-btn"),d=s.querySelector(".slider__indicators"),a=s.querySelectorAll(".slider__img");let n=0;function h(o){n=o,u()}function u(){d.querySelectorAll(".indicator").forEach((r,i)=>{i===n?r.classList.add("active"):r.classList.remove("active")})}function f(){n=(n+1)%a.length,h(n),y.style.transform=`translateX(-${n*100}%)`}g.addEventListener("click",f);for(let o=0;o<a.length;o++){const r=document.createElement("div");r.classList.add("indicator"),d.appendChild(r)}u();setInterval(f,3e3);