$(function(){
    $("#first_btn").click(function() {
        if ($("#second").is(':visible')) {
            $("#second").slideUp(500);
            setTimeout(function() {
                $("#first").slideToggle(500);        
            },500);
        } else if ($("#third").is(':visible')) {
            $("#third").slideUp(500);
            setTimeout(function() {
                $("#first").slideToggle(500);        
            },500);
        }else if ($("#fourth").is(':visible')) {
            $("#fourth").slideUp(500);
            setTimeout(function() {
                $("#first").slideToggle(500);        
            },500);
        } else if ($("#extra").is(':visible')) {
            $("#extra").slideUp(500);
            setTimeout(function() {
                $("#first").slideToggle(500);        
            },500);
        } else {
            $("#first").slideToggle(500);
        }
    });
    $("#second_btn").click(function() {
        if ($("#first").is(':visible')) {
            $("#first").slideUp(500);
            setTimeout(function() {
                $("#second").slideToggle(500);        
            },500);
        } else if ($("#third").is(':visible')) {
            $("#third").slideUp(500);
            setTimeout(function() {
                $("#second").slideToggle(500);        
            },500);
        } else if ($("#fourth").is(':visible')) {
            $("#fourth").slideUp(500);
            setTimeout(function() {
                $("#second").slideToggle(500);        
            },500);
        } else if ($("#extra").is(':visible')) {
            $("#extra").slideUp(500);
            setTimeout(function() {
                $("#second").slideToggle(500);        
            },500);
        } else {
            $("#second").slideToggle(500);
        }
    });
    $("#third_btn").click(function() {
        if ($("#first").is(':visible')) {
            $("#first").slideUp(500);
            setTimeout(function() {
                $("#third").slideToggle(500);        
            },500);
        } else if ($("#second").is(':visible')) {
            $("#second").slideUp(500);
            setTimeout(function() {
                $("#third").slideToggle(500);        
            },500);
        } else if ($("#fourth").is(':visible')) {
            $("#fourth").slideUp(500);
            setTimeout(function() {
                $("#third").slideToggle(500);        
            },500);
        } else if ($("#extra").is(':visible')) {
            $("#extra").slideUp(500);
            setTimeout(function() {
                $("#third").slideToggle(500);        
            },500);
        } else {
            $("#third").slideToggle(500);
        }
    });
    $("#fourth_btn").click(function() {
        if ($("#first").is(':visible')) {
            $("#first").slideUp(500);
            setTimeout(function() {
                $("#fourth").slideToggle(500);        
            },500);
        } else if ($("#second").is(':visible')) {
            $("#second").slideUp(500);
            setTimeout(function() {
                $("#fourth").slideToggle(500);        
            },500);
        } else if ($("#third").is(':visible')) {
            $("#third").slideUp(500);
            setTimeout(function() {
                $("#fourth").slideToggle(500);        
            },500);
        } else if ($("#extra").is(':visible')) {
            $("#extra").slideUp(500);
            setTimeout(function() {
                $("#fourth").slideToggle(500);        
            },500);
        } else {
            $("#fourth").slideToggle(500);
        }
    });
    $("#extra_btn").click(function() {
        if ($("#first").is(':visible')) {
            $("#first").slideUp(500);
            setTimeout(function() {
                $("#extra").slideToggle(500);        
            },500);
        } else if ($("#second").is(':visible')) {
            $("#second").slideUp(500);
            setTimeout(function() {
                $("#extra").slideToggle(500);        
            },500);
        } else if ($("#third").is(':visible')) {
            $("#third").slideUp(500);
            setTimeout(function() {
                $("#extra").slideToggle(500);        
            },500);
        } else if ($("#fourth").is(':visible')) {
            $("#fourth").slideUp(500);
            setTimeout(function() {
                $("#extra").slideToggle(500);        
            },500);
        } else {
            $("#extra").slideToggle(500);
        }
    });
});