
document.querySelector('.custom-btn').addEventListener('click', () => {

let duration = 60

display = document.getElementById('timer');
timer(duration, display);
})

const timer = (duration, display) => {
    let timer = duration;
    setInterval(() =>{
        seconds = timer;
        display.innerHTML = `${timer}`
        timer = timer < 10 ? '0' + timer : timer;

        timer -= 1;
        if(timer < 0){
            display.innerHTML = 'ACABOU!!!';
        }

    }, 1000)
}