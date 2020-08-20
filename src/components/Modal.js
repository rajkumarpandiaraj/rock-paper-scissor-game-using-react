import React from 'react'

function Modal(props) {
    const {winner, display, handleCloseModal, modalChoice} = props
    const styling ={
        display : display
    }
    return (
        
        <div className="modal" style={styling} onClick={handleCloseModal}>
            <div className="modal-content" id="modal-content">
                <h1 className = 'text-win'>{winner} Won</h1>
                <i className = {modalChoice}></i>
                <p> computer chose</p>
            </div>
        </div>

    )
}

export default Modal
