"use strict";!function(){var t=navigator.userAgent.toLowerCase(),a=new Date,e=($(document),$(window)),r=$("html"),o=($("body"),r.hasClass("desktop")),n=-1!==t.indexOf("msie")?parseInt(t.split("msie")[1],10):-1!==t.indexOf("trident")?11:-1!==t.indexOf("edge")&&12,i=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),s=!1,l={bootstrapTooltip:$("[data-toggle='tooltip']"),captcha:$(".recaptcha"),campaignMonitor:$(".campaign-mailform"),copyrightYear:$(".copyright-year"),isotope:$(".isotope"),lightGallery:$("[data-lightgallery='group']"),lightGalleryItem:$("[data-lightgallery='item']"),lightDynamicGalleryItem:$("[data-lightgallery='dynamic']"),materialParallax:$(".parallax-container"),owl:$(".owl-carousel"),preloader:$(".preloader"),rdNavbar:$(".rd-navbar"),maps:$(".google-map-container"),rdMailForm:$(".rd-mailform"),rdInputLabel:$(".form-label"),regula:$("[data-constraints]"),wow:$(".wow"),buttonWinona:$(".button-winona"),animePresets:document.querySelectorAll("[data-anime]"),navbar:document.querySelectorAll(".navbar")};e.on("load",function(){l.preloader.length&&!s&&pageTransition({target:document.querySelector(".page"),delay:0,duration:500,classIn:"fadeIn",classOut:"fadeOut",classActive:"animated",conditions:function(t,a){return!/(\#|callto:|tel:|mailto:|:\/\/)/.test(a)&&!t.currentTarget.hasAttribute("data-lightgallery")},onTransitionStart:function(t){setTimeout(function(){l.preloader.removeClass("loaded")},.75*t.duration)},onReady:function(){l.preloader.addClass("loaded"),!0}})}),$(function(){function t(t){for(var a=["-","-sm-","-md-","-lg-","-xl-","-xxl-"],e=[0,576,768,992,1200,1600],r={},o=0;o<e.length;o++){r[e[o]]={};for(var n=o;n>=-1;n--)!r[e[o]].items&&t.attr("data"+a[n]+"items")&&(r[e[o]].items=n<0?1:parseInt(t.attr("data"+a[n]+"items"),10)),!r[e[o]].stagePadding&&0!==r[e[o]].stagePadding&&t.attr("data"+a[n]+"stage-padding")&&(r[e[o]].stagePadding=n<0?0:parseInt(t.attr("data"+a[n]+"stage-padding"),10)),!r[e[o]].margin&&0!==r[e[o]].margin&&t.attr("data"+a[n]+"margin")&&(r[e[o]].margin=n<0?30:parseInt(t.attr("data"+a[n]+"margin"),10)),!r[e[o]].autoWidth&&0!==r[e[o]].autoWidth&&t.attr("data"+a[n]+"auto-width")&&(r[e[o]].autoWidth=!(n<0)&&t.attr("data"+a[n]+"auto-width"))}if(t.attr("data-dots-custom")&&t.on("initialized.owl.carousel",function(t){var a=$(t.currentTarget),e=$(a.attr("data-dots-custom")),r=0;a.attr("data-active")&&(r=parseInt(a.attr("data-active"),10)),a.trigger("to.owl.carousel",[r,300,!0]),e.find("[data-owl-item='"+r+"']").addClass("active"),e.find("[data-owl-item]").on("click",function(t){t.preventDefault(),a.trigger("to.owl.carousel",[parseInt(this.getAttribute("data-owl-item"),10),300,!0])}),a.on("translate.owl.carousel",function(t){e.find(".active").removeClass("active"),e.find("[data-owl-item='"+t.item.index+"']").addClass("active")})}),void 0!==t.attr("data-numbering")){var i=$(t.attr("data-numbering"));t.on("initialized.owl.carousel changed.owl.carousel",function(t){return function(a){a.namespace&&(t.find(".numbering-current").text(a.item.index+1),t.find(".numbering-count").text(a.item.count))}}(i))}if(void 0!==t.attr("data-custom-next")){var l=$(t.attr("data-custom-next"));l.on("click",function(t,a){return function(){a.trigger("next.owl.carousel")}}(0,t))}t.owlCarousel({autoplay:!s&&"true"===t.attr("data-autoplay"),autoplayTimeout:t.attr("data-autoplay-timeout")?parseInt(t.attr("data-autoplay-timeout"),10):100,autoplayHoverPause:!0,smartSpeed:t.attr("data-speed")?parseInt(t.attr("data-speed")):250,loop:!s&&"false"!==t.attr("data-loop"),items:1,easing:t.attr("data-easing")?t.attr("data-easing"):"swing",center:"true"===t.attr("data-center"),dotsContainer:t.attr("data-pagination-container")||!1,navContainer:t.attr("data-navigation-container")||!1,mouseDrag:!s&&"false"!==t.attr("data-mouse-drag"),nav:"true"===t.attr("data-nav"),dots:"true"===t.attr("data-dots"),dotsEach:!!t.attr("data-dots-each")&&parseInt(t.attr("data-dots-each"),10),animateIn:!!t.attr("data-animation-in")&&t.attr("data-animation-in"),animateOut:!!t.attr("data-animation-out")&&t.attr("data-animation-out"),responsive:r,navText:t.attr("data-nav-text")?$.parseJSON(t.attr("data-nav-text")):[],navClass:t.attr("data-nav-class")?$.parseJSON(t.attr("data-nav-class")):["owl-prev","owl-next"]})}function d(t,a){var e=c({targets:".anime-element",duration:800,easing:"easeInOutQuad",loop:!1,direction:"alternate"},a.options),r=anime(e);t.addEventListener("mouseenter",function(){r&&r.pause(),r=anime(c(e,a.animationStart))}),t.addEventListener("mouseleave",function(){r&&r.pause(),r=anime(c(e,a.animationEnd))})}function c(t,a){if(!t||"object"!=typeof t)throw new TypeError("First argument must be passed and be an object.");for(var e=Object(t),r=1;r<arguments.length;r++){var o=arguments[r];if(null!=o)for(var n in o)null!=o[n]&&(o[n]&&t[n]&&"object"==typeof o[n]&&"object"==typeof t[n]?c(t[n],o[n]):t[n]=o[n])}return e}function u(t,a){var e,r=0;if(t.length){for(var o=0;o<t.length;o++){var n=$(t[o]);if((e=n.regula("validate")).length)for(D=0;D<e.length;D++)r++,n.siblings(".form-validation").text(e[D].message).parent().addClass("has-error");else n.siblings(".form-validation").text("").parent().removeClass("has-error")}return a&&a.length?function(t){if(0===t.find(".g-recaptcha-response").val().length)return t.siblings(".form-validation").html("Please, prove that you are not robot.").addClass("active"),t.closest(".form-wrap").addClass("has-error"),t.on("propertychange",function(){var t=$(this),a=t.find(".g-recaptcha-response").val();a.length>0&&(t.closest(".form-wrap").removeClass("has-error"),t.siblings(".form-validation").removeClass("active").html(""),t.off("propertychange"))}),!1;return!0}(a)&&0===r:0===r}return!0}function m(t,a,e,r){var o={};try{o=JSON.parse(t),r(new google.maps.LatLng(o.lat,o.lng),a,e)}catch(o){e.geocoder.geocode({address:t},function(t,o){if(o===google.maps.GeocoderStatus.OK){var n=t[0].geometry.location.lat(),i=t[0].geometry.location.lng();r(new google.maps.LatLng(parseFloat(n),parseFloat(i)),a,e)}})}}function g(t){l.bootstrapTooltip.tooltip("dispose");for(var a=0;a<l.bootstrapTooltip.length;a++){var e=$(l.bootstrapTooltip[a]);window.innerWidth<576?e.tooltip({customClass:e.attr("data-class")?e.attr("data-class"):"",placement:"bottom"}):e.tooltip({customClass:e.attr("data-class")?e.attr("data-class"):"",placement:t})}}function p(t,a){s||$(t).on("click",function(){$(t).lightGallery({thumbnail:"false"!==$(t).attr("data-lg-thumbnail"),selector:"[data-lightgallery='item']",autoplay:"true"===$(t).attr("data-lg-autoplay"),pause:parseInt($(t).attr("data-lg-autoplay-delay"))||5e3,addClass:a,mode:$(t).attr("data-lg-animation")||"lg-slide",loop:"false"!==$(t).attr("data-lg-loop"),dynamic:!0,dynamicEl:JSON.parse($(t).attr("data-lg-dynamic-elements"))||[]})})}function f(t,a){t=$(t),s||(t.length&&t.attr("href").split("http").length>1&&(a="lightgallery-iframe"),t.lightGallery({selector:"this",addClass:a,counter:!1,iframeMaxWidth:"90%",youtubePlayerParams:{modestbranding:1,showinfo:1,rel:1,controls:1},vimeoPlayerParams:{byline:0,portrait:0}}))}if(s=window.xMode,window.onloadCaptchaCallback=function(){for(var t=0;t<l.captcha.length;t++){var a=$(l.captcha[t]);grecaptcha.render(a.attr("id"),{sitekey:a.attr("data-sitekey"),size:a.attr("data-size")?a.attr("data-size"):"normal",theme:a.attr("data-theme")?a.attr("data-theme"):"light",callback:function(t){$(".recaptcha").trigger("propertychange")}}),a.after("<span class='form-validation'></span>")}},l.captcha.length&&$.getScript("//www.google.com/recaptcha/api.js?onload=onloadCaptchaCallback&render=explicit&hl=en"),navigator.platform.match(/(Mac)/i)&&r.addClass("mac-os"),n&&(12===n&&r.addClass("ie-edge"),11===n&&r.addClass("ie-11"),n<10&&r.addClass("lt-ie-10"),n<11&&r.addClass("ie-10")),l.bootstrapTooltip.length){var h=l.bootstrapTooltip.attr("data-placement");g(h),e.on("resize orientationchange",function(){g(h)})}var v,y,b,w,C,x;if(l.copyrightYear.length&&l.copyrightYear.text(a.getFullYear()),l.maps.length&&(v=l.maps,y=function(){for(var t,a=0;a<l.maps.length;a++)if(l.maps[a].hasAttribute("data-key")){t=l.maps[a].getAttribute("data-key");break}$.getScript("//maps.google.com/maps/api/js?"+(t?"key="+t+"&":"")+"sensor=false&libraries=geometry,places&v=quarterly",function(){var t=document.getElementsByTagName("head")[0],a=t.insertBefore;t.insertBefore=function(e,r){e.href&&-1!==e.href.indexOf("//fonts.googleapis.com/css?family=Roboto")||-1!==e.innerHTML.indexOf("gm-style")||a.call(t,e,r)};for(var e=new google.maps.Geocoder,r=0;r<l.maps.length;r++){var o=parseInt(l.maps[r].getAttribute("data-zoom"),10)||11,n=l.maps[r].hasAttribute("data-styles")?JSON.parse(l.maps[r].getAttribute("data-styles")):[],i=l.maps[r].getAttribute("data-center")||"New York",s=new google.maps.Map(l.maps[r].querySelectorAll(".google-map")[0],{zoom:o,styles:n,scrollwheel:!1,center:{lat:0,lng:0}});l.maps[r].map=s,l.maps[r].geocoder=e,l.maps[r].google=google,m(i,null,l.maps[r],function(t,a,e){e.map.setCenter(t)});var d=l.maps[r].querySelectorAll(".google-map-markers li");if(d.length)for(var c=[],u=0;u<d.length;u++){var g=d[u];m(g.getAttribute("data-location"),g,l.maps[r],function(t,a,e){var r=a.getAttribute("data-icon")||e.getAttribute("data-icon"),o=(a.getAttribute("data-icon-active")||e.getAttribute("data-icon-active"),a.getAttribute("data-description")||""),n=new google.maps.InfoWindow({content:o});a.infoWindow=n;var i={position:t,map:e.map};r&&(i.icon=r);var l=new google.maps.Marker(i);a.gmarker=l,c.push({markerElement:a,infoWindow:n}),l.isActive=!1,google.maps.event.addListener(n,"closeclick",function(t,a){var e;t.gmarker.isActive=!1,e=t.getAttribute("data-icon")||a.getAttribute("data-icon"),t.gmarker.setIcon(e)}.bind(this,a,e)),google.maps.event.addListener(l,"click",function(t,a){if(0!==t.infoWindow.getContent().length){for(var e,r,o=t.gmarker,n=0;n<c.length;n++){var i;c[n].markerElement===t&&(r=c[n].infoWindow),(e=c[n].markerElement.gmarker).isActive&&c[n].markerElement!==t&&(e.isActive=!1,i=c[n].markerElement.getAttribute("data-icon")||a.getAttribute("data-icon"),e.setIcon(i),c[n].infoWindow.close())}o.isActive=!o.isActive,o.isActive?((i=t.getAttribute("data-icon-active")||a.getAttribute("data-icon-active"))&&o.setIcon(i),r.open(s,l)):((i=t.getAttribute("data-icon")||a.getAttribute("data-icon"))&&o.setIcon(i),r.close())}}.bind(this,a,e))})}}})},(b=function(){var t;!v.hasClass("lazy-loaded")&&(t=v,s||t.offset().top+t.outerHeight()>=e.scrollTop()&&t.offset().top<=e.scrollTop()+e.height())&&(y.call(),v.addClass("lazy-loaded"))})(),e.on("scroll",b)),o&&!s&&$().UItoTop({easingType:"easeOutQuad",containerClass:"ui-to-top mdi mdi-chevron-up"}),l.rdNavbar.length){var k,A,I;k=["-","-sm-","-md-","-lg-","-xl-","-xxl-"],I=[0,576,768,992,1200,1600];for(var M=0;M<l.rdNavbar.length;M++){var P=$(l.rdNavbar[M]),S={};for(O=q=0,A=I.length;q<A;O=++q){if(I[O],S[I[O]]||(S[I[O]]={}),P.attr("data"+k[O]+"layout")&&(S[I[O]].layout=P.attr("data"+k[O]+"layout")),P.attr("data"+k[O]+"device-layout")&&(S[I[O]].deviceLayout=P.attr("data"+k[O]+"device-layout")),P.attr("data"+k[O]+"hover-on")&&(S[I[O]].focusOnHover="true"===P.attr("data"+k[O]+"hover-on")),P.attr("data"+k[O]+"auto-height")&&(S[I[O]].autoHeight="true"===P.attr("data"+k[O]+"auto-height")),P.attr("data"+k[O]+"anchor-nav-offset")&&(S[I[O]].anchorNavOffset=P.attr("data"+k[O]+"anchor-nav-offset")),s)S[I[O]].stickUp=!1;else if(P.attr("data"+k[O]+"stick-up")){var T=P.parents(".layout-navbar-demo").length;S[I[O]].stickUp="true"===P.attr("data"+k[O]+"stick-up")&&!T}P.attr("data"+k[O]+"stick-up-offset")&&(S[I[O]].stickUpOffset=P.attr("data"+k[O]+"stick-up-offset"))}P.RDNavbar({anchorNav:!s,stickUpClone:!(!P.attr("data-stick-up-clone")||s)&&"true"===P.attr("data-stick-up-clone"),responsive:S,callbacks:{onDropdownOver:function(){return!s}}}),P.attr("data-body-class")&&(document.body.className+=" "+P.attr("data-body-class"))}}if(l.owl.length)for(var O=0;O<l.owl.length;O++){var F=$(l.owl[O]);l.owl[O].owl=F,t(F)}if(l.isotope.length){var E=[];for(O=0;O<l.isotope.length;O++){var L=l.isotope[O],W={itemSelector:".isotope-item",layoutMode:L.getAttribute("data-isotope-layout")?L.getAttribute("data-isotope-layout"):"masonry",filter:"*"};L.getAttribute("data-column-width")?W.masonry={columnWidth:parseFloat(L.getAttribute("data-column-width"))}:L.getAttribute("data-column-class")&&(W.masonry={columnWidth:L.getAttribute("data-column-class")});var G=new Isotope(L,W);L.isotope=G,E.push(G)}setTimeout(function(){for(var t=0;t<E.length;t++)E[t].element.className+=" isotope--loaded",E[t].layout()},200),$("[data-isotope-filter]").on("click",function(t){t.preventDefault();var a=$(this);clearTimeout(void 0),a.parents(".isotope-filters").find(".active").removeClass("active"),a.addClass("active");var e=$('.isotope[data-isotope-group="'+this.getAttribute("data-isotope-group")+'"]'),r={itemSelector:".isotope-item",layoutMode:e.attr("data-isotope-layout")?e.attr("data-isotope-layout"):"masonry",filter:"*"===this.getAttribute("data-isotope-filter")?"*":'[data-filter*="'+this.getAttribute("data-isotope-filter")+'"]'};e.attr("data-column-width")?r.masonry={columnWidth:parseFloat(e.attr("data-column-width"))}:e.attr("data-column-class")&&(r.masonry={columnWidth:e.attr("data-column-class")}),e.isotope(r)}).eq(0).trigger("click")}if(r.hasClass("wow-animation")&&l.wow.length&&!s&&o&&setTimeout(function(){(new WOW).init()},600),l.rdInputLabel.length&&l.rdInputLabel.RDInputLabel(),l.regula.length&&function(t){regula.custom({name:"PhoneNumber",defaultMessage:"Invalid phone number format",validator:function(){return""===this.value||/^(\+\d)?[0-9\-\(\) ]{5,}$/i.test(this.value)}});for(var a=0;a<t.length;a++){var e=$(t[a]);e.addClass("form-control-has-validation").after("<span class='form-validation'></span>"),e.parent().find(".form-validation").is(":last-child")&&e.addClass("form-control-last-child")}t.on("input change propertychange blur",function(t){var e,r=$(this);if(("blur"===t.type||r.parent().hasClass("has-error"))&&!r.parents(".rd-mailform").hasClass("success"))if((e=r.regula("validate")).length)for(a=0;a<e.length;a++)r.siblings(".form-validation").text(e[a].message).parent().addClass("has-error");else r.siblings(".form-validation").text("").parent().removeClass("has-error")}).regula("bind");var r=[{type:regula.Constraint.Required,newMessage:"The text field is required."},{type:regula.Constraint.Email,newMessage:"The email is not a valid email."},{type:regula.Constraint.Numeric,newMessage:"Only numbers are required"},{type:regula.Constraint.Selected,newMessage:"Please choose an option."}];for(a=0;a<r.length;a++){var o=r[a];regula.override({constraintType:o.type,defaultMessage:o.newMessage})}}(l.regula),l.campaignMonitor.length)for(O=0;O<l.campaignMonitor.length;O++){var N=$(l.campaignMonitor[O]);N.on("submit",$.proxy(function(t){var a={},e=this.attr("action"),r=this.serializeArray(),o=$("#"+l.campaignMonitor.attr("data-form-output")),n=$(this);for(d=0;d<r.length;d++)a[r[d].name]=r[d].value;$.ajax({data:a,url:e,dataType:"jsonp",error:function(t,a){o.html("Server error: "+a),setTimeout(function(){o.removeClass("active")},4e3)},success:function(t){o.html(t.Message).addClass("active"),setTimeout(function(){o.removeClass("active")},6e3)},beforeSend:function(t){if(s||!u(n.find("[data-constraints]")))return!1;o.html("Submitting...").addClass("active")}});for(var i=n[0].getElementsByTagName("input"),d=0;d<i.length;d++){i[d].value="";var c=document.querySelector('[for="'+i[d].getAttribute("id")+'"]');c&&c.classList.remove("focus","not-empty")}return!1},N))}if(l.rdMailForm.length){var q,D,z={MF000:"Successfully sent!",MF001:"Recipients are not set!",MF002:"Form will not work locally!",MF003:"Please, define email field in your form!",MF004:"Please, define type of your form!",MF254:"Something went wrong with PHPMailer!",MF255:"Aw, snap! Something went wrong."};for(O=0;O<l.rdMailForm.length;O++){var R=$(l.rdMailForm[O]),j=!1;R.attr("novalidate","novalidate").ajaxForm({data:{"form-type":R.attr("data-form-type")||"contact",counter:O},beforeSubmit:function(t,a,e){if(!s){var r=$(l.rdMailForm[this.extraData.counter]),o=r.find("[data-constraints]"),n=$("#"+r.attr("data-form-output")),i=r.find(".recaptcha"),d=!0;if(n.removeClass("active error success"),!u(o,i))return!1;if(i.length){var c=i.find(".g-recaptcha-response").val(),m={CPT001:'Please, setup you "site key" and "secret key" of reCaptcha',CPT002:"Something wrong with google reCaptcha"};j=!0,$.ajax({method:"POST",url:"bat/reCaptcha.php",data:{"g-recaptcha-response":c},async:!1}).done(function(t){"CPT000"!==t&&(n.hasClass("snackbars")?(n.html('<p><span class="icon text-middle mdi mdi-check icon-xxs"></span><span>'+m[t]+"</span></p>"),setTimeout(function(){n.removeClass("active")},3500),d=!1):n.html(m[t]),n.addClass("active"))})}if(!d)return!1;r.addClass("form-in-process"),n.hasClass("snackbars")&&(n.html('<p><span class="icon text-middle fa fa-circle-o-notch fa-spin icon-xxs"></span><span>Sending</span></p>'),n.addClass("active"))}},error:function(t){if(!s){var a=$("#"+$(l.rdMailForm[this.extraData.counter]).attr("data-form-output")),e=$(l.rdMailForm[this.extraData.counter]);a.text(z[t]),e.removeClass("form-in-process"),j&&grecaptcha.reset()}},success:function(t){if(!s){var a=$(l.rdMailForm[this.extraData.counter]),e=$("#"+a.attr("data-form-output")),r=a.find("select");a.addClass("MF000"===t?"success":"error").removeClass("form-in-process"),j&&grecaptcha.reset(),t=5===t.length?t:"MF255",e.text(z[t]),"MF000"===t?e.hasClass("snackbars")?e.html('<p><span class="icon text-middle mdi mdi-check icon-xxs"></span><span>'+z[t]+"</span></p>"):e.addClass("active success"):e.hasClass("snackbars")?e.html(' <p class="snackbars-left"><span class="icon icon-xxs mdi mdi-alert-outline text-middle"></span><span>'+z[t]+"</span></p>"):e.addClass("active error"),a.clearForm(),r.length&&r.select2("val",""),a.find("input, textarea").trigger("blur"),setTimeout(function(){e.removeClass("active error success"),a.removeClass("success error")},3500)}}})}}if(l.lightGallery.length)for(O=0;O<l.lightGallery.length;O++)w=l.lightGallery[O],C=void 0,s||$(w).lightGallery({thumbnail:"false"!==$(w).attr("data-lg-thumbnail"),selector:"[data-lightgallery='item']",autoplay:"true"===$(w).attr("data-lg-autoplay"),pause:parseInt($(w).attr("data-lg-autoplay-delay"))||5e3,addClass:C,mode:$(w).attr("data-lg-animation")||"lg-slide",loop:"false"!==$(w).attr("data-lg-loop")});if(l.lightGalleryItem.length){var H=[];for(M=0;M<l.lightGalleryItem.length;M++)$(l.lightGalleryItem[M]).parents(".owl-carousel").length||H.push(l.lightGalleryItem[M]);l.lightGalleryItem=H;for(O=0;O<l.lightGalleryItem.length;O++)f(l.lightGalleryItem[O])}if(l.lightDynamicGalleryItem.length)for(O=0;O<l.lightDynamicGalleryItem.length;O++)p(l.lightDynamicGalleryItem[O]);if(l.materialParallax.length)if(s||n||i)for(O=0;O<l.materialParallax.length;O++){var Y=$(l.materialParallax[O]),B=Y.data("parallax-img"),J=document.createElement("div");J.classList.add("material-parallax"),Y.prepend(J),J.style.backgroundImage="url("+B+")",J.style.backgroundSize="cover"}else l.materialParallax.parallax(),e.on("load",function(){setTimeout(function(){e.scroll()},500)});if(!l.buttonWinona.length||s||n||function(t){for(var a=0;a<t.length;a++){var e=$(t[a]),r=e.html();e.html(""),e.append('<div class="content-original">'+r+'</div><div class="content-dubbed">'+r+"</div>")}}(l.buttonWinona),l.animePresets.length&&o)for(O=0;O<l.animePresets.length;O++){var U=l.animePresets[O].getAttribute("data-anime");d(l.animePresets[O],(x=l.animePresets[O],{"circles-1":{options:{duration:1e3,easing:"easeInOutQuad",targets:x.querySelectorAll(".box-modern-circle")},animationStart:{loop:!0,translateX:function(t,a){return a%2?-10:10},translateY:function(t,a){return a%2?-10:10},scale:1.1},animationEnd:{loop:!1,translateX:0,translateY:0,scale:1}},"circles-2":{options:{duration:1e3,easing:"easeInOutQuad",targets:x.querySelectorAll(".box-modern-circle")},animationStart:{loop:!0,translateX:function(t,a){return a%2?-10:10},translateY:function(t,a){return a%2?-10:10},scale:function(t,a){return a%2?.8:.9}},animationEnd:{loop:!1,translateX:0,translateY:0,scale:1}}})[U])}function Q(){for(var t=document.querySelectorAll(this.dParams.anchor.offsetRef),a=0,e=0;e<t.length;e++)a-=t[e].offsetHeight;this.dParams.anchor.offset=1.05*a}function X(){this.dParams.stuck.offset=document.querySelector(this.dParams.stuck.offsetRef).getBoundingClientRect().height}if(l.navbar.length&&!s)for(O=0;O<l.navbar.length;O++){var K,V=l.navbar[O],Z=JSON.parse(V.getAttribute("data-navbar"));!1!==Z.anchor&&(Z.anchor||(Z.anchor={}),Z.anchor.clickCb=function(){var t=$(this.anchor).offset().top,a=this.ref.dParams.anchor.offset;$("html, body").stop().animate({scrollTop:t+a+1},500,"swing")}),K=new Navbar(V,Z),!1!==Z.stuck&&Z.stuck&&Z.stuck.offsetRef&&(X.call(K),window.addEventListener("scroll",X.bind(K)),window.addEventListener("resize",X.bind(K))),!1!==Z.anchor&&Z.anchor&&Z.anchor.offsetRef&&(Q.call(K),window.addEventListener("scroll",Q.bind(K)),window.addEventListener("resize",Q.bind(K))),V.addEventListener("anchorchange",function(){if(this.currentAnchor&&(e=this.currentAnchor,!((r=e.getBoundingClientRect()).top>=0&&r.left>=0&&r.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&r.right<=(window.innerWidth||document.documentElement.clientWidth)))){var t=$(this.node).find(".navigation"),a=$(this.currentAnchor).parent().offset().left+t.scrollLeft();t.stop().animate({scrollLeft:a},400,"swing")}var e,r}.bind(K))}})}();