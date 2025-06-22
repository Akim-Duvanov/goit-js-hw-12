import{S as v,a as P,i as s}from"./assets/vendor-DgNwKBFL.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(r){if(r.ep)return;r.ep=!0;const t=n(r);fetch(r.href,t)}})();const g=document.querySelector(".gallery"),f=document.querySelector(".loader"),h=document.querySelector(".load-more"),y=new v(".gallery a",{captionsData:"alt",captionDelay:250});function p(a){g.insertAdjacentElement("beforeend",a.map(e=>`
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
    `).join("")),y.refresh()}function $(){g.innerHTML="",y.refresh()}function L(){f.classList.remove("hidden")}function w(){f.classList.add("hidden")}function S(){h.classList.remove("hidden")}function u(){h.classList.add("hidden")}const d=15;async function b(a,e){const n=new URLSearchParams({key:"50857133-3b0b39e0288c55ff632440828",q:a,image_type:"photo",orientation:"horizontal",safesearch:"true",page:e,per_page:d});try{const o=await P.get(`https://pixabay.com/api/?${n}`),r=Math.ceil(o.data.totalHits/d);return o.data.hits.length===0?(s.error({title:"error",message:"Sorry, there are no images matching your search query. Please try again!"}),null):(e>=r&&(s.warning({title:"warning",message:"We're sorry, but you've reached the end of search results."}),u()),o.data.hits)}catch(o){return s.error({title:"Error",message:`message: ${o.message}`}),null}}const q=document.querySelector(".form"),m=q.elements["search-text"],E=document.querySelector(".load-more");let i=1,c="";q.addEventListener("submit",M);E.addEventListener("click",O);async function M(a){if(a.preventDefault(),i=1,m.value.trim()===""){s.warning({title:"Warning",message:"empty query"});return}c=m.value.trim(),$(),u(),L();try{const e=await b(c,i);e.length===0?s.error({title:"error",message:"Sorry, there are no images matching your search query. Please try again!"}):(p(e),S())}catch{return s.error({title:"Error",message:"failed to fetch images"}),null}w()}async function O(a){a.preventDefault(),i+=1,u(),L();try{const e=await b(c,i);e.length===0?s.error({title:"error",message:"Sorry, there are no images matching your search query. Please try again!"}):(p(e),S())}catch{s.error({title:"Error",message:"failed to fetch images"})}w()}
//# sourceMappingURL=index.js.map
