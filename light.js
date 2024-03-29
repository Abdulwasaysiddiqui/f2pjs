let btn = document.getElementById('toggleBtn');
let bulb = document.getElementById('bulb');
let mq = document.getElementById('mq');

// EVENT
btn.addEventListener('click' , toggleBulb);
    function toggleBulb(){
        if(btn.textContent.includes('On') && mq.textContent.includes('On')){
            bulb.src = "bulb2.png";
            btn.textContent = "Turn Off";
            mq.textContent = "Turn Off";
            mq.style.boxShadow = "3px 3px 4px 4px green";
            mq.style.color = "green";
            bulb.style.boxShadow = "3px 3px 4px 4px green";
            btn.className = "btn btn-outline-success";
            btn.style.boxShadow = "3px 3px 4px 4px green";
        }
        else{
            bulb.src = "bulb.png";
            btn.textContent = "Turn On";
            mq.textContent = "Turn On";
            mq.style.boxShadow = "3px 3px 4px 4px red";
            mq.style.color = "red";
            bulb.style.boxShadow = "3px 3px 4px 4px red";
            btn.className = "btn btn-outline-danger";
            btn.style.boxShadow = "3px 3px 4px 4px red";
        }
    }
