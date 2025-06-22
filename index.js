import{S as m,a as g,i as o}from"./assets/vendor-DgNwKBFL.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(r){if(r.ep)return;r.ep=!0;const t=a(r);fetch(r.href,t)}})();const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),f=new m(".gallery a",{captionsData:"alt",captionDelay:250});function h(i){c.innerHTML=i.map(e=>`
        <li class="gallery-item">
            <a class="gallery-link" href=${e.largeImageURL}>
                <img
                    class="gallery-image"
                    src="${e.webformatURL}"
                    alt="${e.tags}"
                />
                <ul class="card-info">
                    <li>likes:${e.likes}</li>
                    <li>views:${e.views}</li>
                    <li>comments:${e.comments}</li>
                    <li>downloads:${e.downloads}</li>
                </ul>
            </a>
        </li>
    `).join(""),f.refresh()}function y(){c.innerHTML="",f.refresh()}function p(){u.classList.remove("hidden")}function L(){u.classList.add("hidden")}function b(i){const e=new URLSearchParams({key:"50857133-3b0b39e0288c55ff632440828",q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"});return g.get(`https://pixabay.com/api/?${e}`).then(a=>a.data.hits.length===0?(o.error({title:"error",message:"Sorry, there are no images matching your search query. Please try again!"}),null):a.data.hits).catch(a=>(o.error({title:"Error",message:`message: ${a.message}`}),null))}const d=document.querySelector(".form"),l=d.elements["search-text"];d.addEventListener("submit",q);function q(i){if(i.preventDefault(),l.value.trim()===""){o.warning({title:"Warning",message:"empty query"});return}const e=l.value.trim();y(),p(),b(e).then(a=>{a.length===0?o.error({title:"error",message:"Sorry, there are no images matching your search query. Please try again!"}):h(a)}).catch(a=>{o.error({title:"Error",message:"failed to fetch images"})}).finally(()=>{L()})}
//# sourceMappingURL=index.js.map
