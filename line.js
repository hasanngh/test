let ll=document.querySelector(".line");
window.addEventListener("scroll",function(){
  let widthjs=(document.documentElement.scrollTop)
  /(document.body.scrollHeight-document.documentElement.clientHeight)
  *100;
  ll.style.width=`${widthjs}%`
})  