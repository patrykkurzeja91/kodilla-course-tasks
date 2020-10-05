class Stopwatch {
    constructor(display) {
        this.running = false;
        this.display = display;
        this.reset();
        this.print(this.times);
    }
    reset() {
        this.times = {
            minutes: 0,
            seconds: 0,
            miliseconds: 0
        }
    }
    print() {
        this.display.innerText = this.format(this.times);
    }
    format(times) {
        return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
    }
    start() {
        if (!this.running) {
            this.running = true;
            this.watch = setInterval(() => this.step(), 10);
        }        
    }
    step() {
        if (!this.running) return;
        this.calculate();
        this.print();
    }
    calculate() {
        this.times.miliseconds +=1;
        if (this.times.miliseconds >= 100) {
            this.times.seconds +=1;
            this.times.miliseconds = 0;
        }
        if (this.times.seconds >= 60) {
            this.times.minutes +=1;
            this.seconds = 0;
        }
    }
    stop() {
        this.running = false;
        clearInterval(this.watch);
    }
    round() {
        let currentTime = document.querySelector('.stopwatch').textContent;
        let li = '<li>'+ currentTime +'</li>';
        let result = document.querySelector('.results');
        result.innerHTML += li;
    }
    clear() {
        let result = document.querySelector('.results');
    result.innerHTML = '';
    }
   
    
}
var pad0 = (value) => {
    let result = value.toString();
    if (result.length <2) {
        result = '0'+ result;
    }
   return result;
}

const stopwatch = new Stopwatch(document.querySelector('.stopwatch'));

let startBtn = document.getElementById('start');
startBtn.addEventListener('click', () => stopwatch.start());

let stopBtn = document.getElementById('stop');
stopBtn.addEventListener('click', () => stopwatch.stop());

let startStopBtn = document.getElementById('startStop');
startStopBtn.a


let resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', () => {
    stopwatch.stop();
    stopwatch.reset();
    stopwatch.print();    
});

let roundBtn = document.getElementById('round');
roundBtn.addEventListener('click', () => stopwatch.round());

let clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', () => stopwatch.clear());

