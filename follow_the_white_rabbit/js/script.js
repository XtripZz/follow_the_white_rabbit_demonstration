// text from Matrix
const t = [
    'Wake up, Neo...',
    'The matrix has you...',
    'Follow the white rabbit...',
];

let out = document.querySelector('.out');
out.innerHTML = 'Press Enter';

// 'Press Enter' blinking
function blinking() {
    function pressEnter1(black) {
        if (out.style.color == 'rgb(97, 255, 162)') {
            return;
        }
        out.style.color = black;
    }

    function pressEnter2(green) {
        if (out.style.color == 'rgb(97, 255, 162)') {
            return;
        }
        out.style.color = green;
    }

    setInterval(pressEnter1, 500, 'black');
    setInterval(pressEnter2, 1000, 'rgb(97, 255, 163)');
}

blinking();

// text from Matrix. program
function typeText(event) {
    let line = 0;
    let count = 0;
    let str = '';

    // start program via the key 'enter'
    if (event.key === 'Enter' && ((out.innerHTML == 'Press Enter') || (out.innerHTML == 'Follow the white rabbit...'))) {
        out.style.color = 'rgb(97, 255, 162)';
        out.innerHTML = '';

        function typeLine() {

            // draw a string
            let interval = setTimeout(function () {
                str += t[line][count];
                out.innerHTML = str + '|';
                count++;

                // check: did the string end
                if (count >= t[line].length) {
                    count = 0;
                    line++;

                    // make a new String
                    if (line < t.length) {
                        str = '';
                    }

                    if (line == t.length) {
                        clearTimeout(interval);
                        out.innerHTML = str;
                        return true;
                    }
                }

                typeLine();

            }, getRandomInt(getRandomInt(350 * 2)));
        }

        typeLine();
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

document.addEventListener('keydown', typeText);