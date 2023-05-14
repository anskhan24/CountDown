const endDate = "19 May 2023 6:36 PM"

document.getElementById("end-date").innerHTML = endDate;
const inputs = document.querySelectorAll("input");

function clock() {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;

    if (diff < 0) return;        

    // convert into days
    inputs[0].value = Math.floor(diff /3600 /24 );
    // convert into hours
    inputs[1].value = Math.floor(diff /3600) % 24;
    // convert into minutes
    inputs[2].value = Math.floor(diff /60)% 60;
    // convert into seconds
    inputs[3].value = Math.floor(diff) % 60;
    

}

clock();

setInterval(clock, 1000);

/**
 * 1 day = 24 hrs
 * 1 hr = 60 min
 * 1 min = 60 sec
 * 60 min = 3600 sec    
 */