import{$ as f}from"./core.05167c01.js";function w({swiper:l,extendParams:y,on:n}){y({parallax:{enabled:!1}});const m=(p,e)=>{const{rtl:i}=l,r=f(p),s=i?-1:1,d=r.attr("data-swiper-parallax")||"0";let a=r.attr("data-swiper-parallax-x"),t=r.attr("data-swiper-parallax-y");const x=r.attr("data-swiper-parallax-scale"),c=r.attr("data-swiper-parallax-opacity");if(a||t?(a=a||"0",t=t||"0"):l.isHorizontal()?(a=d,t="0"):(t=d,a="0"),a.indexOf("%")>=0?a=`${parseInt(a,10)*e*s}%`:a=`${a*e*s}px`,t.indexOf("%")>=0?t=`${parseInt(t,10)*e}%`:t=`${t*e}px`,typeof c<"u"&&c!==null){const o=c-(c-1)*(1-Math.abs(e));r[0].style.opacity=o}if(typeof x>"u"||x===null)r.transform(`translate3d(${a}, ${t}, 0px)`);else{const o=x-(x-1)*(1-Math.abs(e));r.transform(`translate3d(${a}, ${t}, 0px) scale(${o})`)}},u=()=>{const{$el:p,slides:e,progress:i,snapGrid:r}=l;p.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(s=>{m(s,i)}),e.each((s,d)=>{let a=s.progress;l.params.slidesPerGroup>1&&l.params.slidesPerView!=="auto"&&(a+=Math.ceil(d/2)-i*(r.length-1)),a=Math.min(Math.max(a,-1),1),f(s).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(t=>{m(t,a)})})},$=(p=l.params.speed)=>{const{$el:e}=l;e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(i=>{const r=f(i);let s=parseInt(r.attr("data-swiper-parallax-duration"),10)||p;p===0&&(s=0),r.transition(s)})};n("beforeInit",()=>{l.params.parallax.enabled&&(l.params.watchSlidesProgress=!0,l.originalParams.watchSlidesProgress=!0)}),n("init",()=>{l.params.parallax.enabled&&u()}),n("setTranslate",()=>{l.params.parallax.enabled&&u()}),n("setTransition",(p,e)=>{l.params.parallax.enabled&&$(e)})}export{w as P};
