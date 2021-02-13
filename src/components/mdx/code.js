import React from "react"

const Code = ({ copycode, langage, files }) => {

    const copy = () => {
        navigator.clipboard.writeText(copycode)
    }

    return (
        <div>
            <div>
                {files}
            </div>
            <div>
                {langage}
                <button
                    onClick={copy}
                    >copy</button>
            </div>
            <code>
                {copycode}
            </code>
        </div>
    )
}

export default Code