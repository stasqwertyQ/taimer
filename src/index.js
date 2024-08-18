// task1

 let minutes = 60;
        
        const updateTimer = () => {
            minutes--;
            const displayMinutes = String(minutes).padStart(2, '0');
            document.getElementById('timer').textContent = `${displayMinutes}:00`;

            if (minutes === 30) {
                document.getElementById('message').textContent = "Залишилось менше половини часу!";
            }

            if (minutes <= 0) {
                clearInterval(timerInterval);
            }
        };

const timerInterval = setInterval(updateTimer, 60000); 
        


//task2

let timeRemaining = 30000; 

        const updateTimerr = () => {
            timeRemaining -= 1;
            const seconds = (timeRemaining / 1000).toFixed(3);
            document.getElementById('timer').textContent = seconds;

            if (timeRemaining <= 10000) {
                document.getElementById('timer').classList.add('animated');
            }

            if (timeRemaining <= 0) {
                clearInterval(timerIntervall);
                document.getElementById('restartButton').classList.remove('button-disabled');
            }
        };

        const timerIntervall = setInterval(updateTimer, 1); 

        document.getElementById('restartButton').addEventListener('click', () => {
            location.reload(); 
        });