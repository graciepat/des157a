(function(){
    "use strict";
    console.log("reading JS");

    const startGame = document.querySelector('.play');
    const gameControl = document.querySelector('#gamecontrol');
    const game = document.querySelector('#game-text');
    const score1 = document.querySelector('#player1score');
    const score2 = document.querySelector('#player2score');
    const actionArea = document.querySelector('#buttons');
    const diceArea = document.querySelector('#dice');

    const gameData = {
        player1dice: ['1-orange-fish.png', '2-orange-fish.png', '3-orange-fish.png', 
               '4-orange-fish.png', '5-orange-fish.png', '6-orange-fish.png'],
        player2dice: ['1-yellow-fish.png', '2-yellow-fish.png', '3-yellow-fish.png', 
        '4-yellow-fish.png', '5-yellow-fish.png', '6-yellow-fish.png'],
        players: ['player 1', 'player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };

    startGame.addEventListener('click', function (){
        
        document.querySelector('#overlay').className = 'hidden';

        gameData.index = Math.round(Math.random());
        console.log(gameData.index);

        document.querySelector('#rock-button').addEventListener('click', function(){
            location.reload();
        });

        setUpTurn();
    });

    function setUpTurn(){
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        if (gameData.score[0]==0 && gameData.score[1]==0) {
            actionArea.innerHTML = '<button id="roll">Roll</button>';
        } else {
            actionArea.innerHTML = '<button id="roll">Roll</button><p>or</p><button id="pass">Pass</button>';
        }
        document.querySelector('#roll').addEventListener('click', function(){
            throwDice();
        });
    }

    function throwDice(){
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        if(gameData.index){
            diceArea.innerHTML += `<img src="images/${gameData.player2dice[gameData.roll1-1]}"><img src="images/${gameData.dice[gameData.roll2-1]}">`;
        } else {
            diceArea.innerHTML += `<img src="images/${gameData.player1dice[gameData.roll1-1]}"><img src="images/${gameData.dice[gameData.roll2-1]}">`;

        }
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        if (gameData.rollSum === 2){
            game.innerHTML += '<p>Oh snap! Shark eyes!</p>';
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            showCurrentScore();
            setTimeout(setUpTurn, 2000);
        }

        else if (gameData.roll1 === 1 || gameData.roll2 === 1){
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML += `<p>Sorry, one of your rolls was a one, switching to ${gameData.players[gameData.index]}</p>`;
            setTimeout(setUpTurn, 2000);
        }

        else {
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = '<button id="rollagain">Roll again</button> or <button id="pass">Pass</button>';

            document.querySelector('#rollagain').addEventListener('click', function(){
                throwDice();
            });

            document.querySelector('#pass').addEventListener('click', function(){
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            });

            checkWinningCondition();
        }
    }

    function checkWinningCondition() {
        if (gameData.score[gameData.index] > gameData.gameEnd) {
            score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;
            actionArea.innerHTML = '';
            document.querySelector('#quit').innerHTML = 'Start a New Game?';
        } else {
            showCurrentScore();
        }
    }

    function showCurrentScore (){
        score1.innerHTML = `${gameData.score[0]}`
        score2.innerHTML = `${gameData.score[1]}`
    }
})();