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