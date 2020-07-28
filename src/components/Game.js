import React, { useState } from 'react'
import { gameLogic } from '../GameLogic'
import Board from './Board'
import { Timer } from "./timer";

const styles = {
    width: '250px',
    margin: '3rem auto'
}

const inputContainer = {
    display: 'inline-block',
    margin: '3rem 16rem'
}

const inputBox = (backgroundColor) => ({
    backgroundColor: backgroundColor || 'salmon',
    fontSize: '20px',
    fontWeight: '700',
    height: '50px',
    width: '200px',
    borderRadius: 20,
    textAlign: 'center',
    borderWidth: '0',
    outline: 'none'
});

const Game = () => {
    const [players, setPlayers] = useState({
        player1: 'Player 1',
        player2: 'Player 2'
    })
    const [board, setBoard] = useState(Array(9).fill(null))
    const [p1IsNext, setP1isNext] = useState(true)
    const [viewTimer, setViewTimer] = useState(false);
    const [defaultWinner, setDefaultWinner] = useState(false);
    let winner = defaultWinner ? p1IsNext ? "O" : "X" : gameLogic(board)

    const nameHandler = key => {
        return e => {
            const value = e.target.value;
            const playersCopy = { ...players, players }
            playersCopy[key] = value;
            setPlayers(playersCopy);
        }
    }

    const handleClick = async (i) => {
        await setViewTimer(false);
        const boardCopy = [...board];
        if (winner || boardCopy[i]) return
        boardCopy[i] = p1IsNext ? 'X' : 'O'
        setBoard(boardCopy)
        setP1isNext(!p1IsNext)
        await setViewTimer(true);
    }

    const handleGameReset = async () => {
        await setViewTimer(false);
        await setDefaultWinner(false);
        await setBoard(Array(9).fill(null));
        await setP1isNext(true)
    }

    const handleGameStart = async () => {
        await setBoard(Array(9).fill(null));
        await setDefaultWinner(false);
        await setP1isNext(true)
        winner = undefined;
        await setViewTimer(true);
    }

    return (
        <>
            <div style={inputContainer}>
                <input style={inputBox(p1IsNext ? "green" : "")} value={players.player1} onChange={nameHandler('player1')} />
            </div>
            <button style={{ height: '50px', width: '100px', borderRadius: 20, outline: 'none' }} onClick={handleGameStart}>Start</button>
            <div style={inputContainer}>
                <input style={inputBox(!p1IsNext ? "green" : "")} value={players.player2} onChange={nameHandler('player2')} />
            </div>
            <div style={{ textAlign: 'center' }}>
                {viewTimer && <Timer setDefaultWinner={setDefaultWinner} setViewTimer={setViewTimer} defaultWinner={defaultWinner} />}
            </div>
            <Board squares={board} onClick={handleClick} />
            <div style={styles}>
                <p>{(winner === "X") ? players.player1 + " Wins" : (winner === "O") ? players.player2 + " Wins" : null}</p>
                <button onClick={handleGameReset}>
                    Reset Game!
                </button>
            </div>
        </>
    )
}

export default Game