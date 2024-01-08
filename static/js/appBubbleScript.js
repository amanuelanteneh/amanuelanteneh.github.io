function appBubbleFunction() {
    var clickCount = 0;

    $('#appBubble').click(function () { //fix because someone can span this and break it
        if (clickCount == 1) {
           $('#appBubble').animate({ height: '5vh' }) //revert height to normal when clickcount == 1
           clickCount = 0;
        }
        
        else if (clickCount == 0) { 
           $('#appBubble').animate({ height: '55vh' }) 
           clickCount = 1;
        }
    });

}

$(document).ready(appBubbleFunction);

