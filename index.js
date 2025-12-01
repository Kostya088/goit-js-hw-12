import{a as P,S as v,i as B}from"./assets/vendor-DvfmeZXB.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const M=P.create({baseURL:"https://pixabay.com/api/",params:{key:"53378731-ec62fc73e040a6645c7ce6629",image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:15}});async function m(t,o){const{data:a}=await M.get("",{params:{q:t,page:o}});return a}const f=document.querySelector(".gallery"),y=document.querySelector(".loader"),h=document.querySelector(".load-more-btn");function p(t){const o=t.map(({webformatURL:l,largeImageURL:e,tags:r,likes:i,views:w,comments:S,downloads:q})=>`<li class="gallery-item">
            <a class="gallery-link" href="${e}">
              <img
                  loading="lazy"
                  class="gallery-image"
                  src="${l}"
                  alt="${r}"
              />
            </a>
            <ul class="image-info">
                <li class="info">
                    Likes
                    <p>${i}</p>
                </li>
                <li class="info">
                    Views
                    <p>${w}</p>
                </li>
                <li class="info">
                    Comments
                    <p>${S}</p>
                </li>
                <li class="info">
                    Downloads
                    <p>${q}</p>
                </li>
            </ul>
        </li>`).join("");f.insertAdjacentHTML("beforeend",o),new v(".gallery a",{captionsData:"alt",captionDelay:250,animationSpeed:350,fadeSpeed:550,preloading:!0}).refresh()}function x(){f.innerHTML=""}function $(){y.classList.remove("hidden")}function c(){y.classList.add("hidden")}function O(){h.classList.remove("hidden")}function u(){h.classList.add("hidden")}function s(t){B.info({message:t,position:"topRight",progressBar:!1,messageColor:"black"})}const d=document.querySelector(".form"),I=document.querySelector(".load-more-btn");let g,n=1,L="",D=15,b;d.addEventListener("submit",async t=>{t.preventDefault();const o=d.elements.search.value.trim();if(L=o,n=1,!!o){x(),$();try{const a=await m(o,n);if(a.hits.length===0){s("Sorry, there are no images matching your search query. <br>Please try again!"),c(),t.target.reset();return}b=Math.ceil(a.totalHits/D),p(a.hits)}catch{s("Something went wrong. Please try again.")}c(),O(),t.target.reset()}});I.addEventListener("click",async()=>{n+=1;try{const t=await m(L,n);if(t.hits.length===0){s("Sorry, there are no images matching your search query. <br>Please try again!"),u();return}if(p(t.hits),g=document.querySelector(".gallery-item").getBoundingClientRect().height,window.scrollBy({top:g*2,left:0,behavior:"smooth"}),n>=b){s("We're sorry, but you've reached the end of search results."),u();return}}catch{s("Something went wrong. Please try again.")}});
//# sourceMappingURL=index.js.map
