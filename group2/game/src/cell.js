import React from 'react'

export default function Cell(props) {
    return (
        props.alive ? <span>ALIVE</span> : <span>DEAD</span>
    );
}