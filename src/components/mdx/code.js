import React from "react"

const Code = ({ children }) => {
    return (
        <code
            style={{
                display: 'block',
                color: 'black',
                backgroundColor: 'orange',
                width: '700px',
                padding: '10px 5px',
            }}
        >
            <button
                style={{
                    display: 'block',
                    border: 'none',
                    margin: '3px auto',
                    marginRight: '3px',
                    fontSize: '1.5em',
                }}
            >copy</button>
            {children}
        </code>
    )
}

export default Code