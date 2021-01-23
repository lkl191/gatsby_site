import React from "react"

const Point = ({ children }) => {
    return (
        <div
         style={{
             margin: "100px 30px",
             backgroundColor: "#022",
             color: "#bee7ff",
             padding: "50px",
         }}
        >
            {children}
        </div>
    )
}

export default Point