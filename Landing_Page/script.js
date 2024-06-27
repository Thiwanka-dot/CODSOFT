const nav = document.querySelector('.navbar');
const menu = document.querySelector('.ham');
const links = document.querySelector('.nav-link');

window.addEventListener('scroll', () => {
    if(this.scrollY >= 100) {
        nav.classList.add('scrolled');
    }
    else{
        nav.classList.remove('scrolled');
    }
});

menu.addEventListener('click', () => {
    links.classList.toggle('active');
    menu.classList.toggle('active');
});

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