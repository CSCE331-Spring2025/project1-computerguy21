var num = 0; // global variable

function button1() {
    num++;
    document.getElementById("output").innerHTML = "Press x " + num;
}

function toggleStyleSheet(){
    // Task 1
    // Steps
    // 1 (a) Get style element by ID (hint: getElementById)
    var element = document.getElementById("mainStyleSheet");
    
    // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
    var styleAttribute = element.getAttribute("href");
   
    // 1 (c) Determine new stylesheet file name
    var newss
    if(styleAttribute == "light.css"){
        newss = "dark.css";
    }
    else{
        newss = "light.css";
    }

    // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)
    element.setAttribute("href", newss);


    // TASK 2
    // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
    // specify what you're changing -maybe paul
    // hint: localStorage.setItem(name, value)
    localStorage.setItem("stylesheet",newss)
}


window.onload = function(){
    // TASK 2
    // TODO: Make the last div color persist even when someone refreshes the page.

    // Steps
    // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)
    var styleStorage = localStorage.getItem("stylesheet");
    
    // 2 (b) get html style element by ID
    var styleElement = document.getElementById("mainStyleSheet");

    // 2 (c) replace href attribute of html element.
    if(styleStorage){
        styleElement.setAttribute("href", styleStorage);
    }    
}


