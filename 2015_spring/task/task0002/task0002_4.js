var suggestData = ['Simon', 'Erik', 'Kener'];
var old_value = "";
var current_value = "";
var list = [];
var highLight = -1;
$(function(){
    old_value = $("#searchText").val();
    $("#searchText").focus(
        function(){
            autoCompelete(suggestData);
        }
    );
    $("#searchText").keyup(
        function(event){
            if(event.keyCode != 38 && event.keyCode != 40 && event.keyCode != 13){
                autoCompelete(suggestData);
            }
        }
    );
    $("#searchText").keydown(
        function(event){
            if(event.keyCode == 38){
                console.log(38);
                if($("#auto").is(":visible")){
                    $("#"+highLight).css("background-color","white");
                    if(highLight > 0){
                        highLight--;
                    }else{
                        highLight = $("#auto").children().length - 1;
                    }
                    $("#"+highLight).css("background-color","aliceblue");
                    console.log(highLight);
                }
            }else if(event.keyCode == 40){
                console.log(40);
                if($("#auto").is(":visible")){
                    $("#"+highLight).css("background-color","white");
                    if(highLight<$("#auto").children().length-1){                       
                        highLight++;
                    }else{
                        highLight = 0;  
                    }
                    $("#"+highLight).css("background-color","aliceblue");
                    console.log(highLight);
                }
            }else if(event.keyCode == 13){
                if($("#auto").is(":visible")){
                    $("#searchText").val($("#"+highLight).text());
                    $("#auto").css("display","none");
                    highLight = -1;
                }
            }
        }
    );
});

//点击页面隐藏自动补全提示框
document.onclick = function (e) {
    var tar = e.target;
    if (tar.id != "searchText") {
        if ($("#auto").is(":visible")) {
            $("#auto").css("display", "none")
        }
    }
}

function autoCompelete(suggestData){
    current_value = $("#searchText").val();
    console.log(old_value +":"+ current_value);
    if(old_value != current_value || current_value == ""){
        list = [];
        for(i in suggestData){
            if(suggestData[i].toLowerCase().indexOf(current_value.toLowerCase())>-1){
                list.push(suggestData[i]);                
            } 
        }
        if(list.length > 0){
            $("#auto").empty();
            $("#auto").css("display","block");
            for(j in list){
                $("#auto").append("<div id="+j+">"+list[j]+"</div>");
                $("#"+j).mouseover(function(){
                    $("#"+highLight).css("background-color","white");
                    $(this).css("background-color","aliceblue");
                    highLight = $(this).attr("id");
                });
                $("#"+j).mouseout(function(){
                    $(this).css("background-color","white");
                });
                $("#"+j).click(function(){
                    $("#searchText").val($("#"+highLight).text());
                    $("#auto").css("display","none");
                    highLight = -1;
                })  
            }
        }
    }else{

    }
    old_value = current_value;    
}