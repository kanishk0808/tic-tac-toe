import React from 'react'
import Square from './Square'

const styles = {
    border: '1px solid darkgrey',
    height: '240px',
    width: '240px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr)/repeat(3, 1fr)'
}

const Board = ({ squares, onClick }) => {
    return (
        <div style={styles}>
            {squares.map((square, i) => {
                return <Square key={i} value={square} onClick={() => onClick(i)} />
            })}
        </div>
    )
}

export default Board
