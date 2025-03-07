(function(){var t,e,n,i,o,r=function(t,e){return function(){return t.apply(e,arguments)}},s=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1};e=function(){function t(){}return t.prototype.extend=function(t,e){var n,i;for(n in e)i=e[n],null==t[n]&&(t[n]=i);return t},t.prototype.isMobile=function(t){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)},t.prototype.createEvent=function(t,e,n,i){var o;return null==e&&(e=!1),null==n&&(n=!1),null==i&&(i=null),null!=document.createEvent?(o=document.createEvent("CustomEvent"),o.initCustomEvent(t,e,n,i)):null!=document.createEventObject?(o=document.createEventObject(),o.eventType=t):o.eventName=t,o},t.prototype.emitEvent=function(t,e){return null!=t.dispatchEvent?t.dispatchEvent(e):e in(null!=t)?t[e]():"on"+e in(null!=t)?t["on"+e]():void 0},t.prototype.addEvent=function(t,e,n){return null!=t.addEventListener?t.addEventListener(e,n,!1):null!=t.attachEvent?t.attachEvent("on"+e,n):t[e]=n},t.prototype.removeEvent=function(t,e,n){return null!=t.removeEventListener?t.removeEventListener(e,n,!1):null!=t.detachEvent?t.detachEvent("on"+e,n):delete t[e]},t.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},t}(),n=this.WeakMap||this.MozWeakMap||(n=function(){function t(){this.keys=[],this.values=[]}return t.prototype.get=function(t){var e,n,i,o,r;for(r=this.keys,e=i=0,o=r.length;o>i;e=++i)if(n=r[e],n===t)return this.values[e]},t.prototype.set=function(t,e){var n,i,o,r,s;for(s=this.keys,n=o=0,r=s.length;r>o;n=++o)if(i=s[n],i===t)return void(this.values[n]=e);return this.keys.push(t),this.values.push(e)},t}()),t=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(t=function(){function t(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return t.notSupported=!0,t.prototype.observe=function(){},t}()),i=this.getComputedStyle||function(t){return this.getPropertyValue=function(e){var n;return"float"===e&&(e="styleFloat"),o.test(e)&&e.replace(o,function(t,e){return e.toUpperCase()}),(null!=(n=t.currentStyle)?n[e]:void 0)||null},this},o=/(\-([a-z]){1})/g,this.WOW=function(){function o(t){null==t&&(t={}),this.scrollCallback=r(this.scrollCallback,this),this.scrollHandler=r(this.scrollHandler,this),this.resetAnimation=r(this.resetAnimation,this),this.start=r(this.start,this),this.scrolled=!0,this.config=this.util().extend(t,this.defaults),null!=t.scrollContainer&&(this.config.scrollContainer=document.querySelector(t.scrollContainer)),this.animationNameCache=new n,this.wowEvent=this.util().createEvent(this.config.boxClass)}return o.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},o.prototype.init=function(){var t;return this.element=window.document.documentElement,"interactive"===(t=document.readyState)||"complete"===t?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},o.prototype.start=function(){var e,n,i,o;if(this.stopped=!1,this.boxes=function(){var t,n,i,o;for(i=this.element.querySelectorAll("."+this.config.boxClass),o=[],t=0,n=i.length;n>t;t++)e=i[t],o.push(e);return o}.call(this),this.all=function(){var t,n,i,o;for(i=this.boxes,o=[],t=0,n=i.length;n>t;t++)e=i[t],o.push(e);return o}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(o=this.boxes,n=0,i=o.length;i>n;n++)e=o[n],this.applyStyle(e,!0);return this.disabled()||(this.util().addEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new t(function(t){return function(e){var n,i,o,r,s;for(s=[],n=0,i=e.length;i>n;n++)r=e[n],s.push(function(){var t,e,n,i;for(n=r.addedNodes||[],i=[],t=0,e=n.length;e>t;t++)o=n[t],i.push(this.doSync(o));return i}.call(t));return s}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},o.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},o.prototype.sync=function(){return t.notSupported?this.doSync(this.element):void 0},o.prototype.doSync=function(t){var e,n,i,o,r;if(null==t&&(t=this.element),1===t.nodeType){for(t=t.parentNode||t,o=t.querySelectorAll("."+this.config.boxClass),r=[],n=0,i=o.length;i>n;n++)e=o[n],s.call(this.all,e)<0?(this.boxes.push(e),this.all.push(e),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(e,!0),r.push(this.scrolled=!0)):r.push(void 0);return r}},o.prototype.show=function(t){return this.applyStyle(t),t.className=t.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(t),this.util().emitEvent(t,this.wowEvent),this.util().addEvent(t,"animationend",this.resetAnimation),this.util().addEvent(t,"oanimationend",this.resetAnimation),this.util().addEvent(t,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(t,"MSAnimationEnd",this.resetAnimation),t},o.prototype.applyStyle=function(t,e){var n,i,o;return i=t.getAttribute("data-wow-duration"),n=t.getAttribute("data-wow-delay"),o=t.getAttribute("data-wow-iteration"),this.animate(function(r){return function(){return r.customStyle(t,e,i,n,o)}}(this))},o.prototype.animate=function(){return"requestAnimationFrame"in window?function(t){return window.requestAnimationFrame(t)}:function(t){return t()}}(),o.prototype.resetStyle=function(){var t,e,n,i,o;for(i=this.boxes,o=[],e=0,n=i.length;n>e;e++)t=i[e],o.push(t.style.visibility="visible");return o},o.prototype.resetAnimation=function(t){var e;return t.type.toLowerCase().indexOf("animationend")>=0?(e=t.target||t.srcElement,e.className=e.className.replace(this.config.animateClass,"").trim()):void 0},o.prototype.customStyle=function(t,e,n,i,o){return e&&this.cacheAnimationName(t),t.style.visibility=e?"hidden":"visible",n&&this.vendorSet(t.style,{animationDuration:n}),i&&this.vendorSet(t.style,{animationDelay:i}),o&&this.vendorSet(t.style,{animationIterationCount:o}),this.vendorSet(t.style,{animationName:e?"none":this.cachedAnimationName(t)}),t},o.prototype.vendors=["moz","webkit"],o.prototype.vendorSet=function(t,e){var n,i,o,r;i=[];for(n in e)o=e[n],t[""+n]=o,i.push(function(){var e,i,s,a;for(s=this.vendors,a=[],e=0,i=s.length;i>e;e++)r=s[e],a.push(t[""+r+n.charAt(0).toUpperCase()+n.substr(1)]=o);return a}.call(this));return i},o.prototype.vendorCSS=function(t,e){var n,o,r,s,a,l;for(a=i(t),s=a.getPropertyCSSValue(e),r=this.vendors,n=0,o=r.length;o>n;n++)l=r[n],s=s||a.getPropertyCSSValue("-"+l+"-"+e);return s},o.prototype.animationName=function(t){var e;try{e=this.vendorCSS(t,"animation-name").cssText}catch(n){e=i(t).getPropertyValue("animation-name")}return"none"===e?"":e},o.prototype.cacheAnimationName=function(t){return this.animationNameCache.set(t,this.animationName(t))},o.prototype.cachedAnimationName=function(t){return this.animationNameCache.get(t)},o.prototype.scrollHandler=function(){return this.scrolled=!0},o.prototype.scrollCallback=function(){var t;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var e,n,i,o;for(i=this.boxes,o=[],e=0,n=i.length;n>e;e++)t=i[e],t&&(this.isVisible(t)?this.show(t):o.push(t));return o}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},o.prototype.offsetTop=function(t){for(var e;void 0===t.offsetTop;)t=t.parentNode;for(e=t.offsetTop;t=t.offsetParent;)e+=t.offsetTop;return e},o.prototype.isVisible=function(t){var e,n,i,o,r;return n=t.getAttribute("data-wow-offset")||this.config.offset,r=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,o=r+Math.min(this.element.clientHeight,this.util().innerHeight())-n,i=this.offsetTop(t),e=i+t.clientHeight,o>=i&&e>=r},o.prototype.util=function(){return null!=this._util?this._util:this._util=new e},o.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},o}()}).call(this),function(t){t.fn.timeLine=function(e){"use strict";var n=t.extend({myTimeLine:this,mainColor:"",opacity:"0.5",offset:"400",itemAnimateDuration:2,lineColor:"#DDDDDD",LeftAnimation:"rotateInUpRight",RightAnimation:"rotateInUpLeft"},e);t(document).ready(function(){function e(t){return t=t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i),t&&4===t.length?"#"+("0"+parseInt(t[1],10).toString(16)).slice(-2)+("0"+parseInt(t[2],10).toString(16)).slice(-2)+("0"+parseInt(t[3],10).toString(16)).slice(-2):""}function i(t){var e=/^#[0-9A-F]{3,6}$/i.test(t);return!e&&v?(console.log("%cWarning!!! Unkown or undefined color format, please set your color format like this example #FFFFFF or #FFF. default color will be set","font-size: 21px; color: red"),v=!1,[e,"#DDD"]):[e,t]}function o(t){var o=i(t)[0],r="#b50000",s="#5E0000";if(o){var a=t;t&&4==t.length&&(a=t.replace(/[0-9A-F]{1}/gi,"$&$&"));var l=a,c=/^#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/,u=c.exec(l),d="rgba("+parseInt(u[1],16)+","+parseInt(u[2],16)+","+parseInt(u[3],16)+","+n.opacity+")",h="rgba("+(parseInt(u[1],16)-94<=0?0:parseInt(u[1],16)-94)+","+parseInt(u[2],16)+","+parseInt(u[3],16)+")";return[d,e(h)]}return[r,s]}function r(t){f.eq(t).animate({bottom:"10px",opacity:1},2e3)}function s(){p.after('<div class="controll"><i style="font-size: 250px" class="fa fa-play-circle" aria-hidden="true"></i></div>');var e=h.find(".controll i");e.click(function(){t(this).fadeOut(200),t(this).parent().fadeOut(200),console.log(this),t(this).parents().eq(1).find("video").get(0).play(),t(this).parents().eq(1).find("video").on("ended",function(){t(this).parent().find(".controll").fadeIn(200),t(this).parent().find(".controll i").fadeIn(200),t(this).get(0).load()})}),p.click(function(){t(this).get(0).paused||(t(this).get(0).pause(),t(this).parent().find(".controll").fadeIn(200),t(this).parent().find(".controll i").fadeIn(200),console.log(this))})}function a(){var e=o(n.mainColor)[0],r=o(n.mainColor)[1];for(u=0;u<h.length;u++)u%2==0?h.eq(u).addClass("wow "+n.LeftAnimation).attr("data-wow-offset",n.offset).attr("data-wow-duration",n.itemAnimateDuration+"s"):h.eq(u).addClass("wow pull-right "+n.RightAnimation).attr("data-wow-offset",n.offset).attr("data-wow-duration",n.itemAnimateDuration+"s");n.myTimeLine.find(".pull-right").attr("data-wow-delay","0.5s"),h.find(".title").css({backgroundColor:e}),h.find(".star").css({backgroundColor:e}),f.css({bottom:d+"px",opacity:0,cursor:"pointer"}),f.click(function(e){t(e.target).closest(".caption").find(".textContent").stop(!0,!1),t(e.target).closest(".caption").find(".textContent").hasClass("in")?(t(e.target).closest(".caption").find(".textContent").slideUp(400).removeClass("in"),t(e.target).closest(".caption").find(".title i").css({transform:"rotate(0deg)"})):(t(e.target).closest(".caption").find(".textContent").slideDown(400).addClass("in"),t(e.target).closest(".caption").find(".title i").css({transform:"rotate(90deg)",transition:"transform 0.4s ease-out"}))}),m.find("p").css({borderLeft:"5px solid "+e}),m.hide(),t("head").append("<style>.timeLine .row .item .caption .image .title:before{border-top: 10px solid "+r+"}.timeLine .row .item .caption .star:before{border-right: 10px solid "+r+"}.timeLine .row .pull-right:before,.timeLine .row .item:before{border: 3px solid "+e+"}.timeLine .row .lineHeader:after{background-color: "+i(n.lineColor)[1]+"}.timeLine .row .lineHeader:before,.timeLine .row .lineFooter:before{color: "+i(n.lineColor)[1]+"}</style>"),(new WOW).init()}function l(){for(c=1e3*(n.itemAnimateDuration-.75*n.itemAnimateDuration),t(window).scroll(function(){for(u=0;u<f.length;u++)"visible"!=h.eq(u).css("visibility")||h.eq(u).hasClass("done")||(h.eq(u).addClass("done"),window.setTimeout(r,c,u))}),u=0;u<f.length;u++)"visible"!=h.eq(u).css("visibility")||h.eq(u).hasClass("done")||(h.eq(u).addClass("done"),window.setTimeout(r,c,u));s()}var c,u,d=80,h=n.myTimeLine.find(".item"),f=h.find(".title"),p=h.find("video"),m=h.find(".textContent"),v=!0;a(),window.setTimeout(l,1e3)})}}(jQuery);