import{a as p,S as g,i as h}from"./assets/vendor-DvfmeZXB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const y=p.create({baseURL:"https://pixabay.com/api/",params:{key:"53378731-ec62fc73e040a6645c7ce6629",image_type:"photo",orientation:"horizontal",safesearch:!0}});function L(o){return y.get("",{params:{q:o}}).then(t=>t.data)}const c=document.querySelector(".gallery"),f=document.querySelector(".loader");function b(o){const t=o.map(({webformatURL:s,largeImageURL:e,tags:r,likes:a,views:u,comments:d,downloads:m})=>`<li class="gallery-item">
            <a class="gallery-link" href="${e}">
              <img
                  class="gallery-image"
                  src="${s}"
                  alt="${r}"
              />
            </a>
            <ul class="image-info">
                <li class="info">
                    Likes
                    <p>${a}</p>
                </li>
                <li class="info">
                    Views
                    <p>${u}</p>
                </li>
                <li class="info">
                    Comments
                    <p>${d}</p>
                </li>
                <li class="info">
                    Downloads
                    <p>${m}</p>
                </li>
            </ul>
        </li>`).join("");c.innerHTML=t,new g(".gallery a",{captionsData:"alt",captionDelay:250,animationSpeed:350,fadeSpeed:550,preloading:!0}).refresh()}function S(){c.innerHTML=""}function w(){f.classList.remove("hidden")}function q(){f.classList.add("hidden")}function l(o){h.error({message:o,position:"topRight",color:"#f2aaaaff",progressBar:!1,messageColor:"white"})}const n=document.querySelector(".form");n.addEventListener("submit",o=>{o.preventDefault();const t=n.elements.search.value.trim();t&&(S(),w(),L(t).then(i=>{if(i.hits.length===0){l("Sorry, there are no images matching your search query. <br>Please try again!");return}b(i.hits)}).catch(i=>{l("Something went wrong. Please try again."),console.error("API error: ",i)}).finally(()=>q()),n.reset())});
//# sourceMappingURL=index.js.map
