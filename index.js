import{S as q,a as P,i as o}from"./assets/vendor-DgNwKBFL.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function i(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(r){if(r.ep)return;r.ep=!0;const t=i(r);fetch(r.href,t)}})();const g=document.querySelector(".gallery"),m=document.querySelector(".loader"),f=document.querySelector(".load-more"),h=new q(".gallery a",{captionsData:"alt",captionDelay:250});function y(s){g.insertAdjacentHTML("beforeend",s.map(e=>`
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
    `).join("")),h.refresh()}function $(){g.innerHTML="",h.refresh()}function p(){m.classList.remove("hidden")}function L(){m.classList.add("hidden")}function w(){f.classList.remove("hidden")}function n(){f.classList.add("hidden")}async function b(s,e){const i=new URLSearchParams({key:"50857133-3b0b39e0288c55ff632440828",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:e,per_page:limit});try{const a=await P.get(`https://pixabay.com/api/?${i}`);if(a.data.hits.length===0)return o.error({title:"error",message:"Sorry, there are no images matching your search query. Please try again!"}),null;{const r=a.data.hits,t=a.data.totalHits;return{images:r,totalHits:t}}}catch(a){return o.error({title:"Error",message:`message: ${a.message}`}),null}}const v=document.querySelector(".form"),d=v.elements["search-text"],M=document.querySelector(".load-more");let l=1,u="";const S=15;v.addEventListener("submit",E);M.addEventListener("click",H);async function E(s){if(s.preventDefault(),l=1,d.value.trim()===""){o.warning({title:"Warning",message:"empty query"});return}u=d.value.trim(),$(),n(),p();try{const{images:e,totalHits:i}=await b(u,l),a=Math.ceil(i/S);e.length===0?o.error({title:"error",message:"Sorry, there are no images matching your search query. Please try again!"}):(y(e),w(),page>=a&&(o.warning({title:"warning",message:"We're sorry, but you've reached the end of search results."}),n()))}catch{return o.error({title:"Error",message:"failed to fetch images"}),null}L()}async function H(s){s.preventDefault(),l+=1,n(),p();try{const{images:e,totalHits:i}=await b(u,l),a=Math.ceil(i/S);e.length===0?o.error({title:"error",message:"Sorry, there are no images matching your search query. Please try again!"}):(y(e),w(),page>=a&&(o.warning({title:"warning",message:"We're sorry, but you've reached the end of search results."}),n()))}catch{o.error({title:"Error",message:"failed to fetch images"})}L()}
//# sourceMappingURL=index.js.map
