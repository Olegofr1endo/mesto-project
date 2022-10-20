(()=>{"use strict";function e(e,t){t?(e.classList.remove(e.dataset.disabled),e.disabled=!1):(e.classList.add(e.dataset.disabled),e.disabled=!0)}function t(e){return e.validity.patternMismatch?{state:!1,message:e.dataset.mismatch}:e.validity.valid?{state:!0}:{state:!1,message:e.validationMessage}}function n(e){let n=document.querySelector(`#${e.name}-error`);const o=t(e);o.state?n.classList.remove(n.dataset.onerror):(n.classList.add(n.dataset.onerror),n.textContent=o.message)}function o(o){const r=document.forms[o.formName],a=r.querySelector(o.submitButtonSelector),c=Array.from(r.querySelectorAll(o.inputSelector));Array.from(c).every((function(e){return""===e.value}))||c.forEach((function(e){n(e)})),e(a,function(e,n){return Array.from(e.querySelectorAll(n)).every((function(e){return t(e).state}))}(r,o.inputSelector))}function r(o){const r=document.forms[o.formName],a=r.querySelector(o.submitButtonSelector),c=Array.from(r.querySelectorAll(o.inputSelector));c.forEach((function(o){o.addEventListener("input",(function(r){n(o);let u=c.every((function(e){return t(e).state}));e(a,u)}))}))}function a(e){e.classList.add("popup_opened"),document.addEventListener("keydown",i)}function c(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",i)}function u(e){const t=document.querySelector(".popup_opened");e.target!==t.querySelector(".popup__close")&&e.target!==t&&"Escape"!==e.key||c(t)}function i(e){u(e)}const l=document.querySelector("#profile__add"),d=l.querySelector(".popup__save"),s=document.querySelector("#remove__card"),m=s.querySelector(".popup__profile-form"),p=s.querySelector(".popup__save"),f=document.querySelector("#profile__avatar"),_=f.querySelector(".popup__save"),h=document.querySelector(".places-cards"),v=document.querySelector("#profile__edit"),y=v.querySelector(".popup__save"),S=document.querySelector(".profile__edit-button"),b=document.querySelector(".profile__add-button"),q=document.querySelector(".profile__image"),g=document.querySelector(".profile__image-container"),k=document.querySelector(".profile__name"),E=document.querySelector(".profile__about"),L=document.querySelector("[name='guest-name']"),O=document.querySelector("[name='guest-about']"),j=document.querySelector("[name='place-name']"),x=document.querySelector("[name='place-link']"),C=document.querySelector("[name='avatar-link']"),T=document.querySelector("[name='card-form']"),$=document.querySelector("[name='avatar-form']"),z=document.querySelector("#card-template").content.querySelector(".card"),A=document.querySelector("#image-popup"),U=A.querySelector(".popup__image-title"),N=A.querySelector(".popup__image"),D={formName:"guest-form",submitButtonSelector:".popup__save",inputSelector:".popup__text-input"},P={formName:"card-form",submitButtonSelector:".popup__save",inputSelector:".popup__text-input"},w={formName:"avatar-form",submitButtonSelector:".popup__save",inputSelector:".popup__text-input"},B={};function F(e,t,n){n?(e.counterElement.textContent=t.likes.length,e.likeElement.classList.toggle("card__like_active"),e.cardObj.likes.push(e.idObj)):(e.counterElement.textContent=t.likes.length,e.likeElement.classList.toggle("card__like_active"),e.cardObj.likes=e.cardObj.likes.filter((function(t){return t._id!==e.idObj._id})))}function R(e,t){return e.likes.filter((function(e){return e._id===t._id})).length>0}function J(e){const t=e.Obj,n=z.cloneNode(!0),o=n.querySelector(".card__like"),r=n.querySelector(".card__trash"),c=n.querySelector(".card__image"),u=n.querySelector(".card__likes-counter");var i,l;return u.textContent=t.likes.length,c.alt="Фотография "+t.name,c.src=t.link,n.querySelector(".card__caption").textContent=t.name,i=o,R(t,e.idObj)?i.classList.add("card__like_active"):i.classList.remove("card__like_active"),o.addEventListener("click",(()=>{R(t,e.idObj)?e.deleteLike({cardObj:t,likeElement:o,counterElement:u,idObj:e.idObj,changeStateFunc:F}):e.addLike({cardObj:t,likeElement:o,counterElement:u,idObj:e.idObj,changeStateFunc:F})})),function(e,t){!t&&e.remove()}(r,(l=t,e.idObj._id===l.owner._id)),r.addEventListener("click",(function(){!function(e,t){a(s),B.cardRemoveTargetObj=e,B.cardRemoveTargetElement=t.parentElement}(t,r)})),c.addEventListener("click",(function(){!function(e){U.textContent=e.name,N.src=e.link,N.alt="Фотография "+e.name,a(A)}(t)})),n}B.remove=function(e){e.remove()};const G={baseUrl:"https://nomoreparties.co/v1/plus-cohort-16",headers:{authorization:"dec5d51c-e797-4698-837e-5a0bd4b0f1d8","Content-Type":"application/json"}};function H(e){return e.ok?e.json():Promise.reject(`Ошибка. Статус - ${e.status}`)}function M(e){k.textContent=e.name,E.textContent=e.about}function I(e){q.src=e}function K(e){var t;(t=e.cardObj,fetch(`${G.baseUrl}/cards/likes/${t._id}`,{method:"PUT",headers:{authorization:G.headers.authorization}}).then(H)).then((t=>{e.changeStateFunc(e,t,!0)})).catch((e=>{console.log(e)}))}function Q(e){var t;(t=e.cardObj,fetch(`${G.baseUrl}/cards/likes/${t._id}`,{method:"DELETE",headers:{authorization:G.headers.authorization}}).then(H)).then((t=>{e.changeStateFunc(e,t)})).catch((e=>{console.log(e)}))}r(D),r(P),r(w),document.querySelectorAll(".popup").forEach((function(e){e.classList.add("popup_type_animated")})),Promise.all([fetch(`${G.baseUrl}/users/me`,{method:"GET",headers:{authorization:G.headers.authorization}}).then(H),fetch(`${G.baseUrl}/cards`,{method:"GET",headers:{authorization:G.headers.authorization}}).then(H)]).then((e=>{e[1].forEach((function(t){!function(e,t){h.append(J({Obj:e,idObj:t,addLike:K,deleteLike:Q}))}(t,e[0])})),M(e[0]),I(e[0].avatar)})).catch((e=>{console.log(e)})),document.addEventListener("mousedown",(e=>{document.querySelector(".popup_opened")&&u(e)})),document.querySelector("[name='guest-form']").addEventListener("submit",(function(e){e.preventDefault(),y.textContent=y.dataset.onload,function(e,t){return fetch(`${G.baseUrl}/users/me`,{method:"PATCH",headers:G.headers,body:JSON.stringify({name:e.value,about:t.value})}).then(H)}(L,O).then((()=>{M({name:L.value,about:O.value}),c(v)})).catch((e=>{console.log(e)})).finally((()=>{y.textContent=y.dataset.default}))})),S.addEventListener("click",(function(){L.value=k.textContent,O.value=E.textContent})),S.addEventListener("click",(function(){a(v),o(D)})),b.addEventListener("click",(function(){a(l),o(P)})),g.addEventListener("click",(function(e){a(f),o(w)})),T.addEventListener("submit",(function(e){d.textContent=d.dataset.onload,e.preventDefault(),function(e,t){return fetch(`${G.baseUrl}/cards`,{method:"POST",headers:G.headers,body:JSON.stringify({name:e.value,link:t.value})}).then(H)}(j,x).then((e=>{var t,n;t=e,n=e.owner,h.prepend(J({Obj:t,idObj:n,addLike:K,deleteLike:Q})),c(l),T.reset()})).catch((e=>{console.log(e)})).finally((()=>{d.textContent=d.dataset.default}))})),$.addEventListener("submit",(function(e){e.preventDefault(),_.textContent=_.dataset.onload,function(e){return fetch(`${G.baseUrl}/users/me/avatar`,{method:"PATCH",headers:G.headers,body:JSON.stringify({avatar:e.value})}).then(H)}(C).then((()=>{I(C.value),c(f),$.reset()})).catch((e=>{console.log(e)})).finally((()=>{_.textContent=_.dataset.default}))})),m.addEventListener("submit",(function(e){var t,n;e.preventDefault(),t=B,p.textContent=p.dataset.onload,(n=t.cardRemoveTargetObj,fetch(`${G.baseUrl}/cards/${n._id}`,{method:"DELETE",headers:{authorization:G.headers.authorization}}).then(H)).then((()=>{t.remove(t.cardRemoveTargetElement),c(s)})).catch((e=>{console.log(e)})).finally((()=>{p.textContent=p.dataset.default}))}))})();