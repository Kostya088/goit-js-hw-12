import{a as v,S as B,i as M}from"./assets/vendor-DvfmeZXB.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const $=v.create({baseURL:"https://pixabay.com/api/",params:{key:"53378731-ec62fc73e040a6645c7ce6629",image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:15}});async function y(t,o){const{data:a}=await $.get("",{params:{q:t,page:o}});return a}const h=document.querySelector(".gallery"),p=document.querySelector(".loader"),L=document.querySelector(".load-more-btn"),x=new B(".gallery a",{captionsData:"alt",captionDelay:250,animationSpeed:350,fadeSpeed:550,preloading:!0});function d(t){const o=t.map(({webformatURL:a,largeImageURL:c,tags:e,likes:r,views:l,comments:q,downloads:P})=>`<li class="gallery-item">
            <a class="gallery-link" href="${c}">
              <img
                  loading="lazy"
                  class="gallery-image"
                  src="${a}"
                  alt="${e}"
              />
            </a>
            <ul class="image-info">
                <li class="info">
                    Likes
                    <p>${r}</p>
                </li>
                <li class="info">
                    Views
                    <p>${l}</p>
                </li>
                <li class="info">
                    Comments
                    <p>${q}</p>
                </li>
                <li class="info">
                    Downloads
                    <p>${P}</p>
                </li>
            </ul>
        </li>`).join("");h.insertAdjacentHTML("beforeend",o),x.refresh()}function O(){h.innerHTML=""}function b(){p.classList.remove("hidden")}function s(){p.classList.add("hidden")}function w(){L.classList.remove("hidden")}function f(){L.classList.add("hidden")}function i(t){M.info({message:t,position:"topRight",progressBar:!1,messageColor:"black"})}const g=document.querySelector(".form"),I=document.querySelector(".load-more-btn");let m,n=1,S="",D=15,u;g.addEventListener("submit",async t=>{t.preventDefault();const o=g.elements.search.value.trim();if(S=o,n=1,!o){i("Please, enter your search query to get photos.");return}O(),b();try{const a=await y(o,n);if(u=Math.ceil(a.totalHits/D),a.hits.length===0){i("Sorry, there are no images matching your search query. <br>Please try again!"),s(),t.target.reset();return}n===u&&(d(a.hits),i("We're sorry, but you've reached the end of search results.")),n<u&&(d(a.hits),w())}catch{i("Something went wrong. Please try again."),s()}s(),t.target.reset()});I.addEventListener("click",async()=>{n+=1,f(),b();try{const t=await y(S,n);if(t.hits.length===0){i("Sorry, there are no images matching your search query. <br>Please try again!"),s();return}if(d(t.hits),w(),m=document.querySelector(".gallery-item").getBoundingClientRect().height,window.scrollBy({top:m*2,left:0,behavior:"smooth"}),n>=u){i("We're sorry, but you've reached the end of search results."),f(),s();return}}catch{i("Something went wrong. Please try again."),s()}s()});
//# sourceMappingURL=index.js.map
