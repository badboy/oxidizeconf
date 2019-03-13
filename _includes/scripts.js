function elem(selector, parent = document){
    let elem = document.querySelector(selector);
    return elem != false ? elem : false;
  }
  
  function elems(selector) {
    let elems = document.querySelectorAll(selector);
    return elems.length ? elems : false; 
  }
  
  function pushClass(el, targetClass) {
    // equivalent to addClass
    if (el && typeof el == 'object' && targetClass) {
      elClass = el.classList;
      elClass.contains(targetClass) ? false : elClass.add(targetClass);
    }
  }
  
  function deleteClass(el, targetClass) {
    // equivalent to removeClass
    if (el && typeof el == 'object' && targetClass) {
      elClass = el.classList;
      elClass.contains(targetClass) ? elClass.remove(targetClass) : false;
    }
  }
  
  function modifyClass(el, targetClass) {
    // equivalent to toggleClass
    if (el && typeof el == 'object' && targetClass) {
      elClass = el.classList;
      elClass.contains(targetClass) ? elClass.remove(targetClass) : elClass.add(targetClass);
    }
  }
  
  function containsClass(el, targetClass) {
    if (el && typeof el == 'object' && targetClass) {
      return el.classList.contains(targetClass) ? true : false;
    }
  }

(function() {
  let times = elems('.session_start');
  if(times) {
      times.forEach(function(time){
        let t = time.innerHTML.trim();
        let hours = t.substr(0, 2);
        let minutes = t.substr(2, 4)
        let hoursEl = document.createElement('span');
        hoursEl.classList.add('session_hour');
        hoursEl.innerHTML = hours;
        let minutesEl = document.createElement('span');
        minutesEl.classList.add('session_minutes');
        minutesEl.innerHTML = minutes;
        time.innerHTML = '';
        time.appendChild(hoursEl);
        time.appendChild(minutesEl);
      });
  }
})();

var navLinksDiv = document.getElementById("nav-links-div");
var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

document.getElementById("svg-peanut2").style.left = width - 650 + "px";
document.getElementById("svg-peanut3").style.left = width - 200 + "px";
document.getElementById("svg-snake-peanut1").style.left = width - 155 + "px";
document.getElementById("svg-snake-circle1").style.left = width - 330 + "px";
document.getElementById("svg-snake-peanut2").style.left = width - 640 + "px";
document.getElementById("svg-snake-circle2").style.left = width - 760 + "px";
document.getElementById("svg-snake-peanut3").style.left = width - 1115 + "px";
window.addEventListener("resize", svg);
if(navigator.userAgent.indexOf("Firefox") != -1 && width < 546) {
    var mozilaBr = document.getElementsByClassName("mozila-br");
    for (i = 0; i < mozilaBr.length; i++) {
        mozilaBr[i].style.display = "block";
    }
    var mozilaResBr = document.getElementsByClassName("mozila-res-br");
    for (i = 0; i < mozilaResBr.length; i++) {
        mozilaResBr[i].style.display = "block";
    }
}
function svg() {
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    document.getElementById("svg-peanut2").style.left = width - 650 + "px";
    document.getElementById("svg-peanut3").style.left = width - 200 + "px";
    document.getElementById("svg-snake-peanut1").style.left = width - 155 + "px";
    document.getElementById("svg-snake-circle1").style.left = width - 330 + "px";
    document.getElementById("svg-snake-peanut2").style.left = width - 640 + "px";
    document.getElementById("svg-snake-circle2").style.left = width - 760 + "px";
    document.getElementById("svg-snake-peanut3").style.left = width - 1115 + "px";
}
var gearIcon = document.getElementById("i");
gearIcon.style.left = width - 100 + "px";
gearIcon.style.top = "60px";
gearIcon.addEventListener("click", gearClickOpen);
window.addEventListener("resize", gearChange);
function gearChange() {
    width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    gearIcon.style.left = width - 100 + "px";
}
function gearClickOpen() {
    navLinksDiv.style.display = "block";
    navLinksDiv.style.width = "100%";
    navLinksDiv.style.position = "relative";
    navLinksDiv.style.margin = "100px 0";
    navLinksDiv.style.lineHeight = "2.2";
    document.getElementById('ticket').className = "nav-links";
    for (i = 0; i < 5; i++) {
        document.getElementsByClassName("nav-links")[i].style.marginLeft = "10px";
    }
    document.getElementsByClassName("bar1")[0].classList.toggle("bar1-change");
    document.getElementsByClassName("bar2")[0].classList.toggle("bar2-change");
    document.getElementsByClassName("bar3")[0].classList.toggle("bar3-change");
    gearIcon.removeEventListener("click", gearClickOpen);
    gearIcon.addEventListener("click", gearClickClose);
}
function gearClickClose() {
    gearIcon.removeEventListener("click", gearClickClose);
    navLinksDiv.style.display = "none";
    document.getElementsByClassName("bar1")[0].classList.toggle("bar1-change");
    document.getElementsByClassName("bar2")[0].classList.toggle("bar2-change");
    document.getElementsByClassName("bar3")[0].classList.toggle("bar3-change");
    gearIcon.addEventListener("click", gearClickOpen);
}