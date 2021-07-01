let inter = null;
let current = 0;
var red = null;
let isloop = true;    
var time = 2000;   
function change(red){
    let list= $("#list").children(); 
    $("img").css("left","-200px");
    list[current].style.left="auto";
    console.log(current);
    if(red == "right"){
        if(current==list.length-1 && !eval(isloop)){
            clearInterval(inter);
        }else if(current==list.length-1){
            current=0;
        }else{
            current++;
        }   
    }else{
        if(current==0  && !eval(isloop)){
            clearInterval(inter);
        }else if(current==0){
            current=list.length-1;
        }else{
            current--;
        }  
    }
}
window.onload=function(){
    let list= $("#list").children();
    red = "right";    
    list[current].style.left="auto";
    for(let i=0;i<list.length;i++){
        $("#title").append("<i>"+i+"</i>");
    }
    inter = setInterval(function(){change(red)},time);
}


$(document).ready(function(){
    $("#list").mouseover(function(){
        clearInterval(inter);
    });
    $("#list").mouseout(function(){
        inter = setInterval(function(){
            change(red);
        },time);
    });
    $("i").click(function(){
        current = $(this).text();
        change(red);
    });
})

function changeType(){
    red = $("#red").val() || red;
    isloop = $("#isloop").val() || isloop;
    time = $("#time").val() || time;
    clearInterval(inter);
    inter = setInterval(function(){change(red)},time);
}