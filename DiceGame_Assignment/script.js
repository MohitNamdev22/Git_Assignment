let currentPlayer = 0;
        let currentScore = 0;
        let scores = [0, 0];
        let gameActive = true;
        let gameStarted = false;

        function updateDiceFace(number) {
            const rotations = {
                1: 'rotateX(0deg) rotateY(0deg)',
                2: 'rotateX(-90deg)',
                3: 'rotateY(90deg)',
                4: 'rotateY(-90deg)',
                5: 'rotateX(90deg)',
                6: 'rotateX(180deg)'
            };
            document.getElementById('dice').style.transform = rotations[number];
        }

        function rollDice() {
            if (!gameActive) return;
    
    if (!gameStarted) {
        gameStarted = true;
        document.querySelectorAll('.name').forEach(input => {
            input.readOnly = true;
        });
    }
            
            const dice = document.getElementById('dice');
            const result = Math.floor(Math.random() * 6) + 1;
            
            dice.classList.add('rolling');
            setTimeout(() => {
                dice.classList.remove('rolling');
                updateDiceFace(result);
                
                if (result === 1) {
                    currentScore = 0;
                    switchPlayer();
                } else {
                    currentScore += result;
                }
                updateScores();
            }, 1000);
        }

        function saveScore() {
            if (!gameActive || currentScore === 0) return;
            
            scores[currentPlayer] += currentScore;
            currentScore = 0;
            
            if (scores[currentPlayer] >= 100) {
                gameActive = false;
                const winner = document.querySelectorAll('.name')[currentPlayer].value;
                alert(`${winner} wins!`);
                setTimeout(() => {
                    resetGame();
                }, 1000);
            } else {
                switchPlayer();
            }
            updateScores();
        }

        function switchPlayer() {
            currentPlayer = currentPlayer === 0 ? 1 : 0;
            document.querySelectorAll('.player').forEach((player, index) => {
                player.classList.toggle('active', index === currentPlayer);
            });
        }

        function updateScores() {
            document.querySelectorAll('.current-score span').forEach(
                (span, index) => span.textContent = index === currentPlayer ? currentScore : 0
            );
            document.querySelectorAll('.saved').forEach(
                (div, index) => div.textContent = scores[index]
            );
        }

        function resetGame() {
            currentPlayer = 0;
            currentScore = 0;
            scores = [0, 0];
            gameActive = true;
            gameStarted = false;

            document.querySelectorAll('.name').forEach(input => {
                input.readOnly = false;
            });

            updateDiceFace(1);

            document.querySelectorAll('.player').forEach((player, index) => {
                player.classList.toggle('active', index === 0);
            });
            updateScores();
        }

        document.querySelectorAll('.name').forEach(input => {
        input.placeholder = 'Enter player name';
        input.addEventListener('input', updateScores);
});

        resetGame();