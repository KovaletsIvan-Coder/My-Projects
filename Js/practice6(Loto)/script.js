alert('You have 3 tires')
const youWin = document.querySelector('.YouWin')
function LotteryCard (index, isWining){
    this.index = index;
    this.isWining = isWining;
    this.handleTry = function (attempt,square,squareContainer){
        if(this.isWining){
            square.classList.add('square-correct')
            youWin.style.display = 'block'
            youWin.style.visibility = 'visible'

        }else{
            if(attempt === 3){
                youWin.textContent = 'You Lost'
                youWin.style.visibility = 'visible'
                square.classList.add('square-wrong')
                return;
            }
            square.classList.add('square-wrong')
        }

    };
}

const cards =[
    new LotteryCard(1,true),
    new LotteryCard(2,false),
    new LotteryCard(3,false),
    new LotteryCard(4,false),
    new LotteryCard(5,false),
    new LotteryCard(6,false),
    new LotteryCard(7,false),
    new LotteryCard(8,false),
    new LotteryCard(9,false)
]

function renderSquares(squares){
    let attempt = 0;
    const squareContainer = document.querySelector('.container-box');
    squares.forEach((item) =>{
        const square = document.createElement('div');
        const squareIndex = document.createElement('h4');
        squareIndex.innerHTML = item.index;
        square.appendChild(squareIndex);
        square.classList.add('square');
        square.addEventListener('click', () =>
            item.handleTry(++attempt, square, squareContainer )

        )
        squareContainer.appendChild(square);

    })
}

renderSquares(cards);