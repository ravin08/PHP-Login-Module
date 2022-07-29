$(document).ready(function(){

    $.ajax({
        url:"frm_singup.html",
        type:"POST",
        // data: ,
        success:function(data){
            $("#content").html(data);

        }

    })

    



});