import { useState } from "react";

const Timer = () => {
    const [time, setTime] = useState(0);
    const [timer, setTimer] = useState(null);
    function startTimer() {
        if (!timer) {
        const newTimer = setInterval(() => {
            setTime((time) => time + 1);
        }, 1000);
        setTimer(newTimer);
        }
    }

    function stopTimer() {
        clearInterval(timer);
        setTimer(null);
    }

    function resetTimer() {
        clearInterval(timer);
        setTimer(null);
        setTime(0);
    }

    return (
        <div className="timer-container">
        <h1>
            Timer:{" "}
            <span>{String(Math.floor(time / 3600)).padStart(2, "0")} hrs </span>
            <span>
            {String(Math.floor((time % 3600) / 60)).padStart(2, "0")} mins{" "}
            </span>
            <span>{String(time % 60).padStart(2, "0")} secs</span>
        </h1>

        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
        </div>
    );
}

export default Timer
