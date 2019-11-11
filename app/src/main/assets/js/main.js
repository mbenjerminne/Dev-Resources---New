/*
*Dev Resources | Code Influencer
*Mark Benjamin
*mbenjerminne@gmail.com
*http://codeinfluencer.com
*copyright 2019


*main.js
*This is the main javascript file
*/

//https://developers.google.com/machine-learning/crash-course/



/**
 * Declaring global variables that will be used below
 */
let current = "web";
let idUpper = document.getElementById("upper");
let idLower = document.getElementById("lower");
let idBack = document.getElementById("back");
let idCategory = document.getElementById("category");
idCategory.style.display = "none";
idCategory.style.width = screen.width + "px";
idLower.style.width = screen.width + "px";



/**
 * Line that sets the category container to null
 * It reneders the idBack button below invisible
 * read the comments below
 */
idCategory.style.display = "none";


/**
 * This is to style the back button in case it was a one page
 * Its no longer useful but can be reused in case we move to the one page site
 * Display has been set to none by the above line and in style.css
 */

idBack.addEventListener("click",function(){
    idCategory.style.display = "none";
    this.style.display = "none";
    idLower.style.display = "block";
});




/**
 * Function to add the right items
 * Also it adds the event listeners and take us to the next page containing the tutorials
 */

function add(){

    for(var i=0;i<indexItems.length;i++){
        let parent = document.getElementById("right");
        let href = document.createElement("a");
        let item = document.createElement("div");
        let heading = document.createElement("h1");

        item.classList.add("right-item");
        item.style.backgroundColor = indexItems[i].blend;
        //href.href = "pages/"+indexItems[i].link;
        href.addEventListener("click",function(){
            
            let currentObj = this.getElementsByTagName("h1")[0].innerHTML.toLowerCase();
            let container = null;

            if(currentObj == "html"){
                container = html;
            }
            else if(currentObj == "css") {
                container = css;
            }
            else if(currentObj == "javascript") {
                container = js;
            }
            else if(currentObj == "angular") {
                container = angular;
            }
            else if(currentObj == "bootstrap") {
                container = bootstrap;
            }
            else if(currentObj == "react") {
                container = react;
            }
            else if(currentObj == "ionic") {
                container = ionic;
            }
            else if(currentObj == "cordova") {
                container = cordova;
            }
            else if(currentObj == "python") {
                container = python;
            }
            else if(currentObj == "sql") {
                container = sql;
            }
            else if(currentObj == "arduino") {
                container = arduino;
            }
            else if(currentObj == "jquery") {
                container = jquery;
            }
            else if(currentObj == "c++") {
                container = cpp;
            }
            else if(currentObj == "java") {
                container = java;
            }
            else if(currentObj == "c#") {
                container = csharp;
            }
            else if(currentObj == "c") {
                container = c;
            }
            else if(currentObj == "php") {
                container = php;
            }
            else if(currentObj == "ruby") {
                container = ruby;
            }
            else if(currentObj == "swift") {
                container = swift;
            }
            else if(currentObj == "kotlin") {
                container = kotlin;
            }
            else if(currentObj == "flutter") {
                container = flutter;
            }
            else if(currentObj == "xamarin forms") {
                container = xamarin;
            }
            else if(currentObj == "firebase") {
                container = firebase;
            }
            else if(currentObj == "material design") {
                container = material;
            }
            else if(currentObj == "pwas") {
                    container = pwa;
            }else{
                console.log("else executed")
            }

            idUpper.style.display = "none";
            idLower.style.display = "none";
            idBack.style.display = "flex";
            idCategory.style.display = "block";



            let lower2 = document.getElementById("lower2");
            lower2.innerHTML = "";

            for(var j=0;j<container.length;j++){
                let card = document.createElement("div");
                let imgDiv = document.createElement("div");
                let cardTitle = document.createElement("h1");
                let ref = document.createElement("a");

                card.classList.add("card");
                imgDiv.classList.add("img");

                
                imgDiv.style.backgroundImage = "url('img/"+container[j].imageUrl+"')";

                cardTitle.append(document.createTextNode(container[j].name));
                ref.append(document.createTextNode("Visit"));
                ref.href = container[j].url;
                card.append(imgDiv);
                card.append(cardTitle);
                card.append(ref);
                lower2.append(card);
                console.log(container[j]);
            }
            
            console.log(this.getElementsByTagName("h1")[0].innerHTML.toLowerCase());
            localStorage.setItem("carry",lower2.innerHTML.toString());
            //this.href = "category.html";
            window.location = "./category.html";
            href.href = "category.html"
        });

        href.classList.add(indexItems[i].category);

        parent.append(href);
        href.append(item);
        item.append(heading);
        heading.append(document.createTextNode(indexItems[i].name));
        
        
        
    }

}



