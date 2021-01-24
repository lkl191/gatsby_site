import React from "react"

const Code = ({ copycode, langage, files }) => {

    const copy = () => {
        navigator.clipboard.writeText(copycode)
    }

    return (
        <div
            style={{
                border: "1px solid black",
            }}
        >
            <div
                style={{
                    borderBottom: "1px solid gray",
                }}
            >
                {files}
            </div>
            <div>
                {langage}
                <button
                    onClick={copy}
                    style={{
                        textAlign: "right",
                    }}
                >copy</button>
            </div>
            <code
                style={{
                    display: 'block',
                    color: 'black',
                    backgroundColor: 'orange',
                    padding: '10px 5px',
                }}
            >
                {copycode}
            </code>
        </div>
    )
}

export default Code