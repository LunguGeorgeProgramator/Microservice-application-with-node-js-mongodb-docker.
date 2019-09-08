$(function(){
    function center(element) {
        element.css("position","absolute");
        element.css("display","block");
        element.css("z-index","1");
        element.css("top", Math.max(0, (($(window).height() - $(element).outerHeight()) / 6) +  $(window).scrollTop()) + "px");
        element.css("left", Math.max(0, (($(window).width() - $(element).outerWidth()) / 2) +  $(window).scrollLeft()) + "px");
        return element;
    }

    function closePopUp(){
        $("#customForm").css("display","none");
    }

    $('#submit').click(function() {
        center($("#customForm"));
    });

    $('#closeForm').click(function() {
        closePopUp();
    });

    $('#addForm').click(function() {
        var name = $("#quizzName").val();
        var description = $("#quizzDescription").val();        
        if(!$.trim(name).length){
            alert("Quizz name is required!!!");
        }else if(!$.trim(description).length){
            alert("Quizz description is required!!!");
        }else{
            var dataObject = {};
            dataObject.name = name;
            dataObject.description = description;
            $.ajax({
                type: "POST",
                url: "/",
                timeout: 2000,
                data: dataObject,
                success: function(data) {
                    //show content
                    closePopUp();
                    window.location.href = "/";
                    // console.log('Success!')
                },
                error: function(jqXHR, textStatus, err) {
                    //show error message
                    console.log('text status '+textStatus+', err '+err)
                }
            });
        }
    });
});