const board = document.querySelector('#board')

const SQUARES_NUMBER = 600

const colors = ['#00FF00', '#F0E68C', '#00FFFF', '#FF00FF', '#778899', '#2F4F4F', '#BA55D3', '#BDB76B', '#4B0082']

for (let i = 0; i < SQUARES_NUMBER;i++) {
    
    const square = document.createElement('div')

    square.classList.add('square')


    square.addEventListener('mouseover', () => setColor(square)
    )

    square.addEventListener('mouseleave', () => removeColor(square)
    )




    board.append(square)
}

function setColor(element){
    const color = getRandColor()

    element.style.backgroundColor = color
    
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
    element.style.backgroundColor = '#1d1d1d'

    element.style.boxShadow = `0 0 2px #000`
}

function getRandColor(){

  return colors[Math.floor(Math.random() * colors.length)]
}