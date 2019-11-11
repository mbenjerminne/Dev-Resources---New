/*
*Dev Resources | Code Influencer
*Mark Benjamin
*mbenjerminne@gmail.com
*http://codeinfluencer.com
*copyright 2019


*tutorial.js
*This is the backbone of all the data displayed on the phtml page
*Contains all functionalities for the one time quick quide
*/



let un = document.getElementById("un");
let deux = document.getElementById("deux");
let trois = document.getElementById("trois");
let quatre = document.getElementById("quatre");
let btnUn = document.getElementById("btnun");
let btnDeux = document.getElementById("btndeux");
let btnTrois = document.getElementById("btntrois");
let btnQuatre = document.getElementById("btnquatre");

if(localStorage.getItem("influencerVisited") == null){
    localStorage.setItem("influencerVisited","false")
}

if(localStorage.influencerVisited == "false"){
    tutor();   
}

function tutor(){
    un.style.visibility = "visible"; 
    btnUn.addEventListener("click",function(){
        un.style.visibility = "hidden"
        deux.style.visibility = "visible";
    });
    btnDeux.addEventListener("click",function(){        
        deux.style.visibility = "hidden";
        trois.style.visibility = "visible";
    });  
    btnTrois.addEventListener("click",function(){
        trois.style.visibility = "hidden";
        quatre.style.visibility = "visible"; 
    });
    btnQuatre.addEventListener("click",function(){
        quatre.style.visibility = "hidden";
        localStorage.setItem("influencerVisited","true")  
    });
    
}


