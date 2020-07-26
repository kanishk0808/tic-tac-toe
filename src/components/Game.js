import React, { useState } from 'react'
import { gameLogic } from '../GameLogic'
import Board from './Board'

const styles = {
    width: '250px',
    margin: '3rem auto'
}

const container = {
    margin: '0 auto',
}

const Game = () => {
    const [players, setPlayers] = useState({
        player1: 'Player 1',
        player2: 'Player 2'
    })
    const [board, setBoard] = useState(Array(9).fill(null))
    const [p1IsNext, setP1isNext] = useState(true)
    const winner = gameLogic(board)

    const nameHandler = key => {
        return e => {
            const value = e.target.value;
            const playersCopy = { ...players, players }
            playersCopy[key] = value;
            setPlayers(playersCopy);
        }
    }

    const handleClick = i => {
        const boardCopy = [...board];
        if (winner || boardCopy[i]) return
        boardCopy[i] = p1IsNext ? 'X' : 'O'
        setBoard(boardCopy)
        setP1isNext(!p1IsNext)
    }

    const buttonHandler = () => {
        return <button onClick={() => setBoard(Array(9).fill(null))}>
            Reset Game!
        </button>
    }

    return (
        <>
            <div style={{ display: 'inline-block', margin: '3rem 16rem' }}>
                <input style={{ fontSize: '20px', fontWeight: '700', height: '50px', width: '200px', borderRadius: 20, backgroundColor: '#db8c8c', textAlign: 'center', borderWidth: '0', outline: 'none' }} value={players.player1} onChange={nameHandler('player1')} />
            </div>
            <button style={{ height: '50px', width: '100px', borderRadius: 20, outline: 'none' }}>Start</button>
            <div style={{ display: 'inline-block', margin: '3rem 16rem' }}>
                <input style={{ fontSize: '20px', fontWeight: '700', height: '50px', width: '200px', borderRadius: 20, backgroundColor: '#db8c8c', textAlign: 'center', borderWidth: '0', outline: 'none' }} value={players.player2} onChange={nameHandler('player2')} />
            </div>
            <Board squares={board} onClick={handleClick} />
            <div style={styles}>
                <p>{(winner === 'X') ? players.player1 + ' Wins' : (winner === 'O') ? players.player2 + ' Wins' : null}</p>
                {buttonHandler()}
            </div>
        </>
    )
}

export default Game

// 78c28c