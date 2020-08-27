$(function(){
    $("a").click(function(event){
        //alert(event.type);
        //alert(event.currentTarget);
        window.open("zyxz://"+event.currentTarget);
        return false;
    });
});