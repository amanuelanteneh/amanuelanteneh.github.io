//let quote1 = "<h1>Amanuel Anteneh</h1><br>•Research Scientist•<br>•Software Engineer•<br>"
let quote1 = "<img style='border-radius:50%; border:3px solid; top:50%;' src='{{url_for(\"..\", filename=\"img/me.png\")}}' alt='me' width='180' height='180'><br>•Research Scientist•<br>•Software Engineer•<br>"
let quote2 = 'The philosophers have only <u>interpreted</u> the world, in various ways. The point, however, is to change it.<br> - <i>Theses on Feuerbach</i>'
let quote3 = 'We are more free than ever before to look around in all directions; nowhere do we perceive any limits. We have the advantage of feeling an immense space around us- <u>but also an immense void.</u><br> - <i>Introduction to Modernity</i>' 
let quote4 = 'We learn history not in order to know how to behave or how to succeed, <u>but to know who we are.</u><br> - <i>Modernity on Endless Trial</i>'
let quote5 = 'As the archaeology of our thought easily shows, man is an invention of recent date. And one perhaps <u>nearing its end</u>.<br> - <i>The Order of Things</i>'
let quotes = [quote1, quote2, quote3, quote4, quote5];
let index = 1;
/*
$(document).ready(function () {
    $("#floatingQuote").click(function () {
        $("#floatingQuote").fadeOut(function () {
            $("#floatingQuote").html(quotes[index]).fadeIn();             
            if (index == 4) {
             index = 0;
            }
            else {
                index++;
            }
        })
    })
});
*/