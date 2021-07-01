function cucl(){
    var int = null;
    if(((new Date($("#setTime").val()+" 00:00:00"))-  (new Date()))>0){
        int = self.setInterval(function cucla(){
            let current_date =  new Date();
            let total_second = (new Date($("#setTime").val()+" 00:00:00"))-  (current_date);
            if(total_second > 0){
                let day = parseInt(total_second/86400000);
                let hour = parseInt((total_second - day*86400000)/3600000);
                let mimut = parseInt((total_second - day*86400000 - hour*3600000)/60000);
                let sec = parseInt((total_second - day*86400000 - hour*3600000 -mimut*60000)/1000);
                console.log(day+"天"+hour+"小时"+mimut+"分"+sec+"秒");
                $("#my_p").text("距离"+$("#setTime").val().substring(0,4)+"年"+$("#setTime").val().substring(5,7)+"月"+$("#setTime").val().substring(8,)+"日还有"+day+"天"+hour+"小时"+mimut+"分"+sec+"秒");
            }else{
                clearInterval(int);
            }
        },1000);
    }else{
        alert("请输入大于今天的日期");
    }
}

