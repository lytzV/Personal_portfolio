var time_in = 90
var time_out = 0
var time_hover = 100
$(window).on("load",function() {
    //$(".load-wrapper").slideUp(2000);
    $(".load-wrapper").fadeOut(1200);
    $(".load-wrapper2").fadeOut(1500);
});
$(document).ready(function () {
    var obj = $('.infos .index-link img');
    var old_src = obj.attr('src');
    var tOut;
    obj.hover(
        function () {
            tOut = setTimeout(function(){
                obj.fadeOut(time_in, function(){obj.attr("src", "assets/home-text.ico");}); //must use obj instead of $(this) because caller of setTimeOut is Window
                obj.fadeIn(time_in);
                console.log("called");
            },time_hover);
        },
        function () {
            clearTimeout(tOut);
            obj.fadeOut(time_out, function(){obj.attr("src", old_src);});
            obj.fadeIn(time_out);
        }
    );
});
$(document).ready(function () {
    var obj = $('.infos .about-link img')
    var old_src = obj.attr('src')
    
    obj.hover(
        function () {
            tOut = setTimeout(function(){
                obj.fadeOut(time_in, function(){obj.attr("src", "assets/me-text.ico");}); //must use obj instead of $(this) because caller of setTimeOut is Window
                obj.fadeIn(time_in);
                console.log("called");
            },time_hover);
        },
        function () {
            clearTimeout(tOut);
            obj.fadeOut(time_out, function(){obj.attr("src", old_src);});
            obj.fadeIn(time_out);
        }
    );
});
$(document).ready(function () {
    var obj = $('.infos .achievements-link img')
    var old_src = obj.attr('src')
    
    obj.hover(
        function () {
            tOut = setTimeout(function(){
                obj.fadeOut(time_in, function(){obj.attr("src", "assets/skill-text.ico");}); //must use obj instead of $(this) because caller of setTimeOut is Window
                obj.fadeIn(time_in);
                console.log("called");
            },time_hover);
        },
        function () {
            clearTimeout(tOut);
            obj.fadeOut(time_out, function(){obj.attr("src", old_src);});
            obj.fadeIn(time_out);
        }
    );
});
$(document).ready(function () {
    var obj = $('.infos .skills-link img')
    var old_src = obj.attr('src')

    obj.hover(
        function () {
            tOut = setTimeout(function(){
                obj.fadeOut(time_in, function(){obj.attr("src", "assets/proj-text.ico");}); //must use obj instead of $(this) because caller of setTimeOut is Window
                obj.fadeIn(time_in);
                console.log("called");
            },time_hover);
        },
        function () {
            clearTimeout(tOut);
            obj.fadeOut(time_out, function(){obj.attr("src", old_src);});
            obj.fadeIn(time_out);
        }
    );
});
$(document).ready(function () {
    var obj = $('.infos .contact-link img')
    var old_src = obj.attr('src')

    obj.hover(
        function () {
            tOut = setTimeout(function(){
                obj.fadeOut(time_in, function(){obj.attr("src", "assets/contact-text.ico");}); //must use obj instead of $(this) because caller of setTimeOut is Window
                obj.fadeIn(time_in);
                console.log("called");
            },time_hover);
        },
        function () {
            clearTimeout(tOut);
            obj.fadeOut(time_out, function(){obj.attr("src", old_src);});
            obj.fadeIn(time_out);
        }
    );
});


