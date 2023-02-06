let squares = document.querySelectorAll('.board')
squares.forEach(square => square.addEventListener('click', play))
document.querySelector('#reset').addEventListener('click', reset)
let boardArray = ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x']

let counter = 0

function play() {

    if(counter % 2 === 0){
        this.innerText = boardArray[counter]
        counter++
        this.removeEventListener('click', play)
        if (checkForWin()) {
            squares.forEach(square => square.removeEventListener('click', play))
        }
    } else {
        this.innerText = boardArray[counter]
        counter++
        this.removeEventListener('click', play)
        if (checkForWin()) {
            squares.forEach(square => square.removeEventListener('click', play))
        }
    }
}

function checkForWin() {
    if(checkForXWin()) {
        document.querySelector('h2').innerText = 'X WINS'
        return true
    } else if (checkForYWin()) {
        document.querySelector('h2').innerText = 'O WINS'
        return true
    } else if (counter === 9) {
        squares.forEach(square => square.removeEventListener('click', play))
        document.querySelector('h2').innerText = "YOU'RE BOTH LOSERS"
    }
}

function checkForXWin() {
    if((document.querySelector('#one').innerText === 'x' && document.querySelector('#two').innerText === 'x' && document.querySelector('#three').innerText === 'x' ) || (document.querySelector('#four').innerText === 'x' && document.querySelector('#five').innerText === 'x' && document.querySelector('#six').innerText === 'x' ) || (document.querySelector('#seven').innerText === 'x' && document.querySelector('#eight').innerText === 'x' && document.querySelector('#nine').innerText === 'x' ) || (document.querySelector('#one').innerText === 'x' && document.querySelector('#four').innerText === 'x' && document.querySelector('#seven').innerText === 'x' ) || (document.querySelector('#two').innerText === 'x' && document.querySelector('#five').innerText === 'x' && document.querySelector('#eight').innerText === 'x' ) || (document.querySelector('#three').innerText === 'x' && document.querySelector('#six').innerText === 'x' && document.querySelector('#nine').innerText === 'x' ) || (document.querySelector('#one').innerText === 'x' && document.querySelector('#five').innerText === 'x' && document.querySelector('#nine').innerText === 'x' ) || (document.querySelector('#three').innerText === 'x' && document.querySelector('#five').innerText === 'x' && document.querySelector('#seven').innerText === 'x' )) {
        return true
    } else {
        return false
    }
}

function checkForYWin() {
    if((document.querySelector('#one').innerText === 'o' && document.querySelector('#two').innerText === 'o' && document.querySelector('#three').innerText === 'o' ) || (document.querySelector('#four').innerText === 'o' && document.querySelector('#five').innerText === 'o' && document.querySelector('#six').innerText === 'o' ) || (document.querySelector('#seven').innerText === 'o' && document.querySelector('#eight').innerText === 'o' && document.querySelector('#nine').innerText === 'o' ) || (document.querySelector('#one').innerText === 'o' && document.querySelector('#four').innerText === 'o' && document.querySelector('#seven').innerText === 'o' ) || (document.querySelector('#two').innerText === 'o' && document.querySelector('#five').innerText === 'o' && document.querySelector('#eight').innerText === 'o' ) || (document.querySelector('#three').innerText === 'o' && document.querySelector('#six').innerText === 'o' && document.querySelector('#nine').innerText === 'o' ) || (document.querySelector('#one').innerText === 'o' && document.querySelector('#five').innerText === 'o' && document.querySelector('#nine').innerText === 'o' ) || (document.querySelector('#three').innerText === 'o' && document.querySelector('#five').innerText === 'o' && document.querySelector('#seven').innerText === 'o' )) {
        return true
    } else {
        return false
    }
}

function reset() {
    squares.forEach(square => square.innerText = '')
    squares.forEach(square => square.addEventListener('click', play))
    document.querySelector('h2').innerText = ''
    counter = 0
}

