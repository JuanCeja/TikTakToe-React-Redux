import React from 'react'

const Player = ({ player, symbol }) => {

    // use state - is edit button active

    return (
        <li>
            <span className="player-info">
            
            {/* if edit button is active display a field element instead of the span element */}
                <span className="player-name">{player}</span>
                <span className="player-symbol">{symbol}</span>
            </span>

            {/* if button is active show save instead */}
            <button>Edit</button>
        </li>
    )
}

export default Player