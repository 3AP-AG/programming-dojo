import React from 'react'

const Cell = (props) => {
    return (
        props.alive ? <span>ALIVE</span> : <span>DEAD</span>
    );
}