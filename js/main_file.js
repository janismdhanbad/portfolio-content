
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
    

// function getReadme() {
//     fetch(`https://raw.githubusercontent.com/janismdhanbad/portfolio-content/master/README.md`) // Fetch the file from GitHub's api
//         .then(response => response.json())
//         .then(data => {
//             const content = atob(data.content); // Convert from base64 to readable text
//                   document.getElementById("readme-text").textContent = content; // Apply content to the document
//             console.log(content); // Log the content to the console
//         })
//         .catch(error => console.log(error)); // Catch any errors
// }

// getReadme();

(function () {
    var file = "../blogs_md/Hello-world.md";
    var reader = new stmd.DocParser();
    var writer = new stmd.HtmlRenderer();
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if(xhr.readyState === 4 && xhr.status === 200) {
        display(xhr);
      }
    };
  
    function display(xhr) {
      var parsed = reader.parse(xhr.responseText);
      var content = writer.renderBlock(parsed);
      document.getElementsByTagName('body')[0].innerHTML = content;
      
      /* try to extract h1 title and use as title for page
         if no h1, use name of file 
      */
      try {
        document.title = document.querySelector('h1').textContent
      } catch (e) {
        document.title = file;
      }
    }
  
    xhr.open('GET', file);
    xhr.send();
  })();