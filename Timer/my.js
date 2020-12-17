const d = document;

const query = d.querySelectorAll('.hours > li');




setInterval( () => {
    const times = new Date;

    let set_Seconds = times.getSeconds();
    let set_Minutes = times.getMinutes();
    let set_Hours = times.getHours();

    if(set_Seconds < 10) set_Seconds = "0" + set_Seconds;
    if(set_Minutes < 10) set_Minutes = "0" + set_Minutes;
    if(set_Hours < 10) set_Hours = "0" + set_Hours;

    query[0].innerHTML = set_Hours;
    query[1].innerHTML = set_Minutes;
    query[2].innerHTML = set_Seconds;
}, 1000);