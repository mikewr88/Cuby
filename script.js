document.addEventListener("DOMContentLoaded", function(){
    var xRotate = 0;
    var yRotate = 0;
    var cubeStyle = document.querySelector(".cube").style;
    function mousePos(e) {
        var ypos = e.pageY/2;
        var xpos = e.pageX/2;
        cubeStyle.transform = "rotateX(" + ypos + "deg)" + " rotateY(" + xpos + "deg)";

    };

    
    document.addEventListener("mousemove", mousePos);
    
    
    
});

