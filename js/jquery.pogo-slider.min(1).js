/* PgSlider */
(function(d,c,b,e){function a(f,h,g){if(h.charAt(0)==="*"){f[h.substring(1)]=g}else{f["-ms-"+h]=g;f["-webkit-"+h]=g;f[h]=g}}d.fn.precss=function(g){var f={};if(arguments.length===1){for(style in g){if(g.hasOwnProperty(style)){a(f,style,g[style])}}}else{a(f,arguments[0],arguments[1])}this.css(f);return this}})(jQuery,window,document);(function(d,f,g,a){var c=function(n){var m=false;var l="Webkit Moz ms O".split(" ");var o=g.createElement("div");var j=null;n=n.toLowerCase();if(o.style[n]){m=true}if(m===false){j=n.charAt(0).toUpperCase()+n.substr(1);for(var k=0;k<l.length;k++){if(o.style[l[k]+j]!==a){m=true;break}}}return m};var i={};i.animation=c("animation");i.transition=c("transition");i.transform=c("transform");var e="pogoSlider";var b={autoplayTimeout:4000,autoplay:true,baseZindex:1,displayProgess:true,onSlideStart:null,onSlideEnd:null,onSliderPause:null,onSliderResume:null,slideTransition:"slide",slideTransitionDuration:1000,elementTransitionStart:500,elementTransitionDuration:1000,elementTransitionIn:"slideUp",elementTransitionOut:"slideDown",generateButtons:true,buttonPosition:"CenterHorizontal",generateNav:true,navPosition:"Bottom",preserveTargetSize:false,targetWidth:1000,targetHeight:300,responsive:false,pauseOnHover:true};function h(k,j){this.element=k;this.$element=d(k);this.settings=d.extend({},b,j);this.currentSlideIndex=0;this.prevSlideIndex=0;this.slideTimeoutId=0;this.slides=[];this.calls=[];this.paused=false;this.navigating=false;this.slideStartTime=null;this.slideTimeRemaining=0;this._init()}h.prototype={_init:function(){var k=this;k.$element.find(".pogoSlider-slide").each(function(){var n=[];var o=0;d(this).data("original-styles",d(this).attr("style"));d(this).find(".pogoSlider-slide-element").each(function(){var p=parseInt(d(this).data("start"))!==a?d(this).data("start"):k.settings.elementTransitionStart;var q=parseInt(d(this).data("duration"))||k.settings.elementTransitionDuration;if((p+q)>o){o=(p+q)}n.push({$element:d(this),element:this,startTime:p,duration:q,transitionIn:d(this).data("in")||k.settings.elementTransitionIn,transitionOut:d(this).data("out")||k.settings.elementTransitionOut});d(this).css("opacity",0)});var m={$element:d(this),element:this,transition:d(this).data("transition")||k.settings.slideTransition,duration:parseInt(d(this).data("duration"))||k.settings.slideTransitionDuration,elementTransitionDuration:o,totalSlideDuration:k.settings.autoplayTimeout+o,children:n};k.slides.push(m)});k.numSlides=k.slides.length;k.slides[0].$element.css("opacity",1);if(k.settings.autoplay&&k.settings.displayProgess){k._createProgessBar()}k.$element.css("padding-bottom",(100/(k.settings.targetWidth/k.settings.targetHeight))+"%");var j=k.$element.find("img").length;if(j>0){var l=0;k.$element.prepend('<div class="pogoSlider-loading"><div class="pogoSlider-loading-icon"></div></div>');k.$element.find("img").one("load",function(){if(++l===j){d(".pogoSlider-loading").remove();k._onSliderReady()}}).each(function(){if(this.complete){d(this).trigger("load")}})}else{k._onSliderReady()}},_onSliderReady:function(){var j=this;if(j.settings.autoplay){j.slideStartTime=new Date();j.slideTimeRemaining=j.slides[0].totalSlideDuration;j._slideTimeout(j.slideTimeRemaining)}if(j.settings.generateButtons&&j.slides.length>1){j._createDirButtons()}if(j.settings.generateNav&&j.slides.length>1){j._createNavigation()}if(j.settings.preserveTargetSize){j._preserveTargetSize();if(j.settings.responsive){d(f).on("resize",function(){j._preserveTargetSize()})}}if(j.settings.pauseOnHover){j.$element.on("mouseenter",function(){j.pause()});j.$element.on("mouseleave",function(){j.resume()})}j._onSlideStart(0)},_createDirButtons:function(){var j=this;j.$element.addClass("pogoSlider--dir"+j.settings.buttonPosition);d('<button class="pogoSlider-dir-btn pogoSlider-dir-btn--prev"></button>').appendTo(j.$element).on("click",function(){j.prevSlide()});d('<button class="pogoSlider-dir-btn pogoSlider-dir-btn--next"></button>').appendTo(j.$element).on("click",function(){j.nextSlide()})},_createNavigation:function(){var j=this;j.$element.addClass("pogoSlider--nav"+j.settings.navPosition);var l=d('<ul class="pogoSlider-nav"></ul>').appendTo(j.$element);for(var k=0;k<j.slides.length;k++){d('<li data-num="'+k+'"><button class="pogoSlider-nav-btn"></button></li>').appendTo(l).on("click",function(){j.toSlide(d(this).data("num"))})}},getAppliedProps:function(o){var y=g.styleSheets;var m=new RegExp("{(.+)}");o.matches=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.msMatchesSelector||o.oMatchesSelector;var p=o.getAttribute("style").replace(/ /g,"").split(";");var w=[];for(var q=0;q<p.length;q++){var x=p[q].split(":")[0];if(x&&w.indexOf(x)===-1){w.push(x)}}for(var v in y){if(y.hasOwnProperty(v)){var u=y[v].rules||y[v].cssRules;for(var l in u){if(o.matches(u[l].selectorText)){var t=m.exec(u[l].cssText.replace(/ /g,""));if(t){var z=t[1].split(";");for(var s=0;s<z.length;s++){var n=z[s].split(":")[0];if(n&&w.indexOf(n)===-1){w.push(n)}}}}}}}return w
},_preserveTargetSize:function(){var k=this;var n=new RegExp("px|%|em","i");var l=new RegExp("[0-9]*.?[0-9]+");var j=new RegExp("px","i");var m=1;if(this.scaledBy){m=(this.$element.width()/this.settings.targetWidth)/this.scaledBy}else{m=this.$element.width()/this.settings.targetWidth}this.scaledBy=this.$element.width()/this.settings.targetWidth;this.$element.find(".pogoSlider-slide-element").each(function(){var p=f.getComputedStyle(this);var r=k.getAppliedProps(this);var u={};if(!d.data(k,"originalStyles")){d.data(k,"originalStyles",d(this).attr("style"))}for(var s=0;s<r.length;s++){var o=p.getPropertyValue(r[s]);if(n.test(o)&&l.test(o)){var t=l.exec(o);var q=n.exec(o);if(j.test(q[0])){u[r[s]]=Math.ceil(t[0]*m)+q[0]}else{u[r[s]]=(t[0]*m)+q[0]}}}d(this).css(u)})},_createProgessBar:function(){var k="";k+='<div class="pogoSlider-progressBar">';k+='<div class="pogoSlider-progressBar-duration"></div>';k+="</div>";for(var j=0;j<this.slides.length;j++){this.slides[j].$element.prepend(k)}},_slideTimeout:function(j){var k=this;var l;l=k.slideTimeoutId=setTimeout(function(){if(!k.paused&&l===k.slideTimeoutId){k._changeToNext()}},j)},pause:function(){if(this.settings.autoplay){this.paused=true;clearTimeout(this.slideTimeoutId);if(this.settings.displayProgess){this.$element.find(".pogoSlider-progressBar-duration").stop(true)}this.slidePauseTime=new Date();this.slideTimeRemaining=this.slideTimeRemaining-((new Date())-this.slideStartTime);for(var j=0;j<this.slides[this.currentSlideIndex].children.length;j++){this.slides[this.currentSlideIndex].children[j].$element.precss("animation-play-state","paused")}if(this.settings.onSliderPause){this.settings.onSliderPause.apply(this)}}},resume:function(){if(this.settings.autoplay){this.paused=false;this.slideStartTime=new Date();for(var j=0;j<this.slides[this.currentSlideIndex].children.length;j++){this.slides[this.currentSlideIndex].children[j].$element.precss("animation-play-state","")}if(this.slideTimeRemaining>0&&!this.navigating){if(this.settings.displayProgess){this.$element.find(".pogoSlider-progressBar-duration").animate({"width":"100%"},this.slideTimeRemaining,"linear")}this._slideTimeout(this.slideTimeRemaining)}if(this.settings.onSliderResume){this.settings.onSliderResume.apply(this)}}},nextSlide:function(){if(!this.navigating){clearTimeout(this.slideTimeoutId);this.prevSlideIndex=this.currentSlideIndex;if(++this.currentSlideIndex>(this.numSlides-1)){this.currentSlideIndex=0}this._changeSlide(this.prevSlideIndex,this.currentSlideIndex)}},prevSlide:function(){if(!this.navigating){clearTimeout(this.slideTimeoutId);this.prevSlideIndex=this.currentSlideIndex;if(--this.currentSlideIndex<0){this.currentSlideIndex=this.numSlides-1}this._changeSlide(this.prevSlideIndex,this.currentSlideIndex)}},toSlide:function(j){if(!this.navigating){clearTimeout(this.slideTimeoutId);if(j===this.currentSlideIndex||j>(this.slides.length-1)){return}this.prevSlideIndex=this.currentSlideIndex;this.currentSlideIndex=j;this._changeSlide(this.prevSlideIndex,this.currentSlideIndex)}},destroy:function(){this.paused=true;clearTimeout(this.slideTimeoutId);d.removeData(this.element,"plugin_"+e)},_changeToNext:function(){this.prevSlideIndex=this.currentSlideIndex;if(++this.currentSlideIndex>(this.numSlides-1)){this.currentSlideIndex=0}this._changeSlide(this.prevSlideIndex,this.currentSlideIndex)},_changeSlide:function(m,o){var j=this;var n;j._onSlideEnd(m);j.navigating=true;if(i.animation&&i.transition&&i.transform){n=j.slideTransitions}else{n=j.compatSlideTransitions}var k=n[j.slides[o].transition]?j.slides[o].transition:"slide";var l=n[k].apply(j,[m,o]);setTimeout(function(){if(l){l()}j.navigating=false;j._slideCleanup(m,false);j._slideElementCleanup(m);if(j.settings.autoplay){j._slideTimeout(j.slides[o].totalSlideDuration)}j._onSlideStart(o)},j.slides[o].duration)},_onSlideStart:function(k){this.slides[k].$element.css("z-index",1);if(this.settings.autoplay){this.slideStartTime=new Date();this.slideTimeRemaining=this.slides[k].totalSlideDuration;if(this.settings.displayProgess&&!this.paused){this.slides[k].$element.find(".pogoSlider-progressBar-duration").css("width","0").animate({"width":"100%"},this.slideTimeRemaining,"linear")}}if(this.slides[k].children.length>0){this._slideElementsTransitionIn(k)}if(this.paused){for(var j=0;j<this.slides[k].children.length;j++){this.slides[k].children[j].$element.precss("animation-play-state","paused")}}if(this.settings.generateNav){this.$element.find(".pogoSlider-nav-btn").removeClass("pogoSlider-nav-btn--selected");this.$element.find(".pogoSlider-nav-btn").eq(k).addClass("pogoSlider-nav-btn--selected")}if(this.settings.onSlideStart){this.settings.onSlideStart.apply(this)}},_onSlideEnd:function(l){var k;if(this.settings.autoplay){if(this.settings.displayProgess){this.slides[l].$element.find(".pogoSlider-progressBar-duration").stop(true).css("width","0")}}if(this.paused){k=this.slides[l].totalSlideDuration-this.slideTimeRemaining;for(var j=0;j<this.slides[l].children.length;
j++){this.slides[l].children[j].$element.precss("animation-play-state","")}}else{k=this.slides[l].totalSlideDuration-(this.slideTimeRemaining-((new Date())-this.slideStartTime))}if(this.slides[l].children.length>0&&k>this.slides[l].elementTransitionDuration){this._slideElementsTransitionOut(l)}if(this.settings.onSlideEnd){this.settings.onSlideEnd.apply(this)}},_slideElementsTransitionIn:function(l){for(var j=0;j<this.slides[l].children.length;j++){var k=this.slides[l].children[j];k.$element.precss({"*opacity":1,"animation-duration":k.duration+"ms","animation-delay":k.startTime+"ms"}).addClass("pogoSlider-animation-"+k.transitionIn+"In")}},_slideElementsTransitionOut:function(l){for(var j=0;j<this.slides[l].children.length;j++){var k=this.slides[l].children[j];k.$element.precss("animation-delay","").removeClass("pogoSlider-animation-"+k.transitionIn+"In").addClass("pogoSlider-animation-"+k.transitionOut+"Out")}},_slideCleanup:function(k,j){if(this.slides[k].$element.find(".pogoSlider-slide-slice").length>0){this._removeSlideSlices(k)}this.slides[k].$element.attr("style",this.slides[k].$element.data("original-styles")).css("opacity",j?"1":"0")},_slideElementCleanup:function(m){var j=function(n,o){return(o.match(/pogoSlider-(?:(?:transition)|(?:animation))(?:-[a-zA-Z0-9]+)?(?:--[a-z]+)?/gi)||[]).join(" ")};var l=function(n,o){return o.replace(/(?:-webkit-)?(?:-ms-)?((?:transition)|(?:animation))[^;]+;/g,"")};this.slides[m].$element.find(".pogoSlider-progressBar-duration").css("width","0");for(var k=0;k<this.slides[m].children.length;k++){this.slides[m].children[k].$element.removeClass(j).attr("style",l).css("opacity",0)}},_createSlideSlices:function(A,q,r){var p=r*q;var n=100/r;var l=100/q;var t=100*r;var s=100*q;var C=this.slides[A].$element;var B=C.attr("style");var m;if(this.paused){m=this.slides[A].totalSlideDuration-this.slideTimeRemaining}else{m=this.slides[A].totalSlideDuration-(this.slideTimeRemaining-((new Date())-this.slideStartTime))}if(A===this.prevSlideIndex&&this.slides[A].children.length>0&&m<this.slides[A].elementTransitionDuration){for(var x=0;x<this.slides[A].children.length;x++){var k=(this.slides[A].children[x].startTime-m)+"ms";this.slides[A].children[x].$element.precss("animation-delay",k)}}C.children().wrapAll('<div class="pogoSlider-slide-slice" style="'+"width:"+n+"%;height:"+l+"%;top:0%;left:0%;"+'"/>').wrapAll('<div class="pogoSlider-slide-slice-inner" style="'+B+"width:"+t+"%;height:"+s+"%;top:0%;left:0%;"+'"/>');C.attr("style",function(j,D){return D.replace(/(?:background)[^;]+;/g,"")});for(var w=0;w<p;w++){var o=w%q;var z=Math.floor(w/q);var u="width:"+n+"%;height:"+l+"%;top:"+(l*o)+"%;left:"+(n*z)+"%;";var v="width:"+t+"%;height:"+s+"%;top:-"+(100*o)+"%;left:-"+(100*z)+"%;";var y="";if(this.settings.preserveTargetSize){y="background-size:"+this.$element.width()+"px "+parseFloat(this.$element.css("padding-bottom"))+"px;";console.log(y)}C.find(".pogoSlider-slide-slice").last().clone(true,true).appendTo(this.slides[A].element).attr("style",u).find(".pogoSlider-slide-slice-inner").attr("style",B+v+y)}},_removeSlideSlices:function(l){var j=this;var k=j.slides[l].$element;k.attr("style",k.data("original-styles"));k.find(".pogoSlider-slide-slice").not(":first").remove();k.find(".pogoSlider-slide-slice-inner").children().unwrap();k.find(".pogoSlider-slide-slice").children().unwrap()},_generateARandomArray:function(q){var l=[];for(var p=0;p<q;p++){l.push(p)}for(var o=l.length-1;o>0;o--){var n=Math.floor(Math.random()*(o+1));var m=l[o];l[o]=l[n];l[n]=m}return l},slideTransitions:{fade:function(j,l){var k=this.slides[l];this.slides[j].$element.precss({"*opacity":"0","transition-duration":k.duration+"ms"});k.$element.precss({"*opacity":"1","transition-duration":k.duration+"ms"})},slide:function(j,k){var l;if(k===0&&j===this.slides.length-1){l="slideLeft"}else{if(j===0&&k===this.slides.length-1){l="slideRight"}else{if(k>j){l="slideLeft"}else{l="slideRight"}}}return this.slideTransitions[l].apply(this,[j,k])},verticalSlide:function(j,k){var l;if(k===0&&j===this.slides.length-1){l="slideUp"}else{if(j===0&&k===this.slides.length-1){l="slideDown"}else{if(k>j){l="slideUp"}else{l="slideDown"}}}return this.slideTransitions[l].apply(this,[j,k])},slideLeft:function(k,m){var j=this;var l=j.slides[m];j.slides[k].$element.precss("animation-duration",l.duration+"ms").addClass("pogoSlider-animation-leftOut");l.$element.precss({"*opacity":"1","animation-duration":l.duration+"ms"}).addClass("pogoSlider-animation-leftIn");return function(){j.slides[k].$element.removeClass("pogoSlider-animation-leftOut");l.$element.attr("style",l.$element.data("original-styles")).css("opacity","1").removeClass("pogoSlider-animation-leftIn")}},slideRight:function(k,m){var j=this;var l=j.slides[m];j.slides[k].$element.precss("animation-duration",l.duration+"ms").addClass("pogoSlider-animation-rightOut");l.$element.precss({"*opacity":"1","animation-duration":l.duration+"ms"}).addClass("pogoSlider-animation-rightIn");return function(){j.slides[k].$element.removeClass("pogoSlider-animation-rightOut");
l.$element.attr("style",l.$element.data("original-styles")).css("opacity","1").removeClass("pogoSlider-animation-rightIn")}},slideUp:function(k,m){var j=this;var l=j.slides[m];j.slides[k].$element.precss("animation-duration",l.duration+"ms").addClass("pogoSlider-animation-upOut");l.$element.precss({"*opacity":"1","animation-duration":l.duration+"ms"}).addClass("pogoSlider-animation-upIn");return function(){j.slides[k].$element.removeClass("pogoSlider-animation-upOut");l.$element.attr("style",l.$element.data("original-styles")).css("opacity","1").removeClass("pogoSlider-animation-upIn")}},slideDown:function(k,m){var j=this;var l=j.slides[m];j.slides[k].$element.precss("animation-duration",l.duration+"ms").addClass("pogoSlider-animation-downOut");l.$element.precss({"*opacity":"1","animation-duration":l.duration+"ms"}).addClass("pogoSlider-animation-downIn");return function(){j.slides[k].$element.removeClass("pogoSlider-animation-downOut");l.$element.attr("style",l.$element.data("original-styles")).css("opacity","1").removeClass("pogoSlider-animation-downIn")}},slideRevealLeft:function(k,m){var j=this;var l=j.slides[m];j.slides[k].$element.precss({"*z-index":j.settings.baseZindex+1,"animation-duration":l.duration+"ms"}).addClass("pogoSlider-animation-leftOut");l.$element.css({"opacity":1,"z-index":j.settings.baseZindex});return function(){j.slides[k].$element.removeClass("pogoSlider-animation-leftOut")}},slideRevealRight:function(k,m){var j=this;var l=j.slides[m];j.slides[k].$element.precss({"*z-index":j.settings.baseZindex+1,"animation-duration":l.duration+"ms"}).addClass("pogoSlider-animation-rightOut");l.$element.css({"opacity":1,"z-index":j.settings.baseZindex});return function(){j.slides[k].$element.removeClass("pogoSlider-animation-rightOut")}},slideOverLeft:function(j,l){var k=this.slides[l];k.$element.precss({"*opacity":"1","*z-index":this.settings.baseZindex+1,"animation-duration":k.duration+"ms"}).addClass("pogoSlider-animation-leftIn");return function(){k.$element.attr("style",k.$element.data("original-styles")).css("opacity","1").removeClass("pogoSlider-animation-leftIn")}},slideOverRight:function(j,l){var k=this.slides[l];k.$element.precss({"*opacity":"1","*z-index":this.settings.baseZindex+1,"animation-duration":k.duration+"ms"}).addClass("pogoSlider-animation-rightIn");return function(){k.$element.attr("style",k.$element.data("original-styles")).css("opacity","1").removeClass("pogoSlider-animation-rightIn")}},expandReveal:function(k,m){var j=this;var l=j.slides[m];j.$element.css("overflow","visible");j.slides[k].$element.precss({"*z-index":j.settings.baseZindex+1,"animation-duration":l.duration+"ms"}).addClass("pogoSlider-animation-expandReveal");l.$element.css({"opacity":1,"z-index":j.settings.baseZindex});return function(){j.$element.css("overflow","");j.slides[k].$element.removeClass("pogoSlider-animation-expandReveal")}},shrinkReveal:function(k,m){var j=this;var l=j.slides[m];j.slides[k].$element.precss({"*z-index":j.settings.baseZindex+1,"animation-duration":l.duration+"ms"}).addClass("pogoSlider-animation-shrinkReveal");l.$element.css({"opacity":1,"z-index":j.settings.baseZindex});return function(){j.slides[k].$element.removeClass("pogoSlider-animation-shrinkReveal")}},verticalSplitReveal:function(l,n){var k=this;var m=k.slides[n];k.slides[l].$element.css("z-index",k.settings.baseZindex+1);m.$element.css({"opacity":1,"z-index":k.settings.baseZindex});k._createSlideSlices(l,1,2);var j=k.slides[l].$element.find(".pogoSlider-slide-slice");j.precss("animation-duration",m.duration+"ms");j.eq(0).addClass("pogoSlider-animation-leftOut");j.eq(1).addClass("pogoSlider-animation-rightOut")},horizontalSplitReveal:function(l,n){var k=this;var m=k.slides[n];k.slides[l].$element.css("z-index",k.settings.baseZindex+1);m.$element.css({"opacity":1,"z-index":k.settings.baseZindex});k._createSlideSlices(l,2,1);var j=k.slides[l].$element.find(".pogoSlider-slide-slice");j.precss("animation-duration",m.duration+"ms");j.eq(0).addClass("pogoSlider-animation-upOut");j.eq(1).addClass("pogoSlider-animation-downOut")},zipReveal:function(l,n){var k=this;var m=k.slides[n];k.slides[l].$element.css("z-index",k.settings.baseZindex+1);m.$element.css({"opacity":1,"z-index":k.settings.baseZindex});k._createSlideSlices(l,1,Math.round(k.$element.width()/100));var j=k.slides[l].$element.find(".pogoSlider-slide-slice");j.precss("animation-duration",m.duration+"ms");j.each(function(o){if(o%2===0){d(this).addClass("pogoSlider-animation-upOut")}else{d(this).addClass("pogoSlider-animation-downOut")}})},barRevealDown:function(j,k){return this.slideTransitions["barReveal"].apply(this,[j,k,"down"])},barRevealUp:function(j,k){return this.slideTransitions["barReveal"].apply(this,[j,k,"up"])},barReveal:function(o,q,n){var k=this;var p=k.slides[q];k.slides[o].$element.css("z-index",k.settings.baseZindex+1);p.$element.css({"opacity":1,"z-index":k.settings.baseZindex});k._createSlideSlices(o,1,Math.round(k.$element.width()/100));var j=k.slides[o].$element.find(".pogoSlider-slide-slice");
var l=p.duration/(j.length+1);var m=l*2;j.precss("animation-duration",m+"ms");j.each(function(r){if(n==="down"){d(this).addClass("pogoSlider-animation-downOut").precss("animation-delay",l*r+"ms")}else{d(this).addClass("pogoSlider-animation-upOut").precss("animation-delay",l*r+"ms")}})},blocksReveal:function(k,j){var u=this;var q=u.slides[j];var t=0;if(u.settings.preserveTargetSize){t=parseFloat(u.$element.css("padding-bottom"))}else{t=u.$element.height()}var r=Math.round(t/100);var l=Math.round(u.$element.width()/100);u.slides[k].$element.css("z-index",u.settings.baseZindex+1);q.$element.css({"opacity":1,"z-index":u.settings.baseZindex});var p=u._generateARandomArray(r*l);u._createSlideSlices(k,r,l);var n=u.slides[k].$element.find(".pogoSlider-slide-slice");var o=q.duration/(n.length+1);var s=o*2;n.precss("animation-duration",s+"ms");for(var m=0;m<n.length;m++){n.eq(p.pop()).precss("animation-delay",(o*m)+"ms").addClass("pogoSlider-animation-blocksReveal")}},fold:function(j,k){var l;if(k===0&&j===this.slides.length-1){l="foldLeft"}else{if(j===0&&k===this.slides.length-1){l="foldRight"}else{if(k>j){l="foldLeft"}else{l="foldRight"}}}return this.slideTransitions[l].apply(this,[j,k])},foldRight:function(l,k){var s=this;var q=s.slides[k];var m=s.slides[l];s.$element.css("overflow","visible");m.$element.css({"overflow":"visible","z-index":s.settings.baseZindex});q.$element.css({"opacity":1,"overflow":"visible","z-index":s.settings.baseZindex+1});s._createSlideSlices(l,1,2);var r=m.$element.find(".pogoSlider-slide-slice");s._createSlideSlices(k,1,2);var o=s.slides[k].$element.find(".pogoSlider-slide-slice");var n=r.eq(0);var p=o.eq(0);var j=o.eq(1);q.$element.prepend(n.detach());m.$element.prepend(p.detach());n.addClass("pogoSlider-animation-foldInRight").precss("animation-duration",q.duration+"ms");j.addClass("pogoSlider-animation-foldOutRight").precss("animation-duration",q.duration+"ms");return function(){s.$element.css("overflow","");q.$element.prepend(p.detach());m.$element.prepend(n.detach());s._slideCleanup(k,true)}},foldLeft:function(l,k){var s=this;var q=s.slides[k];var m=s.slides[l];s.$element.css("overflow","visible");m.$element.css({"overflow":"visible","z-index":s.settings.baseZindex});q.$element.css({"opacity":1,"overflow":"visible","z-index":s.settings.baseZindex+1});s._createSlideSlices(l,1,2);var r=m.$element.find(".pogoSlider-slide-slice");s._createSlideSlices(k,1,2);var n=s.slides[k].$element.find(".pogoSlider-slide-slice");var p=r.eq(1);var o=n.eq(0);var j=n.eq(1);q.$element.append(p.detach());m.$element.append(j.detach());p.addClass("pogoSlider-animation-foldInLeft").precss("animation-duration",q.duration+"ms");o.addClass("pogoSlider-animation-foldOutLeft").precss("animation-duration",q.duration+"ms");return function(){s.$element.css("overflow","");s._slideCleanup(k,true)}}},compatSlideTransitions:{fade:function(j,l){var k=this.slides[l];this.slides[j].$element.animate({opacity:0},k.duration);k.$element.animate({opacity:1},k.duration)},slide:function(j,k){var l;if(j>k&&j===this.slides.length-1&&k===0){l="slideLeft"}else{if(j<k&&j===0&&k===this.slides.length-1){l="slideRight"}else{if(j<k){l="slideLeft"}else{l="slideRight"}}}return this.slideTransitions[l].apply(this,[j,k])},verticalSlide:function(j,k){var l;if(j>k&&j===this.slides.length-1&&k===0){l="slideUp"}else{if(j<k&&j===0&&k===this.slides.length-1){l="slideDown"}else{if(j<k){l="slideUp"}else{l="slideDown"}}}return this.slideTransitions[l].apply(this,[j,k])},slideLeft:function(j,l){var k=this.slides[l];this.slides[j].$element.animate({left:"-100%"},k.duration);k.$element.css({left:"100%","opacity":1}).animate({left:0},k.duration)},slideRight:function(j,l){var k=this.slides[l];this.slides[j].$element.animate({left:"100%"},k.duration);k.$element.css({left:"-100%","opacity":1}).animate({left:0},k.duration)},slideUp:function(j,l){var k=this.slides[l];this.slides[j].$element.animate({top:"-100%"},k.duration);k.$element.css({top:"100%","opacity":1}).animate({top:"0"},k.duration)},slideDown:function(j,l){var k=this.slides[l];this.slides[j].$element.animate({top:"100%"},k.duration);k.$element.css({top:"-100%","opacity":1}).animate({top:"0"},k.duration)},slideRevealLeft:function(j,l){var k=this.slides[l];this.slides[j].$element.css("z-index",this.settings.baseZindex+1).animate({left:"-100%"},k.duration);k.$element.css({"opacity":1,"z-index":this.settings.baseZindex})},slideRevealRight:function(j,l){var k=this.slides[l];this.slides[j].$element.css("z-index",this.settings.baseZindex+1).animate({left:"100%"},k.duration);k.$element.css({"opacity":1,"z-index":this.settings.baseZindex})},slideOverLeft:function(j,l){var k=this.slides[l];k.$element.css({"opacity":1,"z-index":this.settings.baseZindex,"left":"100%"}).animate({"left":0},k.duration)},slideOverRight:function(j,l){var k=this.slides[l];k.$element.css({"opacity":1,"z-index":this.settings.baseZindex,"right":"100%"}).animate({"right":0},k.duration)},expandReveal:function(j,l){var k=this.slides[l];this.slides[j].$element.css("z-index",this.settings.baseZindex+1).animate({width:"120%",height:"120%","left":"-10%","top":"-10%",opacity:0},k.duration);
k.$element.css({"opacity":1,"z-index":this.settings.baseZindex})},shrinkReveal:function(j,l){var k=this.slides[l];this.slides[j].$element.css("z-index",this.settings.baseZindex+1).animate({width:"50%",height:"50%","left":"25%","top":"25%",opacity:0},k.duration);k.$element.css({"opacity":1,"z-index":this.settings.baseZindex})},verticalSplitReveal:function(l,n){var k=this;var m=k.slides[n];k.slides[l].$element.css("z-index",k.settings.baseZindex+1);m.$element.css({"opacity":1,"z-index":k.settings.baseZindex});k._createSlideSlices(l,1,2);var j=k.slides[l].$element.find(".pogoSlider-slide-slice");j.eq(0).animate({"left":"-50%"},m.duration);j.eq(1).animate({"left":"100%"},m.duration)},horizontalSplitReveal:function(l,n){var k=this;var m=k.slides[n];k.slides[l].$element.css("z-index",k.settings.baseZindex+1);m.$element.css({"opacity":1,"z-index":k.settings.baseZindex});k._createSlideSlices(l,2,1);var j=k.slides[l].$element.find(".pogoSlider-slide-slice");j.eq(0).animate({"top":"-50%"},m.duration);j.eq(1).animate({"top":"100%"},m.duration)},zipReveal:function(n,p){var m=this;var o=m.slides[p];m.slides[n].$element.css("z-index",m.settings.baseZindex+1);o.$element.css({"opacity":1,"z-index":m.settings.baseZindex});m._createSlideSlices(n,1,Math.round(m.$element.width()/100));var l=m.slides[n].$element.find(".pogoSlider-slide-slice");var k=o.duration/(l.length+1);var j=k*2;l.each(function(q){if(q%2===0){d(this).delay(k*q).animate({"top":"100%"},j)}else{d(this).delay(k*q).animate({"top":"-100%"},j)}})},barRevealDown:function(j,k){return this.slideTransitions["barReveal"].apply(this,[j,k,"down"])},barRevealUp:function(j,k){return this.slideTransitions["barReveal"].apply(this,[j,k,"up"])},barReveal:function(o,q,n){var m=this;var p=m.slides[q];m.slides[o].$element.css("z-index",m.settings.baseZindex+1);p.$element.css({"opacity":1,"z-index":m.settings.baseZindex});m._createSlideSlices(o,1,Math.round(m.$element.width()/100));var l=m.slides[o].$element.find(".pogoSlider-slide-slice");var k=p.duration/(l.length+1);var j=k*2;l.each(function(r){if(n==="down"){d(this).delay(k*r).animate({"top":"100%"},j)}else{d(this).delay(k*r).animate({"top":"-100%"},j)}})}}};d.fn[e]=function(j){this.each(function(){if(!d.data(this,"plugin_"+e)){d.data(this,"plugin_"+e,new h(this,j))}});return this}})(jQuery,window,document);