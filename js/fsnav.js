const ham = document.getElementById('menu');
const topDiv = document.getElementById('top');
const middleDiv = document.getElementById('middle');
const bottomDiv = document.getElementById('bottom');
const navbar = document.getElementById('navbar');
let toggle = false;
ham.addEventListener("click", () => {
  if(!toggle){
    topDiv.classList.remove('topPhaseTwo');
    topDiv.classList.add("topPhaseOne");
    middleDiv.classList.remove('middlePhaseTwo');
    middleDiv.classList.add('middlePhaseOne');
    bottomDiv.classList.remove('bottomPhaseTwo');
    bottomDiv.classList.add('bottomPhaseOne');
    navbar.classList.remove('navPhaseTwo');
    navbar.classList.add('navPhaseOne');
    toggle = true;
  } else {
    topDiv.classList.remove('topPhaseOne');
    topDiv.classList.add('topPhaseTwo');
    middleDiv.classList.remove('middlePhaseOne');
    middleDiv.classList.add('middlePhaseTwo');
    bottomDiv.classList.remove('bottomPhaseOne');
    bottomDiv.classList.add('bottomPhaseTwo');
    navbar.classList.remove('navPhaseOne');
    navbar.classList.add('navPhaseTwo');
    toggle = false;
  }
  
})
