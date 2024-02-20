import React, { useState } from 'react'

const Player = ({ player, symbol }) => {

    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    }

    let playerName = <span className="player-name">{player}</span>;

    if (isEditing) {
        playerName = <input type='text' required />;
    }

    return (
        <li>
            <span className="player-info">
                {playerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>Edit</button>
        </li>
    )
}

export default Player