import React from "react"



const Test = ({ children }) => {
    return (
        <div
            style={{
                backgroundColor: `green`,
                color: 'red',
            }}
        >
            {children}
        </div>
    )

}

export default Test