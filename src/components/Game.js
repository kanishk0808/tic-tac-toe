import React, { useState } from 'react'
import Board from './Board'

const container = {
    margin: '0 auto',
}

const Game = () => {
    const [players, setPlayers] = useState({
        player1: 'Player 1',
        player2: 'Player 2'
    })
    const [board, setBoard] = useState(Array(9).fill(null))

    const nameHandler = key => {
        return e => {
            const value = e.target.value;
            const playersCopy = { ...players, players }
            playersCopy[key] = value;
            setPlayers(playersCopy);
        }
    }

    return (
        <>
            <div style={{ display: 'inline-block', margin: '5rem 16rem' }}>
                <input style={{ fontSize: '20px', fontWeight: '700', height: '50px', width: '200px', borderRadius: 20, backgroundColor: '#78c28c', textAlign: 'center', borderWidth: '0', outline: 'none' }} value={players.player1} onChange={nameHandler('player1')} />
            </div>
            <button style={{ height: '50px', width: '100px', borderRadius: 20 }}>Start</button>
            <div style={{ display: 'inline-block', margin: '5rem 16rem' }}>
                <input style={{ fontSize: '20px', fontWeight: '700', height: '50px', width: '200px', borderRadius: 20, backgroundColor: '#db8c8c', textAlign: 'center', borderWidth: '0', outline: 'none' }} value={players.player2} onChange={nameHandler('player2')} />
            </div>
            <Board squares={board} onClick={() => { }} />
        </>
    )
}

export default Game
