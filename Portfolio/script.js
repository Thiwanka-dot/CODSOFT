const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let intervals = [];

document.querySelectorAll("h2").forEach(element => {
    element.onmouseover = event => {
        let iteration = 0;
        
        clearInterval(intervals[event.target.dataset.index]);
        
        intervals[event.target.dataset.index] = setInterval(() => {
            event.target.innerText = event.target.innerText
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return event.target.dataset.textValue[index];
                    }
                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");
            
            if (iteration >= event.target.dataset.textValue.length) {
                clearInterval(intervals[event.target.dataset.index]);
            }
            iteration += 1 / 3;
        }, 50);
    };
});

function sendMail(){
    var params = {
        from_name : document.getElementById("fullname").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }
    
    emailjs.send("service_o5nz6wi", "template_2ys36j9", params).then(function (res){
        alert("Email Sent Successful! " + res.status);
        document.getElementById("fullname").value = "";
        document.getElementById("email_id").value = "";
        document.getElementById("message").value = "";
    }).catch(function(error) {
        console.error('Failed to send email: ', error);
        alert("Failed to send email. Please try again later.");
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/* 
document.oncontextmenu = () => {
    alert("Don't try to right click!");
    return false;
}

document.onkeydown = e => {
    if(e.key == "F12") {
        alert("Don't try to inspect element!");
        return false;
    }

    if(e.ctrlKey && e.key == "u") {
        alert("Don't try to view page source!");
        return false;
    }

    if(e.ctrlKey && e.key == "c") {
        alert("Don't try to copy page element!");
        return false;
    }

    if(e.ctrlKey && e.key == "v") {
        alert("Don't try to paste page element!");
        return false;
    }
}*/