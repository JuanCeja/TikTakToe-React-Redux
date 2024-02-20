import React from 'react'

const Player = ({ player, symbol }) => {
    return (
        <li>
            <span className="player-info">
                <span className="player-name">{player}</span>
                <span className="player-symbol">{symbol}</span>
            </span>
            <button>Edit</button>
        </li>
    )
}

export default Player