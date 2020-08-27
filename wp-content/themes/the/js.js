$(function(){
    $("a").click(function(event){
        alert(event.type);
        alert(event.currentTarget);
        return false;
    });
});

function loadJs(file){
    $("#js").remove();
    var head = $("head").remove("script[role='reload']");
    $("<scri"+"pt>"+"</scr"+"ipt>").attr({ 
    role:'reload',src:file,type:'text/javascript'}).appendTo(head);
    //alert("alert");
}

setInterval("showTime()",1000)

var sal = document.getElementById("d").getElementsByTagName("a").length;
var sabl = sal;
function showTime(){
    //sabl = document.getElementById("d").getElementsByTagName("a").length;
    sabl = $("#id").getElementsByTagName("a").length;
    if(sal == sabl){ 
    }else{
      loadJs("js.js");
      sal = sabl;
      alert("更新");
    }
    //alert(sabl);
}