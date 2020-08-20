import React, { Component } from 'react'
import Gameui from './Gameui'
import Modal from './Modal'
import './all.min.css'

export class Gamefunc extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            score : {
                playerScore : 0,
                computerScore : 0,
            },
            playerChoice : '',
            computerChoice : '',
            winner : '',
            display : 'none',
            modalChoice : ''
        }
    }

    getWinner = (p, c) => {
                if(p === c){
                    return "It's a draw" ;
                }
                if(p === 'rock'){
                    if(c === 'paper'){
                        this.setState({score: {...this.state.score, computerScore : this.state.score.computerScore + 1}})
                        return 'computer';
                    } else {
                        this.setState({score: {...this.state.score, playerScore : this.state.score.playerScore + 1}})
                        return 'player'
                    }
                }
                if(p === 'paper'){
                    if(c === 'scissors'){
                        this.setState({score: {...this.state.score, computerScore : this.state.score.computerScore + 1}})
                        return 'computer';
                    } else {
                        this.setState({score: {...this.state.score, playerScore : this.state.score.playerScore + 1}})
                        return 'player'
                    }
                }
                if(p === 'scissors'){
                    if(c === 'rock'){
                        this.setState({score: {...this.state.score, computerScore : this.state.score.computerScore + 1}})
                        return 'computer';
                    } else {
                        this.setState({score: {...this.state.score, playerScore : this.state.score.playerScore + 1}})
                        return 'player'
                    }
                }
            }

    getComputerChoice = () =>{
                const randomNum = Math.random();
                
                if(randomNum < 0.34){
                    return 'rock' ;
                } else if(randomNum < 0.68){
                    return 'paper' ;
                } else{
                    return 'scissors'
                }
                
    }

    handleOpenModal = ()=> {
        this.setState({
            modalChoice : `fas fa-hand-${this.state.computerChoice} fa-10x`,
            display: 'block'
        })
    }

    handleCloseModal = ()=> {
        this.setState({
            display: 'none'
        })
    }

    checkWinner = () => {
        const winner = this.getWinner(this.state.playerChoice, this.state.computerChoice);
        this.setState({
            winner : winner
        }, this.handleOpenModal)

    }
        
    handleClick = (e)=> {
        const computerChoice = this.getComputerChoice()
        this.setState({
            playerChoice : e.target.id,
            computerChoice : computerChoice,

        }, this.checkWinner)
    }

    handleReset = () =>{
        this.setState({
            score : {
                playerScore : 0,
                computerScore : 0,
            },
            playerChoice : '',
            computerChoice : '',
            winner : '',
            display : 'none',
            modalChoice : ''
        })
    }
    
    render() {
        return (
            <div>
                <Gameui score={this.state.score}
                        handleClick={this.handleClick}
                        handleReset={this.handleReset} />
                <Modal winner={this.state.winner} 
                        display={this.state.display}
                        handleCloseModal={this.handleCloseModal}
                        modalChoice={this.state.modalChoice}/>
            </div>
        )
    }
}

export default Gamefunc
