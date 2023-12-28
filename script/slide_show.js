var counter = 1;

function slide_show(){
    var slideshow = document.getElementById("slide_show");
    if (counter >= 3){
        counter = 1
    }else {
        counter++;
    }
    slideshow.src = "Assets/slide_show"+counter+".jpg"
    
}

setInterval(slide_show,2000);
