import{a as B,S as $,i as x}from"./assets/vendor-DvfmeZXB.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))f(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&f(u)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function f(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const O=B.create({baseURL:"https://pixabay.com/api/",params:{key:"53378731-ec62fc73e040a6645c7ce6629",image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:15}});async function h(t,o){const{data:a}=await O.get("",{params:{q:t,page:o}});return a}const p=document.querySelector(".gallery"),L=document.querySelector(".loader"),b=document.querySelector(".load-more-btn");let l=null;function g(t){const o=t.map(({webformatURL:a,largeImageURL:f,tags:e,likes:r,views:u,comments:v,downloads:M})=>`<li class="gallery-item">
            <a class="gallery-link" href="${f}">
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
                    <p>${u}</p>
                </li>
                <li class="info">
                    Comments
                    <p>${v}</p>
                </li>
                <li class="info">
                    Downloads
                    <p>${M}</p>
                </li>
            </ul>
        </li>`).join("");p.insertAdjacentHTML("beforeend",o),l||(l=new $(".gallery a",{captionsData:"alt",captionDelay:250,animationSpeed:350,fadeSpeed:550,preloading:!0})),l.refresh()}function I(){p.innerHTML="",l&&(l.destroy(),l=null),c()}function w(){L.classList.remove("hidden")}function s(){L.classList.add("hidden")}function S(){b.classList.remove("hidden")}function c(){b.classList.add("hidden")}function i(t){x.info({message:t,position:"topRight",progressBar:!1,messageColor:"black"})}const y=document.querySelector(".form"),D=document.querySelector(".load-more-btn");let m,n=1,q="",P=15,d;y.addEventListener("submit",async t=>{t.preventDefault();const o=y.elements.search.value.trim();if(q=o,n=1,!o){i("Please, enter your search query to get photos.");return}I(),c(),w();try{const a=await h(o,n);if(d=Math.ceil(a.totalHits/P),a.hits.length===0){i("Sorry, there are no images matching your search query. <br>Please try again!"),s(),t.target.reset();return}n===d&&(g(a.hits),i("We're sorry, but you've reached the end of search results."),c()),n<d&&(g(a.hits),S())}catch{i("Something went wrong. Please try again."),s()}s(),t.target.reset()});D.addEventListener("click",async()=>{n+=1,c(),w();try{const t=await h(q,n);if(d=Math.ceil(t.totalHits/P),t.hits.length===0){i("Sorry, there are no images matching your search query. <br>Please try again!"),c(),s();return}if(g(t.hits),m=document.querySelector(".gallery-item").getBoundingClientRect().height,window.scrollBy({top:m*2,left:0,behavior:"smooth"}),n>=d){i("We're sorry, but you've reached the end of search results."),c(),s();return}S()}catch{i("Something went wrong. Please try again."),s()}s()});
//# sourceMappingURL=index.js.map
