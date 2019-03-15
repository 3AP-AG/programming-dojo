import React from 'react'

export default function Cell({alive, onClick}) {
  return (
    <button onClick={onClick}>{alive ? <span>*</span> : <span>-</span>}</button>
  );
}