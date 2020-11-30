var count = 0;

function startTimer(duration) {
    var timer = duration, minutes, seconds;
    var done = false;
    var exceed = false;
    var countdown = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.getElementById('timer').innerHTML = minutes + ":" + seconds;
        --timer;

        if (timer == 0) {
            var r = confirm("Do you want to extend the timer?");
            if (r == true) {
                count++;
                if (count <= 3) {
                    timer = duration;
                } else{
                    exceed = true;
                }
            } else{
                done = true;
            }

            if(exceed){
                document.getElementById('timer').innerHTML = "EXPIRED";
                clearInterval(countdown);
                alert("You have exceeded MAX number of reset attempts.");
            }
            if(done){
                document.getElementById('timer').innerHTML = "EXPIRED";
                clearInterval(countdown);
            }
        }
        //timer--;
    }, 1000);
}

startTimer(4);
