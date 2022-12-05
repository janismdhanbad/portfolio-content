
document.getElementById("more1").addEventListener("click", showProj1);

var el1 = document.getElementById("more1")
function showProj1() {
    if (el1.innerText == "Read More.."){
        document.getElementById("more1").innerText = "Read Less..";
        document.getElementById("proj1").style.display = "inline";
    }
    else{
        document.getElementById("more1").innerText = "Read More..";
        document.getElementById("proj1").style.display = "none";
    }
    
  }


document.getElementById("more2").addEventListener("click", showProj2);

var el2 = document.getElementById("more2")
function showProj2() {
    if (el2.innerText == "Read More.."){
        document.getElementById("more2").innerText = "Read Less..";
        document.getElementById("proj2").style.display = "inline";
    }
    else{
        document.getElementById("more2").innerText = "Read More..";
        document.getElementById("proj2").style.display = "none";
    }
    
}

    

document.getElementById("more3").addEventListener("click", showProj3);

var el3 = document.getElementById("more3")
function showProj3() {
    if (el3.innerText == "Read More.."){
        document.getElementById("more3").innerText = "Read Less..";
        document.getElementById("proj3").style.display = "inline";
    }
    else{
        document.getElementById("more3").innerText = "Read More..";
        document.getElementById("proj3").style.display = "none";
    }
    
    }

      
document.getElementById("more4").addEventListener("click", showProj4);

var el4 = document.getElementById("more4")
function showProj4() {
    if (el4.innerText == "Read More.."){
        document.getElementById("more4").innerText = "Read Less..";
        document.getElementById("proj4").style.display = "inline";
    }
    else{
        document.getElementById("more4").innerText = "Read More..";
        document.getElementById("proj4").style.display = "none";
    }
    
}
    
// document.getElementById("things_miss").addEventListener("click", DisplayBlog1);
// function ChangeSRC(pg_to_dipl){
//     let change = document.getElementById("displ_blog");
//     change.innerHTML= pg_to_dipl ;
//     console.log(pg_to_dipl)
// }

// function DisplayBlog1(){
//     // displ_blog.src="../blogs_md/things_miss.md"
//     // 
//     // displ_blog.innerHTML = "It is here";
//     // console.log("its here!!")
//     window.location = "../pages/blogs_display.html";
//     window.onload = ChangeSRC( "things_miss");
//     console.log("its here!!")

   
// }