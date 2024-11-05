function validate()
{
    let validate = true
   
    if($("#name").val()=="")
    {
        $("#namew").show();
        validate=false;     
    }
    else
    {
        $("#namew").hide();

    }
    if ($("#email").val() === "") {
        $("#emailw").show();
        validate = false;
    } else {
        $("#emailw").hide();
    }

    // Check if the Password field is empty
    if ($("#password").val() === "") {
        $("#passw").show();
        validate = false;
    } else {
        $("#passw").hide();
    }

    // Check if the Address textarea is empty
    if ($("#textarea").val() === "") {
        $("#textareawarning").show();
        validate = false;
    } else {
        $("#textareawarning").hide();
    }
    if ($('input[name="gender"]:checked').length == 0) {
        $("#genderw").show();  // Show warning if no radio button is selected
        validate = false
    } else {
        $("#genderw").hide();  // Hide warning if a radio button is selected
    }
    
    if ($('input[name="hobby"]:checked').length == 0) {
        $("#checkboxwarning").show();  // Show warning if no radio button is selected
        validate = false
    } else {
        $("#checkboxwarning").hide();  // Hide warning if a radio button is selected
    }



    if(validate){
        $("#form")[0].submit($(function(){
            alert("Form is submitted")
        }));
   }
}

