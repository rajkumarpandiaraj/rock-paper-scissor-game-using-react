import React from 'react'

function Gameui(props) {
    const {score, handleClick, handleReset} = props
    return (
    <div className="container">
        <header>
            <h1>Rock Paper Scissors</h1>
            <button className="reset-btn" id="reset-btn" onClick={handleReset}>Reset Game</button>
        </header> 
        <div className="score" id="score">
            <p>Player : {score.playerScore}</p>
            <p>Computer : {score.computerScore}</p>
        </div>
        <div className="choices" id="choices">
            <i id="rock" onClick={handleClick} className="choice fas fa-hand-rock fa-10x" ></i>
            <i id="paper" onClick={handleClick} className="choice fas fa-hand-paper fa-10x" ></i>
            <i id="scissors" onClick={handleClick} className="choice fas fa-hand-scissors fa-10x" ></i>
        </div>
    </div>
    )
}

export default Gameui
