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

const Board = () => {
    return (
        <div style={styles}>
            <Square value='1' />
            <Square value='2' />
            <Square value='3' />
            <Square value='4' />
            <Square value='5' />
            <Square value='6' />
            <Square value='7' />
            <Square value='8' />
            <Square value='9' />
        </div>
    )
}

export default Board
