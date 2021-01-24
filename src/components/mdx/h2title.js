import React from "react"

const H2title = ({ props }) => {
    return (
        <h2
            style={{
                color: 'red',
                borderBottom: '1px solid black',
                margin: "100px 5px",
            }}
        >
            {props}
        </h2>

    )
}

export default H2title