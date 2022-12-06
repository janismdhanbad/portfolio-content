


document.getElementById("mode_changer").addEventListener("click", ChangeColor);

function ChangeColor(el){

    
    let lis = document.querySelectorAll("nav li");
    let lis_a = document.querySelectorAll("nav li a");
    let active = document.querySelectorAll(".active");
    let active_a = document.querySelectorAll(".active a");

    if (document.getElementById("mode_changer_text").innerText =="Dark Mode"){
        
        document.querySelector("body").style.backgroundImage = "url(images/dark_bg.jpeg)";
        document.querySelector("body").style.color = "rgb(240, 248, 255)"
        document.getElementById("mode_changer_text").innerText = "Light Mode"

        for (var i = 0, len = lis.length; i < len; i++){
            lis[i].style.backgroundColor = "rgb(238, 143, 143)";
            console.log(lis[i].style.color)
        }

        for (var i = 0, len = lis_a.length; i < len; i++){
            
            
            lis_a[i].style.color = "black";
        }
        for (var i = 0, len = active.length; i < len; i++){

            active[i].style.backgroundColor =  "rgb(200, 50, 50)";
            
        }
        for (var i = 0, len = active_a.length; i < len; i++){

        
            active_a[i].style.color = "white";
        }
    }
    else{
        document.querySelector("body").style.backgroundImage = "url(images/bg_blogs.webp)";
        document.querySelector("body").style.color = "black"
        document.getElementById("mode_changer_text").innerText = "Dark Mode";

        for (var i = 0, len = lis.length; i < len; i++){
            lis[i].style.backgroundColor = "#8c3434";
            
        }

        for (var i = 0, len = lis_a.length; i < len; i++){
            
            lis_a[i].style.color = "black";
        }
        for (var i = 0, len = active.length; i < len; i++){

            active[i].style.backgroundColor =  "rgb(238, 143, 143)";
            
        }
        for (var i = 0, len = active_a.length; i < len; i++){

        
            active_a[i].style.color = "black";
        }


    }
    


}
    