/*
*Function to navigate the left Floating Action Bars (FABs)
*/

function clicked(display){
    let web = document.getElementsByClassName("web");
    let data = document.getElementsByClassName("data");
    let ml = document.getElementsByClassName("ml");
    let pl = document.getElementsByClassName("pl");
    let android = document.getElementsByClassName("android");
    let bonus = document.getElementsByClassName("bonus");
    let webLeft = document.getElementById("web-left");
    let dataLeft = document.getElementById("data-left");
    let mlLeft = document.getElementById("ml-left");
    let plLeft = document.getElementById("pl-left");
    let androidLeft = document.getElementById("android-left");
    let bonusLeft = document.getElementById("bonus-left");
    let label = document.getElementById("label").getElementsByTagName("h1");
    console.log(label)

    
    if(display == "web"){  
        for(i=0;i<web.length;i++){
            web[i].style.display = "block";
        }
        for(i=0;i<data.length;i++){
            data[i].style.display = "none";
        }
        for(i=0;i<ml.length;i++){
            ml[i].style.display = "none";
        }
        for(i=0;i<pl.length;i++){
            pl[i].style.display = "none";
        }
        for(i=0;i<android.length;i++){
            android[i].style.display = "none";
        }
        for(i=0;i<bonus.length;i++){
            bonus[i].style.display = "none";
        }
        label[0].innerHTML = "Web Development"
        webLeft.style.backgroundColor = "#073042";
        dataLeft.style.backgroundColor = "#05FA87";
        mlLeft.style.backgroundColor = "#05FA87";
        plLeft.style.backgroundColor = "#05FA87";
        androidLeft.style.backgroundColor = "#05FA87";
        bonusLeft.style.backgroundColor = "#05FA87";
        localStorage.setItem("devcurrent","web");
    }else if(display == "data"){
        for(i=0;i<web.length;i++){
            web[i].style.display = "none";
        }
        for(i=0;i<data.length;i++){
            data[i].style.display = "block";
        }
        for(i=0;i<ml.length;i++){
            ml[i].style.display = "none";
        }
        for(i=0;i<pl.length;i++){
            pl[i].style.display = "none";
        }
        for(i=0;i<android.length;i++){
            android[i].style.display = "none";
        }
        for(i=0;i<bonus.length;i++){
            bonus[i].style.display = "none";
        }
        label[0].innerHTML = "Data Science"
        webLeft.style.backgroundColor = "#05FA87";
        dataLeft.style.backgroundColor = "#073042";
        mlLeft.style.backgroundColor = "#05FA87";
        plLeft.style.backgroundColor = "#05FA87";
        androidLeft.style.backgroundColor = "#05FA87";
        bonusLeft.style.backgroundColor = "#05FA87";
        localStorage.setItem("devcurrent","data");
    }else if(display == "ml"){
        for(i=0;i<web.length;i++){
            web[i].style.display = "none";
        }
        for(i=0;i<data.length;i++){
            data[i].style.display = "none";
        }
        for(i=0;i<ml.length;i++){
            ml[i].style.display = "block";
        }
        for(i=0;i<pl.length;i++){
            pl[i].style.display = "none";
        }
        for(i=0;i<android.length;i++){
            android[i].style.display = "none";
        }
        for(i=0;i<bonus.length;i++){
            bonus[i].style.display = "none";
        }
        label[0].innerHTML = "Machine Learning"
        webLeft.style.backgroundColor = "#05FA87";
        dataLeft.style.backgroundColor = "#05FA87";
        mlLeft.style.backgroundColor = "#073042";
        plLeft.style.backgroundColor = "#05FA87";
        androidLeft.style.backgroundColor = "#05FA87";
        bonusLeft.style.backgroundColor = "#05FA87";
        localStorage.setItem("devcurrent","ml");
    }else if(display == "pl"){
        for(i=0;i<web.length;i++){
            web[i].style.display = "none";
        }
        for(i=0;i<data.length;i++){
            data[i].style.display = "none";
        }
        for(i=0;i<ml.length;i++){
            ml[i].style.display = "none";
        }
        for(i=0;i<pl.length;i++){
            pl[i].style.display = "block";
        }
        for(i=0;i<android.length;i++){
            android[i].style.display = "none";
        }
        for(i=0;i<bonus.length;i++){
            bonus[i].style.display = "none";
        }
        label[0].innerHTML = "Programming Languages"
        webLeft.style.backgroundColor = "#05FA87";
        dataLeft.style.backgroundColor = "#05FA87";
        mlLeft.style.backgroundColor = "#05FA87";
        plLeft.style.backgroundColor = "#073042";
        androidLeft.style.backgroundColor = "#05FA87";
        bonusLeft.style.backgroundColor = "#05FA87";
        localStorage.setItem("devcurrent","pl");
    }else if(display == "android"){
        for(i=0;i<web.length;i++){
            web[i].style.display = "none";
        }
        for(i=0;i<data.length;i++){
            data[i].style.display = "none";
        }
        for(i=0;i<ml.length;i++){
            ml[i].style.display = "none";
        }
        for(i=0;i<pl.length;i++){
            pl[i].style.display = "none";
        }
        for(i=0;i<android.length;i++){
            android[i].style.display = "block";
        }
        for(i=0;i<bonus.length;i++){
            bonus[i].style.display = "none";
        }
        label[0].innerHTML = "Android Development"
        webLeft.style.backgroundColor = "#05FA87";
        dataLeft.style.backgroundColor = "#05FA87";
        mlLeft.style.backgroundColor = "#05FA87";
        plLeft.style.backgroundColor = "#05FA87";
        androidLeft.style.backgroundColor = "#073042";
        bonusLeft.style.backgroundColor = "#05FA87";
        localStorage.setItem("devcurrent","android");
    }else if(display == "bonus"){
        for(i=0;i<web.length;i++){
            web[i].style.display = "none";
        }
        for(i=0;i<data.length;i++){
            data[i].style.display = "none";
        }
        for(i=0;i<ml.length;i++){
            ml[i].style.display = "none";
        }
        for(i=0;i<pl.length;i++){
            pl[i].style.display = "none";
        }
        for(i=0;i<android.length;i++){
            android[i].style.display = "none";
        }
        for(i=0;i<bonus.length;i++){
            bonus[i].style.display = "block";
        }
        label[0].innerHTML = "Bonus"
        webLeft.style.backgroundColor = "#05FA87";
        dataLeft.style.backgroundColor = "#05FA87";
        mlLeft.style.backgroundColor = "#05FA87";
        plLeft.style.backgroundColor = "#05FA87";
        androidLeft.style.backgroundColor = "#05FA87";
        bonusLeft.style.backgroundColor = "#073042";
        localStorage.setItem("devcurrent","bonus");
    }else{
        console.log("else executed")
    }

}



/**
 * Function to navigate to settings.html
 */

function settings(){
    window.location = "./settings.html";
}







/*
* body.onload from this point downwards <what happens immediately the body loads>
*/

add();
var items = document.getElementsByClassName("right-item");
for(var j=0;j<items.length;j++){
    items[j].style.backgroundImage = "url('img/"+indexItems[j].imgUrl+"')";
}

if(localStorage.devcurrent == null){
    localStorage.setItem("devcurrent","web");
}
if(localStorage.devtheme == null){
    localStorage.setItem("devtheme","#ffffff");
}
document.body.style.background = localStorage.devtheme;
clicked(localStorage.devcurrent);   



