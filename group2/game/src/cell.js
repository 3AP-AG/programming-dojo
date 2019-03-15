import React from 'react'

export default function Cell({alive, onClick}) {
  return (
    <button onClick={onClick}>{alive ? <span>*</span> : <span>-</span>}
      {/* language=CSS */}
      <style jsx>{`
          button {
              font-size: 14px;
              border: none;
              padding: 10px 10px;
              display: flex;
              justify-content: center;
              align-items: center;
              cursor: pointer;
              outline: none;
              margin: 5px;
          }
      `}</style>
    </button>
  );
}