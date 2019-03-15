import React from 'react'

export default function Cell({alive, onClick}) {
  return (
    <button className="cell" onClick={onClick}>{alive ? <span className="alive">*</span> :
      <span className="dead">-</span>}
      {/* language=CSS */}
      <style jsx>{`
          .cell {
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

          .alive {
              color: green;
          }

          .dead {
              color: red;
          }
      `}</style>
    </button>
  );
}