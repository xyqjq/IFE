function single(){
    var my_option = document.getElementById("intrest").value.split(/,/);
    my_option= Array.from(new Set(my_option));
    let my_p = document.getElementById("my_p");
    my_p.innerText ="";
    for(let i = 0;i < my_option.length;i++){
      my_p.innerText = my_p.innerText + " " + my_option[i];
    }
}

function multi(){
    var my_option = document.getElementById("multi").value.split(/,|，|、|;| | |[\r\n]/);
        my_option= Array.from(new Set(my_option));
        let my_p = document.getElementById("my_p");
        my_p.innerText ="";
        $("#chkbox").empty();
        for(let i = 0;i < my_option.length;i++){
            my_p.innerText = my_p.innerText + " " + my_option[i];
            $("#chkbox").append('<div><input type="checkbox">'+my_option[i]+'</div>');

        }

    
}
window.onload =  function(){
    document.getElementById("warning").innerText="";
}; 

$("textarea").change(function(){
    if(document.getElementById("multi").value != "" || document.getElementById("multi").value != null ){
        var my_option = document.getElementById("multi").value.split(/,|，|、|;| | |[\r\n]/);
        my_option= Array.from(new Set(my_option));
        if(my_option.length>10){
            document.getElementById("warning").innerText="请输入爱好，不超过10个";
            document.getElementById("multi_button").setAttribute("disabled",true);
        }else{
            document.getElementById("warning").innerText="";
            document.getElementById("multi_button").disabled=false;
        }
    }else{
        document.getElementById("warning").innerText="请输入爱好，不超过10个";
        document.getElementById("multi_button").setAttribute("disabled",true);
    }
});