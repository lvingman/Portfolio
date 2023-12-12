/*

//Asynchronisity
function doFirstThing(number, callback) {
    // Asynchronous operation
    setTimeout(function() {
        fadeOut();
        callback(number);
    }, 1000);
}

function doSecondThing(number, callback) {
    // Asynchronous operation
    setTimeout(function() {
        loadPage(number)
        callback();
    }, 1000);
}

function doThirdThing() {
    fadeIn();
}

function pageFade(number){
    doFirstThing(function(number){
        doSecondThing(number, function(){
            doThirdThing();
        });
    });
}



//Fade
var opacity = 0;
var intervalID = 0;

function fadeOut(){
    intervalID = setInterval(hide, 1);
}

function fadeIn(){
    intervalID = setInterval(show, 1);
}

function hide(){
    var target = document.getElementById("target");
    opacity = Number(window.getComputedStyle(target).getPropertyValue("opacity"));
    if(opacity>0){
        opacity = opacity-2;
        target.style.opacity = opacity;
    }
    else{
        clearInterval(intervalID);
    }
}

function show(){
    var target = document.getElementById("target");
    opacity = Number(window.getComputedStyle(target).getPropertyValue("opacity"));
    if(opacity<1){
        opacity = opacity+2;
        target.style.opacity = opacity;
    }
    else{
        clearInterval(intervalID);
    }
}

*/




//Load pages
const targetEl = document.querySelector('.target');

const loadPage = number => {
    var url = "./Views/Home/Index.html"

    switch (number){
        case 1:
            url = "./Views/Home/Index.html"
            break;
        case 2:
            url = "./Views/Home/Proyects.html"
            break;
        case 3:
            url = "./Views/Home/Skillset.html"
            break;
        case 4:
            url = "./Views/Home/Education.html"
            break;    
            
    }
    fetch(url)
        .then(res => {
            if(res.ok){
                return res.text()
            }
        })
        .then(htmlPage => {
            targetEl.innerHTML = htmlPage;

        })
    

}