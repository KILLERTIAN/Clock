const btntoggle = document.querySelector('.dw');
const dwtoggle = document.querySelector('.clock');
const bodytoggle = document.querySelector('.body');
const mincol = document.querySelector('.mn');
const seccol = document.querySelector('.sc');

btntoggle.addEventListener('click',() => {
    btntoggle.classList.toggle('active');
    dwtoggle.classList.toggle('active');
    bodytoggle.classList.toggle('active')
    mincol.classList.toggle('active')
    seccol.classList.toggle('active')
})

const deg = 6;
        const hr = document.querySelector('#hr');
        const mn = document.querySelector('#mn');
        const sc = document.querySelector('#sc');


        setInterval(() => {
            let day = new Date();
            let hh = day.getHours() * 30;
            let mm = day.getMinutes() * deg;
            let ss = day.getSeconds() * deg;

            hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
            mn.style.transform = `rotateZ(${mm}deg)`;
            sc.style.transform = `rotateZ(${ss}deg)`;
        }
        )