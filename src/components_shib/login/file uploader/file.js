$("#selectfile").bind('change',function(){
    var filename = $("#selectfile").val();

    if(/^s*$/.test(filename)){
        $("#blankFile").text("No File Chosen Yet...");
        $(".success").hide();
        
    }else{
        $("#blankFile").text(filename.replace("C:\\fakepath\\",""));
        $(".success").show();
    }
}) 
