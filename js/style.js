window.onload = function(){
    document.getElementsByClassName("menu-button")[0].addEventListener("click",function(){
        this.classList.toggle("active");
        document.getElementsByClassName("line-1")[0].classList.toggle("active");
        document.getElementsByClassName("line-2")[0].classList.toggle("active");
        document.getElementsByClassName("line-3")[0].classList.toggle("active");
    })
  }


  // Credit to https://codepen.io/erikterwan/pen/EVzeRP