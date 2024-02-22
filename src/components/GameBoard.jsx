import React from 'react'

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

const GameBoard = () => {
    return (
        // trying to get the gameboard to display
        <ol id='game-board'>
            {initialGameBoard.map((row, rowIndex) => {
                <ol key={rowIndex}>
                    {row.map((column, columnIndex) => {
                        <li key={columnIndex}></li>
                    })}
                </ol>
            })}
        </ol>
    )
}

export default GameBoard;