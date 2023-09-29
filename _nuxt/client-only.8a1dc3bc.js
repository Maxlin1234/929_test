import{S as z}from"./core.05167c01.js";import{D as y,B as g,K as D,L as M,M as H,N as U,h as I,C as L,O as q,z as K,y as Z,b as J}from"./entry.955a0062.js";function O(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function C(e,a){const n=["__proto__","constructor","prototype"];Object.keys(a).filter(l=>n.indexOf(l)<0).forEach(l=>{typeof e[l]>"u"?e[l]=a[l]:O(a[l])&&O(e[l])&&Object.keys(a[l]).length>0?a[l].__swiper__?e[l]=a[l]:C(e[l],a[l]):e[l]=a[l]})}function $(e={}){return e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function P(e={}){return e.pagination&&typeof e.pagination.el>"u"}function G(e={}){return e.scrollbar&&typeof e.scrollbar.el>"u"}function F(e=""){const a=e.split(" ").map(l=>l.trim()).filter(l=>!!l),n=[];return a.forEach(l=>{n.indexOf(l)<0&&n.push(l)}),n.join(" ")}const V=["modules","init","_direction","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_preloadImages","updateOnImagesReady","_loop","_loopAdditionalSlides","_loopedSlides","_loopedSlidesLimit","_loopFillGroupWithBlank","loopPreventsSlide","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideBlankClass","slideActiveClass","slideDuplicateActiveClass","slideVisibleClass","slideDuplicateClass","slideNextClass","slideDuplicateNextClass","slidePrevClass","slideDuplicatePrevClass","wrapperClass","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","lazy","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom"];function A(e={},a=!0){const n={on:{}},l={},i={};C(n,z.defaults),C(n,z.extendedDefaults),n._emitClasses=!0,n.init=!1;const u={},d=V.map(t=>t.replace(/_/,"")),f=Object.assign({},e);return Object.keys(f).forEach(t=>{typeof e[t]>"u"||(d.indexOf(t)>=0?O(e[t])?(n[t]={},i[t]={},C(n[t],e[t]),C(i[t],e[t])):(n[t]=e[t],i[t]=e[t]):t.search(/on[A-Z]/)===0&&typeof e[t]=="function"?a?l[`${t[2].toLowerCase()}${t.substr(3)}`]=e[t]:n.on[`${t[2].toLowerCase()}${t.substr(3)}`]=e[t]:u[t]=e[t])}),["navigation","pagination","scrollbar"].forEach(t=>{n[t]===!0&&(n[t]={}),n[t]===!1&&delete n[t]}),{params:n,passedParams:i,rest:u,events:l}}function Q({el:e,nextEl:a,prevEl:n,paginationEl:l,scrollbarEl:i,swiper:u},d){$(d)&&a&&n&&(u.params.navigation.nextEl=a,u.originalParams.navigation.nextEl=a,u.params.navigation.prevEl=n,u.originalParams.navigation.prevEl=n),P(d)&&l&&(u.params.pagination.el=l,u.originalParams.pagination.el=l),G(d)&&i&&(u.params.scrollbar.el=i,u.originalParams.scrollbar.el=i),u.init(e)}const W=(e,a)=>{let n=a.slidesPerView;if(a.breakpoints){const i=z.prototype.getBreakpoint(a.breakpoints),u=i in a.breakpoints?a.breakpoints[i]:void 0;u&&u.slidesPerView&&(n=u.slidesPerView)}let l=Math.ceil(parseFloat(a.loopedSlides||n,10));return l+=a.loopAdditionalSlides,l>e.length&&a.loopedSlidesLimit&&(l=e.length),l};function X(e,a,n){const l=a.map((t,o)=>(t.props||(t.props={}),t.props.swiperRef=e,t.props["data-swiper-slide-index"]=o,t));function i(t,o,c){return t.props||(t.props={}),y(t.type,{...t.props,key:`${t.key}-duplicate-${o}-${c}`,class:`${t.props.className||""} ${n.slideDuplicateClass} ${t.props.class||""}`},t.children)}if(n.loopFillGroupWithBlank){const t=n.slidesPerGroup-l.length%n.slidesPerGroup;if(t!==n.slidesPerGroup)for(let o=0;o<t;o+=1){const c=y("div",{class:`${n.slideClass} ${n.slideBlankClass}`});l.push(c)}}n.slidesPerView==="auto"&&!n.loopedSlides&&(n.loopedSlides=l.length);const u=W(l,n),d=[],f=[];for(let t=0;t<u;t+=1){const o=t-Math.floor(t/l.length)*l.length;f.push(i(l[o],t,"append")),d.unshift(i(l[l.length-o-1],t,"prepend"))}return e.value&&(e.value.loopedSlides=u),[...d,...l,...f]}function Y(e,a,n,l,i){const u=[];if(!a)return u;const d=t=>{u.indexOf(t)<0&&u.push(t)};if(n&&l){const t=l.map(i),o=n.map(i);t.join("")!==o.join("")&&d("children"),l.length!==n.length&&d("children")}return V.filter(t=>t[0]==="_").map(t=>t.replace(/_/,"")).forEach(t=>{if(t in e&&t in a)if(O(e[t])&&O(a[t])){const o=Object.keys(e[t]),c=Object.keys(a[t]);o.length!==c.length?d(t):(o.forEach(r=>{e[t][r]!==a[t][r]&&d(t)}),c.forEach(r=>{e[t][r]!==a[t][r]&&d(t)}))}else e[t]!==a[t]&&d(t)}),u}function R(e,a,n){e===void 0&&(e={});const l=[],i={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]},u=(d,f)=>{Array.isArray(d)&&d.forEach(t=>{const o=typeof t.type=="symbol";f==="default"&&(f="container-end"),o&&t.children?u(t.children,"default"):t.type&&(t.type.name==="SwiperSlide"||t.type.name==="AsyncComponentWrapper")?l.push(t):i[f]&&i[f].push(t)})};return Object.keys(e).forEach(d=>{if(typeof e[d]!="function")return;const f=e[d]();u(f,d)}),n.value=a.value,a.value=l,{slides:l,slots:i}}function k({swiper:e,slides:a,passedParams:n,changedParams:l,nextEl:i,prevEl:u,scrollbarEl:d,paginationEl:f}){const t=l.filter(s=>s!=="children"&&s!=="direction"),{params:o,pagination:c,navigation:r,scrollbar:h,virtual:b,thumbs:B}=e;let _,m,x,w,S;l.includes("thumbs")&&n.thumbs&&n.thumbs.swiper&&o.thumbs&&!o.thumbs.swiper&&(_=!0),l.includes("controller")&&n.controller&&n.controller.control&&o.controller&&!o.controller.control&&(m=!0),l.includes("pagination")&&n.pagination&&(n.pagination.el||f)&&(o.pagination||o.pagination===!1)&&c&&!c.el&&(x=!0),l.includes("scrollbar")&&n.scrollbar&&(n.scrollbar.el||d)&&(o.scrollbar||o.scrollbar===!1)&&h&&!h.el&&(w=!0),l.includes("navigation")&&n.navigation&&(n.navigation.prevEl||u)&&(n.navigation.nextEl||i)&&(o.navigation||o.navigation===!1)&&r&&!r.prevEl&&!r.nextEl&&(S=!0);const j=s=>{e[s]&&(e[s].destroy(),s==="navigation"?(o[s].prevEl=void 0,o[s].nextEl=void 0,e[s].prevEl=void 0,e[s].nextEl=void 0):(o[s].el=void 0,e[s].el=void 0))};t.forEach(s=>{if(O(o[s])&&O(n[s]))C(o[s],n[s]);else{const E=n[s];(E===!0||E===!1)&&(s==="navigation"||s==="pagination"||s==="scrollbar")?E===!1&&j(s):o[s]=n[s]}}),t.includes("controller")&&!m&&e.controller&&e.controller.control&&o.controller&&o.controller.control&&(e.controller.control=o.controller.control),l.includes("children")&&a&&b&&o.virtual.enabled?(b.slides=a,b.update(!0)):l.includes("children")&&e.lazy&&e.params.lazy.enabled&&e.lazy.load(),_&&B.init()&&B.update(!0),m&&(e.controller.control=o.controller.control),x&&(f&&(o.pagination.el=f),c.init(),c.render(),c.update()),w&&(d&&(o.scrollbar.el=d),h.init(),h.updateSize(),h.setTranslate()),S&&(i&&(o.navigation.nextEl=i),u&&(o.navigation.prevEl=u),r.init(),r.update()),l.includes("allowSlideNext")&&(e.allowSlideNext=n.allowSlideNext),l.includes("allowSlidePrev")&&(e.allowSlidePrev=n.allowSlidePrev),l.includes("direction")&&e.changeDirection(n.direction,!1),e.update()}function ee(e,a,n){if(!n)return null;const l=e.value.isHorizontal()?{[e.value.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`};return a.filter((i,u)=>u>=n.from&&u<=n.to).map(i=>(i.props||(i.props={}),i.props.style||(i.props.style={}),i.props.swiperRef=e,i.props.style=l,y(i.type,{...i.props},i.children)))}const te=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.lazy&&e.params.lazy.enabled&&e.lazy.load(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())},ie={name:"Swiper",props:{tag:{type:String,default:"div"},wrapperTag:{type:String,default:"div"},modules:{type:Array,default:void 0},init:{type:Boolean,default:void 0},direction:{type:String,default:void 0},touchEventsTarget:{type:String,default:void 0},initialSlide:{type:Number,default:void 0},speed:{type:Number,default:void 0},cssMode:{type:Boolean,default:void 0},updateOnWindowResize:{type:Boolean,default:void 0},resizeObserver:{type:Boolean,default:void 0},nested:{type:Boolean,default:void 0},focusableElements:{type:String,default:void 0},width:{type:Number,default:void 0},height:{type:Number,default:void 0},preventInteractionOnTransition:{type:Boolean,default:void 0},userAgent:{type:String,default:void 0},url:{type:String,default:void 0},edgeSwipeDetection:{type:[Boolean,String],default:void 0},edgeSwipeThreshold:{type:Number,default:void 0},autoHeight:{type:Boolean,default:void 0},setWrapperSize:{type:Boolean,default:void 0},virtualTranslate:{type:Boolean,default:void 0},effect:{type:String,default:void 0},breakpoints:{type:Object,default:void 0},spaceBetween:{type:Number,default:void 0},slidesPerView:{type:[Number,String],default:void 0},maxBackfaceHiddenSlides:{type:Number,default:void 0},slidesPerGroup:{type:Number,default:void 0},slidesPerGroupSkip:{type:Number,default:void 0},slidesPerGroupAuto:{type:Boolean,default:void 0},centeredSlides:{type:Boolean,default:void 0},centeredSlidesBounds:{type:Boolean,default:void 0},slidesOffsetBefore:{type:Number,default:void 0},slidesOffsetAfter:{type:Number,default:void 0},normalizeSlideIndex:{type:Boolean,default:void 0},centerInsufficientSlides:{type:Boolean,default:void 0},watchOverflow:{type:Boolean,default:void 0},roundLengths:{type:Boolean,default:void 0},touchRatio:{type:Number,default:void 0},touchAngle:{type:Number,default:void 0},simulateTouch:{type:Boolean,default:void 0},shortSwipes:{type:Boolean,default:void 0},longSwipes:{type:Boolean,default:void 0},longSwipesRatio:{type:Number,default:void 0},longSwipesMs:{type:Number,default:void 0},followFinger:{type:Boolean,default:void 0},allowTouchMove:{type:Boolean,default:void 0},threshold:{type:Number,default:void 0},touchMoveStopPropagation:{type:Boolean,default:void 0},touchStartPreventDefault:{type:Boolean,default:void 0},touchStartForcePreventDefault:{type:Boolean,default:void 0},touchReleaseOnEdges:{type:Boolean,default:void 0},uniqueNavElements:{type:Boolean,default:void 0},resistance:{type:Boolean,default:void 0},resistanceRatio:{type:Number,default:void 0},watchSlidesProgress:{type:Boolean,default:void 0},grabCursor:{type:Boolean,default:void 0},preventClicks:{type:Boolean,default:void 0},preventClicksPropagation:{type:Boolean,default:void 0},slideToClickedSlide:{type:Boolean,default:void 0},preloadImages:{type:Boolean,default:void 0},updateOnImagesReady:{type:Boolean,default:void 0},loop:{type:Boolean,default:void 0},loopAdditionalSlides:{type:Number,default:void 0},loopedSlides:{type:Number,default:void 0},loopedSlidesLimit:{type:Boolean,default:!0},loopFillGroupWithBlank:{type:Boolean,default:void 0},loopPreventsSlide:{type:Boolean,default:void 0},rewind:{type:Boolean,default:void 0},allowSlidePrev:{type:Boolean,default:void 0},allowSlideNext:{type:Boolean,default:void 0},swipeHandler:{type:Boolean,default:void 0},noSwiping:{type:Boolean,default:void 0},noSwipingClass:{type:String,default:void 0},noSwipingSelector:{type:String,default:void 0},passiveListeners:{type:Boolean,default:void 0},containerModifierClass:{type:String,default:void 0},slideClass:{type:String,default:void 0},slideBlankClass:{type:String,default:void 0},slideActiveClass:{type:String,default:void 0},slideDuplicateActiveClass:{type:String,default:void 0},slideVisibleClass:{type:String,default:void 0},slideDuplicateClass:{type:String,default:void 0},slideNextClass:{type:String,default:void 0},slideDuplicateNextClass:{type:String,default:void 0},slidePrevClass:{type:String,default:void 0},slideDuplicatePrevClass:{type:String,default:void 0},wrapperClass:{type:String,default:void 0},runCallbacksOnInit:{type:Boolean,default:void 0},observer:{type:Boolean,default:void 0},observeParents:{type:Boolean,default:void 0},observeSlideChildren:{type:Boolean,default:void 0},a11y:{type:[Boolean,Object],default:void 0},autoplay:{type:[Boolean,Object],default:void 0},controller:{type:Object,default:void 0},coverflowEffect:{type:Object,default:void 0},cubeEffect:{type:Object,default:void 0},fadeEffect:{type:Object,default:void 0},flipEffect:{type:Object,default:void 0},creativeEffect:{type:Object,default:void 0},cardsEffect:{type:Object,default:void 0},hashNavigation:{type:[Boolean,Object],default:void 0},history:{type:[Boolean,Object],default:void 0},keyboard:{type:[Boolean,Object],default:void 0},lazy:{type:[Boolean,Object],default:void 0},mousewheel:{type:[Boolean,Object],default:void 0},navigation:{type:[Boolean,Object],default:void 0},pagination:{type:[Boolean,Object],default:void 0},parallax:{type:[Boolean,Object],default:void 0},scrollbar:{type:[Boolean,Object],default:void 0},thumbs:{type:Object,default:void 0},virtual:{type:[Boolean,Object],default:void 0},zoom:{type:[Boolean,Object],default:void 0},grid:{type:[Object],default:void 0},freeMode:{type:[Boolean,Object],default:void 0},enabled:{type:Boolean,default:void 0}},emits:["_beforeBreakpoint","_containerClasses","_slideClass","_slideClasses","_swiper","_freeModeNoMomentumRelease","activeIndexChange","afterInit","autoplay","autoplayStart","autoplayStop","autoplayPause","autoplayResume","beforeDestroy","beforeInit","beforeLoopFix","beforeResize","beforeSlideChangeStart","beforeTransitionStart","breakpoint","changeDirection","click","disable","doubleTap","doubleClick","destroy","enable","fromEdge","hashChange","hashSet","imagesReady","init","keyPress","lazyImageLoad","lazyImageReady","lock","loopFix","momentumBounce","navigationHide","navigationShow","navigationPrev","navigationNext","observerUpdate","orientationchange","paginationHide","paginationRender","paginationShow","paginationUpdate","progress","reachBeginning","reachEnd","realIndexChange","resize","scroll","scrollbarDragEnd","scrollbarDragMove","scrollbarDragStart","setTransition","setTranslate","slideChange","slideChangeTransitionEnd","slideChangeTransitionStart","slideNextTransitionEnd","slideNextTransitionStart","slidePrevTransitionEnd","slidePrevTransitionStart","slideResetTransitionStart","slideResetTransitionEnd","sliderMove","sliderFirstMove","slidesLengthChange","slidesGridLengthChange","snapGridLengthChange","snapIndexChange","swiper","tap","toEdge","touchEnd","touchMove","touchMoveOpposite","touchStart","transitionEnd","transitionStart","unlock","update","virtualUpdate","zoomChange"],setup(e,a){let{slots:n,emit:l}=a;const{tag:i,wrapperTag:u}=e,d=g("swiper"),f=g(null),t=g(!1),o=g(!1),c=g(null),r=g(null),h=g(null),b={value:[]},B={value:[]},_=g(null),m=g(null),x=g(null),w=g(null),{params:S,passedParams:j}=A(e,!1);R(n,b,B),h.value=j,B.value=b.value;const s=()=>{R(n,b,B),t.value=!0};if(S.onAny=function(v){for(var p=arguments.length,T=new Array(p>1?p-1:0),N=1;N<p;N++)T[N-1]=arguments[N];l(v,...T)},Object.assign(S.on,{_beforeBreakpoint:s,_containerClasses(v,p){d.value=p}}),r.value=new z(S),r.value.loopCreate=()=>{},r.value.loopDestroy=()=>{},S.loop&&(r.value.loopedSlides=W(b.value,S)),r.value.virtual&&r.value.params.virtual.enabled){r.value.virtual.slides=b.value;const v={cache:!1,slides:b.value,renderExternal:p=>{f.value=p},renderExternalUpdate:!1};C(r.value.params.virtual,v),C(r.value.originalParams.virtual,v)}D(()=>{!o.value&&r.value&&(r.value.emitSlidesClasses(),o.value=!0);const{passedParams:v}=A(e,!1),p=Y(v,h.value,b.value,B.value,T=>T.props&&T.props.key);h.value=v,(p.length||t.value)&&r.value&&!r.value.destroyed&&k({swiper:r.value,slides:b.value,passedParams:v,changedParams:p,nextEl:_.value,prevEl:m.value,scrollbarEl:w.value,paginationEl:x.value}),t.value=!1}),M("swiper",r),H(f,()=>{U(()=>{te(r.value)})}),I(()=>{c.value&&(Q({el:c.value,nextEl:_.value,prevEl:m.value,paginationEl:x.value,scrollbarEl:w.value,swiper:r.value},S),l("swiper",r.value))}),L(()=>{r.value&&!r.value.destroyed&&r.value.destroy(!0,!1)});function E(v){return S.virtual?ee(r,v,f.value):!S.loop||r.value&&r.value.destroyed?(v.forEach(p=>{p.props||(p.props={}),p.props.swiperRef=r}),v):X(r,v,S)}return()=>{const{slides:v,slots:p}=R(n,b,B);return y(i,{ref:c,class:F(d.value)},[p["container-start"],y(u,{class:"swiper-wrapper"},[p["wrapper-start"],E(v),p["wrapper-end"]]),$(e)&&[y("div",{ref:m,class:"swiper-button-prev"}),y("div",{ref:_,class:"swiper-button-next"})],G(e)&&y("div",{ref:w,class:"swiper-scrollbar"}),P(e)&&y("div",{ref:x,class:"swiper-pagination"}),p["container-end"]])}}},ae={name:"SwiperSlide",props:{tag:{type:String,default:"div"},swiperRef:{type:Object,required:!1},zoom:{type:Boolean,default:void 0},virtualIndex:{type:[String,Number],default:void 0}},setup(e,a){let{slots:n}=a,l=!1;const{swiperRef:i}=e,u=g(null),d=g("swiper-slide");function f(o,c,r){c===u.value&&(d.value=r)}I(()=>{!i||!i.value||(i.value.on("_slideClass",f),l=!0)}),q(()=>{l||!i||!i.value||(i.value.on("_slideClass",f),l=!0)}),D(()=>{!u.value||!i||!i.value||i.value.destroyed&&d.value!=="swiper-slide"&&(d.value="swiper-slide")}),L(()=>{!i||!i.value||i.value.off("_slideClass",f)});const t=K(()=>({isActive:d.value.indexOf("swiper-slide-active")>=0||d.value.indexOf("swiper-slide-duplicate-active")>=0,isVisible:d.value.indexOf("swiper-slide-visible")>=0,isDuplicate:d.value.indexOf("swiper-slide-duplicate")>=0,isPrev:d.value.indexOf("swiper-slide-prev")>=0||d.value.indexOf("swiper-slide-duplicate-prev")>=0,isNext:d.value.indexOf("swiper-slide-next")>=0||d.value.indexOf("swiper-slide-duplicate-next")>=0}));return M("swiperSlide",t),()=>y(e.tag,{class:F(`${d.value}`),ref:u,"data-swiper-slide-index":e.virtualIndex},e.zoom?y("div",{class:"swiper-zoom-container","data-swiper-zoom":typeof e.zoom=="number"?e.zoom:void 0},n.default&&n.default(t.value)):n.default&&n.default(t.value))}},oe=Z({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(e,{slots:a,attrs:n}){const l=g(!1);return I(()=>{l.value=!0}),i=>{var t;if(l.value)return(t=a.default)==null?void 0:t.call(a);const u=a.fallback||a.placeholder;if(u)return u();const d=i.fallback||i.placeholder||"",f=i.fallbackTag||i.placeholderTag||"span";return J(f,n,d)}}});export{ie as S,oe as _,ae as a};
