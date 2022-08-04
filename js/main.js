$(document).ready(function(){

    $("#login").click(function(){
        $.ajax({
            url:"frm_login.html",
            type:"POST",
            // data: ,
            success:function(data){
                $("#content").html(data);
            }
        });

    

    });


    $("#sing-up").click(function(){
        $.ajax({
            url:"frm_singup.html",
            type:"POST",
            // data: ,
            success:function(data){
                $("#content").html(data);
            }
        });

            

    });
    
    function lodeForm(){
        $.ajax({
            url:"frm_singup.html",
            type:"POST",
            // data: ,
            success:function(data){
                $("#content").html(data);
    
            }
    
        });

    }
   
    // lodeForm();

    // https://stackoverflow.com/questions/12018245/regular-expression-to-validate-username
   function uname_validation(){

        $(document).on("blur", "#uname", function(){
            let value = $("#uname").val();
                value = value.trim();
                
            let uname_pattern ="^(?=[a-zA-Z0-9._]{6,20}$)(?!.*[_.]{2})[^_.].*[^_.]$ ";
            let result = value.match(/^(?=[a-zA-Z0-9._]{6,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/g);
            $("#uname").val(value);
            if (value=="") {
                // alert("You entered p1!");
                $("#err_uname").css("visibility", "visible");
                $("#uname").css("outline", "0.125rem solid crimson");
                $("#err_uname").text("User name should not be empty.");
                
            }else if (result == null) {
                $("#err_uname").css("visibility", "visible");
                $("#uname").css("outline", "0.125rem solid crimson");
                $("#err_uname").text("User name pattern not match.");
                
            }
            
            else{
                $("#err_uname").css("visibility", "hidden");
                $("#uname").css("outline", "0.125rem solid green");
                $("#err_uname").text("err");
                // $("#email").val(value);
            }
        


        });


   }
    
   uname_validation();  // TODO: work not complited


   function email_validation(){

    $(document).on("blur", "#email", function(){
        let value = $("#email").val();
            value = value.trim();
            
        let email_pattern ="^(?=[a-zA-Z0-9._]{6,20}$)(?!.*[_.]{2})[^_.].*[^_.]$ ";
        let result = value.match(/^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/g);
        $("#email").val(value);
        if (value=="") {
            // alert("You entered p1!");
            $("#err_email").css("visibility", "visible");
            $("#email").css("outline", "0.125rem solid red");
            $("#err_email").text("User name should not be empty.");
            
        }else if (result == null) {
            $("#err_email").css("visibility", "visible");
            $("#email").css("outline", "0.125rem solid red");
            $("#err_email").text("User name pattern not match.");
            
        }
        
        else{
            $("#err_email").css("visibility", "hidden");
            $("#email").css("outline", "0.125rem solid green");
            $("#err_email").text("err");
            // $("#email").val(value);
        }
    


    });


}

email_validation(); // TODO: work not complited

  

function password_validation(){

    $(document).on("blur", "#password", function(){
        let value = $("#password").val();
            value = value.trim();
            
        let password_pattern ="^(?=[a-zA-Z0-9._]{6,20}$)(?!.*[_.]{2})[^_.].*[^_.]$ ";
        let result = value.match(/^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/g);
        $("#password").val(value);
        if (value=="") {
            // alert("You entered p1!");
            $("#err_password").css("visibility", "visible");
            $("#password").css("outline", "2px solid red");
            $("#err_password").text("User name should not be empty.");
            
        }else if (result == null) {
            $("#err_password").css("visibility", "visible");
            $("#password").css("outline", "2px solid red");
            $("#err_password").text("User name pattern not match.");
            
        }
        
        else{
            $("#err_password").css("visibility", "hidden");
            $("#password").css("outline", "2px solid green");
            $("#err_password").text("err");
        }
    


    });



}

password_validation();  // TODO: work not complited

function cpassword_validation(){

    $(document).on("blur", "#cpassword", function(){
        let value = $("#cpassword").val();
            value = value.trim();
            
        let cpassword_pattern ="^(?=[a-zA-Z0-9._]{6,20}$)(?!.*[_.]{2})[^_.].*[^_.]$ ";
        let result = value.match(/^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/g);
        $("#cpassword").val(value);
        if (value=="") {
            // alert("You entered p1!");
            $("#err_cpassword").css("visibility", "visible");
            $("#cpassword").css("outline", "2px solid red");
            $("#err_cpassword").text("User name should not be empty.");
            
        }else if (result == null) {
            $("#err_cpassword").css("visibility", "visible");
            $("#cpassword").css("outline", "2px solid red");
            $("#err_cpassword").text("User name pattern not match.");
            
        }
        
        else{
            $("#err_cpassword").css("visibility", "hidden");
            $("#cpassword").css("outline", "2px solid green");
            $("#err_cpassword").text("err");
        }
    


    });



}

cpassword_validation();     // TODO: work not complited

function submit_form(){

}

submit_form();      // TODO: pending defination


       

});