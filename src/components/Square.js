import React from 'react'

const styles = {
    background: 'white',
    height: '80px',
    width: '80px',
    border: '1px solid darkgrey',
    fontSize: '50px',
    outline: 'none'
}

const Square = ({ value, onClick }) => {
    return (
        <button style={styles} onClick={onClick}>
            {value}
        </button>
    )
}

export default Square

