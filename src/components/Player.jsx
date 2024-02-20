import React, { useState } from 'react'

const Player = ({ player, symbol }) => {

    const [isEditing, setIsEditing] = useState(false);

    const editingField = () => {
        setIsEditing(true);
    }

    return (
        <li>
            <span className="player-info">
                {
                    isEditing ? <input />
                        : <span className="player-name">{player}</span>
                }
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={editingField}>Edit</button>
        </li>
    )
}

export default Player