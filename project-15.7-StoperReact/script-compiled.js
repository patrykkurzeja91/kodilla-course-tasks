'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Stopwatch = function (_React$Component) {
    _inherits(Stopwatch, _React$Component);

    function Stopwatch() {
        _classCallCheck(this, Stopwatch);

        var _this = _possibleConstructorReturn(this, (Stopwatch.__proto__ || Object.getPrototypeOf(Stopwatch)).call(this));

        _this.state = {
            running: false,
            minutes: 0,
            seconds: 0,
            miliseconds: 0
        };
        return _this;
    }

    _createClass(Stopwatch, [{
        key: 'reset',
        value: function reset() {
            this.setState({
                // running = false;

                minutes: 0,
                seconds: 0,
                miliseconds: 0

            });
        }
    }, {
        key: 'format',
        value: function format() {
            return pad0(this.state.minutes) + ':' + pad0(this.state.seconds) + ':' + pad0(Math.floor(this.state.miliseconds));
        }
    }, {
        key: 'start',
        value: function start() {
            var _this2 = this;

            if (!this.state.running) {
                this.state.running = true;
                this.watch = setInterval(function () {
                    return _this2.step();
                }, 10);
            }
        }
    }, {
        key: 'step',
        value: function step() {
            if (!this.state.running) return;
            this.calculate();
            // this.print();
        }
    }, {
        key: 'calculate',
        value: function calculate() {
            var miliseconds = this.state.miliseconds,
                seconds = this.state.seconds,
                minutes = this.state.minutes;

            miliseconds += 1;
            if (miliseconds >= 100) {
                seconds += 1;
                miliseconds = 0;
            }
            if (seconds >= 60) {
                minutes += 1;
                seconds = 0;
            }
            this.setState({
                miliseconds: miliseconds,
                seconds: seconds,
                minutes: minutes
            });
        }
    }, {
        key: 'stop',
        value: function stop() {
            this.state.running = false;
            clearInterval(this.watch);
        }
    }, {
        key: 'round',
        value: function round() {
            var currentTime = document.querySelector('.stopwatch').textContent,
                li = '<li>' + currentTime + '</li>',
                result = document.querySelector('.results');
            result.innerHTML += li;
        }
    }, {
        key: 'clear',
        value: function clear() {
            var result = document.querySelector('.results');
            result.innerHTML = '';
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { className: 'container' },
                    React.createElement(
                        'h1',
                        null,
                        'Just A timer'
                    ),
                    React.createElement(
                        'nav',
                        { className: 'controls' },
                        React.createElement(
                            'a',
                            { href: '#', onClick: this.start.bind(this), className: 'button', id: 'start' },
                            'Start'
                        ),
                        React.createElement(
                            'a',
                            { href: '#', onClick: this.stop.bind(this), className: 'button', id: 'stop' },
                            'Stop'
                        ),
                        React.createElement(
                            'a',
                            { href: '#', onClick: this.reset.bind(this), className: 'button', id: 'reset' },
                            'Reset'
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'stopwatch' },
                        this.format()
                    )
                ),
                React.createElement(
                    'nav',
                    { className: 'round-controls' },
                    React.createElement(
                        'a',
                        { href: '#', onClick: this.round.bind(this), className: 'button', id: 'round' },
                        'Round'
                    ),
                    React.createElement(
                        'a',
                        { href: '#', onClick: this.clear.bind(this), className: 'button', id: 'clear' },
                        'Clear Rounds'
                    )
                ),
                React.createElement(
                    'h1',
                    null,
                    'REsults'
                ),
                React.createElement('ul', { className: 'results' })
            );
        }
    }]);

    return Stopwatch;
}(React.Component);

var pad0 = function pad0(value) {
    var result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
};
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
var element = React.createElement(Stopwatch, null);
ReactDOM.render(element, document.querySelector('#output'));
