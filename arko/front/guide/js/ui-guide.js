
window.addEventListener('DOMContentLoaded', function(){
  //gnbControlGuide(); // gnb
  toggleObj();

});


/* gnb */
function gnbControlGuide() {
  const gnbOpenBtn = document.querySelector(".g-btn-gnb");
  const gnbWrap = document.querySelector(".g-gnb-wrap");
  const gnbCloseBtn = document.querySelector(".gnb-close");
  const gnbContainer = document.querySelector(".gnb-container");
  const gnbBack = document.createElement("div");
  gnbBack.classList.add("g-gnb-back");
  gnbOpenBtn.addEventListener("click", function(){
    gnbWrap.classList.add("open");
    //console.log(-gnbContainer.offsetWidth);
    setTimeout(function(){      
      gnbContainer.animate(
        {left:[-gnbContainer.offsetWidth + "px","0"]}, 
        {duration: 200, fill: "forwards"}
      );
      gnbWrap.insertBefore(gnbBack, gnbContainer);
      document.body.style.overflow = "hidden";
    }, 50);     
  });
  gnbCloseBtn.addEventListener("click", function(){
    gnbContainer.animate(
      {left:-gnbContainer.offsetWidth + "px"}, 
      {duration: 200, fill: "forwards"}
    );
    gnbBack.remove();
    setTimeout(function(){
      gnbWrap.classList.remove("open");
    }, 300);
    document.body.removeAttribute("style"); 
  });
}

function toggleObj() {
  const toggleBtn = document.querySelectorAll("[data-toggle-obj]");
  const toggleTarget = document.querySelectorAll("[data-toggle-target]");
  toggleBtn.forEach(function(obj){
    obj.addEventListener("click", function(){
      console.log(obj);
      const btnNum = obj.getAttribute("data-toggle-obj");
      if(obj.classList.contains("on")){
        toggleTarget.forEach(function(obj){
          const targetNum = obj.getAttribute("data-toggle-target");
          if(targetNum === btnNum){
            obj.classList.remove("on");
          }
        });
        obj.classList.remove("on");
      } else {
        toggleTarget.forEach(function(obj){
          const targetNum = obj.getAttribute("data-toggle-target");
          if(targetNum === btnNum){
            obj.classList.add("on");
          }
        });
        obj.classList.add("on");
      }
      
    });
  });
}
