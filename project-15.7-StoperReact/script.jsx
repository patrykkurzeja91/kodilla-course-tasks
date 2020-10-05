
class Stopwatch extends React.Component {
    constructor() {
        super();
      this.state = {
        running: false,
        minutes: 0,
		seconds: 0,
        miliseconds: 0
      }         
    }
   
    reset() {
      this.setState({
        // running = false;
        
            minutes: 0,
            seconds: 0,
            miliseconds: 0
        
      });
    }
    
    format() {
        return `${pad0(this.state.minutes)}:${pad0(this.state.seconds)}:${pad0(Math.floor(this.state.miliseconds))}`;
    }
    start() {
        if (!this.state.running) {
            this.state.running = true;
            this.watch = setInterval(() => this.step(), 10);
        }        
    }
    step() {
        if (!this.state.running) return;
        this.calculate();
        // this.print();
    }
    calculate() {
      let miliseconds = this.state.miliseconds,
		      seconds = this.state.seconds,
		      minutes = this.state.minutes;

        miliseconds +=1;
        if (miliseconds >= 100) {
            seconds +=1;
            miliseconds = 0;
        }
        if (seconds >= 60) {
            minutes +=1;
            seconds = 0;
        }
        this.setState ({
            miliseconds: miliseconds,
            seconds: seconds,
            minutes: minutes
        });
    }
    stop() {
        this.state.running = false;
        clearInterval(this.watch);
    }
    round() {
        let currentTime = document.querySelector('.stopwatch').textContent,
            li = '<li>'+ currentTime +'</li>',
            result = document.querySelector('.results');
            result.innerHTML += li;
    }
    clear() {
        let result = document.querySelector('.results');
        result.innerHTML = '';
    }

    render() {
      return (
        <div>
            <div className="container">
                <h1>Just A timer</h1>
                <nav className="controls">
                    <a href="#" onClick={this.start.bind(this)} className="button" id="start">Start</a>
                    <a href="#" onClick={this.stop.bind(this)} className="button" id="stop">Stop</a>
                    <a href="#" onClick={this.reset.bind(this)} className="button" id="reset">Reset</a>
                </nav>
                <div className="stopwatch">{this.format()}</div>
            </div>
            <nav className="round-controls">
                <a href="#" onClick={this.round.bind(this)} className="button" id="round">Round</a>
                <a href="#" onClick={this.clear.bind(this)} className="button" id="clear">Clear Rounds</a>
            </nav>
            <h1>REsults</h1>
            <ul className="results">
            </ul>
        </div>
      );
    }
}
let pad0 = (value) => {
    let result = value.toString();
    if (result.length <2) {
        result = '0'+ result;
    }
   return result;
}
// let startBtn = document.getElementById('start');
// startBtn.addEventListener('click', () => stopwatch.start());

// let stopBtn = document.getElementById('stop');
// stopBtn.addEventListener('click', () => stopwatch.stop());

// let startStopBtn = document.getElementById('startStop');
// startStopBtn.a


// let resetBtn = document.getElementById('reset');
// resetBtn.addEventListener('click', () => {
//     stopwatch.stop();
//     stopwatch.reset();
//     stopwatch.print();
// });

// let roundBtn = document.getElementById('round');
// roundBtn.addEventListener('click', () => stopwatch.round());

// let clearBtn = document.getElementById('clear');
// clearBtn.addEventListener('click', () => stopwatch.clear());

//const stopwatch = new Stopwatch(document.querySelector('.stopwatch'));
var element = <Stopwatch />;
ReactDOM.render(element,
	document.querySelector('#output'));
