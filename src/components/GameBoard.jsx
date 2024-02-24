import React from 'react'

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

const GameBoard = () => {
    return (
        <ol id='game-board'>
            {initialGameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, columnIndex) => (
                            <li key={columnIndex}>
                                <button>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}

export default GameBoard;