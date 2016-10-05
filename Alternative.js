var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("#polina button");

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed 
vid.pause();
// to capture IE10
vidFade();
}); 


pauseButton.addEventListener("click", function() {
  vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
    pauseButton.innerHTML = "Pause";
  } else {
    vid.pause();
    pauseButton.innerHTML = "Paused";
  }
})

var marginY = 0;
var destination = 0;
var speed = 6;
var scroller = null;

function initscroll(elementId) {
    destination = document.getElementById(elementId).offsetTop;
	
    scroller = setTimeout(function(){
        initscroll(elementId)
}, 1)
    
    marginY = marginY + speed;
    
    if(marginY >= destination){
        clearTimeout(scroller);
}
    window.scroll(0, marginY);
    
    //console.log(destination);
}

function totop(){
    scroller = setTimeout(function(){
        totop();
    }, 1)
    
    marginY = marginY - speed;
    
    if(marginY <= 0){
        clearTimeout(scroller);
    }
    window.scroll(0, marginY);
}