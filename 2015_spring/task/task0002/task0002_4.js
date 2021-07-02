var suggestData = ['Simon', 'Erik', 'Kener'];
var old_value = "";
var current_value = "";
var list = [];
$(function(){
    old_value = $("#searchText").val();
    $("#searchText").focus(
        function(){
            autoCompelete(suggestData);
        }
    );
    $("#searchText").keyup(
        function(){
            autoCompelete(suggestData);
        }
    );
});

function autoCompelete(suggestData){
    current_value = $("#searchText").val();
    console.log(old_value +":"+ current_value);
    if(old_value != current_value){
        list = [];
        for(i in suggestData){
            if(suggestData[i].toLowerCase().indexOf(current_value.toLowerCase())>-1){
                list.push(suggestData[i]);                
            } 
        }
        if(list.length > 0){
            $("#auto").empty();
            for(j in list){
                $("#auto").append("<div>"+list[j]+"</div>"); 
            }
            $("#auto").css("display","block")
        }
    }else{

    }
    old_value = current_value;    
}