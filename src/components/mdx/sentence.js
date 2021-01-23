import React from "react"

const P = ({ children }) => {
    return (
        <p
            style={{
                color: 'green',
                margin: "100px 5px",
            }}
        >
            {children}  
        </p>
    )
}

export default P