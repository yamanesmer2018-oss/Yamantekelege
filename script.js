/* Loading */

window.onload=function(){

setTimeout(()=>{

document.getElementById("loader").style.opacity="0";

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},700);

},1200);

}

/* Resimler görünürken animasyon */

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{opacity:0,transform:"translateY(80px)"},

{opacity:1,transform:"translateY(0px)"}

],{

duration:900,

fill:"forwards"

});

}

});

});

document.querySelectorAll("section").forEach(sec=>{

observer.observe(sec);

});
