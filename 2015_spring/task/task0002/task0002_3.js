let inter = null;
let current = 1;
var red = null;
let isloop = true;    
var time = 5000;
var preview = 0;   
function change(red){
    let list= $("#list").children();
    // list[current].style.left="200px";
    console.log(current);
    if(red == "right"){
        list[current].style.left="125px";
        $("#"+list[preview].id).animate({left:"-200px"},"slow","linear");
        $("#"+list[current].id).animate({left:""},"slow","linear");
        if(current==list.length-1 && !eval(isloop)){
            clearInterval(inter);
        }else if(current==list.length-1){
            preview = current;
            current=0;
        }else{
            preview = current;
            current++;
        }   
    }else{
        list[current].style.left="-125px";
        $("#"+list[preview].id).animate({left:"200px"},"slow","linear");
        $("#"+list[current].id).animate({left:""},"slow","linear");
        if(current==0  && !eval(isloop)){
            clearInterval(inter);
        }else if(current==0){
            preview = current;
            current=list.length-1;
        }else{
            preview = current;
            current--;
        }  
    }
}
window.onload=function(){
    let list= $("#list").children();
    red = "right";    
    for(let i=0;i<list.length;i++){
        $("#title").append("<i>"+i+"</i>");
    }
    list[preview].style.left="0px"; 
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