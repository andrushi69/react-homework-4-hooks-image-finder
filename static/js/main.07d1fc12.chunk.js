(this["webpackJsonpreact-homework-4-hooks-image-finder"]=this["webpackJsonpreact-homework-4-hooks-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={information_container:"Api_information_container__nJCo_",close_btn:"Api_close_btn__2jPk0",modal_img:"Api_modal_img__UXvek"}},12:function(e,t,a){e.exports={modal:"Modal_modal__1vwov",modal_overlay:"Modal_modal_overlay__1rG9E",modal_content:"Modal_modal_content__o8ujy","is-open":"Modal_is-open__1g2Nb",large_img_container:"Modal_large_img_container__24FON",img_card:"Modal_img_card__3VxXo"}},14:function(e,t,a){e.exports={btn_container:"LoadMoreButton_btn_container__2Ca94",load_more_btn:"LoadMoreButton_load_more_btn__3maKU"}},17:function(e,t,a){e.exports={loading:"Loading_loading__2Kl1U"}},19:function(e,t,a){e.exports={type_something:"MainScreen_type_something__qqS-i"}},24:function(e,t,a){},4:function(e,t,a){e.exports={gallery:"Hits_gallery__3qoOr",showGallery:"Hits_showGallery__xaYoc",img_list:"Hits_img_list__7D-Aj",showLists:"Hits_showLists__14YJ5",img_list_link:"Hits_img_list_link__1v2PS",main_img:"Hits_main_img__306Ce",home_page_link:"Hits_home_page_link__-7g3q",statistics:"Hits_statistics__z4GDs",statistics_item:"Hits_statistics_item__2ku6g",result_container:"Hits_result_container__2l_jc"}},56:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(5),c=a.n(s),o=(a(24),a(3)),r=a(8),l=a.n(r),_=a(16),m=a.n(_),d=a(6),j=(a(33),a(1)),u=function(e){var t=e.onSubmit,a=Object(n.useState)(""),i=Object(o.a)(a,2),s=i[0],c=i[1],r=m.a.generate();return Object(j.jsxs)("header",{className:l.a.Searchbar,children:[Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==s.trim()?(t(s),c("")):Object(d.b)("Your form is empty!")},className:l.a.search_form,children:[Object(j.jsx)("input",{className:l.a.input_field,type:"text",autoComplete:"off",id:r,autoFocus:!0,value:s,onChange:function(e){c(e.currentTarget.value.toLowerCase())},placeholder:"Search images and photos"}),Object(j.jsx)("label",{htmlFor:r,className:l.a.input_label,children:"Search Images..."}),Object(j.jsx)("button",{type:"submit",children:Object(j.jsx)("span",{children:"Search"})})]}),Object(j.jsx)(d.a,{position:"top-right",autoClose:2500,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,theme:"dark",pauseOnFocusLoss:!1,draggable:!0,pauseOnHover:!0})]})},b=a(15),h=a(11),O=a.n(h),g=a(17),p=a.n(g),f=(a(35),a(18)),x=a.n(f),v=function(){return Object(j.jsxs)("div",{className:p.a.loading,children:[Object(j.jsx)("p",{children:"Loading your request brother..."}),Object(j.jsx)(x.a,{type:"Oval",color:"#FF00FFFF",height:80,width:80,timeout:3e3})]})},k=a(19),w=a.n(k),y=function(){return Object(j.jsxs)("span",{className:w.a.type_something,children:[Object(j.jsx)("p",{children:"TYPE WHATEVER TOU WANT IN SEARCH FORM BRO!!!"}),Object(j.jsx)("span",{className:"material-icons",children:"sentiment_dissatisfied"})]})},N=a(4),S=a.n(N),L=function(e){var t=e.id,a=e.onImageClick,n=e.largeImageURL,i=e.webformatURL,s=e.comments,c=e.downloads,o=e.tags,r=e.views,l=e.pageURL,_=e.likes;return Object(j.jsxs)("li",{onClick:function(){return a(n)},id:t,className:S.a.img_list,"data-url":n,children:[Object(j.jsx)("a",{className:S.a.img_list_link,children:Object(j.jsx)("img",{src:i,alt:o})}),Object(j.jsxs)("div",{className:S.a.statistics,children:[Object(j.jsxs)("p",{className:S.a.statistics_item,children:[Object(j.jsx)("i",{className:"material-icons",children:"thumb_up"}),_]}),Object(j.jsxs)("p",{className:S.a.statistics_item,children:[Object(j.jsx)("i",{className:"material-icons",children:"visibility"}),r]}),Object(j.jsxs)("p",{className:S.a.statistics_item,children:[Object(j.jsx)("i",{className:"material-icons",children:"comment"}),s]}),Object(j.jsxs)("p",{className:S.a.statistics_item,children:[Object(j.jsx)("i",{className:"material-icons",children:"cloud_download"}),c]}),Object(j.jsxs)("a",{href:l,className:S.a.statistics_item,target:"_blank",rel:"noreferrer",children:[Object(j.jsx)("i",{className:"material-icons",children:"home"}),"link to home page"]})]})]})};function C(e){var t=e.hits,a=e.onImageClick;return Object(j.jsx)("ul",{className:S.a.gallery,children:t.map((function(e){return Object(j.jsx)(L,{onImageClick:a,largeImageURL:e.largeImageURL,webformatURL:e.webformatURL,comments:e.comments,downloads:e.downloads,tags:e.tags,views:e.views,pageURL:e.pageURL,likes:e.likes},e.id)}))})}var E,M,H=a(12),R=a.n(H),U=document.querySelector("#modal-root"),I=function(e){var t=e.children,a=e.closeModal,i=function(e){"Escape"===e.code&&a()};return Object(n.useEffect)((function(){window.addEventListener("keydown",i)}),[i]),Object(s.createPortal)(Object(j.jsxs)("div",{className:R.a.modal,children:[Object(j.jsx)("div",{className:R.a.modal_overlay,onClick:function(e){e.currentTarget===e.target&&a()}}),Object(j.jsx)("div",{className:R.a.large_img_container,children:t})]}),U)},F=["title","titleId"];function B(){return B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},B.apply(this,arguments)}function T(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}function P(e,t){var a=e.title,i=e.titleId,s=T(e,F);return n.createElement("svg",B({width:70,height:71,viewBox:"0 0 70 71",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},s),a?n.createElement("title",{id:i},a):null,E||(E=n.createElement("path",{d:"M26.25 27.115L43.75 44.615",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),M||(M=n.createElement("path",{d:"M43.75 27.115L26.25 44.615",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}var A=n.forwardRef(P),q=(a.p,a(14)),D=a.n(q),G=function(e){var t=e.onClick;return Object(j.jsx)("div",{className:D.a.btn_container,children:Object(j.jsx)("button",{className:D.a.load_more_btn,onClick:t,type:"button",children:"Load More"})})},J=function(e){var t=e.hitsTags,a=Object(n.useState)([]),i=Object(o.a)(a,2),s=i[0],c=i[1],r=Object(n.useState)(!1),l=Object(o.a)(r,2),_=l[0],m=l[1],u=Object(n.useState)(!1),h=Object(o.a)(u,2),g=h[0],p=h[1],f=Object(n.useState)(1),x=Object(o.a)(f,2),k=x[0],w=x[1],N=Object(n.useState)(""),S=Object(o.a)(N,2),L=S[0],E=S[1],M=Object(n.useState)(!1),H=Object(o.a)(M,2),R=H[0],U=H[1];Object(n.useEffect)((function(){U(!1),t&&t&&D()}),[t]),Object(n.useEffect)((function(){s&&c([])}),[t]);var F="23101955-6369c6792be6f6752905e3e3e",B="https://pixabay.com/api/",T="all",P="all",q=function(){p(!g)},D=function(){U(!1),m(!0),fetch("".concat(B,"?image_type=").concat(P,"&orientation=").concat(T,"&page=").concat(k,"&per_page=12&key=").concat(F,"&q=").concat(t)).then((function(e){return e.json()})).then((function(e){c((function(t){return[].concat(Object(b.a)(t),Object(b.a)(e.hits))})),U(!0),w((function(e){return e+1})),e.hits.length||(Object(d.b)("Nothing found!"),U(!1))})).finally((function(){return m(!1)}))};return Object(j.jsxs)("div",{className:O.a.information_container,children:[Object(j.jsx)(d.a,{position:"top-right",autoClose:3500,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,theme:"dark",pauseOnFocusLoss:!1,draggable:!0,pauseOnHover:!0}),_&&Object(j.jsx)(v,{}),!t&&Object(j.jsx)(y,{}),s&&Object(j.jsx)(C,{onImageClick:function(e){E(e),p(!0)},hits:s}),g&&Object(j.jsxs)(I,{closeModal:q,children:[Object(j.jsx)("img",{className:O.a.modal_img,src:L,alt:"modal"}),Object(j.jsx)("button",{className:O.a.close_btn,onClick:q,children:Object(j.jsx)(A,{width:40,height:40})})]}),R&&Object(j.jsx)(G,{onClick:D})]})},W=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],i=t[1];return Object(j.jsxs)("div",{className:"main_content",children:[Object(j.jsx)(u,{onSubmit:function(e){i(e)}}),Object(j.jsx)(J,{hitsTags:a})]})};c.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(W,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"SearchBar_Searchbar__vAQmn",search_form:"SearchBar_search_form__2dbc0",input_field:"SearchBar_input_field__2U-9a",input_label:"SearchBar_input_label__1pSiD"}}},[[56,1,2]]]);
//# sourceMappingURL=main.07d1fc12.chunk.js.map