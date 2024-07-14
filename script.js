document.getElementById("root").onmouseover= function() {
  document.getElementById("root").style.color = "red";
}

document.getElementsByClassName("blue-white")[0].onmouseover= function(){
  document.getElementsByClassName("blue-white")[0].style.background = "blue"

  document.getElementsByClassName("blue-white")[0].style.color = "white"

}

document.getElementsByTagName("p")[0].onmouseover = function(){
  document.getElementsByTagName("p")[0].style.fontSize="50px"
}

